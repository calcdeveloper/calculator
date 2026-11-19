export const dynamic = "force-static";

import React from 'react';
import PdfToWordClient from './PdfToWordClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'PDF to Word Converter - Convert PDF to DOCX Online Free',
  description:
    'Convert PDF documents into editable Word DOCX files online for free. Extract text with zero-trust browser processing and no server uploads or data leaks.',
  path: '/tools/pdf-tools/pdf-to-word',
  keywords: [
    'pdf to word',
    'convert pdf to docx',
    'pdf to doc',
    'extract pdf text',
    'secure pdf to word',
    'client side pdf converter',
    'pdf to docx free',
    'openxml pdf converter',
    'private pdf to word'
  ],
  openGraph: {
    title: 'PDF to Word Converter - Convert PDF to DOCX Online Free',
    description:
      'Convert PDF documents into editable Word DOCX files online for free. Extract text with zero-trust browser processing and no server uploads or data leaks.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PDF to Word Converter',
  description:
    'Convert PDF documents into editable Word DOCX files online for free. Extract text with zero-trust browser processing and no server uploads or data leaks.',
  path: '/tools/pdf-tools/pdf-to-word',
  category: 'BusinessApplication',
  featureList: [
    'Convert PDF to ECMA-376 OpenXML DOCX format',
    '100% private client-side in-browser text extraction',
    'Statistical line pitch and paragraph reconstruction',
    'Universal compatibility with Microsoft Word, Google Docs, and LibreOffice',
    'Zero file uploads, cloud storage, or third-party logging',
    'Instant local DOCX generation and download'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PDF to Word', path: '/tools/pdf-tools/pdf-to-word' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does this PDF to Word converter work without uploading my files to a server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'ToolsWizard operates on a pure Zero-Trust client-side architecture. When you upload a document, our engine uses compiled WebAssembly and modern browser Web APIs (such as pdfjsLib and the docx JavaScript library) to parse PDF indirect objects, extract text streams, reconstruct paragraph flow, and synthesize the complete ECMA-376 OpenXML (.docx) PKZIP package directly inside your browser\'s volatile RAM. Zero bytes are ever transmitted over the network or stored on external cloud servers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why are images or complex graphic drawings omitted from the converted Word file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our converter is engineered as a high-speed, privacy-first semantic text extraction engine. Embedding multi-megabyte raster images and complex vector geometries into Word documents client-side requires enormous browser memory overhead that can crash mobile devices and laptops. By focusing strictly on extracting clean alphanumeric text and paragraph structures, we deliver instantaneous conversion speeds, zero data leakage, and a clean document that is immediately ready for redlining and editing.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can this tool convert scanned paper documents and physical book scans to Word?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Direct text extraction requires digital-native PDF text streams. If your document is a scanned photograph of a physical page, it contains only raster pixels without underlying character codes. To convert scanned PDFs into editable text, first run your document through our companion PDF OCR Extractor, which uses deep neural networks to recognize character strokes and convert them into editable text.'
      }
    },
    {
      '@type': 'Question',
      name: 'What versions of Microsoft Word and office suites are compatible with the output file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The generated file is a standard Office OpenXML (.docx) package adhering strictly to the ISO/IEC 29500 and ECMA-376 international specifications. It is fully compatible with Microsoft Word 2007 through Word 2024, Microsoft 365, Google Docs, Apple Pages on macOS and iOS, LibreOffice Writer, WPS Office, and all modern mobile office viewers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a maximum page limit or file size ceiling for PDF conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because conversion processing occurs entirely inside your device\'s local browser memory rather than on a metered cloud server, we impose no artificial file size ceilings or page limits. You can convert documents of 50, 100, or 200 pages. The only physical boundary is the available random access memory (RAM) and processing power of your personal computer or mobile device.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does the engine reconstruct paragraphs from isolated PDF lines?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The engine employs statistical line pitch and baseline clustering heuristics. It analyzes the vertical distance (ΔY) between consecutive lines of text. When the vertical gap matches the standard interline pitch of the body font, lines are merged into a continuous paragraph run. When a statistically significant vertical gap or indentation is detected, the engine terminates the paragraph container and initiates a new OpenXML paragraph node.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert a password-protected or encrypted PDF to Word?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'To convert an encrypted PDF, you must first unlock the document using the valid password. Standard PDF encryption locks the internal object cross-reference graph and content streams, preventing client-side parsers from reading character glyphs. Once unlocked, the document can be converted to Word normally. You can subsequently protect the final document using Microsoft Word\'s built-in encryption or our Password Protect PDF Tool.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will converting a PDF to Word modify or overwrite my original PDF file?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, your original file remains 100% untouched. The browser reads the binary PDF data into a temporary, read-only memory buffer. The resulting Word document is generated as a completely new, independent .docx file that you download to your device storage. Your original source PDF on disk is never altered or replaced.'
      }
    },
    {
      '@type': 'Question',
      name: 'Does this PDF to Word converter work on smartphones and tablets?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The tool is engineered with a responsive user interface and supports modern mobile browsers including Safari on iOS/iPadOS and Google Chrome on Android. You can select a PDF directly from your device files app or cloud drive, execute the client-side conversion in seconds, and save the .docx file directly to your mobile device storage.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why do some words appear glued together without spaces after conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This anomaly occurs when poorly coded PDF export engines omit explicit space tokens and instead use microscopic coordinate displacement jumps. ToolsWizard solves this by analyzing horizontal character gap deltas (ΔX). If the gap exceeds 25% of the font\'s standard em-width, our algorithm automatically inserts an ASCII space character to guarantee proper word separation.'
      }
    }
  ]
};

export default function PdfToWordPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <PdfToWordClient />
    </>
  );
}
