import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import CsvToJsonClient from './CsvToJsonClient';
import CsvToJsonSeo from '@/components/tools/CsvToJsonSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'CSV to JSON Converter Online | Tabular Data to JSON Objects',
  description:
    'Convert Comma-Separated Values (CSV) files into arrays of JSON objects. High-speed, secure, and client-side tabular to structured data converter.',
  path: '/tools/converter/csv-to-json',
  keywords: [
    'csv to json',
    'convert csv to json',
    'csv to json online',
    'parse csv to json',
    'spreadsheet to json'
  ],
  openGraph: {
    title: 'Free CSV to JSON Converter',
    description:
      'Instantly transform Comma-Separated Values (CSV) spreadsheets into hierarchical JavaScript Object Notation (JSON) format.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "CSV to JSON Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A high-performance browser tool to convert CSV data strings into perfectly formatted, structured JSON arrays."
};

export default function CsvToJsonPage() {
  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Header */}
      <header className="bg-gradient-to-r from-conv-primary to-conv-primaryDark pt-24 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-conv-white/70 text-sm mb-8 max-w-5xl mx-auto">
          <Link href="/tools" className="hover:text-conv-white transition-colors">Tools</Link> 
          <ChevronRight size={16} /> 
          <Link href="/tools/converter" className="hover:text-conv-white transition-colors">Converter Tools</Link>
          <ChevronRight size={16} /> 
          <span className="text-conv-white">CSV to JSON</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            CSV to JSON Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Translate tabular spreadsheet data into properly structured JSON object arrays instantly and privately in your browser.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <CsvToJsonClient />
        
        <CsvToJsonSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/csv-to-json" />
      </main>
    </div>
  );
}
