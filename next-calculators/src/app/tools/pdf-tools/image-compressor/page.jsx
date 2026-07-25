import { createPageMetadata } from '@/utils/seo';
import ImageCompressorClient from './ImageCompressorClient';

export const metadata = createPageMetadata({
  title: 'Free Image Compressor - Compress JPEG, PNG, WebP Online',
  description: 'Compress images online without losing quality. Reduce file size of JPEG, PNG, and WebP images instantly in your browser. Fast, secure, and private.',
  path: '/tools/pdf-tools/image-compressor',
  keywords: ['image compressor', 'compress image', 'reduce image size', 'compress jpeg', 'compress png', 'free image compressor'],
});

export default function ImageCompressorPage() {
  return <ImageCompressorClient />;
}
