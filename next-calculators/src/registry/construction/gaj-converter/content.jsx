import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: Gaj to Square Feet Converter | Plot Area Calculator
  2. META DESCRIPTION: Convert Gaj to Square Feet, Square Meters, and Square Yards instantly. Calculate real estate plot areas using length and width dimensions with our land converter.
  3. URL SLUG: /calculator/construction/gaj-converter
  4. H1 TITLE: Gaj to Square Feet & Square Meter Land Converter
  
  11. SEO KEYWORDS:
      - Primary Keyword: gaj to square feet converter
      - Secondary Keywords: plot area calculator, gaj to sq mt, land measurement converter, square yards to gaj, plot size in feet, delhi real estate calculator, calculate area in gaj, north india land units, property dimensions converter, square feet to gaj formula.
      - Long-Tail Keywords: how to convert gaj to square feet manually, 100 gaj plot size in feet dimensions, square meter to gaj conversion factor, calculating plot area from length and width, commercial land unit registry conversions india.
  =========================================================================
*/

export default function GajConverterContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const gajConverterFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Gaj and where is it primarily used?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Gaj (also spelled Gaz) is a traditional unit of area widely used in real estate and land measurement across North and Central India, including states like Delhi, Haryana, Punjab, Uttar Pradesh, Rajasthan, and Madhya Pradesh. Historically introduced as a measure of linear length, in modern property contexts it denotes one Square Yard."
        }
      },
      {
        "@type": "Question",
        "name": "How do you convert 100 Gaj into Square Feet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 1 Gaj is exactly equivalent to 9 Square Feet, you simply multiply the total value in Gaj by 9. For a 100 Gaj plot: 100 × 9 = 900 Square Feet. This is the standard sizing for classic urban housing layouts."
        }
      },
      {
        "@type": "Question",
        "name": "Why do official bank documents use Square Meters instead of Gaj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Municipal corporations, development authorities (like DDA, HUDA, or NOIDA), and banking institutions mandate metric international standards (Square Meters) or standard imperial units (Square Feet) to minimize regional ambiguities. Local brokers use Gaj for everyday deals, but legal registrations require standard systemic units."
        }
      },
      {
        "@type": "Question",
        "name": "How can I calculate the Gaj of an irregularly shaped land parcel?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For irregular plots, divide the land space into simple triangles or rectangles. Compute the individual square footage area for each section using geometric formulas, sum them up to find the total square feet, and then divide the final cumulative value by 9 to get the total area in Gaj."
        }
      },
      {
        "@type": "Question",
        "name": "What is the exact mathematical relation between a Square Meter and a Gaj?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One Square Meter is equal to approximately 1.196 Gaj (Square Yards). Conversely, 1 Gaj is equal to 0.8361 Square Meters. To convert Square Meters directly to Gaj, multiply the metric value by 1.196."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gajConverterFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Gaj to Square Feet & Square Meter Land Converter
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Navigating the real estate landscape requires a clear understanding of regional and international land metrics. Whether you are analyzing property listings on local portals, reviewing municipal layout documents, or calculating civil material supplies, matching different units can feel overwhelming.
        </p>
        <p className="mb-4">
          Our advanced <strong>Gaj to Square Feet Converter</strong> simplifies this process. It helps buyers, builders, real estate professionals, and landowners move effortlessly between traditional Indian terms and standard metric or imperial units. Built to handle quick single-unit swaps as well as full length-and-width plot calculations, this tool provides instant clarity for property transactions, architectural design, and project planning.
        </p>
      </section>

      {/* --- HISTORICAL & REGIONAL LAND VALUE CONTEXT --- */}
      <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Historical Perspective: Understanding the "Gaj" in Real Estate</h2>
        <p className="mb-3 text-sm">
          The term <strong>Gaj</strong> (historically written as <em>Gaz</em>) originated in Mughal India as a standard measure of linear length, heavily influenced by regional trade. Over the centuries, its definition shifted from a linear measure used for textiles and architectural layout to a standard unit of square area in real estate markets.
        </p>
        <p className="mb-3 text-sm">
          Today, in states like Delhi, Haryana, Punjab, Uttar Pradesh, and Rajasthan, a property’s commercial value is almost always quoted as a rate per Gaj (e.g., ₹50,000 per Gaj). However, modern architectural blueprints, institutional home loan approvals, and official land registries require measurements in <strong>Square Feet (Sq.ft)</strong> or <strong>Square Meters (Sq.m)</strong>. Understanding this relationship helps prevent calculation errors during legal documentation and financial planning.
        </p>
      </section>

      {/* --- STEP-BY-STEP USER DIRECTIVE (BASED ON THE SCREENSHOT INTERFACE DATA) --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Plot Area & Unit Converter</h2>
        <p className="mb-4 text-sm text-gray-600">
          This application features two distinct computation modules designed to match typical field conditions:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Method 1: Direct Unit Conversion Mode</span>
            Perfect for quick conversions between known area values. Simply select your starting unit from the dropdown menu (such as Gaj, Square Feet, Square Meters, Square Yards, or Acres), type in the value, and the tool will automatically display the equivalent size in all other systems.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Method 2: Dimensional Property Layout Mode</span>
            Ideal when you know the physical borders of a plot. Enter the frontage width and depth length using standard units (Feet or Meters). The converter will find the total surface area and automatically display the results in both Gaj and standard metric values.
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 text-base">Supported Units in the Configuration Dropdown Menu:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600 grid grid-cols-2 gap-1">
          <li><strong>Gaj (Square Yards)</strong> - Standard local Indian market metric.</li>
          <li><strong>Square Feet (Sq.ft)</strong> - Main choice for global real estate and engineering layouts.</li>
          <li><strong>Square Meters (Sq.m)</strong> - Used for statutory government records.</li>
          <li><strong>Acres & Hectares</strong> - Used for large agricultural land values.</li>
          <li><strong>Bigha, Biswa & Marla</strong> - Regional agricultural tracking metrics.</li>
        </ul>
      </section>

      {/* --- THE MATHEMATICAL MATRIX (FORMULAS) --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas for Land Conversion</h2>
        <p className="mb-4">
          To convert these units manually, you can use these verified formulas that map local terms to international standard dimensions:
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2">1. Gaj to Square Feet Formula</h3>
        <p className="mb-4 text-sm">
          Because 1 linear yard equals exactly 3 linear feet, a square yard (1 Gaj) spans an area that is 3 feet long by 3 feet wide.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Area in Square Feet = Area in Gaj × 9<br />
          • Area in Gaj = Area in Square Feet / 9
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">2. Square Meter to Gaj Conversion Formula</h3>
        <p className="mb-4 text-sm">
          Government agencies usually auction land using metric square values. To match these numbers with local market pricing, use the 1.19599 conversion factor:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Area in Gaj = Area in Square Meters × 1.196<br />
          • Area in Square Meters = Area in Gaj × 0.8361
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">3. Dimensional Grid Calculation</h3>
        <p className="mb-4 text-sm">
          When measuring an actual plot on-site, use this sequence to convert linear dimensions into total Gaj:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm border border-slate-800 shadow-md">
          • Total Area in Sq.ft = Width (Frontage in Feet) × Length (Depth in Feet)<br />
          • Final Land Valuation in Gaj = Total Area in Sq.ft / 9
        </div>
      </section>

      {/* --- DETAILED REAL-WORLD WORKED SCENARIOS --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Property Scenarios</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Scenario A: Verifying a 200 Gaj Plot for a Home Loan</h3>
          <p className="text-sm text-gray-600">
            A homebuyer is purchasing a residential plot listed by a local broker as exactly <strong>200 Gaj</strong> in Gurgaon. The bank's verification officer needs the area listed in Square Feet to process the mortgage documents.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Starting Value = 200 Gaj</div>
            <div>• Applied Conversion Formula = Value in Gaj × 9</div>
            <div>• Calculation Process = 200 × 9</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Result: The property spans exactly 1,800 Square Feet.</div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-teal-900">Scenario B: Finding the Area of a 25 ft × 54 ft Plot</h3>
          <p className="text-sm text-gray-600">
            An investor is looking at an urban plot with a <strong>frontage width of 25 feet</strong> and a <strong>depth length of 54 feet</strong>. To check if the local market price per Gaj is a good deal, they need to convert these dimensions.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Calculate Total Square Footage = 25 ft × 54 ft = 1,350 Sq.ft</div>
            <div>• Applied Conversion Formula = Total Square Feet / 9</div>
            <div>• Calculation Process = 1350 / 9</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Result: The layout is exactly 150 Gaj.</div>
          </div>
        </div>

        {/* Example 3 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-purple-900">Scenario C: Converting a Government DDA Land Allocation</h3>
          <p className="text-sm text-gray-600">
            A business owner wins a municipal authority auction for an industrial space measured at <strong>350 Square Meters</strong>. They want to convert this to Gaj to estimate local building and development costs.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Starting Metric Area = 350 Sq.m</div>
            <div>• Applied Conversion Formula = Square Meters × 1.196</div>
            <div>• Calculation Process = 350 × 1.19599 = 418.59</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Result: The allocated property area is approximately 418.6 Gaj.</div>
          </div>
        </div>
      </section>

      {/* --- QUICK REF INDEX CHEAT SHEET --- */}
      <section className="bg-amber-50/40 p-6 rounded-xl border border-amber-200/60">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Real Estate Conversion Reference Cheat Sheet</h3>
        <p className="text-sm mb-4">
          Save time with this quick-reference matrix for common residential plot sizes used across major real estate markets:
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <thead>
              <tr className="bg-slate-800 text-white font-semibold">
                <th className="p-3">Area in Gaj</th>
                <th className="p-3">Equivalent Square Feet</th>
                <th className="p-3">Equivalent Square Meters</th>
                <th className="p-3">Typical Property Context</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-medium">60 Gaj</td>
                <td className="p-3">540 Sq.ft</td>
                <td className="p-3">50.1 Sq.m</td>
                <td className="p-3 text-gray-500">Affordable multi-floor housing / Small apartments</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 font-medium">100 Gaj</td>
                <td className="p-3">900 Sq.ft</td>
                <td className="p-3">83.6 Sq.m</td>
                <td className="p-3 text-gray-500">Standard urban residential plot layout</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">200 Gaj</td>
                <td className="p-3">1,800 Sq.ft</td>
                <td className="p-3">167.2 Sq.m</td>
                <td className="p-3 text-gray-500">Mid-size premium duplex or builder floor site</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="p-3 font-medium">500 Gaj</td>
                <td className="p-3">4,500 Sq.ft</td>
                <td className="p-3">418.0 Sq.m</td>
                <td className="p-3 text-gray-500">Luxury standalone bungalows and premium estates</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">1,000 Gaj</td>
                <td className="p-3">9,000 Sq.ft</td>
                <td className="p-3">836.1 Sq.m</td>
                <td className="p-3 text-gray-500">Large commercial warehouses or farmhouse setups</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- LAND SURVEYING BEST PRACTICES --- */}
      <section className="border-l-4 border-emerald-500 pl-6 my-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Pro Tip: Watch Out for Road Deductions and Setbacks</h3>
        <p className="text-sm text-gray-600">
          When buying land based on Gaj measurements, always check the difference between the <strong>gross plot area</strong> listed in the deed and the actual <strong>net buildable area</strong>. Municipal bylaws often require you to leave front and side setbacks for ventilation, or clear land for future road widening. Always measure the clear physical boundaries yourself rather than relying solely on old property flyers.
        </p>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is a Gaj and where is it primarily used?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A Gaj (also spelled Gaz) is a traditional unit of area widely used in real estate and land measurement across North and Central India, including states like Delhi, Haryana, Punjab, Uttar Pradesh, Rajasthan, and Madhya Pradesh. Historically introduced as a measure of linear length, in modern property contexts it denotes one Square Yard.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do you convert 100 Gaj into Square Feet?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Since 1 Gaj is exactly equivalent to 9 Square Feet, you simply multiply the total value in Gaj by 9. For a 100 Gaj plot: 100 × 9 = 900 Square Feet. This is the standard sizing for classic urban housing layouts.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do official bank documents use Square Meters instead of Gaj?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Municipal corporations, development authorities (like DDA, HUDA, or NOIDA), and banking institutions mandate metric international standards (Square Meters) or standard imperial units (Square Feet) to minimize regional ambiguities. Local brokers use Gaj for everyday deals, but legal registrations require standard systemic units.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How can I calculate the Gaj of an irregularly shaped land parcel?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For irregular plots, divide the land space into simple triangles or rectangles. Compute the individual square footage area for each section using geometric formulas, sum them up to find the total square feet, and then divide the final cumulative value by 9 to get the total area in Gaj.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the exact mathematical relation between a Square Meter and a Gaj?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              One Square Meter is equal to approximately 1.196 Gaj (Square Yards). Conversely, 1 Gaj is equal to 0.8361 Square Meters. To convert Square Meters directly to Gaj, multiply the metric value by 1.196.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore Additional Integrated Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your material estimates, structural volumes, and project budgets with our complete suite of professional engineering tools:
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