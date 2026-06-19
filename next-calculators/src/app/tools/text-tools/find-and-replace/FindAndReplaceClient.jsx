"use client";

import { useState } from "react";
import { Copy, Replace, ChevronRight, Download } from "lucide-react";
import FindAndReplaceSeo from "@/components/tools/FindAndReplaceSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function FindAndReplaceClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [findText, setFindText] = useState("");
  const [replaceText, setReplaceText] = useState("");
  
  const [matchCase, setMatchCase] = useState(false);
  const [wholeWord, setWholeWord] = useState(false);
  const [useRegex, setUseRegex] = useState(false);
  
  const [replaceCount, setReplaceCount] = useState(0);

  const handleReplace = () => {
    if (!inputText || !findText) {
      setOutputText(inputText);
      setReplaceCount(0);
      return;
    }

    let result = inputText;
    let count = 0;

    try {
      if (useRegex) {
        let flags = "g";
        if (!matchCase) flags += "i";
        
        const regex = new RegExp(findText, flags);
        
        // Count matches
        const matches = inputText.match(regex);
        count = matches ? matches.length : 0;
        
        result = inputText.replace(regex, replaceText);
      } else {
        // Build regex for literal string
        // Escape special regex characters in the find string
        const escapeRegExp = (string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        let searchPattern = escapeRegExp(findText);
        
        if (wholeWord) {
          searchPattern = `\\b${searchPattern}\\b`;
        }
        
        let flags = "g";
        if (!matchCase) flags += "i";
        
        const regex = new RegExp(searchPattern, flags);
        
        // Count matches
        const matches = inputText.match(regex);
        count = matches ? matches.length : 0;
        
        result = inputText.replace(regex, replaceText);
      }
      
      setOutputText(result);
      setReplaceCount(count);
    } catch (error) {
      // Handle invalid regex
      setOutputText("Invalid Regular Expression: " + error.message);
      setReplaceCount(0);
    }
  };

  const copyToClipboard = async () => {
    if (!outputText) return;
    await navigator.clipboard.writeText(outputText);
  };

  const downloadFile = () => {
    if (!outputText) return;
    const blob = new Blob([outputText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "replaced-text.txt";
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
            <span className="text-text-white font-medium">Find and Replace</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Replace size={40} />
            Find and Replace
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Quickly find text and replace it. Supports regex, case sensitivity, and whole words.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Input Options Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-text-dark">Find</label>
                <input
                  type="text"
                  value={findText}
                  onChange={(e) => setFindText(e.target.value)}
                  placeholder="Text to find..."
                  className="w-full px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent bg-text-bg/50 outline-none"
                />
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-semibold text-text-dark">Replace With</label>
                <input
                  type="text"
                  value={replaceText}
                  onChange={(e) => setReplaceText(e.target.value)}
                  placeholder="Text to replace with..."
                  className="w-full px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent bg-text-bg/50 outline-none"
                />
              </div>

              <div className="space-y-3 bg-text-bg/50 p-4 rounded-xl border border-text-gray/20">
                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={matchCase}
                    onChange={(e) => setMatchCase(e.target.checked)}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Match Case</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={wholeWord}
                    onChange={(e) => setWholeWord(e.target.checked)}
                    disabled={useRegex}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30 disabled:opacity-50"
                  />
                  <span className="text-sm font-medium">Whole Words Only</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={useRegex}
                    onChange={(e) => {
                      setUseRegex(e.target.checked);
                      if (e.target.checked) setWholeWord(false);
                    }}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Use Regular Expressions (Regex)</span>
                </label>
              </div>

              <button
                onClick={handleReplace}
                className="w-full bg-text-secondary text-text-white py-3 rounded-xl font-bold hover:bg-text-primary transition-colors shadow-lg shadow-text-primary/20"
              >
                Replace All
              </button>
            </div>

            {/* Text Areas */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Original Text</label>
                  <button
                    onClick={() => {
                      setInputText("");
                      setOutputText("");
                      setReplaceCount(0);
                    }}
                    className="text-sm text-text-primary hover:text-text-primaryDark font-medium"
                  >
                    Clear Input
                  </button>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your original text here..."
                  className="w-full h-48 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Modified Output</label>
                  {replaceCount > 0 && (
                    <span className="text-xs font-medium bg-text-primary/10 text-text-primary px-3 py-1 rounded-full">
                      {replaceCount} replacement(s) made
                    </span>
                  )}
                </div>
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Modified text will appear here..."
                  className="w-full h-48 px-4 py-3 border border-text-gray/30 rounded-xl bg-text-bg/50 resize-none outline-none text-text-dark"
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className="flex-1 bg-text-primary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primaryDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  Copy Output
                </button>
                <button
                  onClick={downloadFile}
                  disabled={!outputText}
                  className="flex-1 bg-text-bg text-text-primary border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Download size={18} />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        <FindAndReplaceSeo />
        <RelatedTextTools currentPath="/tools/text-tools/find-and-replace" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
