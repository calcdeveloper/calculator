export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import PdfCompressClient from './PdfCompressClient';

export const metadata = createPageMetadata({
  title: 'PDF Compressor - Reduce PDF File Size Online Free & Private',
  description: 'Compress large PDF files instantly. Reduce file size without losing quality. 100% free, secure, and browser-based PDF optimization. No server uploads.',
  path: '/tools/pdf-tools/pdf-compress',
  keywords: ['pdf compressor', 'compress pdf online', 'reduce pdf file size', 'shrink pdf', 'optimize pdf', 'free pdf compressor'],
});


const softwareSchema = createSoftwareAppSchema({
  name: 'PDF Compressor',
  description: 'Compress large PDF files instantly. Reduce file size without losing quality. 100% free, secure, and browser-based PDF optimization. No server uploads.',
  path: '/tools/pdf-tools/pdf-compress',
  category: 'WebApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF Compressor', path: '/tools/pdf-tools/pdf-compress' }
]);

export default function PdfCompressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PdfCompressClient />
    </>
  );
}
