import { absoluteUrl, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/config/site";

/**
 * Clean redundant trailing brand suffixes so the root layout template
 * (`%s | ToolsWizard`) creates exactly one clean branding per page.
 */
function cleanSeoTitle(title) {
  if (!title || typeof title !== "string") return title;
  return title
    .replace(/\s*\|\s*ToolsWizard\s*$/i, "")
    .replace(/\s*-\s*ToolsWizard\s*$/i, "")
    .replace(/\s*\|\s*Tools\s*Wizard\s*$/i, "")
    .trim();
}

/** Merge page metadata with site-wide defaults and canonical URL. */
export function createPageMetadata({
  title,
  description,
  path = "/",
  keywords,
  openGraph,
  twitter,
  robots,
}) {
  const canonical = absoluteUrl(path);
  const cleanedTitle = cleanSeoTitle(title);

  // For the homepage, use absolute title to prevent template duplication
  const resolvedTitle =
    path === "/" || path === "" ? { absolute: title } : cleanedTitle;

  return {
    title: resolvedTitle,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: openGraph?.title ? cleanSeoTitle(openGraph.title) : cleanedTitle,
      description: openGraph?.description || description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: twitter?.title ? cleanSeoTitle(twitter.title) : cleanedTitle,
      description: twitter?.description || description,
      ...twitter,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
      ...robots,
    },
  };
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  email: SUPPORT_EMAIL,
  logo: absoluteUrl("/logo.png"),
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/calculator?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

/**
 * Generate Schema.org WebApplication / SoftwareApplication JSON-LD object.
 */
export function createSoftwareAppSchema({
  name,
  description,
  path,
  category = "UtilityApplication",
  operatingSystem = "Web browser",
  offers = { "@type": "Offer", price: "0", priceCurrency: "USD" },
  featureList,
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name,
    description,
    url: path ? absoluteUrl(path) : undefined,
    applicationCategory: category,
    operatingSystem,
    offers,
  };
  if (featureList && Array.isArray(featureList) && featureList.length > 0) {
    schema.featureList = featureList;
  }
  return schema;
}

/**
 * Generate Schema.org BreadcrumbList JSON-LD object.
 * @param {Array<{ name: string, path: string }>} items
 */
export function createBreadcrumbSchema(items = []) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/**
 * Generate Schema.org FAQPage JSON-LD object.
 * @param {Array<{ q?: string, question?: string, a?: string, answer?: string }>} faqs
 */
export function createFaqSchema(faqs = []) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q || faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a || faq.answer,
      },
    })),
  };
}
