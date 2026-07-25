"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, Image as ImageIcon, CheckCircle, ShieldCheck, Target } from 'lucide-react';
import JpgToPngSeo from '@/components/tools/JpgToPngSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function JpgToPngClient() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  
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
    
    if (fileObj.type === 'image/jpeg' || fileObj.name.toLowerCase().endsWith('.jpg') || fileObj.name.toLowerCase().endsWith('.jpeg')) {
      setFile(fileObj);
      setError(null);
      setConvertedUrl(null);
      
      const url = URL.createObjectURL(fileObj);
      setImageUrl(url);
    } else {
      setError("Please select a valid JPG/JPEG image file.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

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
      
      // Draw the JPG on canvas
      ctx.drawImage(img, 0, 0);
      
      // Convert specifically to PNG
      canvas.toBlob((blob) => {
        if (!blob) {
          setError("Failed to convert image. Canvas generated an empty blob.");
          setIsProcessing(false);
          return;
        }
        setConvertedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setConvertedUrl(url);
        setIsProcessing(false);
      }, 'image/png');
    };
    
    img.onerror = () => {
      setError("Failed to read the JPG image data. The file might be corrupted.");
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
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_converted.png`;
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
            <span className="text-pdf-white font-medium">JPG to PNG</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            JPG to PNG Converter
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Instantly map JPG photographs into the lossless PNG format. 100% private, browser-based execution.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag JPG Image Here</h2>
                <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser space context.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Choose File
                </button>
                <p className="text-sm text-pdf-gray/60 mt-6 font-medium text-center">Supports .JPG and .JPEG formats</p>
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
                      <span className="bg-pdf-gray/20 text-pdf-dark px-2 py-0.5 rounded font-bold">JPG</span> 
                      ({(file.size / 1024).toFixed(1)} KB)
                    </span>
                    {convertedUrl && (
                      <span className="text-emerald-600 font-bold flex items-center gap-1">
                        Converted: 
                        <span className="bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded font-bold">PNG</span>
                        ({(convertedSize / 1024).toFixed(1)} KB)
                      </span>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner mx-auto">
                        <CheckCircle size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-pdf-dark text-center mb-2">Ready for Extraction</h3>
                      <p className="text-pdf-gray text-center mb-8">This conversion maps the existing JPG pixels into a strictly structured, lossless PNG format.</p>
                      
                      <div className="bg-amber-50 p-4 border border-amber-100 rounded-xl mb-8 flex gap-3 text-amber-800 text-sm font-medium">
                        <AlertCircle size={24} className="shrink-0 text-amber-500 mt-0.5" />
                        <p>Because PNG is an uncompressed lossless format, the resulting file size will likely be drastically larger than the highly-compressed JPG original. This process unlocks software compatibility, but it does not magically restore visual quality lost in the original JPG.</p>
                      </div>

                      <button 
                        onClick={handleConvert}
                        disabled={isProcessing}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Extracting PNG...</>
                        ) : (
                          <><RefreshCw size={22} /> Convert to PNG</>
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
                        The JPG data has been successfully restructured into the PNG format.
                      </p>
                      
                      <div className="flex flex-col gap-4 w-full">
                        <button 
                          onClick={handleDownload}
                          className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                        >
                          <Download size={22} /> Download PNG File
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
            accept="image/jpeg,.jpg,.jpeg" 
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
            <p className="text-pdf-gray leading-relaxed">Processing happens strictly inside your active browser session. Confidential photographs are never uploaded to a cloud server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Encoding</h3>
            <p className="text-pdf-gray leading-relaxed">Skip the upload and download wait times. Our Web API taps into your local hardware to perform format extraction instantly.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Format Flexibility</h3>
            <p className="text-pdf-gray leading-relaxed">Convert your photos into PNG to unlock specific software features like transparent background extraction in Photoshop.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <JpgToPngSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/jpg-to-png" />
      </main>

      
    </div>
  );
}
