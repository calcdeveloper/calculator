import UUIDGeneratorClient from './UUIDGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free UUID Generator Online | Generate Unique UUIDs v4 Instantly',
  description:
    'Generate unique UUID v4 identifiers instantly. Free online UUID generator for developers, database keys, and unique IDs. No registration required.',
  path: '/tools/generators/uuid-generator',
  keywords: [
    'UUID generator',
    'generate UUID online',
    'UUID v4 generator',
    'unique identifier generator',
    'GUID generator',
    'random UUID generator',
    'UUID generator free',
    'online UUID tool',
    'generate unique ID',
    'UUID generator for developers',
    'database UUID generator',
    'UUID generator API',
    'bulk UUID generator',
    'UUID generator with timestamp',
    'cryptographically secure UUID',
  ],
  openGraph: {
    title: 'Free UUID Generator Online - Generate Unique Identifiers',
    description:
      'Generate secure UUID v4 identifiers instantly. Perfect for developers, database keys, and unique IDs.',
  },
  twitter: {
    title: 'Free UUID Generator Online',
    description:
      'Generate secure UUID v4 identifiers instantly. No registration required.',
  },
});

// FAQ Structured Data for Google Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a UUID and how is it generated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A UUID (Universally Unique Identifier) is a 128-bit number used to identify information in computer systems. UUID v4 uses random numbers and has 122 bits of randomness, making collisions extremely unlikely."
      }
    },
    {
      "@type": "Question",
      "name": "Is this UUID generator cryptographically secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our UUID generator uses the Web Crypto API's crypto.getRandomValues() method, which provides cryptographically secure random numbers suitable for security-sensitive applications."
      }
    },
    {
      "@type": "Question",
      "name": "How many UUIDs can I generate at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can generate between 1 and 100 UUIDs at once using our bulk generator feature. This is perfect for batch operations or testing scenarios."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between UUID and GUID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UUID and GUID are essentially the same thing. UUID is the formal standard, while GUID is Microsoft's implementation. Both are 128-bit unique identifiers used for the same purposes."
      }
    }
  ]
};

// Tool structured data
const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "UUID Generator",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online UUID generator for creating unique identifiers. Generate secure UUID v4 codes instantly for development and database use.",
  "featureList": [
    "Generate UUID v4 identifiers",
    "Bulk UUID generation",
    "Cryptographically secure",
    "Custom formatting options",
    "Copy to clipboard",
    "No registration required"
  ]
};

export default function UUIDGenerator() {
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
      
      <UUIDGeneratorClient />
    </>
  );
}
