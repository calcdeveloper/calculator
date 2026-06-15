import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: House Construction Cost Estimator | Civil Budget Calculator
  2. META DESCRIPTION: Calculate your total residential building budget with our free house construction cost estimator. Get accurate structural breakdowns for raw materials, finishes, and labor.
  3. URL SLUG: /calculator/construction/construction-cost
  4. H1 TITLE: Residential House Construction Cost Estimator
  
  11. SEO KEYWORDS:
      - Primary Keyword: house construction cost estimator
      - Secondary Keywords: house construction cost calculator india, building estimate per sq ft, custom home building calculator, construction cost per square foot, material budget calculator, construction material cost estimator, residential building cost estimate, cost to build a house, home construction budget template, civil construction thumb rules.
      - Long-Tail Keywords: how to calculate house construction cost in india, average cost to build a house per sq ft, standard material percentage breakdown civil engineering, cost estimation of multi story building, calculating construction labor material cost.
  =========================================================================
*/

export default function ConstructionCostContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const constructionFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the built-up area calculated for a construction estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The built-up area (or total slab area) is the total horizontal cross-sectional area of the building, including the thickness of both internal and external walls, balconies, utility areas, and corridors. If you are building multiple floors, you must sum the built-up area of each individual floor to compute the total aggregate square footage for the final estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Why does steel consume such a large portion of the structural budget?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Thermo Mechanically Treated (TMT) steel rebars form the tensile core of reinforced cement concrete (RCC) structures. Steel bears the primary tensile stresses of your building, keeping slabs, beams, and columns safe under heavy structural dead loads and seismic events. Because of advanced manufacturing processes and global raw metal valuations, its cost per metric ton significantly drives up total infrastructure metrics."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Class A, Class B, and Class C construction qualities?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Class C represents basic, utilitarian construction using local sands, generic cement variants, simple ceramic tiling, and entry-level electrical connections. Class B features standard-branded materials like modular kitchen setups, vitrified tiles, UPVC windows, and reputable branded structural steel. Class A embodies premium luxury, utilizing imported Italian marble, custom premium timber/teak woodwork, luxury high-end plumbing fixtures, and integrated smart-home automation."
        }
      },
      {
        "@type": "Question",
        "name": "Does this calculation framework account for boundary walls and exterior landscaping?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard house construction cost calculators and thumb rules focus explicitly on the main built-up framed residential structure. External infrastructure enhancements, such as building extensive perimeter boundary walls, landscaping gardens, drilling borewells, or installing high-capacity solar setups, require supplementary budget items computed independently of the base per-square-foot structural calculation."
        }
      },
      {
        "@type": "Question",
        "name": "How do fluctuating raw material market rates affect my building estimate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commodity valuations for core industrial resources like cement and structural TMT steel change regularly due to logistics costs, energy rates, and macro demand patterns. It is always wise to introduce a 5% to 10% cash contingency reserve within your final budget layout to adapt smoothly to dynamic material price updates during the multi-month project timeline."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* --- INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(constructionFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Residential House Construction Cost Estimator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Embarking on a residential home building journey is one of the most substantial financial investments an individual makes in their lifetime. Whether you are laying down plans for a compact urban layout, setting up an multi-generational duplex property, or consulting with custom home designers, establishing a realistic budget framework early avoids costly project delays. 
        </p>
        <p className="mb-4">
          Our professional <strong>house construction cost estimator</strong> implements highly reliable civil engineering thumb rules to translate basic geometric metrics into actionable material and monetary forecasts. By mapping total built-up dimensions directly against distinct finishing tiers, this real-time budgeting application offers a detailed preview of your expected cash outlays.
        </p>
      </section>

      {/* --- REQUISITE ENGINEERING ABBREVIATIONS --- */}
      <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Crucial Structural Abbreviations & Terms</h2>
        <p className="mb-4 text-sm">
          Before reviewing structural bills of quantities, it helps to understand the specialized vocabulary used by architects, masons, and project managers:
        </p>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>TMT (Thermo Mechanically Treated) Bars:</strong> High-strength, specialized steel reinforcing bars engineered with a hardened outer shield and a ductile core. These profiles provide the essential tensile capacity to prevent concrete structural failures.
          </li>
          <li>
            <strong>RCC (Reinforced Cement Concrete):</strong> A composite material created by embedding TMT steel rebars within fluid concrete mixes. It serves as the primary load-bearing material for building columns, structural beams, and roof slabs.
          </li>
          <li>
            <strong>AAC (Autoclaved Aerated Concrete) Blocks:</strong> Lightweight, eco-friendly structural masonry units that provide high thermal insulation, sound dampening, and faster installation speeds compared to traditional red clay bricks.
          </li>
          <li>
            <strong>MEP (Mechanical, Electrical, and Plumbing):</strong> The foundational physical networks of your residential space. This covers electrical conduit wiring, safe wastewater management, and mechanical ventilation systems.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Using the Cost Estimator Tool</h2>
        <p className="mb-4 text-sm text-gray-600">
          This digital planning tool is designed for easy navigation, keeping your data structured and transparent. To generate a customized estimate, update these fields:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Total Plot Area / Built-up Size</span>
            Provide the length and width dimensions, or input the net calculated horizontal surface area of a single floor layer.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Number of Target Floors</span>
            Specify the building height (e.g., Ground Only, G+1, G+2) to allow the tool to compute the cumulative multi-tier slab footprint.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Material Quality Tier Class</span>
            Choose your desired tier of finishes, plumbing fixtures, and masonry types (Basic Class C, Standard Class B, or Premium Class A).
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Regional Setting</span>
            Select your geographic location (such as India or USA metrics) to match currency formats and baseline labor rate expectations.
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 text-base">Instantly Generated Metrics:</h3>
        <p className="text-sm mb-3">
          Once the calculations complete, the interface provides comprehensive, filterable insight categories:
        </p>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Projected Budget Allocation:</strong> The comprehensive capital forecast.</li>
          <li><strong>Raw Structural Allocation:</strong> Expenses dedicated directly to purchasing core steel, aggregates, sand, and masonry blocks.</li>
          <li><strong>Finishing & Human Capital Demands:</strong> Itemized costs for professional site personnel, interior tile work, utility layouts, and protective coatings.</li>
        </ul>
      </section>

      {/* --- ESTIMATING METHODOLOGY & SPECIFICATIONS TABLE --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The "Building Estimate Per Sq Ft" Method</h2>
        <p className="mb-4">
          In contemporary civil residential projects, general builders and contracting companies issue initial baseline bids calculated directly against the overall cumulative "slab area". This area encompasses the total structural horizontal surface area cast during building development. 
        </p>
        <p className="mb-6">
          Depending on your chosen material quality tier, typical baseline structural rates scale across predictable ranges:
        </p>

        <div className="overflow-x-auto my-4 rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-900 font-semibold text-sm">
                <th className="p-3 md:p-4">Quality Class</th>
                <th className="p-3 md:p-4">Estimated Local Rate</th>
                <th className="p-3 md:p-4">Material Characteristics & Systems</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Class C (Basic Quality)</td>
                <td className="p-3 md:p-4 text-blue-800 font-semibold">₹1,300 to ₹1,500 / sq.ft</td>
                <td className="p-3 md:p-4 text-gray-600">Standard localized cement, ordinary river/crushed sand, plain ceramic flooring, standard utility toggle switches, basic wood frames.</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/40 hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Class B (Standard Quality)</td>
                <td className="p-3 md:p-4 text-blue-800 font-semibold">₹1,600 to ₹1,900 / sq.ft</td>
                <td className="p-3 md:p-4 text-gray-600">Branded structural TMT rebars, double-charged vitrified flooring, sleek modular kitchen cores, branded premium UPVC window frames.</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Class A (Premium Luxury)</td>
                <td className="p-3 md:p-4 text-blue-800 font-semibold">₹2,000 to ₹2,500+ / sq.ft</td>
                <td className="p-3 md:p-4 text-gray-600">Exotic Italian marble installations, full teak wood architectural doors, premium international sanitary ware (Kohler/Grohe), smart home automation.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- MATHEMATICAL EQUATIONS SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Estimating Formula & Resource Apportionment Rules</h2>
        <p className="mb-4">
          To build a reliable total building estimate, our computing engine applies a straightforward primary scaling calculation, then divides the result using standard material distribution ratios.
        </p>

        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs md:text-sm space-y-2 border border-slate-800 shadow-md">
          <div className="text-cyan-400 font-sans font-bold text-sm mb-2">// Primary Estimation Formula</div>
          <div>Total Building Capital Cost = Built-up Single Floor Area × Cumulative Floors Count × Chosen Tier Cost Factor</div>
          <div className="text-gray-400 font-sans italic mt-2">Where "Chosen Tier Cost Factor" represents the current regional market pricing coefficient per unit area.</div>
        </div>

        <h3 className="font-bold text-gray-900 mt-6 mb-3 text-lg">Standard Material Thumb Rule Allocation Breakdown</h3>
        <p className="mb-4">
          Once your overall baseline structural value is established, empirical data from civil engineering models shows how expenses are typically distributed across key material and labor categories:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs md:text-sm">
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">Structural Steel (TMT): 24%</span>
            The largest material investment, providing essential structural reinforcement.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">Architectural Finishes: 17%</span>
            Covers floor tiles, natural granites, and decorative wall coatings.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">Structural Cement: 16%</span>
            The binding element for all RCC framing, masonry mortar, and protective plaster.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">Site Labor Forces: 15%</span>
            Compensation for skilled masonry teams, helpers, and formwork carpenters.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">MEP Services & Fittings: 12%</span>
            Covers utility plumbing, internal electrical wiring, and fixtures.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block">Sands & Aggregates: 11%</span>
            Fine sand and crushed stone components that make up the bulk of the concrete mix volume.
          </div>
          <div className="p-3 bg-gray-50 rounded-lg border border-gray-200 col-span-2 sm:col-span-1">
            <span className="font-bold text-gray-900 block">Masonry Blocks / Bricks: 5%</span>
            The actual structural wall components make up a relatively small portion of the overall budget.
          </div>
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Case Studies</h2>
        
        {/* Case Study 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Case Study A: Standard Multi-Floor Duplex Structure (India)</h3>
          <p className="text-sm text-gray-600">
            Suppose you plan to construct a residential G+1 multi-generational duplex over an individual base plot floor size of <strong>1,200 square feet</strong>, utilizing mid-tier <strong>Class B Standard specifications</strong> valued at an average coefficient of <strong>₹1,800 per square foot</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Total Structural Area Base = 1,200 sq.ft × 2 Levels = 2,400 Total Square Feet</div>
            <div>• Total Capital Cost Forecast = 2,400 sq.ft × ₹1,800 = <strong>₹43,20,000 (43.2 Lakhs)</strong></div>
            <hr className="my-2" />
            <div>• Core Steel Budget (24%) = ₹10,36,800</div>
            <div>• Structural Cement Budget (16%) = ₹6,91,200</div>
            <div>• General Contractor Labor Share (15%) = ₹6,48,000</div>
            <div>• Finishes & Flooring System (17%) = ₹7,34,400</div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-teal-900">Case Study B: Single-Floor Suburban Family Residence (USA Framework)</h3>
          <p className="text-sm text-gray-600">
            Let's evaluate a single-level detached family home built in a suburban setting containing a calculated total functional interior plan area of <strong>1,800 square feet</strong> with custom design finishes calculated around a base rate of <strong>$160 per square foot</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Net Built Area = 1,800 Square Feet × 1 Level = 1,800 Total Area Units</div>
            <div>• Total Project Capital Valuation = 1,800 × $160 = <strong>$288,000 USD</strong></div>
            <hr className="my-2" />
            <div>• Structural Framing & Metal Core (24%) = $69,120</div>
            <div>• Mechanical, Electrical & Utility Plumbing Infrastructure (12%) = $34,560</div>
            <div>• Carpentry & Dedicated Building Labor (15%) = $43,200</div>
            <div>• Drywall, Masonry Insulation & Siding Systems (5%) = $14,400</div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How is the built-up area calculated for a construction estimate?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The built-up area (or total slab area) is the total horizontal cross-sectional area of the building, including the thickness of both internal and external walls, balconies, utility areas, and corridors. If you are building multiple floors, you must sum the built-up area of each individual floor to compute the total aggregate square footage for the final estimate.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why does steel consume such a large portion of the structural budget?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Thermo Mechanically Treated (TMT) steel rebars form the tensile core of reinforced cement concrete (RCC) structures. Steel bears the primary tensile stresses of your building, keeping slabs, beams, and columns safe under heavy structural dead loads and seismic events. Because of advanced manufacturing processes and global raw metal valuations, its cost per metric ton significantly drives up total infrastructure metrics.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between Class A, Class B, and Class C construction qualities?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Class C represents basic, utilitarian construction using local sands, generic cement variants, simple ceramic tiling, and entry-level electrical connections. Class B features standard-branded materials like modular kitchen setups, vitrified tiles, UPVC windows, and reputable branded structural steel. Class A embodies premium luxury, utilizing imported Italian marble, custom premium timber/teak woodwork, luxury high-end plumbing fixtures, and integrated smart-home automation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Does this calculation framework account for boundary walls and exterior landscaping?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Standard house construction cost calculators and thumb rules focus explicitly on the main built-up framed residential structure. External infrastructure enhancements, such as building extensive perimeter boundary walls, landscaping gardens, drilling borewells, or installing high-capacity solar setups, require supplementary budget items computed independently of the base per-square-foot structural calculation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do fluctuating raw material market rates affect my building estimate?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Commodity valuations for core industrial resources like cement and structural TMT steel change regularly due to logistics costs, energy rates, and macro demand patterns. It is always wise to introduce a 5% to 10% cash contingency reserve within your final budget layout to adapt smoothly to dynamic material price updates during the multi-month project timeline.
            </div>
          </details>
        </div>
      </section>

      {/* --- RELATED CONSTRUCTION CALCULATORS LINKS --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore Additional Integrated Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Streamline your structural engineering calculations and project planning workflows using our complete suite of estimators:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/construction/aac-block" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">AAC Block & Adhesive Calculator</a>
          <a href="/calculator/construction/brass-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brass Volume Calculator (Sand & Aggregate)</a>
          <a href="/calculator/construction/brick" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brickwork Calculator (Bricks, Cement, Sand)</a>
          <a href="/calculator/construction/column-footing" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Column Footing</a>
          <a href="/calculator/construction/concrete" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volume</a>
          <a href="/calculator/construction/concrete-mix" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Mix Calculator</a>
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