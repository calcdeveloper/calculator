import React from 'react';
import Link from 'next/link';
import { 
  ArrowRightLeft, 
  FileSpreadsheet, 
  FileCode, 
  FileJson, 
  Braces, 
  Type, 
  FileText, 
  Binary, 
  Image as ImageIcon, 
  Clock, 
  Palette, 
  Table, 
  FileArchive, 
  Hash,
  ChevronRight,
  CodeXml,
  Languages
} from 'lucide-react';

export const dynamic = "force-static";

export const metadata = {
  title: 'Converter Tools - Free Online Format Transformers | ToolsWizard',
  description: 'Convert between JSON, CSV, XML, Markdown, Base64, and more. Fast, secure, and private browser-side conversion tools for developers and creators.',
  keywords: ['json to csv', 'csv to json', 'html to markdown', 'image to base64', 'timestamp converter', 'unit converter online'],
};

const converterTools = [
  {
    title: "JSON to XML",
    description: "Transform JSON data into structured XML documents instantly.",
    icon: <CodeXml className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/json-tools/json-xml",
    status: "active"
  },
  {
    title: "JSON to CSV",
    description: "Convert nested JSON objects into flat CSV files for spreadsheets.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/converter/json-to-csv",
    status: "coming-soon"
  },
  {
    title: "CSV to JSON",
    description: "Turn your spreadsheet data into clean, valid JSON format.",
    icon: <FileJson className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/converter/csv-to-json",
    status: "coming-soon"
  },
  {
    title: "HTML to Markdown",
    description: "Clean up HTML code and convert it into readable Markdown text.",
    icon: <Languages className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/converter/html-to-markdown",
    status: "coming-soon"
  },
  {
    title: "Markdown to HTML",
    description: "Convert your MD files into production-ready HTML code blocks.",
    icon: <FileText className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/converter/markdown-to-html",
    status: "coming-soon"
  },
  {
    title: "Text to Binary",
    description: "Encode any string of text into its 8-bit binary representation.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/converter/text-to-binary",
    status: "coming-soon"
  },
  {
    title: "Image to Base64",
    description: "Convert PNG, JPG, or SVG images into Base64 strings for CSS/HTML.",
    icon: <ImageIcon className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/converter/image-to-base64",
    status: "coming-soon"
  },
  {
    title: "Timestamp to Date",
    description: "Convert Unix timestamps into human-readable date and time format.",
    icon: <Clock className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/converter/timestamp-to-date",
    status: "coming-soon"
  },
  {
    title: "RGB to HEX",
    description: "Quickly find the HEX code for any RGB or RGBA color value.",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/converter/rgb-to-hex",
    status: "coming-soon"
  },
  {
    title: "JSON to Excel",
    description: "Export your JSON data directly into a downloadable XLSX file.",
    icon: <Table className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/converter/json-to-excel",
    status: "coming-soon"
  },
  {
    title: "Decimal to Binary",
    description: "Calculate the binary equivalent of any decimal number.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/converter/decimal-to-binary",
    status: "coming-soon"
  },
  {
    title: "Base64 to File",
    description: "Decode a Base64 string back into its original file format.",
    icon: <FileArchive className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/converter/base64-to-file",
    status: "coming-soon"
  }
];

export default function ConverterToolsPage() {
  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-conv-primary to-conv-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Converter Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Converter Tools
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Switch between data formats, units, and encoding types effortlessly with our private, browser-side converters
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {converterTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-conv-white rounded-2xl p-8 flex flex-col border border-conv-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-conv-dark mb-1">{tool.title}</h3>
                  <p className="text-conv-gray text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-conv-primary hover:bg-conv-primaryDark text-conv-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-conv-gray/20 text-conv-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO Article Section */}
        <div className="mt-24 pt-16 border-t border-conv-gray">
          <h2 className="text-3xl font-bold text-conv-dark mb-6">About Converter Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-conv-gray leading-relaxed">
            <div>
              <p className="mb-4">
                In a digital landscape filled with fragmented data formats, <strong>Converter Tools</strong> are the essential bridge for developers, designers, and data scientists. Whether you are transforming a complex <strong>JSON response to CSV</strong> for a stakeholder report or converting raw <strong>Binary to Text</strong> to debug a system log, ToolsWizard offers a seamless, high-speed solution.
              </p>
              <p>
                Our philosophy is simple: conversion should be instant and private. Many online converters require you to upload files to their servers, creating a security risk for sensitive business data. ToolsWizard converters run 100% on the client side, meaning your data never leaves your device.
              </p>
            </div>
            <div>
              <p className="mb-4">
                We support a wide array of transformations beyond simple file formats. Our <strong>Timestamp converter</strong>, <strong>Color formatters</strong>, and <strong>Base64 encoders</strong> are designed to streamline the technical tasks that usually require custom scripts or heavy software.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-conv-primary"/> <strong>Fast:</strong> Powered by JavaScript Web Workers.</li>
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-conv-primary"/> <strong>Private:</strong> Zero server-side data storage.</li>
                <li className="flex items-center gap-2"><ArrowRightLeft size={16} className="text-conv-primary"/> <strong>Free:</strong> No limits, no subscriptions.</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumbs */}
      <footer className="bg-conv-white border-t border-conv-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-conv-gray">
          <Link href="/" className="hover:text-conv-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-conv-dark font-medium">Converter Tools</span>
        </div>
      </footer>
    </div>
  );
}