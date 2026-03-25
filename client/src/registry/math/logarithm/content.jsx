import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding Logarithms</h2>
        <p className="text-gray-700 mb-4">
          A logarithm is simply the inverse operation to exponentiation. When you calculate a logarithm, you are essentially answering the question: <strong>"To what power do I need to raise the base to get this specific number?"</strong>
        </p>
        <div className="bg-blue-50 p-6 rounded-lg text-center my-6 border border-blue-100">
          <p className="text-xl font-semibold text-blue-900 font-mono">
            If bʸ = x, then log_b(x) = y
          </p>
        </div>
        <p className="text-gray-700">
          For example, since 10² = 100, we know that the base-10 logarithm of 100 is 2 (written as log₁₀(100) = 2).
        </p>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Types of Logarithms</h3>
        
        <div className="space-y-4 text-gray-700">
          <div>
            <h4 className="font-bold text-gray-900">1. Common Logarithm (Base 10)</h4>
            <p>The common logarithm uses a base of 10. It is so widely used in science and engineering (like calculating the pH of liquids or the Richter scale for earthquakes) that if you see "log(x)" written without a specified base, it is universally assumed to be base 10.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">2. Natural Logarithm (Base e)</h4>
            <p>The natural logarithm uses the mathematical constant <em>e</em> (Euler's number, approximately 2.71828) as its base. It is written as <strong>ln(x)</strong>. Natural logs are crucial in calculus, physics, and calculating compound interest or exponential decay.</p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900">3. Custom Base</h4>
            <p>While 10 and <em>e</em> are the most common, a logarithm can have any positive number as its base (except 1). Computer science, for instance, frequently relies on binary logarithms (Base 2).</p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold">Core Logarithm Rules & Properties</h3>
        <p className="text-gray-700">
          When solving complex algebraic equations, mathematicians rely on these standard properties of logarithms to simplify expressions:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Product Rule</h4>
            <p className="text-gray-600 font-mono text-sm">log_b(M × N) = log_b(M) + log_b(N)</p>
            <p className="text-xs text-gray-500 mt-2">The log of a product is the sum of the logs.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Quotient Rule</h4>
            <p className="text-gray-600 font-mono text-sm">log_b(M / N) = log_b(M) - log_b(N)</p>
            <p className="text-xs text-gray-500 mt-2">The log of a quotient is the difference of the logs.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Power Rule</h4>
            <p className="text-gray-600 font-mono text-sm">log_b(M^k) = k × log_b(M)</p>
            <p className="text-xs text-gray-500 mt-2">The exponent can be moved to the front as a multiplier.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">Change of Base</h4>
            <p className="text-gray-600 font-mono text-sm">log_b(x) = ln(x) / ln(b)</p>
            <p className="text-xs text-gray-500 mt-2">Used by this calculator to solve custom bases.</p>
          </div>
        </div>
      </section>
    </div>
  );
}