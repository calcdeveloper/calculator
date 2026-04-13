import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Your Attendance Percentage</h2>
        <p className="mb-4">
          Maintaining the mandatory <strong>75% attendance</strong> rule in Indian colleges and universities (like DU, VTU, Anna University, and IITs) is a common challenge for students. Knowing exactly where your attendance stands helps you plan when you can safely take a day off, or when you urgently need to attend every single lecture.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 1: Calculate Current Attendance</h3>
        <p className="text-sm mb-4">
          To find out your current standing, you simply divide the number of classes you were present for by the total number of classes that have happened so far, and multiply by 100.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Basic Formula:</p>
          <p className="text-lg font-mono text-blue-700 mb-4">Attendance % = (Classes Attended ÷ Total Classes) × 100</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> You attended 30 lectures out of 45 total lectures conducted.</li>
            <li><strong>Calculation:</strong> (30 ÷ 45) × 100</li>
            <li><strong>Result:</strong> 66.66% (You are running short of 75%!)</li>
          </ul>
        </div>
      </section>

      <section className="bg-red-50 p-6 rounded-xl border border-red-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 2: How many classes to attend to reach 75%?</h3>
        <p className="text-sm mb-4 text-gray-800">
          If you are lagging behind your target, you need to know how many consecutive classes you must attend to catch up. The algebra for this is slightly more complex because every class you attend increases <em>both</em> the attended count and the total count.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-red-200 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Catch-Up Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">Classes Needed = [(Target % × Total Classes) - (100 × Attended Classes)] ÷ (100 - Target %)</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example using the scenario above:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> Attended 30, Total 45, Target 75%.</li>
            <li><strong>Calculation:</strong> [(75 × 45) - (100 × 30)] ÷ (100 - 75)</li>
            <li><strong>Calculation:</strong> [3375 - 3000] ÷ 25</li>
            <li><strong>Calculation:</strong> 375 ÷ 25 = <strong>15</strong></li>
            <li><strong>Result:</strong> You must attend the next <strong>15 classes</strong> consecutively to reach exactly 75% (45/60 classes).</li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 3: How many classes can I safely miss (bunk)?</h3>
        <p className="text-sm mb-4 text-gray-800">
          If your attendance is 85% and your target is 75%, you have a buffer. When you miss a class, the total classes increase, but your attended classes stay the same.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-green-200 mb-4">
          <p className="font-bold text-gray-900 mb-2">The "Bunk" Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">Classes You Can Miss = [(100 × Attended Classes) - (Target % × Total Classes)] ÷ Target %</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> You attended 40 out of 45 classes (88.8%). Target is 75%.</li>
            <li><strong>Calculation:</strong> [(100 × 40) - (75 × 45)] ÷ 75</li>
            <li><strong>Calculation:</strong> [4000 - 3375] ÷ 75</li>
            <li><strong>Calculation:</strong> 625 ÷ 75 = <strong>8.33</strong></li>
            <li><strong>Result:</strong> You can safely miss <strong>8 classes</strong> and still maintain 75% (40/53 classes = 75.4%).</li>
          </ul>
        </div>
      </section>
    </div>
  );
}