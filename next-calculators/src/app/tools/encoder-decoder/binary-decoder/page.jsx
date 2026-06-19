import BinaryDecoderClient from './BinaryDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Binary Decoder - Convert Binary to Text Online',
  description:
    'Instantly convert raw Base-2 binary machine strings (0s and 1s) perfectly back into readable human text and UTF-8 emojis entirely in your browser.',
  path: '/tools/encoder-decoder/binary-decoder',
  keywords: [
    'Binary decoder',
    'binary to text',
    'binary translator',
    'decode binary to string',
    'base2 decoder',
    'binary to ascii'
  ],
  openGraph: {
    title: 'Free Binary Decoder - Convert Binary to Text Online',
    description:
      'Instantly convert raw Base-2 binary machine strings perfectly back into readable human text entirely in your browser.',
  },
  twitter: {
    title: 'Free Binary Decoder Online',
    description:
      'Decode Binary to text instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Binary decoding?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Binary decoding is the mathematical process of converting unreadable computer Base-2 strings (like 01000001) completely back into standard human text characters (like the letter 'A')."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to manually remove spaces from my Binary string?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No! Our highly advanced decoding engine automatically strips out all spaces and formatting before mathematically decoding the core data."
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
  "name": "Binary Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Binary Decoder tool for converting Base2 machine code strings back to text.",
  "featureList": [
    "Decode Binary to text",
    "Auto-removes spaces",
    "UTF-8 Emoji support",
    "Instant real-time conversion",
    "Copy to clipboard",
    "Client-side processing"
  ]
};

export default function BinaryDecoder() {
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

      <BinaryDecoderClient />
    </>
  );
}
