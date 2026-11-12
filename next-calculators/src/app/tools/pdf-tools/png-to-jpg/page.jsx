export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import PngToJpgClient from './PngToJpgClient';

export const metadata = createPageMetadata({
  title: 'PNG to JPG Converter - Convert Images Online Free & Private',
  description: 'Instantly convert PNG images to JPG format online. Reduce file size drastically while preserving quality. 100% free, secure, browser-based processing.',
  path: '/tools/pdf-tools/png-to-jpg',
  keywords: ['png to jpg', 'convert png to jpg', 'png converter', 'change png to jpg', 'free png to jpeg converter', 'reduce image file size'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'PNG to JPG Converter',
  description: 'Instantly convert PNG images to JPG format online. Reduce file size drastically while preserving quality. 100% free, secure, browser-based processing.',
  path: '/tools/pdf-tools/png-to-jpg',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PNG to JPG Converter', path: '/tools/pdf-tools/png-to-jpg' }
]);

export default function PngToJpgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PngToJpgClient />
    </>
  );
}
