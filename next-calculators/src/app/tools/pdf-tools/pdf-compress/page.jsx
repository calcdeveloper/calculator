export const dynamic = "force-static";

import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';
import PdfCompressClient from './PdfCompressClient';

export const metadata = createPageMetadata({
  title: 'PDF Compressor - Reduce PDF File Size Online Free',
  description:
    'Compress PDF files online for free. Reduce PDF size to exact KB targets without losing quality with zero-trust in-browser processing and no server uploads.',
  path: '/tools/pdf-tools/pdf-compress',
  keywords: [
    'pdf compressor',
    'compress pdf online',
    'reduce pdf file size',
    'shrink pdf',
    'optimize pdf',
    'free pdf compressor',
    'compress pdf to 200kb',
    'compress pdf to 100kb',
    'client side pdf compression',
    'lossless pdf compression'
  ],
  openGraph: {
    title: 'PDF Compressor - Reduce PDF File Size Online Free',
    description:
      'Compress PDF files online for free. Reduce PDF size to exact KB targets without losing quality with zero-trust in-browser processing and no server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF Compressor',
  description:
    'Compress PDF files online for free. Reduce PDF size to exact KB targets without losing quality with zero-trust in-browser processing and no server uploads.',
  path: '/tools/pdf-tools/pdf-compress',
  category: 'WebApplication',
  featureList: [
    'Lossless structural PDF optimization and dead object pruning',
    'Adaptive raster downsampling with target KB ceiling configuration',
    '100% private client-side zero-trust browser execution',
    'Zero server uploads or cloud file storage',
    'FlateDecode stream re-compression and font subsetting',
    'Instant local download with zero network latency'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF Compressor', path: '/tools/pdf-tools/pdf-compress' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Will compressing a PDF make my text or embedded images blurry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In standard Lossless mode, absolutely not. Our engine utilizes structural code optimization, dead object garbage collection, and metadata sanitization without altering visual pixel matrices or rasterizing vector typography. Your text, lines, and embedded photographs remain 100% razor-sharp. In Target KB Mode, adaptive downsampling adjusts image resolution proportionally, keeping text completely legible while meeting strict portal limits.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do some PDF files shrink by 80% while others only shrink by 5%?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Compression efficacy depends entirely on the internal content of the source document. PDFs exported from heavy software (like Adobe Illustrator, AutoCAD, or Microsoft Word) often contain massive unoptimized image XObjects, full font packages, and revision bloat, allowing our engine to shave off 80% or more. In contrast, PDFs that have already been pre-optimized or consist purely of plain vector text contain minimal structural bloat, resulting in modest percentage reductions.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is it safe to compress confidential legal and financial documents on ToolsWizard?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, 100% safe and compliant. ToolsWizard operates on a strict Zero-Trust client-side architecture. All object parsing, stream decompression, and binary rebuilding occur entirely within your local browser memory using JavaScript and WebAssembly. Your sensitive business contracts, financial statements, and personal identity files are never uploaded to remote cloud servers, guaranteeing complete privacy under HIPAA, GDPR, and DPDP mandates.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the difference between lossless and lossy PDF compression?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Lossless compression cleans up internal syntax, eliminates unreferenced objects, linearizes cross-reference tables, and applies FlateDecode zlib compression without discarding any visual data. Lossy compression, in contrast, resamples high-resolution photographic images down to lower DPI values (e.g., from 300 DPI to 150 DPI) and increases JPEG quantization to achieve massive byte-size reductions necessary for strict portal limits.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I compress a PDF on my mobile phone or tablet?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard PDF Compressor is fully responsive and leverages modern browser Web APIs across mobile Safari on iOS/iPadOS, Chrome on Android, and Samsung Internet. You can select a document directly from your device files app, execute the compression in seconds, and save the optimized file directly to your local storage without downloading third-party apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does font subsetting reduce PDF file size?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Complete font packages often contain thousands of glyphs covering international character sets, symbols, and typographic alternates, adding megabytes to a document. Font subsetting inspects the document, extracts only the exact character glyphs actually rendered on the pages (often fewer than 100 characters), and rebuilds a streamlined CIDFont dictionary, eliminating 90% of embedded font weight.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why is my 20MB PDF rejected by email when the limit is 25MB?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Email transmission protocols (MIME) cannot transmit raw 8-bit binary PDF data directly. Email clients automatically encode binary attachments into 7-bit ASCII text using Base64 encoding. Base64 expands binary file sizes by approximately 33%. Consequently, a 20MB PDF expands to approximately 26.6MB during transmission, causing enterprise email servers to reject the message as oversized.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does compressing a PDF remove interactive links, bookmarks, or form fields?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Our engine preserves the active document object hierarchy. Interactive form fields (/AcroForm), document outline bookmarks, clickable hyperlinks (/Annot), and digital table-of-contents structures remain fully intact and operational after compression. Only dead, unreferenced objects and non-essential editing bloat are purged.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I compress a password-protected PDF document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To compress an encrypted PDF, you must first unlock the document using the valid password so that our client-side parser can read and reorganize the internal object streams. Once the document has been compressed, you can easily re-apply military-grade AES encryption using our companion Password Protect PDF tool before distribution.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there an artificial file size limit for uploading to this tool?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because ToolsWizard operates directly on your device rather than uploading files to a cloud server, we impose no artificial file size ceilings. You can compress documents of 100MB, 200MB, or larger. The only physical limit is the available random access memory (RAM) and processing power of your personal computer or mobile device.'
      }
    }
  ]
};

export default function PdfCompressPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <PdfCompressClient />
    </>
  );
}
