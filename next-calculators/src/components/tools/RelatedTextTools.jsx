import Link from "next/link";
import { 
  Type, ArrowUpDown, Replace, Eraser, Sparkles, Dices, 
  CaseUpper, Link2, GitCompare, Pilcrow, Hash 
} from "lucide-react";

export const TEXT_TOOLS = [
  {
    title: "Case Converter",
    description: "Easily convert text between uppercase, lowercase, title case, and more.",
    icon: <CaseUpper className="w-5 h-5" />,
    link: "/tools/text-tools/case-converter",
  },
  {
    title: "Remove Duplicate Lines",
    description: "Instantly clean up lists by removing duplicate text and blank lines.",
    icon: <Hash className="w-5 h-5" />,
    link: "/tools/text-tools/remove-duplicates",
  },
  {
    title: "Text Diff Checker",
    description: "Compare two pieces of text to find differences and changes.",
    icon: <GitCompare className="w-5 h-5" />,
    link: "/tools/text-tools/diff-checker",
  },
  {
    title: "Slug Generator",
    description: "Convert strings of text into clean, SEO-friendly URL slugs.",
    icon: <Link2 className="w-5 h-5" />,
    link: "/tools/text-tools/slug-generator",
  },
  {
    title: "Lorem Ipsum Generator",
    description: "Generate placeholder text for your design and layout needs.",
    icon: <Pilcrow className="w-5 h-5" />,
    link: "/tools/text-tools/lorem-ipsum",
  },
  {
    title: "Word, Character & Sentence Counter",
    description: "Calculate the exact number of words, characters, sentences, and paragraphs.",
    icon: <Type className="w-5 h-5" />,
    link: "/tools/text-tools/character-counter",
  },
  {
    title: "Text Sorter",
    description: "Alphabetize or sort lines of text in ascending/descending order.",
    icon: <ArrowUpDown className="w-5 h-5" />,
    link: "/tools/text-tools/text-sorter",
  },
  {
    title: "Find and Replace",
    description: "Quickly find specific text and replace it with something else.",
    icon: <Replace className="w-5 h-5" />,
    link: "/tools/text-tools/find-and-replace",
  },
  {
    title: "Whitespace Remover",
    description: "Clean up extra spaces, tabs, and unnecessary line breaks.",
    icon: <Eraser className="w-5 h-5" />,
    link: "/tools/text-tools/whitespace-remover",
  },
  {
    title: "Text Cleaner",
    description: "Remove emojis, special characters, or HTML tags from text.",
    icon: <Sparkles className="w-5 h-5" />,
    link: "/tools/text-tools/text-cleaner",
  },
  {
    title: "Random Text Generator",
    description: "Generate random strings or words for testing purposes.",
    icon: <Dices className="w-5 h-5" />,
    link: "/tools/text-tools/random-text-generator",
  }
];

export default function RelatedTextTools({ currentPath }) {
  // Filter out the current tool and randomly select a few, or just show all other tools
  const relatedTools = TEXT_TOOLS.filter(tool => tool.link !== currentPath);

  return (
    <div className="mt-16 bg-text-white rounded-3xl shadow-xl border border-text-gray/20 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-text-dark mb-6">Explore Other Text Tools</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedTools.map((tool, index) => (
          <Link 
            key={index} 
            href={tool.link}
            className="group flex flex-col p-4 bg-text-bg/50 rounded-xl border border-text-gray/20 hover:border-text-primary/40 hover:bg-text-primary/5 transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-text-primary/10 text-text-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              <h4 className="font-semibold text-text-dark group-hover:text-text-primary transition-colors">
                {tool.title}
              </h4>
            </div>
            <p className="text-sm text-text-gray pl-11">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
