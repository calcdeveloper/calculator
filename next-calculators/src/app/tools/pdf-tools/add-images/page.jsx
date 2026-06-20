import AddImagesClient from './AddImagesClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Add Images to PDF Online Free | Insert Image into PDF Securely',
  description:
    'Add images, logos, or signatures to your PDF documents instantly. Free, secure, client-side browser tool to insert images into PDF files.',
  path: '/tools/pdf-tools/add-images',
  keywords: [
    'add images to PDF', 'insert image into PDF', 'put picture in PDF',
    'add logo to PDF', 'insert signature into PDF', 'add JPG to PDF',
    'add PNG to PDF', 'free PDF image editor', 'secure PDF image inserter'
  ],
  openGraph: {
    title: 'Add Images to PDF Online - Free & Secure',
    description:
      'Insert images, logos, or signatures into your PDF documents instantly. Processed completely privately in your browser.',
  },
  twitter: {
    title: 'Add Images to PDF Online | Free Tool',
    description:
      'Insert images, logos, or signatures into your PDF documents instantly. Processed completely privately in your browser.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Image Inserter",
  "description": "Free online tool to add images to PDF files securely in your web browser.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "featureList": [
    "Add JPG and PNG images to PDF",
    "Support for transparent PNGs (signatures/watermarks)",
    "Append images as new pages",
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
    { "@type": "Question", "name": "Does this tool upload my signature or PDF to a server?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely not. We use a Zero-Trust client-side architecture. Both your PDF and your images are processed locally in your computer's RAM. We never see or store your files." } },
    { "@type": "Question", "name": "Can I add transparent PNGs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes! Our engine fully supports PNG alpha channels. This is perfect for adding signatures or watermarks without a white box blocking the text behind it." } },
    { "@type": "Question", "name": "Will adding an image make my PDF blurry?", "acceptedAnswer": { "@type": "Answer", "text": "No. The insertion process is 100% lossless. We do not flatten your PDF or convert your text to an image. Your original text remains crisp and searchable." } },
    { "@type": "Question", "name": "How does the image get placed?", "acceptedAnswer": { "@type": "Answer", "text": "You can upload an image and the tool will automatically append it as a perfectly scaled new page at the end of your document, ensuring the aspect ratio is maintained." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Add Images to PDF", "item": "https://toolswizard.com/tools/pdf-tools/add-images" }
  ]
};

export default function AddImagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      <AddImagesClient />
    </>
  );
}
