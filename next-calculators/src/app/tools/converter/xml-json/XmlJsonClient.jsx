'use client';

import React, { useState } from 'react';
import { XMLParser } from 'fast-xml-parser';
import { ArrowRightLeft, Copy, CheckCircle2, AlertCircle, FileJson, CodeXml, RefreshCw } from 'lucide-react';

export default function XmlJsonClient() {
  const [input, setInput] = useState('<?xml version="1.0" encoding="UTF-8"?>\n<root>\n  <item id="1">Hello</item>\n  <item id="2">World</item>\n</root>');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);

  const handleConvert = () => {
    if (!input.trim()) {
      setOutput('');
      setError('');
      return;
    }

    try {
      const parser = new XMLParser({
        ignoreAttributes: false,
        attributeNamePrefix: "@_"
      });
      const jsonObj = parser.parse(input);
      
      // Check if the parser actually produced an object (fast-xml-parser returns empty string for completely invalid XML)
      if (typeof jsonObj !== 'object' || jsonObj === null || Object.keys(jsonObj).length === 0) {
          throw new Error("Invalid XML structure");
      }

      setOutput(JSON.stringify(jsonObj, null, 2));
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to parse XML. Please check your syntax.');
      setOutput('');
    }
  };

  const handleCopy = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError('');
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <CodeXml className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">XML to JSON Converter</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-conv-gray hover:text-conv-dark bg-white border border-conv-gray/30 rounded-lg hover:bg-conv-gray/5 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} /> Clear
          </button>
          <button
            onClick={handleConvert}
            className="px-6 py-2 text-sm font-bold text-white bg-conv-primary hover:bg-conv-primaryDark rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <ArrowRightLeft size={16} /> Convert to JSON
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border-b border-red-100 flex items-start gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-medium">{error}</div>
        </div>
      )}

      {/* Editor Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-conv-gray/20">
        
        {/* Input XML */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider">Input: XML</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your XML code here..."
            className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-transparent text-conv-dark"
            spellCheck="false"
          />
        </div>

        {/* Output JSON */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <FileJson size={14} /> Output: JSON
            </span>
            <button
              onClick={handleCopy}
              disabled={!output}
              className={`p-1.5 rounded-md transition-colors ${
                !output ? 'text-conv-gray/40 cursor-not-allowed' : 
                copied ? 'text-green-600 bg-green-50' : 'text-conv-gray hover:text-conv-dark hover:bg-white'
              }`}
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <textarea
            value={output}
            readOnly
            placeholder="JSON output will appear here..."
            className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-conv-gray/5 text-conv-dark"
            spellCheck="false"
          />
        </div>

      </div>
    </div>
  );
}
