import ExtractPagesClient from './ExtractPagesClient';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Extract PDF Pages Online Free | Fast PDF Extractor',
  description:
    'Extract specific pages from PDF files instantly with our free online PDF page extractor. Select, separate, and download custom pages securely.',
  path: '/tools/pdf-tools/extract-pages',
  keywords: [
    'extract PDF pages', 'extract PDF pages online', 'extract pages from PDF', 
    'PDF page extractor', 'extract specific pages from PDF', 'free PDF extractor', 
    'PDF page extraction tool', 'extract selected PDF pages', 'save PDF pages separately', 
    'split PDF by page selection', 'online PDF extractor', 'extract PDF online free', 
    'browser based PDF tool', 'PDF editing tool', 'extract multiple pages from PDF', 
    'free PDF utility', 'PDF tools online', 'secure PDF extractor', 'instant PDF page extraction', 
    'extract PDF pages India', 'extract PDF pages USA', 'select PDF pages online', 
    'create new PDF from existing PDF', 'extract pages without software', 'fast PDF extractor', 
    'private PDF tool', 'PDF page separator', 'split PDF online', 'cut PDF pages', 
    'select PDF pages', 'download PDF pages', 'separate PDF pages free', 'online document splitter'
  ],
  openGraph: {
    title: 'Extract PDF Pages Online - Free PDF Page Extractor',
    description:
      'Extract specific pages from PDF files instantly. Secure, private, and free browser-based processing.',
  },
  twitter: {
    title: 'Extract PDF Pages Online | Free PDF Extractor',
    description:
      'Extract specific pages from PDF files instantly. No registration required, client-side secure processing.',
  },
});

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "PDF Page Extractor",
  "description": "Free online PDF page extractor tool. Extract specific pages from PDF documents securely and instantly in your web browser.",
  "applicationCategory": "UtilityApplication",
  "operatingSystem": "Web browser",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
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

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is an Extract PDF Pages tool?", "acceptedAnswer": { "@type": "Answer", "text": "An Extract PDF Pages tool is a practical web-based utility that lets you isolate specific pages or custom ranges from a larger PDF document. It copies your selected pages and compiles them into a brand-new, standalone PDF file while keeping your original document completely unchanged." } },
    { "@type": "Question", "name": "Is this tool free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, this tool is 100% free to use. There are no hidden fees, monthly subscriptions, premium paywalls, or watermarks added to your downloads. You can process as many files as you need throughout the day without any restrictions." } },
    { "@type": "Question", "name": "Can I extract multiple pages at once?", "acceptedAnswer": { "@type": "Answer", "text": "Absolutely. You can select and extract multiple non-consecutive pages or continuous ranges during a single session. For example, typing a range sequence like 1-4, 7, 11-15 tells the extractor to gather all those specific pages into a single new PDF file." } },
    { "@type": "Question", "name": "Can I extract only one page?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, you can easily isolate a single page. If you only need one specific page from a large report or document, just enter that single page number into the selection field, run the extractor, and download it as a new file." } },
    { "@type": "Question", "name": "Does the original PDF remain unchanged?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, your original PDF document stays completely safe and unaltered. The extraction engine simply reads the content of the selected pages to create a brand-new file, leaving your source document completely intact on your device." } },
    { "@type": "Question", "name": "Will formatting be preserved?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, your original formatting is completely preserved. The tool replicates your chosen pages exactly as they are, keeping text fonts, vector graphics, high-resolution images, and alignment structures perfectly sharp and intact in the new file." } },
    { "@type": "Question", "name": "Can I use it on mobile?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our tool is fully responsive and works beautifully on all modern mobile devices. You can easily upload files and extract pages using Safari on iOS, Chrome on Android, or any other mobile browser without needing to install mobile apps." } },
    { "@type": "Question", "name": "Can I use it on Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the application is fully compatible with macOS. Since it runs completely inside web browsers like Safari, Chrome, or Firefox, you can seamlessly extract pages on any Mac device without buying specialized software." } },
    { "@type": "Question", "name": "Can Windows users use it?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, Windows users can use the tool without any issues. It works perfectly on Windows 10 and 11 through any standard web browser like Microsoft Edge, Google Chrome, or Mozilla Firefox." } },
    { "@type": "Question", "name": "Do I need to install software?", "acceptedAnswer": { "@type": "Answer", "text": "No installation is required. The tool is a fully online, cloud-ready utility that runs directly within your web browser, saving you from downloading clunky executables or worrying about system storage space." } },
    { "@type": "Question", "name": "Is registration required?", "acceptedAnswer": { "@type": "Answer", "text": "No registration or sign-up is required. We believe in keeping workflows frictionless, so you can upload your files, configure your page ranges, and download your new PDFs instantly without ever creating an account." } },
    { "@type": "Question", "name": "Can students use this tool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, students find this tool incredibly helpful for managing large academic files. It makes it easy to pull specific textbook chapters, syllabus guides, or research diagrams into smaller, focused study sheets that are easy to read on any device." } },
    { "@type": "Question", "name": "Can businesses use this tool?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it is excellent for professional and business use cases. Teams can quickly isolate specific contract pages, financial invoice sheets, or targeted marketing graphics to share with clients and partners, keeping their communications clean and professional." } },
    { "@type": "Question", "name": "Does it work in Chrome?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, our tool is fully optimized for Google Chrome on both desktop and mobile platforms, ensuring ultra-fast processing speeds and a smooth user experience." } },
    { "@type": "Question", "name": "Can I extract pages from large PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, the workspace is built to handle large files up to 100MB. This accommodates hefty corporate records, textbook volumes, and dense legal files quite comfortably." } },
    { "@type": "Question", "name": "Can I create a new PDF from selected pages?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, that is exactly what the tool is designed for. It takes whichever custom pages or ranges you specify and packages them into a brand-new, fully independent PDF file ready for immediate use." } },
    { "@type": "Question", "name": "Is browser-based extraction secure?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, browser-based extraction is highly secure. Because the processing runs locally on your machine using client-side JavaScript, your files are never uploaded to our servers, keeping your sensitive data private and safe." } },
    { "@type": "Question", "name": "Can I use it for office documents?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, it's perfect for standard office environments. You can use it to organize and split business proposals, HR resume bundles, tax worksheets, compliance audits, and internal training materials." } },
    { "@type": "Question", "name": "What file format will I receive?", "acceptedAnswer": { "@type": "Answer", "text": "When the extraction process is complete, you will receive a standard, high-quality .pdf file containing only the specific pages you selected, completely ready to print or share." } },
    { "@type": "Question", "name": "How do I download my extracted PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Once the tool finishes processing, a success message and a download link will appear. Just click the Download Extracted PDF button, and your new file will save straight to your device's local downloads folder." } }
  ]
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://toolswizard.com" },
    { "@type": "ListItem", "position": 2, "name": "PDF Tools", "item": "https://toolswizard.com/tools/pdf-tools" },
    { "@type": "ListItem", "position": 3, "name": "Extract PDF Pages", "item": "https://toolswizard.com/tools/pdf-tools/extract-pages" }
  ]
};

export default function ExtractPages() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      
      {/* Client Tool Interface */}
      <ExtractPagesClient />
    </>
  );
}