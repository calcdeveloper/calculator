import UnicodeEncoderClient from './UnicodeEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Unicode Encoder - Convert Text to Unicode Online',
  description:
    'Instantly safely convert raw text, emojis, and complex foreign characters into strict \\uXXXX Unicode escape sequences entirely in your browser.',
  path: '/tools/encoder-decoder/unicode-encoder',
  keywords: [
    'Unicode encoder',
    'text to unicode',
    'unicode escape sequences',
    'convert text to unicode',
    'javascript unicode encoder',
    'encode emoji to unicode'
  ],
  openGraph: {
    title: 'Free Unicode Encoder - Convert Text to Unicode Online',
    description:
      'Instantly safely convert raw text, emojis, and complex foreign characters into strict Unicode escape sequences.',
  },
  twitter: {
    title: 'Free Unicode Encoder Online',
    description:
      'Encode text to Unicode instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Unicode encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Unicode encoding is the rigorous mathematical process of explicitly converting normal text characters or emojis into their strict underlying hexadecimal identifier (like \\u0041) so strict computer systems don't corrupt the text."
      }
    },
    {
      "@type": "Question",
      "name": "Why do emojis look strange when Unicode encoded?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because emojis are outside the basic 4-digit hexadecimal range, they use 'Surrogate Pairs', which are two separate Unicode escape sequences placed next to each other to define a single visual emoji."
      }
    },
    {
      "@type": "Question",
      "name": "Is my proprietary text secure here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All encoding algorithms happen entirely within your local web browser. Your text is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Unicode Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Unicode Encoder tool for converting text to Unicode escape sequences.",
  "featureList": [
    "Encode text to Unicode",
    "Emoji support",
    "Surrogate pair support",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function UnicodeEncoder() {
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

      <UnicodeEncoderClient />
    </>
  );
}
