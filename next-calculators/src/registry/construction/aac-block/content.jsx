import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: AAC Block Calculator | Estimate Siporex Blocks & Adhesive
  2. META DESCRIPTION: Free online AAC block calculator. Accurately estimate the number of Siporex blocks and chemical adhesive bags needed for your construction project in India & USA.
  3. URL SLUG: /aac-block-adhesive-calculator
  4. H1 TITLE: Free Online AAC Block & Adhesive Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: AAC block calculator
      - Secondary keywords: siporex block calculator, aac block adhesive calculator, calculate aac blocks for wall, how many aac blocks per square meter, aac block volume calculator, chemical adhesive for aac block, siporex calculation formula, lightweight block calculator, construction block estimator, aac block thickness sizes.
      - Long-tail keywords: how to calculate adhesive for aac blocks, aac blocks per square feet calculator, number of 200mm aac blocks in 1 cubic meter, difference between aac block and red brick calculation, siporex block joint chemical calculation.
  =========================================
*/

export default function AACCalculatorContent() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard size of an AAC block?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The universally accepted standard face size of an AAC (Autoclaved Aerated Concrete) block is 600 mm in length and 200 mm in height. The thickness varies based on structural requirements, typically coming in 100 mm (4 inches), 150 mm (6 inches), 200 mm (8 inches), and 230 mm (9 inches)."
        }
      },
      {
        "@type": "Question",
        "name": "How many AAC blocks are required for 1 square meter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Without accounting for the adhesive joint, exactly 8.33 blocks are required for 1 square meter (1 sqm / 0.12 sqm per block face). When you factor in a standard 2mm to 3mm chemical adhesive joint, the requirement slightly reduces to approximately 8.22 blocks per square meter."
        }
      },
      {
        "@type": "Question",
        "name": "Why use chemical adhesive instead of cement mortar for AAC blocks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AAC blocks are highly precise and porous. Traditional cement-sand mortar requires a thick 10mm to 12mm joint and its moisture is rapidly absorbed by the AAC block, leading to shrinkage and cracking. Thin-bed chemical polymer adhesive only requires a 2mm to 3mm joint, provides superior bonding strength, cures faster, and prevents water seepage."
        }
      },
      {
        "@type": "Question",
        "name": "How much adhesive is required for AAC blocks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As a standard industry thumb rule, one 40 kg bag of specialized AAC block jointing adhesive is sufficient to construct approximately 1.2 cubic meters (m³) of AAC masonry, assuming a 2mm to 3mm application thickness."
        }
      },
      {
        "@type": "Question",
        "name": "Should I soak AAC blocks in water before laying?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, unlike traditional red clay bricks, AAC blocks should never be soaked in water before masonry work. You should only slightly moisten the surface of the block using a wet brush or a light spray to remove dust before applying the chemical adhesive."
        }
      },
      {
        "@type": "Question",
        "name": "What is the wastage percentage to consider when ordering AAC blocks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For accurate site procurement, it is highly recommended to add a 3% to 5% wastage margin to your final calculation. This accounts for breakages during transport, offloading, and on-site cutting for corners, doors, and windows."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online AAC Block & Adhesive Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Autoclaved Aerated Concrete (AAC) blocks—popularly known in many regions by the brand name <strong>Siporex</strong>—have rapidly become the default masonry choice for modern construction projects across India, the USA, and globally. Up to three times lighter than traditional red clay bricks, AAC blocks drastically reduce the structural dead load on building foundations, offer superior thermal and acoustic insulation, and significantly accelerate construction speed.
        </p>
        <p className="mb-4">
          However, because these blocks feature entirely different dimensions and material properties compared to conventional bricks, standard brick calculators are practically useless. Furthermore, AAC blocks utilize specialized thin-bed polymer adhesive rather than thick cement-sand mortar, completely changing the material procurement math for builders, contractors, and civil engineers.
        </p>
        <p className="mb-4">
          Our free, professional-grade <strong>AAC Block & Adhesive Calculator</strong> is designed to completely eliminate guesswork from your project planning. Whether you are building a small partition wall or estimating materials for a multi-story commercial high-rise, this tool will instantly provide you with the exact number of blocks required and the precise number of 40 kg chemical adhesive bags needed to complete the job.
        </p>
      </section>

      {/* --- UNDERSTANDING THE MATERIALS --- */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding AAC Block Dimensions</h2>
        <p className="mb-4">
          Unlike traditional red clay bricks, which can vary wildly in size depending on the local kiln, AAC blocks are manufactured in highly controlled, automated factories. This ensures perfect geometric precision, which is why they require so little adhesive to bond.
        </p>
        <p className="mb-4">
          The universally standard face size of an AAC block is <strong>600 mm in Length and 200 mm in Height</strong>. The only dimension that changes based on your structural requirement is the <strong>Thickness</strong> (the width of the wall).
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-800">
          <li><strong>100 mm (approx. 4 inches):</strong> Used primarily for internal partition walls, bathroom walls, and non-load-bearing divisions.</li>
          <li><strong>150 mm (approx. 6 inches):</strong> A versatile size used for both internal divisions and some external walls in framed structures.</li>
          <li><strong>200 mm (approx. 8 inches):</strong> The standard thickness used for external perimeter walls, offering excellent weather resistance and thermal insulation.</li>
          <li><strong>230 mm (approx. 9 inches):</strong> Used for heavy-duty exterior walls designed to completely match the width of standard RCC columns.</li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the AAC Block Calculator</h2>
        <p className="mb-4">To get an incredibly accurate material estimate for your construction site, follow these simple step-by-step instructions utilizing the calculator's dropdown menus and input fields:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Select Your Unit of Measurement</h3>
        <p className="mb-2 text-sm text-gray-600">Choose the unit you used to measure your site.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Use the dropdown menu to select either <strong>Feet</strong>, <strong>Meters</strong>, or <strong>Inches</strong>. The calculator will automatically handle all complex metric and imperial conversions in the background.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Enter Wall Length and Height</h3>
        <p className="mb-2 text-sm text-gray-600">Provide the total physical dimensions of the wall you intend to build.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li><strong>Wall Length:</strong> Input the total horizontal span of the wall.</li>
          <li><strong>Wall Height:</strong> Input the vertical span from the floor level to the beam/ceiling bottom.</li>
          <li><em>Pro Tip:</em> If your wall has large doors or windows, you should subtract their square area from your final block count manually, or calculate the solid wall portions separately.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Select the Block Thickness</h3>
        <p className="mb-2 text-sm text-gray-600">Choose the depth of the block you are purchasing.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Open the dropdown menu and select the required thickness (e.g., <strong>100mm, 150mm, 200mm, or 230mm</strong>). This input is critical because it dictates the total <em>volume</em> of your wall, which is required to calculate the chemical adhesive bags.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Interpreting Your Results</h3>
        <p className="mb-2 text-sm text-gray-600">Once you input the data, the tool generates three crucial metrics:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li><strong>Total Blocks Required:</strong> The exact number of blocks needed to cover the wall area. We strongly advise adding a 3% to 5% wastage margin to this number when placing your purchase order to account for site breakages.</li>
          <li><strong>Total Wall Area/Volume:</strong> Displayed in Square Meters and Cubic Meters, useful for cross-verifying with your architectural drawings.</li>
          <li><strong>Adhesive Bags (40kg):</strong> The precise number of pre-mixed block jointing chemical bags you need to buy to bond the blocks together.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematics Behind AAC Calculations</h2>
        <p className="mb-6">
          Our calculator automates complex civil engineering calculations. Here is a clear breakdown of the engineering rules utilized to map your materials:
        </p>
        
        <div className="space-y-6">
          {/* Blocks Formula */}
          <div className="bg-amber-50/40 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. The "Blocks Per Square Meter" Rule</h3>
            <p className="text-sm mb-3 text-gray-700">
              Because the face of a standard AAC block is always exactly identical, calculating the raw block count depends strictly on the 2D surface area of your wall layout.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-600 mt-3 mb-4">
              <li><strong>Length of Block:</strong> 600 mm (0.6 meters)</li>
              <li><strong>Height of Block:</strong> 200 mm (0.2 meters)</li>
              <li><strong>Face Area of 1 Block:</strong> 0.6m &times; 0.2m = <strong>0.12 Square Meters (sqm)</strong></li>
            </ul>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-amber-900 font-bold text-center tracking-wide shadow-sm overflow-x-auto mb-4">
              Blocks per Sqm = 1 sqm &divide; 0.12 sqm = 8.33 Blocks
            </div>
            <p className="text-sm text-gray-700">
              When accounting for a standard 3mm continuous chemical adhesive layer joint bounded between adjacent blocks, the structural grid spacing stretches slightly, making the real-world operational estimate roughly <strong>8.22 blocks per square meter</strong>.
            </p>
          </div>

          {/* Adhesive Formula */}
          <div className="bg-teal-50/40 p-6 rounded-2xl border border-teal-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. The Chemical Adhesive Volume Formula</h3>
            <p className="text-sm mb-3 text-gray-700">
              Adhesive consumption is dependent directly on the total 3D cubic <em>volume</em> of the wall framework, since wider blocks inherently require broader thin-bed spreads.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-teal-900 font-bold text-center shadow-sm overflow-x-auto mb-4">
              Wall Volume (m³) = Wall Length (m) &times; Wall Height (m) &times; Block Thickness (m)
            </div>
            <p className="text-sm text-gray-700 mb-3">
              According to structural benchmarks across Indian masonry setups, one standard 40 kg bag of specialized thin-bed mortar manages to bind <strong>1.2 Cubic Meters (m³)</strong> of concrete blockwork.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-teal-900 font-bold text-center shadow-sm overflow-x-auto">
              Total 40kg Bags = Total Wall Volume (m³) &divide; 1.2
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Estimation Examples</h2>
        <p className="mb-6">Let us look at two practical on-site scenarios to demonstrate how these formulas are applied in real-world construction environments.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario A: External Perimeter Wall (Measured in Feet)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              A contractor is building an external boundary wall. The wall measures <strong>10 feet in length</strong> and <strong>10 feet in height</strong>. For weatherproofing and security, they are using thick <strong>200mm (8-inch)</strong> AAC blocks.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Step 1 (Convert to Meters):</strong> 10 feet = 3.048 meters.</li>
              <li><strong>Step 2 (Wall Area):</strong> 3.048m &times; 3.048m = <strong>9.29 sqm</strong>.</li>
              <li><strong>Step 3 (Calculate Blocks):</strong> 9.29 sqm &times; 8.22 blocks/sqm = 76.36 blocks. With 3% wastage, the requirement is <strong>79 Blocks</strong>.</li>
              <li><strong>Step 4 (Wall Volume):</strong> 9.29 sqm (Area) &times; 0.2m (Thickness) = <strong>1.858 Cubic Meters (m³)</strong>.</li>
              <li><strong>Step 5 (Calculate Adhesive):</strong> 1.858 m³ &divide; 1.2 = 1.54 bags.</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-indigo-800">Final Order: 79 AAC Blocks (200mm) and 2 Bags of Chemical Adhesive.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario B: Interior Bathroom Partition (Measured in Meters)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              An interior designer is raising a bathroom partition wall measuring <strong>4 meters in length</strong> and <strong>3 meters in height</strong>. Because it is a non-load-bearing interior wall, they are using thinner <strong>100mm (4-inch)</strong> AAC blocks to save floor space.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Step 1 (Wall Area):</strong> 4m &times; 3m = <strong>12 sqm</strong>.</li>
              <li><strong>Step 2 (Calculate Blocks):</strong> 12 sqm &times; 8.22 blocks/sqm = 98.64 blocks. With 3% wastage, the requirement is roughly <strong>102 Blocks</strong>.</li>
              <li><strong>Step 3 (Wall Volume):</strong> 12 sqm (Area) &times; 0.1m (Thickness) = <strong>1.2 Cubic Meters (m³)</strong>.</li>
              <li><strong>Step 4 (Calculate Adhesive):</strong> 1.2 m³ &divide; 1.2 = Exactly 1 bag.</li>
            </ul>
            <p className="mt-3 text-sm font-bold text-emerald-800">Final Order: 102 AAC Blocks (100mm) and 1 Bag of Chemical Adhesive.</p>
          </div>
        </div>
      </section>

      {/* --- WHY ADHESIVE OVER MORTAR --- */}
      <section className="bg-gradient-to-r from-stone-50 to-gray-100 p-8 rounded-2xl border border-gray-200 mt-8 shadow-sm">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Crucial Technical Note: Adhesive vs. Cement Mortar</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Many traditional masons attempt to construct AAC walls using standard sand and cement mortar (in a 1:4 or 1:6 ratio) simply out of habit. <strong>This is a massive structural mistake.</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          Because AAC blocks are highly porous, they act like sponges. If you apply wet cement mortar to them, the blocks immediately suck the water out of the mortar mixture. This prevents the cement from curing properly, resulting in dry, brittle joints that will inevitably crack. Specialized polymer block adhesive is formulated to retain its moisture, curing perfectly even against porous concrete, requiring only a 3mm application layer instead of the messy 12mm required by cement mortar.
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the standard size of an AAC block?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The universally accepted standard face size of an AAC (Autoclaved Aerated Concrete) block is 600 mm in length and 200 mm in height. The thickness varies based on structural requirements, typically coming in 100 mm (4 inches), 150 mm (6 inches), 200 mm (8 inches), and 230 mm (9 inches).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many AAC blocks are required for 1 square meter?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Without accounting for the adhesive joint, exactly 8.33 blocks are required for 1 square meter (1 sqm / 0.12 sqm per block face). When you factor in a standard 2mm to 3mm chemical adhesive joint, the requirement slightly reduces to approximately 8.22 blocks per square meter.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why use chemical adhesive instead of cement mortar for AAC blocks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              AAC blocks are highly precise and porous. Traditional cement-sand mortar requires a thick 10mm to 12mm joint and its moisture is rapidly absorbed by the AAC block, leading to shrinkage and cracking. Thin-bed chemical polymer adhesive only requires a 2mm to 3mm joint, provides superior bonding strength, cures faster, and prevents water seepage.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How much adhesive is required for AAC blocks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              As a standard industry thumb rule, one 40 kg bag of specialized AAC block jointing adhesive is sufficient to construct approximately 1.2 cubic meters (m³) of AAC masonry, assuming a 2mm to 3mm application thickness.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Should I soak AAC blocks in water before laying?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, unlike traditional red clay bricks, AAC blocks should never be soaked in water before masonry work. You should only slightly moisten the surface of the block using a wet brush or a light spray to remove dust before applying the chemical adhesive.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the wastage percentage to consider when ordering AAC blocks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For accurate site procurement, it is highly recommended to add a 3% to 5% wastage margin to your final calculation. This accounts for breakages during transport, offloading, and on-site cutting for corners, doors, and windows.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Construction & Civil Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Ensure your construction projects are fully calculated and your materials perfectly optimized with our suite of free tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/construction/brass-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Brass Volume Calculator</a>
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