import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function PercentageCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Percentage Calculator | Free Online % Calculator India
  // META DESCRIPTION: Easily calculate percentages online. Free percentage calculator for Indian users to find marks %, discount values, and percent increase or decrease.
  // URL SLUG: /calculator/math/percentage
  // PRIMARY KEYWORD: Percentage Calculator
  // SECONDARY KEYWORDS: percent calculator online, calculate percentage, find % of a number, percentage increase calculator, discount calculator India, percentage formula, what percent is X of Y, math percentage tool, marks percentage calculator, percentage difference
  // LONG-TAIL KEYWORDS: how to calculate percentage of marks, formula to find percentage of a number, what is 20 percent of 100, calculate percentage difference between two numbers, free percentage calculator online India

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I calculate the percentage of marks?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate your marks percentage, divide the marks you obtained by the total maximum marks, and then multiply the result by 100. For example, if you scored 450 out of 500 in your board exams, the calculation is (450 / 500) × 100 = 90%."
        }
      },
      {
        "@type": "Question",
        name: "What is the formula to calculate a percentage discount?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To find the discount amount, multiply the original price by the discount percentage divided by 100. For example, a 15% discount on a ₹2000 item is calculated as (15 / 100) × 2000 = ₹300. Subtract this from the original price to get the final price (₹1700)."
        }
      },
      {
        "@type": "Question",
        name: "How do I calculate a percentage increase?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To calculate a percentage increase, subtract the original value from the new value to find the difference. Then, divide that difference by the original value and multiply by 100. For instance, if your rent goes from ₹10,000 to ₹11,000, the increase is ((11,000 - 10,000) / 10,000) × 100 = 10%."
        }
      },
      {
        "@type": "Question",
        name: "Can percentages be greater than 100?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, percentages can exceed 100%. A percentage over 100 simply means an amount larger than the original whole. For example, if a company's profits double from the previous year, they have experienced a 100% increase, meaning their new profit is 200% of the original profit."
        }
      },
      {
        "@type": "Question",
        name: "How is percentage used in calculating GST in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GST (Goods and Services Tax) is calculated as a percentage of the base price of a good or service. If a product costs ₹1,000 and falls under the 18% GST slab, you calculate 18% of ₹1,000 (which is ₹180) and add it to the base price, making the total billing amount ₹1,180."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Percentage Calculator | Free Online % Calculator India</title>
        <meta
          name="description"
          content="Easily calculate percentages online. Free percentage calculator for Indian users to find marks %, discount values, and percent increase or decrease."
        />
        <meta
          name="keywords"
          content="Percentage Calculator, percent calculator online, calculate percentage, find % of a number, percentage increase calculator, discount calculator India"
        />
        <meta property="og:title" content="Percentage Calculator | Free Online % Calculator India" />
        <meta property="og:description" content="Calculate percentages instantly. Find what % one number is of another, percentage growth, and everyday discount calculations." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Percentage Calculator
        </h1>
        <p className="mb-4">
          The word <strong>percentage</strong> comes from the Latin phrase <em>per centum</em>, which literally translates to "by the hundred." It is a mathematical way of expressing a number as a fraction of 100. Whether you are an Indian student calculating your CBSE or university exam marks, a shopper trying to figure out the final price during a Diwali mega sale, or a professional calculating profit margins and GST, understanding percentages is an unavoidable part of daily life.
        </p>
        <p className="mb-4">
          Our free online <strong>Percentage Calculator</strong> is designed to take the guesswork out of these everyday math problems. You do not need to memorize complex formulas or perform manual long division. Simply input your numbers, and the calculator will instantly provide the exact percentage, whether you are trying to find a specific percent of a number, figure out what percentage one value is compared to another, or calculate business growth.
        </p>
        <p>
          This tool is perfect for general users, students, accountants, and business owners looking for quick, error-free results.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Percentage Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator features a highly intuitive interface with adjustable sliders and drop-down menus. Here is a step-by-step guide to using it:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Your Calculation Goal:</strong> At the top left, you will see a dropdown menu labeled <em>"What do you want to calculate?"</em>. Click it to choose from three main modes:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>What is X% of Y?</strong> (Best for calculating discounts, tips, or GST).</li>
              <li><strong>X is what % of Y?</strong> (Best for calculating exam marks or test scores).</li>
              <li><strong>% Increase / Decrease</strong> (Best for calculating salary hikes or inflation).</li>
            </ul>
          </li>
          <li>
            <strong>Input Value (X) and Value (Y):</strong> Enter your specific numbers into the respective fields. You can either type the numbers directly into the text boxes or use the horizontal slider bars to adjust the values dynamically.
          </li>
          <li>
            <strong>View the Result:</strong> Look at the right side of the screen. Inside the large green block, your final answer will appear instantly. For example, if you ask "What is 20% of 100?", the bold text will clearly state <strong>20</strong>.
          </li>
          <li>
            <strong>Understand the Math:</strong> Below the result, you will find a helpful reference table. It breaks down your exact calculation goal, shows the raw <em>Mathematical Formula</em> used, and provides an <em>Everyday Example</em> so you can understand the context of your calculation.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Percentage Formulas Explained</h2>
        <p className="text-gray-700 mb-4">
          While the tool does the math for you, understanding the core formulas can help you perform quick mental math in the future. Here are the three primary formulas used in our calculator:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-5 rounded-lg border-t-4 border-green-600 border-l border-r border-b shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">1. Finding a % of a Number</h3>
            <p className="text-sm text-gray-600 mb-3">
              Use this when you know the total amount and the percentage, but need the specific value. (e.g., Finding a 10% discount on a price).
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 text-center font-bold">
              X / 100 × Y
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-t-4 border-blue-600 border-l border-r border-b  shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">2. Finding What % One Number is of Another</h3>
            <p className="text-sm text-gray-600 mb-3">
              Use this to compare a part against a whole. It is most commonly used for test scores or grading.
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 text-center font-bold">
              (X / Y) × 100
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border-t-4 border-purple-600 border-l border-r border-b shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">3. Percentage Increase or Decrease</h3>
            <p className="text-sm text-gray-600 mb-3">
              Use this to find the rate of change between an old value and a new value over time, such as tracking inflation or a salary hike.
            </p>
            <div className="bg-gray-50 p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 text-center font-bold">
              ((Y - X) / |X|) × 100
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Examples for Indian Users</h2>
        <p className="mb-6 text-gray-700">
          Let’s apply these formulas to common, real-world situations you might encounter in everyday life.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Calculating Board Exam Marks (X is what % of Y?)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A student scores 435 marks out of a total of 500 in their Class 12 exams. What is their final percentage?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Value X (Part):</strong> 435</li>
                <li><strong>Value Y (Whole):</strong> 500</li>
                <li><strong>Formula applied:</strong> (435 / 500) × 100</li>
                <li><strong>Step 1:</strong> 435 ÷ 500 = 0.87</li>
                <li><strong>Step 2:</strong> 0.87 × 100 = <strong>87%</strong></li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The student secured 87%.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Shopping Discount (What is X% of Y?)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A smartphone is priced at ₹25,000. The store is offering a flat 15% festival discount. How much money do you save?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Percentage (X):</strong> 15%</li>
                <li><strong>Original Price (Y):</strong> 25,000</li>
                <li><strong>Formula applied:</strong> 15 / 100 × 25,000</li>
                <li><strong>Step 1:</strong> 15 ÷ 100 = 0.15</li>
                <li><strong>Step 2:</strong> 0.15 × 25,000 = <strong>3,750</strong></li>
              </ul>
              <p className="text-green-700 font-semibold">Result: You save ₹3,750. The final price to pay is ₹21,250.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 3: Salary Appraisal (% Increase)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A software engineer's monthly salary was increased from ₹50,000 to ₹62,000. What is the percentage hike?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Old Value (X):</strong> 50,000</li>
                <li><strong>New Value (Y):</strong> 62,000</li>
                <li><strong>Formula applied:</strong> ((62,000 - 50,000) / 50,000) × 100</li>
                <li><strong>Step 1:</strong> Difference = 12,000</li>
                <li><strong>Step 2:</strong> 12,000 ÷ 50,000 = 0.24</li>
                <li><strong>Step 3:</strong> 0.24 × 100 = <strong>24%</strong></li>
              </ul>
              <p className="text-green-700 font-semibold">Result: The salary hike is 24%.</p>
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
          Mastering percentages is just the beginning. Whether you are dealing with business finances, school assignments, or daily budgets, we have a complete suite of calculators to assist you:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Basic Average</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Calculator</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Calculator</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Inc/Dec</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutations</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion</a>
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
