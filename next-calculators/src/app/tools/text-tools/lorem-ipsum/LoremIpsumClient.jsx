"use client";

import { useState, useEffect } from "react";
import { Copy, Pilcrow, ChevronRight } from "lucide-react";
import LoremIpsumSeo from "@/components/tools/LoremIpsumSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", 
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate", "velit", 
  "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", 
  "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia", "deserunt", 
  "mollit", "anim", "id", "est", "laborum"
];

export default function LoremIpsumClient() {
  const [output, setOutput] = useState("");
  const [count, setCount] = useState(3);
  const [type, setType] = useState("paragraphs"); // 'paragraphs', 'sentences', 'words'
  const [startWithLorem, setStartWithLorem] = useState(true);

  const generateRandomWord = () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];

  const generateSentence = () => {
    const wordCount = Math.floor(Math.random() * 8) + 6; // 6 to 13 words
    let sentence = [];
    for (let i = 0; i < wordCount; i++) {
      sentence.push(generateRandomWord());
    }
    const finalSentence = sentence.join(" ");
    return finalSentence.charAt(0).toUpperCase() + finalSentence.slice(1) + ".";
  };

  const generateParagraph = () => {
    const sentenceCount = Math.floor(Math.random() * 4) + 4; // 4 to 7 sentences
    let paragraph = [];
    for (let i = 0; i < sentenceCount; i++) {
      paragraph.push(generateSentence());
    }
    return paragraph.join(" ");
  };

  const generateLoremIpsum = () => {
    let result = [];
    
    if (type === "words") {
      for (let i = 0; i < count; i++) {
        result.push(generateRandomWord());
      }
      let finalStr = result.join(" ");
      if (startWithLorem && count >= 2) {
        const remaining = result.slice(2).join(" ");
        finalStr = "Lorem ipsum " + remaining;
      }
      setOutput(finalStr.charAt(0).toUpperCase() + finalStr.slice(1) + ".");
    } else if (type === "sentences") {
      for (let i = 0; i < count; i++) {
        result.push(generateSentence());
      }
      let finalStr = result.join(" ");
      if (startWithLorem) {
        finalStr = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + result.slice(1).join(" ");
      }
      setOutput(finalStr);
    } else {
      // Paragraphs
      for (let i = 0; i < count; i++) {
        result.push(generateParagraph());
      }
      if (startWithLorem) {
        const firstParagraph = result[0];
        // Replace the first few words to ensure it starts with Lorem ipsum
        const replacedFirstParagraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + firstParagraph;
        result[0] = replacedFirstParagraph;
      }
      setOutput(result.join("\n\n"));
    }
  };

  useEffect(() => {
    generateLoremIpsum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, type, startWithLorem]);

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
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
            <span className="text-text-white font-medium">Lorem Ipsum Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Pilcrow size={40} />
            Lorem Ipsum Generator
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate customized placeholder text for your designs, mockups, and layouts instantly.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            {/* Controls Sidebar */}
            <div className="w-full lg:w-1/3 space-y-6">
              <h2 className="text-xl font-bold text-text-dark border-b border-text-gray/20 pb-2">Settings</h2>
              
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-text-dark">Format</label>
                <div className="flex flex-col gap-2">
                  <label className="flex items-center gap-2 cursor-pointer bg-text-bg px-4 py-3 rounded-xl border border-text-gray/30 hover:bg-text-gray/5 transition-colors">
                    <input
                      type="radio"
                      name="type"
                      value="paragraphs"
                      checked={type === "paragraphs"}
                      onChange={() => setType("paragraphs")}
                      className="text-text-primary focus:ring-text-primary"
                    />
                    Paragraphs
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-text-bg px-4 py-3 rounded-xl border border-text-gray/30 hover:bg-text-gray/5 transition-colors">
                    <input
                      type="radio"
                      name="type"
                      value="sentences"
                      checked={type === "sentences"}
                      onChange={() => setType("sentences")}
                      className="text-text-primary focus:ring-text-primary"
                    />
                    Sentences
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer bg-text-bg px-4 py-3 rounded-xl border border-text-gray/30 hover:bg-text-gray/5 transition-colors">
                    <input
                      type="radio"
                      name="type"
                      value="words"
                      checked={type === "words"}
                      onChange={() => setType("words")}
                      className="text-text-primary focus:ring-text-primary"
                    />
                    Words
                  </label>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-semibold text-text-dark">Amount</label>
                  <span className="font-bold text-text-primary bg-text-primary/10 px-3 py-1 rounded-full text-sm">{count}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max={type === "words" ? "100" : type === "sentences" ? "50" : "20"}
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full accent-text-primary"
                />
              </div>

              <div className="space-y-4">
                <label className="flex items-center gap-3 cursor-pointer p-4 bg-text-bg rounded-xl border border-text-gray/30">
                  <input
                    type="checkbox"
                    checked={startWithLorem}
                    onChange={(e) => setStartWithLorem(e.target.checked)}
                    className="text-text-primary focus:ring-text-primary w-5 h-5 rounded"
                  />
                  <span className="text-sm font-semibold text-text-dark">Start with "Lorem ipsum..."</span>
                </label>
              </div>
              
              <button
                onClick={generateLoremIpsum}
                className="w-full bg-text-secondary text-white py-3 rounded-xl font-bold hover:bg-text-primary transition-colors shadow-lg shadow-text-primary/20"
              >
                Regenerate Text
              </button>
            </div>

            {/* Output Area */}
            <div className="w-full lg:w-2/3 space-y-4 flex flex-col">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-semibold text-text-dark">
                  Generated Output
                </label>
                <button
                  onClick={copyToClipboard}
                  className="bg-text-primary/10 text-text-primary px-4 py-2 rounded-lg font-semibold hover:bg-text-primary/20 transition-colors flex items-center gap-2 text-sm"
                >
                  <Copy size={16} />
                  Copy Text
                </button>
              </div>
              
              <textarea
                value={output}
                readOnly
                className="w-full flex-grow min-h-[400px] px-6 py-4 border border-text-gray/30 rounded-xl bg-text-bg/30 resize-y outline-none leading-relaxed text-text-dark"
              />
            </div>
          </div>
        </div>

        <LoremIpsumSeo />
        <RelatedTextTools currentPath="/tools/text-tools/lorem-ipsum" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
