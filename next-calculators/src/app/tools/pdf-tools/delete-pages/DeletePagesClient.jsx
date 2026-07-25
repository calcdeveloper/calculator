"use client";

import React, { useState, useRef } from 'react';
import { PDFDocument } from 'pdf-lib';
import { Eye, Download, Upload, Trash2, RotateCcw, ShieldCheck, Zap, Info, 
  ChevronRight, FileText, CheckCircle2, MousePointerClick } from 'lucide-react';
import DeletePagesSeo from '@/components/tools/DeletePagesSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function DeletePagesClient() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]); 
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleUpload = async (e) => {
    const uploadedFile = e.target.files?.[0];
    if (!uploadedFile || uploadedFile.type !== 'application/pdf') {
      setError("Please upload a valid PDF file.");
      return;
    }

    setIsProcessing(true);
    setError(null);
    try {
      const arrayBuffer = await uploadedFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pageCount = pdfDoc.getPageCount();
      
      setFile(uploadedFile);
      setPages(Array.from({ length: pageCount }, (_, i) => i));
      setSelectedPages(new Set());
    } catch (err) {
      setError("Error loading PDF. It might be password protected.");
    } finally {
      setIsProcessing(false);
    }
  };

  const togglePageSelection = (index) => {
    const newSelection = new Set(selectedPages);
    if (newSelection.has(index)) newSelection.delete(index);
    else newSelection.add(index);
    setSelectedPages(newSelection);
  };

  const deletePages = async () => {
    if (selectedPages.size === 0 || selectedPages.size === pages.length) return;

    setIsProcessing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      
      const sortedToDelete = Array.from(selectedPages).sort((a, b) => b - a);
      sortedToDelete.forEach(index => pdfDoc.removePage(index));

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      setExtractedUrl(url);
    } catch (err) {
      setError("Could not process the PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `updated_${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const reset = () => {
    setShowPreview(false);
    setFile(null);
    setPages([]);
    setSelectedPages(new Set());
    setExtractedUrl(null);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Header Context Banner */}
      <section className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Delete PDF Pages</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Delete PDF Pages Online
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Surgically strip away unwanted page layouts inside local browser memory. 100% private, browser-based processing execution.
          </p>
        </div>
      </section>

      {/* Primary Workspace Interactive Component Container */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          {!file ? (
            <div 
              className="p-6 md:p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray m-4 rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) handleUpload({ target: { files: [droppedFile] } });
              }}
            >
              <div className="w-20 h-20 bg-pdf-primary/10 text-pdf-primary rounded-2xl flex items-center justify-center mb-6">
                <Upload size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag PDF Here</h2>
              <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser space context.</p>
              <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                Choose File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" onChange={handleUpload} />
            </div>
          ) : extractedUrl ? (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Pages Deleted!</h2>
              <p className="text-pdf-gray mb-8">Your modified PDF is ready for download.</p>
              
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
          ) : (
            <div className="p-6 md:p-10">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-pdf-gray pb-6 mb-8 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-pdf-dark flex items-center gap-2">
                    <FileText className="text-pdf-primary" /> {file.name}
                  </h2>
                  <p className="text-pdf-gray text-sm">{pages.length} Pages • { (file.size / 1024 / 1024).toFixed(2) } MB</p>
                </div>
                <div className="flex gap-3 w-full md:w-auto">
                  <button onClick={reset} className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-pdf-gray/20 hover:bg-pdf-gray/30 text-pdf-dark font-bold rounded-xl transition-all">
                    <RotateCcw size={18} /> Reset
                  </button>
                  <button 
                    onClick={deletePages}
                    disabled={selectedPages.size === 0 || isProcessing}
                    className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-md"
                  >
                    {isProcessing ? "Processing..." : <><Trash2 size={18} /> Delete {selectedPages.size} Pages</>}
                  </button>
                </div>
              </div>

              {error && (
                <div className="mb-6 p-4 bg-pdf-primary/10 text-pdf-primary rounded-xl border border-pdf-primary/20 flex items-center gap-3">
                  <Info size={20} /> {error}
                </div>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-h-[500px] overflow-y-auto p-4 bg-pdf-bg rounded-2xl border border-pdf-gray">
                {pages.map((index) => (
                  <div 
                    key={index}
                    onClick={() => togglePageSelection(index)}
                    className={`relative aspect-[3/4] cursor-pointer rounded-xl border-4 transition-all duration-200 group ${
                      selectedPages.has(index) ? 'border-pdf-primary bg-pdf-primary/10' : 'border-pdf-white bg-pdf-white hover:border-pdf-secondary shadow-sm'
                    }`}
                  >
                    <div className="absolute top-2 right-2 z-10">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${
                        selectedPages.has(index) ? 'bg-pdf-primary border-pdf-primary text-pdf-white' : 'bg-pdf-white border-pdf-gray text-transparent'
                      }`}>
                        <Trash2 size={14} />
                      </div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center text-pdf-gray font-black text-4xl group-hover:text-pdf-primary/20 transition-colors">
                      {index + 1}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-pdf-dark/5 text-pdf-gray text-[10px] font-bold text-center">
                      PAGE {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><ShieldCheck size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Absolute Data Privacy</h3>
            <p className="text-pdf-gray leading-relaxed">Processing happens 100% inside your local browser memory space. We never see your files, and they are never uploaded to a cloud server storage matrix.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-secondary/10 text-pdf-secondary rounded-xl flex items-center justify-center mb-6"><Zap size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Lightning-Fast Rendering</h3>
            <p className="text-pdf-gray leading-relaxed">Delete multiple pages from massive document arrays in milliseconds using our optimized, serverless client-side engine capabilities.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><MousePointerClick size={24} /></div>
            <h3 className="text-xl font-bold mb-3">Visual Selection Interface</h3>
            <p className="text-pdf-gray leading-relaxed">Review layout indices instantly on your device screen canvas. Select precisely what you want to remove with our intuitive grid selection interface mapping.</p>
          </div>
        </section>

        {/* Extract SEO */}
        <DeletePagesSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/delete-pages" />
      </main>

      
    </div>
  );
}