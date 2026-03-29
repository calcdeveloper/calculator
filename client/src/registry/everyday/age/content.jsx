import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Your Exact Age Manually</h2>
        <p className="mb-4">
          Calculating age might seem simple, but because months have different numbers of days (28, 30, or 31) and leap years add an extra day to February, it requires a specific mathematical approach called the <strong>Subtraction with Borrowing</strong> method.
        </p>
        <p>
          This method is the standard used for Indian Government job applications (like SSC, UPSC, and Banking) to determine eligibility based on a specific cutoff date.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Formula: Subtraction Method</h3>
        <p className="text-sm mb-4">To find your age, you subtract your Date of Birth (DOB) from the current date or a specific target date. You must calculate in this order: <strong>Days → Months → Years.</strong></p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <h4 className="font-bold text-gray-900 mb-2">Step-by-Step Example:</h4>
          <p className="text-sm mb-2 text-gray-600 italic">Target Date: 15-March-2024 | DOB: 25-June-1995</p>
          
          <ul className="text-sm space-y-4 text-gray-700 mt-4">
            <li>
              <strong>Step 1: Subtract Days</strong><br/>
              Since 15 is smaller than 25, you must "borrow" 1 month from the Month column. 1 month (March) has 31 days. <br/>
              New Days: 15 + 31 = 46. <br/>
              46 - 25 = <strong>21 Days</strong>.
            </li>
            <li>
              <strong>Step 2: Subtract Months</strong><br/>
              After borrowing, you have 2 months left in the target date. Since 2 is smaller than 6 (June), you must borrow 1 year (12 months) from the Year column.<br/>
              New Months: 2 + 12 = 14.<br/>
              14 - 6 = <strong>8 Months</strong>.
            </li>
            <li>
              <strong>Step 3: Subtract Years</strong><br/>
              After borrowing, the target year becomes 2023.<br/>
              2023 - 1995 = <strong>28 Years</strong>.
            </li>
          </ul>
          <p className="mt-4 font-bold text-calc-green">Final Age: 28 Years, 8 Months, 21 Days.</p>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Why Chronological Age Matters</h3>
        <p className="text-sm mb-4">
          In many professional and legal sectors, "Total Days" or "Total Weeks" are just as important as years:
        </p>
        <ul className="list-disc list-inside text-sm space-y-2 text-gray-700">
          <li><strong>Job Eligibility:</strong> Most exams in India specify an age limit (e.g., 21-30 years) as of a specific date. Being even one day over can disqualify a candidate.</li>
          <li><strong>Insurance:</strong> Premium rates often change based on your "nearest birthday" or actual age in months.</li>
          <li><strong>Medical:</strong> For infants and toddlers, pediatricians track development by weeks and months rather than years.</li>
        </ul>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Did You Know?</h3>
        <p className="text-sm">
          In some cultures, such as in South Korea (historically), a baby is considered 1 year old at birth because the time spent in the womb is counted. However, for almost all official, legal, and international purposes, the <strong>Western Age System</strong> (used by this calculator) is the standard, where age increments on your birthday.
        </p>
      </section>
    </div>
  );
}