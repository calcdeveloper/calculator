export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import JpgToPngClient from './JpgToPngClient';

export const metadata = createPageMetadata({
  title: 'JPG to PNG Converter - Convert Images Online Free & Private',
  description: 'Instantly convert JPG images to high-quality PNG format online. 100% free, highly secure, browser-based conversion with no server uploads.',
  path: '/tools/pdf-tools/jpg-to-png',
  keywords: ['jpg to png', 'convert jpg to png', 'jpeg to png', 'change jpg to png', 'free jpg to png converter', 'lossless image conversion'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'JPG to PNG Converter',
  description: 'Instantly convert JPG images to high-quality PNG format online. 100% free, highly secure, browser-based conversion with no server uploads.',
  path: '/tools/pdf-tools/jpg-to-png',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'JPG to PNG Converter', path: '/tools/pdf-tools/jpg-to-png' }
]);

export default function JpgToPngPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <JpgToPngClient />
    </>
  );
}
