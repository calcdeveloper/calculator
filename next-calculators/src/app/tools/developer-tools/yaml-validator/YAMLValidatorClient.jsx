'use client';

import React, { useState } from 'react';
import { Copy, RefreshCw, CheckCircle2, XCircle, FileWarning } from 'lucide-react';
import yaml from 'js-yaml';

export default function YAMLValidatorClient() {
  const [inputYaml, setInputYaml] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResult, setValidationResult] = useState(null); // { valid: boolean, error: string | null }

  const handleValidate = () => {
    if (!inputYaml.trim()) {
      setValidationResult(null);
      return;
    }
    
    setIsValidating(true);
    setTimeout(() => {
      try {
        yaml.load(inputYaml);
        setValidationResult({ valid: true, error: null });
      } catch (err) {
        setValidationResult({ valid: false, error: err.message });
      }
      setIsValidating(false);
    }, 100);
  };

  const handleClear = () => {
    setInputYaml('');
    setValidationResult(null);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            YAML Validator
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly check your YAML configuration files for syntax errors and strict formatting compliance.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={handleValidate}
              disabled={!inputYaml || isValidating}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileWarning size={18} />
              {isValidating ? 'Validating...' : 'Validate YAML'}
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
            >
              <RefreshCw size={18} />
              Clear
            </button>
          </div>
        </div>

        {validationResult && (
          <div className={`p-4 flex items-start gap-3 text-sm font-mono border-b ${
            validationResult.valid 
              ? 'bg-emerald-50 border-emerald-100 text-emerald-800' 
              : 'bg-red-50 border-red-100 text-red-700'
          }`}>
            {validationResult.valid ? (
              <CheckCircle2 size={18} className="shrink-0 mt-0.5 text-emerald-600" />
            ) : (
              <XCircle size={18} className="shrink-0 mt-0.5" />
            )}
            <span className="break-all font-semibold">
              {validationResult.valid ? 'Valid YAML Configuration!' : `Invalid YAML: ${validationResult.error}`}
            </span>
          </div>
        )}

        <div className="flex flex-col h-[600px]">
          <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
            <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input YAML</span>
            <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputYaml.length} bytes</span>
          </div>
          <textarea
            value={inputYaml}
            onChange={(e) => {
              setInputYaml(e.target.value);
              if (validationResult) setValidationResult(null);
            }}
            placeholder="server:&#10;  port: 8080&#10;  host: localhost&#10;&#10;database:&#10;  username: admin&#10;  password: root"
            className="flex-1 w-full p-6 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden leading-loose"
            spellCheck="false"
          />
        </div>
      </div>
      </main>
    </>
  );
}
