import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import XmlJsonClient from './XmlJsonClient';
import XmlJsonSeo from '@/components/tools/XmlJsonSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'XML to JSON Converter Online | Transform XML to JSON Free',
  description:
    'Convert Extensible Markup Language (XML) documents into structured JavaScript Object Notation (JSON) format instantly. Secure, client-side browser conversion.',
  path: '/tools/converter/xml-json',
  keywords: [
    'xml to json',
    'convert xml to json',
    'xml to json converter',
    'parse xml to json',
    'xml to json online'
  ],
  openGraph: {
    title: 'Free XML to JSON Converter',
    description:
      'Transform Extensible Markup Language (XML) documents into JavaScript Object Notation (JSON) format instantly and securely.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "XML to JSON Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A fast, client-side tool to convert XML strings and files into clean, structured JSON format for modern web development."
};

export default function XmlJsonPage() {
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
          <span className="text-conv-white">XML to JSON</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            XML to JSON Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Translate complex XML payloads into clean, universally supported JSON objects instantly in your browser.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <XmlJsonClient />
        
        <XmlJsonSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/xml-json" />
      </main>
    </div>
  );
}
