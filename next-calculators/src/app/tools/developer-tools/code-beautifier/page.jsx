import CodeBeautifierClient from './CodeBeautifierClient';
import CodeBeautifierSeo from '@/components/tools/CodeBeautifierSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Code Beautifier Online | Format JS, HTML, CSS | ToolsWizard',
  description:
    'Instantly format and beautify messy JavaScript, HTML, and CSS code. Free online code beautifier with advanced AST parsing and zero-trust local processing.',
  path: '/tools/developer-tools/code-beautifier',
  keywords: [
    'code beautifier',
    'format code online',
    'JS beautifier',
    'HTML formatter',
    'CSS beautifier',
    'free code beautifier',
    'developer tools formatter',
    'beautify code'
  ],
  openGraph: {
    title: 'Free Code Beautifier Online | Format JS, HTML, CSS',
    description:
      'Instantly format and beautify messy JavaScript, HTML, and CSS code. Free online code beautifier with advanced AST parsing.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Code Beautifier",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Beautify Code",
      step: [
        { "@type": "HowToStep", text: "Select your code language (JS/JSON, HTML/XML, or CSS)." },
        { "@type": "HowToStep", text: "Paste your minified or unformatted code into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred indentation size." },
        { "@type": "HowToStep", text: "Click the Beautify Code button to parse and format the document instantly." },
      ],
    },
  ],
};

export default function CodeBeautifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <CodeBeautifierClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <CodeBeautifierSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/code-beautifier" />
        </div>
      </div>
    </>
  );
}
