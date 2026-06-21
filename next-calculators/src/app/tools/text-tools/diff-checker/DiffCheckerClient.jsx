"use client";

import { useState } from "react";
import { GitCompare, ChevronRight } from "lucide-react";
import * as diff from "diff";
import DiffCheckerSeo from "@/components/tools/DiffCheckerSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function DiffCheckerClient() {
  const [originalText, setOriginalText] = useState("");
  const [modifiedText, setModifiedText] = useState("");
  const [diffResult, setDiffResult] = useState([]);
  const [diffType, setDiffType] = useState("words"); // 'words', 'lines', 'chars'

  const handleCompare = () => {
    let differences = [];
    if (diffType === "words") {
      differences = diff.diffWords(originalText, modifiedText);
    } else if (diffType === "lines") {
      differences = diff.diffLines(originalText, modifiedText);
    } else {
      differences = diff.diffChars(originalText, modifiedText);
    }
    setDiffResult(differences);
  };

  const handleClear = () => {
    setOriginalText("");
    setModifiedText("");
    setDiffResult([]);
  };

  return (
    <div className="min-h-screen bg-text-bg font-sans text-text-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-text-primary to-text-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-text-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Text Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-text-white font-medium">Text Diff Checker</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <GitCompare size={40} />
            Text Diff Checker
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Compare two pieces of text to find differences and changes instantly. Visual, fast, and entirely private.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Original Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Original Text
              </label>
              <textarea
                value={originalText}
                onChange={(e) => setOriginalText(e.target.value)}
                placeholder="Paste the original text here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
            </div>

            {/* Modified Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Modified Text
              </label>
              <textarea
                value={modifiedText}
                onChange={(e) => setModifiedText(e.target.value)}
                placeholder="Paste the modified text here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
            </div>
          </div>
          
          <div className="mt-8 flex flex-col md:flex-row gap-4 items-center justify-between border-t border-text-gray/20 pt-6">
            <div className="flex gap-4">
              <label className="flex items-center gap-2 text-sm font-semibold text-text-dark cursor-pointer">
                <input
                  type="radio"
                  name="diffType"
                  value="words"
                  checked={diffType === "words"}
                  onChange={() => setDiffType("words")}
                  className="text-text-primary focus:ring-text-primary"
                />
                Words Diff
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-text-dark cursor-pointer">
                <input
                  type="radio"
                  name="diffType"
                  value="lines"
                  checked={diffType === "lines"}
                  onChange={() => setDiffType("lines")}
                  className="text-text-primary focus:ring-text-primary"
                />
                Lines Diff
              </label>
              <label className="flex items-center gap-2 text-sm font-semibold text-text-dark cursor-pointer">
                <input
                  type="radio"
                  name="diffType"
                  value="chars"
                  checked={diffType === "chars"}
                  onChange={() => setDiffType("chars")}
                  className="text-text-primary focus:ring-text-primary"
                />
                Characters Diff
              </label>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={handleClear}
                className="flex-1 md:flex-none px-8 bg-text-bg text-text-dark border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-gray/10 transition-colors"
              >
                Clear
              </button>
              <button
                onClick={handleCompare}
                disabled={!originalText && !modifiedText}
                className="flex-1 md:flex-none px-8 bg-text-secondary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Compare Text
              </button>
            </div>
          </div>
        </div>

        {/* Diff Result Container */}
        {diffResult.length > 0 && (
          <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-text-dark">Comparison Result</h2>
              <div className="flex gap-4 text-sm font-medium">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-red-200 rounded-full inline-block"></span> Removed
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 bg-green-200 rounded-full inline-block"></span> Added
                </span>
              </div>
            </div>
            
            <div className="w-full min-h-[16rem] p-4 border border-text-gray/30 rounded-xl bg-text-bg/30 font-mono text-sm whitespace-pre-wrap break-words overflow-x-auto">
              {diffResult.map((part, index) => {
                const colorClass = part.added
                  ? "bg-green-200 text-green-900"
                  : part.removed
                  ? "bg-red-200 text-red-900 line-through"
                  : "text-text-dark";
                return (
                  <span key={index} className={colorClass}>
                    {part.value}
                  </span>
                );
              })}
            </div>
          </div>
        )}

        <DiffCheckerSeo />
        <RelatedTextTools currentPath="/tools/text-tools/diff-checker" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
