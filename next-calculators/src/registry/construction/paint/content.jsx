import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Room & Exterior Paint Calculator | Estimate Paint Liters
  2. META DESCRIPTION: Calculate the exact liters of paint needed for your room, house exterior, or ceilings. Free paint estimator for luxury, standard, and exterior emulsions.
  3. URL SLUG: /calculator/construction/paint
  4. H1 TITLE: Room & Exterior Paint Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: room and exterior paint calculator
      - Secondary Keywords: house paint estimator, liters of paint for a room, asian paints coverage calculator, interior paint calculator, wall paint quantity formula, calculate paint for outside house, paint requirement calculator, wall area deduction for doors, exterior emulsion paint coverage, primer and putty calculator.
      - Long-Tail Keywords: how to calculate liters of paint for a room, paint coverage for luxury interior 2 coats, how much paint do i need for 500 sq ft, calculate paint cost for new house construction, exact asian paints royale coverage per liter.
  =========================================================================
*/

export default function PaintCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const paintFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many coats of paint do I need for a room?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a professional and durable finish, you generally need 2 coats of top-coat paint. If you are painting a light color over a very dark wall, you might need a coat of primer followed by 3 coats of paint to completely hide the old color."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Luxury and Standard Interior paint?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Luxury interior paints (like Asian Paints Royale or Berger Silk) are highly washable, have a rich sheen or matte finish, and often contain low VOCs (fewer odors). Standard interior paints (like Tractor Emulsion) are economical, have a matte finish, and are less washable but provide excellent coverage for budget-friendly projects."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to apply primer before painting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Primer acts as a bonding layer between the bare wall (or putty) and the top-coat paint. It prevents the porous wall from absorbing too much of your expensive paint, resulting in better coverage, true color reflection, and a longer-lasting finish."
        }
      },
      {
        "@type": "Question",
        "name": "How much area does 1 liter of paint cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Coverage varies by paint type and brand. On average, a standard interior emulsion covers about 120 to 140 Sq.ft per liter for 2 coats. Exterior paints usually cover about 50 to 60 Sq.ft per liter for 2 coats due to the rougher exterior texture."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate paint for the ceiling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ceiling area is simply calculated by multiplying the Length of the room by its Width. Ceilings are usually painted with standard or economy flat white emulsions to hide imperfections and reflect light, so you can calculate it separately from your colored wall paint."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(paintFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Room & Exterior Paint Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Whether you are giving your bedroom a fresh coat before the holidays or calculating the material cost for a newly constructed house, knowing the exact amount of paint to buy is critical. Guessing leads to either over-ordering expensive luxury emulsions or awkwardly running out of paint in the middle of a wall.
        </p>
        <p className="mb-4">
          Our <strong>Room & Exterior Paint Calculator</strong> is designed for homeowners, DIY enthusiasts, and professional painting contractors in India and the USA. It acts as an advanced coverage estimator, taking into account your exact room dimensions, ceiling requirements, and deductions for doors and windows to tell you exactly how many liters of paint—and what budget—you will need.
        </p>
      </section>

      {/* --- UNDERSTANDING PAINT TERMINOLOGY --- */}
      <section className="bg-slate-50 p-6 rounded-xl border border-slate-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Painting Terms to Know</h2>
        <p className="mb-4 text-sm text-gray-600">
          Before calculating, familiarizing yourself with industry-standard terminology will ensure you buy the right products for your walls:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Sq.ft (Square Feet):</strong> The standard unit of measurement for wall area. Your total room surface area dictates how much paint you need.</li>
          <li><strong>VOC (Volatile Organic Compounds):</strong> Chemicals in paint that release strong, harmful odors as they dry. Modern luxury interior paints are "Low VOC" or "Zero VOC," making them safe and odor-free for bedrooms and children's rooms.</li>
          <li><strong>Putty:</strong> A white cement-based fine powder mixed with water. Applied to bare plaster, it fills microscopic pores and creates a glass-smooth surface for the paint.</li>
          <li><strong>Primer:</strong> A preparatory base coat. It seals the putty or bare wall, ensuring the expensive top-coat paint sticks perfectly and isn't soaked up by the wall.</li>
          <li><strong>Emulsion:</strong> Water-based paints typically used for residential interiors and exteriors. They are durable, easy to apply, and dry quickly.</li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Paint Estimator</h2>
        <p className="mb-4">
          Using this calculator takes the complex geometry out of the equation. Simply follow these steps using our input fields:
        </p>
        
        <div className="space-y-4 text-sm">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 1: Enter Area Dimensions</h3>
            <p className="text-gray-600">Input the <strong>Length</strong>, <strong>Width</strong>, and <strong>Height</strong> of the room. You can select your preferred measurement unit (Feet or Meters) from the dropdown. If you also plan to paint the ceiling with the same color, toggle the <strong>"Include Ceiling?"</strong> switch to "Yes".</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 2: Add Deductions (Doors & Windows)</h3>
            <p className="text-gray-600">You don't paint over glass or wood! Enter the <strong>Number of Doors</strong> and <strong>Number of Windows</strong> in the room. The calculator automatically subtracts standard Indian/US door (~21 sq.ft) and window (~16 sq.ft) sizes. If you have non-standard sizes (like a large sliding glass balcony door), toggle the <strong>"Custom Deduction Area?"</strong> switch and manually enter the total square footage to exclude.</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 3: Paint Specifications & Prices</h3>
            <p className="text-gray-600 mb-2">Select your <strong>Paint Type</strong> from the dropdown menu to apply the correct spreading rate. Options include:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
              <li><em>Luxury Interior</em></li>
              <li><em>Standard Interior</em></li>
              <li><em>Economy Interior</em></li>
              <li><em>Exterior Emulsion</em></li>
              <li><em>Enamel/Wood Paint</em></li>
            </ul>
            <p className="text-gray-600">Finally, input the <strong>Number of Coats</strong> (typically 2 for walls) and the current market <strong>Price per Liter</strong> to generate your final budget.</p>
          </div>
        </div>
      </section>

      {/* --- THE FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Paint Calculation Formula Explained</h2>
        <p className="mb-4">
          To find out how many liters of paint for a room you need, we must calculate the gross surface area of the walls, subtract the unpainted empty spaces, and divide the remaining net area by the paint's specific coverage capability.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">1. Calculating Total Gross Area</h3>
        <p className="text-sm mb-3">A standard room has four walls. The easiest way to calculate their combined area is to find the perimeter and multiply by the height.</p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Wall Area = 2 × (Length + Width) × Height<br />
          • Ceiling Area (if applicable) = Length × Width<br />
          • Gross Area = Wall Area + Ceiling Area
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">2. Subtracting Deductions</h3>
        <p className="text-sm mb-3">
          Doors, windows, and built-in wardrobes should be subtracted from the Gross Area.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Net Paintable Area = Gross Area - (Area of Doors + Area of Windows)
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">3. Calculating Liters Required</h3>
        <p className="text-sm mb-3">
          Once we have the Net Area, we divide it by the spreading rate (coverage per liter) of the specific paint type for the number of coats desired.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md">
          • Total Paint (Liters) = Net Paintable Area ÷ Coverage Rate per Liter<br />
          • Total Cost = Total Paint (Liters) × Price per Liter
        </div>
      </section>

      {/* --- STANDARD COVERAGE RATES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Coverage Rates by Paint Type</h2>
        <p className="mb-4 text-sm text-gray-600">
          Paint coverage varies by brand (e.g., Asian Paints, Sherwin-Williams, Berger, Nerolac). Below are the standard thumb rules for coverage in Square Feet per Liter (Sq.ft/L). Keep in mind that older, highly porous walls will absorb more paint and yield lower coverage.
        </p>

        <div className="overflow-x-auto my-4 shadow-sm rounded-lg border border-gray-200">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300 text-gray-800">
                <th className="p-3">Paint Category</th>
                <th className="p-3">Examples (India/US)</th>
                <th className="p-3">Coverage (1 Coat)</th>
                <th className="p-3">Coverage (2 Coats)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Luxury Interior</td>
                <td className="p-3">Royale, Emerald, Silk</td>
                <td className="p-3">240 - 260 Sq.ft/L</td>
                <td className="p-3">130 - 150 Sq.ft/L</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                <td className="p-3 font-semibold">Standard Interior</td>
                <td className="p-3">Tractor, SuperPaint, Bison</td>
                <td className="p-3">200 - 220 Sq.ft/L</td>
                <td className="p-3">110 - 120 Sq.ft/L</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Economy Interior</td>
                <td className="p-3">Distemper, Promar</td>
                <td className="p-3">150 - 170 Sq.ft/L</td>
                <td className="p-3">80 - 90 Sq.ft/L</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50 bg-gray-50/50">
                <td className="p-3 font-semibold">Exterior Emulsion</td>
                <td className="p-3">Apex, WeatherCoat, A-100</td>
                <td className="p-3">100 - 120 Sq.ft/L</td>
                <td className="p-3">50 - 60 Sq.ft/L</td>
              </tr>
              <tr className="border-b border-gray-200 hover:bg-gray-50">
                <td className="p-3 font-semibold">Enamel/Wood Paint</td>
                <td className="p-3">Apcolite, ProClassic</td>
                <td className="p-3">180 - 200 Sq.ft/L</td>
                <td className="p-3">90 - 100 Sq.ft/L</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- DETAILED REAL-WORLD WORKED SCENARIOS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Worked Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Master Bedroom (Luxury Interior)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are painting a 15 ft (Length) by 12 ft (Width) by 10 ft (Height) master bedroom. You want to paint the walls and the ceiling using <strong>Luxury Interior Paint</strong> (2 coats). The room has 1 door and 2 windows. Price is ₹500 per Liter.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Gross Wall Area:</strong> 2 × (15 + 12) × 10 = 540 Sq.ft.</div>
            <div><strong>2. Ceiling Area:</strong> 15 × 12 = 180 Sq.ft.</div>
            <div><strong>3. Total Gross Area:</strong> 540 + 180 = 720 Sq.ft.</div>
            <div><strong>4. Deductions:</strong> 1 Door (21 Sq.ft) + 2 Windows (16 × 2 = 32 Sq.ft) = 53 Sq.ft.</div>
            <div><strong>5. Net Area:</strong> 720 - 53 = <strong>667 Sq.ft</strong>.</div>
            <div><strong>6. Paint Required:</strong> 667 ÷ 140 (Luxury 2-coat coverage) = <strong>4.76 Liters</strong>.</div>
            <div className="text-blue-700 font-semibold mt-2">Budget: 4.76 L × ₹500 = ₹2,380. (Buy a 4L bucket and a 1L bucket).</div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: House Exterior Boundary Wall</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are painting the front boundary wall of a property using <strong>Exterior Emulsion</strong> (2 coats). The wall length is 50 ft and the height is 6 ft. There is 1 large solid iron gate (custom deduction of 40 Sq.ft). Exterior emulsion costs ₹350 per Liter.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Gross Wall Area:</strong> 50 ft × 6 ft = 300 Sq.ft.</div>
            <div><strong>2. Ceiling Area:</strong> Not applicable.</div>
            <div><strong>3. Deductions:</strong> Gate = 40 Sq.ft.</div>
            <div><strong>4. Net Area:</strong> 300 - 40 = <strong>260 Sq.ft</strong>.</div>
            <div><strong>5. Paint Required:</strong> 260 ÷ 60 (Exterior 2-coat coverage) = <strong>4.33 Liters</strong>.</div>
            <div className="text-blue-700 font-semibold mt-2">Budget: 4.33 L × ₹350 = ₹1,515.</div>
          </div>
        </div>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many coats of paint do I need for a room?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a professional and durable finish, you generally need 2 coats of top-coat paint. If you are painting a very light color over a previously dark-colored wall, you might need an initial coat of primer followed by 3 coats of paint to completely hide the old color.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between Luxury and Standard Interior paint?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Luxury interior paints (like Asian Paints Royale or Berger Silk) are formulated with premium acrylic resins. They are highly washable, have a rich sheen or subtle matte finish, and often contain low VOCs (meaning fewer odors). Standard interior paints (like Tractor Emulsion) are economical, have a flatter matte finish, and are less resistant to stains, but they provide excellent coverage for budget-friendly projects.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Do I need to apply primer before painting?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes. Primer acts as a critical bonding layer between the bare wall (or putty surface) and the top-coat paint. It prevents the porous plaster from absorbing too much of your expensive top-coat paint, resulting in better square-foot coverage, truer color reflection, and a longer-lasting finish without peeling.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much area does 1 liter of paint cover?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Coverage varies significantly by paint type and brand. On average, a standard interior emulsion covers about 120 to 140 Sq.ft per liter for 2 coats. Exterior paints are thicker and applied to rougher surfaces, so they usually cover about 50 to 60 Sq.ft per liter for 2 coats.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I calculate paint for the ceiling?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The ceiling area is simply calculated by multiplying the Length of the room by its Width. Ceilings are usually painted with standard or economy flat white emulsions to hide light imperfections and reflect maximum light downward. Because they often use a different color or sheen than walls, it's best to calculate ceiling liters separately.
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