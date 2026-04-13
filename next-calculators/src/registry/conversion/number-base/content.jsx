import React from 'react';

import Link from 'next/link';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Number Base Converter | Binary, Hex, Decimal Calculator
  // META DESCRIPTION: Free online Number Base Converter. Instantly convert between Binary (Base-2), Decimal (Base-10), Hexadecimal (Base-16), and Octal (Base-8) with steps and formulas.
  // URL SLUG: /calculator/conversion/number-base
  // PRIMARY KEYWORD: Number base converter
  // SECONDARY KEYWORDS: binary to decimal converter, hex to decimal calculator, decimal to binary tool, octal to binary converter, base 16 to base 10, binary converter online, hex converter, number system conversion, base 2 converter, hexadecimal to binary
  // LONG-TAIL KEYWORDS: how to convert decimal to binary easily, convert hexadecimal to decimal online, best number base converter tool, what is 15 in binary code, how to calculate base 16 numbers

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why do computers use Binary (Base-2)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Computers use binary because they are built using electronic transistors that act as switches. These switches only have two states: ON (represented by 1) and OFF (represented by 0). Base-2 is the most efficient way to represent this hardware reality in mathematics."
        }
      },
      {
        "@type": "Question",
        name: "What is Hexadecimal (Base-16) used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hexadecimal is heavily used in computer science because it is a human-friendly way to read long binary strings. One Hex digit perfectly represents four binary digits (a nibble). It is commonly used for HTML color codes (like #FFFFFF for white), MAC addresses, and memory locations."
        }
      },
      {
        "@type": "Question",
        name: "How do letters work in Hexadecimal?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A base-16 system needs 16 unique symbols. Since we only have numbers 0 through 9, we borrow the first six letters of the alphabet to fill the gap. A = 10, B = 11, C = 12, D = 13, E = 14, and F = 15."
        }
      },
      {
        "@type": "Question",
        name: "What is Octal (Base-8) and where is it used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Octal uses digits 0 through 7. While less common today than Hexadecimal, Octal is still widely used in computing, specifically in Unix and Linux operating systems to set file permissions (like the command 'chmod 777')."
        }
      },
      {
        "@type": "Question",
        name: "Can I convert Base-2 directly to Base-16?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Because 16 is a power of 2, you can convert directly by grouping the binary bits into sets of four, starting from the right. Each group of four directly translates to a single Hexadecimal character."
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
          Number Base Converter: Binary, Decimal, Hex & Octal
        </h1>
        <p className="mb-4">
          In our daily lives, we naturally count using a <strong>Base-10 (Decimal)</strong> system, utilizing the digits 0 through 9. However, the digital world operates on entirely different rules. Computers process data using microscopic electronic switches that are either ON or OFF, forcing them to use a <strong>Base-2 (Binary)</strong> system composed purely of 1s and 0s. 
        </p>
        <p className="mb-4">
          To make these massive strings of binary data easier for human programmers to read and write, computer science relies heavily on <strong>Base-16 (Hexadecimal)</strong> and <strong>Base-8 (Octal)</strong> systems.
        </p>
        <p>
          Whether you are a B.Tech student in India studying digital electronics, a web developer adjusting CSS color codes, or an IT professional configuring Linux server permissions, our <strong>Number Base Converter</strong> makes switching between these complex mathematical languages instant and error-free.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Number Base Converter</h2>
        <p className="mb-4 text-gray-700">
          Our calculator features a clean, simple interface to ensure quick conversions without complicated steps. Here is how to navigate the tool:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-gray-800">
          <li>
            <strong>Input Your Value:</strong> Click on the "Value" text box and type the number you wish to convert. Make sure the number matches your starting base (e.g., do not type the number '9' if you are starting in Binary or Octal).
          </li>
          <li>
            <strong>Select 'From Base':</strong> Click the first dropdown menu to choose your starting number system. The available options are:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-700">
              <li><strong>Binary</strong> (Base-2)</li>
              <li><strong>Decimal</strong> (Base-10)</li>
              <li><strong>Hexadecimal</strong> (Base-16)</li>
              <li><strong>Octal</strong> (Base-8)</li>
            </ul>
          </li>
          <li>
            <strong>Select 'To Base':</strong> Click the second dropdown menu to select the number system you want to convert your value into.
          </li>
          <li>
            <strong>Get Instant Results:</strong> As soon as you make your selections, the calculator will automatically process the algorithm and display the correct converted number instantly.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Conversion Formulas & Methods</h2>
        <p className="mb-6 text-gray-700">
          While using our online converter saves time, understanding the manual formulas to convert between these systems is a foundational skill in mathematics and computer engineering. Here are the core methods:
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Converting Decimal to Binary (Base-10 to Base-2)</h3>
          <p className="text-sm mb-4">To translate a standard decimal number into binary, use the "Divide by 2" method.</p>
          
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
            <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Method:</h4>
            <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700 mt-2">
              <li>Divide your decimal number by 2.</li>
              <li>Write down the remainder (it will always be exactly 0 or 1).</li>
              <li>Take the whole number answer (quotient) and divide it by 2 again.</li>
              <li>Repeat this division process until the quotient reaches 0.</li>
              <li>Read the remainders from <strong>bottom to top</strong> to get your binary number.</li>
            </ol>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Converting Binary to Decimal (Base-2 to Base-10)</h3>
          <p className="text-sm mb-4">To turn binary back into a readable decimal, multiply each bit by powers of 2, starting from the rightmost side at 2<sup>0</sup>.</p>
          
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
            <h4 className="font-bold text-gray-900 mb-1">Step-by-Step Method:</h4>
            <ol className="list-decimal list-inside text-sm space-y-2 text-gray-700 mt-2">
              <li>Write out your binary sequence.</li>
              <li>Under each digit, starting from the right to the left, write the ascending powers of 2 (1, 2, 4, 8, 16, 32, 64...).</li>
              <li>If the binary digit is a 1, you keep that power of 2. If the digit is a 0, you cross it out (because anything multiplied by zero is zero).</li>
              <li>Add all the remaining powers of 2 together to reveal the decimal total.</li>
            </ol>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Understanding Hexadecimal (Base-16)</h3>
          <p className="text-sm mb-4">
            Because a base-16 system requires 16 unique symbols, the numbers 0-9 aren't enough. Hexadecimal uses letters to represent the values from 10 to 15:
            <strong> A=10, B=11, C=12, D=13, E=14, F=15.</strong>
          </p>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Hex to Decimal Formula</h4>
            <p className="text-sm text-gray-600 mb-2">Just like binary uses powers of 2, Hex uses ascending powers of 16 (1, 16, 256, 4096...). Multiply each hex digit by its corresponding power of 16 from right to left, and add them together.</p>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Conversion Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Converting the Number 13 to Binary</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are tasked with translating the decimal number <strong>13</strong> into machine code (Base-2).</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li>13 &divide; 2 = 6 (Remainder <strong>1</strong>)</li>
                <li>6 &divide; 2 = 3 (Remainder <strong>0</strong>)</li>
                <li>3 &divide; 2 = 1 (Remainder <strong>1</strong>)</li>
                <li>1 &divide; 2 = 0 (Remainder <strong>1</strong>)</li>
              </ul>
              <p className="text-blue-700 font-semibold">Conclusion: Reading the remainders from bottom to top, 13 in binary is 1101.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Hexadecimal Color Code to Decimal</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are a UI designer viewing a shade of blue with the Hex value <strong>2F</strong>. You need to convert this channel into a standard decimal (Base-10) for a CSS RGB property.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-2">
                <li><strong>Identify the Digits:</strong> We have '2' on the left, and 'F' on the right.</li>
                <li><strong>Translate Letters:</strong> In Hex, the letter 'F' equals the number 15.</li>
                <li><strong>Calculate Right Digit:</strong> Multiply F (15) by 16<sup>0</sup> (which is 1). (15 &times; 1 = 15).</li>
                <li><strong>Calculate Left Digit:</strong> Multiply 2 by 16<sup>1</sup> (which is 16). (2 &times; 16 = 32).</li>
                <li><strong>Add Together:</strong> 32 + 15 = 47.</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Conclusion: The Hex code 2F translates exactly to 47 in decimal.</p>
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
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
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
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Developer & Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Enhance your workflow with our other free online tools designed for programming, science, and everyday math:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Data Transfer Rate</Link>
          <Link href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Digital Storage</Link>
          <Link href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction to Decimal</Link>
          <Link href="/calculator/conversion/roman" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Roman Numerals</Link>
          <Link href="/calculator/conversion/energy" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Energy Converter</Link>
          <Link href="/calculator/conversion/power" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Power Converter</Link>
          <Link href="/calculator/conversion/pressure" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pressure Converter</Link>
          <Link href="/calculator/conversion/speed" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Speed Converter</Link>
          <Link href="/calculator/conversion/temperature" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Temperature Converter</Link>
          <Link href="/calculator/conversion/time" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Time Converter</Link>
          <Link href="/calculator/conversion/torque" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Torque Converter</Link>
          <Link href="/calculator/conversion/weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Weight Converter</Link>
          <Link href="/calculator/conversion/volume" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume Converter</Link>
          <Link href="/calculator/conversion/area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area Converter</Link>
          <Link href="/calculator/conversion/angle" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Angle Converter</Link>
          <Link href="/calculator/conversion/unit" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Universal Unit Converter</Link>
          <Link href="/calculator/conversion/cooking" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Cooking Calculator</Link>
        </div>
      </section>
    </div>
  );
}