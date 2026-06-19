import JWTDecoderClient from './JWTDecoderClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JWT Decoder - Safely Decode JSON Web Tokens Online',
  description:
    'Instantly decode JSON Web Tokens (JWT) to inspect header algorithms and payload claims securely. Free online developer tool with client-side processing.',
  path: '/tools/encoder-decoder/jwt-decoder',
  keywords: [
    'JWT Decoder',
    'JSON Web Token decoder',
    'decode JWT online',
    'parse JWT payload',
    'read JWT claims',
    'JWT token inspector',
    'Base64Url decode JWT'
  ],
  openGraph: {
    title: 'Free JWT Decoder - Safely Decode JSON Web Tokens',
    description:
      'Instantly decode JSON Web Tokens (JWT) to inspect header algorithms and payload claims securely.',
  },
  twitter: {
    title: 'Free JWT Decoder Online',
    description:
      'Decode JWTs instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is a JSON Web Token (JWT) encrypted?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. A standard JWT is merely Base64Url-encoded, not encrypted. The data payload is 100% visible to anyone who intercepts the token string. Never put sensitive secrets inside a standard JWT payload."
      }
    },
    {
      "@type": "Question",
      "name": "Why does my JWT have three parts?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The standard JWT format requires three parts: The Header (algorithm type), the Payload (JSON user data), and the Cryptographic Signature. They are separated by periods (.)."
      }
    },
    {
      "@type": "Question",
      "name": "Is it safe to paste my production JWTs into this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all mathematical decoding algorithms happen entirely within your local browser memory sandbox. Your sensitive session tokens are never sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JWT Decoder",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online JWT decoder tool for safely inspecting JSON Web Token headers and payloads.",
  "featureList": [
    "Decode JWT headers",
    "Decode JWT payloads",
    "JSON syntax highlighting",
    "Instant conversion",
    "Client-side processing",
    "No registration required"
  ]
};

export default function JWTDecoder() {
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

      <JWTDecoderClient />
    </>
  );
}
