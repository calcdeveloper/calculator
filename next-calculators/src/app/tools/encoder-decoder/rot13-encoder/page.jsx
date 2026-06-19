import ROT13EncoderClient from './ROT13EncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free ROT13 Encoder / Decoder - Obfuscate Text Online',
  description:
    'Instantly obfuscate or reveal text using the classic ROT13 Caesar cipher. Perfect for hiding spoilers, puzzles, and hints safely in your browser.',
  path: '/tools/encoder-decoder/rot13-encoder',
  keywords: [
    'ROT13 encoder',
    'ROT13 decoder',
    'Caesar cipher online',
    'hide spoilers',
    'obfuscate text',
    'geocache hint decoder',
    'rotate by 13 places'
  ],
  openGraph: {
    title: 'Free ROT13 Encoder / Decoder - Obfuscate Text Online',
    description:
      'Instantly obfuscate or reveal text using the classic ROT13 Caesar cipher. Perfect for hiding spoilers and puzzles.',
  },
  twitter: {
    title: 'Free ROT13 Encoder / Decoder Online',
    description:
      'Encode and decode ROT13 instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why don't I need a separate Decode button?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because the English alphabet has exactly 26 letters, shifting 13 places forward twice (13 + 13 = 26) perfectly loops back to the start. The exact same algorithm encodes and decodes."
      }
    },
    {
      "@type": "Question",
      "name": "What happens to numbers and punctuation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "ROT13 strictly ignores numbers, punctuation, and spaces. It only shifts standard alphabetical letters (A-Z and a-z)."
      }
    },
    {
      "@type": "Question",
      "name": "Is ROT13 safe for passwords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NO! ROT13 provides absolutely zero cryptographic security. It is purely for trivial obfuscation. Never use it to hide sensitive data like passwords."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "ROT13 Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online ROT13 Encoder tool for instantly obfuscating and revealing text via Caesar cipher.",
  "featureList": [
    "Encode ROT13",
    "Decode ROT13",
    "Preserves punctuation and numbers",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function ROT13Encoder() {
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

      <ROT13EncoderClient />
    </>
  );
}
