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
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Converter Tools - Free Online Format Transformers',
  description:
    'Convert between JSON, CSV, XML, Markdown, Base64, and binary formats online for free. 100% private in-browser conversion with zero server data uploads.',
  path: '/tools/converter',
  keywords: ['json to csv', 'csv to json', 'html to markdown', 'image to base64', 'timestamp converter', 'unit converter online'],
});

const converterTools = [
  {
    title: "XML to JSON",
    description: "Transform XML documents into structured JSON data instantly.",
    icon: <CodeXml className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/converter/xml-json",
    status: "active"
  },
  {
    title: "JSON to XML",
    description: "Transform JSON data into structured XML documents instantly.",
    icon: <CodeXml className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/json-xml",
    status: "active"
  },
  {
    title: "JSON to CSV",
    description: "Convert nested JSON objects into flat CSV files for spreadsheets.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/developer-tools/json-csv",
    status: "active"
  },
  {
    title: "CSV to JSON",
    description: "Turn your spreadsheet data into clean, valid JSON format.",
    icon: <FileJson className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/converter/csv-to-json",
    status: "active"
  },
  {
    title: "HTML to Markdown",
    description: "Clean up HTML code and convert it into readable Markdown text.",
    icon: <Languages className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/converter/html-to-markdown",
    status: "active"
  },
  {
    title: "Markdown to HTML",
    description: "Convert your MD files into production-ready HTML code blocks.",
    icon: <FileText className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/converter/markdown-to-html",
    status: "active"
  },
  {
    title: "Text to Binary",
    description: "Encode any string of text into its 8-bit binary representation.",
    icon: <Binary className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/converter/text-to-binary",
    status: "active"
  },
  {
    title: "Image to Base64",
    description: "Convert PNG, JPG, or SVG images into Base64 strings for CSS/HTML.",
    icon: <ImageIcon className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/converter/image-to-base64",
    status: "active"
  },
  {
    title: "Timestamp to Date",
    description: "Convert Unix timestamps into human-readable date and time format.",
    icon: <Clock className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/converter/timestamp-to-date",
    status: "active"
  },
  {
    title: "RGB to HEX",
    description: "Quickly find the HEX code for any RGB or RGBA color value.",
    icon: <Palette className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/design/rgb-hex",
    status: "active"
  },
  {
    title: "JSON to Excel",
    description: "Export your JSON data directly into a downloadable XLSX file.",
    icon: <Table className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/converter/json-to-excel",
    status: "active"
  },
  {
    title: "Decimal to Binary",
    description: "Calculate the binary equivalent of any decimal number.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/converter/decimal-to-binary",
    status: "active"
  },
  {
    title: "Base64 to File",
    description: "Decode a Base64 string back into its original file format.",
    icon: <FileArchive className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/converter/base64-to-file",
    status: "active"
  }
];

import ConverterHubSeo from '@/components/tools/ConverterHubSeo';


const softwareSchema = createSoftwareAppSchema({
  name: 'Converter Tools',
  description: 'Convert between JSON, CSV, XML, Markdown, Base64, and more. Fast, secure, and private browser-side conversion tools for developers and creators.',
  path: '/tools/converter',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Converter Tools', path: '/tools/converter' }
]);

