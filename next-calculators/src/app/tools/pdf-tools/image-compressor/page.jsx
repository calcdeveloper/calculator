export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageCompressorClient from './ImageCompressorClient';

export const metadata = createPageMetadata({
  title: 'Free Image Compressor - Compress JPEG, PNG, WebP Online',
  description: 'Compress images online without losing quality. Reduce file size of JPEG, PNG, and WebP images instantly in your browser. Fast, secure, and private.',
  path: '/tools/pdf-tools/image-compressor',
  keywords: ['image compressor', 'compress image', 'reduce image size', 'compress jpeg', 'compress png', 'free image compressor'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Free Image Compressor',
  description: 'Compress images online without losing quality. Reduce file size of JPEG, PNG, and WebP images instantly in your browser. Fast, secure, and private.',
  path: '/tools/pdf-tools/image-compressor',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Free Image Compressor', path: '/tools/pdf-tools/image-compressor' }
]);

export default function ImageCompressorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ImageCompressorClient />
    </>
  );
}
