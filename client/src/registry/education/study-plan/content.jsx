import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          Master Your Exam Prep with a Study Plan
        </h2>
        <p className="mb-4 leading-relaxed">
          The biggest challenge in exam preparation isn't the difficulty of the subjects, but the volume of the syllabus. A <strong>Study Plan Calculator</strong> helps you reverse-engineer your deadline. By knowing exactly how many chapters you need to finish each day, you eliminate "procrastination by overwhelm."
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          The Core Planning Formula
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          To create a realistic plan, you must first set aside time for final revisions and mock tests. The formula for your daily target is:
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-calc-lightGray mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-calc-green font-bold">
            Daily Target = Total Units ÷ (Total Days - Revision Days)
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6 text-sm underline">Variable Definitions:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li><strong>Total Units:</strong> The number of chapters, topics, or pages you need to learn.</li>
          <li><strong>Total Days:</strong> Number of days from today until your exam date.</li>
          <li><strong>Revision Days:</strong> The buffer period (usually 15-20% of total time) for final review.</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Practical Example: 30-Day Crunch
        </h3>
        <div className="text-sm space-y-3">
          <p>Let's say you have a <strong>20-chapter</strong> textbook to finish in <strong>30 days</strong>.</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Step 1 (Buffer):</strong> Reserve 5 days for revision. Remaining study days = 25.</li>
            <li><strong>Step 2 (Target):</strong> Divide 20 chapters by 25 days = <strong>0.8 chapters per day</strong>.</li>
            <li><strong>Step 3 (Time):</strong> If you study 4 hours a day, you have 5 hours total to spend on each chapter.</li>
          </ul>
          <p className="mt-2 text-green-700 font-bold italic">Conclusion: You should aim to finish one chapter every 1.25 days.</p>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-bold text-calc-black mb-4">Top Tips for Study Success</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border border-calc-lightGray rounded-lg">
            <h4 className="font-bold text-calc-black mb-1">The 50/10 Rule</h4>
            <p className="text-xs">Study for 50 minutes, then take a 10-minute break. This keeps your brain fresh and prevents burnout.</p>
          </div>
          <div className="p-4 border border-calc-lightGray rounded-lg">
            <h4 className="font-bold text-calc-black mb-1">Active Recall</h4>
            <p className="text-xs">Don't just read. Close the book and try to explain the concept out loud to yourself after each session.</p>
          </div>
          <div className="p-4 border border-calc-lightGray rounded-lg">
            <h4 className="font-bold text-calc-black mb-1">Prioritize Hard Topics</h4>
            <p className="text-xs">Use your "High Energy" hours (usually morning) for the most difficult units in your plan.</p>
          </div>
          <div className="p-4 border border-calc-lightGray rounded-lg">
            <h4 className="font-bold text-calc-black mb-1">Weekly Reviews</h4>
            <p className="text-xs">Spend Sunday evening reviewing what you learned during the week to move info to long-term memory.</p>
          </div>
        </div>
      </section>
    </div>
  );
}