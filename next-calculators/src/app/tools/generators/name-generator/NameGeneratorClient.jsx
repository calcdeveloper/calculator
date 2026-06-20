"use client";
import React, { useState, useEffect } from 'react';
import { User, Copy, RefreshCw, ChevronRight, Check, List } from 'lucide-react';
import { faker } from '@faker-js/faker';
import NameGeneratorSeo from '@/components/tools/NameGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function NameGeneratorClient() {
  const [names, setNames] = useState([]);
  const [count, setCount] = useState(10);
  const [gender, setGender] = useState('any'); // 'any', 'female', 'male'
  const [includeMiddleName, setIncludeMiddleName] = useState(false);
  const [includePrefix, setIncludePrefix] = useState(false);
  const [includeSuffix, setIncludeSuffix] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateNames = () => {
    const newNames = [];
    
    // Faker uses 'female' and 'male' for gender parameters
    const fakerGender = gender === 'any' ? undefined : gender;

    for (let i = 0; i < count; i++) {
      let fullName = '';
      
      if (includePrefix) {
        fullName += faker.person.prefix(fakerGender) + ' ';
      }
      
      fullName += faker.person.firstName(fakerGender) + ' ';
      
      if (includeMiddleName) {
        fullName += faker.person.middleName(fakerGender) + ' ';
      }
      
      fullName += faker.person.lastName(fakerGender);
      
      if (includeSuffix) {
        fullName += ' ' + faker.person.suffix();
      }
      
      newNames.push(fullName);
    }
    
    setNames(newNames);
  };

  useEffect(() => {
    generateNames();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, gender, includeMiddleName, includePrefix, includeSuffix]);

  const copyToClipboard = () => {
    if (names.length > 0) {
      navigator.clipboard.writeText(names.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark">
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Name Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <User size={40} />
            Random Name Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly generate thousands of realistic, culturally accurate human names for writing, character design, and database testing.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Quantity</label>
                <input
                  type="number"
                  min="1"
                  max="1000"
                  value={count}
                  onChange={(e) => setCount(Math.max(1, Math.min(1000, Number(e.target.value))))}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Gender Identity</label>
                <div className="flex bg-gen-bg/80 border border-gen-gray/30 rounded-xl overflow-hidden p-1">
                  {['any', 'female', 'male'].map((g) => (
                    <button
                      key={g}
                      onClick={() => setGender(g)}
                      className={`flex-1 py-2 text-sm font-bold capitalize rounded-lg transition-all ${
                        gender === g 
                          ? 'bg-gen-white text-gen-primary shadow-sm border border-gen-gray/10' 
                          : 'text-gen-gray hover:text-gen-dark hover:bg-gen-gray/5'
                      }`}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="space-y-4 pt-2">
              <label className="block text-sm font-bold text-gen-dark mb-2">Formatting Options</label>
              
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includePrefix}
                  onChange={(e) => setIncludePrefix(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-medium">Include Prefix (Mr., Dr., Mrs.)</span>
              </label>
              
              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeMiddleName}
                  onChange={(e) => setIncludeMiddleName(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-medium">Include Middle Name</span>
              </label>

              <label className="flex items-center gap-3 p-3 rounded-xl hover:bg-gen-bg/50 cursor-pointer transition-colors border border-transparent hover:border-gen-gray/10">
                <input
                  type="checkbox"
                  checked={includeSuffix}
                  onChange={(e) => setIncludeSuffix(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <span className="text-gen-dark font-medium">Include Suffix (Jr., MD, PhD)</span>
              </label>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={generateNames}
              className="flex-1 bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99]"
            >
              <RefreshCw size={20} />
              Regenerate
            </button>
            <button
              onClick={copyToClipboard}
              className={`px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all ${
                copied 
                  ? 'bg-emerald-500 text-white' 
                  : 'bg-gen-dark text-gen-white hover:bg-black'
              }`}
            >
              {copied ? <Check size={20} /> : <Copy size={20} />}
              {copied ? 'Copied' : 'Copy All'}
            </button>
          </div>

          <div className="bg-gen-bg border-2 border-gen-gray/20 rounded-2xl overflow-hidden flex flex-col h-[400px]">
            <div className="bg-gen-gray/10 px-4 py-3 border-b border-gen-gray/20 flex justify-between items-center">
              <span className="font-bold text-sm text-gen-dark flex items-center gap-2">
                <List size={16} /> Generated Output
              </span>
              <span className="text-xs font-bold bg-gen-primary/10 text-gen-primary px-2 py-1 rounded-md">
                {names.length} Names
              </span>
            </div>
            <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-2">
                {names.map((name, idx) => (
                  <li key={idx} className="font-medium text-gen-dark text-lg px-2 py-1 hover:bg-gen-primary/5 rounded">
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <NameGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
