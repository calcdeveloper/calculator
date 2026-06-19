import TextCleanerClient from './TextCleanerClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Text Cleaner - Sanitize Text & Remove HTML Tags | ToolsWizard',
  description:
    'Instantly clean and sanitize your text. Strip out HTML tags, remove URLs, delete email addresses, and remove special characters securely in your browser.',
  path: '/tools/text-tools/text-cleaner',
  keywords: [
    'text cleaner',
    'sanitize text',
    'remove html tags',
    'strip urls',
    'remove special characters',
    'clean data online',
    'remove punctuation',
  ],
  openGraph: {
    title: 'Free Text Cleaner - Sanitize Text & Remove HTML Tags',
    description:
      'Scrub your messy data clean. Remove HTML tags, links, emails, and special characters instantly and securely.',
  },
  twitter: {
    title: 'Text Cleaner & Data Sanitizer Online',
    description:
      'Free, secure, and private tool to clean messy text by stripping unwanted HTML, links, and characters.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I remove HTML tags from text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Paste your text into the Text Cleaner and select the 'Remove HTML Tags' option. The tool will automatically strip out all markup while preserving your actual text."
      }
    },
    {
      "@type": "Question",
      "name": "Can I remove all email addresses from a list?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, by checking the 'Remove Email Addresses' option, the tool will scan your text and delete any string formatted like a standard email, which is perfect for anonymizing data."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text uploaded to a server for cleaning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The Text Cleaner operates entirely within your local web browser. Your text is never uploaded, ensuring 100% data privacy."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Text Cleaner",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to sanitize text by removing HTML tags, URLs, emails, and special characters.",
  "featureList": [
    "Remove HTML Tags and Markup",
    "Remove URLs and web addresses",
    "Remove Email Addresses",
    "Remove all numbers (0-9)",
    "Remove standard punctuation",
    "Remove special characters",
    "Instant real-time sanitization",
    "100% browser-based privacy"
  ]
};

export default function TextCleanerPage() {
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
      
      <TextCleanerClient />
    </>
  );
}
