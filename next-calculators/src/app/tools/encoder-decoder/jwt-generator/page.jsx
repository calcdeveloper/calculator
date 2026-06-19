import JWTGeneratorClient from './JWTGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JWT Generator - Forge JSON Web Tokens Online',
  description:
    'Instantly generate cryptographically signed JSON Web Tokens (HS256) for API testing and development entirely in your browser with our free online JWT Generator.',
  path: '/tools/encoder-decoder/jwt-generator',
  keywords: [
    'JWT Generator',
    'JSON Web Token creator',
    'generate JWT online',
    'HS256 signature generator',
    'forge JWT token',
    'create JWT payload',
    'JWT signing tool'
  ],
  openGraph: {
    title: 'Free JWT Generator - Forge JSON Web Tokens',
    description:
      'Instantly generate cryptographically signed JSON Web Tokens (HS256) for API testing entirely in your browser.',
  },
  twitter: {
    title: 'Free JWT Generator Online',
    description:
      'Generate JWTs instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it safe to paste my secret keys into this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, absolutely! All cryptographic hashing algorithms happen entirely within your local browser memory sandbox. Your secret keys are never transmitted to our remote servers."
      }
    },
    {
      "@type": "Question",
      "name": "Why does the generated token break if I change a character in the payload?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The signature segment is dynamically calculated directly from the exact header and payload strings. Altering even a single space changes the mathematically calculated HMAC signature, making the token invalid."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Secret Key field used for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Secret Key is the sensitive string combined with your header and payload using the HS256 algorithm to forge the final signature part of the token. Without the correct secret key, backend servers will reject the token."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JWT Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online JWT generator tool for creating signed JSON Web Tokens.",
  "featureList": [
    "Generate JWTs",
    "HS256 Signature support",
    "Custom JSON Payloads",
    "Instant conversion",
    "Client-side processing",
    "No registration required"
  ]
};

export default function JWTGenerator() {
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

      <JWTGeneratorClient />
    </>
  );
}
