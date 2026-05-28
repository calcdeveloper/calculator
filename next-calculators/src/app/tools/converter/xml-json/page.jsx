import XMLToJSONClient from './XMLToJSONClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free XML to JSON Converter Online | Convert XML to JSON Instantly | ToolsWizard',
  description:
    'Convert XML to JSON instantly. Free online XML to JSON converter tool for developers. Transform XML data into JSON format with proper formatting.',
  path: '/tools/converter/xml-json',
  keywords: [
    'XML to JSON converter',
    'convert XML to JSON',
    'XML JSON converter',
    'online XML converter',
    'free XML tool',
    'XML parser',
    'JSON generator',
    'data format converter',
    'XML transformation',
    'developer tool',
  ],
  openGraph: {
    title: 'Free XML to JSON Converter Online - Convert XML to JSON Instantly',
    description:
      'Convert XML to JSON instantly. Perfect for developers and data transformation.',
  },
  twitter: {
    title: 'Free XML to JSON Converter Online',
    description:
      'Convert XML to JSON instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert XML to JSON?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply paste your XML code into the input field and click the Convert button. Our tool will instantly transform it into JSON format with proper structure and formatting."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all conversion happens entirely in your browser. Your XML data is never sent to our servers, ensuring complete privacy and security."
      }
    },
    {
      "@type": "Question",
      "name": "Can I convert large XML files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, there are no file size limits. You can convert as much XML data as needed, making it suitable for large datasets and configurations."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "XML to JSON Converter",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online XML to JSON converter tool for transforming XML data into JSON format instantly.",
  "featureList": [
    "Convert XML to JSON",
    "Proper formatting",
    "Instant conversion",
    "Copy to clipboard",
    "Download JSON",
    "No file size limits",
    "Client-side processing"
  ]
};

export default function XMLToJSON() {
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
      
      <XMLToJSONClient />
    </>
  );
}
