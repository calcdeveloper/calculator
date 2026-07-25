"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, Image as ImageIcon, Settings, Sliders, FileType, ShieldCheck } from 'lucide-react';
import ImageConverterSeo from '@/components/tools/ImageConverterSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ImageConverterClient() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [originalFormat, setOriginalFormat] = useState('');
  
  const [targetFormat, setTargetFormat] = useState('image/jpeg');
  const [quality, setQuality] = useState(0.9);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [convertedSize, setConvertedSize] = useState(0);
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);
  const imageRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith('image/')) {
      processUpload(selected);
    } else if (selected) {
      setError("Please select a valid image file (JPG, PNG, WebP).");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type.startsWith('image/')) {
      processUpload(dropped);
    } else if (dropped) {
      setError("Please drop a valid image file (JPG, PNG, WebP).");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const processUpload = (fileObj) => {
    setFile(fileObj);
    setOriginalFormat(fileObj.type);
    
    // Auto-select a different format to be helpful
    if (fileObj.type === 'image/jpeg') setTargetFormat('image/png');
    else if (fileObj.type === 'image/png') setTargetFormat('image/jpeg');
    else setTargetFormat('image/jpeg');
    
    setError(null);
    setConvertedUrl(null);
    
    const url = URL.createObjectURL(fileObj);
    setImageUrl(url);
  };

  const handleConvert = () => {
    if (!file || !imageUrl) return;
    
    setIsProcessing(true);
    setError(null);

    const img = new window.Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');
      
      // If converting TO jpeg from something else, fill with white to replace transparent backgrounds
      if (targetFormat === 'image/jpeg') {
        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      
      ctx.drawImage(img, 0, 0);
      
      const q = targetFormat === 'image/png' ? undefined : quality;
      
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Failed to convert image.");
          setIsProcessing(false);
          return;
        }
        setConvertedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setConvertedUrl(url);
        setIsProcessing(false);
      }, targetFormat, q);
    };
    
    img.onerror = () => {
      setError("Failed to read the image data.");
      setIsProcessing(false);
    };
    img.src = imageUrl;
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setImageUrl(null);
    setConvertedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!convertedUrl) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    
    let extension = 'jpg';
    if (targetFormat === 'image/png') extension = 'png';
    else if (targetFormat === 'image/webp') extension = 'webp';
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_converted.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getFormatLabel = (mime) => {
    if (mime === 'image/jpeg') return 'JPG';
    if (mime === 'image/png') return 'PNG';
    if (mime === 'image/webp') return 'WebP';
    return mime.split('/')[1]?.toUpperCase() || 'Unknown';
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
            <span className="text-pdf-white font-medium">Image Converter</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Image Converter
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Transform image formats securely in your browser. Seamlessly convert between JPG, PNG, and WebP instantly.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag Image Here</h2>
                <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser space context.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Choose File
                </button>
                <p className="text-sm text-pdf-gray/60 mt-6 font-medium text-center">Supports JPG, PNG, WebP</p>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-1/2 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <ImageIcon size={20} className="text-pdf-primary" /> Preview
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change Image
                    </button>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px]">
                    <img 
                      src={convertedUrl || imageUrl} 
                      alt="Preview" 
                      className="max-w-full max-h-[400px] object-contain shadow-sm"
                    />
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-pdf-gray bg-pdf-white p-3 rounded-xl border border-pdf-gray shadow-sm">
                    <span className="flex items-center gap-1">
                      <span className="font-semibold text-pdf-dark">Original:</span> 
                      <span className="bg-pdf-gray/20 text-pdf-dark px-2 py-0.5 rounded font-bold">{getFormatLabel(originalFormat)}</span> 
                      ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                    {convertedUrl && (
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        Converted: 
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">{getFormatLabel(targetFormat)}</span>
                        ({(convertedSize / 1024).toFixed(1)} KB)
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm">
                      <h3 className="text-xl font-bold text-pdf-dark mb-6 flex items-center gap-2">
                        <Settings size={24} className="text-pdf-primary" /> Conversion Settings
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        <div>
                          <label className="block text-sm font-bold text-pdf-gray mb-3 uppercase tracking-wide flex items-center gap-2">
                            <FileType size={16} /> Target Format
                          </label>
                          <div className="grid grid-cols-3 gap-3">
                            <button 
                              onClick={() => setTargetFormat('image/jpeg')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/jpeg' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              JPG
                            </button>
                            <button 
                              onClick={() => setTargetFormat('image/png')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/png' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              PNG
                            </button>
                            <button 
                              onClick={() => setTargetFormat('image/webp')}
                              className={`py-3 px-4 rounded-xl font-bold transition-all border-2 ${targetFormat === 'image/webp' ? 'bg-pdf-primary/10 border-pdf-primary text-pdf-primary' : 'bg-pdf-bg border-pdf-gray text-pdf-gray hover:border-pdf-primary/50'}`}
                            >
                              WebP
                            </button>
                          </div>
                          
                          {targetFormat === 'image/jpeg' && originalFormat === 'image/png' && (
                            <div className="mt-3 text-xs text-amber-600 bg-amber-50 p-2 rounded-lg border border-amber-100 flex items-start gap-1">
                              <AlertCircle size={14} className="shrink-0 mt-0.5" />
                              <p>Converting PNG to JPG will remove any transparent backgrounds, replacing them with solid white.</p>
                            </div>
                          )}
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
                            <div className="flex justify-between text-xs text-pdf-gray mt-2 font-medium">
                              <span>Small File</span>
                              <span>Balanced</span>
                              <span>High Quality</span>
                            </div>
                          </div>
                        )}
                        
                        {targetFormat === 'image/png' && (
                          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mt-2 flex gap-3 text-blue-800 text-sm font-medium">
                            <AlertCircle size={20} className="shrink-0 text-blue-500" />
                            <p>PNG is a lossless format. The output image will perfectly preserve quality, but the file size may increase compared to JPG or WebP.</p>
                          </div>
                        )}
                      </div>

                      <button 
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Converting...</>
                        ) : (
                          <><RefreshCw size={22} /> Convert Image</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Download size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Conversion Complete!</h3>
                      <p className="text-emerald-700/80 mb-8">
                        Your image has been perfectly converted to {getFormatLabel(targetFormat)}.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                         <button 
                          onClick={() => setConvertedUrl(null)}
                          className="flex-1 px-6 py-4 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors shadow-sm"
                        >
                          Change Format
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
            accept="image/jpeg, image/png, image/webp" 
            className="hidden" 
          />
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Total Local Security</h3>
            <p className="text-pdf-gray leading-relaxed">Encoding happens strictly inside your active browser session. Confidential photos and screenshots are never uploaded to our servers.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Encoding</h3>
            <p className="text-pdf-gray leading-relaxed">Skip the upload and download wait times. Our Web API taps into your local hardware to perform complex pixel re-encoding instantly.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <FileType size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Format Architecture</h3>
            <p className="text-pdf-gray leading-relaxed">Move flawlessly between lossy JPG compression, lossless PNG graphics, and the modern, ultra-efficient Google WebP standard.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <ImageConverterSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/image-converter" />
      </main>

      
    </div>
  );
}
