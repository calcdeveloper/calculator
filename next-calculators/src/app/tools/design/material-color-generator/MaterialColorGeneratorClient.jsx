"use client";

import React, { useState } from 'react';
import { Layers, Copy, CheckCircle2, ChevronRight } from 'lucide-react';
import MaterialColorGeneratorSeo from '@/components/tools/MaterialColorGeneratorSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

// The Official Material Design 2014 Palette
const materialColors = {
  red: { 50: '#FFEBEE', 100: '#FFCDD2', 200: '#EF9A9A', 300: '#E57373', 400: '#EF5350', 500: '#F44336', 600: '#E53935', 700: '#D32F2F', 800: '#C62828', 900: '#B71C1C', A100: '#FF8A80', A200: '#FF5252', A400: '#FF1744', A700: '#D50000' },
  pink: { 50: '#FCE4EC', 100: '#F8BBD0', 200: '#F48FB1', 300: '#F06292', 400: '#EC407A', 500: '#E91E63', 600: '#D81B60', 700: '#C2185B', 800: '#AD1457', 900: '#880E4F', A100: '#FF80AB', A200: '#FF4081', A400: '#F50057', A700: '#C51162' },
  purple: { 50: '#F3E5F5', 100: '#E1BEE7', 200: '#CE93D8', 300: '#BA68C8', 400: '#AB47BC', 500: '#9C27B0', 600: '#8E24AA', 700: '#7B1FA2', 800: '#6A1B9A', 900: '#4A148C', A100: '#EA80FC', A200: '#E040FB', A400: '#D500F9', A700: '#AA00FF' },
  deepPurple: { 50: '#EDE7F6', 100: '#D1C4E9', 200: '#B39DDB', 300: '#9575CD', 400: '#7E57C2', 500: '#673AB7', 600: '#5E35B1', 700: '#512DA8', 800: '#4527A0', 900: '#311B92', A100: '#B388FF', A200: '#7C4DFF', A400: '#651FFF', A700: '#6200EA' },
  indigo: { 50: '#E8EAF6', 100: '#C5CAE9', 200: '#9FA8DA', 300: '#7986CB', 400: '#5C6BC0', 500: '#3F51B5', 600: '#3949AB', 700: '#303F9F', 800: '#283593', 900: '#1A237E', A100: '#8C9EFF', A200: '#536DFE', A400: '#3D5AFE', A700: '#304FFE' },
  blue: { 50: '#E3F2FD', 100: '#BBDEFB', 200: '#90CAF9', 300: '#64B5F6', 400: '#42A5F5', 500: '#2196F3', 600: '#1E88E5', 700: '#1976D2', 800: '#1565C0', 900: '#0D47A1', A100: '#82B1FF', A200: '#448AFF', A400: '#2979FF', A700: '#2962FF' },
  lightBlue: { 50: '#E1F5FE', 100: '#B3E5FC', 200: '#81D4FA', 300: '#4FC3F7', 400: '#29B6F6', 500: '#03A9F4', 600: '#039BE5', 700: '#0288D1', 800: '#0277BD', 900: '#01579B', A100: '#80D8FF', A200: '#40C4FF', A400: '#00B0FF', A700: '#0091EA' },
  cyan: { 50: '#E0F7FA', 100: '#B2EBF2', 200: '#80DEEA', 300: '#4DD0E1', 400: '#26C6DA', 500: '#00BCD4', 600: '#00ACC1', 700: '#0097A7', 800: '#00838F', 900: '#006064', A100: '#84FFFF', A200: '#18FFFF', A400: '#00E5FF', A700: '#00B8D4' },
  teal: { 50: '#E0F2F1', 100: '#B2DFDB', 200: '#80CBC4', 300: '#4DB6AC', 400: '#26A69A', 500: '#009688', 600: '#00897B', 700: '#00796B', 800: '#00695C', 900: '#004D40', A100: '#A7FFEB', A200: '#64FFDA', A400: '#1DE9B6', A700: '#00BFA5' },
  green: { 50: '#E8F5E9', 100: '#C8E6C9', 200: '#A5D6A7', 300: '#81C784', 400: '#66BB6A', 500: '#4CAF50', 600: '#43A047', 700: '#388E3C', 800: '#2E7D32', 900: '#1B5E20', A100: '#B9F6CA', A200: '#69F0AE', A400: '#00E676', A700: '#00C853' },
  lightGreen: { 50: '#F1F8E9', 100: '#DCEDC8', 200: '#C5E1A5', 300: '#AED581', 400: '#9CCC65', 500: '#8BC34A', 600: '#7CB342', 700: '#689F38', 800: '#558B2F', 900: '#33691E', A100: '#CCFF90', A200: '#B2FF59', A400: '#76FF03', A700: '#64DD17' },
  lime: { 50: '#F9FBE7', 100: '#F0F4C3', 200: '#E6EE9C', 300: '#DCE775', 400: '#D4E157', 500: '#CDDC39', 600: '#C0CA33', 700: '#AFB42B', 800: '#9E9D24', 900: '#827717', A100: '#F4FF81', A200: '#EEFF41', A400: '#C6FF00', A700: '#AEEA00' },
  yellow: { 50: '#FFFDE7', 100: '#FFF9C4', 200: '#FFF59D', 300: '#FFF176', 400: '#FFEE58', 500: '#FFEB3B', 600: '#FDD835', 700: '#FBC02D', 800: '#F9A825', 900: '#F57F17', A100: '#FFFF8D', A200: '#FFFF00', A400: '#FFEA00', A700: '#FFD600' },
  amber: { 50: '#FFF8E1', 100: '#FFECB3', 200: '#FFE082', 300: '#FFD54F', 400: '#FFCA28', 500: '#FFC107', 600: '#FFB300', 700: '#FFA000', 800: '#FF8F00', 900: '#FF6F00', A100: '#FFE57F', A200: '#FFD740', A400: '#FFC400', A700: '#FFAB00' },
  orange: { 50: '#FFF3E0', 100: '#FFE0B2', 200: '#FFCC80', 300: '#FFB74D', 400: '#FFA726', 500: '#FF9800', 600: '#FB8C00', 700: '#F57C00', 800: '#EF6C00', 900: '#E65100', A100: '#FFD180', A200: '#FFAB40', A400: '#FF9100', A700: '#FF6D00' },
  deepOrange: { 50: '#FBE9E7', 100: '#FFCCBC', 200: '#FFAB91', 300: '#FF8A65', 400: '#FF7043', 500: '#FF5722', 600: '#F4511E', 700: '#E64A19', 800: '#D84315', 900: '#BF360C', A100: '#FF9E80', A200: '#FF6E40', A400: '#FF3D00', A700: '#DD2C00' },
  brown: { 50: '#EFEBE9', 100: '#D7CCC8', 200: '#BCAAA4', 300: '#A1887F', 400: '#8D6E63', 500: '#795548', 600: '#6D4C41', 700: '#5D4037', 800: '#4E342E', 900: '#3E2723' },
  grey: { 50: '#FAFAFA', 100: '#F5F5F5', 200: '#EEEEEE', 300: '#E0E0E0', 400: '#BDBDBD', 500: '#9E9E9E', 600: '#757575', 700: '#616161', 800: '#424242', 900: '#212121' },
  blueGrey: { 50: '#ECEFF1', 100: '#CFD8DC', 200: '#B0BEC5', 300: '#90A4AE', 400: '#78909C', 500: '#607D8B', 600: '#546E7A', 700: '#455A64', 800: '#37474F', 900: '#263238' },
};

