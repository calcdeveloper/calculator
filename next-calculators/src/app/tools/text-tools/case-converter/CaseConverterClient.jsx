"use client";

import { useState } from "react";
import { Copy, Download, Type, ChevronRight } from "lucide-react";
import CaseConverterSeo from "@/components/tools/CaseConverterSeo";

export default function CaseConverterClient() {
  const [text, setText] = useState("");
  const [convertedText, setConvertedText] = useState("");

  const convertToUppercase = () => {
    setConvertedText(text.toUpperCase());
  };

  const convertToLowercase = () => {
    setConvertedText(text.toLowerCase());
  };

  const convertToTitleCase = () => {
    const titleCase = text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    setConvertedText(titleCase);
  };

  const convertToSentenceCase = () => {
    const sentenceCase = text
      .toLowerCase()
      .split(". ")
      .map((sentence) => sentence.charAt(0).toUpperCase() + sentence.slice(1))
      .join(". ");
    setConvertedText(sentenceCase);
  };

  const convertToCamelCase = () => {
    const camelCase = text
      .toLowerCase()
      .split(/[\s_-]+/)
      .map((word, index) => {
        if (index === 0) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join("");
    setConvertedText(camelCase);
  };

  const convertToSnakeCase = () => {
    const snakeCase = text
      .toLowerCase()
      .split(/[\s-]+/)
      .join("_");
    setConvertedText(snakeCase);
  };

  const convertToKebabCase = () => {
    const kebabCase = text
      .toLowerCase()
      .split(/[\s_]+/)
      .join("-");
    setConvertedText(kebabCase);
  };

  const toggleCase = () => {
    const toggled = text
      .split("")
      .map((char) => {
        if (char === char.toUpperCase()) {
          return char.toLowerCase();
        }
        return char.toUpperCase();
      })
      .join("");
    setConvertedText(toggled);
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
    link.download = "converted-text.txt";
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
            <span className="text-text-white font-medium">Case Converter</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Type size={40} />
            Case Converter
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert text to different cases instantly. Easy, fast, and entirely private.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Input Text
              </label>
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Enter your text here..."
                className="w-full h-64 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-none bg-text-bg/50 outline-none"
              />
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setText("")}
                  className="flex-1 bg-text-bg text-text-dark border border-text-gray/30 py-3 rounded-xl font-semibold hover:bg-text-gray/10 transition-colors"
                >
                  Clear
                </button>
                <button
                  onClick={() => {
                    setText(convertedText);
                    setConvertedText("");
                  }}
                  disabled={!convertedText}
                  className="flex-1 bg-text-secondary text-text-white py-3 rounded-xl font-semibold hover:bg-text-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Use Output
                </button>
              </div>
            </div>

            {/* Converted Text */}
            <div className="space-y-4">
              <label className="block text-sm font-semibold text-text-dark mb-2">
                Converted Text
              </label>
              <textarea
                value={convertedText}
                readOnly
                placeholder="Converted text will appear here..."
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
          <h2 className="text-xl font-bold text-text-dark mb-4">Conversion Options</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <button
              onClick={convertToUppercase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase"
            >
              UPPERCASE
            </button>
            <button
              onClick={convertToLowercase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed lowercase"
            >
              lowercase
            </button>
            <button
              onClick={convertToTitleCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed capitalize"
            >
              Title Case
            </button>
            <button
              onClick={convertToSentenceCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sentence case
            </button>
            <button
              onClick={convertToCamelCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              camelCase
            </button>
            <button
              onClick={convertToSnakeCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              snake_case
            </button>
            <button
              onClick={convertToKebabCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              kebab-case
            </button>
            <button
              onClick={toggleCase}
              disabled={!text}
              className="bg-text-bg text-text-primary border border-text-gray/30 py-4 px-4 rounded-xl font-bold hover:bg-text-primary/10 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              tOGGLE cASE
            </button>
          </div>
        </div>

        <CaseConverterSeo />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
