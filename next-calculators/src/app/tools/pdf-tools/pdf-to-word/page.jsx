import React from 'react';
import PdfToWordClient from './PdfToWordClient';

export const metadata = {
  title: 'PDF to Word Converter | Extract Text Instantly',
  description: 'Convert PDF documents into editable Word (.docx) files purely in your browser. 100% private text extraction with zero server uploads required.',
  keywords: 'pdf to word, convert pdf to docx, extract pdf text, secure pdf to word, client side pdf converter',
  openGraph: {
    title: 'PDF to Word Converter | Private Text Extraction',
    description: 'Convert PDF documents into editable Word files purely in your browser. 100% private text extraction.',
    type: 'website',
  },
};

export default function PdfToWordPage() {
  return <PdfToWordClient />;
}
