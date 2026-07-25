import { createPageMetadata } from '@/utils/seo';
import PngToJpgClient from './PngToJpgClient';

export const metadata = createPageMetadata({
  title: 'PNG to JPG Converter - Convert Images Online Free & Private',
  description: 'Instantly convert PNG images to JPG format online. Reduce file size drastically while preserving quality. 100% free, secure, browser-based processing.',
  path: '/tools/pdf-tools/png-to-jpg',
  keywords: ['png to jpg', 'convert png to jpg', 'png converter', 'change png to jpg', 'free png to jpeg converter', 'reduce image file size'],
});

export default function PngToJpgPage() {
  return <PngToJpgClient />;
}
