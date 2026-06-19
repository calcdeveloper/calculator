"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, Link2, ChevronRight, FileText, Code, Trash2 } from "lucide-react";
import URLEncoderSeo from "@/components/tools/URLEncoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function URLEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");
  const [copySuccess, setCopySuccess] = useState(false);

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
    } catch (error) {
      setOutput("Error encoding URL");
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
    } catch (error) {
      setOutput("Error decoding URL");
    }
  };

  const handleConvert = () => {
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const downloadText = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = mode === "encode" ? "encoded-url.txt" : "decoded-url.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
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
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">URL Encoder & Decoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Link2 size={48} />
            URL Encoder / Decoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly encode and decode URLs for safe web transmission. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button
              onClick={() => setMode("encode")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${mode === "encode"
                  ? "bg-enc-primary text-white shadow-md"
                  : "bg-enc-bg text-enc-dark hover:bg-enc-primary/10 hover:text-enc-primary"
                }`}
            >
              URL Encode
            </button>
            <button
              onClick={() => setMode("decode")}
              className={`flex-1 py-3 px-6 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 ${mode === "decode"
                  ? "bg-enc-secondary text-white shadow-md"
                  : "bg-enc-bg text-enc-dark hover:bg-enc-primary/10 hover:text-enc-primary"
                }`}
            >
              URL Decode
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={20} className="text-enc-primary" /> {mode === "encode" ? "Input URL" : "Encoded URL"}
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === "encode" ? "https://example.com/path?query=value" : "https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue"}
                className="w-full h-[300px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> {mode === "encode" ? "Encoded URL" : "Decoded URL"}
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!output}
                    onClick={copyToClipboard}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg"
                    title="Copy to clipboard"
                  >
                    {copySuccess ? <Copy className="text-green-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!output}
                    onClick={downloadText}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg"
                    title="Download as file"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea
                readOnly
                value={output}
                placeholder="Result will appear here..."
                className="w-full h-[300px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm outline-none transition-all resize-none"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleConvert}
              disabled={!input}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark text-white py-3 px-8 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-enc-primary/30"
            >
              <RefreshCw size={20} />
              {mode === "encode" ? "Encode" : "Decode"}
            </button>
            <button
              onClick={swap}
              disabled={!output}
              className="w-full md:w-auto bg-enc-dark hover:bg-black text-white py-3 px-8 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg"
            >
              <RefreshCw size={20} className="rotate-90" />
              Swap
            </button>
          </div>
        </div>
        <URLEncoderSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
