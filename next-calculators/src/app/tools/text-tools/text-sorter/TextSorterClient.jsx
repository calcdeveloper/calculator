"use client";

import { useState } from "react";
import { Copy, ArrowUpDown, Download, ChevronRight, SortAsc, SortDesc, ArrowDownWideNarrow, ArrowUpNarrowWide, Shuffle } from "lucide-react";
import TextSorterSeo from "@/components/tools/TextSorterSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function TextSorterClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [removeBlanks, setRemoveBlanks] = useState(true);

  const processText = (text) => {
    let lines = text.split("\n");
    if (removeBlanks) {
      lines = lines.filter(line => line.trim() !== "");
    }
    return lines;
  };

  const handleSortAZ = () => {
    if (!inputText) return;
    const lines = processText(inputText);
    lines.sort((a, b) => a.localeCompare(b));
    setOutputText(lines.join("\n"));
  };

  const handleSortZA = () => {
    if (!inputText) return;
    const lines = processText(inputText);
    lines.sort((a, b) => b.localeCompare(a));
    setOutputText(lines.join("\n"));
  };

  const handleSortShortToLong = () => {
    if (!inputText) return;
    const lines = processText(inputText);
    lines.sort((a, b) => a.length - b.length);
    setOutputText(lines.join("\n"));
  };

  const handleSortLongToShort = () => {
    if (!inputText) return;
    const lines = processText(inputText);
    lines.sort((a, b) => b.length - a.length);
    setOutputText(lines.join("\n"));
  };

  const handleRandomize = () => {
    if (!inputText) return;
    const lines = processText(inputText);
    for (let i = lines.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [lines[i], lines[j]] = [lines[j], lines[i]];
    }
    setOutputText(lines.join("\n"));
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
    link.download = "sorted-text.txt";
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
            <span className="text-text-white font-medium">Text Sorter</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <ArrowUpDown size={40} />
            Text Sorter
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Alphabetize, sort by length, or randomize lines of text instantly.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-semibold text-text-dark">
                  Input Text
                </label>
                <div className="flex items-center gap-2 text-sm">
                  <label className="flex items-center gap-2 cursor-pointer text-text-gray hover:text-text-dark">
                    <input
                      type="checkbox"
                      checked={removeBlanks}
                      onChange={(e) => setRemoveBlanks(e.target.checked)}
                      className="text-text-primary focus:ring-text-primary rounded border-text-gray/30"
                    />
                    Remove blank lines
                  </label>
                </div>
              </div>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Paste your unorganized list here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setInputText("");
                    setOutputText("");
                  }}
                  className="flex-1 bg-text-bg text-text-dark border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-gray/10 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Sorted Output
              </label>
              <textarea
                value={outputText}
                readOnly
                placeholder="Sorted text will appear here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl bg-text-bg/50 resize-none outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!outputText}
                  className="flex-1 bg-text-primary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primaryDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  Copy
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

          <div className="mt-8 border-t border-text-gray/20 pt-8">
            <h3 className="text-sm font-semibold text-text-gray uppercase tracking-wider mb-4 text-center">Sorting Options</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <button
                onClick={handleSortAZ}
                disabled={!inputText}
                className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 text-center"
              >
                <SortAsc size={24} />
                <span>A to Z</span>
              </button>
              <button
                onClick={handleSortZA}
                disabled={!inputText}
                className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 text-center"
              >
                <SortDesc size={24} />
                <span>Z to A</span>
              </button>
              <button
                onClick={handleSortShortToLong}
                disabled={!inputText}
                className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 text-center"
              >
                <ArrowUpNarrowWide size={24} />
                <span className="text-sm">Short to Long</span>
              </button>
              <button
                onClick={handleSortLongToShort}
                disabled={!inputText}
                className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 text-center"
              >
                <ArrowDownWideNarrow size={24} />
                <span className="text-sm">Long to Short</span>
              </button>
              <button
                onClick={handleRandomize}
                disabled={!inputText}
                className="col-span-2 md:col-span-1 bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex flex-col items-center gap-2 text-center"
              >
                <Shuffle size={24} />
                <span>Randomize</span>
              </button>
            </div>
          </div>
        </div>

        <TextSorterSeo />
        <RelatedTextTools currentPath="/tools/text-tools/text-sorter" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
