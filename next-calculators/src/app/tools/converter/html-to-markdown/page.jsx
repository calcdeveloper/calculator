import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import HtmlToMarkdownClient from './HtmlToMarkdownClient';
import HtmlToMarkdownSeo from '@/components/tools/HtmlToMarkdownSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'HTML to Markdown Converter Online | Clean to MD Free',
  description:
    'Convert raw HyperText Markup Language (HTML) code into clean, readable Markdown text instantly. Supports GitHub Flavored Markdown (GFM) and runs in-browser.',
  path: '/tools/converter/html-to-markdown',
  keywords: [
    'html to markdown',
    'html to md',
    'convert html to markdown',
    'html to markdown converter',
    'html to gfm'
  ],
  openGraph: {
    title: 'Free HTML to Markdown Converter',
    description:
      'Instantly strip HTML tags and convert your content into clean, readable Markdown syntax.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "HTML to Markdown Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A high-speed, secure client-side utility that converts raw HTML strings and documents into GitHub Flavored Markdown."
};

export default function HtmlToMarkdownPage() {
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
          <span className="text-conv-white">HTML to Markdown</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            HTML to Markdown Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Strip away complex HTML tags and transform your content into clean, highly readable Markdown text instantly.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <HtmlToMarkdownClient />
        
        <HtmlToMarkdownSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/html-to-markdown" />
      </main>
    </div>
  );
}
