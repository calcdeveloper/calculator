import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Typing Speed (WPM)?</h2>
        <p className="mb-4">
          Whether you are preparing for government typing tests (like SSC, Railways, or Court exams) or applying for data entry jobs, your typing speed is measured in <strong>WPM (Words Per Minute)</strong>. 
        </p>
        <p className="mb-4">
          To make tests fair, a "word" isn't measured by actual English words (because "a" is much faster to type than "hippopotamus"). Instead, standard typing tests define <strong>1 Word = 5 Keystrokes (characters)</strong>, including spaces and punctuation.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 1: Gross WPM (Raw Speed)</h3>
        <p className="text-sm mb-4">
          Your Gross WPM is your total typing speed without accounting for any spelling mistakes.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <div className="my-4 text-lg text-center font-mono text-gray-800">
            Gross WPM = (Total Keystrokes &divide; 5) &divide; Time (in minutes)
          </div>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>You typed 1,500 characters in 10 minutes.</li>
            <li>Words Typed = 1,500 &divide; 5 = 300 words.</li>
            <li><strong>Gross WPM</strong> = 300 &divide; 10 = <strong>30 WPM</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-red-50 p-6 rounded-xl border border-red-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 2: Net WPM (Official Speed)</h3>
        <p className="text-sm mb-4 text-gray-800">
          This is your <em>real</em> score. Official tests heavily penalize mistakes. For every uncorrected error, your final WPM drops.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-red-200 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <div className="my-4 text-lg text-center font-mono text-gray-800">
            Net WPM = Gross WPM - (Uncorrected Errors &divide; Time in minutes)
          </div>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li>Your Gross WPM is 30. You made 5 uncorrected errors over a 10-minute test.</li>
            <li>Error Penalty = 5 &divide; 10 = 0.5</li>
            <li><strong>Net WPM</strong> = 30 - 0.5 = <strong>29.5 WPM</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 3: Typing Accuracy Percentage</h3>
        <p className="text-sm mb-4 text-gray-800">
          Most government exams require a minimum typing accuracy of 90% to 95% to qualify, regardless of how fast you type.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-green-200 mb-4 overflow-x-auto">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <div className="my-4 text-lg text-center font-mono text-gray-800">
            Accuracy % = (Net WPM &divide; Gross WPM) &times; 100
          </div>
          
          <h4 className="font-bold text-gray-900 mb-1 mt-4">Example:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Accuracy</strong> = (29.5 &divide; 30) &times; 100 = <strong>98.33%</strong>.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}