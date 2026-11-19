import React from 'react';
import PowerPointToPdfClient from './PowerPointToPdfClient';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PowerPoint to PDF - Convert PPTX to PDF Online Free',
  description: 'Convert PowerPoint presentations to PDF online for free. Enjoy private client-side slide processing, zero server uploads, and instant local PDF download.',
  path: '/tools/pdf-tools/powerpoint-to-pdf',
  keywords: [
    'powerpoint to pdf',
    'convert pptx to pdf',
    'pptx to pdf online free',
    'powerpoint to pdf converter',
    'presentation to pdf',
    'convert presentation to pdf',
    'client side pptx to pdf'
  ],
  openGraph: {
    title: 'PowerPoint to PDF - Convert PPTX to PDF Online Free',
    description: 'Convert PowerPoint presentations to PDF online for free with complete privacy and zero server uploads.',
  },
});

const softwareSchema = createSoftwareAppSchema({
  name: 'PowerPoint to PDF Converter',
  description:
    'Convert PowerPoint presentations (PPTX) to PDF online for free. Enjoy private client-side slide processing, zero server uploads, and instant local PDF download.',
  path: '/tools/pdf-tools/powerpoint-to-pdf',
  category: 'WebApplication',
  featureList: [
    'Convert modern .pptx slide presentations to PDF documents',
    'Client-side slide rendering with zero server uploads',
    'Preserve exact slide dimensions (16:9 widescreen, 4:3 standard, custom posters)',
    'Extract text runs into searchable and selectable PDF text objects',
    'Fast processing powered by client device hardware',
    'Download instant PDF with zero registration required'
  ]
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Image & PDF Tools', path: '/tools/pdf-tools' },
  { name: 'PowerPoint to PDF', path: '/tools/pdf-tools/powerpoint-to-pdf' }
]);

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does PowerPoint to PDF conversion prevent layout distortion across different computers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Native PowerPoint files (.pptx) rely on local fonts, screen DPI, and graphics drivers. If the recipient machine lacks corporate typefaces, the system uses substitute fonts with divergent metrics, causing lines to wrap unexpectedly, headers to push text off-slide, and shapes to overlap. Converting to PDF locks every character and shape into absolute Cartesian coordinates with embedded glyph outlines, ensuring identical rendering across every device and OS.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are legacy .ppt binary files supported, or only modern .pptx presentations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our client engine processes the modern Open XML format (.pptx) standardized under ECMA-376. Legacy .ppt files used an obsolete binary format (BIFF8/OLE2) that cannot be safely parsed in a browser sandbox without heavy server runtimes. If you have legacy .ppt files, open them in PowerPoint, Google Slides, or LibreOffice and save as "PowerPoint Presentation (.pptx)" before converting on ToolsWizard.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is my confidential pitch deck or financial data uploaded to any cloud server?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. ToolsWizard enforces a strict zero-trust client architecture. Unzipping, PresentationML parsing, coordinate transformation, and PDF compilation execute purely inside your browser\'s local JavaScript runtime. Your presentation never traverses external networks, touches third-party storage, or enters server queues. You can even disconnect your internet before clicking compile and conversion completes normally.'
      }
    },
    {
      '@type': 'Question',
      name: 'What happens to slide transitions, animations, and video clips during PDF conversion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because PDF is a static document format engineered for print and visual fidelity, slide transitions and animations are flattened into their terminal visual state. Embedded video and audio clips are omitted for compatibility and compact size. For multi-stage bullet reveals, duplicate the slide in PowerPoint for each incremental stage so each reveal appears on its own dedicated page in the final PDF.'
      }
    },
    {
      '@type': 'Question',
      name: 'Are speaker notes included in the converted PDF output?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'By default, our converter compiles the primary slide canvas, excluding presenter notes (ppt/notesSlides/). This ensures confidential talking points, internal financial notes, and unvetted prompts are not inadvertently exposed to clients or investors. If you need speaker notes handouts, export "Notes Pages" directly from PowerPoint\'s Print menu.'
      }
    },
    {
      '@type': 'Question',
      name: 'Will the converted PDF maintain exact 16:9 widescreen or 4:3 standard aspect ratios?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. The converter reads the slide dimensions in English Metric Units (EMUs) from ppt/presentation.xml. For standard 16:9 widescreen slides (12,192,000 × 6,858,000 EMUs), it creates a PDF MediaBox of 960 × 540 points (13.333 × 7.500 inches). For legacy 4:3 slides, it generates 720 × 540 points, eliminating pillarbox or letterbox black bars in presentation mode.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I search, highlight, and copy text from the generated PDF?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Rather than taking flat raster screenshots, our engine extracts vector text runs and compiles native PDF text objects (BT ... ET) with standardized Unicode mapping tables (/ToUnicode CMaps). Text remains 100% searchable, selectable, and copy-pasteable across all PDF viewers and assistive screen readers.'
      }
    },
    {
      '@type': 'Question',
      name: 'Is there a maximum file size or slide count limitation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Because all processing runs locally using your computer\'s available memory and CPU cores, ToolsWizard does not impose artificial upload ceilings or daily conversion quotas. You can convert presentations with hundreds of slides. Practical limits depend solely on your device hardware; modern computers and phones handle 50MB to 100MB PPTX files smoothly.'
      }
    },
    {
      '@type': 'Question',
      name: 'How can I reduce the file size of my converted PDF presentation for email sharing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Presentations with high-resolution photos can generate large PDF files exceeding 25MB email attachment limits. After conversion, pass the PDF through our PDF Compressor. The utility reapplies Flate/DCT re-encoding to embedded images and strips redundant metadata, reducing file size by 70% to 90% while keeping text pin-sharp.'
      }
    },
    {
      '@type': 'Question',
      name: 'Can I convert PowerPoint presentations on my iPhone, iPad, or Android device?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. ToolsWizard is fully responsive and functions smoothly in mobile browsers including Apple Safari on iOS/iPadOS and Google Chrome on Android. You can pick a presentation from iCloud Drive, Google Drive, or local storage, compile it to PDF in seconds, and share or open it immediately with zero app installations.'
      }
    }
  ]
};

export default function PowerPointToPdfPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <PowerPointToPdfClient />
    </>
  );
}
