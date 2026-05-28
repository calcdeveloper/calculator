import LovePercentageClient from './LovePercentageClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = 'force-static';

export const metadata = createPageMetadata({
  title: 'Love Percentage Calculator - Free Name Compatibility Test',
  description:
    'Calculate love percentage between two names instantly. Free, fun, private love calculator for couples and friends—entertainment only, no signup.',
  path: '/tools/fun-tools/love-percentage',
  keywords: [
    'love percentage calculator',
    'love calculator by name',
    'name compatibility test',
    'love match percentage',
    'couple calculator fun',
    'flames calculator online',
  ],
  openGraph: {
    title: 'Love Percentage Calculator - Fun & Free',
    description: 'Enter two names and see your playful love compatibility score on ToolsWizard.',
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Love Percentage Calculator',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Is the love percentage calculator accurate?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It is for entertainment only and does not measure real relationship compatibility.',
          },
        },
        {
          '@type': 'Question',
          name: 'Are names stored on a server?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Names are processed locally in your browser and are not uploaded.',
          },
        },
      ],
    },
  ],
};

export default function LovePercentagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LovePercentageClient />
    </>
  );
}
