import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import TimestampToDateClient from './TimestampToDateClient';
import TimestampToDateSeo from '@/components/tools/TimestampToDateSeo';
import RelatedConverterTools from '@/components/tools/RelatedConverterTools';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Unix Timestamp to Date Converter | Epoch to Human Readable',
  description:
    'Convert Unix Epoch timestamps into human-readable calendar dates, UTC time, and ISO 8601 strings instantly. Auto-detects seconds and milliseconds.',
  path: '/tools/converter/timestamp-to-date',
  keywords: [
    'timestamp to date',
    'unix timestamp converter',
    'epoch to date',
    'epoch converter',
    'time to date online'
  ],
  openGraph: {
    title: 'Free Unix Timestamp to Date Converter',
    description:
      'Instantly convert Unix timestamps into human-readable local time, UTC, and ISO formats within your browser.',
  },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Timestamp to Date Converter",
  "operatingSystem": "Any",
  "applicationCategory": "DeveloperApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "An essential utility for developers to instantly translate Unix Epoch integer timestamps into standardized calendar date formats."
};

export default function TimestampToDatePage() {
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
          <span className="text-conv-white">Timestamp to Date</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Unix Timestamp to Date
          </h1>
          <p className="text-xl text-conv-white/90 leading-relaxed">
            Translate cryptic Epoch integer timestamps into human-readable dates, UTC, and ISO strings instantly.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <TimestampToDateClient />
        
        <TimestampToDateSeo />
        
        <RelatedConverterTools currentToolPath="/tools/converter/timestamp-to-date" />
      </main>
    </div>
  );
}
