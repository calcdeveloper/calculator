import RGBHexClient from './RGBHexClient';

export const dynamic = "force-static";

export const metadata = {
  title: 'RGB to Hex Converter - Free Online Color Converter | CalcPilot',
  description: 'Convert RGB colors to Hex format instantly. Free, secure, and private browser-side RGB to Hex converter for designers and developers.',
  keywords: [
    'rgb to hex',
    'rgb hex converter',
    'color converter',
    'rgb to hex online',
    'hex color converter',
    'rgb to hex calculator',
    'color picker',
    'free rgb converter'
  ],
  alternates: { canonical: 'https://calcpilot.com/tools/design/rgb-hex' },
  openGraph: {
    title: 'RGB to Hex Converter - 100% Private & Free',
    description: 'Convert RGB colors to Hex format locally in your browser. Fast, secure, and free.',
    url: 'https://calcpilot.com/tools/design/rgb-hex',
    type: 'website',
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "RGB to Hex Converter",
      "operatingSystem": "Any",
      "applicationCategory": "DesignApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "name": "How to Convert RGB to Hex",
      "step": [
        { "@type": "HowToStep", "text": "Enter your RGB values (Red, Green, Blue) in the input fields." },
        { "@type": "HowToStep", "text": "Click the 'Convert to Hex' button." },
        { "@type": "HowToStep", "text": "Copy the Hex color code or use it in your project." }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is RGB to Hex conversion?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RGB to Hex conversion transforms RGB color values (Red, Green, Blue) into hexadecimal color codes used in web design and development."
          }
        },
        {
          "@type": "Question",
          "name": "Is my color data secure when using this converter?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, absolutely. Our RGB to Hex converter processes all data entirely in your browser. Your color values never leave your device, ensuring complete privacy and security."
          }
        },
        {
          "@type": "Question",
          "name": "What is the RGB color range?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "RGB values range from 0 to 255 for each color channel (Red, Green, Blue). This creates over 16 million possible color combinations."
          }
        }
      ]
    }
  ]
};

export default function RGBHexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <RGBHexClient />
    </>
  );
}
