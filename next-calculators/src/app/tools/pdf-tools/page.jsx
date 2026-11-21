import Link from 'next/link';
import { FileText, RotateCw, Trash2, Download, Image, Lock, Hash, ChevronRight, FileDown, Shield, Layers } from 'lucide-react';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

import PdfHubSeo from '@/components/tools/PdfHubSeo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PDF Tools - Free Online PDF Editor, Converter & Compressor',
  description:
    'Free online PDF tools to merge, compress, rotate, protect, and convert PDFs and images. 100% private, client-side processing with zero server uploads.',
  path: '/tools/pdf-tools',
  keywords: ['pdf tools', 'pdf editor', 'compress pdf', 'merge pdf', 'convert pdf', 'rotate pdf', 'delete pdf pages', 'extract pdf pages', 'password protect pdf', 'image converter'],
});

const pdfTools = [
  {
    title: 'Rotate PDF',
    description: 'Rotate PDF pages to correct orientation',
    icon: <RotateCw className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/pdf-tools/rotate-pdf',
    status: 'active'
  },
  {
    title: 'Delete Pages',
    description: 'Remove specific pages from PDF documents',
    icon: <Trash2 className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
    link: '/tools/pdf-tools/delete-pages',
    status: 'active'
  },
  {
    title: 'Extract Pages',
    description: 'Extract specific pages from PDF files',
    icon: <FileDown className="w-6 h-6" />,
    iconBg: 'bg-indigo-100 text-indigo-600',
    link: '/tools/pdf-tools/extract-pages',
    status: 'active'
  },
  {
    title: 'Add Images to PDF',
    description: 'Insert images into PDF documents',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-purple-100 text-purple-600',
    link: '/tools/pdf-tools/add-images',
    status: 'active'
  },
  {
    title: 'Protect PDF with Password',
    description: 'Add password protection to PDF files',
    icon: <Shield className="w-6 h-6" />,
    iconBg: 'bg-rose-100 text-rose-600',
    link: '/tools/pdf-tools/password-protect',
    status: 'active'
  },
  {
    title: 'Add Page Numbers',
    description: 'Add page numbers to PDF documents',
    icon: <Hash className="w-6 h-6" />,
    iconBg: 'bg-amber-100 text-amber-600',
    link: '/tools/pdf-tools/page-numbers',
    status: 'active'
  },
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one document',
    icon: <Layers className="w-6 h-6" />,
    iconBg: 'bg-cyan-100 text-cyan-600',
    link: '/tools/pdf-tools/merge-pdf',
    status: 'active'
  },
  {
    title: 'Image Compressor',
    description: 'Compress images without losing quality',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-green-100 text-green-600',
    link: '/tools/pdf-tools/image-compressor',
    status: 'active'
  },
  {
    title: 'Image Resizer',
    description: 'Resize images to any dimension',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/pdf-tools/image-resizer',
    status: 'active'
  },
  {
    title: 'Image Cropper',
    description: 'Crop images to your desired ratio',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-red-100 text-red-600',
    link: '/tools/pdf-tools/image-cropper',
    status: 'active'
  },
  {
    title: 'Image Converter',
    description: 'Convert images between various formats',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-purple-100 text-purple-600',
    link: '/tools/pdf-tools/image-converter',
    status: 'active'
  },
  {
    title: 'HEIC to JPG',
    description: 'Convert Apple HEIC photos to JPG format',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-yellow-100 text-yellow-600',
    link: '/tools/pdf-tools/heic-to-jpg',
    status: 'active'
  },
  {
    title: 'WebP to PNG',
    description: 'Convert WebP images to PNG format',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-pink-100 text-pink-600',
    link: '/tools/pdf-tools/webp-to-png',
    status: 'active'
  },
  {
    title: 'PNG to JPG',
    description: 'Convert PNG images to JPG format',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-green-100 text-green-600',
    link: '/tools/pdf-tools/png-to-jpg',
    status: 'active'
  },
  {
    title: 'JPG to PNG',
    description: 'Convert JPG images to PNG format',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
    link: '/tools/pdf-tools/jpg-to-png',
    status: 'active'
  },
  {
    title: 'SVG Converter',
    description: 'Convert SVG files to PNG/JPG format',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-orange-100 text-orange-600',
    link: '/tools/pdf-tools/svg-converter',
    status: 'active'
  },

  {
    title: 'PDF Compress',
    description: 'Reduce the file size of your PDF',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-lime-100 text-lime-600',
    link: '/tools/pdf-tools/pdf-compress',
    status: 'active'
  },
  {
    title: 'PDF to Word',
    description: 'Convert PDF to editable Word document',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/pdf-tools/pdf-to-word',
    status: 'active'
  },
  {
    title: 'Word to PDF',
    description: 'Convert Word documents to PDF files',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-indigo-100 text-indigo-600',
    link: '/tools/pdf-tools/word-to-pdf',
    status: 'active'
  },
  {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF files',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-green-100 text-green-600',
    link: '/tools/pdf-tools/excel-to-pdf',
    status: 'active'
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Convert PPT presentations to PDF files',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-orange-100 text-orange-600',
    link: '/tools/pdf-tools/powerpoint-to-pdf',
    status: 'active'
  },

  {
    title: 'PDF OCR',
    description: 'Extract text from scanned PDFs',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
    link: '/tools/pdf-tools/pdf-ocr',
    status: 'active'
  }
];


