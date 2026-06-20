"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Hash, 
  Barcode, 
  Key, 
  FileText, 
  Sparkles, 
  Database, 
  User, 
  Mail, 
  ShieldCheck, 
  Network, 
  Link as LinkIcon, 
  Ticket, 
  Shuffle, 
  Receipt, 
  Palette,
  ChevronRight
} from 'lucide-react';

export const GENERATOR_TOOLS = [
  { 
    title: 'UUID Generator', 
    description: 'Generate universally unique v4 identifiers (UUID) instantly',
    icon: <Hash className="w-6 h-6" />,
    color: 'from-emerald-500 to-emerald-600',
    link: '/tools/generators/uuid-generator',
  },
  { 
    title: 'Password Generator', 
    description: 'Generate secure, random passwords with custom parameters',
    icon: <Key className="w-6 h-6" />,
    color: 'from-purple-500 to-purple-600',
    link: '/tools/generators/password-generator',
  },
  { 
    title: 'QR Code Generator', 
    description: 'Generate high-resolution QR codes for URLs and text',
    icon: <Barcode className="w-6 h-6" />,
    color: 'from-blue-500 to-blue-600',
    link: '/tools/generators/qr-generator',
  },
  { 
    title: 'Barcode Generator', 
    description: 'Generate standard barcodes for products and inventory',
    icon: <Barcode className="w-6 h-6" />,
    color: 'from-teal-500 to-teal-600',
    link: '/tools/generators/barcode-generator',
  },
  { 
    title: 'Lorem Ipsum Generator', 
    description: 'Generate professional placeholder text for design',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'from-pink-500 to-pink-600',
    link: '/tools/generators/lorem-ipsum-generator',
  },
  { 
    title: 'Fake Data Generator', 
    description: 'Generate vast arrays of realistic fake data for testing',
    icon: <Database className="w-6 h-6" />,
    color: 'from-cyan-500 to-cyan-600',
    link: '/tools/generators/fake-data-generator',
  },
  { 
    title: 'Name Generator', 
    description: 'Generate random names for characters, babies, or users',
    icon: <User className="w-6 h-6" />,
    color: 'from-rose-500 to-rose-600',
    link: '/tools/generators/name-generator',
  },
  { 
    title: 'Email Generator', 
    description: 'Generate temporary or test email addresses instantly',
    icon: <Mail className="w-6 h-6" />,
    color: 'from-indigo-500 to-indigo-600',
    link: '/tools/generators/email-generator',
  },
  { 
    title: 'Strong Password Generator', 
    description: 'Generate ultra-secure passwords that pass strict audits',
    icon: <ShieldCheck className="w-6 h-6" />,
    color: 'from-fuchsia-500 to-fuchsia-600',
    link: '/tools/generators/strong-password-generator',
  },
  { 
    title: 'Hash Generator', 
    description: 'Generate various cryptographic hashes simultaneously',
    icon: <Network className="w-6 h-6" />,
    color: 'from-slate-500 to-slate-600',
    link: '/tools/generators/hash-generator',
  },
  { 
    title: 'API Key Generator', 
    description: 'Generate secure, standard-compliant API keys',
    icon: <LinkIcon className="w-6 h-6" />,
    color: 'from-amber-500 to-amber-600',
    link: '/tools/generators/api-key-generator',
  },
  { 
    title: 'Token Generator', 
    description: 'Generate random secure tokens for sessions',
    icon: <Ticket className="w-6 h-6" />,
    color: 'from-lime-500 to-lime-600',
    link: '/tools/generators/token-generator',
  },
  { 
    title: 'Random String Generator', 
    description: 'Generate customized random strings of any length',
    icon: <Shuffle className="w-6 h-6" />,
    color: 'from-orange-500 to-orange-600',
    link: '/tools/generators/random-string-generator',
  },
  { 
    title: 'Invoice Generator', 
    description: 'Generate and download professional PDF invoices',
    icon: <Receipt className="w-6 h-6" />,
    color: 'from-green-500 to-green-600',
    link: '/tools/generators/invoice-generator',
  },
  { 
    title: 'Color Palette Generator', 
    description: 'Generate beautiful, harmonious color palettes',
    icon: <Palette className="w-6 h-6" />,
    color: 'from-red-500 to-red-600',
    link: '/tools/generators/color-palette-generator',
  }
];

export default function RelatedGeneratorsTools({ currentPath }) {
  const pathname = usePathname();
  const activePath = currentPath || pathname;
  
  // Filter out current path to only show related tools
  const relatedTools = GENERATOR_TOOLS.filter(tool => tool.link !== activePath);

  return (
    <div className="mt-16 bg-gen-white rounded-3xl shadow-xl border border-gen-gray/20 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gen-dark mb-6">Explore Other Generator Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedTools.map((tool, index) => (
          <Link
            key={index}
            href={tool.link}
            className="group flex flex-col p-5 rounded-2xl border border-gen-gray/20 bg-gen-bg/30 hover:bg-gen-primary/5 hover:border-gen-primary/30 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-xl bg-gen-white shadow-sm flex items-center justify-center text-gen-dark group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:${tool.color} group-hover:text-gen-white transition-all duration-300`}>
                {tool.icon}
              </div>
              <h3 className="font-bold text-gen-dark text-lg group-hover:text-gen-primary transition-colors">
                {tool.title}
              </h3>
            </div>
            <p className="text-sm text-gen-gray leading-relaxed flex-grow">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
