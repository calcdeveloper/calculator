import ExtractPagesClient from './ExtractPagesClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Extract PDF Pages Online - Free PDF Page Extractor | ToolsWizard',
  description:
    'Extract specific pages from PDF files instantly. Free online PDF page extractor tool. Select and download individual pages from your PDF documents securely.',
  path: '/tools/pdf-tools/extract-pages',
  keywords: [
    'extract PDF pages',
    'PDF page extractor',
    'split PDF pages',
    'PDF page separator',
    'extract pages from PDF',
    'PDF page remover',
    'PDF page selector',
    'online PDF extractor',
    'free PDF tool',
    'PDF manipulation',
    'PDF page download',
    'PDF page splitter',
  ],
  openGraph: {
    title: 'Extract PDF Pages Online - Free PDF Page Extractor',
    description:
      'Extract specific pages from PDF files instantly. Secure, private, and free.',
  },
  twitter: {
    title: 'Extract PDF Pages Online',
    description:
      'Extract specific pages from PDF files instantly. No registration required.',
  },
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract pages from a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your PDF file, select the pages you want to extract using the page range or individual selection, and click the extract button. The selected pages will be downloaded as a new PDF."
      }
    },
    {
      "@type": "Question",
      "name": "Is my PDF data secure?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, all PDF processing happens entirely in your browser. Your files are never uploaded to our servers, ensuring complete privacy and security."
      }
    },
    {
      "@type": "Question",
      "name": "Can I extract multiple pages at once?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, you can select multiple pages or use page ranges (e.g., 1-5, 8, 10-12) to extract multiple pages at once into a single PDF."
      }
    },
    {
      "@type": "Question",
      "name": "What file size limits apply?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There are no strict file size limits. However, very large PDF files may take longer to process depending on your device's capabilities."
      }
    }
  ]
};

const toolSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Page Extractor",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "description": "Free online PDF page extractor tool. Extract specific pages from PDF documents securely and instantly.",
  "featureList": [
    "Extract specific PDF pages",
    "Page range selection",
    "Individual page selection",
    "Client-side processing",
    "No file size limits",
    "Instant download",
    "No registration required"
  ]
};

export default function ExtractPages() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolSchema) }}
      />
      
      <ExtractPagesClient />
    </>
  );
}
