"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, FileText, CheckCircle, Search, Layers, FileImage, Copy } from 'lucide-react';
import PdfOcrSeo from '@/components/tools/PdfOcrSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';
import { createWorker } from 'tesseract.js';
import * as pdfjsLib from 'pdfjs-dist';

// Use same pdfjs worker approach as other components
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export default function PdfOcrClient() {
  const [file, setFile] = useState(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('');
  
  const [extractedText, setExtractedText] = useState('');
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);

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
    
    if (fileObj.type === 'application/pdf' || fileObj.name.toLowerCase().endsWith('.pdf') || fileObj.type.startsWith('image/')) {
      setFile(fileObj);
      setError(null);
      setExtractedText('');
      setProgress(0);
      setStatusMessage('');
    } else {
      setError("Please select a valid PDF or image document.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  
  const extractTextFromImage = async (imageUrl, worker) => {
    const { data: { text } } = await worker.recognize(imageUrl);
    return text;
  };

  const handleExtract = async () => {
    if (!file) return;
    
    setIsProcessing(true);
    setError(null);
    setExtractedText('');
    setProgress(0);
    setStatusMessage('Initializing OCR Engine...');

    try {
      const worker = await createWorker('eng', 1, {
        logger: m => {
          if (m.status === 'recognizing text') {
            setProgress(Math.round(m.progress * 100));
          }
        }
      });
      
      // Tesseract v5+ initializes automatically, no need to call loadLanguage or initialize
      let fullText = '';

      if (file.type.startsWith('image/')) {
        setStatusMessage('Scanning Image...');
        const imageUrl = URL.createObjectURL(file);
        fullText = await extractTextFromImage(imageUrl, worker);
        URL.revokeObjectURL(imageUrl);
      } else {
        // PDF processing
        setStatusMessage('Parsing PDF Document...');
        const arrayBuffer = await file.arrayBuffer();
        const loadingTask = pdfjsLib.getDocument(new Uint8Array(arrayBuffer));
        const pdf = await loadingTask.promise;
        const numPages = pdf.numPages;
        
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          setStatusMessage(`Scanning Page ${pageNum} of ${numPages}...`);
          setProgress(0); // Reset progress for the new page
          
          const page = await pdf.getPage(pageNum);
          
          // Higher scale = better OCR accuracy, but slower. 2.0 is a good balance.
          const viewport = page.getViewport({ scale: 2.0 });
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          
          const renderContext = {
            canvasContext: ctx,
            viewport: viewport
          };
          
          await page.render(renderContext).promise;
          
          const imageUrl = canvas.toDataURL('image/png');
          const pageText = await extractTextFromImage(imageUrl, worker);
          
          fullText += `\n--- Page ${pageNum} ---\n\n${pageText}\n`;
        }
      }

      await worker.terminate();
      
      if (!fullText.trim()) {
         fullText = "No readable text was found in this document.";
      }

      setExtractedText(fullText.trim());
      setIsProcessing(false);
      setStatusMessage('');
      
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred during text extraction.");
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setExtractedText('');
    setError(null);
    setProgress(0);
    setStatusMessage('');
  };

  const handleDownloadTxt = () => {
    if (!extractedText) return;
    const blob = new Blob([extractedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_ocr.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  
  const handleCopy = () => {
    if (!extractedText) return;
    navigator.clipboard.writeText(extractedText);
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hidden canvas for PDF rasterization */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      
      {/* Hero Header */}
      <header className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/tools/pdf-tools" className="hover:text-pdf-white transition-colors">Tools</Link> 
            <ChevronRight size={14} className="mt-0.5" /> 
            <Link href="/tools/pdf-tools" className="hover:text-pdf-white transition-colors">Image and PDF Tool</Link> 
            <ChevronRight size={14} className="mt-0.5" /> 
            <span className="text-pdf-white font-medium">PDF OCR</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PDF OCR Extractor
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Extract searchable text from scanned PDFs and images. Powered by advanced zero-trust client-side AI.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {error && (
            <div className="bg-red-50 p-4 border-b border-red-100 flex items-center gap-3 text-red-700 rounded-xl mb-6">
              <AlertCircle size={20} className="shrink-0" />
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
                  <Search size={32} className="text-pdf-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag Scanned PDF/Image Here</h2>
                <p className="text-pdf-gray mb-8 text-center">Your documents are processed securely in your browser. No uploads.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Select Document
                </button>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-1/3 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <FileText size={20} className="text-pdf-primary" /> Source File
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change
                    </button>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[250px] p-6 text-center">
                    {file.type.startsWith('image/') ? (
                       <FileImage size={64} className="mb-4 text-pdf-primary/50" />
                    ) : (
                       <FileText size={64} className="mb-4 text-pdf-primary/50" />
                    )}
                    <p className="font-bold text-lg text-pdf-dark mb-2 break-all">{file.name}</p>
                    <span className="text-sm font-medium text-pdf-gray">{(file.size / 1024 / 1024).toFixed(2)} MB</span>
                  </div>
                  
                  {!extractedText && (
                    <button 
                      onClick={handleExtract}
                      disabled={isProcessing}
                      className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20"
                    >
                      {isProcessing ? (
                        <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Extracting Text...</>
                      ) : (
                        <><Search size={20} /> Run OCR Engine</>
                      )}
                    </button>
                  )}
                  
                  {isProcessing && (
                    <div className="mt-4 bg-white p-4 rounded-xl border border-pdf-gray shadow-sm">
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-pdf-dark">{statusMessage}</span>
                        <span className="text-pdf-primary">{progress}%</span>
                      </div>
                      <div className="w-full bg-pdf-bg rounded-full h-2">
                        <div className="bg-pdf-primary h-2 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:w-2/3 flex flex-col gap-6">
                  {!extractedText ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm h-full flex flex-col justify-center items-center text-center">
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner mx-auto">
                        <Layers size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-pdf-dark mb-2">Ready for Extraction</h3>
                      <p className="text-pdf-gray max-w-md mb-6">
                        Click "Run OCR Engine" to mathematically analyze the pixels in your document and convert them into selectable, editable text.
                      </p>
                      
                      <div className="bg-blue-50 p-4 border border-blue-100 rounded-xl flex gap-3 text-blue-800 text-sm font-medium max-w-md text-left">
                        <CheckCircle size={20} className="shrink-0 text-blue-500 mt-0.5" />
                        <p>Privacy First: The Optical Character Recognition (OCR) model runs strictly in your browser. Your file is never uploaded.</p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-pdf-bg/30 border border-pdf-gray rounded-2xl shadow-sm flex flex-col h-full overflow-hidden">
                       <div className="bg-white border-b border-pdf-gray p-4 flex justify-between items-center">
                         <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                           <FileText size={18} className="text-pdf-primary" /> Extracted Text
                         </h3>
                         <div className="flex gap-2">
                            <button 
                              onClick={handleCopy}
                              className="flex items-center gap-2 px-3 py-1.5 bg-pdf-white border border-pdf-gray hover:bg-pdf-bg text-pdf-dark font-medium rounded-lg transition-colors text-sm"
                            >
                              <Copy size={16} /> Copy
                            </button>
                            <button 
                              onClick={handleDownloadTxt}
                              className="flex items-center gap-2 px-3 py-1.5 bg-pdf-primary hover:bg-pdf-primaryDark text-white font-medium rounded-lg transition-colors shadow-sm text-sm"
                            >
                              <Download size={16} /> Save .txt
                            </button>
                         </div>
                       </div>
                       
                       <div className="p-4 flex-grow relative">
                         <textarea 
                           className="w-full h-full min-h-[400px] p-4 rounded-xl border border-pdf-gray focus:outline-none focus:ring-2 focus:ring-pdf-primary resize-none bg-white font-mono text-sm leading-relaxed"
                           value={extractedText}
                           readOnly
                         />
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
            accept="application/pdf,.pdf,image/*" 
            className="hidden" 
          />
        </div>
        
        {/* SEO Content Section */}
        <PdfOcrSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/pdf-ocr" />
      </main>

      
    </div>
  );
}
