"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';
import Base64EncoderSeo from "@/components/tools/Base64EncoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function Base64EncoderClient() {
  const [textInput, setTextInput] = useState('');
  const [base64Output, setBase64Output] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleEncode = () => {
    if (!textInput.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const encoded = btoa(textInput);
      setBase64Output(encoded);
    } catch (err) {
      setError("Encoding failed. Please check your input text.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(base64Output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([base64Output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'encoded_base64.txt';
    a.click();
  };

  const clearAll = () => {
    setTextInput('');
    setBase64Output('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Base64 Encoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Base64 Encoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert text or binary data to Base64 format instantly. Secure, fast, and processed entirely in your browser.
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
                  <FileText size={20} className="text-enc-primary" /> Text Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder='Enter text to encode to Base64 (e.g., "Hello World")'
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> Base64 Output
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!base64Output}
                    onClick={handleCopy}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!base64Output}
                    onClick={handleDownload}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Download Base64"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={base64Output}
                placeholder="Base64 encoded output will appear here..."
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleEncode}
              disabled={!textInput || isProcessing}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark disabled:bg-enc-gray text-enc-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-enc-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Encoding..." : <><Code size={22} /> Encode to Base64</>}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3 animate-pulse">
              <Info size={20} /> {error}
            </div>
          )}
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-primary/10 text-enc-primary rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Your text is processed locally. We never transmit your data to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-secondary/20 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Encoding</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Our optimized algorithm converts text to Base64 in milliseconds, handling large amounts of data without any delay or lag.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-primary/10 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Developer-Friendly</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Perfect for encoding data for HTTP requests, embedding images in HTML/CSS, or preparing data for APIs and web services.</p>
          </div>
        </section>

        {/* Long-form SEO Content */}
        <Base64EncoderSeo />
        <RelatedEncoderDecoderTools />
      </main>

      <footer className="bg-enc-white border-t border-enc-gray py-8 px-6">
        <p className="text-sm text-enc-gray text-center">© 2026 ToolsWizard - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
