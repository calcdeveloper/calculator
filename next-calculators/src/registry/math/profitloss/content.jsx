import React from 'react';


export default function ProfitLossCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Profit & Loss Calculator | Check Margins & Discounts
  // META DESCRIPTION: Instantly calculate profit, loss, cost price, selling price, and discount margins. Free online calculator tailored for Indian business owners and students.
  // URL SLUG: /calculator/math/profitloss
  // PRIMARY KEYWORD: Profit and loss calculator
  // SECONDARY KEYWORDS: discount calculator online, cost price selling price calculator, profit margin calculator india, calculate loss percentage, wholesale margin calculator, retail discount tool, markup calculator, business profit calculator, math profit loss formula, calculate marked price
  // LONG-TAIL KEYWORDS: how to calculate profit percentage from cost price, online calculator for selling price and discount, profit and loss formula for competitive exams, how to find marked price with discount, calculate profit margin for small business India

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate profit margin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate profit margin, subtract your Cost Price (CP) from the Selling Price (SP) to get the profit amount. Then, divide that profit amount by the Cost Price and multiply by 100 to get the percentage."
        }
      },
      {
        "@type": "Question",
        name: "Is discount calculated on cost price or marked price?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Discounts are always calculated on the Marked Price (MP), also known as the list price or tag price, never on the Cost Price."
        }
      },
      {
        "@type": "Question",
        name: "Can I have a profit and a discount at the same time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! A business owner often marks up the price of an item above the Cost Price to create a Marked Price. They can then offer a discount on that Marked Price to the customer, and as long as the final Selling Price is higher than the original Cost Price, they still make a profit."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between markup and profit margin?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Markup is the percentage added to the Cost Price to determine the Selling Price. Profit margin is the percentage of the Selling Price that represents actual profit. While related, the percentages will be different."
        }
      },
      {
        "@type": "Question",
        name: "How is loss percentage calculated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Loss percentage is calculated by finding the absolute loss amount (Cost Price - Selling Price), dividing it by the original Cost Price, and multiplying the result by 100."
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
          Profit, Loss & Discount Calculator
        </h1>
        <p className="mb-4">
          Whether you are a small business owner in India pricing your retail goods, a trader evaluating margins, or a student preparing for competitive math exams, understanding financial metrics is essential. The core of commercial math relies on the relationship between Cost Price, Selling Price, and Marked Price.
        </p>
        <p className="mb-4">
          Our free online <strong>Profit, Loss & Discount Calculator</strong> is designed to take the guesswork out of your financial calculations. It allows you to instantly compute exact profit margins, loss percentages, and discount rates without having to memorize complex formulas.
        </p>
        <p>
          Simply input your known financial numbers, and the calculator will instantly provide the absolute amounts and percentages. Stop worrying about making calculation errors and start making informed pricing decisions today.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator is designed to handle multiple scenarios depending on what financial information you currently have. Here is a step-by-step guide:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Calculation Mode:</strong> Use the dropdown menu to choose your goal. Options include calculating basic <em>Profit/Loss</em>, finding the <em>Selling Price</em> from margins, finding the <em>Cost Price</em>, or calculating <em>Discounts</em> based on the Marked Price.
          </li>
          <li>
            <strong>Enter Your Values:</strong> Type the exact numbers into the input boxes. For example, to find standard profit, input your <strong>Cost Price (CP)</strong> and <strong>Selling Price (SP)</strong>.
          </li>
          <li>
            <strong>Review the Primary Output:</strong> The calculator instantly highlights your absolute financial result in the main display box (e.g., a net profit of ₹2,500).
          </li>
          <li>
            <strong>Check the Detailed Breakdown:</strong> Look at the table below the main result to see the calculation broken down by metric, including raw numbers, percentage rates, and whether the transaction ultimately resulted in a net profit or loss.
          </li>
        </ol>
      </section>

      {/* KEY TERMS */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Key Financial Terms</h3>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Cost Price (CP):</strong> The total amount of money it costs a manufacturer, trader, or retailer to produce or purchase an item.</li>
          <li><strong>Selling Price (SP):</strong> The final cash amount a buyer pays to purchase the item.</li>
          <li><strong>Marked Price (MP):</strong> The original price printed on an item's tag (MRP or List Price) before any promotional discounts are applied.</li>
        </ul>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Profit & Loss Formulas Explained</h2>
        <p className="text-gray-700 mb-4">
          A <strong>Profit</strong> occurs when the Selling Price is greater than the Cost Price (SP &gt; CP). A <strong>Loss</strong> occurs when the Cost Price is greater than the Selling Price (CP &gt; SP). Here is the math powering your results:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">1. Calculating Profit</h3>
            <p className="text-sm text-gray-600 mb-2">When you sell an item for more than it cost to acquire.</p>
            <div className="space-y-2">
              <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center text-sm">
                Profit = SP - CP
              </p>
              <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center text-sm">
                Profit % = (Profit / CP) × 100
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">2. Calculating Loss</h3>
            <p className="text-sm text-gray-600 mb-2">When you are forced to sell an item for less than it cost.</p>
            <div className="space-y-2">
              <p className="font-mono text-red-700 font-semibold bg-red-50 p-2 rounded text-center text-sm">
                Loss = CP - SP
              </p>
              <p className="font-mono text-red-700 font-semibold bg-red-50 p-2 rounded text-center text-sm">
                Loss % = (Loss / CP) × 100
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Discount Formulas</h3>
          <p className="text-sm mb-4 text-gray-700">
            A discount is a reduction in the Marked Price. The golden rule of commercial math is that <strong>discounts are always calculated on the Marked Price (MP)</strong>, never on the Cost Price.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <p className="font-mono text-blue-700 font-semibold bg-white border border-blue-100 p-2 rounded text-center text-sm shadow-sm">
              Discount = MP - SP
            </p>
            <p className="font-mono text-blue-700 font-semibold bg-white border border-blue-100 p-2 rounded text-center text-sm shadow-sm">
              Discount % = (Discount / MP) × 100
            </p>
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
              <h3 className="font-bold text-gray-900">Example 1: Basic Profit Margin</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A mobile shop owner in Delhi buys a smartphone for ₹10,000 (Cost Price) and sells it to a customer for ₹12,500 (Selling Price). What is the profit percentage?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>CP:</strong> ₹10,000</li>
                <li><strong>SP:</strong> ₹12,500</li>
                <li><strong>Step 1 (Amount):</strong> ₹12,500 - ₹10,000 = ₹2,500 Profit</li>
                <li><strong>Step 2 (Percentage):</strong> (₹2,500 / ₹10,000) × 100 = 25%</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The shop owner made a 25% profit margin.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Applying a Festive Discount</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A pair of shoes has a price tag (Marked Price) of ₹2,000. During a Diwali sale, the store offers a 15% discount. What is the final Selling Price?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>MP:</strong> ₹2,000</li>
                <li><strong>Discount %:</strong> 15%</li>
                <li><strong>Step 1 (Discount Amount):</strong> 15% of ₹2,000 = (15 / 100) × 2000 = ₹300</li>
                <li><strong>Step 2 (Selling Price):</strong> ₹2,000 (MP) - ₹300 (Discount) = ₹1,700</li>
              </ul>
              <p className="text-blue-700 font-semibold">Result: The final Selling Price for the customer is ₹1,700.</p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 3: Calculating a Loss</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You bought a bicycle for ₹5,000. A year later, you decide to sell it second-hand for ₹3,500. What is your loss percentage?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>CP:</strong> ₹5,000</li>
                <li><strong>SP:</strong> ₹3,500</li>
                <li><strong>Step 1 (Loss Amount):</strong> ₹5,000 (CP) - ₹3,500 (SP) = ₹1,500 Loss</li>
                <li><strong>Step 2 (Percentage):</strong> (₹1,500 / ₹5,000) × 100 = 30%</li>
              </ul>
              <p className="text-red-700 font-semibold">Result: You incurred a 30% loss on the sale.</p>
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
          Profit and loss calculations are just the beginning. Enhance your mathematical efficiency with our comprehensive suite of online tools:
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