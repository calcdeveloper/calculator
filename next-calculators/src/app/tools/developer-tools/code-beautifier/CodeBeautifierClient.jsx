'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check, Info } from 'lucide-react';
import beautify from 'js-beautify';

export default function CodeBeautifierClient() {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [language, setLanguage] = useState('js'); // js, html, css
  const [indentSize, setIndentSize] = useState(2);
  const [error, setError] = useState(null);

  const handleFormat = () => {
    if (!inputCode.trim()) {
      setError(null);
      return;
    }
    
    setIsFormatting(true);
    setError(null);
    setTimeout(() => {
      try {
        let formatted = '';
        const options = {
          indent_size: indentSize,
          space_in_empty_paren: true,
          preserve_newlines: true,
          max_preserve_newlines: 2
        };

        if (language === 'js') {
          formatted = beautify.js(inputCode, options);
        } else if (language === 'html') {
          formatted = beautify.html(inputCode, options);
        } else if (language === 'css') {
          formatted = beautify.css(inputCode, options);
        }

        setOutputCode(formatted);
      } catch (err) {
        setError(`Formatting Error: ${err.message}`);
        setOutputCode('');
      }
      setIsFormatting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputCode) return;
    navigator.clipboard.writeText(outputCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputCode('');
    setOutputCode('');
    setError(null);
  };

  const handleDownload = () => {
    if (!outputCode) return;
    
    const ext = language === 'js' ? 'js' : language === 'html' ? 'html' : 'css';
    const blob = new Blob([outputCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `formatted-code.${ext}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Code Beautifier
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly format and beautify messy JavaScript, HTML, and CSS code with advanced AST parsing.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="bg-dev-white border border-dev-gray text-dev-dark text-sm rounded-lg focus:ring-dev-primary focus:border-dev-primary p-2 font-bold"
              >
                <option value="js">JavaScript / JSON</option>
                <option value="html">HTML / XML</option>
                <option value="css">CSS / SCSS</option>
              </select>
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="indent" className="text-sm font-semibold text-dev-dark hidden sm:block">Indent:</label>
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
              disabled={!inputCode || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Beautifying...' : 'Beautify Code'}
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
              disabled={!outputCode}
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
              disabled={!outputCode}
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
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input {language.toUpperCase()}</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputCode.length} bytes</span>
            </div>
            <textarea
              value={inputCode}
              onChange={(e) => {
                setInputCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder={`Paste your minified or messy ${language.toUpperCase()} code here...`}
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Beautified Output</span>
            </div>
            <textarea
              value={outputCode}
              readOnly
              placeholder="Beautified code will appear here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden whitespace-pre"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
