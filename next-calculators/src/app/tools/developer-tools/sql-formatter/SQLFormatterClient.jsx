'use client';

import React, { useState } from 'react';
import { Copy, Download, RefreshCw, FileCode, Check } from 'lucide-react';

export default function SQLFormatterClient() {
  const [inputSql, setInputSql] = useState('');
  const [outputSql, setOutputSql] = useState('');
  const [isFormatting, setIsFormatting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [keywordCase, setKeywordCase] = useState('upper'); // 'upper', 'lower', 'preserve'

  const formatSQL = (sql, caseType) => {
    // Basic SQL Formatter (simplified for browser)
    // A robust formatter would use an AST, but this basic regex approach 
    // handles standard select/insert/update/delete formatting.
    const keywords = [
      'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'ORDER BY', 'GROUP BY', 
      'HAVING', 'LIMIT', 'OFFSET', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 
      'INNER JOIN', 'OUTER JOIN', 'ON', 'INSERT INTO', 'VALUES', 
      'UPDATE', 'SET', 'DELETE', 'CREATE TABLE', 'ALTER TABLE', 'DROP TABLE'
    ];

    let formatted = sql
      .replace(/\s+/g, ' ')
      .trim();

    // Standardize keyword casing and inject newlines
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'gi');
      formatted = formatted.replace(regex, (match) => {
        let replacement = match;
        if (caseType === 'upper') replacement = keyword.toUpperCase();
        if (caseType === 'lower') replacement = keyword.toLowerCase();
        
        // Add newlines before major clauses
        if (['SELECT', 'FROM', 'WHERE', 'ORDER BY', 'GROUP BY', 'HAVING', 'LIMIT', 'INSERT INTO', 'VALUES', 'UPDATE', 'SET', 'DELETE'].includes(keyword.toUpperCase())) {
          return `\n${replacement}`;
        } else if (keyword.toUpperCase().includes('JOIN')) {
          return `\n  ${replacement}`; // Indent joins
        }
        return replacement;
      });
    });

    // Format commas in SELECT/SET clauses
    formatted = formatted.replace(/,\s*/g, ',\n  ');
    
    // Format AND/OR in WHERE clauses
    formatted = formatted.replace(/\b(AND|OR)\b/gi, (match) => {
      let replacement = match;
      if (caseType === 'upper') replacement = match.toUpperCase();
      if (caseType === 'lower') replacement = match.toLowerCase();
      return `\n  ${replacement}`;
    });

    return formatted.trim();
  };

  const handleFormat = () => {
    if (!inputSql.trim()) return;
    
    setIsFormatting(true);
    setTimeout(() => {
      try {
        const formatted = formatSQL(inputSql, keywordCase);
        setOutputSql(formatted);
      } catch (error) {
        setOutputSql('-- Error formatting SQL\n' + inputSql);
      }
      setIsFormatting(false);
    }, 100);
  };

  const handleCopy = () => {
    if (!outputSql) return;
    navigator.clipboard.writeText(outputSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleClear = () => {
    setInputSql('');
    setOutputSql('');
  };

  const handleDownload = () => {
    if (!outputSql) return;
    const blob = new Blob([outputSql], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'formatted-query.sql';
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
            SQL Formatter
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Beautify messy SQL queries, standardize keyword casing, and improve database code readability.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <label htmlFor="case" className="text-sm font-semibold text-dev-dark">Keywords:</label>
              <select
                id="case"
                value={keywordCase}
                onChange={(e) => setKeywordCase(e.target.value)}
                className="bg-dev-white border border-dev-gray text-dev-dark text-sm rounded-lg focus:ring-dev-primary focus:border-dev-primary p-2"
              >
                <option value="upper">UPPERCASE</option>
                <option value="lower">lowercase</option>
                <option value="preserve">Preserve</option>
              </select>
            </div>
            
            <button
              onClick={handleFormat}
              disabled={!inputSql || isFormatting}
              className="flex items-center gap-2 bg-dev-primary hover:bg-dev-primaryDark text-dev-white px-6 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <FileCode size={18} />
              {isFormatting ? 'Formatting...' : 'Format SQL'}
            </button>
            
            <button
              onClick={handleClear}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors"
            >
              <RefreshCw size={18} />
              Clear
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              disabled={!outputSql}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50 ${
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
              disabled={!outputSql}
              className="flex items-center gap-2 bg-dev-gray/20 hover:bg-dev-gray/30 text-dev-dark px-4 py-2 rounded-xl font-bold transition-colors disabled:opacity-50"
            >
              <Download size={18} />
              Download
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-dev-gray/30">
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-gray uppercase tracking-wider">Input SQL</span>
              <span className="text-xs text-dev-gray bg-dev-gray/20 px-2 py-1 rounded-md">{inputSql.length} bytes</span>
            </div>
            <textarea
              value={inputSql}
              onChange={(e) => setInputSql(e.target.value)}
              placeholder="SELECT id, name, email FROM users WHERE status = 'active' AND role = 'admin' ORDER BY created_at DESC;"
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          <div className="flex flex-col h-[500px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Formatted Output</span>
            </div>
            <textarea
              value={outputSql}
              readOnly
              placeholder="Formatted SQL will appear here..."
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
