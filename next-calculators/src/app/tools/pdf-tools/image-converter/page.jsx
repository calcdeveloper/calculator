export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import ImageConverterClient from './ImageConverterClient';

export const metadata = createPageMetadata({
  title: 'Image Converter - Free Online Photo Format Converter (100% Private)',
  description: 'Convert images online instantly. Transform between JPG, PNG, and WebP formats. Free, highly secure, client-side browser processing with no server uploads.',
  path: '/tools/pdf-tools/image-converter',
  keywords: ['image converter', 'convert photo format', 'jpg to png', 'png to webp', 'free image format converter', 'change image format'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'Image Converter',
  description: 'Convert images online instantly. Transform between JPG, PNG, and WebP formats. Free, highly secure, client-side browser processing with no server uploads.',
  path: '/tools/pdf-tools/image-converter',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Image Converter', path: '/tools/pdf-tools/image-converter' }
]);

export default function ImageConverterPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ImageConverterClient />
    </>
  );
}
