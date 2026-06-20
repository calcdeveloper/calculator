import JSONFormatterClient from './JSONFormatterClient';
import JsonFormatterSeo from '@/components/tools/JsonFormatterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JSON Formatter Online | Beautify & Validate JSON | ToolsWizard',
  description:
    'Instantly validate, beautify, and format messy JSON data. Free online JSON formatter with strict syntax checking, custom indentation, and zero-trust local processing.',
  path: '/tools/developer-tools/json-formatter',
  keywords: [
    'JSON formatter',
    'JSON beautifier',
    'format JSON online',
    'JSON validator',
    'JSON parser',
    'free JSON formatter',
    'developer tools JSON',
    'beautify JSON'
  ],
  openGraph: {
    title: 'Free JSON Formatter Online | Beautify & Validate JSON',
    description:
      'Instantly validate, beautify, and format messy JSON data. Free online JSON formatter with strict syntax checking.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JSON Formatter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Format JSON Data",
      step: [
        { "@type": "HowToStep", text: "Paste your minified or messy JSON string into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred indentation size (e.g., 2 or 4 spaces)." },
        { "@type": "HowToStep", text: "Click the Format JSON button to instantly validate and beautify the data." },
        { "@type": "HowToStep", text: "Review for any syntax errors, then copy the formatted JSON to your clipboard." },
      ],
    },
  ],
};

export default function JSONFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JSONFormatterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsonFormatterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/json-formatter" />
        </div>
      </div>
    </>
  );
}
