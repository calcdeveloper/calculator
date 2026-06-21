"use client";

import { useState } from "react";
import { Copy, RefreshCw, FileText, ChevronRight, Hash, Trash2, Code } from "lucide-react";
import HexEncoderSeo from "@/components/tools/HexEncoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function HexEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const [addSpaces, setAddSpaces] = useState(true);

  const handleEncode = () => {
    if (!input) return;
    try {
      // Use TextEncoder to correctly handle UTF-8 / Emojis
      const encoder = new TextEncoder();
      const view = encoder.encode(input);
      let hex = Array.from(view)
        .map((b) => b.toString(16).padStart(2, "0"))
        .join(addSpaces ? " " : "");
      setOutput(hex);
    } catch (error) {
      setOutput("Error encoding to hexadecimal.");
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const clearAll = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Hex Encoder</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Hash size={48} />
            Hexadecimal Encoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly safely convert standard text, code, and emojis into compact Base16 hexadecimal machine strings entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">

          <div className="flex items-center gap-3 mb-6">
            <input 
              type="checkbox" 
              id="addSpaces" 
              checked={addSpaces}
              onChange={(e) => setAddSpaces(e.target.checked)}
              className="w-5 h-5 accent-enc-primary cursor-pointer"
            />
            <label htmlFor="addSpaces" className="font-bold text-enc-dark cursor-pointer select-none">
              Format with spaces (e.g., 48 65 6c)
            </label>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={20} className="text-enc-primary" /> Raw Text Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type raw text, code, or emojis here to convert to hexadecimal..."
                className="w-full h-[350px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> Hexadecimal Output
                </label>
                <button 
                  disabled={!output}
                  onClick={copyToClipboard}
                  className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg flex items-center gap-2 font-semibold"
                  title="Copy to clipboard"
                >
                  {copySuccess ? <><Copy className="text-green-500" size={20} /> Copied!</> : <><Copy size={20} /> Copy</>}
                </button>
              </div>
              <textarea
                readOnly
                value={output}
                placeholder="Hexadecimal string will instantly appear here..."
                className="w-full h-[350px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm outline-none transition-all resize-none uppercase"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleEncode}
              disabled={!input}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark text-white py-3 px-12 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-enc-primary/30"
            >
              <RefreshCw size={20} />
              Encode to Hex
            </button>
          </div>
        </div>
        <HexEncoderSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
