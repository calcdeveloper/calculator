import Link from 'next/link';
import { 
  Calculator, 
  Zap, 
  FileText, 
  Type, 
  Sparkles, 
  Key, 
  RefreshCw, 
  Code, 
  Palette, 
  ShieldCheck, 
  Cpu, 
  ArrowRight,
  TrendingUp,
  Lock,
  Layers
} from 'lucide-react';
import { SITE_URL } from '@/config/site';
import { createPageMetadata, createSoftwareAppSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'ToolsWizard - Free Online Calculators, Converters & Utilities',
  description:
    'Free online calculators, generators, PDF utilities, JSON formatters, encoders, and developer tools. Fast, private, browser-based, and mobile-friendly.',
  path: '/',
  keywords: [
    'online tools',
    'free calculator',
    'pdf tools online',
    'uuid generator',
    'emi calculator',
    'sip calculator',
    'developer tools',
    'json formatter',
    'base64 decoder',
    'color palette generator'
  ],
});

const toolCategories = [
  {
    name: 'Calculator Tools',
    description: 'Math, finance, health, and engineering calculators',
    icon: <Calculator size={32} />,
    color: 'bg-blue-500',
    path: '/calculator'
  },
  {
    name: 'Generator Tools',
    description: 'Create passwords, UUIDs, QR codes, barcodes, and mock data',
    icon: <Zap size={32} />,
    color: 'bg-emerald-500',
    path: '/tools/generators'
  },
  {
    name: 'Image & PDF Tools',
    description: 'Merge, compress, convert, OCR, and edit PDFs client-side',
    icon: <FileText size={32} />,
    color: 'bg-red-500',
    path: '/tools/pdf-tools'
  },
  {
    name: 'Text Tools',
    description: 'Count words, convert case, remove duplicates, and diff text',
    icon: <Type size={32} />,
    color: 'bg-purple-500',
    path: '/tools/text-tools'
  },
  {
    name: 'Fun Tools',
    description: 'Coin flip, dice roller, games, and randomizers',
    icon: <Sparkles size={32} />,
    color: 'bg-rose-500',
    path: '/tools/fun-tools'
  },
  {
    name: 'Encoder & Decoder',
    description: 'Base64, URL, HTML entities, JWT, and hash utilities',
    icon: <Key size={32} />,
    color: 'bg-indigo-500',
    path: '/tools/encoder-decoder'
  },
  {
    name: 'Converter Tools',
    description: 'Transform CSV, JSON, XML, Base64, and Markdown',
    icon: <RefreshCw size={32} />,
    color: 'bg-amber-500',
    path: '/tools/converter'
  },
  {
    name: 'Developer Tools',
    description: 'Format, minify, test regex, SQL, and validate code',
    icon: <Code size={32} />,
    color: 'bg-slate-700',
    path: '/tools/developer-tools'
  },
  {
    name: 'Design Tools',
    description: 'Color palettes, contrast checker, and gradient generator',
    icon: <Palette size={32} />,
    color: 'bg-pink-500',
    path: '/tools/design'
  }
];

const trendingTools = [
  {
    name: 'SIP Calculator with Inflation',
    desc: 'Calculate mutual fund SIP growth with inflation adjustments.',
    path: '/calculator/finance/sip',
    category: 'Finance'
  },
  {
    name: 'EMI Calculator',
    desc: 'Calculate monthly loan EMI payments and total interest.',
    path: '/calculator/finance/emi',
    category: 'Finance'
  },
  {
    name: 'BMI Calculator',
    desc: 'Compute Body Mass Index and healthy weight category.',
    path: '/calculator/health/bmi',
    category: 'Health'
  },
  {
    name: 'Merge PDF Files',
    desc: 'Combine multiple PDF documents into one cleanly.',
    path: '/tools/pdf-tools/merge-pdf',
    category: 'PDF Tools'
  },
  {
    name: 'UUID Generator v4',
    desc: 'Instantly generate cryptographically unique GUID/UUIDs.',
    path: '/tools/generators/uuid-generator',
    category: 'Generators'
  },
  {
    name: 'Base64 to File Decoder',
    desc: 'Convert encoded Base64 strings back to downloadable files.',
    path: '/tools/converter/base64-to-file',
    category: 'Converter'
  },
  {
    name: 'Word & Character Counter',
    desc: 'Live word, sentence, paragraph, and character counter.',
    path: '/tools/text-tools/character-counter',
    category: 'Text'
  },
  {
    name: 'Color Palette Generator',
    desc: 'Generate harmonious color schemes with spacebar.',
    path: '/tools/design/color-palette-generator',
    category: 'Design'
  }
];

