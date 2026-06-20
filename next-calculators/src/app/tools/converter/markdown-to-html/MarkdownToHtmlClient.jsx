'use client';

import React, { useState } from 'react';
import { marked } from 'marked';
import { ArrowRightLeft, Copy, CheckCircle2, AlertCircle, FileText, Languages, RefreshCw } from 'lucide-react';

export default function MarkdownToHtmlClient() {
  const [input, setInput] = useState('# Hello World\n\nThis is a **bold** statement.\n\n- Item 1\n- Item 2');
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
      // marked.parse can be synchronous
      const html = marked.parse(input);
      setOutput(html);
      setError('');
    } catch (err) {
      setError(err.message || 'Failed to convert Markdown. Please check your syntax.');
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
          <FileText className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Markdown to HTML Converter</h2>
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
            <ArrowRightLeft size={16} /> Convert to HTML
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
        
        {/* Input Markdown */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider">Input: Markdown</span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your Markdown code here..."
            className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-transparent text-conv-dark"
            spellCheck="false"
          />
        </div>

        {/* Output HTML */}
        <div className="flex flex-col h-[500px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Languages size={14} /> Output: HTML
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
            placeholder="HTML output will appear here..."
            className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-conv-gray/5 text-conv-dark"
            spellCheck="false"
          />
        </div>

      </div>
    </div>
  );
}
