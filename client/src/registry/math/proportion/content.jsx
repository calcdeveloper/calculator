import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ProportionCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Proportion Calculator | Solve Ratios Instantly
  // META DESCRIPTION: Free Proportion Calculator for India. Solve missing variables in ratios and fractions instantly using cross-multiplication with step-by-step math solutions.
  // URL SLUG: /calculator/math/proportion
  // PRIMARY KEYWORD: Proportion Calculator
  // SECONDARY KEYWORDS: solve proportion online, ratio proportion calculator, cross multiplication calculator, missing fraction solver, equivalent fractions calculator, direct proportion formula, inverse proportion calculator, math ratio solver, find x in proportion, scaling calculator
  // LONG-TAIL KEYWORDS: how to solve proportions with cross multiplication, online calculator to find missing value in ratio, formula for direct and inverse proportion, calculate ratio and proportion for competitive exams india, tool to solve equivalent fractions step by step

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a proportion in math?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A proportion is a mathematical statement or equation that shows two ratios or fractions are exactly equal. For example, the ratio 1/2 is equal to the ratio 2/4. This relationship is a proportion."
        }
      },
      {
        "@type": "Question",
        name: "How do I solve a proportion with a missing value?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You can solve a proportion with a missing value by using cross-multiplication. Multiply the numerator of the first fraction by the denominator of the second, and equate it to the denominator of the first multiplied by the numerator of the second. Finally, divide by the known number to isolate the missing variable."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between direct and inverse proportion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a direct proportion, as one value increases, the other value increases at the same rate (e.g., more hours worked equals more pay). In an inverse proportion, as one value increases, the other decreases (e.g., more workers assigned to a job means less time needed to complete it)."
        }
      },
      {
        "@type": "Question",
        name: "Can a proportion have decimals or fractions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, proportions can include decimals and fractions. The cross-multiplication rule applies exactly the same way regardless of whether the numbers are whole numbers, decimals, or mixed fractions."
        }
      },
      {
        "@type": "Question",
        name: "Are ratios and proportions the same thing?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, they are closely related but distinct. A ratio compares two quantities (like 2 apples to 3 oranges, or 2:3). A proportion is an equation that states two ratios are equal (like 2/3 = 4/6)."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Proportion Calculator | Solve Ratios Instantly</title>
        <meta
          name="description"
          content="Free Proportion Calculator for India. Solve missing variables in ratios and fractions instantly using cross-multiplication with step-by-step math solutions."
        />
        <meta
          name="keywords"
          content="Proportion Calculator, solve proportion online, ratio proportion calculator, cross multiplication calculator, missing fraction solver"
        />
        <meta property="og:title" content="Proportion Calculator | Solve Ratios Instantly" />
        <meta property="og:description" content="Calculate missing variables in any proportion easily. Perfect for students, chefs, engineers, and everyday math." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Proportion Calculator
        </h1>
        <p className="mb-4">
          A proportion is a fundamental mathematical concept that simply states that two ratios (or fractions) are exactly equal to one another. Whether you are scaling up a cooking recipe, calculating dimensions from a blueprint, dealing with currency exchange rates, or studying for competitive exams in India, solving proportions is an essential everyday skill.
        </p>
        <p className="mb-4">
          Our free online <strong>Proportion Calculator</strong> takes the hassle out of finding missing variables in equivalent fractions. By utilizing the proven cross-multiplication method, this tool instantly solves for the unknown value (often called "x") and displays the exact step-by-step calculation.
        </p>
        <p>
          Designed for students, professionals, and general users, this calculator provides clarity without needing complex mathematical formulas. Simply enter the known variables, and let the calculator do the heavy lifting.
        </p>
      </section>

      {/* HOW TO USE - UPDATED BASED ON SCREENSHOTS */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using our proportion calculator is intuitive and fast. It is built around the standard equation format: <strong>A / B = C / D</strong>. Follow these exact steps to calculate your missing variable:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select the variable to find:</strong> Start by using the dropdown menu titled "Which value do you want to find?". You can choose to find <strong>A (Numerator 1)</strong>, <strong>B (Denominator 1)</strong>, <strong>C (Numerator 2)</strong>, or <strong>D (Denominator 2)</strong>.
          </li>
          <li>
            <strong>Enter your known values:</strong> Once you select the unknown variable, input the three known values into their respective fields. You can type the numbers directly into the input boxes or use the convenient sliders to adjust the values.
          </li>
          <li>
            <strong>Instantly view the result:</strong> As you enter the numbers, the calculator works in real-time. The final calculated value for your missing variable will appear prominently in the large green result box on the right.
          </li>
          <li>
            <strong>Review the step-by-step breakdown:</strong> Below the final answer, check the detailed breakdown table. It displays the initial <strong>Equation</strong> (e.g., 2 / 4 = 5 / D), shows the exact <strong>Cross Multiplication</strong> step used to isolate the variable (e.g., 2 × D = 4 × 5), and confirms the final <strong>Result</strong>. This is exceptionally helpful for students needing to double-check their homework!
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Proportion Formula Explained</h2>
        <p className="text-gray-700 mb-4">
          The standard format for writing a proportion is <strong>A / B = C / D</strong> or <strong>A : B = C : D</strong>. 
        </p>
        <p className="text-gray-700 mb-4">
          To solve any proportion where one value is missing, we use a fundamental mathematical rule called <strong>cross-multiplication</strong>. This rule states that in a true proportion, the product of the extremes (the outer numbers) equals the product of the means (the inner numbers).
        </p>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-center text-lg">The Cross-Multiplication Rule</h3>
          <p className="font-mono text-blue-700 text-xl font-bold bg-blue-50 p-4 rounded text-center shadow-sm">
            If A / B = C / D, then A × D = B × C
          </p>
          <div className="mt-6 space-y-3 text-sm text-gray-700">
            <p><strong>To isolate and find a missing variable, you divide the known product by the remaining known number:</strong></p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To find <strong>A</strong>: A = (B × C) / D</li>
              <li>To find <strong>B</strong>: B = (A × D) / C</li>
              <li>To find <strong>C</strong>: C = (A × D) / B</li>
              <li>To find <strong>D</strong>: D = (B × C) / A</li>
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
              <h3 className="font-bold text-gray-900">Example 1: Scaling a Cooking Recipe</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> A recipe for baking a cake requires 2 cups of sugar to serve 5 people. You are hosting a party and need to bake enough cake to serve 15 people. How many cups of sugar do you need?</p>
              <p className="mb-2 font-semibold">Setup the proportion:</p>
              <p className="mb-3 font-mono bg-gray-100 p-2 rounded text-center">2 (cups) / 5 (people) = x (cups) / 15 (people)</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Cross-multiply:</strong> 5 × x = 2 × 15</li>
                <li><strong>Simplify:</strong> 5x = 30</li>
                <li><strong>Divide:</strong> x = 30 / 5</li>
                <li><strong>Result:</strong> x = 6</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: You will need 6 cups of sugar to serve 15 people.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Reading a Map</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are looking at a map of India where the scale says 1 centimeter represents 50 kilometers. If the distance between two cities on the map is 4.5 centimeters, what is the actual distance in real life?</p>
              <p className="mb-2 font-semibold">Setup the proportion:</p>
              <p className="mb-3 font-mono bg-gray-100 p-2 rounded text-center">1 (cm) / 50 (km) = 4.5 (cm) / x (km)</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Cross-multiply:</strong> 1 × x = 50 × 4.5</li>
                <li><strong>Simplify:</strong> x = 225</li>
              </ul>
              <p className="text-blue-700 font-semibold">Result: The actual distance between the two cities is 225 kilometers.</p>
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
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
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
          Proportions are just the beginning of ratio mathematics. Enhance your everyday calculations with our comprehensive suite of online math tools:
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
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss Calculator</a>
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