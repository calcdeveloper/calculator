import JSONMinifierClient from './JSONMinifierClient';
import JsonMinifierSeo from '@/components/tools/JsonMinifierSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JSON Minifier Online | Compress JSON Data | ToolsWizard',
  description:
    'Instantly compress and minify JSON data to reduce file size and accelerate API response times. Free online JSON minifier with zero-trust local processing.',
  path: '/tools/developer-tools/json-minifier',
  keywords: [
    'JSON minifier',
    'minify JSON online',
    'compress JSON',
    'JSON compressor',
    'reduce JSON size',
    'free JSON minifier',
    'developer tools JSON',
    'optimize JSON'
  ],
  openGraph: {
    title: 'Free JSON Minifier Online | Compress JSON Data',
    description:
      'Instantly compress and minify JSON data to reduce file size and accelerate API response times. Free online JSON minifier.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JSON Minifier",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Minify JSON Data",
      step: [
        { "@type": "HowToStep", text: "Paste your raw, uncompressed JSON string into the input editor." },
        { "@type": "HowToStep", text: "Click the Minify JSON button to instantly compress the payload." },
        { "@type": "HowToStep", text: "Review the byte savings in the statistics panel." },
        { "@type": "HowToStep", text: "Copy the minified JSON to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function JSONMinifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JSONMinifierClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsonMinifierSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/json-minifier" />
        </div>
      </div>
    </>
  );
}
