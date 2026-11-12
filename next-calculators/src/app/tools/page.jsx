import React from 'react';
import Link from 'next/link';
import { 
  Zap, 
  FileText, 
  Type, 
  Sparkles, 
  Key, 
  RefreshCw, 
  Code, 
  Palette, 
  ChevronRight,
  Shield,
  Smartphone,
  Cpu
} from 'lucide-react';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Free Online Tools & Utilities Directory',
  description:
    'Browse our complete directory of 130+ free, secure online tools. Generators, PDF editors, file converters, text utilities, developer tools, encoders, and design utilities.',
  path: '/tools',
  keywords: [
    'free online tools',
    'web utilities',
    'developer tools online',
    'pdf tools free',
    'text tools online',
    'file converter free',
    'generator tools',
    'online encoders'
  ],
  openGraph: {
    title: 'Free Online Tools & Utilities Directory',
    description:
      'Explore 130+ privacy-first online tools for developers, designers, students, and professionals.',
  },
});

const toolSuites = [
  {
    name: 'Generator Tools',
    slug: 'generators',
    path: '/tools/generators',
    description: 'Instant utilities for UUIDs, strong passwords, QR codes, barcodes, invoices, and dummy data.',
    color: 'from-emerald-500 to-emerald-600',
    iconBg: 'bg-emerald-100 text-emerald-600',
    icon: <Zap className="w-6 h-6" />,
    featured: [
      { name: 'UUID Generator', path: '/tools/generators/uuid-generator' },
      { name: 'QR Code Generator', path: '/tools/generators/qr-generator' },
      { name: 'Password Generator', path: '/tools/generators/password-generator' },
      { name: 'Invoice Generator', path: '/tools/generators/invoice-generator' },
    ]
  },
  {
    name: 'Image & PDF Tools',
    slug: 'pdf-tools',
    path: '/tools/pdf-tools',
    description: 'Merge, compress, convert, OCR, extract pages, and password protect PDFs and images client-side.',
    color: 'from-red-500 to-red-600',
    iconBg: 'bg-red-100 text-red-600',
    icon: <FileText className="w-6 h-6" />,
    featured: [
      { name: 'Merge PDF', path: '/tools/pdf-tools/merge-pdf' },
      { name: 'PDF Compressor', path: '/tools/pdf-tools/pdf-compress' },
      { name: 'Image Compressor', path: '/tools/pdf-tools/image-compressor' },
      { name: 'PDF OCR', path: '/tools/pdf-tools/pdf-ocr' },
    ]
  },
  {
    name: 'Text Tools',
    slug: 'text-tools',
    path: '/tools/text-tools',
    description: 'Manipulate strings, format case, count words, clean whitespace, generate slugs, and check diffs.',
    color: 'from-purple-500 to-purple-600',
    iconBg: 'bg-purple-100 text-purple-600',
    icon: <Type className="w-6 h-6" />,
    featured: [
      { name: 'Word & Character Counter', path: '/tools/text-tools/character-counter' },
      { name: 'Case Converter', path: '/tools/text-tools/case-converter' },
      { name: 'Remove Duplicate Lines', path: '/tools/text-tools/remove-duplicates' },
      { name: 'Text Diff Checker', path: '/tools/text-tools/diff-checker' },
    ]
  },
  {
    name: 'Converter Tools',
    slug: 'converter',
    path: '/tools/converter',
    description: 'Transform data formats between Base64, CSV, JSON, XML, Markdown, HTML, and binary representations.',
    color: 'from-amber-500 to-amber-600',
    iconBg: 'bg-amber-100 text-amber-600',
    icon: <RefreshCw className="w-6 h-6" />,
    featured: [
      { name: 'Base64 to File', path: '/tools/converter/base64-to-file' },
      { name: 'CSV to JSON', path: '/tools/converter/csv-to-json' },
      { name: 'Markdown to HTML', path: '/tools/converter/markdown-to-html' },
      { name: 'JSON to Excel', path: '/tools/converter/json-to-excel' },
    ]
  },
  {
    name: 'Developer Tools',
    slug: 'developer-tools',
    path: '/tools/developer-tools',
    description: 'Format, minify, validate, test, and debug JSON, YAML, HTML, CSS, JavaScript, SQL, and regex.',
    color: 'from-slate-700 to-slate-800',
    iconBg: 'bg-slate-100 text-slate-700',
    icon: <Code className="w-6 h-6" />,
    featured: [
      { name: 'JSON Formatter & Validator', path: '/tools/developer-tools/json-formatter' },
      { name: 'Regex Tester', path: '/tools/developer-tools/regex-tester' },
      { name: 'Cron Expression Generator', path: '/tools/developer-tools/cron-generator' },
      { name: 'SQL Formatter', path: '/tools/developer-tools/sql-formatter' },
    ]
  },
  {
    name: 'Encoder & Decoder Tools',
    slug: 'encoder-decoder',
    path: '/tools/encoder-decoder',
    description: 'Decode and encode Base64, URL, HTML entities, JWTs, ROT13, SHA hashes, and bcrypt passwords.',
    color: 'from-indigo-500 to-indigo-600',
    iconBg: 'bg-indigo-100 text-indigo-600',
    icon: <Key className="w-6 h-6" />,
    featured: [
      { name: 'Base64 Decoder', path: '/tools/encoder-decoder/base64-decoder' },
      { name: 'URL Encoder / Decoder', path: '/tools/encoder-decoder/url-encoder' },
      { name: 'JWT Decoder', path: '/tools/encoder-decoder/jwt-decoder' },
      { name: 'SHA256 Hash Generator', path: '/tools/encoder-decoder/sha256-hash-generator' },
    ]
  },
  {
    name: 'Design & Color Tools',
    slug: 'design',
    path: '/tools/design',
    description: 'Create harmonious palettes, check contrast compliance, extract image colors, and convert color codes.',
    color: 'from-pink-500 to-pink-600',
    iconBg: 'bg-pink-100 text-pink-600',
    icon: <Palette className="w-6 h-6" />,
    featured: [
      { name: 'Color Palette Generator', path: '/tools/design/color-palette-generator' },
      { name: 'Contrast Checker (WCAG)', path: '/tools/design/contrast-checker' },
      { name: 'Image Color Picker', path: '/tools/design/image-color-picker' },
      { name: 'Tailwind Color Picker', path: '/tools/design/tailwind-color-picker' },
    ]
  },
  {
    name: 'Fun & Casual Tools',
    slug: 'fun-tools',
    path: '/tools/fun-tools',
    description: 'Interactive coin flippers, dice rollers, lucky number pickers, wheel spinners, and friendship tests.',
    color: 'from-rose-500 to-rose-600',
    iconBg: 'bg-rose-100 text-rose-600',
    icon: <Sparkles className="w-6 h-6" />,
    featured: [
      { name: 'Coin Flip Online', path: '/tools/fun-tools/coin-flip' },
      { name: 'Dice Roller', path: '/tools/fun-tools/dice-roller' },
      { name: 'Wheel Spinner', path: '/tools/fun-tools/random-wheel-spinner' },
      { name: 'Love Percentage Calculator', path: '/tools/fun-tools/love-percentage' },
    ]
  }
];

