"use client";

import { useState } from "react";
import { Copy, Link2, ChevronRight } from "lucide-react";
import SlugGeneratorSeo from "@/components/tools/SlugGeneratorSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function SlugGeneratorClient() {
  const [text, setText] = useState("");
  const [slug, setSlug] = useState("");
  const [separator, setSeparator] = useState("-");

  const generateSlug = (inputText, currentSeparator) => {
    if (!inputText) {
      setSlug("");
      return;
    }
    
    let processedText = inputText
      .normalize("NFD") // Decompose accents
      .replace(/[\u0300-\u036f]/g, "") // Remove accents
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
      .replace(/[\s-]+/g, currentSeparator); // Replace spaces and consecutive separators

    setSlug(processedText);
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    generateSlug(newText, separator);
  };

  const handleSeparatorChange = (newSeparator) => {
    setSeparator(newSeparator);
    generateSlug(text, newSeparator);
  };

  const copyToClipboard = async () => {
    if (!slug) return;
    await navigator.clipboard.writeText(slug);
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
            <span className="text-text-white font-medium">Slug Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Link2 size={40} />
            Slug Generator
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly convert any text string into a clean, SEO-friendly URL slug.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Input Text
              </label>
              <textarea
                value={text}
                onChange={handleTextChange}
                placeholder="Enter your blog post title, product name, or any text here..."
                className="w-full h-48 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => {
                    setText("");
                    setSlug("");
                  }}
                  className="flex-1 bg-text-bg text-text-dark border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-gray/10 transition-colors"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* Generated Slug */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Generated URL Slug
              </label>
              <textarea
                value={slug}
                readOnly
                placeholder="Your generated slug will appear here..."
                className="w-full h-48 px-4 py-3 border border-text-gray/30 rounded-xl bg-text-bg/50 resize-none outline-none font-mono text-text-primary"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={copyToClipboard}
                  disabled={!slug}
                  className="flex-1 bg-text-primary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primaryDark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  <Copy size={18} />
                  Copy Slug
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-text-dark mb-4">Slug Options</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <span className="font-medium text-text-dark">Separator:</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer bg-text-bg px-4 py-2 rounded-lg border border-text-gray/30 hover:bg-text-gray/5 transition-colors">
                <input
                  type="radio"
                  name="separator"
                  value="-"
                  checked={separator === "-"}
                  onChange={() => handleSeparatorChange("-")}
                  className="text-text-primary focus:ring-text-primary"
                />
                Hyphen (-) <span className="text-xs text-text-gray ml-1">SEO Recommended</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer bg-text-bg px-4 py-2 rounded-lg border border-text-gray/30 hover:bg-text-gray/5 transition-colors">
                <input
                  type="radio"
                  name="separator"
                  value="_"
                  checked={separator === "_"}
                  onChange={() => handleSeparatorChange("_")}
                  className="text-text-primary focus:ring-text-primary"
                />
                Underscore (_)
              </label>
            </div>
          </div>
        </div>

        <SlugGeneratorSeo />
        <RelatedTextTools currentPath="/tools/text-tools/slug-generator" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
