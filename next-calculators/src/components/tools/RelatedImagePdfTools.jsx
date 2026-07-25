import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileDown, Trash2, RotateCw, Image as ImageIcon, Shield, Hash, Layers, FileText } from 'lucide-react';

const allRelatedTools = [
  {
    title: 'Rotate PDF',
    description: 'Rotate PDF pages to correct orientation',
    icon: <RotateCw className="w-6 h-6" />,
    link: '/tools/pdf-tools/rotate-pdf'
  },
  {
    title: 'Delete Pages',
    description: 'Remove specific pages from PDF documents',
    icon: <Trash2 className="w-6 h-6" />,
    link: '/tools/pdf-tools/delete-pages'
  },
  {
    title: 'Extract Pages',
    description: 'Extract specific pages from PDF files',
    icon: <FileDown className="w-6 h-6" />,
    link: '/tools/pdf-tools/extract-pages'
  },
  {
    title: 'Add Images to PDF',
    description: 'Insert images into PDF documents',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/add-images'
  },
  {
    title: 'Protect PDF with Password',
    description: 'Add password protection to PDF files',
    icon: <Shield className="w-6 h-6" />,
    link: '/tools/pdf-tools/password-protect'
  },
  {
    title: 'Add Page Numbers',
    description: 'Add page numbers to PDF documents',
    icon: <Hash className="w-6 h-6" />,
    link: '/tools/pdf-tools/page-numbers'
  },
  {
    title: 'Merge PDF',
    description: 'Combine multiple PDF files into one document',
    icon: <Layers className="w-6 h-6" />,
    link: '/tools/pdf-tools/merge-pdf'
  },
  {
    title: 'Image Compressor',
    description: 'Compress images without losing quality',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/image-compressor'
  },
  {
    title: 'Image Resizer',
    description: 'Resize images to any dimension',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/image-resizer'
  },
  {
    title: 'Image Cropper',
    description: 'Crop images to your desired ratio',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/image-cropper'
  },
  {
    title: 'Image Converter',
    description: 'Convert images between various formats',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/image-converter'
  },
  {
    title: 'HEIC to JPG',
    description: 'Convert Apple HEIC photos to JPG format',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/heic-to-jpg'
  },
  {
    title: 'WebP to PNG',
    description: 'Convert WebP images to PNG format',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/webp-to-png'
  },
  {
    title: 'PNG to JPG',
    description: 'Convert PNG images to JPG format',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/png-to-jpg'
  },
  {
    title: 'JPG to PNG',
    description: 'Convert JPG images to PNG format',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/jpg-to-png'
  },
  {
    title: 'SVG Converter',
    description: 'Convert SVG files to PNG/JPG format',
    icon: <ImageIcon className="w-6 h-6" />,
    link: '/tools/pdf-tools/svg-converter'
  },
  {
    title: 'PDF Compress',
    description: 'Reduce the file size of your PDF',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/pdf-compress'
  },
  {
    title: 'PDF to Word',
    description: 'Convert PDF to editable Word document',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/pdf-to-word'
  },
  {
    title: 'Word to PDF',
    description: 'Convert Word documents to PDF files',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/word-to-pdf'
  },
  {
    title: 'Excel to PDF',
    description: 'Convert Excel spreadsheets to PDF files',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/excel-to-pdf'
  },
  {
    title: 'PowerPoint to PDF',
    description: 'Convert PPT presentations to PDF files',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/powerpoint-to-pdf'
  },
  {
    title: 'PDF OCR',
    description: 'Extract text from scanned PDFs',
    icon: <FileText className="w-6 h-6" />,
    link: '/tools/pdf-tools/pdf-ocr'
  }
];

export default function RelatedImagePdfTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(allRelatedTools);
      return;
    }
    const filteredTools = allRelatedTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Image & PDF Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          
          return (
            <Link
              key={index}
              href={tool.link}
              className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm bg-white border-gray-200 hover:bg-pdf-bg hover:border-pdf-primary/30 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-pdf-bg text-pdf-gray group-hover:text-pdf-primary">
                {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
              </div>
              <span className="font-bold text-sm line-clamp-1 text-gray-700 group-hover:text-pdf-dark">
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
