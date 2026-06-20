import JsonCsvClient from './JsonCsvClient';
import JsonCsvSeo from '@/components/tools/JsonCsvSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JSON to CSV Converter | Convert Nested Arrays | ToolsWizard',
  description:
    'Instantly convert complex, nested JSON arrays into flat CSV tables for Excel or database imports. Free online JSON to CSV converter with zero-trust local processing.',
  path: '/tools/developer-tools/json-csv',
  keywords: [
    'JSON to CSV',
    'convert JSON to CSV',
    'JSON to Excel',
    'flatten JSON array',
    'free JSON to CSV converter',
    'developer tools JSON',
    'tabular data JSON'
  ],
  openGraph: {
    title: 'Free JSON to CSV Converter | Convert Nested Arrays',
    description:
      'Instantly convert complex, nested JSON arrays into flat CSV tables for Excel or database imports. Free online JSON to CSV converter.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JSON to CSV Converter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Convert JSON to CSV",
      step: [
        { "@type": "HowToStep", text: "Paste your valid JSON array or object into the input editor." },
        { "@type": "HowToStep", text: "Click the Convert to CSV button to recursively flatten the data structure." },
        { "@type": "HowToStep", text: "Review the generated tabular output to ensure schema alignment." },
        { "@type": "HowToStep", text: "Download the resulting CSV file for use in Microsoft Excel or your SQL database." },
      ],
    },
  ],
};

export default function JsonCsvPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JsonCsvClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsonCsvSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/json-csv" />
        </div>
      </div>
    </>
  );
}
