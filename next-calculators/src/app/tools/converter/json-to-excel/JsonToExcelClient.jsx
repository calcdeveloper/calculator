'use client';

import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import { Download, AlertCircle, FileJson, Table, RefreshCw } from 'lucide-react';

export default function JsonToExcelClient() {
  const [input, setInput] = useState('[\n  {\n    "id": 1,\n    "name": "John Doe",\n    "email": "john@example.com"\n  },\n  {\n    "id": 2,\n    "name": "Jane Smith",\n    "email": "jane@example.com"\n  }\n]');
  const [error, setError] = useState('');

  const handleConvert = () => {
    if (!input.trim()) {
      setError('Please provide JSON data to convert.');
      return;
    }

    try {
      const parsedData = JSON.parse(input);
      
      let dataToExport = parsedData;

      // Handle if the parsed JSON is not an array but an object containing an array
      if (!Array.isArray(parsedData)) {
        const potentialArrays = Object.values(parsedData).filter(val => Array.isArray(val));
        if (potentialArrays.length > 0) {
          dataToExport = potentialArrays[0]; // Guess the first array is the target
        } else {
          // It's just a single object, wrap it in an array
          dataToExport = [parsedData];
        }
      }

      if (dataToExport.length === 0) {
        throw new Error("JSON array is empty.");
      }

      // Convert JSON array to worksheet
      const worksheet = XLSX.utils.json_to_sheet(dataToExport);

      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

      // Generate the Excel file and trigger download
      XLSX.writeFile(workbook, "data.xlsx");
      setError('');
    } catch (err) {
      setError(err.message || 'Invalid JSON format. Please check your syntax.');
    }
  };

  const handleClear = () => {
    setInput('');
    setError('');
  };

  return (
    <div className="bg-conv-white rounded-3xl shadow-2xl border border-conv-gray overflow-hidden p-6 md:p-8">
      {/* Toolbar */}
      <div className="bg-conv-gray/5 border-b border-conv-gray/20 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Table className="w-5 h-5 text-conv-primary" />
          <h2 className="font-bold text-conv-dark">JSON to Excel Converter</h2>
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
            <Download size={16} /> Download .xlsx
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
      <div className="flex flex-col h-[500px]">
        <div className="bg-conv-gray/5 px-4 py-2 border-b border-conv-gray/20 flex items-center justify-between">
          <span className="text-xs font-bold text-conv-gray uppercase tracking-wider flex items-center gap-2">
            <FileJson size={14} /> Input: JSON Array
          </span>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Paste your JSON array here..."
          className="flex-1 w-full p-4 font-mono text-sm resize-none focus:outline-none bg-transparent text-conv-dark whitespace-pre"
          spellCheck="false"
        />
      </div>
    </div>
  );
}