export default function ToolsDirectoryPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Tools Directory', path: '/tools' }
  ];

  const softwareSchema = createSoftwareAppSchema({
    name: 'ToolsWizard Online Tools Directory',
    description: 'A comprehensive suite of 130+ free online developer utilities, converters, PDF processors, generators, and design tools.',
    path: '/tools',
    category: 'DeveloperApplication'
  });

  const breadcrumbSchema = createBreadcrumbSchema(breadcrumbs);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema]),
        }}
      />

      {/* Hero & Breadcrumb */}
      <header className="bg-white border-b border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-calc-green transition-colors">Home</Link>
            <ChevronRight size={14} className="text-gray-400" />
            <span className="text-gray-900 font-medium">Tools</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              Free Online Tools & Utilities Directory
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore our full collection of 130+ client-side web utilities. Everything runs securely in your browser with zero registration, complete privacy, and lightning-fast execution.
            </p>
          </div>
        </div>
      </header>

      {/* Main Directory Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {toolSuites.map((suite) => (
            <div
              key={suite.slug}
              className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`p-3 rounded-xl ${suite.iconBg}`}>
                    {suite.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      <Link href={suite.path} className="hover:text-calc-green transition-colors">
                        {suite.name}
                      </Link>
                    </h2>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {suite.description}
                </p>

                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                    Popular Tools in this Suite
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {suite.featured.map((tool) => (
                      <Link
                        key={tool.path}
                        href={tool.path}
                        className="text-sm font-medium text-gray-700 hover:text-calc-green bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors flex items-center justify-between"
                      >
                        <span className="truncate">{tool.name}</span>
                        <ChevronRight size={14} className="text-gray-400 shrink-0 ml-1" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <Link
                  href={suite.path}
                  className="text-sm font-semibold text-calc-green hover:underline flex items-center gap-1"
                >
                  View All {suite.name} <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Informational / Features Section for SEO Authority */}
        <section className="bg-white rounded-2xl border border-gray-200 p-8 sm:p-12 mb-16 shadow-xs">
          <div className="max-w-3xl mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Professionals & Developers Choose ToolsWizard
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We engineered ToolsWizard to provide lightning-fast, high-utility productivity tools that respect user privacy and eliminate workflow friction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">100% Private & Client-Side</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your data, PDFs, files, and text strings remain entirely inside your local browser. No server uploads, no logs, and no tracking.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Zero Signup or Paywalls</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Every single tool is available instantly without registrations, subscriptions, or credit card requirements. Just bookmark and use.
              </p>
            </div>

            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900">Mobile & Touch Optimized</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Responsive layouts, touch-friendly inputs, and rapid rendering ensure a seamless experience on phones, tablets, and desktop workstations.
              </p>
            </div>
          </div>
        </section>

        {/* Cross-Link Hub to Calculators */}
        <section className="bg-linear-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Looking for Financial, Health, or Math Calculators?</h2>
            <p className="text-gray-600 text-sm max-w-2xl">
              Browse our collection of 150+ interactive calculators including SIP, EMI, BMI, Age, Scientific, and Construction calculators.
            </p>
          </div>
          <Link
            href="/calculator"
            className="shrink-0 px-6 py-3 bg-calc-green text-white font-bold rounded-xl hover:bg-calc-darkGreen transition-colors shadow-sm"
          >
            Explore Calculators
          </Link>
        </section>
      </main>
    </div>
  );
}

