"use client";

import React, { useState } from 'react';
import { Wind, Copy, CheckCircle2, ChevronRight } from 'lucide-react';
import TailwindColorPickerSeo from '@/components/tools/TailwindColorPickerSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

// The Default Tailwind CSS Color Palette
const tailwindColors = {
  slate: { 50: '#f8fafc', 100: '#f1f5f9', 200: '#e2e8f0', 300: '#cbd5e1', 400: '#94a3b8', 500: '#64748b', 600: '#475569', 700: '#334155', 800: '#1e293b', 900: '#0f172a', 950: '#020617' },
  gray: { 50: '#f9fafb', 100: '#f3f4f6', 200: '#e5e7eb', 300: '#d1d5db', 400: '#9ca3af', 500: '#6b7280', 600: '#4b5563', 700: '#374151', 800: '#1f2937', 900: '#111827', 950: '#030712' },
  zinc: { 50: '#fafafa', 100: '#f4f4f5', 200: '#e4e4e7', 300: '#d4d4d8', 400: '#a1a1aa', 500: '#71717a', 600: '#52525b', 700: '#3f3f46', 800: '#27272a', 900: '#18181b', 950: '#09090b' },
  neutral: { 50: '#fafafa', 100: '#f5f5f5', 200: '#e5e5e5', 300: '#d4d4d4', 400: '#a3a3a3', 500: '#737373', 600: '#525252', 700: '#404040', 800: '#262626', 900: '#171717', 950: '#0a0a0a' },
  stone: { 50: '#fafaf9', 100: '#f5f5f4', 200: '#e7e5e4', 300: '#d6d3d1', 400: '#a8a29e', 500: '#78716c', 600: '#57534e', 700: '#44403c', 800: '#292524', 900: '#1c1917', 950: '#0c0a09' },
  red: { 50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca', 300: '#fca5a5', 400: '#f87171', 500: '#ef4444', 600: '#dc2626', 700: '#b91c1c', 800: '#991b1b', 900: '#7f1d1d', 950: '#450a0a' },
  orange: { 50: '#fff7ed', 100: '#ffedd5', 200: '#fed7aa', 300: '#fdba74', 400: '#fb923c', 500: '#f97316', 600: '#ea580c', 700: '#c2410c', 800: '#9a3412', 900: '#7c2d12', 950: '#431407' },
  amber: { 50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d', 400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309', 800: '#92400e', 900: '#78350f', 950: '#451a03' },
  yellow: { 50: '#fefce8', 100: '#fef9c3', 200: '#fef08a', 300: '#fde047', 400: '#facc15', 500: '#eab308', 600: '#ca8a04', 700: '#a16207', 800: '#854d0e', 900: '#713f12', 950: '#422006' },
  lime: { 50: '#f7fee7', 100: '#ecfccb', 200: '#d9f99d', 300: '#bef264', 400: '#a3e635', 500: '#84cc16', 600: '#65a30d', 700: '#4d7c0f', 800: '#3f6212', 900: '#365314', 950: '#1a2e05' },
  green: { 50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac', 400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d', 800: '#166534', 900: '#14532d', 950: '#052e16' },
  emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 300: '#6ee7b7', 400: '#34d399', 500: '#10b981', 600: '#059669', 700: '#047857', 800: '#065f46', 900: '#064e3b', 950: '#022c22' },
  teal: { 50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4', 400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e', 800: '#115e59', 900: '#134e4a', 950: '#042f2e' },
  cyan: { 50: '#ecfeff', 100: '#cffafe', 200: '#a5f3fc', 300: '#67e8f9', 400: '#22d3ee', 500: '#06b6d4', 600: '#0891b2', 700: '#0e7490', 800: '#155e75', 900: '#164e63', 950: '#083344' },
  sky: { 50: '#f0f9ff', 100: '#e0f2fe', 200: '#bae6fd', 300: '#7dd3fc', 400: '#38bdf8', 500: '#0ea5e9', 600: '#0284c7', 700: '#0369a1', 800: '#075985', 900: '#0c4a6e', 950: '#082f49' },
  blue: { 50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd', 400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8', 800: '#1e40af', 900: '#1e3a8a', 950: '#172554' },
  indigo: { 50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc', 400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca', 800: '#3730a3', 900: '#312e81', 950: '#1e1b4b' },
  violet: { 50: '#f5f3ff', 100: '#ede9fe', 200: '#ddd6fe', 300: '#c4b5fd', 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed', 700: '#6d28d9', 800: '#5b21b6', 900: '#4c1d95', 950: '#2e1065' },
  purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe', 400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87', 950: '#3b0764' },
  fuchsia: { 50: '#fdf4ff', 100: '#fae8ff', 200: '#f5d0fe', 300: '#f0abfc', 400: '#e879f9', 500: '#d946ef', 600: '#c026d3', 700: '#a21caf', 800: '#86198f', 900: '#701a75', 950: '#4a044e' },
  pink: { 50: '#fdf2f8', 100: '#fce7f3', 200: '#fbcfe8', 300: '#f9a8d4', 400: '#f472b6', 500: '#ec4899', 600: '#db2777', 700: '#be185d', 800: '#9d174d', 900: '#831843', 950: '#500724' },
  rose: { 50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af', 400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c', 800: '#9f1239', 900: '#881337', 950: '#4c0519' },
};

