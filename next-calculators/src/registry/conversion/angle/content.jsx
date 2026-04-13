import React from 'react';

import Link from 'next/link';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Free Angle Converter | Degrees, Radians, Gradians & More
  // META DESCRIPTION: Use our free online Angle Converter to instantly change degrees to radians, gradians, and more. Simple tool with formulas and examples for Indian students.
  // URL SLUG: /calculator/conversion/angle
  // PRIMARY KEYWORD: angle converter
  // SECONDARY KEYWORDS: degrees to radians, radians to degrees, degrees to gradians, online angle calculator, convert angle units, radian calculator, degree calculator, gradian converter, arcminutes to degrees, degrees to arcseconds
  // LONG-TAIL KEYWORDS: how to convert degrees to radians online, free angle converter for students in India, convert radians to degrees formula, degrees radians gradians conversion calculator, angle unit converter for engineering drawings

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I convert degrees to radians?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To convert degrees to radians, multiply the degree value by pi (π) divided by 180. For example, 180 degrees equals 180 × (π / 180), which is exactly π radians.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I convert radians to degrees?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To convert radians to degrees, multiply your radian value by 180 divided by pi (π). For example, 1 radian is approximately 57.2958 degrees.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is the difference between degrees and radians?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Degrees divide a circle into 360 equal slices, making it easy to visualize. Radians measure an angle using the radius and arc length of a circle (a full circle is 2π radians). Radians are the standard unit used in higher mathematics, calculus, and physics.'
        }
      },
      {
        '@type': 'Question',
        name: 'What is a gradian and where is it used?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A gradian (or gon) divides a right angle into 100 parts and a full circle into 400 parts. It is primarily used in land surveying, mapping, and certain civil engineering fields to simplify field calculations.'
        }
      },
      {
        '@type': 'Question',
        name: 'Are Minutes and Seconds used for time or angles?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Both! In geometry and astronomy, "Arcminutes" (minutes) and "Arcseconds" (seconds) are used to measure tiny fractions of a degree. 1 degree equals 60 arcminutes, and 1 arcminute equals 60 arcseconds.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can this angle converter help with JEE and board exams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Converting between degrees and radians is a fundamental skill for CBSE/ICSE board exams and competitive exams like JEE or NEET. This tool helps you quickly verify your manual calculations.'
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Angle Converter: Convert Degrees, Radians & Gradians
        </h1>
        <p className="mb-4">
          Whether you are a Class 11 student in India tackling trigonometry for the first time, a civil engineer working with surveying data, or a programmer designing a rotating graphic, calculating angles accurately is crucial. 
        </p>
        <p className="mb-4">
          Our free online <strong>Angle Converter</strong> is designed to help you seamlessly switch between different angular measurement units. While most everyday geometry uses Degrees, higher mathematics and physics rely heavily on Radians. Meanwhile, fields like surveying often utilize Gradians, and astronomy relies on Arcminutes and Arcseconds.
        </p>
        <p>
          Instead of memorizing complex conversion fractions involving Pi (π), simply input your value into our calculator. We will instantly provide the exact conversion, helping you save time on homework, engineering drawings, or competitive exam preparation (like JEE and NEET).
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Angle Converter</h2>
        <p className="mb-4 text-gray-700">
          Using our calculator is fast and straightforward. Follow these steps to get your precise angular conversion:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Enter the Angle Value:</strong> Click on the number input field and type the value you want to convert. You can enter whole numbers (like 90 or 180) or decimals (like 3.14159 or 45.5).
          </li>
          <li>
            <strong>Select the "From" Unit:</strong> Use the first dropdown menu to select the unit your current number is in. Available options include <em>Degrees (°), Radians (rad), Gradians (grad), Minutes (arcminutes), and Seconds (arcseconds)</em>.
          </li>
          <li>
            <strong>Select the "To" Unit:</strong> Use the second dropdown menu to choose the unit you want to convert your number into. 
          </li>
          <li>
            <strong>Get Instant Results:</strong> As soon as you select your units, the calculator instantly updates. The primary display will show your final converted number. Below that, a detailed breakdown will explain the exact unit path taken.
          </li>
        </ol>
        <p className="mt-4 text-sm text-gray-600 italic">
          Note: If you accidentally select the same unit in both the "From" and "To" dropdowns, the tool will output your original number, indicating that no mathematical conversion was required.
        </p>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Angle Conversion Formulas Explained</h2>
        <p className="mb-4">
          Understanding the math behind the tool is essential for students and professionals. To ensure maximum accuracy, our calculator standardizes all inputs by first converting them into <strong>Degrees</strong> (the base unit), and then mathematically shifting them into your desired target unit.
        </p>
        <p className="mb-4">
          Here are the standard mathematical formulas used universally for angle conversions. Note that the constant <strong>π (Pi)</strong> is approximately 3.14159.
        </p>
        
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          <table className="w-full text-sm text-left">
            <thead className="bg-indigo-50 text-indigo-900">
              <tr>
                <th className="p-4 text-base">Conversion Type</th>
                <th className="p-4 text-base">Mathematical Formula</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Degrees to Radians</td><td className="p-4">Radians = Degrees × (π / 180)</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Radians to Degrees</td><td className="p-4">Degrees = Radians × (180 / π)</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Degrees to Gradians</td><td className="p-4">Gradians = Degrees × (10 / 9)</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Gradians to Degrees</td><td className="p-4">Degrees = Gradians × (9 / 10)</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Radians to Gradians</td><td className="p-4">Gradians = Radians × (200 / π)</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Degrees to Arcminutes</td><td className="p-4">Minutes = Degrees × 60</td></tr>
              <tr className="hover:bg-gray-50"><td className="p-4 font-medium">Degrees to Arcseconds</td><td className="p-4">Seconds = Degrees × 3600</td></tr>
            </tbody>
          </table>
        </div>
        
        <p className="mt-5 text-gray-700 bg-yellow-50 p-4 border-l-4 border-yellow-400">
          <strong>Quick Benchmark Facts:</strong> A full, complete circle is exactly 360 degrees, 2π radians, or 400 gradians. A perfect right angle (like the corner of a square) is 90 degrees, π/2 radians, or exactly 100 gradians. Keeping these benchmarks in mind helps you mentally double-check if a conversion looks correct!
        </p>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: High School Trigonometry (Degrees to Radians)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are a student preparing for a math exam and need to find the sine of 45 degrees, but your scientific calculator is accidentally set to Radian mode. You need to convert 45° into radians.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-2">
                <li><strong>Formula:</strong> Radians = Degrees × (π / 180)</li>
                <li><strong>Step 1:</strong> Plug in the value: 45 × (π / 180)</li>
                <li><strong>Step 2:</strong> Simplify the fraction (45/180 is 1/4): π / 4</li>
                <li><strong>Step 3:</strong> Decimal conversion (3.14159 / 4) = 0.785398</li>
                <li><strong>Result:</strong> 45° is equal to <strong>0.7854 radians</strong>.</li>
              </ul>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Civil Engineering (Gradians to Degrees)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> An older surveying total-station on an Indian construction site outputs a plot corner angle as 150 gradians. The drafting team uses AutoCAD, which requires the angle to be inputted in degrees.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-2">
                <li><strong>Formula:</strong> Degrees = Gradians × (9 / 10)</li>
                <li><strong>Step 1:</strong> Plug in the value: 150 × 0.9</li>
                <li><strong>Step 2:</strong> Multiply: 135</li>
                <li><strong>Result:</strong> The corner angle for AutoCAD is <strong>135°</strong>.</li>
              </ul>
            </div>
          </div>
          
          {/* Example 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 3: Physics & Astronomy (Degrees to Arcminutes)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are observing a star using a telescope, and the star's position shifted by a tiny fraction: 0.5 degrees. You want to record this shift in arcminutes for standard astronomical notation.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-2">
                <li><strong>Formula:</strong> Minutes = Degrees × 60</li>
                <li><strong>Step 1:</strong> Plug in the value: 0.5 × 60</li>
                <li><strong>Step 2:</strong> Multiply: 30</li>
                <li><strong>Result:</strong> The star shifted by exactly <strong>30 arcminutes</strong>.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center hover:bg-gray-50">
                {faq.name}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Free Conversion Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Need to convert other units for your physics homework, engineering projects, or daily tasks? Explore our complete suite of instant, free conversion tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculator/conversion/area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area Converter</Link>
          <Link href="/calculator/conversion/cooking" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Cooking Converter</Link>
          <Link href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Data Transfer Rate</Link>
          <Link href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Digital Storage</Link>
          <Link href="/calculator/conversion/energy" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Energy Converter</Link>
          <Link href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction to Decimal</Link>
          <Link href="/calculator/conversion/number-base" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Number Base (Hex/Bin)</Link>
          <Link href="/calculator/conversion/power" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Power Converter</Link>
          <Link href="/calculator/conversion/pressure" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pressure Converter</Link>
          <Link href="/calculator/conversion/roman" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Roman Numerals</Link>
          <Link href="/calculator/conversion/speed" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Speed Converter</Link>
          <Link href="/calculator/conversion/temperature" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Temperature Converter</Link>
          <Link href="/calculator/conversion/time" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Time Converter</Link>
          <Link href="/calculator/conversion/torque" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Torque Converter</Link>
          <Link href="/calculator/conversion/unit" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Length & Distance Unit</Link>
          <Link href="/calculator/conversion/volume" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume Converter</Link>
          <Link href="/calculator/conversion/weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Weight & Mass</Link>
        </div>
      </section>
    </div>
  );
}