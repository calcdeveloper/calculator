"use client";

import { useState } from "react";
import { Copy, Download, RefreshCw, Link2 } from "lucide-react";

export default function URLEncoderClient() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState("encode");

  const handleEncode = () => {
    try {
      const encoded = encodeURIComponent(input);
      setOutput(encoded);
    } catch (error) {
      setOutput("Error encoding URL");
    }
  };

  const handleDecode = () => {
    try {
      const decoded = decodeURIComponent(input);
      setOutput(decoded);
    } catch (error) {
      setOutput("Error decoding URL");
    }
  };

  const handleConvert = () => {
    if (mode === "encode") {
      handleEncode();
    } else {
      handleDecode();
    }
  };

  const copyToClipboard = async () => {
    if (!output) return;
    await navigator.clipboard.writeText(output);
  };

  const downloadText = () => {
    if (!output) return;
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = mode === "encode" ? "encoded-url.txt" : "decoded-url.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const swap = () => {
    setInput(output);
    setOutput("");
    setMode(mode === "encode" ? "decode" : "encode");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Link2 className="text-blue-500" size={40} />
            URL Encoder/Decoder
          </h1>
          <p className="text-xl text-gray-600">Encode and decode URLs instantly</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={() => setMode("encode")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${mode === "encode"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Encode
            </button>
            <button
              onClick={() => setMode("decode")}
              className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${mode === "decode"
                  ? "bg-purple-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              Decode
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {mode === "encode" ? "Input URL" : "Encoded URL"}
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={mode === "encode" ? "https://example.com/path?query=value" : "https%3A%2F%2Fexample.com%2Fpath%3Fquery%3Dvalue"}
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {mode === "encode" ? "Encoded URL" : "Decoded URL"}
              </label>
              <textarea
                value={output}
                readOnly
                placeholder="Result will appear here..."
                className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 resize-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <button
              onClick={handleConvert}
              disabled={!input}
              className="w-full bg-green-600 text-white py-3 px-2 sm:px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <RefreshCw size={20} className="hidden sm:block" />
              {mode === "encode" ? "Encode" : "Decode"}
            </button>
            <button
              onClick={swap}
              disabled={!output}
              className="w-full bg-orange-600 text-white py-3 px-2 sm:px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              Swap
            </button>
            <button
              onClick={copyToClipboard}
              disabled={!output}
              className="w-full bg-blue-600 text-white py-3 px-2 sm:px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Copy size={20} className="hidden sm:block" />
              Copy
            </button>
            <button
              onClick={downloadText}
              disabled={!output}
              className="w-full bg-purple-600 text-white py-3 px-2 sm:px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Download size={20} />
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
