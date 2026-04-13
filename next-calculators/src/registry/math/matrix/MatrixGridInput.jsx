"use client";
import React, { useState, useEffect } from 'react';

export default function MatrixGridInput({ label, value, onChange }) {
  // Parse the incoming JSON string, or default to a 3x3 matrix of zeros
  const [matrix, setMatrix] = useState(() => {
    try {
      return JSON.parse(value || "[[0,0,0],[0,0,0],[0,0,0]]");
    } catch {
      return [[0,0,0],[0,0,0],[0,0,0]];
    }
  });

  const rows = matrix.length;
  const cols = matrix[0]?.length || 1;

  // Handle resizing the matrix
  const handleSizeChange = (newRows, newCols) => {
    const validRows = Math.max(1, Math.min(5, newRows)); // Max 5x5
    const validCols = Math.max(1, Math.min(5, newCols));

    const newMatrix = Array(validRows).fill(0).map((_, r) => 
      Array(validCols).fill(0).map((_, c) => matrix[r]?.[c] || 0)
    );
    setMatrix(newMatrix);
    onChange(JSON.stringify(newMatrix));
  };

  // Handle typing numbers into the grid
  const handleCellChange = (r, c, val) => {
    // Allow typing negatives and decimals freely, parse on blur or calculate
    const newMatrix = [...matrix];
    newMatrix[r] = [...newMatrix[r]];
    newMatrix[r][c] = val; 
    setMatrix(newMatrix);
    onChange(JSON.stringify(newMatrix));
  };

  // Quick action buttons
  const fillMatrix = (val) => {
    const newMatrix = matrix.map(row => row.map(() => val));
    setMatrix(newMatrix);
    onChange(JSON.stringify(newMatrix));
  };

  const fillRandom = () => {
    const newMatrix = matrix.map(row => row.map(() => Math.floor(Math.random() * 10)));
    setMatrix(newMatrix);
    onChange(JSON.stringify(newMatrix));
  };

  return (
    <div className="bg-white p-4 sm:p-6 rounded-lg border border-calc-lightGray shadow-sm mb-6 w-full">
      <div className="flex flex-wrap justify-between items-center mb-4 gap-4">
        <label className="font-semibold text-calc-black text-sm sm:text-base">{label}</label>
        
        {/* Row/Col Adjusters */}
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <label>Rows:</label>
          <input 
            type="number" min="1" max="5" value={rows}
            onChange={(e) => handleSizeChange(parseInt(e.target.value) || 1, cols)}
            className="w-16 px-2 py-1 border rounded focus:ring-2 focus:ring-calc-green outline-none text-center"
          />
          <span className="mx-1">×</span>
          <label>Cols:</label>
          <input 
            type="number" min="1" max="5" value={cols}
            onChange={(e) => handleSizeChange(rows, parseInt(e.target.value) || 1)}
            className="w-16 px-2 py-1 border rounded focus:ring-2 focus:ring-calc-green outline-none text-center"
          />
        </div>
      </div>

      {/* The 2D Grid of Inputs */}
      <div 
        className="grid gap-2 mb-4 overflow-x-auto" 
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(60px, 1fr))` }}
      >
        {matrix.map((row, r) => 
          row.map((val, c) => (
            <input
              key={`${r}-${c}`}
              type="number"
              value={val}
              onChange={(e) => handleCellChange(r, c, e.target.value)}
              className="w-full text-center px-2 py-3 bg-calc-green/5 border border-calc-green/20 rounded-lg font-mono text-calc-black focus:outline-none focus:ring-2 focus:ring-calc-green transition-all"
            />
          ))
        )}
      </div>

      {/* Helper Buttons */}
      <div className="flex flex-wrap gap-2">
        <button onClick={() => fillMatrix(0)} type="button" className="px-3 py-1 text-xs font-semibold rounded border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition">Clear (0)</button>
        <button onClick={() => fillMatrix(1)} type="button" className="px-3 py-1 text-xs font-semibold rounded border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition">All 1s</button>
        <button onClick={fillRandom} type="button" className="px-3 py-1 text-xs font-semibold rounded border border-gray-200 bg-gray-50 hover:bg-gray-100 text-gray-700 transition">Random</button>
      </div>
    </div>
  );
}