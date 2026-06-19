"use client";

import { useState } from "react";
import { Copy, RefreshCw, Key, ChevronRight, Code, Trash2, AlertCircle } from "lucide-react";
import JWTDecoderSeo from "@/components/tools/JWTDecoderSeo";
import RelatedEncoderDecoderTools from "@/components/tools/RelatedEncoderDecoderTools";

export default function JWTDecoderClient() {
  const [input, setInput] = useState("");
  const [header, setHeader] = useState("");
  const [payload, setPayload] = useState("");
  const [error, setError] = useState(null);
  const [copySuccessPayload, setCopySuccessPayload] = useState(false);

  const handleDecode = () => {
    if (!input.trim()) return;
    setError(null);
    setHeader("");
    setPayload("");

    try {
      const parts = input.split(".");
      if (parts.length !== 3) {
        throw new Error("Invalid JWT format. A standard JWT must have exactly 3 parts separated by dots.");
      }

      // Base64Url decode
      const decodeBase64Url = (str) => {
        str = str.replace(/-/g, "+").replace(/_/g, "/");
        const pad = str.length % 4;
        if (pad) {
          if (pad === 1) throw new Error("Invalid Base64 string length");
          str += new Array(5 - pad).join("=");
        }
        return decodeURIComponent(
          atob(str)
            .split("")
            .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
            .join("")
        );
      };

      const decodedHeader = decodeBase64Url(parts[0]);
      const decodedPayload = decodeBase64Url(parts[1]);

      // Format JSON nicely
      setHeader(JSON.stringify(JSON.parse(decodedHeader), null, 2));
      
      const parsedPayload = JSON.parse(decodedPayload);
      
      // Attempt to convert known timestamps to readable dates natively in the JSON view
      // This is helpful but we'll just format the JSON cleanly for the user.
      setPayload(JSON.stringify(parsedPayload, null, 2));

    } catch (err) {
      setError(err.message || "Failed to decode JWT. Please ensure the token is a valid JSON Web Token.");
    }
  };

  const copyToClipboard = async (text, setter) => {
    if (!text) return;
    await navigator.clipboard.writeText(text);
    setter(true);
    setTimeout(() => setter(false), 2000);
  };

  const clearAll = () => {
    setInput('');
    setHeader('');
    setPayload('');
    setError(null);
  };

  return (
    <div className="min-h-screen bg-enc-bg font-sans text-enc-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-enc-primary to-enc-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-enc-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Encoder/Decoder</span> <ChevronRight size={14} /> <span className="text-white font-medium">JWT Decoder</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-enc-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Key size={48} />
            JWT Decoder
          </h1>
          <p className="text-xl text-enc-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly decode JSON Web Tokens to securely inspect header algorithms and payload claims. Processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-enc-white rounded-3xl shadow-2xl border border-enc-gray overflow-hidden p-6 md:p-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Side */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 font-bold text-enc-dark">
                  <Key size={20} className="text-enc-primary" /> JWT Token Input
                </label>
                <button onClick={clearAll} className="text-enc-gray hover:text-red-500 transition-colors flex items-center gap-1 text-sm font-medium">
                  <Trash2 size={16} /> Clear
                </button>
              </div>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Paste your JWT string here (e.g., eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...)"
                className="w-full h-[500px] p-4 bg-enc-bg/50 border border-enc-gray rounded-2xl font-mono text-sm focus:ring-2 focus:ring-enc-primary focus:bg-white outline-none transition-all resize-none break-all"
              />
            </div>

            {/* Output Side */}
            <div className="space-y-6">
              
              {/* Header Output */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 font-bold text-enc-dark">
                    <Code size={18} className="text-enc-primary" /> Decoded Header
                  </label>
                </div>
                <textarea
                  readOnly
                  value={header}
                  placeholder="Decoded JSON header..."
                  className="w-full h-[120px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm text-rose-600 outline-none transition-all resize-none"
                />
              </div>

              {/* Payload Output */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 font-bold text-enc-dark">
                    <Code size={18} className="text-enc-primary" /> Decoded Payload (Data)
                  </label>
                  <button 
                    disabled={!payload}
                    onClick={() => copyToClipboard(payload, setCopySuccessPayload)}
                    className="p-1.5 text-enc-gray hover:text-enc-primary disabled:opacity-30 transition-all rounded-lg hover:bg-enc-bg"
                    title="Copy payload to clipboard"
                  >
                    {copySuccessPayload ? <Copy className="text-green-500" size={18} /> : <Copy size={18} />}
                  </button>
                </div>
                <textarea
                  readOnly
                  value={payload}
                  placeholder="Decoded JSON payload..."
                  className="w-full h-[290px] p-4 bg-enc-bg/30 border border-enc-gray rounded-2xl font-mono text-sm text-purple-700 outline-none transition-all resize-none"
                />
              </div>

            </div>
          </div>

          {error && (
            <div className="mt-6 p-4 bg-red-50 text-red-700 rounded-xl border border-red-100 flex items-center gap-3 animate-pulse">
              <AlertCircle size={20} /> {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <button
              onClick={handleDecode}
              disabled={!input}
              className="w-full md:w-auto bg-enc-primary hover:bg-enc-primaryDark text-white py-3 px-12 rounded-xl font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-enc-primary/30"
            >
              <RefreshCw size={20} />
              Decode JWT
            </button>
          </div>
        </div>
        <JWTDecoderSeo />
        <RelatedEncoderDecoderTools />
      </main>
    </div>
  );
}
