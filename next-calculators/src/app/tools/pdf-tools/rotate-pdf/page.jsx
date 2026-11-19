import React from 'react';
import RotatePdfClient from './RotatePdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Rotate PDF - Rotate PDF Pages Permanently Online Free',
  description:
    'Rotate PDF pages permanently online for free. Fix upside-down or sideways documents with zero server uploads, lossless quality, and instant PDF download.',
  path: '/tools/pdf-tools/rotate-pdf',
  keywords: [
    'rotate pdf',
    'rotate pdf pages',
    'rotate pdf online free',
    'rotate pdf permanently',
    'fix sideways pdf',
    'turn pdf upside down',
    'rotate pdf 90 degrees',
    'rotate individual pdf pages',
    'client-side pdf rotate'
  ],
  openGraph: {
    title: 'Rotate PDF - Rotate PDF Pages Permanently Online Free',
    description:
      'Rotate PDF pages permanently online for free. Fix upside-down or sideways pages with complete privacy and zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF Rotator',
  description:
    'Rotate PDF pages permanently online for free. Fix upside-down or sideways documents with zero server uploads, lossless quality, and instant PDF download.',
  path: '/tools/pdf-tools/rotate-pdf',
  category: 'WebApplication',
  featureList: [
    'Rotate entire PDF document or selective individual pages',
    'Permanent structural rotation locked into PDF object dictionary',
    '100% lossless byte-level metadata modification without rasterization',
    'Client-side processing in browser memory with zero server uploads',
    'Preserves vector fonts, searchable text, bookmarks, and form fields',
    'Instant local download with zero file size limits'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Rotate PDF', path: '/tools/pdf-tools/rotate-pdf' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is the page rotation permanent, or will it revert when I send the file to someone else?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The rotation applied by ToolsWizard is 100% permanent. Unlike basic desktop PDF viewers that only rotate the visual rendering in memory for temporary viewing, our engine actively updates the internal /Rotate attribute key in the PDF object dictionary and rebuilds the cross-reference table. The corrected orientation is permanently saved into the file bytes and will render identically across all devices, operating systems, mobile phones, and printers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will rotating my PDF degrade the visual quality of text or embedded images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our rotation process is entirely lossless. We do not re-rasterize, re-compress, or re-encode your PDF content. The underlying vector text glyphs, font programs, high-resolution photographs, and Bézier curves remain 100% byte-for-byte identical. We strictly modify the page\'s orientation metadata dictionary, which instructs the PDF rendering engine at what angle to display the unchanged content stream.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I rotate individual specific pages without rotating the entire document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our interface displays interactive thumbnail previews of every page in your document. You can select and rotate individual pages independently (such as rotating only page 4 and page 12 of a 50-page financial report) while leaving all other pages in their original orientation. You can also use global controls to rotate all pages simultaneously.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my sensitive PDF document uploaded to any cloud server during rotation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ToolsWizard enforces a strict zero-trust client architecture. All PDF parsing, thumbnail rendering, metadata modification, and file compilation execute locally inside your browser via WebAssembly and JavaScript. Your confidential documents never leave your computer, traverse external networks, or touch third-party servers, ensuring complete compliance with GDPR, HIPAA, and SOX privacy regulations.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I rotate PDF pages on my iPhone, iPad, or Android smartphone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard is engineered to be fully responsive and works smoothly in mobile browsers including Apple Safari on iOS/iPadOS and Google Chrome on Android. You can select PDF documents directly from your Files app, iCloud Drive, or Google Drive, rotate pages with intuitive touch controls, and download the permanently modified document immediately without installing native apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do court electronic filing systems (CM/ECF) reject sideways or upside-down PDFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Electronic court filing systems enforce strict procedural guidelines requiring all exhibits, affidavits, and pleadings to be filed in the proper reading orientation. Sideways exhibits obstruct judicial review on fixed monitors and tablet dockets, misalign Bates stamp numbering, and cause OCR search indexing to fail. Court clerks routinely issue Defective Filing notices for misaligned pages, necessitating formal motions to substitute exhibits.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will rotating a page affect clickable hyperlinks, form fields, or bookmarks?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Because our tool mutates the /Rotate attribute key in the page dictionary, conformant PDF viewers automatically transform annotation coordinates (/Annots) synchronously with the visual canvas. Interactive form fields, clickable web links, table of contents bookmarks, and text highlights remain completely operational and properly aligned.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I rotate password-protected or encrypted PDF files?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a PDF is secured with an Owner Password that restricts page modification, or an Open/User Password that prevents reading, you must first unlock the file using the authorized password. Once unlocked, the browser engine can read the object graph and apply rotation. After rotating, you can re-apply enterprise encryption using our Password Protect PDF tool.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a file size limit or page count cap when rotating PDFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because all processing runs locally on your computer\'s CPU and memory, ToolsWizard does not impose artificial file size ceilings or daily quotas. Practical limits depend solely on your computer\'s available RAM. Modern workstations easily rotate documents containing hundreds of pages and large architectural blueprints exceeding 100 MB directly in the browser.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I rotate pages by custom angles such as 45 degrees or 180 degrees?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under the international PDF specification (ISO 32000-1), page-level rotation via the /Rotate dictionary is explicitly restricted to integer multiples of 90 degrees: 0°, 90°, 180°, and 270°. Arbitrary angles (like 45°) cannot be applied as a page orientation attribute. To straighten slightly crooked or skewed paper scans (deskewing), the underlying image must be processed through an image deskew filter before compiling to PDF.'
      }
    }
  ]
};

export default function RotatePdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <RotatePdfClient />
    </>
  );
}
