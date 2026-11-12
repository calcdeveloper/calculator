import React from 'react';
import ExcelToPdfClient from './ExcelToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Excel to PDF Converter - Convert Spreadsheets Online',
  description: 'Convert Excel spreadsheets (.xlsx, .xls, .csv) to high-quality PDF files purely in your browser. 100% private conversion with zero server uploads.',
  path: '/tools/pdf-tools/excel-to-pdf',
  keywords: ['excel to pdf', 'convert xlsx to pdf', 'xls to pdf', 'csv to pdf', 'private excel converter', 'client side excel to pdf'],
  openGraph: {
    title: 'Excel to PDF Converter - 100% Private & Free',
    description: 'Convert Excel spreadsheets to PDF documents safely in your browser without uploading files.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Excel to PDF Converter',
  description: 'Browser-based utility to convert Excel spreadsheets and CSV files into PDF documents privately.',
  path: '/tools/pdf-tools/excel-to-pdf',
  category: 'BusinessApplication',
  featureList: [
    'Convert .xlsx, .xls, and .csv to PDF',
    '100% client-side privacy',
    'Clean table formatting',
    'Instant download',
    'No registration required'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Excel to PDF', path: '/tools/pdf-tools/excel-to-pdf' }
]);

export default function ExcelToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />
      <ExcelToPdfClient />
    </>
  );
}
