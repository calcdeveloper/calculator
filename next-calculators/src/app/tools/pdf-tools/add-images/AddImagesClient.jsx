"use client";

import React, { useState, useRef } from "react";
import { PDFDocument } from 'pdf-lib';
import { Eye, Download, Upload, FileText, CheckCircle2, 
  RotateCcw, ShieldCheck, Zap, ChevronRight, Image as ImageIcon, Plus } from 'lucide-react';
import AddImagesToPdfSeo from '@/components/tools/AddImagesToPdfSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function AddImagesClient() {
  const [pdfFile, setPdfFile] = useState(null);
  const [imageFiles, setImageFiles] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);
  const [error, setError] = useState(null);
  
  const pdfInputRef = useRef(null);
  const imageInputRef = useRef(null);

  const handlePdfChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setPdfFile(selectedFile);
      setError(null);
      setExtractedUrl(null);
    } else if (selectedFile) {
      setError("Please select a valid PDF file.");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files || []);
    const validImages = files.filter(f => f.type.startsWith("image/jpeg") || f.type.startsWith("image/png"));
    
    if (validImages.length > 0) {
      setImageFiles(prev => [...prev, ...validImages]);
      setError(null);
    } else {
      setError("Please select valid JPG or PNG images.");
    }
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleProcess = async () => {
    if (!pdfFile) {
      setError("Please upload a PDF file.");
      return;
    }
    if (imageFiles.length === 0) {
      setError("Please add at least one image.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const pdfBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await PDFDocument.load(pdfBuffer);
      
      for (const imgFile of imageFiles) {
        const imgBuffer = await imgFile.arrayBuffer();
        let pdfImage;
        
        if (imgFile.type === "image/png") {
          pdfImage = await pdfDoc.embedPng(imgBuffer);
        } else if (imgFile.type === "image/jpeg" || imgFile.type === "image/jpg") {
          pdfImage = await pdfDoc.embedJpg(imgBuffer);
        } else {
          continue;
        }
        
        const imgDims = pdfImage.scale(1);
        
        // We will append the image as a new page that fits the image exactly
        const page = pdfDoc.addPage([imgDims.width, imgDims.height]);
        page.drawImage(pdfImage, {
          x: 0,
          y: 0,
          width: imgDims.width,
          height: imgDims.height,
        });
      }
      
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
    setPdfFile(null);
    setImageFiles([]);
    setExtractedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `updated_${pdfFile.name}`;
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
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Add Images</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Add Images to PDF
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Append JPG and PNG images securely to your PDF documents. Processed completely privately in your browser.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
      <main className="max-w-6xl mx-auto px-4 -mt-20 pb-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden p-6 md:p-8">
          
          {!pdfFile && !isProcessing && (
            <div 
              className="p-6 md:p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
              onClick={() => pdfInputRef.current.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const droppedFile = e.dataTransfer.files[0];
                if (droppedFile) handlePdfChange({ target: { files: [droppedFile] } });
              }}
            >
              <div className="w-20 h-20 bg-pdf-primary/10 text-pdf-primary rounded-2xl flex items-center justify-center mb-6">
                <FileText size={40} />
              </div>
              <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Upload Master PDF</h2>
              <p className="text-pdf-gray mb-8 text-center">Select the PDF file you want to append images to.</p>
              <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                Choose PDF
              </button>
              <input type="file" ref={pdfInputRef} className="hidden" accept=".pdf" onChange={handlePdfChange} />
            </div>
          )}

          {isProcessing && !extractedUrl && (
            <div className="p-8 md:p-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-pdf-primary border-t-transparent rounded-full animate-spin mb-6"></div>
              <h3 className="text-2xl font-bold text-pdf-dark">Processing Document...</h3>
            </div>
          )}

          {pdfFile && !extractedUrl && !isProcessing && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column: PDF Status */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2">
                  <FileText size={24} className="text-pdf-primary" /> Target Document
                </h3>
                <div className="p-6 bg-pdf-bg border border-pdf-gray rounded-2xl flex flex-col items-center text-center">
                   <FileText size={48} className="text-pdf-primary mb-4" />
                   <h4 className="font-bold text-lg text-pdf-dark truncate w-full px-4">{pdfFile.name}</h4>
                   <p className="text-sm text-pdf-gray mt-1">{(pdfFile.size / 1024 / 1024).toFixed(2)} MB</p>
                   <button onClick={reset} className="mt-6 px-4 py-2 bg-pdf-gray/20 hover:bg-pdf-gray/30 rounded-lg text-pdf-dark font-medium transition-colors flex items-center gap-2">
                     <RotateCcw size={16} /> Replace PDF
                   </button>
                </div>

                <button 
                  onClick={handleProcess}
                  disabled={imageFiles.length === 0}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray disabled:cursor-not-allowed text-pdf-white font-bold rounded-xl transition-all shadow-md"
                >
                  <CheckCircle2 size={20} /> Append {imageFiles.length} Images to PDF
                </button>
                
                {error && (
                  <div className="p-4 bg-red-50 text-red-700 rounded-xl border border-red-200">
                    {error}
                  </div>
                )}
              </div>

              {/* Right Column: Images */}
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-pdf-dark flex items-center gap-2">
                    <ImageIcon size={24} className="text-pdf-primary" /> Images to Append
                  </h3>
                  <button 
                    onClick={() => imageInputRef.current.click()}
                    className="flex items-center gap-2 px-4 py-2 bg-pdf-primary/10 text-pdf-primary hover:bg-pdf-primary/20 rounded-lg font-bold transition-colors"
                  >
                    <Plus size={18} /> Add Images
                  </button>
                  <input type="file" multiple ref={imageInputRef} className="hidden" accept="image/jpeg, image/png" onChange={handleImageChange} />
                </div>

                {imageFiles.length === 0 ? (
                  <div className="p-6 md:p-12 border-2 border-dashed border-pdf-gray rounded-2xl flex flex-col items-center justify-center text-center text-pdf-gray bg-pdf-bg/50">
                    <ImageIcon size={48} className="mb-4 opacity-50" />
                    <p>No images added yet.</p>
                    <p className="text-sm mt-2">Added images will be appended as new pages.</p>
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                    {imageFiles.map((img, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-pdf-bg rounded-xl border border-pdf-gray">
                        <div className="flex items-center gap-3 overflow-hidden">
                          <div className="w-10 h-10 bg-pdf-primary/10 rounded flex items-center justify-center flex-shrink-0">
                            <ImageIcon size={20} className="text-pdf-primary" />
                          </div>
                          <div className="flex flex-col overflow-hidden">
                            <span className="font-semibold text-sm text-pdf-dark truncate">{img.name}</span>
                            <span className="text-xs text-pdf-gray">{(img.size / 1024).toFixed(1)} KB</span>
                          </div>
                        </div>
                        <button onClick={() => removeImage(idx)} className="p-2 text-pdf-gray hover:text-red-500 transition-colors">
                          <CheckCircle2 size={18} className="rotate-45" /> {/* Use as cross */}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {extractedUrl && (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Images Added!</h2>
              <p className="text-pdf-gray mb-8">Your PDF has been successfully updated and is ready to download.</p>
              
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

        {/* Informational Sections */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Browser-Side Security</h3>
            <p className="text-pdf-dark/70 leading-relaxed">Your files are processed locally. We never transmit your sensitive documents or images to our servers.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Instant Processing</h3>
            <p className="text-pdf-dark/70 leading-relaxed">No uploading massive image files. Because everything runs in-browser, processing is completely instant.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><ImageIcon /></div>
            <h3 className="text-xl font-bold mb-3">Lossless Images</h3>
            <p className="text-pdf-dark/70 leading-relaxed">We directly inject your high-resolution PNGs and JPGs into the document without compressing or degrading them.</p>
          </div>
        </section>

        <AddImagesToPdfSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/add-images" />
      </main>

      
    </div>
  );
}
