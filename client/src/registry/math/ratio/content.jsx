import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function RatioCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Ratio Calculator | Simplify & Solve Ratios Instantly
  // META DESCRIPTION: Free online Ratio Calculator for India. Instantly simplify ratios, convert to fractions, decimals, and percentages, and find equivalent ratios step-by-step.
  // URL SLUG: /calculator/math/ratio
  // PRIMARY KEYWORD: Ratio Calculator
  // SECONDARY KEYWORDS: simplify ratio online, equivalent ratio calculator, ratio to fraction, ratio to percentage, math ratio solver, ratio simplifier, calculate ratio, ratio formula, online math tools india
  // LONG-TAIL KEYWORDS: how to simplify ratios step by step, online calculator to find equivalent ratios, convert ratio to percentage calculator, how to find the ratio of two numbers, what is the formula for simplifying a ratio

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is a ratio in mathematics?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ratio is a mathematical relationship that compares the quantities of two different numbers or things. It essentially tells you how much of one thing there is compared to another. For example, if a recipe calls for 2 cups of water for every 1 cup of rice, the ratio of water to rice is 2:1."
        }
      },
      {
        "@type": "Question",
        name: "How do you simplify a ratio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simplifying a ratio is exactly like simplifying a fraction. You find the Greatest Common Divisor (GCD)—the highest number that divides exactly into both parts of the ratio—and divide both sides by that number. For example, the ratio 10:15 can be simplified by dividing both sides by 5, resulting in 2:3."
        }
      },
      {
        "@type": "Question",
        name: "How do I convert a ratio to a percentage?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert a ratio (A:B) to a percentage, first divide A by B to get a decimal. Then, multiply that decimal by 100 and add a percent sign. For example, a 1:2 ratio is 1 divided by 2 = 0.5, which is 50%."
        }
      },
      {
        "@type": "Question",
        name: "Can a ratio contain decimals or fractions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, ratios can involve decimals or fractions. However, standard mathematical practice prefers ratios to be expressed in whole integers. Our calculator helps simplify complex numbers into their standard whole-number integer format."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a ratio and a proportion?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A ratio is a comparison of two numbers (like 3:4). A proportion is an equation that states that two different ratios are exactly equal to each other (like 3:4 = 6:8). You use ratios to compare, and proportions to solve for missing variables when scaling up or down."
        }
      },
      {
        "@type": "Question",
        name: "How are equivalent ratios calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Equivalent ratios are calculated by multiplying or dividing both sides of an existing ratio by the exact same value. For instance, if you have a ratio of 1:2, multiplying both sides by 3 gives you the equivalent ratio of 3:6."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Ratio Calculator | Simplify & Solve Ratios Instantly</title>
        <meta
          name="description"
          content="Free online Ratio Calculator for India. Instantly simplify ratios, convert to fractions, decimals, and percentages, and find equivalent ratios step-by-step."
        />
        <meta
          name="keywords"
          content="Ratio Calculator, simplify ratio online, equivalent ratio calculator, ratio to fraction, ratio to percentage, math ratio solver"
        />
        <meta property="og:title" content="Ratio Calculator | Simplify & Solve Ratios Instantly" />
        <meta property="og:description" content="Simplify ratios, find equivalent values, and convert to fractions and percentages instantly. Perfect for students, chefs, and professionals." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Ratio Calculator
        </h1>
        <p className="mb-4">
          A ratio is one of the most practical mathematical concepts used in everyday life. It compares the relationship between two quantities, showing how many times one value is contained within another. Whether you are a student in India learning basic algebra, a home chef scaling up a family recipe, an architect adjusting blueprints, or a business owner calculating profit margins, understanding ratios is absolutely essential.
        </p>
        <p className="mb-4">
          Our free online <strong>Ratio Calculator</strong> takes the complexity out of mathematical comparisons. Instead of manually trying to find common denominators or calculating percentages, this tool instantly processes your numbers to provide comprehensive results. 
        </p>
        <p>
          With a few simple inputs, you can simplify complex numbers to their smallest whole integers, convert ratios into standard fractions and decimals, and generate a ready-to-use list of equivalent ratios for seamless scaling.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using our interface is incredibly intuitive. It is designed to give you all possible variations and conversions of your ratio simultaneously. Here is how to use it:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Enter Value A:</strong> In the input box labeled <strong>"A"</strong>, type in the first number of your ratio (for example, <em>50</em>).
          </li>
          <li>
            <strong>Enter Value B:</strong> In the input box labeled <strong>"B"</strong>, type in the second number of your ratio (for example, <em>100</em>).
          </li>
          <li>
            <strong>Review the Primary Outputs:</strong> The calculator instantly processes your inputs and displays four key conversions directly below:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li><strong>Simplified Ratio:</strong> Reduces your input to its lowest possible integer format (e.g., <em>1 : 2</em>).</li>
              <li><strong>Ratio as Fraction:</strong> Displays the ratio mathematically as a standard fraction (e.g., <em>1 / 2</em>).</li>
              <li><strong>Ratio as Decimal:</strong> Shows the result of dividing A by B (e.g., <em>0.5</em>).</li>
              <li><strong>Ratio as Percentage:</strong> Converts the decimal value into an easy-to-read percentage (e.g., <em>50%</em>).</li>
            </ul>
          </li>
          <li>
            <strong>Explore Equivalent Ratios:</strong> Scroll down to the <strong>"Equivalent Ratios"</strong> section. The calculator automatically generates a helpful list of scaled ratios by multiplying your original input by common factors (Multiply by 2, 3, 4, 5, and 10), which is perfect for scaling recipes or dimensions!
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ratio Formulas and Mathematics Explained</h2>
        <p className="text-gray-700 mb-4">
          While the calculator automates the process, understanding the underlying mathematics empowers you to solve problems manually. Here is how ratio operations work step-by-step:
        </p>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <h3 className="font-bold text-gray-900 mb-4 text-lg">1. Simplifying Ratios</h3>
          <p className="text-sm text-gray-700 mb-3">
            To simplify a ratio (A : B), you must reduce both numbers to their smallest possible integer forms without changing the proportional relationship. You do this by finding the <strong>Greatest Common Divisor (GCD)</strong>.
          </p>
          <div className="bg-blue-50 p-4 rounded border border-blue-100 font-mono text-center text-blue-900 font-bold mb-4">
            Simplified Ratio = (A ÷ GCD) : (B ÷ GCD)
          </div>
          <p className="text-sm text-gray-700 mb-4">
            <em>Example:</em> To simplify 50 : 100, the highest number that divides evenly into both is 50 (the GCD). <br/>
            (50 ÷ 50) : (100 ÷ 50) = <strong>1 : 2</strong>
          </p>

          <h3 className="font-bold text-gray-900 mb-4 text-lg border-t pt-5">2. Converting to Percentages and Decimals</h3>
          <p className="text-sm text-gray-700 mb-3">
            Ratios, fractions, decimals, and percentages are all different ways of expressing the same mathematical relationship.
          </p>
          <ul className="space-y-4 text-sm text-gray-700">
            <li className="bg-gray-50 p-4 rounded border border-gray-100">
              <strong className="text-gray-900 block mb-1">To find the Decimal:</strong>
              Simply divide the first number (A) by the second number (B).<br/>
              <span className="font-mono bg-white px-2 py-1 border rounded inline-block mt-2">Decimal = A ÷ B</span>
            </li>
            <li className="bg-gray-50 p-4 rounded border border-gray-100">
              <strong className="text-gray-900 block mb-1">To find the Percentage:</strong>
              Take your decimal result and multiply it by 100.<br/>
              <span className="font-mono bg-white px-2 py-1 border rounded inline-block mt-2">Percentage = (A ÷ B) × 100</span>
            </li>
          </ul>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Scaling a Recipe (Equivalent Ratios)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You have a perfect lemonade recipe that uses 50ml of lemon juice (A) and 100ml of water (B). You want to make a much larger batch for a party using the same flavor profile.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Initial Ratio:</strong> 50 : 100</li>
                <li><strong>Goal:</strong> Multiply by a factor of 10 to make a party-sized batch.</li>
                <li><strong>Multiply both sides:</strong> (50 × 10) : (100 × 10)</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The equivalent ratio is 500 : 1000 (You need 500ml lemon juice and 1000ml water).</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Analyzing Test Scores (Ratio to Percentage)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> A student answers 45 out of 60 questions correctly on a math exam. You want to express this ratio (45:60) as a final percentage grade.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Initial Ratio:</strong> 45 : 60</li>
                <li><strong>Convert to Decimal:</strong> 45 ÷ 60 = 0.75</li>
                <li><strong>Convert to Percentage:</strong> 0.75 × 100</li>
              </ul>
              <p className="text-blue-700 font-semibold">Result: The student scored 75% on the exam.</p>
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
          Mastering ratios is crucial, but it's just one piece of the mathematical puzzle. Expand your capabilities with our extensive suite of free, specialized calculators designed for students, professionals, and everyday users in India:
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
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}