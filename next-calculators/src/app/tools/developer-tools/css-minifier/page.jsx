import CSSMinifierClient from './CSSMinifierClient';
import CssMinifierSeo from '@/components/tools/CssMinifierSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free CSS Minifier Online | Compress & Optimize CSS Code | ToolsWizard',
  description:
    'Instantly minify and compress CSS code to reduce file size and accelerate website loading times. Free online CSS minifier. Fast, secure, and browser-based.',
  path: '/tools/developer-tools/css-minifier',
  keywords: [
    'CSS minifier',
    'minify CSS online',
    'CSS compressor',
    'optimize CSS',
    'reduce CSS file size',
    'free CSS minifier',
    'CSS code optimizer',
    'developer tools CSS minification'
  ],
  openGraph: {
    title: 'Free CSS Minifier Online | Compress & Optimize CSS Code',
    description:
      'Instantly minify and compress CSS code to reduce file size and accelerate website loading times. Free online CSS minifier.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "CSS Minifier",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Minify CSS Code",
      step: [
        { "@type": "HowToStep", text: "Paste your raw, uncompressed CSS code into the input editor." },
        { "@type": "HowToStep", text: "Click the Minify CSS button to instantly compress the code." },
        { "@type": "HowToStep", text: "Review the byte savings and copy the minified CSS to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function CSSMinifierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <CSSMinifierClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <CssMinifierSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/css-minifier" />
        </div>
      </div>
    </>
  );
}
