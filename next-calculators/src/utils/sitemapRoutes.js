import fs from "fs";
import path from "path";
import { calculators } from "./calculatorData";

export function getCalculatorRoutes() {
  const registryDir = path.join(process.cwd(), "src", "registry");
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

/** Discover all `/tools/...` routes from the App Router filesystem. */
export function getToolRoutes() {
  const toolsDir = path.join(process.cwd(), "src", "app", "tools");
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

export function getCategoryRoutes() {
  return [...new Set(calculators.map((calc) => calc.category))]
    .filter(Boolean)
    .map((category) => `/category/${category.toLowerCase()}`);
}

export function getAllPublicRoutes() {
  const staticRoutes = [
    "/",
    "/calculator",
    "/about",
    "/contact",
    "/help",
    "/privacy",
    "/terms",
  ];

  return [
    ...staticRoutes,
    ...getCategoryRoutes(),
    ...getToolRoutes(),
    ...getCalculatorRoutes(),
  ];
}

export function getRoutePriority(route) {
  if (route === "/") return 1;
  if (route === "/calculator") return 0.9;
  if (route.startsWith("/tools/") && route.split("/").length === 3) return 0.85;
  if (route.startsWith("/calculator/")) return 0.8;
  if (route.startsWith("/tools/")) return 0.8;
  if (route.startsWith("/category/")) return 0.75;
  return 0.6;
}

export function getRouteChangeFrequency(route) {
  if (route === "/") return "daily";
  if (route.startsWith("/calculator/") || route.startsWith("/tools/")) {
    return "weekly";
  }
  return "monthly";
}
