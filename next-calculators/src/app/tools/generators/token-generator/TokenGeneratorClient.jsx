"use client";
import React, { useState, useEffect } from 'react';
import { Lock, Copy, RefreshCw, ChevronRight, Check } from 'lucide-react';
import CryptoJS from 'crypto-js';
import TokenGeneratorSeo from '@/components/tools/TokenGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function TokenGeneratorClient() {
  const [secretKey, setSecretKey] = useState('your-256-bit-secret');
  const [payloadStr, setPayloadStr] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}');
  const [token, setToken] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState('');

  const base64url = (source) => {
    // encode in base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    // replace characters to make it url safe
    encodedSource = encodedSource.replace(/=+$/, '');
    encodedSource = encodedSource.replace(/\+/g, '-');
    encodedSource = encodedSource.replace(/\//g, '_');
    return encodedSource;
  };

  const generateJWT = () => {
    try {
      setError('');
      // 1. Header
      const header = { alg: 'HS256', typ: 'JWT' };
      const stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
      const encodedHeader = base64url(stringifiedHeader);

      // 2. Payload
      const parsedPayload = JSON.parse(payloadStr); // Validate JSON
      const stringifiedPayload = CryptoJS.enc.Utf8.parse(JSON.stringify(parsedPayload));
      const encodedPayload = base64url(stringifiedPayload);

      // 3. Signature
      const tokenString = `${encodedHeader}.${encodedPayload}`;
      const signature = CryptoJS.HmacSHA256(tokenString, secretKey);
      const encodedSignature = base64url(signature);

      // Final JWT
      setToken(`${tokenString}.${encodedSignature}`);
    } catch (err) {
      setError('Invalid JSON in payload. Please correct it.');
      setToken('');
    }
  };

  useEffect(() => {
    generateJWT();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secretKey, payloadStr]);

  const copyToClipboard = () => {
    if (token) {
      navigator.clipboard.writeText(token);
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
            <span className="text-gen-white font-medium">JWT Token Generator</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Lock size={40} />
            JWT Token Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Instantly sign and generate secure JSON Web Tokens (JWT) using HS256 algorithm. Perfect for testing OAuth flows and API authentication.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="space-y-6">
              
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Secret Key (HMAC SHA256)</label>
                <input
                  type="text"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-mono"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">JSON Payload Data</label>
                <textarea
                  value={payloadStr}
                  onChange={(e) => setPayloadStr(e.target.value)}
                  className={`w-full h-48 px-4 py-3 border rounded-xl outline-none bg-gen-bg/50 font-mono text-sm resize-y ${
                    error ? 'border-red-500 focus:ring-red-500' : 'border-gen-gray/30 focus:ring-gen-primary'
                  }`}
                />
                {error && <p className="text-red-500 text-sm font-bold mt-2">{error}</p>}
              </div>

            </div>

            <div className="flex flex-col">
              <label className="block text-sm font-bold text-gen-dark mb-2">Generated JWT Token</label>
              <div className="flex-1 bg-[#1e1e1e] border border-gen-gray/30 rounded-2xl p-6 flex flex-col relative group overflow-hidden">
                <div className="absolute -inset-1 bg-gradient-to-r from-gen-primary to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
                <div className="relative font-mono text-sm break-all leading-relaxed h-full overflow-y-auto custom-scrollbar">
                  {token ? (
                    <span>
                      <span className="text-red-400">{token.split('.')[0]}</span>
                      <span className="text-white">.</span>
                      <span className="text-purple-400">{token.split('.')[1]}</span>
                      <span className="text-white">.</span>
                      <span className="text-cyan-400">{token.split('.')[2]}</span>
                    </span>
                  ) : (
                    <span className="text-gen-gray/50">Awaiting valid payload...</span>
                  )}
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button
                  onClick={generateJWT}
                  className="bg-gen-bg text-gen-dark py-3 px-4 rounded-xl font-bold hover:bg-gen-gray/10 transition-all flex items-center justify-center gap-2 border border-gen-gray/20"
                >
                  <RefreshCw size={18} />
                  Force Refresh
                </button>
                <button
                  onClick={copyToClipboard}
                  disabled={!token}
                  className={`flex-1 py-3 px-6 rounded-xl font-bold flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed ${
                    copied 
                      ? 'bg-emerald-500 text-white' 
                      : 'bg-gen-primary text-white hover:bg-gen-primaryDark'
                  }`}
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied' : 'Copy JWT'}
                </button>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 text-blue-800 p-4 rounded-xl border border-blue-100 text-sm font-medium">
            <strong>Note:</strong> This token is signed symmetrically using the HMAC SHA256 (HS256) algorithm. 
            The Header is shown in <span className="text-red-500 font-bold">Red</span>, the Payload in <span className="text-purple-500 font-bold">Purple</span>, and the Signature in <span className="text-cyan-600 font-bold">Cyan</span>.
          </div>

        </div>

        <TokenGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
