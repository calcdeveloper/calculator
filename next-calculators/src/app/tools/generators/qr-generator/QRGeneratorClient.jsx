"use client";

import { useState, useRef } from "react";
import { Download, Copy, RefreshCw, QrCode, ChevronRight } from "lucide-react";
import QRGeneratorSeo from "@/components/tools/QRGeneratorSeo";
import RelatedGeneratorsTools from "@/components/tools/RelatedGeneratorsTools";

export default function QRGeneratorClient() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const generateQRCode = async () => {
    if (!text.trim()) return;

    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}&color=${foregroundColor.replace("#", "")}&bgcolor=${backgroundColor.replace("#", "")}`
      );
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setQrCode(url);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const downloadQRCode = () => {
    if (!qrCode) return;
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qrcode.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyQRCode = async () => {
    if (!qrCode) return;
    try {
      const response = await fetch(qrCode);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({ "image/png": blob })
      ]);
    } catch (error) {
      console.error("Error copying QR code:", error);
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
            <span className="text-gen-white font-medium">QR Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <QrCode size={40} />
            Free QR Code Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-2xl mx-auto leading-relaxed">
            Create custom QR codes online. Fast, unwatermarked, and free to use.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        
        {/* Input Interface */}
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray/20 p-6 md:p-10 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gen-dark mb-2">
              Enter URL or Plain Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://yourdomain.com or type specific parameters here..."
              className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary focus:border-transparent resize-none font-sans text-base text-gen-dark outline-none bg-gen-bg/50"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-semibold text-gen-dark mb-2">
                Foreground Color
              </label>
              <div className="flex items-center gap-3 border border-gen-gray/30 rounded-xl p-2 bg-gen-bg/50">
                <input
                  type="color"
                  value={foregroundColor}
                  onChange={(e) => setForegroundColor(e.target.value)}
                  className="w-12 h-10 rounded-md cursor-pointer border-0 bg-transparent"
                />
                <span className="text-sm font-mono uppercase text-gen-gray font-semibold">{foregroundColor}</span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gen-dark mb-2">
                Background Color
              </label>
              <div className="flex items-center gap-3 border border-gen-gray/30 rounded-xl p-2 bg-gen-bg/50">
                <input
                  type="color"
                  value={backgroundColor}
                  onChange={(e) => setBackgroundColor(e.target.value)}
                  className="w-12 h-10 rounded-md cursor-pointer border-0 bg-transparent"
                />
                <span className="text-sm font-mono uppercase text-gen-gray font-semibold">{backgroundColor}</span>
              </div>
            </div>
          </div>

          <button
            onClick={generateQRCode}
            disabled={!text.trim()}
            className="w-full bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark active:scale-[0.99] transition-all flex items-center justify-center gap-3 shadow-xl shadow-gen-primary/30 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
          >
            <QrCode size={24} />
            Generate QR Code
          </button>
        </div>

        {/* Preview Panel */}
        {qrCode && (
          <div className="bg-gen-white rounded-3xl shadow-2xl p-6 md:p-10 mb-12 border border-gen-gray/20 animate-fadeIn">
            <div className="flex flex-col items-center gap-8">
              <div className="p-6 bg-gen-bg/50 rounded-2xl border border-gen-gray/20 shadow-inner">
                <img
                  src={qrCode}
                  alt="Customized Optical Matrix Code Generated Asset"
                  className="w-64 h-64 object-contain transition-transform hover:scale-105"
                />
              </div>
              <div className="flex flex-wrap gap-4 justify-center w-full">
                <button
                  onClick={downloadQRCode}
                  className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-gen-secondary text-gen-white px-6 py-4 rounded-xl font-bold hover:bg-gen-primaryDark transition-colors shadow-lg shadow-gen-secondary/30"
                >
                  <Download size={20} />
                  Download PNG
                </button>
                <button
                  onClick={copyQRCode}
                  className="flex-1 min-w-[160px] flex items-center justify-center gap-2 bg-gen-dark text-gen-white px-6 py-4 rounded-xl font-bold hover:bg-black transition-colors shadow-lg shadow-gen-dark/30"
                >
                  <Copy size={20} />
                  Copy Image
                </button>
                <button
                  onClick={generateQRCode}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gen-bg text-gen-dark border border-gen-gray/30 px-6 py-4 rounded-xl font-bold hover:bg-gen-gray/10 transition-colors"
                >
                  <RefreshCw size={20} />
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        )}

        <QRGeneratorSeo />
        <RelatedGeneratorsTools />

      </main>
      
      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}