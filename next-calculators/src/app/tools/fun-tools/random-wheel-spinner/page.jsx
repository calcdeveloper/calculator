import RandomWheelSpinnerClient from './RandomWheelSpinnerClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Random Wheel Spinner - Free Online Decision Maker | ToolsWizard',
  description:
    'Use our free interactive wheel spinner to make random decisions, pick contest winners, or assign tasks. Add up to 50 custom options and spin instantly.',
  path: '/tools/fun-tools/random-wheel-spinner',
  keywords: [
    'random wheel spinner',
    'wheel of names',
    'random picker wheel',
    'spin the wheel online',
    'decision maker wheel',
  ],
  openGraph: {
    title: 'Free Random Wheel Spinner - Spin to Decide',
    description:
      'Can\'t decide? Add your choices to the wheel and let fate pick a random winner instantly. Beautiful, fair, and 100% private.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the maximum number of items I can add?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To ensure the wheel remains visually readable and performs smoothly on all devices, we cap the maximum number of items at 50."
      }
    },
    {
      "@type": "Question",
      "name": "Can I save my wheel list for later?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Currently, the wheel resets if you refresh the page to guarantee strict privacy. We recommend keeping long lists in a Notepad file and pasting them in when needed."
      }
    },
    {
      "@type": "Question",
      "name": "Do larger slices have a higher chance of winning?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. On our wheel, every item you enter gets an exactly equal slice of the pie and has a mathematically equal chance of winning."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Random Wheel Spinner",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A fully customizable, free interactive spinning wheel for randomly picking names, making decisions, and managing giveaways.",
  "featureList": [
    "Add up to 50 custom items",
    "Smooth 60FPS SVG spinning animation",
    "Fair cryptographic random selection",
    "Completely private client-side processing",
    "Mobile-friendly interface"
  ]
};

export default function RandomWheelSpinnerPage() {
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
      
      <RandomWheelSpinnerClient />
    </>
  );
}
