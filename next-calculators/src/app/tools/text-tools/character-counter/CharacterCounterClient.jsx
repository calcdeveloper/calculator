"use client";

import { useState, useEffect } from "react";
import { Type, ChevronRight, Hash, Space, CaseUpper, CaseLower, Hash as NumberIcon, Pilcrow } from "lucide-react";
import CharacterCounterSeo from "@/components/tools/CharacterCounterSeo";
import RelatedTextTools from "@/components/tools/RelatedTextTools";

export default function CharacterCounterClient() {
  const [text, setText] = useState("");
  const [stats, setStats] = useState({
    charsWithSpaces: 0,
    charsWithoutSpaces: 0,
    words: 0,
    sentences: 0,
    paragraphs: 0,
    lines: 0,
    uppercase: 0,
    lowercase: 0,
    numbers: 0,
    punctuation: 0,
    spaces: 0
  });

  useEffect(() => {
    const calculateStats = (input) => {
      if (!input) {
        setStats({
          charsWithSpaces: 0,
          charsWithoutSpaces: 0,
          words: 0,
          sentences: 0,
          paragraphs: 0,
          lines: 0,
          uppercase: 0,
          lowercase: 0,
          numbers: 0,
          punctuation: 0,
          spaces: 0
        });
        return;
      }

      const charsWithSpaces = input.length;
      const charsWithoutSpaces = input.replace(/\s/g, '').length;
      const words = input.trim().split(/\s+/).filter(word => word.length > 0).length;
      const sentences = input.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      const paragraphs = input.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
      const lines = input.split(/\r\n|\r|\n/).length;
      
      const uppercase = (input.match(/[A-Z]/g) || []).length;
      const lowercase = (input.match(/[a-z]/g) || []).length;
      const numbers = (input.match(/[0-9]/g) || []).length;
      const spaces = (input.match(/\s/g) || []).length;
      const punctuation = (input.match(/[.,\/#!$%\^&\*;:{}=\-_`~()?"']/g) || []).length;

      setStats({
        charsWithSpaces,
        charsWithoutSpaces,
        words,
        sentences,
        paragraphs,
        lines,
        uppercase,
        lowercase,
        numbers,
        punctuation,
        spaces
      });
    };

    calculateStats(text);
  }, [text]);

  const handleClear = () => {
    setText("");
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
            <span className="text-text-white font-medium">Word, Character, Sentence & Paragraph Counter</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Type size={40} />
            Word, Character, Sentence & Paragraph Counter
          </h1>
          <p className="text-xl text-text-white/90 max-w-2xl mx-auto leading-relaxed">
            Calculate the exact number of words, characters, sentences, paragraphs, and deep text statistics.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        
        {/* Main Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.charsWithSpaces}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">Characters</span>
          </div>
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.charsWithoutSpaces}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">No Spaces</span>
          </div>
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.words}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">Words</span>
          </div>
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.sentences}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">Sentences</span>
          </div>
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.paragraphs}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">Paragraphs</span>
          </div>
          <div className="bg-text-white rounded-2xl shadow-xl border border-text-primary/20 p-6 flex flex-col items-center justify-center text-center">
            <span className="text-4xl font-extrabold text-text-primary mb-2">{stats.lines}</span>
            <span className="text-sm font-semibold text-text-gray uppercase tracking-wider">Lines</span>
          </div>
        </div>

        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-2">
              <label className="block text-sm font-semibold text-text-dark">
                Input Text
              </label>
              <button
                onClick={handleClear}
                className="text-sm font-semibold text-text-primary hover:text-text-primaryDark transition-colors"
              >
                Clear Text
              </button>
            </div>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type or paste your text here to see real-time statistics..."
              className="w-full h-80 px-4 py-3 border border-text-gray/30 rounded-xl focus:ring-2 focus:ring-text-primary focus:border-transparent resize-y bg-text-bg/50 outline-none leading-relaxed"
            />
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="bg-text-white rounded-3xl shadow-2xl border border-text-gray/30 p-6 md:p-8 mb-8">
          <h2 className="text-xl font-bold text-text-dark mb-6 border-b border-text-gray/20 pb-4">Detailed Breakdown</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-gray mb-1">
                <CaseUpper size={16} />
                <span className="text-sm font-semibold">Uppercase</span>
              </div>
              <span className="text-2xl font-bold text-text-dark">{stats.uppercase}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-gray mb-1">
                <CaseLower size={16} />
                <span className="text-sm font-semibold">Lowercase</span>
              </div>
              <span className="text-2xl font-bold text-text-dark">{stats.lowercase}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-gray mb-1">
                <NumberIcon size={16} />
                <span className="text-sm font-semibold">Numbers</span>
              </div>
              <span className="text-2xl font-bold text-text-dark">{stats.numbers}</span>
            </div>
            
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-gray mb-1">
                <Pilcrow size={16} />
                <span className="text-sm font-semibold">Punctuation</span>
              </div>
              <span className="text-2xl font-bold text-text-dark">{stats.punctuation}</span>
            </div>

            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-text-gray mb-1">
                <Space size={16} />
                <span className="text-sm font-semibold">Space Characters</span>
              </div>
              <span className="text-2xl font-bold text-text-dark">{stats.spaces}</span>
            </div>

          </div>
        </div>

        <CharacterCounterSeo />
        <RelatedTextTools currentPath="/tools/text-tools/character-counter" />
      </main>

      <footer className="bg-text-white border-t border-text-gray/30 py-8 px-6">
        <p className="text-sm text-text-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
