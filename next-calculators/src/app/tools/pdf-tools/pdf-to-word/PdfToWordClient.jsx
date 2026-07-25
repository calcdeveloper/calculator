"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, FileText, CheckCircle, ShieldCheck, FileOutput, FileCode, Settings } from 'lucide-react';
import PdfToWordSeo from '@/components/tools/PdfToWordSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import * as pdfjsLib from 'pdfjs-dist/build/pdf';

// Configure pdfjs worker
if (typeof window !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
}

export default function PdfToWordClient() {
  const [file, setFile] = useState(null);
  const [pdfBytes, setPdfBytes] = useState(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState('');
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [wordSize, setWordSize] = useState(0);
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
  
  const handleExtract = async () => {
    if (!pdfBytes) return;
    
    setIsProcessing(true);
    setError(null);
    setProgress('Initializing engine...');

    try {
      // 1. Parse PDF with pdf.js
      setProgress('Parsing PDF vectors...');
      const loadingTask = pdfjsLib.getDocument({ data: pdfBytes });
      const pdf = await loadingTask.promise;
      const totalPages = pdf.numPages;
      
      if (totalPages === 0) throw new Error("Document has no pages.");

      let allText = [];

      // 2. Extract Text Page by Page
      for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
        setProgress(`Extracting text from page ${pageNum} of ${totalPages}...`);
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        
        let pageStrings = [];
        let lastY = -1;
        
        // Simple heuristic to build paragraphs based on Y coordinates
        textContent.items.forEach((item) => {
          if (lastY !== item.transform[5] && pageStrings.length > 0) {
            // New line detected
            pageStrings.push("\n");
          }
          pageStrings.push(item.str);
          lastY = item.transform[5];
        });
        
        const pageText = pageStrings.join('');
        if (pageText.trim().length > 0) {
          allText.push(`--- Page ${pageNum} ---`);
          allText.push(pageText);
          allText.push(''); // Spacer
        }
      }

      if (allText.length === 0) {
        throw new Error("No extractable text found. The document may be a scanned image without OCR.");
      }

      // 3. Generate Word Document
      setProgress('Generating .docx file...');
      
      const paragraphs = [];
      
      allText.forEach(block => {
        const lines = block.split('\n');
        lines.forEach(line => {
          if (line.trim().startsWith('--- Page ')) {
            paragraphs.push(
              new Paragraph({
                children: [
                  new TextRun({ text: line, bold: true, color: "888888" })
                ],
                spacing: { before: 200, after: 200 }
              })
            );
          } else {
            paragraphs.push(
              new Paragraph({
                children: [new TextRun(line)]
              })
            );
          }
        });
      });

      const doc = new Document({
        sections: [{
          properties: {},
          children: paragraphs
        }]
      });

      const blob = await Packer.toBlob(doc);
      
      setWordSize(blob.size);
      const url = URL.createObjectURL(blob);
      setConvertedUrl(url);
      setIsProcessing(false);
      
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while extracting text. The file may be locked by an owner password.");
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
    link.download = `${nameWithoutExt}_extracted.docx`;
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
            <span className="text-pdf-white font-medium">PDF to Word</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PDF to Word Text Extractor
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Extract raw text from PDF documents into editable Microsoft Word (.docx) files. Zero-trust private processing.
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
                    
                    <div className="mt-6 bg-pdf-white px-6 py-4 rounded-2xl border border-pdf-gray shadow-sm shadow-pdf-gray/20 w-full max-w-xs">
                      <span className="block text-sm text-pdf-gray font-bold uppercase tracking-wider mb-1">Source Size</span>
                      <span className="text-3xl font-extrabold text-pdf-dark">{(file.size / 1024 / 1024).toFixed(2)} <span className="text-xl text-pdf-gray">MB</span></span>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/2 flex flex-col gap-6">
                  {!convertedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center">
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner mx-auto">
                        <FileCode size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-pdf-dark text-center mb-2">Text Extraction Engine</h3>
                      <p className="text-pdf-gray text-center mb-8">
                        This tool bypasses complex rendering logic to rip pure text data straight out of the PDF structure and flow it into a Microsoft Word document.
                      </p>
                      
                      <div className="bg-amber-50 p-4 border border-amber-100 rounded-xl mb-8 flex gap-3 text-amber-800 text-sm font-medium">
                        <AlertCircle size={20} className="shrink-0 text-amber-500 mt-0.5" />
                        <p>Privacy First: Because this runs entirely in your browser without external servers, complex tables and images will NOT be extracted. Only readable alphanumeric text is preserved.</p>
                      </div>

                      <button 
                        onClick={handleExtract}
                        disabled={isProcessing}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> {progress}</>
                        ) : (
                          <><FileCode size={22} /> Extract Text to Word</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full relative overflow-hidden">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner mt-4">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Extraction Complete!</h3>
                      
                      <p className="text-emerald-700/80 mb-8 font-medium">
                        Successfully generated Word document ({(wordSize / 1024).toFixed(1)} KB).
                      </p>
                      
                      <div className="flex flex-col w-full">
                        <button 
                          onClick={handleDownload}
                          className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                        >
                          <Download size={22} /> Download .docx File
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
            <p className="text-pdf-gray leading-relaxed">Processing happens strictly inside your active browser session. Highly sensitive business contracts are never uploaded to a cloud server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <FileCode size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Pure Text Flow</h3>
            <p className="text-pdf-gray leading-relaxed">Stop fighting with stubborn PDF layouts. We extract the raw alphanumeric text and let Microsoft Word handle the paragraph flow.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Execution</h3>
            <p className="text-pdf-gray leading-relaxed">Skip the upload wait times. Our WebAssembly engine leverages your local hardware to extract the text instantly.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <PdfToWordSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/pdf-to-word" />
      </main>

      
    </div>
  );
}
