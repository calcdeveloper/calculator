import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Cent, Guntha & Bigha Land Converter | Indian Area Calculator
  2. META DESCRIPTION: Convert regional Indian land metrics like Cent, Guntha, and Bigha to standard Square Feet, Square Meters, Acres, and Hectares. Free and accurate land calculator.
  3. URL SLUG: /calculator/construction/regional-land
  4. H1 TITLE: Cent, Guntha & Bigha Land Converter
  
  11. SEO KEYWORDS:
      - Primary Keyword: cent guntha bigha land converter
      - Secondary Keywords: cent to sq ft, guntha to square meter, bigha to acre calculator, 1 cent in square feet, guntha to sq ft conversion, bigha size in up, indian land measurement units, convert cent to acre, guntha to hectare, regional land calculator india.
      - Long-Tail Keywords: how many square feet are in one cent of land, how to convert guntha to square meters, difference between pucca bigha and bengal bigha, standard land measurements in maharashtra guntha, calculating agricultural land area in india.
  =========================================================================
*/

export default function RegionalLandContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const landFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many Square Feet are in 1 Cent of land?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One Cent of land is exactly equal to 435.6 Square Feet. It is equivalent to 1/100th of an Acre. This unit is predominantly used in South Indian states like Kerala and Tamil Nadu."
        }
      },
      {
        "@type": "Question",
        "name": "How many Gunthas make up 1 Acre?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are exactly 40 Gunthas in 1 Acre. Since 1 Acre is 43,560 Square Feet, a single Guntha equates to 1,089 Square Feet. This measurement is widely used in Maharashtra, Gujarat, and parts of Karnataka."
        }
      },
      {
        "@type": "Question",
        "name": "Is Bigha a standard measurement across all of India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, Bigha is not standard. Its size varies significantly from state to state. For example, a standard 'Pucca Bigha' in Uttar Pradesh is 27,225 Sq.ft, while a 'Bengal Bigha' in West Bengal is 14,400 Sq.ft, and a 'Gujarat Bigha' is 17,424 Sq.ft."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert Guntha to Square Meters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert Guntha to Square Meters, you first note that 1 Guntha equals 1,089 Square Feet. By dividing 1,089 by 10.7639 (the number of square feet in a square meter), you get approximately 101.17 Square Meters per Guntha."
        }
      },
      {
        "@type": "Question",
        "name": "Why do Indian property documents still use Cent, Guntha, and Bigha?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These are traditional ancestral metrics deeply rooted in local agricultural and revenue systems. While modern commercial real estate uses Square Feet and Square Meters, rural and semi-urban land records (like 7/12 extracts or Patwari records) continue to maintain these historical regional measurements."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(landFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Cent, Guntha & Bigha Land Converter
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Navigating land transactions in India can be incredibly confusing due to the diverse range of regional measurement units. While modern apartment documents and international standards use Square Feet, Square Meters, and Acres, agricultural land, ancestral properties, and semi-urban plots are still widely transacted using traditional units like the Cent, Guntha, and Bigha.
        </p>
        <p className="mb-4">
          Understanding how to accurately convert these regional units is essential for homebuyers, real estate investors, NRIs, and property developers. Miscalculating a "Bigha" or a "Guntha" can lead to severe financial discrepancies. 
        </p>
        <p>
          Our <strong>Cent, Guntha & Bigha Land Converter</strong> is a free, simple-to-use tool designed to bridge the gap between traditional Indian land metrics and modern standard units. Whether you are buying a farm in Maharashtra or evaluating inherited land in Kerala, this calculator instantly translates regional areas into universally understood figures like Square Feet, Square Meters, Acres, and Hectares.
        </p>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Land Converter</h2>
        <p className="mb-4 text-sm text-gray-700">
          Converting complex regional measurements takes just a few seconds with our tool. Follow these simple steps:
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Select Conversion Type:</strong> Use the dropdown menu to select the specific regional unit you are starting with. Options include <em>Cent to Standard</em>, <em>Guntha to Standard</em>, or specific regional Bighas (e.g., <em>UP Pucca Bigha to Standard</em>).
          </li>
          <li>
            <strong>Enter Value:</strong> Input the numeric value of your land in the chosen regional unit (for example, type "5" if you have 5 Cents of land).
          </li>
          <li>
            <strong>View Standardized Outputs:</strong> The calculator will instantly process the conversion and provide you with four standard metric outputs simultaneously:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Square Feet (Sq.ft):</strong> The standard unit for residential plots and architecture.</li>
              <li><strong>Square Meters (Sq.m):</strong> The standard metric unit often required for official government registration.</li>
              <li><strong>Acres:</strong> The standard unit for large-scale agricultural land.</li>
              <li><strong>Hectares:</strong> The international metric unit for large land tracts (1 Hectare = 2.47 Acres).</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* --- UNDERSTANDING THE REGIONAL UNITS & FORMULAS --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Regional Land Formulas Explained</h2>
        <p className="mb-4">
          To truly understand your land value, it is helpful to know the basic math behind these regional units. At the core of all these conversions is the <strong>Acre</strong>. One standard Acre is universally equal to <strong>43,560 Square Feet</strong>. Traditional units are usually fractions or multiples of this baseline.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">1. The "Cent" (South India)</h3>
        <p className="mb-2 text-sm text-gray-700">
          Primarily used in Kerala, Tamil Nadu, and parts of Karnataka and Andhra Pradesh, the Cent is a precise fraction of an Acre.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          1 Cent = 1/100th of an Acre<br />
          1 Cent = 435.6 Square Feet<br />
          1 Cent ≈ 40.47 Square Meters
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">2. The "Guntha" (West India)</h3>
        <p className="mb-2 text-sm text-gray-700">
          The Guntha (often spelled Gunta) is the standard regional unit in Maharashtra, Gujarat, and parts of North Karnataka. It is larger than a Cent.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          1 Guntha = 1/40th of an Acre<br />
          1 Guntha = 1,089 Square Feet<br />
          1 Guntha ≈ 101.17 Square Meters
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">3. The "Bigha" (North & East India)</h3>
        <p className="mb-2 text-sm text-gray-700">
          The Bigha is highly prevalent in North and East India. However, unlike the Cent or Guntha, the Bigha <strong>does not have one uniform national value</strong>. Its size changes based on the state, and sometimes even the district! Below are the most common official formulas:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md space-y-2">
          <strong>Pucca Bigha (UP, Rajasthan, Bihar, Punjab):</strong><br />
          1 Pucca Bigha = 27,225 Square Feet = 0.625 Acres<br /><br />
          
          <strong>Gujarat Bigha:</strong><br />
          1 Gujarat Bigha = 17,424 Square Feet = 0.40 Acres<br /><br />

          <strong>Bengal Bigha (West Bengal, Assam):</strong><br />
          1 Bengal Bigha = 14,400 Square Feet ≈ 0.33 Acres
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-Life Calculation Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Buying a Plot in Kerala (Cents)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are looking to purchase a residential plot in Kochi, Kerala. The broker says the land is exactly <strong>5.5 Cents</strong>. You want to know the area in Square Feet to see if your house floor plan will fit.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            Formula: Total Cents × 435.6 = Square Feet<br /><br />
            Calculation: 5.5 × 435.6 = <strong>2,395.8 Sq.ft.</strong><br /><br />
            <em>Result: Your plot is 2,395.8 Square Feet.</em>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Selling Agricultural Land in Maharashtra (Gunthas)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are selling an ancestral farm near Pune. The 7/12 property extract lists the land area as <strong>15 Gunthas</strong>. The buyer wants the measurement in standard Acres.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            Method 1 (Direct): 1 Acre = 40 Gunthas. Therefore, 15 ÷ 40 = <strong>0.375 Acres</strong>.<br /><br />
            Method 2 (Via Sq.ft): 15 Gunthas × 1,089 = 16,335 Sq.ft.<br />
            16,335 Sq.ft ÷ 43,560 (Sq.ft in an Acre) = <strong>0.375 Acres</strong>.
          </div>
        </div>

        {/* Example 3 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-amber-900">Example 3: Verifying Bigha in Uttar Pradesh</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are evaluating <strong>3 Pucca Bighas</strong> of land in Uttar Pradesh. You need to register the property, and the registration office requires the measurement in Square Meters.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            Step 1: Convert to Sq.ft.<br />
            3 Pucca Bighas × 27,225 = 81,675 Sq.ft.<br /><br />
            Step 2: Convert Sq.ft to Square Meters (Divide by 10.7639).<br />
            81,675 ÷ 10.7639 = <strong>7,587.9 Square Meters</strong>.
          </div>
        </div>
      </section>

      {/* --- IMPORTANT DISCLAIMER --- */}
      <section className="bg-red-50 p-6 rounded-xl border border-red-200 mt-8">
        <h3 className="font-bold text-red-900 mb-2">Important Legal Disclaimer</h3>
        <p className="text-sm text-red-800">
          While this calculator uses standard standardized regional conversions, local "Kachha" (informal) measurements can sometimes vary slightly from village to village. Always verify the exact local measurement equivalents with a certified Patwari (village accountant), land surveyor, or by checking the official Tehsil property records (Jamabandi/Khatauni) before executing legally binding financial agreements.
        </p>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many Square Feet are in 1 Cent of land?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              One Cent of land is exactly equal to 435.6 Square Feet. It is equivalent to 1/100th of an Acre. This unit is predominantly used in South Indian states like Kerala and Tamil Nadu.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many Gunthas make up 1 Acre?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              There are exactly 40 Gunthas in 1 Acre. Since 1 Acre is 43,560 Square Feet, a single Guntha equates to 1,089 Square Feet. This measurement is widely used in Maharashtra, Gujarat, and parts of Karnataka.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Is Bigha a standard measurement across all of India?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              No, Bigha is not standard. Its size varies significantly from state to state. For example, a standard 'Pucca Bigha' in Uttar Pradesh is 27,225 Sq.ft, while a 'Bengal Bigha' in West Bengal is 14,400 Sq.ft, and a 'Gujarat Bigha' is 17,424 Sq.ft. You must know your region to calculate Bigha accurately.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I convert Guntha to Square Meters?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              To convert Guntha to Square Meters, you first note that 1 Guntha equals 1,089 Square Feet. By dividing 1,089 by 10.7639 (the number of square feet in a square meter), you get approximately 101.17 Square Meters per Guntha.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do Indian property documents still use Cent, Guntha, and Bigha?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              These are traditional ancestral metrics deeply rooted in local agricultural and revenue systems. While modern commercial real estate uses Square Feet and Square Meters, rural and semi-urban land records (like 7/12 extracts or Patwari records) continue to maintain these historical regional measurements to ensure continuity with older land deeds.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction & Land Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Whether you are evaluating a plot size, estimating building materials, or calculating construction costs, check out our comprehensive suite of free tools:
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