'use client';

import React, { useState } from 'react';
import { Download, AlertCircle, FileArchive, FileCode, RefreshCw } from 'lucide-react';

// Common MIME types to extensions mapping
const mimeToExt = {
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/gif': 'gif',
  'image/webp': 'webp',
  'image/svg+xml': 'svg',
  'application/pdf': 'pdf',
  'application/zip': 'zip',
  'application/json': 'json',
  'text/plain': 'txt',
  'text/html': 'html',
  'text/csv': 'csv',
  'audio/mpeg': 'mp3',
  'video/mp4': 'mp4'
};

export default function Base64ToFileClient() {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const [fileInfo, setFileInfo] = useState(null);

  const handleConvert = () => {
    if (!input.trim()) {
      setError('Please paste a Base64 string.');
      setFileInfo(null);
      return;
    }

    try {
      let base64Data = input.trim();
      let mimeType = 'application/octet-stream';
      let extension = 'bin';

      // Check if it has a Data URI header
      if (base64Data.startsWith('data:')) {
        const matches = base64Data.match(/^data:([a-zA-Z0-9-+/]+);base64,(.+)$/);
        if (matches && matches.length === 3) {
          mimeType = matches[1];
          base64Data = matches[2];
          
          if (mimeToExt[mimeType]) {
            extension = mimeToExt[mimeType];
          } else {
            // Try to guess from mime subtype (e.g., application/msword -> msword, image/bmp -> bmp)
            const parts = mimeType.split('/');
            if (parts.length === 2) {
              extension = parts[1].replace(/x-/g, '').replace(/\+xml/g, ''); // basic cleanup
            }
          }
        } else {
          throw new Error('Invalid Data URI format.');
        }
      }

      // Ensure the string is purely base64
      base64Data = base64Data.replace(/\s/g, ''); // remove whitespaces

      // Convert base64 to raw binary data held in a string
      const byteCharacters = atob(base64Data);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);

      // Create a Blob
      const blob = new Blob([byteArray], { type: mimeType });

      // Generate a download link
      const url = URL.createObjectURL(blob);
      const fileName = `decoded_file.${extension}`;

      // Update file info state for UI
      setFileInfo({
        name: fileName,
        size: formatSize(blob.size),
        type: mimeType
      });

      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      
      setError('');
    } catch (err) {
      setError(err.message || 'Invalid Base64 string. Please ensure it is correctly formatted.');
      setFileInfo(null);
    }
  };

  const formatSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleClear = () => {
    setInput('');
    setError('');
    setFileInfo(null);
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <FileArchive className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Base64 to File Decoder</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-conv-gray hover:text-conv-dark bg-white border border-conv-gray/30 rounded-lg hover:bg-conv-gray/5 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} /> Clear
          </button>
          <button
            onClick={handleConvert}
            className="px-6 py-2 text-sm font-bold text-white bg-conv-primary hover:bg-conv-primaryDark rounded-lg transition-colors flex items-center gap-2 shadow-sm"
          >
            <Download size={16} /> Download File
          </button>
        </div>
      </div>

      {error && (
        <div className="p-4 bg-red-50 border-b border-red-100 flex items-start gap-3 text-red-700">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <div className="text-sm font-medium">{error}</div>
        </div>
      )}

      {/* Editor Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-conv-gray/20">
        
        {/* Input Base64 */}
        <div className="flex flex-col h-[400px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <FileCode size={14} /> Input: Base64 String
            </span>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Paste your Base64 string here (with or without data:image/png;base64,... header)"
            className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-transparent text-conv-dark break-all"
            spellCheck="false"
          />
        </div>

        {/* Output Info */}
        <div className="flex flex-col h-[400px] bg-conv-gray/5">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between shrink-0">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <FileArchive size={14} /> Output: Decoded File
            </span>
          </div>
          
          <div className="flex-1 p-6 flex flex-col items-center justify-center text-center">
            {fileInfo ? (
              <div className="space-y-4">
                <div className="w-20 h-20 mx-auto bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-conv-dark mb-1">File Decoded Successfully</h3>
                  <p className="text-conv-gray mb-4">Your download should have started automatically.</p>
                  
                  <div className="bg-white border border-conv-gray/20 rounded-xl p-4 inline-block text-left shadow-sm">
                    <p className="text-sm"><span className="font-bold text-conv-dark">Filename:</span> <span className="text-conv-gray">{fileInfo.name}</span></p>
                    <p className="text-sm mt-1"><span className="font-bold text-conv-dark">Size:</span> <span className="text-conv-gray">{fileInfo.size}</span></p>
                    <p className="text-sm mt-1"><span className="font-bold text-conv-dark">MIME Type:</span> <span className="text-conv-gray">{fileInfo.type}</span></p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-xs mx-auto text-conv-gray/70">
                <Download className="w-16 h-16 mx-auto mb-4 opacity-30" />
                <p className="text-sm">Paste your Base64 string on the left and click <strong>Download File</strong>. The converter will automatically detect the MIME type and save the original file to your device.</p>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
