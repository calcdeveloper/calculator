import { createPageMetadata } from '@/utils/seo';
import SvgConverterClient from './SvgConverterClient';

export const metadata = createPageMetadata({
  title: 'SVG Converter - Convert Vector Graphics to PNG/JPG Free',
  description: 'Instantly convert SVG vector files to high-resolution PNG, JPG, or WebP images online. 100% free, browser-based processing. Scale SVGs without losing quality.',
  path: '/tools/pdf-tools/svg-converter',
  keywords: ['svg converter', 'svg to png', 'convert svg to jpg', 'rasterize svg', 'vector to image', 'free svg to png converter'],
});

export default function SvgConverterPage() {
  return <SvgConverterClient />;
}
