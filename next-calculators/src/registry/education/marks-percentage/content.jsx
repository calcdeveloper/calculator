import React from "react";

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-calc-darkGray mt-8">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-calc-black">
          How to Calculate Marks Percentage
        </h2>
        <p className="mb-4 leading-relaxed">
          Calculating the percentage of your exam marks is a fundamental skill for students, parents, and educators. It helps standardize scores across different subjects and grading systems. Whether you are tracking academic progress, applying for colleges, or updating your resume, understanding how to compute your exact percentage is essential.
        </p>
        <p className="mb-4 leading-relaxed">
          Below, we break down the most common methods for calculating your percentage, including standard marks conversion, CBSE CGPA conversion, and University SGPA conversion.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Method 1: The Standard Percentage Formula
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          The most universal way to calculate your percentage is to divide the total marks you obtained by the maximum possible marks, and then multiply the result by 100.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-calc-lightGray mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-calc-green font-bold">
            Percentage = (Marks Obtained ÷ Total Marks) × 100
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Example Calculation:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5">
          <li>Suppose you scored <strong>425 marks</strong> out of a total of <strong>500 marks</strong>.</li>
          <li>First, divide your marks by the total: 425 ÷ 500 = 0.85</li>
          <li>Next, multiply by 100: 0.85 × 100 = 85</li>
          <li>Your final score is <strong>85%</strong>.</li>
        </ul>
      </section>

      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100 mt-8">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Method 2: Converting CBSE CGPA to Percentage
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          Many educational boards, such as the CBSE (Central Board of Secondary Education) in India, issue a Cumulative Grade Point Average (CGPA) instead of traditional marks. To find your indicative percentage, the board provides a standard multiplier of <strong>9.5</strong>.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-blue-200 mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-blue-600 font-bold">
             Percentage = CGPA × 9.5
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Example Calculation:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5 text-gray-800">
          <li>If your report card shows a CGPA of <strong>8.4</strong>.</li>
          <li>Multiply your CGPA by the standard conversion factor: 8.4 × 9.5 = 79.8</li>
          <li>Your equivalent percentage is <strong>79.8%</strong>.</li>
        </ul>
      </section>

      <section className="bg-green-50 p-6 rounded-xl border border-green-100 mt-8">
        <h3 className="text-xl font-bold text-calc-black mb-4">
          Method 3: Converting University SGPA to Percentage
        </h3>
        <p className="mb-4 text-sm leading-relaxed">
          In higher education and universities, performance is often measured using a Semester Grade Point Average (SGPA) on a 10-point scale. While the exact conversion formula can vary slightly depending on university guidelines (like AICTE or UGC), the most widely accepted standard formula subtracts 0.75 from the SGPA and multiplies by 10.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border border-green-200 mb-4 overflow-x-auto text-center">
          <p className="font-bold text-calc-black mb-2">Formula:</p>
          <div className="my-4 font-mono text-lg text-green-700 font-bold">
            Percentage = (SGPA - 0.75) × 10
          </div>
        </div>

        <h4 className="font-bold text-calc-black mb-2 mt-6">Example Calculation:</h4>
        <ul className="text-sm space-y-2 list-disc pl-5 text-gray-800">
          <li>Assume you achieved an SGPA of <strong>7.5</strong> in your semester.</li>
          <li>Subtract 0.75 from your SGPA: 7.5 - 0.75 = 6.75</li>
          <li>Multiply the result by 10: 6.75 × 10 = 67.5</li>
          <li>Your university percentage is <strong>67.5%</strong>.</li>
        </ul>
      </section>
    </div>
  );
}