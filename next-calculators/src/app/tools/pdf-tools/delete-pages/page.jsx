import DeletePagesClient from './DeletePagesClient';

export const dynamic = "force-static";

// SEO Metadata
export const metadata = {
  title: 'Delete PDF Pages Online - Free, Fast & Secure | ToolsWizard',
  description: 'Remove unwanted pages from your PDF documents instantly. 100% secure browser-side processing—your files never leave your device. No signup required.',
  keywords: [
    'delete pdf pages', 'remove pages from pdf', 'pdf page remover', 
    'delete pages in pdf online', 'free pdf page editor', 'secure pdf page deletion'
  ],
  alternates: { canonical: 'https://toolswizard.in/pdf-tools/delete-pages' },
  openGraph: {
    title: 'Delete PDF Pages Online - Free & Secure',
    description: 'The fastest way to remove pages from PDF. Local browser processing for total privacy.',
    url: 'https://toolswizard.in/pdf-tools/delete-pages',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete PDF Pages Online | ToolsWizard',
    description: 'Delete unwanted PDF pages in seconds. Fast and private.',
  },
};

// Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "Delete PDF Pages Tool",
      "operatingSystem": "Any",
      "applicationCategory": "MultimediaApplication",
      "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
      "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "1250" }
    },
    {
      "@type": "HowTo",
      "name": "How to Delete Pages from PDF",
      "step": [
        { "@type": "HowToStep", "text": "Upload your PDF file to the tool." },
        { "@type": "HowToStep", "text": "Select the thumbnails of the pages you want to remove." },
        { "@type": "HowToStep", "text": "Click 'Delete Selected Pages'." },
        { "@type": "HowToStep", "text": "Download your modified PDF." }
      ]
    }
  ]
};

export default function DeletePagesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <DeletePagesClient />
    </>
  );
}