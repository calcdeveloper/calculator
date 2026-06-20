import ApiTesterClient from './ApiTesterClient';
import ApiTesterSeo from '@/components/tools/ApiTesterSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free API Tester Online | Send HTTP Requests | ToolsWizard',
  description:
    'Instantly test REST APIs, send HTTP requests (GET, POST, PUT, DELETE), inspect headers, and analyze JSON responses. Free online API tester with zero-trust local processing.',
  path: '/tools/developer-tools/api-tester',
  keywords: [
    'API tester',
    'test REST API online',
    'HTTP request sender',
    'send API request',
    'REST client online',
    'free API tester',
    'developer tools API',
    'debug API response'
  ],
  openGraph: {
    title: 'Free API Tester Online | Send HTTP Requests',
    description:
      'Instantly test REST APIs, send HTTP requests (GET, POST, PUT), inspect headers, and analyze JSON responses. Free online API tester.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "API Tester",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Test an API Endpoint",
      step: [
        { "@type": "HowToStep", text: "Select your desired HTTP method (e.g., GET, POST, PUT)." },
        { "@type": "HowToStep", text: "Enter the full URL of the REST API endpoint you wish to test." },
        { "@type": "HowToStep", text: "Configure any necessary Headers (like Authorization) or JSON Body payloads." },
        { "@type": "HowToStep", text: "Click the Send button and review the raw response, status code, and latency metrics." },
      ],
    },
  ],
};

export default function ApiTesterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <ApiTesterClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <ApiTesterSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/api-tester" />
        </div>
      </div>
    </>
  );
}
