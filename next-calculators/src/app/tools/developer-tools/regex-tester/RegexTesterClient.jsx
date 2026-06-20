'use client';

import React, { useState, useEffect } from 'react';
import { Play, Copy, Check, Info } from 'lucide-react';

export default function RegexTesterClient() {
  const [regexStr, setRegexStr] = useState('');
  const [flags, setFlags] = useState('gm');
  const [testString, setTestString] = useState('');
  const [matches, setMatches] = useState([]);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!regexStr) {
      setMatches([]);
      setError(null);
      return;
    }

    try {
      const regex = new RegExp(regexStr, flags);
      const str = testString;
      
      let tempMatches = [];
      let match;
      
      if (regex.global) {
        // Prevent infinite loops if regex matches empty string
        if (regexStr === '' || regexStr === '(?:)') {
           setError("Warning: Regex matches empty strings infinitely.");
           setMatches([]);
           return;
        }

        while ((match = regex.exec(str)) !== null) {
          tempMatches.push({
            index: match.index,
            0: match[0],
            groups: match.slice(1)
          });
          // Prevent infinite loops for zero-width matches
          if (match.index === regex.lastIndex) {
            regex.lastIndex++;
          }
        }
      } else {
        match = regex.exec(str);
        if (match) {
          tempMatches.push({
            index: match.index,
            0: match[0],
            groups: match.slice(1)
          });
        }
      }

      setMatches(tempMatches);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMatches([]);
    }
  }, [regexStr, flags, testString]);

  const toggleFlag = (flag) => {
    if (flags.includes(flag)) {
      setFlags(flags.replace(flag, ''));
    } else {
      setFlags(flags + flag);
    }
  };

  const handleCopy = () => {
    const code = `/${regexStr}/${flags}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <header className="bg-linear-to-r from-dev-primary to-dev-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dev-white mb-6 tracking-tight">
            Regex Tester
        
          </h1>
          <p className="text-xl text-dev-white/90 max-w-2xl mx-auto leading-relaxed">
            Write, test, and debug Regular Expressions in real-time with visual match highlighting.
        
          </p>
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">

      <div className="bg-dev-white rounded-3xl shadow-2xl border border-dev-gray overflow-hidden p-6 md:p-8">
        {/* Regex Input Section */}
        <div className="p-6 bg-dev-gray/10 border-b border-dev-gray/30">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex items-center bg-dev-white border border-dev-gray rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-dev-primary focus-within:border-dev-primary transition-all">
              <span className="px-4 text-dev-gray font-bold text-xl border-r border-dev-gray/30 bg-dev-gray/5">/</span>
              <input
                type="text"
                value={regexStr}
                onChange={(e) => setRegexStr(e.target.value)}
                placeholder="Enter regular expression (e.g., \b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b)"
                className="flex-1 px-4 py-3 font-mono text-dev-dark focus:outline-hidden w-full"
                spellCheck="false"
              />
              <span className="px-4 text-dev-gray font-bold text-xl border-l border-dev-gray/30 bg-dev-gray/5">/</span>
              <input
                type="text"
                value={flags}
                onChange={(e) => setFlags(e.target.value.replace(/[^gimsuy]/g, ''))}
                className="w-20 px-2 py-3 font-mono text-dev-primary font-bold focus:outline-hidden"
                placeholder="gm"
                maxLength={6}
              />
            </div>
            
            <button
              onClick={handleCopy}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-colors shrink-0 ${
                copied 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-dev-primary hover:bg-dev-primaryDark text-dev-white'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied' : 'Copy Regex'}
            </button>
          </div>

          {/* Quick Flags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {[
              { f: 'g', desc: 'Global' },
              { f: 'i', desc: 'Case Insensitive' },
              { f: 'm', desc: 'Multiline' },
              { f: 's', desc: 'Dotall' },
            ].map(flag => (
              <button
                key={flag.f}
                onClick={() => toggleFlag(flag.f)}
                className={`px-3 py-1 rounded-full text-xs font-bold border transition-colors ${
                  flags.includes(flag.f)
                    ? 'bg-dev-primary text-dev-white border-dev-primary'
                    : 'bg-dev-white text-dev-gray border-dev-gray hover:border-dev-primary hover:text-dev-primary'
                }`}
              >
                /{flag.f} {flag.desc}
              </button>
            ))}
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg text-sm font-mono flex items-center gap-2">
              <Info size={16} />
              {error}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-dev-gray/30">
          {/* Test String Input */}
          <div className="flex flex-col h-[400px]">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30">
              <span className="text-sm font-bold text-dev-dark uppercase tracking-wider">Test String</span>
            </div>
            <textarea
              value={testString}
              onChange={(e) => setTestString(e.target.value)}
              placeholder="Paste the text you want to test your regular expression against here..."
              className="flex-1 w-full p-4 bg-transparent text-dev-dark font-mono text-sm resize-none focus:outline-hidden"
              spellCheck="false"
            />
          </div>
          
          {/* Match Results */}
          <div className="flex flex-col h-[400px] bg-dev-gray/5">
            <div className="bg-dev-gray/5 py-2 px-4 border-b border-dev-gray/30 flex justify-between items-center">
              <span className="text-sm font-bold text-dev-primary uppercase tracking-wider">Match Results</span>
              <span className="text-xs font-bold bg-dev-primary/10 text-dev-primary px-3 py-1 rounded-full">
                {matches.length} Matches
              </span>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {!regexStr ? (
                <div className="h-full flex items-center justify-center text-dev-gray text-sm italic">
                  Enter a regular expression to see matches.
                </div>
              ) : matches.length === 0 && !error ? (
                <div className="h-full flex items-center justify-center text-dev-gray text-sm italic">
                  No matches found.
                </div>
              ) : (
                matches.map((match, i) => (
                  <div key={i} className="bg-dev-white border border-dev-gray/50 rounded-lg p-3 shadow-xs">
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold text-dev-gray uppercase">Match {i + 1}</span>
                      <span className="text-xs text-dev-gray font-mono">Index: {match.index}</span>
                    </div>
                    <div className="font-mono text-sm text-dev-dark bg-dev-gray/10 p-2 rounded break-all">
                      {match[0]}
                    </div>
                    {match.groups && match.groups.length > 0 && match.groups.some(g => g !== undefined) && (
                      <div className="mt-3 space-y-1">
                        <span className="text-xs font-bold text-dev-gray uppercase">Capture Groups:</span>
                        {match.groups.map((group, j) => group !== undefined && (
                          <div key={j} className="flex gap-2 font-mono text-xs">
                            <span className="text-dev-primary">Group {j + 1}:</span>
                            <span className="text-dev-dark break-all">{group}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
