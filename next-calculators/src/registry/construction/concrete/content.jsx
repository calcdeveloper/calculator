import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Concrete Calculator | Estimate Bags, Yards & CFT Volume
  2. META DESCRIPTION: Free online concrete calculator. Accurately estimate required concrete volume in cubic yards, cubic meters, or CFT. Calculate exact premixed bag counts.
  3. URL SLUG: /calculator/construction/concrete
  4. H1 TITLE: Professional Concrete Volume & Material Bag Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: concrete calculator
      - Secondary keywords: estimate cubic yards of concrete, calculate concrete bags needed, concrete slab volume calculator, driveway concrete estimator, concrete yardage formulas, how many 80lb bags of concrete, cubic meters concrete calculation, quikrete bag estimator, rmc volume calculator, concrete stairs volume calculation, footing concrete mix ratio.
      - Long-tail keywords: how to calculate concrete for a driveway, how many concrete bags for a 10x10 slab, estimating ready mix concrete for backyard patio, how much concrete needed for fence post holes, converting cubic feet to cubic yards for concrete.
  =========================================
*/

export default function ConcreteCalculatorContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many 80 lb bags of concrete make up one cubic yard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One cubic yard of concrete equals 27 cubic feet. Since a standard 80 lb (pound) bag of premixed concrete yields approximately 0.60 cubic feet when mixed with water, you will need exactly 45 bags of 80 lb concrete to pour one full cubic yard."
        }
      },
      {
        "@type": "Question",
        "name": "How much concrete do I need for a standard 10x10 slab that is 4 inches thick?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a 10ft × 10ft slab with a thickness of 4 inches (0.333 feet), the volume calculation is 10 × 10 × 0.333 = 33.33 Cubic Feet (CFT). Converting this to cubic yards (divide by 27) yields 1.23 cubic yards. Adding a standard 10% wastage buffer brings the final ordering target to approximately 1.35 cubic yards."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard depth or thickness used for residential concrete pours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal thickness depends on the intended structural application. Standard backyard patios, garden walkways, and domestic sidewalks generally require a thickness of 4 inches. Conversely, heavy-duty residential driveways, garage floors, and commercial storage parking lots require a minimum thickness of 5 to 6 inches to withstand vehicular axle loads without cracking."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it critically vital to add a wastage margin to a concrete order?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Applying a 5% to 10% wastage margin is an industry standard practice. Ground excavations are rarely perfectly level, structural wooden formwork can bulge under heavy wet concrete pressure, and minor spills always happen on site. Ordering a buffer protects you from expensive short-load delivery fees or creating structurally weak cold joints."
        }
      },
      {
        "@type": "Question",
        "name": "How many cubic feet of concrete does a standard 60 lb bag yield?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard 60 lb commercial bag of dry premixed concrete mix yields approximately 0.45 cubic feet of wet, workable concrete structural material when mixed with the manufacturer's recommended amount of clean water."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Professional Concrete Volume & Material Bag Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Whether you are an engineering contractor scheduling a fleet of Ready-Mix Concrete (RMC) trucks for a commercial foundation or a DIY homeowner pouring a backyard patio, precise material estimation is critical. Ordering an incorrect volume can derail your project timeline, lead to high short-load transport fees, or leave you with costly material wastage.
        </p>
        <p className="mb-4">
          Our advanced, multi-variable <strong>Concrete Calculator</strong> eliminates guesswork by utilizing proven civil engineering math models. It accurately calculates structural volume demands across various shapes, including rectangular slabs, circular pillars, post holes, and complex multi-tier staircases.
        </p>
        <p className="mb-4">
          Catering to international site environments, this framework seamlessly manages cross-unit transformations between Imperial metrics (feet, inches, yards) and Metric layouts (meters, centimeters). Additionally, it translates volumetric outputs directly into precise commercial bag counts across multiple dry weight profiles (40lb, 50lb, 60lb, and 80lb bags).
        </p>
      </section>

      {/* --- CORE APPLICATION DESIGN PATTERNS --- */}
      <section className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Structural Concrete Applications & Thickness Guidelines</h2>
        <p className="mb-4 text-sm text-gray-600">
          Choosing the right thickness for your concrete installation is essential for structural longevity and preventing premature cracks under heavy loads:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-blue-900 mb-2">4-Inch Profile (100mm)</h3>
            <p className="text-xs text-gray-600">
              The standard thickness benchmark for domestic walkways, pool surrounds, garden patios, and residential tool shed foundations.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-blue-900 mb-2">5 to 6-Inch Profile (125-150mm)</h3>
            <p className="text-xs text-gray-600">
              Highly recommended for residential driveways, heavy-vehicle parking spaces, internal garage slabs, and high-traffic pathways.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg text-blue-900 mb-2">8-Inch+ Profile (200mm+)</h3>
            <p className="text-xs text-gray-600">
              Engineered for heavy industrial warehouse flooring, commercial loading bays, structural building foundations, and public roadways.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW TO USE SECTION --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Concrete Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          This system features built-in support for multiple geometric shapes and automatic unit conversion. Follow these steps to generate your material estimate:
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold text-gray-900 block">1. Select Your Target Geometry:</span>
            <p>Choose the structural profile that matches your project layout from the configuration dropdown menu:</p>
            <ul className="list-disc pl-6 mt-1 text-xs space-y-1 text-gray-600">
              <li><strong>Slabs / Rectangles:</strong> Best for driveways, house slabs, pavements, and foundations.</li>
              <li><strong>Columns / Cylinders:</strong> Engineered for round pillars, deck post holes, and sonotubes.</li>
              <li><strong>Stairs / Steps:</strong> Formulated for multi-tier concrete step installations.</li>
            </ul>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">2. Input Your Dimensional Measurements:</span>
            <p>Provide length, width, radius, diameter, or height based on your chosen shape. You can mix and match units (e.g., inputting length in feet and thickness in inches) for ease of use on site.</p>
          </div>
          <div>
            <span className="font-bold text-gray-900 block">3. Adjust the Wastage Buffer & Quantity:</span>
            <p>Input the number of identical structures you need to pour. Apply a standard wastage margin (a 5% to 10% allowance is recommended) to cover uneven excavation profiles or formwork flex.</p>
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 mt-6 text-base">Calculated Outputs Generated:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Volume:</strong> Your exact material requirement displayed in <strong>Cubic Yards (yd³)</strong>, <strong>Cubic Feet (ft³)</strong>, and <strong>Cubic Meters (m³)</strong>.</li>
          <li><strong>Dry Premixed Bag Count:</strong> The exact number of pre-packaged commercial dry bags needed, calculated across 40lb, 50lb, 60lb, and 80lb options.</li>
        </ul>
      </section>

      {/* --- FORMULA ENGINEERING SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematics and Formulas Behind the Calculations</h2>
        <p className="mb-4 text-sm text-gray-600">
          The calculator splits geometric volumes into distinct mathematical equations based on the structural profile you choose. All dimensions are normalized to a consistent base unit before calculating volume.
        </p>

        <div className="space-y-6">
          {/* Rectangular Slabs */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. Rectangular Slabs & Cuboids</h3>
            <p className="text-sm mb-3 text-gray-700">
              Slabs are calculated using standard 3D rectangular prism volume formulas:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-amber-900 font-bold text-center shadow-inner">
              Volume = Length × Width × Thickness (Depth)
            </div>
          </div>

          {/* Cylinders and Posts */}
          <div className="bg-teal-50/40 p-6 rounded-2xl border border-teal-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Cylindrical Columns & Post Holes</h3>
            <p className="text-sm mb-3 text-gray-700">
              For round pillars and fence posts, the system calculates volume using cylindrical area principles:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-teal-900 font-bold text-center shadow-inner">
              Volume = π × (Radius)² × Depth
            </div>
            <p className="text-xs text-gray-500 mt-2 italic font-sans text-center">
              (Where radius is equal to exactly half of the total input diameter, and π is approximated as 3.14159265)
            </p>
          </div>

          {/* Staircase Step Volume */}
          <div className="bg-indigo-50/40 p-6 rounded-2xl border border-indigo-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Multi-Tier Staircase Assembly</h3>
            <p className="text-sm mb-3 text-gray-700">
              Calculating concrete for stairs can be complex because each step builds on the volume of the ones below it. To simplify this, our calculator treats each individual step as a distinct rectangular block and sums their volumes:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-xs md:text-sm text-indigo-900 font-bold text-left space-y-2 shadow-inner">
              <div>Single Step Volume = Width × Riser Height × Tread Depth</div>
              <div>Total Staircase Volume = Sum of individual cumulative step layers</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PREMIXED COMMERCIAL BAG YIELDS --- */}
      <section className="bg-gradient-to-r from-stone-50 to-gray-100 p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 mb-3">Understanding Premixed Commercial Concrete Bag Yields</h2>
        <p className="text-sm text-gray-700 mb-4">
          For smaller projects like setting fence posts or pouring a small walkway, buying dry premixed bags (such as Quikrete or Sakrete) is often more cost-effective than ordering a ready-mix truck. Dry concrete mixes expand to predictable wet volumes when combined with water:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-gray-800 text-white text-xs uppercase tracking-wider">
                <th className="p-3">Dry Bag Weight Specification</th>
                <th className="p-3">Approximate Volumetric Yield (Cubic Feet)</th>
                <th className="p-3">Bags Required to Fill One Cubic Yard</th>
              </tr>
            </thead>
            <tbody className="text-xs md:text-sm text-gray-600 divide-y divide-gray-200">
              <tr>
                <td className="p-3 font-semibold">80 lb Bag</td>
                <td className="p-3">0.60 Cubic Feet (ft³)</td>
                <td className="p-3 font-mono">45 Bags</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">60 lb Bag</td>
                <td className="p-3">0.45 Cubic Feet (ft³)</td>
                <td className="p-3 font-mono">60 Bags</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">50 lb Bag</td>
                <td className="p-3">0.37 Cubic Feet (ft³)</td>
                <td className="p-3 font-mono">73 Bags</td>
              </tr>
              <tr>
                <td className="p-3 font-semibold">40 lb Bag</td>
                <td className="p-3">0.30 Cubic Feet (ft³)</td>
                <td className="p-3 font-mono">90 Bags</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- REAL-WORLD EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Calculation Scenarios</h2>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-amber-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: Home Driveway Extension (US Standards)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Suppose you need to pour a backyard concrete driveway extension measuring <strong>24 feet long by 12 feet wide</strong>, with a recommended structural thickness of <strong>5 inches</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Convert thickness to feet: 5 inches ÷ 12 = 0.4167 feet</li>
              <li>Calculate Net Volume: 24 ft × 12 ft × 0.4167 ft = 120.0 Cubic Feet (ft³)</li>
              <li>Convert to Cubic Yards: 120.0 ÷ 27 = 4.44 Cubic Yards (yd³)</li>
              <li>Add 10% Wastage Buffer: 4.44 × 1.10 = 4.88 Cubic Yards</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-amber-800">Final Ordering Target: 4.9 Cubic Yards of concrete.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-teal-600 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Cylindrical Structural Pillars (Indian Standards)</h3>
            <p className="mb-3 text-sm text-gray-600">
              A building project requires casting <strong>8 round ornamental columns</strong>. Each column has a diameter of <strong>40 centimeters (0.40 meters)</strong> and a vertical height of <strong>3.5 meters</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200 font-mono">
              <li>Radius Evaluation: 0.40 meters ÷ 2 = 0.20 meters</li>
              <li>Single Pillar Volume: 3.14159 × (0.20)² × 3.5 = 0.4398 m³</li>
              <li>Total Volume for 8 Columns: 0.4398 m³ × 8 = 3.518 m³</li>
              <li>Add 5% Wastage Buffer: 3.518 × 1.05 = 3.694 m³</li>
              <li>Convert total volume to CFT: 3.694 × 35.3147 = 130.45 CFT</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-teal-800">Final Ordering Target: 3.70 Cubic Meters (or 130.5 CFT) of concrete mix.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many 80 lb bags of concrete make up one cubic yard?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              One cubic yard of concrete equals 27 cubic feet. Since a standard 80 lb (pound) bag of premixed concrete yields approximately 0.60 cubic feet when mixed with water, you will need exactly 45 bags of 80 lb concrete to pour one full cubic yard.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How much concrete do I need for a standard 10x10 slab that is 4 inches thick?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For a 10ft × 10ft slab with a thickness of 4 inches (0.333 feet), the volume calculation is 10 × 10 × 0.333 = 33.33 Cubic Feet (CFT). Converting this to cubic yards (divide by 27) yields 1.23 cubic yards. Adding a standard 10% wastage buffer brings the final ordering target to approximately 1.35 cubic yards.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the standard depth or thickness used for residential concrete pours?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The ideal thickness depends on the intended structural application. Standard backyard patios, garden walkways, and domestic sidewalks generally require a thickness of 4 inches. Conversely, heavy-duty residential driveways, garage floors, and commercial storage parking lots require a minimum thickness of 5 to 6 inches to withstand vehicular axle loads without cracking.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why is it critically vital to add a wastage margin to a concrete order?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Applying a 5% to 10% wastage margin is an industry standard practice. Ground excavations are rarely perfectly level, structural wooden formwork can bulge under heavy wet concrete pressure, and minor spills always happen on site. Ordering a buffer protects you from expensive short-load delivery fees or creating structurally weak cold joints.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many cubic feet of concrete does a standard 60 lb bag yield?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A standard 60 lb commercial bag of dry premixed concrete mix yields approximately 0.45 cubic feet of wet, workable concrete structural material when mixed with the manufacturer's recommended amount of clean water.
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