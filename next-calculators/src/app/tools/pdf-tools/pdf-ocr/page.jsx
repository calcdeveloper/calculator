import React from 'react';
import PdfOcrClient from './PdfOcrClient';

export const metadata = {
  title: 'PDF OCR | Extract Text from Scanned PDFs',
  description: 'Convert scanned PDFs and images into searchable, selectable text using Optical Character Recognition natively in your browser.',
  keywords: 'pdf ocr, extract text from pdf, scanned pdf to text, browser ocr, free ocr tool, client side ocr',
  openGraph: {
    title: 'PDF OCR | Private Text Extraction',
    description: 'Convert scanned PDFs and images into searchable, selectable text using zero-trust browser OCR.',
    type: 'website',
  },
};

export default function PdfOcrPage() {
  return <PdfOcrClient />;
}
