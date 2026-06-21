"use client";

import React, { useState, useEffect } from 'react';
import { Wand2, Copy, CheckCircle2, ChevronRight, RefreshCw, Layers } from 'lucide-react';
import CssColorGeneratorSeo from '@/components/tools/CssColorGeneratorSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
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

const hslToHex = (h, s, l) => {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`.toUpperCase();
};

export default function CssColorGeneratorClient() {
  const [baseColor, setBaseColor] = useState('#3B82F6'); // blue-500
  const [prefix, setPrefix] = useState('color-primary');
  const [cssOutput, setCssOutput] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  const [palette, setPalette] = useState([]);

  useEffect(() => {
    const valid = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(baseColor);
    if (valid) {
      const rgb = hexToRgb(baseColor);
      const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
      
      // Generate a 100-900 ramp based on lightness
      const stops = [100, 200, 300, 400, 500, 600, 700, 800, 900];
      const lightnessStops = [90, 80, 70, 60, hsl.l, 40, 30, 20, 10];
      
      const newPalette = stops.map((stop, index) => {
        let l = lightnessStops[index];
        // Ensure the base color remains exact at 500
        if (stop === 500) l = hsl.l;
        const hex = hslToHex(hsl.h, hsl.s, l);
        return { stop, hex, h: hsl.h, s: hsl.s, l };
      });

      setPalette(newPalette);

      // Generate CSS Variables String
      const safePrefix = prefix.trim().toLowerCase().replace(/[^a-z0-9-]/g, '-') || 'color-primary';
      
      let css = `:root {\n`;
      css += `  /* Base Values */\n`;
      css += `  --${safePrefix}-h: ${hsl.h};\n`;
      css += `  --${safePrefix}-s: ${hsl.s}%;\n`;
      css += `  --${safePrefix}-l: ${hsl.l}%;\n\n`;
      
      css += `  /* Static Hex Ramp */\n`;
      newPalette.forEach(p => {
        css += `  --${safePrefix}-${p.stop}: ${p.hex};\n`;
      });
      css += `}\n`;
      
      setCssOutput(css);
    }
  }, [baseColor, prefix]);

  const handleCopy = () => {
    navigator.clipboard.writeText(cssOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const handleRandomize = () => {
    const randomHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setBaseColor(randomHex.toUpperCase());
  };

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">CSS Color Generator</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Wand2 size={40} />
            CSS Variable Generator
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate complete, production-ready CSS custom property architecture (`:root` variables) from a single base color.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:p-10">
            
            {/* Input Side */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-conv-dark">Configuration</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-conv-gray mb-2">Base Brand Color</label>
                  <div className="flex gap-4">
                    <div className="relative h-14 w-20 rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm shrink-0">
                      <input 
                        type="color" 
                        value={baseColor} 
                        onChange={(e) => setBaseColor(e.target.value.toUpperCase())}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      value={baseColor}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                        setBaseColor(val.toUpperCase());
                      }}
                      maxLength="7"
                      className="flex-1 px-5 py-4 bg-conv-bg border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-conv-gray mb-2">Variable Prefix</label>
                  <div className="flex bg-conv-bg border border-conv-gray/50 rounded-xl overflow-hidden focus-within:border-pink-500 focus-within:ring-2 focus-within:ring-pink-500/20">
                    <span className="bg-conv-gray/10 px-4 py-4 font-mono font-bold text-conv-gray">--</span>
                    <input
                      type="text"
                      value={prefix}
                      onChange={(e) => setPrefix(e.target.value)}
                      placeholder="color-primary"
                      className="flex-1 px-2 py-4 bg-transparent font-mono text-lg font-bold text-conv-dark outline-none"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={handleRandomize}
                className="w-full py-4 rounded-xl border border-conv-gray/30 hover:bg-conv-bg font-bold flex items-center justify-center gap-2 transition-colors text-conv-dark"
              >
                <RefreshCw size={18} /> Randomize Base Color
              </button>

              {/* Visual Ramp Preview */}
              <div>
                <label className="block text-sm font-bold text-conv-gray mb-3">Generated Color Ramp</label>
                <div className="flex h-16 rounded-xl overflow-hidden border border-conv-gray/30">
                  {palette.map((p) => (
                    <div 
                      key={p.stop} 
                      className="flex-1 transition-colors duration-300 relative group flex items-center justify-center"
                      style={{ backgroundColor: p.hex }}
                    >
                      <span className="opacity-0 group-hover:opacity-100 font-bold text-[10px] text-white mix-blend-difference absolute">
                        {p.stop}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Side */}
            <div className="bg-conv-bg p-6 md:p-8 rounded-2xl border border-conv-gray/30 flex flex-col">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-conv-dark flex items-center gap-2">
                  <Layers size={20} className="text-pink-600" /> CSS Output
                </h3>
                <button 
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-lg text-sm font-bold transition-all flex items-center gap-2 ${copySuccess ? 'bg-green-500 text-white' : 'bg-pink-600 text-white hover:bg-pink-700'}`}
                >
                  {copySuccess ? <><CheckCircle2 size={16} /> Copied!</> : <><Copy size={16} /> Copy CSS</>}
                </button>
              </div>

              <div className="flex-1 bg-[#1e1e1e] rounded-xl p-6 overflow-x-auto shadow-inner border border-conv-gray/50">
                <pre className="font-mono text-sm leading-relaxed text-gray-300">
                  <code>{cssOutput}</code>
                </pre>
              </div>
            </div>

          </div>
        </div>

        <CssColorGeneratorSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
