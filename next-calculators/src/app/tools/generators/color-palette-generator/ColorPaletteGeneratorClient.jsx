"use client";
import React, { useState, useEffect } from 'react';
import { Palette, Copy, RefreshCw, ChevronRight, Check, Unlock, Lock } from 'lucide-react';
import ColorPaletteGeneratorSeo from '@/components/tools/ColorPaletteGeneratorSeo';
import RelatedGeneratorsTools from '@/components/tools/RelatedGeneratorsTools';

// Helper to convert HSL to HEX
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

export default function ColorPaletteGeneratorClient() {
  const [colors, setColors] = useState([
    { hex: '#FFFFFF', locked: false },
    { hex: '#FFFFFF', locked: false },
    { hex: '#FFFFFF', locked: false },
    { hex: '#FFFFFF', locked: false },
    { hex: '#FFFFFF', locked: false },
  ]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const generateRandomColor = () => {
    const h = Math.floor(Math.random() * 360);
    const s = Math.floor(Math.random() * 60) + 40; // 40-100%
    const l = Math.floor(Math.random() * 60) + 20; // 20-80%
    return hslToHex(h, s, l);
  };

  const generatePalette = () => {
    setColors(colors.map(color => {
      if (color.locked) return color;
      return { ...color, hex: generateRandomColor() };
    }));
  };

  useEffect(() => {
    generatePalette();
    
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        generatePalette();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleLock = (index) => {
    const newColors = [...colors];
    newColors[index].locked = !newColors[index].locked;
    setColors(newColors);
  };

  const copyColor = (hex, index) => {
    navigator.clipboard.writeText(hex);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 1500);
  };

  // Check brightness for text contrast
  const getContrastColor = (hexcolor) => {
    const r = parseInt(hexcolor.substring(1,3),16);
    const g = parseInt(hexcolor.substring(3,5),16);
    const b = parseInt(hexcolor.substring(5,7),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'text-black' : 'text-white';
  };

  return (
    <div className="min-h-screen bg-gen-bg font-sans text-gen-dark flex flex-col">
      <section className="bg-gradient-to-r from-gen-primary to-gen-primaryDark pt-16 pb-32 px-4 flex-shrink-0">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-gen-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Generators</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-gen-white font-medium">Color Palette Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gen-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Palette size={40} />
            Color Palette Generator
          </h1>
          <p className="text-xl text-gen-white/90 max-w-3xl mx-auto leading-relaxed mb-4">
            Press the <strong className="bg-white/20 px-2 py-1 rounded">Spacebar</strong> to instantly generate beautiful, harmonious color palettes for your next web design project.
          </p>
        </div>
      </section>

      <main className="flex-1 w-full max-w-7xl mx-auto px-4 -mt-20 pb-20 flex flex-col">
        <div className="bg-gen-white rounded-3xl shadow-2xl overflow-hidden mb-8 border border-gen-gray/20 flex flex-col flex-1 min-h-[500px]">
          
          <div className="flex flex-col md:flex-row flex-1">
            {colors.map((color, index) => (
              <div 
                key={index} 
                className="flex-1 flex flex-row md:flex-col items-center justify-between md:justify-end py-6 px-4 md:py-12 md:px-2 transition-colors duration-500 relative group min-h-[100px]"
                style={{ backgroundColor: color.hex }}
              >
                {/* Mobile Copy Overlay (Hidden on desktop) */}
                <button 
                  className={`absolute inset-0 w-full h-full md:hidden flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/10`}
                  onClick={() => copyColor(color.hex, index)}
                >
                </button>

                <div className={`flex flex-row md:flex-col items-center gap-4 md:gap-6 z-10 ${getContrastColor(color.hex)}`}>
                  <button 
                    onClick={() => copyColor(color.hex, index)}
                    className="font-mono text-xl md:text-3xl font-bold tracking-wider hover:scale-110 transition-transform flex items-center gap-2 drop-shadow-md"
                    title="Copy Hex Code"
                  >
                    {copiedIndex === index ? <Check size={24} /> : color.hex}
                  </button>

                  <div className="flex gap-2">
                    <button 
                      onClick={() => toggleLock(index)}
                      className={`p-3 rounded-full hover:bg-black/10 transition-colors drop-shadow-md backdrop-blur-sm ${color.locked ? 'bg-black/20' : ''}`}
                      title={color.locked ? "Unlock Color" : "Lock Color"}
                    >
                      {color.locked ? <Lock size={20} /> : <Unlock size={20} />}
                    </button>
                    <button 
                      onClick={() => copyColor(color.hex, index)}
                      className="p-3 rounded-full hover:bg-black/10 transition-colors drop-shadow-md md:flex hidden"
                      title="Copy Color"
                    >
                      <Copy size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white p-4 border-t border-gen-gray/20 flex justify-center items-center">
            <button
              onClick={generatePalette}
              className="bg-gen-primary text-gen-white py-4 px-8 rounded-2xl font-bold hover:bg-gen-primaryDark transition-all flex items-center justify-center gap-3 text-lg shadow-xl shadow-gen-primary/30 active:scale-[0.99] w-full md:w-auto"
            >
              <RefreshCw size={20} />
              Generate New Palette
            </button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <ColorPaletteGeneratorSeo />
          <RelatedGeneratorsTools />
        </div>
      </main>

      <footer className="bg-gen-white border-t border-gen-gray/30 py-8 px-6 mt-auto">
        <p className="text-sm text-gen-gray text-center">© 2026 ToolsWizard — Privacy-First Developer Utilities.</p>
      </footer>
    </div>
  );
}
