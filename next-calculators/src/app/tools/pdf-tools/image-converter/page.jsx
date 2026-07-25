import { createPageMetadata } from '@/utils/seo';
import ImageConverterClient from './ImageConverterClient';

export const metadata = createPageMetadata({
  title: 'Image Converter - Free Online Photo Format Converter (100% Private)',
  description: 'Convert images online instantly. Transform between JPG, PNG, and WebP formats. Free, highly secure, client-side browser processing with no server uploads.',
  path: '/tools/pdf-tools/image-converter',
  keywords: ['image converter', 'convert photo format', 'jpg to png', 'png to webp', 'free image format converter', 'change image format'],
});

export default function ImageConverterPage() {
  return <ImageConverterClient />;
}
