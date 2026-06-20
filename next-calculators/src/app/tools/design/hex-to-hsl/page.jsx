import HexToHslClient from './HexToHslClient';
import { createPageMetadata } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Hex to HSL Converter | Fast & Accurate Color Tool',
  description: 'Convert Hexadecimal color codes to HSL (Hue, Saturation, Lightness) format instantly. Perfect for modern CSS variable architecture and Tailwind UI design.',
  path: '/tools/design/hex-to-hsl',
  keywords: ['hex to hsl', 'hexadecimal to hsl', 'color converter', 'css color codes', 'ui design colors'],
});

export default function HexToHslPage() {
  return <HexToHslClient />;
}
