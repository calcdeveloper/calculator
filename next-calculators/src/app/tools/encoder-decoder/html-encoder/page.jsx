import HTMLEncoderClient from './HTMLEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free HTML Encoder - Safely Encode HTML Entities Online',
  description:
    'Instantly encode raw text and HTML source code into safe HTML entities with our free online HTML Encoder. Prevent XSS attacks and ensure proper display.',
  path: '/tools/encoder-decoder/html-encoder',
  keywords: [
    'HTML Encoder',
    'HTML entity encoder',
    'HTML escape tool',
    'encode special characters HTML',
    'prevent XSS',
    'safe HTML characters',
    'encode angle brackets',
    'convert text to HTML entities'
  ],
  openGraph: {
    title: 'Free HTML Encoder - Safely Encode HTML Entities',
    description:
      'Instantly encode raw text and HTML source code into safe HTML entities with our free online HTML Encoder.',
  },
  twitter: {
    title: 'Free HTML Encoder Online',
    description:
      'Encode HTML entities instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HTML encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HTML encoding converts dangerous, structurally reserved characters (like < and >) directly into perfectly safe text codes (like &lt; and &gt;) so the web browser doesn't mistakenly execute them as code."
      }
    },
    {
      "@type": "Question",
      "name": "Why does XSS happen without HTML encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If a developer fails to encode user input, hackers can type raw JavaScript into an input field. When the server reflects it, other users' browsers execute the malicious code. Strict HTML encoding prevents this."
      }
    },
    {
      "@type": "Question",
      "name": "Is my proprietary source code secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all encoding happens entirely in your browser memory. Your source code is never sent to our servers, ensuring absolute privacy."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HTML Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online HTML encoder tool for converting unsafe characters to HTML entities.",
  "featureList": [
    "Encode HTML entities",
    "Instant conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function HTMLEncoder() {
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

      <HTMLEncoderClient />
    </>
  );
}
