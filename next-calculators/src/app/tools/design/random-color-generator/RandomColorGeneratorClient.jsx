"use client";

import React, { useState, useEffect } from 'react';
import { Dice5, Copy, CheckCircle2, ChevronRight, Settings2, RefreshCw } from 'lucide-react';
import RandomColorGeneratorSeo from '@/components/tools/RandomColorGeneratorSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

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

export default function RandomColorGeneratorClient() {
  const [color, setColor] = useState({ hex: '#FF0055', h: 340, s: 100, l: 50 });
  const [copySuccess, setCopySuccess] = useState(false);

  // Constraints
  const [hueMin, setHueMin] = useState(0);
  const [hueMax, setHueMax] = useState(360);
  const [satMin, setSatMin] = useState(50);
  const [satMax, setSatMax] = useState(100);
  const [lumMin, setLumMin] = useState(30);
  const [lumMax, setLumMax] = useState(70);

  const generateRandomColor = () => {
    // Ensure min <= max
    const hMin = Math.min(hueMin, hueMax);
    const hMax = Math.max(hueMin, hueMax);
    const sMin = Math.min(satMin, satMax);
    const sMax = Math.max(satMin, satMax);
    const lMin = Math.min(lumMin, lumMax);
    const lMax = Math.max(lumMin, lumMax);

    const h = Math.floor(Math.random() * (hMax - hMin + 1)) + hMin;
    const s = Math.floor(Math.random() * (sMax - sMin + 1)) + sMin;
    const l = Math.floor(Math.random() * (lMax - lMin + 1)) + lMin;
    
    setColor({ hex: hslToHex(h, s, l), h, s, l });
  };

  useEffect(() => {
    generateRandomColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(color.hex);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Random Color Generator</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Dice5 size={40} />
            Random Color Generator
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Generate perfectly constrained random colors by controlling Hue, Saturation, and Lightness boundaries.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Display Side */}
            <div 
              className="p-8 md:p-12 flex flex-col items-center justify-center min-h-[400px] transition-colors duration-500 relative group"
              style={{ backgroundColor: color.hex }}
            >
              <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl shadow-xl flex flex-col items-center border border-white/30 text-white drop-shadow-md">
                <div className="font-mono text-5xl md:text-6xl font-black mb-4 tracking-wider">
                  {color.hex}
                </div>
                <div className="font-mono text-xl font-bold opacity-90 mb-8">
                  hsl({color.h}, {color.s}%, {color.l}%)
                </div>
                
                <button 
                  onClick={handleCopy}
                  className={`w-full py-4 px-8 rounded-2xl font-bold flex items-center justify-center gap-3 text-lg transition-all shadow-lg ${copySuccess ? 'bg-green-500 text-white scale-105' : 'bg-white text-conv-dark hover:scale-105'}`}
                >
                  {copySuccess ? <><CheckCircle2 size={24} /> Copied!</> : <><Copy size={24} /> Copy Hex Code</>}
                </button>
              </div>
            </div>

            {/* Controls Side */}
            <div className="p-8 md:p-12 bg-conv-bg flex flex-col justify-between">
              
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-6 border-b border-conv-gray/20 pb-4">
                  <Settings2 size={24} className="text-pink-600" />
                  <h3 className="text-2xl font-bold text-conv-dark">Mathematical Constraints</h3>
                </div>

                {/* Hue Bounds */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="block text-sm font-bold text-conv-gray">Hue Boundary (0 - 360°)</label>
                    <span className="font-mono text-sm font-bold text-pink-600">{hueMin}° to {hueMax}°</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input type="range" min="0" max="360" value={hueMin} onChange={e => setHueMin(Number(e.target.value))} className="w-full accent-pink-600" />
                    <input type="range" min="0" max="360" value={hueMax} onChange={e => setHueMax(Number(e.target.value))} className="w-full accent-pink-600" />
                  </div>
                </div>

                {/* Saturation Bounds */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="block text-sm font-bold text-conv-gray">Saturation Boundary (0 - 100%)</label>
                    <span className="font-mono text-sm font-bold text-pink-600">{satMin}% to {satMax}%</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input type="range" min="0" max="100" value={satMin} onChange={e => setSatMin(Number(e.target.value))} className="w-full accent-pink-600" />
                    <input type="range" min="0" max="100" value={satMax} onChange={e => setSatMax(Number(e.target.value))} className="w-full accent-pink-600" />
                  </div>
                </div>

                {/* Lightness Bounds */}
                <div>
                  <div className="flex justify-between items-end mb-3">
                    <label className="block text-sm font-bold text-conv-gray">Lightness Boundary (0 - 100%)</label>
                    <span className="font-mono text-sm font-bold text-pink-600">{lumMin}% to {lumMax}%</span>
                  </div>
                  <div className="flex gap-4 items-center">
                    <input type="range" min="0" max="100" value={lumMin} onChange={e => setLumMin(Number(e.target.value))} className="w-full accent-pink-600" />
                    <input type="range" min="0" max="100" value={lumMax} onChange={e => setLumMax(Number(e.target.value))} className="w-full accent-pink-600" />
                  </div>
                </div>
              </div>

              <button 
                onClick={generateRandomColor}
                className="w-full mt-12 py-5 rounded-2xl bg-conv-dark hover:bg-pink-600 text-white font-bold text-xl flex items-center justify-center gap-3 transition-colors shadow-xl"
              >
                <RefreshCw size={24} /> Generate Random Color
              </button>

            </div>
          </div>
        </div>

        <RandomColorGeneratorSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
