import ColorMixerClient from './ColorMixerClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'CSS Color Mixer | Blend HEX Codes Mathematically',
  description: 'Mathematically blend two colors together using precise RGB interpolation to generate the perfect intermediate Hex code for your UI design.',
  path: '/tools/design/color-mixer',
  keywords: ['color mixer', 'blend colors', 'css color blending', 'mix hex codes', 'color interpolation'],
});

export default function ColorMixerPage() {
  return <ColorMixerClient />;
}
