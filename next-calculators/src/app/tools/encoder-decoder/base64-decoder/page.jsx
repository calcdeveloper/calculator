import Base64DecoderClient from './Base64DecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Base64 Decoder - Free Online Base64 to Text Converter',
  description:
    'Decode Base64 strings to original text instantly. Free, secure, and private browser-side Base64 decoder. No signup required.',
  path: '/tools/encoder-decoder/base64-decoder',
  keywords: [
    'base64 decoder',
    'base64 to text',
    'base64 decode online',
    'free base64 decoder',
    'base64 converter',
    'base64 decoding tool',
    'decode base64 string',
    'base64 decoder free',
  ],
  openGraph: {
    title: 'Base64 Decoder - 100% Private & Free',
    description:
      'Decode Base64 strings to text locally in your browser. Fast, secure, and free.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Base64 Decoder",
      "operatingSystem": "Any",
      "applicationCategory": "DeveloperApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "name": "How to Decode Base64 to Text",
      "step": [
        { "@type": "HowToStep", "text": "Paste your Base64 string into the input field." },
        { "@type": "HowToStep", "text": "Click the 'Decode to Text' button." },
        { "@type": "HowToStep", "text": "Copy the decoded text or download it as a file." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Base64 decoding?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Base64 decoding is the reverse process of Base64 encoding. It converts Base64-encoded ASCII strings back to their original binary or text format."
          }
        },
        {
          "@type": "Question",
          "name": "Is my data secure when using this Base64 decoder?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Our Base64 decoder processes all data entirely in your browser. Your Base64 strings never leave your device, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          "name": "Can I decode large Base64 strings?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our Base64 decoder can handle large amounts of Base64 data efficiently. The processing happens locally, so performance depends on your device's capabilities."
          }
        }
      ]
    }
  ]
};

export default function Base64DecoderPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Base64DecoderClient />
    </>
  );
}
