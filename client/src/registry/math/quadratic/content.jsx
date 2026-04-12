import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function QuadraticCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Quadratic Formula Calculator | Solve Equations Instantly
  // META DESCRIPTION: Free Quadratic Equation Calculator for India. Instantly solve for real and complex roots, calculate the discriminant, and get step-by-step math solutions.
  // URL SLUG: /calculator/math/quadratic
  // PRIMARY KEYWORD: Quadratic Formula Calculator
  // SECONDARY KEYWORDS: solve quadratic equation online, roots of quadratic equation, discriminant calculator, math algebra solver, ax2+bx+c=0 calculator, complex roots solver, quadratic equation solver with steps, find x in quadratic equation, formula for quadratic equation, polynomial equation calculator
  // LONG-TAIL KEYWORDS: how to solve quadratic equations step by step, online tool to find roots of quadratic equation, calculate discriminant of quadratic equation, quadratic formula calculator with steps in india, find real and imaginary roots online

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a quadratic equation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A quadratic equation is a second-degree mathematical polynomial equation. In its standard form, it is written as ax² + bx + c = 0, where x represents the unknown variable, and a, b, and c are known numbers. The coefficient 'a' cannot be zero."
        }
      },
      {
        "@type": "Question",
        name: "What is the quadratic formula used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The quadratic formula is used in algebra to find the roots (or solutions) of a quadratic equation. It calculates the exact values of x where the equation equals zero, which graphically represents where a parabola crosses the x-axis."
        }
      },
      {
        "@type": "Question",
        name: "What is the discriminant in a quadratic equation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The discriminant is the part of the quadratic formula found underneath the square root symbol (b² - 4ac). It tells you the nature of the roots: a positive discriminant means two distinct real roots, zero means one repeated real root, and a negative discriminant means two complex (imaginary) roots."
        }
      },
      {
        "@type": "Question",
        name: "Can a quadratic equation have imaginary roots?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. If the discriminant (b² - 4ac) evaluates to a negative number, the equation will have two complex (imaginary) roots because you cannot take the square root of a negative number in real mathematics."
        }
      },
      {
        "@type": "Question",
        name: "How is the quadratic formula used in real life?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Quadratic equations are widely used in physics, engineering, and data science. For example, they are used to calculate the trajectory of a thrown object, optimize profit boundaries in economics, and design curved architectural structures."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Quadratic Formula Calculator | Solve Equations Instantly</title>
        <meta
          name="description"
          content="Free Quadratic Equation Calculator for India. Instantly solve for real and complex roots, calculate the discriminant, and get step-by-step math solutions."
        />
        <meta
          name="keywords"
          content="Quadratic Formula Calculator, solve quadratic equation online, roots of quadratic equation, discriminant calculator, math algebra solver"
        />
        <meta property="og:title" content="Quadratic Formula Calculator | Solve Equations Instantly" />
        <meta property="og:description" content="Calculate the roots of any quadratic equation step-by-step. Perfect for math students, engineers, and competitive exam prep in India." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Quadratic Formula Calculator
        </h1>
        <p className="mb-4">
          Whether you are a high school student in India studying for CBSE or ICSE board exams, an engineering student tackling complex physics problems, or a professional working with parabolic trajectories, solving second-degree polynomials is a fundamental mathematical skill. A quadratic equation is universally recognized by its standard form: <strong>ax<sup>2</sup> + bx + c = 0</strong>.
        </p>
        <p className="mb-4">
          Our free online <strong>Quadratic Formula Calculator</strong> is built to simplify algebraic problem-solving. Instead of manually struggling with long calculations, finding square roots, and keeping track of negative signs, this tool does the heavy lifting for you. 
        </p>
        <p>
          It instantly calculates the discriminant, determines the nature of the roots (real or complex), and provides a clear, step-by-step breakdown of how the final values of <em>x</em> were derived. Fast, accurate, and completely free to use!
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using this calculator is incredibly simple. You only need to know the three coefficients from your quadratic equation. Let's break down the process using our interface:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Identify your coefficients:</strong> Ensure your equation is arranged in the standard <em>ax<sup>2</sup> + bx + c = 0</em> format.
          </li>
          <li>
            <strong>Input "a":</strong> Enter the coefficient of <em>x<sup>2</sup></em> in the first field labeled "a". For example, if your equation starts with 2x<sup>2</sup>, enter <strong>2</strong>.
          </li>
          <li>
            <strong>Input "b":</strong> Enter the coefficient of <em>x</em> in the second field. If your equation has -5x, make sure to include the negative sign and enter <strong>-5</strong>.
          </li>
          <li>
            <strong>Input "c":</strong> Enter the constant term in the third field. If your equation ends with -3, enter <strong>-3</strong>.
          </li>
          <li>
            <strong>Review the Step-by-Step Breakdown:</strong> Once the inputs are filled, the calculator instantly displays the detailed solution:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Equation:</strong> Verifies the equation you entered (e.g., 2x<sup>2</sup> - 5x - 3 = 0).</li>
              <li><strong>Discriminant (&Delta;):</strong> Shows the exact calculation for b<sup>2</sup> - 4ac (e.g., 49).</li>
              <li><strong>Root 1 & Root 2:</strong> Displays the step-by-step substitution into the formula to find both values of <em>x</em>.</li>
            </ul>
          </li>
          <li>
            <strong>Get the Final Result:</strong> The main result box will tell you if the roots are "Real and Distinct", "Real and Equal", or "Complex", along with the final numerical answers.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Quadratic Formula Explained</h2>
        <p className="text-gray-700 mb-4">
          To manually find the roots of a quadratic equation (where the parabola intersects the x-axis), mathematicians rely on a specific universal formula.
        </p>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">The Formula</h3>
          
          {/* Custom Formula Layout */}
          <div className="bg-indigo-50 p-6 rounded-lg flex justify-center text-xl text-indigo-900 mb-4 border border-indigo-100 font-semibold overflow-x-auto">
            <div className="flex items-center gap-3">
              <span><i>x</i> =</span>
              <div className="flex flex-col items-center">
                <span className="border-b-2 border-indigo-900 px-2 pb-1">
                  -<i>b</i> &plusmn; &radic;(<i>b</i><sup>2</sup> - 4<i>ac</i>)
                </span>
                <span className="pt-1">2<i>a</i></span>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-bold text-gray-900 mb-3 text-lg border-b pb-2">Understanding the Discriminant (&Delta;)</h4>
            <p className="mb-4 text-sm text-gray-700">
              The expression located underneath the square root symbol, <strong><i>b</i><sup>2</sup> - 4<i>ac</i></strong>, is known as the Discriminant. It acts as a mathematical shortcut to tell you exactly what kind of roots the equation will produce:
            </p>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start bg-green-50 p-3 rounded border border-green-100">
                <span className="text-green-700 font-bold mt-0.5">1.</span>
                <div>
                  <strong className="text-green-800">Positive Discriminant (&Delta; &gt; 0):</strong>
                  <p className="text-gray-700 mt-1">The equation yields two distinct real numbers as solutions. The parabola crosses the x-axis at two separate points.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-blue-50 p-3 rounded border border-blue-100">
                <span className="text-blue-700 font-bold mt-0.5">2.</span>
                <div>
                  <strong className="text-blue-800">Zero Discriminant (&Delta; = 0):</strong>
                  <p className="text-gray-700 mt-1">The equation has one single real root (a repeated root). The peak or vertex of the parabola touches the x-axis at exactly one point.</p>
                </div>
              </li>
              <li className="flex gap-3 items-start bg-orange-50 p-3 rounded border border-orange-100">
                <span className="text-orange-700 font-bold mt-0.5">3.</span>
                <div>
                  <strong className="text-orange-800">Negative Discriminant (&Delta; &lt; 0):</strong>
                  <p className="text-gray-700 mt-1">The equation has two complex (imaginary) roots. The parabola completely floats above or below the x-axis and never touches it.</p>
                </div>
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
              <h3 className="font-bold text-gray-900">Example 1: Solving a Standard Parabola (Two Roots)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Equation:</strong> 2x<sup>2</sup> - 5x - 3 = 0</p>
              <p className="mb-3"><strong>Identify Coefficients:</strong> a = 2, b = -5, c = -3</p>
              
              <div className="bg-gray-50 p-4 rounded mb-3 space-y-2 font-mono">
                <p><strong>Step 1 (Discriminant):</strong></p>
                <p>&Delta; = (-5)<sup>2</sup> - 4(2)(-3)</p>
                <p>&Delta; = 25 - (-24)</p>
                <p>&Delta; = 25 + 24 = 49</p>
              </div>

              <div className="bg-gray-50 p-4 rounded mb-3 space-y-2 font-mono">
                <p><strong>Step 2 (Root Calculation):</strong></p>
                <p>x = [ -(-5) &plusmn; &radic;49 ] / [ 2(2) ]</p>
                <p>x = [ 5 &plusmn; 7 ] / 4</p>
              </div>

              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Root 1:</strong> x = (5 + 7) / 4 = 12 / 4 = <strong>3</strong></li>
                <li><strong>Root 2:</strong> x = (5 - 7) / 4 = -2 / 4 = <strong>-0.5</strong></li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The roots are Real and Distinct (3 and -0.5).</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: A Perfect Square (One Root)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Equation:</strong> x<sup>2</sup> - 4x + 4 = 0</p>
              <p className="mb-3"><strong>Identify Coefficients:</strong> a = 1, b = -4, c = 4</p>
              
              <div className="bg-gray-50 p-4 rounded mb-3 space-y-2 font-mono">
                <p><strong>Step 1 (Discriminant):</strong></p>
                <p>&Delta; = (-4)<sup>2</sup> - 4(1)(4)</p>
                <p>&Delta; = 16 - 16 = 0</p>
              </div>

              <div className="bg-gray-50 p-4 rounded mb-3 space-y-2 font-mono">
                <p><strong>Step 2 (Root Calculation):</strong></p>
                <p>x = [ -(-4) &plusmn; &radic;0 ] / [ 2(1) ]</p>
                <p>x = [ 4 &plusmn; 0 ] / 2</p>
              </div>

              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Root:</strong> x = 4 / 2 = <strong>2</strong></li>
              </ul>
              <p className="text-blue-700 font-semibold">Result: The discriminant is zero, meaning the root is Real and Equal (x = 2).</p>
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
                <span className="text-indigo-600 group-open:rotate-180 transition-transform">▼</span>
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
          Algebra is just the beginning. Enhance your math skills with our comprehensive suite of online calculators designed for students and professionals:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Average Calculator</a>
          <a href="/calculator/math/exponent" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Fraction Math</a>
          <a href="/calculator/math/lcm" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Matrix Math</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Mean, Median, Mode</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Permutation & Combination</a>
          <a href="/calculator/math/percentage" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Percentage Inc/Dec</a>
          <a href="/calculator/math/probability" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Proportion Calculator</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Pythagorean Theorem</a>
          <a href="/calculator/math/ratio" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-indigo-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-indigo-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}