"use client";

import React, { useState, useRef } from "react";
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';
import { Eye, Download, Upload, FileText, CheckCircle2, 
  RotateCcw, ShieldCheck, Zap, ChevronRight, Hash, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import AddPageNumbersSeo from '@/components/tools/AddPageNumbersSeo';
import RelatedPdfTools from '@/components/tools/RelatedPdfTools';

export default function PageNumbersClient() {
  const [file, setFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);
  const [error, setError] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  
  // Settings
  const [position, setPosition] = useState("bottom-center");
  const [startingNumber, setStartingNumber] = useState(1);
  const [format, setFormat] = useState("{n}"); // {n} for number, {n}/{t} for number/total
  
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setIsProcessing(true);
      setError(null);
      try {
        const arrayBuffer = await selectedFile.arrayBuffer();
        const pdfDoc = await PDFDocument.load(arrayBuffer);
        setPageCount(pdfDoc.getPageCount());
        
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

  const handleProcess = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages = pdfDoc.getPages();
      const total = pages.length;
      
      pages.forEach((page, index) => {
        const { width, height } = page.getSize();
        const num = startingNumber + index;
        
        // Format text
        let text = format.replace("{n}", num.toString()).replace("{t}", total.toString());
        
        const textSize = 12;
        const textWidth = font.widthOfTextAtSize(text, textSize);
        const margin = 30; // Distance from edge
        
        let x = 0;
        let y = 0;
        
        // Calculate Y
        if (position.startsWith("top")) {
          y = height - margin - textSize;
        } else {
          y = margin;
        }
        
        // Calculate X
        if (position.endsWith("left")) {
          x = margin;
        } else if (position.endsWith("right")) {
          x = width - margin - textWidth;
        } else {
          // center
          x = (width / 2) - (textWidth / 2);
        }
        
        page.drawText(text, {
          x,
          y,
          size: textSize,
          font: font,
          color: rgb(0, 0, 0),
        });
      });
      
      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setExtractedUrl(url);
    } catch (err) {
      setError(err.message || "An error occurred. Ensure the PDF is not password protected.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setShowPreview(false);
    setFile(null);
    setExtractedUrl(null);
    setError(null);
    setPageCount(0);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `numbered_${file.name}`;
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
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Add Page Numbers</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Add Page Numbers to PDF
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Inject custom page numbers into your PDF documents instantly. Processed completely privately in your browser.
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
                </div>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Settings Column */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2">
                    <Hash size={24} className="text-pdf-primary" /> Settings
                  </h3>
                  
                  <div>
                    <label className="block text-base font-semibold text-pdf-dark mb-2">Position</label>
                    <div className="grid grid-cols-3 gap-2">
                      <button onClick={() => setPosition("top-left")} className={`p-3 rounded-xl border ${position === "top-left" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Top L</button>
                      <button onClick={() => setPosition("top-center")} className={`p-3 rounded-xl border ${position === "top-center" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Top C</button>
                      <button onClick={() => setPosition("top-right")} className={`p-3 rounded-xl border ${position === "top-right" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Top R</button>
                      
                      <button onClick={() => setPosition("bottom-left")} className={`p-3 rounded-xl border ${position === "bottom-left" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Bot L</button>
                      <button onClick={() => setPosition("bottom-center")} className={`p-3 rounded-xl border ${position === "bottom-center" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Bot C</button>
                      <button onClick={() => setPosition("bottom-right")} className={`p-3 rounded-xl border ${position === "bottom-right" ? "border-pdf-primary bg-pdf-primary/10 text-pdf-primary font-bold" : "border-pdf-gray hover:bg-pdf-bg"}`}>Bot R</button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-pdf-dark mb-2">Format</label>
                    <select 
                      value={format} 
                      onChange={(e) => setFormat(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-pdf-gray bg-pdf-bg focus:ring-2 focus:ring-pdf-primary outline-none"
                    >
                      <option value="{n}">1, 2, 3...</option>
                      <option value="Page {n}">Page 1, Page 2...</option>
                      <option value="{n} of {t}">1 of X, 2 of X...</option>
                      <option value="Page {n} of {t}">Page 1 of X...</option>
                      <option value="- {n} -">- 1 -, - 2 -...</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-base font-semibold text-pdf-dark mb-2">Starting Number</label>
                    <input 
                      type="number" 
                      min="1" 
                      value={startingNumber} 
                      onChange={(e) => setStartingNumber(parseInt(e.target.value) || 1)}
                      className="w-full px-4 py-3 rounded-xl border border-pdf-gray bg-pdf-bg focus:ring-2 focus:ring-pdf-primary outline-none"
                    />
                  </div>

                  <button 
                    onClick={handleProcess} 
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white font-bold rounded-xl transition-all shadow-md mt-4"
                  >
                    <CheckCircle2 size={20} /> Add Page Numbers
                  </button>
                </div>
                
                {/* Preview Column */}
                <div className="bg-pdf-bg rounded-2xl border border-pdf-gray p-6 flex flex-col items-center justify-center relative min-h-[400px]">
                   <div className="absolute top-4 left-4 text-pdf-gray/50 flex flex-col gap-2">
                     <div className="w-32 h-4 bg-pdf-gray/20 rounded"></div>
                     <div className="w-48 h-4 bg-pdf-gray/20 rounded"></div>
                     <div className="w-40 h-4 bg-pdf-gray/20 rounded"></div>
                   </div>
                   
                   <div className="absolute top-4 right-4 text-pdf-gray/50 flex flex-col items-end gap-2">
                     <div className="w-32 h-4 bg-pdf-gray/20 rounded"></div>
                     <div className="w-48 h-4 bg-pdf-gray/20 rounded"></div>
                     <div className="w-40 h-4 bg-pdf-gray/20 rounded"></div>
                   </div>

                   {/* Mock Page Number Placement */}
                   <div className="absolute inset-0 p-8 flex">
                      <div className={`w-full flex ${position.startsWith("top") ? "items-start" : "items-end"} ${position.endsWith("left") ? "justify-start" : position.endsWith("right") ? "justify-end" : "justify-center"}`}>
                         <div className="px-4 py-2 bg-pdf-primary/20 border border-pdf-primary text-pdf-primary font-bold rounded-lg text-sm shadow-sm animate-pulse">
                            {format.replace("{n}", startingNumber.toString()).replace("{t}", pageCount.toString())}
                         </div>
                      </div>
                   </div>
                </div>
              </div>
            </div>
          )}

          {extractedUrl && (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Numbers Added!</h2>
              <p className="text-pdf-gray mb-8">Your PDF has been numbered and is ready to download.</p>
              
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
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><Hash /></div>
            <h3 className="text-xl font-bold mb-3">Flexible Formatting</h3>
            <p className="text-pdf-dark/70 leading-relaxed">Choose your exact preferred placement and formatting style to match the requirements of your specific document type.</p>
          </div>
        </section>

        <AddPageNumbersSeo />
        <RelatedPdfTools currentToolPath="/tools/pdf-tools/page-numbers" />
      </main>

      <footer className="bg-pdf-white border-t border-pdf-gray py-8 px-6">
        <p className="text-pdf-dark/60 text-center font-medium">© 2026 ToolsWizard - Privacy-First PDF Utilities.</p>
      </footer>
    </div>
  );
}
