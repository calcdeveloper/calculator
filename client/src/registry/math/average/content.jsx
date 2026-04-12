import React from "react";
import { Helmet } from "react-helmet-async";

export default function AverageCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Average Calculator | Find Mean, Median, Mode & Range
  // META DESCRIPTION: Free online Average Calculator for India. Easily calculate the mean, median, mode, and range from any dataset. Perfect for students, teachers, and professionals.
  // URL SLUG: /calculator/math/average
  // PRIMARY KEYWORD: Average calculator
  // SECONDARY KEYWORDS: mean median mode calculator, calculate average online, average formula, how to find the average, range calculator, median calculator, average of numbers, statistic calculator India, maths average tool, dataset average
  // LONG-TAIL KEYWORDS: how to calculate mean median mode and range, find the average of a comma separated list, average marks calculator for cbse students, difference between mean and median with examples, best online average calculator for free

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between Mean, Median, and Mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Mean is the traditional average found by adding all numbers and dividing by the total count. The Median is the exact middle number when the data is sorted from lowest to highest. The Mode is the number that appears most frequently in your dataset.",
        },
      },
      {
        "@type": "Question",
        name: "Which average is best to use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on your data. The Mean is best for data without extreme values. The Median is better when you have outliers (extremely high or low numbers) because it isn't skewed by them. The Mode is useful for finding the most popular or common item.",
        },
      },
      {
        "@type": "Question",
        name: "Can a dataset have more than one Mode?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! If two different numbers appear with the same highest frequency, the dataset is 'bimodal' and has two modes. If more than two appear most frequently, it is 'multimodal'. If no number repeats, there is no mode.",
        },
      },
      {
        "@type": "Question",
        name: "How do I calculate average marks for board exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Simply enter your marks for all subjects separated by commas (e.g., 85, 92, 78, 88, 95) into our calculator. The 'Mean' result will give you your exact average score, and the 'Sum' will give you your total marks.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the Range important?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Range shows the spread of your data. A small range means your numbers are closely packed together (consistent), while a large range means your data is highly variable and spread out.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if there is an even number of values when finding the Median?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If you have an even amount of numbers, there is no single middle number. You must take the two central numbers, add them together, and divide by 2 to find the exact Median.",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Average Calculator | Find Mean, Median, Mode & Range</title>
        <meta
          name="description"
          content="Free online Average Calculator for India. Easily calculate the mean, median, mode, and range from any dataset. Perfect for students, teachers, and professionals."
        />
        <meta
          name="keywords"
          content="Average calculator, mean median mode calculator, calculate average online, average formula, range calculator"
        />
        <meta property="og:title" content="Average Calculator | Find Mean, Median, Mode & Range" />
        <meta property="og:description" content="Calculate the average, median, mode, and range of any dataset instantly with our free online tool." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Average Calculator: Find Mean, Median, Mode & Range
        </h1>
        <p className="mb-4">
          Whether you are a student calculating your CBSE or ICSE board exam percentage, a cricket fan figuring out a batsman's run rate, or a professional analyzing monthly business expenses, finding the average is an essential part of daily life in India.
        </p>
        <p className="mb-4">
          Our free online <strong>Average Calculator</strong> goes beyond basic division. It instantly processes any dataset you provide to calculate the Mean, Median, Mode, and Range. It is designed to handle large datasets, making statistical analysis quick, simple, and 100% accurate.
        </p>
        <p>
          Just type in your numbers, and let the tool do the heavy lifting. No manual sorting or complex math required!
        </p>
      </section>

      {/* WHAT IS THE AVERAGE */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is the Average?</h2>
        <p className="mb-4">
          In statistics, an "average" represents the central or typical value of a dataset. While most people use the word "average" to mean the <strong>Mean</strong>, there are actually three common types of averages used in math: the Mean, the Median, and the Mode.
        </p>
        <p>
          Depending on your data, one type of average might give you a much more accurate picture of reality than the others—especially if your data has extreme outliers!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-green-600 border-l border-r border-b">
            <h3 className="font-bold text-gray-900 mb-2">1. The Mean</h3>
            <p className="text-sm mb-3 text-gray-600">The standard average. It represents the mathematical center of the data.</p>
            <p className="text-sm font-semibold mb-1 text-gray-800">Concept:</p>
            <p className="text-sm bg-gray-50 p-3 rounded border border-gray-100">Add all numbers, then divide by the total count.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-blue-600 border-l border-r border-b">
            <h3 className="font-bold text-gray-900 mb-2">2. The Median</h3>
            <p className="text-sm mb-3 text-gray-600">The literal "middle" number. Best used when extreme numbers skew the Mean.</p>
            <p className="text-sm font-semibold mb-1 text-gray-800">Concept:</p>
            <p className="text-sm bg-gray-50 p-3 rounded border border-gray-100">Sort numbers lowest to highest. Find the exact center.</p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm border-t-4 border-purple-600 border-l border-r border-b">
            <h3 className="font-bold text-gray-900 mb-2">3. The Mode</h3>
            <p className="text-sm mb-3 text-gray-600">The most frequent number. Useful for finding the most common occurrence.</p>
            <p className="text-sm font-semibold mb-1 text-gray-800">Concept:</p>
            <p className="text-sm bg-gray-50 p-3 rounded border border-gray-100">Look for the number that repeats the most often.</p>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using our tool is incredibly straightforward. Just follow these steps to process your dataset:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Enter Your Numbers:</strong> In the input box, type out all the numbers in your dataset. You must separate each number with a comma (for example: <code>12, 15, 12, 18, 22, 25, 15, 12</code>).
          </li>
          <li>
            <strong>Automatic Processing:</strong> You do not need to click calculate; the tool processes your data instantly as you type.
          </li>
          <li>
            <strong>Read the Primary Results:</strong> The large green boxes on the right will display the most sought-after metrics: The <strong>Average (Mean)</strong> and the <strong>Median</strong>.
          </li>
          <li>
            <strong>Review Detailed Statistics:</strong> Below the main results, a detailed table breaks down your dataset further. It provides:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-600">
              <li><strong>Count (n):</strong> The total amount of numbers you entered.</li>
              <li><strong>Sum:</strong> The total value of all numbers added together.</li>
              <li><strong>Mode:</strong> The number(s) that appear most frequently.</li>
              <li><strong>Minimum & Maximum Values:</strong> The smallest and largest numbers in your set.</li>
              <li><strong>Range:</strong> The difference between the maximum and minimum values.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas</h2>
        <p className="mb-6 text-gray-700">
          If you want to understand the math behind the machine, here are the simple formulas used to calculate these statistical values.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-2">1. Formula for Mean</h3>
            <p className="mb-3 text-gray-700">The sum of all observations divided by the total number of observations.</p>
            <p className="bg-gray-50 p-3 rounded font-mono text-sm border border-gray-100 inline-block">
              Mean = (Sum of all values) ÷ (Total count of values)
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-2">2. Formula for Median</h3>
            <p className="mb-3 text-gray-700">First, arrange the data in ascending order (smallest to largest).</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 bg-gray-50 p-4 rounded text-sm border border-gray-100">
              <li>If the total count (n) is <strong>odd</strong>: The Median is the exact middle value.</li>
              <li>If the total count (n) is <strong>even</strong>: The Median is the sum of the two middle values divided by 2.</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-lg text-gray-900 mb-2">3. Formula for Range</h3>
            <p className="mb-3 text-gray-700">The Range measures the dispersion of your data.</p>
            <p className="bg-gray-50 p-3 rounded font-mono text-sm border border-gray-100 inline-block">
              Range = Highest Value - Lowest Value
            </p>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Step-by-Step Examples</h2>
        <p className="mb-6 text-gray-700">
          Let's look at a few real-life scenarios to see how mean, median, mode, and range are calculated manually.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Student Exam Marks</h3>
            </div>
            <div className="p-5 bg-white">
              <p className="mb-3 text-gray-700">
                <strong>Scenario:</strong> A student scores the following marks out of 100 in 5 subjects: <strong>75, 82, 90, 75, 88</strong>.
              </p>
              <ul className="list-none space-y-2 text-sm text-gray-800 bg-gray-50 p-4 rounded border border-gray-100 font-mono">
                <li><strong>Dataset:</strong> 75, 82, 90, 75, 88</li>
                <li><strong>Count (n):</strong> 5</li>
                <li><strong>Sum:</strong> 75 + 82 + 90 + 75 + 88 = 410</li>
                <li className="text-green-700 font-bold">Mean (Average): 410 ÷ 5 = 82</li>
                <li className="border-t border-gray-200 pt-2 mt-2"><strong>Sorted Data:</strong> 75, 75, 82, 88, 90</li>
                <li className="text-blue-700 font-bold">Median (Middle value): 82</li>
                <li className="text-purple-700 font-bold">Mode (Most frequent): 75</li>
                <li className="text-gray-700 font-bold">Range (Max - Min): 90 - 75 = 15</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Daily Expenses (Even Dataset)</h3>
            </div>
            <div className="p-5 bg-white">
              <p className="mb-3 text-gray-700">
                <strong>Scenario:</strong> You track your lunch expenses for 6 days in Rupees: <strong>120, 150, 100, 120, 200, 180</strong>.
              </p>
              <ul className="list-none space-y-2 text-sm text-gray-800 bg-gray-50 p-4 rounded border border-gray-100 font-mono">
                <li><strong>Dataset:</strong> 120, 150, 100, 120, 200, 180</li>
                <li><strong>Count (n):</strong> 6 (Even number)</li>
                <li><strong>Sum:</strong> 870</li>
                <li className="text-green-700 font-bold">Mean (Average): 870 ÷ 6 = 145 Rupees</li>
                <li className="border-t border-gray-200 pt-2 mt-2"><strong>Sorted Data:</strong> 100, 120, 120, 150, 180, 200</li>
                <li><strong>Middle Values:</strong> 120 and 150</li>
                <li className="text-blue-700 font-bold">Median: (120 + 150) ÷ 2 = 135 Rupees</li>
                <li className="text-purple-700 font-bold">Mode: 120 Rupees</li>
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
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Statistics is just one branch of mathematics. Explore our comprehensive suite of free math and geometry calculators below:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Calculator</a>
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM Calculator</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm Calculator</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Increase/Decrease</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Calculator</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss Calculator</a>
        </div>
      </section>
    </div>
  );
}