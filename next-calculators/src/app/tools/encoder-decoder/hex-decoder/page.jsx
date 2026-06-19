import HexDecoderClient from './HexDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Hexadecimal Decoder - Convert Hex to Text Online',
  description:
    'Instantly convert raw Base16 hexadecimal machine strings perfectly back into readable human text and UTF-8 emojis entirely in your browser.',
  path: '/tools/encoder-decoder/hex-decoder',
  keywords: [
    'Hex decoder',
    'hex to text',
    'hexadecimal converter',
    'decode hex to string',
    'base16 decoder',
    'hex code translator'
  ],
  openGraph: {
    title: 'Free Hexadecimal Decoder - Convert Hex to Text Online',
    description:
      'Instantly convert raw Base16 hexadecimal machine strings perfectly back into readable human text and UTF-8 emojis entirely in your browser.',
  },
  twitter: {
    title: 'Free Hex Decoder Online',
    description:
      'Decode Hex to text instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do I need to manually remove spaces from my Hex string?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! Our highly intelligent decoder automatically strips out all spaces, commas, colons, and '0x' prefixes before mathematically decoding the core data."
      }
    },
    {
      "@type": "Question",
      "name": "Will this decoder work with emojis and foreign characters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our decoding engine fully supports the modern UTF-8 Unicode standard, seamlessly merging multi-byte hexadecimal pairs to flawlessly reconstruct emojis and complex characters."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to paste sensitive data here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All mathematical decoding happens entirely within your local computer's web browser memory sandbox. Your sensitive data is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Hexadecimal Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Hexadecimal Decoder tool for converting Base16 hex strings back to text.",
  "featureList": [
    "Decode Hexadecimal to text",
    "Auto-removes spaces and colons",
    "UTF-8 Emoji support",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function HexDecoder() {
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

      <HexDecoderClient />
    </>
  );
}
