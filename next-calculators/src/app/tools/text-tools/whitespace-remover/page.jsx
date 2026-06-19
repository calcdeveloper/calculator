import WhitespaceRemoverClient from './WhitespaceRemoverClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Whitespace Remover - Clean Extra Spaces & Line Breaks | ToolsWizard',
  description:
    'Instantly remove extra spaces, tabs, and unnecessary line breaks from your text. Format and clean up messy documents or code with one click.',
  path: '/tools/text-tools/whitespace-remover',
  keywords: [
    'whitespace remover',
    'remove extra spaces',
    'delete empty lines',
    'remove line breaks',
    'convert tabs to spaces',
    'text formatter',
    'clean up text online',
  ],
  openGraph: {
    title: 'Free Whitespace Remover - Clean Extra Spaces & Line Breaks',
    description:
      'Clean up messy text instantly. Remove extra spaces, delete empty lines, and strip unnecessary line breaks securely in your browser.',
  },
  twitter: {
    title: 'Whitespace Remover & Text Cleaner Online',
    description:
      'Fast, secure, and private tool to remove extra spaces and format your text flawlessly.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I remove double spaces between words?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Simply paste your text and ensure the 'Remove Extra Spaces' option is checked. This will instantly collapse any sequence of multiple spaces into a single space."
      }
    },
    {
      "@type": "Question",
      "name": "Can this tool fix text copied from a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! If your PDF text has awkward line breaks in the middle of sentences, check the 'Remove All Line Breaks' option to collapse it back into a standard flowing paragraph."
      }
    },
    {
      "@type": "Question",
      "name": "Is my text uploaded to a server?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. All whitespace removal and text formatting is processed locally in your web browser. Your text is completely private and is never uploaded."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Whitespace Remover",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to remove unwanted whitespace, extra spaces, tabs, and line breaks from text.",
  "featureList": [
    "Remove multiple consecutive spaces",
    "Trim leading and trailing spaces",
    "Delete empty lines",
    "Convert Tabs to Spaces",
    "Remove all line breaks",
    "Instant real-time cleaning",
    "100% browser-based privacy"
  ]
};

export default function WhitespaceRemoverPage() {
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
      
      <WhitespaceRemoverClient />
    </>
  );
}
