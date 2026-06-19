import RandomColorGeneratorClient from './RandomColorGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Random Color Generator - Get Hex, RGB & HSL | ToolsWizard',
  description:
    'Generate beautiful random colors instantly. One-click copy for HEX, RGB, and HSL values. Perfect for web design, digital art, and creative inspiration.',
  path: '/tools/fun-tools/random-color-generator',
  keywords: [
    'random color generator',
    'random hex code',
    'color picker random',
    'random rgb generator',
    'design color palette',
  ],
  openGraph: {
    title: 'Free Random Color Generator',
    description:
      'Break out of your creative rut. Generate completely unique random colors and instantly copy their HEX, RGB, or HSL formats.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How many colors can this tool generate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our tool generates standard 24-bit color. This results in 16,777,216 possible unique color combinations."
      }
    },
    {
      "@type": "Question",
      "name": "Is the color actually random?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The tool uses a pseudo-random number algorithm to pick a random value, ensuring every single color on the spectrum has an equal chance of appearing."
      }
    },
    {
      "@type": "Question",
      "name": "Does this work on mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. The interface is fully responsive, and the one-click copy buttons work perfectly on iOS and Android clipboards."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Random Color Generator",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Instantly generate random colors and copy their HEX, RGB, and HSL values for design projects.",
  "featureList": [
    "Instant color generation",
    "1-click copy to clipboard",
    "Provides HEX, RGB, and HSL formats",
    "Visual color preview block",
    "100% free and client-side"
  ]
};

export default function RandomColorGeneratorPage() {
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
      
      <RandomColorGeneratorClient />
    </>
  );
}
