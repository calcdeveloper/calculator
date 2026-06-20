'use client';

import React, { useState, useRef } from 'react';
import { Upload, Copy, CheckCircle2, Image as ImageIcon, FileCode, RefreshCw } from 'lucide-react';

export default function ImageToBase64Client() {
  const [base64, setBase64] = useState('');
  const [copiedDataUri, setCopiedDataUri] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [copiedHtml, setCopiedHtml] = useState(false);
  const [fileName, setFileName] = useState('');
  const [fileSize, setFileSize] = useState('');
  
  const fileInputRef = useRef(null);

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file.');
      return;
    }

    setFileName(file.name);
    setFileSize(formatSize(file.size));

    const reader = new FileReader();
    reader.onload = (event) => {
      setBase64(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        fileInputRef.current.files = e.dataTransfer.files;
        // manually trigger the change logic
        setFileName(file.name);
        setFileSize(formatSize(file.size));

        const reader = new FileReader();
        reader.onload = (event) => {
          setBase64(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert('Please drop a valid image file.');
      }
    }
  };

  const handleCopy = (text, type) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    
    if (type === 'datauri') {
      setCopiedDataUri(true);
      setTimeout(() => setCopiedDataUri(false), 2000);
    } else if (type === 'css') {
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 2000);
    } else if (type === 'html') {
      setCopiedHtml(true);
      setTimeout(() => setCopiedHtml(false), 2000);
    }
  };

  const handleClear = () => {
    setBase64('');
    setFileName('');
    setFileSize('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const cssFormat = `background-image: url('${base64}');`;
  const htmlFormat = `<img src="${base64}" alt="${fileName || 'image'}" />`;

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <ImageIcon className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Image to Base64 Encoder</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-conv-gray hover:text-conv-dark bg-white border border-conv-gray/30 rounded-lg hover:bg-conv-gray/5 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} /> Clear
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-conv-gray/20">
        
        {/* Input / Dropzone */}
        <div className="flex flex-col p-6 items-center justify-center min-h-[400px]">
          {!base64 ? (
            <div 
              className="w-full h-full border-2 border-dashed border-conv-primary/30 rounded-xl bg-conv-primary/5 flex flex-col items-center justify-center cursor-pointer hover:bg-conv-primary/10 transition-colors"
              onClick={triggerFileInput}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                accept="image/*" 
                className="hidden" 
              />
              <Upload className="w-12 h-12 text-conv-primary mb-4" />
              <p className="font-bold text-conv-dark mb-1">Click or drag image here</p>
              <p className="text-sm text-conv-gray">Supports PNG, JPG, SVG, WEBP, GIF</p>
            </div>
          ) : (
            <div className="w-full flex flex-col items-center justify-center space-y-6">
              <div className="relative w-full max-w-[250px] aspect-square rounded-xl overflow-hidden border border-conv-gray/20 shadow-sm bg-conv-gray/5 flex items-center justify-center p-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={base64} alt="Preview" className="max-w-full max-h-full object-contain" />
              </div>
              <div className="text-center">
                <p className="font-bold text-conv-dark truncate max-w-xs mx-auto">{fileName}</p>
                <p className="text-sm text-conv-gray">{fileSize}</p>
              </div>
              <button
                onClick={triggerFileInput}
                className="px-4 py-2 text-sm font-medium text-conv-primary hover:text-conv-white border border-conv-primary hover:bg-conv-primary rounded-lg transition-colors"
              >
                Choose Different Image
              </button>
            </div>
          )}
        </div>

        {/* Output Area */}
        <div className="flex flex-col h-[500px] bg-conv-gray/5">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <FileCode size={14} /> Output Formats
            </span>
          </div>
          
          <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
            
            {/* Raw Data URI */}
            <div className="bg-white rounded-xl border border-conv-gray/20 shadow-sm flex flex-col overflow-hidden">
              <div className="px-4 py-2 border-b border-conv-gray/10 flex justify-between items-center bg-gray-50">
                <span className="text-xs font-bold text-conv-gray uppercase">Data URI</span>
                <button
                  onClick={() => handleCopy(base64, 'datauri')}
                  disabled={!base64}
                  className={`text-xs font-bold px-3 py-1 rounded-md transition-colors ${!base64 ? 'text-conv-gray opacity-50 cursor-not-allowed' : copiedDataUri ? 'bg-green-100 text-green-700' : 'bg-conv-gray/10 text-conv-dark hover:bg-conv-gray/20'}`}
                >
                  {copiedDataUri ? 'COPIED!' : 'COPY'}
                </button>
              </div>
              <textarea 
                value={base64}
                readOnly
                placeholder="data:image/png;base64,..."
                className="w-full h-24 p-4 text-xs font-mono resize-none focus:outline-none text-conv-dark"
              />
            </div>

            {/* HTML Image Tag */}
            <div className="bg-white rounded-xl border border-conv-gray/20 shadow-sm flex flex-col overflow-hidden">
              <div className="px-4 py-2 border-b border-conv-gray/10 flex justify-between items-center bg-gray-50">
                <span className="text-xs font-bold text-conv-gray uppercase">HTML Tag</span>
                <button
                  onClick={() => handleCopy(htmlFormat, 'html')}
                  disabled={!base64}
                  className={`text-xs font-bold px-3 py-1 rounded-md transition-colors ${!base64 ? 'text-conv-gray opacity-50 cursor-not-allowed' : copiedHtml ? 'bg-green-100 text-green-700' : 'bg-conv-gray/10 text-conv-dark hover:bg-conv-gray/20'}`}
                >
                  {copiedHtml ? 'COPIED!' : 'COPY'}
                </button>
              </div>
              <textarea 
                value={base64 ? htmlFormat : ''}
                readOnly
                placeholder='<img src="..." />'
                className="w-full h-24 p-4 text-xs font-mono resize-none focus:outline-none text-conv-dark"
              />
            </div>

            {/* CSS Background */}
            <div className="bg-white rounded-xl border border-conv-gray/20 shadow-sm flex flex-col overflow-hidden">
              <div className="px-4 py-2 border-b border-conv-gray/10 flex justify-between items-center bg-gray-50">
                <span className="text-xs font-bold text-conv-gray uppercase">CSS Background</span>
                <button
                  onClick={() => handleCopy(cssFormat, 'css')}
                  disabled={!base64}
                  className={`text-xs font-bold px-3 py-1 rounded-md transition-colors ${!base64 ? 'text-conv-gray opacity-50 cursor-not-allowed' : copiedCss ? 'bg-green-100 text-green-700' : 'bg-conv-gray/10 text-conv-dark hover:bg-conv-gray/20'}`}
                >
                  {copiedCss ? 'COPIED!' : 'COPY'}
                </button>
              </div>
              <textarea 
                value={base64 ? cssFormat : ''}
                readOnly
                placeholder="background-image: url('...');"
                className="w-full h-24 p-4 text-xs font-mono resize-none focus:outline-none text-conv-dark"
              />
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
