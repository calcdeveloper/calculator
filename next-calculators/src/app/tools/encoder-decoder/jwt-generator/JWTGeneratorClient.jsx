"use client";

import { useState } from "react";
import { Copy, RefreshCw, Key, ChevronRight, FileText, Settings, Code, Trash2, AlertCircle } from "lucide-react";
import CryptoJS from "crypto-js";
import JWTGeneratorSeo from "@/components/tools/JWTGeneratorSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function JWTGeneratorClient() {
  const [header, setHeader] = useState('{\n  "alg": "HS256",\n  "typ": "JWT"\n}');
  const [payload, setPayload] = useState('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}');
  const [secretKey, setSecretKey] = useState("your-256-bit-secret");
  const [output, setOutput] = useState("");
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(false);

  const base64url = (source) => {
    // Encode in classical base64
    let encodedSource = CryptoJS.enc.Base64.stringify(source);
    // Remove padding equal characters
    encodedSource = encodedSource.replace(/=+$/, "");
    // Replace characters according to base64url specifications
    encodedSource = encodedSource.replace(/\+/g, "-");
    encodedSource = encodedSource.replace(/\//g, "_");
    return encodedSource;
  };

  const handleGenerate = () => {
    setError(null);
    setOutput("");

    try {
      if (!secretKey) {
        throw new Error("Secret key is required for signing the JWT.");
      }

      // Validate JSON
      JSON.parse(header);
      JSON.parse(payload);

      // Clean JSON strings
      const cleanedHeader = JSON.stringify(JSON.parse(header));
      const cleanedPayload = JSON.stringify(JSON.parse(payload));

      const encodedHeader = base64url(CryptoJS.enc.Utf8.parse(cleanedHeader));
      const encodedPayload = base64url(CryptoJS.enc.Utf8.parse(cleanedPayload));

      const tokenData = encodedHeader + "." + encodedPayload;

      const signature = CryptoJS.HmacSHA256(tokenData, secretKey);
      const encodedSignature = base64url(signature);

      const jwt = tokenData + "." + encodedSignature;
      setOutput(jwt);
    } catch (err) {
      if (err instanceof SyntaxError) {
        setError("Invalid JSON format in Header or Payload. Please ensure strictly valid JSON (use double quotes).");
      } else {
        setError(err.message || "Failed to generate JWT. Check your inputs.");
      }
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const clearAll = () => {
    setHeader('{\n  "alg": "HS256",\n  "typ": "JWT"\n}');
    setPayload('{\n  "sub": "1234567890",\n  "name": "John Doe",\n  "iat": 1516239022\n}');
    setSecretKey('');
    setOutput('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">JWT Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Key size={48} />
            JWT Generator
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly generate cryptographically signed JSON Web Tokens (HS256) for API testing and development entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-6">
              
              {/* Header Input */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 font-bold text-enc-dark">
                    <Settings size={18} className="text-enc-primary" /> JWT Header (JSON)
                  </label>
                  <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                    <Trash2 size={16} /> Reset
                  </button>
                </div>
                <textarea
                  value={header}
                  onChange={(e) => setHeader(e.target.value)}
                  placeholder='{"alg": "HS256", "typ": "JWT"}'
                  className="w-full h-[120px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm text-rose-600 focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              {/* Payload Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <FileText size={18} className="text-enc-primary" /> JWT Payload (JSON)
                </label>
                <textarea
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  placeholder='{"sub": "123", "role": "admin"}'
                  className="w-full h-[220px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm text-purple-700 focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none"
                />
              </div>

              {/* Secret Key Input */}
              <div className="space-y-2">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Key size={18} className="text-enc-primary" /> Secret Key (HS256)
                </label>
                <input
                  type="text"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                  placeholder="Enter your highly secure signing secret..."
                  className="w-full p-4 bg-enc-bg/50 border border-enc-gray rounded-xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all"
                />
              </div>

            </div>

            {/* Output Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Code size={20} className="text-enc-primary" /> Generated JWT String
                </label>
                <button 
                  disabled={!output}
                  onClick={copyToClipboard}
                  className="p-2 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg"
                  title="Copy to clipboard"
                >
                  {copySuccess ? <Copy className="text-green-500" size={20} /> : <Copy size={20} />}
                </button>
              </div>
              <textarea
                readOnly
                value={output}
                placeholder="Click Generate to construct your signed JWT..."
                className="w-full h-[530px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm break-all outline-none transition-all resize-none"
              />
            </div>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3 animate-pulse">
              <AlertCircle size={20} /> {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleGenerate}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark text-white py-3 px-12 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-enc-primary/30"
            >
              <RefreshCw size={20} />
              Generate JWT
            </button>
          </div>
        </div>
        <JWTGeneratorSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
