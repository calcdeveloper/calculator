import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { FileDown, Trash2, RotateCw, Image as ImageIcon, Shield, Hash, Layers } from 'lucide-react';

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
  }
];

export default function RelatedPdfTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(allRelatedTools);
      return;
    }
    // Filter out the current tool
    const filteredTools = allRelatedTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related PDF Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          
          return (
            <Link
              key={index}
              href={tool.link}
              className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-50 text-gray-500 group-hover:text-black group-hover:bg-gray-200">
                {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
              </div>
              <span className="font-bold text-sm line-clamp-1 text-gray-700 group-hover:text-black">
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}