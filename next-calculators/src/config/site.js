/** Central site configuration for SEO, sitemap, and metadata. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://toolswizard.in";

export const SITE_NAME = "ToolsWizard";
export const SITE_DOMAIN = "toolswizard.in";
export const SUPPORT_EMAIL = "support@toolswizard.in";

export const SITE_DESCRIPTION =
  "Free online calculators, generators, PDF tools, converters, and developer utilities. Fast, private, and mobile-friendly.";

/** Google Analytics 4 measurement ID (gtag.js). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "G-FGTS1112ND";

/** Google AdSense publisher client ID. */
export const ADSENSE_CLIENT_ID =
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID || "ca-pub-8426308667100142";

/** Build an absolute URL from a path (e.g. `/tools/generators`). */
export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL.replace(/\/$/, "")}${normalized}`;
}
