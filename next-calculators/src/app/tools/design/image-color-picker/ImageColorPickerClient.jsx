"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Pipette, Upload, Copy, CheckCircle2, ChevronRight, Image as ImageIcon, X } from 'lucide-react';
import ImageColorPickerSeo from '@/components/tools/ImageColorPickerSeo';
import RelatedDesignTools from '@/components/tools/RelatedDesignTools';

const rgbToHex = (r, g, b) => {
  return '#' + [r, g, b].map(x => {
    const hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
};

export default function ImageColorPickerClient() {
  const [imageSrc, setImageSrc] = useState(null);
  const [hoverColor, setHoverColor] = useState('#FFFFFF');
  const [pickedColors, setPickedColors] = useState([]);
  const [copyStates, setCopyStates] = useState({});
  const canvasRef = useRef(null);
  const imgRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageSrc(url);
    }
  };

  const handleImageLoad = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imgRef.current;
    
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0, img.width, img.height);
  };

  const handleMouseMove = (e) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    // Calculate the scale between CSS pixels and actual Canvas pixels
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    try {
      const ctx = canvas.getContext('2d');
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
      setHoverColor(hex);
    } catch (err) {
      // Ignore cross-origin canvas reading errors if they happen
    }
  };

  const handleCanvasClick = (e) => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    try {
      const ctx = canvas.getContext('2d');
      const pixel = ctx.getImageData(x, y, 1, 1).data;
      const hex = rgbToHex(pixel[0], pixel[1], pixel[2]);
      
      if (!pickedColors.includes(hex)) {
        setPickedColors(prev => [hex, ...prev].slice(0, 16)); // Keep last 16
      }
    } catch (err) {
      console.error(err);
    }
  };

  const removeColor = (hex) => {
    setPickedColors(prev => prev.filter(c => c !== hex));
  };

  const handleCopy = (hex) => {
    navigator.clipboard.writeText(hex);
    setCopyStates(prev => ({ ...prev, [hex]: true }));
    setTimeout(() => {
      setCopyStates(prev => ({ ...prev, [hex]: false }));
    }, 1500);
  };

  // Demo Image
  useEffect(() => {
    // Load a beautiful demo gradient block to start
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');
    
    const grad = ctx.createLinearGradient(0, 0, 600, 400);
    grad.addColorStop(0, '#FF1493'); // DeepPink
    grad.addColorStop(0.5, '#4B0082'); // Indigo
    grad.addColorStop(1, '#00CED1'); // DarkTurquoise
    
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 600, 400);
    setImageSrc(canvas.toDataURL());
  }, []);

  return (
    <div className="min-h-screen bg-conv-bg font-sans text-conv-dark">
      {/* Hero Header */}
      <header className="bg-linear-to-r from-pink-600 to-purple-600 pt-16 pb-32 px-4">
        <nav className="flex justify-center items-center gap-2 text-conv-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <span>Tools</span> <ChevronRight size={14} /> <span>Design Tools</span> <ChevronRight size={14} /> <span className="text-white font-medium">Image Color Picker</span>
        </nav>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-conv-white mb-6 tracking-tight flex items-center justify-center gap-4">
            <Pipette size={40} />
            Image Color Picker
          </h1>
          <p className="text-xl text-conv-white/90 max-w-2xl mx-auto leading-relaxed">
            Upload any image and extract exact Hex color codes instantly by hovering and clicking. 100% private client-side processing.
          </p>
        </div>
      </header>

      {/* Tool Interface */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray/30 overflow-hidden mb-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3">
            
            {/* Canvas / Image Area */}
            <div className="lg:col-span-2 p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-conv-gray/20 bg-conv-bg relative">
              
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-conv-dark">Image Canvas</h3>
                <label className="cursor-pointer px-4 py-2 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-lg transition-colors flex items-center gap-2 text-sm shadow-sm">
                  <Upload size={16} /> Upload New Image
                  <input type="file" className="hidden" accept="image/png, image/jpeg, image/webp" onChange={handleImageUpload} />
                </label>
              </div>

              <div className="relative rounded-2xl overflow-hidden border-2 border-conv-gray/30 shadow-inner bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZWRlOWUzIiAvPgo8cmVjdCB4PSI0IiB5PSI0IiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZWRlOWUzIiAvPgo8L3N2Zz4=')]">
                {imageSrc ? (
                  <div className="relative cursor-crosshair">
                    <img 
                      ref={imgRef}
                      src={imageSrc} 
                      alt="Upload target" 
                      className="w-full h-auto max-h-[600px] object-contain hidden"
                      onLoad={handleImageLoad}
                    />
                    <canvas 
                      ref={canvasRef}
                      className="w-full h-auto max-h-[600px] object-contain"
                      onMouseMove={handleMouseMove}
                      onClick={handleCanvasClick}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-[400px] text-conv-gray">
                    <ImageIcon size={64} className="opacity-50 mb-4" />
                    <p className="font-bold">No Image Uploaded</p>
                  </div>
                )}
              </div>
            </div>

            {/* Sidebar Data Area */}
            <div className="p-6 md:p-8 flex flex-col h-full bg-white">
              
              <div className="mb-8">
                <h3 className="text-sm font-bold text-conv-gray uppercase tracking-widest mb-3">Live Hover</h3>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-conv-gray/20 shadow-sm">
                  <div className="w-12 h-12 rounded-full border-4 border-conv-white shadow-md transition-colors" style={{ backgroundColor: hoverColor }}></div>
                  <div className="font-mono text-2xl font-bold text-conv-dark">{hoverColor}</div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-sm font-bold text-conv-gray uppercase tracking-widest">Picked Palette</h3>
                  {pickedColors.length > 0 && (
                    <button 
                      onClick={() => setPickedColors([])}
                      className="text-xs font-bold text-red-500 hover:text-red-700"
                    >
                      Clear All
                    </button>
                  )}
                </div>

                {pickedColors.length === 0 ? (
                  <div className="text-center py-10 border-2 border-dashed border-conv-gray/30 rounded-xl">
                    <p className="text-sm text-conv-gray font-medium">Click on the image to pick and save colors here.</p>
                  </div>
                ) : (
                  <div className="space-y-3 overflow-y-auto max-h-[400px] pr-2">
                    {pickedColors.map((hex, idx) => (
                      <div key={`${hex}-${idx}`} className="flex items-center justify-between p-3 rounded-xl border border-conv-gray/20 hover:border-pink-500/30 group bg-conv-bg transition-colors">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg shadow-sm" style={{ backgroundColor: hex }}></div>
                          <span className="font-mono font-bold text-conv-dark">{hex}</span>
                        </div>
                        <div className="flex gap-1">
                          <button 
                            onClick={() => handleCopy(hex)}
                            className={`p-2 rounded-lg transition-colors ${copyStates[hex] ? 'bg-green-500 text-white' : 'text-conv-gray hover:bg-conv-gray/20 hover:text-conv-dark'}`}
                            title="Copy Hex"
                          >
                            {copyStates[hex] ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                          </button>
                          <button 
                            onClick={() => removeColor(hex)}
                            className="p-2 rounded-lg text-conv-gray hover:bg-red-50 hover:text-red-500 transition-colors"
                            title="Remove"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>

        <ImageColorPickerSeo />
        <RelatedDesignTools />
      </main>

      <footer className="bg-conv-white border-t border-conv-gray/30 py-8 px-6 mt-12">
        <p className="text-sm text-conv-gray text-center">© 2026 ToolsWizard — Privacy-First Design Utilities.</p>
      </footer>
    </div>
  );
}
