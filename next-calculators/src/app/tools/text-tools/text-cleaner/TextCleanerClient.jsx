"use client";

import { useState } from "react";
import { Copy, Wand2, ChevronRight, Download } from "lucide-react";
import TextCleanerSeo from "@/components/tools/TextCleanerSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function TextCleanerClient() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  
  const [options, setOptions] = useState({
    removeHtml: true,
    removeUrls: false,
    removeEmails: false,
    removeNumbers: false,
    removePunctuation: false,
    removeSpecialChars: false,
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

    if (options.removeHtml) {
      result = result.replace(/<[^>]*>?/gm, "");
    }

    if (options.removeUrls) {
      // Basic URL regex
      result = result.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g, "");
      // Also catch www. without http
      result = result.replace(/www\.[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g, "");
    }

    if (options.removeEmails) {
      result = result.replace(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi, "");
    }

    if (options.removeNumbers) {
      result = result.replace(/[0-9]/g, "");
    }

    if (options.removePunctuation) {
      // Remove standard punctuation marks
      result = result.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
    }

    if (options.removeSpecialChars) {
      // Keep only letters, numbers, standard punctuation, and whitespace
      // If punctuation is also true, it will be removed by the step above anyway
      result = result.replace(/[^\w\s.,\/#!$%\^&\*;:{}=\-_`~()?"']/g, "");
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
    link.download = "cleaned-data.txt";
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
            <span className="text-text-white font-medium">Text Cleaner</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Wand2 size={40} />
            Text Cleaner
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Sanitize your text by stripping HTML tags, URLs, emails, numbers, and special characters.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
            {/* Input Options Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-xl font-bold text-text-dark border-b border-text-gray/20 pb-2">Cleaning Filters</h2>
              
              <div className="space-y-3 bg-text-bg/50 p-4 rounded-xl border border-text-gray/20">
                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeHtml}
                    onChange={() => handleOptionChange('removeHtml')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove HTML Tags</span>
                    <span className="text-xs text-text-gray">Strips &lt;div&gt;, &lt;p&gt;, &lt;br&gt;, etc.</span>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeUrls}
                    onChange={() => handleOptionChange('removeUrls')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove URLs & Links</span>
                    <span className="text-xs text-text-gray">Deletes http:// and www. web addresses.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeEmails}
                    onChange={() => handleOptionChange('removeEmails')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Email Addresses</span>
                    <span className="text-xs text-text-gray">Deletes email@address.com formats.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeNumbers}
                    onChange={() => handleOptionChange('removeNumbers')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove All Numbers</span>
                    <span className="text-xs text-text-gray">Deletes all digits (0-9).</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removePunctuation}
                    onChange={() => handleOptionChange('removePunctuation')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Punctuation</span>
                    <span className="text-xs text-text-gray">Deletes standard punctuation like periods, commas, etc.</span>
                  </div>
                </label>

                <label className="flex items-start gap-3 cursor-pointer text-text-dark hover:text-text-primary transition-colors">
                  <input
                    type="checkbox"
                    checked={options.removeSpecialChars}
                    onChange={() => handleOptionChange('removeSpecialChars')}
                    className="text-text-primary focus:ring-text-primary w-4 h-4 mt-1 rounded border-text-gray/30"
                  />
                  <div>
                    <span className="text-sm font-bold block">Remove Special Characters</span>
                    <span className="text-xs text-text-gray">Deletes symbols like @, #, $, %, ^, etc.</span>
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
                  placeholder="Paste your dirty data here..."
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
                  placeholder="Sanitized text will appear here..."
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

        <TextCleanerSeo />
        <RelatedTextTools currentPath="/tools/text-tools/text-cleaner" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
