import Link from 'next/link';
import { FileText, RotateCw, Trash2, Download, Image, Lock, Hash, ChevronRight, FileDown, Shield, Layers } from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'PDF Tools - Free Online PDF Editor & Manipulation',
  description:
    'Rotate, delete pages, extract, protect, and manipulate PDF files with our free online PDF tools. Secure, fast, and private browser-side processing.',
  path: '/tools/pdf-tools',
  keywords: ['pdf editor', 'rotate pdf', 'delete pdf pages', 'extract pdf pages', 'password protect pdf', 'pdf tools free'],
});

const pdfTools = [
  { 
    title: 'Rotate PDF', 
    description: 'Rotate PDF pages to correct orientation',
    icon: <RotateCw className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/pdf-tools/rotate-pdf',
    status: 'coming-soon'
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
    status: 'coming-soon'
  },
  { 
    title: 'Add Images to PDF', 
    description: 'Insert images into PDF documents',
    icon: <Image className="w-6 h-6" />,
    iconBg: 'bg-purple-100 text-purple-600',
    link: '/tools/pdf-tools/add-images',
    status: 'coming-soon'
  },
  { 
    title: 'Protect PDF with Password', 
    description: 'Add password protection to PDF files',
    icon: <Shield className="w-6 h-6" />,
    iconBg: 'bg-rose-100 text-rose-600',
    link: '/tools/pdf-tools/password-protect',
    status: 'coming-soon'
  },
  { 
    title: 'Add Page Numbers', 
    description: 'Add page numbers to PDF documents',
    icon: <Hash className="w-6 h-6" />,
    iconBg: 'bg-amber-100 text-amber-600',
    link: '/tools/pdf-tools/page-numbers',
    status: 'coming-soon'
  },
  { 
    title: 'Merge PDF', 
    description: 'Combine multiple PDF files into one document',
    icon: <Layers className="w-6 h-6" />,
    iconBg: 'bg-cyan-100 text-cyan-600',
    link: '/tools/pdf-tools/merge-pdf',
    status: 'coming-soon'
  }
];

export default function PDFToolsPage() {
  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PDF Tools
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional PDF manipulation tools for all your document needs - secure, fast, and private
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pdfTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-pdf-white rounded-2xl p-8 flex flex-col border border-pdf-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-pdf-dark mb-1">{tool.title}</h3>
                  <p className="text-pdf-gray text-sm leading-relaxed">
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

        {/* SEO & About Section */}
        <div className="mt-24 pt-16 border-t border-pdf-gray">
          <h2 className="text-3xl font-bold text-pdf-dark mb-6">About PDF Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-pdf-gray leading-relaxed">
            <div>
              <p className="mb-4">
                Our comprehensive suite of PDF tools helps you manipulate, optimize, and secure PDF documents with ease. Whether you need to rotate pages for proper orientation, or protect sensitive documents with passwords, we have the right tool for you.
              </p>
              <p>
                All operations happen locally in your browser for complete privacy. Your documents never leave your device, ensuring maximum security for sensitive business, academic, or personal files.
              </p>
            </div>
            <div>
              <p className="mb-4">
                From <strong>rotating</strong> misoriented scans to <strong>merging</strong> multiple documents into one, our tools provide instant results without any registration or watermarks. Perfect for business documents, academic papers, and legal files.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><FileText size={16} className="text-pdf-primary"/> <strong>Free:</strong> No limits or watermarks</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-pdf-primary"/> <strong>Secure:</strong> Browser-side processing</li>
                <li className="flex items-center gap-2"><FileText size={16} className="text-pdf-primary"/> <strong>Fast:</strong> Optimized algorithms</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumb Navigation for SEO */}
      <footer className="bg-pdf-white border-t border-pdf-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-pdf-gray">
          <Link href="/" className="hover:text-pdf-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-pdf-dark font-medium">PDF Tools</span>
        </div>
      </footer>
    </div>
  );
}
