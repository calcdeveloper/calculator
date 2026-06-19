import LoremIpsumClient from './LoremIpsumClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Lorem Ipsum Generator - Create Placeholder Text | ToolsWizard',
  description:
    'Generate customized Lorem Ipsum placeholder text instantly. Perfect for web design, mockups, and wireframes. Choose paragraphs, sentences, or words.',
  path: '/tools/text-tools/lorem-ipsum',
  keywords: [
    'lorem ipsum generator',
    'placeholder text',
    'dummy text generator',
    'mockup text',
    'lorem ipsum online',
    'generate dummy text',
    'web design text',
    'typesetting text',
  ],
  openGraph: {
    title: 'Free Lorem Ipsum Generator - Create Placeholder Text',
    description:
      'Generate perfect placeholder text for your designs instantly. Customize by paragraphs, sentences, or words.',
  },
  twitter: {
    title: 'Lorem Ipsum Generator Online',
    description:
      'Fast, customizable, and free dummy text generator for designers and developers.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Lorem Ipsum?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Lorem Ipsum is standard dummy text used in the printing and typesetting industry. It looks like standard Latin but has no real meaning, helping designers focus on visual layout rather than reading the content."
      }
    },
    {
      "@type": "Question",
      "name": "Can I choose how much text to generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our generator allows you to specify exactly how many paragraphs, sentences, or individual words you need for your design."
      }
    },
    {
      "@type": "Question",
      "name": "Why use Lorem Ipsum instead of real English text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Using readable text in a design mockup distracts viewers from the layout itself. Lorem Ipsum mimics the natural flow and word length of English without distracting the reader with meaning."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lorem Ipsum Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online tool to generate customizable Lorem Ipsum placeholder text.",
  "featureList": [
    "Generate by paragraphs, sentences, or words",
    "Adjustable text count slider",
    "Option to start with classic 'Lorem ipsum...' phrase",
    "Instant real-time generation",
    "One-click copy to clipboard"
  ]
};

export default function LoremIpsumPage() {
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
      
      <LoremIpsumClient />
    </>
  );
}
