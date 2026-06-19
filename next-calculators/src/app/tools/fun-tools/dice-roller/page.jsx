import DiceRollerClient from './DiceRollerClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Virtual Dice Roller - Roll up to 6 Dice Online | ToolsWizard',
  description:
    'Free online virtual dice roller. Roll 1 to 6 standard dice instantly with beautiful 3D animations and automatic sum calculation. Perfect for board games and RPGs.',
  path: '/tools/fun-tools/dice-roller',
  keywords: [
    'dice roller online',
    'virtual dice',
    'roll a die',
    'random dice generator',
    'd6 dice roller',
  ],
  openGraph: {
    title: 'Free Virtual Dice Roller Online',
    description:
      'Lost your physical dice? Roll up to 6 virtual dice instantly. Beautiful, fair, and automatically calculates the total sum for fast gameplay.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I roll more than 6 dice at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To keep the interface clean and ensure the dice are large and readable on small screens, we have capped the simultaneous roll limit at 6 dice. If you need 12 dice, simply roll 6 dice twice and add the totals together!"
      }
    },
    {
      "@type": "Question",
      "name": "Do you support D20s or other polyhedral dice?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This specific tool is designed for standard 6-sided dice (D6). If you need to generate a random number up to 20, we recommend using our Random Number Generator tool."
      }
    },
    {
      "@type": "Question",
      "name": "Is the app truly random?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool leverages your browser's native cryptographic algorithms. There is absolutely no bias toward higher or lower numbers."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Virtual Dice Roller",
  "applicationCategory": "EntertainmentApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A digital dice roller supporting up to 6 standard D6 dice with realistic animations and automatic sum calculation.",
  "featureList": [
    "Select 1 to 6 dice simultaneously",
    "Beautiful CSS-based bouncing animations",
    "Automatic total sum calculation",
    "Statistically fair pseudo-random generation",
    "Works perfectly on mobile devices"
  ]
};

export default function DiceRollerPage() {
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
      
      <DiceRollerClient />
    </>
  );
}
