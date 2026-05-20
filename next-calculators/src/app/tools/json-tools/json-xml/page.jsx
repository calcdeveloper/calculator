import JSONtoXMLClient from './JSONtoXMLClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'JSON to XML Converter Online - Free & Secure',
  description:
    'Convert JSON to XML instantly with our free online tool. Secure browser-side processing ensures your data never leaves your computer. No signup required.',
  path: '/tools/json-tools/json-xml',
  keywords: [
    'json to xml converter',
    'convert json to xml online',
    'json to xml free',
    'secure json to xml',
    'json to xml formatter',
    'developer tools',
  ],
  openGraph: {
    title: 'JSON to XML Converter - 100% Private & Fast',
    description:
      'Transform JSON data into structured XML documents locally in your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "JSON to XML Converter",
      "operatingSystem": "Any",
      "applicationCategory": "DeveloperApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" }
    },
    {
      "@type": "HowTo",
      "name": "How to Convert JSON to XML",
      "step": [
        { "@type": "HowToStep", "text": "Paste your JSON code into the input editor." },
        { "@type": "HowToStep", "text": "Click the 'Convert to XML' button." },
        { "@type": "HowToStep", "text": "Copy the resulting XML or download it as a file." }
      ]
    }
  ]
};

export default function JSONtoXMLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JSONtoXMLClient />
    </>
  );
}