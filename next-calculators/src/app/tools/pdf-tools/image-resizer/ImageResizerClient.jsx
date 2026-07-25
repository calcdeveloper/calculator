"use client";

import React, { useState, useRef, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Upload, Download, Settings, RefreshCw, ChevronRight, AlertCircle, FileImage, Target, Lock, Unlock, Image as ImageIcon } from 'lucide-react';
import ImageResizerSeo from '@/components/tools/ImageResizerSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ImageResizerClient() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [originalDimensions, setOriginalDimensions] = useState({ width: 0, height: 0 });
  const [targetWidth, setTargetWidth] = useState('');
  const [targetHeight, setTargetHeight] = useState('');
  const [lockAspectRatio, setLockAspectRatio] = useState(true);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [processedSize, setProcessedSize] = useState(0);
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
    setError(null);
    setDownloadUrl(null);
    
    const url = URL.createObjectURL(fileObj);
    setImageUrl(url);
    
    // Load image to get dimensions
    const img = new window.Image();
    img.onload = () => {
      setOriginalDimensions({ width: img.width, height: img.height });
      setTargetWidth(img.width.toString());
      setTargetHeight(img.height.toString());
    };
    img.src = url;
  };

  const handleWidthChange = (e) => {
    const w = e.target.value;
    setTargetWidth(w);
    if (lockAspectRatio && w !== '' && originalDimensions.width > 0) {
      const ratio = originalDimensions.height / originalDimensions.width;
      setTargetHeight(Math.round(parseInt(w, 10) * ratio).toString());
    }
  };

  const handleHeightChange = (e) => {
    const h = e.target.value;
    setTargetHeight(h);
    if (lockAspectRatio && h !== '' && originalDimensions.height > 0) {
      const ratio = originalDimensions.width / originalDimensions.height;
      setTargetWidth(Math.round(parseInt(h, 10) * ratio).toString());
    }
  };

  const handleResize = () => {
    const width = parseInt(targetWidth, 10);
    const height = parseInt(targetHeight, 10);
    
    if (isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
      setError("Please enter valid width and height values.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    const img = new window.Image();
    img.onload = () => {
      // Draw image at new dimensions
      ctx.drawImage(img, 0, 0, width, height);
      
      // Determine format
      const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const quality = mimeType === 'image/jpeg' ? 0.95 : undefined;
      
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Failed to resize image.");
          setIsProcessing(false);
          return;
        }
        setProcessedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setDownloadUrl(url);
        setIsProcessing(false);
      }, mimeType, quality);
    };
    img.onerror = () => {
      setError("Failed to process the image for resizing.");
      setIsProcessing(false);
    };
    img.src = imageUrl;
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setImageUrl(null);
    setDownloadUrl(null);
    setError(null);
    setTargetWidth('');
    setTargetHeight('');
    setOriginalDimensions({width: 0, height: 0});
  };

  const handleDownload = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    const extension = file.name.split('.').pop();
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_${targetWidth}x${targetHeight}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
            <span className="text-pdf-white font-medium">Image Resizer</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Image Resizer
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Resize photos to exact pixel dimensions instantly. 100% private, browser-based processing.
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
                      <FileImage size={20} className="text-pdf-primary" /> Preview
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change Image
                    </button>
                  </div>
                  
                  <div className="flex-grow flex items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px]">
                    <img 
                      src={downloadUrl || imageUrl} 
                      alt="Preview" 
                      className="max-w-full max-h-[400px] object-contain shadow-sm"
                    />
                  </div>
                  <div className="mt-4 flex justify-between text-sm text-pdf-gray bg-pdf-white p-3 rounded-xl border border-pdf-gray shadow-sm">
                    <span>
                      <span className="font-semibold text-pdf-dark">Original:</span> {originalDimensions.width} × {originalDimensions.height} px ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                    {downloadUrl && (
                      <span className="text-emerald-600 font-bold">
                        Resized: {targetWidth} × {targetHeight} px ({(processedSize / 1024).toFixed(1)} KB)
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!downloadUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm">
                      <h3 className="text-xl font-bold text-pdf-dark mb-6 flex items-center gap-2">
                        <Settings size={24} className="text-pdf-primary" /> Resize Dimensions
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        <div className="flex items-end gap-4">
                          <div className="flex-1">
                            <label className="block text-sm font-bold text-pdf-gray mb-2 uppercase tracking-wide">Width (px)</label>
                            <input 
                              type="number" 
                              value={targetWidth}
                              onChange={handleWidthChange}
                              className="w-full text-xl p-4 bg-pdf-bg border border-pdf-gray rounded-xl focus:ring-2 focus:ring-pdf-primary/50 focus:border-pdf-primary outline-none transition-all"
                            />
                          </div>
                          
                          <div className="flex flex-col items-center justify-center h-[56px]">
                            <button 
                              onClick={() => setLockAspectRatio(!lockAspectRatio)}
                              className={`p-3 rounded-full transition-colors ${lockAspectRatio ? 'bg-pdf-primary/10 text-pdf-primary hover:bg-pdf-primary/20' : 'bg-pdf-gray/10 text-pdf-gray hover:bg-pdf-gray/20'}`}
                              title={lockAspectRatio ? "Unlock Aspect Ratio" : "Lock Aspect Ratio"}
                            >
                              {lockAspectRatio ? <Lock size={20} /> : <Unlock size={20} />}
                            </button>
                          </div>
                          
                          <div className="flex-1">
                            <label className="block text-sm font-bold text-pdf-gray mb-2 uppercase tracking-wide">Height (px)</label>
                            <input 
                              type="number" 
                              value={targetHeight}
                              onChange={handleHeightChange}
                              className="w-full text-xl p-4 bg-pdf-bg border border-pdf-gray rounded-xl focus:ring-2 focus:ring-pdf-primary/50 focus:border-pdf-primary outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl">
                          <h4 className="font-bold text-blue-800 mb-1 text-sm">Common Exam Sizes</h4>
                          <div className="flex flex-wrap gap-2 mt-2">
                            <button onClick={() => { setTargetWidth('132'); setTargetHeight('170'); setLockAspectRatio(false); }} className="px-3 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">UPSC (132x170)</button>
                            <button onClick={() => { setTargetWidth('200'); setTargetHeight('230'); setLockAspectRatio(false); }} className="px-3 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">SSC (200x230)</button>
                            <button onClick={() => { setTargetWidth('140'); setTargetHeight('60'); setLockAspectRatio(false); }} className="px-3 py-1.5 bg-white border border-blue-200 text-blue-700 rounded-lg text-xs font-bold hover:bg-blue-100 transition-colors">Signature (140x60)</button>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={handleResize}
                        disabled={isProcessing}
                        className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Processing...</>
                        ) : (
                          <><ImageIcon size={22} /> Resize Image</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Download size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Image Resized Successfully!</h3>
                      <p className="text-emerald-700/80 mb-8">
                        Your image has been perfectly resized to {targetWidth}x{targetHeight} pixels.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                         <button 
                          onClick={() => setDownloadUrl(null)}
                          className="flex-1 px-6 py-4 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors shadow-sm"
                        >
                          Tweak Size
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
              <Upload size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Absolute Data Privacy</h3>
            <p className="text-pdf-gray leading-relaxed">Processing happens 100% inside your local browser memory space. We never see your files, and they are never uploaded to a cloud server storage matrix.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning-Fast Rendering</h3>
            <p className="text-pdf-gray leading-relaxed">Resize high-resolution photographs instantly using hardware-accelerated HTML5 Canvas operations directly in your browser.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Exact Pixel Precision</h3>
            <p className="text-pdf-gray leading-relaxed">Set your required width and height directly. Maintain aspect ratios automatically or break the lock for exact forced dimensions.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <ImageResizerSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/image-resizer" />
      </main>

      
    </div>
  );
}
