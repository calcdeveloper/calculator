"use client";
import React, { useState, useEffect } from 'react';
import { Hash, Copy, RefreshCw, Shield, ChevronRight } from 'lucide-react';
import UUIDGeneratorSeo from '@/components/tools/UUIDGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState(['']);
  const [count, setCount] = useState(1);
  const [includeHyphens, setIncludeHyphens] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateUUID = () => {
    if (typeof window !== 'undefined' && window.crypto) {
      const randomBytes = new Uint8Array(16);
      window.crypto.getRandomValues(randomBytes);

      randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
      randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;

      let uuid = '';
      for (let i = 0; i < 16; i++) {
        const byte = randomBytes[i].toString(16).padStart(2, '0');
        uuid += byte;
        if (i === 3 || i === 5 || i === 7 || i === 9) {
          if (includeHyphens) uuid += '-';
        }
      }

      return uppercase ? uuid.toUpperCase() : uuid;
    }
    return 'UUID generation not supported in this browser';
  };

  const generateUUIDs = () => {
    const newUuids = [];
    for (let i = 0; i < count; i++) {
      newUuids.push(generateUUID());
    }
    setUuids(newUuids);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAllUUIDs = () => {
    const allUuids = uuids.join('\n');
    copyToClipboard(allUuids);
  };

  useEffect(() => {
    generateUUIDs();
  }, [count, includeHyphens, uppercase]);

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
            <span className="text-gen-white font-medium">UUID Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Hash size={40} />
            Free UUID Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Generate cryptographically secure UUID v4 identifiers instantly. Perfect for developers,
            database keys, and unique ID requirements.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <Shield size={16} />
              Cryptographically Secure
            </div>
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <Hash size={16} />
              UUID v4 Standard
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        {/* Interactive Application Block */}
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">
                  Number of UUIDs
                </label>
                <select
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  {[1, 5, 10, 25, 50, 100].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="hyphens"
                  checked={includeHyphens}
                  onChange={(e) => setIncludeHyphens(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <label htmlFor="hyphens" className="text-base font-bold text-gen-dark cursor-pointer">
                  Include Hyphens
                </label>
              </div>

              <div className="flex items-center gap-3 pt-6">
                <input
                  type="checkbox"
                  id="uppercase"
                  checked={uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <label htmlFor="uppercase" className="text-base font-bold text-gen-dark cursor-pointer">
                  Uppercase
                </label>
              </div>
            </div>

            <button
              onClick={generateUUIDs}
              className="w-full bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99]"
            >
              <RefreshCw size={24} />
              Generate UUID{count > 1 ? 's' : ''}
            </button>

            <div className="pt-4 border-t border-gen-gray/20">
              <div className="flex justify-between items-center mb-4">
                <label className="block text-base font-bold text-gen-dark">
                  Generated UUID{count > 1 ? 's' : ''}
                </label>
                {count > 1 && (
                  <button
                    onClick={copyAllUUIDs}
                    className="text-sm bg-gen-secondary text-gen-white px-4 py-2 rounded-lg font-bold hover:bg-gen-primaryDark transition-colors shadow-md shadow-gen-secondary/30"
                  >
                    Copy All
                  </button>
                )}
              </div>
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {uuids.map((uuid, index) => (
                  <div key={index} className="flex gap-3">
                    <input
                      type="text"
                      value={uuid}
                      readOnly
                      className="flex-1 px-4 py-3 border border-gen-gray/30 rounded-xl bg-gen-bg/50 font-mono text-sm sm:text-base outline-none text-gen-dark"
                    />
                    <button
                      onClick={() => copyToClipboard(uuid)}
                      className="px-5 py-3 bg-gen-dark text-gen-white rounded-xl hover:bg-black transition-colors font-semibold flex items-center justify-center min-w-[120px]"
                    >
                      {copied ? 'Copied!' : <><Copy size={18} className="mr-2" /> Copy</>}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <UUIDGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}