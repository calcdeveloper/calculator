import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import MarkdownToHtmlClient from './MarkdownToHtmlClient';
import MarkdownToHtmlSeo from '@/components/tools/MarkdownToHtmlSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Markdown to HTML Converter Online | Instant MD to HTML',
  description:
    'Instantly convert Markdown syntax into clean, production-ready HTML code. Features zero-latency browser-based compilation and GitHub Flavored Markdown support.',
  path: '/tools/converter/markdown-to-html',
  keywords: [
    'markdown to html',
    'md to html',
    'convert markdown to html',
    'markdown compiler online',
    'gfm to html'
  ],
  openGraph: {
    title: 'Free Markdown to HTML Converter',
    description:
      'Compile your plain-text Markdown into structurally perfect HTML instantly and securely within your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Markdown to HTML Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A secure client-side compiler that transforms Markdown text into valid HTML5 code instantly."
};

export default function MarkdownToHtmlPage() {
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
          <span className="text-conv-white">Markdown to HTML</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Markdown to HTML Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Compile plain-text Markdown into clean, production-ready HTML code instantly in your browser.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <MarkdownToHtmlClient />
        
        <MarkdownToHtmlSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/markdown-to-html" />
      </main>
    </div>
  );
}
