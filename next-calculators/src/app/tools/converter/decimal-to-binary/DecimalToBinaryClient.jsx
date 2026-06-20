'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Copy, CheckCircle2, Hash, Binary, RefreshCw } from 'lucide-react';

export default function DecimalToBinaryClient() {
  const [decimal, setDecimal] = useState('1337');
  const [binary, setBinary] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  // Convert decimal to binary
  useEffect(() => {
    if (!decimal.trim()) {
      setBinary('');
      setError('');
      return;
    }

    // Validate if it's a valid integer
    if (!/^\d+$/.test(decimal.trim())) {
      setError('Please enter a valid positive integer.');
      setBinary('');
      return;
    }

    try {
      // Using BigInt to support numbers larger than Number.MAX_SAFE_INTEGER
      const bigIntDecimal = BigInt(decimal.trim());
      const binString = bigIntDecimal.toString(2);
      
      setBinary(binString);
      setError('');
    } catch (e) {
      setError('Number is too large or invalid.');
      setBinary('');
    }
  }, [decimal]);

  const handleCopy = () => {
    if (!binary) return;
    navigator.clipboard.writeText(binary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setDecimal('');
    setBinary('');
    setError('');
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Hash className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Decimal to Binary Converter</h2>
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
        
        {/* Input Decimal */}
        <div className="flex flex-col h-[300px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Hash size={14} /> Input: Decimal (Base-10)
            </span>
          </div>
          <textarea
            value={decimal}
            onChange={(e) => setDecimal(e.target.value)}
            placeholder="Enter a decimal number (e.g., 255)..."
            className={`flex-1 w-full p-6 text-2xl font-mono resize-none focus:outline-none bg-transparent ${error ? 'text-red-500' : 'text-conv-dark'}`}
            spellCheck="false"
          />
          {error && (
            <div className="px-4 py-2 text-xs font-medium text-red-500 bg-red-50 border-t border-red-100">
              {error}
            </div>
          )}
        </div>

        {/* Output Binary */}
        <div className="flex flex-col h-[300px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Binary size={14} /> Output: Binary (Base-2)
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
            placeholder="Binary code will appear here..."
            className="flex-1 w-full p-6 text-2xl font-mono resize-none focus:outline-none bg-conv-gray/5 text-conv-dark break-all"
            spellCheck="false"
          />
        </div>

      </div>
    </div>
  );
}
