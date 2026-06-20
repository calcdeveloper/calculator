"use client";
import React, { useState, useEffect } from 'react';
import { Key, Copy, RefreshCw, ChevronRight, Check } from 'lucide-react';
import ApiKeyGeneratorSeo from '@/components/tools/ApiKeyGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function ApiKeyGeneratorClient() {
  const [apiKeys, setApiKeys] = useState([]);
  const [count, setCount] = useState(5);
  const [length, setLength] = useState(32);
  const [prefix, setPrefix] = useState('sk_live_');
  const [format, setFormat] = useState('alphanumeric'); // 'alphanumeric', 'hex', 'base64'
  const [copied, setCopied] = useState(false);

  const generateKeys = () => {
    const keys = [];
    
    for (let i = 0; i < count; i++) {
      let randomPart = '';
      
      // We use Web Crypto API if available, fallback to Math.random
      if (typeof window !== 'undefined' && window.crypto && window.crypto.getRandomValues) {
        const array = new Uint8Array(length);
        window.crypto.getRandomValues(array);
        
        if (format === 'hex') {
          randomPart = Array.from(array).map(b => b.toString(16).padStart(2, '0')).join('').substring(0, length);
        } else if (format === 'base64') {
          // btoa takes a string, but Uint8Array needs to be converted carefully
          const str = String.fromCharCode.apply(null, array);
          randomPart = btoa(str).replace(/[+/=]/g, '').substring(0, length); 
          // Fill if too short due to regex
          while(randomPart.length < length) {
             const extra = new Uint8Array(1);
             window.crypto.getRandomValues(extra);
             randomPart += btoa(String.fromCharCode(extra[0])).replace(/[+/=]/g, '');
          }
          randomPart = randomPart.substring(0, length);
        } else {
          // alphanumeric
          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          randomPart = Array.from(array).map(x => chars[x % chars.length]).join('');
        }
      } else {
        // Fallback
        const chars = format === 'hex' 
          ? '0123456789abcdef' 
          : 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let j = 0; j < length; j++) {
          randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
        }
      }

      keys.push(`${prefix}${randomPart}`);
    }
    
    setApiKeys(keys);
  };

  useEffect(() => {
    generateKeys();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, length, prefix, format]);

  const copyToClipboard = () => {
    if (apiKeys.length > 0) {
      navigator.clipboard.writeText(apiKeys.join('\n'));
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
            <span className="text-gen-white font-medium">API Key Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Key size={40} />
            Secure API Key Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Generate cryptographically secure, high-entropy API keys instantly. Customize prefixes (e.g., sk_live_) and string formats for enterprise architecture.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Prefix Identifier</label>
                <input
                  type="text"
                  value={prefix}
                  onChange={(e) => setPrefix(e.target.value.replace(/[^a-zA-Z0-9_-]/g, ''))}
                  placeholder="e.g., sk_live_"
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-mono font-bold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Random String Length ({length} chars)</label>
                <input
                  type="range"
                  min="16"
                  max="128"
                  step="8"
                  value={length}
                  onChange={(e) => setLength(Number(e.target.value))}
                  className="w-full accent-gen-primary h-2 bg-gen-gray/20 rounded-lg appearance-none cursor-pointer"
                />
              </div>

            </div>

            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="100"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(100, Number(e.target.value))))}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Encoding Format</label>
                <select
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  <option value="alphanumeric">Alphanumeric (A-Z, a-z, 0-9)</option>
                  <option value="hex">Hexadecimal (0-9, a-f)</option>
                  <option value="base64">Base64 (URL Safe)</option>
                </select>
              </div>

            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={generateKeys}
              className="flex-1 bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99]"
            >
              <RefreshCw size={20} />
              Regenerate Keys
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
              <ul className="space-y-3">
                {apiKeys.map((key, idx) => (
                  <li key={idx} className="font-mono text-green-400 text-sm md:text-base break-all selection:bg-gen-primary/30">
                    {key}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <ApiKeyGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
