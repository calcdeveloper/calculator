import MergePdfClient from './MergePdfClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Merge PDF Files Online Free | Combine PDFs Securely',
  description:
    'Merge multiple PDF files into a single document instantly. Free, secure, client-side browser PDF combiner with zero file uploads.',
  path: '/tools/pdf-tools/merge-pdf',
  keywords: [
    'merge PDF', 'combine PDF', 'merge PDF files online', 'combine PDFs free',
    'secure PDF merger', 'client-side PDF merge', 'join PDF files',
    'PDF combiner online', 'merge multiple PDFs into one', 'private PDF merger'
  ],
  openGraph: {
    title: 'Merge PDF Files Online - Free & Secure',
    description:
      'Combine multiple PDF documents into one instantly. Processed completely privately in your browser.',
  },
  twitter: {
    title: 'Merge PDF Files Online | Free Combiner',
    description:
      'Combine multiple PDF documents into one instantly. Processed completely privately in your browser.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Merger",
  "description": "Free online tool to combine multiple PDF files into one document securely in your web browser.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Merge multiple PDFs",
    "Drag and drop reordering",
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
    { "@type": "Question", "name": "How many files can I merge?", "acceptedAnswer": { "@type": "Answer", "text": "You can merge as many files as your device's memory can handle. Since the processing runs entirely in your browser without uploading to a server, there are no artificial limits placed on file counts." } },
    { "@type": "Question", "name": "Can I reorder the files before merging?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, once you upload multiple files, you can use the visual interface to reorder them or remove specific files before triggering the final merge." } },
    { "@type": "Question", "name": "Is my data secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, 100%. We use a zero-trust architecture. Your PDFs are never uploaded to any remote server. The merging happens locally on your computer's CPU." } },
    { "@type": "Question", "name": "Does this tool reduce the quality of my PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "No. The tool performs a lossless merge. It copies the exact bytes of your fonts, images, and vectors into the new document without re-rendering or compressing them." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Merge PDF", "item": "https://toolswizard.com/tools/pdf-tools/merge-pdf" }
  ]
};

export default function MergePdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <MergePdfClient />
    </>
  );
}
