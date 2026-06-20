import ColorConverterClient from './ColorConverterClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Universal Color Converter | HEX, RGB, HSL, CMYK',
  description: 'Instantly convert colors between HEX, RGB, HSL, and CMYK formats. Built for professional frontend engineers and print designers.',
  path: '/tools/design/color-converter',
  keywords: ['color converter', 'hex to rgb', 'rgb to cmyk', 'hsl to hex', 'css color codes'],
});

export default function ColorConverterPage() {
  return <ColorConverterClient />;
}
