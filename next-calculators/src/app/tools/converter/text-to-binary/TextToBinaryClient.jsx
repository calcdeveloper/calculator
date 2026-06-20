'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Copy, CheckCircle2, Binary, Type, RefreshCw } from 'lucide-react';

export default function TextToBinaryClient() {
  const [text, setText] = useState('Hello World');
  const [binary, setBinary] = useState('');
  const [copied, setCopied] = useState(false);

  // Convert text to binary
  useEffect(() => {
    if (!text) {
      setBinary('');
      return;
    }

    try {
      // Create a UTF-8 encoded Uint8Array to support all characters (including emojis)
      const encoder = new TextEncoder();
      const bytes = encoder.encode(text);
      
      let binString = '';
      for (let i = 0; i < bytes.length; i++) {
        // Convert each byte to an 8-bit binary string
        binString += bytes[i].toString(2).padStart(8, '0') + ' ';
      }
      
      setBinary(binString.trim());
    } catch (e) {
      setBinary('Error converting text.');
    }
  }, [text]);

  const handleCopy = () => {
    if (!binary) return;
    navigator.clipboard.writeText(binary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setText('');
    setBinary('');
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Binary className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Text to Binary Converter</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-conv-gray hover:text-conv-dark bg-white border border-conv-gray/30 rounded-lg hover:bg-conv-gray/5 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} /> Clear
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-conv-gray/20">
        
        {/* Input Text */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Type size={14} /> Input: Text
            </span>
          </div>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type or paste your text here..."
            className="flex-1 w-full p-6 text-base resize-none focus:outline-none bg-transparent text-conv-dark leading-relaxed"
            spellCheck="false"
          />
        </div>

        {/* Output Binary */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Binary size={14} /> Output: Binary
            </span>
            <button
              onClick={handleCopy}
              disabled={!binary}
              className={`p-1.5 rounded-md transition-colors ${
                !binary ? 'text-conv-gray/40 cursor-not-allowed' : 
                copied ? 'text-green-600 bg-green-50' : 'text-conv-gray hover:text-conv-dark hover:bg-white'
              }`}
              title="Copy to clipboard"
            >
              {copied ? <CheckCircle2 size={16} /> : <Copy size={16} />}
            </button>
          </div>
          <textarea
            value={binary}
            readOnly
            placeholder="Binary output will appear here..."
            className="flex-1 w-full p-6 font-mono text-sm resize-none focus:outline-none bg-conv-gray/5 text-conv-dark leading-relaxed break-all"
            spellCheck="false"
          />
        </div>

      </div>
    </div>
  );
}
