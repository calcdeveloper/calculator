import fs from "fs";
import path from "path";
const registryDir = path.join(process.cwd(), "src", "registry");
const toolsDir = path.join(process.cwd(), "src", "app", "tools");

export function getCalculatorRoutes() {
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

export function getCategoryRoutes() {
  if (!fs.existsSync(registryDir)) return [];

  return fs
    .readdirSync(registryDir)
    .filter((name) => fs.statSync(path.join(registryDir, name)).isDirectory())
    .map((category) => `/calculator/${category}`)
    .sort();
}

/** Discover all `/tools/...` routes from the App Router filesystem. */
export function getToolRoutes() {
  if (!fs.existsSync(toolsDir)) return [];

  const routes = [];

  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const hasPage = entries.some(
      (e) => e.isFile() && e.name === "page.jsx"
    );

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

export function getStaticSiteRoutes() {
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

/** All calculator pages plus site hub/static pages. */
export function getCalculatorSitemapRoutes() {
  return [
    ...getStaticSiteRoutes(),
    ...getCategoryRoutes(),
    ...getCalculatorRoutes(),
  ];
}

/** All tool routes except fun-tools. */
export function getToolsSitemapRoutes() {
  return getToolRoutes().filter((route) => !route.startsWith("/tools/fun-tools"));
}

/** Fun-tools category hub and individual tools only. */
export function getFunToolsSitemapRoutes() {
  return getToolRoutes().filter((route) => route.startsWith("/tools/fun-tools"));
}

export function getRoutePriority(route) {
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

export function getRouteChangeFrequency(route) {
  if (route === "/") return "daily";
  if (route.startsWith("/calculator/") || route.startsWith("/tools/")) {
    return "weekly";
  }
  return "monthly";
}
