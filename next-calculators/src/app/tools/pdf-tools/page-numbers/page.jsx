import PageNumbersClient from './PageNumbersClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Add Page Numbers to PDF Online Free | Secure PDF Pagination',
  description:
    'Add page numbers to PDF documents instantly. Free, secure, client-side browser tool to insert page numbers with custom positioning.',
  path: '/tools/pdf-tools/page-numbers',
  keywords: [
    'add page numbers to PDF', 'PDF pagination', 'insert page numbers PDF',
    'number PDF pages online', 'free PDF page numbering', 'secure PDF pagination',
    'add page numbers locally', 'client-side PDF page numbers', 'PDF header footer'
  ],
  openGraph: {
    title: 'Add Page Numbers to PDF Online - Free & Secure',
    description:
      'Insert page numbers into your PDF documents instantly. Processed completely privately in your browser.',
  },
  twitter: {
    title: 'Add Page Numbers to PDF Online | Free Tool',
    description:
      'Insert page numbers into your PDF documents instantly. Processed completely privately in your browser.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Page Numberer",
  "description": "Free online tool to add page numbers to PDF files securely in your web browser.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Add page numbers automatically",
    "Customizable positioning (top, bottom, left, right, center)",
    "Client-side processing",
    "No file size limits",
    "Instant download",
    "No registration required"
  ]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Where can I place the page numbers?", "acceptedAnswer": { "@type": "Answer", "text": "Our tool allows you to place page numbers in six different standard locations: top-left, top-center, top-right, bottom-left, bottom-center, and bottom-right." } },
    { "@type": "Question", "name": "Is my document uploaded to a server?", "acceptedAnswer": { "@type": "Answer", "text": "No. The text injection process happens entirely inside your local web browser. We never upload, save, or view your PDF documents, ensuring total data privacy." } },
    { "@type": "Question", "name": "Will the numbers cover my text?", "acceptedAnswer": { "@type": "Answer", "text": "The tool uses intelligent margin offsets to draw the page numbers near the physical edges of the canvas, which generally avoids overlapping with your main content body." } },
    { "@type": "Question", "name": "Is the quality of my PDF reduced?", "acceptedAnswer": { "@type": "Answer", "text": "No, the operation is completely lossless. We simply embed a standard font and inject vector text nodes onto the existing pages without compressing your original images or text." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Add Page Numbers", "item": "https://toolswizard.com/tools/pdf-tools/page-numbers" }
  ]
};

export default function PageNumbersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <PageNumbersClient />
    </>
  );
}
