import TextSorterClient from './TextSorterClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Text Sorter - Alphabetize Lists Online | ToolsWizard',
  description:
    'Instantly alphabetize, organize, and sort your text lists. Sort A-Z, Z-A, by text length, or randomize. 100% free and secure.',
  path: '/tools/text-tools/text-sorter',
  keywords: [
    'text sorter',
    'alphabetize list',
    'sort text online',
    'order text alphabetically',
    'sort by length',
    'randomize list',
    'list organizer',
  ],
  openGraph: {
    title: 'Free Text Sorter - Alphabetize Lists Online',
    description:
      'Organize your chaotic lists instantly. Sort alphabetically, by length, or randomize in seconds.',
  },
  twitter: {
    title: 'Text Sorter & List Organizer',
    description:
      'Free, secure, and instant tool to sort, alphabetize, and organize your text lists.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I alphabetize a list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply paste your list into the input box, ensuring each item is on a new line, and click the 'A to Z' button. The sorted list will appear instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Can I sort text by length instead of alphabetically?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our tool provides 'Short to Long' and 'Long to Short' sorting options that organize your text strictly based on character count."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data safe when using this sorter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely safe. The sorting process happens entirely in your web browser. No data is ever uploaded, saved, or transmitted to any external server."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Text Sorter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to sort, alphabetize, and organize lists of text.",
  "featureList": [
    "Sort Alphabetically (A to Z and Z to A)",
    "Sort by string length (Shortest or Longest first)",
    "Randomize / Shuffle list",
    "Option to automatically remove blank lines",
    "One-click copy and download",
    "100% browser-based privacy"
  ]
};

export default function TextSorterPage() {
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
      
      <TextSorterClient />
    </>
  );
}
