"use client";

import React, { useState, useEffect } from 'react';
import { Layers, RefreshCw, ChevronRight, Copy, CheckCircle2 } from 'lucide-react';
import ColorConverterSeo from '@/components/tools/ColorConverterSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

// Conversion Helpers
const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
};

const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
};

const rgbToHsl = (r, g, b) => {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;
  if (max === min) {
    h = s = 0; 
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
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
};

const rgbToCmyk = (r, g, b) => {
  let c = 1 - (r / 255);
  let m = 1 - (g / 255);
  let y = 1 - (b / 255);
  let k = Math.min(c, Math.min(m, y));
  
  if (k === 1) {
    return { c: 0, m: 0, y: 0, k: 100 };
  }
  c = Math.round(((c - k) / (1 - k)) * 100);
  m = Math.round(((m - k) / (1 - k)) * 100);
  y = Math.round(((y - k) / (1 - k)) * 100);
  k = Math.round(k * 100);
  return { c, m, y, k };
};

export default function ColorConverterClient() {
  const [inputHex, setInputHex] = useState('#8B5CF6'); // purple-500
  const [rgb, setRgb] = useState({ r: 139, g: 92, b: 246 });
  const [hsl, setHsl] = useState({ h: 258, s: 90, l: 66 });
  const [cmyk, setCmyk] = useState({ c: 43, m: 63, y: 0, k: 4 });
  const [copyStates, setCopyStates] = useState({});

  useEffect(() => {
    const valid = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputHex);
    if (valid) {
      const rgbVals = hexToRgb(inputHex);
      setRgb(rgbVals);
      setHsl(rgbToHsl(rgbVals.r, rgbVals.g, rgbVals.b));
      setCmyk(rgbToCmyk(rgbVals.r, rgbVals.g, rgbVals.b));
    }
  }, [inputHex]);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopyStates(prev => ({ ...prev, [key]: true }));
    setTimeout(() => {
      setCopyStates(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  const handleRandomize = () => {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setInputHex(randomHex.toUpperCase());
  };

  const outputs = [
    { label: 'HEX', value: inputHex.toUpperCase(), key: 'hex' },
    { label: 'RGB', value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`, key: 'rgb' },
    { label: 'HSL', value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`, key: 'hsl' },
    { label: 'CMYK', value: `cmyk(${cmyk.c}%, ${cmyk.m}%, ${cmyk.y}%, ${cmyk.k}%)`, key: 'cmyk' },
  ];

  const isValidHex = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(inputHex);
  const bgColor = isValidHex ? (inputHex.startsWith('#') ? inputHex : `#${inputHex}`) : '#ffffff';

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Color Converter</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Layers size={40} />
            Universal Color Converter
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly convert colors between HEX, RGB, HSL, and CMYK formats. Built for frontend engineers and print designers.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden mb-8">
          
          {/* Top Panel: Input & Preview */}
          <div className="p-8 md:p-12 border-b border-conv-gray/20 bg-conv-bg flex flex-col md:flex-row items-center gap-8">
            <div 
              className="w-32 h-32 md:w-48 md:h-48 rounded-full shadow-inner border-4 border-conv-white shrink-0 transition-colors duration-300"
              style={{ backgroundColor: bgColor }}
            ></div>
            <div className="flex-1 w-full space-y-4">
              <label className="block text-sm font-bold text-conv-gray">Master Hex Input</label>
              <div className="flex gap-4">
                <input
                  type="text"
                  value={inputHex}
                  onChange={(e) => {
                    let val = e.target.value;
                    if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                    setInputHex(val.toUpperCase());
                  }}
                  maxLength="7"
                  className="flex-1 px-5 py-4 bg-white border border-conv-gray/50 rounded-xl font-mono text-2xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                />
                <button 
                  onClick={handleRandomize}
                  className="px-6 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-bold transition-colors flex items-center gap-2 shrink-0"
                  title="Randomize Color"
                >
                  <RefreshCw size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Panel: Conversions */}
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-bold text-conv-dark mb-6">Converted Values</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {outputs.map((out) => (
                <div key={out.key} className="bg-conv-bg p-4 rounded-xl border border-conv-gray/20 flex flex-col justify-between group hover:border-pink-500/50 transition-colors">
                  <span className="text-xs font-bold text-conv-gray uppercase tracking-widest mb-2">{out.label}</span>
                  <div className="flex justify-between items-end gap-2">
                    <code className="font-mono text-lg font-bold text-conv-dark break-all">
                      {out.value}
                    </code>
                    <button 
                      onClick={() => handleCopy(out.value, out.key)}
                      className={`p-2 rounded-lg transition-colors shrink-0 ${copyStates[out.key] ? 'bg-green-500 text-white' : 'bg-conv-gray/20 text-conv-dark hover:bg-pink-600 hover:text-white'}`}
                      title={`Copy ${out.label}`}
                    >
                      {copyStates[out.key] ? <CheckCircle2 size={18} /> : <Copy size={18} />}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <ColorConverterSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
