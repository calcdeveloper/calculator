import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Brass Volume Calculator | Calculate Sand & Aggregate in Brass
  2. META DESCRIPTION: Free online Brass Volume Calculator. Instantly convert truck or tractor trolley dimensions into Brass & CFT, and estimate the weight of sand, aggregate, or soil.
  3. URL SLUG: /calculator/construction/brass-volume
  4. H1 TITLE: Free Online Brass Volume Calculator (Sand & Aggregate)
  
  11. SEO KEYWORDS:
      - Primary keyword: brass volume calculator
      - Secondary keywords: brass to cft calculator, calculate sand in brass, aggregate brass measurement, brass unit in construction, tractor trolley sand capacity calculator, brass calculation formula, sand weight per brass, 1 brass sand in kg, gitti brass calculation, sand measurement calculator.
      - Long-tail keywords: how to calculate brass for sand and aggregate, how many cft in 1 brass, truck sand capacity calculation in brass, convert cubic feet to brass, difference between cft and brass calculation.
  =========================================
*/

export default function BrassCalculatorContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What does the term 'Brass' mean in construction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the construction industries of India and neighboring regions, 'Brass' is a traditional unit of volumetric measurement used primarily for bulk loose materials like river sand (reti), crushed stone aggregate (gitti), rubble, and excavated soil. One Brass is defined as exactly equal to 100 Cubic Feet (CFT) or approximately 2.831 Cubic Meters."
        }
      },
      {
        "@type": "Question",
        "name": "How do you convert Cubic Feet (CFT) to Brass?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting Cubic Feet (CFT) to Brass is incredibly straightforward. Since 1 Brass equals 100 CFT, you simply divide your total volume in cubic feet by 100. For example, if a delivery truck contains 450 CFT of sand, dividing by 100 gives you exactly 4.5 Brass of sand."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it incorrect to input 5 feet 6 inches as 5.6 feet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is the most common mathematical mistake made on construction sites. Because there are 12 inches in a single foot (not 10), you must divide the inch value by 12 to get its decimal equivalent. Therefore, 6 inches is 6 divided by 12, which equals 0.5. So, 5 feet 6 inches must always be written as 5.5 feet."
        }
      },
      {
        "@type": "Question",
        "name": "What is the weight of 1 Brass of River Sand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The weight of dry river sand is roughly 45 kg per Cubic Foot (CFT). Since 1 Brass contains 100 CFT, one Brass of dry river sand weighs approximately 4,500 kg, which is equivalent to 4.5 Metric Tons. Note that moisture significantly increases this weight."
        }
      },
      {
        "@type": "Question",
        "name": "How much weight does a Brass of Crushed Stone Aggregate have?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard crushed structural stone aggregate (20mm gitti) has an average dry bulk density of roughly 43 kg per Cubic Foot (CFT). This translates to approximately 4,300 kg or 4.3 Metric Tons per single Brass of material."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator estimate material amounts inside a standard tractor trolley?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. By measuring the internal rectangular bed dimensions (Length and Width) of the tractor trolley along with the actual uniform height of the material inside it, you can input those values directly into our calculator to get an instantaneous readout in both absolute Brass and CFT."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Brass Volume Calculator (Sand & Aggregate)</h1>
        <p className="mb-4 text-lg text-gray-600">
          In commercial and residential construction frameworks—particularly across India—bulk supply materials such as river sand (reti), coarse structural aggregates (gitti), and surface soil are rarely traded by weight. Instead, procurement agents, site engineering teams, and local logistics drivers compute volume using a traditional benchmark called <strong>Brass</strong>.
        </p>
        <p className="mb-4">
          Because loose mineral supplies can absorb water or vary heavily in pack density depending on current ambient weather conditions, weight-based cross-checks can often lead to material invoicing fraud or shortfalls at the site. This tool bridges that exact mathematical gap. 
        </p>
        <p className="mb-4">
          Our professional-tier <strong>Brass Volume Calculator</strong> converts internal rectangular container profiles of hauling vehicles (such as hyva dumpers, open tipper trucks, and tractor trolleys) into absolute volume metrics. It computes your total capacity metrics in both **Cubic Feet (CFT)** and **Brass**, while simultaneously mapping reliable structural tonnages to guard your site from supplier overcharges.
        </p>
      </section>

      {/* --- HOW TO USE SECTION --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Brass Volume Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          Our dynamic calculation engine is mapped directly to real-world loading metrics. Follow these instructions step-by-step to evaluate material logs right from your mobile layout or field terminal:
        </p>
        
        <div className="space-y-4 text-sm">
          <div>
            <span className="font-bold text-gray-900 block">1. Input Unit Configuration:</span>
            <p className="text-gray-700">Set your input system. The primary design profile utilizes <strong>Feet (Decimal, e.g., 10.5)</strong> to guarantee flawless precision when accounting for multi-variable loading scenarios.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">2. Vehicle / Trolley Bed Length:</span>
            <p className="text-gray-700">Measure the interior horizontal dimension of your flatbed or container. Use the slider adjustment or key in the numerical distance value directly into the measurement window.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">3. Vehicle / Trolley Bed Width:</span>
            <p className="text-gray-700">Obtain the clear interior cross-wise span of the carrier container walls, making sure to avoid calculating exterior structural plating panels or reinforcement rib layers.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">4. Material Height / Depth:</span>
            <p className="text-gray-700">Measure from the internal metal floor of the flatbed right up to the leveled top horizontal line of your loaded material pack. Do not measure empty air space above uneven loads.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">5. Material Type Designation:</span>
            <p className="text-gray-700">Select your material from the standard commercial menu dropdown options to dynamically configure density scaling coefficients:</p>
            <ul className="list-disc pl-6 mt-1 space-y-1 text-gray-800">
              <li><strong>River Sand (Reti):</strong> Tailored around high-density fine grain river deposits.</li>
              <li><strong>Crushed Stone / Aggregate (Gitti):</strong> Mapped for structural construction gravel metrics.</li>
              <li><strong>Excavated Soil (Mitti):</strong> Tuned for fill dirt and landscape engineering soil bases.</li>
            </ul>
          </div>
        </div>

        <h3 className="font-bold text-base text-gray-900 mb-2 mt-6">Interpreting Core Calculation Cards</h3>
        <p className="text-sm mb-2 text-gray-700">The primary metrics generated by the script include:</p>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-700">
          <li><strong>Total Volume in Brass:</strong> The core bulk purchasing unit used for commercial supply orders.</li>
          <li><strong>Total Volume in CFT:</strong> The corresponding volume in raw Cubic Feet.</li>
          <li><strong>Estimated Weight (Metric Tons & Kg):</strong> Calculated weight outputs derived via empirical raw compound densities.</li>
        </ul>
      </section>

      {/* --- THE MATHEMATICAL FORMULAS --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Civil Engineering Formulas Behind Brass Volumetrics</h2>
        <p className="mb-4">
          To verify raw site calculations manually, the engineering arithmetic splits into two fundamental components: basic space volume extraction and specific loose matter density matching.
        </p>
        
        <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">1. Geometric Space Volume Equation</h3>
          <p className="text-sm mb-4 text-gray-700">
            First, extract the raw mathematical spatial volume within a three-dimensional rectangular container zone:
          </p>
          <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-amber-900 font-bold text-center tracking-wide overflow-x-auto shadow-inner">
            Volume in Cubic Feet (CFT) = Length (ft) &times; Width (ft) &times; Height (ft)
          </div>
        </div>

        <div className="bg-teal-50/50 p-6 rounded-2xl border border-teal-200 shadow-sm mb-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">2. Volumetric Brass Unit Conversion</h3>
          <p className="text-sm mb-4 text-gray-700">
            By definition across standard civil engineering code parameters, one single unit of construction Brass represents exactly one hundred cubic feet of loose product space.
          </p>
          <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-teal-900 font-bold text-center tracking-wide overflow-x-auto shadow-inner">
            Total Volume in Brass = Total Volume in CFT &divide; 100
          </div>
        </div>

        {/* CRITICAL WARNING BOX */}
        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 my-6">
          <h4 className="text-red-900 font-bold text-lg mb-2 flex items-center gap-2">
            ⚠️ The Critical Inch-Decimal Conversion Trap
          </h4>
          <p className="text-sm text-gray-800">
            The most frequent mathematical error on active construction sites is entering a dimension like <strong>12 feet 6 inches as 12.6 feet</strong>. 
          </p>
          <p className="text-sm text-gray-800 mt-2 font-medium">
            Because a standard linear foot comprises exactly 12 inches rather than a base-10 structure, you must divide your remaining inches by 12:
          </p>
          <div className="bg-white/80 px-4 py-2 rounded-lg font-mono text-xs text-red-900 border border-red-100 my-2 inline-block">
            6 Inches &divide; 12 = 0.5 Feet &rarr; Real Value = 12.5 Feet
          </div>
          <p className="text-sm text-gray-700 mt-1">
            Using 12.6 instead of 12.5 introduces artificial calculation inflation, leading to systemic pricing discrepancies over large aggregate orders.
          </p>
        </div>

        {/* MATERIAL BULK ESTIMATE TABLES */}
        <h3 className="text-xl font-bold text-gray-900 mb-3 mt-6">Empirical Material Densities Used for Calculations</h3>
        <p className="text-sm mb-4">
          To provide weight conversions, our calculation logic maps standard material densities in the background:
        </p>
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
          <table className="min-w-full text-sm divide-y divide-gray-200">
            <thead className="bg-gray-50 font-semibold text-gray-900 text-left">
              <tr>
                <th className="px-4 py-3">Material Designation</th>
                <th className="px-4 py-3">Approx. Weight per CFT</th>
                <th className="px-4 py-3">Approx. Weight per Brass Unit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700 bg-white">
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">River Sand (Reti)</td>
                <td className="px-4 py-3">45.00 kg / ft³</td>
                <td className="px-4 py-3">4,500 kg (4.50 Metric Tons)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Crushed Stone / Aggregate (Gitti)</td>
                <td className="px-4 py-3">43.00 kg / ft³</td>
                <td className="px-4 py-3">4,300 kg (4.30 Metric Tons)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-gray-900">Excavated Loose Soil (Mitti)</td>
                <td className="px-4 py-3">40.00 kg / ft³</td>
                <td className="px-4 py-3">4,000 kg (4.00 Metric Tons)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- REAL-LIFE WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Calculation Scenarios</h2>
        <p className="mb-6 text-sm text-gray-600">
          Review these step-by-step application profiles taken directly from actual civil site receipts:
        </p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-blue-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: Assessing a Tractor Trolley Delivery of River Sand</h3>
            <p className="mb-3 text-sm text-gray-600">
              A logistics carrier brings fine river sand to your project site. The internal container boundaries measure <strong>11 feet long by 6 feet wide</strong>, with a measured material loading height of <strong>2 feet</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-medium">
              <li><strong>Step 1: Compute Base Volume (CFT)</strong> = 11 ft &times; 6 ft &times; 2 ft = 132 CFT.</li>
              <li><strong>Step 2: Convert CFT into Brass</strong> = 132 &divide; 100 = 1.32 Brass.</li>
              <li><strong>Step 3: Calculate Tonnage</strong> = 132 CFT &times; 45 kg = 5,940 kg (5.94 Tons).</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-blue-800">Final Verification: You should pay for exactly 1.32 Brass of sand.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Verifying a Heavy Commercial Dumper Truck of Aggregate (Gitti)</h3>
            <p className="mb-3 text-sm text-gray-600">
              A large multi-axle dumper truck arrives carrying 20mm aggregate stones. The physical load metrics are tracked as <strong>16 feet long by 8 feet wide</strong>, with a material depth profile height reaching <strong>4.5 feet</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-medium">
              <li><strong>Step 1: Compute Base Volume (CFT)</strong> = 16 ft &times; 8 ft &times; 4.5 ft = 576 CFT.</li>
              <li><strong>Step 2: Convert CFT into Brass</strong> = 576 &divide; 100 = 5.76 Brass.</li>
              <li><strong>Step 3: Calculate Tonnage</strong> = 576 CFT &times; 43 kg = 24,768 kg (24.77 Tons).</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-emerald-800">Final Verification: The delivery vehicle is carrying exactly 5.76 Brass of gravel aggregate.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What does the term 'Brass' mean in construction?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In the construction industries of India and neighboring regions, 'Brass' is a traditional unit of volumetric measurement used primarily for bulk loose materials like river sand (reti), crushed stone aggregate (gitti), rubble, and excavated soil. One Brass is defined as exactly equal to 100 Cubic Feet (CFT) or approximately 2.831 Cubic Meters.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do you convert Cubic Feet (CFT) to Brass?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Converting Cubic Feet (CFT) to Brass is incredibly straightforward. Since 1 Brass equals 100 CFT, you simply divide your total volume in cubic feet by 100. For example, if a delivery truck contains 450 CFT of sand, dividing by 100 gives you exactly 4.5 Brass of sand.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why is it incorrect to input 5 feet 6 inches as 5.6 feet?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This is the most common mathematical mistake made on construction sites. Because there are 12 inches in a single foot (not 10), you must divide the inch value by 12 to get its decimal equivalent. Therefore, 6 inches is 6 divided by 12, which equals 0.5. So, 5 feet 6 inches must always be written as 5.5 feet.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the weight of 1 Brass of River Sand?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The weight of dry river sand is roughly 45 kg per Cubic Foot (CFT). Since 1 Brass contains 100 CFT, one Brass of dry river sand weighs approximately 4,500 kg, which is equivalent to 4.5 Metric Tons. Note that moisture significantly increases this weight.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What much weight does a Brass of Crushed Stone Aggregate have?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Standard crushed structural stone aggregate (20mm gitti) has an average dry bulk density of roughly 43 kg per Cubic Foot (CFT). This translates to approximately 4,300 kg or 4.3 Metric Tons per single Brass of material.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can this calculator estimate material amounts inside a standard tractor trolley?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. By measuring the internal rectangular bed dimensions (Length and Width) of the tractor trolley along with the actual uniform height of the material inside it, you can input those values directly into our calculator to get an instantaneous readout in both absolute Brass and CFT.
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
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}