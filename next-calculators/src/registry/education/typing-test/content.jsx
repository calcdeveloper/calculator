import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700 mt-12">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Measure Your Typing Speed</h2>
        <p className="mb-4">
          Whether you are applying for a data entry role, preparing for government typing exams (like SSC or Court Clerk exams), or just trying to improve your productivity, it is crucial to understand how typing tests evaluate your performance.
        </p>
        <p className="mb-4">
          Standardized typing tests calculate your speed and accuracy dynamically using real-time keystroke tracking. Your final score is broken down into three critical metrics: <strong>WPM</strong>, <strong>CPM</strong>, and <strong>Accuracy</strong>.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">CPM (Characters Per Minute)</h3>
        <p className="text-sm mb-4">
          CPM measures the exact number of correct keystrokes you make in 60 seconds. This includes letters, numbers, spaces, and punctuation marks. 
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">CPM Formula:</p>
          <div className="my-2 text-md text-center font-mono text-gray-800">
            CPM = Correct Characters Typed &divide; Time Spent (in minutes)
          </div>
        </div>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">WPM (Words Per Minute)</h3>
        <p className="text-sm mb-4 text-gray-800">
          Because actual words vary in length (typing "a" is much faster than typing "hippopotamus"), professional tests do not count actual English words. Instead, international typing standards define <strong>1 Word = 5 Characters</strong>.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-blue-200 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">WPM Formula:</p>
          <div className="my-2 text-md text-center font-mono text-gray-800">
            WPM = CPM &divide; 5
          </div>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>If you type 250 correct characters in one minute...</li>
            <li><strong>WPM</strong> = 250 &divide; 5 = <strong>50 WPM</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Typing Accuracy Percentage</h3>
        <p className="text-sm mb-4 text-gray-800">
          Speed means nothing if your text is full of errors. Accuracy measures the percentage of correctly typed characters against the total characters you attempted. Most professional environments require an accuracy rate of <strong>95% or higher</strong>.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-green-200 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">Accuracy Formula:</p>
          <div className="my-2 text-md text-center font-mono text-gray-800">
            Accuracy % = (Correct Characters &divide; Total Characters Typed) &times; 100
          </div>
        </div>
      </section>
    </div>
  );
}