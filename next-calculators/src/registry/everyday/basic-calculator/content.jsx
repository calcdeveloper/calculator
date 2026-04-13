import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 text-calc-darkGray mt-12 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
      <section>
        <h2 className="text-3xl font-bold mb-4 text-calc-black">
          How to Use the Scientific Calculator
        </h2>
        <p className="mb-4 leading-relaxed">
          A scientific calculator is an essential tool for students, engineers, and professionals. Unlike standard calculators that only handle basic arithmetic, scientific calculators can solve complex formulas involving trigonometry, logarithms, probability, and exponential growth.
        </p>
        <p className="mb-4 leading-relaxed">
          Below is a detailed guide explaining the core mathematical methods available on this calculator, complete with formulas and step-by-step examples.
        </p>
      </section>

      <hr className="border-gray-200" />

      <section>
        <h3 className="text-2xl font-bold text-calc-black mb-4">
          1. Basic Arithmetic Operations
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          The foundation of all mathematics involves four primary operations. Our calculator processes these using the standard order of operations (PEMDAS/BODMAS).
        </p>
        <ul className="list-disc pl-6 space-y-3 text-sm">
          <li><strong>Addition (+) & Subtraction (−):</strong> Calculates the sum or difference between numbers.</li>
          <li><strong>Multiplication (×) & Division (÷):</strong> Calculates the product or quotient.</li>
          <li><strong>Parentheses ( ):</strong> Used to group numbers and force the calculator to prioritize specific parts of an equation.</li>
        </ul>
        <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
          <p className="font-semibold mb-2 text-sm">Example:</p>
          <p className="font-mono text-blue-600">5 + 2 × (10 ÷ 2) = 15</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-calc-black mb-4 mt-8">
          2. Trigonometric Functions
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          Trigonometry studies the relationships between the side lengths and angles of triangles. You can toggle the calculator between <strong>Degrees (Deg)</strong> and <strong>Radians (Rad)</strong> depending on your mathematical requirements.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 text-center">
          <div className="border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Sine (sin)</h4>
            <div className="my-2 font-mono text-sm">
              sin(θ) = Opposite / Hypotenuse
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Cosine (cos)</h4>
            <div className="my-2 font-mono text-sm">
              cos(θ) = Adjacent / Hypotenuse
            </div>
          </div>
          <div className="border border-gray-200 p-4 rounded-lg">
            <h4 className="font-bold mb-2">Tangent (tan)</h4>
            <div className="my-2 font-mono text-sm">
              tan(θ) = Opposite / Adjacent
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg mt-4 border border-gray-200">
          <p className="font-semibold mb-2 text-sm">Example (in Degrees):</p>
          <p className="font-mono text-blue-600">sin(90) = 1</p>
        </div>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-calc-black mb-4 mt-8">
          3. Logarithms and Exponential Functions
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          Logarithms are the inverse operations to exponentiation. They tell you what power you need to raise a base to in order to get a specific number.
        </p>
        
        <ul className="list-disc pl-6 space-y-4 text-sm">
          <li>
            <strong>Common Logarithm (log):</strong> This is base 10. 
            <br /><em>Formula:</em> log₁₀(1000) = 3 (Because 10³ = 1000)
          </li>
          <li>
            <strong>Natural Logarithm (ln):</strong> This is base e (Euler's number, approx 2.718).
            <br /><em>Formula:</em> ln(e) = 1
          </li>
          <li>
            <strong>Exponents (xʸ):</strong> Raises a base number to a specified power.
            <br /><em>Example:</em> 2³ = 8
          </li>
          <li>
            <strong>Square Root (√):</strong> Finds the number which, when multiplied by itself, yields the original value.
            <br /><em>Example:</em> √144 = 12
          </li>
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-bold text-calc-black mb-4 mt-8">
          4. Factorials and Constants
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          The calculator also includes common mathematical constants and functions used in probability and advanced algebra.
        </p>
        <div className="space-y-4 text-sm">
          <div className="border-l-4 border-blue-500 pl-4 py-1">
            <h4 className="font-bold">Factorial (x!)</h4>
            <p className="mt-1">The product of all positive integers less than or equal to a given positive integer.</p>
            <div className="my-2 font-mono">
              n! = n × (n-1) × ... × 1
            </div>
            <p className="font-mono text-blue-600 mt-1 text-xs">Example: 5! = 5 × 4 × 3 × 2 × 1 = 120</p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4 py-1">
            <h4 className="font-bold">Pi (π) & Euler's Number (e)</h4>
            <p className="mt-1"><strong>π (Pi)</strong> represents the ratio of a circle's circumference to its diameter (approx 3.14159).</p>
            <p className="mt-1"><strong>e</strong> represents the base of the natural logarithm (approx 2.71828).</p>
          </div>
        </div>
      </section>
    </div>
  );
}