import { createPageMetadata } from '@/utils/seo';
import JpgToPngClient from './JpgToPngClient';

export const metadata = createPageMetadata({
  title: 'JPG to PNG Converter - Convert Images Online Free & Private',
  description: 'Instantly convert JPG images to high-quality PNG format online. 100% free, highly secure, browser-based conversion with no server uploads.',
  path: '/tools/pdf-tools/jpg-to-png',
  keywords: ['jpg to png', 'convert jpg to png', 'jpeg to png', 'change jpg to png', 'free jpg to png converter', 'lossless image conversion'],
});

export default function JpgToPngPage() {
  return <JpgToPngClient />;
}
