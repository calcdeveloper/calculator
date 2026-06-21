'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, Shield, Check, Info } from 'lucide-react';
import JavaScriptObfuscator from 'javascript-obfuscator';

export default function JsObfuscatorClient() {
  const [inputCode, setInputCode] = useState('');
  const [outputCode, setOutputCode] = useState('');
  const [isObfuscating, setIsObfuscating] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  // Configuration levels
  const [preset, setPreset] = useState('medium'); // low, medium, high

  const handleObfuscate = () => {
    if (!inputCode.trim()) {
      setError(null);
      return;
    }
    
    setIsObfuscating(true);
    setError(null);
    
    setTimeout(() => {
      try {
        let options = {};
        
        if (preset === 'low') {
          options = {
            compact: true,
            controlFlowFlattening: false,
            deadCodeInjection: false,
            debugProtection: false,
            disableConsoleOutput: false,
            identifierNamesGenerator: 'hexadecimal',
            renameGlobals: false,
            stringArray: true,
            stringArrayEncoding: [],
            stringArrayThreshold: 0.75,
            unicodeEscapeSequence: false
          };
        } else if (preset === 'medium') {
          options = {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 0.75,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 0.4,
            debugProtection: false,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            renameGlobals: false,
            stringArray: true,
            stringArrayEncoding: ['base64'],
            stringArrayThreshold: 0.75,
            unicodeEscapeSequence: false
          };
        } else if (preset === 'high') {
          options = {
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            deadCodeInjection: true,
            deadCodeInjectionThreshold: 1,
            debugProtection: true,
            disableConsoleOutput: true,
            identifierNamesGenerator: 'hexadecimal',
            renameGlobals: true,
            stringArray: true,
            stringArrayEncoding: ['rc4'],
            stringArrayThreshold: 1,
            unicodeEscapeSequence: true,
            transformObjectKeys: true
          };
        }

        const obfuscationResult = JavaScriptObfuscator.obfuscate(inputCode, options);
        setOutputCode(obfuscationResult.getObfuscatedCode());
      } catch (err) {
        setError(`Obfuscation Error: ${err.message}`);
        setOutputCode('');
      }
      setIsObfuscating(false);
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
    const blob = new Blob([outputCode], { type: 'application/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'obfuscated.js';
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
            JavaScript Obfuscator
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Protect your intellectual property. Transform readable JavaScript into complex, unreadable, and reverse-engineering-resistant code.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2">
              <label htmlFor="preset" className="text-sm font-semibold text-dev-dark hidden sm:block">Protection Level:</label>
              <select
                id="preset"
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
                className="bg-dev-white border border-dev-gray text-dev-dark text-sm rounded-lg focus:ring-dev-primary focus:border-dev-primary p-2 font-bold"
              >
                <option value="low">Low (Fast, minor protection)</option>
                <option value="medium">Medium (Recommended)</option>
                <option value="high">High (Slow, maximum protection)</option>
              </select>
            </div>
            
            <button
              onClick={handleObfuscate}
              disabled={!inputCode || isObfuscating}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Shield size={18} />
              {isObfuscating ? 'Protecting...' : 'Obfuscate Code'}
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
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Original Code</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputCode.length} chars</span>
            </div>
            <textarea
              value={inputCode}
              onChange={(e) => {
                setInputCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder="// Paste your proprietary JavaScript here...&#10;function calculateProprietaryAlgorithm() {&#10;  return 'secret_data';&#10;}"
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Obfuscated Output</span>
              {outputCode && <span className="text-xs text-dev-primary bg-dev-primary/10 px-2 py-1 rounded-md">Size: {(outputCode.length / 1024).toFixed(2)} KB</span>}
            </div>
            <textarea
              value={outputCode}
              readOnly
              placeholder="Highly protected, obfuscated JavaScript will appear here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden break-all"
              spellCheck="false"
            />
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
