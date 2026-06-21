"use client";

import React, { useState, useEffect } from 'react';
import { Eye, Copy, CheckCircle2, ChevronRight, Settings2 } from 'lucide-react';
import OpacityCalculatorSeo from '@/components/tools/OpacityCalculatorSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  if (hex.length === 3) hex = hex.split('').map(x => x + x).join('');
  const num = parseInt(hex, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
};

export default function OpacityCalculatorClient() {
  const [baseHex, setBaseHex] = useState('#3B82F6'); // blue-500
  const [opacity, setOpacity] = useState(50); // percentage
  const [rgbaOutput, setRgbaOutput] = useState('');
  const [hexAlphaOutput, setHexAlphaOutput] = useState('');
  const [copyStates, setCopyStates] = useState({});

  useEffect(() => {
    const valid = /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(baseHex);
    if (valid) {
      const rgb = hexToRgb(baseHex);
      const alphaDecimal = opacity / 100;
      
      // Calculate RGBA
      setRgbaOutput(`rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alphaDecimal.toFixed(2)})`);

      // Calculate Hex Alpha (8-character Hex)
      const alphaHex = Math.round(alphaDecimal * 255).toString(16).padStart(2, '0').toUpperCase();
      let cleanHex = baseHex.replace(/^#/, '');
      if (cleanHex.length === 3) cleanHex = cleanHex.split('').map(x => x + x).join('');
      setHexAlphaOutput(`#${cleanHex.toUpperCase()}${alphaHex}`);
    }
  }, [baseHex, opacity]);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopyStates(prev => ({ ...prev, [type]: true }));
    setTimeout(() => setCopyStates(prev => ({ ...prev, [type]: false })), 2000);
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
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Opacity Calculator</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Eye size={40} />
            CSS Opacity Calculator
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly convert solid Hex codes into transparent `rgba()` functions and modern 8-character Hex Alpha codes.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:p-10">
            
            {/* Input & Live Preview Side */}
            <div className="space-y-8 flex flex-col">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-conv-gray mb-2">Solid Hex Color</label>
                  <div className="flex gap-4">
                    <div className="relative h-14 w-20 rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm shrink-0 transition-colors" style={{ backgroundColor: baseHex }}>
                      <input 
                        type="color" 
                        value={baseHex} 
                        onChange={(e) => setBaseHex(e.target.value.toUpperCase())}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer opacity-0"
                      />
                    </div>
                    <input
                      type="text"
                      value={baseHex}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                        setBaseHex(val.toUpperCase());
                      }}
                      maxLength="7"
                      className="flex-1 px-5 py-4 bg-conv-bg border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>

                <div className="bg-conv-bg p-6 rounded-2xl border border-conv-gray/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold text-conv-dark flex items-center gap-2"><Settings2 size={18} className="text-pink-600" /> Opacity Level</span>
                    <span className="font-mono font-bold text-pink-600 text-lg bg-pink-50 px-3 py-1 rounded-lg border border-pink-100">{opacity}%</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="100" 
                    value={opacity} 
                    onChange={(e) => setOpacity(Number(e.target.value))}
                    className="w-full accent-pink-600"
                  />
                  <div className="flex justify-between text-xs font-bold text-conv-gray mt-2">
                    <span>0% (Invisible)</span>
                    <span>100% (Solid)</span>
                  </div>
                </div>
              </div>

              {/* Live Visual Preview Checkboard */}
              <div className="flex-1 min-h-[200px] rounded-2xl border-2 border-conv-gray/30 shadow-inner relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIxMCIgaGVpZ2h0PSIxMCIgZmlsbD0iI2VkZTllMyIgLz4KPHJlY3QgeD0iMTAiIHk9IjEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIGZpbGw9IiNlZGU5ZTMiIC8+Cjwvc3ZnPg==')]">
                <div 
                  className="absolute inset-0 transition-all duration-200 flex items-center justify-center p-8"
                  style={{ backgroundColor: rgbaOutput }}
                >
                  {/* Text testing overlay */}
                  <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white max-w-sm text-center">
                    <p className="font-bold text-conv-dark text-sm">Visual Preview against a checkerboard pattern.</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Output Side */}
            <div className="bg-conv-bg p-8 rounded-2xl border border-conv-gray/30 flex flex-col justify-center space-y-10">
              
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-conv-gray uppercase tracking-widest border-b border-conv-gray/20 pb-2">Standard RGBA String</h3>
                <div className="flex items-center gap-4">
                  <code className="flex-1 bg-white p-5 rounded-xl border border-conv-gray/30 font-mono text-xl md:text-2xl font-black text-conv-dark shadow-sm">
                    {rgbaOutput}
                  </code>
                  <button 
                    onClick={() => handleCopy(rgbaOutput, 'rgba')}
                    className={`p-5 rounded-xl transition-all shadow-sm ${copyStates['rgba'] ? 'bg-green-500 text-white' : 'bg-pink-600 text-white hover:bg-pink-700'}`}
                    title="Copy RGBA"
                  >
                    {copyStates['rgba'] ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                  </button>
                </div>
                <p className="text-sm text-conv-gray font-medium">Supported by all modern and legacy browsers.</p>
              </div>

              <div className="space-y-4">
                <h3 className="text-sm font-bold text-conv-gray uppercase tracking-widest border-b border-conv-gray/20 pb-2">8-Digit Hex Alpha Code</h3>
                <div className="flex items-center gap-4">
                  <code className="flex-1 bg-white p-5 rounded-xl border border-conv-gray/30 font-mono text-xl md:text-2xl font-black text-conv-dark shadow-sm uppercase">
                    {hexAlphaOutput}
                  </code>
                  <button 
                    onClick={() => handleCopy(hexAlphaOutput, 'hex')}
                    className={`p-5 rounded-xl transition-all shadow-sm ${copyStates['hex'] ? 'bg-green-500 text-white' : 'bg-pink-600 text-white hover:bg-pink-700'}`}
                    title="Copy Hex Alpha"
                  >
                    {copyStates['hex'] ? <CheckCircle2 size={24} /> : <Copy size={24} />}
                  </button>
                </div>
                <p className="text-sm text-conv-gray font-medium">Modern shorthand. Supported by all modern browsers and Tailwind CSS arbitrary values.</p>
              </div>

            </div>

          </div>
        </div>

        <OpacityCalculatorSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
