import React from 'react';
import ExcelToPdfClient from './ExcelToPdfClient';

export const metadata = {
  title: 'Excel to PDF Converter | Private Data Extraction',
  description: 'Convert Excel spreadsheets (.xlsx, .xls, .csv) to PDF files purely in your browser. 100% private conversion with zero server uploads required.',
  keywords: 'excel to pdf, convert xlsx to pdf, private excel converter, client side excel to pdf',
  openGraph: {
    title: 'Excel to PDF Converter | Private Conversion',
    description: 'Convert Excel documents to PDF files purely in your browser. 100% private conversion.',
    type: 'website',
  },
};

export default function ExcelToPdfPage() {
  return <ExcelToPdfClient />;
}
