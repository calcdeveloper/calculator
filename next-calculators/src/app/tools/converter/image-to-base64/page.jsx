import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import ImageToBase64Client from './ImageToBase64Client';
import ImageToBase64Seo from '@/components/tools/ImageToBase64Seo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Image to Base64 Converter Online | Embed Images to Data URI',
  description:
    'Convert PNG, JPG, WEBP, and SVG images into Base64 Data URIs. Generate raw Base64, HTML tags, and CSS background code instantly in your browser.',
  path: '/tools/converter/image-to-base64',
  keywords: [
    'image to base64',
    'image to data uri',
    'base64 image encoder',
    'convert image to base64',
    'png to base64',
    'jpg to base64'
  ],
  openGraph: {
    title: 'Free Image to Base64 Encoder',
    description:
      'Instantly convert your images into copy-ready Base64 Data URIs for inline HTML and CSS embedding.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Image to Base64 Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "A secure client-side utility to encode image files into standard Base64 Data URIs for optimal web performance."
};

export default function ImageToBase64Page() {
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
          <span className="text-conv-white">Image to Base64</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Image to Base64 Converter
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Instantly encode PNG, JPG, and SVG files into Base64 Data URIs to embed directly in your HTML or CSS.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <ImageToBase64Client />
        
        <ImageToBase64Seo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/image-to-base64" />
      </main>
    </div>
  );
}
