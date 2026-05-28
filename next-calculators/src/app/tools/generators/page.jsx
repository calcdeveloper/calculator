import Link from 'next/link';
import { Zap, Hash, Key, FileText, RefreshCw, ChevronRight, Barcode, User, Dices, Sparkles } from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Generator Tools - Free Online Content & Code Generators',
  description:
    'Generate UUIDs, passwords, QR codes, random numbers, and more with our free online generator tools. Fast, secure, and private browser-side generation.',
  path: '/tools/generators',
  keywords: ['uuid generator', 'password generator', 'qr code generator', 'random number generator', 'lorem ipsum generator', 'secure generator'],
});

const generators = [
  { 
    title: 'UUID Generator', 
    description: 'Generate unique UUID v4 identifiers instantly',
    icon: <Hash className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600',
    link: '/tools/generators/uuid-generator',
    status: 'active'
  },
  { 
    title: 'QR Code Generator', 
    description: 'Generate QR codes for URLs, text, and more',
    icon: <Barcode className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600',
    link: '/tools/generators/qr-generator',
    status: 'active'
  },
  { 
    title: 'Password Generator', 
    description: 'Generate secure, random passwords',
    icon: <Key className="w-6 h-6" />,
    iconBg: 'bg-purple-100 text-purple-600',
    link: '/tools/generators/password-generator',
    status: 'coming-soon'
  },
  { 
    title: 'Random Text Generator', 
    description: 'Generate random text content for testing',
    icon: <FileText className="w-6 h-6" />,
    iconBg: 'bg-orange-100 text-orange-600',
    link: '/tools/generators/random-text',
    status: 'coming-soon'
  },
  { 
    title: 'Lorem Ipsum Generator', 
    description: 'Generate placeholder text for design',
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: 'bg-pink-100 text-pink-600',
    link: '/tools/generators/lorem-ipsum',
    status: 'coming-soon'
  },
  { 
    title: 'Random Number Generator', 
    description: 'Generate random numbers in custom ranges',
    icon: <Dices className="w-6 h-6" />,
    iconBg: 'bg-cyan-100 text-cyan-600',
    link: '/tools/generators/random-number',
    status: 'coming-soon'
  },
];

export default function GeneratorsPage() {
  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-gen-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Generator Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight">
            Generator Tools
          </h1>
          <p className="text-xl text-gen-white/90 max-w-2xl mx-auto leading-relaxed">
            Create content, codes, and random data instantly with our secure, browser-side generators
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((tool, index) => (
            <div 
              key={index} 
              className="bg-gen-white rounded-2xl p-8 flex flex-col border border-gen-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gen-dark mb-1">{tool.title}</h3>
                  <p className="text-gen-gray text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-gen-primary hover:bg-gen-primaryDark text-gen-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-gen-gray/20 text-gen-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO & About Section */}
        <div className="mt-24 pt-16 border-t border-gen-gray">
          <h2 className="text-3xl font-bold text-gen-dark mb-6">About Generator Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gen-gray leading-relaxed">
            <div>
              <p className="mb-4">
                Our generator tools help you create unique identifiers, secure passwords, QR codes, and random data instantly. Perfect for developers, designers, and anyone who needs quick content generation.
              </p>
              <p>
                All our generators use cryptographically secure algorithms and process data entirely in your browser, ensuring your generated content remains private and never leaves your device.
              </p>
            </div>
            <div>
              <p className="mb-4">
                Whether you need a <strong>UUID v4</strong> for database records, a <strong>strong password</strong> for new accounts, or <strong>random test data</strong> for development, our tools provide instant results without any registration or limits.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Zap size={16} className="text-gen-primary"/> <strong>Fast:</strong> Instant generation without delay</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-gen-primary"/> <strong>Secure:</strong> Cryptographically secure algorithms</li>
                <li className="flex items-center gap-2"><Zap size={16} className="text-gen-primary"/> <strong>Private:</strong> Zero server-side data storage</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumb Navigation for SEO */}
      <footer className="bg-gen-white border-t border-gen-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-gen-gray">
          <Link href="/" className="hover:text-gen-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-gen-dark font-medium">Generator Tools</span>
        </div>
      </footer>
    </div>
  );
}
