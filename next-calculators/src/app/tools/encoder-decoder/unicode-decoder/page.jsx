import UnicodeDecoderClient from './UnicodeDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Unicode Decoder - Convert Unicode to Text Online',
  description:
    'Instantly convert unreadable \\uXXXX Unicode escape sequences back into perfectly readable human text and emojis entirely in your browser.',
  path: '/tools/encoder-decoder/unicode-decoder',
  keywords: [
    'Unicode decoder',
    'unicode to text',
    'decode unicode escape sequences',
    'convert unicode to string',
    'javascript unicode decoder',
    'unescape unicode'
  ],
  openGraph: {
    title: 'Free Unicode Decoder - Convert Unicode to Text Online',
    description:
      'Instantly convert unreadable Unicode escape sequences back into perfectly readable human text and emojis entirely in your browser.',
  },
  twitter: {
    title: 'Free Unicode Decoder Online',
    description:
      'Decode Unicode to text instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Unicode decoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unicode decoding is the mathematical process of converting unreadable computer identification numbers (like \\u0041) back into their standard, visually readable human text characters (like the letter 'A')."
      }
    },
    {
      "@type": "Question",
      "name": "Will this tool decode emojis correctly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our highly advanced decoder instantly recognizes and mathematically merges complex surrogate pairs perfectly, restoring the full visual emoji completely without error."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to paste server logs into this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All mathematical decoding algorithms happen entirely within your local web browser. Your sensitive server logs are completely never sent to our remote servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Unicode Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Unicode Decoder tool for converting Unicode escape sequences back to text.",
  "featureList": [
    "Decode Unicode to text",
    "Emoji surrogate pair decoding",
    "Mixed text decoding",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function UnicodeDecoder() {
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

      <UnicodeDecoderClient />
    </>
  );
}
