"use client";
import React, { useState, useEffect } from 'react';
import { Fingerprint, Copy, RefreshCw, ChevronRight, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import HashGeneratorSeo from '@/components/tools/HashGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function HashGeneratorClient() {
  const [inputText, setInputText] = useState('Hello World');
  const [hashType, setHashType] = useState('SHA256');
  const [outputHash, setOutputHash] = useState('');
  const [copied, setCopied] = useState(false);

  const generateHash = () => {
    let result = '';
    const text = inputText || '';
    
    switch (hashType) {
      case 'MD5':
        result = CryptoJS.MD5(text).toString();
        break;
      case 'SHA1':
        result = CryptoJS.SHA1(text).toString();
        break;
      case 'SHA256':
        result = CryptoJS.SHA256(text).toString();
        break;
      case 'SHA512':
        result = CryptoJS.SHA512(text).toString();
        break;
      case 'SHA3':
        result = CryptoJS.SHA3(text).toString();
        break;
      case 'RIPEMD160':
        result = CryptoJS.RIPEMD160(text).toString();
        break;
      default:
        result = CryptoJS.SHA256(text).toString();
    }
    setOutputHash(result);
  };

  useEffect(() => {
    generateHash();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText, hashType]);

  const copyToClipboard = () => {
    if (outputHash) {
      navigator.clipboard.writeText(outputHash);
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
            <span className="text-gen-white font-medium">Hash Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Fingerprint size={40} />
            Cryptographic Hash Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly compute secure cryptographic hashes (SHA-256, SHA-512, MD5) directly in your browser. 100% client-side zero-trust processing.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 gap-8 mb-8">
            
            <div className="space-y-4">
              <label className="block text-sm font-bold text-gen-dark mb-2">Input Text</label>
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter text to hash..."
                className="w-full h-32 px-4 py-3 border border-gen-gray/30 rounded-xl focus:border-gen-primary outline-none bg-gen-bg/50 font-mono text-base resize-y"
              />
            </div>

            <div className="space-y-4">
              <label className="block text-sm font-bold text-gen-dark mb-2">Algorithm Selection</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['SHA256', 'SHA512', 'SHA3', 'MD5', 'SHA1', 'RIPEMD160'].map((algo) => (
                  <button
                    key={algo}
                    onClick={() => setHashType(algo)}
                    className={`py-3 px-4 font-bold rounded-xl transition-all shadow-sm ${
                      hashType === algo 
                        ? 'bg-gen-primary text-gen-white ring-2 ring-gen-primary ring-offset-2' 
                        : 'bg-gen-bg/80 text-gen-dark hover:bg-gen-primary/10 border border-gen-gray/20'
                    }`}
                  >
                    {algo}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-gen-gray/20">
              <div className="flex justify-between items-center">
                <label className="block text-sm font-bold text-gen-dark">Output Hash ({hashType})</label>
                <span className="text-xs font-bold bg-gen-primary/10 text-gen-primary px-2 py-1 rounded-md">
                  {outputHash.length * 4} Bits
                </span>
              </div>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-gen-primary to-blue-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-[#1e1e1e] border border-gen-gray/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="font-mono text-sm md:text-base text-green-400 break-all w-full text-center md:text-left leading-relaxed">
                    {outputHash || '...'}
                  </div>
                  <button
                    onClick={copyToClipboard}
                    className={`shrink-0 p-4 rounded-xl font-bold transition-all shadow-lg flex items-center gap-2 ${
                      copied 
                        ? 'bg-emerald-500 text-white' 
                        : 'bg-gen-dark text-white hover:bg-black'
                    }`}
                    title="Copy Hash"
                  >
                    {copied ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>
              </div>
            </div>

          </div>

        </div>

        <HashGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
