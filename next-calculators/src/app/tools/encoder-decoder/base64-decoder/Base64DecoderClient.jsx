"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';
import Base64DecoderSeo from "@/components/tools/Base64DecoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function Base64DecoderClient() {
  const [base64Input, setBase64Input] = useState('');
  const [textOutput, setTextOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleDecode = () => {
    if (!base64Input.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const decoded = atob(base64Input);
      setTextOutput(decoded);
    } catch (err) {
      setError("Decoding failed. Please check your Base64 input for errors.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(textOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([textOutput], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'decoded_text.txt';
    a.click();
  };

  const clearAll = () => {
    setBase64Input('');
    setTextOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">Base64 Decoder</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight">
            Base64 Decoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Decode Base64 strings to original text instantly. Secure, fast, and processed entirely in your browser.
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
                  <Code size={20} className="text-enc-primary" /> Base64 Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={base64Input}
                onChange={(e) => setBase64Input(e.target.value)}
                placeholder='Paste your Base64 string here (e.g., "SGVsbG8gV29ybGQ=")'
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={20} className="text-enc-primary" /> Decoded Text
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!textOutput}
                    onClick={handleCopy}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!textOutput}
                    onClick={handleDownload}
                    className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg/50"
                    title="Download Text"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={textOutput}
                placeholder="Decoded text will appear here..."
                className="w-full h-[400px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleDecode}
              disabled={!base64Input || isProcessing}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark disabled:bg-enc-gray text-enc-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-enc-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Decoding..." : <><Code size={22} /> Decode to Text</>}
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
            <p className="text-enc-gray leading-relaxed text-sm">Your Base64 strings are processed locally. We never transmit your data to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-secondary/20 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Decoding</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Our optimized algorithm converts Base64 to text in milliseconds, handling large amounts of data without any delay or lag.</p>
          </div>
          <div className="bg-enc-white p-8 rounded-3xl border border-enc-gray shadow-sm">
            <div className="w-12 h-12 bg-enc-primary/10 text-enc-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Developer-Friendly</h3>
            <p className="text-enc-gray leading-relaxed text-sm">Perfect for decoding API responses, debugging encoded data, or extracting information from Base64-encoded files.</p>
          </div>
        </section>

        <Base64DecoderSeo />
        <RelatedEncoderDecoderTools />
      </main>

      <footer className="bg-enc-white border-t border-enc-gray py-8 px-6">
        <p className="text-sm text-enc-gray text-center">© 2026 ToolsWizard - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
