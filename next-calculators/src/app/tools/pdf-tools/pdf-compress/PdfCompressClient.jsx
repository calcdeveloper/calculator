"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, FileText, CheckCircle, ShieldCheck, FileOutput, Minimize2, Settings, Target } from 'lucide-react';
import PdfCompressSeo from '@/components/tools/PdfCompressSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';
import { PDFDocument } from 'pdf-lib';
import jsPDF from 'jspdf';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

// Configure pdfjs worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
}

export default function PdfCompressClient() {
  const [file, setFile] = useState(null);
  const [pdfBytes, setPdfBytes] = useState(null);
  
  // Settings
  const [compressMode, setCompressMode] = useState('lossless'); // 'lossless' | 'target'
  const [targetKb, setTargetKb] = useState(500);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState('');
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

  const validateAndProcess = async (fileObj) => {
    if (!fileObj) return;
    
    if (fileObj.type === 'application/pdf' || fileObj.name.toLowerCase().endsWith('.pdf')) {
      setFile(fileObj);
      setError(null);
      setConvertedUrl(null);
      
      try {
        const arrayBuffer = await fileObj.arrayBuffer();
        setPdfBytes(arrayBuffer);
      } catch (err) {
        console.error(err);
        setError("Failed to load PDF. It might be corrupted or heavily encrypted.");
        setFile(null);
      }
      
    } else {
      setError("Please select a valid PDF document.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  
  const handleCompress = async () => {
    if (!pdfBytes) return;
    
    setIsProcessing(true);
    setError(null);
    setProgress('Initializing engine...');

    try {
      if (compressMode === 'lossless') {
        setProgress('Optimizing structural objects...');
        // Lossless Structural Optimization
        const sourcePdf = await PDFDocument.load(pdfBytes, { ignoreEncryption: true });
        const newPdf = await PDFDocument.create();
        
        const copiedPages = await newPdf.copyPages(sourcePdf, sourcePdf.getPageIndices());
        copiedPages.forEach((page) => {
          newPdf.addPage(page);
        });
        
        newPdf.setTitle('');
        newPdf.setAuthor('');
        newPdf.setSubject('');
        newPdf.setKeywords([]);
        newPdf.setProducer('ToolsWizard Optimization Engine');
        newPdf.setCreator('');
        
        const newPdfBytes = await newPdf.save();
        const blob = new Blob([newPdfBytes], { type: 'application/pdf' });
        
        setConvertedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setConvertedUrl(url);
        setIsProcessing(false);
      } else {
        // Target Size Optimization (Lossy Rasterization)
        setProgress('Parsing vector data...');
        
        // Load with pdfjs
        const loadingTask = pdfjsLib.getDocument({ data: pdfBytes });
        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;
        
        if (totalPages === 0) throw new Error("Document has no pages.");
        
        // Target per page in bytes (reserve 5% for PDF overhead)
        const targetBytes = targetKb * 1024 * 0.95;
        const targetBytesPerPage = targetBytes / totalPages;
        
        // Render first page at high scale once
        setProgress('Calculating optimal compression algorithm...');
        const page1 = await pdf.getPage(1);
        const baseScale = 2.0;
        const baseViewport = page1.getViewport({ scale: baseScale }); 
        const baseCanvas = document.createElement('canvas');
        baseCanvas.width = baseViewport.width;
        baseCanvas.height = baseViewport.height;
        const baseCtx = baseCanvas.getContext('2d');
        
        await page1.render({ canvasContext: baseCtx, viewport: baseViewport }).promise;
        
        // Binary search for optimal scaling ratio to hit target KB precisely
        let minRatio = 0.05;
        let maxRatio = 1.0;
        let bestRatio = 0.5;
        let bestQ = 0.7; // fixed moderate JPEG compression
        
        for (let i = 0; i < 7; i++) {
          const mid = (minRatio + maxRatio) / 2;
          
          const testCanvas = document.createElement('canvas');
          testCanvas.width = baseCanvas.width * mid;
          testCanvas.height = baseCanvas.height * mid;
          const testCtx = testCanvas.getContext('2d');
          testCtx.drawImage(baseCanvas, 0, 0, testCanvas.width, testCanvas.height);
          
          const dataUrl = testCanvas.toDataURL('image/jpeg', bestQ);
          const bytes = Math.round((dataUrl.length * 3) / 4); 
          
          bestRatio = mid;
          if (bytes > targetBytesPerPage) {
            maxRatio = mid;
          } else {
            minRatio = mid;
          }
        }
        
        const originalWidth = baseViewport.width / baseScale;
        const originalHeight = baseViewport.height / baseScale;

        // Initialize PDF with original page dimensions
        const doc = new jsPDF({
          orientation: originalWidth > originalHeight ? 'landscape' : 'portrait',
          unit: 'px',
          format: [originalWidth, originalHeight],
          compress: true
        });
        
        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
          setProgress(`Compressing page ${pageNum} of ${totalPages}...`);
          
          let sourceCanvas = baseCanvas;
          let sourceViewport = baseViewport;
          
          if (pageNum > 1) {
            const page = await pdf.getPage(pageNum);
            sourceViewport = page.getViewport({ scale: baseScale });
            sourceCanvas = document.createElement('canvas');
            sourceCanvas.width = sourceViewport.width;
            sourceCanvas.height = sourceViewport.height;
            const sourceCtx = sourceCanvas.getContext('2d');
            await page.render({ canvasContext: sourceCtx, viewport: sourceViewport }).promise;
          }
          
          // Downscale to target ratio
          const finalCanvas = document.createElement('canvas');
          finalCanvas.width = sourceCanvas.width * bestRatio;
          finalCanvas.height = sourceCanvas.height * bestRatio;
          const finalCtx = finalCanvas.getContext('2d');
          finalCtx.drawImage(sourceCanvas, 0, 0, finalCanvas.width, finalCanvas.height);
          
          const imgData = finalCanvas.toDataURL('image/jpeg', bestQ);
          
          const pWidth = sourceViewport.width / baseScale;
          const pHeight = sourceViewport.height / baseScale;
          
          if (pageNum > 1) {
            doc.addPage([pWidth, pHeight], pWidth > pHeight ? 'landscape' : 'portrait');
          }
          
          // Paint image stretching exactly across the original page size
          doc.addImage(imgData, 'JPEG', 0, 0, pWidth, pHeight, undefined, 'FAST');
        }
        
        setProgress('Generating final document...');
        const blob = doc.output('blob');
        setConvertedSize(blob.size);
        const url = URL.createObjectURL(blob);
        setConvertedUrl(url);
        setIsProcessing(false);
      }
      
    } catch (err) {
      console.error(err);
      setError("An error occurred during compression. The file may be locked by a password or contain unsupported fonts.");
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setPdfBytes(null);
    setConvertedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!convertedUrl) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_compressed.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const getSavings = () => {
    if (!file || !convertedSize) return { percentage: 0, bytes: 0 };
    const saved = file.size - convertedSize;
    const percentage = ((saved / file.size) * 100).toFixed(1);
    return { 
      percentage: saved > 0 ? percentage : 0, 
      bytes: saved > 0 ? saved : 0,
      increased: saved < 0
    };
  };

  const savings = getSavings();

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
            <span className="text-pdf-white font-medium">PDF Compress</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PDF Structural Compressor
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Shrink bloated PDFs by stripping hidden metadata and orphaned objects. Zero-trust private processing.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag PDF Here</h2>
                <p className="text-pdf-gray mb-8 text-center">Your sensitive business documents are never uploaded to a cloud server.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Select PDF Document
                </button>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-1/2 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <FileText size={20} className="text-pdf-primary" /> Document Details
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change File
                    </button>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px] p-6 text-center">
                    <FileText size={64} className="mb-4 text-pdf-primary/50" />
                    <p className="font-bold text-xl text-pdf-dark mb-2 break-all">{file.name}</p>
                    
                    {!convertedUrl ? (
                      <div className="mt-6 bg-pdf-white px-6 py-4 rounded-2xl border border-pdf-gray shadow-sm shadow-pdf-gray/20">
                        <span className="block text-sm text-pdf-gray font-bold uppercase tracking-wider mb-1">Original Size</span>
                        <span className="text-3xl font-extrabold text-pdf-dark">{(file.size / 1024 / 1024).toFixed(2)} <span className="text-xl text-pdf-gray">MB</span></span>
                      </div>
                    ) : (
                      <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                        <div className="bg-pdf-white px-4 py-4 rounded-2xl border border-pdf-gray shadow-sm">
                          <span className="block text-xs text-pdf-gray font-bold uppercase tracking-wider mb-1">Original</span>
                          <span className="text-xl font-bold text-pdf-dark">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                        <div className={`px-4 py-4 rounded-2xl border shadow-sm ${savings.increased ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
                          <span className={`block text-xs font-bold uppercase tracking-wider mb-1 ${savings.increased ? 'text-red-600' : 'text-emerald-700'}`}>Optimized</span>
                          <span className={`text-xl font-bold ${savings.increased ? 'text-red-700' : 'text-emerald-800'}`}>{(convertedSize / 1024 / 1024).toFixed(2)} MB</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                      <h3 className="text-xl font-bold text-pdf-dark mb-6 flex items-center gap-2">
                        <Settings size={24} className="text-pdf-primary" /> Compression Settings
                      </h3>
                      
                      <div className="flex flex-col gap-6">
                        {/* Mode Selection */}
                        <div className="flex flex-col gap-3">
                          <button 
                            onClick={() => setCompressMode('lossless')}
                            className={`flex flex-col items-start p-4 border-2 rounded-xl transition-all ${compressMode === 'lossless' ? 'border-pdf-primary bg-pdf-primary/5 shadow-sm' : 'border-pdf-gray hover:border-pdf-primary/50'}`}
                          >
                            <span className="font-bold text-pdf-dark flex items-center gap-2 mb-1">
                              <CheckCircle size={18} className={compressMode === 'lossless' ? 'text-pdf-primary' : 'text-pdf-gray'} />
                              Structural Optimization (Lossless)
                            </span>
                            <span className="text-sm text-pdf-gray pl-7 text-left">Preserves 100% visual quality and searchable text. Cleans hidden code bloat. Best for standard PDFs.</span>
                          </button>

                          <button 
                            onClick={() => setCompressMode('target')}
                            className={`flex flex-col items-start p-4 border-2 rounded-xl transition-all ${compressMode === 'target' ? 'border-amber-500 bg-amber-50 shadow-sm' : 'border-pdf-gray hover:border-amber-500/50'}`}
                          >
                            <span className="font-bold text-pdf-dark flex items-center gap-2 mb-1">
                              <Target size={18} className={compressMode === 'target' ? 'text-amber-500' : 'text-pdf-gray'} />
                              Target File Size (Aggressive Rasterization)
                            </span>
                            <span className="text-sm text-pdf-gray pl-7 text-left">Converts all pages to images to hit an exact KB size. Text becomes unsearchable. Best for strict portals.</span>
                          </button>
                        </div>

                        {/* Target KB Input (Only visible in target mode) */}
                        {compressMode === 'target' && (
                          <div className="bg-amber-50/50 p-5 rounded-xl border border-amber-200 animate-in fade-in slide-in-from-top-4 duration-300">
                            <label className="block text-sm font-bold text-amber-900 mb-3 flex justify-between items-center">
                              <span>Desired Maximum File Size</span>
                              <span className="bg-amber-200 text-amber-800 px-2 py-0.5 rounded text-xs">Approximation</span>
                            </label>
                            <div className="flex items-center gap-3">
                              <input 
                                type="number" 
                                min="10"
                                max="100000"
                                value={targetKb}
                                onChange={(e) => setTargetKb(parseInt(e.target.value) || 0)}
                                className="w-full px-4 py-3 rounded-xl border-2 border-amber-300 focus:border-amber-500 focus:ring-4 focus:ring-amber-500/20 outline-none transition-all font-bold text-lg text-amber-900 bg-white"
                              />
                              <span className="text-amber-900 font-bold text-xl">KB</span>
                            </div>
                            <div className="mt-4 flex gap-2 text-xs text-amber-800 font-medium bg-white p-3 rounded-lg border border-amber-200">
                              <AlertCircle size={14} className="shrink-0 mt-0.5" />
                              <p>Warning: Targeting very small sizes will cause extreme blurriness. All vector text will be flattened into images.</p>
                            </div>
                          </div>
                        )}
                      </div>

                      <button 
                        onClick={handleCompress}
                        disabled={isProcessing}
                        className="w-full mt-8 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> {progress}</>
                        ) : (
                          <><Minimize2 size={22} /> Compress PDF</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full relative overflow-hidden">
                      {savings.percentage > 0 && (
                        <div className="absolute top-0 right-0 bg-emerald-500 text-white font-black text-2xl px-6 py-2 rounded-bl-3xl shadow-md">
                          -{savings.percentage}%
                        </div>
                      )}
                      
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner mt-4">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Optimization Complete!</h3>
                      
                      {savings.increased ? (
                        <p className="text-emerald-700/80 mb-8 font-medium">
                          Your PDF was already highly optimized. The structural rebuild slightly increased the file size.
                        </p>
                      ) : savings.bytes > 0 ? (
                        <p className="text-emerald-700/80 mb-8 font-medium">
                          Successfully removed <strong className="text-emerald-800">{(savings.bytes / 1024).toFixed(1)} KB</strong> of hidden metadata and structural bloat!
                        </p>
                      ) : (
                        <p className="text-emerald-700/80 mb-8 font-medium">
                          Your document is clean! No metadata bloat was found.
                        </p>
                      )}
                      
                      <div className="flex flex-col w-full">
                        <button 
                          onClick={handleDownload}
                          className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                        >
                          <Download size={22} /> Download Optimized PDF
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
            accept="application/pdf,.pdf" 
            className="hidden" 
          />
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Enterprise Privacy</h3>
            <p className="text-pdf-gray leading-relaxed">Optimization happens strictly inside your active browser session. Highly sensitive business contracts are never uploaded to a cloud server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Execution</h3>
            <p className="text-pdf-gray leading-relaxed">Skip the upload and download wait times. Our Web API leverages your local hardware to rebuild the PDF architecture instantly.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Minimize2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lossless Quality</h3>
            <p className="text-pdf-gray leading-relaxed">We utilize structural code optimization rather than lossy image downsampling. Your text and photos remain perfectly sharp for professional printing.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <PdfCompressSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/pdf-compress" />
      </main>

      
    </div>
  );
}
