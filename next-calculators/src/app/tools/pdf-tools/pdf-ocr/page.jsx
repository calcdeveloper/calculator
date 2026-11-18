export const dynamic = "force-static";

import React from 'react';
import PdfOcrClient from './PdfOcrClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'PDF OCR - Extract Text from Scanned PDFs & Images Online',
  description:
    'Convert scanned PDFs and images into searchable, selectable text using Optical Character Recognition natively in your browser with zero server uploads.',
  path: '/tools/pdf-tools/pdf-ocr',
  keywords: [
    'pdf ocr',
    'extract text from pdf',
    'scanned pdf to text',
    'browser ocr',
    'free ocr tool',
    'client side ocr',
    'image ocr online',
    'tesseract wasm ocr',
    'searchable pdf creator',
    'ocr text recognition'
  ],
  openGraph: {
    title: 'PDF OCR - Extract Text from Scanned PDFs & Images Online',
    description:
      'Convert scanned PDFs and images into searchable, selectable text using Optical Character Recognition natively in your browser with zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF OCR Extractor',
  description:
    'Convert scanned PDFs and images into searchable, selectable text using Optical Character Recognition natively in your browser with zero server uploads.',
  path: '/tools/pdf-tools/pdf-ocr',
  category: 'UtilityApplication',
  featureList: [
    'Extract text from scanned PDF documents and multi-page books',
    'Extract text from PNG, JPG, JPEG, and WebP raster images',
    'Multi-page sequential WebAssembly neural network processing',
    'Interactive live text editor with clipboard copy and .txt export',
    '100% private in-browser Tesseract LSTM neural execution',
    'Zero server uploads or third-party cloud data exposure'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF OCR Extractor', path: '/tools/pdf-tools/pdf-ocr' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Optical Character Recognition (OCR) and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Optical Character Recognition (OCR) is an advanced computer vision technology that analyzes visual pixel patterns in scanned documents or raster images and converts those visual shapes into machine-encoded text strings (such as ASCII or UTF-8 Unicode). Modern OCR engines combine Otsu binarization, Radon deskewing, connected component segmentation, and deep bidirectional LSTM recurrent neural networks to recognize characters based on stroke geometry and contextual language dictionaries.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my confidential document uploaded to an external server during OCR?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, absolutely never. ToolsWizard operates on a strict Zero-Trust client-side architecture. The entire Tesseract OCR neural engine is compiled into WebAssembly and executes directly within your local web browser. Your confidential contracts, tax returns, and medical records never leave your device and are never transmitted across the network or stored on remote cloud servers, guaranteeing absolute data sovereignty under HIPAA, GDPR, and DPDP mandates.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this OCR tool accurately recognize handwritten notes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our OCR engine is primarily optimized for printed and typeset typography (such as books, contracts, receipts, and printed forms). While it can successfully parse exceptionally neat, block-printed handwriting, cursive or rapidly penned notes (Intelligent Character Recognition or ICR) present severe stroke variability that can produce inconsistent results. For maximum accuracy, ensure handwriting is printed neatly in dark ink.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is the optimal scan resolution (DPI) for accurate OCR text extraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The universal gold standard for OCR accuracy is 300 DPI (Dots Per Inch). At 300 DPI, standard 10-point characters measure approximately 40 pixels in height, providing sufficient stroke resolution for the neural network to achieve 99%+ accuracy. Scanning at 150 DPI drops accuracy to roughly 78%, while scanning at 600 DPI quadruples memory consumption and processing time with minimal accuracy gains.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I extract text from image files (JPG, PNG, WebP) as well as PDFs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Our tool natively supports both multi-page PDF documents and standard raster image formats including PNG, JPG, JPEG, and WebP. When you upload a multi-page PDF, our client-side parser automatically splits each page into an internal high-resolution memory canvas, executes the neural extraction pipeline, and concatenates the resulting text into a unified output buffer.'
      }
    },
    {
      '@type': 'Question',
      name: 'What is a "searchable sandwich PDF" and how does it differ from raw text?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A searchable sandwich PDF embeds an invisible layer of vector text (rendered using PDF text rendering mode 3) directly underneath the original high-resolution scanned raster image. This allows users to search, highlight, and copy text in standard PDF readers while preserving the authentic visual appearance of physical paper, handwritten signatures, and official ink stamps. Raw text extraction, in contrast, outputs plain text without retaining original layout geometries.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why does the OCR extraction process take several seconds per page?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because ToolsWizard processes your files locally inside your browser via WebAssembly, the execution speed depends directly on your device CPU architecture. The engine executes intensive mathematical binarization, skew rectification, blob extraction, and recurrent neural network forward passes for every line of text. This local execution trade-off guarantees 100% data privacy and zero cloud transmission risk.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does this tool work on mobile phones and tablets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The tool is fully responsive and leverages modern WebAssembly runtime environments in mobile Safari (iOS/iPadOS), Google Chrome for Android, and Samsung Internet. You can select documents or snap photos directly using your mobile camera, extract text locally on your device, and copy the text or download a .txt file without installing external third-party applications.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I run OCR on a password-protected PDF document?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To extract text from an encrypted PDF, you must first unlock the document using the valid password. Encryption locks the internal object graph and prevents the client-side parser from rendering page canvases. Once the file is unlocked, the OCR engine can read the pages normally. You can subsequently re-encrypt the file using our companion Password Protect PDF tool before sharing.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a page count or file size limit for OCR extraction?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because processing occurs entirely within your browser memory rather than on a metered cloud server, we impose no artificial file size or page count ceilings. The only constraint is the available random access memory (RAM) and computing power of your device. For multi-hundred-page documents, processing in batches of 10 to 20 pages is recommended to maintain peak browser responsiveness.'
      }
    }
  ]
};

export default function PdfOcrPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <PdfOcrClient />
    </>
  );
}
