import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import TextToBinaryClient from './TextToBinaryClient';
import TextToBinarySeo from '@/components/tools/TextToBinarySeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Text to Binary Converter Online | Translate Words to Binary',
  description:
    'Convert normal text, words, and sentences into binary code (0s and 1s) instantly. Supports UTF-8 and emojis. Free, secure, client-side translation.',
  path: '/tools/converter/text-to-binary',
  keywords: [
    'text to binary',
    'words to binary',
    'string to binary',
    'convert text to binary',
    'binary translator online'
  ],
  openGraph: {
    title: 'Free Text to Binary Converter',
    description:
      'Translate any human-readable text string into its exact 8-bit machine-language binary code instantly.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Text to Binary Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An instant client-side utility to translate readable text and UTF-8 characters into base-2 binary machine code."
};

export default function TextToBinaryPage() {
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
          <span className="text-conv-white">Text to Binary</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Text to Binary Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Instantly translate human-readable text into machine-readable binary code (0s and 1s).
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <TextToBinaryClient />
        
        <TextToBinarySeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/text-to-binary" />
      </main>
    </div>
  );
}
