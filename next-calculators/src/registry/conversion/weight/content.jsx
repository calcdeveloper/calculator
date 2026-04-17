import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between weight and mass?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In everyday language, weight and mass are used interchangeably. However, scientifically, 'mass' is the amount of matter in an object (measured in kg or lbs) and never changes. 'Weight' is the force of gravity acting on that mass. For general conversion purposes on Earth, they are treated as the same."
        }
      },
      {
        "@type": "Question",
        "name": "How many pounds are in a kilogram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are approximately 2.20462 pounds in one kilogram. To quickly estimate, you can multiply your kilograms by 2.2."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 'Stone' in weight measurement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A stone is an Imperial unit of mass commonly used in the UK and Ireland to measure human body weight. One stone is equal to exactly 14 pounds or roughly 6.35 kilograms."
        }
      },
      {
        "@type": "Question",
        "name": "Which weight system is used in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "India officially uses the Metric system. Grams (g) and Kilograms (kg) are standard for daily trade, groceries, and body weight. However, due to global influences, pounds (lbs) are often used in gyms and bakeries."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert grams to ounces for cooking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert grams to ounces, divide the number of grams by 28.3495. For example, 100 grams is about 3.5 ounces."
        }
      },
      {
        "@type": "Question",
        "name": "How many milligrams make a gram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 1,000 milligrams (mg) in one gram (g). This is a standard metric conversion based on multiples of ten."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Weight & Mass Converter</h1>
        <p className="mb-4">
          Whether you are tracking personal fitness, cooking an international recipe, or calculating shipping freight, understanding exactly how to convert weight and mass is critical. In India, while we primarily use the Metric system (kilograms and grams), we frequently encounter the Imperial system (pounds and ounces) in gym equipment, baking recipes, and imported goods.
        </p>
        <p className="mb-4">
          Converting between these systems can be confusing. While Metric units scale easily by multiples of 10, Imperial units rely on historical fractions. Memorizing that 1 kilogram equals 2.20462 pounds or that 16 ounces make a pound isn't practical for daily tasks.
        </p>
        <p>
          Our free online <strong>Weight & Mass Converter</strong> handles the complex math for you. It seamlessly calculates everything from tiny milligrams used in medicine to massive metric tons used in industrial shipping, providing instant and precise results.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Weight & Mass Calculator</h2>
        <p className="mb-4">Getting accurate weight conversions is fast and easy. Follow these simple steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Weight Value</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the <strong>Value</strong> input field on the calculator.</li>
          <li>Type in the numerical amount you wish to convert (e.g., "50", "2.5", "1500").</li>
          <li>The tool accepts whole numbers and precise decimals.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From</strong> dropdown menu to select your starting weight unit.</li>
          <li>Click the <strong>To</strong> dropdown menu to select the unit you want to convert into.</li>
          <li><strong>Available Supported Units:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 grid grid-cols-1 md:grid-cols-2">
              <li>Carat (ct)</li>
              <li>Milligram (mg)</li>
              <li>Centigram (cg)</li>
              <li>Decigram (dg)</li>
              <li>Gram (g)</li>
              <li>Decagram (dag)</li>
              <li>Hectogram (hg)</li>
              <li>Kilogram (kg)</li>
              <li>Metric Tonne (t)</li>
              <li>Ounce (oz)</li>
              <li>Pound (lb)</li>
              <li>Stone (st)</li>
              <li>Short Ton (US)</li>
              <li>Long Ton (UK)</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: View the Result</h3>
        <p className="mb-3">The calculator updates in real-time. The exact converted weight will instantly appear in the output box. You can continuously change the units to see how the weight translates across different measurement systems without needing to retype your original number.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Weight & Mass Conversion Formulas</h2>
        <p className="mb-6">For students, engineers, or anyone curious about the math, here is a complete breakdown of the formulas used to convert between the Metric and Imperial systems.</p>
        
        <div className="space-y-6">
          <div className="bg-emerald-50/50 p-6 rounded-xl border border-emerald-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Metric System Formulas</h3>
            <p className="text-sm mb-4">The metric system is wonderfully simple because it is base-10. You only need to multiply or divide by 10, 100, or 1,000.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Grams to Kilograms (g to kg):</strong> Divide by 1,000. <br/><span className="text-gray-500 italic">Formula: g ÷ 1000 = kg</span></li>
              <li><strong>Kilograms to Grams (kg to g):</strong> Multiply by 1,000. <br/><span className="text-gray-500 italic">Formula: kg × 1000 = g</span></li>
              <li><strong>Kilograms to Metric Tons (kg to t):</strong> Divide by 1,000. <br/><span className="text-gray-500 italic">Formula: kg ÷ 1000 = t</span></li>
            </ul>
          </div>

          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Imperial System Formulas</h3>
            <p className="text-sm mb-4">The Imperial system uses specific historical fractions rather than neat multiples of ten.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Ounces to Pounds (oz to lbs):</strong> Divide by 16. <br/><span className="text-gray-500 italic">Formula: oz ÷ 16 = lbs</span></li>
              <li><strong>Pounds to Stones (lbs to st):</strong> Divide by 14. <br/><span className="text-gray-500 italic">Formula: lbs ÷ 14 = st</span></li>
              <li><strong>Pounds to US Short Tons:</strong> Divide by 2,000. <br/><span className="text-gray-500 italic">Formula: lbs ÷ 2000 = US tons</span></li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Metric to Imperial (Cross-Conversion)</h3>
            <p className="text-sm mb-4">Converting across systems requires precise decimal multipliers.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Kilograms to Pounds (kg to lbs):</strong> Multiply by 2.20462. <br/><span className="text-gray-500 italic">Formula: kg × 2.20462 = lbs</span></li>
              <li><strong>Pounds to Kilograms (lbs to kg):</strong> Divide by 2.20462. <br/><span className="text-gray-500 italic">Formula: lbs ÷ 2.20462 = kg</span></li>
              <li><strong>Grams to Ounces (g to oz):</strong> Divide by 28.3495. <br/><span className="text-gray-500 italic">Formula: g ÷ 28.3495 = oz</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Conversion Examples</h2>
        <p className="mb-6">Let’s look at some practical scenarios where you might need to use these weight conversions in your daily life.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Gym Weights (Kilograms to Pounds)</h3>
            <p className="mb-2 text-sm">You are lifting weights at the gym. You normally lift <strong>50 kg</strong>, but today the gym only has dumbbells and plates measured in pounds. What weight should you look for?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 50 kg</li>
              <li><strong>Formula used:</strong> kg × 2.20462 = lbs</li>
              <li><strong>Calculation:</strong> 50 × 2.20462</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">110.23 lbs</span> (You should load 110 lbs onto the bar).</li>
            </ul>
          </div>

          <div className="border-l-4 border-teal-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Baking a Cake (Ounces to Grams)</h3>
            <p className="mb-2 text-sm">You are making an American dessert recipe that calls for <strong>8 ounces</strong> of chocolate chips. Your kitchen scale only shows grams.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 8 oz</li>
              <li><strong>Formula used:</strong> oz × 28.3495 = g</li>
              <li><strong>Calculation:</strong> 8 × 28.3495</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">226.8 grams</span> (You can safely round this to 225g or 230g).</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Body Weight (Stones to Kilograms)</h3>
            <p className="mb-2 text-sm">You have a friend from the UK who says they weigh <strong>12 stones</strong>. You want to know what this is in kilograms.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 12 st</li>
              <li><strong>Formula used:</strong> First convert st to lbs (st × 14), then lbs to kg (lbs ÷ 2.20462). Or simply use 1 st = 6.35029 kg.</li>
              <li><strong>Calculation:</strong> 12 × 6.35029</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">76.2 kg</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between weight and mass?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In everyday language, weight and mass are used interchangeably. However, scientifically, "mass" is the amount of matter in an object (measured in kg or lbs) and never changes regardless of location. "Weight" is the force of gravity acting on that mass. Because gravity is relatively constant on Earth, we use these terms to mean the same thing in daily life.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many pounds are in a kilogram?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are approximately 2.20462 pounds in one kilogram. If you ever need to do a quick mental math estimation, simply multiply your kilograms by 2.2 to get the rough equivalent in pounds.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is a 'Stone' in weight measurement?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A stone is an Imperial unit of mass commonly used in the United Kingdom and Ireland to measure human body weight. One stone is equal to exactly 14 pounds, which translates to roughly 6.35 kilograms.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which weight system is used in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              India officially uses the Metric system. Units like grams (g) and kilograms (kg) are standard for daily trade, groceries, and medical settings. However, due to British history and global internet influences, pounds (lbs) and ounces (oz) are still frequently seen in gyms, fitness apps, and baking recipes.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I convert grams to ounces for cooking?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To convert grams to ounces, you divide the number of grams by 28.3495. For example, if a recipe calls for 100 grams of flour, that equals about 3.5 ounces. Our calculator is highly recommended for cooking as precise ratios are key to baking success.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many milligrams make a gram?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are exactly 1,000 milligrams (mg) in one gram (g). This is a standard metric conversion. The prefix "milli" means one-thousandth.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Converters & Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need to calculate other metrics? Check out our suite of free online conversion tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/conversion/angle" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Angle Converter</a>
          <a href="/calculator/conversion/area" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Area Converter</a>
          <a href="/calculator/conversion/cooking" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Cooking Measurements</a>
          <a href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Data Transfer</a>
          <a href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Digital Storage</a>
          <a href="/calculator/conversion/energy" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Energy Converter</a>
          <a href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Fraction to Decimal</a>
          <a href="/calculator/conversion/number-base" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Number Base</a>
          <a href="/calculator/conversion/power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Power Converter</a>
          <a href="/calculator/conversion/pressure" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Pressure Converter</a>
          <a href="/calculator/conversion/roman" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Roman Numerals</a>
          <a href="/calculator/conversion/speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Speed Converter</a>
          <a href="/calculator/conversion/temperature" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Temperature Converter</a>
          <a href="/calculator/conversion/time" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Converter</a>
          <a href="/calculator/conversion/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Torque Converter</a>
          <a href="/calculator/conversion/unit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Unit Converter</a>
        </div>
      </section>
      
    </div>
  );
}