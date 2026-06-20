"use client";

import React, { useState, useCallback } from 'react';
import { 
  Palette, Copy, CheckCircle2, ShieldCheck, 
  Zap, ChevronRight, Droplets, RefreshCw, Eye
} from 'lucide-react';
import RgbToHexSeo from '@/components/tools/RgbToHexSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

export default function RGBHexClient() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const [hexOutput, setHexOutput] = useState('#000000');
  const [copySuccess, setCopySuccess] = useState(false);

  const rgbToHex = useCallback((r, g, b) => {
    const toHex = (c) => {
      const hex = Math.max(0, Math.min(255, c)).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(hexOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setRed(r);
    setGreen(g);
    setBlue(b);
    setHexOutput(rgbToHex(r, g, b));
  };

  const handleSliderChange = (color, value) => {
    const numValue = parseInt(value);
    if (color === 'red') setRed(numValue);
    if (color === 'green') setGreen(numValue);
    if (color === 'blue') setBlue(numValue);
    
    setHexOutput(rgbToHex(
      color === 'red' ? numValue : red,
      color === 'green' ? numValue : green,
      color === 'blue' ? numValue : blue
    ));
  };

  return (
    <div className="min-h-screen bg-design-bg font-sans text-design-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-design-primary to-design-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center items-center gap-2 text-design-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">RGB to Hex</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-design-white mb-6 tracking-tight">
            RGB to Hex Converter
          </h1>
          <p className="text-xl text-design-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert RGB color values to Hex format instantly. Secure, fast, and processed entirely in your browser.
          </p>
        </div>
      </section>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-design-white rounded-3xl shadow-2xl border border-design-gray overflow-hidden p-6 md:p-10 mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Input Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-design-dark flex items-center gap-2">
                <Droplets size={24} className="text-design-primary" /> RGB Values
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">Red (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={red}
                    onChange={(e) => handleSliderChange('red', e.target.value)}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #000000, #ff0000)` }}
                  />
                  <div className="flex items-center gap-3 mt-3">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={red}
                      onChange={(e) => handleSliderChange('red', e.target.value)}
                      className="w-24 px-4 py-2 bg-design-bg/50 border border-design-gray rounded-xl font-bold text-design-dark focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="flex-1 h-10 rounded-xl shadow-inner border border-design-gray/30" style={{ backgroundColor: `rgb(${red}, 0, 0)` }}></div>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">Green (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={green}
                    onChange={(e) => handleSliderChange('green', e.target.value)}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #000000, #00ff00)` }}
                  />
                  <div className="flex items-center gap-3 mt-3">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={green}
                      onChange={(e) => handleSliderChange('green', e.target.value)}
                      className="w-24 px-4 py-2 bg-design-bg/50 border border-design-gray rounded-xl font-bold text-design-dark focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="flex-1 h-10 rounded-xl shadow-inner border border-design-gray/30" style={{ backgroundColor: `rgb(0, ${green}, 0)` }}></div>
                  </div>
                </div>

                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">Blue (0-255)</label>
                  <input 
                    type="range"
                    min="0"
                    max="255"
                    value={blue}
                    onChange={(e) => handleSliderChange('blue', e.target.value)}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #000000, #0000ff)` }}
                  />
                  <div className="flex items-center gap-3 mt-3">
                    <input 
                      type="number"
                      min="0"
                      max="255"
                      value={blue}
                      onChange={(e) => handleSliderChange('blue', e.target.value)}
                      className="w-24 px-4 py-2 bg-design-bg/50 border border-design-gray rounded-xl font-bold text-design-dark focus:ring-2 focus:ring-design-primary outline-none"
                    />
                    <div className="flex-1 h-10 rounded-xl shadow-inner border border-design-gray/30" style={{ backgroundColor: `rgb(0, 0, ${blue})` }}></div>
                  </div>
                </div>
              </div>

              <button 
                onClick={handleRandomColor}
                className="w-full bg-design-gray/20 hover:bg-design-gray/30 text-design-dark py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <RefreshCw size={20} /> Random Color
              </button>
            </div>

            {/* Output Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-design-dark flex items-center gap-2">
                <Palette size={24} className="text-design-primary" /> Hex Output
              </h3>

              <div className="space-y-6">
                <div 
                  className="w-full h-48 rounded-2xl border-4 border-design-gray shadow-inner transition-colors duration-200"
                  style={{ backgroundColor: hexOutput }}
                ></div>

                <div className="flex items-center gap-4">
                  <input 
                    readOnly
                    value={hexOutput}
                    className="flex-1 px-5 py-4 bg-design-bg/50 border border-design-gray rounded-xl font-mono text-2xl font-bold text-design-dark outline-none"
                  />
                  <button 
                    onClick={handleCopy}
                    className={`p-4 rounded-xl text-design-white transition-colors flex items-center justify-center ${copySuccess ? 'bg-green-600' : 'bg-design-primary hover:bg-design-primaryDark'}`}
                    title="Copy to Clipboard"
                  >
                    {copySuccess ? <CheckCircle2 size={28} /> : <Copy size={28} />}
                  </button>
                </div>

                <div className="p-6 bg-design-bg/30 rounded-xl space-y-2 text-design-dark/80 text-lg">
                  <p><strong>RGB:</strong> rgb({red}, {green}, {blue})</p>
                  <p><strong>Hex:</strong> {hexOutput}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-design-dark/70 leading-relaxed text-base">Your color values are processed locally. We never transmit your data to our servers, keeping your design work private and secure.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Conversion</h3>
            <p className="text-design-dark/70 leading-relaxed text-base">Real-time RGB to Hex conversion as you adjust sliders. No waiting or loading times for instant color matching.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-design-primary/10 text-design-primary rounded-xl flex items-center justify-center mb-6"><Eye /></div>
            <h3 className="text-xl font-bold mb-3">Visual Preview</h3>
            <p className="text-design-dark/70 leading-relaxed text-base">See your color in real-time with a live preview. Perfect for matching colors and visualizing your design choices.</p>
          </div>
        </section>

        <RgbToHexSeo />
        <RelatedDesignTools />

      </main>

      <footer className="bg-design-white border-t border-design-gray py-8 px-6 mt-12">
        <p className="text-sm text-design-dark/60 text-center font-medium">© 2026 ToolsWizard - Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
