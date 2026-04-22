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
    path: '#'
  },
  {
    name: 'Text Tools',
    description: 'Text manipulation and formatting utilities',
    icon: <Type size={32} />,
    color: 'bg-purple-500',
    path: '#'
  },
  {
    name: 'JSON Tools',
    description: 'JSON formatting, validation, and conversion',
    icon: <Database size={32} />,
    color: 'bg-yellow-500',
    path: '#'
  },
  {
    name: 'Encoder/Decoder',
    description: 'Encoding and decoding utilities',
    icon: <Key size={32} />,
    color: 'bg-indigo-500',
    path: '#'
  },
  {
    name: 'Converter Tools',
    description: 'Unit and format conversion tools',
    icon: <RefreshCw size={32} />,
    color: 'bg-orange-500',
    path: '#'
  },
  {
    name: 'Developer Tools',
    description: 'Programming and web development utilities',
    icon: <Code size={32} />,
    color: 'bg-gray-700',
    path: '#'
  },
  {
    name: 'Design Tools',
    description: 'Color, image, and design utilities',
    icon: <Palette size={32} />,
    color: 'bg-pink-500',
    path: '#'
  }
];

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CalcPilot - Multi-Tool Platform",
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
    <main className="min-h-screen bg-white">
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />

      {/* Hero Section */}
      <div className="text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          CalcPilot Tools
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Free online tools for calculators, generators, converters, and more
        </p>
      </div>

      {/* Tool Categories Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
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

          </main>
  );
}
