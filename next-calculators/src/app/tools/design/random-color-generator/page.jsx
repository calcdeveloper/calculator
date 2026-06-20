import RandomColorGeneratorClient from './RandomColorGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Random Color Generator | Bound & Constrain HEX Colors',
  description: 'Generate perfectly constrained random CSS Hex colors by controlling Hue, Saturation, and Lightness boundaries. Designed for frontend engineers.',
  path: '/tools/design/random-color-generator',
  keywords: ['random color generator', 'random hex code', 'random hsl color', 'css color generator', 'random color palette'],
});

export default function RandomColorGeneratorPage() {
  return <RandomColorGeneratorClient />;
}
