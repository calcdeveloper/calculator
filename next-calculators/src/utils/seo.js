import { absoluteUrl, SITE_NAME, SITE_URL, SUPPORT_EMAIL } from "@/config/site";

/** Merge page metadata with site-wide defaults and canonical URL. */
export function createPageMetadata({ title, description, path, keywords, openGraph, twitter }) {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: { canonical },
    openGraph: {
      title: openGraph?.title || title,
      description: openGraph?.description || description,
      url: canonical,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_IN",
      ...openGraph,
    },
    twitter: {
      card: "summary_large_image",
      title: twitter?.title || title,
      description: twitter?.description || description,
      ...twitter,
    },
    robots: { index: true, follow: true },
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
