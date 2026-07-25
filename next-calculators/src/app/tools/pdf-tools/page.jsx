import Link from 'next/link';
import { FileText, RotateCw, Trash2, Download, Image, Lock, Hash, ChevronRight, FileDown, Shield, Layers } from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

import PdfHubSeo from '@/components/tools/PdfHubSeo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Image and PDF Tool - Free Online Image & PDF Editor & Manipulation',
  description:
    'Compress, resize, convert images, rotate, extract, protect, and manipulate PDF files with our free online tools. Secure, fast, and private browser-side processing.',
  path: '/tools/pdf-tools',
  keywords: ['image editor', 'compress image', 'convert image', 'pdf editor', 'rotate pdf', 'delete pdf pages', 'extract pdf pages', 'password protect pdf', 'image and pdf tools free'],
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

export default function PDFToolsPage() {
  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Image and PDF Tool</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Image and PDF Tool
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional Image and PDF manipulation tools for all your needs - secure, fast, and private
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
  );
}
