import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Percentage Increase and Decrease</h2>
        <p className="mb-4">
          Whether you are tracking business revenue, analyzing stock market trends, or calculating a retail discount, understanding <strong>percentage change</strong> is essential. A percentage change represents the degree of change over time, expressed as a fraction of 100.
        </p>
      </section>

      <section className="space-y-6">
        <h3 className="text-xl font-semibold text-gray-900">The Percentage Change Formula</h3>
        <p>
          To find the percentage increase or decrease between two numbers, you need to calculate the difference between the <strong>Final Value</strong> and the <strong>Initial Value</strong>, divide it by the absolute Initial Value, and then multiply by 100.
        </p>
        
        <div className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-4">
          <p className="font-mono text-center text-lg mb-4 text-calc-green font-semibold">
            {"Percentage Change = ( (Final Value - Initial Value) / |Initial Value| ) × 100"}
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm">
            <li>If the result is <strong>positive</strong>, it is a percentage increase.</li>
            <li>If the result is <strong>negative</strong>, it is a percentage decrease.</li>
            <li><strong>Difference Formula:</strong> Simply subtract the initial value from the final value (Final - Initial).</li>
          </ul>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Example: Percentage Increase</h4>
          <p className="text-sm mb-3">
            If your website traffic grows from 400 visitors to 500 visitors, what is the increase?
          </p>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Find the difference: 500 - 400 = 100</li>
            <li>Divide by the initial: 100 / 400 = 0.25</li>
            <li>Multiply by 100: <strong>25% Increase</strong></li>
          </ol>
        </div>

        <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="font-bold text-gray-900 mb-2">Example: Percentage Decrease</h4>
          <p className="text-sm mb-3">
            If a $80 jacket goes on sale for $60, what is the percentage discount?
          </p>
          <ol className="list-decimal pl-5 text-sm space-y-1">
            <li>Find the difference: 60 - 80 = -20</li>
            <li>Divide by the initial: -20 / 80 = -0.25</li>
            <li>Multiply by 100: <strong>25% Decrease</strong></li>
          </ol>
        </div>
      </section>
      
      <section className="mt-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">Finding the Final Value from a Percentage</h3>
        <p className="mb-4 text-sm">
          If you already know your starting number and the percentage it needs to change by (for example, applying a 15% tip to a restaurant bill), you can easily find the final value using this formula:
        </p>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 text-sm">
          <p className="mb-2"><strong>Increase:</strong> Initial Value + (Initial Value × (Percentage / 100))</p>
          <p><strong>Decrease:</strong> Initial Value - (Initial Value × (Percentage / 100))</p>
        </div>
      </section>
    </div>
  );
}