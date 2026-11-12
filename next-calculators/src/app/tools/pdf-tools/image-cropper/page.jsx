export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageCropperClient from './ImageCropperClient';

export const metadata = createPageMetadata({
  title: 'Image Cropper - Free Online Photo Cropping Tool (100% Private)',
  description: 'Crop images easily online. Remove unwanted borders, extract specific sections, and frame photos perfectly for exams or social media. 100% private client-side processing.',
  path: '/tools/pdf-tools/image-cropper',
  keywords: ['image cropper', 'crop photo online', 'crop picture', 'cut out image', 'remove image borders', 'free photo cropper'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Image Cropper',
  description: 'Crop images easily online. Remove unwanted borders, extract specific sections, and frame photos perfectly for exams or social media. 100% private client-side processing.',
  path: '/tools/pdf-tools/image-cropper',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Cropper', path: '/tools/pdf-tools/image-cropper' }
]);

export default function ImageCropperPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ImageCropperClient />
    </>
  );
}
