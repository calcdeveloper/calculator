"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Upload, Download, RefreshCw, ChevronRight, AlertCircle, FileText, CheckCircle, ShieldCheck, FileOutput, FileCode, Presentation } from 'lucide-react';
import PowerPointToPdfSeo from '@/components/tools/PowerPointToPdfSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';
import JSZip from 'jszip';
import jsPDF from 'jspdf';

export default function PowerPointToPdfClient() {
  const [file, setFile] = useState(null);
  const [docBytes, setDocBytes] = useState(null);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState('');
  const [convertedUrl, setConvertedUrl] = useState(null);
  const [pdfSize, setPdfSize] = useState(0);
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
    
    if (fileObj.type === 'application/vnd.openxmlformats-officedocument.presentationml.presentation' || fileObj.name.toLowerCase().endsWith('.pptx')) {
      setFile(fileObj);
      setError(null);
      setConvertedUrl(null);
      
      try {
        const arrayBuffer = await fileObj.arrayBuffer();
        setDocBytes(arrayBuffer);
      } catch (err) {
        console.error(err);
        setError("Failed to load Presentation. It might be corrupted or encrypted.");
        setFile(null);
      }
      
    } else {
      setError("Please select a valid PowerPoint (.pptx) document.");
    }
  };

  const handleDragOver = (e) => e.preventDefault();
  
  const handleCompile = async () => {
    if (!docBytes) return;
    
    setIsProcessing(true);
    setError(null);
    setProgress('Initializing engine...');

    try {
      setProgress('Unzipping PPTX structure...');
      
      const zip = new JSZip();
      const loadedZip = await zip.loadAsync(docBytes);
      
      // Find all slide XML files
      const slideFiles = [];
      loadedZip.folder("ppt/slides").forEach((relativePath, file) => {
        if (relativePath.match(/^slide\d+\.xml$/)) {
          slideFiles.push(file);
        }
      });
      
      if (slideFiles.length === 0) {
        throw new Error("No slides found in this document.");
      }

      // Sort slides correctly (slide1, slide2... not slide1, slide10, slide2)
      slideFiles.sort((a, b) => {
        const numA = parseInt(a.name.match(/slide(\d+)\.xml/)[1]);
        const numB = parseInt(b.name.match(/slide(\d+)\.xml/)[1]);
        return numA - numB;
      });

      setProgress('Compiling PDF layout...');
      
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [960, 540] // Standard 16:9 presentation layout
      });
      
      const margin = 40;
      const pageWidth = doc.internal.pageSize.getWidth();
      const pageHeight = doc.internal.pageSize.getHeight();
      const maxLineWidth = pageWidth - margin * 2;
      const lineHeight = 18;
      
      const parser = new DOMParser();

      for (let i = 0; i < slideFiles.length; i++) {
        setProgress(`Parsing slide ${i + 1} of ${slideFiles.length}...`);
        
        if (i > 0) {
          doc.addPage();
        }

        const xmlString = await slideFiles[i].async("string");
        const xmlDoc = parser.parseFromString(xmlString, "text/xml");
        
        // Extract all text nodes (<a:t> in pptx xml)
        const textNodes = xmlDoc.getElementsByTagName("a:t");
        let slideText = [];
        
        for (let j = 0; j < textNodes.length; j++) {
          slideText.push(textNodes[j].textContent);
        }
        
        // Draw Slide Header
        doc.setFontSize(24);
        doc.setFont("helvetica", "bold");
        doc.setTextColor(50, 50, 50);
        doc.text(`Slide ${i + 1}`, margin, margin + 20);
        
        // Draw slide content
        doc.setFontSize(14);
        doc.setFont("helvetica", "normal");
        doc.setTextColor(80, 80, 80);
        
        let cursorY = margin + 60;
        
        if (slideText.length === 0) {
          doc.setFont("helvetica", "italic");
          doc.text("[No text found on this slide. It may only contain images.]", margin, cursorY);
        } else {
          for (let j = 0; j < slideText.length; j++) {
            let p = slideText[j].trim();
            if (p === '') continue;

            const lines = doc.splitTextToSize(p, maxLineWidth);
            
            for (let k = 0; k < lines.length; k++) {
              if (cursorY + lineHeight > pageHeight - margin) {
                // If a slide has too much text, just truncate it for this layout engine,
                // or we could add an overflow page. Let's add an overflow page.
                doc.addPage();
                doc.setFontSize(14);
                doc.setFont("helvetica", "normal");
                cursorY = margin + 20;
                doc.text(`Slide ${i + 1} (Continued)`, margin, cursorY);
                cursorY += 40;
              }
              doc.text(lines[k], margin, cursorY);
              cursorY += lineHeight;
            }
            
            cursorY += lineHeight * 0.5; // spacing
          }
        }
      }

      setProgress('Generating final document...');
      const blob = doc.output('blob');
      
      setPdfSize(blob.size);
      const url = URL.createObjectURL(blob);
      setConvertedUrl(url);
      setIsProcessing(false);
      
    } catch (err) {
      console.error(err);
      setError(err.message || "An error occurred while compiling the PDF. The file may be locked or unsupported.");
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setDocBytes(null);
    setConvertedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!convertedUrl) return;
    const link = document.createElement("a");
    link.href = convertedUrl;
    
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_compiled.pdf`;
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
            <span className="text-pdf-white font-medium">PowerPoint to PDF</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            PowerPoint to PDF Compiler
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Extract text from PowerPoint (.pptx) slides and compile them into clean PDF presentations. Zero-trust private processing.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag PPTX Here</h2>
                <p className="text-pdf-gray mb-8 text-center">Your sensitive business presentations are never uploaded to a cloud server.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Select PowerPoint File
                </button>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-1/2 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <Presentation size={20} className="text-pdf-primary" /> Document Details
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors">
                      Change File
                    </button>
                  </div>
                  
                  <div className="flex-grow flex flex-col items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative min-h-[300px] p-6 text-center">
                    <Presentation size={64} className="mb-4 text-pdf-primary/50" />
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
                      <div className="w-16 h-16 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center mb-6 shadow-inner mx-auto">
                        <FileCode size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-pdf-dark text-center mb-2">Slide Compilation Engine</h3>
                      <p className="text-pdf-gray text-center mb-8">
                        This tool bypasses complex rendering logic to rip pure text data straight out of the PowerPoint structure and paint it directly into a clean, slide-by-slide PDF document.
                      </p>
                      
                      <div className="bg-orange-50 p-4 border border-orange-100 rounded-xl mb-8 flex gap-3 text-orange-800 text-sm font-medium">
                        <AlertCircle size={20} className="shrink-0 text-orange-500 mt-0.5" />
                        <p>Privacy First: Because this runs entirely in your browser without MS Office servers, complex slide backgrounds, images, and animations will NOT be preserved. Only readable text is compiled.</p>
                      </div>

                      <button 
                        onClick={handleCompile}
                        disabled={isProcessing}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> {progress}</>
                        ) : (
                          <><FileCode size={22} /> Compile to PDF</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full relative overflow-hidden">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner mt-4">
                        <CheckCircle size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Compilation Complete!</h3>
                      
                      <p className="text-emerald-700/80 mb-8 font-medium">
                        Successfully generated PDF document ({(pdfSize / 1024).toFixed(1)} KB).
                      </p>
                      
                      <div className="flex flex-col w-full">
                        <button 
                          onClick={handleDownload}
                          className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                        >
                          <Download size={22} /> Download .pdf File
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
            accept="application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx" 
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
            <p className="text-pdf-gray leading-relaxed">Processing happens strictly inside your active browser session. Highly sensitive pitch decks are never uploaded to a cloud server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <FileCode size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Pure Text Compilation</h3>
            <p className="text-pdf-gray leading-relaxed">We extract the raw text from your PowerPoint document and compile it into a clean, unformatted PDF ready for secure archival.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Execution</h3>
            <p className="text-pdf-gray leading-relaxed">Skip the upload wait times. Our browser-based extraction engine leverages your local hardware to convert the file instantly.</p>
          </div>
        </section>

        {/* SEO Content Section */}
        <PowerPointToPdfSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/powerpoint-to-pdf" />
      </main>

      
    </div>
  );
}
