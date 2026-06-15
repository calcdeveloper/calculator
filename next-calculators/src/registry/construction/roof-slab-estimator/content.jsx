import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Roof Slab Concrete & Steel Estimator | RCC Calculator
  2. META DESCRIPTION: Calculate precise concrete volume (m³ and CFT) and steel weight (kg) for your RCC roof slab. Free estimator with standard thumb rules for construction.
  3. URL SLUG: /calculator/construction/roof-slab-estimator
  4. H1 TITLE: Roof Slab Concrete & Steel Estimator
  
  11. SEO KEYWORDS:
      - Primary Keyword: roof slab concrete and steel estimator
      - Secondary Keywords: rcc slab calculator, roof slab steel calculation, concrete volume for slab, slab concrete calculator, steel requirement for roof slab, ready mix concrete calculator, slab reinforcement calculator, lanter material calculation, concrete cft calculator, steel weight for rcc slab.
      - Long-Tail Keywords: how to calculate concrete for roof slab, steel calculation thumb rule for roof slab, how much steel required for 1000 sq ft house slab, how many bags of cement for roof slab, concrete volume calculator for rcc slab in cubic feet.
  =========================================================================
*/

export default function RoofSlabContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const slabFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much steel is required for a 1000 sq ft roof slab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard 5-inch thick 1000 sq ft roof slab, the concrete volume is roughly 11.8 cubic meters. Using the standard thumb rule of 80 kg of steel per cubic meter, you will need approximately 944 kg (almost 1 metric ton) of steel reinforcement."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard thickness for a residential roof slab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The standard thickness for a standard residential RCC roof slab is generally 5 inches to 6 inches (125 mm to 150 mm). Heavy-load commercial slabs or parking decks may require 8 inches or more."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need to calculate concrete volume in CFT and m³?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In countries like India, Ready-Mix Concrete (RMC) trucks typically sell concrete by the cubic meter (m³). However, local contractors and masons often calculate material mixing on-site using Cubic Feet (CFT). Knowing both measurements helps you communicate effectively with suppliers and workers."
        }
      },
      {
        "@type": "Question",
        "name": "What is the thumb rule for steel calculation in RCC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The general thumb rule for a standard residential roof slab without heavy hidden beams is that steel reinforcement makes up about 1% of the total concrete volume. Since steel weighs 7,850 kg/m³, this equates to approximately 78.5 kg to 80 kg of steel per cubic meter of concrete."
        }
      },
      {
        "@type": "Question",
        "name": "Should I add wastage when ordering concrete?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, always add a 5% wastage margin when ordering Ready-Mix Concrete or raw materials. Shuttering is rarely perfectly level, and concrete often bulges slightly or spills during the pouring process, leading to a higher volume consumption than theoretically calculated."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(slabFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Roof Slab Concrete & Steel Estimator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Casting a roof slab (commonly known as the <em>lanter</em> in India or simply the ceiling slab) is one of the most critical and expensive milestones in building a home. It requires precision, continuous work, and an uninterrupted supply of building materials. 
        </p>
        <p className="mb-4">
          Whether you are ordering a Ready-Mix Concrete (RMC) transit mixer or manually mixing cement, sand, and aggregate on-site, using an accurate <strong>roof slab concrete and steel estimator</strong> is vital. Running out of concrete halfway through a pour creates "cold joints" which severely weaken the roof structure. Conversely, over-ordering results in massive material waste and financial loss.
        </p>
        <p>
          Our calculator is designed for homeowners, DIY builders, and civil contractors in the USA, India, and globally. It bridges the gap between architectural drawings and practical purchasing by converting simple room dimensions into precise volumetric measurements for concrete (Cubic Meters and Cubic Feet) and weight measurements for TMT steel bars (Kilograms and Metric Tons).
        </p>
      </section>

      {/* --- WHAT IS RCC? --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What is an RCC Roof Slab?</h2>
        <p className="mb-4">
          <strong>RCC</strong> stands for <strong>Reinforced Cement Concrete</strong>. To understand why we calculate both concrete and steel together, you need to understand how they work as a team.
        </p>
        <p className="mb-4">
          Concrete by itself has incredible compressive strength—meaning it can support massive amounts of heavy weight pushing down on it. However, it has very poor tensile strength, meaning it cracks easily when stretched or bent. A roof slab suspended in the air naturally wants to sag in the middle under its own weight, creating pulling (tensile) forces at the bottom.
        </p>
        <p>
          To solve this, we embed high-strength TMT (Thermo Mechanically Treated) steel rebars into the lower section of the slab before the concrete dries. The steel handles the pulling and bending, while the concrete handles the crushing forces. Together, they create a permanent, weather-proof structural barrier.
        </p>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Roof Slab Estimator</h2>
        <p className="mb-4 text-sm text-gray-700">
          Getting an accurate estimate of your materials takes just a few clicks. Follow this step-by-step guide using the fields provided in the calculator tool above:
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Select Your Unit System:</strong> Choose whether you want to input your dimensions in standard Imperial units (Feet and Inches) or Metric units (Meters).
          </li>
          <li>
            <strong>Enter Length and Width:</strong> Input the total span of the slab. Remember to include any overhanging portions (like balconies, chajjas, or sunshades) beyond the main walls.
          </li>
          <li>
            <strong>Set Slab Thickness:</strong> Enter the depth of the slab. Standard residential slabs are typically 5 inches or 6 inches thick (0.125m to 0.150m).
          </li>
          <li>
            <strong>Review the Outputs:</strong> The calculator instantly generates:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Total Concrete Volume:</strong> Displayed in both Cubic Meters (m³) for ordering RMC, and Cubic Feet (CFT) for local hand-mixing.</li>
              <li><strong>Total Steel Required:</strong> Displayed in Kilograms (kg) and Metric Tons (MT) so you know exactly how much Sariya (rebar) to purchase.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* --- THE FORMULAS EXPLAINED --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Formulas Behind the Calculation</h2>
        <p className="mb-4">
          To build trust with your suppliers and contractors, it helps to know the math running behind the scenes. The calculations are based on fundamental geometry and industry-standard thumb rules.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">1. Concrete Volume Calculation</h3>
        <p className="mb-2 text-sm text-gray-700">
          Concrete is ordered by volume. The formula is a standard rectangular prism volume calculation:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Volume = Length × Width × Thickness
        </div>
        <p className="mb-4 text-sm text-gray-700">
          <em>Important:</em> All measurements must be in the same unit before multiplying. For example, if length and width are in feet, but thickness is in inches, you must divide the inches by 12 to convert them to feet before multiplying.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">2. The Roof Slab Steel Thumb Rule</h3>
        <p className="mb-2 text-sm text-gray-700">
          Before structural drawings are perfectly finalized, civil engineers use a thumb rule to estimate the budget for steel. In India, the reinforcement for a typical flat residential slab is usually calculated at <strong>1% of the total concrete volume</strong>.
        </p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-2">
          <li>The standard density of structural steel is <strong>7,850 kg / m³</strong>.</li>
          <li>1% of 7,850 kg = <strong>78.5 kg per m³</strong>.</li>
          <li>Contractors round this up for safety, assuming <strong>80 kg of steel for every 1 Cubic Meter (m³) of concrete</strong>.</li>
        </ul>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">3. Converting Units</h3>
        <p className="mb-2 text-sm text-gray-700">
          If you have your volume in Cubic Meters (m³) but your mason asks for Cubic Feet (CFT), simply multiply your cubic meter value by <strong>35.3147</strong>.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Step-by-Step Worked Examples</h2>
        <p className="text-gray-600 mb-4">
          Let’s look at real-world scenarios to see how these formulas perform in practice.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Standard Residential Slab (Imperial Units)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are casting the roof for a medium-sized home. The roof footprint is <strong>40 feet long</strong> and <strong>25 feet wide</strong>. The required slab thickness is <strong>5 inches</strong>.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            <strong>Step 1: Unify Units (Convert to Meters for standard math)</strong><br />
            Length: 40 ft × 0.3048 = 12.19 meters<br />
            Width: 25 ft × 0.3048 = 7.62 meters<br />
            Thickness: 5 inches ÷ 12 = 0.416 ft. Then 0.416 × 0.3048 = 0.127 meters<br /><br />
            
            <strong>Step 2: Calculate Concrete Volume</strong><br />
            Volume = 12.19 × 7.62 × 0.127 = <strong>11.79 m³</strong><br />
            Convert to CFT: 11.79 × 35.31 = <strong>416 CFT</strong><br /><br />

            <strong>Step 3: Calculate Steel Needed (Thumb Rule)</strong><br />
            Steel = 11.79 m³ × 80 kg/m³ = <strong>943.2 kg</strong> (0.94 Metric Tons).
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Small Garage Extension with Wastage</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are adding a roof over a parking garage that measures <strong>6 meters long</strong> by <strong>4 meters wide</strong>, with a thickness of <strong>0.15 meters</strong> (approx. 6 inches). You want to add a <strong>5% wastage</strong> margin.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            <strong>Step 1: Calculate Base Concrete Volume</strong><br />
            Volume = 6m × 4m × 0.15m = <strong>3.6 m³</strong><br /><br />
            
            <strong>Step 2: Add 5% Wastage</strong><br />
            3.6 m³ × 1.05 = <strong>3.78 m³</strong> (Total concrete to order)<br /><br />

            <strong>Step 3: Calculate Steel</strong><br />
            Steel = 3.6 m³ (use base volume for steel) × 80 kg/m³ = <strong>288 kg of steel</strong>.
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES FOR A FLAWLESS ROOF SLAB --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Crucial Factors Influencing Material Requirements</h2>
        <p className="mb-4">
          While the calculator gives you a highly accurate mathematical baseline, site conditions can heavily influence actual material consumption. Keep these factors in mind:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Concealed Beams (Hidden Beams):</strong> If your architectural plan includes heavy concealed beams embedded within the slab to support larger spans without dropping down into the room, your steel consumption will jump from 80 kg/m³ to closer to 90–100 kg/m³.
          </li>
          <li>
            <strong>Formwork (Shuttering) Irregularities:</strong> If wooden planks are used instead of proper steel plates for shuttering, the surface may sag slightly under the weight of wet concrete. A sag of just half an inch across a large room can consume an entire extra cubic meter of concrete!
          </li>
          <li>
            <strong>Crank Bars and Overlaps:</strong> The steel estimate includes standard overlaps (lap length) and crank bars near the supports. However, improper cutting of rebar by unskilled labor can drastically increase steel wastage.
          </li>
          <li>
            <strong>Cover Blocks:</strong> Always ensure 20mm to 25mm concrete cover blocks are placed under the steel mesh. If the steel touches the wooden formwork, it will be exposed to air from the ceiling below, leading to rust and eventual structural failure.
          </li>
        </ul>
      </section>

      {/* --- IMPORTANT DISCLAIMER --- */}
      <section className="bg-red-50 p-6 rounded-xl border border-red-200 mt-8">
        <h3 className="font-bold text-red-900 mb-2">Important Structural Disclaimer</h3>
        <p className="text-sm text-red-800">
          This calculator uses industry-standard estimating thumb rules perfect for budgeting and material planning. However, it is not a substitute for formal structural engineering drawings. The exact diameter of steel rebars (8mm, 10mm, 12mm), the spacing of the mesh, and the concrete grade (e.g., M20, M25) must be determined by a qualified structural engineer based on the specific load-bearing requirements and seismic zone of your building.
        </p>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much steel is required for a 1000 sq ft roof slab?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a standard 5-inch thick 1000 sq ft roof slab, the concrete volume is roughly 11.8 cubic meters. Using the standard thumb rule of 80 kg of steel per cubic meter, you will need approximately 944 kg (almost 1 metric ton) of steel reinforcement.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard thickness for a residential roof slab?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The standard thickness for a normal residential RCC roof slab is generally 5 inches to 6 inches (125 mm to 150 mm). Heavy-load commercial slabs, terraces holding massive water tanks, or parking decks may require 8 inches or more.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do I need to calculate concrete volume in CFT and m³?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In countries like India, Ready-Mix Concrete (RMC) trucks typically sell and deliver concrete by the cubic meter (m³). However, local contractors and masons often calculate material mixing on-site using Cubic Feet (CFT). Knowing both measurements helps you communicate effectively with suppliers and workers.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the thumb rule for steel calculation in RCC?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The general thumb rule for a standard residential roof slab without heavy hidden beams is that steel reinforcement makes up about 1% of the total concrete volume. Since steel weighs 7,850 kg/m³, this equates to approximately 78.5 kg to 80 kg of steel per cubic meter of concrete.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Should I add wastage when ordering concrete?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, always add a 5% wastage margin when ordering Ready-Mix Concrete or raw materials. Shuttering is rarely perfectly level, and concrete often bulges slightly or spills during the pouring process, leading to a higher volume consumption than theoretically calculated. If you fall short, ordering a 1 m³ top-up mixer is very expensive.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Planning a complete build? Ensure your material budgets are highly accurate across all stages of construction by using our complete suite of free estimating tools:
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
          <a href="/calculator/construction/staircase-step" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Staircase Step</a>
          <a href="/calculator/construction/tile" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Tile Calculator</a>
          <a href="/calculator/construction/tmt-steel-weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">TMT Steel Weight</a>
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}