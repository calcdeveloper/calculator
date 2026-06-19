import RandomTextGeneratorClient from './RandomTextGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Random Text Generator - Create Random Strings | ToolsWizard',
  description:
    'Generate random strings, passwords, and text blocks instantly. Customize length, quantity, and characters (uppercase, lowercase, numbers, symbols).',
  path: '/tools/text-tools/random-text-generator',
  keywords: [
    'random text generator',
    'random string generator',
    'generate random password',
    'random characters',
    'text randomizer',
    'dummy text generator',
    'string generator online',
  ],
  openGraph: {
    title: 'Free Random Text Generator - Create Random Strings',
    description:
      'Instantly generate highly customizable random strings for testing, passwords, and development.',
  },
  twitter: {
    title: 'Random String & Password Generator',
    description:
      'Fast, secure, and customizable random text generation right in your browser.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use this to generate secure passwords?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, by including uppercase, lowercase, numbers, and special characters, you can generate highly secure, random passwords. Because the tool runs locally in your browser, the passwords are never sent over the internet."
      }
    },
    {
      "@type": "Question",
      "name": "What is the maximum string length I can generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can generate individual random strings up to 128 characters long, and generate up to 100 strings simultaneously."
      }
    },
    {
      "@type": "Question",
      "name": "Is the generated text truly random?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool uses JavaScript's built-in pseudo-random number generator (PRNG) which is highly sufficient for testing, bulk mock data, and general password generation."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Random Text Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to generate highly customizable random strings of text.",
  "featureList": [
    "Customizable string length (up to 128 chars)",
    "Bulk generation (up to 100 strings at once)",
    "Include/exclude uppercase letters",
    "Include/exclude lowercase letters",
    "Include/exclude numbers",
    "Include/exclude special characters",
    "100% browser-based generation for privacy"
  ]
};

export default function RandomTextGeneratorPage() {
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
      
      <RandomTextGeneratorClient />
    </>
  );
}
