'use client';

import { useState, useEffect } from 'react';
import { Palette, ChevronRight, Copy, CheckCircle2, Sparkles, Wand2, Monitor } from 'lucide-react';
import RandomColorGeneratorSeo from '@/components/tools/RandomColorGeneratorSeo';
import RelatedFunTools from '@/components/tools/RelatedFunTools';

export default function RandomColorGeneratorClient() {
  const [color, setColor] = useState({ hex: '#FF595E', rgb: 'rgb(255, 89, 94)', hsl: 'hsl(358, 100%, 67%)' });
  const [copiedType, setCopiedType] = useState(null);

  const generateColor = () => {
    // Generate random hex
    const letters = '0123456789ABCDEF';
    let hex = '#';
    for (let i = 0; i < 6; i++) {
      hex += letters[Math.floor(Math.random() * 16)];
    }

    // Convert hex to rgb
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const rgb = `rgb(${r}, ${g}, ${b})`;

    // Convert rgb to hsl
    const rNorm = r / 255;
    const gNorm = g / 255;
    const bNorm = b / 255;
    const max = Math.max(rNorm, gNorm, bNorm);
    const min = Math.min(rNorm, gNorm, bNorm);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0; 
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case rNorm: h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0); break;
        case gNorm: h = (bNorm - rNorm) / d + 2; break;
        case bNorm: h = (rNorm - gNorm) / d + 4; break;
      }
      h /= 6;
    }

    const hsl = `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;

    setColor({ hex, rgb, hsl });
    setCopiedType(null);
  };

  // Generate a color on first load
  useEffect(() => {
    generateColor();
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="min-h-screen bg-fun-bg font-sans text-fun-dark">
      <section className="bg-gradient-to-r from-fun-primary to-fun-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center flex-wrap gap-1 text-fun-white/70 text-sm mb-6">
            <span>Tools</span>
            <ChevronRight size={14} className="inline" />
            <span>Fun Tools</span>
            <ChevronRight size={14} className="inline" />
            <span className="text-fun-white font-medium">Random Color Generator</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-fun-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Palette size={40} />
            Random Color Generator
          </h1>
          <p className="text-xl text-fun-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover beautiful surprise colors for your next design project. Copy HEX, RGB, or HSL codes instantly.
          </p>
        </div>
      </section>

      <main className="max-w-4xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-fun-white rounded-3xl shadow-2xl border border-fun-gray/30 p-6 md:p-10 mb-16">
          
          <div 
            className="w-full h-64 md:h-80 rounded-2xl shadow-inner mb-10 transition-colors duration-500 ease-in-out border border-fun-gray/20"
            style={{ backgroundColor: color.hex }}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {/* HEX Card */}
            <div className="bg-fun-bg border border-fun-gray/20 rounded-2xl p-6 text-center hover:border-fun-primary/50 transition-colors">
              <p className="text-sm font-bold text-fun-gray uppercase tracking-wider mb-2">HEX</p>
              <p className="text-2xl font-bold text-fun-dark mb-4">{color.hex}</p>
              <button
                onClick={() => copyToClipboard(color.hex, 'hex')}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all ${
                  copiedType === 'hex' ? 'bg-emerald-100 text-emerald-600' : 'bg-fun-white text-fun-primary border border-fun-primary/20 hover:bg-fun-primary/10'
                }`}
              >
                {copiedType === 'hex' ? <><CheckCircle2 size={18} /> Copied!</> : <><Copy size={18} /> Copy HEX</>}
              </button>
            </div>

            {/* RGB Card */}
            <div className="bg-fun-bg border border-fun-gray/20 rounded-2xl p-6 text-center hover:border-fun-primary/50 transition-colors">
              <p className="text-sm font-bold text-fun-gray uppercase tracking-wider mb-2">RGB</p>
              <p className="text-lg font-bold text-fun-dark mb-4">{color.rgb}</p>
              <button
                onClick={() => copyToClipboard(color.rgb, 'rgb')}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all ${
                  copiedType === 'rgb' ? 'bg-emerald-100 text-emerald-600' : 'bg-fun-white text-fun-primary border border-fun-primary/20 hover:bg-fun-primary/10'
                }`}
              >
                {copiedType === 'rgb' ? <><CheckCircle2 size={18} /> Copied!</> : <><Copy size={18} /> Copy RGB</>}
              </button>
            </div>

            {/* HSL Card */}
            <div className="bg-fun-bg border border-fun-gray/20 rounded-2xl p-6 text-center hover:border-fun-primary/50 transition-colors">
              <p className="text-sm font-bold text-fun-gray uppercase tracking-wider mb-2">HSL</p>
              <p className="text-lg font-bold text-fun-dark mb-4">{color.hsl}</p>
              <button
                onClick={() => copyToClipboard(color.hsl, 'hsl')}
                className={`flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all ${
                  copiedType === 'hsl' ? 'bg-emerald-100 text-emerald-600' : 'bg-fun-white text-fun-primary border border-fun-primary/20 hover:bg-fun-primary/10'
                }`}
              >
                {copiedType === 'hsl' ? <><CheckCircle2 size={18} /> Copied!</> : <><Copy size={18} /> Copy HSL</>}
              </button>
            </div>
          </div>

          <button
            onClick={generateColor}
            className="w-full bg-fun-primary hover:bg-fun-primaryDark text-fun-white py-5 rounded-2xl font-black text-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3"
          >
            <Sparkles size={28} />
            Generate New Color
          </button>
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-fun-primary/10 text-fun-primary rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Wand2 />
            </div>
            <h3 className="text-xl font-bold mb-2">Instant Inspiration</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Break out of a creative rut. Every click generates a perfectly unique hue out of 16.7 million possible colors.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-amber-100 text-amber-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Copy />
            </div>
            <h3 className="text-xl font-bold mb-2">1-Click Copy</h3>
            <p className="text-fun-gray text-sm leading-relaxed">Click to instantly copy the exact HEX, RGB, or HSL code to your clipboard for use in Figma, Photoshop, or CSS.</p>
          </div>
          <div className="bg-fun-white p-8 rounded-3xl border border-fun-gray/30 shadow-sm text-center md:text-left hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-4 mx-auto md:mx-0">
              <Monitor />
            </div>
            <h3 className="text-xl font-bold mb-2">Web Standard</h3>
            <p className="text-fun-gray text-sm leading-relaxed">All generated formats (HEX, RGB, HSL) are universally supported across all modern web browsers and design software.</p>
          </div>
        </section>

        <RandomColorGeneratorSeo />
        <RelatedFunTools currentPath="/tools/fun-tools/random-color-generator" />
      </main>

      <footer className="bg-fun-white border-t border-fun-gray/30 py-8 px-6 text-center">
        <p className="text-sm text-fun-gray">© {new Date().getFullYear()} ToolsWizard — Playful Tools for Everyone.</p>
      </footer>
    </div>
  );
}
