import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: Plastering Material Calculator | Estimate Cement & Sand
  2. META DESCRIPTION: Calculate exact bags of cement and CFT of sand needed for wall plastering. Free plaster calculator for 12mm, 15mm, and 20mm thickness with standard mix ratios.
  3. URL SLUG: /calculator/construction/plastering
  4. H1 TITLE: Plastering Material Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: plastering material calculator
      - Secondary Keywords: cement and sand required for plastering, plaster calculation formula, 12mm plaster cement calculation, how much sand for 100 sq ft plaster, plaster thickness standard, dry volume of plaster, calculate sand for plastering, internal wall plaster ratio, external plaster thickness, plaster quantity takeoff.
      - Long-Tail Keywords: how to calculate cement and sand for plastering a wall, formula for dry volume of mortar in plastering, standard mix ratio for 20mm external plaster, cement calculation for 12mm thick plaster 1:4 ratio, difference between wet and dry volume of plaster.
  =========================================================================
*/

export default function PlasterCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const plasterFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard thickness for wall plastering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In civil engineering, 12mm thickness is standard for internal walls where the brick surface is relatively even. For ceilings, a thinner 6mm to 10mm plaster is used. For external walls exposed to weather, a 20mm thick plaster (applied in two coats) is the standard requirement."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we multiply the wet volume by 1.33 for plastering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When water is added to a dry mix of sand and cement, the fine cement particles slip into the microscopic voids between the sand grains, causing the total mixture to shrink. To achieve 1 cubic meter of wet mortar on the wall, you must purchase roughly 33% more dry materials. Thus, we multiply the wet volume by 1.33."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we add a 20% allowance for joint filling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brick and block walls are never perfectly flat. There are depressions, undulations, and empty joints (the spaces between bricks) that consume extra mortar. Standard estimating practices add a 20% volume allowance to account for these gaps before calculating the dry volume."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best cement to sand ratio for plastering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal ratio depends on the application. For internal walls (12mm thick), a 1:4 ratio (1 part cement to 4 parts sand) is recommended for a strong, smooth finish. For external walls (20mm thick), a 1:6 ratio is generally used for the base coat, sometimes followed by a richer finish coat."
        }
      },
      {
        "@type": "Question",
        "name": "How much plaster is required for a 100 sq ft wall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a 100 sq ft wall with standard 12mm internal plaster (1:4 ratio), you will typically require roughly 1 bag of cement (50kg) and about 5 Cubic Feet (CFT) of fine river sand or M-sand."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plasterFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Plastering Material Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Plastering is a critical finishing step in construction. It protects raw brickwork from weathering, provides thermal insulation, and creates a perfectly smooth canvas for paint and putty. However, calculating the exact amount of cement and sand required for the mortar mix can be confusing due to shrinkage, wall unevenness, and varying thickness standards.
        </p>
        <p className="mb-4">
          Our comprehensive <strong>Plastering Material Calculator</strong> acts as your virtual civil engineer. Whether you are a homeowner estimating material costs for a renovation, a contractor placing site orders, or a student learning quantity surveying, this tool delivers highly accurate results. It automatically accounts for brick joint filling, dry volume shrinkage, and your specific mix ratios to output exact bags of cement, CFT of sand, and overall project costs.
        </p>
      </section>

      {/* --- UNDERSTANDING PLASTERING SPECIFICATIONS --- */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Plastering Specifications</h2>
        <p className="mb-4 text-sm text-gray-600">
          Before calculating, it is important to select the right specifications for your specific wall type. The thickness and mix ratio completely change the material consumption.
        </p>
        
        <h3 className="font-bold text-gray-800 mt-4 mb-2">1. Plaster Thickness Standards</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>12 mm Plaster:</strong> The universal standard for internal house walls where the underlying masonry is relatively flat and protected from the elements.</li>
          <li><strong>15 mm Plaster:</strong> Used for interior walls with high undulation, or specific commercial applications where a thicker base is required.</li>
          <li><strong>20 mm Plaster:</strong> Mandatory for external walls exposed to rain and sun. It is usually applied in two coats (a 12mm rough base coat followed by an 8mm finish coat) to prevent water seepage.</li>
        </ul>

        <h3 className="font-bold text-gray-800 mt-4 mb-2">2. Standard Mix Ratios (Cement : Sand)</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>1:3 Ratio:</strong> A highly rich, strong mix. Primarily used for ceilings and concrete surface repairs.</li>
          <li><strong>1:4 Ratio:</strong> The standard, recommended mix for 12mm internal plastering. It offers excellent binding strength and a smooth finish.</li>
          <li><strong>1:5 and 1:6 Ratios:</strong> Economical mixes standardly used for 20mm external base coats or large boundary walls.</li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4">
          Our calculator processes the complex civil engineering formulas behind the scenes. Here is how to configure your inputs using the tool above:
        </p>
        
        <div className="space-y-4 text-sm">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 1: Define the Wall Area</h3>
            <p className="text-gray-600">Enter the <strong>Wall Length</strong> and <strong>Wall Height</strong>. You can input these dimensions in either Feet or Meters. The tool will calculate the total 2D surface area requiring plaster.</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 2: Select Technical Specifications</h3>
            <p className="text-gray-600 mb-2">Use the dropdown menus to select the appropriate civil standards for your wall:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
              <li><strong>Plaster Thickness:</strong> Choose from <em>12 mm, 15 mm, or 20 mm</em> based on whether it is an internal or external wall.</li>
              <li><strong>Mix Ratio:</strong> Choose your cement-to-sand ratio from <em>1:3, 1:4, 1:5, or 1:6</em>.</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 3: Account for Real-World Wastage</h3>
            <p className="text-gray-600">Select a <strong>Wastage Percentage</strong> (<em>10%, 15%, or 20%</em>). Mortar inevitably falls to the floor during application, gets stuck in the mixing tray, or is blown away as sand dust. A 10% to 15% wastage allowance is highly recommended to ensure you don't run out of materials.</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 4: Input Market Prices (For Budgeting)</h3>
            <p className="text-gray-600">Enter the current local <strong>Price of Cement (per 50kg bag)</strong> and the <strong>Price of Sand (per CFT)</strong> to instantly generate your total estimated material cost.</p>
          </div>
        </div>
      </section>

      {/* --- THE FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Civil Engineering Formula Behind the Math</h2>
        <p className="mb-4">
          Estimating plaster is essentially a volume calculation, but it requires two major adjustments: one for uneven brick joints, and another for dry material shrinkage.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">1. Finding the Base Wet Volume</h3>
        <p className="text-sm mb-2">First, we multiply the 2D area of the wall by the thickness of the plaster in meters.</p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          Wet Volume (m³) = Area (m²) × Plaster Thickness (m)
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">2. Adding the Joint Filling Allowance (20%)</h3>
        <p className="text-sm mb-2">Because brick walls have gaps and undulations, standard practice requires adding 20% to the base volume.</p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          Adjusted Wet Volume = Wet Volume + (Wet Volume × 0.20)
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">3. Converting to Dry Volume (The 1.33 Factor)</h3>
        <p className="text-sm mb-2">Wet mortar shrinks. To find how much dry sand and cement to buy, we multiply by 1.33 (adding 33% for shrinkage).</p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          Total Dry Volume = Adjusted Wet Volume × 1.33
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">4. Extracting Cement and Sand Quantities</h3>
        <p className="text-sm mb-2">Using the total dry volume, we split it based on the ratio (e.g., 1:4 means 5 total parts).</p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md leading-relaxed">
          • Cement Volume (m³) = Total Dry Volume × (1 / Total Parts)<br />
          • Cement Bags = (Cement Volume × 1440 kg/m³) ÷ 50 kg<br /><br />
          • Sand Volume (m³) = Total Dry Volume × (Sand Parts / Total Parts)<br />
          • Sand in CFT = Sand Volume × 35.3147
        </div>
      </section>

      {/* --- DETAILED REAL-WORLD WORKED SCENARIOS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Worked Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Internal Bedroom Wall</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are plastering a standard internal wall measuring 15 ft (Length) by 10 ft (Height). You select a <strong>12mm Thickness</strong> and a <strong>1:4 Ratio</strong>. You apply a <strong>10% wastage</strong> buffer.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Area:</strong> 15 × 10 = 150 Sq.ft (or 13.93 m²).</div>
            <div><strong>2. Base Wet Volume:</strong> 13.93 m² × 0.012 m = 0.167 m³.</div>
            <div><strong>3. Joint Allowance (+20%):</strong> 0.167 × 1.20 = 0.200 m³.</div>
            <div><strong>4. Dry Volume Conversion (×1.33):</strong> 0.200 × 1.33 = 0.266 m³.</div>
            <div><strong>5. Include Wastage (+10%):</strong> 0.266 × 1.10 = <strong>0.293 m³ Total Dry Volume</strong>.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Cement:</strong> 0.293 × (1/5) = 0.0586 m³.<br />
              Bags = (0.0586 × 1440) ÷ 50 = <strong>1.68 Bags</strong> (Order 2 Bags).
            </div>
            <div>
              <strong>Sand:</strong> 0.293 × (4/5) = 0.234 m³.<br />
              CFT = 0.234 × 35.31 = <strong>8.2 CFT</strong>.
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: House Exterior Wall</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are plastering an exterior wall exposed to heavy rain measuring 20 ft by 10 ft. You select a <strong>20mm Thickness</strong> and an economical <strong>1:6 Ratio</strong>. You choose a <strong>15% wastage</strong> buffer due to high wind on site.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Area:</strong> 20 × 10 = 200 Sq.ft (or 18.58 m²).</div>
            <div><strong>2. Base Wet Volume:</strong> 18.58 m² × 0.020 m = 0.371 m³.</div>
            <div><strong>3. Joint Allowance (+20%):</strong> 0.371 × 1.20 = 0.445 m³.</div>
            <div><strong>4. Dry Volume Conversion (×1.33):</strong> 0.445 × 1.33 = 0.592 m³.</div>
            <div><strong>5. Include Wastage (+15%):</strong> 0.592 × 1.15 = <strong>0.681 m³ Total Dry Volume</strong>.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Cement:</strong> Ratio 1:6 means 7 parts total. 0.681 × (1/7) = 0.097 m³.<br />
              Bags = (0.097 × 1440) ÷ 50 = <strong>2.8 Bags</strong> (Order 3 Bags).
            </div>
            <div>
              <strong>Sand:</strong> 0.681 × (6/7) = 0.583 m³.<br />
              CFT = 0.583 × 35.31 = <strong>20.6 CFT</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard thickness for wall plastering?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In civil engineering, 12mm thickness is standard for internal walls where the brick surface is relatively even. For ceilings, a thinner 6mm to 10mm plaster is used. For external walls exposed to weather, a 20mm thick plaster (applied in two coats) is the standard requirement to prevent moisture penetration.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do we multiply the wet volume by 1.33 for plastering?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              When water is added to a dry mix of sand and cement, the fine cement particles slip into the microscopic voids between the sand grains, causing the total mixture to shrink. To achieve 1 cubic meter of wet mortar on the wall, you must purchase roughly 33% more dry materials. Thus, we multiply the wet volume by 1.33.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do we add a 20% allowance for joint filling?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Brick and block walls are never perfectly flat. There are depressions, undulations, and empty joints (the spaces between bricks) that consume extra mortar beyond just the surface thickness. Standard estimating practices add a 20% volume allowance to account for these gaps before calculating the dry volume.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the best cement to sand ratio for plastering?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The ideal ratio depends on the application. For internal walls (12mm thick), a 1:4 ratio (1 part cement to 4 parts sand) is recommended for a strong, smooth finish. For external walls (20mm thick), a 1:6 ratio is generally used for the base coat, which provides a strong, economical layer, sometimes followed by a richer finish coat.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much plaster is required for a 100 sq ft wall?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a 100 sq ft wall with standard 12mm internal plaster (1:4 ratio) and factoring in standard wastage and joint filling, you will typically require roughly 1 bag of cement (50kg) and about 5 Cubic Feet (CFT) of fine river sand or M-sand.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore Additional Integrated Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Whether you are building from scratch or renovating, ensure accurate budgeting and material procurement with our suite of engineering tools:
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