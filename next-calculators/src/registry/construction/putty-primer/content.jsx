import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Wall Putty & Primer Calculator | Estimate Paint Prep Cost
  2. META DESCRIPTION: Calculate the exact wall putty (kg) and primer (liters) needed for painting. Free tool to estimate paint prep material and costs for fresh plaster or repainting.
  3. URL SLUG: /calculator/construction/putty-primer
  4. H1 TITLE: Wall Putty & Primer Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: wall putty and primer calculator
      - Secondary Keywords: putty coverage area, primer calculation formula, how much putty required for 100 sq ft, paint preparation calculator, calculate primer per liter, wall putty price calculator, fresh plaster putty requirement, repainting putty estimate, primer coverage per liter, construction cost calculator.
      - Long-Tail Keywords: how to calculate wall putty and primer for a new house, coverage area of 2 coats of wall putty, difference between fresh plaster and repainting putty coverage, how many liters of primer for 500 sq ft, calculate cost of wall preparation before painting.
  =========================================================================
*/

export default function PuttyPrimerCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const puttyFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much putty is required for a 100 sq ft wall?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard 100 sq ft wall with fresh rough plaster, requiring 2 coats of putty, you will need approximately 8.33 Kg of wall putty. This assumes an average coverage of 12 sq ft per Kg. If you are repainting a smooth wall, you will only need about 6 to 7 Kg."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to apply primer over wall putty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, applying primer over wall putty is highly recommended. Putty levels the wall and fills pores, but primer seals the surface, ensures excellent adhesion for the topcoat paint, and reduces the absorption of expensive emulsion paint, ultimately saving you money."
        }
      },
      {
        "@type": "Question",
        "name": "Can I apply paint directly on wall putty without primer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While technically possible, it is a bad practice. Wall putty is absorbent. If you apply expensive paint directly onto it, the putty will soak up the paint, requiring more coats to achieve the desired color and finish. It can also lead to patchy and uneven wall coloring."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard coverage of wall primer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard interior or exterior wall primer will cover approximately 120 to 140 square feet per liter for a single coat, provided it is applied over a properly puttied and sanded smooth surface."
        }
      },
      {
        "@type": "Question",
        "name": "How long should wall putty dry before applying primer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should allow the first coat of putty to dry for at least 3 to 4 hours. The second coat should dry overnight (or for at least 10 to 12 hours) before sanding it smooth. Only after thorough sanding and dusting should you apply the wall primer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between cement putty and acrylic putty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cement-based putty is a dry powder mixed with water, primarily used to fill heavy undulations and waterproof base plaster. Acrylic putty is a ready-to-use paste that provides an ultra-smooth, buttery finish, usually applied over cement putty or used strictly for interior repainting touch-ups."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(puttyFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Wall Putty & Primer Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          A flawless paint job is only as good as the surface beneath it. Before you can apply beautiful interior emulsions or durable exterior paints, your walls must be perfectly prepared. This involves applying wall putty to fill in the pores and unevenness of the cement plaster, followed by a coat of primer to ensure the final paint adheres properly. 
        </p>
        <p className="mb-4">
          Estimating the right amount of preparation materials can be tricky. Buy too little, and your painters are left waiting; buy too much, and you waste money. Our comprehensive <strong>Wall Putty & Primer Calculator</strong> is designed for homeowners, contractors, and DIY enthusiasts in India and the USA to accurately estimate the exact kilograms of putty and liters of primer needed for any space.
        </p>
        <p className="mb-4">
          
        </p>
        <p>
          Whether you are dealing with fresh, highly absorbent rough plaster or simply touching up an existing smooth wall before repainting, this tool factors in varying coverage rates and coat counts to give you precise material and cost estimates.
        </p>
      </section>

      {/* --- DEEP DIVE INTO COVERAGE --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Coverage Areas</h2>
        <p className="mb-4 text-sm text-gray-700">
          The amount of material you need depends entirely on the condition of your base wall and the number of coats you plan to apply. Here are the industry-standard coverage dynamics:
        </p>
        
        <h3 className="font-bold text-blue-900 mt-4 mb-2">Wall Putty Coverage (Per Kg)</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-6">
          <li><strong>2 Coats (Fresh/Rough Plaster):</strong> Approximately <strong>10 to 14 sq. ft. per Kg</strong>. Fresh cement plaster is highly porous and uneven. The first coat acts to fill deep pores, while the second coat levels the surface.</li>
          <li><strong>2 Coats (Repainting/Smooth Wall):</strong> Approximately <strong>14 to 16 sq. ft. per Kg</strong>. Because the wall has been painted before, its pores are largely sealed, requiring less putty to achieve a smooth finish.</li>
          <li><strong>1 Coat (Touch-ups):</strong> Approximately <strong>20 to 25 sq. ft. per Kg</strong>. Used strictly to fix minor dents, scratches, or nail holes before applying primer.</li>
        </ul>

        <h3 className="font-bold text-blue-900 mt-4 mb-2">Primer Coverage (Per Liter)</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Standard 1 Coat over Putty:</strong> Primer is highly liquid. Because the putty beneath it has already leveled and sealed the major pores, a standard interior or exterior wall primer will cover an impressive <strong>120 to 140 sq. ft. per Liter</strong>.</li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Use the Calculator</h2>
        <p className="mb-4">
          Using our paint prep estimator is incredibly simple. Just input the details of your walls, the type of application, and your local market prices to generate a full shopping list.
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-gray-900 mb-2">Step 1: Enter the Total Wall Area</h3>
            <p>Determine the total square footage of the walls (and ceiling, if applicable) you wish to paint. Multiply the width by the height of each wall and add them together. <em>Pro Tip: Deduct the area of doors and windows to ensure accuracy!</em></p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-gray-900 mb-2">Step 2: Configure Wall Putty Details</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Putty Coats:</strong> Select whether you need 2 coats for fresh plaster, 2 coats for repainting, or 1 coat for touch-ups.</li>
              <li><strong>Coverage (sq.ft / kg):</strong> The calculator sets a default based on your coat selection, but you can adjust this if your specific brand states otherwise.</li>
              <li><strong>Putty Bag Size (kg):</strong> Hardware stores sell putty in standard bags (e.g., 5kg, 20kg, 40kg). Enter your preferred bag size.</li>
              <li><strong>Price per Bag:</strong> Enter the local cost of one bag to estimate your budget.</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-gray-900 mb-2">Step 3: Configure Primer Details</h3>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li><strong>Primer Coats:</strong> Most surfaces require only 1 coat of primer, but porous surfaces might need 2.</li>
              <li><strong>Coverage (sq.ft / liter):</strong> Set the coverage rate (usually around 120 sq.ft per liter).</li>
              <li><strong>Primer Tin Size (Liters):</strong> Enter the size of the primer tin you plan to buy (e.g., 1L, 4L, 10L, 20L).</li>
              <li><strong>Price per Tin:</strong> Enter the cost per tin to finalize your financial estimate.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- THE FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Preparation Formulas</h2>
        <p className="mb-4">
          If you want to understand the mathematics behind the tool, the equations are straightforward division calculations based on area and material efficiency.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">1. Wall Putty Formula</h3>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md leading-relaxed">
          Putty Required (Kg) = Total Area (sq.ft) ÷ Putty Coverage per Kg<br /><br />
          Total Putty Bags = Putty Required (Kg) ÷ Bag Size (Kg)
        </div>
        <p className="text-sm mb-4 text-gray-600">
          The coverage per kg drops significantly if you are applying 2 coats versus 1 coat. Always use the specific coverage rate provided for the number of coats you are applying.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">2. Primer Formula</h3>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md leading-relaxed">
          Primer Required (Liters) = Total Area (sq.ft) ÷ Primer Coverage per Liter<br /><br />
          Total Primer Tins = Primer Required (Liters) ÷ Tin Size (Liters)
        </div>
        <p className="text-sm mb-4 text-gray-600">
          Remember that the primer formula calculates the total liquid volume needed. Because you cannot buy fractions of a tin easily, you will always round up the "Total Primer Tins" to the nearest whole number to ensure you have enough material.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-Life Calculation Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: A Standard 100 Sq.Ft Wall (Fresh Plaster)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You have built a new partition wall measuring 10 ft by 10 ft. It has fresh, rough cement plaster. You need 2 coats of putty and 1 coat of primer. Let's assume you are buying 20kg bags of putty and 1L tins of primer.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>Total Area:</strong> 100 sq.ft.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Putty Calculation:</strong><br />
              Coverage for 2 coats fresh plaster = 12 sq.ft / Kg.<br />
              Putty Required = 100 ÷ 12 = <strong>8.33 Kg</strong>.<br />
              Since you buy 20kg bags, you need <strong>1 Bag</strong> (with plenty left over).
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Primer Calculation:</strong><br />
              Coverage for 1 coat = 120 sq.ft / Liter.<br />
              Primer Required = 100 ÷ 120 = <strong>0.83 Liters</strong>.<br />
              Since you buy 1L tins, you need <strong>1 Tin</strong>.
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Repainting a 500 Sq.Ft Bedroom</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are repainting the walls of a master bedroom (total wall area 500 sq.ft). The walls are already smooth but have minor imperfections. You require a 2-coat repainting putty application and 1 coat of primer. Putty comes in 40kg bags, and Primer in 4L tins.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>Total Area:</strong> 500 sq.ft.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Putty Calculation:</strong><br />
              Coverage for 2 coats on smooth wall = 15 sq.ft / Kg.<br />
              Putty Required = 500 ÷ 15 = <strong>33.33 Kg</strong>.<br />
              Bags Required (40kg size) = 33.33 ÷ 40 = 0.83 Bags. Order <strong>1 Bag (40kg)</strong>.
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Primer Calculation:</strong><br />
              Coverage for 1 coat = 130 sq.ft / Liter.<br />
              Primer Required = 500 ÷ 130 = <strong>3.84 Liters</strong>.<br />
              Tins Required (4L size) = 3.84 ÷ 4 = 0.96 Tins. Order <strong>1 Tin (4 Liters)</strong>.
            </div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much putty is required for a 100 sq ft wall?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a standard 100 sq ft wall with fresh rough plaster, requiring 2 coats of putty, you will need approximately 8.33 Kg of wall putty. This assumes an average coverage of 12 sq ft per Kg. If you are repainting a smooth wall, you will only need about 6 to 7 Kg.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Do I need to apply primer over wall putty?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, applying primer over wall putty is highly recommended. Putty levels the wall and fills pores, but primer seals the surface, ensures excellent adhesion for the topcoat paint, and reduces the absorption of expensive emulsion paint, ultimately saving you money.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can I apply paint directly on wall putty without primer?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              While technically possible, it is a bad practice. Wall putty is absorbent. If you apply expensive paint directly onto it, the putty will soak up the paint, requiring more coats to achieve the desired color and finish. It can also lead to patchy and uneven wall coloring.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard coverage of wall primer?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A standard interior or exterior wall primer will cover approximately 120 to 140 square feet per liter for a single coat, provided it is applied over a properly puttied and sanded smooth surface. If applied directly to rough cement, the coverage drops dramatically.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How long should wall putty dry before applying primer?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              You should allow the first coat of putty to dry for at least 3 to 4 hours. The second coat should dry overnight (or for at least 10 to 12 hours) before sanding it smooth. Only after thorough sanding and dusting should you apply the wall primer.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between cement putty and acrylic putty?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Cement-based putty is a dry powder mixed with water, primarily used to fill heavy undulations and waterproof base plaster. Acrylic putty is a ready-to-use paste that provides an ultra-smooth, buttery finish, usually applied over cement putty or used strictly for interior repainting touch-ups.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction & Interior Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Planning a renovation or starting a new build? Ensure all your material estimates are accurate with our suite of free construction calculators:
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