import React from 'react';
import PdfOcrClient from './PdfOcrClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PDF OCR - Extract Text from Scanned PDFs & Images',
  description: 'Convert scanned PDFs and images into searchable, selectable text using Optical Character Recognition natively in your browser with zero server uploads.',
  path: '/tools/pdf-tools/pdf-ocr',
  keywords: ['pdf ocr', 'extract text from pdf', 'scanned pdf to text', 'browser ocr', 'free ocr tool', 'client side ocr', 'image ocr online'],
  openGraph: {
    title: 'PDF OCR Extractor - Free & Private',
    description: 'Convert scanned PDFs and images into searchable, editable text using browser-based OCR.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF OCR Extractor',
  description: 'Browser-based optical character recognition to extract text from scanned PDF documents and images.',
  path: '/tools/pdf-tools/pdf-ocr',
  category: 'UtilityApplication',
  featureList: [
    'Extract text from scanned PDFs',
    'Extract text from PNG, JPG, and WebP images',
    'Multi-page PDF OCR extraction',
    'Copy text to clipboard',
    'Download extracted text as .txt file',
    '100% private in-browser Tesseract processing'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF OCR Extractor', path: '/tools/pdf-tools/pdf-ocr' }
]);

export default function PdfOcrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PdfOcrClient />
    </>
  );
}
