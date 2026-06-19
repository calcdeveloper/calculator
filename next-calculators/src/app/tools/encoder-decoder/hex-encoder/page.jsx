import HexEncoderClient from './HexEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Hexadecimal Encoder - Convert Text to Hex Online',
  description:
    'Instantly securely convert standard text, code, and emojis into compact Base16 hexadecimal machine strings entirely in your browser.',
  path: '/tools/encoder-decoder/hex-encoder',
  keywords: [
    'Hex encoder',
    'text to hex',
    'hexadecimal converter',
    'encode string to hex',
    'base16 encoder',
    'hex code generator'
  ],
  openGraph: {
    title: 'Free Hexadecimal Encoder - Convert Text to Hex Online',
    description:
      'Instantly safely convert standard text, code, and emojis into compact Base16 hexadecimal machine strings entirely in your browser.',
  },
  twitter: {
    title: 'Free Hex Encoder Online',
    description:
      'Encode text to Hex instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Hexadecimal encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Hexadecimal encoding (Base16) is the mathematical process of converting normal human text into a highly compact computer format that uses exactly 16 characters (numbers 0-9 and letters A-F) to safely represent binary data."
      }
    },
    {
      "@type": "Question",
      "name": "Why use Hex instead of Binary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Binary requires 8 digits (e.g. 01000001) for a single letter, which is messy. Hexadecimal mathematically compresses those 8 bits into just 2 clean characters (e.g. 41), reducing visual clutter."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to encode sensitive data here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All mathematical encoding algorithms happen entirely and strictly within your local computer's web browser. Your sensitive text is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hexadecimal Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Hexadecimal Encoder tool for converting text to Base16 hex strings.",
  "featureList": [
    "Encode text to Hexadecimal",
    "Optional space formatting",
    "Emoji and UTF-8 support",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function HexEncoder() {
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

      <HexEncoderClient />
    </>
  );
}
