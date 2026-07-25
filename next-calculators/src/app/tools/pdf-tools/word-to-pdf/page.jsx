import React from 'react';
import WordToPdfClient from './WordToPdfClient';

export const metadata = {
  title: 'Word to PDF Converter | Convert DOCX Privately',
  description: 'Convert Microsoft Word (.docx) documents to PDF files purely in your browser. 100% private conversion with zero server uploads required.',
  keywords: 'word to pdf, convert docx to pdf, private word converter, client side docx to pdf',
  openGraph: {
    title: 'Word to PDF Converter | Private Conversion',
    description: 'Convert Word documents to PDF files purely in your browser. 100% private conversion.',
    type: 'website',
  },
};

export default function WordToPdfPage() {
  return <WordToPdfClient />;
}
