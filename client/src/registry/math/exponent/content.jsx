import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding Exponents</h2>
        <p className="text-gray-700 mb-4">
          An exponent (also known as a power or index) is a mathematical shorthand that tells you how many times to multiply a base number by itself. 
        </p>
        <div className="bg-blue-50 p-6 rounded-lg text-center my-6 border border-blue-100">
          <p className="text-xl font-semibold text-blue-900 font-mono">
            x<sup>n</sup> = x · x · x ... (n times)
          </p>
        </div>
        <p className="text-gray-700">
          For example, in the expression <strong>2<sup>4</sup></strong>, the number 2 is the <strong>base</strong> and 4 is the <strong>exponent</strong>. This means you multiply 2 by itself four times: (2 × 2 × 2 × 2 = 16).
        </p>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Core Exponent Rules & Properties</h3>
        <p className="text-gray-700">
          When solving algebra problems, simplifying terms with exponents relies on a set of standardized rules. Here are the most fundamental properties of exponents:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Product Rule</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">x<sup>a</sup> × x<sup>b</sup> = x<sup>(a + b)</sup></p>
            <p className="text-xs text-gray-500">When multiplying identical bases, add the exponents.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Quotient Rule</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">x<sup>a</sup> / x<sup>b</sup> = x<sup>(a - b)</sup></p>
            <p className="text-xs text-gray-500">When dividing identical bases, subtract the exponents.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Power of a Power</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">(x<sup>a</sup>)<sup>b</sup> = x<sup>(a × b)</sup></p>
            <p className="text-xs text-gray-500">When raising a power to another power, multiply the exponents.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Zero Exponent Rule</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">x<sup>0</sup> = 1</p>
            <p className="text-xs text-gray-500">Any non-zero base raised to the power of 0 always equals 1.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Negative Exponent Rule</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">x<sup>-n</sup> = 1 / x<sup>n</sup></p>
            <p className="text-xs text-gray-500">A negative exponent represents the reciprocal of the base raised to that power.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Fractional Exponents</h4>
            <p className="text-gray-600 font-mono text-sm mb-2">x<sup>(1/n)</sup> = <sup>n</sup>√x</p>
            <p className="text-xs text-gray-500">A fractional exponent acts as a root (e.g., a power of 1/2 is a square root).</p>
          </div>
        </div>
      </section>
    </div>
  );
}