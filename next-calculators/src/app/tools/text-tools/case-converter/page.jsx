import CaseConverterClient from './CaseConverterClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Case Converter Online - Convert Text Case Instantly | ToolsWizard',
  description:
    'Convert text to uppercase, lowercase, title case, sentence case, and more. Free online case converter tool for text formatting. No registration required.',
  path: '/tools/text-tools/case-converter',
  keywords: [
    'case converter',
    'text case converter',
    'uppercase converter',
    'lowercase converter',
    'title case converter',
    'sentence case converter',
    'capitalize text',
    'text formatting',
    'online case converter',
    'free text tool',
    'convert text case',
    'text case changer',
  ],
  openGraph: {
    title: 'Free Case Converter Online - Convert Text Case Instantly',
    description:
      'Convert text to uppercase, lowercase, title case, and more. Free and instant.',
  },
  twitter: {
    title: 'Free Case Converter Online',
    description:
      'Convert text to uppercase, lowercase, title case, and more. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What case conversions are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We support uppercase, lowercase, title case, sentence case, camel case, snake case, kebab case, and toggle case conversions."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all text processing happens entirely in your browser. Your text is never sent to our servers, ensuring complete privacy."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert large blocks of text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there are no character limits. You can convert as much text as you need, making it suitable for documents, code, and large text blocks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between title case and sentence case?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Title case capitalizes the first letter of each word, while sentence case only capitalizes the first letter of each sentence."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Case Converter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online case converter tool for converting text to uppercase, lowercase, title case, sentence case, and more.",
  "featureList": [
    "Convert to uppercase",
    "Convert to lowercase",
    "Title case conversion",
    "Sentence case conversion",
    "Camel case conversion",
    "Snake case conversion",
    "Kebab case conversion",
    "Toggle case",
    "Copy to clipboard",
    "No character limits"
  ]
};

export default function CaseConverter() {
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
      
      <CaseConverterClient />
    </>
  );
}