export default function TailwindColorPickerClient() {
  const [selectedColor, setSelectedColor] = useState({ name: 'blue', shade: '500', hex: '#3b82f6' });
  const [copyState, setCopyState] = useState('');
  const [search, setSearch] = useState('');

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

  const filteredColors = Object.entries(tailwindColors).filter(([name]) => name.includes(search.toLowerCase()));

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Tailwind Color Picker</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Wind size={40} />
            Tailwind CSS Color Picker
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Browse, copy, and implement the entire official Tailwind CSS v3 color palette instantly. Perfect for utility-first design.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-20">
        
        {/* Active Selection Modal */}
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden mb-12 p-8 md:p-12 transition-colors duration-500" style={{ backgroundColor: selectedColor.hex }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className={`space-y-2 ${getContrastText(selectedColor.hex)}`}>
              <h2 className="text-4xl md:text-5xl font-black capitalize">{selectedColor.name}-{selectedColor.shade}</h2>
              <p className="text-xl font-mono opacity-90">{selectedColor.hex.toUpperCase()}</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button 
                onClick={() => handleCopy(`bg-${selectedColor.name}-${selectedColor.shade}`, 'class')}
                className="px-6 py-4 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/40 font-bold transition-all flex items-center justify-center gap-2 drop-shadow-sm text-white"
              >
                {copyState === 'class' ? <CheckCircle2 size={20} /> : <Copy size={20} />} Class Name
              </button>
              <button 
                onClick={() => handleCopy(selectedColor.hex, 'hex')}
                className="px-6 py-4 rounded-xl bg-white text-slate-900 hover:bg-slate-50 font-bold transition-all flex items-center justify-center gap-2 shadow-xl"
              >
                {copyState === 'hex' ? <CheckCircle2 size={20} className="text-green-500" /> : <Copy size={20} />} Hex Code
              </button>
            </div>
          </div>
        </div>

        {/* Palette Grid */}
        <div className="bg-conv-white rounded-3xl shadow-xl border border-conv-gray/20 p-6 md:p-10 mb-8">
          
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-conv-dark">Full Palette</h3>
            <input 
              type="text" 
              placeholder="Search colors (e.g., 'blue')"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-conv-gray/30 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none"
            />
          </div>

          <div className="space-y-12">
            {filteredColors.map(([name, shades]) => (
              <div key={name}>
                <h4 className="text-lg font-bold text-conv-dark capitalize mb-4">{name}</h4>
                <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-11 gap-3">
                  {Object.entries(shades).map(([shade, hex]) => (
                    <button
                      key={`${name}-${shade}`}
                      onClick={() => setSelectedColor({ name, shade, hex })}
                      className="group flex flex-col cursor-pointer transition-transform hover:scale-110 focus:outline-none"
                    >
                      <div 
                        className="w-full aspect-square rounded-xl shadow-inner border border-black/5"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-bold text-conv-dark">{shade}</div>
                        <div className="text-[10px] font-mono text-conv-gray opacity-0 group-hover:opacity-100 transition-opacity uppercase">{hex}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <TailwindColorPickerSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
