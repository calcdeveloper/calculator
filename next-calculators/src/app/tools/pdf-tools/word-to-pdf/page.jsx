import React from 'react';
import WordToPdfClient from './WordToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Word to PDF Converter - Convert DOCX to PDF Online',
  description: 'Convert Microsoft Word (.docx) documents to PDF files purely in your browser. 100% private conversion with zero server uploads required.',
  path: '/tools/pdf-tools/word-to-pdf',
  keywords: ['word to pdf', 'convert docx to pdf', 'doc to pdf', 'private word converter', 'client side docx to pdf'],
  openGraph: {
    title: 'Word to PDF Converter - Free & Private',
    description: 'Convert Microsoft Word DOCX documents to PDF files safely in your browser.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Word to PDF Converter',
  description: 'Convert Microsoft Word (.docx) documents into standard PDF files directly in your web browser.',
  path: '/tools/pdf-tools/word-to-pdf',
  category: 'BusinessApplication',
  featureList: [
    'Convert .docx to PDF format',
    'Preserve fonts, lists, and formatting',
    '100% private local conversion',
    'Instant PDF download',
    'No signups or software installation'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Word to PDF', path: '/tools/pdf-tools/word-to-pdf' }
]);

export default function WordToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <WordToPdfClient />
    </>
  );
}
