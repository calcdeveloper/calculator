import React from 'react';


export default function PercentageIncreaseDecreaseContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Percentage Increase & Decrease Calculator | Find Change Fast
  // META DESCRIPTION: Free Percentage Increase & Decrease Calculator for India. Quickly find percentage change, growth rates, and discounts with step-by-step formulas and examples.
  // URL SLUG: /calculator/math/percentage-inc-dec
  // PRIMARY KEYWORD: Percentage Increase & Decrease Calculator
  // SECONDARY KEYWORDS: percentage change calculator, percent increase calculator, percentage drop calculator, calculate percentage difference, salary hike percentage calculator, discount calculator online, growth rate calculator, formula for percentage change, finding final value from percentage
  // LONG-TAIL KEYWORDS: how to calculate percentage increase in salary, calculate percentage decrease between two numbers online, formula to find percentage change with steps, how to add 18% GST to a price

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you calculate percentage increase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate percentage increase, subtract the initial value from the final value to find the absolute difference. Then, divide that difference by the initial value, and multiply by 100 to get the percentage."
        }
      },
      {
        "@type": "Question",
        name: "Can a percentage increase be more than 100%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, absolutely. If a value doubles, that is a 100% increase. If a value triples, it is a 200% increase. There is no mathematical limit to how high a percentage increase can be."
        }
      },
      {
        "@type": "Question",
        name: "Can a percentage decrease be more than 100%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In practical terms, no. A 100% decrease means the value has dropped to exactly zero. A decrease of more than 100% would result in a negative number, which rarely applies outside of specific accounting or scientific contexts."
        }
      },
      {
        "@type": "Question",
        name: "If a price drops by 50% and then increases by 50%, is it back to the original price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. If a ₹1,000 item drops by 50%, it becomes ₹500. If that ₹500 item then increases by 50% (which is ₹250), the new price is ₹750, not the original ₹1,000."
        }
      },
      {
        "@type": "Question",
        name: "Why is the initial value always used in the denominator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because percentage change is a measure of growth or decline relative to where you started. Dividing by the initial value shows how large the change is compared to your original baseline."
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
          Percentage Increase & Decrease Calculator
        </h1>
        <p className="mb-4">
          Whether you are tracking business revenue, analyzing stock market trends on the Nifty 50, checking your annual salary hike, or calculating a Diwali festival discount, understanding <strong>percentage change</strong> is an essential daily skill. A percentage change represents the degree of growth or decline over time, expressed as a fraction of 100.
        </p>
        <p className="mb-4">
          Our free online <strong>Percentage Increase & Decrease Calculator</strong> takes the hassle out of manual math. Designed for general users, students, and business owners in India, this tool instantly computes exact percentage differences and finds final values after a percentage markup or discount. 
        </p>
        <p>
          You no longer need to struggle with complex formulas. Just input your initial and final numbers, and the calculator will provide the precise change, the absolute difference, and a clear step-by-step breakdown.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator features a simple, user-friendly interface. Follow these steps to find your required percentage change or final value instantly:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select What You Want to Calculate:</strong> At the top, use the dropdown menu to select your goal. You can choose:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>Find Percentage Change:</strong> If you have an initial and final number and want to know the percentage difference.</li>
              <li><strong>Find Final Value:</strong> If you have a starting number and want to add or subtract a specific percentage (like adding GST).</li>
            </ul>
          </li>
          <li>
            <strong>Enter Initial Value (V₁):</strong> Input your starting amount. You can type this into the box or use the slider.
          </li>
          <li>
            <strong>Enter Final Value (V₂):</strong> Input your ending amount. 
          </li>
          <li>
            <strong>View the Result:</strong> The large green box will instantly display the <strong>Percentage Change</strong> (e.g., "25% Increase"). 
          </li>
          <li>
            <strong>Check the Details:</strong> Below the main result, you will see the <strong>Absolute Difference</strong>. Additionally, a detailed metric table breaks down your Initial Value, Final Value, Difference, Direction of change, and the exact Calculated Percentage.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Percentage Change Formula</h2>
        <p className="text-gray-700 mb-4">
          To find the percentage increase or decrease between two numbers manually, you need to calculate the raw difference between your Final Value and Initial Value, divide that result by the absolute Initial Value, and then multiply by 100 to convert it to a percentage.
        </p>
        
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mt-4">
          <p className="font-mono text-center text-lg mb-6 text-green-700 font-bold bg-green-50 p-4 rounded border border-green-100">
            Percentage Change = [ (Final Value - Initial Value) / |Initial Value| ] × 100
          </p>
          <h3 className="font-semibold text-gray-900 mb-2">Understanding the Output:</h3>
          <ul className="list-disc pl-6 space-y-3 text-gray-700 text-sm">
            <li><strong>Positive Result (+):</strong> If the calculated result is a positive number, it represents a <strong>Percentage Increase</strong> (growth, profit, markup).</li>
            <li><strong>Negative Result (-):</strong> If the calculated result is a negative number, it represents a <strong>Percentage Decrease</strong> (loss, discount, decline).</li>
            <li><strong>Absolute Difference:</strong> This is simply the Final Value minus the Initial Value, showing the exact numerical change without the percentage format.</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 mt-6">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">Formula for Finding a Final Value</h3>
          <p className="text-sm text-gray-700 mb-3">
            If you already know your initial value and the percentage it will change by, use these simpler formulas:
          </p>
          <ul className="space-y-2 text-sm text-gray-800 font-medium">
            <li><strong>For an Increase:</strong> Final Value = Initial Value + (Initial Value × (Percentage / 100))</li>
            <li><strong>For a Decrease:</strong> Final Value = Initial Value - (Initial Value × (Percentage / 100))</li>
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
              <h3 className="font-bold text-gray-900">Example 1: Salary Hike (Percentage Increase)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You are an IT professional in Bengaluru. Your monthly salary was ₹50,000, and after your annual review, it was raised to ₹60,000. What is your percentage increase?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Initial Value (V₁):</strong> 50,000</li>
                <li><strong>Final Value (V₂):</strong> 60,000</li>
                <li><strong>Step 1 (Find Difference):</strong> 60,000 - 50,000 = 10,000</li>
                <li><strong>Step 2 (Divide by Initial):</strong> 10,000 / 50,000 = 0.20</li>
                <li><strong>Step 3 (Multiply by 100):</strong> 0.20 × 100 = 20</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: You received a 20% salary increase.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Festival Discount (Percentage Decrease)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You are buying a new smartphone during a Diwali sale. The original price is ₹25,000, but the flash sale price drops it to ₹20,000. What is the discount percentage?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Initial Value (V₁):</strong> 25,000</li>
                <li><strong>Final Value (V₂):</strong> 20,000</li>
                <li><strong>Step 1 (Find Difference):</strong> 20,000 - 25,000 = -5,000</li>
                <li><strong>Step 2 (Divide by Initial):</strong> -5,000 / 25,000 = -0.20</li>
                <li><strong>Step 3 (Multiply by 100):</strong> -0.20 × 100 = -20</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The smartphone has a 20% discount (decrease).</p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 3: Adding GST (Finding Final Value)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You are a freelancer billing a client. Your base service fee is ₹5,000, and you need to add an 18% GST on top of it. What is the final invoice amount?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Initial Value:</strong> 5,000</li>
                <li><strong>Percentage Increase:</strong> 18%</li>
                <li><strong>Step 1 (Calculate Percentage Amount):</strong> 5,000 × (18 / 100) = 900</li>
                <li><strong>Step 2 (Add to Initial Value):</strong> 5,000 + 900 = 5,900</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The final value to bill the client is ₹5,900.</p>
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
          Enhance your mathematical calculations with our comprehensive suite of online tools tailored for speed and accuracy:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average (Mean/Median/Mode)</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Math</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Math</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Math</a>
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
