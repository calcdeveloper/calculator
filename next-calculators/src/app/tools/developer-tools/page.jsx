import Link from 'next/link';
import {
  Code,
  Minimize2,
  FileCode,
  Search,
  Database,
  FileJson,
  GitCompare,
  Sparkles,
  Shield,
  ShieldCheck,
  CheckCircle2,
  Globe,
  Clock,
  Hash,
  Key,
  ChevronRight,
  Terminal,
  Layout,
  Braces,
  FileText,
  FileSpreadsheet,
  Settings2,
  Network,
  Layers,
  Table,
  Eraser,
} from 'lucide-react';
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Developer Tools - Free Online Code Formatters & Validators',
  description:
    'Format, minify, validate, and beautify code plus JSON formatters, validators, and converters. Free online developer tools—fast, secure, and private.',
  path: '/tools/developer-tools',
  keywords: [
    'html formatter',
    'css formatter',
    'javascript formatter',
    'json formatter',
    'json to xml',
    'json validator',
    'code beautifier',
    'regex tester',
    'sql formatter',
    'developer tools online',
  ],
});

const developerTools = [
  {
    title: "HTML Formatter",
    description: "Beautify and format HTML code with proper indentation and structure.",
    icon: <Code className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/developer-tools/html-formatter",
    status: "active"
  },
  {
    title: "HTML Minifier",
    description: "Minify HTML code to reduce file size and improve load times.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-red-100 text-red-600",
    link: "/tools/developer-tools/html-minifier",
    status: "active"
  },
  {
    title: "HTML Validator",
    description: "Validate HTML code for syntax errors and compliance with web standards.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/developer-tools/html-validator",
    status: "active"
  },
  {
    title: "CSS Formatter",
    description: "Format and beautify CSS code with proper indentation and organization.",
    icon: <Layout className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/css-formatter",
    status: "active"
  },
  {
    title: "CSS Minifier",
    description: "Minify CSS code to reduce file size and improve performance.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/developer-tools/css-minifier",
    status: "active"
  },
  {
    title: "JavaScript Formatter",
    description: "Format and beautify JavaScript code with proper indentation and syntax.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-yellow-100 text-yellow-600",
    link: "/tools/developer-tools/js-formatter",
    status: "active"
  },
  {
    title: "JavaScript Minifier",
    description: "Minify JavaScript code to reduce file size and improve load times.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/developer-tools/js-minifier",
    status: "active"
  },
  {
    title: "JavaScript Obfuscator",
    description: "Obfuscate JavaScript code to protect intellectual property and make it harder to reverse engineer.",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/developer-tools/js-obfuscator",
    status: "active"
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions with real-time matching and highlighting.",
    icon: <Search className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/developer-tools/regex-tester",
    status: "active"
  },
  {
    title: "SQL Formatter",
    description: "Format and beautify SQL queries with proper indentation and syntax highlighting.",
    icon: <Database className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/developer-tools/sql-formatter",
    status: "active"
  },
  {
    title: "XML Formatter",
    description: "Format and beautify XML files with proper indentation and structure.",
    icon: <FileJson className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/developer-tools/xml-formatter",
    status: "active"
  },
  {
    title: "YAML Validator",
    description: "Validate and format YAML files with syntax checking and error reporting.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/developer-tools/yaml-validator",
    status: "active"
  },
  {
    title: "Code Diff Tool",
    description: "Compare two pieces of code and highlight differences with side-by-side view.",
    icon: <GitCompare className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/developer-tools/code-diff",
    status: "active"
  },
  {
    title: "Code Beautifier",
    description: "Beautify and format code in multiple languages with consistent styling.",
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/developer-tools/code-beautifier",
    status: "active"
  },
  {
    title: "API Tester",
    description: "Test REST APIs with custom requests, headers, and authentication.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/api-tester",
    status: "active"
  },
  {
    title: "Cron Expression Generator",
    description: "Generate and validate cron expressions for scheduled tasks with visual builder.",
    icon: <Clock className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/developer-tools/cron-generator",
    status: "active"
  },
  {
    title: "JSON Formatter",
    description: "Make your JSON data readable with beautiful, customizable indentation.",
    icon: <Code className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/json-formatter",
    status: "active"
  },
  {
    title: "JSON Minifier",
    description: "Remove whitespace and comments to reduce JSON file size for production.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/developer-tools/json-minifier",
    status: "active"
  },
  {
    title: "JSON to XML",
    description: "Transform JSON objects into structured XML documents instantly.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/developer-tools/json-xml",
    status: "active"
  },
  {
    title: "JSON to CSV",
    description: "Convert nested JSON data into a flat CSV format for spreadsheet apps.",
    icon: <FileSpreadsheet className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/developer-tools/json-csv",
    status: "active"
  },
  {
    title: "JSON to YAML",
    description: "Convert JSON configuration files into clean, readable YAML format.",
    icon: <Settings2 className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/developer-tools/json-yaml",
    status: "active"
  }
];

