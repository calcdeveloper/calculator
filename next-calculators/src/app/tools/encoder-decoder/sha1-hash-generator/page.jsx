import SHA1HashGeneratorClient from './SHA1HashGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free SHA-1 Hash Generator - Create SHA1 Checksums Online',
  description:
    'Instantly compute the 40-character cryptographic SHA-1 hash footprint of any text. Blazing fast, client-side browser tool for version control and data integrity.',
  path: '/tools/encoder-decoder/sha1-hash-generator',
  keywords: [
    'SHA1 hash generator',
    'create SHA-1 checksum',
    'SHA1 calculator online',
    'generate SHA1 hash',
    'text to SHA1',
    'Git hash generator',
    'cryptographic hash tool'
  ],
  openGraph: {
    title: 'Free SHA-1 Hash Generator - Create SHA1 Checksums',
    description:
      'Instantly compute the 40-character cryptographic SHA-1 hash footprint of any text. Blazing fast, client-side browser tool.',
  },
  twitter: {
    title: 'Free SHA-1 Hash Generator Online',
    description:
      'Generate SHA-1 hashes instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I decrypt a SHA-1 hash back into text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SHA-1 is a one-way cryptographic hash function, completely not a two-way encryption algorithm. It is mathematically impossible to decrypt a 40-character SHA-1 hash back into its original text string."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to use SHA-1 for storing user passwords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NO! You must absolutely never use SHA-1 for storing user passwords. It is deeply vulnerable to incredibly fast brute-force attacks and mathematical collisions. Use modern algorithms like strictly salted Bcrypt."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data secure when using this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All mathematical cryptographic hashing happens entirely within your local web browser using native JavaScript. Your text is never transmitted to our remote servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SHA-1 Hash Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online SHA-1 hash generator tool for creating 40-character hexadecimal checksums.",
  "featureList": [
    "Generate SHA-1 Hashes",
    "Instant real-time conversion",
    "Copy to clipboard",
    "No character limits",
    "Client-side processing",
    "No registration required"
  ]
};

export default function SHA1HashGenerator() {
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

      <SHA1HashGeneratorClient />
    </>
  );
}
