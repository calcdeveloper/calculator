import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          Understanding Time and Work Calculations
        </h2>
        <p className="mb-4 leading-relaxed">
          Time and work problems are a staple in mathematics, quantitative aptitude tests, and real-world project management. The core concept revolves around understanding <strong>efficiency</strong>: the amount of work a person or machine can complete in a single unit of time.
        </p>
        <p className="mb-4 leading-relaxed">
          When two people work together, their combined efficiency is simply the sum of their individual efficiencies. This allows them to finish the total work in significantly less time. Below are the two most popular methods to calculate this.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Method 1: The Unitary Method (Fraction Method)
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          This method focuses on finding out how much work is done in exactly one day (or one hour/minute). If someone can finish a job in "x" days, their one-day work is 1/x.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-calc-lightGray mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-calc-green font-bold">
            Together Time = (A × B) ÷ (A + B)
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Step-by-Step Example:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li>Assume <strong>Person A</strong> takes 10 days to paint a house. (1 day's work = 1/10)</li>
          <li>Assume <strong>Person B</strong> takes 15 days to paint the same house. (1 day's work = 1/15)</li>
          <li>Combined 1 day's work: (1/10) + (1/15) = (3/30) + (2/30) = 5/30 = 1/6</li>
          <li>Since they do 1/6 of the work in one day, total time taken together is <strong>6 days</strong>.</li>
          <li>Using the quick formula: (10 × 15) ÷ (10 + 15) = 150 ÷ 25 = <strong>6 days</strong>.</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Method 2: The L.C.M Method (Efficiency Method)
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          The Least Common Multiple (LCM) method is heavily preferred by competitive exam aspirants because it avoids fractions entirely. You assume the "Total Work" to be the LCM of the time taken by all individuals.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-blue-200 mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-blue-600 font-bold">
            Total Time = (Total Work / Combined Efficiency)
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Step-by-Step Example:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5 text-gray-800">
          <li>Let Person A take 10 days and Person B take 15 days.</li>
          <li>Find the LCM of 10 and 15, which is <strong>30</strong>. Let's say the Total Work is 30 units (e.g., making 30 chairs).</li>
          <li><strong>A's Efficiency:</strong> 30 units ÷ 10 days = 3 chairs/day.</li>
          <li><strong>B's Efficiency:</strong> 30 units ÷ 15 days = 2 chairs/day.</li>
          <li><strong>Combined Efficiency:</strong> 3 + 2 = 5 chairs/day.</li>
          <li><strong>Total Time:</strong> Total Work (30) ÷ Combined Efficiency (5) = <strong>6 days</strong>.</li>
        </ul>
      </section>
    </div>
  );
}