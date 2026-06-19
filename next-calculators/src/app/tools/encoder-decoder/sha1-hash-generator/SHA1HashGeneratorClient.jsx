"use client";

import { useState } from "react";
import { Copy, FileText, Hash, ChevronRight, Trash2 } from "lucide-react";
import CryptoJS from "crypto-js";
import SHA1HashGeneratorSeo from "@/components/tools/SHA1HashGeneratorSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function SHA1HashGeneratorClient() {
  const [input, setInput] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  // Generate Hash in real-time
  const hash = input ? CryptoJS.SHA1(input).toString() : "";

  const copyToClipboard = async () => {
    if (!hash) return;
    await navigator.clipboard.writeText(hash);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const clearAll = () => {
    setInput('');
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">SHA1 Hash Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Hash size={48} />
            SHA-1 Hash Generator
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly compute the 40-character cryptographic SHA-1 hash footprint of any text. Blazing fast, real-time, and processed entirely within your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={20} className="text-enc-primary" /> Input Text String
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type or paste your text here to instantly generate a SHA-1 hash..."
                className="w-full h-[300px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Hash size={20} className="text-enc-primary" /> Generated SHA-1 Hash
                </label>
                <button 
                  disabled={!hash}
                  onClick={copyToClipboard}
                  className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg flex items-center gap-2 font-semibold"
                  title="Copy to clipboard"
                >
                  {copySuccess ? <><Copy className="text-green-500" size={20} /> Copied!</> : <><Copy size={20} /> Copy</>}
                </button>
              </div>
              <div className="relative">
                <textarea
                  readOnly
                  value={hash}
                  placeholder="40-character hexadecimal SHA-1 hash will appear here instantly..."
                  className="w-full h-[300px] p-8 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-2xl tracking-widest leading-relaxed text-enc-primary font-bold outline-none transition-all resize-none break-all flex items-center justify-center text-center pt-24"
                />
              </div>
            </div>
          </div>
        </div>
        <SHA1HashGeneratorSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
