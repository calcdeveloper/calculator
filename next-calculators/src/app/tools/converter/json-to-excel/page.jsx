import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonToExcelClient from './JsonToExcelClient';
import JsonToExcelSeo from '@/components/tools/JsonToExcelSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'JSON to Excel Converter Online | Export JSON to XLSX',
  description:
    'Instantly convert JSON arrays to downloadable Excel (XLSX) spreadsheets. Secure, client-side, browser-based conversion with no server uploads.',
  path: '/tools/converter/json-to-excel',
  keywords: [
    'json to excel',
    'json to xlsx',
    'convert json to excel',
    'export json to excel',
    'json to spreadsheet'
  ],
  openGraph: {
    title: 'Free JSON to Excel Converter',
    description:
      'Transform complex JSON object arrays into perfectly formatted, downloadable Microsoft Excel (.xlsx) files.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "JSON to Excel Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A secure client-side tool to convert nested JSON arrays directly into downloadable XLSX spreadsheet files for business analysis."
};

export default function JsonToExcelPage() {
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
          <span className="text-conv-white">JSON to Excel</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            JSON to Excel Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Instantly export complex JSON arrays into beautifully formatted, downloadable <code>.xlsx</code> spreadsheets.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <JsonToExcelClient />
        
        <JsonToExcelSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/json-to-excel" />
      </main>
    </div>
  );
}
