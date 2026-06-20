'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check, Info } from 'lucide-react';

export default function JSONFormatterClient() {
  const [inputJson, setInputJson] = useState('');
  const [outputJson, setOutputJson] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);
  const [error, setError] = useState(null);

  const handleFormat = () => {
    if (!inputJson.trim()) {
      setError(null);
      return;
    }
    
    setIsFormatting(true);
    setError(null);
    setTimeout(() => {
      try {
        const parsed = JSON.parse(inputJson);
        const formatted = JSON.stringify(parsed, null, indentSize);
        setOutputJson(formatted);
      } catch (err) {
        setError(`Invalid JSON: ${err.message}`);
        setOutputJson('');
      }
      setIsFormatting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputJson) return;
    navigator.clipboard.writeText(outputJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputJson('');
    setOutputJson('');
    setError(null);
  };

  const handleDownload = () => {
    if (!outputJson) return;
    const blob = new Blob([outputJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted-data.json';
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
            JSON Formatter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Validate, beautify, and format your JSON data instantly. Detect syntax errors and make your data readable.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
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
              disabled={!inputJson || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Formatting...' : 'Format JSON'}
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
            >
              <RefreshCw size={18} />
              Clear
            </button>
          </div>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <button
              onClick={handleCopy}
              disabled={!outputJson}
              className={`flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50 ${
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
              disabled={!outputJson}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-b border-red-100 p-4 flex items-start gap-3 text-sm font-mono text-red-700">
            <Info size={18} className="shrink-0 mt-0.5" />
            <span className="break-all">{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input JSON</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputJson.length} bytes</span>
            </div>
            <textarea
              value={inputJson}
              onChange={(e) => {
                setInputJson(e.target.value);
                if (error) setError(null);
              }}
              placeholder='{"paste": "your minified JSON here..."}'
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Formatted Output</span>
            </div>
            <textarea
              value={outputJson}
              readOnly
              placeholder="Formatted JSON will appear here..."
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
