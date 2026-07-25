"use client";

import React, { useState, useRef } from "react";
import { PDFDocument } from 'pdf-lib';
import { Eye, Download, Upload, FileText, CheckCircle2, 
  RotateCcw, ShieldCheck, Zap, ChevronRight, SplitSquareHorizontal } from 'lucide-react';
import ExtractPagesSeo from '@/components/tools/ExtractPagesSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ExtractPagesClient() {
  const [file, setFile] = useState(null);
  const [pageRange, setPageRange] = useState("");
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
        setPageCount(pdfDoc.getPageCount());
        
        setFile(selectedFile);
        setExtractedUrl(null);
        setPageRange("");
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

  const parsePageRange = (rangeStr, maxPages) => {
    const pagesToExtract = new Set();
    const parts = rangeStr.split(',');
    
    for (const part of parts) {
      const trimmed = part.trim();
      if (!trimmed) continue;
      
      if (trimmed.includes('-')) {
        const [start, end] = trimmed.split('-').map(num => parseInt(num.trim(), 10));
        if (isNaN(start) || isNaN(end) || start > end || start < 1 || end > maxPages) {
          throw new Error(`Invalid range: ${trimmed}. Ensure pages are between 1 and ${maxPages}.`);
        }
        for (let i = start; i <= end; i++) {
          pagesToExtract.add(i);
        }
      } else {
        const num = parseInt(trimmed, 10);
        if (isNaN(num) || num < 1 || num > maxPages) {
          throw new Error(`Invalid page number: ${trimmed}. Ensure it is between 1 and ${maxPages}.`);
        }
        pagesToExtract.add(num);
      }
    }
    
    if (pagesToExtract.size === 0) {
      throw new Error("Please enter a valid page range.");
    }
    
    return Array.from(pagesToExtract).sort((a, b) => a - b);
  };

  const handleExtract = async () => {
    if (!file || !pageRange.trim()) return;
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const pagesToExtract = parsePageRange(pageRange, pageCount);
      
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const newPdfDoc = await PDFDocument.create();
      
      // pdf-lib uses 0-based indexing for pages
      const indices = pagesToExtract.map(pageNum => pageNum - 1);
      
      const copiedPages = await newPdfDoc.copyPages(pdfDoc, indices);
      copiedPages.forEach(page => newPdfDoc.addPage(page));
      
      const pdfBytes = await newPdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setExtractedUrl(url);
    } catch (err) {
      setError(err.message || "An error occurred during extraction.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setShowPreview(false);
    setFile(null);
    setPageRange("");
    setExtractedUrl(null);
    setError(null);
    setPageCount(0);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `extracted_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Extract Pages</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Extract PDF Pages Online
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Select and extract specific pages from your PDF document instantly. Processed completely privately in your browser.
          </p>
        </div>
      </section>

      {/* Main Tool */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {!file && !isProcessing && (
            <div 
              className="p-6 md:p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
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
              <p className="text-pdf-gray mb-8 text-center">Your file stays on your device. 100% private extraction.</p>
              <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                Choose File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" onChange={handleFileChange} />
            </div>
          )}

          {isProcessing && !extractedUrl && (
            <div className="p-8 md:p-16 flex flex-col items-center justify-center">
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
                <button onClick={reset} className="flex items-center justify-center gap-2 px-5 py-2.5 bg-pdf-gray/20 hover:bg-pdf-gray/30 text-pdf-dark font-bold rounded-xl transition-all">
                  <RotateCcw size={18} /> Choose Another
                </button>
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-lg font-bold text-pdf-dark mb-3">
                  Pages to Extract
                </label>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    value={pageRange}
                    onChange={(e) => setPageRange(e.target.value)}
                    placeholder="e.g. 1, 3-5, 8"
                    className="flex-1 px-5 py-4 bg-pdf-bg border border-pdf-gray rounded-xl text-lg focus:ring-2 focus:ring-pdf-primary outline-none"
                  />
                  <button
                    onClick={handleExtract}
                    disabled={!pageRange.trim()}
                    className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-colors disabled:bg-pdf-gray disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    <SplitSquareHorizontal size={20} /> Extract
                  </button>
                </div>
                <p className="text-sm text-pdf-gray mt-3 flex items-center gap-2">
                  <Zap size={14} /> Example: Type <strong>1-3, 5, 9</strong> to extract pages 1, 2, 3, 5, and 9. Total pages: {pageCount}.
                </p>
              </div>
            </div>
          )}

          {extractedUrl && (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Extraction Complete!</h2>
              <p className="text-pdf-gray mb-8">Your new PDF has been successfully generated.</p>
              
              <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
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

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><ShieldCheck size={24} /></div>
            <h3 className="text-xl font-bold mb-3">100% Secure</h3>
            <p className="text-pdf-gray leading-relaxed">Files are processed locally in your browser. They are never uploaded to any server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-secondary/10 text-pdf-secondary rounded-xl flex items-center justify-center mb-6"><Zap size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Fast Processing</h3>
            <p className="text-pdf-gray leading-relaxed">Because there is no upload, the extraction happens instantly, right on your device.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><SplitSquareHorizontal size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Flexible Range</h3>
            <p className="text-pdf-gray leading-relaxed">Extract single pages or multiple ranges easily using a simple comma-separated format.</p>
          </div>
        </section>

        {/* SEO Component */}
        <ExtractPagesSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/extract-pages" />

      </main>

      
    </div>
  );
}