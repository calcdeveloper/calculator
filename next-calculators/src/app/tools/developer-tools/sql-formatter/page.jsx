import SQLFormatterClient from './SQLFormatterClient';
import SqlFormatterSeo from '@/components/tools/SqlFormatterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free SQL Formatter Online | Beautify Database Queries | ToolsWizard',
  description:
    'Instantly format and beautify messy SQL queries. Standardize keyword casing, improve readability, and optimize your database engineering workflow securely in your browser.',
  path: '/tools/developer-tools/sql-formatter',
  keywords: [
    'SQL formatter',
    'SQL beautifier',
    'format SQL online',
    'SQL query formatter',
    'beautify SQL',
    'free SQL formatter',
    'database tools',
    'SQL code formatter'
  ],
  openGraph: {
    title: 'Free SQL Formatter Online | Beautify Database Queries',
    description:
      'Instantly format and beautify messy SQL queries. Standardize keyword casing and improve readability securely in your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "SQL Formatter",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Format SQL Queries",
      step: [
        { "@type": "HowToStep", text: "Paste your unformatted SQL query into the input editor." },
        { "@type": "HowToStep", text: "Select your preferred keyword casing (UPPERCASE, lowercase, or Preserve)." },
        { "@type": "HowToStep", text: "Click the Format SQL button to instantly beautify the code." },
        { "@type": "HowToStep", text: "Copy the formatted query to your clipboard or download it as a file." },
      ],
    },
  ],
};

export default function SQLFormatterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <SQLFormatterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <SqlFormatterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/sql-formatter" />
        </div>
      </div>
    </>
  );
}
