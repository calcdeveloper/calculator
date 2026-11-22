import React from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
  BookOpen, 
  Calculator, 
  FileText, 
  Terminal, 
  Lock, 
  Layers, 
  ChevronRight, 
  Mail, 
  ShieldCheck, 
  Smartphone,
  Cpu
} from 'lucide-react';
import HelpSeo from '@/components/help/HelpSeo';

export default function Help() {
  const categories = [
    {
      title: "Financial & Loan Calculators",
      desc: "Amortization schedules, DTI underwriting ratios, compound interest, and prepayment savings.",
      icon: <Calculator className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-200",
      link: "/calculator/finance"
    },
    {
      title: "Civil & Construction Estimators",
      desc: "Dry-to-wet concrete expansion, mortar bed volume, AAC blocks vs. bricks, and brass metrology.",
      icon: <Cpu className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-200",
      link: "/calculator/construction/brick"
    },
    {
      title: "PDF & Document Assembly",
      desc: "Client-side PDF merging, compression quantization, rotation, and AES-256 encryption.",
      icon: <FileText className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200",
      link: "/tools/pdf-tools"
    },
    {
      title: "Developer & Data Formatting",
      desc: "JSON AST parsing, SQL formatters, Myers' diff algorithm, and ReDoS execution guards.",
      icon: <Terminal className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-200",
      link: "/tools/developer-tools"
    },
    {
      title: "Security, Hashing & Crypto",
      desc: "Shannon entropy formula, Bcrypt work factors, CSPRNG randomness, and UUID v4 generation.",
      icon: <Lock className="w-6 h-6 text-rose-600" />,
      bg: "bg-rose-50 border-rose-200",
      link: "/tools/encoder-decoder"
    },
    {
      title: "Zero-Data Privacy & PWA",
      desc: "100% in-browser RAM execution, offline service worker caching, and network audit proofs.",
      icon: <ShieldCheck className="w-6 h-6 text-teal-600" />,
      bg: "bg-teal-50 border-teal-200",
      link: "/privacy"
    }
  ];

  return (
    <div className="min-h-screen bg-text-bg font-sans text-text-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 pt-16 pb-28 px-4">
        <nav className="flex justify-center space-x-2 text-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="self-center" />
          <span className="text-white font-medium">Help Center &amp; Guides</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            ToolsWizard Help Center
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Comprehensive user guides, mathematical formulas, operational tutorials, and troubleshooting diagnostics for 500+ free online tools.
          </p>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 -mt-16 pb-20">
        {/* Knowledge Base Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.link}
              className={`p-6 bg-white rounded-2xl border ${cat.bg} shadow-xs hover:shadow-md transition-all group flex flex-col justify-between`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center mb-4 shadow-2xs group-hover:scale-105 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-text-dark text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs text-text-gray leading-relaxed mb-4">
                  {cat.desc}
                </p>
              </div>
              <div className="text-xs font-bold text-blue-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Explore Category Guides &rarr;
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Diagnostic Assistance Banner */}
        <div className="bg-white p-8 rounded-3xl border border-text-gray/30 shadow-xs mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold text-text-dark mb-2 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-blue-600" /> Encountering an Algorithmic Bug or Calculation Discrepancy?
            </h2>
            <p className="text-xs text-text-gray leading-relaxed">
              Our engineering panel welcomes mathematical verification tickets, formula questions, and community RFC proposals. Dispatches receive peer-reviewed responses within 24 to 48 business hours.
            </p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold text-sm transition-all shadow-sm flex items-center gap-2"
          >
            <Mail className="w-4 h-4" /> Open Engineering Ticket
          </Link>
        </div>

        {/* Deep Subject-Matter Content */}
        <HelpSeo />
      </main>
    </div>
  );
}
