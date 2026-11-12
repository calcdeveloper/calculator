export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageResizerClient from './ImageResizerClient';

export const metadata = createPageMetadata({
  title: 'Image Resizer - Resize Images Online to Exact Pixel Dimensions (Free & Private)',
  description: 'Free online image resizer. Resize photos to exact pixel dimensions instantly for exams, social media, and web. 100% private, client-side browser processing.',
  path: '/tools/pdf-tools/image-resizer',
  keywords: ['image resizer', 'resize image to passport size', 'resize photo for exam', 'reduce image dimensions', 'resize image in pixels', 'free photo resizer online'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Image Resizer',
  description: 'Free online image resizer. Resize photos to exact pixel dimensions instantly for exams, social media, and web. 100% private, client-side browser processing.',
  path: '/tools/pdf-tools/image-resizer',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Resizer', path: '/tools/pdf-tools/image-resizer' }
]);

export default function ImageResizerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ImageResizerClient />
    </>
  );
}
