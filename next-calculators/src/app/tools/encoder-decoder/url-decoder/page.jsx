import URLDecoderClient from './URLDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free URL Decoder - Safely Decode URLs Online',
  description:
    'Easily decode your encoded URLs with our free online URL Decoder tool. Safely convert percent-encoded characters back into readable format instantly.',
  path: '/tools/encoder-decoder/url-decoder',
  keywords: [
    'URL Decoder',
    'URL decoder online',
    'percent-decoding converter',
    'URI decode',
    'URL unescape',
    'decode query string',
    'decode URL parameters',
    'web address decoder'
  ],
  openGraph: {
    title: 'Free URL Decoder - Safely Decode URLs Online',
    description:
      'Easily decode your encoded URLs with our free online URL Decoder tool. Safely convert percent-encoded characters back into readable format instantly.',
  },
  twitter: {
    title: 'Free URL Decoder Online',
    description:
      'Decode URLs instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is URL decoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "URL decoding strictly converts specially encoded hexadecimal characters (like %20) directly back into their normal format (like empty spaces) that human beings can completely and safely read and understand."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use URL decoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use URL decoding whenever you are inspecting web server logs, debugging complex API query parameters, or trying to read an affiliate tracking link that looks like a mess of percent signs."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all decoding happens entirely in your browser. Your URLs are never sent to our servers, ensuring complete privacy and security."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "URL Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online URL decoder tool for converting URL-safe formats back to readable characters.",
  "featureList": [
    "Decode URLs",
    "Instant conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function URLDecoder() {
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

      <URLDecoderClient />
    </>
  );
}