const faqSchema = createFaqSchema([
  {
    question: "Why does Base64 encoding increase file size by approximately 33%?",
    answer: "Base64 maps binary data using an alphabet of 64 printable ASCII characters. Because each Base64 character represents only 6 bits of information (2^6 = 64), encoding three 8-bit bytes (24 bits) requires four Base64 characters (4 × 6 = 24 bits). This mathematical 4/3 ratio results in an exact 33.3% increase in data volume, not factoring optional MIME newline characters."
  },
  {
    question: "Is my confidential database export or CSV customer list uploaded to any server?",
    answer: "No. ToolsWizard operates on an absolute zero-trust client architecture. All CSV parsing, JSON formatting, Base64 encoding, and timestamp math execute purely inside your browser's local JavaScript runtime. Your data never transmits across external networks, touches remote servers, or enters cloud databases. You can verify this by inspecting the browser Network tab or using our tools offline in Airplane Mode."
  },
  {
    question: "How does the converter handle nested arrays when converting JSON to CSV?",
    answer: "When converting complex JSON structures to flat CSV rows, primitive arrays (such as lists of tags or roles) are serialized into a single table cell using semicolon delimiters (e.g., 'admin; billing'). Arrays of nested objects can either be unrolled across multiple relational rows or flattened using index-path notation (e.g., 'items.0.sku', 'items.1.sku'), preserving full relational context in spreadsheet viewers."
  },
  {
    question: "What is the difference between Unix timestamp seconds and milliseconds?",
    answer: "Standard POSIX timestamps count elapsed seconds since January 1, 1970 (resulting in a 10-digit integer in modern dates, e.g., 1732049000). Modern programming environments like JavaScript (Date.now()) and Java count elapsed milliseconds, producing a 13-digit integer (e.g., 1732049000000). The ToolsWizard Timestamp converter automatically detects the integer digit length and applies appropriate scaling to render the exact date."
  },
  {
    question: "How does the XML to JSON converter handle XML attributes versus child elements?",
    answer: "XML allows nodes to contain both tag attributes (e.g., <item id='5'>) and child text elements (<name>Product</name>). In standard JSON mapping, attributes are prefixed with an '@' symbol (e.g., '@id': 5) while child text content is stored in a '#text' property, completely eliminating namespace collisions and preserving attribute metadata."
  },
  {
    question: "Can I use ToolsWizard converter tools without an active internet connection?",
    answer: "Yes. All converter utilities are compiled into static client-side JavaScript bundles and cached in your browser. Once the web page loads, you can sever your internet connection or activate Airplane Mode, and all text conversions, Base64 encodings, and spreadsheet transformations execute flawlessly offline."
  },
  {
    question: "Is there a file size limit on client-side data conversions?",
    answer: "Because conversions execute in browser RAM rather than on paid cloud servers, ToolsWizard imposes zero artificial file size caps or query quotas. Practical limits depend solely on your computer's available system memory. Modern laptops comfortably process 50 MB to 100 MB CSV and JSON datasets directly in browser memory without crashing."
  },
  {
    question: "What is the Year 2038 Problem (Y2K38), and does it affect timestamps?",
    answer: "The Year 2038 Problem occurs when signed 32-bit integers storing Unix epoch seconds reach their maximum value (2,147,483,647) at 03:14:07 UTC on January 19, 2038, and overflow to -2,147,483,648 (December 13, 1901). ToolsWizard utilizes modern 64-bit IEEE 754 JavaScript floating-point integers (supporting safe integers up to 9 quadrillion), ensuring full compatibility for dates far beyond 2038."
  },
  {
    question: "Why should I avoid embedding large Base64 images directly in CSS or HTML?",
    answer: "Base64 expands binary image weight by 33.3% and prevents the browser from caching individual image files independently of the parent HTML/CSS stylesheet. Embedding images larger than 10-15 KB bloats DOM parse times, blocking initial page rendering and severely damaging Google Core Web Vitals (specifically Largest Contentful Paint). Base64 Data URIs should be reserved strictly for small vector icons and loading spinners."
  },
  {
    question: "Are all converter utilities 100% free with no subscription paywalls?",
    answer: "Yes. Every single tool across the ToolsWizard platform is 100% free for developers, students, and enterprises. We require no user accounts, no credit cards, no premium subscriptions, and no artificial daily limits. All transformation engines are openly accessible to all users forever."
  }
]);

export default function ConverterToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-conv-primary to-conv-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Converter Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight">
            Converter Tools
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Switch between data formats, units, and encoding types effortlessly with our private, browser-side converters
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {converterTools.map((tool, index) => (
            <div
              key={index}
              className="bg-conv-white rounded-2xl p-8 flex flex-col border border-conv-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-conv-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-conv-gray text-sm leading-relaxed line-clamp-2">
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
        <ConverterHubSeo />
      </main>

      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="bg-conv-white border-t border-conv-gray py-6 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-conv-gray">
          <Link href="/" className="hover:text-conv-dark">Home</Link>
          <ChevronRight size={14} />
          <Link href="/tools" className="hover:text-conv-dark">Tools</Link>
          <ChevronRight size={14} />
          <span className="text-conv-dark font-medium">Converter Tools</span>
        </div>
      </nav>
    </div>
  
    </>
  );
}