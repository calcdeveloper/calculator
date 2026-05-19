import Link from 'next/link';
import { Calculator, Zap, FileText, Type, Database, Key, RefreshCw, Code, Palette } from 'lucide-react';

export const dynamic = "force-static";

const toolCategories = [
  {
    name: 'Calculator Tools',
    description: 'Math, finance, health, and everyday calculators',
    icon: <Calculator size={32} />,
    color: 'bg-blue-500',
    path: '/calculator'
  },
  {
    name: 'Generator Tools',
    description: 'Create content, codes, and random data',
    icon: <Zap size={32} />,
    color: 'bg-green-500',
    path: '/tools/generators'
  },
  {
    name: 'PDF Tools',
    description: 'PDF creation, manipulation, and conversion',
    icon: <FileText size={32} />,
    color: 'bg-red-500',
    path: '/tools/pdf-tools'
  },
  {
    name: 'Text Tools',
    description: 'Text manipulation and formatting utilities',
    icon: <Type size={32} />,
    color: 'bg-purple-500',
    path: '/tools/text-tools'
  },
  {
    name: 'JSON Tools',
    description: 'JSON formatting, validation, and conversion',
    icon: <Database size={32} />,
    color: 'bg-yellow-500',
    path: '/tools/json-tools'
  },
  {
    name: 'Encoder/Decoder',
    description: 'Encoding and decoding utilities',
    icon: <Key size={32} />,
    color: 'bg-indigo-500',
    path: '/tools/encoder-decoder'
  },
  {
    name: 'Converter Tools',
    description: 'Unit and format conversion tools',
    icon: <RefreshCw size={32} />,
    color: 'bg-orange-500',
    path: '/tools/converter'
  },
  {
    name: 'Developer Tools',
    description: 'Programming and web development utilities',
    icon: <Code size={32} />,
    color: 'bg-gray-700',
    path: '/tools/developer-tools'
  },
  {
    name: 'Design Tools',
    description: 'Color, image, and design utilities',
    icon: <Palette size={32} />,
    color: 'bg-pink-500',
    path: '/tools/design'
  }
];

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "ToolsWizard - Multi-Tool Platform",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "A comprehensive platform with calculators, generators, PDF tools, text tools, JSON tools, encoder/decoder, converters, and developer utilities."
  };

  return (
    <main className="min-h-screen bg-white scroll-smooth">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          ToolsWizard
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Free online tools for calculators, generators, converters, and more
        </p>
      </div>

      {/* Tool Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">All Tools</h2>
        <p className="text-gray-600 mb-8 text-center">Explore our complete collection of online tools</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {toolCategories.map((category, index) => (
            <Link 
              key={category.name}
              href={category.path}
              className="bg-gray-50 hover:bg-gray-100 p-8 rounded-xl text-center transition-all hover:shadow-md group"
            >
              <div className={`inline-flex p-4 rounded-lg ${category.color} text-white mb-4 group-hover:scale-110 transition-transform`}>
                {category.icon}
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-2">{category.name}</h3>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Trending Tools Section */}
      <div id="trending" className="bg-gradient-to-r from-blue-50 to-purple-50 py-16 px-4 scroll-mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Trending Tools</h2>
          <p className="text-gray-600 mb-8 text-center">Most popular tools used by our community</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link 
              href="/calculator"
              className="bg-white hover:bg-blue-50 p-6 rounded-xl text-center transition-all hover:shadow-lg border border-gray-200 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-blue-500 text-white mb-4 group-hover:scale-110 transition-transform">
                <Calculator size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Calculator Tools</h3>
              <p className="text-gray-600 text-sm">Math, finance, and health calculators</p>
            </Link>

            <Link 
              href="/tools/pdf-tools"
              className="bg-white hover:bg-red-50 p-6 rounded-xl text-center transition-all hover:shadow-lg border border-gray-200 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-red-500 text-white mb-4 group-hover:scale-110 transition-transform">
                <FileText size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">PDF Tools</h3>
              <p className="text-gray-600 text-sm">PDF creation and manipulation</p>
            </Link>

            <Link 
              href="/tools/converter"
              className="bg-white hover:bg-orange-50 p-6 rounded-xl text-center transition-all hover:shadow-lg border border-gray-200 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-orange-500 text-white mb-4 group-hover:scale-110 transition-transform">
                <RefreshCw size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Converter Tools</h3>
              <p className="text-gray-600 text-sm">Unit and format conversion</p>
            </Link>

            <Link 
              href="/tools/developer-tools"
              className="bg-white hover:bg-gray-100 p-6 rounded-xl text-center transition-all hover:shadow-lg border border-gray-200 group"
            >
              <div className="inline-flex p-3 rounded-lg bg-gray-700 text-white mb-4 group-hover:scale-110 transition-transform">
                <Code size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Developer Tools</h3>
              <p className="text-gray-600 text-sm">Code formatting and utilities</p>
            </Link>
          </div>
        </div>
      </div>

          </main>
  );
}
