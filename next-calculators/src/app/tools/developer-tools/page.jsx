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
  Bug
} from 'lucide-react';
import { createPageMetadata } from '@/utils/seo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Developer Tools - Free Online Code Formatters & Validators',
  description:
    'Format, minify, validate, and beautify HTML, CSS, JavaScript, JSON, SQL, XML, and more with our free online developer tools. Fast, secure, and private.',
  path: '/tools/developer-tools',
  keywords: [
    'html formatter',
    'css formatter',
    'javascript formatter',
    'json formatter',
    'code beautifier',
    'code minifier',
    'regex tester',
    'sql formatter',
    'xml formatter',
    'yaml validator',
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
    status: "coming-soon"
  },
  {
    title: "CSS Formatter",
    description: "Format and beautify CSS code with proper indentation and organization.",
    icon: <Layout className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/css-formatter",
    status: "coming-soon"
  },
  {
    title: "CSS Minifier",
    description: "Minify CSS code to reduce file size and improve performance.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/developer-tools/css-minifier",
    status: "coming-soon"
  },
  {
    title: "JavaScript Formatter",
    description: "Format and beautify JavaScript code with proper indentation and syntax.",
    icon: <FileCode className="w-6 h-6" />,
    iconBg: "bg-yellow-100 text-yellow-600",
    link: "/tools/developer-tools/js-formatter",
    status: "coming-soon"
  },
  {
    title: "JavaScript Minifier",
    description: "Minify JavaScript code to reduce file size and improve load times.",
    icon: <Minimize2 className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/developer-tools/js-minifier",
    status: "coming-soon"
  },
  {
    title: "Regex Tester",
    description: "Test and debug regular expressions with real-time matching and highlighting.",
    icon: <Search className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/developer-tools/regex-tester",
    status: "coming-soon"
  },
  {
    title: "SQL Formatter",
    description: "Format and beautify SQL queries with proper indentation and syntax highlighting.",
    icon: <Database className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/developer-tools/sql-formatter",
    status: "coming-soon"
  },
  {
    title: "XML Formatter",
    description: "Format and beautify XML files with proper indentation and structure.",
    icon: <FileJson className="w-6 h-6" />,
    iconBg: "bg-teal-100 text-teal-600",
    link: "/tools/developer-tools/xml-formatter",
    status: "coming-soon"
  },
  {
    title: "YAML Validator",
    description: "Validate and format YAML files with syntax checking and error reporting.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    link: "/tools/developer-tools/yaml-validator",
    status: "coming-soon"
  },
  {
    title: "Code Diff Tool",
    description: "Compare two pieces of code and highlight differences with side-by-side view.",
    icon: <GitCompare className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/developer-tools/code-diff",
    status: "coming-soon"
  },
  {
    title: "Code Beautifier",
    description: "Beautify and format code in multiple languages with consistent styling.",
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/developer-tools/code-beautifier",
    status: "coming-soon"
  },
  {
    title: "JSON Lint Tool",
    description: "Validate JSON files for syntax errors and format them properly.",
    icon: <FileJson className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/developer-tools/json-lint",
    status: "coming-soon"
  },
  {
    title: "JavaScript Obfuscator",
    description: "Obfuscate JavaScript code to protect intellectual property and make it harder to reverse engineer.",
    icon: <Shield className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/developer-tools/js-obfuscator",
    status: "coming-soon"
  },
  {
    title: "CSS Beautifier",
    description: "Beautify and organize CSS code with proper structure and formatting.",
    icon: <Layout className="w-6 h-6" />,
    iconBg: "bg-sky-100 text-sky-600",
    link: "/tools/developer-tools/css-beautifier",
    status: "coming-soon"
  },
  {
    title: "HTML Validator",
    description: "Validate HTML code for syntax errors and compliance with web standards.",
    icon: <CheckCircle2 className="w-6 h-6" />,
    iconBg: "bg-green-100 text-green-600",
    link: "/tools/developer-tools/html-validator",
    status: "coming-soon"
  },
  {
    title: "API Tester",
    description: "Test REST APIs with custom requests, headers, and authentication.",
    icon: <Globe className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/developer-tools/api-tester",
    status: "coming-soon"
  },
  {
    title: "Cron Expression Generator",
    description: "Generate and validate cron expressions for scheduled tasks with visual builder.",
    icon: <Clock className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/developer-tools/cron-generator",
    status: "coming-soon"
  },
  {
    title: "UUID Generator",
    description: "Generate unique UUID v4 identifiers for database records and unique identifiers.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/generators/uuid-generator",
    status: "active"
  },
  {
    title: "Password Generator",
    description: "Generate secure, random passwords with customizable length and character sets.",
    icon: <Key className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/developer-tools/password-generator",
    status: "coming-soon"
  }
];

export default function DeveloperToolsPage() {
  return (
    <div className="min-h-screen bg-dev-bg font-sans text-dev-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Developer Tools
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Format, minify, validate, and beautify code with our secure, browser-side developer utilities
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developerTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-dev-white rounded-2xl p-8 flex flex-col border border-dev-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-dev-dark mb-1">{tool.title}</h3>
                  <p className="text-dev-gray text-sm leading-relaxed">
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
                  className="mt-auto w-full bg-dev-gray/20 text-dev-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* SEO & About Section */}
        <div className="mt-24 pt-16 border-t border-dev-gray">
          <h2 className="text-3xl font-bold text-dev-dark mb-6">About Developer Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-dev-gray leading-relaxed">
            <div>
              <p className="mb-4">
                Our comprehensive suite of developer tools helps you format, minify, validate, and beautify code across multiple programming languages. Whether you need to <strong>format HTML</strong>, <strong>minify CSS</strong>, <strong>validate JSON</strong>, or <strong>test regex patterns</strong>, our tools provide instant results without any installation.
              </p>
              <p>
                All operations happen entirely in your browser, ensuring your code never leaves your device. This makes our tools perfect for processing <strong>proprietary code</strong>, <strong>API keys</strong>, <strong>database credentials</strong>, and other sensitive development data without privacy concerns.
              </p>
            </div>
            <div>
              <p className="mb-4">
                From simple code formatting to complex regex testing, our suite covers all common development needs. Use our <strong>SQL formatter</strong> to clean up database queries, or our <strong>code diff tool</strong> to compare changes between versions.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><Terminal size={16} className="text-dev-primary"/> <strong>Fast:</strong> Instant processing without delay</li>
                <li className="flex items-center gap-2"><Terminal size={16} className="text-dev-primary"/> <strong>Secure:</strong> Browser-side processing only</li>
                <li className="flex items-center gap-2"><Terminal size={16} className="text-dev-primary"/> <strong>Private:</strong> Zero server-side code storage</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Breadcrumb Navigation for SEO */}
      <footer className="bg-dev-white border-t border-dev-gray py-8 px-6">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-sm text-dev-gray">
          <Link href="/" className="hover:text-dev-dark">Home</Link>
          <ChevronRight size={14} />
          <span className="text-dev-dark font-medium">Developer Tools</span>
        </div>
      </footer>
    </div>
  );
}