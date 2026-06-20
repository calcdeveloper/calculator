'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check } from 'lucide-react';

export default function CSSFormatterClient() {
  const [inputCss, setInputCss] = useState('');
  const [outputCss, setOutputCss] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);

  const formatCSS = (cssText, spaces) => {
    // Basic CSS Formatter algorithm
    let formatted = '';
    let indentLevel = 0;
    const indentStr = ' '.repeat(spaces);
    
    // Remove all existing formatting but keep logical breaks
    let compact = cssText
      .replace(/\/\*[\s\S]*?\*\//g, (match) => match + '\n') // Keep comments
      .replace(/\s+/g, ' ')
      .replace(/{\s*/g, '{\n')
      .replace(/}\s*/g, '\n}\n')
      .replace(/;\s*/g, ';\n')
      .replace(/,\s*/g, ', ')
      .replace(/:\s*/g, ': ')
      .trim();

    const lines = compact.split('\n');
    
    for (let i = 0; i < lines.length; i++) {
      let line = lines[i].trim();
      
      if (!line) continue;

      if (line.includes('}')) {
        indentLevel = Math.max(0, indentLevel - 1);
      }

      formatted += indentStr.repeat(indentLevel) + line + '\n';

      if (line.includes('{')) {
        indentLevel++;
      }
    }

    return formatted.trim();
  };

  const handleFormat = () => {
    if (!inputCss.trim()) return;
    
    setIsFormatting(true);
    setTimeout(() => {
      try {
        const formatted = formatCSS(inputCss, indentSize);
        setOutputCss(formatted);
      } catch (error) {
        setOutputCss('/* Error formatting CSS. Please check for syntax errors. */\n' + inputCss);
      }
      setIsFormatting(false);
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
    a.download = 'formatted-styles.css';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            CSS Formatter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Beautify and format your CSS code with proper indentation and structure instantly in your browser.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="indent" className="text-sm font-semibold text-dev-dark">Indentation:</label>
              <select
                id="indent"
                value={indentSize}
                onChange={(e) => setIndentSize(Number(e.target.value))}
                className="bg-dev-white border border-dev-gray text-dev-dark text-sm rounded-lg focus:ring-dev-primary focus:border-dev-primary p-2"
              >
                <option value={2}>2 Spaces</option>
                <option value={4}>4 Spaces</option>
                <option value={8}>8 Spaces</option>
              </select>
            </div>
            
            <button
              onClick={handleFormat}
              disabled={!inputCss || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Formatting...' : 'Format CSS'}
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

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input CSS</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputCss.length} bytes</span>
            </div>
            <textarea
              value={inputCss}
              onChange={(e) => setInputCss(e.target.value)}
              placeholder="Paste your minified or messy CSS code here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Formatted Output</span>
              {outputCss && (
                <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{outputCss.length} bytes</span>
              )}
            </div>
            <textarea
              value={outputCss}
              readOnly
              placeholder="Formatted CSS will appear here..."
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
