'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRightLeft, Copy, CheckCircle2, Clock, Calendar, RefreshCw } from 'lucide-react';

export default function TimestampToDateClient() {
  const [timestamp, setTimestamp] = useState(Math.floor(Date.now() / 1000).toString());
  const [dateStr, setDateStr] = useState('');
  const [utcStr, setUtcStr] = useState('');
  const [isoStr, setIsoStr] = useState('');
  const [copied, setCopied] = useState('');
  const [error, setError] = useState('');

  // Convert timestamp to date
  useEffect(() => {
    if (!timestamp.trim()) {
      setDateStr('');
      setUtcStr('');
      setIsoStr('');
      setError('');
      return;
    }

    if (!/^\d+$/.test(timestamp.trim())) {
      setError('Please enter a valid numeric timestamp.');
      setDateStr('');
      setUtcStr('');
      setIsoStr('');
      return;
    }

    try {
      let ts = parseInt(timestamp.trim(), 10);
      
      // Auto-detect seconds vs milliseconds (if it's 10 digits or less, it's likely seconds)
      if (timestamp.trim().length <= 10) {
        ts = ts * 1000;
      }

      const dateObj = new Date(ts);

      if (isNaN(dateObj.getTime())) {
        throw new Error('Invalid Date');
      }

      setDateStr(dateObj.toString());
      setUtcStr(dateObj.toUTCString());
      setIsoStr(dateObj.toISOString());
      setError('');
    } catch (e) {
      setError('Invalid timestamp value.');
      setDateStr('');
      setUtcStr('');
      setIsoStr('');
    }
  }, [timestamp]);

  const handleCopy = (text, type) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleClear = () => {
    setTimestamp('');
    setError('');
  };

  const handleSetNow = () => {
    setTimestamp(Math.floor(Date.now() / 1000).toString());
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">Timestamp to Date Converter</h2>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleClear}
            className="px-4 py-2 text-sm font-medium text-conv-gray hover:text-conv-dark bg-white border border-conv-gray/30 rounded-lg hover:bg-conv-gray/5 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} /> Clear
          </button>
          <button
            onClick={handleSetNow}
            className="px-6 py-2 text-sm font-bold text-white bg-conv-primary hover:bg-conv-primaryDark rounded-lg transition-colors shadow-sm"
          >
            Current Time
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-conv-gray/20">
        
        {/* Input Timestamp */}
        <div className="flex flex-col h-[400px]">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Clock size={14} /> Input: Unix Timestamp
            </span>
          </div>
          <div className="flex-1 p-6 flex flex-col">
            <input
              type="text"
              value={timestamp}
              onChange={(e) => setTimestamp(e.target.value)}
              placeholder="e.g. 1696517280"
              className={`w-full p-4 text-3xl font-mono border-b-2 bg-transparent focus:outline-none transition-colors ${error ? 'border-red-500 text-red-500' : 'border-conv-primary text-conv-dark'}`}
            />
            {error && (
              <div className="mt-2 text-sm font-medium text-red-500">
                {error}
              </div>
            )}
            <div className="mt-8 text-sm text-conv-gray/70 leading-relaxed">
              <p>Enter a Unix Timestamp integer. The converter automatically detects if the input is in <strong>seconds</strong> (10 digits) or <strong>milliseconds</strong> (13 digits) and adjusts the output accordingly.</p>
            </div>
          </div>
        </div>

        {/* Output Dates */}
        <div className="flex flex-col h-[400px] bg-conv-gray/5">
          <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
            <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
              <Calendar size={14} /> Output: Formatted Dates
            </span>
          </div>
          
          <div className="flex-1 p-6 flex flex-col gap-6 overflow-y-auto">
            
            {/* Local Time */}
            <div className="bg-white p-4 rounded-xl border border-conv-gray/20 shadow-sm relative group">
              <div className="text-xs font-bold text-conv-gray uppercase mb-1">Local Time</div>
              <div className="font-mono text-conv-dark">{dateStr || '...'}</div>
              <button
                onClick={() => handleCopy(dateStr, 'local')}
                disabled={!dateStr}
                className="absolute top-4 right-4 text-conv-gray hover:text-conv-primary transition-colors disabled:opacity-0"
              >
                {copied === 'local' ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* UTC Time */}
            <div className="bg-white p-4 rounded-xl border border-conv-gray/20 shadow-sm relative group">
              <div className="text-xs font-bold text-conv-gray uppercase mb-1">UTC Time</div>
              <div className="font-mono text-conv-dark">{utcStr || '...'}</div>
              <button
                onClick={() => handleCopy(utcStr, 'utc')}
                disabled={!utcStr}
                className="absolute top-4 right-4 text-conv-gray hover:text-conv-primary transition-colors disabled:opacity-0"
              >
                {copied === 'utc' ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>

            {/* ISO 8601 */}
            <div className="bg-white p-4 rounded-xl border border-conv-gray/20 shadow-sm relative group">
              <div className="text-xs font-bold text-conv-gray uppercase mb-1">ISO 8601</div>
              <div className="font-mono text-conv-dark">{isoStr || '...'}</div>
              <button
                onClick={() => handleCopy(isoStr, 'iso')}
                disabled={!isoStr}
                className="absolute top-4 right-4 text-conv-gray hover:text-conv-primary transition-colors disabled:opacity-0"
              >
                {copied === 'iso' ? <CheckCircle2 size={16} className="text-green-500" /> : <Copy size={16} />}
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
