import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate CGPA from SGPA?</h2>
        <p>
          In the Indian education system (CBCS - Choice Based Credit System), your performance in a single semester is called <strong>SGPA</strong> (Semester Grade Point Average). Your total performance across all semesters is called <strong>CGPA</strong> (Cumulative Grade Point Average).
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Universal CGPA Formula</h3>
        <p className="text-sm mb-4">
          The most common method used by universities like VTU, Mumbai University, Anna University, and AKTU is the <strong>Mean Method</strong>.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-lg font-mono text-indigo-700 mb-4">CGPA = (Sum of all SGPAs) / (Total Number of Semesters)</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Example:</h4>
          <p className="text-sm mb-2">Suppose a student has completed one year (2 semesters):</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Semester 1 SGPA:</strong> 8.2</li>
            <li><strong>Semester 2 SGPA:</strong> 7.8</li>
            <li><strong>Calculation:</strong> (8.2 + 7.8) / 2 = 16.0 / 2</li>
            <li><strong>Final CGPA:</strong> <strong>8.0</strong></li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">SGPA vs CGPA: What is the difference?</h3>
        <table className="w-full text-sm text-left mt-4">
          <thead className="text-gray-900 bg-gray-100">
            <tr>
              <th className="p-2 border">Feature</th>
              <th className="p-2 border">SGPA</th>
              <th className="p-2 border">CGPA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border font-medium">Full Form</td>
              <td className="p-2 border">Semester Grade Point Average</td>
              <td className="p-2 border">Cumulative Grade Point Average</td>
            </tr>
            <tr>
              <td className="p-2 border font-medium">Duration</td>
              <td className="p-2 border">Calculated for 6 months</td>
              <td className="p-2 border">Calculated for the whole course</td>
            </tr>
            <tr>
              <td className="p-2 border font-medium">Impact</td>
              <td className="p-2 border">Determines current performance</td>
              <td className="p-2 border">Determines final degree division</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Pro-Tip for Students</h3>
        <p className="text-sm">
          If your university uses a <strong>Credit-Weighted System</strong>, the formula changes slightly. You would multiply each SGPA by the total credits of that semester, sum them up, and divide by the total credits of all semesters combined. However, for 90% of students, the simple average (provided above) works perfectly!
        </p>
      </section>
    </div>
  );
}