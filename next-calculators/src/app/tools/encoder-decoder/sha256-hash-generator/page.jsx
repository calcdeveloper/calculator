import SHA256HashGeneratorClient from './SHA256HashGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free SHA-256 Hash Generator - Create Secure SHA256 Hashes Online',
  description:
    'Instantly compute the secure 64-character cryptographic SHA-256 hash footprint of any text. Blazing fast, client-side browser tool for ultimate data security.',
  path: '/tools/encoder-decoder/sha256-hash-generator',
  keywords: [
    'SHA256 hash generator',
    'create SHA-256 hash',
    'SHA256 calculator online',
    'generate SHA256 hash',
    'secure hash algorithm 256',
    'cryptographic hash tool',
    'text to SHA256'
  ],
  openGraph: {
    title: 'Free SHA-256 Hash Generator - Create Secure SHA256 Hashes',
    description:
      'Instantly compute the secure 64-character cryptographic SHA-256 hash footprint of any text. Blazing fast, client-side browser tool.',
  },
  twitter: {
    title: 'Free SHA-256 Hash Generator Online',
    description:
      'Generate secure SHA-256 hashes instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I decrypt a SHA-256 hash back into text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SHA-256 is a fundamental one-way cryptographic hash function, completely not an encryption algorithm. It is mathematically impossible to decrypt a 64-character SHA-256 hash back into its original text."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to paste sensitive passwords here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All cryptographic hashing happens entirely within your local computer's web browser using native JavaScript. Your passwords are never transmitted over the network."
      }
    },
    {
      "@type": "Question",
      "name": "Why is SHA-256 considered unbroken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SHA-256 produces a massive 256-bit hash, providing an astronomical number of combinations. Even using global supercomputers for billions of years, forcing a collision is mathematically impossible."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SHA-256 Hash Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online SHA-256 hash generator tool for creating secure 64-character cryptographic checksums.",
  "featureList": [
    "Generate SHA-256 Hashes",
    "Instant real-time conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function SHA256HashGenerator() {
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

      <SHA256HashGeneratorClient />
    </>
  );
}
