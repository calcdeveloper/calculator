import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Base64ToFileClient from './Base64ToFileClient';
import Base64ToFileSeo from '@/components/tools/Base64ToFileSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Base64 to File Decoder | Instantly Download Encoded Data',
  description:
    'Decode Base64 text strings back into original binary files (images, PDFs, ZIPs, documents). Auto-detects MIME types and triggers secure client-side downloads.',
  path: '/tools/converter/base64-to-file',
  keywords: [
    'base64 to file',
    'base64 decoder',
    'decode base64 online',
    'base64 to image',
    'base64 to pdf',
    'data uri decoder'
  ],
  openGraph: {
    title: 'Free Base64 to File Decoder',
    description:
      'Instantly reverse-engineer encoded Base64 strings and Data URIs back into their original binary file formats securely in your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Base64 to File Decoder",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A secure client-side utility to decode Base64 encoded text strings back into native binary file formats for direct download."
};

export default function Base64ToFilePage() {
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
          <span className="text-conv-white">Base64 to File</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Base64 to File Decoder
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Instantly decode Base64 strings and Data URIs back into original images, PDFs, or documents directly in your browser.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <Base64ToFileClient />
        
        <Base64ToFileSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/base64-to-file" />
      </main>
    </div>
  );
}
