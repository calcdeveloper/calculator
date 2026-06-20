"use client";

import React, { useState, useEffect } from 'react';
import { Wind, Copy, RefreshCw, ChevronRight, CheckCircle2 } from 'lucide-react';
import HexToHslSeo from '@/components/tools/HexToHslSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const hexToHslArray = (hex) => {
  // Remove # if present
  hex = hex.replace(/^#/, '');

  // Parse r, g, b
  let r, g, b;
  if (hex.length === 3) {
    r = parseInt(hex[0] + hex[0], 16);
    g = parseInt(hex[1] + hex[1], 16);
    b = parseInt(hex[2] + hex[2], 16);
  } else if (hex.length === 6) {
    r = parseInt(hex.substring(0, 2), 16);
    g = parseInt(hex.substring(2, 4), 16);
    b = parseInt(hex.substring(4, 6), 16);
  } else {
    return [0, 0, 0];
  }

  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
};

export default function HexToHslClient() {
  const [hexInput, setHexInput] = useState('#F43F5E'); // Rose-500
  const [hsl, setHsl] = useState({ h: 350, s: 89, l: 60 });
  const [copySuccess, setCopySuccess] = useState(false);

  useEffect(() => {
    // Validate hex
    const isValidHex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexInput);
    if (isValidHex) {
      const [h, s, l] = hexToHslArray(hexInput);
      setHsl({ h, s, l });
    }
  }, [hexInput]);

  const handleInputChange = (e) => {
    let val = e.target.value;
    if (!val.startsWith('#') && val.length > 0) {
      val = '#' + val;
    }
    setHexInput(val);
  };

  const handleRandomColor = () => {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setHexInput(randomHex.toUpperCase());
  };

  const handleCopy = () => {
    const hslString = `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`;
    navigator.clipboard.writeText(hslString);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const isValidHex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hexInput);
  const bgColor = isValidHex ? hexInput : '#ffffff';

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Hex to HSL</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Wind size={40} />
            Hex to HSL Converter
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert standard Hexadecimal color codes into intuitive Hue, Saturation, and Lightness percentages instantly.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-5xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden p-6 md:p-10 mb-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Input Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-conv-dark">Input Hex Code</h3>
              
              <div>
                <label className="block text-sm font-bold text-conv-gray mb-2">Hexadecimal Color String</label>
                <div className="relative">
                  <input
                    type="text"
                    value={hexInput}
                    onChange={handleInputChange}
                    maxLength="7"
                    className="w-full px-5 py-4 bg-conv-bg border border-conv-gray/50 rounded-xl font-mono text-2xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all uppercase"
                    placeholder="#F43F5E"
                  />
                  {!isValidHex && hexInput.length > 1 && (
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 font-bold text-sm">Invalid Hex</span>
                  )}
                </div>
              </div>

              <button 
                onClick={handleRandomColor}
                className="w-full bg-conv-bg hover:bg-conv-gray/20 text-conv-dark py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 border border-conv-gray/30"
              >
                <RefreshCw size={20} /> Generate Random Hex
              </button>

              <div className="p-5 bg-blue-50 text-blue-800 rounded-xl border border-blue-100 text-sm leading-relaxed">
                <p><strong>Tip:</strong> You can input 3-character shorthand hex codes (e.g., #F00) and the engine will automatically parse them correctly as #FF0000.</p>
              </div>
            </div>

            {/* Output Section */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-conv-dark">HSL Output</h3>

              {/* Live Preview */}
              <div 
                className="w-full h-32 rounded-2xl border-4 border-conv-white shadow-lg transition-colors duration-200"
                style={{ backgroundColor: bgColor }}
              ></div>

              <div className="bg-conv-bg p-6 rounded-2xl border border-conv-gray/30 space-y-6">
                
                <div className="flex items-center justify-between">
                  <div className="flex-1 font-mono text-2xl font-bold text-conv-dark">
                    hsl({hsl.h}, {hsl.s}%, {hsl.l}%)
                  </div>
                  <button 
                    onClick={handleCopy}
                    className={`ml-4 p-3 rounded-xl text-white transition-all ${copySuccess ? 'bg-green-500 scale-110' : 'bg-pink-600 hover:bg-pink-700'}`}
                    title="Copy HSL string"
                  >
                    {copySuccess ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                  </button>
                </div>

                {/* Individual Sliders (Read-Only visualization) */}
                <div className="space-y-4 pt-4 border-t border-conv-gray/30">
                  <div>
                    <div className="flex justify-between text-sm font-bold text-conv-gray mb-1">
                      <span>Hue</span>
                      <span>{hsl.h}°</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-linear-to-r from-red-500 via-green-500 to-blue-500 overflow-hidden relative">
                      <div className="absolute top-0 bottom-0 w-2 bg-white border border-gray-400 rounded-full shadow-md" style={{ left: `calc(${(hsl.h / 360) * 100}% - 4px)` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-conv-gray mb-1">
                      <span>Saturation</span>
                      <span>{hsl.s}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden relative">
                      <div className="absolute top-0 bottom-0 left-0 bg-pink-500" style={{ width: `${hsl.s}%` }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm font-bold text-conv-gray mb-1">
                      <span>Lightness</span>
                      <span>{hsl.l}%</span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-gray-200 overflow-hidden relative">
                      <div className="absolute top-0 bottom-0 left-0 bg-gray-600" style={{ width: `${hsl.l}%` }}></div>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

        <HexToHslSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
