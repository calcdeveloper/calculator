"use client";
import React, { useState, useEffect } from 'react';
import { Sparkles, Copy, RefreshCw, FileText, ChevronRight, Check } from 'lucide-react';
import LoremIpsumGeneratorSeo from '@/components/tools/LoremIpsumGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

// A robust dictionary of classical Latin words used in Lorem Ipsum
const LOREM_WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", 
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", 
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud", 
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo", 
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate", "velit", 
  "esse", "cillum", "eu", "fugiat", "nulla", "pariatur", "excepteur", "sint", 
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia", 
  "deserunt", "mollit", "anim", "id", "est", "laborum", "curabitur", "pretium",
  "tincidunt", "praesent", "elementum", "facilisis", "leo", "vel", "fringilla",
  "mauris", "aenean", "imperdiet", "etiam", "porttitor", "macenas", "nibh",
  "malesuada", "fames", "ac", "turpis", "egestas", "suspendisse", "potenti"
];

export default function LoremIpsumGeneratorClient() {
  const [output, setOutput] = useState('');
  const [count, setCount] = useState(3);
  const [type, setType] = useState('paragraphs'); // 'paragraphs', 'sentences', 'words'
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [copied, setCopied] = useState(false);

  const generateWords = (num) => {
    const words = [];
    for (let i = 0; i < num; i++) {
      words.push(LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)]);
    }
    return words;
  };

  const generateSentence = () => {
    // A sentence usually has between 5 and 15 words
    const length = Math.floor(Math.random() * 11) + 5;
    const words = generateWords(length);
    words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
    return words.join(' ') + '.';
  };

  const generateParagraph = (isFirst) => {
    // A paragraph usually has between 4 and 8 sentences
    const length = Math.floor(Math.random() * 5) + 4;
    const sentences = [];
    
    for (let i = 0; i < length; i++) {
      if (isFirst && i === 0 && startWithLorem) {
        // Force the first sentence to be the classic string if requested
        sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
      } else {
        sentences.push(generateSentence());
      }
    }
    return sentences.join(' ');
  };

  const generateLorem = () => {
    let result = '';
    
    if (type === 'words') {
      const words = generateWords(count);
      if (startWithLorem && count >= 5) {
        words.splice(0, 5, "Lorem", "ipsum", "dolor", "sit", "amet");
      }
      result = words.join(' ');
    } 
    else if (type === 'sentences') {
      const sentences = [];
      for (let i = 0; i < count; i++) {
        if (i === 0 && startWithLorem) {
          sentences.push("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        } else {
          sentences.push(generateSentence());
        }
      }
      result = sentences.join(' ');
    } 
    else if (type === 'paragraphs') {
      const paragraphs = [];
      for (let i = 0; i < count; i++) {
        paragraphs.push(generateParagraph(i === 0));
      }
      result = paragraphs.join('\n\n');
    }

    setOutput(result);
  };

  useEffect(() => {
    generateLorem();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, type, startWithLorem]);

  const copyToClipboard = () => {
    if (output) {
      navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Lorem Ipsum Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Sparkles size={40} />
            Lorem Ipsum Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly generate professional placeholder text for mockups, prototypes, and UI designs.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <FileText size={16} />
              Variable Lengths
            </div>
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <RefreshCw size={16} />
              Instant Rendering
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        {/* Interactive Application Block */}
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            {/* Format Selection */}
            <div>
              <label className="block text-sm font-bold text-gen-dark mb-2">Format</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
              >
                <option value="paragraphs">Paragraphs</option>
                <option value="sentences">Sentences</option>
                <option value="words">Words</option>
              </select>
            </div>

            {/* Count Selection */}
            <div>
              <label className="block text-sm font-bold text-gen-dark mb-2">Quantity</label>
              <input
                type="number"
                min="1"
                max="1000"
                value={count}
                onChange={(e) => setCount(Math.max(1, Math.min(1000, Number(e.target.value))))}
                className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center pt-6">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={startWithLorem}
                  onChange={(e) => setStartWithLorem(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-bold text-sm md:text-base leading-tight">
                  Start with "Lorem ipsum dolor sit amet"
                </span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={generateLorem}
              className="flex-1 bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99]"
            >
              <RefreshCw size={20} />
              Regenerate
            </button>
            <button
              onClick={copyToClipboard}
              className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                copied 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gen-dark text-gen-white hover:bg-black'
              }`}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Text Output Area */}
          <div className="relative">
            <textarea
              value={output}
              readOnly
              className="w-full h-80 px-6 py-5 bg-gen-bg/80 border-2 border-gen-gray/20 rounded-2xl focus:border-gen-primary transition-colors resize-y font-sans text-lg text-gen-dark leading-relaxed"
            />
            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-gen-dark/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-bold">
              <FileText size={14} />
              {output.split(/\s+/).filter(w => w.length > 0).length} Words
            </div>
          </div>
          
        </div>

        <LoremIpsumGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
