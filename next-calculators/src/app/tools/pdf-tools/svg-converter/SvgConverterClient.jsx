"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, Image as ImageIcon, CheckCircle, Sliders, Settings, ShieldCheck, Target, Maximize } from 'lucide-react';
import SvgConverterSeo from '@/components/tools/SvgConverterSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function SvgConverterClient() {
  const [file, setFile] = useState(null);
  const [svgUrl, setSvgUrl] = useState(null);
  
  // Settings
  const [targetFormat, setTargetFormat] = useState('image/png');
  const [scale, setScale] = useState(1);
  const [quality, setQuality] = useState(0.9);
  
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [isProcessing, setIsProcessing] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedSize, setConvertedSize] = useState(0);
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    validateAndProcess(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    validateAndProcess(dropped);
  };

  const validateAndProcess = (fileObj) => {
    if (!fileObj) return;
    
    if (fileObj.type === 'image/svg+xml' || fileObj.name.toLowerCase().endsWith('.svg')) {
      setFile(fileObj);
      setError(null);
      setConvertedUrl(null);
      
      const url = URL.createObjectURL(fileObj);
      setSvgUrl(url);
      
      // Determine original dimensions to show scale impact
      const img = new window.Image();
      img.onload = () => {
        setOriginalDimensions({
          width: img.width || 500, // fallback if SVG has no fixed width
          height: img.height || 500
        });
      };
      img.src = url;
      
    } else {
      setError("Please select a valid SVG vector file.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleConvert = () => {
    if (!file || !svgUrl) return;
    
    setIsProcessing(true);
    setError(null);

    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      
      // Apply the scale multiplier
      const finalWidth = (img.width || 500) * scale;
      const finalHeight = (img.height || 500) * scale;
      
      canvas.width = finalWidth;
      canvas.height = finalHeight;
      const ctx = canvas.getContext('2d');
      
      // If converting to JPG, fill with white background first
      if (targetFormat === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      // Draw the SVG at the new scaled dimensions
      ctx.drawImage(img, 0, 0, finalWidth, finalHeight);
      
      const formatQuality = targetFormat === 'image/png' ? undefined : quality;
      
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Failed to rasterize image. Canvas generated an empty blob.");
          setIsProcessing(false);
          return;
        }
        setConvertedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setConvertedUrl(url);
        setIsProcessing(false);
      }, targetFormat, formatQuality);
    };
    
    img.onerror = () => {
      setError("Failed to render the SVG code. The file might contain invalid XML.");
      setIsProcessing(false);
    };
    img.src = svgUrl;
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setSvgUrl(null);
    setConvertedUrl(null);
    setError(null);
    setScale(1);
  };

  const handleDownload = () => {
    if (!convertedUrl) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    
    let extension = 'png';
    if (targetFormat === 'image/jpeg') extension = 'jpg';
    else if (targetFormat === 'image/webp') extension = 'webp';
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_rasterized.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFormatLabel = (mime) => {
    if (mime === 'image/jpeg') return 'JPG';
    if (mime === 'image/png') return 'PNG';
    if (mime === 'image/webp') return 'WebP';
    return 'PNG';
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/tools/pdf-tools" className="hover:text-pdf-white transition-colors">Tools</Link> 
            <ChevronRight size={14} className="mt-0.5" /> 
            <Link href="/tools/pdf-tools" className="hover:text-pdf-white transition-colors">Image and PDF Tool</Link> 
            <ChevronRight size={14} className="mt-0.5" /> 
            <span className="text-pdf-white font-medium">SVG Converter</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            SVG Rasterizer
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert scalable vector graphics into pixel-perfect PNGs or JPGs. Upscale infinitely with zero quality loss.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {error && (
            <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3 text-red-700 rounded-xl mb-6">
              <AlertCircle size={20} />
              <p className="font-medium">{error}</p>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-8">
            {!file ? (
              // Upload State
              <div 
                className="w-full p-6 md:p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray m-4 rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onClick={triggerFileInput}
              >
                <div className="w-20 h-20 bg-pdf-primary/10 text-pdf-primary rounded-2xl flex items-center justify-center mb-6">
                  <Upload size={32} className="text-pdf-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag SVG File Here</h2>
                <p className="text-pdf-gray mb-8 text-center">Your vector math will be compiled entirely within your local browser context.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Choose SVG File
                </button>
                <p className="text-sm text-pdf-gray/60 mt-6 font-medium text-center">Only supports .SVG Vector files</p>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-1/2 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <ImageIcon size={20} className="text-pdf-primary" /> Vector Preview
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change File
                    </button>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px] bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]">
                    {/* SVG preview handles transparency natively */}
                    <img 
                      src={convertedUrl || svgUrl} 
                      alt="Preview" 
                      className="max-w-full max-h-[400px] object-contain shadow-sm"
                    />
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex justify-between text-sm text-pdf-gray bg-pdf-white p-3 rounded-xl border border-pdf-gray shadow-sm">
                      <span className="flex items-center gap-1">
                        <span className="font-semibold text-pdf-dark">Original:</span> 
                        <span className="bg-pdf-gray/20 text-pdf-dark px-2 py-0.5 rounded font-bold">SVG</span> 
                      </span>
                      <span className="font-semibold text-pdf-dark">Base Res: {Math.round(originalDimensions.width)}x{Math.round(originalDimensions.height)}px</span>
                    </div>
                    
                    {convertedUrl && (
                      <div className="flex justify-between text-sm text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200 shadow-sm">
                        <span className="font-bold flex items-center gap-1">
                          Converted: 
                          <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">{getFormatLabel(targetFormat)}</span>
                          ({(convertedSize / 1024).toFixed(1)} KB)
                        </span>
                        <span className="font-bold">Final Res: {Math.round(originalDimensions.width * scale)}x{Math.round(originalDimensions.height * scale)}px</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-pdf-dark mb-6 flex items-center gap-2">
                        <Settings size={24} className="text-pdf-primary" /> Rasterization Settings
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        {/* Format Selection */}
                        <div>
                          <label className="block text-sm font-bold text-pdf-gray mb-3 uppercase tracking-wide flex items-center gap-2">
                            <ImageIcon size={16} /> Target Format
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            <button 
                              onClick={() => setTargetFormat('image/png')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/png' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              PNG
                            </button>
                            <button 
                              onClick={() => setTargetFormat('image/jpeg')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/jpeg' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              JPG
                            </button>
                            <button 
                              onClick={() => setTargetFormat('image/webp')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/webp' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              WebP
                            </button>
                          </div>
                        </div>

                        {/* Scale Multiplier */}
                        <div className="bg-pdf-bg p-5 rounded-xl border border-pdf-gray mt-2">
                          <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-bold text-pdf-dark flex items-center gap-2">
                              <Maximize size={16} className="text-pdf-primary" /> Resolution Multiplier
                            </label>
                            <span className="font-bold text-pdf-primary bg-pdf-primary/10 px-2 py-1 rounded-md text-sm">
                              {scale}x Scale
                            </span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="10" 
                            step="1"
                            value={scale}
                            onChange={(e) => setScale(parseInt(e.target.value))}
                            className="w-full h-2 bg-pdf-gray/30 rounded-lg appearance-none cursor-pointer accent-pdf-primary"
                          />
                          <p className="text-xs text-pdf-gray mt-3 font-medium">
                            Output Size: <strong className="text-pdf-dark">{Math.round(originalDimensions.width * scale)}px</strong> wide by <strong className="text-pdf-dark">{Math.round(originalDimensions.height * scale)}px</strong> tall
                          </p>
                        </div>
                        
                        {targetFormat !== 'image/png' && (
                          <div className="bg-pdf-bg p-5 rounded-xl border border-pdf-gray mt-2">
                            <div className="flex justify-between items-center mb-4">
                              <label className="text-sm font-bold text-pdf-dark flex items-center gap-2">
                                <Sliders size={16} className="text-pdf-primary" /> Image Quality
                              </label>
                              <span className="font-bold text-pdf-primary bg-pdf-primary/10 px-2 py-1 rounded-md text-sm">
                                {Math.round(quality * 100)}%
                              </span>
                            </div>
                            <input 
                              type="range" 
                              min="0.1" 
                              max="1.0" 
                              step="0.05"
                              value={quality}
                              onChange={(e) => setQuality(parseFloat(e.target.value))}
                              className="w-full h-2 bg-pdf-gray/30 rounded-lg appearance-none cursor-pointer accent-pdf-primary"
                            />
                          </div>
                        )}

                        {targetFormat === 'image/jpeg' && (
                          <div className="bg-amber-50 p-4 border border-amber-100 rounded-xl flex gap-3 text-amber-800 text-sm font-medium">
                            <AlertCircle size={20} className="shrink-0 text-amber-500 mt-0.5" />
                            <p>JPG does not support transparency. Any transparent areas in your SVG will be filled with a solid white background.</p>
                          </div>
                        )}
                        {targetFormat === 'image/png' && (
                          <div className="bg-blue-50 p-4 border border-blue-100 rounded-xl flex gap-3 text-blue-800 text-sm font-medium">
                            <CheckCircle size={20} className="shrink-0 text-blue-500 mt-0.5" />
                            <p>PNG supports full transparency. The transparent background of your SVG vector will be perfectly preserved.</p>
                          </div>
                        )}
                      </div>

                      <button 
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Rendering Canvas...</>
                        ) : (
                          <><RefreshCw size={22} /> Rasterize SVG</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Download size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Rasterization Complete!</h3>
                      <p className="text-emerald-700/80 mb-8">
                        The SVG vector code has been perfectly translated into a {getFormatLabel(targetFormat)} pixel grid.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                         <button 
                          onClick={() => setConvertedUrl(null)}
                          className="flex-1 px-6 py-4 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors shadow-sm"
                        >
                          Change Settings
                        </button>
                        <button 
                          onClick={handleDownload}
                          className="flex-1 flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30"
                        >
                          <Download size={20} /> Download
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          
          <input 
            type="file" 
            ref={fileInputRef} 
            onChange={handleFileChange} 
            accept="image/svg+xml,.svg" 
            className="hidden" 
          />
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Maximize size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Infinite Upscaling</h3>
            <p className="text-pdf-gray leading-relaxed">Leverage the true power of vectors. Use our scale multiplier to blow up a tiny 32px icon into a massive, crystal-clear 3000px graphic.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Zero-Trust Processing</h3>
            <p className="text-pdf-gray leading-relaxed">Your proprietary corporate logos and vectors are never uploaded. The SVG XML is compiled entirely within your local browser CPU.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Format Flexibility</h3>
            <p className="text-pdf-gray leading-relaxed">Choose PNG to preserve crucial transparent backgrounds, or output to JPG to strip the transparency and drastically reduce file size.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <SvgConverterSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/svg-converter" />
      </main>

      
    </div>
  );
}
