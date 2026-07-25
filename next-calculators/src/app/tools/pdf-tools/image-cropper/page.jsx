import { createPageMetadata } from '@/utils/seo';
import ImageCropperClient from './ImageCropperClient';

export const metadata = createPageMetadata({
  title: 'Image Cropper - Free Online Photo Cropping Tool (100% Private)',
  description: 'Crop images easily online. Remove unwanted borders, extract specific sections, and frame photos perfectly for exams or social media. 100% private client-side processing.',
  path: '/tools/pdf-tools/image-cropper',
  keywords: ['image cropper', 'crop photo online', 'crop picture', 'cut out image', 'remove image borders', 'free photo cropper'],
});

export default function ImageCropperPage() {
  return <ImageCropperClient />;
}
