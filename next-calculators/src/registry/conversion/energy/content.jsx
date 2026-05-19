import React from 'react';

import Link from 'next/link';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Energy Converter Online | Joules, kWh, Calories Calculator
  // META DESCRIPTION: Free energy converter tool. Instantly convert between Joules, Kilowatt-hours (kWh), Calories, BTUs, and more. Perfect for students and everyday calculations.
  // URL SLUG: /calculator/conversion/energy
  // PRIMARY KEYWORD: Energy converter
  // SECONDARY KEYWORDS: joules to calories, kwh to joules, convert btu to kw, energy calculator online, food calories to joules, electrical energy conversion, thermal energy converter, kilocalories to joules, calculate electricity units, energy unit converter
  // LONG-TAIL KEYWORDS: how to convert joules to calories, calculate kwh from watts in india, what is 1 unit of electricity in kwh, how many calories in a joule, convert air conditioner btu to tons

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does '1 Unit' of electricity mean on my Indian electricity bill?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In India, '1 Unit' of electricity is exactly equal to 1 Kilowatt-hour (kWh). It represents the amount of energy consumed by a 1,000-watt appliance running continuously for one full hour."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between a Calorie and a Kilocalorie (kcal)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In physics, a small 'calorie' (cal) is the energy needed to heat 1 gram of water by 1°C. In nutrition, the 'Calories' you see on food packaging are actually Kilocalories (kcal). 1 food Calorie (kcal) equals 1,000 small calories."
        }
      },
      {
        "@type": "Question",
        name: "How do I convert Joules to Calories?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert Joules into small scientific calories, divide the Joules by 4.184. To convert Joules into dietary Kilocalories (kcal), divide by 4,184."
        }
      },
      {
        "@type": "Question",
        name: "How many Joules are in 1 kWh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One Kilowatt-hour (kWh) contains exactly 3,600,000 Joules (or 3.6 Megajoules)."
        }
      },
      {
        "@type": "Question",
        name: "How are BTUs used in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While India uses the metric system, Air Conditioners are universally rated in Tons, which correlates to BTUs (British Thermal Units). A 1-Ton AC provides 12,000 BTUs of cooling capacity per hour."
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
          Energy Converter: Calculate Joules, kWh, Calories & More
        </h1>
        <p className="mb-4">
          Energy is the fundamental currency of the universe. From the food we consume to the electricity that powers our homes, energy takes many forms. However, because different fields of science and industry use completely different units—like <strong>Joules</strong> in physics, <strong>Kilowatt-hours</strong> in electricity, and <strong>Calories</strong> in nutrition—converting between them can be confusing.
        </p>
        <p className="mb-4">
          Our free online <strong>Energy Converter</strong> takes the hassle out of manual calculations. Whether you are an engineering student in Delhi working on thermodynamics, a fitness enthusiast tracking daily nutritional intake, or a homeowner trying to decode your monthly electricity "Units," this tool provides instant and accurate results.
        </p>
        <p>
          Skip the complex formulas and let our calculator handle the math, translating over 10 different global energy metrics in a single click.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-orange-50 p-6 rounded-xl border border-orange-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Energy Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator is designed to be highly intuitive. Just follow these simple steps to perform an energy unit conversion:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Input Your Value:</strong> Enter the number you wish to convert in the "Value" field (e.g., "150").
          </li>
          <li>
            <strong>Select Starting Unit:</strong> Click the first dropdown to choose the energy unit you are converting <em>from</em>. Available units include:
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>Joule (J)</li>
              <li>Kilojoule (kJ)</li>
              <li>Calorie (cal)</li>
              <li>Kilocalorie (kcal)</li>
              <li>Watt-hour (Wh)</li>
              <li>Kilowatt-hour (kWh)</li>
              <li>Electronvolt (eV)</li>
              <li>British Thermal Unit (BTU)</li>
              <li>US Therm</li>
              <li>Foot-pound (ft-lb)</li>
            </ul>
          </li>
          <li>
            <strong>Select Target Unit:</strong> Choose the unit you want to convert <em>to</em> (e.g., converting "Kilowatt-hour" to "Joule").
          </li>
          <li>
            <strong>View Result:</strong> The calculator instantly outputs the exact equivalent energy value without requiring you to hit a submit button.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION (Integrated existing code and expanded) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Energy Units: Formulas & Concepts</h2>
        <p className="mb-6 text-gray-700">
          Energy is the ability to do work. In science, energy comes in many forms, such as kinetic, potential, thermal, and electrical. Because different fields (like nutrition, engineering, and physics) developed their own measurements over time, we rely on precise formulas to switch between them accurately.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Joules vs. Calories (Physics vs. Nutrition)</h3>
          <p className="text-sm mb-4 text-gray-700">
            The <strong>Joule (J)</strong> is the standard unit of energy in the International System of Units (SI). However, in the world of diet and nutrition, we use <strong>Calories</strong>.
          </p>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
            <p className="text-sm font-semibold mb-2">The Formula:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><strong>1 Calorie (cal) = 4.184 Joules</strong></li>
              <li><strong>1 Kilocalorie (kcal or Food Calorie) = 4,184 Joules</strong></li>
              <li><strong>To convert Calories to Joules:</strong> Multiply by 4.184.</li>
              <li><strong>Example:</strong> A snack with 100 food calories (kcal) contains exactly 418,400 Joules of physical energy.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Electricity: Kilowatt-hours (kWh)</h3>
          <p className="text-sm mb-4 text-gray-700">
            Utility companies worldwide measure electrical energy consumption in <strong>Kilowatt-hours</strong>. This unit represents the total amount of energy used by a 1,000-watt electrical appliance running continuously for exactly one hour.
          </p>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
            <p className="text-sm font-semibold mb-2">The Formula:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><strong>1 kWh = 3,600,000 Joules (or 3.6 Megajoules)</strong></li>
              <li><strong>To convert kWh to Joules:</strong> Multiply kWh by 3,600,000.</li>
              <li><strong>Example:</strong> If a television consumes 0.2 kWh of electricity during a movie, it has utilized 720,000 Joules.</li>
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Heating & Cooling: BTU (British Thermal Units)</h3>
          <p className="text-sm mb-4 text-gray-700">
            BTU is a traditional unit of energy used primarily for heating and air conditioning systems. It measures the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit. In India, AC capacities are measured in "Tons", where 1 Ton equals 12,000 BTUs per hour.
          </p>
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-red-500">
            <p className="text-sm font-semibold mb-2">The Formula:</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li><strong>1 BTU = 1,055.06 Joules</strong></li>
              <li><strong>1 BTU = 0.252 Kilocalories (kcal)</strong></li>
              <li><strong>Example:</strong> A 1.5 Ton (18,000 BTU) air conditioner removes approximately 18,991,080 Joules of heat energy per hour.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Energy Math Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: The Indian Electricity Bill</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> Your monthly electricity bill states you consumed <strong>250 Units</strong>. You want to know how much raw scientific energy this is in Joules.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Fact:</strong> 1 Unit in India = 1 Kilowatt-hour (kWh)</li>
                <li><strong>Conversion Factor:</strong> 1 kWh = 3,600,000 Joules</li>
                <li><strong>Calculation:</strong> 250 kWh × 3,600,000</li>
                <li><strong>Result:</strong> 900,000,000 Joules</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Conclusion: Your household consumed 900 million Joules (900 Megajoules) of electrical energy this month.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Burning Off a Samosa</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You eat a large Samosa that contains roughly <strong>260 kcal (Kilocalories)</strong>. You want to convert this into standard physical energy (Joules).</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Conversion Factor:</strong> 1 kcal = 4,184 Joules</li>
                <li><strong>Calculation:</strong> 260 × 4,184</li>
                <li><strong>Result:</strong> 1,087,840 Joules</li>
              </ul>
              <p className="text-blue-700 font-semibold">Conclusion: Your body ingested over 1 million Joules of potential energy, which you will use for bodily functions and physical activity.</p>
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
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Make complex physics, math, and daily life conversions easier with our suite of Smart Online Utility Tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculator/conversion/power" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Power Converter (Watts/HP)</Link>
          <Link href="/calculator/conversion/temperature" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Temperature Converter</Link>
          <Link href="/calculator/conversion/pressure" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pressure Converter</Link>
          <Link href="/calculator/conversion/speed" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Speed Converter</Link>
          <Link href="/calculator/conversion/torque" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Torque Converter</Link>
          <Link href="/calculator/conversion/weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Weight Converter</Link>
          <Link href="/calculator/conversion/volume" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume Converter</Link>
          <Link href="/calculator/conversion/area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area Converter</Link>
          <Link href="/calculator/conversion/angle" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Angle Converter</Link>
          <Link href="/calculator/conversion/time" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Time Converter</Link>
          <Link href="/calculator/conversion/unit" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Universal Unit Converter</Link>
          <Link href="/calculator/conversion/cooking" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Cooking Measurement</Link>
          <Link href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction to Decimal</Link>
          <Link href="/calculator/conversion/number-base" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Number Base Converter</Link>
          <Link href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Data Transfer Rate</Link>
          <Link href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Digital Storage Size</Link>
          <Link href="/calculator/conversion/roman" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Roman Numerals</Link>
        </div>
      </section>
    </div>
  );
}