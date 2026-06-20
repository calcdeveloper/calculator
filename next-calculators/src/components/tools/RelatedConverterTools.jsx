'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CodeXml, FileSpreadsheet, FileJson, Languages, FileText, Binary, 
  Image as ImageIcon, Clock, Palette, Table, Hash, FileArchive, ChevronRight
} from 'lucide-react';

const allConverterTools = [
  {
    title: "XML to JSON",
    link: "/tools/converter/xml-json",
    icon: CodeXml,
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    title: "JSON to XML",
    link: "/tools/developer-tools/json-xml",
    icon: CodeXml,
    iconBg: "bg-blue-100 text-blue-600"
  },
  {
    title: "JSON to CSV",
    link: "/tools/developer-tools/json-csv",
    icon: FileSpreadsheet,
    iconBg: "bg-emerald-100 text-emerald-600"
  },
  {
    title: "CSV to JSON",
    link: "/tools/converter/csv-to-json",
    icon: FileJson,
    iconBg: "bg-indigo-100 text-indigo-600"
  },
  {
    title: "HTML to Markdown",
    link: "/tools/converter/html-to-markdown",
    icon: Languages,
    iconBg: "bg-orange-100 text-orange-600"
  },
  {
    title: "Markdown to HTML",
    link: "/tools/converter/markdown-to-html",
    icon: FileText,
    iconBg: "bg-purple-100 text-purple-600"
  },
  {
    title: "Text to Binary",
    link: "/tools/converter/text-to-binary",
    icon: Binary,
    iconBg: "bg-rose-100 text-rose-600"
  },
  {
    title: "Image to Base64",
    link: "/tools/converter/image-to-base64",
    icon: ImageIcon,
    iconBg: "bg-cyan-100 text-cyan-600"
  },
  {
    title: "Timestamp to Date",
    link: "/tools/converter/timestamp-to-date",
    icon: Clock,
    iconBg: "bg-amber-100 text-amber-600"
  },
  {
    title: "RGB to HEX",
    link: "/tools/design/rgb-hex",
    icon: Palette,
    iconBg: "bg-pink-100 text-pink-600"
  },
  {
    title: "JSON to Excel",
    link: "/tools/converter/json-to-excel",
    icon: Table,
    iconBg: "bg-green-100 text-green-600"
  },
  {
    title: "Decimal to Binary",
    link: "/tools/converter/decimal-to-binary",
    icon: Hash,
    iconBg: "bg-slate-100 text-slate-600"
  },
  {
    title: "Base64 to File",
    link: "/tools/converter/base64-to-file",
    icon: FileArchive,
    iconBg: "bg-violet-100 text-violet-600"
  }
];

export default function RelatedConverterTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(allConverterTools);
      return;
    }
    // Filter out the current tool
    const filteredTools = allConverterTools.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Converter Tools</h3>
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