import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Time Duration (Hours Worked)</h2>
        <p className="mb-4">
          Calculating the difference between two times is an essential skill for tracking work hours, payroll, and event planning. Because time is based on a 60-minute hour (not a decimal system of 100), standard subtraction doesn't always work smoothly.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Military Time Method</h3>
        <p className="text-sm mb-4">
          The easiest way to calculate time duration manually is by converting AM/PM times into 24-hour "military time."
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Step 1: Convert both times to 24-hour format.</p>
          <p className="text-sm italic text-gray-700 mb-4">Step 2: Subtract the Start Time from the End Time.</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Scenario:</strong> You started work at 8:45 AM and finished at 5:15 PM.</li>
            <li><strong>Step 1:</strong> Convert 5:15 PM to 24-hour time by adding 12 hours: <strong>17:15</strong>.</li>
            <li><strong>Step 2:</strong> Subtract the hours: 17 - 8 = 9 hours.</li>
            <li><strong>Step 3:</strong> Subtract the minutes: 15 - 45. Since you can't subtract 45 from 15, borrow 1 hour (60 minutes) from the hours column. <br/>New math: (8 hours, 75 minutes) - (8 hours, 45 minutes).</li>
            <li><strong>Result:</strong> 0 hours and 30 minutes. Wait, remember the earlier hour math? The total is actually <strong>8 hours and 30 minutes</strong> worked.</li>
          </ul>
        </div>
      </section>
      
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">How to Convert Minutes to Decimals for Payroll</h3>
        <p className="text-sm text-gray-700 mb-2">
          If you need to multiply your hours worked by an hourly wage, you must convert the minutes into a decimal. Do not just put a decimal point! 
        </p>
        <p className="text-sm italic text-gray-700 mb-2">Formula: Minutes ÷ 60 = Decimal</p>
        <p className="text-sm text-gray-700">
          <strong>Example:</strong> 8 hours and 30 minutes is NOT 8.30. It is 30 ÷ 60 = 0.5. So your payroll hours are <strong>8.5 hours</strong>.
        </p>
      </section>
    </div>
  );
}