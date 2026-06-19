import RandomNumberGeneratorClient from './RandomNumberGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Random Number Generator - Pick Numbers from 1 to 100 | ToolsWizard',
  description:
    'Generate true random numbers instantly. Set your own min/max range, pick multiple numbers, and easily prevent duplicates for raffles and games.',
  path: '/tools/fun-tools/random-number-generator',
  keywords: [
    'random number generator',
    'rng tool',
    'pick random number',
    'random number 1 to 100',
    'raffle number picker',
  ],
  openGraph: {
    title: 'Free Random Number Generator',
    description:
      'Generate completely random numbers within any custom range. Perfect for giveaways, tabletop gaming, and fair decision making.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I generate negative numbers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Simply type a negative symbol before your number in the Min or Max fields. The generator will seamlessly handle the negative range."
      }
    },
    {
      "@type": "Question",
      "name": "Why am I getting an error when I turn off duplicates?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you set your range from 1 to 10, there are only 10 possible numbers. If you ask the tool to generate a quantity of 15 unique numbers without duplicates, it is mathematically impossible."
      }
    },
    {
      "@type": "Question",
      "name": "Is the tool truly random enough for official lotteries?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "While the tool is statistically fair and perfect for casual use, giveaways, and games, official state lotteries use specialized hardware. For everyday applications, however, our pseudo-random generator is more than sufficient."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Random Number Generator",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Generate fair and unbiased random numbers instantly with customizable ranges and quantities.",
  "featureList": [
    "Custom Minimum and Maximum bounds",
    "Generate up to 1000 numbers at once",
    "Toggle to allow or prevent duplicate numbers",
    "Support for negative numbers",
    "100% private and runs locally in the browser"
  ]
};

export default function RandomNumberGeneratorPage() {
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
      
      <RandomNumberGeneratorClient />
    </>
  );
}
