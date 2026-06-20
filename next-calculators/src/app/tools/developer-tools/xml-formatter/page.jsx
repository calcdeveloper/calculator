import XMLFormatterClient from './XMLFormatterClient';
import XmlFormatterSeo from '@/components/tools/XmlFormatterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free XML Formatter Online | Beautify & Validate XML | ToolsWizard',
  description:
    'Instantly validate, beautify, and format messy XML data. Free online XML formatter with strict DOM parsing, custom indentation, and zero-trust local processing.',
  path: '/tools/developer-tools/xml-formatter',
  keywords: [
    'XML formatter',
    'XML beautifier',
    'format XML online',
    'XML validator',
    'XML parser',
    'free XML formatter',
    'developer tools XML',
    'beautify XML'
  ],
  openGraph: {
    title: 'Free XML Formatter Online | Beautify & Validate XML',
    description:
      'Instantly validate, beautify, and format messy XML data. Free online XML formatter with strict DOM parsing.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "XML Formatter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Format XML Data",
      step: [
        { "@type": "HowToStep", text: "Paste your minified or chaotic XML string into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred indentation size (e.g., 2 or 4 spaces)." },
        { "@type": "HowToStep", text: "Click the Format XML button to instantly validate and beautify the document." },
        { "@type": "HowToStep", text: "Review for syntax errors, then copy the formatted XML to your clipboard." },
      ],
    },
  ],
};

export default function XMLFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <XMLFormatterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <XmlFormatterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/xml-formatter" />
        </div>
      </div>
    </>
  );
}
