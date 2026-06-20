'use client';

import React, { useState, useEffect } from 'react';
import { Copy, RefreshCw, SplitSquareHorizontal, Diff } from 'lucide-react';
import * as DiffLib from 'diff';

export default function CodeDiffClient() {
  const [originalCode, setOriginalCode] = useState('');
  const [modifiedCode, setModifiedCode] = useState('');
  const [diffResult, setDiffResult] = useState([]);
  const [viewMode, setViewMode] = useState('split'); // 'split' or 'unified'

  useEffect(() => {
    if (!originalCode && !modifiedCode) {
      setDiffResult([]);
      return;
    }
    
    // We use line-by-line diffing for code
    const diffs = DiffLib.diffLines(originalCode, modifiedCode);
    setDiffResult(diffs);
  }, [originalCode, modifiedCode]);

  const handleClear = () => {
    setOriginalCode('');
    setModifiedCode('');
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Code Diff Tool
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Compare two versions of code side-by-side to instantly identify additions, deletions, and modifications.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex bg-dev-gray/10 p-1 rounded-xl">
              <button
                onClick={() => setViewMode('split')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  viewMode === 'split' 
                    ? 'bg-dev-white text-dev-primary shadow-xs' 
                    : 'text-dev-gray hover:text-dev-dark'
                }`}
              >
                <SplitSquareHorizontal size={16} />
                Split View
              </button>
              <button
                onClick={() => setViewMode('unified')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-colors ${
                  viewMode === 'unified' 
                    ? 'bg-dev-white text-dev-primary shadow-xs' 
                    : 'text-dev-gray hover:text-dev-dark'
                }`}
              >
                <Diff size={16} />
                Unified View
              </button>
            </div>
          </div>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
          >
            <RefreshCw size={18} />
            Clear All
          </button>
        </div>

        {/* Input Areas */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30 border-b border-dev-gray/30">
          <div className="flex flex-col h-[300px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-red-600 uppercase tracking-wider">Original Code</span>
            </div>
            <textarea
              value={originalCode}
              onChange={(e) => setOriginalCode(e.target.value)}
              placeholder="Paste original code here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[300px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-emerald-600 uppercase tracking-wider">Modified Code</span>
            </div>
            <textarea
              value={modifiedCode}
              onChange={(e) => setModifiedCode(e.target.value)}
              placeholder="Paste modified code here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
        </div>

        {/* Diff Output */}
        <div className="bg-dev-gray/5">
          <div className="py-3 px-6 border-b border-dev-gray/30">
            <span className="text-sm font-bold text-dev-dark uppercase tracking-wider">Diff Results</span>
          </div>
          
          <div className="p-4 overflow-x-auto">
            {(!originalCode && !modifiedCode) ? (
              <div className="text-center py-12 text-dev-gray italic">
                Enter original and modified code to see the differences.
              </div>
            ) : viewMode === 'split' ? (
              <div className="grid grid-cols-2 gap-4 font-mono text-sm">
                {/* Left Side (Original) */}
                <div className="bg-dev-white border border-dev-gray/30 rounded-lg overflow-hidden">
                  {diffResult.map((part, index) => {
                    if (part.added) return null; // Only show removed/unchanged on left
                    const className = part.removed ? 'bg-red-50 text-red-800' : 'text-dev-dark/70';
                    return (
                      <pre key={index} className={`m-0 px-4 py-1 whitespace-pre-wrap ${className}`}>
                        {part.value}
                      </pre>
                    );
                  })}
                </div>
                {/* Right Side (Modified) */}
                <div className="bg-dev-white border border-dev-gray/30 rounded-lg overflow-hidden">
                  {diffResult.map((part, index) => {
                    if (part.removed) return null; // Only show added/unchanged on right
                    const className = part.added ? 'bg-emerald-50 text-emerald-800' : 'text-dev-dark/70';
                    return (
                      <pre key={index} className={`m-0 px-4 py-1 whitespace-pre-wrap ${className}`}>
                        {part.value}
                      </pre>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="bg-dev-white border border-dev-gray/30 rounded-lg overflow-hidden font-mono text-sm">
                {diffResult.map((part, index) => {
                  let className = 'text-dev-dark/70';
                  let prefix = '  ';
                  if (part.added) {
                    className = 'bg-emerald-50 text-emerald-800';
                    prefix = '+ ';
                  } else if (part.removed) {
                    className = 'bg-red-50 text-red-800';
                    prefix = '- ';
                  }
                  
                  return (
                    <pre key={index} className={`m-0 px-4 py-1 whitespace-pre-wrap flex ${className}`}>
                      <span className="select-none opacity-50 mr-4 w-4 shrink-0">{prefix}</span>
                      <span className="flex-1">{part.value}</span>
                    </pre>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
