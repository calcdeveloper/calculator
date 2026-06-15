import React from 'react';

/* =========================================================================
  SEO METADATA & REQUIREMENTS
  =========================================================================
  1. SEO TITLE: Concrete Mix Calculator | Estimate Cement, Sand & Aggregate
  2. META DESCRIPTION: Free online concrete mix calculator. Accurately estimate required cement bags, sand volume, and coarse aggregate weight for M20, M15, M10, or custom design ratios.
  3. URL SLUG: /calculator/construction/concrete-mix
  4. H1 TITLE: Professional Concrete Mix Calculator (Cement, Sand, Aggregate)

  11. SEO KEYWORDS:
      - Primary keyword: concrete mix calculator
      - Secondary keywords: cement sand aggregate calculator, concrete ratio estimator, calculate cement bags for slab, dry volume of concrete, m20 concrete mix proportion, sand aggregate cft calculator, volumetric concrete mix ratio, concrete material estimator, construction material calculator, civil engineering mix design.
      - Long-tail keywords: how to calculate cement sand and aggregate for 100 cft concrete, how many cement bags required for m20 concrete, concrete mix ratio for house roof slab, calculating construction materials in brass, concrete volume to raw materials breakdown.
  =========================================================================
*/

export default function ConcreteCalculatorContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the 1.54 dry volume factor in concrete calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When dry concrete ingredients (cement, sand, and stone aggregates) are mixed with water, the fine particles fill the empty air voids between the larger coarse aggregate stones. This causes the total volume to shrink by roughly 54%. To obtain 1 cubic meter of wet, compacted concrete, you must start with 1.54 cubic meters of dry materials."
        }
      },
      {
        "@type": "Question",
        "name": "How many cement bags are required for 1 cubic meter of M20 concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard M20 nominal concrete mix ratio of 1:1.5:3, approximately 8 bags of cement (50kg each) are required per cubic meter of wet concrete. This is derived by multiplying the 1 m³ wet volume by the 1.54 dry factor, dividing by the sum of the ratio parts (5.5), and factoring in the density of cement (1440 kg/m³)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard concrete mix ratio for a house roof slab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard residential building roof slabs, beams, and columns in India, the M20 grade concrete mix is universally recommended. The volumetric ratio for M20 is 1:1.5:3, representing 1 part cement, 1.5 parts fine sand, and 3 parts coarse stone aggregates."
        }
      },
      {
        "@type": "Question",
        "name": "How do you convert concrete sand and aggregate volumes into Brass?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Indian construction markets, materials like sand and aggregate are often ordered in bulk using a unit called 'Brass'. One Brass is equal to exactly 100 Cubic Feet (CFT) of material volume. To convert your calculated CFT output into Brass, simply divide the total CFT value by 100."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between nominal mix and design mix concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nominal mixes (like M15, M20) use fixed volume proportions based on standard guidelines and are ideal for small to medium residential builds. Design mixes are engineered through lab testing based on the precise moisture, quality, and grade of locally available raw materials, typically used for large-scale or commercial structures."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Concrete Mix Calculator (Cement, Sand, Aggregate)</h1>
        <p className="mb-4 text-lg text-gray-600">
          Ordering bulk raw materials for a construction project without accurate math can lead to costly material shortages or waste. Whether you are laying an engineered residential foundation, casting a heavy reinforced concrete roof slab (lanter), or setting fence posts, our professional <strong>Concrete Mix Calculator</strong> simplifies material procurement.
        </p>
        <p className="mb-4">
          This analytical material optimization tool is designed for civil engineers, site masonry contractors, and DIY property builders across India and the United States. By converting wet structural volumes into dry component weights, it provides the exact count of 50kg cement bags, along with the volume of fine sand and coarse stone aggregates needed in both cubic units and traditional bulk trade units.
        </p>
      </section>

      {/* --- UNDERSTANDING MIX GRADATIONS --- */}
      <section className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Concrete Mix Ratios and Grades</h2>
        <p className="mb-4 text-sm text-gray-600">
          In civil engineering, concrete is classified into structural grades. The prefix <strong>"M"</strong> denotes the Mix configuration, while the trailing number specifies its characteristic compressive strength measured in Newtons per square millimeter (N/mm²) after a standard 28-day water-curing period.
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Each grade corresponds to a specific structural volumetric ratio of <strong>Cement : Sand (Fine Aggregate) : Stone gravel (Coarse Aggregate)</strong>:
        </p>
        
        <div className="space-y-3 mt-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-blue-900 block text-base">M10 Grade Concrete Mix (Proportion 1 : 3 : 6)</span>
            <p className="text-xs text-gray-600 mt-1">
              Yields a compressive strength of 10 N/mm². This low-strength configuration is typically reserved for non-structural Plain Cement Concrete (PCC) beds, leveling courses underneath foundations, or sub-base pathways.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-blue-900 block text-base">M15 Grade Concrete Mix (Proportion 1 : 2 : 4)</span>
            <p className="text-xs text-gray-600 mt-1">
              Yields a compressive strength of 15 N/mm². This composition is commonly used for secondary residential driveways, non-load-bearing floors, or courtyard hardscaping surfaces.
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-blue-900 block text-base">M20 Grade Concrete Mix (Proportion 1 : 1.5 : 3)</span>
            <p className="text-xs text-gray-600 mt-1">
              Yields a compressive strength of 20 N/mm². <strong>This standard mix is recommended for load-bearing RCC structures, structural beams, columns, and residential roof slabs.</strong>
            </p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200">
            <span className="font-bold text-blue-900 block text-base">M25 Grade Concrete Mix (Proportion 1 : 1 : 2)</span>
            <p className="text-xs text-gray-600 mt-1">
              Yields a compressive strength of 25 N/mm². This high-performance composition is utilized for high-load columns, structural retaining walls, and commercial building frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW TO USE SECTION --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          Our layout simplifies entering dimensions and managing mixed units. Follow these steps to generate an accurate material estimate:
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-900 block">1. Select Calculation Input Mode:</span>
            <p>Choose whether to calculate material breakdowns by inputting structural dimensions (Length, Width, and Thickness) or by directly entering a pre-calculated total wet volume.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">2. Choose the Measurement Unit:</span>
            <p>Toggle between metric system parameters (meters or centimeters) or imperial systems (feet or inches) based on your blueprint plans.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">3. Select the Concrete Target Grade:</span>
            <p>Pick a nominal mix ratio (M10, M15, M20, M25) from the dropdown option menu, or select the custom option to specify unique design proportions.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">4. Define Your Safety Wastage Buffer:</span>
            <p>Input a wastage allowance percentage (5% to 10% is standard) to account for structural formwork deflection, spills, and site irregularities.</p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 mt-6 text-base">Summary Output Metrics Generated:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Wet Volume & Dry Volume:</strong> Volumetric metrics across multiple units.</li>
          <li><strong>Cement Requirement:</strong> Total required quantity displayed in both weight kilograms and standard commercial 50kg bags.</li>
          <li><strong>Sand Requirement:</strong> Net fine aggregate volume calculated in Cubic Feet (CFT) and Cubic Meters.</li>
          <li><strong>Coarse Aggregate Requirement:</strong> Stone aggregate metrics including a bulk estimation provided in standard trade <strong>Brass</strong> units.</li>
        </ul>
      </section>

      {/* --- THE 1.54 DRY VOLUME FACTOR DEEP DIVE --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science of Dry Volume: The 1.54 Engineering Rule</h2>
        <p className="mb-4">
          A common mistake made by beginners is assuming that ordering 1 cubic meter of dry raw material yields 1 cubic meter of wet concrete. When water is added to a dry mix of cement, sand, and stone gravel, the mixture shrinks.
        </p>
        <p className="mb-4">
          This shrinkage occurs because the fine cement and sand particles slide into the empty air voids between the larger stone aggregate pieces. To account for this volume loss during mixing and compaction, civil engineers apply a standard multi-variable dry material expansion factor of <strong>1.54</strong>.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-4">
          <span className="font-bold text-amber-900 block mb-1">Key Dynamic Rule:</span>
          <p className="text-sm text-amber-800">
            Dry Material Volume Requirement = Total Required Structural Wet Volume × 1.54
          </p>
        </div>
        <p className="text-sm text-gray-600">
          This adjustment ensures that once water is added and the mix is thoroughly vibrated inside the formwork, you achieve the exact structural dimensions specified in your project plans.
        </p>
      </section>

      {/* --- MATHEMATICAL EQUATIONS --- */}
      <section className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Math Behind Material Apportionment</h2>
        <p className="mb-4 text-sm text-gray-600">
          To break down a concrete grade (such as M20 with a ratio of 1 : 1.5 : 3), the calculator sums the individual parts of the ratio and calculates each component's share of the total dry volume:
        </p>

        <div className="space-y-4 font-mono text-xs md:text-sm text-slate-800 bg-white p-5 rounded-xl border border-slate-200 shadow-inner">
          <div>• Sum of Ratio Parts (S) = Cement Part (C) + Sand Part (F) + Aggregate Part (A)</div>
          <div className="text-gray-400 font-sans italic my-1">For M20 Grade: S = 1 + 1.5 + 3 = 5.5</div>
          <hr className="my-2" />
          <div>• Cement Material Volume = (C ÷ S) × Total Calculated Dry Volume</div>
          <div>• Cement Weight (kg) = Cement Material Volume × 1440 kg/m³ (Standard Bulk Density)</div>
          <div>• Required 50kg Bags Count = Total Weight in kg ÷ 50</div>
          <hr className="my-2" />
          <div>• Fine Sand Volume = (F ÷ S) × Total Calculated Dry Volume</div>
          <div>• Coarse Aggregate Volume = (A ÷ S) × Total Calculated Dry Volume</div>
          <hr className="my-2" />
          <div>• Trade Brass Multiplier = Total Volume in Cubic Feet (CFT) ÷ 100</div>
        </div>
      </section>

      {/* --- REAL-WORLD WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Calculation Examples</h2>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-blue-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: Indian Residential Roof Slab (Lanter) Pour</h3>
            <p className="mb-3 text-sm text-gray-600">
              Calculate the required raw materials for a standard structural roof slab measuring <strong>10 meters long, 6 meters wide, and 12 centimeters (0.12 meters) thick</strong> using an <strong>M20 nominal mix grade</strong>.
            </p>
            <div className="text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-xs">
              <div>• Wet Volume = 10m × 6m × 0.12m = 7.20 Cubic Meters (m³)</div>
              <div>• Apply 1.54 Factor: Dry Volume = 7.20 × 1.54 = 11.088 m³</div>
              <div>• Sum of M20 Mix Parts = 1 + 1.5 + 3 = 5.5 total parts</div>
              <div>• Cement Demand = (1 ÷ 5.5) × 11.088 = 2.016 m³</div>
              <div>• Cement Mass = 2.016 m³ × 1440 kg/m³ = 2903 kg</div>
              <div>• 50kg Bags Needed = 2903 ÷ 50 = <strong>58.06 Bags (approx. 59 bags)</strong></div>
              <div>• Fine Sand Volume = (1.5 ÷ 5.5) × 11.088 = 3.024 m³ = <strong>106.8 CFT</strong></div>
              <div>• Aggregate Volume = (3 ÷ 5.5) × 11.088 = 6.048 m³ = <strong>213.6 CFT</strong></div>
            </div>
            <p className="mt-3 text-sm font-bold text-blue-800">Result: Your team will need to procure 59 bags of cement, 107 CFT of sand, and 214 CFT of aggregate stone gravel.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-teal-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Backyard Patio Slab (US Imperial Units)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Calculate the required materials for a home patio slab yard expansion measuring <strong>20 feet long by 15 feet wide</strong>, with a recommended structural thickness of <strong>4 inches (0.333 feet)</strong> using a standard 1:2:4 structural mix ratio.
            </p>
            <div className="text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono text-xs">
              <div>• Wet Volume = 20 ft × 15 ft × 0.3333 ft = 100 Cubic Feet (CFT)</div>
              <div>• Apply 1.54 Expansion Factor: Dry Volume = 100 × 1.54 = 154 CFT</div>
              <div>• Sum of Mix Parts = 1 + 2 + 4 = 7 total components</div>
              <div>• Cement Volume Needed = (1 ÷ 7) × 154 = 22 CFT</div>
              <div>• Convert Cement Volume to Weight = 22 CFT × 90 lbs/ft³ = 1980 lbs</div>
              <div>• Equivalent standard 50kg (110lb) Bags = 1980 ÷ 110 = <strong>18 Bags</strong></div>
              <div>• Fine Sand Volume = (2 ÷ 7) × 154 = <strong>44 Cubic Feet (CFT)</strong></div>
              <div>• Coarse Gravel Volume = (4 ÷ 7) × 154 = <strong>88 Cubic Feet (CFT)</strong></div>
            </div>
            <p className="mt-3 text-sm font-bold text-teal-800">Result: This layout requires 18 bags of structural cement, 44 CFT of sand, and 88 CFT of stone aggregate.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the 1.54 dry volume factor in concrete calculations?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When dry concrete ingredients (cement, sand, and stone aggregates) are mixed with water, the fine particles fill the empty air voids between the larger coarse aggregate stones. This causes the total volume to shrink by roughly 54%. To obtain 1 cubic meter of wet, compacted concrete, you must start with 1.54 cubic meters of dry materials.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many cement bags are required for 1 cubic meter of M20 concrete?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For a standard M20 nominal concrete mix ratio of 1:1.5:3, approximately 8 bags of cement (50kg each) are required per cubic meter of wet concrete. This is derived by multiplying the 1 m³ wet volume by the 1.54 dry factor, dividing by the sum of the ratio parts (5.5), and factoring in the density of cement (1440 kg/m³).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the standard concrete mix ratio for a house roof slab?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For standard residential building roof slabs, beams, and columns in India, the M20 grade concrete mix is universally recommended. The volumetric ratio for M20 is 1:1.5:3, representing 1 part cement, 1.5 parts fine sand, and 3 parts coarse stone aggregates.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do you convert concrete sand and aggregate volumes into Brass?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In Indian construction markets, materials like sand and aggregate are often ordered in bulk using a unit called 'Brass'. One Brass is equal to exactly 100 Cubic Feet (CFT) of material volume. To convert your calculated CFT output into Brass, simply divide the total CFT value by 100.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the difference between nominal mix and design mix concrete?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Nominal mixes (like M15, M20) use fixed volume proportions based on standard guidelines and are ideal for small to medium residential builds. Design mixes are engineered through lab testing based on the precise moisture, quality, and grade of locally available raw materials, typically used for large-scale or commercial structures.
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
          <a href="/calculator/construction/column-footing" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Column Footing</a>
          <a href="/calculator/construction/concrete" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volume</a>
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