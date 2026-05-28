import HSLHexClient from './HSLHexClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free HSL to Hex Converter Online | Convert HSL to Hex Color | ToolsWizard',
  description:
    'Convert HSL color values to Hex format instantly. Free online HSL to Hex converter tool for designers and developers. Get accurate color conversions.',
  path: '/tools/design/hsl-hex',
  keywords: [
    'HSL to Hex converter',
    'convert HSL to Hex',
    'HSL Hex converter',
    'color converter',
    'HSL color',
    'Hex color',
    'color tool',
    'design tool',
    'online color converter',
    'free color tool',
    'web color converter',
  ],
  openGraph: {
    title: 'Free HSL to Hex Converter Online - Convert HSL to Hex Color',
    description:
      'Convert HSL color values to Hex format instantly. Perfect for designers.',
  },
  twitter: {
    title: 'Free HSL to Hex Converter Online',
    description:
      'Convert HSL color values to Hex format instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is HSL color format?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "HSL stands for Hue, Saturation, and Lightness. It's a color model that represents colors as cylindrical coordinates, making it intuitive for designers to work with."
      }
    },
    {
      "@type": "Question",
      "name": "How do I convert HSL to Hex?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Enter your HSL values (Hue: 0-360, Saturation: 0-100%, Lightness: 0-100%) and our converter will instantly calculate the equivalent Hex color code."
      }
    },
    {
      "@type": "Question",
      "name": "Is this converter accurate?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our converter uses standard color conversion algorithms to ensure accurate HSL to Hex conversions for all color values."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HSL to Hex Converter",
  "applicationCategory": "DesignApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online HSL to Hex converter tool for designers and developers. Convert HSL color values to Hex format instantly.",
  "featureList": [
    "Convert HSL to Hex",
    "Color preview",
    "Instant conversion",
    "Copy to clipboard",
    "Color picker",
    "No registration required",
    "Accurate conversions"
  ]
};

export default function HSLHex() {
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
      
      <HSLHexClient />
    </>
  );
}
