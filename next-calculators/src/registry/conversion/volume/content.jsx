import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many milliliters (ml) are in a standard cup?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the US Customary system, 1 cup equals 236.588 ml. However, in India and many Commonwealth countries, a 'metric cup' is often rounded to exactly 250 ml. When following international recipes, it is best to check the origin of the recipe."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a US Gallon and an Imperial Gallon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A US liquid gallon is exactly 3.78541 liters, whereas an Imperial gallon (historically used in the UK and Commonwealth countries) is about 20% larger, equalling 4.54609 liters."
        }
      },
      {
        "@type": "Question",
        "name": "How many teaspoons make a tablespoon?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 3 standard teaspoons in 1 standard tablespoon. This is a universal measurement used across baking and cooking globally."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert liters to cubic meters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 1,000 liters in 1 cubic meter (m³). To convert liters to cubic meters, simply divide the number of liters by 1,000. For example, 500 liters is equal to 0.5 cubic meters."
        }
      },
      {
        "@type": "Question",
        "name": "Are fluid ounces (fl oz) the same as weight ounces (oz)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Fluid ounces (fl oz) measure volume or capacity (how much space a liquid takes up), while regular ounces (oz) measure weight or mass. Water is the only common substance where 1 fluid ounce roughly equals 1 weight ounce."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Volume & Capacity Converter</h1>
        <p className="mb-4">
          Whether you are an Indian home baker trying to halve an American recipe, an engineer calculating engine displacement, or simply figuring out how many liters of water fit in your new fish tank, accurate volume conversions are an everyday necessity.
        </p>
        <p className="mb-4">
          Volume and capacity measure how much three-dimensional space an object or liquid occupies. Because different regions use different systems—like the heavily nested US Customary System (cups, pints, gallons) versus the logical, base-10 Metric System (milliliters, liters)—converting between them can be incredibly confusing.
        </p>
        <p>
          Our free online <strong>Volume & Capacity Converter</strong> does the heavy lifting for you. It instantly and accurately converts between all major global volume units, ensuring your recipes, science projects, and daily tasks are perfectly measured.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Volume Calculator</h2>
        <p className="mb-4">Our tool is designed for absolute simplicity. Convert between any volume and capacity units in just three easy steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Value</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the main <strong>Volume</strong> input box on the screen.</li>
          <li>Type the numerical value you want to convert (for example, type "5").</li>
          <li>Our calculator accepts whole numbers and decimals (e.g., 2.5).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown menu to choose your starting measurement.</li>
          <li>Click the <strong>To Unit</strong> dropdown menu to pick the capacity unit you want to convert into.</li>
          <li><strong>Available Options Include:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li><strong>Metric:</strong> Milliliters (ml), Liters (L), Cubic Meters (m³)</li>
              <li><strong>US Customary (Kitchen):</strong> Teaspoons (tsp), Tablespoons (tbsp), Fluid Ounces (fl oz), Cups</li>
              <li><strong>US Customary (Large):</strong> Pints (pt), Quarts (qt), US Gallons (gal), Imperial Gallons</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: View the Result</h3>
        <p className="mb-3">The calculator updates instantly as you type or change units. Look at the output panel to see the final conversion (e.g., entering 1 Gallon to Liters will instantly show <strong>3.78541 Liters</strong>).</p>
      </section>

      {/* --- FORMULA SECTION (Merged with your existing content) --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Volume Conversion Formulas</h2>
        <p className="mb-8">Below is the ultimate cheat sheet containing the formulas needed to convert between the <strong>Metric System</strong> and the <strong>US Customary System</strong>, complete with step-by-step examples.</p>
        
        <div className="space-y-8">
          {/* Metric Formulas */}
          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Metric System Volume Formulas</h3>
            <p className="text-sm mb-4">The metric system is built on multiples of 10, making these the easiest conversions to perform.</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Liters (L)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Liter = 1,000 Milliliters</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>ml to L:</strong> Divide by 1,000. <em>Example: 2,500 ml ÷ 1,000 = 2.5 L</em></li>
                  <li><strong>L to ml:</strong> Multiply by 1,000. <em>Example: 3.2 L × 1,000 = 3,200 ml</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-green-500">
                <h4 className="font-bold text-gray-900 mb-1">Liters (L) & Cubic Meters (m³)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Cubic Meter = 1,000 Liters</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>L to m³:</strong> Divide by 1,000. <em>Example: 500 L ÷ 1,000 = 0.5 m³</em></li>
                  <li><strong>m³ to L:</strong> Multiply by 1,000. <em>Example: 2 m³ × 1,000 = 2,000 L</em></li>
                </ul>
              </div>
            </div>
          </div>

          {/* US Kitchen Formulas */}
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">US Kitchen & Small Volume Formulas</h3>
            <p className="text-sm mb-4">These are the most heavily searched conversions for cooking and baking.</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-1">Teaspoons (tsp) & Tablespoons (tbsp)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Tablespoon = 3 Teaspoons</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>tsp to tbsp:</strong> Divide by 3. <em>Example: 12 tsp ÷ 3 = 4 tbsp</em></li>
                  <li><strong>tbsp to tsp:</strong> Multiply by 3. <em>Example: 5 tbsp × 3 = 15 tsp</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-1">Tablespoons (tbsp) & Fluid Ounces (fl oz)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Fluid Ounce = 2 Tablespoons</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>tbsp to fl oz:</strong> Divide by 2. <em>Example: 8 tbsp ÷ 2 = 4 fl oz</em></li>
                  <li><strong>fl oz to tbsp:</strong> Multiply by 2. <em>Example: 6 fl oz × 2 = 12 tbsp</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-1">Fluid Ounces (fl oz) & Cups (cup)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Cup = 8 Fluid Ounces</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>fl oz to cup:</strong> Divide by 8. <em>Example: 24 fl oz ÷ 8 = 3 cups</em></li>
                  <li><strong>cup to fl oz:</strong> Multiply by 8. <em>Example: 2 cups × 8 = 16 fl oz</em></li>
                </ul>
              </div>
            </div>
          </div>

          {/* US Large Volume Formulas */}
          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">US Large Volume Formulas</h3>
            <p className="text-sm mb-4">These conversions are essential for canning, calculating liquid storage, or buying bulk liquids.</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-gray-900 mb-1">Cups (cup) & Pints (pt)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Pint = 2 Cups</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>cup to pt:</strong> Divide by 2. <em>Example: 6 cups ÷ 2 = 3 pints</em></li>
                  <li><strong>pt to cup:</strong> Multiply by 2. <em>Example: 4 pints × 2 = 8 cups</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-gray-900 mb-1">Pints (pt) & Quarts (qt)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Quart = 2 Pints</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>pt to qt:</strong> Divide by 2. <em>Example: 8 pints ÷ 2 = 4 quarts</em></li>
                  <li><strong>qt to pt:</strong> Multiply by 2. <em>Example: 3 quarts × 2 = 6 pints</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-indigo-500">
                <h4 className="font-bold text-gray-900 mb-1">Quarts (qt) & Gallons (gal)</h4>
                <p className="text-sm"><strong>Formula:</strong> 1 Gallon = 4 Quarts</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>qt to gal:</strong> Divide by 4. <em>Example: 16 quarts ÷ 4 = 4 gallons</em></li>
                  <li><strong>gal to qt:</strong> Multiply by 4. <em>Example: 2 gallons × 4 = 8 quarts</em></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Cross-System Formulas */}
          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-System Formulas (Metric vs. US Customary)</h3>
            <p className="text-sm mb-4">Converting between systems requires precise multiplication factors.</p>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-1">US Gallons & Liters</h4>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>gal to L:</strong> Multiply by 3.78541. <em>Example: 10 gal × 3.78541 = 37.854 L</em></li>
                  <li><strong>L to gal:</strong> Divide by 3.78541. <em>Example: 50 L ÷ 3.78541 = 13.208 gal</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-1">US Fluid Ounces & Milliliters</h4>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>fl oz to ml:</strong> Multiply by 29.5735. <em>Example: 8 fl oz × 29.5735 = 236.588 ml</em></li>
                  <li><strong>ml to fl oz:</strong> Divide by 29.5735. <em>Example: 500 ml ÷ 29.5735 = 16.907 fl oz</em></li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
                <h4 className="font-bold text-gray-900 mb-1">US Gallons vs. Imperial Gallons</h4>
                <p className="text-sm mb-1">A common mistake is assuming all "Gallons" are identical. The Imperial Gallon (used historically in the UK) is about 20% larger than the US Gallon.</p>
                <ul className="text-sm mt-2 space-y-1 text-gray-600">
                  <li><strong>US gal to Imperial gal:</strong> Multiply by 0.832674.</li>
                  <li><strong>Imperial gal to US gal:</strong> Multiply by 1.20095.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Conversion Examples</h2>
        <p className="mb-6">Here are a few practical scenarios where volume conversions are essential.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-orange-400 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Baking a Cake (Cups to Milliliters)</h3>
            <p className="mb-2 text-sm">You are in India following an American baking video. The recipe calls for <strong>2 cups</strong> of milk. You only have a metric measuring jug.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 2 US Cups</li>
              <li><strong>Known Fact:</strong> 1 US Cup = 236.588 ml</li>
              <li><strong>Calculation:</strong> 2 × 236.588</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">473.176 ml</span> (You can safely measure out about 475 ml of milk).</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-400 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Buying Paint (Gallons to Liters)</h3>
            <p className="mb-2 text-sm">A home improvement tutorial says you need <strong>3 US Gallons</strong> of paint to cover a room. Local hardware stores in India sell paint in liters.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 3 US Gallons</li>
              <li><strong>Known Fact:</strong> 1 US Gallon = 3.78541 Liters</li>
              <li><strong>Calculation:</strong> 3 × 3.78541</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">11.35 Liters</span> (You will need to buy around 12 liters of paint).</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-400 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Cough Syrup (Teaspoons to Milliliters)</h3>
            <p className="mb-2 text-sm">A doctor prescribes <strong>2 teaspoons</strong> of cough medicine. You want to use a precise metric syringe instead of a kitchen spoon.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 2 Teaspoons (tsp)</li>
              <li><strong>Known Fact:</strong> 1 Teaspoon = 4.92892 ml (Commonly rounded to 5 ml in medicine)</li>
              <li><strong>Calculation:</strong> 2 × 5</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">10 ml</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many milliliters (ml) are in a standard cup?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In the US Customary system, 1 cup equals 236.588 ml. However, in India and many Commonwealth countries, a "metric cup" is often rounded to exactly 250 ml. When following international recipes, it is best to check the origin of the recipe to ensure baking accuracy.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between a US Gallon and an Imperial Gallon?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A US liquid gallon is exactly 3.78541 liters. An Imperial gallon (historically used in the UK and Commonwealth countries) is about 20% larger, equalling 4.54609 liters. Always verify which gallon is being referenced if you are importing vehicles, tanks, or bulk liquids.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many teaspoons make a tablespoon?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are 3 standard teaspoons in 1 standard tablespoon. This is a universal measurement used across baking and cooking globally.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I convert liters to cubic meters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are 1,000 liters in 1 cubic meter (m³). To convert liters to cubic meters, simply divide the number of liters by 1,000. For example, a 500-liter water tank has a volume of 0.5 cubic meters.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Are fluid ounces (fl oz) the same as weight ounces (oz)?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. Fluid ounces (fl oz) measure volume or capacity (how much space a liquid takes up), while regular ounces (oz) measure weight or mass. Water is the only common substance where 1 fluid ounce roughly equals 1 weight ounce. For other ingredients like honey or flour, the volume and weight will be very different.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Scientific & Math Calculators</h3>
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
          <a href="/calculator/conversion/weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Weight & Mass</a>
        </div>
      </section>
      
    </div>
  );
}