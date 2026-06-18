"use client";

import { useState } from "react";
import { Copy, RefreshCw, Palette, Download, Eye, Droplets, ShieldCheck, Zap, ChevronRight, CheckCircle2 } from "lucide-react";
import HSLHexSeo from "@/components/tools/HSLHexSeo";

export default function HSLHexClient() {
  const [hue, setHue] = useState(180);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(50);
  const [hex, setHex] = useState("#40BFBF");
  const [copied, setCopied] = useState(false);

  const hslToHex = (h, s, l) => {
    s /= 100;
    l /= 100;

    const c = (1 - Math.abs(2 * l - 1)) * s;
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l - c / 2;
    let r = 0,
      g = 0,
      b = 0;

    if (0 <= h && h < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (60 <= h && h < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (120 <= h && h < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (180 <= h && h < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (240 <= h && h < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (300 <= h && h < 360) {
      r = c;
      g = 0;
      b = x;
    }

    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);

    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    };

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
  };

  const updateColor = (h, s, l) => {
    setHue(h);
    setSaturation(s);
    setLightness(l);
    setHex(hslToHex(h, s, l));
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(hex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const randomColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSat = Math.floor(Math.random() * 100);
    const randomLight = Math.floor(Math.random() * 100);
    updateColor(randomHue, randomSat, randomLight);
  };

  const downloadAsCSS = () => {
    const css = `/* HSL to Hex Color Conversion */\n:root {\n  --primary-color: ${hex};\n  --primary-hsl: hsl(${hue}, ${saturation}%, ${lightness}%);\n}`;
    const blob = new Blob([css], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "colors.css";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-design-bg font-sans text-design-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-design-primary to-design-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-design-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">HSL to Hex</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-design-white mb-6 tracking-tight">
            HSL to Hex Converter
          </h1>
          <p className="text-xl text-design-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert HSL (Hue, Saturation, Lightness) colors to Hex format instantly. Perfect for designers and developers.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-design-white rounded-3xl shadow-2xl border border-design-gray overflow-hidden p-6 md:p-10 mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Column - Input */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-design-dark flex items-center gap-2">
                <Droplets size={24} className="text-design-primary" /> HSL Values
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">
                    Hue: <span className="text-design-primary">{hue}°</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="360"
                    value={hue}
                    onChange={(e) => updateColor(parseInt(e.target.value), saturation, lightness)}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: 'linear-gradient(to right, #ff0000 0%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%)' }}
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">
                    Saturation: <span className="text-design-primary">{saturation}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={saturation}
                    onChange={(e) => updateColor(hue, parseInt(e.target.value), lightness)}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, hsl(${hue}, 0%, ${lightness}%), hsl(${hue}, 100%, ${lightness}%))` }}
                  />
                </div>

                <div>
                  <label className="block text-base font-semibold text-design-dark mb-3">
                    Lightness: <span className="text-design-primary">{lightness}%</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={lightness}
                    onChange={(e) => updateColor(hue, saturation, parseInt(e.target.value))}
                    className="w-full h-3 rounded-lg appearance-none cursor-pointer"
                    style={{ background: `linear-gradient(to right, #000000, hsl(${hue}, ${saturation}%, 50%), #ffffff)` }}
                  />
                </div>
              </div>

              <button
                onClick={randomColor}
                className="w-full bg-design-gray/20 hover:bg-design-gray/30 text-design-dark py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-lg"
              >
                <RefreshCw size={20} /> Generate Random Color
              </button>
            </div>

            {/* Right Column - Output */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-design-dark flex items-center gap-2">
                <Palette size={24} className="text-design-primary" /> Result Preview
              </h3>

              <div 
                className="w-full h-48 rounded-2xl border-4 border-design-gray shadow-inner transition-colors duration-200"
                style={{ backgroundColor: hex }}
              />

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <input 
                    readOnly
                    value={hex}
                    className="flex-1 px-5 py-4 bg-design-bg/50 border border-design-gray rounded-xl font-mono text-2xl font-bold text-design-dark outline-none"
                  />
                  <button 
                    onClick={copyToClipboard}
                    className={`p-4 rounded-xl text-design-white transition-colors flex items-center justify-center ${copied ? 'bg-green-600' : 'bg-design-primary hover:bg-design-primaryDark'}`}
                    title="Copy Hex"
                  >
                    {copied ? <CheckCircle2 size={28} /> : <Copy size={28} />}
                  </button>
                </div>

                <div className="p-5 bg-design-bg/30 rounded-xl space-y-2 text-design-dark/80 text-lg">
                  <p><strong>HSL:</strong> hsl({hue}, {saturation}%, {lightness}%)</p>
                  <p><strong>Hex:</strong> {hex}</p>
                </div>

                <button
                  onClick={downloadAsCSS}
                  className="w-full bg-design-dark hover:bg-black text-design-white py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 text-lg"
                >
                  <Download size={20} /> Download CSS Snippet
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-design-dark/70 leading-relaxed">Your color values are processed locally. We never transmit your data to our servers, keeping your design work private and secure.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Conversion</h3>
            <p className="text-design-dark/70 leading-relaxed">Real-time HSL to Hex conversion as you adjust sliders. No waiting or loading times for instant color matching.</p>
          </div>
          <div className="bg-design-white p-8 rounded-3xl border border-design-gray shadow-sm">
            <div className="w-12 h-12 bg-design-primary/10 text-design-primary rounded-xl flex items-center justify-center mb-6"><Eye /></div>
            <h3 className="text-xl font-bold mb-3">Visual Preview</h3>
            <p className="text-design-dark/70 leading-relaxed">See your color in real-time with a live preview. Perfect for matching colors and visualizing your design choices.</p>
          </div>
        </section>

        <HSLHexSeo />
      </main>

      <footer className="bg-design-white border-t border-design-gray py-8 px-6">
        <p className="text-design-dark/60 text-center font-medium">© 2026 ToolsWizard - Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}