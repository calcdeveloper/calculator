import CronGeneratorClient from './CronGeneratorClient';
import CronGeneratorSeo from '@/components/tools/CronGeneratorSeo';
import RelatedDeveloperTools from '@/components/tools/RelatedDeveloperTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Cron Job Generator Online | Crontab Editor | ToolsWizard',
  description:
    'Create, edit, and decipher complex Cron scheduling expressions for Linux, CI/CD, and DevOps pipelines. Instantly translate cron syntax to human-readable text.',
  path: '/tools/developer-tools/cron-generator',
  keywords: [
    'cron generator',
    'crontab editor',
    'cron expression generator',
    'translate cron',
    'free cron tool',
    'cron syntax checker',
    'developer tools cron',
    'cron scheduler online'
  ],
  openGraph: {
    title: 'Free Cron Job Generator Online | Crontab Editor',
    description:
      'Create, edit, and decipher complex Cron scheduling expressions for Linux, CI/CD, and DevOps pipelines. Free online crontab editor.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: "Cron Generator",
      operatingSystem: "Any",
      applicationCategory: "DeveloperApplication",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
    {
      "@type": "HowTo",
      name: "How to Generate a Cron Expression",
      step: [
        { "@type": "HowToStep", text: "Select a quick preset (like 'Every 5 Mins' or 'Daily at Midnight') or manually input values." },
        { "@type": "HowToStep", text: "Adjust the Minute, Hour, Day of Month, Month, or Day of Week fields using standard cron syntax." },
        { "@type": "HowToStep", text: "Read the real-time human-readable translation to verify your temporal logic is correct." },
        { "@type": "HowToStep", text: "Click the Copy button to copy the 5-field expression to your clipboard for your crontab or CI/CD configuration." },
      ],
    },
  ],
};

export default function CronGeneratorPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-dev-bg">
        <CronGeneratorClient />
        <div className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
          <CronGeneratorSeo />
          <RelatedDeveloperTools currentToolPath="/tools/developer-tools/cron-generator" />
        </div>
      </div>
    </>
  );
}
