"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, FileCode, ChevronRight, FileText, Code, Trash2 } from "lucide-react";
import HTMLEncoderSeo from "@/components/tools/HTMLEncoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function HTMLEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const encodeHTML = (str) => {
    return str.replace(/[\u00A0-\u9999<>\&]/g, function(i) {
      return '&#'+i.charCodeAt(0)+';';
    });
  };

  const handleEncode = () => {
    if (!input.trim()) return;
    try {
      const div = document.createElement('div');
      div.innerText = input;
      let encoded = div.innerHTML;
      // also encode quotes
      encoded = encoded.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
      setOutput(encoded);
    } catch (error) {
      setOutput("Error encoding HTML.");
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
    link.download = "encoded-html.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
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
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">HTML Encoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <FileCode size={48} />
            HTML Encoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly and safely encode raw text and code into HTML entities to prevent XSS and ensure proper display.
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
                  <FileText size={20} className="text-enc-primary" /> Raw Text / Code Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type or paste raw HTML code here (e.g., <script>alert('test');</script>)..."
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> HTML Entities Output
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
                placeholder="Safely encoded HTML entities will appear here..."
                className="w-full h-[400px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm outline-none transition-all resize-none"
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
              Encode to HTML Entities
            </button>
          </div>
        </div>
        <HTMLEncoderSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
