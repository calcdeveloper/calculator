"use client";

import { useState } from "react";
import { Copy, Download, Rows3, ChevronRight } from "lucide-react";
import RemoveDuplicatesSeo from "@/components/tools/RemoveDuplicatesSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function RemoveDuplicatesClient() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");
  const [originalLineCount, setOriginalLineCount] = useState(0);
  const [newLineCount, setNewLineCount] = useState(0);

  const removeDuplicates = () => {
    if (!text) return;
    
    const lines = text.split('\n');
    setOriginalLineCount(lines.length);
    
    // Using Set to remove duplicates
    const uniqueLines = [...new Set(lines)];
    
    setNewLineCount(uniqueLines.length);
    setConvertedText(uniqueLines.join('\n'));
  };

  const removeEmptyLinesAndDuplicates = () => {
    if (!text) return;
    
    const lines = text.split('\n');
    setOriginalLineCount(lines.length);
    
    // Remove empty lines and then duplicates
    const nonEmptyLines = lines.filter(line => line.trim() !== '');
    const uniqueLines = [...new Set(nonEmptyLines)];
    
    setNewLineCount(uniqueLines.length);
    setConvertedText(uniqueLines.join('\n'));
  };

  const copyToClipboard = async () => {
    if (!convertedText) return;
    await navigator.clipboard.writeText(convertedText);
  };

  const downloadText = () => {
    if (!convertedText) return;
    const blob = new Blob([convertedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "unique-lines.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            <span className="text-text-white font-medium">Remove Duplicate Lines</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Rows3 size={40} />
            Remove Duplicate Lines
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly clean your lists by removing repeating lines. Fast, secure, and runs entirely in your browser.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Original Text (Paste your list here)
              </label>
              <textarea
                value={text}
                onChange={(e) => {
                  setText(e.target.value);
                  if (!e.target.value) {
                    setConvertedText("");
                    setOriginalLineCount(0);
                    setNewLineCount(0);
                  }
                }}
                placeholder="Enter your text with duplicate lines here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setText("");
                    setConvertedText("");
                    setOriginalLineCount(0);
                    setNewLineCount(0);
                  }}
                  className="flex-1 bg-text-bg text-text-dark border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-gray/10 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    setText(convertedText);
                    setConvertedText("");
                    setOriginalLineCount(newLineCount);
                    setNewLineCount(0);
                  }}
                  disabled={!convertedText}
                  className="flex-1 bg-text-secondary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Move to Input
                </button>
              </div>
            </div>

            {/* Converted Text */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-text-dark">
                  Unique Lines Output
                </label>
                {originalLineCount > 0 && (
                  <span className="text-xs font-medium bg-text-primary/10 text-text-primary px-2 py-1 rounded-full">
                    Removed: {originalLineCount - newLineCount} duplicate(s)
                  </span>
                )}
              </div>
              <textarea
                value={convertedText}
                readOnly
                placeholder="Unique lines will appear here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl bg-text-bg/50 resize-none outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!convertedText}
                  className="flex-1 bg-text-primary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primaryDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  Copy
                </button>
                <button
                  onClick={downloadText}
                  disabled={!convertedText}
                  className="flex-1 bg-text-dark text-text-white py-3 rounded-xl font-semibold hover:bg-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-text-dark mb-4">Processing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <button
              onClick={removeDuplicates}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left flex flex-col"
            >
              <span className="text-lg">Remove Duplicates Only</span>
              <span className="text-sm font-normal opacity-80 mt-1">Keeps empty lines if they are unique.</span>
            </button>
            <button
              onClick={removeEmptyLinesAndDuplicates}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-left flex flex-col"
            >
              <span className="text-lg">Remove Duplicates & Empty Lines</span>
              <span className="text-sm font-normal opacity-80 mt-1">Strips out all blank lines before deduplicating.</span>
            </button>
          </div>
        </div>

        <RemoveDuplicatesSeo />
        <RelatedTextTools currentPath="/tools/text-tools/remove-duplicates" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
