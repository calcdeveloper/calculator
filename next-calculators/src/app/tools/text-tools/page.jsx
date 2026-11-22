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
import { createPageMetadata, createSoftwareAppSchema, createBreadcrumbSchema, createFaqSchema } from '@/utils/seo';
import TextToolsMainSeo from '@/components/tools/TextToolsMainSeo';

export const dynamic = "force-static";

export const metadata = createPageMetadata({
  title: 'Text Tools - Free Online Text Formatter, Cleaner & Diff',
  description:
    'Free online text tools to clean, format, count words, sort, diff, and convert text cases. 100% private, client-side processing with zero server uploads.',
  path: '/tools/text-tools',
  keywords: ['text tools', 'word counter', 'character counter', 'case converter', 'text diff checker', 'remove duplicate lines', 'lorem ipsum generator', 'slug generator', 'text cleaner', 'whitespace remover', 'text sorter'],
});

const textTools = [
  {
    title: "Case Converter",
    description: "Convert text to UPPERCASE, lowercase, Title Case, and more.",
    icon: <CaseUpper className="w-6 h-6" />,
    iconBg: "bg-purple-100 text-purple-600",
    link: "/tools/text-tools/case-converter",  // Added leading /
    status: "active"
  },
  // Remove the leading /
  {
    title: "Remove Duplicate Lines",
    description: "Instantly clean your lists by removing repeating lines.",
    icon: <Rows3 className="w-6 h-6" />,
    iconBg: "bg-emerald-100 text-emerald-600",
    link: "/tools/text-tools/remove-duplicates",  // Fixed
    status: "active"
  },
  {
    title: "Text Diff Checker",
    description: "Compare two pieces of text to find differences and changes.",
    icon: <GitCompare className="w-6 h-6" />,
    iconBg: "bg-orange-100 text-orange-600",
    link: "/tools/text-tools/diff-checker",  // Fixed
    status: "active"
  },
  {
    title: "Slug Generator",
    description: "Convert any string into an SEO-friendly URL slug.",
    icon: <Link2 className="w-6 h-6" />,
    iconBg: "bg-indigo-100 text-indigo-600",
    link: "/tools/text-tools/slug-generator",  // Fixed
    status: "active"
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your design and layout needs.",
    icon: <Pilcrow className="w-6 h-6" />,
    iconBg: "bg-rose-100 text-rose-600",
    link: "/tools/text-tools/lorem-ipsum",  // Fixed
    status: "active"
  },
  {
    title: "Word, Character & Sentence Counter",
    description: "Calculate the exact number of words, characters, sentences, and paragraphs.",
    icon: <Type className="w-6 h-6" />,
    iconBg: "bg-blue-100 text-blue-600",
    link: "/tools/text-tools/character-counter",
    status: "active"
  },
  {
    title: "Text Sorter",
    description: "Alphabetize or sort lines of text in ascending/descending order.",
    icon: <SortAsc className="w-6 h-6" />,
    iconBg: "bg-amber-100 text-amber-600",
    link: "/tools/text-tools/text-sorter",
    status: "active"
  },
  {
    title: "Find and Replace",
    description: "Quickly find specific text and replace it with something else.",
    icon: <Replace className="w-6 h-6" />,
    iconBg: "bg-lime-100 text-lime-600",
    link: "/tools/text-tools/find-and-replace",
    status: "active"
  },
  {
    title: "Whitespace Remover",
    description: "Clean up extra spaces, tabs, and unnecessary line breaks.",
    icon: <Eraser className="w-6 h-6" />,
    iconBg: "bg-slate-100 text-slate-600",
    link: "/tools/text-tools/whitespace-remover",
    status: "active"
  },
  {
    title: "Text Cleaner",
    description: "Remove emojis, special characters, or HTML tags from text.",
    icon: <Sparkles className="w-6 h-6" />,
    iconBg: "bg-pink-100 text-pink-600",
    link: "/tools/text-tools/text-cleaner",
    status: "active"
  },
  {
    title: "Random Text Generator",
    description: "Generate random strings or words for testing purposes.",
    icon: <Dices className="w-6 h-6" />,
    iconBg: "bg-violet-100 text-violet-600",
    link: "/tools/text-tools/random-text-generator",
    status: "active"
  }
];


const softwareSchema = createSoftwareAppSchema({
  name: 'Text Tools',
  description: 'A comprehensive suite of free text tools including word counters, case converters, text cleaners, and generators. Process your text instantly and securely in your browser.',
  path: '/tools/text-tools',
  category: 'SoftwareApplication'
});

const breadcrumbSchema = createBreadcrumbSchema([
  { name: 'Home', path: '/' },
  { name: 'Tools', path: '/tools' },
  { name: 'Text Tools', path: '/tools/text-tools' }
]);

