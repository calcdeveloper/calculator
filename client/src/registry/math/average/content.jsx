import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">What is the Average?</h2>
        <p className="mb-4">
          In statistics, an "average" represents the central or typical value of a dataset. While most people use the word "average" to mean the <strong>Mean</strong>, there are actually three common types of averages used in math: the Mean, the Median, and the Mode.
        </p>
        <p>
          Depending on your data, one type of average might give you a much more accurate picture of reality than the others—especially if your data has extreme outliers!
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">The Three Types of Averages</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded shadow-sm border-t-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-2">1. The Mean (Standard Average)</h4>
            <p className="text-xs mb-3 text-gray-600">The most common type of average. It represents the mathematical center of the data.</p>
            <p className="text-sm font-semibold mb-1">How to calculate:</p>
            <p className="text-xs bg-gray-50 p-2 rounded">Add all the numbers together, then divide by the total count of numbers.</p>
            <p className="text-xs font-mono mt-2">Formula: Sum / Count</p>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-t-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-2">2. The Median</h4>
            <p className="text-xs mb-3 text-gray-600">The literal "middle" number. This is highly useful when a few extreme numbers (outliers) skew the Mean.</p>
            <p className="text-sm font-semibold mb-1">How to calculate:</p>
            <p className="text-xs bg-gray-50 p-2 rounded">Sort all numbers from smallest to largest. The number exactly in the middle is the Median.</p>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-t-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-2">3. The Mode</h4>
            <p className="text-xs mb-3 text-gray-600">The most frequent number. Useful for finding the most common occurrence in a dataset.</p>
            <p className="text-sm font-semibold mb-1">How to calculate:</p>
            <p className="text-xs bg-gray-50 p-2 rounded">Look for the number that repeats the most often. A dataset can have one mode, multiple modes, or no mode.</p>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h3 className="text-xl font-semibold text-gray-900">What is the Range?</h3>
        <p>
          The <strong>Range</strong> is not an average, but it is a measure of dispersion that tells you how spread out your data is. It gives you the distance between the absolute lowest number and the absolute highest number in your dataset.
        </p>
        <p className="bg-gray-50 p-3 rounded text-sm inline-block font-mono border border-gray-200">
          Range = Maximum Value - Minimum Value
        </p>
      </section>
    </div>
  );
}