import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Column & Footing Concrete Calculator | Estimate CFT & Bags
  2. META DESCRIPTION: Free online column and footing concrete calculator. Accurately calculate concrete volume in CFT or cubic meters, cement bags, sand, and aggregates.
  3. URL SLUG: /calculator/construction/column-footing
  4. H1 TITLE: Professional Column & Footing Concrete Volume Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: column and footing concrete calculator
      - Secondary keywords: calculate footing concrete volume, column concrete mix estimator, concrete volume in cft, cement sand aggregate calculator, square column volume formula, round pillar concrete calculation, foundation concrete requirements, structural cement bag calculator, rcc foundation estimator, civil engineering concrete formula.
      - Long-tail keywords: how to calculate concrete for columns and footings, house foundation concrete volume calculation, concrete mixer ratio for pillars, how many cement bags for 100 cft concrete, estimating ready mix concrete for footings.
  =========================================
*/

export default function ColumnFootingContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate the concrete volume for a rectangular footing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find the concrete volume of a rectangular footing, multiply its structural Length by its Width and its total Depth (Thickness). For example, a footing measuring 5 feet by 5 feet with a thickness of 1 foot has a total wet volume of 5 × 5 × 1 = 25 Cubic Feet (CFT)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the concrete dry volume conversion factor, and why is 1.54 used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When dry components like cement, sand, and coarse aggregates are mixed with water, the smaller particles fill the voids between the larger stone materials, causing the volume to shrink. To compensate for this shrinkage, civil engineers multiply the required wet volume by a standard dry material expansion factor of 1.54 to determine the true quantities of raw dry materials to purchase."
        }
      },
      {
        "@type": "Question",
        "name": "What concrete grade is recommended for residential columns and foundations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard residential building columns and load-bearing footings, M20 grade concrete is highly recommended. It follows a volumetric mix ratio of 1:1.5:3 (1 part cement, 1.5 parts dry sand, and 3 parts stone aggregates) and yields a minimum compressive strength of 20 N/mm² after a standard 28-day curing process."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert structural column concrete volume from CFT to Cubic Meters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert your concrete requirement from Cubic Feet (CFT) to Cubic Meters (m³), divide the total CFT value by 35.3147. Conversely, if you have your total dimensions calculated in cubic meters and need CFT, multiply the value by 35.3147."
        }
      },
      {
        "@type": "Question",
        "name": "How much concrete wastage buffer should be applied when ordering ready-mix concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is standard construction practice to add a 5% to 10% wastage allowance when placing orders for Ready-Mix Concrete (RMC) or manual site mixing. This buffer accounts for formwork deflection, surface irregularities inside the excavated soil pits, transit spillage, and residual structural materials left inside pump lines."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Column & Footing Concrete Volume Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          The structural safety of any multi-story building or residential home relies on the strength of its foundation system. Accurately estimating structural concrete for columns and footings prevents expensive project delays, short-delivery transportation fees, or material wastage at the job site.
        </p>
        <p className="mb-4">
          Our advanced <strong>Column and Footing Concrete Calculator</strong> is an engineering tool designed to simplify complex material estimations. By evaluating your structural dimension inputs, it automatically outputs the exact combined wet concrete volume required for your foundation layout.
        </p>
        <p className="mb-4">
          Beyond general volumetric metrics, this tool calculates dry ingredient breakdowns. It estimates the exact number of 50kg cement bags, sand volume in Cubic Feet (CFT), and coarse gravel aggregates required to achieve standard structural mix designs.
        </p>
      </section>

      {/* --- CORE STRUCTURAL TERMS --- */}
      <section className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Construction Terminology Explained</h2>
        <p className="mb-4 text-sm text-gray-600">
          Before pouring materials, it helps to understand the key technical terms used by engineers and masonry contractors during foundation layout designs:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-base text-blue-900 mb-1">RCC (Reinforced Concrete)</h3>
            <p className="text-xs text-gray-600">
              Structural concrete embedded with high-tensile steel rebars. This is required for columns and footings to bear heavy structural loads.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-base text-blue-900 mb-1">PCC (Plain Concrete)</h3>
            <p className="text-xs text-gray-600">
              A foundational lean concrete bed poured directly over soil before installing rebar cages. It provides a level base and keeps reinforcement away from ground moisture.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <h3 className="font-bold text-base text-blue-900 mb-1">Dry Volume Expansion</h3>
            <p className="text-xs text-gray-600">
              A standard engineering multiplier (1.54) used to scale up wet volume calculations to account for void reduction when mixing dry ingredients with water.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW TO USE SECTION --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          This calculation tool accommodates both imperial and metric engineering formats. Follow these steps to generate an accurate material estimate:
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-900 block">1. Select Unit Mode:</span>
            <p>Toggle between <strong>Feet</strong> or <strong>Meters</strong>. This selection automatically scales your dimension input fields and output units.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">2. Input Footing Geometry:</span>
            <p>Provide the length, width, and depth (thickness) of the structural base footing pad.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">3. Choose Column Shape & Dimensions:</span>
            <p>Select either a <strong>Rectangular / Square</strong> column profile or a <strong>Circular / Round</strong> pillar design, then enter the corresponding width, diameter, and vertical height parameters.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">4. Adjust Design Multipliers:</span>
            <p>Set the structural quantity count to duplicate the calculations across multiple identical framework units. You can also include a wastage buffer (5% to 10% is standard) to safeguard against site spillage.</p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 mt-6 text-base">Summary Reports Generated:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Footing Concrete Volume:</strong> Volumetric demands for the base foundation framework.</li>
          <li><strong>Column Concrete Volume:</strong> Material requirements for the vertical load-bearing pillars.</li>
          <li><strong>Total Mixed Volume:</strong> Combined concrete requirements provided in both Cubic Feet (CFT) and Cubic Meters (m³).</li>
          <li><strong>Material Ingredient Breakdown:</strong> Clear, actionable estimates showing the total bags of cement, sand volume, and coarse stone aggregates required based on your target mix.</li>
        </ul>
      </section>

      {/* --- MATHEMATICAL FORMULAS --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Civil Engineering Math Behind the Calculations</h2>
        <p className="mb-4 text-sm text-gray-600">
          Our system calculates volume by breaking the structural components down into individual geometric solids. The volume is computed for each part, combined, and then adjusted using material density properties.
        </p>

        <div className="space-y-6">
          {/* Footing Formula */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Rectangular Footing Pad Volume</h3>
            <p className="text-sm mb-3 text-gray-700">
              The base footing pad is calculated as a standard 3D cuboid solid:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-amber-900 font-bold text-center shadow-inner">
              Footing Volume = Length × Width × Depth
            </div>
          </div>

          {/* Column Profile Formula */}
          <div className="bg-teal-50/40 p-6 rounded-2xl border border-teal-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Vertical Column Pillar Volume</h3>
            <p className="text-sm mb-3 text-gray-700">
              Depending on the specified architectural design profile, the system applies one of two geometric formulas:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-xs md:text-sm text-teal-900 font-bold text-left space-y-3 shadow-inner">
              <div>• Rectangular / Square Column: Volume = Length × Width × Height</div>
              <div>• Circular / Round Column: Volume = π × (Radius)² × Height</div>
              <div className="text-xs text-gray-500 font-sans italic">(Where π ≈ 3.14159, and Radius = Diameter ÷ 2)</div>
            </div>
          </div>

          {/* Dry Ingredients Formula */}
          <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Dry Material Ingredient Breakdown</h3>
            <p className="text-sm mb-3 text-gray-700">
              To split the total volume into raw material components (such as an M20 concrete grade mix ratio of 1:1.5:3, which equals 5.5 total parts), the calculator converts the wet volume into a dry volume using the engineering factor of 1.54:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-xs md:text-sm text-indigo-900 font-bold text-left space-y-2 shadow-inner">
              <div>• Dry Volume = Total Wet Volume × 1.54</div>
              <div>• Cement Volume = (1 ÷ 5.5) × Dry Volume</div>
              <div>• Cement Bags = (Cement Volume × 1440 kg/m³) ÷ 50 kg</div>
              <div>• Sand Volume = (1.5 ÷ 5.5) × Dry Volume</div>
              <div>• Aggregate Volume = (3 ÷ 5.5) × Dry Volume</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Calculation Examples</h2>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-amber-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: Residential Square Column & Footing</h3>
            <p className="mb-3 text-sm text-gray-600">
              Calculate the concrete requirements for a single foundation set featuring a <strong>4ft × 4ft rectangular footing</strong> (1 foot deep) paired with a <strong>9 inch × 12 inch rectangular column</strong> that stands <strong>10 feet high</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Footing Volume = 4 ft × 4 ft × 1 ft = 16.00 CFT</li>
              <li>Column Conversions = 9 in ÷ 12 = 0.75 ft; 12 in ÷ 12 = 1.00 ft</li>
              <li>Column Volume = 0.75 ft × 1.00 ft × 10 ft = 7.50 CFT</li>
              <li>Total Wet Volume = 16.00 + 7.50 = 23.50 CFT per pillar unit</li>
              <li>Total with 5% Wastage Buffer = 23.50 × 1.05 = 24.68 CFT (approx. 0.70 m³)</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-amber-800">Result: You will need to order or mix 24.7 CFT of concrete for this assembly.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-teal-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Commercial Round Pillar Foundation</h3>
            <p className="mb-3 text-sm text-gray-600">
              Calculate the requirements for <strong>6 identical pillars</strong> with a <strong>1.5-meter × 1.5-meter footing base</strong> (0.4 meters deep) and a <strong>circular column with a 0.3-meter diameter</strong> and a <strong>4-meter height</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Single Footing Volume = 1.5m × 1.5m × 0.4m = 0.90 m³</li>
              <li>Circular Column Radius = 0.3m ÷ 2 = 0.15m</li>
              <li>Single Column Volume = 3.14159 × (0.15m)² × 4m = 0.283 m³</li>
              <li>Combined Assembly Volume = 0.90m³ + 0.283m³ = 1.183 m³</li>
              <li>Total for 6 Pillars with 5% Wastage = 1.183 × 6 × 1.05 = 7.45 m³ (approx. 263.2 CFT)</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-teal-800">Result: Your project requires 7.45 cubic meters of concrete in total.</p>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES ON SITE --- */}
      <section className="bg-gradient-to-r from-slate-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Site Supervision Tips for Pouring Foundations</h3>
        <p className="text-sm text-gray-700 mb-3">
          Achieving your target concrete strength depends on following proper placement guidelines on site:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-gray-600">
          <li><strong>Avoid Segregation:</strong> Never drop wet concrete mixtures from a height greater than 1.5 meters. Doing so can cause coarse aggregates to separate from the cement paste, resulting in weak spots.</li>
          <li><strong>Mechanical Vibration:</strong> Use needle vibrators effectively during the pour. Proper vibration settles the concrete around complex steel rebar patterns, preventing internal air pockets and honeycombing.</li>
          <li><strong>Curing Schedule:</strong> Keep the structural concrete forms wet for at least 7 to 14 days after pouring. Adequate hydration prevents shrinkage cracks and helps the concrete achieve its full design strength.</li>
        </ul>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do you calculate the concrete volume for a rectangular footing?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To find the concrete volume of a rectangular footing, multiply its structural Length by its Width and its total Depth (Thickness). For example, a footing measuring 5 feet by 5 feet with a thickness of 1 foot has a total wet volume of 5 × 5 × 1 = 25 Cubic Feet (CFT).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why do we multiply the wet concrete volume by 1.54 for dry volume?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When dry components like cement, sand, and coarse aggregates are mixed with water, the smaller particles fill the voids between the larger stone materials, causing the volume to shrink. To compensate for this shrinkage, civil engineers multiply the required wet volume by a standard dry material expansion factor of 1.54 to determine the true quantities of raw dry materials to purchase.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What concrete grade is recommended for residential columns and foundations?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For standard residential building columns and load-bearing footings, M20 grade concrete is highly recommended. It follows a volumetric mix ratio of 1:1.5:3 (1 part cement, 1.5 parts dry sand, and 3 parts stone aggregates) and yields a minimum compressive strength of 20 N/mm² after a standard 28-day curing process.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do I convert structural column concrete volume from CFT to Cubic Meters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To convert your concrete requirement from Cubic Feet (CFT) to Cubic Meters (m³), divide the total CFT value by 35.3147. Conversely, if you have your total dimensions calculated in cubic meters and need CFT, multiply the value by 35.3147.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How much concrete wastage buffer should be applied when ordering ready-mix concrete?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It is standard construction practice to add a 5% to 10% wastage allowance when placing orders for Ready-Mix Concrete (RMC) or manual site mixing. This buffer accounts for formwork deflection, surface irregularities inside the excavated soil pits, transit spillage, and residual structural materials left inside pump lines.
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
          <a href="/calculator/construction/brick" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brickwork Calculator (Bricks, Cement, Sand)</a>
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