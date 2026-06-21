"use client";

import React, { useState, useEffect } from 'react';
import { Contrast, RefreshCw, ChevronRight, CheckCircle2, ShieldCheck, Zap, AlertTriangle, XCircle } from 'lucide-react';
import ContrastCheckerSeo from '@/components/tools/ContrastCheckerSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const hexToRgb = (hex) => {
  let r = 0, g = 0, b = 0;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.substring(1, 3), 16);
    g = parseInt(hex.substring(3, 5), 16);
    b = parseInt(hex.substring(5, 7), 16);
  }
  return { r, g, b };
};

const getLuminance = (r, g, b) => {
  const a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928
      ? v / 12.92
      : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export default function ContrastCheckerClient() {
  const [textColor, setTextColor] = useState('#FFFFFF');
  const [bgColor, setBgColor] = useState('#EC4899'); // pink-500
  const [ratio, setRatio] = useState(0);

  useEffect(() => {
    // Validate both
    const validText = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(textColor);
    const validBg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(bgColor);

    if (validText && validBg) {
      const rgbText = hexToRgb(textColor);
      const rgbBg = hexToRgb(bgColor);
      const lumText = getLuminance(rgbText.r, rgbText.g, rgbText.b);
      const lumBg = getLuminance(rgbBg.r, rgbBg.g, rgbBg.b);
      
      const brightest = Math.max(lumText, lumBg);
      const darkest = Math.min(lumText, lumBg);
      const contrast = (brightest + 0.05) / (darkest + 0.05);
      
      setRatio(contrast);
    }
  }, [textColor, bgColor]);

  const handleRandomize = () => {
    const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setTextColor(randomHex().toUpperCase());
    setBgColor(randomHex().toUpperCase());
  };

  const getStatus = (target) => {
    if (ratio >= target) return { pass: true, text: 'PASS', icon: <CheckCircle2 className="text-green-500 w-6 h-6" /> };
    return { pass: false, text: 'FAIL', icon: <XCircle className="text-red-500 w-6 h-6" /> };
  };

  const normalAA = getStatus(4.5);
  const normalAAA = getStatus(7.0);
  const largeAA = getStatus(3.0);
  const largeAAA = getStatus(4.5);
  
  // Graphical Gauge
  const getGaugeColor = () => {
    if (ratio >= 7) return 'bg-green-500';
    if (ratio >= 4.5) return 'bg-green-400';
    if (ratio >= 3) return 'bg-orange-400';
    return 'bg-red-500';
  };
  const gaugeWidth = Math.min((ratio / 21) * 100, 100);

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Contrast Checker</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Contrast size={40} />
            WCAG Contrast Checker
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Ensure your web design is highly accessible. Instantly calculate WCAG contrast ratios between text and background colors.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:p-10">
            
            {/* Input Side */}
            <div className="space-y-8">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-conv-gray mb-2">Text / Foreground Color</label>
                  <div className="flex gap-4">
                    <div className="relative h-14 w-20 rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm shrink-0">
                      <input 
                        type="color" 
                        value={textColor} 
                        onChange={(e) => setTextColor(e.target.value.toUpperCase())}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      value={textColor}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                        setTextColor(val.toUpperCase());
                      }}
                      maxLength="7"
                      className="flex-1 px-5 py-4 bg-conv-bg border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-conv-gray mb-2">Background Color</label>
                  <div className="flex gap-4">
                    <div className="relative h-14 w-20 rounded-xl overflow-hidden border-2 border-conv-gray/30 shadow-sm shrink-0">
                      <input 
                        type="color" 
                        value={bgColor} 
                        onChange={(e) => setBgColor(e.target.value.toUpperCase())}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer"
                      />
                    </div>
                    <input
                      type="text"
                      value={bgColor}
                      onChange={(e) => {
                        let val = e.target.value;
                        if (!val.startsWith('#') && val.length > 0) val = '#' + val;
                        setBgColor(val.toUpperCase());
                      }}
                      maxLength="7"
                      className="flex-1 px-5 py-4 bg-conv-bg border border-conv-gray/50 rounded-xl font-mono text-xl font-bold text-conv-dark outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20"
                    />
                  </div>
                </div>
              </div>

              <button 
                onClick={handleRandomize}
                className="w-full py-4 rounded-xl border border-conv-gray/30 hover:bg-conv-bg font-bold flex items-center justify-center gap-2 transition-colors text-conv-dark"
              >
                <RefreshCw size={18} /> Randomize Colors
              </button>

              {/* The Live Preview */}
              <div 
                className="w-full p-8 md:p-12 rounded-2xl shadow-inner border border-conv-gray/20 transition-colors duration-300 flex flex-col justify-center gap-6"
                style={{ backgroundColor: bgColor }}
              >
                <h2 style={{ color: textColor }} className="text-3xl md:text-5xl font-bold leading-tight">
                  The quick brown fox jumps over the lazy dog.
                </h2>
                <p style={{ color: textColor }} className="text-lg md:text-xl opacity-90 leading-relaxed">
                  This is how standard paragraph text looks against this background. Ensuring high contrast protects visually impaired users.
                </p>
              </div>

            </div>

            {/* Output / Analysis Side */}
            <div className="bg-conv-bg p-8 rounded-2xl border border-conv-gray/30 space-y-8">
              
              <div className="text-center">
                <p className="text-sm font-bold text-conv-gray uppercase tracking-widest mb-2">Contrast Ratio</p>
                <div className="text-6xl font-black text-conv-dark font-mono drop-shadow-sm">
                  {ratio.toFixed(2)}<span className="text-3xl text-conv-gray/60">:1</span>
                </div>
              </div>

              {/* Graphical Gauge */}
              <div className="space-y-2">
                <div className="w-full h-4 bg-conv-gray/20 rounded-full overflow-hidden relative">
                  <div 
                    className={`absolute top-0 bottom-0 left-0 transition-all duration-500 ${getGaugeColor()}`}
                    style={{ width: `${gaugeWidth}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs font-bold text-conv-gray">
                  <span>1:1</span>
                  <span>4.5:1</span>
                  <span>7:1</span>
                  <span>21:1</span>
                </div>
              </div>

              {/* WCAG Results Table */}
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-conv-dark mb-4 border-b border-conv-gray/20 pb-2">WCAG 2.1 Compliance</h3>
                
                <div className="bg-white p-5 rounded-xl border border-conv-gray/20 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-conv-dark text-lg">Normal Text</h4>
                    <p className="text-sm text-conv-gray mt-1">Smaller than 18pt or 14pt bold</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-xs font-bold text-conv-gray mb-1">AA (4.5)</div>
                      <div className="flex justify-center">{normalAA.icon}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-conv-gray mb-1">AAA (7.0)</div>
                      <div className="flex justify-center">{normalAAA.icon}</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-xl border border-conv-gray/20 shadow-sm flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-conv-dark text-lg">Large Text</h4>
                    <p className="text-sm text-conv-gray mt-1">18pt+ or 14pt+ bold</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-xs font-bold text-conv-gray mb-1">AA (3.0)</div>
                      <div className="flex justify-center">{largeAA.icon}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-bold text-conv-gray mb-1">AAA (4.5)</div>
                      <div className="flex justify-center">{largeAAA.icon}</div>
                    </div>
                  </div>
                </div>

              </div>
              
              {!normalAA.pass && (
                <div className="bg-red-50 p-4 rounded-xl border border-red-100 flex gap-3 text-red-800">
                  <AlertTriangle className="shrink-0" />
                  <p className="text-sm leading-relaxed font-medium">
                    This color combination fails the basic WCAG AA requirements for normal text. It is highly recommended to darken the darker color or lighten the lighter color to achieve at least a 4.5:1 ratio.
                  </p>
                </div>
              )}

            </div>
          </div>
        </div>

        <ContrastCheckerSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
