'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check, Info } from 'lucide-react';

export default function XMLFormatterClient() {
  const [inputXml, setInputXml] = useState('');
  const [outputXml, setOutputXml] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [indentSize, setIndentSize] = useState(2);
  const [error, setError] = useState(null);

  const formatXML = (xml, spaces) => {
    let formatted = '';
    const reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    let pad = 0;
    xml.split('\r\n').forEach(function(node) {
      let indent = 0;
      if (node.match( /.+<\/\w[^>]*>$/ )) {
        indent = 0;
      } else if (node.match( /^<\/\w/ )) {
        if (pad !== 0) pad -= 1;
      } else if (node.match( /^<\w[^>]*[^\/]>.*$/ )) {
        indent = 1;
      } else {
        indent = 0;
      }

      let padding = '';
      for (let i = 0; i < pad; i++) {
        padding += ' '.repeat(spaces);
      }

      formatted += padding + node + '\r\n';
      pad += indent;
    });

    return formatted.trim();
  };

  const handleFormat = () => {
    if (!inputXml.trim()) {
      setError(null);
      return;
    }
    
    setIsFormatting(true);
    setError(null);
    setTimeout(() => {
      try {
        // Basic validation utilizing browser DOMParser
        const parser = new DOMParser();
        const doc = parser.parseFromString(inputXml, "application/xml");
        const parseError = doc.getElementsByTagName("parsererror");
        
        if (parseError.length > 0) {
          throw new Error(parseError[0].textContent);
        }

        const formatted = formatXML(inputXml, indentSize);
        setOutputXml(formatted);
      } catch (err) {
        setError(`XML Parse Error: ${err.message}`);
        setOutputXml('');
      }
      setIsFormatting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputXml) return;
    navigator.clipboard.writeText(outputXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputXml('');
    setOutputXml('');
    setError(null);
  };

  const handleDownload = () => {
    if (!outputXml) return;
    const blob = new Blob([outputXml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted-data.xml';
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
            XML Formatter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Beautify, validate, and format messy XML code to restore readability and debug complex nested tags.
        
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
              disabled={!inputXml || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Formatting...' : 'Format XML'}
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
              disabled={!outputXml}
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
              disabled={!outputXml}
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
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input XML</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputXml.length} bytes</span>
            </div>
            <textarea
              value={inputXml}
              onChange={(e) => {
                setInputXml(e.target.value);
                if (error) setError(null);
              }}
              placeholder='<root><message>Paste your minified XML here...</message></root>'
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Formatted Output</span>
            </div>
            <textarea
              value={outputXml}
              readOnly
              placeholder="Formatted XML will appear here..."
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
