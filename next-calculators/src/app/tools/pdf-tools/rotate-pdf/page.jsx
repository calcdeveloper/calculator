import RotatePdfClient from './RotatePdfClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Rotate PDF Pages Online Free | Secure PDF Rotator',
  description:
    'Rotate PDF pages permanently online for free. Fix upside down or sideways PDFs instantly with our secure, client-side browser tool.',
  path: '/tools/pdf-tools/rotate-pdf',
  keywords: [
    'rotate PDF', 'rotate PDF pages', 'rotate PDF online', 'fix sideways PDF',
    'turn PDF upside down', 'rotate PDF 90 degrees', 'permanent PDF rotation',
    'free PDF rotator', 'secure PDF rotator', 'client-side PDF rotate',
    'rotate individual PDF pages', 'change PDF orientation'
  ],
  openGraph: {
    title: 'Rotate PDF Pages Online - Free & Secure',
    description:
      'Rotate PDF pages permanently online for free. Processed securely in your browser.',
  },
  twitter: {
    title: 'Rotate PDF Pages Online | Free Tool',
    description:
      'Rotate PDF pages permanently online for free. Processed securely in your browser.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Rotator",
  "description": "Free online tool to rotate PDF pages permanently. Processed securely in your browser without server uploads.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Rotate entire PDF document",
    "Rotate individual pages",
    "Permanent rotation saved to file",
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
    { "@type": "Question", "name": "Is the rotation permanent?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, unlike basic PDF viewers that only rotate the visual rendering temporarily, our tool permanently modifies the file's internal metadata. The rotation will be saved and visible on any device you send it to." } },
    { "@type": "Question", "name": "Can I rotate just one page?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our interface allows you to view a grid of all your pages. You can choose to rotate the entire document at once, or selectively click and rotate individual pages." } },
    { "@type": "Question", "name": "Is this tool secure?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. The tool operates 100% within your local web browser using client-side JavaScript. Your PDF file is never uploaded to any remote server, ensuring total privacy." } },
    { "@type": "Question", "name": "Will rotating reduce the quality of my PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. The rotation process is entirely lossless. We do not re-render your images or text; we simply update the orientation metadata dictionary, keeping your original quality perfectly intact." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Rotate PDF", "item": "https://toolswizard.com/tools/pdf-tools/rotate-pdf" }
  ]
};

export default function RotatePdfPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <RotatePdfClient />
    </>
  );
}
