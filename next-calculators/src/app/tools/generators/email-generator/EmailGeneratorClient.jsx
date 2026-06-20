"use client";
import React, { useState, useEffect } from 'react';
import { Mail, Copy, RefreshCw, ChevronRight, Check, List } from 'lucide-react';
import { faker } from '@faker-js/faker';
import EmailGeneratorSeo from '@/components/tools/EmailGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function EmailGeneratorClient() {
  const [emails, setEmails] = useState([]);
  const [count, setCount] = useState(10);
  const [domainType, setDomainType] = useState('random'); // 'random', 'example', 'custom'
  const [customDomain, setCustomDomain] = useState('company.com');
  const [formatType, setFormatType] = useState('name'); // 'name', 'random', 'initial'
  const [copied, setCopied] = useState(false);

  const generateEmails = () => {
    const newEmails = [];
    
    for (let i = 0; i < count; i++) {
      const firstName = faker.person.firstName().toLowerCase().replace(/[^a-z0-9]/g, '');
      const lastName = faker.person.lastName().toLowerCase().replace(/[^a-z0-9]/g, '');
      
      let prefix = '';
      if (formatType === 'name') {
        // e.g. john.doe, johndoe, j.doe
        const roll = Math.random();
        if (roll < 0.4) prefix = `${firstName}.${lastName}`;
        else if (roll < 0.7) prefix = `${firstName}${lastName}`;
        else prefix = `${firstName}.${lastName}${Math.floor(Math.random() * 99)}`;
      } else if (formatType === 'initial') {
        prefix = `${firstName.charAt(0)}${lastName}`;
      } else {
        // random alphanumeric
        prefix = faker.string.alphanumeric({ length: { min: 6, max: 12 } });
      }

      let domain = '';
      if (domainType === 'example') {
        domain = 'example.com';
      } else if (domainType === 'custom') {
        domain = customDomain.replace(/[^a-zA-Z0-9.-]/g, '');
        if (!domain) domain = 'invalid.domain';
      } else {
        // completely random realistic domains using faker
        domain = faker.internet.domainName();
      }

      newEmails.push(`${prefix}@${domain}`);
    }
    
    setEmails(newEmails);
  };

  useEffect(() => {
    generateEmails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count, domainType, customDomain, formatType]);

  const copyToClipboard = () => {
    if (emails.length > 0) {
      navigator.clipboard.writeText(emails.join('\n'));
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
            <span className="text-gen-white font-medium">Email Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Mail size={40} />
            Random Email Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly synthesize massive lists of highly realistic dummy email addresses for testing registration forms and database logic.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl p-6 md:p-10 mb-8 border border-gen-gray/20">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Quantity to Generate</label>
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
                <label className="block text-sm font-bold text-gen-dark mb-2">Username Format</label>
                <select
                  value={formatType}
                  onChange={(e) => setFormatType(e.target.value)}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  <option value="name">First & Last Name (john.doe)</option>
                  <option value="initial">First Initial & Last Name (jdoe)</option>
                  <option value="random">Random Alphanumeric (a7x9b2)</option>
                </select>
              </div>

            </div>

            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Domain Settings</label>
                <select
                  value={domainType}
                  onChange={(e) => setDomainType(e.target.value)}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  <option value="random">Completely Random Realistic Domains</option>
                  <option value="example">Strictly @example.com (RFC 2606)</option>
                  <option value="custom">Custom Specified Domain</option>
                </select>
              </div>

              {domainType === 'custom' && (
                <div className="animate-in fade-in slide-in-from-top-2">
                  <label className="block text-sm font-bold text-gen-dark mb-2">Custom Domain Name</label>
                  <div className="flex bg-gen-bg/80 border border-gen-gray/30 rounded-xl overflow-hidden focus-within:border-gen-primary transition-colors px-4 py-3">
                    <span className="text-gen-gray font-bold mr-1">@</span>
                    <input
                      type="text"
                      value={customDomain}
                      onChange={(e) => setCustomDomain(e.target.value)}
                      className="w-full bg-transparent font-semibold outline-none text-gen-dark"
                      placeholder="company.com"
                    />
                  </div>
                </div>
              )}

            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={generateEmails}
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
                {emails.length} Emails
              </span>
            </div>
            <div className="p-4 overflow-y-auto flex-1 custom-scrollbar">
              <ul className="space-y-2">
                {emails.map((email, idx) => (
                  <li key={idx} className="font-mono text-gen-dark text-base px-2 py-1 hover:bg-gen-primary/5 rounded selection:bg-gen-primary/20">
                    {email}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <EmailGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