import DeveloperToolsHubSeo from '@/components/tools/DeveloperToolsHubSeo';


const softwareSchema = createSoftwareAppSchema({
  name: 'Developer Tools',
  description: 'Format, minify, validate, and beautify code plus JSON formatters, validators, and converters. Free online developer tools—fast, secure, and private.',
  path: '/tools/developer-tools',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Developer Tools', path: '/tools/developer-tools' }
]);

const faqSchema = createFaqSchema([
  {
    question: "Are these developer tools truly secure for proprietary enterprise source code?",
    answer: "Yes, 100% secure. ToolsWizard operates on a strict zero-trust client architecture. All code formatting, minification, obfuscation, SQL parsing, and JSON validation run entirely inside your browser's local V8 JavaScript engine and volatile memory heap. No source code, database dumps, or API tokens are ever transmitted across external networks or stored on remote cloud servers. You can inspect the browser Network tab or use all tools completely offline in Airplane Mode."
  },
  {
    question: "What is the fundamental algorithmic difference between code minification and code obfuscation?",
    answer: "Code minification optimizes for execution performance and network transfer size by stripping whitespace, removing comments, shortening identifiers, and eliminating dead code. Minified code remains structurally identical and can be easily reverse-engineered using a code beautifier. Conversely, code obfuscation optimizes for intellectual property defense: it intentionally scrambles control flow into state machines, encrypts strings into hexadecimal lookup tables, and injects decoy logic, making reverse engineering computationally prohibitive."
  },
  {
    question: "How does AST parsing prevent JavaScript minifiers from breaking code logic?",
    answer: "Rather than blindly replacing text with regex, an Abstract Syntax Tree (AST) parser evaluates language grammar to understand the semantic meaning of every token. The compiler builds a complete symbol table that tracks lexical scope boundaries, variable hoisting, closure references, and global variables. When the minifier shortens variable names, it renames symbols only within their safe local scope, preventing accidental collisions with outer variables or window globals."
  },
  {
    question: "What causes catastrophic backtracking in Regular Expressions, and how do I prevent it?",
    answer: "Catastrophic backtracking occurs in Non-Deterministic Finite Automaton (NFA) regex engines when nested, overlapping quantifiers (e.g., (a+)+$) evaluate non-matching strings. The engine attempts every exponential permutation of character groupings, resulting in O(2^N) time complexity that locks up the CPU. You can prevent this by eliminating nested quantifiers, utilizing atomic groupings, anchoring prefixes, or using the ToolsWizard Regex Tester to inspect matching step counts safely."
  },
  {
    question: "Why does my in-browser API Tester encounter Cross-Origin Resource Sharing (CORS) errors?",
    answer: "Because our API Tester runs client-side inside your browser, it is strictly bound by the W3C Same-Origin Policy (SOP). When you dispatch requests to an external API endpoint that lacks the Access-Control-Allow-Origin header (or fails preflight OPTIONS checks), the browser blocks the response to protect user sessions. To test internal APIs, ensure your development backend enables CORS for local origins or utilize a local development reverse proxy."
  },
  {
    question: "How does the JSON to CSV engine handle deeply nested object hierarchies and arrays?",
    answer: "Our JSON to CSV converter executes a recursive depth-first traversal (DFS) that accumulates dot-notation key paths (e.g., user.address.city). Primitive arrays are serialized into delimited string cells (e.g., 'admin; billing'), while arrays of objects can be flattened using numerical index notation (e.g., items.0.sku, items.1.sku) or unrolled across multiple relational rows, ensuring full data fidelity in spreadsheet viewers."
  },
  {
    question: "Can JavaScript obfuscation be reversed by automated code beautifiers?",
    answer: "A code beautifier can reformat whitespace and indentation, but it cannot restore original variable names, decrypt shuffled string tables, or untangle flattened control-flow state machines. Obfuscation fundamentally destroys semantic naming and procedural structure at the AST level, requiring tedious manual reverse-engineering to reconstruct the original architectural intent."
  },
  {
    question: "Why should I use YAML instead of JSON for Kubernetes and DevOps configurations?",
    answer: "YAML is engineered specifically for human maintainability in infrastructure-as-code (IaC). It supports inline comments, clean indentation-based hierarchy without delimiter noise, multi-line string blocks, and anchor/alias references (&anchor and *alias) for reusing boilerplate definitions. JSON remains superior for high-throughput machine-to-machine API transmission, but YAML dominates cloud configurations."
  },
  {
    question: "How does code minification improve Core Web Vitals and Google SEO rankings?",
    answer: "Minification reduces JavaScript and CSS transfer payloads by 50% to 70%. Smaller files download faster across mobile networks, fit cleanly within the initial 14 KB TCP transmission window, and minimize browser main-thread parsing time. This directly improves Largest Contentful Paint (LCP) and reduces Interaction to Next Paint (INP) input latency, boosting Google SEO performance scores."
  },
  {
    question: "Are all ToolsWizard developer tools 100% free with no hidden query quotas or accounts?",
    answer: "Yes. Every single utility across the ToolsWizard Developer Tools Hub is 100% free and open for software engineers, students, and enterprise teams. There are no daily conversion quotas, no premium subscriptions, no account signups, and no telemetry tracking. All AST engines and formatters execute freely within your browser forever."
  }
]);

