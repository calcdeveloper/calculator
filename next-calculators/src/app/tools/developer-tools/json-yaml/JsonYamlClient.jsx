'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, ArrowRightLeft, FileJson, FileText, Info } from 'lucide-react';
import yaml from 'js-yaml';

export default function JsonYamlClient() {
  const [inputData, setInputData] = useState('');
  const [outputData, setOutputData] = useState('');
  const [isConverting, setIsConverting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const handleConvert = () => {
    if (!inputData.trim()) {
      setError(null);
      return;
    }
    
    setIsConverting(true);
    setError(null);
    
    setTimeout(() => {
      try {
        const parsed = JSON.parse(inputData);
        const yamlString = yaml.dump(parsed, {
          indent: 2,
          lineWidth: -1, // Don't wrap lines automatically
          noRefs: true, // Prevent creating YAML anchors/aliases
        });
        setOutputData(yamlString);
      } catch (err) {
        setError(`Conversion Error: ${err.message}`);
        setOutputData('');
      }
      setIsConverting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputData) return;
    navigator.clipboard.writeText(outputData);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputData('');
    setOutputData('');
    setError(null);
  };

  const handleDownload = () => {
    if (!outputData) return;
    const blob = new Blob([outputData], { type: 'text/yaml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'config.yml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const loadSample = () => {
    setInputData(JSON.stringify({
      "server": {
        "host": "localhost",
        "port": 8080,
        "features": ["logging", "cors", "metrics"]
      },
      "database": {
        "engine": "postgres",
        "credentials": {
          "user": "admin",
          "password": "secret_password"
        }
      }
    }, null, 2));
    setOutputData('');
    setError(null);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            JSON to YAML Converter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly convert JSON objects into readable, indentation-based YAML files for Kubernetes, Docker, and CI/CD configurations.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-4 w-full md:w-auto">
            <button
              onClick={handleConvert}
              disabled={!inputData || isConverting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <ArrowRightLeft size={18} />
              {isConverting ? 'Converting...' : 'Convert to YAML'}
            </button>
            
            <button
              onClick={loadSample}
              className="text-sm text-dev-primary hover:text-dev-primaryDark font-semibold transition-colors"
            >
              Load Sample
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
              disabled={!outputData}
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
              disabled={!outputData}
              className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Download size={18} />
              Download YAML
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border-b border-red-100 p-4 flex items-start gap-3 text-sm font-mono text-red-700">
            <Info size={18} className="shrink-0 mt-0.5" />
            <span className="break-all">{error}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray flex items-center gap-2 uppercase tracking-wider"><FileJson size={16} /> JSON Input</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputData.length} chars</span>
            </div>
            <textarea
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
                if (error) setError(null);
              }}
              placeholder="Paste your JSON object here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary flex items-center gap-2 uppercase tracking-wider"><FileText size={16} /> YAML Output</span>
            </div>
            <textarea
              value={outputData}
              readOnly
              placeholder="Converted YAML configuration will appear here..."
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
