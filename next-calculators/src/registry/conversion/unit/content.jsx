import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many centimeters are in an inch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are exactly 2.54 centimeters in one inch. This is a standard global conversion factor used across both the metric and imperial systems."
        }
      },
      {
        "@type": "Question",
        "name": "Which is longer, a kilometer or a mile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A mile is significantly longer than a kilometer. One mile equals roughly 1.61 kilometers. To put it simply, if you run 5 miles, you have run about 8 kilometers."
        }
      },
      {
        "@type": "Question",
        "name": "Why does India use both metric and imperial systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While India officially adopted the Metric System (meters, centimeters, kilometers) in 1956 for official records and road distances, the Imperial System remains deeply culturally embedded. People still commonly measure human height in feet and inches, and real estate in square feet or yards (gaj)."
        }
      },
      {
        "@type": "Question",
        "name": "How many millimeters make a centimeter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are 10 millimeters (mm) in a single centimeter (cm). The metric system scales easily by multiples of 10, making it very simple to convert."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a standard mile and a nautical mile?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard (statute) mile is used for measuring land distances and is equal to 1.609 kilometers. A nautical mile is based on the circumference of the Earth, used primarily in aviation and maritime navigation, and is slightly longer at 1.852 kilometers."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate my height in feet from centimeters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find your height in feet, divide your height in centimeters by 30.48. For example, if you are 170 cm tall, dividing by 30.48 gives you roughly 5.57 feet. To convert the decimal into inches, multiply the 0.57 by 12, giving you 5 feet and roughly 7 inches."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Length and Distance Converter</h1>
        <p className="mb-4">
          Length and distance measurements are an inescapable part of our daily lives. Whether you are tracking a morning run, buying a new piece of furniture, planning a cross-country road trip, or calculating your height for a medical form, knowing the exact measurements is crucial.
        </p>
        <p className="mb-4">
          In India, we uniquely navigate a dual-measurement world. We drive distances in <strong>Kilometers</strong> and buy fabric in <strong>Meters</strong>, but we measure our height in <strong>Feet and Inches</strong> and talk about real estate plots in <strong>Yards (Gaj)</strong>. Switching between the Metric System (used globally) and the Imperial System (used in the US and UK) can get mathematically confusing.
        </p>
        <p>
          Our free online <strong>Length & Distance Converter</strong> bridges this gap instantly. Designed for absolute accuracy, it helps students, engineers, travelers, and home DIYers switch effortlessly between millimeters, centimeters, meters, kilometers, inches, feet, yards, and miles without pulling out a calculator.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Length Calculator</h2>
        <p className="mb-4">You do not need to memorize complex multiplication factors. Our tool gives you precise results in three easy steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Measurement</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the numerical input box on your screen.</li>
          <li>Type the value you want to convert (for example, type "150" if you are converting 150 centimeters).</li>
          <li>The calculator accepts whole numbers and exact decimals.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown menu to pick the unit you currently have.</li>
          <li>Click the <strong>To Unit</strong> dropdown menu to select what you want to convert it into.</li>
          <li><strong>Available Metric Options:</strong> Millimeter (mm), Centimeter (cm), Meter (m), Kilometer (km).</li>
          <li><strong>Available Imperial Options:</strong> Inch (in), Foot (ft), Yard (yd), Mile (mi), Nautical Mile (nmi).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Instantly View the Result</h3>
        <p className="mb-3">Our intelligent tool calculates dynamically. The moment you type your number or adjust a dropdown, the exact converted distance appears instantly on the screen—ready for you to copy and use.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Length Conversion Formulas</h2>
        <p className="mb-6">For students doing math homework or DIY enthusiasts mapping out a room, understanding the core conversion formulas is incredibly helpful. Here are the most widely used mathematical rules for length and distance.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Metric to Imperial (cm/m to in/ft)</h3>
            <p className="text-sm mb-4">Use these formulas when you need to change a global standard measurement into a US standard measurement.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Centimeters to Inches:</strong> Divide your cm value by 2.54. <br/><span className="text-gray-500 italic">Formula: cm ÷ 2.54 = inches</span></li>
              <li><strong>Meters to Feet:</strong> Multiply your meter value by 3.28084. <br/><span className="text-gray-500 italic">Formula: m × 3.28084 = feet</span></li>
              <li><strong>Kilometers to Miles:</strong> Multiply your kilometers by 0.621371. <br/><span className="text-gray-500 italic">Formula: km × 0.621371 = miles</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Imperial to Metric (in/ft to cm/m)</h3>
            <p className="text-sm mb-4">Use these formulas to convert US measurements back into the universally recognized metric system.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Inches to Centimeters:</strong> Multiply your inches by 2.54. <br/><span className="text-gray-500 italic">Formula: inches × 2.54 = cm</span></li>
              <li><strong>Feet to Meters:</strong> Divide your feet value by 3.28084 (or multiply by 0.3048). <br/><span className="text-gray-500 italic">Formula: ft × 0.3048 = m</span></li>
              <li><strong>Miles to Kilometers:</strong> Multiply your miles by 1.60934. <br/><span className="text-gray-500 italic">Formula: miles × 1.60934 = km</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Real-Life Examples</h2>
        <p className="mb-6">Sometimes seeing the math in action is the easiest way to understand it. Let's look at three common everyday scenarios relevant to users in India.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Measuring Human Height (cm to feet)</h3>
            <p className="mb-2 text-sm">You are filling out a visa or fitness application that asks for your height in feet. Your medical records say you are exactly <strong>170 cm</strong> tall.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 170 cm</li>
              <li><strong>First, convert cm to inches:</strong> 170 ÷ 2.54 = 66.93 inches</li>
              <li><strong>Convert inches to feet:</strong> 66.93 ÷ 12 = 5.57 feet</li>
              <li><strong>Final Answer:</strong> You are <strong>5 feet and 7 inches</strong> tall (0.57 feet × 12 = ~6.8 inches, rounded to 7).</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Treadmill Running (Miles to KM)</h3>
            <p className="mb-2 text-sm">You download a running app, and today's training plan tells you to run <strong>3 miles</strong>. You run on a gym treadmill in India that only measures in Kilometers.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 3 miles</li>
              <li><strong>Formula used:</strong> miles × 1.60934 = km</li>
              <li><strong>Calculation:</strong> 3 × 1.60934</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">4.82 km</span>. You should set your treadmill goal to nearly 5 kilometers.</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Buying Furniture Online (Inches to Centimeters)</h3>
            <p className="mb-2 text-sm">You want to buy a study desk online. The dimensions are listed as <strong>48 inches</strong> wide. You need to know if it will fit into an alcove in your room measured with a metric tape.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 48 inches</li>
              <li><strong>Formula used:</strong> inches × 2.54 = cm</li>
              <li><strong>Calculation:</strong> 48 × 2.54</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">121.92 cm</span>. You need a space at least 122 centimeters wide.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many centimeters are in an inch?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are exactly 2.54 centimeters in one inch. This is a standard global conversion factor used across both the metric and imperial systems, whether you are dealing with tailoring, engineering, or screen sizes.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which is longer, a kilometer or a mile?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A mile is significantly longer than a kilometer. One mile equals roughly 1.61 kilometers. To put it simply, if you run 5 miles, you have run about 8 kilometers.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why does India use both metric and imperial systems?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While India officially adopted the Metric System (meters, centimeters, kilometers) in 1956 for official records and road distances, the Imperial System remains deeply culturally embedded. People still commonly measure human height in feet and inches, and real estate in square feet or yards (often called 'gaj' locally).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many millimeters make a centimeter?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are exactly 10 millimeters (mm) in a single centimeter (cm). The metric system scales easily by multiples of 10, making it very simple to convert visually just by moving the decimal point.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between a standard mile and a nautical mile?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A standard (statute) mile is used for measuring land distances and is equal to 1.609 kilometers. A nautical mile is based on the actual circumference of the Earth, used primarily in aviation and marine navigation, and is slightly longer at 1.852 kilometers.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate my height in feet from centimeters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To find your height in feet, divide your height in centimeters by 30.48. For example, if you are 170 cm tall, dividing by 30.48 gives you roughly 5.57 feet. To convert the 0.57 decimal into inches, multiply it by 12, giving you 5 feet and roughly 7 inches.
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
          <a href="/calculator/conversion/volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Volume Converter</a>
          <a href="/calculator/conversion/weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Weight & Mass</a>
        </div>
      </section>
      
    </div>
  );
}