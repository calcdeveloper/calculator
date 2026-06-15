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
    'online random token creator',
    'developer utilities online',
    'RFC 4122 compliant identifier',
    'bulk GUID generator tool'
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

// FAQ Structured Data for Google Rich Snippets (Expanded for Premium EEAT)
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
        "text": "Yes, our UUID generator uses the Web Crypto API's crypto.getRandomValues() method, which provides cryptographically secure random numbers suitable for security-sensitive production applications."
      }
    },
    {
      "@type": "Question",
      "name": "How many UUIDs can I generate at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can generate between 1 and 100 UUIDs at once using our bulk generator feature. This is ideal for microservices initialization, batch operations, or populating test environments."
      }
    },
    {
      "@type": "Question",
      "name": "What's the difference between UUID and GUID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "UUID and GUID are conceptually equivalent. UUID is the international standard defined by RFC 4122, while GUID is Microsoft's naming terminology implementation. Both utilize the same bit layout and structural architecture."
      }
    },
    {
      "@type": "Question",
      "name": "Does your online UUID generator store my data or tokens?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The system generates all keys directly within your local web browser using the Web Crypto API. No data or generated values are transmitted to a backend server, ensuring absolute privacy."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any licensing restrictions on identifiers built via this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No restrictions exist. All tokens created by this tool are completely free to use across open-source applications, enterprise production databases, and commercial software environments worldwide."
      }
    },
    {
      "@type": "Question",
      "name": "What is the total bit composition of a version 4 UUID?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A UUID comprises exactly 128 bits. In version 4 variants, 6 bits are strictly reserved to specify the version type and multiplex variant variant layouts, leaving 122 bits for independent, high-entropy cryptographic randomization."
      }
    },
    {
      "@type": "Question",
      "name": "Why are hyphens missing when I select the clean format?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Selecting the 'Exclude Hyphens' parameter forces the tool to strip the traditional four structural dashes. This yields a clean, contiguous 32-character hexadecimal string preferred by specific systems like MongoDB object mappings or specific URL path architectures."
      }
    },
    {
      "@type": "Question",
      "name": "Can two identical version 4 UUIDs ever be generated?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The scale of the version 4 keyspace is 2 to the 122nd power. Generating a duplicate sequence requires creating billions of values every single second for hundreds of years, making accidental collisions mathematically near-impossible."
      }
    },
    {
      "@type": "Question",
      "name": "Is this generator fully compliant with RFC 4122 guidelines?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every string generated conforms precisely to the RFC 4122 specification, ensuring structural bits at the 13th and 17th characters correctly display the version type (4) and variant specifications respectively."
      }
    }
  ]
};

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
    "Cryptographically secure via Web Crypto API",
    "Custom formatting options with casing configurations",
    "Copy to clipboard systems",
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