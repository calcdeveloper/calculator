import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: Earthwork & Excavation Calculator | Soil Volume Estimator
  2. META DESCRIPTION: Calculate excavation volumes and soil removal requirements with our earthwork calculator. Estimate bank volume, swell factor expansion, and truck trip logistics.
  3. URL SLUG: /calculator/construction/earthwork-excavation
  4. H1 TITLE: Earthwork & Excavation Calculator (Soil Volume)
  
  11. SEO KEYWORDS:
      - Primary Keyword: earthwork & excavation calculator
      - Secondary Keywords: excavation calculation, soil volume calculator, soil swell factor chart, cubic yards excavation formula, brass volume earthwork, trench digging estimator, foundation pit volume, loose soil expansion, civil engineering earthwork thumb rules, haulage trip calculator.
      - Long-Tail Keywords: how to calculate excavation volume of soil, calculate truck loads for dug up dirt, earthwork calculation formula for foundation pits, loose volume vs bank volume calculation, estimating soil removal logistics.
  =========================================================================
*/

export default function EarthworkContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const earthworkFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the core difference between Bank Volume and Loose Volume?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bank Volume (BCY or CFT) refers to soil in its natural, undisturbed state within the ground before any mechanical digging occurs. Loose Volume (LCY or CFT) represents the expanded volume of that same soil after it has been excavated. Mechanical digging breaks the natural compaction of the soil, introducing air pockets that cause the material to occupy significantly more physical space."
        }
      },
      {
        "@type": "Question",
        "name": "How does the soil swell factor vary across different material types?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Swell percentages depend directly on the soil's structure and compaction history. Clean sand and loose gravel expand minimally, typically between 10% and 15%. Standard mixed earth or agricultural loam expands by roughly 20% to 25%. Heavy, highly cohesive clay holds tight natural structures and can expand or swell by 30% to 45% once broken apart by heavy machinery."
        }
      },
      {
        "@type": "Question",
        "name": "What is a 'Brass' in earthwork estimation, and where is it used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 'Brass' is a traditional volumetric unit widely utilized throughout the Indian construction and civil logistics industries. One Brass is precisely equal to 100 Cubic Feet (CFT). Contractors, machinery operators, and material suppliers routinely quote excavation rates, sand deliveries, and hauling costs per Brass."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate the exact number of truck trips required for disposal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find the total required truck trips, divide the total expanded Loose Volume by the practical hauling capacity of the target transport vessel. For example, if your loose soil volume is 1,500 Cubic Feet and you are utilizing standard tractor trolleys with a capacity of 1 Brass (100 Cubic Feet), you divide 1,500 by 100, resulting in exactly 15 required trips."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it dangerous to ignore soil expansion during site budgeting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ignoring the swell factor often leads to underbudgeting for site clearance logistics. If a site manager assumes that a 500 cubic yard pit produces exactly 500 cubic yards of haulage waste, they will underestimate the required truck counts and disposal fees by 20% to 30%. This error causes unexpected site bottlenecks, schedule delays, and budget overruns."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* --- INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(earthworkFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Earthwork & Excavation Calculator (Soil Volume)
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Before a single brick is laid, a column poured, or a foundation set, every construction project begins with earthwork. Digging structural trenches, clearing site slopes, and creating deep basement footprints require precise volume calculations. Misjudging the volume of excavated dirt can lead to unexpected equipment bottlenecks, haulage cost overruns, and project delays.
        </p>
        <p className="mb-4">
          Our advanced <strong>earthwork & excavation calculator</strong> simplifies site preparation logistics. By converting basic layout geometry into actionable volume profiles, it helps engineers, developers, and homeowners determine exact material volumes. The tool accounts for natural soil expansion properties to calculate the equipment capacities and truck trips needed to clear your site efficiently.
        </p>
      </section>

      {/* --- IMPORTANT TERMINOLOGY SECTION --- */}
      <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Crucial Earthwork Terminology & Units</h2>
        <p className="mb-4 text-sm">
          Navigating site clearing contracts requires a clear understanding of standard industry terminology used in both domestic and international civil engineering projects:
        </p>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>CFT (Cubic Feet):</strong> A standard imperial unit of volume widely used across regional civil engineering projects to calculate individual foundation trenches and sand orders.
          </li>
          <li>
            <strong>BCY & LCY (Bank vs. Loose Cubic Yards):</strong> Globally recognized engineering units. <em>Bank Cubic Yards</em> measure soil in its undisturbed natural ground layer, while <em>Loose Cubic Yards</em> quantify the volume of that same material after mechanical excavation.
          </li>
          <li>
            <strong>Brass:</strong> A traditional volumetric benchmarking unit common in the Indian subcontinent. <strong>1 Brass is exactly equal to 100 Cubic Feet (CFT)</strong> or roughly 2.83 cubic meters.
          </li>
          <li>
            <strong>Swell Factor Factor (Soil Expansion):</strong> A percentage modifier that represents how much a specific soil type expands in volume when excavated due to the introduction of air pockets.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Excavation Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          This digital tool handles multi-pit scenarios, variable depth trenches, and custom material expansion constraints. To calculate your project requirements, input your site specs as follows:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Structural Pit Dimensions</span>
            Input the direct target Length, Width, and planned baseline Depth of your intended excavation grid using matching measurement units.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Total Multi-Pit Count</span>
            For uniform configurations (like isolated column footings), enter the total number of identical pits to scale your volume requirements automatically.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Soil Material Modifiers</span>
            Select your specific soil profile (e.g., Loose Sand, Standard Loam, Dense Clay) to apply the appropriate structural swell coefficient.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Haulage Vessel Payload Profile</span>
            Specify the net internal volume capacity of your transport vehicles (such as a 1-Brass tractor trolley or a 10-wheel commercial dumper) to calculate required truck trips.
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 text-base">Key Output Metrics Explained:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Bank Volume:</strong> The exact geographic space occupied by solid, compacted earth before digging.</li>
          <li><strong>Total Loose Haulage Volume:</strong> The actual expanded physical volume of loose dirt that must be handled and managed on site.</li>
          <li><strong>Required Disposal Vehicle Trips:</strong> The total number of truck loads needed to clear the loose material from your property.</li>
        </ul>
      </section>

      {/* --- THE PHYSICS OF SWELL FACTOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind the "Swell Factor"</h2>
        <p className="mb-4">
          A frequent miscalculation made by novice builders is assuming that a 500 Cubic Feet excavation pit yields exactly 500 Cubic Feet of loose soil to haul away. In reality, soil in the ground has been heavily compacted by natural forces over thousands of years.
        </p>
        <p className="mb-4">
          When heavy machinery like backhoes or excavators dig up this earth, it breaks the soil's natural structure and introduces air pockets. This process shifts the soil from its dense <strong>Bank State</strong> to an expanded, less dense <strong>Loose State</strong>.
        </p>
        
        <div className="overflow-x-auto my-6 rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-200 text-gray-900 font-semibold text-sm">
                <th className="p-3 md:p-4">Soil Type & Composition</th>
                <th className="p-3 md:p-4">Average Swell Percentage</th>
                <th className="p-3 md:p-4">Volumetric Multiplier Factor</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Clean Gravel & Fine Sand</td>
                <td className="p-3 md:p-4 text-emerald-700 font-semibold">10% – 15%</td>
                <td className="p-3 md:p-4 font-mono">1.10 – 1.15</td>
              </tr>
              <tr className="border-b border-gray-100 bg-gray-50/40 hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Standard Loam / Mixed Farm Soil</td>
                <td className="p-3 md:p-4 text-emerald-700 font-semibold">20% – 25%</td>
                <td className="p-3 md:p-4 font-mono">1.20 – 1.25</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Heavy Cohesive Clay Core</td>
                <td className="p-3 md:p-4 text-emerald-700 font-semibold">30% – 35%</td>
                <td className="p-3 md:p-4 font-mono">1.30 – 1.35</td>
              </tr>
              <tr className="hover:bg-gray-50/50">
                <td className="p-3 md:p-4 font-bold text-gray-900">Dense Intact Hard Rock Formation</td>
                <td className="p-3 md:p-4 text-emerald-700 font-semibold">45% – 50%</td>
                <td className="p-3 md:p-4 font-mono">1.45 – 1.50</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- FORMULA BREAKDOWN SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Earthwork Formulas</h2>
        <p className="mb-4">
          To build an accurate budget, project managers use three sequential mathematical formulas to determine structural dimensions, loose expansion volumes, and logistics requirements.
        </p>

        <div className="bg-slate-900 text-slate-100 p-6 rounded-xl font-mono text-xs md:text-sm space-y-4 border border-slate-800 shadow-md">
          <div>
            <span className="text-cyan-400 font-sans font-bold block mb-1">Step 1: Determine Total Bank Volume (Natural Footprint)</span>
            Bank Volume = Pit Length × Pit Width × Excavation Depth × Number of Active Pits
          </div>
          <hr className="border-slate-800" />
          <div>
            <span className="text-cyan-400 font-sans font-bold block mb-1">Step 2: Apply the Soil Material Swell Factor Multiplier</span>
            Loose Volume = Bank Volume × (1 + (Swell Percentage / 100))
          </div>
          <hr className="border-slate-800" />
          <div>
            <span className="text-cyan-400 font-sans font-bold block mb-1">Step 3: Calculate Required Transport Vehicle Haulage Trips</span>
            Required Truck Trips = Ceil(Total Loose Volume / Single Truck Cargo Capacity Volume)
          </div>
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Case Studies</h2>
        
        {/* Case Study 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Case Study A: Isolated Column Footing Array (India)</h3>
          <p className="text-sm text-gray-600">
            A builder needs to excavate <strong>12 identical isolated footing pits</strong> for a standard residential G+1 home. Each individual pit measures <strong>5 feet long, 5 feet wide, and 6 feet deep</strong>. The site contains standard mixed loam soil with a <strong>25% swell factor</strong>, and haulage will be managed using standard <strong>1-Brass (100 CFT) capacity tractor trolleys</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Bank Volume Per Pit = 5 ft × 5 ft × 6 ft = 150 Cubic Feet (CFT)</div>
            <div>• Cumulative Project Bank Volume = 150 CFT × 12 Pits = 1,800 CFT (or 18 Brass)</div>
            <div>• Expanded Loose Soil Volume = 1,800 CFT × 1.25 = <strong>2,250 Cubic Feet of Loose Dirt</strong></div>
            <div>• Required Haulage Trips = 2,250 CFT ÷ 100 CFT = 22.5 Trips</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Result: The site manager needs to budget for 23 tractor trolley trips.</div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-teal-900">Case Study B: Suburban Residential Basement Excavation (USA)</h3>
          <p className="text-sm text-gray-600">
            An excavator is clearing earth for a full home basement. The layout requires a single large pit measuring <strong>40 feet long, 30 feet wide, and 8 feet deep</strong>. The soil is heavy clay with a <strong>30% swell factor</strong>, and material will be moved using commercial dump trucks that hold <strong>12 cubic yards (324 Cubic Feet)</strong> per load.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Net Pit Bank Volume = 40 ft × 30 ft × 8 ft = 9,600 Cubic Feet (approx. 355.5 Cubic Yards)</div>
            <div>• Expanded Loose Clay Volume = 9,600 CFT × 1.30 = <strong>12,480 Cubic Feet of Loose Clay</strong></div>
            <div>• Required Truck Haulage Loads = 12,480 CFT ÷ 324 CFT = 38.51 Loads</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Result: The project team will require 39 commercial dump truck loads to clear the site.</div>
          </div>
        </div>
      </section>

      {/* --- SITE MANAGEMENT TIPS --- */}
      <section className="bg-amber-50/50 p-6 rounded-xl border border-amber-200/60">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Pro Tips for Effective On-Site Soil Management</h3>
        <p className="text-sm mb-3">
          Efficiently managing excavated soil can significantly impact your project's bottom line. Keep these industry practices in mind during your site planning:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Calculate Backfill Requirements First:</strong> Do not haul away all your excavated soil immediately. A significant portion of that earth will likely be needed later to backfill the gaps around completed concrete foundations, retaining walls, and footing plinths.
          </li>
          <li>
            <strong>Keep Topsoil Separate:</strong> The top 6 to 12 inches of excavated earth is nutrient-rich topsoil. Stockpile this material in a dedicated area away from general construction debris so it can be reused later for your project's landscaping and garden beds.
          </li>
          <li>
            <strong>Plan Around Weather Conditions:</strong> Loose excavated soil acts like a sponge. Unprotected dirt piles can quickly turn into unmanageable mud during heavy rainfall, significantly increasing hauling weights and disposal costs. Cover your stockpiles or schedule major earthwork during dry weather windows.
          </li>
        </ul>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the core difference between Bank Volume and Loose Volume?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Bank Volume (BCY or CFT) refers to soil in its natural, undisturbed state within the ground before any mechanical digging occurs. Loose Volume (LCY or CFT) represents the expanded volume of that same soil after it has been excavated. Mechanical digging breaks the natural compaction of the soil, introducing air pockets that cause the material to occupy significantly more physical space.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does the soil swell factor vary across different material types?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Swell percentages depend directly on the soil's structure and compaction history. Clean sand and loose gravel expand minimally, typically between 10% and 15%. Standard mixed earth or agricultural loam expands by roughly 20% to 25%. Heavy, highly cohesive clay holds tight natural structures and can expand or swell by 30% to 45% once broken apart by heavy machinery.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is a "Brass" in earthwork estimation, and where is it used?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A "Brass" is a traditional volumetric benchmarking unit common in the Indian subcontinent. <strong>1 Brass is exactly equal to 100 Cubic Feet (CFT)</strong> or roughly 2.83 cubic meters. Contractors, machinery operators, and material suppliers routinely quote excavation rates, sand deliveries, and hauling costs per Brass.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do you calculate the exact number of truck trips required for disposal?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              To find the total required truck trips, divide the total expanded Loose Volume by the practical hauling capacity of the target transport vessel. For example, if your loose soil volume is 1,500 Cubic Feet and you are utilizing standard tractor trolleys with a capacity of 1 Brass (100 Cubic Feet), you divide 1,500 by 100, resulting in exactly 15 required trips.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is it dangerous to ignore soil expansion during site budgeting?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Ignoring the swell factor often leads to underbudgeting for site clearance logistics. If a site manager assumes that a 500 cubic yard pit produces exactly 500 cubic yards of haulage waste, they will underestimate the required truck counts and disposal fees by 20% to 30%. This error causes unexpected site bottlenecks, schedule delays, and budget overruns.
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
          <a href="/calculator/construction/construction-cost" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Construction Cost</a>
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