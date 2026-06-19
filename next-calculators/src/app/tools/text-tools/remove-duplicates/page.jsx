import RemoveDuplicatesClient from './RemoveDuplicatesClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Remove Duplicate Lines Tool - Clean Text Instantly | ToolsWizard',
  description:
    'Remove duplicate lines from text or lists instantly. Free online deduplication tool. Sort, clean, and remove empty lines. No registration required.',
  path: '/tools/text-tools/remove-duplicates',
  keywords: [
    'remove duplicate lines',
    'remove duplicates online',
    'deduplicate text',
    'clean list',
    'remove empty lines',
    'text deduplication',
    'delete duplicate rows',
    'find and remove duplicates',
    'free text tool',
  ],
  openGraph: {
    title: 'Free Remove Duplicate Lines Tool',
    description:
      'Remove duplicate lines from your text or lists instantly. Free, fast, and secure.',
  },
  twitter: {
    title: 'Remove Duplicate Lines Tool',
    description:
      'Instantly deduplicate text and lists. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the Remove Duplicate Lines tool work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool reads your text line by line and uses advanced algorithms to identify and keep only the first instance of any line. Subsequent identical lines are automatically removed, leaving you with a clean, unique list."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, completely secure. All text processing happens entirely within your web browser. Your text is never sent to our servers or stored anywhere, ensuring 100% privacy."
      }
    },
    {
      "@type": "Question",
      "name": "Can I remove empty lines as well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! We provide an option to simultaneously strip out all empty lines while deduplicating, ensuring your final list is dense and clean."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a limit to how many lines I can process?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are no hard limits. The tool can process hundreds of thousands of lines almost instantaneously, limited only by your device's browser memory."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Remove Duplicate Lines Tool",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to quickly remove duplicate lines and empty lines from any text or list.",
  "featureList": [
    "Instantly remove duplicate lines",
    "Option to remove empty lines",
    "Track original vs unique line counts",
    "Copy to clipboard",
    "Download as TXT file",
    "No character or line limits",
    "100% browser-based privacy"
  ]
};

export default function RemoveDuplicatesPage() {
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
      
      <RemoveDuplicatesClient />
    </>
  );
}
