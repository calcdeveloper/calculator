import MD5HashGeneratorClient from './MD5HashGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free MD5 Hash Generator - Create MD5 Checksums Online',
  description:
    'Instantly generate cryptographic MD5 hashes from any text. Blazing fast, client-side browser tool for creating unique database keys and checksums.',
  path: '/tools/encoder-decoder/md5-hash-generator',
  keywords: [
    'MD5 hash generator',
    'create MD5 checksum',
    'MD5 calculator online',
    'generate MD5 hash',
    'text to MD5',
    'cryptographic hash tool',
    'MD5 encryption generator'
  ],
  openGraph: {
    title: 'Free MD5 Hash Generator - Create MD5 Checksums',
    description:
      'Instantly generate cryptographic MD5 hashes from any text. Blazing fast, client-side browser tool for creating unique database keys and checksums.',
  },
  twitter: {
    title: 'Free MD5 Hash Generator Online',
    description:
      'Generate MD5 hashes instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I decrypt an MD5 hash back into text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. MD5 is a fundamentally one-way cryptographic hash function, not encryption. It is mathematically impossible to decrypt an MD5 hash back into its original text."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use MD5 for passwords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NO! You must absolutely never use MD5 for storing passwords. It is deeply vulnerable to brute-force attacks and collisions. Always explicitly use modern algorithms like strictly salted Bcrypt."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data secure when using this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All hashing happens entirely and strictly within your local computer's web browser using native JavaScript. Your text is never transmitted to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MD5 Hash Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online MD5 hash generator tool for creating 32-character hexadecimal checksums.",
  "featureList": [
    "Generate MD5 Hashes",
    "Instant real-time conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function MD5HashGenerator() {
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

      <MD5HashGeneratorClient />
    </>
  );
}
