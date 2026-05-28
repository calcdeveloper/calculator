import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, "..");
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://toolswizard.in"
).replace(/\/$/, "");

const registryDir = path.join(projectRoot, "src", "registry");
const toolsDir = path.join(projectRoot, "src", "app", "tools");
const publicDir = path.join(projectRoot, "public");

function escapeXml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getCalculatorRoutes() {
  if (!fs.existsSync(registryDir)) return [];

  return fs.readdirSync(registryDir).flatMap((category) => {
    const categoryPath = path.join(registryDir, category);
    if (!fs.statSync(categoryPath).isDirectory()) return [];

    return fs
      .readdirSync(categoryPath)
      .filter((calculator) =>
        fs.statSync(path.join(categoryPath, calculator)).isDirectory()
      )
      .map((calculator) => `/calculator/${category}/${calculator}`);
  });
}

function getCategoryRoutes() {
  if (!fs.existsSync(registryDir)) return [];

  return fs
    .readdirSync(registryDir)
    .filter((name) => fs.statSync(path.join(registryDir, name)).isDirectory())
    .map((category) => `/calculator/${category}`)
    .sort();
}

function getToolRoutes() {
  if (!fs.existsSync(toolsDir)) return [];

  const routes = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some((e) => e.isFile() && e.name === "page.jsx");

    if (hasPage) {
      const relative = path.relative(toolsDir, dir);
      routes.push(relative ? `/tools/${relative.replace(/\\/g, "/")}` : "/tools");
    }

    for (const entry of entries) {
      if (entry.isDirectory()) {
        walk(path.join(dir, entry.name));
      }
    }
  }

  walk(toolsDir);
  return [...new Set(routes)].sort();
}

function getStaticSiteRoutes() {
  return [
    "/",
    "/calculator",
    "/about",
    "/contact",
    "/help",
    "/privacy",
    "/terms",
    "/blog",
  ];
}

function getRoutePriority(route) {
  const segments = route.split("/").filter(Boolean);

  if (route === "/") return 1;
  if (route === "/calculator") return 0.9;
  if (route.startsWith("/tools/fun-tools/") && segments.length === 3) return 0.8;
  if (route.startsWith("/tools/") && segments.length === 2) return 0.85;
  if (route.startsWith("/calculator/") && segments.length === 2) return 0.75;
  if (route.startsWith("/calculator/") && segments.length === 3) return 0.8;
  if (route.startsWith("/tools/")) return 0.8;
  return 0.6;
}

function getRouteChangeFrequency(route) {
  if (route === "/") return "daily";
  if (route.startsWith("/calculator/") || route.startsWith("/tools/")) {
    return "weekly";
  }
  return "monthly";
}

function buildUrlset(routes) {
  const lastmod = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${escapeXml(`${siteUrl}${route}`)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${getRouteChangeFrequency(route)}</changefreq>
    <priority>${getRoutePriority(route)}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
}

const allToolRoutes = getToolRoutes();
const sitemapGroups = {
  "sitemap-calculators.xml": [
    ...getStaticSiteRoutes(),
    ...getCategoryRoutes(),
    ...getCalculatorRoutes(),
  ],
  "sitemap-tools.xml": allToolRoutes.filter(
    (route) => !route.startsWith("/tools/fun-tools")
  ),
  "sitemap-fun-tools.xml": allToolRoutes.filter((route) =>
    route.startsWith("/tools/fun-tools")
  ),
};

fs.mkdirSync(publicDir, { recursive: true });

for (const [filename, routes] of Object.entries(sitemapGroups)) {
  const sortedRoutes = [...new Set(routes)].sort();
  fs.writeFileSync(path.join(publicDir, filename), buildUrlset(sortedRoutes), "utf8");
  console.log(`Wrote ${filename} (${sortedRoutes.length} URLs)`);
}

const indexLastmod = new Date().toISOString();
const childSitemaps = Object.keys(sitemapGroups).map(
  (filename) => `${siteUrl}/${filename}`
);

const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${childSitemaps
  .map(
    (loc) => `  <sitemap>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${indexLastmod}</lastmod>
  </sitemap>`
  )
  .join("\n")}
</sitemapindex>
`;

fs.writeFileSync(path.join(publicDir, "sitemap.xml"), indexXml, "utf8");
console.log(`Wrote sitemap.xml index (${childSitemaps.length} child sitemaps)`);
