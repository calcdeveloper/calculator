export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import HeicToJpgClient from './HeicToJpgClient';

export const metadata = createPageMetadata({
  title: 'HEIC to JPG Converter - Convert Apple iPhone Photos Online Free',
  description: 'Convert HEIC/HEIF images to JPG instantly. Free, fast, and 100% private online converter for Apple iPhone photos. No data leaves your browser.',
  path: '/tools/pdf-tools/heic-to-jpg',
  keywords: ['heic to jpg', 'convert heic to jpg', 'iphone photo converter', 'apple heic format', 'heif to jpeg', 'free online heic converter'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'HEIC to JPG Converter',
  description: 'Convert HEIC/HEIF images to JPG instantly. Free, fast, and 100% private online converter for Apple iPhone photos. No data leaves your browser.',
  path: '/tools/pdf-tools/heic-to-jpg',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'HEIC to JPG Converter', path: '/tools/pdf-tools/heic-to-jpg' }
]);

export default function HeicToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <HeicToJpgClient />
    </>
  );
}