export default function Home() {
  const softwareSchema = createSoftwareAppSchema({
    name: 'ToolsWizard - Free Online Calculators & Utility Tools',
    description: 'A comprehensive multi-tool platform offering 280+ free calculators, file converters, PDF editors, generators, and developer utilities.',
    path: '/',
    category: 'UtilityApplication'
  });

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section */}
      <section className="text-center py-16 sm:py-20 px-4 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-xs sm:text-sm font-semibold mb-6 border border-emerald-200">
            <ShieldCheck size={16} /> 100% Free, Private & Client-Side
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Free Online Calculators & Developer Tools
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Fast, secure, and private browser-based utilities. Calculate finances, process PDFs, format code, and convert files with zero registration.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/calculator"
              className="px-6 py-3 bg-calc-green text-white font-bold rounded-xl hover:bg-calc-darkGreen transition-all shadow-sm"
            >
              Browse 150+ Calculators
            </Link>
            <Link
              href="/tools"
              className="px-6 py-3 bg-gray-900 text-white font-bold rounded-xl hover:bg-black transition-all shadow-sm"
            >
              Explore 130+ Online Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Tools Section (Internal Link Engine) */}
      <section id="trending" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 text-sm font-bold uppercase tracking-wider mb-1">
              <TrendingUp size={16} /> Popular Daily Utilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Trending Online Tools</h2>
          </div>
          <Link href="/tools" className="text-sm font-semibold text-calc-green hover:underline hidden sm:flex items-center gap-1">
            View All Tools <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingTools.map((tool) => (
            <Link
              key={tool.path}
              href={tool.path}
              className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-calc-green hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 mb-3 group-hover:bg-emerald-50 group-hover:text-emerald-700 transition-colors">
                  {tool.category}
                </span>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-calc-green transition-colors">
                  {tool.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {tool.desc}
                </p>
              </div>
              <span className="text-sm font-semibold text-calc-green flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Open Tool <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Tool Suites Grid */}
      <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Complete Suite of Online Tools</h2>
            <p className="text-gray-600">Select a category to discover specialized tools for your workflow</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toolCategories.map((category) => (
              <Link 
                key={category.name}
                href={category.path}
                className="bg-white hover:bg-gray-50 p-8 rounded-2xl border border-gray-200 text-center transition-all hover:shadow-md group flex flex-col items-center"
              >
                <div className={`inline-flex p-4 rounded-2xl ${category.color} text-white mb-4 group-hover:scale-110 transition-transform shadow-xs`}>
                  {category.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ToolsWizard / Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Designed for Speed and Privacy</h2>
          <p className="text-gray-600">No cookies, no accounts, and no data leaves your browser.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Zero-Trust Privacy</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Files and data are never sent to remote servers. All calculations, format conversions, and PDF tasks execute in your browser via client-side WebAssembly and JavaScript.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
              <Cpu size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Calculation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Instantaneous calculations without loading delays or server wait times. Optimized for Core Web Vitals with minimal JavaScript payloads and static HTML delivery.
            </p>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-xs">
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6">
              <Layers size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">280+ Free Utilities</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              A comprehensive toolkit in one place. Bookmark once and access financial schedules, tax calculators, PDF merges, Base64 decoders, and code beautifiers anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
