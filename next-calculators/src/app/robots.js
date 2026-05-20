import { SITE_DOMAIN, SITE_URL } from "@/config/site";

export const dynamic = "force-static";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    host: SITE_DOMAIN,
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
