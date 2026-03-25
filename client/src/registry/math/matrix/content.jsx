import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Matrix Operations</h2>
        <p className="mb-4">
          A matrix is a rectangular array of numbers arranged in rows and columns. Matrices are fundamental in linear algebra, physics, computer graphics, and machine learning.
        </p>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">Core Matrix Math Rules</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2">Addition & Subtraction</h4>
            <p className="text-sm">
              You can only add or subtract matrices if they have the exact same dimensions (e.g., you can add a 2x2 matrix to another 2x2 matrix). You simply add or subtract the corresponding elements.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2">Multiplication (A × B)</h4>
            <p className="text-sm">
              To multiply matrices, the number of columns in Matrix A must equal the number of rows in Matrix B. The result is calculated using the dot product of rows and columns.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2">Determinant |A|</h4>
            <p className="text-sm">
              The determinant is a special scalar value calculated from a square matrix. If the determinant is zero, the matrix is considered "singular" and does not have an inverse.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h4 className="font-bold text-gray-900 mb-2">Inverse (A⁻¹)</h4>
            <p className="text-sm">
              The inverse of a matrix is analogous to taking the reciprocal of a number. When you multiply a matrix by its inverse, you get the Identity Matrix.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}