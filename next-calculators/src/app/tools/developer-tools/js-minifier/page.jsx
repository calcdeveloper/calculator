import JSMinifierClient from './JSMinifierClient';
import JsMinifierSeo from '@/components/tools/JsMinifierSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free JavaScript Minifier Online | Compress JS Code | ToolsWizard',
  description:
    'Instantly minify and compress JavaScript code to reduce file size and accelerate website loading times. Free online JS minifier. Fast, secure, and browser-based.',
  path: '/tools/developer-tools/js-minifier',
  keywords: [
    'JS minifier',
    'minify JavaScript online',
    'JS compressor',
    'optimize JS',
    'reduce JS file size',
    'free JS minifier',
    'JavaScript code optimizer',
    'developer tools JS minification'
  ],
  openGraph: {
    title: 'Free JavaScript Minifier Online | Compress JS Code',
    description:
      'Instantly minify and compress JavaScript code to reduce file size and accelerate website loading times. Free online JS minifier.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "JavaScript Minifier",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Minify JavaScript Code",
      step: [
        { "@type": "HowToStep", text: "Paste your raw, uncompressed JavaScript code into the input editor." },
        { "@type": "HowToStep", text: "Click the Minify JS button to instantly compress the code." },
        { "@type": "HowToStep", text: "Review the byte savings and copy the minified JS to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function JSMinifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <JSMinifierClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <JsMinifierSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/js-minifier" />
        </div>
      </div>
    </>
  );
}
