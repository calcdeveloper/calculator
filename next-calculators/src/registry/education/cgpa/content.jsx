import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding CGPA to Percentage Conversion</h2>
        <p>
          In India, the <strong>Cumulative Grade Point Average (CGPA)</strong> is the average of Grade Points obtained in all subjects. However, most recruitment forms and entrance exams require your score in <strong>Percentage (%)</strong>. Since every board uses a slightly different weightage, using the correct formula is crucial for accuracy.
        </p>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 1: CBSE Standard Formula (9.5 Multiplier)</h3>
        <p className="mb-4 text-sm">
          The Central Board of Secondary Education (CBSE) uses a fixed multiplier of <strong>9.5</strong>. This is because the average marks of the top 5 candidates in previous years were around 95%.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
          <p className="font-mono font-bold text-lg text-blue-700 mb-2">Percentage = CGPA × 9.5</p>
          <p className="text-sm"><strong>Example:</strong> If your CGPA is 8.4:</p>
          <p className="text-sm italic">8.4 × 9.5 = 79.8%</p>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 2: University Specific Formulas</h3>
        <p className="mb-4 text-sm italic text-gray-600">Many technical universities use a 'minus constant' method to account for difficulty levels.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-bold text-gray-900">AKTU / Technical Boards</h4>
            <p className="text-sm">(CGPA - 0.75) × 10</p>
            <p className="text-xs mt-2 text-gray-500">Example: (8.0 - 0.75) × 10 = 72.5%</p>
          </div>
          <div className="bg-white p-4 rounded border border-gray-200">
            <h4 className="font-bold text-gray-900">Mumbai University (MU)</h4>
            <p className="text-sm">(7.1 × CGPA) + 11</p>
            <p className="text-xs mt-2 text-gray-500">Example: (7.1 × 7.0) + 11 = 60.7%</p>
          </div>
        </div>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Frequently Asked Questions (FAQs)</h3>
        <div className="space-y-4">
          <details className="p-4 bg-gray-50 rounded-lg group cursor-pointer">
            <summary className="font-semibold">Why is the CBSE multiplier 9.5 and not 10?</summary>
            <p className="mt-2 text-sm text-gray-600">A 10 multiplier would imply that a 10 CGPA equals 100%. CBSE analyzed previous data and found that a 9.5 multiplier more accurately reflects the actual marks obtained by students across all subjects.</p>
          </details>
          <details className="p-4 bg-gray-50 rounded-lg group cursor-pointer">
            <summary className="font-semibold">Is 7.5 CGPA good?</summary>
            <p className="mt-2 text-sm text-gray-600">Yes, a 7.5 CGPA equates to roughly 71.25%. In most Indian universities, this falls under the "First Class" category.</p>
          </details>
        </div>
      </section>
    </div>
  );
}