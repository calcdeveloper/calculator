import OpacityCalculatorClient from './OpacityCalculatorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Opacity Calculator | HEX to RGBA Converter',
  description: 'Instantly convert solid Hex color codes into transparent RGBA functions and modern 8-character Hex Alpha codes for UI design.',
  path: '/tools/design/opacity-calculator',
  keywords: ['opacity calculator', 'hex to rgba', 'hex alpha code', 'css transparency', 'color opacity converter'],
});

export default function OpacityCalculatorPage() {
  return <OpacityCalculatorClient />;
}
