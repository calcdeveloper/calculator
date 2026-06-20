import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import DecimalToBinaryClient from './DecimalToBinaryClient';
import DecimalToBinarySeo from '@/components/tools/DecimalToBinarySeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Decimal to Binary Converter Online | Base-10 to Base-2',
  description:
    'Instantly convert human-readable decimal integers (Base-10) into machine-readable binary code (Base-2). Fast, secure, and accurate calculator for programmers.',
  path: '/tools/converter/decimal-to-binary',
  keywords: [
    'decimal to binary',
    'base 10 to base 2',
    'convert decimal to binary',
    'decimal to binary calculator',
    'integer to binary'
  ],
  openGraph: {
    title: 'Free Decimal to Binary Converter',
    description:
      'Translate standard decimal numbers into exact binary sequences instantly within your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Decimal to Binary Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An educational and technical calculator that translates base-10 decimal integers into base-2 binary machine code."
};

export default function DecimalToBinaryPage() {
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
          <span className="text-conv-white">Decimal to Binary</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Decimal to Binary Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Quickly translate standard Base-10 integers into machine-readable Base-2 binary code.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <DecimalToBinaryClient />
        
        <DecimalToBinarySeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/decimal-to-binary" />
      </main>
    </div>
  );
}
