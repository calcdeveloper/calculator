import FriendshipCalculatorClient from './FriendshipCalculatorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Friendship Calculator Online - Calculate Friendship Percentage | ToolsWizard',
  description:
    'Calculate friendship percentage between two names instantly. Free online friendship calculator for fun. Enter names and see your friendship score.',
  path: '/tools/fun-tools/friendship-calculator',
  keywords: [
    'friendship calculator',
    'friendship percentage',
    'calculate friendship',
    'friendship test',
    'friendship score',
    'love calculator',
    'friendship meter',
    'friendship compatibility',
    'online friendship calculator',
    'fun friendship test',
    'friendship checker',
  ],
  openGraph: {
    title: 'Friendship Calculator Online - Calculate Friendship Percentage',
    description:
      'Calculate friendship percentage between two names instantly. Fun and free.',
  },
  twitter: {
    title: 'Friendship Calculator Online',
    description:
      'Calculate friendship percentage between two names instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the friendship calculator work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The friendship calculator uses a fun algorithm based on the letters in both names to generate a friendship percentage. It's for entertainment purposes only and not scientifically accurate."
      }
    },
    {
      "@type": "Question",
      "name": "Is this calculator accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, this is a fun entertainment tool only. The results are randomly generated and should not be taken seriously. Real friendship depends on many factors beyond names."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use this for any names?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can enter any two names to calculate their friendship percentage. It works with names from any language or culture."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Friendship Calculator",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online friendship calculator for fun. Calculate friendship percentage between two names instantly.",
  "featureList": [
    "Calculate friendship percentage",
    "Fun entertainment tool",
    "Instant results",
    "Works with any names",
    "No registration required",
    "Share results"
  ]
};

export default function FriendshipCalculator() {
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
      
      <FriendshipCalculatorClient />
    </>
  );
}