export default function DeveloperToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-dev-bg">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Developer Tools
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Format, minify, and validate your code. High-performance, zero-trust tools that run entirely in your browser.
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developerTools.map((tool, index) => (
            <div
              key={index}
              className={`group bg-dev-white rounded-2xl p-8 flex flex-col border border-dev-gray hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                tool.status !== "active" ? "opacity-70" : ""
              }`}
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-xl font-bold text-dev-dark group-hover:text-dev-primary transition-colors line-clamp-1">
                      {tool.title}
                    </h3>
                    {tool.status === "coming-soon" && (
                      <span className="bg-dev-gray/10 text-dev-dark text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ml-2 shrink-0">
                        Soon
                      </span>
                    )}
                  </div>
                  <p className="text-dev-dark/70 text-sm leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                </div>
              </div>
              
              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-dev-primary hover:bg-dev-primaryDark text-dev-white text-center py-3 rounded-lg font-bold transition-colors shadow-sm"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-dev-gray/10 text-dev-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
        
        <DeveloperToolsHubSeo />
      </main>

      {/* Breadcrumbs */}
      <footer className="bg-dev-white border-t border-dev-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-dev-gray">
          <Link href="/" className="hover:text-dev-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-dev-dark font-medium">Developer Tools</span>
        </div>
      </footer>
    </div>
  
    </>
  );
}