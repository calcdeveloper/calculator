import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: Marble & Granite Flooring Calculator | Stone & Mortar Estimator
  2. META DESCRIPTION: Estimate total stone required, cement bags, sand volume, and material costs for marble or granite flooring. Free calculator for slab area and mortar base.
  3. URL SLUG: /calculator/construction/marble-granite
  4. H1 TITLE: Marble & Granite Flooring Estimator
  
  11. SEO KEYWORDS:
      - Primary Keyword: marble and granite flooring calculator
      - Secondary Keywords: flooring mortar calculator, cement and sand calculation for flooring, granite flooring cost estimator, marble flooring calculation formula, stone slab area calculator, dry volume of mortar for flooring, how to calculate cement for marble flooring, badarpur sand for flooring, 1.33 dry volume rule, natural stone installation cost.
      - Long-Tail Keywords: how much cement is required for 100 sq ft marble flooring, step by step calculation of cement mortar base, estimating wastage for italian marble flooring, difference between wet volume and dry volume in flooring base, calculation of cement sand ratio 1:6 for granite.
  =========================================================================
*/

export default function MarbleGraniteContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const flooringFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is the mortar bed for marble and granite so thick compared to tiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike factory-made ceramic or vitrified tiles which have perfectly flat backs, natural stones like marble and granite are cut from raw boulders. Their unpolished bottom surfaces are naturally uneven and slightly wavy. A thick cement-sand mortar bed (usually 1.5 to 2 inches) acts as a leveling cushion, allowing the mason to tap the heavy stone down until the top surface is perfectly flat and flush."
        }
      },
      {
        "@type": "Question",
        "name": "Why do we multiply the wet volume by 1.33 to find the dry volume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When you mix water into dry cement and sand, the fine particles of cement slip into the microscopic air voids between the sand grains. This causes the entire mixture to shrink and compact. To get 1 cubic meter of wet mortar, you must start with roughly 33% more dry powder. Hence, we multiply the required wet volume by 1.33 to find the purchasing volume of dry materials."
        }
      },
      {
        "@type": "Question",
        "name": "How much wastage should I account for when buying natural stone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard granite and Indian marble, a 10% wastage margin is generally sufficient to account for room corners, cuts, and edge trimming. However, for premium Italian marble, which often contains natural cracks, delicate veins, and requires complex pattern matching (like book-matching), it is highly recommended to order 15% to 20% extra."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard mix ratio for a flooring mortar base?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard cement-to-sand ratio for laying natural stone flooring is typically 1:6 for interior residential rooms, and 1:4 for heavy-traffic commercial areas or exterior stone patios."
        }
      },
      {
        "@type": "Question",
        "name": "Should I use white cement or grey cement for marble flooring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you are installing light-colored or pure white marble (like Makrana, Statuario, or Thassos), you must use White Cement for the slurry/bonding layer. Grey cement can bleed through the porous structure of white marble over time, causing dark, muddy stains on the surface. For dark granites, standard grey cement is perfectly fine."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(flooringFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Marble & Granite Flooring Estimator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Installing natural stone is a massive upgrade for any property, but estimating the materials required can be surprisingly complex. Unlike simple peel-and-stick floors or thin-set ceramic tiles, laying heavy marble or granite slabs requires a robust, thick foundation of cement and sand.
        </p>
        <p className="mb-4">
          Our comprehensive <strong>Marble & Granite Flooring Estimator</strong> takes the guesswork out of your renovation budget. It not only calculates the total square footage of stone required (factoring in inevitable wastage from cutting and matching veins), but it also accurately computes the exact volume of the hidden cement mortar base underneath. Whether you are a homeowner planning a living room upgrade, a civil contractor ordering site materials, or an architect calculating overall structural loads, this tool provides instant, highly accurate purchasing quantities and budget estimates.
        </p>
      </section>

      {/* --- UNDERSTANDING THE TERMINOLOGY --- */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Flooring Abbreviations & Concepts</h2>
        <p className="mb-4 text-sm text-gray-600">
          Before diving into the calculations, familiarizing yourself with the standard industry terminology will help you communicate effectively with your material suppliers and masons.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Sq.ft (Square Feet):</strong> The primary unit for purchasing natural stone slabs in markets like India and the USA. All slab prices are quoted per Sq.ft.</li>
          <li><strong>CM (Cement Mortar):</strong> The semi-dry, thick paste created by mixing cement, sand, and water. This forms the leveling bed that supports the heavy stone.</li>
          <li><strong>CFT (Cubic Feet):</strong> The standard commercial unit used to order river sand, M-sand, or stone dust from local building material yards.</li>
          <li><strong>Wet Volume vs. Dry Volume:</strong> The volume of the mortar bed once laid is "Wet Volume". Because water causes the dry ingredients to shrink into a tighter mass, you must purchase a larger "Dry Volume" to compensate.</li>
          <li><strong>Wastage %:</strong> Defective edges, natural cracks, and off-cuts during room corner fitting mean you can never order the exact mathematical size of the room. Extra material is mandatory.</li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Flooring Estimator</h2>
        <p className="mb-4">
          Using the calculator is straightforward. Gather your room dimensions and current local market prices, then input the data into the corresponding fields:
        </p>
        
        <div className="space-y-4 text-sm">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 1: Enter Floor Area Dimensions</h3>
            <p className="text-gray-600">Input the <strong>Length</strong> and <strong>Width</strong> of the room. You can select either Feet or Meters from the dropdown. The tool will calculate the exact floor layout area.</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 2: Define the Mortar Base Properties</h3>
            <p className="text-gray-600">Enter the <strong>Base Bed Thickness</strong>. Due to the uneven bottom of natural stones, this is typically between 1.5 inches to 2 inches (38mm to 50mm). Next, set the <strong>Mix Ratio</strong>. The standard for flooring is usually 1 part cement to 6 parts sand (1:6) or 1:4 for heavy traffic.</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 3: Account for Stone Wastage</h3>
            <p className="text-gray-600">Enter a <strong>Wastage Percentage</strong>. Enter 10% for standard granite slabs, or 15% to 20% for premium marble with intricate veins that require specific pattern matching.</p>
          </div>
        </div>
      </section>

      {/* --- THE FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematics Behind Flooring Estimation</h2>
        <p className="mb-4">
          Doing a proper calculation requires determining both the 2D surface area for the stone and the 3D volume for the cement mortar underneath. Here are the core formulas our tool uses behind the scenes:
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">1. Stone Area & Purchasing Quantity</h3>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Base Area (Sq.ft) = Length (ft) × Width (ft)<br />
          • Stone to Purchase (Sq.ft) = Base Area + (Base Area × Wastage %)
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">2. The 1.33 Dry Volume Rule for Mortar</h3>
        <p className="text-sm mb-3">
          To calculate materials, we must convert the required wet cushion bed into dry purchasing powder. The standard conversion factor for cement-sand mortar is adding 33%.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Wet Volume (Cubic Meters) = Area (Sq.m) × Base Thickness (Meters)<br />
          • Dry Volume (Cubic Meters) = Wet Volume × 1.33
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">3. Extracting Cement and Sand Quantities</h3>
        <p className="text-sm mb-3">
          Once we have the total dry volume, we split it according to the Mix Ratio (e.g., 1:6 means 1 part cement, 6 parts sand, equaling 7 total parts).
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Cement Volume (m³) = Dry Volume × (1 / Total Ratio Parts)<br />
          • Cement Bags = (Cement Volume × 1440 kg/m³) ÷ 50 kg<br /><br />
          • Sand Volume (m³) = Dry Volume × (Sand Ratio / Total Ratio Parts)<br />
          • Sand in CFT = Sand Volume (m³) × 35.3147
        </div>
      </section>

      {/* --- DETAILED REAL-WORLD WORKED SCENARIOS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Worked Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Standard Bedroom Granite Flooring</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are laying Jet Black Granite in a 15 ft by 12 ft bedroom. The mason specifies a 1.5-inch mortar bed mixed at a 1:6 ratio. You expect 10% wastage.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Stone Area:</strong> 15 × 12 = 180 Sq.ft. With 10% wastage: <strong>198 Sq.ft of granite needed.</strong></div>
            <div><strong>2. Wet Volume:</strong> Convert area to Sq.m (180 ÷ 10.764 = 16.72 m²). Convert 1.5 inches to meters (0.0381 m). <br/>16.72 × 0.0381 = 0.637 m³.</div>
            <div><strong>3. Dry Volume:</strong> 0.637 × 1.33 = <strong>0.847 m³.</strong></div>
            <div><strong>4. Cement Required:</strong> 0.847 × (1/7) = 0.121 m³.<br/>(0.121 × 1440) ÷ 50 = 3.48 Bags. <strong>Order 4 Bags of Cement.</strong></div>
            <div><strong>5. Sand Required:</strong> 0.847 × (6/7) = 0.726 m³.<br/>Convert to CFT: 0.726 × 35.31 = 25.6 CFT. <strong>Order ~26 CFT of Sand.</strong></div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Luxury Living Room Italian Marble</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> Installing Statuario Italian Marble in a large 20 ft by 25 ft living room. Due to heavy stone and high traffic, the bed is 2 inches thick at a 1:4 ratio. Italian marble requires careful vein matching, so 15% wastage is applied.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Stone Area:</strong> 20 × 25 = 500 Sq.ft. With 15% wastage: <strong>575 Sq.ft of marble needed.</strong></div>
            <div><strong>2. Wet Volume:</strong> Convert area to Sq.m (500 ÷ 10.764 = 46.45 m²). Convert 2 inches to meters (0.0508 m). <br/>46.45 × 0.0508 = 2.36 m³.</div>
            <div><strong>3. Dry Volume:</strong> 2.36 × 1.33 = <strong>3.14 m³.</strong></div>
            <div><strong>4. Cement Required (White Cement):</strong> Ratio is 1:4 (5 parts total).<br/>3.14 × (1/5) = 0.628 m³.<br/>(0.628 × 1440) ÷ 50 = 18 Bags. <strong>Order 18 Bags.</strong></div>
            <div><strong>5. Sand Required:</strong> 3.14 × (4/5) = 2.51 m³.<br/>Convert to CFT: 2.51 × 35.31 = 88.6 CFT. <strong>Order ~90 CFT of Sand.</strong></div>
          </div>
        </div>
      </section>

      {/* --- QUICK REF INDEX CHEAT SHEET --- */}
      <section className="bg-amber-50/40 p-6 rounded-xl border border-amber-200/60">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Base Volume Rule of Thumb</h3>
        <p className="text-sm mb-4 text-gray-700">
          If you don't have time to do exact cubic meter conversions, experienced contractors use these quick "rules of thumb" based on standard 1.5-inch flooring bed depths:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>For every 100 Sq.ft of flooring (at 1:6 ratio):</strong> Expect to use roughly <strong>2 Bags of Cement</strong> and <strong>15 CFT of Sand</strong>.</li>
          <li><strong>For every 100 Sq.ft of flooring (at 1:4 ratio):</strong> Expect to use roughly <strong>3 Bags of Cement</strong> and <strong>14 CFT of Sand</strong>.</li>
        </ul>
        <p className="text-xs text-gray-500 mt-4 italic">Note: These shortcuts assume an exact 1.5-inch bed. If your floor slab is highly uneven, material consumption will be slightly higher.</p>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is the mortar bed for marble and granite so thick compared to tiles?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Unlike factory-made ceramic or vitrified tiles which have perfectly flat backs, natural stones like marble and granite are cut from raw boulders. Their unpolished bottom surfaces are naturally uneven and slightly wavy. A thick cement-sand mortar bed (usually 1.5 to 2 inches) acts as a leveling cushion, allowing the mason to tap the heavy stone down until the top surface is perfectly flat and flush.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do we multiply the wet volume by 1.33 to find the dry volume?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              When you mix water into dry cement and sand, the fine particles of cement slip into the microscopic air voids between the sand grains. This causes the entire mixture to shrink and compact. To get 1 cubic meter of wet mortar, you must start with roughly 33% more dry powder. Hence, we multiply the required wet volume by 1.33 to find the purchasing volume of dry materials.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much wastage should I account for when buying natural stone?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For standard granite and Indian marble, a 10% wastage margin is generally sufficient to account for room corners, cuts, and edge trimming. However, for premium Italian marble, which often contains natural cracks, delicate veins, and requires complex pattern matching (like book-matching), it is highly recommended to order 15% to 20% extra.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard mix ratio for a flooring mortar base?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The standard cement-to-sand ratio for laying natural stone flooring is typically 1:6 for interior residential rooms, and 1:4 for heavy-traffic commercial areas or exterior stone patios.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Should I use white cement or grey cement for marble flooring?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              If you are installing light-colored or pure white marble (like Makrana, Statuario, or Thassos), you must use White Cement for the slurry/bonding layer. Grey cement can bleed through the porous structure of white marble over time, causing dark, muddy stains on the surface. For dark granites, standard grey cement is perfectly fine.
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