import React from 'react';
import PowerPointToPdfClient from './PowerPointToPdfClient';

export const metadata = {
  title: 'PowerPoint to PDF Converter | Private Slide Extraction',
  description: 'Convert PowerPoint presentations (.pptx) to PDF files purely in your browser. 100% private text extraction with zero server uploads required.',
  keywords: 'powerpoint to pdf, convert pptx to pdf, private powerpoint converter, client side pptx to pdf',
  openGraph: {
    title: 'PowerPoint to PDF Converter | Private Conversion',
    description: 'Convert PowerPoint documents to PDF files purely in your browser. 100% private conversion.',
    type: 'website',
  },
};

export default function PowerPointToPdfPage() {
  return <PowerPointToPdfClient />;
}
