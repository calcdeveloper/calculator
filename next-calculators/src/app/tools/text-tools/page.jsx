import React from 'react';
import Link from 'next/link';
import { 
  Type, 
  Hash, 
  CaseUpper, 
  Copy, 
  GitCompare, 
  SortAsc, 
  Dices, 
  Undo2, 
  Link2, 
  Eraser, 
  Sparkles, 
  SearchCode, 
  Pilcrow, 
  AlignLeft, 
  FileJson, 
  Scissors, 
  Combine, 
  FileText,
  Replace,
  Rows3,
  ChevronRight
} from 'lucide-react';

export const metadata = {
  title: 'Text Tools - Free Online Text Processing Utilities | ToolsWizard',
  description: 'A comprehensive suite of free text tools including word counters, case converters, text cleaners, and generators. Process your text instantly and securely in your browser.',
  keywords: ['word counter', 'character counter', 'case converter', 'text diff checker', 'remove duplicate lines', 'lorem ipsum generator', 'text tools online'],
};

const textTools = [
  {
    title: "Word, Character & Line Counter",
    description: "Count words, characters, and sentences in your text.",
    icon: <Hash className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/calculator/education/word-counter",
    status: "active"
  },
  {
    title: "Case Converter",
    description: "Convert text to UPPERCASE, lowercase, Title Case, and more.",
    icon: <CaseUpper className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/text-tools/case-converter",
    status: "coming-soon"
  },
  {
    title: "Remove Duplicate Lines",
    description: "Instantly clean your lists by removing repeating lines.",
    icon: <Rows3 className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/text-tools/remove-duplicates",
    status: "coming-soon"
  },
  {
    title: "Text Diff Checker",
    description: "Compare two pieces of text to find differences and changes.",
    icon: <GitCompare className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/text-tools/diff-checker",
    status: "coming-soon"
  },
  {
    title: "Slug Generator",
    description: "Convert any string into an SEO-friendly URL slug.",
    icon: <Link2 className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/text-tools/slug-generator",
    status: "coming-soon"
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your design and layout needs.",
    icon: <Pilcrow className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/text-tools/lorem-ipsum",
    status: "coming-soon"
  },
  {
    title: "Character Counter",
    description: "Calculate the exact number of characters with or without spaces.",
    icon: <Type className="w-6 h-6" />,
    iconBg: "bg-cyan-100 text-cyan-600",
    status: "coming-soon"
  },
  {
    title: "Text Sorter",
    description: "Alphabetize or sort lines of text in ascending/descending order.",
    icon: <SortAsc className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    status: "coming-soon"
  },
  {
    title: "Find and Replace",
    description: "Quickly find specific text and replace it with something else.",
    icon: <Replace className="w-6 h-6" />,
    iconBg: "bg-lime-100 text-lime-600",
    status: "coming-soon"
  },
  {
    title: "Whitespace Remover",
    description: "Clean up extra spaces, tabs, and unnecessary line breaks.",
    icon: <Eraser className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    status: "coming-soon"
  },
  {
    title: "Text Cleaner",
    description: "Remove emojis, special characters, or HTML tags from text.",
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    status: "coming-soon"
  },
  {
    title: "Random Text Generator",
    description: "Generate random strings or words for testing purposes.",
    icon: <Dices className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    status: "coming-soon"
  }
];

export default function TextToolsPage() {
  return (
    <div className="min-h-screen bg-text-bg font-sans text-text-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-text-primary to-text-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-text-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Text Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight">
            Text Tools
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Powerful and easy-to-use text manipulation utilities for all your document needs
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textTools.map((tool, index) => (
            <div 
              key={index} 
              className="bg-text-white rounded-2xl p-8 flex flex-col border border-text-gray hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1">{tool.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              </div>

              {tool.status === "active" ? (
                <Link 
                  href={tool.link}
                  className="mt-auto w-full bg-text-primary hover:bg-text-primaryDark text-text-white text-center py-3 rounded-lg font-bold transition-colors"
                >
                  Use Tool
                </Link>
              ) : (
                <button 
                  disabled
                  className="mt-auto w-full bg-text-gray/20 text-text-gray text-center py-3 rounded-lg font-bold cursor-not-allowed"
                >
                  Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-24 pt-16 border-t border-text-gray">
          <h2 className="text-3xl font-bold text-text-dark mb-6">About Text Tools</h2>
          <div className="space-y-6 text-text-gray leading-relaxed max-w-5xl">
            <p>
              Our comprehensive suite of Text Tools helps you manipulate, optimize, and clean your content with ease. Whether you need to count words for an essay, convert the case of a professional document, or strip away duplicate lines from a developer log, ToolsWizard provides browser-based solutions that are fast and private.
            </p>
            <p>
              Unlike other platforms, we prioritize a "No-Friction" philosophy. All our text utilities run locally in your browser, meaning your sensitive text data is never uploaded to our servers. From simple formatting to complex find-and-replace operations, our tools are designed to save you time and improve your workflow efficiency.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}