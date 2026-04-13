import React from 'react';


export default function PythagoreanCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Pythagorean Theorem Calculator | Find Missing Sides
  // META DESCRIPTION: Free Pythagorean Theorem Calculator for India. Instantly find the hypotenuse or missing leg of a right-angled triangle with step-by-step geometric formulas.
  // URL SLUG: /calculator/math/pythagorean
  // PRIMARY KEYWORD: Pythagorean Theorem Calculator
  // SECONDARY KEYWORDS: calculate hypotenuse online, find missing side of right triangle, pythagorean theorem formula, right angle triangle calculator, math geometry solver, a2 + b2 = c2 calculator, hypotenuse calculator, calculate leg a or b, triangle side length finder, pythagoras theorem calculator india
  // LONG-TAIL KEYWORDS: how to calculate hypotenuse of right triangle, pythagorean theorem calculator with steps, formula to find missing leg of a right angled triangle, online tool to solve a2 b2 c2 equation, distance between two points pythagorean theorem

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the Pythagorean Theorem?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Pythagorean theorem is a fundamental rule in geometry that describes the mathematical relationship between the three sides of a right-angled triangle. It states that the square of the hypotenuse is equal to the sum of the squares of the other two sides."
        }
      },
      {
        "@type": "Question",
        name: "Does this theorem work on all triangles?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The Pythagorean theorem only applies to right-angled triangles—triangles where one of the inside angles is exactly 90 degrees."
        }
      },
      {
        "@type": "Question",
        name: "What is the hypotenuse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The hypotenuse is the longest side of a right-angled triangle. It is always the side that is located directly opposite the 90-degree right angle."
        }
      },
      {
        "@type": "Question",
        name: "What is a Pythagorean triple?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Pythagorean triple is a set of three positive whole numbers (integers) that perfectly fit the a² + b² = c² formula. A common example used in construction is the 3-4-5 triangle (3² + 4² = 5²)."
        }
      },
      {
        "@type": "Question",
        name: "How do I find a missing leg (a or b) instead of the hypotenuse?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find a missing leg, you rearrange the formula. You subtract the square of the known leg from the square of the hypotenuse, and then find the square root of that result. The formula is a = √(c² - b²)."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Pythagorean Theorem Calculator
        </h1>
        <p className="mb-4">
          The Pythagorean theorem is arguably the most famous rule in geometry. It provides a simple, direct way to calculate the length of one side of a right-angled triangle if you know the lengths of the other two sides. 
        </p>
        <p className="mb-4">
          Our free online <strong>Pythagorean Theorem Calculator</strong> is designed to instantly solve these geometric problems. Whether you are an engineering student in Delhi, an architect drafting building dimensions, a carpenter checking if a frame is perfectly square, or just trying to find the shortest distance across a rectangular field, this tool provides perfect accuracy.
        </p>
        <p>
          You no longer have to manually calculate squares and square roots. Designed for everyday users in India, simply input your known dimensions, and the calculator will find your missing hypotenuse or leg length in a fraction of a second.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our interface is built to be visual and straightforward. To find your missing side, just follow these simple steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select the side to find:</strong> Use the dropdown menu labeled <em>"Which side do you want to find?"</em>. You can choose to calculate the <strong>Hypotenuse (c)</strong>, <strong>Leg (a)</strong>, or <strong>Leg (b)</strong>.
          </li>
          <li>
            <strong>Input known values:</strong> Based on your selection, input fields will appear for the remaining two known sides. For instance, if you are finding the hypotenuse, simply enter the lengths for Side A and Side B.
          </li>
          <li>
            <strong>View instant results:</strong> As you type, the calculator instantly computes the math. Your missing side's length will be highlighted in the main result box.
          </li>
          <li>
            <strong>Review the step-by-step solution:</strong> Look directly beneath the result to see the full equation. The calculator displays exactly how the squares were added or subtracted and how the final square root was applied, making it an excellent study aid for math homework!
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Formulas</h2>
        <p className="text-gray-700 mb-4">
          The theorem states that in a right-angled triangle, the area of the square whose side is the hypotenuse (the side opposite the right angle) is equal to the sum of the areas of the squares on the other two sides.
        </p>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">The Core Formula</h3>
          <p className="font-mono text-green-700 text-2xl font-bold bg-green-50 p-4 rounded text-center shadow-sm">
            a² + b² = c²
          </p>
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p><strong>To calculate a specific missing side, we rearrange this primary equation:</strong></p>
            <ul className="list-disc pl-6 space-y-3 mt-3">
              <li>
                <strong>Finding the Hypotenuse (c):</strong> If you know both shorter legs, square them, add them together, and find the square root. <br />
                <span className="font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">c = √(a² + b²)</span>
              </li>
              <li>
                <strong>Finding Leg (a):</strong> If you know the hypotenuse and leg b, square both, subtract b² from c², and find the square root. <br />
                <span className="font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">a = √(c² - b²)</span>
              </li>
              <li>
                <strong>Finding Leg (b):</strong> Same logic as above, but subtracting a² from c². <br />
                <span className="font-mono font-semibold text-gray-900 bg-gray-100 px-2 py-1 rounded">b = √(c² - a²)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: The Ladder Problem</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You need to reach a window that is exactly <strong>4 meters (a)</strong> above the ground. To keep the ladder stable, the base must be placed exactly <strong>3 meters (b)</strong> away from the wall. How long must the ladder (the hypotenuse) be?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Formula:</strong> c = √(a² + b²)</li>
                <li><strong>Square the sides:</strong> 4² = 16, and 3² = 9</li>
                <li><strong>Add them:</strong> 16 + 9 = 25</li>
                <li><strong>Square root:</strong> √25 = 5</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The ladder must be exactly 5 meters long (c = 5).</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Buying a Television</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> TV sizes are measured diagonally (the hypotenuse). You are looking at a <strong>50-inch TV (c)</strong>. You measure the height of your cabinet space, and the TV's height is <strong>30 inches (a)</strong>. How wide is the TV (b) to ensure it fits in your living room?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Formula:</strong> b = √(c² - a²)</li>
                <li><strong>Square the sides:</strong> 50² = 2500, and 30² = 900</li>
                <li><strong>Subtract height from diagonal:</strong> 2500 - 900 = 1600</li>
                <li><strong>Square root:</strong> √1600 = 40</li>
              </ul>
              <p className="text-blue-700 font-semibold">Result: The width of the television is 40 inches (b = 40).</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
                {faq.name}
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
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
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Free Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Geometry is just one branch of our mathematical toolkit. Enhance your calculations with our comprehensive suite of online math solvers:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Math</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Math</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Increase/Decrease</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
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