const faqSchema = createFaqSchema([
  {
    question: "Is it safe to paste confidential business documents and source code into ToolsWizard text tools?",
    answer: "Yes, 100% safe. ToolsWizard operates on a pure zero-trust client-side architecture. Every string manipulation, regex replacement, deduplication, and diff calculation executes locally inside your web browser sandbox using JavaScript and Web APIs. Your text is never transmitted over the internet, stored in cloud databases, or logged on remote servers. You can safely disconnect your computer from Wi-Fi and every tool will continue to execute seamlessly."
  },
  {
    question: "Why does JavaScript string.length report incorrect character counts for emojis?",
    answer: "JavaScript represents strings internally using UTF-16 code units (16-bit blocks). Emojis and supplementary characters have code points above U+FFFF and require two 16-bit units (a surrogate pair) to be stored. Standard string.length counts these storage units rather than user-perceived characters, reporting a length of 2 for a single emoji. Complex emojis with skin tones or Zero-Width Joiners (like the family emoji) can report lengths of 7 to 11. Our Character Counter uses Intl.Segmenter to count true human-perceived grapheme clusters."
  },
  {
    question: "How does Eugene Myers' Diff Algorithm find changes between two text files?",
    answer: "Myers' algorithm models text comparison as a graph search across a 2D Edit Grid, where horizontal steps represent deletions, vertical steps represent insertions, and diagonal steps represent matching characters. Because matching characters cost zero edits, Myers traverses diagonals greedily, achieving an optimal time complexity of O(ND), where N is document length and D is the number of differences. This enables near-instantaneous comparison of massive documents."
  },
  {
    question: "What is an SEO URL slug, and why are clean slugs important for rankings?",
    answer: "An SEO URL slug is the human-readable portion of a web address that identifies a specific page (e.g., 'text-processing-guide'). Our Slug Generator converts article titles into clean, lowercase strings, strips dangerous punctuation, and replaces spaces with hyphens. Clean slugs improve Google crawl efficiency, provide positive keyword relevance signals, and boost click-through rates (CTR) on Search Engine Result Pages (SERPs)."
  },
  {
    question: "What is the difference between Natural Sort and Standard Alphabetical Sort?",
    answer: "Standard alphabetical (ASCII) sort compares characters purely by their byte code values, causing 'item10' to sort before 'item2' because '1' comes before '2'. Natural Sort recognizes numerical digit sequences within strings and compares them by numerical magnitude, correctly placing 'item2' before 'item10'. Our Text Sorter defaults to Natural Collation for human-friendly list organization."
  },
  {
    question: "What are Zero-Width Spaces, and why does my text fail database validation?",
    answer: "Zero-Width Spaces (U+200B), Zero-Width Joiners (U+200D), and Byte Order Marks (U+FEFF) are invisible Unicode control characters. When text is copied from formatted PDFs or rich text editors, these invisible bytes hitchhike into forms and usernames. They render invisibly on screen but alter character counts and string hashes, causing database unique-constraint and login failures. Our Text Cleaner strips all invisible Unicode artifacts instantly."
  },
  {
    question: "How does Flesch Reading Ease score calculate document readability?",
    answer: "The Flesch Reading Ease formula computes a score from 0 to 100 based on Average Sentence Length (words per sentence) and Average Syllables per Word. Longer sentences with multi-syllabic vocabulary yield lower scores, indicating dense academic or technical text. Scores between 60 and 70 correspond to standard conversational English easily understood by an 8th-grade student."
  },
  {
    question: "Can I deduplicate massive lists of 50,000+ email addresses without crashing my browser?",
    answer: "Yes. Our Duplicate Line Remover utilizes high-performance hash sets with linear O(N) time complexity. Unlike naive quadratic O(N^2) algorithms that freeze the browser, our engine processes 50,000+ lines in under 30 milliseconds in local RAM without consuming excessive memory or locking the user interface."
  },
  {
    question: "What is Catastrophic Backtracking (ReDoS) in Regular Expressions?",
    answer: "Catastrophic Backtracking occurs in non-deterministic finite automata (NFA) regex engines when nested quantifiers (like (a+)+$) evaluate ambiguous non-matching inputs. The engine tests an exponential number of possible branching combinations, consuming 100% CPU and hanging the application thread. ToolsWizard's Find and Replace incorporates execution guards to prevent browser lockups."
  },
  {
    question: "Are all ToolsWizard text tools free for unlimited commercial and enterprise use?",
    answer: "Yes. Every single utility in the ToolsWizard Text Tools directory is 100% free forever for software engineers, writers, students, and businesses. There are no daily conversion caps, no character paywalls, no mandatory account signups, and no advertising watermarks."
  }
]);

export default function TextToolsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([softwareSchema, breadcrumbSchema, faqSchema]),
        }}
      />
      <div className="min-h-screen bg-text-bg font-sans text-text-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-text-primary to-text-primaryDark pt-16 pb-32 px-4">
        <nav className="flex justify-center space-x-2 text-text-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Text Tools</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight">
            Text Tools
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Powerful and easy-to-use text manipulation utilities for all your document needs
          </p>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {textTools.map((tool, index) => (
            <div
              key={index}
              className="bg-text-white rounded-2xl p-8 flex flex-col border border-text-gray hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:rotate-12 duration-300 [&>svg]:w-5 [&>svg]:h-5 ${tool.iconBg}`}>
                  {tool.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-text-dark mb-1 line-clamp-1">{tool.title}</h3>
                  <p className="text-text-gray text-sm leading-relaxed line-clamp-2">
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

        <TextToolsMainSeo />
      </main>
    </div>
  
    </>
  );
}