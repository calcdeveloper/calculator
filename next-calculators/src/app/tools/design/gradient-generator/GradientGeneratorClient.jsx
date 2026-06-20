"use client";

import React, { useState } from 'react';
import { Zap, Copy, CheckCircle2, ChevronRight, RefreshCw, MoveRight, Circle, MoveDownRight } from 'lucide-react';
import GradientGeneratorSeo from '@/components/tools/GradientGeneratorSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

export default function GradientGeneratorClient() {
  const [color1, setColor1] = useState('#EC4899'); // Pink
  const [color2, setColor2] = useState('#8B5CF6'); // Purple
  const [type, setType] = useState('linear');
  const [angle, setAngle] = useState(90);
  const [copySuccess, setCopySuccess] = useState(false);

  const cssOutput = type === 'linear' 
    ? `background: linear-gradient(${angle}deg, ${color1}, ${color2});`
    : `background: radial-gradient(circle, ${color1}, ${color2});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cssOutput);
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2000);
  };

  const generateRandomGradient = () => {
    const randomHex = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    setColor1(randomHex());
    setColor2(randomHex());
    setAngle(Math.floor(Math.random() * 360));
  };

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Gradient Generator</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Zap size={40} />
            CSS Gradient Generator
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Create beautiful, smooth CSS linear and radial gradients. Export production-ready code instantly.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Editor Side */}
            <div className="p-8 md:p-12 space-y-10 border-b lg:border-b-0 lg:border-r border-conv-gray/30">
              
              {/* Type Selection */}
              <div>
                <label className="block text-sm font-bold text-conv-gray mb-3">Gradient Type</label>
                <div className="flex bg-conv-bg p-1 rounded-xl border border-conv-gray/30">
                  <button 
                    onClick={() => setType('linear')}
                    className={`flex-1 py-3 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${type === 'linear' ? 'bg-conv-white shadow-sm text-pink-600' : 'text-conv-gray hover:text-conv-dark'}`}
                  >
                    <MoveRight size={18} /> Linear
                  </button>
                  <button 
                    onClick={() => setType('radial')}
                    className={`flex-1 py-3 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 ${type === 'radial' ? 'bg-conv-white shadow-sm text-purple-600' : 'text-conv-gray hover:text-conv-dark'}`}
                  >
                    <Circle size={18} /> Radial
                  </button>
                </div>
              </div>

              {/* Colors */}
              <div>
                <label className="block text-sm font-bold text-conv-gray mb-3">Color Stops</label>
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <div className="relative h-16 w-full rounded-2xl overflow-hidden border-2 border-conv-gray/20 shadow-sm group">
                      <input 
                        type="color" 
                        value={color1} 
                        onChange={(e) => setColor1(e.target.value)}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center font-mono font-bold bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {color1.toUpperCase()}
                      </div>
                    </div>
                  </div>
                  <MoveRight size={24} className="text-conv-gray" />
                  <div className="flex-1">
                    <div className="relative h-16 w-full rounded-2xl overflow-hidden border-2 border-conv-gray/20 shadow-sm group">
                      <input 
                        type="color" 
                        value={color2} 
                        onChange={(e) => setColor2(e.target.value)}
                        className="absolute -top-4 -left-4 w-[200%] h-[200%] cursor-pointer"
                      />
                      <div className="absolute inset-0 flex items-center justify-center font-mono font-bold bg-white/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        {color2.toUpperCase()}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Angle (Linear only) */}
              {type === 'linear' && (
                <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                  <div className="flex justify-between items-center mb-3">
                    <label className="block text-sm font-bold text-conv-gray">Angle</label>
                    <span className="font-mono font-bold text-pink-600">{angle}°</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="360" 
                    value={angle} 
                    onChange={(e) => setAngle(Number(e.target.value))}
                    className="w-full h-3 bg-conv-gray/20 rounded-lg appearance-none cursor-pointer accent-pink-600"
                  />
                  <div className="flex justify-between mt-3">
                    {[0, 45, 90, 135, 180, 225, 270, 315].map(deg => (
                      <button 
                        key={deg}
                        onClick={() => setAngle(deg)}
                        className={`w-8 h-8 rounded-full text-xs font-bold transition-all ${angle === deg ? 'bg-pink-600 text-white' : 'bg-conv-bg text-conv-gray hover:bg-conv-gray/20'}`}
                      >
                        {deg}°
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <button 
                onClick={generateRandomGradient}
                className="w-full py-4 rounded-xl border border-conv-gray/30 hover:bg-conv-bg font-bold flex items-center justify-center gap-2 transition-colors text-conv-dark"
              >
                <RefreshCw size={18} /> Surprise Me
              </button>
            </div>

            {/* Output Side */}
            <div className="bg-conv-bg p-8 md:p-12 flex flex-col items-center justify-center">
              
              {/* The Live Preview */}
              <div 
                className="w-full aspect-video rounded-3xl shadow-inner border border-conv-gray/20 mb-10 transition-all duration-300 relative overflow-hidden"
                style={{ 
                  background: type === 'linear' ? `linear-gradient(${angle}deg, ${color1}, ${color2})` : `radial-gradient(circle, ${color1}, ${color2})`
                }}
              >
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiAvPgo8L3N2Zz4=')] mix-blend-overlay"></div>
              </div>

              {/* CSS Code Snippet */}
              <div className="w-full relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white border border-conv-gray/20 rounded-xl p-6 shadow-sm">
                  <div className="flex justify-between items-start gap-4">
                    <code className="font-mono text-conv-dark/80 text-sm md:text-base break-all leading-relaxed">
                      {cssOutput}
                    </code>
                    <button 
                      onClick={handleCopy}
                      className={`p-3 rounded-lg text-white transition-all shrink-0 ${copySuccess ? 'bg-green-500 scale-110' : 'bg-conv-dark hover:bg-pink-600'}`}
                      title="Copy CSS snippet"
                    >
                      {copySuccess ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <GradientGeneratorSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
