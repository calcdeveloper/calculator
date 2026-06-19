import BcryptHashGeneratorClient from './BcryptHashGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Bcrypt Hash Generator - Secure Password Hashing Online',
  description:
    'Generate securely salted, intentionally slow Bcrypt password hashes entirely in your browser. Configure cost factors and generate 60-character hashes instantly.',
  path: '/tools/encoder-decoder/bcrypt-hash-generator',
  keywords: [
    'bcrypt hash generator',
    'create bcrypt hash',
    'bcrypt password hashing',
    'generate secure password hash',
    'bcrypt calculator',
    'salt and hash password',
    'cost factor bcrypt'
  ],
  openGraph: {
    title: 'Free Bcrypt Hash Generator - Secure Password Hashing',
    description:
      'Generate securely salted Bcrypt password hashes entirely in your browser. Configure cost factors and generate hashes instantly.',
  },
  twitter: {
    title: 'Free Bcrypt Hash Generator Online',
    description:
      'Generate Bcrypt hashes securely. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why does clicking Generate with the same password produce a different hash?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every time you invoke the Bcrypt algorithm, it strictly generates a completely new, mathematically random 128-bit salt behind the scenes. This guarantees that no two hashes look identical, defeating Rainbow Table attacks."
      }
    },
    {
      "@type": "Question",
      "name": "What is the optimal Cost Factor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The industry standard cost factor is currently 10 or 12. A cost factor of 10 takes roughly 100 milliseconds to calculate, which is unnoticeable to a user but crippling to a hacker brute-forcing hashes."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to paste admin passwords here?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All hashing happens entirely within your local web browser using native JavaScript. Your sensitive passwords are never transmitted over the network to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Bcrypt Hash Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online Bcrypt hash generator tool for creating securely salted password hashes.",
  "featureList": [
    "Generate Bcrypt Hashes",
    "Adjustable Cost Factor",
    "Auto-salting",
    "Copy to clipboard",
    "Client-side processing",
    "No registration required"
  ]
};

export default function BcryptHashGenerator() {
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

      <BcryptHashGeneratorClient />
    </>
  );
}
