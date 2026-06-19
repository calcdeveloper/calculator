import CharacterCounterClient from './CharacterCounterClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Word, Character, Sentence & Paragraph Counter | ToolsWizard',
  description:
    'Calculate the exact number of words, characters, sentences, and paragraphs instantly. Get detailed text statistics with our free online counter.',
  path: '/tools/text-tools/character-counter',
  keywords: [
    'character counter',
    'word counter',
    'count characters without spaces',
    'text statistics',
    'letter counter',
    'online character counter',
    'text length calculator',
  ],
  openGraph: {
    title: 'Free Word, Character & Sentence Counter',
    description:
      'Instantly calculate exact word counts, character counts, sentences, paragraphs, and deep text statistics.',
  },
  twitter: {
    title: 'Word & Character Counter Online',
    description:
      'Fast, precise, and completely private text counting tool for writers, marketers, and developers.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does this tool count characters without spaces?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our character counter provides distinct, real-time metrics for both 'Characters (with spaces)' and 'Characters (without spaces)'."
      }
    },
    {
      "@type": "Question",
      "name": "Are there any character limits for this tool?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, there are no artificial limits. You can paste thousands of words, and the tool will calculate the statistics instantly."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text saved or stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. All counting and analysis are performed locally in your web browser. Your text is never sent over the internet or saved to our servers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Word, Character & Sentence Counter",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to count words, characters, sentences, paragraphs, and analyze text metrics.",
  "featureList": [
    "Count characters with spaces",
    "Count characters without spaces",
    "Count total words, sentences, and paragraphs",
    "Analyze uppercase vs lowercase distribution",
    "Count punctuation and number characters",
    "Real-time instant calculation",
    "100% browser-based privacy"
  ]
};

export default function CharacterCounterPage() {
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
      
      <CharacterCounterClient />
    </>
  );
}
