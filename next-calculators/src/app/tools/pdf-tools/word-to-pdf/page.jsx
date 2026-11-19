export const dynamic = "force-static";

import React from 'react';
import WordToPdfClient from './WordToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const metadata = createPageMetadata({
  title: 'Word to PDF Converter - Convert DOCX to PDF Online Free',
  description: 'Convert Word DOCX documents to standard PDF files online for free. Pure browser-based compilation with zero server uploads and 100% data privacy.',
  path: '/tools/pdf-tools/word-to-pdf',
  keywords: [
    'word to pdf',
    'convert docx to pdf',
    'docx to pdf converter',
    'doc to pdf online',
    'free word to pdf',
    'private word converter',
    'save docx as pdf',
    'client side word to pdf'
  ],
  openGraph: {
    title: 'Word to PDF Converter - Free & Private Online Tool',
    description: 'Convert Microsoft Word DOCX documents to standard PDF files safely in your browser with zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'Word to PDF Converter',
  description: 'Convert Word DOCX documents to standard PDF files online for free. Pure browser-based compilation with zero server uploads and 100% data privacy.',
  path: '/tools/pdf-tools/word-to-pdf',
  category: 'BusinessApplication',
  featureList: [
    'Convert .docx to PDF format',
    'Preserve fonts, lists, and formatting',
    '100% private local conversion',
    'Instant PDF download',
    'No signups or software installation'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'Word to PDF Converter', path: '/tools/pdf-tools/word-to-pdf' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does the layout of a browser-converted PDF occasionally differ from desktop Word?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Desktop Microsoft Word utilizes a proprietary, decades-old layout engine coupled with deep Windows graphics subsystem APIs (DirectWrite / GDI) and locally installed font binaries. To guarantee 100% client-side privacy without requiring bloated 500 MB native server binaries, ToolsWizard uses a semantic extraction engine. It extracts textual hierarchies, headings, bold/italic runs, and lists, re-rendering them cleanly onto standard A4/Letter canvases. While text content and structure are 100% preserved, complex multi-column floating text frames or proprietary Word Art positioning may reflow cleanly into linear paragraphs.'
      }
    },
    {
      '@type': 'Question',
      name: 'Why are older legacy .doc files not supported by this converter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Legacy .doc files (used in Microsoft Word 97 through 2003) are stored in the proprietary Compound File Binary Format (CFBF). CFBF uses binary memory dumps and complex OLE pointer records rather than open XML markup. Modern web browsers cannot parse CFBF binary structures securely without executing untrusted native assembly code. Modern .docx files, introduced in 2007, are standard open XML ZIP archives that can be parsed with mathematical precision directly in JavaScript and WebAssembly.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my confidential contract, financial audit, or legal memo uploaded to any server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ToolsWizard is engineered upon an absolute zero-trust architecture. All ZIP decompressions, XML DOM traversals, typographic line-wrap calculations, and PDF binary stream assemblies execute exclusively inside your local web browser\'s volatile RAM. Your document never traverses external networks, touches remote cloud servers, or enters temporary storage databases, ensuring 100% compliance with corporate non-disclosure agreements, GDPR, and HIPAA.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will converting a Word document to PDF remove hidden revision history and comments?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. One of the primary security benefits of compiling a Word document into a PDF is metadata sanitization. In native Word files, Track Changes history and editorial comments reside in separate XML streams (word/comments.xml). ToolsWizard specifically targets the active body text tree in word/document.xml, compiling only finalized textual paragraphs and stripping out hidden internal commentary and prior revision histories.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there an artificial file size limit or page quota on conversions?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Because all compilation occurs locally using your computer\'s own CPU and memory rather than expensive multi-tenant cloud servers, ToolsWizard incurs zero cloud compute costs. As a result, we enforce no arbitrary file size caps, no daily conversion limits, and no paid subscription paywalls. You can convert large, hundred-page documents completely free.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert Word documents on my iPhone, iPad, or Android device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The ToolsWizard Word to PDF converter is fully responsive and functions smoothly across modern mobile browsers including Mobile Safari on iOS/iPadOS and Google Chrome on Android. You can select Word attachments directly from your mobile Files app, iCloud Drive, or Google Drive, compile them to PDF in seconds, and save the resulting PDF directly to your device storage.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are Word document macros (.docm) supported by this converter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Macro-enabled Word files (.docm) contain embedded Visual Basic for Applications (VBA) binary streams (word/vbaProject.bin). For cybersecurity reasons, our browser engine completely ignores and sandbox-quarantines all embedded VBA scripts. The tool extracts only the safe, readable textual content, neutralizing macro-based malware while safely delivering your compiled PDF document.'
      }
    },
    {
      '@type': 'Question',
      name: 'How does client-side Word to PDF conversion compare to Microsoft Office 365 export?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Microsoft Office 365 provides native "Save As PDF" functionality with 100% visual layout cloning, but requires an active paid annual license ($70–$150/year) and substantial desktop application installation. ToolsWizard provides an instant, 100% free, zero-install alternative accessible on any computer or mobile browser, ideal for users who do not have Microsoft Office installed or who require rapid, private document compilation.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is a PDF generated through this tool legally valid for electronic signatures?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The generated PDF file strictly adheres to the ISO 32000 specification for Portable Document Format documents. It can be opened, signed, and certified by all standard e-signature platforms (including DocuSign, Adobe Acrobat Sign, and HelloSign) in full compliance with the US ESIGN Act, UETA, and European eIDAS regulatory frameworks.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert a PDF back into an editable Word document later?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you need to reverse the process and restore an unformatted PDF into an editable Word document, you can use our companion PDF to Word Converter. It parses PDF text stream operators and reconstructs an editable DOCX document directly in your browser.'
      }
    }
  ]
};

export default function WordToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <WordToPdfClient />
    </>
  );
}
