import React from 'react';

import Link from 'next/link';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Area Converter Online | Convert sq ft, acres, hectares, m²
  // META DESCRIPTION: Free online area converter for Indian real estate, farming, and education. Instantly convert square feet, square meters, acres, hectares, and more.
  // URL SLUG: /calculator/conversion/area
  // PRIMARY KEYWORD: Area converter
  // SECONDARY KEYWORDS: land area calculator, convert square feet to square meters, acre to hectare converter, square yard to sq ft, area conversion online, sq ft calculator for house, property area calculator india, hectares to acres conversion, convert sq meters to sq feet, standard land measurement units
  // LONG-TAIL KEYWORDS: how to calculate flat area in square meters, how many square feet in one acre of land, land measurement converter for indian agriculture, convert plot size from square yards to square feet, what is the difference between an acre and a hectare

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many square feet are in one acre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One standard acre is exactly equal to 43,560 square feet. This is a very common conversion used in Indian agriculture and large-scale real estate transactions."
        }
      },
      {
        "@type": "Question",
        name: "How do I convert square meters to square feet for an apartment?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "To convert square meters to square feet, you multiply the square meter value by 10.7639. For example, a 100 square meter apartment is roughly 1,076 square feet."
        }
      },
      {
        "@type": "Question",
        name: "Which area unit is mostly used in Indian real estate?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Indian urban real estate (like buying apartments or office spaces), 'Square Feet' (sq ft) is the most popular unit. For independent plots, 'Square Yards' (often locally called 'Gaj') is highly prevalent in North India."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between an acre and a hectare?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An acre is an Imperial unit of area, while a hectare is a metric unit. One hectare is significantly larger than an acre. Specifically, 1 hectare is equal to about 2.47 acres, or 10,000 square meters."
        }
      },
      {
        "@type": "Question",
        name: "Why are area units 'squared'?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Area measures a two-dimensional space. To find the area of a rectangle, you multiply its length by its width (e.g., 5 meters × 4 meters). The result is 20 square meters (m²), representing both dimensions."
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
          Free Online Area Converter & Land Measurement Tool
        </h1>
        <p className="mb-4">
          Whether you are an architect drafting a floor plan, a farmer measuring agricultural land, or a homebuyer trying to understand the size of a new flat in India, accurate area calculation is crucial. Property documents, blueprints, and international guidelines often mix up different units of measurement, making things confusing.
        </p>
        <p className="mb-4">
          Our free <strong>Area Converter</strong> instantly bridges the gap between the Metric System and the US Customary / Imperial System. It allows you to seamlessly convert land, property, and geometric areas in real-time without doing any mental math.
        </p>
        <p>
          From tiny geometrical shapes in school math assignments to massive agricultural hectares, this tool provides exact mathematical accuracy for every daily scenario.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Area Converter</h2>
        <p className="mb-4 text-gray-700">
          Converting complex land and surface measurements takes only a second. Follow these basic steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Enter Your Value:</strong> Type the number you wish to convert in the "Value" input box. (e.g., 1000, 2.5, 50).
          </li>
          <li>
            <strong>Select the "From" Unit:</strong> Click the first dropdown menu to select the unit you are starting with.
          </li>
          <li>
            <strong>Select the "To" Unit:</strong> Click the second dropdown menu to choose your desired output unit. Our tool supports the following 10 standard area units:
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>Square Millimeter (mm²)</li>
              <li>Square Centimeter (cm²)</li>
              <li>Square Meter (m²)</li>
              <li>Hectare (ha)</li>
              <li>Square Kilometer (km²)</li>
              <li>Square Inch (sq in)</li>
              <li>Square Foot (sq ft)</li>
              <li>Square Yard (sq yd)</li>
              <li>Acre (ac)</li>
              <li>Square Mile (sq mi)</li>
            </ul>
          </li>
          <li>
            <strong>Get the Instant Result:</strong> The calculator will immediately display the exact converted area on your screen.
          </li>
        </ol>
      </section>

      {/* COMPREHENSIVE AREA CONVERSION FORMULAS (Merged from existing code) */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Area Conversion Formulas</h2>
        <p className="mb-4 text-gray-700">
          Because area represents two-dimensional space (length multiplied by width), area conversion factors are "squared." For example, while 1 yard equals 3 feet, 1 square yard equals 9 square feet (3 × 3). Below is the ultimate guide to converting every major area unit.
        </p>

        {/* Imperial / US Customary */}
        <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Imperial & US Customary Area Formulas</h3>
          <p className="text-sm mb-4 text-gray-700">These units are heavily used in real estate, construction, and agriculture.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-400">
              <h4 className="font-bold text-gray-900 mb-1">Square Inches (sq in) & Square Feet (sq ft)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Square Foot = 144 Square Inches (12 in × 12 in)</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>sq ft to sq in:</strong> Multiply by 144. <em>Example: 5 sq ft × 144 = 720 sq in</em></li>
                <li><strong>sq in to sq ft:</strong> Divide by 144. <em>Example: 288 sq in ÷ 144 = 2 sq ft</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-400">
              <h4 className="font-bold text-gray-900 mb-1">Square Feet (sq ft) & Square Yards (sq yd)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Square Yard = 9 Square Feet (3 ft × 3 ft)</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>sq yd to sq ft:</strong> Multiply by 9. <em>Example: 10 sq yd × 9 = 90 sq ft</em></li>
                <li><strong>sq ft to sq yd:</strong> Divide by 9. <em>Example: 180 sq ft ÷ 9 = 20 sq yd</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-1">Square Feet (sq ft) & Acres (ac)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Acre = 43,560 Square Feet</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>ac to sq ft:</strong> Multiply by 43,560. <em>Example: 2 acres × 43,560 = 87,120 sq ft</em></li>
                <li><strong>sq ft to ac:</strong> Divide by 43,560. <em>Example: 100,000 sq ft ÷ 43,560 ≈ 2.295 acres</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-1">Acres (ac) & Square Miles (sq mi)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Square Mile = 640 Acres</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>sq mi to ac:</strong> Multiply by 640. <em>Example: 5 sq mi × 640 = 3,200 acres</em></li>
                <li><strong>ac to sq mi:</strong> Divide by 640. <em>Example: 1,280 acres ÷ 640 = 2 sq mi</em></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Metric System */}
        <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Metric System Area Formulas</h3>
          <p className="text-sm mb-4 text-gray-700">The metric system scales smoothly by factors of 100 (since 10 × 10 = 100).</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
              <h4 className="font-bold text-gray-900 mb-1">Square Centimeters (cm²) & Square Meters (m²)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Square Meter = 10,000 Square Centimeters</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>m² to cm²:</strong> Multiply by 10,000. <em>Example: 3 m² × 10,000 = 30,000 cm²</em></li>
                <li><strong>cm² to m²:</strong> Divide by 10,000. <em>Example: 50,000 cm² ÷ 10,000 = 5 m²</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
              <h4 className="font-bold text-gray-900 mb-1">Square Meters (m²) & Hectares (ha)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Hectare = 10,000 Square Meters</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>ha to m²:</strong> Multiply by 10,000. <em>Example: 2.5 ha × 10,000 = 25,000 m²</em></li>
                <li><strong>m² to ha:</strong> Divide by 10,000. <em>Example: 40,000 m² ÷ 10,000 = 4 ha</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-emerald-500">
              <h4 className="font-bold text-gray-900 mb-1">Hectares (ha) & Square Kilometers (km²)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Square Kilometer = 100 Hectares</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>km² to ha:</strong> Multiply by 100. <em>Example: 12 km² × 100 = 1,200 ha</em></li>
                <li><strong>ha to km²:</strong> Divide by 100. <em>Example: 350 ha ÷ 100 = 3.5 km²</em></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cross System */}
        <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-System Conversions (Metric vs. Imperial)</h3>
          <p className="text-sm mb-4 text-gray-700">These formulas bridge the gap between US standard sizes and International metric sizes.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-900 mb-1">Square Feet & Square Meters (Real Estate)</h4>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>sq ft to m²:</strong> Multiply by 0.092903. <em>Example: 1,000 sq ft × 0.092903 = 92.9 m²</em></li>
                <li><strong>m² to sq ft:</strong> Multiply by 10.7639. <em>Example: 50 m² × 10.7639 = 538.19 sq ft</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
              <h4 className="font-bold text-gray-900 mb-1">Acres & Hectares (Agriculture & Land)</h4>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>ac to ha:</strong> Multiply by 0.404686. <em>Example: 100 acres × 0.404686 = 40.46 ha</em></li>
                <li><strong>ha to ac:</strong> Multiply by 2.47105. <em>Example: 50 ha × 2.47105 = 123.55 acres</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Area Conversion Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Buying an Apartment in India</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> A builder is selling a flat in Mumbai and lists the "Carpet Area" as <strong>120 square meters (m²)</strong>. You want to know the size in <strong>Square Feet (sq ft)</strong> to better understand the space.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Conversion Factor:</strong> 1 Square Meter = 10.7639 Square Feet</li>
                <li><strong>Calculation:</strong> 120 m² × 10.7639</li>
                <li><strong>Result:</strong> 1,291.66 sq ft</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Conclusion: The flat is approximately 1,292 square feet.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Measuring Agricultural Land</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> A farmer in Punjab owns <strong>5 Hectares</strong> of land. To apply for a specific government scheme, the documentation requires the land size in <strong>Acres</strong>.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Conversion Factor:</strong> 1 Hectare = 2.47105 Acres</li>
                <li><strong>Calculation:</strong> 5 ha × 2.47105</li>
                <li><strong>Result:</strong> 12.355 Acres</li>
              </ul>
              <p className="text-blue-700 font-semibold">Conclusion: The farmer's land equals roughly 12.35 Acres.</p>
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
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Conversion Tools</h3>
        <p className="text-sm mb-5 text-gray-600">
          Simplify your daily measurements with our comprehensive suite of free, specialized converters:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculator/conversion/angle" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Angle Converter</Link>
          <Link href="/calculator/conversion/cooking" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Cooking Converter</Link>
          <Link href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Data Transfer</Link>
          <Link href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Digital Storage</Link>
          <Link href="/calculator/conversion/energy" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Energy Converter</Link>
          <Link href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction to Decimal</Link>
          <Link href="/calculator/conversion/number-base" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Number Base</Link>
          <Link href="/calculator/conversion/power" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Power Converter</Link>
          <Link href="/calculator/conversion/pressure" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pressure Converter</Link>
          <Link href="/calculator/conversion/roman" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Roman Numerals</Link>
          <Link href="/calculator/conversion/speed" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Speed Converter</Link>
          <Link href="/calculator/conversion/temperature" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Temperature Converter</Link>
          <Link href="/calculator/conversion/time" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Time Converter</Link>
          <Link href="/calculator/conversion/torque" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Torque Converter</Link>
          <Link href="/calculator/conversion/unit" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Unit Converter</Link>
          <Link href="/calculator/conversion/volume" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume Converter</Link>
          <Link href="/calculator/conversion/weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Weight Converter</Link>
        </div>
      </section>
    </div>
  );
}