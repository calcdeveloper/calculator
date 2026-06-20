'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check } from 'lucide-react';

export default function JSFormatterClient() {
  const [inputJs, setInputJs] = useState('');
  const [outputJs, setOutputJs] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);

  const formatJS = (jsText, spaces) => {
    // Basic JS Formatter algorithm (for browser-side simple formatting)
    // Note: For production use, a full AST parser like Prettier/Babel should be used.
    // This is a naive implementation for simple minified code restoration.
    let formatted = '';
    let indentLevel = 0;
    const indentStr = ' '.repeat(spaces);
    let inString = false;
    let stringChar = '';
    
    // Quick pass to normalize simple spaces
    let compact = jsText.replace(/\s+/g, ' ').trim();
    
    for (let i = 0; i < compact.length; i++) {
      const char = compact[i];
      const nextChar = compact[i + 1] || '';
      
      // Handle strings
      if ((char === "'" || char === '"' || char === '`') && compact[i-1] !== '\\') {
        if (!inString) {
          inString = true;
          stringChar = char;
        } else if (char === stringChar) {
          inString = false;
        }
        formatted += char;
        continue;
      }
      
      if (inString) {
        formatted += char;
        continue;
      }

      if (char === '{' || char === '[') {
        indentLevel++;
        formatted += char + '\n' + indentStr.repeat(indentLevel);
      } else if (char === '}' || char === ']') {
        indentLevel = Math.max(0, indentLevel - 1);
        formatted += '\n' + indentStr.repeat(indentLevel) + char;
      } else if (char === ';') {
        formatted += char + '\n' + indentStr.repeat(indentLevel);
      } else if (char === ',') {
        formatted += char + ' ';
      } else {
        formatted += char;
      }
    }

    // Clean up empty lines and double indents
    return formatted.replace(/\n\s*\n/g, '\n').trim();
  };

  const handleFormat = () => {
    if (!inputJs.trim()) return;
    
    setIsFormatting(true);
    setTimeout(() => {
      try {
        const formatted = formatJS(inputJs, indentSize);
        setOutputJs(formatted);
      } catch (error) {
        setOutputJs('// Error formatting JavaScript. Please check for syntax errors.\n' + inputJs);
      }
      setIsFormatting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputJs) return;
    navigator.clipboard.writeText(outputJs);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputJs('');
    setOutputJs('');
  };

  const handleDownload = () => {
    if (!outputJs) return;
    const blob = new Blob([outputJs], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted-script.js';
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
            JavaScript Formatter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Beautify and format your messy or minified JavaScript code instantly in your browser.
        
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
              disabled={!inputJs || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Formatting...' : 'Format JS'}
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
              disabled={!outputJs}
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
              disabled={!outputJs}
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
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input JS</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputJs.length} bytes</span>
            </div>
            <textarea
              value={inputJs}
              onChange={(e) => setInputJs(e.target.value)}
              placeholder="Paste your minified or messy JavaScript code here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Formatted Output</span>
              {outputJs && (
                <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{outputJs.length} bytes</span>
              )}
            </div>
            <textarea
              value={outputJs}
              readOnly
              placeholder="Formatted JavaScript will appear here..."
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
