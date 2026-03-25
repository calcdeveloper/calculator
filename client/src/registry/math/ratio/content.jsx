import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Ratio Operations</h2>
        <p className="mb-4">
          A ratio compares the relationship between two quantities. Whether you are scaling a recipe, adjusting screen resolutions, or analyzing financial debt, mastering how to manipulate ratios is an essential mathematical skill.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">How to Simplify Ratios</h3>
        <p>
          Simplifying a ratio makes it easier to understand by reducing the numbers to their smallest possible whole integers, much like simplifying a fraction. To do this, you must find the <strong>Greatest Common Divisor (GCD)</strong>—the largest number that divides evenly into both parts of the ratio.
        </p>
        <div className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-4">
          <p className="font-mono text-center text-lg mb-2 text-calc-green font-semibold">
            Simplified Form = (A ÷ GCD) : (B ÷ GCD)
          </p>
          <p className="text-sm text-center">
            Example: For the ratio 15:20, the GCD is 5. Dividing both sides by 5 yields <strong>3:4</strong>.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">The '1:n' and 'n:1' Formats</h4>
          <p className="text-sm mb-3">
            Sometimes it is useful to force one side of the ratio to be exactly 1. This is highly common in mapping (e.g., 1 cm : 100 km) or odds in betting.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>1:n Form:</strong> Divide both numbers by A. Formula: <code>1 : (B/A)</code></li>
            <li><strong>n:1 Form:</strong> Divide both numbers by B. Formula: <code>(A/B) : 1</code></li>
          </ul>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Finding Equivalent Ratios</h4>
          <p className="text-sm mb-3">
            To make a ratio larger or smaller while keeping the exact same proportions, simply multiply or divide both sides by the same factor.
          </p>
          <ul className="list-disc pl-5 text-sm space-y-2">
            <li><strong>Making it Larger:</strong> A × x : B × x</li>
            <li><strong>Making it Smaller:</strong> A ÷ x : B ÷ x</li>
          </ul>
        </div>
      </section>
    </div>
  );
}