import React from 'react';
import PowerPointToPdfClient from './PowerPointToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PowerPoint to PDF Converter - Convert PPTX Online',
  description: 'Convert PowerPoint presentations (.pptx) to PDF files purely in your browser. 100% private conversion with zero server uploads required.',
  path: '/tools/pdf-tools/powerpoint-to-pdf',
  keywords: ['powerpoint to pdf', 'convert pptx to pdf', 'ppt to pdf', 'private powerpoint converter', 'client side pptx to pdf'],
  openGraph: {
    title: 'PowerPoint to PDF Converter - Free & Private',
    description: 'Convert PPTX presentation slides into PDF documents safely in your browser.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PowerPoint to PDF Converter',
  description: 'Browser-based tool to convert PowerPoint (.pptx) slides into PDF documents with complete privacy.',
  path: '/tools/pdf-tools/powerpoint-to-pdf',
  category: 'BusinessApplication',
  featureList: [
    'Convert .pptx slides to PDF',
    'Client-side slide rendering',
    'Fast processing without server queue',
    'Download instant PDF',
    'No registration required'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PowerPoint to PDF', path: '/tools/pdf-tools/powerpoint-to-pdf' }
]);

export default function PowerPointToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <PowerPointToPdfClient />
    </>
  );
}
