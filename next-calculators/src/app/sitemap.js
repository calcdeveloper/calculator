import fs from "fs";
import path from "path";
import { calculators } from "../utils/calculatorData";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://calcpilot.com";

export const dynamic = "force-static";

function getCalculatorRoutes() {
  const registryDir = path.join(process.cwd(), "src", "registry");
  if (!fs.existsSync(registryDir)) return [];

  return fs
    .readdirSync(registryDir)
    .flatMap((category) => {
      const categoryPath = path.join(registryDir, category);
      if (!fs.statSync(categoryPath).isDirectory()) return [];

      return fs
        .readdirSync(categoryPath)
        .filter((calculator) => fs.statSync(path.join(categoryPath, calculator)).isDirectory())
        .map((calculator) => `/calculator/${category}/${calculator}`);
    });
}

export default function sitemap() {
  const categoryRoutes = [...new Set(calculators.map((calc) => calc.category))]
    .filter(Boolean)
    .map((category) => `/category/${category.toLowerCase()}`);

  const staticRoutes = ["/", "/about", "/contact", "/help", "/privacy", "/terms"];
  const routes = [...staticRoutes, ...categoryRoutes, ...getCalculatorRoutes()];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1 : route.startsWith("/calculator/") ? 0.8 : 0.7,
  }));
}
