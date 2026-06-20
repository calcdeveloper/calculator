"use client";
import React, { useState, useEffect } from 'react';
import { Type, Copy, RefreshCw, ChevronRight, Check } from 'lucide-react';
import RandomStringGeneratorSeo from '@/components/tools/RandomStringGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function RandomStringGeneratorClient() {
  const [strings, setStrings] = useState([]);
  const [count, setCount] = useState(10);
  const [length, setLength] = useState(16);
  
  // Character Sets
  const [useUpper, setUseUpper] = useState(true);
  const [useLower, setUseLower] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(false);
  const [customChars, setCustomChars] = useState('');
  
  // Options
  const [excludeSimilar, setExcludeSimilar] = useState(false); // i, l, 1, L, o, 0, O
  const [uniqueOnly, setUniqueOnly] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateStrings = () => {
    let charset = '';
    if (useUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) charset += '0123456789';
    if (useSymbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    if (customChars) charset += customChars;

    if (excludeSimilar) {
      charset = charset.replace(/[ilIL1oO0]/g, '');
    }

    // Fallback if empty
    if (!charset) {
      charset = 'abcdefghijklmnopqrstuvwxyz';
    }

    // Remove duplicates from charset if needed (optimization)
    charset = Array.from(new Set(charset.split(''))).join('');

    const generated = new Set();
    const resultArr = [];
    
    // Safety limit to avoid infinite loops if uniqueOnly is on but permutations are too low
    const maxAttempts = count * 10;
    let attempts = 0;

    while (resultArr.length < count && attempts < maxAttempts) {
      attempts++;
      let str = '';
      
      // Use crypto if available
      if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        const array = new Uint32Array(length);
        window.crypto.getRandomValues(array);
        for (let i = 0; i < length; i++) {
          str += charset[array[i] % charset.length];
        }
      } else {
        for (let i = 0; i < length; i++) {
          str += charset[Math.floor(Math.random() * charset.length)];
        }
      }

      if (uniqueOnly) {
        if (!generated.has(str)) {
          generated.add(str);
          resultArr.push(str);
        }
      } else {
        resultArr.push(str);
      }
    }
    
    setStrings(resultArr);
  };

  useEffect(() => {
    generateStrings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, length, useUpper, useLower, useNumbers, useSymbols, customChars, excludeSimilar, uniqueOnly]);

  const copyToClipboard = () => {
    if (strings.length > 0) {
      navigator.clipboard.writeText(strings.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Random String Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Type size={40} />
            Random String Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly generate massive arrays of complex, highly randomized text strings. Perfect for salt generation, cryptographic nonces, and unique identifiers.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">String Length ({length})</label>
                <input
                  type="range"
                  min="4"
                  max="256"
                  step="1"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-gen-primary h-2 bg-gen-gray/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Quantity to Generate</label>
                <input
                  type="number"
                  min="1"
                  max="2000"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(2000, Number(e.target.value))))}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Custom Characters (Optional)</label>
                <input
                  type="text"
                  value={customChars}
                  onChange={(e) => setCustomChars(e.target.value)}
                  placeholder="e.g., ABCD123_-"
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-mono"
                />
              </div>

            </div>

            <div className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-gen-dark mb-2">Character Inclusion Matrix</label>
              
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                  <input
                    type="checkbox"
                    checked={useUpper}
                    onChange={(e) => setUseUpper(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">A-Z</span>
                </label>
                
                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                  <input
                    type="checkbox"
                    checked={useLower}
                    onChange={(e) => setUseLower(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">a-z</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                  <input
                    type="checkbox"
                    checked={useNumbers}
                    onChange={(e) => setUseNumbers(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">0-9</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                  <input
                    type="checkbox"
                    checked={useSymbols}
                    onChange={(e) => setUseSymbols(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">!@#$%</span>
                </label>
              </div>

              <div className="border-t border-gen-gray/20 pt-4 mt-2">
                <label className="flex items-center gap-3 p-2 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={excludeSimilar}
                    onChange={(e) => setExcludeSimilar(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">Exclude Similar Characters (i, l, 1, L, o, 0, O)</span>
                </label>

                <label className="flex items-center gap-3 p-2 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={uniqueOnly}
                    onChange={(e) => setUniqueOnly(e.target.checked)}
                    className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                  />
                  <span className="text-gen-dark font-medium text-sm">Guarantee Unique Output Strings</span>
                </label>
              </div>

            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={generateStrings}
              className="flex-1 bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99]"
            >
              <RefreshCw size={20} />
              Generate Strings
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
              {copied ? 'Copied!' : 'Copy All'}
            </button>
          </div>

          <div className="bg-[#1e1e1e] border border-gen-gray/30 rounded-2xl overflow-hidden flex flex-col h-[300px]">
            <div className="p-5 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-2">
                {strings.map((str, idx) => (
                  <li key={idx} className="font-mono text-green-400 text-sm md:text-base break-all selection:bg-gen-primary/30 hover:bg-white/5 px-2 py-1 rounded">
                    {str}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <RandomStringGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
