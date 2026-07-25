import { createPageMetadata } from '@/utils/seo';
import HeicToJpgClient from './HeicToJpgClient';

export const metadata = createPageMetadata({
  title: 'HEIC to JPG Converter - Convert Apple iPhone Photos Online Free',
  description: 'Convert HEIC/HEIF images to JPG instantly. Free, fast, and 100% private online converter for Apple iPhone photos. No data leaves your browser.',
  path: '/tools/pdf-tools/heic-to-jpg',
  keywords: ['heic to jpg', 'convert heic to jpg', 'iphone photo converter', 'apple heic format', 'heif to jpeg', 'free online heic converter'],
});

export default function HeicToJpgPage() {
  return <HeicToJpgClient />;
}
