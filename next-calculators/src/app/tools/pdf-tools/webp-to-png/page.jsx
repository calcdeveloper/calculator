import { createPageMetadata } from '@/utils/seo';
import WebpToPngClient from './WebpToPngClient';

export const metadata = createPageMetadata({
  title: 'WebP to PNG Converter - Convert WebP Images to PNG Free',
  description: 'Instantly convert WebP images to high-quality PNG format online. 100% free, private, browser-based conversion with zero data uploads.',
  path: '/tools/pdf-tools/webp-to-png',
  keywords: ['webp to png', 'convert webp to png', 'webp converter', 'change webp to png', 'free webp to png', 'save webp as png'],
});

export default function WebpToPngPage() {
  return <WebpToPngClient />;
}
