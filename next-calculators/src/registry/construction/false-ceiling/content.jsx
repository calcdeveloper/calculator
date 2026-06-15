import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: False Ceiling & POP Calculator | Material & Cost Estimator
  2. META DESCRIPTION: Estimate materials, gypsum boards, POP bags, and GI framing channels for your false ceiling project. Calculate accurate costs and quantities with wastage.
  3. URL SLUG: /calculator/construction/false-ceiling
  4. H1 TITLE: False Ceiling & Plaster of Paris (POP) Material Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: false ceiling & pop calculator
      - Secondary Keywords: gypsum board calculator, pop material estimation, false ceiling cost per square foot, perimeter channel calculation, intermediate section framework, running feet ceiling estimation, ceiling drywall calculator, plaster of paris coverage, false ceiling material price, metal framing grid calculator.
      - Long-Tail Keywords: how to calculate gypsum boards for room ceiling, plaster of paris bag coverage per square feet, estimating GI framing channels for suspended ceiling, multi level false ceiling cost estimator, false ceiling material calculation with wastage.
  =========================================================================
*/

export default function FalseCeilingContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const ceilingFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Which is better for residential interior renovation: Gypsum Board or POP?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gypsum boards are factory-made sheets that offer exceptionally clean, rapid, and uniform installations with minimal on-site dust, making them ideal for modern residential spaces. Plaster of Paris (POP) is a loose powder mixed on-site, offering unmatched design flexibility for highly customized curved shapes, unique organic profiles, and detailed ornamental cornices, though it demands skilled labor and requires longer curing times."
        }
      },
      {
        "@type": "Question",
        "name": "How much area does a standard 20 kg bag of Plaster of Paris cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under standard trade rules, a single 20 kg bag of premium construction-grade POP covers approximately 20 square feet of ceiling surface at a nominal application thickness of 12mm (0.5 inches). This coverage can vary depending on layout complexity, decorative multi-tiered vertical steps, and the manual application style of the plasterer."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard spacing rule for intermediate GI framing channels?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To prevent heavy gypsum boards or dense POP wet coats from bowing or sagging over time, structural intermediate channels are installed at a maximum spacing of 4 feet (1220 mm) center-to-center. For heavy multi-tier installations or moisture-prone zones, contractors reduce this spacing to 3 feet (915 mm) to provide extra load capacity."
        }
      },
      {
        "@type": "Question",
        "name": "How do you accurately calculate running feet (RFT) for drop ceiling cove steps?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Running Feet (RFT) measures the linear length of vertical steps, light coves, or perimeter borders. Unlike flat surface areas measured in square feet, RFT tracks the exact path of the perimeter channel along wall surfaces and internal light trough drops where additional framing layers are required."
        }
      },
      {
        "@type": "Question",
        "name": "What wastage factor should be applied to complex architectural ceiling designs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard square or rectangular flush drop ceilings require a baseline wastage factor of 5% to 10% to account for perimeter cuts. For intricate modern designs featuring hidden t-bar steps, curved floating steps, or dual cove lighting recesses, it is best to use a 15% to 20% wastage factor to avoid material shortages."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* --- INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ceilingFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          False Ceiling & Plaster of Paris (POP) Material Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          A well-designed false ceiling completely alters the acoustic warmth, ambient lighting, and aesthetic value of any modern interior space. However, suspended ceiling projects can quickly run over budget due to unmanaged material cut-offs, inaccurate framing layouts, or vague contractor quotes. Whether you are installing pristine, pre-cut gypsum board panels or crafting bespoke Plaster of Paris (POP) coves, precise material estimation is essential to control costs.
        </p>
        <p className="mb-4">
          Our professional <strong>False Ceiling & POP Calculator</strong> takes the guesswork out of interior budgeting. It converts raw room measurements into a complete bill of materials, including accurate counts for gypsum sheets, POP powder bags, perimeter L-bars, intermediate framing tracks, and overall labor expenses. Designed to match field guidelines used across both Indian and US construction markets, this tool gives you the exact material specs needed to negotiate confidently with suppliers and installation teams.
        </p>
      </section>

      {/* --- REQUISITE TERMINOLOGY SECTION --- */}
      <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Ceiling Materials & Structural Units</h2>
        <p className="mb-4 text-sm">
          Familiarizing yourself with the core materials and standard trade terms used by professional drywalls and interior installers helps keep your project running smoothly:
        </p>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Plaster of Paris (POP):</strong> A refined, fast-setting gypsum powder that forms a paste when hydrated. It is applied over a metal mesh backing to form highly durable, completely seamless curved ceilings and ornate moldings.
          </li>
          <li>
            <strong>Gypsum Board Panels:</strong> Factory-cured sheets of dense plaster pressed between thick protective paper backings. Typically sold in standard 6x4 ft or 8x4 ft sheets, they provide perfectly smooth flat surfaces with rapid, low-mess installation times.
          </li>
          <li>
            <strong>Galvanized Iron (GI) Framing Grid:</strong> The rust-resistant structural steel matrix suspended from the true overhead concrete slab using heavy fasteners. This framing includes perimeter L-channels, main C-sections, and cross-connecting intermediate tracks.
          </li>
          <li>
            <strong>Square Feet (Sq.Ft.) vs. Running Feet (RFT):</strong> Flat surface area coverage is calculated in square feet, whereas linear elements—such as wall perimeter perimeters, stepped drops, vertical bulkheads, and hidden light coves—are measured in running feet.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE DIRECTIVES --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the False Ceiling Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          This material estimator handles simple flush installations as well as advanced custom layouts. To generate an accurate material list, input your project details below:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Room Area Dimensions</span>
            Enter the maximum Length and Width of your target room footprint in standard linear feet or meters to establish your baseline ceiling area.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Ceiling Type & Panel Options</span>
            Select your preferred material system—either pre-cured Gypsum Board sheets (specifying standard 6x4 ft or 8x4 ft sizes) or wet-applied POP Powder.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Design Complexity & Wastage Margins</span>
            Choose a wastage margin that matches your layout. Simple flat ceilings use a standard 5% to 10% allowance, while multi-tiered modern stepped coves require 15% to 20% to account for complex cuts.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Material & Labor Cost Inputs</span>
            Input localized supply rates per square foot or individual component prices to instantly project complete procurement and labor costs.
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 text-base">Key Estimate Outputs Explained:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Board / Bag Count:</strong> The exact quantity of individual gypsum boards or 20 kg POP bags needed, including your chosen wastage buffer.</li>
          <li><strong>Framing Channels (Pieces):</strong> The total number of 12-foot linear metal sections required to build a safe, secure support grid.</li>
          <li><strong>Projected Total Financial Cost:</strong> A itemized breakout of your total investment, balancing raw material costs against labor expenses.</li>
        </ul>
      </section>

      {/* --- MATHEMATICAL FORMULAS SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas for Material Estimation</h2>
        <p className="mb-4">
          Professional interior estimators use standardized geometric calculations and material coverage rules to plan out false ceiling projects.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2">1. Sheet & Board Calculations (Gypsum Board Option)</h3>
        <p className="mb-4 text-sm">
          First, calculate the flat floor plan area. This total surface area is then divided by the exact surface area of your chosen board size:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Gross Ceiling Area = Room Length × Room Width<br />
          • Standard Small Panel Area (6 ft × 4 ft) = 24 Sq.Ft.<br />
          • Standard Large Panel Area (8 ft × 4 ft) = 32 Sq.Ft.<br />
          • Total Gypsum Boards Required = Ceil( (Ceiling Area / Individual Board Area) × (1 + Wastage % / 100) )
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">2. Powder Coverage Rule (Plaster of Paris Option)</h3>
        <p className="mb-4 text-sm">
          POP application depends heavily on product volume weights. A standard trade rule assumes a 12mm thickness across flat installations:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Baseline POP Coverage Rule: One 20 kg Bag yields approx. 20 Sq.Ft.<br />
          • Total POP Bags Required = Ceil( (Gross Ceiling Area / 20) × (1 + Wastage % / 100) )
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">3. GI Hidden Metal Framework Tracking Formulas</h3>
        <p className="mb-4 text-sm">
          The structural steel framework consists of perimeter tracks that anchor along the walls and primary intermediate channels that carry the weight of the ceiling:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm border border-slate-800 shadow-md">
          • Perimeter Track Length (RFT) = 2 × (Room Length + Room Width) + Step Drops<br />
          • Required 12 ft Perimeter Bars = Ceil( Total Perimeter RFT / 12 )<br />
          • Intermediate Spacing Support Rule: 1 Linear Section Piece (12 ft Length) for every 16 Sq.Ft. of surface area.<br />
          • Total 12 ft Intermediate Channels Required = Ceil( Gross Ceiling Area / 16 )
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Case Studies</h2>
        
        {/* Case Study 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example A: Modern Gypsum Board Living Room (USA Layout)</h3>
          <p className="text-sm text-gray-600">
            An interior team is remodeling a master bedroom suite measuring <strong>20 feet long by 16 feet wide</strong>. They are planning a clean, flush gypsum drop ceiling using standard large commercial panels (8x4 ft) and have included a <strong>10% wastage allowance</strong> to handle perimeter adjustments.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Gross Surface Area = 20 ft × 16 ft = 320 Square Feet</div>
            <div>• Coverage Value Per Panel = 8 ft × 4 ft = 32 Square Feet per board</div>
            <div>• Raw Sheet Requirement = 320 / 32 = 10 Panels</div>
            <div>• Total Panels with Wastage Buffer = 10 × 1.10 = 11 Sheets</div>
            <div>• Perimeter L-Channel Length = 2 × (20 + 16) = 72 Running Feet (RFT)</div>
            <div>• Total 12 ft Perimeter Support Bars = 72 / 12 = 6 Bars</div>
            <div>• Total 12 ft Intermediate Support Sections = Ceil(320 / 16) = 20 Bars</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Final Procurement: Buy 11 Premium Gypsum Boards, 6 Perimeter Bars, and 20 Intermediate Channels.</div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-teal-900">Example B: Detailed Custom POP Ceiling (India Layout)</h3>
          <p className="text-sm text-gray-600">
            A homeowner in Mumbai wants a custom, multi-tiered POP false ceiling for an entertainment lounge measuring <strong>15 feet by 12 feet</strong>. Because the design includes ornate curved moldings and custom lighting coves, the contractor uses a <strong>15% wastage allowance</strong> and estimates with standard <strong>20 kg bags of POP</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Gross Surface Area = 15 ft × 12 ft = 180 Square Feet</div>
            <div>• Raw POP Powder Bags Needed = 180 / 20 = 9 Bags (at standard 12mm thickness)</div>
            <div>• Total POP Bags with Wastage Allowance = 9 × 1.15 = 10.35 ➔ 11 Bags</div>
            <div>• Wall Perimeter Running Length = 2 × (15 + 12) = 54 RFT</div>
            <div>• Total 12 ft Perimeter Support Bars = Ceil(54 / 12) = 5 Bars</div>
            <div>• Total 12 ft Intermediate Framework Channels = Ceil(180 / 16) = 12 Bars</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Final Procurement: Budget for 11 Bags of POP Powder, 5 Perimeter Sections, and 12 Intermediate Support Tracks.</div>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES ON-SITE --- */}
      <section className="bg-amber-50/50 p-6 rounded-xl border border-amber-200/60">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Key Structural Practices for False Ceiling Installations</h3>
        <p className="text-sm mb-3">
          Ensuring your false ceiling is both durable and safe requires proper structural planning. Keep these key field guidelines in mind when reviewing your contractor's work:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Use Moisture-Resistant Boards in Wet Zones:</strong> Standard gypsum boards can warp, sag, or develop mold when exposed to high humidity. Always use specialized green moisture-resistant (MR) boards or cement backer boards in kitchens, bathrooms, and semi-open patios.
          </li>
          <li>
            <strong>Plan Around Heavy Light Fixtures:</strong> Standard GI framing grids are designed to support the weight of the ceiling boards and lightweight LED downlights. Heavy fixtures like crystal chandeliers, large ceiling fans, or recessed cassette AC units must be anchored directly into the overhead concrete slab using dedicated suspension rods.
          </li>
          <li>
            <strong>Verify Leveling Before Boarding:</strong> Even minor alignment errors in your framing grid will show up as noticeable waves or uneven surfaces across your finished ceiling. Ensure your installation team uses laser levels to verify that the entire metal grid is perfectly true before attaching any gypsum boards or applying POP plaster.
          </li>
        </ul>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Which is better for residential interior renovation: Gypsum Board or POP?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Gypsum boards are factory-made sheets that offer exceptionally clean, rapid, and uniform installations with minimal on-site dust, making them ideal for modern residential spaces. Plaster of Paris (POP) is a loose powder mixed on-site, offering unmatched design flexibility for highly customized curved shapes, unique organic profiles, and detailed ornamental cornices, though it demands skilled labor and requires longer curing times.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much area does a standard 20 kg bag of Plaster of Paris cover?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Under standard trade rules, a single 20 kg bag of premium construction-grade POP covers approximately 20 square feet of ceiling surface at a nominal application thickness of 12mm (0.5 inches). This coverage can vary depending on layout complexity, decorative multi-tiered vertical steps, and the manual application style of the plasterer.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard spacing rule for intermediate GI framing channels?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              To prevent heavy gypsum boards or dense POP wet coats from bowing or sagging over time, structural intermediate channels are installed at a maximum spacing of 4 feet (1220 mm) center-to-center. For heavy multi-tier installations or moisture-prone zones, contractors reduce this spacing to 3 feet (915 mm) to provide extra load capacity.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do you accurately calculate running feet (RFT) for drop ceiling cove steps?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Running Feet (RFT) measures the linear length of vertical steps, light coves, or perimeter borders. Unlike flat surface areas measured in square feet, RFT tracks the exact path of the perimeter channel along wall surfaces and internal light trough drops where additional framing layers are required.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What wastage factor should be applied to complex architectural ceiling designs?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Standard square or rectangular flush drop ceilings require a baseline wastage factor of 5% to 10% to account for perimeter cuts. For intricate modern designs featuring hidden t-bar steps, curved floating steps, or dual cove lighting recesses, it is best to use a 15% to 20% wastage factor to avoid material shortages.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore Additional Integrated Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your structural designs, component volumes, and complete project budgeting with our full suite of professional engineering tools:
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