const softwareSchema = createSoftwareAppSchema({
  name: 'Image & PDF Tools',
  description: 'Compress, resize, convert images, rotate, extract, protect, and manipulate PDF files with our free online tools. Secure, fast, and private browser-side processing.',
  path: '/tools/pdf-tools',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'PDF Tools', path: '/tools/pdf-tools' }
]);

const faqSchema = createFaqSchema([
  {
    question: "Are my confidential PDF documents safe from third-party server uploads on ToolsWizard?",
    answer: "Yes, 100% safe. ToolsWizard operates on a strict zero-trust client-side architecture. When you select a PDF to merge, split, compress, or rotate, the document is loaded directly into your local browser RAM via WebAssembly and JavaScript byte buffers. The file is never transmitted across the internet, never stored in cloud storage, and never logged on remote servers. It is physically impossible for anyone to intercept your documents."
  },
  {
    question: "Why is editing text in a PDF fundamentally different from editing a Word document?",
    answer: "Word documents utilize dynamic flow layout where text wraps automatically and reflows upward when sentences are deleted. A PDF uses absolute geometric coordinate metrology: every character, line, and image is painted onto fixed (X, Y) coordinates relative to the bottom-left corner of the page. Deleting words in a raw PDF does not cause the remaining text to reflow, requiring specialized tools to restructure page content streams."
  },
  {
    question: "What is a PDF Cross-Reference (xref) table, and why does deleting pages corrupt it?",
    answer: "The xref table is an index at the end of a PDF that maps every indirect object to its exact byte offset from the start of the file. This allows PDF viewers to render arbitrary pages instantly without reading the entire document into memory. If you manually cut pages or alter bytes without recalculating object positions, the xref offsets point to corrupt byte locations, causing the entire file to fail rendering. ToolsWizard surgically updates the page tree and perfectly reconstructs the xref table."
  },
  {
    question: "How does PDF OCR work, and why is an invisible text layer used?",
    answer: "Scanned PDFs contain only a flat raster photograph of paper with zero machine-readable text. Our OCR tool processes the image via a WebAssembly neural network to identify text strings and exact bounding box coordinates. It then injects an invisible text layer (using Text Rendering Mode 3) directly underneath the visible scan. This preserves handwritten annotations, signatures, and stamps visually while making the entire document selectable and searchable."
  },
  {
    question: "What is the difference between a PDF User Password and an Owner Password?",
    answer: "A User Password (or Document Open Password) encrypts the underlying content streams using AES-256; anyone without this password cannot view or decrypt the document. An Owner Password sets administrative permissions via an integer bitmask (/P), restricting actions like printing, text copying, page extraction, or form modification while allowing users to view the file."
  },
  {
    question: "Why does Apple use HEIC photo format, and why do I need to convert it to JPG?",
    answer: "Apple utilizes High Efficiency Image Container (HEIC / H.265 intra-frame encoding) because it provides approximately 50% better compression efficiency than legacy JPEG at identical visual quality. However, many Windows applications, government submission portals, and web browsers cannot natively decode HEIC files. Our HEIC to JPG converter demuxes the HEIF container and transcodes it to standard universal JPG directly in your browser."
  },
  {
    question: "How does PDF page garbage collection work when deleting extraneous pages?",
    answer: "When a page is deleted, naive tools simply detach its pointer from the page tree, leaving high-resolution images and embedded font streams orphaned in the file body. ToolsWizard executes comprehensive garbage collection: it scans the document object graph to identify orphaned XObjects and font dictionaries that are no longer referenced by any remaining page, stripping them to dramatically reduce document file size."
  },
  {
    question: "What is the standard measurement unit in PDF documents?",
    answer: "The PDF specification defines default user space coordinates in standard PostScript points, where 1 point equals exactly 1/72 of an inch (approximately 0.3528 mm). A standard North American Letter page measures 612 by 792 points (8.5 x 11 inches), while an international ISO A4 page measures 595.28 by 841.89 points (210 x 297 mm)."
  },
  {
    question: "Can I convert office documents (Word, Excel, PowerPoint) to PDF without Microsoft Office?",
    answer: "Yes. Our conversion utilities parse open XML standards (.docx, .xlsx, .pptx) directly within the browser runtime, extracting formatting structures, table matrices, and slide layouts, and synthesizing standards-compliant vector PDF documents without requiring a Microsoft Office installation or cloud software subscription."
  },
  {
    question: "Are all ToolsWizard PDF and image utilities free for commercial and legal enterprise use?",
    answer: "Yes. All twenty PDF and image manipulation utilities across ToolsWizard are 100% free forever for legal professionals, enterprise teams, students, and developers. There are no daily conversion limits, no file size paywalls, no hidden watermarks, and no mandatory account signups."
  }
]);

export default function PDFToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PDF &amp; Image Tools
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional PDF and Image manipulation tools for all your needs - secure, fast, and private
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfTools.map((tool, index) => (
            <div
              key={index}
              className="bg-pdf-white rounded-2xl p-8 flex flex-col border border-pdf-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pdf-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-pdf-gray text-sm leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link
                  href={tool.link}
                  className="mt-auto w-full bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button
                  disabled
                  className="mt-auto w-full bg-pdf-gray/20 text-pdf-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        <PdfHubSeo />
      </main>

    </div>
  
    </>
  );
}
