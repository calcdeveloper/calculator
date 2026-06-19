import YesNoPickerClient from './YesNoPickerClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Yes or No Picker - Free Online Decision Maker | ToolsWizard',
  description:
    'Struggling to make a decision? Ask a question and let our free Yes/No picker decide your fate instantly. A fun, perfectly fair 50/50 generator.',
  path: '/tools/fun-tools/yes-no-picker',
  keywords: [
    'yes or no picker',
    'yes or no generator',
    'yes no wheel',
    'decision maker online',
    '50/50 generator',
  ],
  openGraph: {
    title: 'Free Yes/No Picker Online',
    description:
      'Can\'t decide? Click the button and let the algorithm give you a definitive Yes or No. Fun, fast, and completely free.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can the tool hear my question?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The tool does not access your microphone or keyboard to interpret your question. You only need to hold the question in your mind."
      }
    },
    {
      "@type": "Question",
      "name": "I got 'Yes' three times in a row, is it broken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not at all! In a perfectly random 50/50 system, getting the same result multiple times in a row is entirely normal and mathematically expected."
      }
    },
    {
      "@type": "Question",
      "name": "Is the tool fair?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Our Yes/No Picker utilizes your browser's native mathematical randomizer, guaranteeing a mathematically perfect 50% probability for either outcome."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Yes/No Picker",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An instant binary decision maker that randomly selects Yes or No with a fun suspenseful animation.",
  "featureList": [
    "Perfect 50/50 mathematical fairness",
    "Suspenseful animated reveal",
    "100% private and runs locally",
    "Mobile-friendly interface"
  ]
};

export default function YesNoPickerPage() {
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
      
      <YesNoPickerClient />
    </>
  );
}