export default function MaterialColorGeneratorClient() {
  const [selectedColor, setSelectedColor] = useState({ name: 'blue', shade: '500', hex: '#2196F3' });
  const [copyState, setCopyState] = useState('');
  const [search, setSearch] = useState('');

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopyState('hex');
    setTimeout(() => setCopyState(''), 2000);
  };

  const getContrastText = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? 'text-black' : 'text-white';
  };

  const formatName = (name) => {
    return name.replace(/([A-Z])/g, ' $1').toLowerCase();
  };

  const filteredColors = Object.entries(materialColors).filter(([name]) => 
    name.toLowerCase().includes(search.toLowerCase().replace(/\s+/g, ''))
  );

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Material Color Generator</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Layers size={40} />
            Google Material Colors
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Browse and copy the official Google Material Design (M2) color palette. Engineered for vibrant, accessible Android & Web UI.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-7xl mx-auto px-4 -mt-20 pb-20">
        
        {/* Active Selection Modal */}
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden mb-12 p-8 md:p-12 transition-colors duration-500" style={{ backgroundColor: selectedColor.hex }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className={`space-y-2 ${getContrastText(selectedColor.hex)}`}>
              <h2 className="text-4xl md:text-5xl font-black capitalize">{formatName(selectedColor.name)} {selectedColor.shade}</h2>
              <p className="text-xl font-mono opacity-90">{selectedColor.hex.toUpperCase()}</p>
            </div>
            
            <button 
              onClick={() => handleCopy(selectedColor.hex)}
              className="w-full md:w-auto px-8 py-5 rounded-xl bg-white text-slate-900 hover:bg-slate-50 font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-xl"
            >
              {copyState === 'hex' ? <><CheckCircle2 size={24} className="text-green-500" /> Copied!</> : <><Copy size={24} /> Copy Hex Code</>}
            </button>
          </div>
        </div>

        {/* Palette Grid */}
        <div className="bg-conv-white rounded-3xl shadow-xl border border-conv-gray/20 p-6 md:p-10 mb-8">
          
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold text-conv-dark">Material Design Palette</h3>
            <input 
              type="text" 
              placeholder="Search colors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border border-conv-gray/30 rounded-lg focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 outline-none"
            />
          </div>

          <div className="space-y-12">
            {filteredColors.map(([name, shades]) => (
              <div key={name}>
                <h4 className="text-lg font-bold text-conv-dark capitalize mb-4">{formatName(name)}</h4>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {Object.entries(shades).map(([shade, hex]) => (
                    <button
                      key={`${name}-${shade}`}
                      onClick={() => setSelectedColor({ name, shade, hex })}
                      className="group flex flex-col cursor-pointer transition-transform hover:scale-110 focus:outline-none w-[calc(20%-0.5rem)] sm:w-[calc(14.28%-0.5rem)] md:w-auto md:flex-1 min-w-[3rem]"
                    >
                      <div 
                        className="w-full aspect-square rounded-xl shadow-inner border border-black/5"
                        style={{ backgroundColor: hex }}
                      ></div>
                      <div className="mt-2 text-center">
                        <div className="text-xs font-bold text-conv-dark">{shade}</div>
                        <div className="text-[10px] font-mono text-conv-gray opacity-0 group-hover:opacity-100 transition-opacity hidden md:block uppercase">{hex}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        <MaterialColorGeneratorSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
