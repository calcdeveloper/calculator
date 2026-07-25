"use client";

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Upload, Download, Crop, RefreshCw, ChevronRight, AlertCircle, Image as ImageIcon, Target, ShieldCheck } from 'lucide-react';
import ImageCropperSeo from '@/components/tools/ImageCropperSeo';
import RelatedImagePdfTools from '@/components/tools/RelatedImagePdfTools';

export default function ImageCropperClient() {
  const [file, setFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageObj, setImageObj] = useState(null);
  
  const [isDragging, setIsDragging] = useState(false);
  const [dragMode, setDragMode] = useState(null); // 'new', 'move', 'nw', 'ne', 'sw', 'se', 'n', 's', 'e', 'w'
  const [cropBox, setCropBox] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [startPos, setStartPos] = useState({ x: 0, y: 0 });
  const [displayScale, setDisplayScale] = useState(1);
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [croppedUrl, setCroppedUrl] = useState(null);
  const [error, setError] = useState(null);
  
  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected && selected.type.startsWith('image/')) {
      processUpload(selected);
    } else if (selected) {
      setError("Please select a valid image file (JPG, PNG, WebP).");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const dropped = e.dataTransfer.files?.[0];
    if (dropped && dropped.type.startsWith('image/')) {
      processUpload(dropped);
    } else if (dropped) {
      setError("Please drop a valid image file (JPG, PNG, WebP).");
    }
  };

  const handleDragOver = (e) => e.preventDefault();

  const processUpload = (fileObj) => {
    setFile(fileObj);
    setError(null);
    setCroppedUrl(null);
    setCropBox({ x: 0, y: 0, width: 0, height: 0 });
    
    const url = URL.createObjectURL(fileObj);
    setImageUrl(url);
    
    const img = new window.Image();
    img.onload = () => {
      setImageObj(img);
    };
    img.src = url;
  };

  // Draw the image and the crop overlay
  useEffect(() => {
    if (!imageObj || !canvasRef.current || !containerRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const container = containerRef.current;
    
    // Calculate scaling to fit container
    const maxWidth = container.clientWidth - 32; // padding
    const maxHeight = 500;
    
    let scale = 1;
    if (imageObj.width > maxWidth || imageObj.height > maxHeight) {
      scale = Math.min(maxWidth / imageObj.width, maxHeight / imageObj.height);
    }
    setDisplayScale(scale);
    
    const displayWidth = imageObj.width * scale;
    const displayHeight = imageObj.height * scale;
    
    canvas.width = displayWidth;
    canvas.height = displayHeight;
    
    // Draw base image
    ctx.drawImage(imageObj, 0, 0, displayWidth, displayHeight);
    
    // Draw dim overlay if a crop box exists or is being drawn
    if (cropBox.width !== 0 || cropBox.height !== 0) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, displayWidth, displayHeight);
      
      // Normalize box for drawing
      let cx = cropBox.x;
      let cy = cropBox.y;
      let cw = cropBox.width;
      let ch = cropBox.height;

      if (cw < 0) { cx += cw; cw = Math.abs(cw); }
      if (ch < 0) { cy += ch; ch = Math.abs(ch); }
      
      ctx.clearRect(cx, cy, cw, ch);
      
      // Draw actual image in the cleared area to make it bright
      ctx.drawImage(
        imageObj, 
        cx / scale, cy / scale, cw / scale, ch / scale, 
        cx, cy, cw, ch
      );
      
      // Draw a border
      ctx.strokeStyle = '#ef4444'; // Red border
      ctx.lineWidth = 2;
      ctx.strokeRect(cx, cy, cw, ch);
      
      // Draw rule of thirds grid
      ctx.beginPath();
      ctx.moveTo(cx + cw/3, cy); ctx.lineTo(cx + cw/3, cy + ch);
      ctx.moveTo(cx + (cw*2)/3, cy); ctx.lineTo(cx + (cw*2)/3, cy + ch);
      ctx.moveTo(cx, cy + ch/3); ctx.lineTo(cx + cw, cy + ch/3);
      ctx.moveTo(cx, cy + (ch*2)/3); ctx.lineTo(cx + cw, cy + (ch*2)/3);
      ctx.strokeStyle = 'rgba(255,255,255,0.4)';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw handles
      ctx.fillStyle = '#ef4444';
      const h = 8; // handle size
      
      // Corners
      ctx.fillRect(cx - h/2, cy - h/2, h, h); // nw
      ctx.fillRect(cx + cw - h/2, cy - h/2, h, h); // ne
      ctx.fillRect(cx - h/2, cy + ch - h/2, h, h); // sw
      ctx.fillRect(cx + cw - h/2, cy + ch - h/2, h, h); // se
      
      // Edges
      ctx.fillRect(cx + cw/2 - h/2, cy - h/2, h, h); // n
      ctx.fillRect(cx + cw/2 - h/2, cy + ch - h/2, h, h); // s
      ctx.fillRect(cx - h/2, cy + ch/2 - h/2, h, h); // w
      ctx.fillRect(cx + cw - h/2, cy + ch/2 - h/2, h, h); // e
    }
  }, [imageObj, cropBox, displayScale]);

  const getHandleHit = (x, y) => {
    if (cropBox.width === 0 || cropBox.height === 0) return null;
    
    let cx = cropBox.x;
    let cy = cropBox.y;
    let cw = cropBox.width;
    let ch = cropBox.height;

    if (cw < 0) { cx += cw; cw = Math.abs(cw); }
    if (ch < 0) { cy += ch; ch = Math.abs(ch); }

    const h = 12; // Hitbox tolerance slightly larger than visual handle

    // Corners
    if (Math.abs(x - cx) < h && Math.abs(y - cy) < h) return 'nw';
    if (Math.abs(x - (cx + cw)) < h && Math.abs(y - cy) < h) return 'ne';
    if (Math.abs(x - (cx + cw)) < h && Math.abs(y - (cy + ch)) < h) return 'se';
    if (Math.abs(x - cx) < h && Math.abs(y - (cy + ch)) < h) return 'sw';

    // Edges
    if (Math.abs(y - cy) < h && x > cx && x < cx + cw) return 'n';
    if (Math.abs(y - (cy + ch)) < h && x > cx && x < cx + cw) return 's';
    if (Math.abs(x - cx) < h && y > cy && y < cy + ch) return 'w';
    if (Math.abs(x - (cx + cw)) < h && y > cy && y < cy + ch) return 'e';

    // Inside (move)
    if (x > cx && x < cx + cw && y > cy && y < cy + ch) return 'move';

    return null;
  };

  const handleHover = (e) => {
    if (isDragging || !canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const hit = getHandleHit(x, y);
    
    if (hit === 'nw' || hit === 'se') canvasRef.current.style.cursor = 'nwse-resize';
    else if (hit === 'ne' || hit === 'sw') canvasRef.current.style.cursor = 'nesw-resize';
    else if (hit === 'n' || hit === 's') canvasRef.current.style.cursor = 'ns-resize';
    else if (hit === 'e' || hit === 'w') canvasRef.current.style.cursor = 'ew-resize';
    else if (hit === 'move') canvasRef.current.style.cursor = 'move';
    else canvasRef.current.style.cursor = 'crosshair';
  };

  const handleMouseDown = (e) => {
    if (!canvasRef.current) return;
    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const hit = getHandleHit(x, y);
    setStartPos({ x, y });
    
    // Normalize the box so width and height are positive to make resizing math simpler
    let nb = { ...cropBox };
    if (nb.width < 0) { nb.x += nb.width; nb.width = Math.abs(nb.width); }
    if (nb.height < 0) { nb.y += nb.height; nb.height = Math.abs(nb.height); }
    setCropBox(nb);
    
    if (hit) {
      setDragMode(hit);
    } else {
      setDragMode('new');
      setCropBox({ x, y, width: 0, height: 0 });
    }
    
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    handleHover(e);
    if (!isDragging || !canvasRef.current) return;
    
    const rect = canvasRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;
    
    // Constrain mouse coordinates to canvas
    x = Math.max(0, Math.min(x, canvasRef.current.width));
    y = Math.max(0, Math.min(y, canvasRef.current.height));
    
    const dx = x - startPos.x;
    const dy = y - startPos.y;
    
    let nb = { ...cropBox };

    if (dragMode === 'new') {
      nb.width = x - nb.x;
      nb.height = y - nb.y;
    } else if (dragMode === 'move') {
      nb.x += dx;
      nb.y += dy;
      
      // Boundary checks
      if (nb.x < 0) nb.x = 0;
      if (nb.y < 0) nb.y = 0;
      if (nb.x + nb.width > canvasRef.current.width) nb.x = canvasRef.current.width - nb.width;
      if (nb.y + nb.height > canvasRef.current.height) nb.y = canvasRef.current.height - nb.height;
      
      setStartPos({ x, y });
    } else {
      // Resizing from handles
      if (dragMode.includes('w')) {
        const maxX = nb.x + nb.width; // Right edge stays fixed
        let newX = nb.x + dx;
        if (newX > maxX - 10) newX = maxX - 10; // Minimum width of 10
        if (newX < 0) newX = 0;
        nb.width = maxX - newX;
        nb.x = newX;
        setStartPos({ x, y: startPos.y });
      }
      if (dragMode.includes('e')) {
        let newWidth = nb.width + dx;
        if (newWidth < 10) newWidth = 10;
        if (nb.x + newWidth > canvasRef.current.width) newWidth = canvasRef.current.width - nb.x;
        nb.width = newWidth;
        setStartPos({ x, y: startPos.y });
      }
      if (dragMode.includes('n')) {
        const maxY = nb.y + nb.height; // Bottom edge stays fixed
        let newY = nb.y + dy;
        if (newY > maxY - 10) newY = maxY - 10; // Minimum height of 10
        if (newY < 0) newY = 0;
        nb.height = maxY - newY;
        nb.y = newY;
        setStartPos({ x: startPos.x, y });
      }
      if (dragMode.includes('s')) {
        let newHeight = nb.height + dy;
        if (newHeight < 10) newHeight = 10;
        if (nb.y + newHeight > canvasRef.current.height) newHeight = canvasRef.current.height - nb.y;
        nb.height = newHeight;
        setStartPos({ x: startPos.x, y });
      }
    }
    setCropBox(nb);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      // Normalize after drag ends to ensure positive width/height
      let nb = { ...cropBox };
      if (nb.width < 0) { nb.x += nb.width; nb.width = Math.abs(nb.width); }
      if (nb.height < 0) { nb.y += nb.height; nb.height = Math.abs(nb.height); }
      setCropBox(nb);
    }
    setIsDragging(false);
    setDragMode(null);
  };

  const handleCropExecute = () => {
    if (!imageObj || cropBox.width === 0 || cropBox.height === 0) {
      setError("Please draw a crop area on the image first.");
      return;
    }
    
    setIsProcessing(true);
    setError(null);
    
    try {
      const cx = cropBox.x;
      const cy = cropBox.y;
      const cw = cropBox.width;
      const ch = cropBox.height;
      
      // Map back to original image scale
      const sourceX = cx / displayScale;
      const sourceY = cy / displayScale;
      const sourceW = cw / displayScale;
      const sourceH = ch / displayScale;
      
      if (sourceW < 5 || sourceH < 5) {
        throw new Error("Crop area is too small.");
      }

      const offCanvas = document.createElement('canvas');
      offCanvas.width = sourceW;
      offCanvas.height = sourceH;
      const offCtx = offCanvas.getContext('2d');
      
      offCtx.drawImage(
        imageObj,
        sourceX, sourceY, sourceW, sourceH,
        0, 0, sourceW, sourceH
      );
      
      const mimeType = file.type === 'image/png' ? 'image/png' : 'image/jpeg';
      const quality = mimeType === 'image/jpeg' ? 1.0 : undefined;
      
      offCanvas.toBlob((blob) => {
        if (!blob) throw new Error("Failed to process image blob.");
        const url = URL.createObjectURL(blob);
        setCroppedUrl(url);
        setIsProcessing(false);
      }, mimeType, quality);
      
    } catch (err) {
      setError(err.message || "Failed to crop image.");
      setIsProcessing(false);
    }
  };

  const triggerFileInput = () => fileInputRef.current.click();

  const reset = () => {
    setFile(null);
    setImageUrl(null);
    setImageObj(null);
    setCroppedUrl(null);
    setError(null);
    setCropBox({ x: 0, y: 0, width: 0, height: 0 });
  };

  const handleDownload = () => {
    if (!croppedUrl) return;
    const link = document.createElement("a");
    link.href = croppedUrl;
    const extension = file.name.split('.').pop();
    const nameWithoutExt = file.name.substring(0, file.name.lastIndexOf('.'));
    link.download = `${nameWithoutExt}_cropped.${extension}`;
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
            <span className="text-pdf-white font-medium">Image Cropper</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-extrabold text-pdf-white mb-6 tracking-tight">
            Image Cropper
          </h1>
          <p className="text-xl text-pdf-white/90 max-w-2xl mx-auto leading-relaxed">
            Slice and frame photographs with absolute pixel-level control. 100% private, browser-based processing.
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
                <h2 className="text-2xl font-bold mb-2 text-pdf-dark text-center">Click or Drag Image Here</h2>
                <p className="text-pdf-gray mb-8 text-center">No file size limit. Your data never leaves your browser space context.</p>
                <button className="bg-pdf-primary hover:bg-pdf-primaryDark text-pdf-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg shadow-pdf-primary/20">
                  Choose File
                </button>
                <p className="text-sm text-pdf-gray/60 mt-6 font-medium text-center">Supports JPG, PNG, WebP</p>
              </div>
            ) : (
              // Editor State
              <>
                <div className="lg:w-2/3 flex flex-col bg-pdf-bg/30 rounded-2xl p-6 border border-pdf-gray relative">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-pdf-dark flex items-center gap-2">
                      <Crop size={20} className="text-pdf-primary" /> Interactive Workspace
                    </h3>
                    <button onClick={reset} className="text-sm px-3 py-1.5 bg-pdf-white border border-pdf-gray rounded-lg hover:bg-pdf-gray/10 font-medium transition-colors flex items-center gap-2">
                      <RefreshCw size={14} /> Change Image
                    </button>
                  </div>
                  
                  {!croppedUrl ? (
                    <div 
                      ref={containerRef} 
                      className="flex-grow flex items-center justify-center bg-pdf-gray/10 rounded-xl overflow-hidden border border-pdf-gray relative cursor-crosshair select-none touch-none min-h-[400px]"
                    >
                      <p className="absolute top-4 bg-pdf-dark/70 text-pdf-white text-xs font-bold px-3 py-1 rounded-full pointer-events-none z-10 shadow-sm backdrop-blur-sm">
                        Draw, Move, or Drag Edges to Crop
                      </p>
                      {imageObj && (
                        <canvas 
                          ref={canvasRef}
                          onMouseDown={handleMouseDown}
                          onMouseMove={handleMouseMove}
                          onMouseUp={handleMouseUp}
                          onMouseLeave={handleMouseUp}
                          className="shadow-md rounded touch-none"
                        />
                      )}
                    </div>
                  ) : (
                    <div className="flex-grow flex items-center justify-center bg-transparent rounded-xl p-4 min-h-[400px]">
                      <img 
                        src={croppedUrl} 
                        alt="Cropped Final" 
                        className="max-w-full max-h-[500px] object-contain shadow-2xl rounded-xl ring-4 ring-emerald-500/20"
                      />
                    </div>
                  )}
                </div>

                <div className="lg:w-1/3 flex flex-col gap-6">
                  {!croppedUrl ? (
                    <div className="bg-pdf-white border border-pdf-gray p-6 rounded-2xl shadow-sm flex flex-col h-full justify-center">
                      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-inner mx-auto">
                        <Crop size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-pdf-dark text-center mb-2">Ready to Slice?</h3>
                      <p className="text-pdf-gray text-center mb-8">Draw a rectangle over the image to select the area you wish to keep.</p>
                      
                      <button 
                        onClick={handleCropExecute}
                        disabled={isProcessing || cropBox.width === 0}
                        className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-pdf-primary hover:bg-pdf-primaryDark disabled:bg-pdf-gray text-pdf-white font-bold rounded-xl transition-all shadow-lg shadow-pdf-primary/20 text-lg"
                      >
                        {isProcessing ? (
                          <><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Extracting...</>
                        ) : (
                          <><Crop size={22} /> Execute Crop</>
                        )}
                      </button>
                    </div>
                  ) : (
                    <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl shadow-sm flex flex-col items-center text-center justify-center h-full">
                      <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6 shadow-inner">
                        <Download size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-emerald-800 mb-2">Image Cropped!</h3>
                      <p className="text-emerald-700/80 mb-8">
                        The visual artifacts have been stripped. Your composition is perfect.
                      </p>
                      
                      <div className="flex flex-col gap-4 w-full">
                        <button 
                          onClick={handleDownload}
                          className="w-full flex justify-center items-center gap-2 px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-emerald-500/30 text-lg"
                        >
                          <Download size={22} /> Download Image
                        </button>
                         <button 
                          onClick={() => setCroppedUrl(null)}
                          className="w-full px-6 py-3 bg-white border border-emerald-200 hover:bg-emerald-100 text-emerald-700 font-bold rounded-xl transition-colors shadow-sm"
                        >
                          Crop Again
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
            accept="image/jpeg, image/png, image/webp" 
            className="hidden" 
          />
        </div>

        {/* Core Value Proposition Matrix Block */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 mb-20">
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Zero-Trust Security</h3>
            <p className="text-pdf-gray leading-relaxed">Processing happens 100% inside your local browser memory space. We never see your files, and they are never uploaded to a cloud server storage matrix.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCw size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Instant Excision</h3>
            <p className="text-pdf-gray leading-relaxed">Slice away unwanted pixels instantly using hardware-accelerated HTML5 Canvas rendering without suffering latency or bandwidth bottlenecks.</p>
          </div>
          <div className="bg-pdf-white p-8 rounded-3xl border border-pdf-gray shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-pdf-primary/10 text-pdf-primary rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Lossless Extraction</h3>
            <p className="text-pdf-gray leading-relaxed">Our cropping engine is mathematically precise, preserving the exact color gamut and original pixels inside the selection box without degradation.</p>
          </div>
        </section>

        <ImageCropperSeo />
        <RelatedImagePdfTools currentToolPath="/tools/pdf-tools/image-cropper" />
      </main>

      
    </div>
  );
}
