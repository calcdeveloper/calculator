"use client";
import React, { useState, useRef } from 'react';
import { Barcode as BarcodeIcon, Download, RefreshCw, ChevronRight, Check } from 'lucide-react';
import Barcode from 'react-barcode';
import BarcodeGeneratorSeo from '@/components/tools/BarcodeGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

export default function BarcodeGeneratorClient() {
  const [value, setValue] = useState('123456789012');
  const [format, setFormat] = useState('CODE128');
  const [width, setWidth] = useState(2);
  const [height, setHeight] = useState(100);
  const [displayValue, setDisplayValue] = useState(true);
  const [lineColor, setLineColor] = useState('#0f172a'); // gen-dark
  const [background, setBackground] = useState('#ffffff');
  const [downloaded, setDownloaded] = useState(false);

  const barcodeRef = useRef(null);

  const handleDownload = () => {
    if (!barcodeRef.current) return;
    
    // React-barcode renders an SVG. Let's get it and convert to PNG.
    const svgElement = barcodeRef.current.querySelector('svg');
    if (!svgElement) return;

    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();

    // Adding padding to the canvas
    const padding = 20;
    
    img.onload = () => {
      canvas.width = img.width + padding * 2;
      canvas.height = img.height + padding * 2;
      
      // Draw background
      ctx.fillStyle = background;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw image with padding
      ctx.drawImage(img, padding, padding);
      
      const pngFile = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.download = `barcode-${value}.png`;
      downloadLink.href = pngFile;
      downloadLink.click();
      
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 2000);
    };

    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  const handleRandomize = () => {
    let rand = '';
    if (format === 'EAN13') {
      // EAN-13 requires 12 digits, the 13th is a checksum calculated by the library
      for (let i = 0; i < 12; i++) rand += Math.floor(Math.random() * 10);
    } else if (format === 'UPC') {
      // UPC-A requires 11 digits
      for (let i = 0; i < 11; i++) rand += Math.floor(Math.random() * 10);
    } else {
      // CODE128 allows alphanumeric
      const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
      for (let i = 0; i < 10; i++) rand += chars[Math.floor(Math.random() * chars.length)];
    }
    setValue(rand);
  };

  const handleFormatChange = (e) => {
    const newFormat = e.target.value;
    setFormat(newFormat);
    if (newFormat === 'EAN13') setValue('123456789012');
    else if (newFormat === 'UPC') setValue('12345678901');
    else setValue('ABC123456');
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
            <span className="text-gen-white font-medium">Barcode Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <BarcodeIcon size={40} />
            Free Barcode Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-8">
            Create high-quality, professional barcodes instantly. Supports CODE128, EAN-13, UPC, and CODE39 formats. Perfect for inventory and retail.
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-gen-white rounded-3xl shadow-2xl border border-gen-gray overflow-hidden p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Barcode Value</label>
                <div className="flex bg-gen-bg/80 border border-gen-gray/30 rounded-xl overflow-hidden focus-within:border-gen-primary transition-colors">
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="w-full px-4 py-3 bg-transparent font-mono outline-none text-gen-dark"
                    placeholder="Enter barcode text..."
                  />
                  <button
                    onClick={handleRandomize}
                    className="px-4 text-gen-primary hover:bg-gen-primary/5 transition-colors border-l border-gen-gray/30 flex items-center"
                    title="Generate Random Value"
                  >
                    <RefreshCw size={20} />
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gen-dark mb-2">Barcode Format</label>
                <select
                  value={format}
                  onChange={handleFormatChange}
                  className="w-full px-4 py-3 border border-gen-gray/30 rounded-xl focus:ring-2 focus:ring-gen-primary outline-none bg-gen-bg/50 font-semibold"
                >
                  <option value="CODE128">CODE 128 (Standard)</option>
                  <option value="CODE39">CODE 39</option>
                  <option value="EAN13">EAN-13 (Retail)</option>
                  <option value="UPC">UPC (Retail USA)</option>
                  <option value="ITF14">ITF-14 (Packaging)</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gen-dark mb-2">Bar Width</label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="1"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-gen-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gen-dark mb-2">Height</label>
                  <input
                    type="range"
                    min="40"
                    max="150"
                    step="10"
                    value={height}
                    onChange={(e) => setHeight(Number(e.target.value))}
                    className="w-full accent-gen-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-gen-dark mb-2">Bar Color</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={lineColor}
                      onChange={(e) => setLineColor(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                    />
                    <span className="text-sm font-mono text-gen-gray uppercase">{lineColor}</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gen-dark mb-2">Background</label>
                  <div className="flex items-center gap-3">
                    <input
                      type="color"
                      value={background}
                      onChange={(e) => setBackground(e.target.value)}
                      className="w-10 h-10 rounded cursor-pointer border-0 p-0"
                    />
                    <span className="text-sm font-mono text-gen-gray uppercase">{background}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="displayValue"
                  checked={displayValue}
                  onChange={(e) => setDisplayValue(e.target.checked)}
                  className="w-5 h-5 text-gen-primary rounded cursor-pointer accent-gen-primary"
                />
                <label htmlFor="displayValue" className="text-base font-bold text-gen-dark cursor-pointer">
                  Show Text Value Below Barcode
                </label>
              </div>

            </div>

            {/* Preview & Download */}
            <div className="flex flex-col">
              <div className="flex-1 bg-gen-bg border-2 border-dashed border-gen-gray/30 rounded-2xl flex items-center justify-center p-6 relative overflow-hidden group mb-6 min-h-[250px]">
                {value ? (
                  <div ref={barcodeRef} className="max-w-full overflow-auto">
                    <Barcode 
                      value={value} 
                      format={format}
                      width={width}
                      height={height}
                      displayValue={displayValue}
                      lineColor={lineColor}
                      background={background}
                    />
                  </div>
                ) : (
                  <p className="text-gen-gray font-medium">Enter value to see preview</p>
                )}
              </div>
              
              <button
                onClick={handleDownload}
                disabled={!value}
                className="w-full bg-gen-primary text-gen-white py-4 px-6 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {downloaded ? <Check size={24} /> : <Download size={24} />}
                {downloaded ? 'Downloaded PNG' : 'Download Barcode PNG'}
              </button>
            </div>

          </div>
        </div>

        <BarcodeGeneratorSeo />
        <RelatedGeneratorsTools />
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
