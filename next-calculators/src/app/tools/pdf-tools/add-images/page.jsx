import AddImagesClient from './AddImagesClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Add Images to PDF - Insert Pictures & Signatures Online',
  description:
    'Insert images, photos, transparent PNG signatures, and stamps into PDF documents online. Free, secure client-side PDF image inserter with zero uploads.',
  path: '/tools/pdf-tools/add-images',
  keywords: [
    'add images to pdf',
    'insert image into pdf',
    'add signature to pdf',
    'put picture in pdf',
    'add logo to pdf',
    'insert png into pdf',
    'transparent png in pdf',
    'pdf image editor online',
    'free pdf image inserter'
  ],
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF Image Inserter',
  description:
    'Insert images, photos, transparent PNG signatures, and stamps into PDF documents online. Free, secure client-side PDF image inserter with zero uploads.',
  path: '/tools/pdf-tools/add-images',
  category: 'UtilityApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Add Images to PDF', path: '/tools/pdf-tools/add-images' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does this tool upload my signature or confidential PDF to remote servers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Absolutely not. Our application operates on a strict Zero-Trust client-side architecture. All PDF dictionary manipulation, binary XObject embedding, and file assembly execute 100% locally within your browser using WebAssembly and JavaScript primitives. Your documents, signatures, and images never traverse the internet and are never logged or stored on remote servers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I insert transparent PNG images without an ugly white background box?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Our engine fully supports 32-bit RGBA PNG alpha channels. It automatically extracts the 8-bit alpha channel into an independent grayscale Soft Mask (/SMask) XObject linked to the primary RGB color stream. This allows signatures, corporate stamps, and transparent watermarks to overlay seamlessly across underlying contract clauses and lines without blocking text.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will adding an image make my existing PDF text blurry or unsearchable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Unlike destructive online editors that rasterize entire PDF pages into flat JPEG bitmaps, our tool performs non-destructive layer injection. The image is added as an external XObject dictionary and drawn via discrete canvas operators, leaving all underlying TrueType/OpenType vector fonts, selectable text layers, bookmarks, and form fields 100% untouched and searchable.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does this tool place and scale uploaded images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'When you upload images, our tool automatically appends each image as a cleanly scaled, brand-new full-resolution page matching the target document dimensions while strictly preserving original aspect ratios. This ensures photographs, receipts, and exhibits integrate seamlessly without stretching or distortion.'
      }
    },
    {
      '@type': 'Question',
      name: 'What image file formats are supported for embedding?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We natively support standard JPEG (.jpg, .jpeg) and Portable Network Graphics (.png) formats. JPEGs are embedded using native /DCTDecode stream passthrough to preserve original quality, while PNGs are embedded using lossless /FlateDecode compression with full alpha channel transparency.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are there file size or page count limitations when inserting images?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because all processing occurs within your browser\'s local RAM and WebAssembly memory heap rather than across constrained cloud server buffers, there are no artificial file size ceilings or page caps imposed by our platform. You can comfortably process multi-hundred-page documents and multi-megabyte image arrays subject only to your device\'s available memory.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I use this tool on mobile devices (iOS Safari, Android Chrome)?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our tool is fully responsive and leverages modern ECMAScript standards and HTML5 File APIs supported natively across iOS Safari, Android Chrome, iPadOS, and desktop browsers. You can snap a photo or select an image directly from your smartphone camera roll and insert it into a PDF without installing native third-party apps.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do PDF coordinates start at the bottom-left instead of the top-left?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The PDF format directly inherited its coordinate model from PostScript, which adopted standard Cartesian geometric coordinates where origin (0, 0) is at the bottom-left and the positive Y-axis increases upward. Web DOM and Canvas models adopted a top-left origin. Our internal math automatically converts between screen space and PDF user space to ensure accurate placement.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does inserting an image break digital signatures or password encryption?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If a PDF document contains a cryptographic digital signature (DocuSign, Adobe Sign), modifying any byte—including inserting an image—will invalidate the cryptographic hash verification, as intended by security standards. For password-protected documents, you must unlock the document with its owner password before structural modifications can be executed.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I optimize the file size of my PDF after embedding multiple photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To minimize file size, downsample excessive multi-megapixel smartphone photos (e.g. 12 MP) to roughly 1200 x 900 pixels (300 DPI) before embedding, crop unnecessary whitespace around signatures, and utilize our companion PDF Compress tool to optimize Deflate streams across the final document.'
      }
    }
  ]
};

export default function AddImagesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <AddImagesClient />
    </>
  );
}
