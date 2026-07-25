"use client";

import React, { useState, useRef } from "react";
import { PDFDocument } from 'pdf-lib';
import { encryptPDF } from '@pdfsmaller/pdf-encrypt-lite';
import { Eye, Download, Upload, FileText, CheckCircle2, 
  RotateCcw, ShieldCheck, Zap, ChevronRight, Lock, KeyRound, AlertTriangle } from 'lucide-react';
import ProtectPdfSeo from '@/components/tools/ProtectPdfSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ProtectPdfClient() {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  const handleFileChange = async (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setError(null);
      setExtractedUrl(null);
    } else if (selectedFile) {
      setError("Please select a valid PDF file.");
    }
  };

  const handleProcess = async () => {
    if (!file) return;
    if (!password) {
      setError("Please enter a password.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const arrayBuffer = await file.arrayBuffer();
      
      // Perform actual encryption using the new library
      const pdfBytes = await encryptPDF(new Uint8Array(arrayBuffer), password);
      
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      setExtractedUrl(url);
    } catch (err) {
      setError(err.message || "An error occurred.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setShowPreview(false);
    setFile(null);
    setPassword("");
    setExtractedUrl(null);
    setError(null);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `protected_${file.name}`;
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
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Protect PDF</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Password Protect PDF
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Encrypt your sensitive PDF files with a secure password instantly inside your browser.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
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
                <Lock size={40} />
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
            <div className="p-8 md:p-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 border-4 border-pdf-primary border-t-transparent rounded-full animate-spin mb-6"></div>
              <h3 className="text-2xl font-bold text-pdf-dark">Encrypting Document...</h3>
            </div>
          )}

          {file && !extractedUrl && !isProcessing && (
            <div className="space-y-8">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-pdf-gray pb-6 gap-4">
                <div>
                  <h2 className="text-xl font-bold text-pdf-dark flex items-center gap-2">
                    <FileText className="text-pdf-primary" /> {file.name}
                  </h2>
                  <p className="text-pdf-gray text-sm">{(file.size / 1024 / 1024).toFixed(2)} MB</p>
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

              <div className="max-w-xl mx-auto bg-pdf-bg border border-pdf-gray rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-full flex items-center justify-center">
                    <KeyRound size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-pdf-dark">Set Password</h3>
                    <p className="text-sm text-pdf-gray">Enter a strong password to encrypt this file.</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <input 
                      type="password" 
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter strong password..."
                      className="w-full px-5 py-4 rounded-xl border border-pdf-gray bg-pdf-white focus:ring-2 focus:ring-pdf-primary outline-none text-lg"
                    />
                  </div>


                  <button 
                    onClick={handleProcess} 
                    disabled={!password}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray disabled:cursor-not-allowed text-pdf-white font-bold rounded-xl transition-all shadow-md"
                  >
                    <Lock size={20} /> Encrypt PDF
                  </button>
                </div>
              </div>
            </div>
          )}

          {extractedUrl && (
            <div className="p-8 flex flex-col items-center justify-center text-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-3xl font-bold text-pdf-dark mb-4">Protection Flow Complete!</h2>
              <p className="text-pdf-gray mb-8">Your PDF is ready for download.</p>
              
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
            <h3 className="text-xl font-bold mb-3">Browser-Side Processing</h3>
            <p className="text-pdf-dark/70 leading-relaxed">Everything happens securely in your web browser. Your private files and passwords are never transmitted to our servers.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-pdf-dark/70 leading-relaxed">No massive uploads or downloads. Processing is completely instant, saving you vast amounts of time.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6"><Lock /></div>
            <h3 className="text-xl font-bold mb-3">Secure Flow</h3>
            <p className="text-pdf-dark/70 leading-relaxed">We provide a perfectly secure structure to manage your password assignments locally without any tracking or analytics.</p>
          </div>
        </section>

        <ProtectPdfSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/password-protect" />
      </main>

      
    </div>
  );
}
