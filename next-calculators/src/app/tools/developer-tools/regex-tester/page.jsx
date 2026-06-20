import RegexTesterClient from './RegexTesterClient';
import RegexTesterSeo from '@/components/tools/RegexTesterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Regex Tester Online | Regular Expression Debugger | ToolsWizard',
  description:
    'Write, test, and debug Regular Expressions in real-time. Free online regex tester with syntax highlighting, capture groups, and zero-trust local processing.',
  path: '/tools/developer-tools/regex-tester',
  keywords: [
    'regex tester',
    'regular expression tester',
    'test regex online',
    'regex debugger',
    'regex match',
    'javascript regex',
    'regex visualizer',
    'developer tools regex'
  ],
  openGraph: {
    title: 'Free Regex Tester Online | Regular Expression Debugger',
    description:
      'Write, test, and debug Regular Expressions in real-time. Free online regex tester with syntax highlighting and capture groups.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Regex Tester",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Test a Regular Expression",
      step: [
        { "@type": "HowToStep", text: "Enter your regular expression pattern in the top input field." },
        { "@type": "HowToStep", text: "Select your desired regex flags (e.g., Global, Case Insensitive)." },
        { "@type": "HowToStep", text: "Paste your target string into the Test String text area." },
        { "@type": "HowToStep", text: "Instantly view all matches and capture groups in the Match Results panel." },
      ],
    },
  ],
};

export default function RegexTesterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <RegexTesterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <RegexTesterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/regex-tester" />
        </div>
      </div>
    </>
  );
}
