import CodeDiffClient from './CodeDiffClient';
import CodeDiffSeo from '@/components/tools/CodeDiffSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Code Diff Tool Online | Compare Text & Code | ToolsWizard',
  description:
    'Instantly compare two versions of text or code side-by-side. Free online diff checker with unified and split views. Identify insertions, deletions, and modifications securely.',
  path: '/tools/developer-tools/code-diff',
  keywords: [
    'code diff tool',
    'diff checker',
    'compare text online',
    'compare code',
    'find differences in text',
    'free diff tool',
    'developer tools diff',
    'file comparison'
  ],
  openGraph: {
    title: 'Free Code Diff Tool Online | Compare Text & Code',
    description:
      'Instantly compare two versions of text or code side-by-side. Free online diff checker with unified and split views.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Code Diff Tool",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Compare Code Using Diff",
      step: [
        { "@type": "HowToStep", text: "Paste your original source code or text into the left input area." },
        { "@type": "HowToStep", text: "Paste your modified source code or text into the right input area." },
        { "@type": "HowToStep", text: "Toggle between Split View (side-by-side) or Unified View (single column)." },
        { "@type": "HowToStep", text: "Review the color-coded Diff Results panel to instantly identify modifications." },
      ],
    },
  ],
};

export default function CodeDiffPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <CodeDiffClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <CodeDiffSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/code-diff" />
        </div>
      </div>
    </>
  );
}
