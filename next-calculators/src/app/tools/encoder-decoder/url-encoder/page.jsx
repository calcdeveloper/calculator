import URLEncoderClient from './URLEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free URL Encoder/Decoder Online | Encode & Decode URLs Instantly | ToolsWizard',
  description:
    'Encode and decode URLs instantly. Free online URL encoder/decoder tool for developers. Convert special characters to URL-safe format and back.',
  path: '/tools/encoder-decoder/url-encoder',
  keywords: [
    'URL encoder',
    'URL decoder',
    'encode URL',
    'decode URL',
    'URL encoding',
    'URL decoding',
    'percent encoding',
    'URL safe',
    'online URL encoder',
    'free URL tool',
    'URL converter',
    'URL escape',
  ],
  openGraph: {
    title: 'Free URL Encoder/Decoder Online - Encode & Decode URLs Instantly',
    description:
      'Encode and decode URLs instantly. Perfect for developers and web professionals.',
  },
  twitter: {
    title: 'Free URL Encoder/Decoder Online',
    description:
      'Encode and decode URLs instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is URL encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "URL encoding (also known as percent encoding) converts special characters into a format that can be safely transmitted over the internet. Characters like spaces, ampersands, and other symbols are replaced with %XX format."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use URL encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use URL encoding when passing data in URLs, especially in query parameters. It ensures special characters don't break the URL structure or cause parsing errors."
      }
    },
    {
      "@type": "Question",
      "name": "Is my data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all encoding/decoding happens entirely in your browser. Your URLs are never sent to our servers, ensuring complete privacy and security."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "URL Encoder/Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online URL encoder/decoder tool for converting special characters to URL-safe format and back.",
  "featureList": [
    "Encode URLs",
    "Decode URLs",
    "Instant conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function URLEncoder() {
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
      
      <URLEncoderClient />
    </>
  );
}
