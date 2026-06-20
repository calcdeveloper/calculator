import CSSFormatterClient from './CSSFormatterClient';
import CssFormatterSeo from '@/components/tools/CssFormatterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free CSS Formatter Online | Beautify & Format CSS Code | ToolsWizard',
  description:
    'Instantly format and beautify messy or minified CSS code. Free online CSS formatter with customizable indentation. Fast, secure, and processes entirely in your browser.',
  path: '/tools/developer-tools/css-formatter',
  keywords: [
    'CSS formatter',
    'CSS beautifier',
    'format CSS online',
    'unminify CSS',
    'CSS code formatter',
    'beautify CSS',
    'free CSS formatter',
    'CSS indentation tool',
    'developer tools CSS',
    'CSS syntax formatter'
  ],
  openGraph: {
    title: 'Free CSS Formatter Online | Beautify & Format CSS Code',
    description:
      'Instantly format and beautify messy or minified CSS code. Free online CSS formatter with customizable indentation.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "CSS Formatter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Format CSS Code",
      step: [
        { "@type": "HowToStep", text: "Paste your minified or messy CSS code into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred indentation size (2, 4, or 8 spaces)." },
        { "@type": "HowToStep", text: "Click the Format CSS button to instantly beautify the code." },
        { "@type": "HowToStep", text: "Copy the formatted CSS to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function CSSFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <CSSFormatterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <CssFormatterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/css-formatter" />
        </div>
      </div>
    </>
  );
}
