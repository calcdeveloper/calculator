"use client";

import { useState, useRef } from "react";
import { Download, Copy, RefreshCw, QrCode } from "lucide-react";

export default function QRGeneratorClient() {
  const [text, setText] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [foregroundColor, setForegroundColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");
  const canvasRef = useRef(null);

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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">QR Code Generator</h1>
          <p className="text-xl text-gray-600">Create custom QR codes for URLs, text, WiFi, and more</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Enter URL or Text
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="https://example.com or any text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Foreground Color
              </label>
              <input
                type="color"
                value={foregroundColor}
                onChange={(e) => setForegroundColor(e.target.value)}
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Background Color
              </label>
              <input
                type="color"
                value={backgroundColor}
                onChange={(e) => setBackgroundColor(e.target.value)}
                className="w-full h-10 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <button
            onClick={generateQRCode}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
          >
            <QrCode size={20} />
            Generate QR Code
          </button>
        </div>

        {qrCode && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-6">
              <img
                src={qrCode}
                alt="Generated QR Code"
                className="w-64 h-64 object-contain"
              />
              <div className="flex gap-4">
                <button
                  onClick={downloadQRCode}
                  className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  Download
                </button>
                <button
                  onClick={copyQRCode}
                  className="flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  <Copy size={20} />
                  Copy
                </button>
                <button
                  onClick={generateQRCode}
                  className="flex items-center gap-2 bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                >
                  <RefreshCw size={20} />
                  Regenerate
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About QR Codes</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              QR codes (Quick Response codes) are two-dimensional barcodes that can store various types of information. They're widely used for marketing, product tracking, and sharing URLs.
            </p>
            <p>
              Our QR code generator allows you to create custom QR codes with different colors, making them perfect for branding purposes. All QR codes are generated instantly in your browser - no data is sent to our servers.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Use Cases</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Share website URLs and social media profiles</li>
              <li>Create WiFi network QR codes for easy connection</li>
              <li>Generate QR codes for business cards</li>
              <li>Add QR codes to product packaging</li>
              <li>Create QR codes for event tickets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
