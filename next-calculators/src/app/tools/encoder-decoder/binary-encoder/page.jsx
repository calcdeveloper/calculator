import BinaryEncoderClient from './BinaryEncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Binary Encoder - Convert Text to Binary Online',
  description:
    'Instantly securely convert standard text, code, and emojis into strictly formatted 8-bit binary machine code entirely in your browser.',
  path: '/tools/encoder-decoder/binary-encoder',
  keywords: [
    'Binary encoder',
    'text to binary',
    'binary code generator',
    'encode string to binary',
    'base2 encoder',
    'ascii to binary'
  ],
  openGraph: {
    title: 'Free Binary Encoder - Convert Text to Binary Online',
    description:
      'Instantly securely convert standard text, code, and emojis into strictly formatted 8-bit binary machine code entirely in your browser.',
  },
  twitter: {
    title: 'Free Binary Encoder Online',
    description:
      'Encode text to Binary instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Binary encoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Binary encoding is the rigorous mathematical process of explicitly translating normal human text completely into the computer's absolute native language, strictly using only the numbers 0 and 1."
      }
    },
    {
      "@type": "Question",
      "name": "Does Binary encoding support emojis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Our highly advanced encoder natively supports UTF-8, accurately translating complex multi-byte emojis into perfectly structured 8-bit binary blocks."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data safe here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All mathematical encoding algorithms happen entirely and strictly within your local computer's web browser. Your text is never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Binary Encoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Binary Encoder tool for converting text to Base2 machine code strings.",
  "featureList": [
    "Encode text to Binary",
    "Optional 8-bit space formatting",
    "UTF-8 Emoji support",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function BinaryEncoder() {
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

      <BinaryEncoderClient />
    </>
  );
}
