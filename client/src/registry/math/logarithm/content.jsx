import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function LogarithmCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Logarithm Calculator | Find log, ln & Custom Base Logs
  // META DESCRIPTION: Free online Logarithm (Log) Calculator. Easily calculate common logs (base 10), natural logs (ln), and custom base logarithms instantly. Perfect for students and professionals.
  // URL SLUG: /calculator/math/logarithm
  // PRIMARY KEYWORD: Logarithm calculator
  // SECONDARY KEYWORDS: log calculator online, natural log calculator, common log calculator, base 10 log, ln calculator, find log of a number, log base 2 calculator, custom log base, logarithm solver, log math tool
  // LONG-TAIL KEYWORDS: how to calculate log of a number, difference between common log and natural log, find log base 10 of a number online, calculate logarithm with custom base, log calculator for engineering students

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between log and ln?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The term 'log' typically refers to the common logarithm, which uses a base of 10. The term 'ln' stands for natural logarithm, which uses the mathematical constant 'e' (approximately 2.718) as its base."
        }
      },
      {
        "@type": "Question",
        name: "Can I find the logarithm of a negative number?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In standard real-number mathematics, you cannot take the logarithm of a negative number or zero. The input number (x) must always be greater than zero. If you try to calculate log(-5), the result is undefined in real numbers."
        }
      },
      {
        "@type": "Question",
        name: "What is the logarithm of 1?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The logarithm of 1 is always 0, regardless of the base. This is because any number raised to the power of 0 equals 1 (e.g., 10^0 = 1, e^0 = 1, 2^0 = 1)."
        }
      },
      {
        "@type": "Question",
        name: "Why do we use logarithms in real life?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Logarithms are used to compress very large scales into manageable numbers. They are used to measure earthquake intensity (Richter scale), sound levels (Decibels), acidity of liquids (pH scale), and to calculate exponential growth like compound interest."
        }
      },
      {
        "@type": "Question",
        name: "How do I calculate a log with a base of 2?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select 'Custom Base' from the dropdown menu in our calculator. Set the Base to 2, and then enter your number. This is frequently used in computer science and binary calculations."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Logarithm Calculator | Find log, ln & Custom Base Logs</title>
        <meta
          name="description"
          content="Free online Logarithm (Log) Calculator. Easily calculate common logs (base 10), natural logs (ln), and custom base logarithms instantly. Perfect for students and professionals."
        />
        <meta
          name="keywords"
          content="Logarithm calculator, log calculator online, natural log calculator, common log calculator, base 10 log, ln calculator"
        />
        <meta property="og:title" content="Logarithm Calculator | Find log, ln & Custom Base Logs" />
        <meta property="og:description" content="Free online Logarithm (Log) Calculator. Easily calculate common logs (base 10), natural logs (ln), and custom base logarithms instantly." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Logarithm (Log) Calculator
        </h1>
        <p className="mb-4">
          Whether you are a high school student tackling algebra, an engineering student working on complex physics problems, or a financial analyst calculating compound growth, logarithms are an essential mathematical tool.
        </p>
        <p className="mb-4">
          Our free online <strong>Logarithm Calculator</strong> makes it incredibly easy to solve logarithmic equations instantly. It is designed to handle the universally used Common Logarithms (Base 10), Natural Logarithms (Base e), and even custom bases for specialized calculations like binary computing.
        </p>
        <p>
          Skip the complicated mathematical tables and manual formulas. Just enter your values, and let our tool provide precise, step-by-step results.
        </p>
      </section>

      {/* HOW TO USE FROM SCREENSHOT */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Logarithm Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using this tool is straightforward. Follow these simple steps to find your logarithmic value:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Logarithm Type:</strong> Use the dropdown menu to choose your base.
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li>Choose <em>Common Log (Base 10)</em> for standard math and science problems.</li>
              <li>Choose <em>Natural Log (Base e)</em> for calculus, physics, and finance.</li>
              <li>Choose <em>Custom Base</em> if you need a specific base (like base 2 for computer science).</li>
            </ul>
          </li>
          <li>
            <strong>Input the Number (x):</strong> Use the slider or simply type the number you want to find the logarithm of into the input box. For example, entering "22" will calculate the log of 22.
          </li>
          <li>
            <strong>View the Result:</strong> The calculator will instantly display the <strong>Result (y)</strong> in the prominent green box on the right. For example, the Common Log of 22 is approximately 1.342423.
          </li>
          <li>
            <strong>Check the Property Table:</strong> Below the main result, a detailed table summarizes your calculation, showing the Log Type, the exact Equation (e.g., log₁₀(22)), your Input Number, and the Final Calculated Result.
          </li>
        </ol>
      </section>

      {/* EXISTING CONTENT: UNDERSTANDING LOGARITHMS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Logarithms</h2>
        <p className="text-gray-700 mb-4">
          A logarithm is simply the inverse operation to exponentiation. When you calculate a logarithm, you are essentially answering the question: <strong>"To what power do I need to raise the base to get this specific number?"</strong>
        </p>
        <div className="bg-blue-50 p-6 rounded-lg text-center my-6 border border-blue-100 shadow-sm">
          <p className="text-xl font-semibold text-blue-900 font-mono">
            If bʸ = x, then log_b(x) = y
          </p>
        </div>
        <p className="text-gray-700">
          For example, since 10² = 100, we know that the base-10 logarithm of 100 is 2 (written as log₁₀(100) = 2). It tells us how many times we need to multiply the base by itself to reach our target number.
        </p>
      </section>

      {/* EXISTING CONTENT: TYPES OF LOGS */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Types of Logarithms</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-600 border-l border-r border-b">
            <h4 className="font-bold text-gray-900 mb-2">1. Common Logarithm (Base 10)</h4>
            <p className="text-sm text-gray-600">The common logarithm uses a base of 10. It is so widely used in science and engineering (like calculating the pH of liquids or the Richter scale for earthquakes) that if you see "log(x)" written without a specified base, it is universally assumed to be base 10.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-600 border-l border-r border-b">
            <h4 className="font-bold text-gray-900 mb-2">2. Natural Logarithm (Base e)</h4>
            <p className="text-sm text-gray-600">The natural logarithm uses the mathematical constant <em>e</em> (Euler's number, approx. 2.71828) as its base. It is written as <strong>ln(x)</strong>. Natural logs are crucial in calculus, continuous growth, and calculating compound interest.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-purple-600 border-l border-r border-b">
            <h4 className="font-bold text-gray-900 mb-2">3. Custom Base</h4>
            <p className="text-sm text-gray-600">While 10 and <em>e</em> are the most common, a logarithm can have any positive number as its base (except 1). Computer science frequently relies on binary logarithms (Base 2) to calculate data structures and algorithmic complexity.</p>
          </div>
        </div>
      </section>

      {/* EXISTING CONTENT: PROPERTIES */}
      <section className="space-y-6">
        <h3 className="text-xl font-bold text-gray-900">Core Logarithm Rules & Properties</h3>
        <p className="text-gray-700">
          When solving complex algebraic equations, mathematicians rely on these standard properties of logarithms to simplify expressions manually:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Product Rule</h4>
            <p className="text-blue-700 font-mono text-sm bg-white p-2 rounded border border-gray-100 mb-2">log_b(M × N) = log_b(M) + log_b(N)</p>
            <p className="text-sm text-gray-600">The log of a product is the sum of the logs.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Quotient Rule</h4>
            <p className="text-blue-700 font-mono text-sm bg-white p-2 rounded border border-gray-100 mb-2">log_b(M ÷ N) = log_b(M) - log_b(N)</p>
            <p className="text-sm text-gray-600">The log of a quotient is the difference of the logs.</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Power Rule</h4>
            <p className="text-blue-700 font-mono text-sm bg-white p-2 rounded border border-gray-100 mb-2">log_b(M^k) = k × log_b(M)</p>
            <p className="text-sm text-gray-600">The exponent can be moved to the front as a multiplier.</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 hover:border-blue-300 transition-colors">
            <h4 className="font-bold text-gray-800 mb-2">Change of Base Formula</h4>
            <p className="text-blue-700 font-mono text-sm bg-white p-2 rounded border border-gray-100 mb-2">log_b(x) = ln(x) ÷ ln(b)</p>
            <p className="text-sm text-gray-600">Used by calculators to solve custom bases using standard natural logs.</p>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Worked Examples</h2>
        <p className="mb-6 text-gray-700">
          To better understand how this works, let's look at three practical examples showing how to calculate logarithms.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Finding the Common Log (Base 10)</h3>
            </div>
            <div className="p-5 bg-white">
              <p className="mb-3 text-gray-700">
                <strong>Problem:</strong> What is the common logarithm of 1000?
              </p>
              <ul className="list-none space-y-2 text-sm text-gray-800 bg-gray-50 p-4 rounded border border-gray-100 font-mono">
                <li><strong>Equation:</strong> y = log₁₀(1000)</li>
                <li><strong>Meaning:</strong> 10 to what power equals 1000?</li>
                <li><strong>Calculation:</strong> 10 × 10 × 10 = 1000 (which is 10³)</li>
                <li className="text-green-700 font-bold mt-2 pt-2 border-t border-gray-200">Result (y): 3</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Computer Science (Base 2)</h3>
            </div>
            <div className="p-5 bg-white">
              <p className="mb-3 text-gray-700">
                <strong>Problem:</strong> You need to find how many bits are required to represent 256 unique values. This requires finding the log base 2 of 256.
              </p>
              <ul className="list-none space-y-2 text-sm text-gray-800 bg-gray-50 p-4 rounded border border-gray-100 font-mono">
                <li><strong>Equation:</strong> y = log₂(256)</li>
                <li><strong>Meaning:</strong> 2 to what power equals 256?</li>
                <li><strong>Calculation:</strong> 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 = 256 (which is 2⁸)</li>
                <li className="text-blue-700 font-bold mt-2 pt-2 border-t border-gray-200">Result (y): 8</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
                {faq.name}
                <span className="text-blue-500 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Math & Statistics Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Need to solve other mathematical problems? Explore our full suite of free calculators below:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Calculator</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Calculator</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Inc/Dec</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}