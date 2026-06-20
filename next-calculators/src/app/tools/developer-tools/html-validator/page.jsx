import HTMLValidatorClient from './HTMLValidatorClient';
import HtmlValidatorSeo from '@/components/tools/HtmlValidatorSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free HTML Validator Online | Check HTML Syntax | ToolsWizard',
  description:
    'Instantly validate and check your HTML code for semantic errors, deprecated tags, and accessibility violations. Free online HTML validator with zero-trust processing.',
  path: '/tools/developer-tools/html-validator',
  keywords: [
    'HTML validator',
    'check HTML syntax',
    'HTML linter',
    'validate HTML online',
    'free HTML validator',
    'HTML accessibility checker',
    'developer tools HTML',
    'find HTML errors'
  ],
  openGraph: {
    title: 'Free HTML Validator Online | Check HTML Syntax',
    description:
      'Instantly validate and check your HTML code for semantic errors, deprecated tags, and accessibility violations. Free online HTML validator.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "HTML Validator",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Validate HTML Code",
      step: [
        { "@type": "HowToStep", text: "Paste your raw HTML document or code fragment into the input editor." },
        { "@type": "HowToStep", text: "Click the Validate HTML button to instantly parse the code structure." },
        { "@type": "HowToStep", text: "Review the Validation Results panel to identify syntax errors, missing attributes, or deprecated tags." },
        { "@type": "HowToStep", text: "Fix the identified issues to ensure cross-browser compatibility and accessibility." },
      ],
    },
  ],
};

export default function HTMLValidatorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <HTMLValidatorClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <HtmlValidatorSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/html-validator" />
        </div>
      </div>
    </>
  );
}
