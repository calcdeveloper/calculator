import JsObfuscatorClient from './JsObfuscatorClient';
import JsObfuscatorSeo from '@/components/tools/JsObfuscatorSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JavaScript Obfuscator | Protect Source Code | ToolsWizard',
  description:
    'Instantly protect your JavaScript code with advanced obfuscation. Free online tool featuring control flow flattening, string encryption, and zero-trust local processing.',
  path: '/tools/developer-tools/js-obfuscator',
  keywords: [
    'JavaScript obfuscator',
    'obfuscate JS code',
    'protect JavaScript',
    'encrypt JS code',
    'free JS obfuscator',
    'developer tools security',
    'hide JS code',
    'JS anti-reverse engineering'
  ],
  openGraph: {
    title: 'Free JavaScript Obfuscator | Protect Source Code',
    description:
      'Instantly protect your JavaScript code with advanced obfuscation. Free online tool featuring control flow flattening and string encryption.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JavaScript Obfuscator",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Obfuscate JavaScript Code",
      step: [
        { "@type": "HowToStep", text: "Select your desired Protection Level (Low, Medium, or High)." },
        { "@type": "HowToStep", text: "Paste your proprietary JavaScript source code into the input editor." },
        { "@type": "HowToStep", text: "Click the Obfuscate Code button to securely scramble the logic." },
        { "@type": "HowToStep", text: "Copy or download the highly protected output code for your deployment." },
      ],
    },
  ],
};

export default function JsObfuscatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JsObfuscatorClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsObfuscatorSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/js-obfuscator" />
        </div>
      </div>
    </>
  );
}
