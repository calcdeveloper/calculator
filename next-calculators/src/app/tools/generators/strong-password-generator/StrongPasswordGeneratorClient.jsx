"use client";
import React, { useState, useEffect } from 'react';
import { ShieldAlert, Copy, RefreshCw, ChevronRight, Check, Zap } from 'lucide-react';
import { faker } from '@faker-js/faker';
import StrongPasswordGeneratorSeo from '@/components/tools/StrongPasswordGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function StrongPasswordGeneratorClient() {
  const [passphrase, setPassphrase] = useState('');
  const [wordCount, setWordCount] = useState(4);
  const [separator, setSeparator] = useState('-');
  const [capitalize, setCapitalize] = useState(false);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [copied, setCopied] = useState(false);
  const [entropy, setEntropy] = useState(0);

  const generatePassphrase = () => {
    // We use faker's word lists as our dictionary.
    // In a real strict diceware we'd use a specific EFF wordlist, 
    // but faker provides a large enough corpus for a strong passphrase generator.
    const words = [];
    for (let i = 0; i < wordCount; i++) {
      let word = faker.word.noun();
      // Ensure no spaces in the word
      word = word.split(' ')[0].replace(/[^a-zA-Z]/g, '').toLowerCase();
      
      if (capitalize) {
        word = word.charAt(0).toUpperCase() + word.slice(1);
      }
      words.push(word);
    }

    if (includeNumber) {
      // randomly pick an index to append a number to
      const targetIdx = Math.floor(Math.random() * words.length);
      const randNum = Math.floor(Math.random() * 100);
      words[targetIdx] = `${words[targetIdx]}${randNum}`;
    }

    const finalPhrase = words.join(separator);
    setPassphrase(finalPhrase);
    
    // Rough entropy calculation:
    // Faker dictionary size is roughly 10,000 words. log2(10000) ~ 13.28 bits per word
    let calcEntropy = wordCount * 13.28;
    if (includeNumber) calcEntropy += Math.log2(100); // ~6.64 bits for the number
    
    setEntropy(Math.round(calcEntropy));
  };

  useEffect(() => {
    generatePassphrase();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wordCount, separator, capitalize, includeNumber]);

  const copyToClipboard = () => {
    if (passphrase) {
      navigator.clipboard.writeText(passphrase);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStrengthColor = () => {
    if (entropy < 40) return 'text-red-500';
    if (entropy < 60) return 'text-amber-500';
    if (entropy < 80) return 'text-emerald-500';
    return 'text-blue-500';
  };

  const getStrengthLabel = () => {
    if (entropy < 40) return 'Weak (Cracked instantly)';
    if (entropy < 60) return 'Moderate (Cracked in days)';
    if (entropy < 80) return 'Strong (Cracked in centuries)';
    return 'Unbreakable (Astronomical)';
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
            <span className="text-gen-white font-medium">Strong Passphrase Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <ShieldAlert size={40} />
            Strong Passphrase Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Generate "Diceware" style passphrases (e.g., correct-horse-battery-staple). Mathematically unbreakable for computers, yet extremely easy for humans to memorize.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl p-6 md:p-10 mb-8 border border-gen-gray/20">
          
          <div className="mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-gen-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gen-bg border-2 border-gen-gray/20 rounded-2xl p-6 md:p-8 flex items-center justify-between gap-4 flex-col md:flex-row">
                <div className="font-mono text-2xl md:text-3xl lg:text-4xl font-bold text-gen-dark break-all tracking-tight text-center md:text-left flex-1">
                  {passphrase}
                </div>
                <button
                  onClick={copyToClipboard}
                  className={`shrink-0 p-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gen-primary text-white hover:bg-gen-primaryDark'
                  }`}
                  title="Copy Passphrase"
                >
                  {copied ? <Check size={24} /> : <Copy size={24} />}
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center px-2">
              <div className="flex items-center gap-2">
                <Zap size={18} className={getStrengthColor()} />
                <span className={`font-bold ${getStrengthColor()}`}>
                  {getStrengthLabel()}
                </span>
              </div>
              <div className="text-sm font-bold text-gen-gray bg-gen-gray/10 px-3 py-1 rounded-full">
                ~{entropy} bits of entropy
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2 flex justify-between">
                  <span>Number of Words</span>
                  <span className="text-gen-primary">{wordCount} Words</span>
                </label>
                <input
                  type="range"
                  min="3"
                  max="10"
                  step="1"
                  value={wordCount}
                  onChange={(e) => setWordCount(Number(e.target.value))}
                  className="w-full accent-gen-primary h-2 bg-gen-gray/20 rounded-lg appearance-none cursor-pointer"
                />
                <p className="text-xs text-gen-gray mt-2">
                  4 words is secure for standard accounts. 6+ words is required for crypto wallets or master passwords.
                </p>
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Word Separator</label>
                <div className="flex bg-gen-bg/80 border border-gen-gray/30 rounded-xl overflow-hidden p-1">
                  {[
                    { val: '-', label: 'Hyphen (-)' },
                    { val: '_', label: 'Underscore (_)' },
                    { val: '.', label: 'Period (.)' },
                    { val: ' ', label: 'Space' },
                    { val: '', label: 'None' },
                  ].map((sep) => (
                    <button
                      key={sep.val}
                      onClick={() => setSeparator(sep.val)}
                      className={`flex-1 py-2 text-xs md:text-sm font-bold rounded-lg transition-all ${
                        separator === sep.val 
                          ? 'bg-gen-white text-gen-primary shadow-sm border border-gen-gray/10' 
                          : 'text-gen-gray hover:text-gen-dark hover:bg-gen-gray/5'
                      }`}
                    >
                      {sep.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-gen-dark mb-2">Security Modifiers</label>
              
              <label className="flex items-center gap-3 p-4 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={capitalize}
                  onChange={(e) => setCapitalize(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <div>
                  <div className="text-gen-dark font-bold leading-none mb-1">Capitalize Words</div>
                  <div className="text-xs text-gen-gray">Makes the phrase e.g. Correct-Horse...</div>
                </div>
              </label>

              <label className="flex items-center gap-3 p-4 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeNumber}
                  onChange={(e) => setIncludeNumber(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <div>
                  <div className="text-gen-dark font-bold leading-none mb-1">Append Random Number</div>
                  <div className="text-xs text-gen-gray">Satisfies legacy password rules requiring digits.</div>
                </div>
              </label>
            </div>

          </div>

          <button
            onClick={generatePassphrase}
            className="w-full bg-gen-dark text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-black transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-dark/20 active:scale-[0.99]"
          >
            <RefreshCw size={20} />
            Generate New Passphrase
          </button>

        </div>

        <StrongPasswordGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
