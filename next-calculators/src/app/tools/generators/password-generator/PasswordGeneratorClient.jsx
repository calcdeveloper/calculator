"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Key, Copy, RefreshCw, Shield, ChevronRight, Check, AlertTriangle } from 'lucide-react';
import PasswordGeneratorSeo from '@/components/tools/PasswordGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function PasswordGeneratorClient() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(16);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [excludeAmbiguous, setExcludeAmbiguous] = useState(false);
  const [copied, setCopied] = useState(false);
  const [strength, setStrength] = useState({ score: 0, label: 'Weak', color: 'bg-red-500' });

  const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
  const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const NUMBERS = '0123456789';
  const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';
  const AMBIGUOUS = 'il1Lo0O';

  const generatePassword = useCallback(() => {
    let chars = '';
    if (includeLowercase) chars += LOWERCASE;
    if (includeUppercase) chars += UPPERCASE;
    if (includeNumbers) chars += NUMBERS;
    if (includeSymbols) chars += SYMBOLS;

    if (excludeAmbiguous) {
      chars = chars.split('').filter(c => !AMBIGUOUS.includes(c)).join('');
    }

    if (!chars) {
      setPassword('Select at least one option');
      return;
    }

    let generatedPassword = '';
    if (typeof window !== 'undefined' && window.crypto) {
      const randomValues = new Uint32Array(length);
      window.crypto.getRandomValues(randomValues);
      for (let i = 0; i < length; i++) {
        generatedPassword += chars[randomValues[i] % chars.length];
      }
    } else {
      for (let i = 0; i < length; i++) {
        generatedPassword += chars[Math.floor(Math.random() * chars.length)];
      }
    }

    setPassword(generatedPassword);
    calculateStrength(generatedPassword);
  }, [length, includeLowercase, includeUppercase, includeNumbers, includeSymbols, excludeAmbiguous]);

  useEffect(() => {
    generatePassword();
  }, [generatePassword]);

  const calculateStrength = (pwd) => {
    let score = 0;
    if (pwd.length > 8) score += 1;
    if (pwd.length >= 12) score += 1;
    if (pwd.length >= 16) score += 1;
    if (/[A-Z]/.test(pwd)) score += 1;
    if (/[a-z]/.test(pwd)) score += 1;
    if (/[0-9]/.test(pwd)) score += 1;
    if (/[^A-Za-z0-9]/.test(pwd)) score += 1;

    let label = 'Weak';
    let color = 'bg-red-500';

    if (score >= 6) {
      label = 'Very Strong';
      color = 'bg-emerald-500';
    } else if (score >= 4) {
      label = 'Strong';
      color = 'bg-blue-500';
    } else if (score >= 3) {
      label = 'Medium';
      color = 'bg-amber-500';
    }

    setStrength({ score, label, color });
  };

  const copyToClipboard = () => {
    if (password && password !== 'Select at least one option') {
      navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Password Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Key size={40} />
            Secure Password Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Create ultra-secure, cryptographically random passwords to protect your accounts and sensitive data from brute-force attacks.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <Shield size={16} />
              100% Client-Side
            </div>
            <div className="flex items-center gap-2 bg-gen-white/20 text-gen-white px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-gen-white/30">
              <RefreshCw size={16} />
              No Tracking
            </div>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        {/* Interactive Application Block */}
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          {/* Password Output */}
          <div className="relative mb-8 group">
            <div className="flex bg-gen-bg/80 border-2 border-gen-primary/20 rounded-2xl overflow-hidden focus-within:border-gen-primary transition-colors">
              <input
                type="text"
                value={password}
                readOnly
                className="w-full px-6 py-5 bg-transparent font-mono text-xl sm:text-2xl outline-none text-gen-dark"
                placeholder="Generating..."
              />
              <button
                onClick={generatePassword}
                className="px-5 text-gen-primary hover:text-gen-primaryDark hover:bg-gen-primary/5 transition-colors flex items-center justify-center border-l border-gen-primary/20"
                title="Generate New Password"
              >
                <RefreshCw size={24} />
              </button>
            </div>
            
            <button
              onClick={copyToClipboard}
              className={`absolute -bottom-4 right-6 px-6 py-2 rounded-xl font-bold flex items-center gap-2 shadow-lg transition-all ${
                copied 
                  ? 'bg-emerald-500 text-white translate-y-1' 
                  : 'bg-gen-dark text-gen-white hover:bg-black hover:-translate-y-1'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>

          {/* Strength Meter */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-bold text-gen-dark uppercase tracking-wider">Password Strength</span>
              <span className={`text-sm font-bold px-3 py-1 rounded-full text-white ${strength.color}`}>
                {strength.label}
              </span>
            </div>
            <div className="h-2 w-full bg-gen-gray/20 rounded-full overflow-hidden flex">
              {[1, 2, 3, 4, 5, 6].map((segment) => (
                <div 
                  key={segment}
                  className={`h-full flex-1 border-r border-white/20 transition-all duration-500 ${
                    segment <= strength.score ? strength.color : 'bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Length Control */}
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <label className="text-base font-bold text-gen-dark">Password Length</label>
                <span className="text-2xl font-black text-gen-primary">{length}</span>
              </div>
              <input
                type="range"
                min="8"
                max="128"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-gen-gray/20 rounded-lg appearance-none cursor-pointer accent-gen-primary"
              />
              <div className="flex justify-between text-xs text-gen-gray font-semibold">
                <span>8</span>
                <span>128</span>
              </div>
            </div>

            {/* Checkbox Options */}
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeUppercase}
                  onChange={(e) => setIncludeUppercase(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-semibold">Uppercase Letters (A-Z)</span>
              </label>
              
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeLowercase}
                  onChange={(e) => setIncludeLowercase(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-semibold">Lowercase Letters (a-z)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeNumbers}
                  onChange={(e) => setIncludeNumbers(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-semibold">Numbers (0-9)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeSymbols}
                  onChange={(e) => setIncludeSymbols(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-semibold">Symbols (!@#$...)</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={excludeAmbiguous}
                  onChange={(e) => setExcludeAmbiguous(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-semibold">Exclude Ambiguous (il1Lo0O)</span>
              </label>
            </div>
          </div>
          
          {strength.score < 3 && (
            <div className="mt-8 p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3 text-red-600">
              <AlertTriangle className="shrink-0 mt-0.5" size={20} />
              <p className="text-sm font-medium leading-relaxed">
                Warning: Passwords under 12 characters or lacking a mix of symbols, numbers, and cases are highly vulnerable to modern brute-force hardware cracking.
              </p>
            </div>
          )}

        </div>

        <PasswordGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
