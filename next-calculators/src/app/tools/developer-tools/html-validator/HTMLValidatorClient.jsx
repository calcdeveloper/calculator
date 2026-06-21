'use client';

import React, { useState } from 'react';
import { RefreshCw, FileWarning, CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function HTMLValidatorClient() {
  const [inputHtml, setInputHtml] = useState('');
  const [isValidating, setIsValidating] = useState(false);
  const [validationResults, setValidationResults] = useState(null); // { valid: boolean, errors: array }

  const handleValidate = () => {
    if (!inputHtml.trim()) {
      setValidationResults(null);
      return;
    }
    
    setIsValidating(true);
    
    setTimeout(() => {
      const errors = [];
      
      // Basic heuristic validation using regex and DOM parsing
      const parser = new DOMParser();
      
      // We must wrap in a root element if it's a fragment, but let's parse as an HTML document
      const doc = parser.parseFromString(inputHtml, "text/html");
      
      // Check for unclosed tags via mismatched counts (simple heuristic)
      const openTags = inputHtml.match(/<[a-zA-Z0-9\-]+(?!\/)[^>]*>/g) || [];
      const closeTags = inputHtml.match(/<\/[a-zA-Z0-9\-]+>/g) || [];
      const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
      
      let expectedCloses = 0;
      openTags.forEach(tag => {
        const match = tag.match(/<([a-zA-Z0-9\-]+)/);
        if (match && !voidElements.includes(match[1].toLowerCase()) && !tag.endsWith('/>')) {
          expectedCloses++;
        }
      });

      if (expectedCloses !== closeTags.length) {
         errors.push({ type: 'warning', message: `Possible tag mismatch: Found ${openTags.length} opening tags but ${closeTags.length} closing tags.` });
      }

      // Check for deprecated tags
      const deprecatedTags = ['font', 'center', 'strike', 'u', 'dir', 'applet', 'marquee', 'blink'];
      deprecatedTags.forEach(tag => {
        if (inputHtml.toLowerCase().includes(`<${tag}`)) {
          errors.push({ type: 'error', message: `Deprecated HTML5 element used: <${tag}>` });
        }
      });

      // Check for missing alt attributes on images
      const images = doc.getElementsByTagName('img');
      for (let i = 0; i < images.length; i++) {
        if (!images[i].hasAttribute('alt')) {
          errors.push({ type: 'error', message: `Missing 'alt' attribute on <img> tag.` });
        }
      }

      // Check for multiple IDs
      const allElements = doc.getElementsByTagName('*');
      const idMap = {};
      for (let i = 0; i < allElements.length; i++) {
        const id = allElements[i].id;
        if (id) {
          if (idMap[id]) {
            errors.push({ type: 'error', message: `Duplicate ID found: '${id}'` });
          }
          idMap[id] = true;
        }
      }

      setValidationResults({
        valid: errors.length === 0,
        errors: errors
      });
      setIsValidating(false);
    }, 300);
  };

  const handleClear = () => {
    setInputHtml('');
    setValidationResults(null);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            HTML Validator
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly check your HTML code for semantic errors, deprecated tags, and accessibility violations.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center gap-4">
          <button
            onClick={handleValidate}
            disabled={!inputHtml || isValidating}
            className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
          >
            <FileWarning size={18} />
            {isValidating ? 'Validating...' : 'Validate HTML'}
          </button>
          
          <button
            onClick={handleClear}
            className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
          >
            <RefreshCw size={18} />
            Clear
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input HTML</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputHtml.length} chars</span>
            </div>
            <textarea
              value={inputHtml}
              onChange={(e) => {
                setInputHtml(e.target.value);
                if (validationResults) setValidationResults(null);
              }}
              placeholder="<!DOCTYPE html>&#10;<html>&#10;<head>&#10;  <title>Test Page</title>&#10;</head>&#10;<body>&#10;  <h1>Hello World</h1>&#10;  <!-- Missing alt attribute below -->&#10;  <img src='logo.png' />&#10;  <center>Deprecated tag</center>&#10;</body>&#10;</html>"
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden leading-relaxed"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px] bg-dev-gray/5">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Validation Results</span>
            </div>
            <div className="flex-1 p-6 overflow-y-auto">
              {!validationResults ? (
                <div className="h-full flex items-center justify-center text-dev-gray italic">
                  Run validation to see errors and warnings...
                </div>
              ) : validationResults.valid ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 flex flex-col items-center justify-center text-center">
                  <CheckCircle2 size={48} className="text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold text-emerald-800 mb-2">Document is Valid!</h3>
                  <p className="text-emerald-600">No syntax errors, deprecated tags, or major accessibility violations were found.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-center gap-3">
                    <XCircle size={24} className="text-red-500 shrink-0" />
                    <div>
                      <h3 className="font-bold text-red-800">Validation Failed</h3>
                      <p className="text-sm text-red-600">Found {validationResults.errors.length} issue(s) with your HTML.</p>
                    </div>
                  </div>
                  
                  {validationResults.errors.map((error, idx) => (
                    <div key={idx} className={`p-4 rounded-xl border flex items-start gap-3 ${
                      error.type === 'error' ? 'bg-red-50/50 border-red-100 text-red-800' : 'bg-amber-50/50 border-amber-100 text-amber-800'
                    }`}>
                      {error.type === 'error' ? (
                        <XCircle size={18} className="shrink-0 mt-0.5 text-red-500" />
                      ) : (
                        <AlertTriangle size={18} className="shrink-0 mt-0.5 text-amber-500" />
                      )}
                      <span className="text-sm font-medium">{error.message}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
