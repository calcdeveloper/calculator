"use client";

import React, { useState } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Minimize2, Maximize2 
} from 'lucide-react';
import HTMLMinifierSeo from '@/components/tools/HTMLMinifierSeo';

export default function HTMLMinifierClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [originalSize, setOriginalSize] = useState(0);
  const [minifiedSize, setMinifiedSize] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);

  const minifyHTML = () => {
    if (!input.trim()) return;
    setIsProcessing(true);
    setError(null);

    setTimeout(() => {
      try {
        const original = input;
        setOriginalSize(original.length);

        // Remove comments
        let minified = original.replace(/<!--[\s\S]*?-->/g, "");
        
        // Remove whitespace between tags
        minified = minified.replace(/>\s+</g, "><");
        
        // Remove leading/trailing whitespace
        minified = minified.replace(/^\s+|\s+$/g, "");
        
        // Remove multiple spaces within tags
        minified = minified.replace(/\s+/g, " ");

        setOutput(minified);
        setMinifiedSize(minified.length);
      } catch (err) {
        setError("Minification failed. Please check your HTML input.");
      } finally {
        setIsProcessing(false);
      }
    }, 100);
  };

  const handleCopy = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "minified.html";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + " KB";
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  const savings = originalSize > 0 ? ((originalSize - minifiedSize) / originalSize * 100).toFixed(2) : 0;

  const clearAll = () => {
    setInput('');
    setOutput('');
    setOriginalSize(0);
    setMinifiedSize(0);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-dev-bg font-sans text-dev-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">HTML Minifier</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Minimize2 size={40} />
            HTML Minifier
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly reduce your HTML file size by removing unnecessary characters. Improve page load times and website performance.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-dev-dark">
                  <FileText size={20} className="text-dev-primary" /> HTML Input
                </label>
                <button onClick={clearAll} className="text-dev-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={'<!DOCTYPE html>\n<html>\n  <head>\n    <title>Sample Page</title>\n  </head>\n  <body>\n    <h1>Hello World</h1>\n  </body>\n</html>'}
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-dev-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-dev-dark">
                  <Code size={20} className="text-dev-primary" /> Minified HTML
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!output}
                    onClick={handleCopy}
                    className="p-2 text-dev-gray hover:text-dev-primary disabled:opacity-30 transition-all rounded-lg hover:bg-dev-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!output}
                    onClick={handleDownload}
                    className="p-2 text-dev-gray hover:text-dev-primary disabled:opacity-30 transition-all rounded-lg hover:bg-dev-bg/50"
                    title="Download HTML"
                  >
                    <Download size={20} />
                  </button>
                </div>
              </div>
              <textarea 
                readOnly
                value={output}
                placeholder="Minified HTML will appear here..."
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={minifyHTML}
              disabled={!input || isProcessing}
              className="w-full md:w-auto bg-dev-primary hover:bg-dev-primaryDark disabled:bg-dev-gray text-dev-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-dev-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Minifying..." : <><Minimize2 size={22} /> Minify HTML Now</>}
            </button>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3 animate-pulse">
              <Info size={20} /> {error}
            </div>
          )}
        </div>

        {output && (
          <div className="bg-dev-white rounded-3xl shadow-xl border border-dev-gray p-8 mt-8">
            <h2 className="text-2xl font-bold text-dev-dark mb-6">Minification Statistics</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-dev-bg/50 p-6 rounded-2xl border border-dev-gray flex flex-col items-center justify-center">
                <div className="text-sm font-semibold text-dev-gray mb-2 uppercase tracking-wide">Original Size</div>
                <div className="text-4xl font-bold text-dev-dark">{formatSize(originalSize)}</div>
              </div>
              <div className="bg-dev-bg/50 p-6 rounded-2xl border border-dev-gray flex flex-col items-center justify-center">
                <div className="text-sm font-semibold text-dev-gray mb-2 uppercase tracking-wide">Minified Size</div>
                <div className="text-4xl font-bold text-dev-dark">{formatSize(minifiedSize)}</div>
              </div>
              <div className="bg-dev-primary/10 p-6 rounded-2xl border border-dev-primary/20 flex flex-col items-center justify-center">
                <div className="text-sm font-semibold text-dev-primary mb-2 uppercase tracking-wide">Size Reduction</div>
                <div className="text-4xl font-bold text-dev-primary">{savings}%</div>
              </div>
            </div>
          </div>
        )}

        <HTMLMinifierSeo />

      </main>
      
      <footer className="bg-dev-white border-t border-dev-gray py-8 px-6 mt-12">
        <p className="text-sm text-dev-gray text-center">© 2026 ToolsWizard - Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}