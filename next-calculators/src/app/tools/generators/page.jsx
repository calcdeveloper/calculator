import Link from 'next/link';
import GeneratorsHubSeo from "@/components/tools/GeneratorsHubSeo";
import { Zap, Hash, Key, FileText, RefreshCw, ChevronRight, Barcode, User, Dices, Sparkles, Database, Mail, ShieldCheck, Network, Link as LinkIcon, Ticket, Shuffle, Receipt, Palette } from 'lucide-react';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

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


const softwareSchema = createSoftwareAppSchema({
  name: 'Generator Tools',
  description: 'Generate UUIDs, passwords, QR codes, random numbers, and more with our free online generator tools. Fast, secure, and private browser-side generation.',
  path: '/tools/generators',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Generator Tools', path: '/tools/generators' }
]);

const faqSchema = createFaqSchema([
  {
    question: "What is the mathematical probability of two UUID v4 values colliding?",
    answer: "UUID Version 4 contains 122 bits of pure cryptographic entropy (yielding 2^122 ≈ 5.3 × 10^36 possible identifiers). Under the Birthday Paradox, you would need to generate approximately 103 trillion UUIDs to have a mere one in a billion (10^-9) chance of encountering a single duplicate. Generating one billion UUIDs per second for 85 years would still result in less than a 1 in a billion collision probability. In practice, collisions are mathematically impossible."
  },
  {
    question: "Why should developers avoid Math.random() when generating passwords or API keys?",
    answer: "JavaScript's Math.random() is an algorithmic Pseudo-Random Number Generator (PRNG) powered by Xoroshiro128+ in modern browsers. It is engineered for execution speed in visual animations, not cryptographic security. Because it maintains only 128 bits of deterministic internal state, an observer who captures a small sequence of numbers can reconstruct the internal state and predict all future and past outputs. Cryptographic credentials must strictly use the W3C Web Crypto API (crypto.getRandomValues()), which taps into hardware entropy."
  },
  {
    question: "What is the architectural difference between UUID v4 and the new UUID v7?",
    answer: "UUID v4 is entirely randomized (122 bits of entropy), causing severe B-Tree index fragmentation and cache misses when inserted into database primary key indices. UUID v7 (ratified under RFC 9562) prefixes a 48-bit millisecond Unix timestamp ahead of 74 bits of cryptographic entropy. This enables UUID v7 identifiers to sort chronologically, preserving relational database insert performance and index locality while retaining distributed uniqueness."
  },
  {
    question: "What is Modulo Bias, and how does ToolsWizard eliminate it in password generation?",
    answer: "Modulo bias occurs when a random byte range (0 to 255) is mapped to a character pool that does not divide 256 evenly (such as 62 alphanumeric characters: 256 % 62 = 8). Using the modulo operator (%) causes the first 8 characters to have a 25% higher probability of selection, weakening password entropy. ToolsWizard uses Rejection Sampling, discarding any byte value that falls above the largest multiple of the pool size, ensuring mathematically uniform distribution across all characters."
  },
  {
    question: "Why is synthetic fake data legally required under GDPR and HIPAA regulations?",
    answer: "GDPR, HIPAA, and CCPA prohibit exposing production Personally Identifiable Information (PII) to developers, staging servers, QA automation tools, or offshore contractors. Breaches in non-production environments carry the identical statutory penalties as production leaks (up to 4% of annual global turnover). Synthetic data generators create structurally and statistically identical mock datasets that pass test suites without exposing real customer identities."
  },
  {
    question: "How does Reed-Solomon error correction work in QR code generation?",
    answer: "Reed-Solomon error correction is an algebraic coding method operating across Galois Fields GF(2^8). It appends parity polynomials to data codewords. When a scanner reads a scratched, torn, or partially obscured QR code, the algebraic decoder calculates error locators and corrects damaged modules. Depending on the error correction tier chosen (L: 7%, M: 15%, Q: 25%, H: 30%), up to 30% of the QR matrix can be destroyed while remaining 100% readable."
  },
  {
    question: "How does the Luhn Algorithm validate credit card numbers without calling a bank?",
    answer: "The Luhn Algorithm (Mod 10 / ISO/IEC 7812) is a mathematical checksum formula. Moving from the rightmost digit leftward, every second digit is doubled. If the doubled result exceeds 9, its digits are summed. If the grand sum of all digits is a multiple of 10, the card number is mathematically valid. It catches accidental transposition errors and typos instantly on the client side without issuing network queries to card processors."
  },
  {
    question: "Why do designers continue to use Lorem Ipsum instead of actual English placeholder text?",
    answer: "Readable English text involuntarily triggers cognitive reading processes in stakeholders, diverting focus from evaluating visual layouts, font hierarchies, line wrapping, and white space balance. Scrambled Latin text (derived from Cicero) mirrors natural English word-length frequencies and letter distributions without carrying semantic meaning, enabling pure evaluation of design mechanics and typography."
  },
  {
    question: "Is my generated data private when using ToolsWizard generators?",
    answer: "Yes, 100% private. ToolsWizard operates on a pure zero-trust client-side architecture. All cryptographic calculations, random byte draws, QR code vector renderings, and invoice PDF compilations execute locally inside your browser runtime. No passwords, tokens, client invoice data, or synthetic records are ever transmitted over external networks or logged on cloud servers."
  },
  {
    question: "Can I use ToolsWizard generated assets, barcodes, and invoices for commercial projects?",
    answer: "Yes. All generated artifacts—including UUIDs, cryptographic passwords, QR code graphics, retail barcodes, mock datasets, and commercial PDF invoices—are completely free for unlimited commercial and enterprise use. There are no licensing fees, usage caps, watermarks, or attribution requirements."
  }
]);

export default function GeneratorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
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

        <GeneratorsHubSeo />
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
  
    </>
  );
}
