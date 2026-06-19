import DiffCheckerClient from './DiffCheckerClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Text Diff Checker - Compare Text & Code Differences | ToolsWizard',
  description:
    'Compare two texts or code snippets to find differences instantly. Highlight added and removed words, lines, or characters with our free online diff tool.',
  path: '/tools/text-tools/diff-checker',
  keywords: [
    'text diff checker',
    'compare text online',
    'diff tool',
    'code diff',
    'find text differences',
    'compare two strings',
    'text comparison',
    'online diff checker',
    'free text comparison',
  ],
  openGraph: {
    title: 'Free Text Diff Checker - Compare Text Differences',
    description:
      'Compare two text snippets instantly. Visually highlight added, removed, and changed words or lines.',
  },
  twitter: {
    title: 'Text Diff Checker Online',
    description:
      'Find the differences between two texts or code files. Free, fast, and completely private.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the Text Diff Checker work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The tool uses an advanced comparison algorithm to find the longest common subsequence between your original and modified text. It then highlights deleted text in red and added text in green."
      }
    },
    {
      "@type": "Question",
      "name": "Can I compare code files?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our diff checker is excellent for comparing code snippets. It treats code as plain text, allowing you to easily spot missing semicolons, altered variables, or syntax changes."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text data saved or uploaded anywhere?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, your data is 100% secure. All text comparison happens entirely within your web browser using client-side JavaScript. Nothing is sent to our servers."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between word, line, and character diffs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A word diff compares the text word by word, which is great for essays. A line diff compares entire lines, which is standard for code. A character diff is precise and checks every single letter or symbol."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Text Diff Checker",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online diff tool to visually compare two text snippets and highlight added or removed content.",
  "featureList": [
    "Word-by-word comparison",
    "Line-by-line comparison",
    "Character-by-character comparison",
    "Visual color-coded highlights",
    "No character limits",
    "100% browser-based privacy"
  ]
};

export default function DiffCheckerPage() {
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
      
      <DiffCheckerClient />
    </>
  );
}
