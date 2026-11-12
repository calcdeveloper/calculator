import React from 'react';
import PdfToWordClient from './PdfToWordClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PDF to Word Converter - Free Online PDF to DOCX',
  description: 'Convert PDF documents into editable Word (.docx) files purely in your browser. 100% private text extraction with zero server uploads required.',
  path: '/tools/pdf-tools/pdf-to-word',
  keywords: ['pdf to word', 'convert pdf to docx', 'pdf to doc', 'extract pdf text', 'secure pdf to word', 'client side pdf converter'],
  openGraph: {
    title: 'PDF to Word Converter - Free & Private',
    description: 'Convert PDF documents into editable Word (.docx) files directly in your browser.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF to Word Converter',
  description: 'Convert PDF documents into editable Microsoft Word (.docx) documents securely in your web browser.',
  path: '/tools/pdf-tools/pdf-to-word',
  category: 'BusinessApplication',
  featureList: [
    'Convert PDF to DOCX format',
    'Client-side text extraction',
    'Maintain paragraph structure',
    'Instant DOCX download',
    'No file upload to external servers'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF to Word', path: '/tools/pdf-tools/pdf-to-word' }
]);

export default function PdfToWordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PdfToWordClient />
    </>
  );
}
