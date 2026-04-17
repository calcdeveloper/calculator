import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the Roman numeral for 0?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Roman numeral system does not have a symbol for zero. The concept of zero as a number was introduced to the Western world much later. The Romans simply left a blank space or used the Latin word 'nulla' (meaning 'none') to represent zero."
        }
      },
      {
        "@type": "Question",
        "name": "Why is 4 written as IV instead of IIII?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Roman numerals use a 'subtractive notation' rule to prevent placing four identical symbols in a row. Instead of writing IIII, a smaller symbol (I) is placed before a larger symbol (V), meaning 5 minus 1, which equals 4."
        }
      },
      {
        "@type": "Question",
        "name": "What is the highest Roman numeral possible?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using standard Roman numeral rules (where you cannot repeat a symbol more than three times), the highest number you can write is 3,999, represented as MMMCMXCIX. Numbers 4,000 and above require a special overline bar (vinculum) to multiply the value by 1,000."
        }
      },
      {
        "@type": "Question",
        "name": "How do you write the current year in Roman numerals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To write the year 2024, you break it down: 2000 is MM, 20 is XX, and 4 is IV. Combining them gives MMXXIV. For 2025, it is MMXXV, and for 2026, it is MMXXVI."
        }
      },
      {
        "@type": "Question",
        "name": "Can I convert Roman numerals back into numbers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our converter works in both directions. You can select 'Roman Numeral to Number' in the conversion direction dropdown, type in a valid Roman numeral sequence, and it will instantly calculate the decimal equivalent."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Roman Numeral Converter: Translate Numbers to Roman Numerals</h1>
        <p className="mb-4">
          Originating in ancient Rome, the Roman numeral system uses combinations of letters from the Latin alphabet to represent values. Unlike our modern decimal system which uses place values (ones, tens, hundreds), Roman numerals rely on adding and subtracting specific fixed-value symbols.
        </p>
        <p className="mb-4">
          Whether you are a student learning ancient history, a designer formatting a clock face, a developer numbering sections, or just someone trying to decode the year at the end of a movie credit, understanding Roman numerals can sometimes be tricky. 
        </p>
        <p>
          Our bi-directional <strong>Roman Numeral Converter</strong> instantly bridges the gap. It effortlessly translates standard modern numbers into ancient Roman symbols, and decodes complex Roman numerals back into numbers you can easily understand.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Roman Numeral Converter</h2>
        <p className="mb-4">Our tool is designed for absolute simplicity. Here is how you can perform a conversion in seconds:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Set Your Conversion Direction</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the <strong>Conversion Direction</strong> dropdown menu.</li>
          <li>Select <strong>"Number to Roman Numeral"</strong> if you want to input a standard digit (e.g., 49).</li>
          <li>Select <strong>"Roman Numeral to Number"</strong> if you want to decode letters (e.g., XLIX).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter the Value to Convert</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Using Numbers:</strong> Type your number into the input box or use the interactive slider to find your desired number (e.g., sliding to 49).</li>
          <li><strong>Using Roman Numerals:</strong> Type the valid Roman characters (I, V, X, L, C, D, M) into the input box.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Instantly View the Output</h3>
        <p className="mb-3">The calculator works in real-time. Look at the green output panel on the right side of the screen to see your instant translation (e.g., <strong>49 = XLIX</strong>).</p>
      </section>

      {/* --- FORMULA / RULES SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Rules of Roman Numerals</h2>
        <p className="mb-4">
          To manually convert Roman numerals into numbers, you first need to memorize the seven basic symbols. All numbers are created by combining these core letters:
        </p>
        
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4 mb-8">
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>I</strong> = 1</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>V</strong> = 5</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>X</strong> = 10</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>L</strong> = 50</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>C</strong> = 100</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>D</strong> = 500</li>
          <li className="bg-gray-50 p-3 rounded-lg border border-gray-200"><strong>M</strong> = 1,000</li>
        </ul>

        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rule 1: The Addition Rule</h3>
            <p className="text-sm mb-4">When Roman numeral symbols are placed from largest to smallest (reading left to right), you simply add their values together.</p>
            <ul className="text-sm space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>VI:</strong> V (5) is larger than I (1). So, 5 + 1 = <strong>6</strong>.</li>
              <li><strong>XVII:</strong> X (10) + V (5) + I (1) + I (1) = <strong>17</strong>.</li>
              <li><strong>CX:</strong> C (100) + X (10) = <strong>110</strong>.</li>
            </ul>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Rule 2: The Subtraction Rule</h3>
            <p className="text-sm mb-4">To avoid repeating a single character four times in a row, the Romans used "subtractive notation." If a smaller symbol is placed <em>before</em> a larger symbol, you subtract the smaller value from the larger value.</p>
            <ul className="text-sm space-y-2 text-gray-700 list-disc pl-5">
              <li><strong>IV:</strong> I (1) is smaller than V (5). So, 5 - 1 = <strong>4</strong>. (Instead of writing IIII).</li>
              <li><strong>IX:</strong> I (1) is smaller than X (10). So, 10 - 1 = <strong>9</strong>.</li>
              <li><strong>XIV:</strong> X (10) + IV (4) = <strong>14</strong>.</li>
              <li><strong>MCM:</strong> M (1000) + CM (900) = <strong>1900</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Conversion Examples</h2>
        <p className="mb-6">Let's break down a few complex numbers step-by-step to see the conversion rules in action.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-green-600 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Converting 49 to Roman Numerals</h3>
            <p className="mb-2 text-sm">You might think 49 is IL (50 minus 1), but rules dictate you must break it down by place value: Tens (40) and Ones (9).</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Tens (40):</strong> 50 (L) minus 10 (X) = XL</li>
              <li><strong>Ones (9):</strong> 10 (X) minus 1 (I) = IX</li>
              <li><strong>Combined Output:</strong> <span className="font-bold text-gray-900">XLIX</span></li>
            </ul>
          </div>

          <div className="border-l-4 border-green-600 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Converting 1987 to Roman Numerals</h3>
            <p className="mb-2 text-sm">Again, we break the number down by its place values: Thousands, Hundreds, Tens, and Ones.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>1000:</strong> M</li>
              <li><strong>900:</strong> CM (1000 minus 100)</li>
              <li><strong>80:</strong> LXXX (50 + 10 + 10 + 10)</li>
              <li><strong>7:</strong> VII (5 + 1 + 1)</li>
              <li><strong>Combined Output:</strong> <span className="font-bold text-gray-900">MCMLXXXVII</span></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Why does the Roman Numeral system stop at 3,999?</h3>
        <p className="text-sm">
          A standard rule of Roman numerals is that you cannot place more than three identical symbols next to each other. Because the largest standard symbol is <strong>M (1,000)</strong>, the highest you can count using standard rules is <strong>MMM (3,000)</strong> plus CM (900) plus XC (90) plus IX (9), totaling <strong>3,999</strong>. 
        </p>
        <p className="text-sm">
          To write 4,000 or higher, the Romans used a line over the letter (called a vinculum) to indicate that the value should be multiplied by 1,000. For example, a <strong>V</strong> with a line over it represents 5,000. Because modern keyboards cannot easily type these special characters, most digital converters top out at 3,999!
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the Roman numeral for 0?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Roman numeral system does not have a symbol for zero. The concept of zero as a number was introduced to the Western world much later. The Romans simply left a blank space or used the Latin word "nulla" (meaning "none") to represent zero.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is 4 written as IV instead of IIII?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Roman numerals use a "subtractive notation" rule to prevent placing four identical symbols in a row. Instead of writing IIII, a smaller symbol (I) is placed before a larger symbol (V), meaning 5 minus 1, which equals 4.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the highest Roman numeral possible?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Using standard Roman numeral rules (where you cannot repeat a symbol more than three times), the highest number you can write is 3,999, represented as MMMCMXCIX. Numbers 4,000 and above require a special overline bar (vinculum) to multiply the value by 1,000.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do you write the current year in Roman numerals?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To write the year 2024, you break it down: 2000 is MM, 20 is XX, and 4 is IV. Combining them gives MMXXIV. For 2025, it is MMXXV, and for 2026, it is MMXXVI.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I convert Roman numerals back into numbers?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, our converter works in both directions. You can select "Roman Numeral to Number" in the conversion direction dropdown, type in a valid Roman numeral sequence, and it will instantly calculate the decimal equivalent.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Converters & Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need to convert other types of data or measurements? Check out our suite of free online conversion tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/conversion/angle" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Angle Converter</a>
          <a href="/calculator/conversion/area" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Area Converter</a>
          <a href="/calculator/conversion/cooking" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Cooking Measurements</a>
          <a href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Data Transfer Rate</a>
          <a href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Digital Storage</a>
          <a href="/calculator/conversion/energy" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Energy Converter</a>
          <a href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Fraction to Decimal</a>
          <a href="/calculator/conversion/number-base" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Number Base Converter</a>
          <a href="/calculator/conversion/power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Power Converter</a>
          <a href="/calculator/conversion/pressure" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Pressure Converter</a>
          <a href="/calculator/conversion/speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Speed Converter</a>
          <a href="/calculator/conversion/temperature" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Temperature Converter</a>
          <a href="/calculator/conversion/time" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Converter</a>
          <a href="/calculator/conversion/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Torque Converter</a>
          <a href="/calculator/conversion/unit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Unit Converter</a>
          <a href="/calculator/conversion/volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Volume Converter</a>
          <a href="/calculator/conversion/weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Weight & Mass Converter</a>
        </div>
      </section>
      
    </div>
  );
}