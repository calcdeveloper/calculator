"use client";

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Download, Image as ImageIcon, Settings, RefreshCw, ChevronRight, AlertCircle, FileImage, Target } from 'lucide-react';
import ImageCompressorSeo from '@/components/tools/ImageCompressorSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ImageCompressorClient() {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [compressedBlob, setCompressedBlob] = useState(null);
  const [compressedUrl, setCompressedUrl] = useState(null);
  
  const [mode, setMode] = useState('quality'); // 'quality' or 'size'
  const [quality, setQuality] = useState(80);
  const [targetSizeKB, setTargetSizeKB] = useState(50);
  
  const [isCompressing, setIsCompressing] = useState(false);
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);

  const formatBytes = (bytes, decimals = 2) => {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (!selectedFile.type.startsWith('image/')) {
        setError('Please select a valid image file (JPEG, PNG, WebP).');
        return;
      }
      setFile(selectedFile);
      const url = URL.createObjectURL(selectedFile);
      setPreviewUrl(url);
      setError(null);
      startCompression(selectedFile, mode, quality, targetSizeKB);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile) {
      if (!droppedFile.type.startsWith('image/')) {
        setError('Please drop a valid image file.');
        return;
      }
      setFile(droppedFile);
      const url = URL.createObjectURL(droppedFile);
      setPreviewUrl(url);
      setError(null);
      startCompression(droppedFile, mode, quality, targetSizeKB);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const startCompression = (sourceFile, currentMode, currentQuality, currentTargetKB) => {
    setIsCompressing(true);
    
    const img = new window.Image();
    img.src = URL.createObjectURL(sourceFile);
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      let actualMime = sourceFile.type;
      if (actualMime === 'image/png' || actualMime === 'image/svg+xml' || actualMime === 'image/gif') {
        actualMime = 'image/jpeg';
      }

      const convertToBlob = (q) => {
        return new Promise((resolve) => {
          canvas.toBlob((blob) => resolve(blob), actualMime, q);
        });
      };

      if (currentMode === 'quality') {
        // Single pass
        convertToBlob(currentQuality / 100).then((blob) => {
          if (blob) {
            setCompressedBlob(blob);
            setCompressedUrl(URL.createObjectURL(blob));
          } else {
            setError('Failed to compress image.');
          }
          setIsCompressing(false);
        });
      } else {
        // Binary search for exact size
        const targetBytes = currentTargetKB * 1024;
        
        const findOptimalQuality = async () => {
          let low = 0.01;
          let high = 1.0;
          let bestBlob = null;
          let maxIterations = 7;
          
          for (let i = 0; i < maxIterations; i++) {
            let mid = (low + high) / 2;
            const blob = await convertToBlob(mid);
            if (!blob) break;
            
            if (blob.size <= targetBytes) {
              bestBlob = blob;
              low = mid; // Try to get higher quality
            } else {
              high = mid; // Decrease quality
            }
          }
          
          // If we couldn't even reach the target at minimum quality
          if (!bestBlob) {
             bestBlob = await convertToBlob(0.01);
          }
          
          if (bestBlob) {
            setCompressedBlob(bestBlob);
            setCompressedUrl(URL.createObjectURL(bestBlob));
          } else {
            setError('Failed to compress image to exact size.');
          }
          setIsCompressing(false);
        };
        
        findOptimalQuality();
      }
    };
    
    img.onerror = () => {
      setError('Failed to load image for compression.');
      setIsCompressing(false);
    };
  };

  useEffect(() => {
    if (file) {
      const timeoutId = setTimeout(() => {
        startCompression(file, mode, quality, targetSizeKB);
      }, 500); 
      return () => clearTimeout(timeoutId);
    }
  }, [quality, mode, targetSizeKB]);

  const handleDownload = () => {
    if (compressedUrl && file) {
      const a = document.createElement('a');
      a.href = compressedUrl;
      const originalName = file.name.split('.')[0];
      const ext = compressedBlob?.type === 'image/webp' ? 'webp' : 'jpg';
      a.download = `${originalName}-compressed.${ext}`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const handleReset = () => {
    setFile(null);
    setPreviewUrl(null);
    setCompressedBlob(null);
    setCompressedUrl(null);
    setQuality(80);
    setTargetSizeKB(50);
    setError(null);
  };

  const calculateSavings = () => {
    if (!file || !compressedBlob) return 0;
    const savings = ((file.size - compressedBlob.size) / file.size) * 100;
    return savings > 0 ? savings.toFixed(1) : 0;
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-24 px-4">
        <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6 max-w-4xl mx-auto">
          <Link href="/" className="hover:text-pdf-white transition-colors">Tools</Link>
          <ChevronRight size={14} className="mt-0.5" /> 
          <Link href="/tools/pdf-tools" className="hover:text-pdf-white transition-colors">Image and PDF Tool</Link>
          <ChevronRight size={14} className="mt-0.5" /> 
          <span className="text-pdf-white font-medium">Image Compressor</span>
        </nav>
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Image Compressor
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Compress JPG, PNG, and WebP images instantly to an exact KB size or by quality percentage. Perfect for exam forms like UPSC, SSC, and GATE. 100% private.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {error && (
            <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3 text-red-700">
              <AlertCircle size={20} />
              <p>{error}</p>
            </div>
          )}

          <div className="p-8">
            {!file ? (
              // Upload State
              <div 
                className="p-6 md:p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray m-4 rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
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
              <div className="space-y-8">
                {/* Control Panel */}
                <div className="bg-pdf-bg rounded-2xl p-6 border border-pdf-gray/20">
                  
                  {/* Mode Selector */}
                  <div className="flex bg-pdf-white p-1 rounded-xl mb-6 shadow-sm border border-pdf-gray/20 max-w-sm">
                    <button 
                      onClick={() => setMode('quality')}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${mode === 'quality' ? 'bg-pdf-primary text-pdf-white shadow-sm' : 'text-pdf-gray hover:text-pdf-dark'}`}
                    >
                      Compress by Quality
                    </button>
                    <button 
                      onClick={() => setMode('size')}
                      className={`flex-1 py-2 text-sm font-bold rounded-lg transition-colors ${mode === 'size' ? 'bg-pdf-primary text-pdf-white shadow-sm' : 'text-pdf-gray hover:text-pdf-dark'}`}
                    >
                      Compress to Exact Size
                    </button>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    {mode === 'quality' ? (
                      <>
                        <div className="flex items-center gap-4">
                          <div className="bg-pdf-primary/10 p-3 rounded-lg text-pdf-primary">
                            <Settings size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-pdf-dark text-lg">Compression Quality</h3>
                            <p className="text-pdf-gray text-sm">Adjust the slider to balance quality and size.</p>
                          </div>
                        </div>
                        
                        <div className="flex-1 max-w-md w-full ml-auto">
                          <div className="flex justify-between text-sm font-medium text-pdf-dark mb-2">
                            <span>Smaller File</span>
                            <span className="text-pdf-primary font-bold text-lg bg-pdf-white px-2 py-1 rounded shadow-sm">{quality}%</span>
                            <span>Better Quality</span>
                          </div>
                          <input 
                            type="range" 
                            min="1" 
                            max="100" 
                            value={quality} 
                            onChange={(e) => setQuality(parseInt(e.target.value))}
                            className="w-full h-2 bg-pdf-gray/30 rounded-lg appearance-none cursor-pointer accent-pdf-primary"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-4">
                          <div className="bg-pdf-primary/10 p-3 rounded-lg text-pdf-primary">
                            <Target size={24} />
                          </div>
                          <div>
                            <h3 className="font-bold text-pdf-dark text-lg">Target Exact Size (KB)</h3>
                            <p className="text-pdf-gray text-sm">Perfect for exams requiring under 50KB or 20KB files.</p>
                          </div>
                        </div>
                        
                        <div className="flex-1 max-w-xs ml-auto">
                          <div className="relative">
                            <input 
                              type="number" 
                              min="1" 
                              max="10000"
                              value={targetSizeKB} 
                              onChange={(e) => setTargetSizeKB(Math.max(1, parseInt(e.target.value) || 0))}
                              className="w-full bg-pdf-white border-2 border-pdf-gray/30 focus:border-pdf-primary focus:outline-none rounded-xl px-4 py-3 text-lg font-bold text-pdf-dark pr-12 transition-colors"
                            />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-pdf-gray font-bold">
                              KB
                            </div>
                          </div>
                          <p className="text-xs text-pdf-gray mt-2 text-right">Our algorithm will compress it right under this size.</p>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Preview Area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Original */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-pdf-dark flex items-center gap-2">
                        <FileImage size={18} className="text-pdf-gray" /> 
                        Original Image
                      </span>
                      <span className="bg-pdf-gray/10 text-pdf-dark px-3 py-1 rounded-full text-sm font-medium">
                        {formatBytes(file.size)}
                      </span>
                    </div>
                    <div className="relative aspect-video bg-pdf-bg rounded-2xl border border-pdf-gray/20 overflow-hidden flex items-center justify-center">
                      <img src={previewUrl} alt="Original" className="max-w-full max-h-full object-contain" />
                    </div>
                  </div>

                  {/* Compressed */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-pdf-primary flex items-center gap-2">
                        <ImageIcon size={18} /> 
                        Compressed Image
                      </span>
                      <div className="flex items-center gap-2">
                        {isCompressing ? (
                          <RefreshCw size={16} className="text-pdf-primary animate-spin" />
                        ) : (
                          <>
                            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold">
                              -{calculateSavings()}%
                            </span>
                            <span className={`px-3 py-1 rounded-full text-sm font-bold ${mode === 'size' && compressedBlob?.size > (targetSizeKB * 1024) ? 'bg-red-100 text-red-700' : 'bg-pdf-primary/10 text-pdf-primary'}`}>
                              {formatBytes(compressedBlob?.size)}
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="relative aspect-video bg-pdf-bg rounded-2xl border border-pdf-primary/20 overflow-hidden flex items-center justify-center group">
                      {isCompressing ? (
                        <div className="absolute inset-0 bg-pdf-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                          <RefreshCw size={32} className="text-pdf-primary animate-spin mb-4" />
                          <p className="font-bold text-pdf-dark">Optimizing Image...</p>
                        </div>
                      ) : null}
                      {compressedUrl && (
                        <img src={compressedUrl} alt="Compressed" className="max-w-full max-h-full object-contain" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-pdf-gray/20">
                  <button 
                    onClick={handleReset}
                    className="flex-1 py-4 rounded-xl font-bold text-pdf-gray bg-pdf-gray/10 hover:bg-pdf-gray/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <RefreshCw size={20} />
                    Start Over
                  </button>
                  <button 
                    onClick={handleDownload}
                    disabled={isCompressing || !compressedUrl}
                    className="flex-[2] py-4 rounded-xl font-bold text-pdf-white bg-pdf-primary hover:bg-pdf-primaryDark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-lg flex items-center justify-center gap-2 text-lg"
                  >
                    <Download size={24} />
                    Download Compressed Image
                  </button>
                </div>
              </div>
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
            <p className="text-pdf-gray leading-relaxed">Compress large images to exact sizes in milliseconds using our optimized, serverless client-side engine capabilities.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Exact Size Targeting</h3>
            <p className="text-pdf-gray leading-relaxed">Set your required KB limit directly. Our binary search algorithm perfectly tunes the image compression to fit your exact specifications without sacrificing clarity.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <ImageCompressorSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/image-compressor" />
      </main>

      
    </div>
  );
}
