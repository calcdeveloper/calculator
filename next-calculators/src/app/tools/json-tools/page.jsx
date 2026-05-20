import React from 'react';
import Link from 'next/link';
import { 
  Code, 
  ShieldCheck, 
  Minimize2, 
  Eye, 
  FileSpreadsheet, 
  FileCode, 
  Settings2, 
  GitCompare, 
  SortAsc, 
  Search, 
  Terminal, 
  Quote, 
  Key, 
  Layers, 
  Network, 
  FileCheck, 
  ArrowLeftRight, 
  ListOrdered, 
  Eraser, 
  Table,
  ChevronRight
} from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'JSON Tools - Online JSON Formatter, Validator & Converter',
  description:
    'Clean, validate, and convert JSON data with our suite of free online JSON tools. Format, minify, and transform JSON to CSV, XML, or YAML instantly.',
  path: '/tools/json-tools',
  keywords: ['json formatter', 'json validator', 'json to csv', 'json to xml', 'json minifier', 'json diff checker', 'json path tester'],
});

const jsonTools = [
  {
    title: "JSON Formatter",
    description: "Make your JSON data readable with beautiful, customizable indentation.",
    icon: <Code className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/json-tools/formatter",
    status: "coming-soon"
  },
  {
    title: "JSON Validator",
    description: "Validate your JSON code against RFC standards and find syntax errors.",
    icon: <ShieldCheck className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/json-tools/validator",
    status: "coming-soon"
  },
  {
    title: "JSON to CSV",
    description: "Convert nested JSON data into a flat CSV format for spreadsheet apps.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/json-tools/to-csv",
    status: "coming-soon"
  },
  {
    title: "JSON Minifier",
    description: "Remove whitespace and comments to reduce JSON file size for production.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/json-tools/minifier",
    status: "coming-soon"
  },
  {
    title: "JSON to XML",
    description: "Transform JSON objects into structured XML documents instantly.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/json-tools/json-xml",
    status: "active"
  },
  {
    title: "JSON to YAML",
    description: "Convert JSON configuration files into clean, readable YAML format.",
    icon: <Settings2 className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/json-tools/to-yaml",
    status: "coming-soon"
  },
  {
    title: "JSON Diff Checker",
    description: "Compare two JSON objects side-by-side to highlight differences.",
    icon: <GitCompare className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/json-tools/diff-checker",
    status: "coming-soon"
  },
  {
    title: "JSON Tree Viewer",
    description: "Navigate through complex JSON structures with an interactive tree view.",
    icon: <Network className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/json-tools/tree-viewer",
    status: "coming-soon"
  },
  {
    title: "JSON Path Tester",
    description: "Extract specific data points using JSONPath expressions.",
    icon: <Search className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/json-tools/path-tester",
    status: "coming-soon"
  },
  {
    title: "JSON Flatten",
    description: "Convert deeply nested JSON into a single-level key-value pair object.",
    icon: <Layers className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/json-tools/flatten",
    status: "coming-soon"
  },
  {
    title: "JSON to Table",
    description: "Visualize your JSON arrays as a clean, sortable HTML table.",
    icon: <Table className="w-6 h-6" />,
    iconBg: "bg-lime-100 text-lime-600",
    link: "/tools/json-tools/to-table",
    status: "coming-soon"
  },
  {
    title: "JSON Cleaner",
    description: "Fix common JSON issues like trailing commas or unquoted keys.",
    icon: <Eraser className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/json-tools/cleaner",
    status: "coming-soon"
  }
];

export default function JsonToolsPage() {
  return (
    <div className="min-h-screen bg-json-bg font-sans text-json-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-json-primary to-json-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-json-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>JSON Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-json-white mb-6 tracking-tight">
            JSON Tools
          </h1>
          <p className="text-xl text-json-white/90 max-w-2xl mx-auto leading-relaxed">
            Professional JSON manipulation tools for developers, data analysts, and power users
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jsonTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-json-white rounded-2xl p-8 flex flex-col border border-json-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-json-dark mb-1">{tool.title}</h3>
                  <p className="text-json-gray text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-json-primary hover:bg-json-primaryDark text-json-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-json-gray/20 text-json-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO & About Section */}
        <div className="mt-24 pt-16 border-t border-json-gray">
          <h2 className="text-3xl font-bold text-json-dark mb-6">About JSON Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-json-gray leading-relaxed">
            <div>
              <p className="mb-4">
                JSON (JavaScript Object Notation) has become the universal language for data exchange on the web. However, working with raw, unformatted JSON can be a challenge. At ToolsWizard, we provide a complete ecosystem of <strong>JSON Tools</strong> designed to simplify your development workflow.
              </p>
              <p>
                Whether you need to <strong>validate JSON</strong> against a schema, <strong>prettify</strong> messy API responses, or <strong>convert JSON to CSV</strong> for data analysis, our tools handle it all with zero latency and 100% privacy.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Privacy is at the core of our platform. Unlike other online JSON formatters, our tools process your data entirely within your browser. Your sensitive API keys, user data, and configuration files are never sent to our servers.
              </p>
              <p>
                Our <strong>JSON Formatter</strong> and <strong>Validator</strong> are optimized for large datasets, allowing you to debug and clean code quickly without installing heavy IDE extensions or desktop software.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumb Navigation for SEO */}
      <footer className="bg-json-white border-t border-json-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-json-gray">
          <Link href="/" className="hover:text-json-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-json-dark font-medium">JSON Tools</span>
        </div>
      </footer>
    </div>
  );
}