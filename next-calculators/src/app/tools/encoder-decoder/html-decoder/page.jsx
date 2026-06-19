import HTMLDecoderClient from './HTMLDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free HTML Decoder - Safely Decode HTML Entities Online',
  description:
    'Instantly decode HTML entities back into readable raw text and source code with our free online HTML Decoder tool.',
  path: '/tools/encoder-decoder/html-decoder',
  keywords: [
    'HTML Decoder',
    'HTML entity decoder',
    'HTML unescape tool',
    'decode special characters HTML',
    'parse HTML entities',
    'decode angle brackets',
    'convert HTML entities to text'
  ],
  openGraph: {
    title: 'Free HTML Decoder - Safely Decode HTML Entities',
    description:
      'Instantly decode HTML entities back into readable raw text and source code with our free online HTML Decoder tool.',
  },
  twitter: {
    title: 'Free HTML Decoder Online',
    description:
      'Decode HTML entities instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HTML decoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HTML decoding (HTML entity unescaping) strictly converts specially encoded HTML entities (like &lt; or &quot;) directly back into their normal format (like < or \") that human beings and backend parsers can safely read."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use an HTML decoder?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use HTML decoding whenever you are inspecting raw database dumps, scraping third-party web pages, or trying to read an XML RSS feed that contains encoded ampersands and angle brackets."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all mathematical decoding algorithms happen entirely within your browser memory sandbox. Your sensitive data is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HTML Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online HTML decoder tool for converting HTML entities back into readable text.",
  "featureList": [
    "Decode HTML entities",
    "Instant conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function HTMLDecoder() {
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

      <HTMLDecoderClient />
    </>
  );
}
