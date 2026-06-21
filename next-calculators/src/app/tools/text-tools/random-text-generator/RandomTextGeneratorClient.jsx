"use client";

import { useState, useEffect } from "react";
import { Copy, Dices, ChevronRight, Download } from "lucide-react";
import RandomTextGeneratorSeo from "@/components/tools/RandomTextGeneratorSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function RandomTextGeneratorClient() {
  const [outputText, setOutputText] = useState("");
  
  const [length, setLength] = useState(16);
  const [count, setCount] = useState(10);
  
  const [options, setOptions] = useState({
    uppercase: true,
    lowercase: true,
    numbers: true,
    special: false,
  });

  const handleOptionChange = (option) => {
    setOptions(prev => {
      const next = { ...prev, [option]: !prev[option] };
      // Ensure at least one option is selected
      if (!next.uppercase && !next.lowercase && !next.numbers && !next.special) {
        return prev;
      }
      return next;
    });
  };

  const handleGenerate = () => {
    const charset = {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      special: "!@#$%^&*()_+~`|}{[]:;?><,./-="
    };

    let allowedChars = "";
    if (options.uppercase) allowedChars += charset.uppercase;
    if (options.lowercase) allowedChars += charset.lowercase;
    if (options.numbers) allowedChars += charset.numbers;
    if (options.special) allowedChars += charset.special;

    if (!allowedChars) return;

    let result = [];
    for (let i = 0; i < count; i++) {
      let str = "";
      for (let j = 0; j < length; j++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        str += allowedChars[randomIndex];
      }
      result.push(str);
    }

    setOutputText(result.join("\n"));
  };

  // Generate on mount
  useEffect(() => {
    handleGenerate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    link.download = "random-strings.txt";
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
            <span className="text-text-white font-medium">Random Text Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Dices size={40} />
            Random Text Generator
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate random strings of letters, numbers, and symbols for testing or passwords.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Input Options Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-xl font-bold text-text-dark border-b border-text-gray/20 pb-2">Generation Settings</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Length per String</label>
                  <span className="font-bold text-text-primary bg-text-primary/10 px-3 py-1 rounded-full text-sm">{length}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="128"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-text-primary"
                />
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Number of Strings</label>
                  <span className="font-bold text-text-primary bg-text-primary/10 px-3 py-1 rounded-full text-sm">{count}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full accent-text-primary"
                />
              </div>

              <div className="space-y-3 bg-text-bg/50 p-4 rounded-xl border border-text-gray/20">
                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.uppercase}
                    onChange={() => handleOptionChange('uppercase')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Uppercase Letters (A-Z)</span>
                </label>
                
                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.lowercase}
                    onChange={() => handleOptionChange('lowercase')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Lowercase Letters (a-z)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.numbers}
                    onChange={() => handleOptionChange('numbers')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Numbers (0-9)</span>
                </label>

                <label className="flex items-center gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.special}
                    onChange={() => handleOptionChange('special')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 rounded border-text-gray/30"
                  />
                  <span className="text-sm font-medium">Special Characters (!@#...)</span>
                </label>
              </div>

              <button
                onClick={handleGenerate}
                className="w-full bg-text-secondary text-text-white py-3 rounded-xl font-bold hover:bg-text-primary transition-colors shadow-lg shadow-text-primary/20"
              >
                Generate Strings
              </button>
            </div>

            {/* Output Area */}
            <div className="lg:col-span-8 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Generated Output</label>
                </div>
                <textarea
                  value={outputText}
                  readOnly
                  placeholder="Generated strings will appear here..."
                  className="w-full h-80 px-4 py-3 border border-text-gray/30 rounded-xl bg-text-bg/50 resize-none outline-none font-mono text-sm leading-relaxed text-text-dark break-all"
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

        <RandomTextGeneratorSeo />
        <RelatedTextTools currentPath="/tools/text-tools/random-text-generator" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
