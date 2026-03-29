import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate the Difference Between Two Dates</h2>
        <p className="mb-4">
          Calculating exactly how many days are between two calendar dates can be tedious because months have different lengths and leap years throw off the math. The most reliable way to calculate date differences manually or in programming is by converting dates into a standard unit of time, like milliseconds or days.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Date Difference Formula</h3>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Total Days = Absolute Value of (End Date - Start Date)</p>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example Calculation (How computers do it):</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Step 1:</strong> Find the exact time of Date 1 in standard units (e.g., hours or milliseconds since a fixed point).</li>
            <li><strong>Step 2:</strong> Find the exact time of Date 2 in the same units.</li>
            <li><strong>Step 3:</strong> Subtract Date 1 from Date 2 to get the difference.</li>
            <li><strong>Step 4:</strong> Divide by 24 (if using hours) to get the total number of exact 24-hour days between the dates.</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Adding or Subtracting Days</h3>
        <p className="text-sm text-gray-700 mb-4">
          When adding days to a date, simply advance the calendar by that exact number. If you exceed the days in that month (e.g., passing 31 in January), you roll over into the next month. Our calculator handles leap years and irregular month lengths automatically!
        </p>
      </section>
    </div>
  );
}