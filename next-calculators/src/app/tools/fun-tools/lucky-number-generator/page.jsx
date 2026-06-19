import LuckyNumberGeneratorClient from './LuckyNumberGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Lucky Number Generator - Get Your Personal Lottery Numbers | ToolsWizard',
  description:
    'Find your personalized lucky numbers for today! Enter your name and birth date to receive 6 unique numbers calculated just for you. Perfect for lotteries.',
  path: '/tools/fun-tools/lucky-number-generator',
  keywords: [
    'lucky number generator',
    'my lucky numbers',
    'lottery number picker',
    'numerology calculator',
    'daily lucky numbers',
  ],
  openGraph: {
    title: 'Personalized Lucky Number Generator',
    description:
      'Stop using quick picks. Let our cosmic algorithm calculate your personalized 6-number winning combination for today.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Will these numbers guarantee I win the lottery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely not. This tool is created strictly for entertainment purposes. Lotteries are games of pure chance. Please gamble responsibly."
      }
    },
    {
      "@type": "Question",
      "name": "Why do my numbers change every day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Because luck is dynamic! We incorporate the current date into your personalized mathematical seed so that your fortune refreshes every 24 hours."
      }
    },
    {
      "@type": "Question",
      "name": "Is my personal information stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your name and birth date are processed entirely locally within your web browser. Nothing is sent to a server or saved in a database."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Lucky Number Generator",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Calculates a daily set of 6 personalized lucky numbers based on the user's name and optional birth date.",
  "featureList": [
    "Personalized mathematical seed generation",
    "Results refresh every 24 hours",
    "Provides 6 lotto-style numbers",
    "100% private and runs locally",
    "No data collection"
  ]
};

export default function LuckyNumberGeneratorPage() {
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
      
      <LuckyNumberGeneratorClient />
    </>
  );
}
