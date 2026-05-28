import CoinFlipClient from './CoinFlipClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = 'force-static';

export const metadata = createPageMetadata({
  title: 'Coin Flip Online - Free Heads or Tails Generator',
  description:
    'Flip a virtual coin for heads or tails instantly. Free online coin toss with flip history—fair, fast, and private in your browser.',
  path: '/tools/fun-tools/coin-flip',
  keywords: [
    'coin flip online',
    'heads or tails',
    'virtual coin toss',
    'flip a coin',
    'random coin flip',
    'coin flip generator',
  ],
  openGraph: {
    title: 'Coin Flip Online - Heads or Tails',
    description: 'Fair virtual coin flip for games, decisions, and fun on ToolsWizard.',
  },
});

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Coin Flip Online',
      applicationCategory: 'EntertainmentApplication',
      operatingSystem: 'Any',
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    },
    {
      '@type': 'HowTo',
      name: 'How to Flip a Coin Online',
      step: [
        { '@type': 'HowToStep', text: 'Open the Coin Flip tool on ToolsWizard.' },
        { '@type': 'HowToStep', text: 'Click the Flip Coin button.' },
        { '@type': 'HowToStep', text: 'Read whether the result is Heads or Tails.' },
      ],
    },
  ],
};

export default function CoinFlipPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <CoinFlipClient />
    </>
  );
}
