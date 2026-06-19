import SlugGeneratorClient from './SlugGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free SEO Slug Generator - Create Clean URLs | ToolsWizard',
  description:
    'Instantly generate SEO-friendly, clean URL slugs from any text. Remove special characters, lower case letters, and replace spaces with hyphens automatically.',
  path: '/tools/text-tools/slug-generator',
  keywords: [
    'slug generator',
    'url slug generator',
    'seo friendly url',
    'create url slug',
    'slug creator',
    'string to slug',
    'url formatter',
    'seo slug maker',
  ],
  openGraph: {
    title: 'Free SEO Slug Generator - Create Clean URLs',
    description:
      'Convert titles into SEO-friendly URL slugs instantly. Hyphenate words and remove special characters automatically.',
  },
  twitter: {
    title: 'URL Slug Generator Online',
    description:
      'Create perfect SEO-friendly URL slugs from any text string. Free and secure.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a URL slug?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A URL slug is the exact part of a URL that identifies a specific page on a website in an easy-to-read form, like 'the-ultimate-guide' in 'example.com/the-ultimate-guide'."
      }
    },
    {
      "@type": "Question",
      "name": "Should I use hyphens or underscores for SEO slugs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Google recommends using hyphens (-) rather than underscores (_) in URLs. Hyphens are treated as word separators, whereas underscores are treated as word joiners."
      }
    },
    {
      "@type": "Question",
      "name": "How does this slug generator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It instantly converts your text to lowercase, removes all accents and special characters, and replaces spaces with hyphens, giving you a clean, web-ready URL."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Slug Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to generate SEO-friendly URL slugs from any text string.",
  "featureList": [
    "Instant real-time generation",
    "Removes accents and special characters",
    "Option for hyphen or underscore separators",
    "100% browser-based privacy",
    "Copy to clipboard functionality"
  ]
};

export default function SlugGeneratorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <SlugGeneratorClient />
    </>
  );
}
