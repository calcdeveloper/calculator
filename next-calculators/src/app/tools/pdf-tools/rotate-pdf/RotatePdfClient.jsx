"use client";

import React, { useState, useRef } from "react";
import { PDFDocument, degrees } from 'pdf-lib';
import { 
  Download, Upload, FileText, CheckCircle2, 
  RotateCcw, ShieldCheck, Zap, ChevronRight, Eye, RefreshCw
} from "lucide-react";
import RotatePdfSeo from '@/components/tools/RotatePdfSeo';
import RelatedPdfTools from '@/components/tools/RelatedPdfTools';

export default function RotatePdfClient() {
  const [file, setFile] = useState(null);
  const [pageRotations, setPageRotations] = useState([]); // array of degrees
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setIsProcessing(true);
      setError(null);
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        const count = pdfDoc.getPageCount();
        setPageCount(count);
        
        // Initialize all pages with 0 rotation
        setPageRotations(Array(count).fill(0));
        
        setFile(selectedFile);
        setExtractedUrl(null);
      } catch (err) {
        setError("Error loading PDF. It might be password protected or corrupted.");
        setFile(null);
      } finally {
        setIsProcessing(false);
      }
    } else if (selectedFile) {
      setError("Please select a valid PDF file.");
    }
  };

  const rotatePage = (index, amount) => {
    setPageRotations(prev => {
      const newRotations = [...prev];
      // Keep within 0, 90, 180, 270
      newRotations[index] = (newRotations[index] + amount) % 360;
      return newRotations;
    });
  };

  const rotateAll = (amount) => {
    setPageRotations(prev => prev.map(rot => (rot + amount) % 360));
  };

  const handleProcess = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pages = pdfDoc.getPages();
      
      pages.forEach((page, index) => {
        const currentRotation = page.getRotation().angle;
        // The rotation applied is relative to the current rotation
        // Actually, we want to set it absolute or relative? 
        // pdf-lib's setRotation sets it to an absolute value, but we might want to just add it.
        const newAngle = (currentRotation + pageRotations[index]) % 360;
        page.setRotation(degrees(newAngle));
      });
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setExtractedUrl(url);
    } catch (err) {
      setError(err.message || "An error occurred during rotation.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setShowPreview(false);
    setFile(null);
    setPageRotations([]);
    setExtractedUrl(null);
    setError(null);
    setPageCount(0);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `rotated_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Rotate PDF</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Rotate PDF Pages
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Permanently rotate upside down or sideways PDF pages instantly. Processed completely privately in your browser.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {!file && !isProcessing && (
            <div 
              className="p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) handleFileChange({ target: { files: [droppedFile] } });
              }}
            >
              <div className="w-20 h-20 bg-pdf-primary/10 text-pdf-primary rounded-2xl flex items-center justify-center mb-6">
                <Upload size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag PDF Here</h2>
              <p className="text-pdf-gray mb-8 text-center">Your file stays on your device. 100% private processing.</p>
              <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                Choose File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" onChange={handleFileChange} />
            </div>
          )}

          {isProcessing && !extractedUrl && (
            <div className="p-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-pdf-primary border-t-transparent rounded-full animate-spin mb-6"></div>
              <h3 className="text-2xl font-bold text-pdf-dark">Processing Document...</h3>
            </div>
          )}

          {file && !extractedUrl && !isProcessing && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-pdf-gray pb-6 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-pdf-dark flex items-center gap-2">
                    <FileText className="text-pdf-primary" /> {file.name}
                  </h2>
                  <p className="text-pdf-gray text-sm">{pageCount} Pages • {(file.size / 1024 / 1024).toFixed(2)} MB</p>
                </div>
                <div className="flex gap-3">
                  <button onClick={reset} className="flex items-center justify-center gap-2 px-5 py-2.5 bg-pdf-gray/20 hover:bg-pdf-gray/30 text-pdf-dark font-bold rounded-xl transition-all">
                    <RotateCcw size={18} /> Choose Another
                  </button>
                  <button onClick={handleProcess} className="flex items-center justify-center gap-2 px-5 py-2.5 bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white font-bold rounded-xl transition-all">
                    <CheckCircle2 size={18} /> Save Changes
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div className="flex justify-end gap-3 mb-4">
                 <button 
                   onClick={() => rotateAll(270)} 
                   className="px-4 py-2 bg-pdf-gray/10 hover:bg-pdf-gray/20 text-pdf-dark rounded-lg flex items-center gap-2 font-medium"
                 >
                   <RefreshCw size={16} className="-scale-x-100" /> Rotate All Left
                 </button>
                 <button 
                   onClick={() => rotateAll(90)} 
                   className="px-4 py-2 bg-pdf-gray/10 hover:bg-pdf-gray/20 text-pdf-dark rounded-lg flex items-center gap-2 font-medium"
                 >
                   <RefreshCw size={16} /> Rotate All Right
                 </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[500px] overflow-y-auto p-4 bg-pdf-bg rounded-2xl border border-pdf-gray">
                {pageRotations.map((rotation, index) => (
                  <div key={index} className="flex flex-col items-center gap-3">
                    <div className="relative aspect-[3/4] w-full bg-pdf-white rounded-xl border-2 border-pdf-gray shadow-sm overflow-hidden flex items-center justify-center transition-all">
                       <div 
                         className="absolute text-pdf-gray/40 font-black text-6xl transition-transform duration-300"
                         style={{ transform: `rotate(${rotation}deg)` }}
                       >
                         {index + 1}
                       </div>
                    </div>
                    <div className="flex items-center gap-2">
                       <button onClick={() => rotatePage(index, 270)} className="p-2 bg-pdf-gray/20 hover:bg-pdf-primary/20 hover:text-pdf-primary rounded-full transition-colors text-pdf-dark">
                         <RefreshCw size={16} className="-scale-x-100" />
                       </button>
                       <span className="text-xs font-bold text-pdf-gray">PAGE {index + 1}</span>
                       <button onClick={() => rotatePage(index, 90)} className="p-2 bg-pdf-gray/20 hover:bg-pdf-primary/20 hover:text-pdf-primary rounded-full transition-colors text-pdf-dark">
                         <RefreshCw size={16} />
                       </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {extractedUrl && (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Rotation Complete!</h2>
              <p className="text-pdf-gray mb-8">Your PDF has been permanently rotated and is ready to download.</p>
              
              <div className="flex gap-4 w-full md:w-auto">
                <button
                  onClick={reset}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-6 py-4 bg-pdf-gray/20 hover:bg-pdf-gray/30 text-pdf-dark font-bold rounded-xl transition-all"
                >
                  <RotateCcw size={20} /> Start Over
                </button>
                
                <button
                  onClick={() => setShowPreview(!showPreview)}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-pdf-white border border-pdf-primary text-pdf-primary hover:bg-pdf-primary/5 font-bold rounded-xl transition-all shadow-sm"
                >
                  <Eye size={20} /> {showPreview ? 'Hide Preview' : 'Preview PDF'}
                </button>
                <button
                  onClick={handleDownload}
                  className="flex-1 md:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20"
                >
                  <Download size={20} /> Download PDF
                </button>
              </div>
              {showPreview && (
                <div className="w-full mt-8 border border-pdf-gray rounded-xl overflow-hidden shadow-inner h-[600px] bg-gray-50">
                  <iframe src={extractedUrl} className="w-full h-full" title="PDF Preview" />
                </div>
              )}

            </div>
          )}
        </div>

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-pdf-dark/70 leading-relaxed">Your files are processed locally. We never transmit your sensitive documents to our servers, keeping your work totally private.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Processing</h3>
            <p className="text-pdf-dark/70 leading-relaxed">No uploading or downloading massive files. Because everything runs in-browser, processing is completely instant.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><Eye /></div>
            <h3 className="text-xl font-bold mb-3">Permanent Changes</h3>
            <p className="text-pdf-dark/70 leading-relaxed">Unlike basic viewers, this tool modifies the file metadata permanently so the rotation persists across all devices.</p>
          </div>
        </section>

        <RotatePdfSeo />
        <RelatedPdfTools currentToolPath="/tools/pdf-tools/rotate-pdf" />
      </main>

      <footer className="bg-pdf-white border-t border-pdf-gray py-8 px-6">
        <p className="text-pdf-dark/60 text-center font-medium">© 2026 ToolsWizard - Privacy-First PDF Utilities.</p>
      </footer>
    </div>
  );
}
