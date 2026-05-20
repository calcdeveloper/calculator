import Base64EncoderClient from './Base64EncoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Base64 Encoder - Free Online Text to Base64 Converter',
  description:
    'Convert text or binary data to Base64 format instantly. Free, secure, and private browser-side Base64 encoder. No signup required.',
  path: '/tools/encoder-decoder/base64-encoder',
  keywords: [
    'base64 encoder',
    'text to base64',
    'base64 converter',
    'base64 encode online',
    'free base64 encoder',
    'base64 encoding tool',
    'string to base64',
    'base64 converter free',
  ],
  openGraph: {
    title: 'Base64 Encoder - 100% Private & Free',
    description:
      'Convert text to Base64 format locally in your browser. Fast, secure, and free.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Base64 Encoder",
      "operatingSystem": "Any",
      "applicationCategory": "DeveloperApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "name": "How to Encode Text to Base64",
      "step": [
        { "@type": "HowToStep", "text": "Enter your text or paste data into the input field." },
        { "@type": "HowToStep", "text": "Click the 'Encode to Base64' button." },
        { "@type": "HowToStep", "text": "Copy the Base64 output or download it as a file." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Base64 encoding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Base64 is a binary-to-text encoding scheme that represents binary data in an ASCII string format. It's commonly used to encode data for transmission over media designed to handle text."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data secure when using this Base64 encoder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Our Base64 encoder processes all data entirely in your browser. Your text never leaves your device, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          "name": "Can I encode large files or text?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Base64 encoder can handle large amounts of text and data efficiently. The processing happens locally, so performance depends on your device's capabilities."
          }
        }
      ]
    }
  ]
};

export default function Base64EncoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Base64EncoderClient />
    </>
  );
}
