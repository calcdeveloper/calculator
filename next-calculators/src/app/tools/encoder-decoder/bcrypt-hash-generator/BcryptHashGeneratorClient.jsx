"use client";

import { useState } from "react";
import { Copy, FileText, Lock, ChevronRight, Trash2, RefreshCw } from "lucide-react";
import bcrypt from "bcryptjs";
import BcryptHashGeneratorSeo from "@/components/tools/BcryptHashGeneratorSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function BcryptHashGeneratorClient() {
  const [input, setInput] = useState("");
  const [costFactor, setCostFactor] = useState(10);
  const [hash, setHash] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const generateHash = () => {
    if (!input) return;
    setIsGenerating(true);
    
    // Use setTimeout to allow UI to update before heavy synchronous operation
    // For production, web workers are better for bcrypt, but this works for small tools
    setTimeout(() => {
      try {
        const salt = bcrypt.genSaltSync(Number(costFactor));
        const result = bcrypt.hashSync(input, salt);
        setHash(result);
      } catch (err) {
        setHash("Error generating hash");
      }
      setIsGenerating(false);
    }, 10);
  };

  const copyToClipboard = async () => {
    if (!hash || isGenerating) return;
    await navigator.clipboard.writeText(hash);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const clearAll = () => {
    setInput('');
    setHash('');
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Bcrypt Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Lock size={48} />
            Bcrypt Hash Generator
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate secure, intentionally slow Bcrypt password hashes. Configure salt rounds and process securely entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 font-bold text-enc-dark">
                    <FileText size={20} className="text-enc-primary" /> Plaintext Password
                  </label>
                  <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                    <Trash2 size={16} /> Clear
                  </button>
                </div>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Enter a highly secure password here..."
                  className="w-full p-4 bg-enc-bg/50 border border-enc-gray rounded-xl font-mono text-lg focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  Cost Factor (Salt Rounds)
                </label>
                <div className="flex items-center gap-4">
                  <input
                    type="range"
                    min="4"
                    max="14"
                    value={costFactor}
                    onChange={(e) => setCostFactor(e.target.value)}
                    className="w-full h-2 bg-enc-gray rounded-lg appearance-none cursor-pointer accent-enc-primary"
                  />
                  <span className="font-mono bg-enc-bg px-3 py-1 rounded-md border border-enc-gray font-bold text-enc-primary">
                    {costFactor}
                  </span>
                </div>
                <p className="text-sm text-enc-gray mt-2">
                  Higher cost = exponentially slower to hash (more secure against brute-force). Standard is 10 or 12.
                </p>
              </div>

              <button
                onClick={generateHash}
                disabled={!input || isGenerating}
                className="w-full bg-enc-primary hover:bg-enc-primaryDark text-white py-4 px-8 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-enc-primary/30"
              >
                <RefreshCw size={20} className={isGenerating ? "animate-spin" : ""} />
                {isGenerating ? "Computing Hash..." : "Generate Bcrypt Hash"}
              </button>
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Lock size={20} className="text-enc-primary" /> Generated Bcrypt Hash
                </label>
                <button 
                  disabled={!hash || isGenerating}
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
                  placeholder="60-character securely salted Bcrypt hash will appear here..."
                  className="w-full h-[320px] p-6 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-xl tracking-wider leading-relaxed text-enc-primary font-bold outline-none transition-all resize-none break-all flex items-center justify-center pt-24"
                />
              </div>
            </div>
          </div>
        </div>
        <BcryptHashGeneratorSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
