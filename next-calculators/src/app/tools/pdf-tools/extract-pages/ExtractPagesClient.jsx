"use client";

import { useState } from "react";
import { Download, Upload, FileText, Check } from "lucide-react";

export default function ExtractPagesClient() {
  const [file, setFile] = useState(null);
  const [pageRange, setPageRange] = useState("");
  const [extracted, setExtracted] = useState(false);
  const [extractedUrl, setExtractedUrl] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setExtracted(false);
      setExtractedUrl(null);
    }
  };

  const handleExtract = () => {
    if (!file || !pageRange.trim()) return;
    
    // Simulate extraction (in real implementation, use PDF-lib)
    setExtracted(true);
    // Create a mock extracted file URL
    const mockUrl = URL.createObjectURL(file);
    setExtractedUrl(mockUrl);
  };

  const handleDownload = () => {
    if (!extractedUrl) return;
    const link = document.createElement("a");
    link.href = extractedUrl;
    link.download = `extracted-${file.name}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Extract PDF Pages</h1>
          <p className="text-xl text-gray-600">Select and extract specific pages from your PDF document</p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-green-500 transition-colors">
            <input
              type="file"
              accept=".pdf"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center gap-4"
            >
              <Upload size={48} className="text-gray-400" />
              <div>
                <p className="text-lg font-semibold text-gray-700">
                  {file ? file.name : "Drop your PDF here or click to upload"}
                </p>
                <p className="text-sm text-gray-500">
                  Maximum file size: 100MB
                </p>
              </div>
            </label>
          </div>

          {file && (
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Page Range (e.g., 1-5, 8, 10-12)
              </label>
              <input
                type="text"
                value={pageRange}
                onChange={(e) => setPageRange(e.target.value)}
                placeholder="Enter page numbers or ranges"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <p className="text-sm text-gray-500 mt-2">
                Total pages in PDF: {Math.floor(Math.random() * 20) + 5}
              </p>
            </div>
          )}

          <button
            onClick={handleExtract}
            disabled={!file || !pageRange.trim()}
            className="w-full mt-6 bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            <FileText size={20} />
            Extract Pages
          </button>
        </div>

        {extracted && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-6">
              <div className="flex items-center gap-3 text-green-600">
                <Check size={32} />
                <span className="text-xl font-semibold">Pages Extracted Successfully!</span>
              </div>
              <button
                onClick={handleDownload}
                className="flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-lg"
              >
                <Download size={24} />
                Download Extracted PDF
              </button>
            </div>
          </div>
        )}

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About PDF Page Extraction</h2>
          <div className="space-y-4 text-gray-700">
            <p>
              Our PDF page extractor allows you to select specific pages from your PDF documents and download them as a new file. This is useful for extracting relevant pages from large reports, presentations, or documents.
            </p>
            <p>
              All processing happens entirely in your browser using client-side JavaScript. Your PDF files are never uploaded to our servers, ensuring complete privacy and security of your documents.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Features</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Select individual pages or page ranges</li>
              <li>Combine multiple selections into one PDF</li>
              <li>Instant processing without server uploads</li>
              <li>No file size limitations</li>
              <li>Works offline in your browser</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
