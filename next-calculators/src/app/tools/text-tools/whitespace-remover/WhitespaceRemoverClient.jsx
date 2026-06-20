"use client";

import { useState } from "react";
import { Copy, Eraser, ChevronRight, Download } from "lucide-react";
import WhitespaceRemoverSeo from "@/components/tools/WhitespaceRemoverSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function WhitespaceRemoverClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  
  const [options, setOptions] = useState({
    removeExtraSpaces: true,
    removeLeadingTrailing: true,
    removeEmptyLines: true,
    convertTabsToSpaces: false,
    removeAllLineBreaks: false,
  });

  const handleOptionChange = (option) => {
    setOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleClean = () => {
    if (!inputText) {
      setOutputText("");
      return;
    }

    let result = inputText;

    if (options.convertTabsToSpaces) {
      result = result.replace(/\t/g, "  "); // Convert tab to 2 spaces (standard)
    }

    if (options.removeExtraSpaces) {
      result = result.replace(/ +/g, " "); // Replace multiple spaces with a single space
    }

    if (options.removeAllLineBreaks) {
      result = result.replace(/\r?\n|\r/g, " "); // Replace all newlines with a space
      if (options.removeExtraSpaces) {
        result = result.replace(/ +/g, " "); // Clean up resulting double spaces
      }
    } else {
      let lines = result.split(/\r?\n/);
      
      if (options.removeLeadingTrailing) {
        lines = lines.map(line => line.trim());
      }
      
      if (options.removeEmptyLines) {
        lines = lines.filter(line => line.trim() !== "");
      }
      
      result = lines.join("\n");
    }

    // Final trim if removeLeadingTrailing is true, to clean up very start and very end
    if (options.removeLeadingTrailing) {
      result = result.trim();
    }

    setOutputText(result);
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
    link.download = "cleaned-text.txt";
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
            <span className="text-text-white font-medium">Whitespace Remover</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Eraser size={40} />
            Whitespace Remover
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly clean up extra spaces, tabs, empty lines, and unnecessary line breaks from your text.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Input Options Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-xl font-bold text-text-dark border-b border-text-gray/20 pb-2">Cleaning Options</h2>
              
              <div className="space-y-3 bg-text-bg/50 p-4 rounded-xl border border-text-gray/20">
                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeExtraSpaces}
                    onChange={() => handleOptionChange('removeExtraSpaces')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Extra Spaces</span>
                    <span className="text-xs text-text-gray">Converts multiple consecutive spaces into a single space.</span>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeLeadingTrailing}
                    onChange={() => handleOptionChange('removeLeadingTrailing')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Leading/Trailing Spaces</span>
                    <span className="text-xs text-text-gray">Trims spaces from the start and end of every line.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeEmptyLines}
                    onChange={() => handleOptionChange('removeEmptyLines')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Empty Lines</span>
                    <span className="text-xs text-text-gray">Deletes lines that contain no text.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.convertTabsToSpaces}
                    onChange={() => handleOptionChange('convertTabsToSpaces')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Convert Tabs to Spaces</span>
                    <span className="text-xs text-text-gray">Changes all Tab characters into two spaces.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeAllLineBreaks}
                    onChange={() => handleOptionChange('removeAllLineBreaks')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove All Line Breaks</span>
                    <span className="text-xs text-text-gray">Compresses everything into a single, continuous paragraph.</span>
                  </div>
                </label>
              </div>

              <button
                onClick={handleClean}
                className="w-full bg-text-secondary text-text-white py-3 rounded-xl font-bold hover:bg-text-primary transition-colors shadow-lg shadow-text-primary/20"
              >
                Clean Text
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
                    }}
                    className="text-sm text-text-primary hover:text-text-primaryDark font-medium"
                  >
                    Clear Input
                  </button>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  placeholder="Paste your messy text here..."
                  className="w-full h-48 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Cleaned Output</label>
                </div>
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Cleaned text will appear here..."
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

        <WhitespaceRemoverSeo />
        <RelatedTextTools currentPath="/tools/text-tools/whitespace-remover" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
