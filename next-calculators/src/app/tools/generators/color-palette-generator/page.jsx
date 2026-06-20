import ColorPaletteGeneratorClient from './ColorPaletteGeneratorClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Color Palette Generator | Fast, Beautiful UI Colors',
  description: 'Instantly generate beautiful, harmonious color palettes for web design and UI projects. Press spacebar to generate, lock your favorite colors, and copy hex codes instantly.',
  path: '/tools/generators/color-palette-generator',
  keywords: ['color palette generator', 'color scheme generator', 'ui colors', 'web design colors', 'random color generator', 'hex color palette'],
});

export default function ColorPaletteGeneratorPage() {
  return <ColorPaletteGeneratorClient />;
}
