import { SITE_URL } from "@/config/site";
import {
  getAllPublicRoutes,
  getRouteChangeFrequency,
  getRoutePriority,
} from "@/utils/sitemapRoutes";

export const dynamic = "force-static";

export default function sitemap() {
  const lastModified = new Date();
  const routes = getAllPublicRoutes();

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: getRouteChangeFrequency(route),
    priority: getRoutePriority(route),
  }));
}
