import Link from 'next/link';
import { Zap, Hash, Key, FileText, RefreshCw, ChevronRight, Barcode, User, Dices, Sparkles, Database, Mail, ShieldCheck, Network, Link as LinkIcon, Ticket, Shuffle, Receipt, Palette } from 'lucide-react';
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
    description: 'Generate universally unique v4 identifiers (UUID) instantly',
    icon: <Hash className="w-6 h-6" />,
    iconBg: 'bg-emerald-100 text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white',
    link: '/tools/generators/uuid-generator',
    status: 'active'
  },
  { 
    title: 'Password Generator', 
    description: 'Generate secure, random passwords with custom parameters',
    icon: <Key className="w-6 h-6" />,
    iconBg: 'bg-purple-100 text-purple-600 group-hover:bg-purple-500 group-hover:text-white',
    link: '/tools/generators/password-generator',
    status: 'active'
  },
  { 
    title: 'QR Code Generator', 
    description: 'Generate high-resolution QR codes for URLs and text',
    icon: <Barcode className="w-6 h-6" />,
    iconBg: 'bg-blue-100 text-blue-600 group-hover:bg-blue-500 group-hover:text-white',
    link: '/tools/generators/qr-generator',
    status: 'active'
  },
  { 
    title: 'Barcode Generator', 
    description: 'Generate standard barcodes for products and inventory',
    icon: <Barcode className="w-6 h-6" />,
    iconBg: 'bg-teal-100 text-teal-600 group-hover:bg-teal-500 group-hover:text-white',
    link: '/tools/generators/barcode-generator',
    status: 'active'
  },
  { 
    title: 'Lorem Ipsum Generator', 
    description: 'Generate professional placeholder text for design',
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: 'bg-pink-100 text-pink-600 group-hover:bg-pink-500 group-hover:text-white',
    link: '/tools/generators/lorem-ipsum-generator',
    status: 'active'
  },
  { 
    title: 'Fake Data Generator', 
    description: 'Generate vast arrays of realistic fake data for testing',
    icon: <Database className="w-6 h-6" />,
    iconBg: 'bg-cyan-100 text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white',
    link: '/tools/generators/fake-data-generator',
    status: 'active'
  },
  { 
    title: 'Name Generator', 
    description: 'Generate random names for characters, babies, or users',
    icon: <User className="w-6 h-6" />,
    iconBg: 'bg-rose-100 text-rose-600 group-hover:bg-rose-500 group-hover:text-white',
    link: '/tools/generators/name-generator',
    status: 'active'
  },
  { 
    title: 'Email Generator', 
    description: 'Generate temporary or test email addresses instantly',
    icon: <Mail className="w-6 h-6" />,
    iconBg: 'bg-indigo-100 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white',
    link: '/tools/generators/email-generator',
    status: 'active'
  },
  { 
    title: 'Strong Password Generator', 
    description: 'Generate ultra-secure passwords that pass strict audits',
    icon: <ShieldCheck className="w-6 h-6" />,
    iconBg: 'bg-fuchsia-100 text-fuchsia-600 group-hover:bg-fuchsia-500 group-hover:text-white',
    link: '/tools/generators/strong-password-generator',
    status: 'active'
  },
  { 
    title: 'Hash Generator', 
    description: 'Generate various cryptographic hashes simultaneously',
    icon: <Network className="w-6 h-6" />,
    iconBg: 'bg-slate-100 text-slate-600 group-hover:bg-slate-500 group-hover:text-white',
    link: '/tools/generators/hash-generator',
    status: 'active'
  },
  { 
    title: 'API Key Generator', 
    description: 'Generate secure, standard-compliant API keys',
    icon: <LinkIcon className="w-6 h-6" />,
    iconBg: 'bg-amber-100 text-amber-600 group-hover:bg-amber-500 group-hover:text-white',
    link: '/tools/generators/api-key-generator',
    status: 'active'
  },
  { 
    title: 'Token Generator', 
    description: 'Generate random secure tokens for sessions',
    icon: <Ticket className="w-6 h-6" />,
    iconBg: 'bg-lime-100 text-lime-600 group-hover:bg-lime-500 group-hover:text-white',
    link: '/tools/generators/token-generator',
    status: 'active'
  },
  { 
    title: 'Random String Generator', 
    description: 'Generate customized random strings of any length',
    icon: <Shuffle className="w-6 h-6" />,
    iconBg: 'bg-orange-100 text-orange-600 group-hover:bg-orange-500 group-hover:text-white',
    link: '/tools/generators/random-string-generator',
    status: 'active'
  },
  { 
    title: 'Invoice Generator', 
    description: 'Generate and download professional PDF invoices',
    icon: <Receipt className="w-6 h-6" />,
    iconBg: 'bg-green-100 text-green-600 group-hover:bg-green-500 group-hover:text-white',
    link: '/tools/generators/invoice-generator',
    status: 'active'
  },
  { 
    title: 'Color Palette Generator', 
    description: 'Generate beautiful, harmonious color palettes',
    icon: <Palette className="w-6 h-6" />,
    iconBg: 'bg-red-100 text-red-600 group-hover:bg-red-500 group-hover:text-white',
    link: '/tools/generators/color-palette-generator',
    status: 'active'
  }
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
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight">
            Generator Tools
          </h1>
          <p className="text-xl text-gen-white/90 max-w-2xl mx-auto leading-relaxed">
            Create content, codes, and random data instantly with our secure, browser-side generators
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {generators.map((tool, index) => (
            <div 
              key={index} 
              className="bg-gen-white rounded-2xl p-8 flex flex-col border border-gen-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gen-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-gen-gray text-sm leading-relaxed line-clamp-2">
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
        <div className="mt-24 pt-16 border-t border-gen-gray/30 prose prose-slate max-w-none text-gen-dark">
          <h2 className="text-3xl font-bold mb-6">The Ultimate Suite of Free Online Generator Tools</h2>
          
          <div className="p-6 bg-gen-bg/50 rounded-2xl border border-gen-gray/20 mb-8">
            <h4 className="text-sm font-bold text-gen-dark mb-4 uppercase tracking-wider">Table of Contents</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm font-semibold text-gen-primary list-none p-0 m-0">
              <li>• <a href="#automation-revolution" className="hover:underline transition-colors">The Automation Revolution in Software Engineering</a></li>
              <li>• <a href="#cryptography" className="hover:underline transition-colors">Cryptographic Chaos: Hashes, Keys, and Passwords</a></li>
              <li>• <a href="#zero-trust" className="hover:underline transition-colors">The Imperative of Zero-Trust Browser Processing</a></li>
              <li>• <a href="#test-data" className="hover:underline transition-colors">Synthesizing Massive Arrays of Fake Test Data</a></li>
              <li>• <a href="#design-utilities" className="hover:underline transition-colors">Design Utilities: Lorem Ipsum, Colors, and Barcodes</a></li>
              <li>• <a href="#financial-tools" className="hover:underline transition-colors">Financial and Commercial Invoicing Infrastructure</a></li>
              <li>• <a href="#developer-ux" className="hover:underline transition-colors">Maximizing Developer Experience (DX) and Workflow</a></li>
            </ul>
          </div>

          <section id="automation-revolution">
            <h3 className="text-2xl font-bold mb-4">The Automation Revolution in Software Engineering</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              In the modern era of hyperscale cloud computing and relentless continuous integration pipelines, software engineers and digital architects simply do not have the time to manually construct boilerplate data. The speed of digital delivery dictates that developers must rapidly scaffold applications, populate massive databases with test content, and generate highly secure cryptographic keys instantaneously. Relying on manual generation processes or scattered, untrusted third-party scripts introduces catastrophic security vulnerabilities and massive workflow latency.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Our comprehensive suite of <strong>Online Generator Tools</strong> is meticulously engineered to completely eradicate these developmental bottlenecks. We have assembled the internet's most powerful, entirely free collection of client-side synthesis utilities. Whether you are a backend engineer requiring a massive batch of mathematically pristine UUID v4 identifiers, a QA automation tester needing 5,000 rows of GDPR-compliant fake user data, or a frontend designer searching for the perfect algorithmic color palette, our centralized platform provides the exact mathematical output you require in milliseconds.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              By consolidating all of these disparate utilities into a single, unified, high-performance web architecture, we empower development teams to maintain absolute focus on their core product logic rather than wasting countless hours writing custom Python scripts or messy bash commands to generate basic developmental necessities.
            </p>
          </section>

          <section id="cryptography">
            <h3 className="text-2xl font-bold mb-4 mt-8">Cryptographic Chaos: Hashes, Keys, and Passwords</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              The fundamental foundation of modern digital security is mathematical chaos—specifically, the concept of cryptographic entropy. Predictability in a computer system is a fatal flaw. If a hacker can predict the sequence of your API keys, the structure of your user session tokens, or the output of your password generation algorithm, they can instantly bypass your authorization middleware and execute devastating data breaches.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Our cryptography-focused generators (including the <strong>API Key Generator</strong>, <strong>Strong Password Generator</strong>, and <strong>Random String Generator</strong>) aggressively leverage the <code>window.crypto.getRandomValues()</code> API natively embedded within modern browsers. This Cryptographically Secure Pseudo-Random Number Generator (CSPRNG) taps into environmental hardware noise to produce strings of absolute mathematical chaos. 
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Furthermore, our dedicated <strong>Cryptographic Hash Generator</strong> allows security researchers to instantly calculate SHA-256, SHA-512, and MD5 digests locally, while our <strong>JWT Token Generator</strong> enables backend engineers to mathematically sign JSON Web Tokens utilizing symmetric HS256 HMAC algorithms without ever transmitting their highly sensitive server secrets across the internet.
            </p>
          </section>

          <section id="zero-trust">
            <h3 className="text-2xl font-bold mb-4 mt-8">The Imperative of Zero-Trust Browser Processing</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              The internet is flooded with free tool websites, but the vast majority of them possess a terrifying architectural flaw: they execute their generation logic on a remote backend server (typically utilizing outdated PHP or Python frameworks). When you generate a production API key or parse a sensitive JSON Web Token on those platforms, your highly classified data is transmitted over the internet, stored in volatile server RAM, and potentially logged in a hidden database accessible to malicious actors.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              We fundamentally reject this massive security vulnerability. Every single tool within our Generator category operates on a strict <strong>Zero-Trust Client-Side Architecture</strong>. When you navigate to one of our tools, the React JavaScript engine downloads directly into your browser's local sandbox environment. When you click "Generate," the mathematical operations are executed entirely by your local CPU.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Your generated passwords, API keys, QR codes, and fake datasets absolutely never traverse the public internet via HTTP requests. We possess zero backend API endpoints capable of receiving this data. It is physically, mathematically impossible for our servers to intercept, log, or steal your generated output, guaranteeing you absolute, military-grade operational privacy.
            </p>
          </section>

          <section id="test-data">
            <h3 className="text-2xl font-bold mb-4 mt-8">Synthesizing Massive Arrays of Fake Test Data</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Under strict modern privacy legislation—such as the European Union's General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA)—utilizing real customer data in staging environments or sharing it with offshore QA testing teams is highly illegal and incredibly dangerous. Organizations must strictly utilize anonymized or entirely synthetic data during the software development lifecycle.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Our <strong>Fake Data Generator</strong> and <strong>Name Generator</strong> are explicitly designed to solve this massive compliance bottleneck. Powered by advanced dictionaries and realistic algorithmic mapping, these tools can instantly synthesize massive databases of highly realistic, completely fictional user profiles. You can generate thousands of rows containing fake first names, last names, physical addresses, international phone numbers, and randomized credit card PANs.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Most importantly, the generated data can be instantly exported into strictly formatted JSON arrays, CSV spreadsheets, or raw SQL INSERT statements. This allows automation engineers to effortlessly pipe the synthesized data directly into massive Continuous Integration (CI) test suites, ensuring their databases scale correctly under heavy load without ever risking a multi-million dollar privacy violation.
            </p>
          </section>

          <section id="design-utilities">
            <h3 className="text-2xl font-bold mb-4 mt-8">Design Utilities: Lorem Ipsum, Colors, and Barcodes</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Beyond backend infrastructure, our suite provides massive utility for frontend UI/UX designers and marketing teams. The traditional "Lorem Ipsum" text utilized since the 1500s remains the absolute gold standard for typography stress-testing and wireframing. Our <strong>Lorem Ipsum Generator</strong> allows designers to instantly output exact quantities of Cicero's classic text, structured perfectly into words, sentences, or massive paragraphs to test CSS flexbox and text-overflow mechanics.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              For aesthetic prototyping, our <strong>Color Palette Generator</strong> abandons raw RGB randomization in favor of heavily constrained HSL (Hue, Saturation, Lightness) mathematics. By hitting the spacebar, designers can rapidly cycle through thousands of highly vibrant, mathematically harmonious 5-color palettes, locking their favorites and instantly copying the hex codes into Tailwind CSS or Figma.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Furthermore, for e-commerce developers and print designers, our incredibly robust <strong>QR Code Generator</strong> and <strong>Barcode Generator</strong> synthesize high-resolution, scannable SVGs and PNGs directly on the canvas. Whether you need an EAN-13 barcode for a physical retail product or a highly stylized, colored QR code pointing to a marketing landing page, our algorithms generate flawless optical patterns instantly.
            </p>
          </section>

          <section id="financial-tools">
            <h3 className="text-2xl font-bold mb-4 mt-8">Financial and Commercial Invoicing Infrastructure</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              For freelance software engineers, independent consultants, and small digital agencies, managing administrative billing logic is deeply frustrating. Utilizing clumsy Microsoft Word templates or subscribing to expensive, bloated SaaS accounting platforms severely cuts into operational profit margins. A fast, private, mathematically accurate billing utility is an absolute necessity.
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Our free <strong>Professional Invoice Generator</strong> provides a pristine, high-contrast, mathematically driven dashboard for rapidly composing commercial billing documents. It features dynamic line-item arrays, automatic Subtotal aggregation, and algorithmic percentage-based Tax calculations (crucial for European VAT or US Sales Tax). 
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              By leveraging advanced CSS <code>@media print</code> queries, the application forcefully strips away all web UI components the exact millisecond the user clicks print. It elegantly restructures the DOM into a perfect 8.5x11 inch layout, allowing the browser's native C++ rendering engine to instantly export a mathematically locked, uneditable PDF file that corporate AP departments will process rapidly.
            </p>
          </section>

          <section id="developer-ux">
            <h3 className="text-2xl font-bold mb-4 mt-8">Maximizing Developer Experience (DX) and Workflow</h3>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Every single application within our generator suite is unified by an absolute obsession with Developer Experience (DX). We understand that clicking through three pages of ads to copy a single API key is unacceptable. We have heavily optimized our User Interfaces to ensure absolute maximum velocity. 
            </p>
            <p className="mb-4 text-lg text-gen-gray leading-relaxed">
              Every output field features a massive, highly visible "Copy to Clipboard" button utilizing modern navigator clipboard APIs. Every numeric input utilizes HTML5 range sliders for rapid manipulation. The entire architecture is heavily responsive, guaranteeing that if a server administrator needs to instantly generate a UUID v4 while standing in a datacenter utilizing only their iPhone, the interface will render flawlessly and perform instantaneously.
            </p>
          </section>
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
