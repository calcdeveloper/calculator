import JSFormatterClient from './JSFormatterClient';
import JsFormatterSeo from '@/components/tools/JsFormatterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JavaScript Formatter Online | Beautify JS Code | ToolsWizard',
  description:
    'Instantly format and beautify messy or minified JavaScript code. Free online JS formatter with customizable indentation. Fast, secure, and processes entirely in your browser.',
  path: '/tools/developer-tools/js-formatter',
  keywords: [
    'JS formatter',
    'JavaScript beautifier',
    'format JS online',
    'unminify JavaScript',
    'JS code formatter',
    'beautify JS',
    'free JavaScript formatter',
    'developer tools JS formatter'
  ],
  openGraph: {
    title: 'Free JavaScript Formatter Online | Beautify JS Code',
    description:
      'Instantly format and beautify messy or minified JavaScript code. Free online JS formatter with customizable indentation.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JavaScript Formatter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Format JavaScript Code",
      step: [
        { "@type": "HowToStep", text: "Paste your minified or messy JavaScript code into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred indentation size." },
        { "@type": "HowToStep", text: "Click the Format JS button to instantly beautify the code." },
        { "@type": "HowToStep", text: "Copy the formatted JS to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function JSFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JSFormatterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsFormatterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/js-formatter" />
        </div>
      </div>
    </>
  );
}
