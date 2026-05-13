"use client";

import React, { useState, useRef, useCallback } from 'react';
import { PDFDocument } from 'pdf-lib';
import { 
  Upload, FileX, Download, Trash2, RotateCcw, 
  ShieldCheck, Zap, Info, ChevronRight, FileText,
  CheckCircle2, Lock, MousePointerClick
} from 'lucide-react';

export default function DeletePagesClient() {
  const [file, setFile] = useState(null);
  const [pages, setPages] = useState([]); // Array of page indices
  const [selectedPages, setSelectedPages] = useState(new Set());
  const [isProcessing, setIsProcessing] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState(null);
  const fileInputRef = useRef(null);

  // Handle File Upload
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
      
      // Delete pages in reverse order to maintain correct indices
      const sortedToDelete = Array.from(selectedPages).sort((a, b) => b - a);
      sortedToDelete.forEach(index => pdfDoc.removePage(index));

      const pdfBytes = await pdfDoc.save();
      const blob = new Blob([pdfBytes], { type: 'application/pdf' });
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `updated_${file.name}`;
      link.click();
      setIsDone(true);
    } catch (err) {
      setError("Could not process the PDF.");
    } finally {
      setIsProcessing(false);
    }
  };

  const reset = () => {
    setFile(null);
    setPages([]);
    setSelectedPages(new Set());
    setIsDone(false);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-pdf-bg font-sans text-pdf-dark">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pdf-primary to-pdf-primaryDark pt-16 pb-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex justify-center space-x-2 text-pdf-white/70 text-sm mb-6">
            <span>Tools</span> <ChevronRight size={14} /> <span>PDF Tools</span> <ChevronRight size={14} /> <span className="text-pdf-white font-medium">Delete PDF Pages</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Delete PDF Pages Online
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Remove unwanted pages from your PDF documents instantly. 100% private, browser-based processing.
          </p>
        </div>
      </section>

      {/* Main Tool Container */}
      <main className="max-w-5xl mx-auto px-4 -mt-20">
        <div className="bg-pdf-white rounded-3xl shadow-2xl border border-pdf-gray overflow-hidden">
          {!file ? (
            <div 
              className="p-12 md:p-20 flex flex-col items-center justify-center border-4 border-dashed border-pdf-gray m-4 rounded-2xl hover:bg-pdf-bg/50 transition-colors cursor-pointer"
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
              <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser.</p>
              <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                Choose File
              </button>
              <input type="file" ref={fileInputRef} className="hidden" accept=".pdf" onChange={handleUpload} />
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

        {/* Feature Highlights */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gen-primary/10 text-gen-primary rounded-xl flex items-center justify-center mb-6"><ShieldCheck /></div>
            <h3 className="text-xl font-bold mb-3">Privacy Guaranteed</h3>
            <p className="text-pdf-gray leading-relaxed">Processing happens 100% in your browser. We never see your files, and they are never uploaded to any server.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gen-secondary/10 text-gen-secondary rounded-xl flex items-center justify-center mb-6"><Zap /></div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-pdf-gray leading-relaxed">Delete multiple pages from large PDF files in milliseconds using our optimized WebAssembly engine.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-conv-primary/10 text-conv-primary rounded-xl flex items-center justify-center mb-6"><MousePointerClick /></div>
            <h3 className="text-xl font-bold mb-3">Visual Selection</h3>
            <p className="text-pdf-gray leading-relaxed">See page numbers and count instantly. Select exactly what you need to remove with our intuitive grid interface.</p>
          </div>
        </section>

        {/* SEO Article Section */}
        <section className="prose max-w-none bg-pdf-white p-10 md:p-16 rounded-3xl shadow-sm border border-pdf-gray mb-20">
          <h2 className="text-3xl font-bold text-pdf-dark">The Ultimate Way to Remove Pages from PDF</h2>
          <p>
            Managing PDF documents can be a hassle, especially when you have large files containing redundant or confidential information. Whether you're a student trying to prune lecture slides or a professional cleaning up a business proposal, our <strong>Delete PDF Pages</strong> tool is built to handle the job with speed and absolute privacy.
          </p>

          <div className="grid md:grid-cols-2 gap-10 not-prose my-12">
            <div className="bg-pdf-bg p-6 rounded-2xl border border-pdf-gray">
              <h4 className="font-bold text-pdf-primary flex items-center gap-2 mb-4"><CheckCircle2 size={20}/> Why Use a PDF Page Remover?</h4>
              <ul className="space-y-3 text-pdf-gray text-sm">
                <li><strong>Reduce File Size:</strong> Remove heavy image pages to make PDFs easier to email.</li>
                <li><strong>Privacy:</strong> Strip out pages with sensitive data before sharing.</li>
                <li><strong>Professionalism:</strong> Ensure your recipients only see relevant content.</li>
                <li><strong>Organization:</strong> Merged multiple PDFs? Remove the duplicates easily.</li>
              </ul>
            </div>
            <div className="bg-pdf-bg p-6 rounded-2xl border border-pdf-gray">
              <h4 className="font-bold text-pdf-primary flex items-center gap-2 mb-4"><Lock size={20}/> Security First Architecture</h4>
              <p className="text-pdf-gray text-sm leading-relaxed">
                Most online PDF tools upload your file to their cloud servers. This exposes your data to potential breaches. <strong>CalcPilot</strong> uses client-side processing, meaning the "deletion" logic runs inside your RAM, and the file never touches our storage.
              </p>
            </div>
          </div>

          <h3 className="text-2xl font-bold">How to delete pages from PDF in 3 steps:</h3>
          <ol>
            <li><strong>Upload:</strong> Drag your PDF into the tool. It works with scanned PDFs and native documents.</li>
            <li><strong>Select:</strong> Click the thumbnails of the pages you want to get rid of. You'll see a red highlight confirming your choice.</li>
            <li><strong>Download:</strong> Hit the delete button. Your browser will instantly generate the new file for download.</li>
          </ol>

          <h3 className="text-2xl font-bold mt-10">Frequently Asked Questions</h3>
          <div className="not-prose space-y-4 mt-6">
            {[
              { q: "Is it safe to upload my PDF here?", a: "Your PDF is never uploaded. All processing happens locally on your computer using JavaScript. It's the most secure way to edit documents online." },
              { q: "Can I delete multiple pages at once?", a: "Yes! You can click as many pages as you want, and the tool will remove them all in one go." },
              { q: "Does this tool work on mobile?", a: "Absolutely. Our responsive design works perfectly on iPhone, Android, and tablets." },
              { q: "What is the file size limit?", a: "Since we process files in your browser, there is no hard limit on our end. However, files over 200MB may depend on your device's available memory." },
              { q: "Will the quality of my PDF decrease?", a: "No. We don't re-encode the PDF; we simply modify the page tree structure. Your text and images remain exactly as high-quality as the original." },
              { q: "Is this tool really free?", a: "Yes, it is 100% free with no hidden subscriptions or watermarks." }
            ].map((faq, i) => (
              <details key={i} className="group border border-pdf-gray rounded-xl p-4 bg-pdf-white transition-all hover:border-pdf-primary">
                <summary className="font-bold cursor-pointer list-none flex justify-between items-center text-pdf-dark">
                  {faq.q}
                  <span className="group-open:rotate-180 transition-transform text-pdf-gray">▼</span>
                </summary>
                <p className="mt-3 text-pdf-gray text-sm leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-pdf-primary rounded-[3rem] p-10 md:p-20 text-center text-pdf-white mb-20 shadow-2xl shadow-pdf-primary/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-60 h-60 bg-pdf-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-60 h-60 bg-pdf-white rounded-full blur-3xl"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">Need to merge or split instead?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-pdf-white text-pdf-primary px-8 py-4 rounded-2xl font-black hover:bg-pdf-bg transition-colors shadow-lg">Merge PDF</button>
            <button className="bg-pdf-secondary text-pdf-white border-2 border-pdf-secondary/80 px-8 py-4 rounded-2xl font-black hover:bg-pdf-secondary/80 transition-colors">Split PDF</button>
          </div>
        </section>
      </main>

      <footer className="bg-pdf-dark text-pdf-gray py-12 px-4 text-center">
        <p className="text-sm">© 2026 CalcPilot - The Private PDF Toolkit. No data collection, ever.</p>
      </footer>
    </div>
  );
}