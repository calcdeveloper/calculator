import JsonYamlClient from './JsonYamlClient';
import JsonYamlSeo from '@/components/tools/JsonYamlSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JSON to YAML Converter Online | Format to YML | ToolsWizard',
  description:
    'Instantly convert JSON objects into readable, indentation-based YAML files for Kubernetes, Docker, and CI/CD configurations. Free online JSON to YAML tool.',
  path: '/tools/developer-tools/json-yaml',
  keywords: [
    'JSON to YAML',
    'convert JSON to YAML',
    'JSON to YML',
    'JSON to Kubernetes YAML',
    'free JSON to YAML converter',
    'developer tools JSON',
    'format JSON to YAML'
  ],
  openGraph: {
    title: 'Free JSON to YAML Converter Online | Format to YML',
    description:
      'Instantly convert JSON objects into readable, indentation-based YAML files for Kubernetes, Docker, and CI/CD configurations. Free online JSON to YAML tool.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JSON to YAML Converter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Convert JSON to YAML",
      step: [
        { "@type": "HowToStep", text: "Paste your raw JSON object or configuration payload into the input editor." },
        { "@type": "HowToStep", text: "Click the Convert to YAML button to algorithmic strip the syntax and apply spatial indentation." },
        { "@type": "HowToStep", text: "Review the pristine YAML output to ensure structural hierarchy is correct." },
        { "@type": "HowToStep", text: "Download the resulting .yml file to commit to your Git repository or Kubernetes manifest." },
      ],
    },
  ],
};

export default function JsonYamlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JsonYamlClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsonYamlSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/json-yaml" />
        </div>
      </div>
    </>
  );
}
