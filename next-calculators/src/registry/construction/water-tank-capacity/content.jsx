import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Water Tank Capacity Calculator | Find Volume in Liters & Gallons
  2. META DESCRIPTION: Free water tank capacity calculator to easily find the volume of rectangular and cylindrical tanks. Convert dimensions in feet, meters, or inches into liters and gallons.
  3. URL SLUG: /calculator/construction/water-tank-capacity
  4. H1 TITLE: Water Tank Capacity Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: water tank capacity calculator
      - Secondary Keywords: water tank size calculator, water volume calculator, rectangular tank capacity, cylindrical tank volume, underground water tank size calculator, water tank capacity formula in liters, sintex tank capacity, sump capacity calculator, calculate water tank volume, water storage calculator.
      - Long-Tail Keywords: how to calculate water tank capacity in liters, underground water sump size calculation, formula for cylindrical water tank volume, convert cubic feet to liters for water tank, how much water does a rectangular tank hold.
  =========================================================================
*/

export default function WaterTankContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much water does a family of four need daily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the Bureau of Indian Standards (BIS) recommends 135 Liters per capita per day (lpcd). Thus, a family of four requires roughly 540 liters daily. In the USA, the EPA estimates an average use of 80 to 100 gallons (approx. 300 to 380 liters) per person per day, meaning a family of four might need around 320 to 400 gallons daily."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate the capacity of a rectangular water tank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "First, measure the internal Length, Width, and Depth. Multiply them together to find the volume (Volume = Length × Width × Depth). Then, convert the resulting volume into your desired unit. For example, if your volume is in cubic feet, multiply it by 28.31 to get liters, or by 7.48 to get US gallons."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate the capacity of a cylindrical overhead tank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For cylindrical tanks (like standard plastic Sintex tanks), measure the internal diameter and depth (height). Divide the diameter by 2 to get the radius. Then use the formula: Volume = 3.1415 × Radius × Radius × Depth. Convert the resulting cubic volume into liters or gallons."
        }
      },
      {
        "@type": "Question",
        "name": "Should I measure the inside or outside of the water tank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You must always measure the internal dimensions of the water tank. If you measure the outside, you are including the thickness of the walls (which could be 9-inch brick or thick concrete). This will lead to a falsely inflated volume calculation, making you think you have more water capacity than you actually do."
        }
      },
      {
        "@type": "Question",
        "name": "How many liters are in 1 cubic meter of water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are exactly 1,000 liters of water in 1 cubic meter (m³). If you measure your tank in meters, finding the capacity in liters is as simple as multiplying the total cubic meters by 1,000."
        }
      },
      {
        "@type": "Question",
        "name": "How many gallons are in 1 cubic foot of water?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are approximately 7.48 US gallons of water in 1 cubic foot (CFT). If you measure your underground sump or cistern in feet, calculate the total cubic feet and multiply by 7.48 to find the total gallons."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* STRUCTURED DATA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Water Tank Capacity Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Whether you are excavating an underground RCC (Reinforced Cement Concrete) sump for your new home, installing an overhead plastic storage tank, or setting up a rainwater harvesting cistern, knowing your exact <strong>water tank capacity</strong> is critical for managing your daily water supply.
        </p>
        <p className="mb-4">
          A common mistake during construction is estimating tank size merely by visual guesswork. This often leads to undersized tanks that run dry or oversized tanks that unnecessarily increase structural loads and construction costs.
        </p>
        <p>
          Our free <strong>Water Tank Size Calculator</strong> takes the guesswork out of the equation. Designed for general users, homeowners, and civil engineers in both India and the USA, this tool instantly converts your physical dimensions into usable liquid volume, outputting accurate results in both Liters and US Gallons.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          Using this tool requires just a few quick measurements from your architectural drawings or physical site. Follow these simple steps to determine your water storage capacity:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Select Tank Shape:</strong> Choose between a <em>Rectangular</em> tank (commonly used for underground sumps and concrete cisterns) or a <em>Cylindrical</em> tank (standard for overhead plastic tanks, drum storage, and round silos).
          </li>
          <li>
            <strong>Choose Measurement Unit:</strong> Use the dropdown menu to select the unit you used to measure the tank. The calculator supports Meters (m), Feet (ft), Inches (in), and Centimeters (cm).
          </li>
          <li>
            <strong>Enter the Dimensions:</strong> 
            <ul className="list-disc pl-5 mt-1 space-y-1">
              <li>For <em>Rectangular</em> tanks, enter the internal <strong>Length</strong>, <strong>Width</strong>, and <strong>Depth</strong> (height of the water level).</li>
              <li>For <em>Cylindrical</em> tanks, enter the internal <strong>Diameter</strong> (width straight across the circular opening) and the <strong>Depth</strong>.</li>
            </ul>
          </li>
          <li>
            <strong>Calculate:</strong> The calculator instantly processes the geometry.
          </li>
        </ol>
        <p className="mt-4 text-sm font-semibold text-blue-900">
          <strong>Outputs Explained:</strong> The tool will display the geometric <em>Volume</em> (in cubic meters or cubic feet) and the final <em>Capacity</em> in both Liters and US Gallons.
        </p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science & Formulas of Water Volume Calculation</h2>
        <p className="mb-4">
          Finding the capacity of any container is a two-step mathematical process. First, you must calculate the internal geometric volume of the space. Second, you must apply a conversion constant to turn that geometric volume into liquid capacity.
        </p>
        <p className="mb-4">
          It is absolutely vital to remember that all calculations must use <strong>internal dimensions</strong>. Measuring the outside of an underground concrete sump includes the thickness of the retaining walls, which do not hold water and will result in a highly inaccurate estimation.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">1. The Rectangular Tank Formula</h3>
        <p className="mb-2 text-sm text-gray-700">
          To find the volume of a rectangular or square tank, multiply the internal length, width, and depth.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-center text-lg mb-4 border border-slate-800 shadow-md">
          Volume = Length × Width × Depth
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">2. The Cylindrical Tank Formula</h3>
        <p className="mb-2 text-sm text-gray-700">
          To find the volume of a round, cylindrical overhead tank, you need the radius (which is exactly half of the diameter) and the depth. Multiply Pi (approx. 3.14159) by the radius squared, and then multiply by the depth.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-center text-lg mb-4 border border-slate-800 shadow-md">
          Volume = π × r² × Depth
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Crucial Liquid Conversion Rules</h3>
        <p className="mb-2 text-gray-700">Once you have the total cubic volume, use these universal standards to find the water capacity:</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
          <li><strong>From Cubic Meters (m³):</strong> 1 m³ holds exactly <strong>1,000 Liters</strong> or approx. <strong>264.17 US Gallons</strong>.</li>
          <li><strong>From Cubic Feet (CFT):</strong> 1 CFT holds exactly <strong>28.31 Liters</strong> or approx. <strong>7.48 US Gallons</strong>.</li>
          <li><strong>From Cubic Inches:</strong> 1 Cubic Inch holds approx. 0.016 Liters or 0.0043 Gallons.</li>
        </ul>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Worked Examples</h2>
        <p className="text-gray-600 mb-4">
          Let us look at some realistic site scenarios to understand how these calculations work in practice for residential construction.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Underground RCC Sump (Measured in Feet)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are excavating an underground rectangular sump for a residential building. Your internal measurements are <strong>8 feet long</strong>, <strong>5 feet wide</strong>, and you plan for the water level to be <strong>6 feet deep</strong>.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>Step 1 (Find Volume):</strong> 8 ft × 5 ft × 6 ft = <strong>240 Cubic Feet (CFT)</strong>.<br />
            <strong>Step 2 (Convert to Liters):</strong> 240 CFT × 28.31 = <strong>6,794.4 Liters</strong>.<br />
            <strong>Step 3 (Convert to Gallons):</strong> 240 CFT × 7.48 = <strong>1,795.2 US Gallons</strong>.
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Overhead Plastic Tank (Measured in Meters)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are buying a cylindrical overhead tank. The manufacturer's specification sheet states the internal diameter is <strong>1.2 meters</strong> and the depth is <strong>1.5 meters</strong>.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>Step 1 (Find Radius):</strong> 1.2 meters ÷ 2 = <strong>0.6 meters</strong>.<br />
            <strong>Step 2 (Find Volume):</strong> 3.14159 × (0.6 × 0.6) × 1.5 = <strong>1.696 Cubic Meters (m³)</strong>.<br />
            <strong>Step 3 (Convert to Liters):</strong> 1.696 m³ × 1,000 = <strong>1,696 Liters</strong>.<br />
          </div>
        </div>

        {/* Example 3 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-purple-900">Example 3: Small Rectangular Cistern (Measured in Inches)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are building a small rectangular water reservoir for a garden. The internal dimensions are <strong>48 inches long</strong>, <strong>36 inches wide</strong>, and <strong>24 inches deep</strong>.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>Step 1 (Find Volume):</strong> 48 in × 36 in × 24 in = <strong>41,472 Cubic Inches</strong>.<br />
            <strong>Step 2 (Convert to Liters):</strong> 41,472 × 0.016387 = <strong>679.6 Liters</strong>.<br />
            <strong>Step 3 (Convert to Gallons):</strong> 41,472 ÷ 231 = <strong>179.5 US Gallons</strong>.
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much water does a family of four need daily?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In India, the Bureau of Indian Standards (BIS) recommends an average standard of 135 Liters per capita per day (lpcd). Thus, a family of four requires roughly 540 liters daily for drinking, cooking, bathing, and sanitation. In the USA, the EPA estimates higher average use, around 80 to 100 gallons (approx. 300 to 380 liters) per person per day. Based on your region, you should size your tank to hold at least 1.5 to 2 days' worth of backup capacity.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I calculate the capacity of a rectangular water tank?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              First, measure the internal Length, Width, and Depth. Multiply them together to find the geometric volume (Volume = Length × Width × Depth). Then, convert the resulting volume into your desired liquid unit. For instance, if your volume is in cubic feet (CFT), multiply the result by 28.31 to get liters, or by 7.48 to get US gallons.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I calculate the capacity of a cylindrical overhead tank?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For cylindrical tanks (like standard plastic Sintex tanks), measure the internal diameter across the top opening, and the total vertical depth. Divide the diameter in half to determine the radius. Then use the formula: Volume = 3.1415 × Radius² × Depth. Once you have the cubic volume, apply the standard conversion multipliers to find liters or gallons.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Should I measure the inside or outside of the water tank?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              You must always measure the strictly internal dimensions of the water tank. If you measure the outside, you are incorrectly including the structural thickness of the walls (which could be 9-inch thick brickwork or heavily reinforced concrete). Including wall thickness will lead to a falsely inflated volume calculation, meaning you will have less water capacity than your math suggests.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many liters are in 1 cubic meter of water?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              There are exactly 1,000 liters of water in 1 cubic meter (m³). If you measure your site in meters, finding the capacity in liters is extremely straightforward—simply multiply the total calculated cubic meters by 1,000.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many gallons are in 1 cubic foot of water?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              There are approximately 7.48 US gallons of water in 1 cubic foot (CFT). If you measure your underground sump or cistern in standard feet, calculate the total cubic feet and multiply by 7.48 to discover the total capacity in gallons.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Building a house or managing a construction project involves exact material estimation. Ensure your project stays on budget and structurally sound by utilizing our full suite of free engineering calculators below:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/construction/aac-block" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">AAC Block & Adhesive Calculator</a>
          <a href="/calculator/construction/brass-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brass Volume Calculator (Sand & Aggregate)</a>
          <a href="/calculator/construction/brick" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brickwork Calculator (Bricks, Cement, Sand)</a>
          <a href="/calculator/construction/column-footing" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Column Footing</a>
          <a href="/calculator/construction/concrete" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volume</a>
          <a href="/calculator/construction/concrete-mix" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Mix Calculator</a>
          <a href="/calculator/construction/construction-cost" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Construction Cost</a>
          <a href="/calculator/construction/earthwork-excavation" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Earthwork & Excavation Calculator</a>
          <a href="/calculator/construction/false-ceiling" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">False Ceiling</a>
          <a href="/calculator/construction/framing-stud" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Partition & Framing Calculator</a>
          <a href="/calculator/construction/gaj-converter" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Gaj Converter</a>
          <a href="/calculator/construction/marble-granite" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Marble & Granite</a>
          <a href="/calculator/construction/paint" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Paint Estimator</a>
          <a href="/calculator/construction/plastering" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Plastering Calculator</a>
          <a href="/calculator/construction/plywood" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Plywood Estimator</a>
          <a href="/calculator/construction/putty-primer" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Putty & Primer</a>
          <a href="/calculator/construction/regional-land" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Regional Land Calculator</a>
          <a href="/calculator/construction/roof-slab-estimator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Roof Slab Estimator</a>
          <a href="/calculator/construction/staircase-step" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Staircase Step</a>
          <a href="/calculator/construction/tile" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Tile Calculator</a>
          <a href="/calculator/construction/tmt-steel-weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">TMT Steel Weight</a>
        </div>
      </section>
    </div>
  );
}