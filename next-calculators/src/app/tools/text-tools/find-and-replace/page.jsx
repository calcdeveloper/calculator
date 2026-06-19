import FindAndReplaceClient from './FindAndReplaceClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Find and Replace Tool - Advanced Text Substitution | ToolsWizard',
  description:
    'Easily find and replace text online. Supports case sensitivity, whole-word matching, and regular expressions (Regex) for advanced text manipulation.',
  path: '/tools/text-tools/find-and-replace',
  keywords: [
    'find and replace',
    'text substitution',
    'replace string',
    'regex find and replace',
    'search and replace text',
    'bulk text editor',
    'word replacer online',
  ],
  openGraph: {
    title: 'Free Find and Replace Tool - Advanced Text Substitution',
    description:
      'Perform complex text substitutions instantly with our free online tool. Supports Regex, case matching, and word boundaries.',
  },
  twitter: {
    title: 'Advanced Find and Replace Online',
    description:
      'Secure, fast, and feature-rich text replacer for developers and writers.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I use regular expressions (Regex) to find text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! Enable the 'Use Regular Expressions' checkbox to use standard JavaScript Regex patterns for advanced finding and replacing."
      }
    },
    {
      "@type": "Question",
      "name": "How do I prevent replacing parts of words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Check the 'Whole Words Only' option. This ensures that searching for 'cat' will only replace standalone instances of 'cat', completely ignoring words like 'category' or 'concatenation'."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data private?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "100% private. All text manipulation is performed locally in your web browser. Nothing is ever sent to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Find and Replace",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to search for specific text strings and replace them, with support for Regular Expressions.",
  "featureList": [
    "Literal string replacement",
    "Regular Expression (Regex) support",
    "Case-sensitive and insensitive matching",
    "Whole-word boundaries matching",
    "Instant real-time replacement counting",
    "100% browser-based privacy"
  ]
};

export default function FindAndReplacePage() {
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
      
      <FindAndReplaceClient />
    </>
  );
}
