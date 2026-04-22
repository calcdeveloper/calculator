"use client";
import React, { useState, useEffect } from 'react';
import { Hash, Copy, RefreshCw, Shield } from 'lucide-react';

export default function UUIDGeneratorClient() {
  const [uuids, setUuids] = useState(['']);
  const [count, setCount] = useState(1);
  const [includeHyphens, setIncludeHyphens] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateUUID = () => {
    // Use crypto API for secure random UUID generation
    if (typeof window !== 'undefined' && window.crypto) {
      const randomBytes = new Uint8Array(16);
      window.crypto.getRandomValues(randomBytes);
      
      // Set version (4) and variant bits
      randomBytes[6] = (randomBytes[6] & 0x0f) | 0x40;
      randomBytes[8] = (randomBytes[8] & 0x3f) | 0x80;
      
      let uuid = '';
      for (let i = 0; i < 16; i++) {
        const byte = randomBytes[i].toString(16).padStart(2, '0');
        uuid += byte;
        if (i === 3 || i === 5 || i === 7 || i === 9) {
          if (includeHyphens) uuid += '-';
        }
      }
      
      return uppercase ? uuid.toUpperCase() : uuid;
    }
    return 'UUID generation not supported in this browser';
  };

  const generateUUIDs = () => {
    const newUuids = [];
    for (let i = 0; i < count; i++) {
      newUuids.push(generateUUID());
    }
    setUuids(newUuids);
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyAllUUIDs = () => {
    const allUuids = uuids.join('\n');
    copyToClipboard(allUuids);
  };

  useEffect(() => {
    generateUUIDs();
  }, [count, includeHyphens, uppercase]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with SEO content */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Free UUID Generator Online
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Generate cryptographically secure UUID v4 identifiers instantly. Perfect for developers, 
            database keys, and unique ID requirements. No registration required.
          </p>
          
          {/* SEO-focused feature highlights */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              <Shield className="w-4 h-4" />
              Cryptographically Secure
            </div>
            <div className="flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              <Hash className="w-4 h-4" />
              UUID v4 Standard
            </div>
            <div className="flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              <RefreshCw className="w-4 h-4" />
              Bulk Generation
            </div>
          </div>
        </div>

        {/* Main Tool */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="space-y-6">
            {/* Options */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Number of UUIDs
                </label>
                <select
                  value={count}
                  onChange={(e) => setCount(Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  {[1, 5, 10, 25, 50, 100].map(n => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
              </div>
              
              <div className="flex items-center space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="hyphens"
                  checked={includeHyphens}
                  onChange={(e) => setIncludeHyphens(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="hyphens" className="text-sm font-medium text-gray-700">
                  Include Hyphens
                </label>
              </div>
              
              <div className="flex items-center space-x-3 pt-6">
                <input
                  type="checkbox"
                  id="uppercase"
                  checked={uppercase}
                  onChange={(e) => setUppercase(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded"
                />
                <label htmlFor="uppercase" className="text-sm font-medium text-gray-700">
                  Uppercase
                </label>
              </div>
            </div>
            
            {/* Generate Button */}
            <button
              onClick={generateUUIDs}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Generate UUID{count > 1 ? 's' : ''}
            </button>
            
            {/* Generated UUIDs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700">
                  Generated UUID{count > 1 ? 's' : ''}
                </label>
                {count > 1 && (
                  <button
                    onClick={copyAllUUIDs}
                    className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Copy All
                  </button>
                )}
              </div>
              <div className="space-y-2">
                {uuids.map((uuid, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={uuid}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 font-mono text-sm"
                    />
                    <button
                      onClick={() => copyToClipboard(uuid)}
                      className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                    >
                      {copied ? 'Copied!' : <Copy className="w-4 h-4" />}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEO Content Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About UUID Generator</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 mb-4">
              Our free UUID generator creates unique identifiers using the UUID v4 standard, 
              which provides 122 bits of randomness making collisions virtually impossible. 
              This tool is perfect for developers who need unique IDs for databases, 
              session tokens, or any application requiring unique identifiers.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Use Our UUID Generator?</h3>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li><strong>Cryptographically Secure:</strong> Uses Web Crypto API for true randomness</li>
              <li><strong>No Registration:</strong> Generate UUIDs instantly without signing up</li>
              <li><strong>Bulk Generation:</strong> Create up to 100 UUIDs at once</li>
              <li><strong>Custom Formatting:</strong> Choose hyphens and uppercase options</li>
              <li><strong>Free Forever:</strong> No limits or hidden charges</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Common Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Database Primary Keys</h4>
                <p className="text-gray-600 text-sm">Generate unique IDs for database records</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Session Tokens</h4>
                <p className="text-gray-600 text-sm">Create secure session identifiers</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">API Keys</h4>
                <p className="text-gray-600 text-sm">Generate unique API authentication keys</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">File Names</h4>
                <p className="text-gray-600 text-sm">Create unique file identifiers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
