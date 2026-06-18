import JSONtoXMLClient from './JSONtoXMLClient';
import JSONtoXMLSeo from '@/components/tools/JSONtoXMLSeo';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JSON to XML Converter Online | Fast & Secure Data Parsing',
  description:
    'Instantly convert JSON objects to structured XML format with our free, secure, and fast online JSON to XML converter. Features browser-side processing, array handling, and strict schema compliance.',
  path: '/tools/developer-tools/json-xml',
  keywords: [
    'JSON to XML converter',
    'convert JSON to XML online',
    'JSON XML parser',
    'developer tools JSON XML',
    'free JSON to XML tool',
    'JSON to XML formatter',
    'data interoperability tools',
    'legacy system integration JSON XML',
    'secure JSON converter'
  ],
  openGraph: {
    title: 'Free JSON to XML Converter Online | Fast & Secure Data Parsing',
    description:
      'Instantly convert JSON objects to structured XML format with our free, secure, and fast online JSON to XML converter. Features browser-side processing.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JSON to XML Converter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Convert JSON to XML",
      step: [
        { "@type": "HowToStep", text: "Paste your JSON code into the input editor." },
        { "@type": "HowToStep", text: "Click the Convert to XML button." },
        { "@type": "HowToStep", text: "Copy the resulting XML or download it as a file." },
      ],
    },
  ],
};

export default function JSONtoXMLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <JSONtoXMLClient />
      <JSONtoXMLSeo />
    </>
  );
}
