"use client";

import React, { useState, useCallback } from 'react';
import { 
  Code, Copy, Download, Trash2, CheckCircle2, ShieldCheck, 
  Zap, Info, ChevronRight, FileText, Lock, Globe, Terminal 
} from 'lucide-react';

export default function HTMLFormatterClient() {
  const [htmlInput, setHtmlInput] = useState('');
  const [formattedOutput, setFormattedOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [error, setError] = useState(null);
  const [indentSize, setIndentSize] = useState(2);

  const formatHTML = useCallback((html, indent = 2) => {
    let formatted = '';
    let pad = 0;
    const indentString = ' '.repeat(indent);
    
    html = html.replace(/>\s*</g, '><');
    
    for (let i = 0; i < html.length; i++) {
      const char = html[i];
      
      if (char === '<') {
        if (html[i + 1] === '/') {
          pad = Math.max(0, pad - 1);
          formatted += '\n' + indentString.repeat(pad) + char;
        } else {
          formatted += '\n' + indentString.repeat(pad) + char;
          pad++;
        }
      } else if (char === '>') {
        formatted += char;
      } else {
        formatted += char;
      }
    }
    
    return formatted.trim();
  }, []);

  const handleFormat = () => {
    if (!htmlInput.trim()) return;
    setIsProcessing(true);
    setError(null);

    try {
      const formatted = formatHTML(htmlInput, indentSize);
      setFormattedOutput(formatted);
    } catch (err) {
      setError("Formatting failed. Please check your HTML code.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleDownload = () => {
    const blob = new Blob([formattedOutput], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted.html';
    a.click();
  };

  const clearAll = () => {
    setHtmlInput('');
    setFormattedOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-dev-bg font-sans text-dev-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-dev-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Developer Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">HTML Formatter</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            HTML Formatter
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Format and beautify HTML code with proper indentation and structure. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
          
          <div className="mb-6 flex items-center gap-4">
            <label className="font-bold text-dev-dark">Indent Size:</label>
            <select 
              value={indentSize}
              onChange={(e) => setIndentSize(parseInt(e.target.value))}
              className="px-4 py-2 bg-dev-bg/50 border border-dev-gray rounded-lg focus:ring-2 focus:ring-dev-primary outline-none"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value={8}>8 spaces</option>
            </select>
          </div>

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
                value={htmlInput}
                onChange={(e) => setHtmlInput(e.target.value)}
                placeholder='Paste your HTML code here (e.g., "<div><p>Hello World</p></div>")'
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-dev-primary focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-dev-dark">
                  <Code size={20} className="text-dev-primary" /> Formatted HTML
                </label>
                <div className="flex gap-2">
                  <button 
                    disabled={!formattedOutput}
                    onClick={handleCopy}
                    className="p-2 text-dev-gray hover:text-dev-primary disabled:opacity-30 transition-all rounded-lg hover:bg-dev-bg/50"
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 className="text-emerald-500" size={20} /> : <Copy size={20} />}
                  </button>
                  <button 
                    disabled={!formattedOutput}
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
                value={formattedOutput}
                placeholder="Formatted HTML will appear here..."
                className="w-full h-[400px] p-4 bg-dev-bg/50 border border-dev-gray rounded-2xl font-mono text-sm outline-none resize-none"
              />
            </div>
          </div>

          <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleFormat}
              disabled={!htmlInput || isProcessing}
              className="w-full md:w-auto bg-dev-primary hover:bg-dev-primaryDark disabled:bg-dev-gray text-dev-white px-10 py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-dev-primary/20 flex items-center justify-center gap-3"
            >
              {isProcessing ? "Formatting..." : <><Code size={22} /> Format HTML</>}
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
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-dev-primary/10 text-dev-primary rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Your HTML code is processed locally. We never transmit your code to our servers, keeping your sensitive information private and secure.</p>
          </div>
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-dev-secondary/20 text-dev-primary rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Formatting</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Our optimized algorithm formats HTML in milliseconds, handling large files without any delay or lag.</p>
          </div>
          <div className="bg-dev-white p-8 rounded-3xl border border-dev-gray shadow-sm">
            <div className="w-12 h-12 bg-dev-primary/10 text-dev-primary rounded-xl flex items-center justify-center mb-6"><Terminal /></div>
            <h3 className="text-xl font-bold mb-3">Customizable Indentation</h3>
            <p className="text-dev-gray leading-relaxed text-sm">Choose from 2, 4, or 8 space indentation to match your coding style and project requirements.</p>
          </div>
        </section>


      </main>

    </div>
  );
}
