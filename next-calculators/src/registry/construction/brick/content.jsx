import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Brickwork Calculator | Estimate Bricks, Cement & Sand
  2. META DESCRIPTION: Free online brickwork calculator. Accurately estimate the total number of bricks, cement bags, and sand quantity required for your construction walls.
  3. URL SLUG: /calculator/construction/brick
  4. H1 TITLE: Free Online Brickwork Calculator (Bricks, Cement, Sand)
  
  11. SEO KEYWORDS:
      - Primary keyword: brickwork calculator
      - Secondary keywords: estimate bricks cement sand, brick wall material calculator, how many bricks per square foot, calculate cement bags for brickwork, sand quantity in cft for walls, red brick calculation formula, fly ash brick estimation, mortar mix ratio calculator, 9 inch brick wall material estimation, 4.5 inch wall brick calculation.
      - Long-tail keywords: how to calculate cement and sand for brick masonry, brickwork estimation excel formula, civil engineering calculation for brick wall, number of standard bricks in one cubic meter, how much mortar required for 1000 bricks.
  =========================================
*/

export default function BrickCalculatorContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many bricks are required for a 1 square foot area?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The number of bricks required per square foot depends heavily on the wall thickness. For a standard 4.5-inch thick wall (half-brick wall), you need approximately 4.5 to 5 bricks per square foot. For a 9-inch thick wall (full-brick wall), you will need double the amount, which is roughly 9 to 10 bricks per square foot."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we multiply the wet mortar volume by 1.33 for dry volume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When dry cement and sand particles are mixed with water, they undergo a chemical process and fill voids, causing the overall mixture to shrink in volume. To compensate for this volume reduction and ensure you purchase enough raw materials, civil engineers apply a dry volume conversion factor of 1.33 (representing a 33% increase)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best cement-to-sand ratio for interior partition walls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For interior partition walls which are typically 4.5 inches thick, a richer mortar mix ratio of 1:4 (1 part cement to 4 parts sand) is highly recommended. This provides the necessary structural adhesion and tensile strength required for thinner single-layer brick alignments."
        }
      },
      {
        "@type": "Question",
        "name": "How much material wastage should I account for in a brick masonry project?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is a standard construction practice to add a 5% to 10% wastage margin to your final brick calculation. This accounts for transit damage, unloading cracks, and custom edge cutting required around door frames, structural windows, and corner wall interlocks."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator be used for fly ash bricks as well as red clay bricks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This calculator applies to fly ash bricks, concrete blocks, and traditional red clay bricks. As long as you know the specific height, length, and width dimensions of the structural blocks you are purchasing, the mathematical logic remains identical."
        }
      },
      {
        "@type": "Question",
        "name": "What is the weight and density of standard construction cement used in the formulas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard ordinary Portland cement (OPC) or Portland pozzolana cement (PPC) has a globally accepted dry bulk density of 1,440 kilograms per cubic meter (kg/m³). Commercial bags are packed at exactly 50 kg per bag, which is the exact scale conversion rule used by our backend processing core."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Brickwork Calculator (Bricks, Cement, Sand)</h1>
        <p className="mb-4 text-lg text-gray-600">
          Whether you are managing a large commercial development or building a simple backyard partition wall, accurate material procurement is essential for keeping construction costs under control. Over-ordering leads to material wastage and costly site clutter, while under-ordering causes project delays and increased transportation expenses.
        </p>
        <p className="mb-4">
          Our professional-grade <strong>Brickwork Calculator</strong> utilizes proven civil engineering formulas to take the guesswork out of your planning. It instantly computes the total number of bricks required, the number of 50kg cement bags needed, and the total volume of sand in Cubic Feet (CFT) or cubic meters for any masonry wall.
        </p>
        <p className="mb-4">
          This comprehensive estimation engine supports standard red clay bricks, fly ash blocks, and custom block sizes. By accounting for variables like wall thickness, specific mortar mix ratios, and material wastage factors, it provides reliable results for projects in India, the USA, and worldwide.
        </p>
      </section>

      {/* --- WALL THICKNESS UNDERSTANDING --- */}
      <section className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Brick Wall Thickness & Mortar Ratios</h2>
        <p className="mb-4">
          In global construction setups, the layout design of a brick wall dictates both its total structural volume and the strength requirement of its mortar bed.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-blue-900 mb-2">4.5-Inch Wall (Half Brick Wall)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Commonly used for non-load-bearing internal partition setups, bathroom divisions, and interior boundaries.
            </p>
            <ul className="text-xs space-y-1 text-gray-700 list-disc pl-4">
              <li>Requires approx. <strong>4.5 to 5 bricks per sq ft</strong>.</li>
              <li>Recommended Mortar Ratio: <strong>1:4</strong> (High bond strength).</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-blue-900 mb-2">9-Inch Wall (Full Brick Wall)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Standard configuration for load-bearing structural walls, external perimeters, and foundational boundaries.
            </p>
            <ul className="text-xs space-y-1 text-gray-700 list-disc pl-4">
              <li>Requires approx. <strong>9 to 10 bricks per sq ft</strong>.</li>
              <li>Recommended Mortar Ratio: <strong>1:5 or 1:6</strong> (Standard structural load distribution).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- HOW TO USE SECTION --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Brickwork Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          Our engineering-backed verification platform handles all multi-variable unit conversions automatically. Follow these instructions to generate your material estimate:
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-900 block">1. Select Measurement Unit:</span>
            <p>Choose between <strong>Feet</strong> or <strong>Meters</strong>. This sets the input standard for your wall length, height, and thickness parameters.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">2. Input Wall Dimensions:</span>
            <p>Provide the total length and height of the wall. For thickness, you can select standard profiles (like 4.5-inch or 9-inch layouts) or enter a custom thickness value.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">3. Specify Brick Type & Size:</span>
            <p>Choose from standard presets like Traditional Red Bricks (230 mm × 115 mm × 75 mm), Modular Bricks (190 mm × 90 mm × 90 mm), or input custom dimensions tailored to your local suppliers.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">4. Select Mortar Mix Ratio:</span>
            <p>Choose your target volumetric composition from the dropdown menu options (<strong>1:3, 1:4, 1:5, or 1:6</strong>). The first number represents parts of cement, and the second represents parts of dry sand.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">5. Define Wastage Margin (Optional):</span>
            <p>Input your preferred buffer percentage (a 5% margin is standard) to account for transport breakages, cutting waste, and on-site handling errors.</p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 mt-6 text-base">Calculated Outputs Generated:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Bricks Count:</strong> The net quantity of pieces required, including your specified wastage allowance.</li>
          <li><strong>Cement Bags Required:</strong> The total number of standard 50 kg bags of cement needed for the mortar.</li>
          <li><strong>Sand Volume:</strong> Total sand requirements, displayed in both Cubic Feet (CFT) and cubic meters for easy ordering.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Civil Engineering Math Behind the Estimates</h2>
        <p className="mb-4 text-sm text-gray-600">
          To provide highly accurate numbers, our calculator operates on standard structural design formulas used by civil engineers. Here is the step-by-step breakdown of how these values are determined:
        </p>

        <div className="space-y-6">
          {/* Brick count formula */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Step 1: Total Brick Count Calculation</h3>
            <p className="text-sm mb-3 text-gray-700">
              First, the volume of the wall is calculated. Next, the volume of a single brick is determined, adding a standard 10mm mortar joint to its dimensions.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-amber-900 font-bold text-center shadow-inner overflow-x-auto">
              Number of Bricks = Total Wall Volume ÷ Volume of 1 Brick with Mortar Joint
            </div>
          </div>

          {/* Mortar Volume */}
          <div className="bg-teal-50/40 p-6 rounded-2xl border border-teal-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Step 2: Dry Mortar Volume Analysis</h3>
            <p className="text-sm mb-3 text-gray-700">
              The true space occupied by the bricks alone (without mortar) is subtracted from the total wall volume to find the wet mortar volume. Because dry cement and sand shrink when water is added, a dry volume conversion factor of <strong>1.33</strong> is applied.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-teal-900 font-bold text-center shadow-inner overflow-x-auto space-y-2">
              <div>Wet Mortar Volume = Total Wall Volume − (Actual Brick Count × Raw Brick Volume)</div>
              <div className="text-xs text-gray-500">Dry Mortar Volume = Wet Mortar Volume × 1.33</div>
            </div>
          </div>

          {/* Cement & Sand splitting */}
          <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Step 3: Component Breakdown (Cement & Sand)</h3>
            <p className="text-sm mb-3 text-gray-700">
              Using the specified mix ratio (e.g., 1:6, where the sum of parts is 7), the dry mortar volume is divided proportionally. Cement volume is then converted to bags using its material bulk density (1,440 kg/m³).
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-xs md:text-sm text-indigo-900 font-bold text-center shadow-inner overflow-x-auto space-y-2">
              <div>Cement Volume (m³) = (Cement Part ÷ Sum of Ratio Parts) × Dry Mortar Volume</div>
              <div>Cement Bags = (Cement Volume × 1440 kg/m³) ÷ 50 kg</div>
              <div>Sand Volume (CFT) = (Sand Part ÷ Sum of Ratio Parts) × Dry Mortar Volume × 35.3147</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Calculation Scenarios</h2>
        <p className="mb-4 text-sm text-gray-600">
          Review these step-by-step practical examples to see how these engineering formulas apply to actual construction projects.
        </p>

        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-amber-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: External Perimeter Wall (9-Inch Thickness)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Suppose you need to build an exterior boundary wall measuring <strong>10 feet long and 10 feet high</strong> (100 sq ft) with a standard thickness of <strong>9 inches</strong>. This project uses traditional red bricks (230 mm × 115 mm × 75 mm) and a standard <strong>1:6 mortar ratio</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Wall Volume: 3.048m × 3.048m × 0.23m = 2.07 m³</li>
              <li>Brick Volume (with 10mm mortar): 0.24m × 0.125m × 0.085m = 0.00255 m³</li>
              <li>Net Brick Count: 2.07 ÷ 0.00255 = 811 Bricks (+5% wastage buffer = 852 Bricks)</li>
              <li>Wet Mortar Volume: 2.07 m³ − (811 × 0.23m × 0.115m × 0.075m) = 0.47 m³</li>
              <li>Dry Mortar Volume: 0.47 m³ × 1.33 = 0.62 m³</li>
              <li>Cement Estimation: (1 ÷ 7) × 0.62 m³ = 0.088 m³ → (0.088 × 1440) ÷ 50 = 2.5 Bags</li>
              <li>Sand Estimation: (6 ÷ 7) × 0.62 m³ × 35.3147 = 18.7 CFT of Sand</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-amber-800">Final Material Requirement: 852 Bricks, 3 Bags of Cement, and 19 CFT of Sand.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-indigo-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Interior Partition Wall (4.5-Inch Thickness)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Suppose you are building an interior partition wall measuring <strong>12 feet long and 9 feet high</strong> with a thickness of <strong>4.5 inches</strong>. This setup uses a richer <strong>1:4 mortar mix</strong> to ensure excellent bond strength.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Wall Volume: 3.657m × 2.743m × 0.115m = 1.154 m³</li>
              <li>Net Brick Count: 1.154 ÷ 0.00255 = 453 Bricks (+5% wastage buffer = 476 Bricks)</li>
              <li>Wet Mortar Volume: 1.154 m³ − (453 × 0.001984 m³) = 0.255 m³</li>
              <li>Dry Mortar Volume: 0.255 m³ × 1.33 = 0.339 m³</li>
              <li>Cement Estimation: (1 ÷ 5) &times; 0.339 m³ = 0.0678 m³ → (0.0678 × 1440) ÷ 50 = 1.95 Bags</li>
              <li>Sand Estimation: (4 ÷ 5) × 0.339 m³ × 35.3147 = 9.57 CFT of Sand</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-indigo-800">Final Material Requirement: 476 Bricks, 2 Bags of Cement, and 10 CFT of Sand.</p>
          </div>
        </div>
      </section>

      {/* --- TECHNICAL TIPS SECTION --- */}
      <section className="bg-gradient-to-r from-stone-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Tips for High-Quality Brick Masonry</h3>
        <p className="text-sm text-gray-700 mb-3">
          To achieve structural durability and prevent water seepage or wall cracks over time, keep these essential site tips in mind:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-gray-600">
          <li><strong>Pre-Soaking Bricks:</strong> Always soak traditional red clay bricks thoroughly in clean water before laying them. This prevents dry bricks from absorbing moisture from the mortar mix, which can weaken the cement bond.</li>
          <li><strong>Joint Thickness Consistency:</strong> Maintain a uniform mortar bed thickness between 8mm and 12mm. Excessively thick joints can lead to structural settlement, while joints that are too thin may lack adequate shear strength.</li>
          <li><strong>Proper Curing:</strong> Once the brickwork is complete, cure the wall by spraying it with water twice a day for at least 7 to 10 days. Proper curing allows the cement to reach its maximum design strength.</li>
        </ul>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many bricks are required for a 1 square foot area?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The number of bricks required per square foot depends heavily on the wall thickness. For a standard 4.5-inch thick wall (half-brick wall), you need approximately 4.5 to 5 bricks per square foot. For a 9-inch thick wall (full-brick wall), you will need double the amount, which is roughly 9 to 10 bricks per square foot.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why do we multiply the wet mortar volume by 1.33 for dry volume?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When dry cement and sand particles are mixed with water, they undergo a chemical process and fill voids, causing the overall mixture to shrink in volume. To compensate for this volume reduction and ensure you purchase enough raw materials, civil engineers apply a dry volume conversion factor of 1.33 (representing a 33% increase).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the best cement-to-sand ratio for interior partition walls?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For interior partition walls which are typically 4.5 inches thick, a richer mortar mix ratio of 1:4 (1 part cement to 4 parts sand) is highly recommended. This provides the necessary structural adhesion and tensile strength required for thinner single-layer brick alignments.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How much material wastage should I account for in a brick masonry project?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It is a standard construction practice to add a 5% to 10% wastage margin to your final brick calculation. This accounts for transit damage, unloading cracks, and custom edge cutting required around door frames, structural windows, and corner wall interlocks.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can this calculator be used for fly ash bricks as well as red clay bricks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. This calculator applies to fly ash bricks, concrete blocks, and traditional red clay bricks. As long as you know the specific height, length, and width dimensions of the structural blocks you are purchasing, the mathematical logic remains identical.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the weight and density of standard construction cement used in the formulas?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Standard ordinary Portland cement (OPC) or Portland pozzolana cement (PPC) has a globally accepted dry bulk density of 1,440 kilograms per cubic meter (kg/m³). Commercial bags are packed at exactly 50 kg per bag, which is the exact scale conversion rule used by our backend processing core.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Construction & Civil Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Ensure your construction projects are fully calculated and your materials perfectly optimized with our suite of free tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/construction/aac-block" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">AAC Block & Adhesive Calculator</a>
          <a href="/calculator/construction/brass-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brass Volume Calculator (Sand & Aggregate)</a>
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
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}