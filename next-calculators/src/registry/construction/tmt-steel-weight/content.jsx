import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: TMT Steel Bar (Sariya) Weight Calculator | Check Price & Quantity
  2. META DESCRIPTION: Accurately calculate the weight and cost of TMT steel bars (sariya) or rebar. Convert length (meters/feet) to weight (kg) instantly for construction projects.
  3. URL SLUG: /calculator/construction/tmt-steel-weight
  4. H1 TITLE: TMT Steel Bar (Sariya) Weight Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: tmt steel bar weight calculator
      - Secondary Keywords: sariya weight calculator, steel weight formula, tmt bar weight per bundle, calculate steel weight from length, 12mm steel weight per meter, 10mm sariya weight, rebar weight calculator, structural steel calculator, steel cost estimator, construction steel weight.
      - Long-Tail Keywords: how to calculate weight of steel bar, formula for steel weight calculation in kg, how many 12mm bars in one bundle, standard length of tmt bar in india, tmt sariya weight calculation formula per foot.
  =========================================================================
*/

export default function SteelCalculatorContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard length of a TMT steel bar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the standard length of a full TMT steel bar (sariya) is manufactured to be exactly 12 meters (approximately 39.4 feet) long. In the USA, standard rebar is commonly sold in 20-foot or 40-foot lengths."
        }
      },
      {
        "@type": "Question",
        "name": "What is the formula to calculate steel weight per meter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate the weight of a circular steel bar in kilograms per meter, use the formula W = D² / 162, where D is the diameter of the bar in millimeters."
        }
      },
      {
        "@type": "Question",
        "name": "How many pieces are in a bundle of 12mm TMT steel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard bundle of 12mm TMT steel bars contains 5 pieces. Because each full-length 12mm bar weighs about 10.66 kg, a bundle of 5 pieces weighs roughly 53.3 kg, making it manageable for transport."
        }
      },
      {
        "@type": "Question",
        "name": "What does TMT stand for in steel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TMT stands for Thermo Mechanically Treated. It refers to a metallurgical process that cools the outer surface of the steel bar rapidly while keeping the inner core warm and soft. This results in a bar with high tensile strength on the outside and excellent ductility on the inside."
        }
      },
      {
        "@type": "Question",
        "name": "Why is there a weight variation in actual steel bars compared to the formula?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing processes are not perfect, and the rolling mills may produce bars with slight thickness variations. The Bureau of Indian Standards (ISI) allows a rolling tolerance margin (usually ±3% to ±7% depending on the diameter) where the actual weight can safely deviate from the theoretical weight."
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
          TMT Steel Bar (Sariya) Weight Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Reinforcement steel, commonly known as "sariya" in India or "rebar" in the USA, is the critical backbone of any Reinforced Cement Concrete (RCC) structure. It provides the essential tensile strength that concrete lacks, keeping buildings safe during earthquakes and heavy structural loads.
        </p>
        <p className="mb-4">
          A common challenge in construction estimating is the unit mismatch: while steel is generally priced and purchased by weight (in kilograms or metric tons), engineers and masons measure and cut it on-site by length (in meters or feet). Doing manual conversions for hundreds of bars across a project can lead to significant budgetary errors and material shortages.
        </p>
        <p>
          Our <strong>TMT Steel Bar Weight Calculator</strong> bridges this gap instantly. Whether you are a homeowner ordering material for a roof slab, a civil engineering student verifying project quantities, or a contractor placing a bulk order, this tool gives you precise weight calculations and cost estimates based on standard global formulas.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Steel Weight Estimator</h2>
        <p className="mb-4 text-sm text-gray-700">
          Getting an accurate estimate of your steel requirement is easy. Follow these simple steps using the calculator inputs above:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Select Diameter (mm):</strong> Use the dropdown menu to select the thickness of the bar. Options range from standard lightweight bars (8mm, 10mm, 12mm) to heavy-duty structural bars (16mm, 20mm, 25mm, 32mm). In the USA, this roughly correlates to #3 through #10 rebar.
          </li>
          <li>
            <strong>Enter Length:</strong> Input the length of the steel bar. You can toggle the unit between Meters (m) and Feet (ft) depending on your architectural drawing scale. Remember, a standard full-length Indian TMT bar is exactly 12 meters.
          </li>
          <li>
            <strong>Input Quantity:</strong> Enter the total number of bars or pieces required for the structural element (like a beam, column, or slab).
          </li>
          <li>
            <strong>Price per kg (Optional):</strong> Input the current market rate for steel from your local dealer. Steel prices fluctuate daily based on global iron ore and fuel rates.
          </li>
        </ol>
        <p className="mt-4 text-sm font-semibold text-blue-900">
          <strong>Outputs Explained:</strong> The calculator will instantly process these variables to display the <em>Total Weight</em> in kilograms and the <em>Total Cost</em> in your local currency. You can use these exact figures to generate purchase orders or verify dealer invoices.
        </p>
      </section>

      {/* --- UNDERSTANDING TMT STEEL --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">What Makes TMT Steel Special?</h2>
        <p className="mb-4">
          When dealing with construction steel, you will frequently encounter the term <strong>TMT</strong>. TMT stands for <strong>Thermo Mechanically Treated</strong>. 
        </p>
        <p className="mb-4">
          TMT bars are manufactured through a sophisticated process. After the steel is rolled to the desired shape, it is passed through a specially designed water-cooling system (often called the Tempcore process). This rapid quenching cools the tough outer surface quickly, turning it into "Martensite" (a very hard form of steel). Meanwhile, the inner core cools slowly, remaining warm and soft (forming "Ferrite-Pearlite").
        </p>
        <p>
          This dual-structure is highly desirable. The hard outer layer protects against corrosion and provides immense tensile strength to carry building loads. The soft inner core provides excellent ductility, allowing the building to flex slightly during earthquakes without snapping.
        </p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Civil Engineering Steel Weight Formula</h2>
        <p className="mb-4">
          You do not need a weighing scale to find out how heavy a piece of steel is. Because steel has a highly consistent density worldwide (approximately 7,850 kilograms per cubic meter), civil engineers use a simplified, universally accepted formula to calculate weight based purely on the bar's diameter and length.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">1. Weight Per Meter Formula</h3>
        <p className="mb-2 text-sm text-gray-700">
          To find the weight of a circular steel bar in kilograms per meter, you square the diameter and divide by 162.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-center text-lg mb-4 border border-slate-800 shadow-md">
          W = D² / 162
        </div>
        <p className="mb-4 text-sm text-gray-700">
          <em>Where 'D' is the diameter of the bar in millimeters.</em><br />
          For example, a 16mm bar: (16 × 16) / 162 = 256 / 162 = <strong>1.58 kg per meter</strong>.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">2. Weight Per Foot Formula</h3>
        <p className="mb-2 text-sm text-gray-700">
          If your architectural plans are in the imperial system, the mathematical constant changes to 533 to output kilograms per foot.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-center text-lg mb-4 border border-slate-800 shadow-md">
          W = D² / 533
        </div>
        <p className="text-sm text-gray-700">
          For example, an 8mm bar: (8 × 8) / 533 = 64 / 533 = <strong>0.12 kg per foot</strong>.
        </p>
      </section>

      {/* --- STANDARD BUNDLE CHART --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">TMT Bar Weight per Bundle Chart (Indian Standards)</h2>
        <p className="mb-4">
          Because a single 8mm bar is very light and a 25mm bar is incredibly heavy, steel manufacturers pack bars into specific bundle sizes. The goal is to keep the total weight of a single bundle between 45 kg and 60 kg so that laborers can manually lift and carry them around the construction site safely. 
        </p>
        <p className="mb-4">
          All full-length standard TMT bars in India are cut to <strong>12 meters (39.4 feet)</strong>. Here is a definitive chart of standard bundle configurations:
        </p>

        <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200 text-gray-700">
                <th className="p-4 font-semibold">Diameter (mm)</th>
                <th className="p-4 font-semibold">Pieces per Bundle</th>
                <th className="p-4 font-semibold">Weight per 12m Bar (kg)</th>
                <th className="p-4 font-semibold">Approx. Bundle Weight (kg)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">8 mm</td>
                <td className="p-4 text-gray-600">10 pieces</td>
                <td className="p-4 text-gray-600">4.74 kg</td>
                <td className="p-4 text-gray-600">47.40 kg</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">10 mm</td>
                <td className="p-4 text-gray-600">7 pieces</td>
                <td className="p-4 text-gray-600">7.40 kg</td>
                <td className="p-4 text-gray-600">51.80 kg</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">12 mm</td>
                <td className="p-4 text-gray-600">5 pieces</td>
                <td className="p-4 text-gray-600">10.66 kg</td>
                <td className="p-4 text-gray-600">53.30 kg</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">16 mm</td>
                <td className="p-4 text-gray-600">3 pieces</td>
                <td className="p-4 text-gray-600">18.95 kg</td>
                <td className="p-4 text-gray-600">56.85 kg</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">20 mm</td>
                <td className="p-4 text-gray-600">2 pieces</td>
                <td className="p-4 text-gray-600">29.60 kg</td>
                <td className="p-4 text-gray-600">59.20 kg</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">25 mm</td>
                <td className="p-4 text-gray-600">1 piece</td>
                <td className="p-4 text-gray-600">46.24 kg</td>
                <td className="p-4 text-gray-600">46.24 kg</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Worked Examples</h2>
        <p className="text-gray-600 mb-4">
          Let’s review practical site scenarios to see how professionals estimate reinforcement steel budgets.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Ordering for a Concrete Slab</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are casting a roof slab and the structural engineer has specified that you need <strong>40 pieces</strong> of <strong>10mm</strong> steel bars. Each piece needs to be <strong>12 meters</strong> long (full length). The dealer quotes ₹65 per kg.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>1. Weight per meter:</strong> (10 × 10) / 162 = 0.617 kg/m.<br />
            <strong>2. Weight per bar:</strong> 0.617 kg/m × 12 meters = 7.40 kg per bar.<br />
            <strong>3. Total Weight:</strong> 7.40 kg × 40 bars = <strong>296 kg</strong>.<br />
            <strong>4. Total Cost Estimate:</strong> 296 kg × ₹65 = <strong>₹19,240</strong>.
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Calculating Cut Lengths for Stirrups (Rings)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are making square rings (stirrups) for concrete columns. You need <strong>200 rings</strong>, and each ring requires <strong>3 feet</strong> of <strong>8mm</strong> wire rod. The steel cost is ₹62 per kg.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>1. Total Length Required:</strong> 200 rings × 3 feet = 600 feet total.<br />
            <strong>2. Weight per foot:</strong> (8 × 8) / 533 = 0.12 kg/ft.<br />
            <strong>3. Total Weight:</strong> 600 feet × 0.12 kg = <strong>72 kg</strong>.<br />
            <strong>4. Total Cost Estimate:</strong> 72 kg × ₹62 = <strong>₹4,464</strong>.
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard length of a TMT steel bar?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In India, the standard length of a full TMT steel bar (sariya) is manufactured to be exactly 12 meters (approximately 39.4 feet) long. This specific length is chosen to fit perfectly onto standard transport trucks without hanging over the edge dangerously. In the USA, standard rebar is commonly sold in 20-foot or 40-foot lengths.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the formula to calculate steel weight per meter?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              To calculate the theoretical weight of a circular steel bar in kilograms per meter, use the standard formula W = D² / 162, where D is the diameter of the bar in millimeters. For measuring in feet, use W = D² / 533.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many pieces are in a bundle of 12mm TMT steel?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A standard bundle of 12mm TMT steel bars contains exactly 5 pieces. Because each full-length (12m) 12mm bar weighs about 10.66 kg, a bundle of 5 pieces weighs roughly 53.3 kg. This keeps the bundle within manual lifting limits for site laborers.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What does TMT stand for in steel?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              TMT stands for Thermo Mechanically Treated. It refers to an advanced metallurgical cooling process that hardens the outer surface of the steel bar rapidly while keeping the inner core soft. This grants the steel incredible tensile strength, corrosion resistance, and earthquake-absorbing ductility.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is there a weight variation in actual steel bars compared to the formula?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              While the formula D²/162 provides the exact theoretical weight, physical manufacturing is not perfectly precise. The Bureau of Indian Standards (ISI) permits a rolling tolerance margin (usually ±3% to ±7% depending on the diameter size). Therefore, your actual delivery weight slip might vary slightly from your mathematical estimate.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Building a durable structure requires precise estimates across dozens of materials. Ensure your project budget is completely accurate by using our full suite of free estimating tools below:
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
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}