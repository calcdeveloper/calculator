import YAMLValidatorClient from './YAMLValidatorClient';
import YamlValidatorSeo from '@/components/tools/YamlValidatorSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free YAML Validator Online | Check YAML Syntax | ToolsWizard',
  description:
    'Instantly validate and check your YAML configuration files for syntax errors. Free online YAML validator with strict parsing and zero-trust local processing.',
  path: '/tools/developer-tools/yaml-validator',
  keywords: [
    'YAML validator',
    'check YAML syntax',
    'YAML parser',
    'validate YAML online',
    'free YAML validator',
    'YAML linter',
    'developer tools YAML',
    'debug YAML'
  ],
  openGraph: {
    title: 'Free YAML Validator Online | Check YAML Syntax',
    description:
      'Instantly validate and check your YAML configuration files for syntax errors. Free online YAML validator with strict parsing.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "YAML Validator",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Validate YAML Syntax",
      step: [
        { "@type": "HowToStep", text: "Paste your raw YAML configuration code into the input editor." },
        { "@type": "HowToStep", text: "Click the Validate YAML button to instantly parse the code." },
        { "@type": "HowToStep", text: "Review the results panel to confirm validity or identify syntax errors." },
      ],
    },
  ],
};

export default function YAMLValidatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <YAMLValidatorClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <YamlValidatorSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/yaml-validator" />
        </div>
      </div>
    </>
  );
}
