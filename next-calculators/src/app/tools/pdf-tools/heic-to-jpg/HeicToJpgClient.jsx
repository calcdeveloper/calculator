"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, Image as ImageIcon, Settings, Sliders, Smartphone, ShieldCheck } from 'lucide-react';
import HeicToJpgSeo from '@/components/tools/HeicToJpgSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function HeicToJpgClient() {
  const [file, setFile] = useState(null);
  const [quality, setQuality] = useState(0.9);
  
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
    
    // Check if it's a HEIC/HEIF file by extension or mime type
    const name = fileObj.name.toLowerCase();
    if (name.endsWith('.heic') || name.endsWith('.heif') || fileObj.type === 'image/heic' || fileObj.type === 'image/heif') {
      setFile(fileObj);
      setError(null);
      setConvertedUrl(null);
    } else {
      setError("Please select a valid Apple HEIC or HEIF image file.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const handleConvert = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);

    try {
      // Dynamically import heic2any to avoid SSR issues
      const heic2any = (await import('heic2any')).default;
      
      const resultBlob = await heic2any({
        blob: file,
        toType: "image/jpeg",
        quality: quality
      });
      
      // resultBlob might be an array if the HEIC has multiple images, get the first one
      const finalBlob = Array.isArray(resultBlob) ? resultBlob[0] : resultBlob;
      
      setConvertedSize(finalBlob.size);
      const url = URL.createObjectURL(finalBlob);
      setConvertedUrl(url);
      setIsProcessing(false);
      
    } catch (err) {
      console.error(err);
      setError("Failed to decode HEIC file. The file might be corrupted or unsupported.");
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setConvertedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!convertedUrl) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_converted.jpg`;
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
            <span className="text-pdf-white font-medium">HEIC to JPG</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            HEIC to JPG Converter
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Convert Apple iPhone photos to universally accepted JPGs instantly. 100% private, browser-based decoding.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag HEIC Image Here</h2>
                <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser space context.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Choose File
                </button>
                <p className="text-sm text-pdf-gray/60 mt-6 font-medium text-center">Supports .HEIC and .HEIF from Apple Devices</p>
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
                      Change File
                    </button>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px] p-4 text-center">
                    {!convertedUrl ? (
                      <div className="flex flex-col items-center text-pdf-gray">
                        <Smartphone size={64} className="mb-4 text-pdf-primary/50" />
                        <p className="font-bold text-lg text-pdf-dark mb-1">{file.name}</p>
                        <p>File Size: {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                        <p className="mt-4 text-sm bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">Browser cannot preview raw HEIC files until converted.</p>
                      </div>
                    ) : (
                      <img 
                        src={convertedUrl} 
                        alt="Converted Preview" 
                        className="max-w-full max-h-[400px] object-contain shadow-sm"
                      />
                    )}
                  </div>
                  
                  {convertedUrl && (
                    <div className="mt-4 flex justify-between text-sm text-pdf-gray bg-pdf-white p-3 rounded-xl border border-pdf-gray shadow-sm">
                      <span className="flex items-center gap-1">
                        <span className="font-semibold text-pdf-dark">Original:</span> 
                        <span className="bg-pdf-gray/20 text-pdf-dark px-2 py-0.5 rounded font-bold">HEIC</span> 
                        ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </span>
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        Converted: 
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">JPG</span>
                        ({(convertedSize / 1024 / 1024).toFixed(2)} MB)
                      </span>
                    </div>
                  )}
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-pdf-dark mb-6 flex items-center gap-2">
                        <Settings size={24} className="text-pdf-primary" /> Decode Settings
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        <div className="bg-pdf-bg p-5 rounded-xl border border-pdf-gray">
                          <div className="flex justify-between items-center mb-4">
                            <label className="text-sm font-bold text-pdf-dark flex items-center gap-2">
                              <Sliders size={16} className="text-pdf-primary" /> Target JPG Quality
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
                            <span>Maximum Quality</span>
                          </div>
                        </div>
                        
                        <div className="bg-blue-50 p-5 rounded-xl border border-blue-100 mt-2 flex gap-3 text-blue-800 text-sm font-medium">
                          <AlertCircle size={24} className="shrink-0 text-blue-500" />
                          <p>Because HEIC is heavily compressed, the resulting JPG file may be larger in Megabytes (MB) than the original file to maintain the same visual clarity.</p>
                        </div>
                      </div>

                      <button 
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Decoding via WebAssembly...</>
                        ) : (
                          <><RefreshCw size={22} /> Convert to JPG</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Download size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Decoding Complete!</h3>
                      <p className="text-emerald-700/80 mb-8">
                        The Apple HEIC file has been successfully converted into a universally compatible JPG.
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 w-full">
                         <button 
                          onClick={() => setConvertedUrl(null)}
                          className="flex-1 px-6 py-4 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors shadow-sm"
                        >
                          Tweak Quality
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
            accept=".heic,.heif,image/heic,image/heif" 
            className="hidden" 
          />
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Zero-Trust Privacy</h3>
            <p className="text-pdf-gray leading-relaxed">Unlike other tools, your personal iPhone photographs are completely decoded inside your browser using WebAssembly. No files are ever uploaded.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Wasm Accelerated</h3>
            <p className="text-pdf-gray leading-relaxed">Harnessing the power of WebAssembly, we decode complex High-Efficiency Video Coding (HEVC) structures instantly on your local CPU.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ImageIcon size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Universal Compatibility</h3>
            <p className="text-pdf-gray leading-relaxed">Bypass "Unsupported File" errors on Windows computers and strictly regulated government exam portals by standardizing to JPEG.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <HeicToJpgSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/heic-to-jpg" />
      </main>

      
    </div>
  );
}
