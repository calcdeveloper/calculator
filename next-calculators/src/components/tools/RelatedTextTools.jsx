import React, { useState, useEffect } from 'react';
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

export default function RelatedTextTools(props) {
  const currentPath = props.currentToolPath || props.currentPath || "";
  const [tools, setTools] = useState([]);

  useEffect(() => {
    if (!currentPath) {
      setTools(TEXT_TOOLS);
      return;
    }
    // Filter out the current tool
    const filteredTools = TEXT_TOOLS.filter(tool => tool.link !== currentPath && !tool.link.includes(currentPath));
    setTools(filteredTools);
  }, [currentPath]);

  if (tools.length === 0) return null;

  return (
    <div className="mt-16 bg-white rounded-3xl shadow-xl border border-gray-200 p-6 md:p-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Text Tools</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          
          return (
            <Link
              key={index}
              href={tool.link}
              className="group flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 shadow-sm bg-white border-gray-200 hover:bg-gray-50 hover:border-gray-300 hover:shadow-md"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors bg-gray-50 text-gray-500 group-hover:text-black group-hover:bg-gray-200">
                {React.isValidElement(tool.icon) ? tool.icon : <Icon size={20} />}
              </div>
              <span className="font-bold text-sm line-clamp-1 text-gray-700 group-hover:text-black">
                {tool.title}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}