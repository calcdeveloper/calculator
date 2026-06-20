import ColorPaletteGeneratorClient from './ColorPaletteGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Color Palette Generator | Fast, Harmonious Design Colors',
  description: 'Generate beautiful, mathematically harmonious color palettes instantly by pressing the spacebar. Perfect for UI/UX designers and modern web architecture.',
  path: '/tools/design/color-palette-generator',
  keywords: ['color palette generator', 'color scheme generator', 'ui design colors', 'random color generator', 'hex colors'],
});

export default function ColorPaletteGeneratorPage() {
  return <ColorPaletteGeneratorClient />;
}
