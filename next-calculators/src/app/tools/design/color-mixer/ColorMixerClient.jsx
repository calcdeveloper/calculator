"use client";

import React, { useState, useEffect } from 'react';
import { Blend, Copy, CheckCircle2, ChevronRight, Settings2, RefreshCw } from 'lucide-react';
import ColorMixerSeo from '@/components/tools/ColorMixerSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
};

const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
};

export default function ColorMixerClient() {
  const [colorA, setColorA] = useState('#EF4444'); // red-500
  const [colorB, setColorB] = useState('#3B82F6'); // blue-500
  const [mixRatio, setMixRatio] = useState(50); // 50% = equal mix
  const [mixedColor, setMixedColor] = useState('#000000');
  const [copyState, setCopyState] = useState('');

  useEffect(() => {
    const validA = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorA);
    const validB = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(colorB);

    if (validA && validB) {
      const rgbA = hexToRgb(colorA);
      const rgbB = hexToRgb(colorB);
      
      // Calculate weighted average
      const weightB = mixRatio / 100;
      const weightA = 1 - weightB;
      
      const mixR = (rgbA.r * weightA) + (rgbB.r * weightB);
      const mixG = (rgbA.g * weightA) + (rgbB.g * weightB);
      const mixB = (rgbA.b * weightA) + (rgbB.b * weightB);
      
      setMixedColor(rgbToHex(mixR, mixG, mixB));
    }
  }, [colorA, colorB, mixRatio]);

  const handleRandomize = () => {
    const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
    setColorA(randomHex());
    setColorB(randomHex());
    setMixRatio(50);
  };

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyState(type);
    setTimeout(() => setCopyState(''), 2000);
  };

  const getContrastText = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'text-slate-900' : 'text-white';
  };

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Color Mixer</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Blend size={40} />
            CSS Color Mixer
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Mathematically blend two colors together using precise RGB interpolation to generate the perfect intermediate Hex code.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
          
          <div className="flex flex-col gap-10">
            
            {/* Input Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
              {/* Color A */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-conv-gray uppercase tracking-widest text-center">Color A ({100 - mixRatio}%)</label>
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-conv-gray/20 bg-conv-bg">
                  <div className="relative h-24 w-full rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm transition-colors duration-300" style={{ backgroundColor: colorA }}>
                    <input 
                      type="color" 
                      value={colorA} 
                      onChange={(e) => setColorA(e.target.value.toUpperCase())}
                      className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer opacity-0"
                    />
                  </div>
                  <input
                    type="text"
                    value={colorA}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                      setColorA(val.toUpperCase());
                    }}
                    maxLength="7"
                    className="w-full text-center px-4 py-3 bg-white border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
              </div>

              {/* Color B */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-conv-gray uppercase tracking-widest text-center">Color B ({mixRatio}%)</label>
                <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-conv-gray/20 bg-conv-bg">
                  <div className="relative h-24 w-full rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm transition-colors duration-300" style={{ backgroundColor: colorB }}>
                    <input 
                      type="color" 
                      value={colorB} 
                      onChange={(e) => setColorB(e.target.value.toUpperCase())}
                      className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer opacity-0"
                    />
                  </div>
                  <input
                    type="text"
                    value={colorB}
                    onChange={(e) => {
                      let val = e.target.value;
                      if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                      setColorB(val.toUpperCase());
                    }}
                    maxLength="7"
                    className="w-full text-center px-4 py-3 bg-white border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                  />
                </div>
              </div>

              {/* Randomize Button overlaid */}
              <button 
                onClick={handleRandomize}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-xl flex items-center justify-center transition-transform hover:rotate-180 z-10 hidden md:flex"
                title="Randomize Colors"
              >
                <RefreshCw size={20} />
              </button>
            </div>

            {/* Slider Section */}
            <div className="px-4 py-6 bg-conv-bg border border-conv-gray/20 rounded-2xl">
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-conv-gray flex items-center gap-2"><Settings2 size={18} /> Blend Ratio</span>
                <span className="font-mono font-bold text-pink-600 bg-pink-50 px-3 py-1 rounded-lg border border-pink-100">{mixRatio}%</span>
              </div>
              <div className="relative h-4 rounded-full overflow-hidden mb-4 border border-conv-gray/30" style={{ background: `linear-gradient(to right, ${colorA}, ${colorB})` }}>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={mixRatio} 
                  onChange={(e) => setMixRatio(Number(e.target.value))}
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white border-x border-black/20 shadow-md pointer-events-none transition-all duration-75"
                  style={{ left: `${mixRatio}%` }}
                ></div>
              </div>
              <div className="flex justify-between text-xs font-bold text-conv-gray uppercase tracking-widest">
                <span>More A</span>
                <span>Equal Mix</span>
                <span>More B</span>
              </div>
            </div>

            {/* Output Result */}
            <div 
              className={`p-10 md:p-16 rounded-3xl shadow-inner border border-black/10 transition-colors duration-300 flex flex-col items-center justify-center text-center space-y-6 group`}
              style={{ backgroundColor: mixedColor }}
            >
              <h2 className={`text-sm font-bold uppercase tracking-[0.2em] opacity-70 ${getContrastText(mixedColor)}`}>Mixed Result</h2>
              <div className={`font-mono text-5xl md:text-7xl font-black ${getContrastText(mixedColor)} drop-shadow-sm tracking-wider`}>
                {mixedColor}
              </div>
              
              <div className="flex gap-4 pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => handleCopy(mixedColor, 'hex')}
                  className="px-6 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 text-white font-bold rounded-xl flex items-center gap-2 transition-colors drop-shadow-md"
                >
                  {copyState === 'hex' ? <CheckCircle2 size={18} /> : <Copy size={18} />} Copy HEX
                </button>
              </div>
            </div>

          </div>

        </div>

        <ColorMixerSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
