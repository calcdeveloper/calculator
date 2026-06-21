'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, Minimize2, Check } from 'lucide-react';

export default function CSSMinifierClient() {
  const [inputCss, setInputCss] = useState('');
  const [outputCss, setOutputCss] = useState('');
  const [isMinifying, setIsMinifying] = useState(false);
  const [copied, setCopied] = useState(false);

  const minifyCSS = (css) => {
    return css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ')             // Replace multiple whitespace with single space
      .replace(/\s*([\{\}\:\;\,])\s*/g, '$1') // Remove spaces around syntax characters
      .replace(/;\}/g, '}')             // Remove trailing semicolon before closing brace
      .trim();
  };

  const handleMinify = () => {
    if (!inputCss.trim()) return;
    
    setIsMinifying(true);
    setTimeout(() => {
      try {
        const minified = minifyCSS(inputCss);
        setOutputCss(minified);
      } catch (error) {
        setOutputCss('/* Error minifying CSS */\n' + inputCss);
      }
      setIsMinifying(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputCss) return;
    navigator.clipboard.writeText(outputCss);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputCss('');
    setOutputCss('');
  };

  const handleDownload = () => {
    if (!outputCss) return;
    const blob = new Blob([outputCss], { type: 'text/css' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'style.min.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const inputSize = new Blob([inputCss]).size;
  const outputSize = new Blob([outputCss]).size;
  const savedBytes = Math.max(0, inputSize - outputSize);
  const savedPercentage = inputSize > 0 ? ((savedBytes / inputSize) * 100).toFixed(1) : 0;

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            CSS Minifier
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Compress and minify your CSS code to reduce file size and accelerate website loading times.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleMinify}
              disabled={!inputCss || isMinifying}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Minimize2 size={18} />
              {isMinifying ? 'Minifying...' : 'Minify CSS'}
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
            >
              <RefreshCw size={18} />
              Clear
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={!outputCss}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50 ${
                copied 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
            <button
              onClick={handleDownload}
              disabled={!outputCss}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </div>

        {outputCss && (
          <div className="bg-emerald-50 border-b border-emerald-100 p-4 flex items-center justify-center gap-8 text-sm font-semibold text-emerald-800">
            <div>Original: {inputSize} bytes</div>
            <div>Minified: {outputSize} bytes</div>
            <div className="text-emerald-600">Saved: {savedBytes} bytes ({savedPercentage}%)</div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input CSS</span>
            </div>
            <textarea
              value={inputCss}
              onChange={(e) => setInputCss(e.target.value)}
              placeholder="Paste your uncompressed CSS code here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Minified Output</span>
            </div>
            <textarea
              value={outputCss}
              readOnly
              placeholder="Minified CSS will appear here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
