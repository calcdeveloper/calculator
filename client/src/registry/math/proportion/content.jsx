import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is a Proportion?</h2>
        <p className="mb-4">
          A <strong>proportion</strong> is simply an equation that states two ratios (or fractions) are equal. Proportions are widely used in daily life, from scaling up a recipe for more guests, to calculating distances on a map, to figuring out exchange rates.
        </p>
        <p>
          The standard format for a proportion is written as <strong>A / B = C / D</strong> or <strong>A : B = C : D</strong>.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">How to Solve Proportions using Cross-Multiplication</h3>
        <p>
          If you know three of the four values in a proportion, you can easily find the missing value using a method called <strong>cross-multiplication</strong>. Cross-multiplication relies on the rule that the product of the extremes equals the product of the means.
        </p>
        
        <div className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-4">
          <p className="font-mono text-center text-lg mb-2 text-calc-green font-semibold">
            If A / B = C / D, then A × D = B × C
          </p>
          <p className="text-sm text-center">
            Once you cross-multiply, simply divide by the remaining number to isolate your unknown variable.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Example 1: Finding the Numerator</h4>
          <p className="text-sm mb-3">
            Suppose you need to solve for A in the equation: <strong>A / 4 = 5 / 10</strong>
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Cross-multiply:</strong> A × 10 = 4 × 5</li>
            <li><strong>Simplify:</strong> A × 10 = 20</li>
            <li><strong>Divide:</strong> A = 20 / 10</li>
            <li><strong>Result:</strong> A = 2</li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Example 2: Finding the Denominator</h4>
          <p className="text-sm mb-3">
            Suppose you need to solve for D in the equation: <strong>3 / 6 = 9 / D</strong>
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Cross-multiply:</strong> 3 × D = 6 × 9</li>
            <li><strong>Simplify:</strong> 3 × D = 54</li>
            <li><strong>Divide:</strong> D = 54 / 3</li>
            <li><strong>Result:</strong> D = 18</li>
          </ul>
        </div>
      </section>
    </div>
  );
}