import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Staircase Step & Concrete Calculator | RCC Estimator
  2. META DESCRIPTION: Calculate perfect staircase steps, risers, treads, and total concrete volume (m³ & CFT) for your project. Free, accurate, and easy-to-use staircase calculator.
  3. URL SLUG: /calculator/construction/staircase-step
  4. H1 TITLE: Staircase Step & Concrete Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: staircase step and concrete calculator
      - Secondary Keywords: staircase calculator, riser and tread calculator, stairs concrete volume, rcc staircase calculation, steps calculation formula, dog legged staircase calculator, stair concrete estimator, stair run and rise calculator, staircase design calculator, concrete volume for stairs.
      - Long-Tail Keywords: how to calculate concrete volume for staircase, how many steps for 10 foot ceiling, riser and tread calculation formula in inches, concrete required for waist slab and steps, standard dimensions for residential staircase.
  =========================================================================
*/

export default function StaircaseCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const staircaseFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How many stairs do I need for a 10-foot ceiling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard 10-foot floor-to-floor height (120 inches), using an ideal 6-inch riser, you will need 20 risers (steps). Keep in mind that floor-to-floor height includes the thickness of the upper floor slab."
        }
      },
      {
        "@type": "Question",
        "name": "What is the standard riser and tread size?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In residential construction (especially in India), the standard riser is 6 inches (150mm) and the tread is 10 to 11 inches (250mm to 275mm). In the USA, the '7-11 rule' is common, meaning a maximum 7-inch riser and a minimum 11-inch tread."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I have one less tread than riser?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The final step up (the last riser) connects directly to the landing floor or the upper floor slab. Because the floor itself acts as the final landing space for your foot, a separate tread is not counted for that last step."
        }
      },
      {
        "@type": "Question",
        "name": "How thick should a staircase waist slab be?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard residential RCC (Reinforced Cement Concrete) staircases, the waist slab thickness is usually between 4 inches and 6 inches (100mm to 150mm), depending on the total length of the flight and the structural engineer's design."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate concrete for dog-legged stairs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A dog-legged staircase is simply two straight flights separated by a mid-landing. To calculate the concrete, calculate the volume of each straight flight separately using this calculator, then add the concrete volume of the flat rectangular mid-landing (Length × Width × Thickness)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ideal angle for a staircase?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal pitch or angle for a comfortable residential staircase is between 25 degrees and 35 degrees. Angles steeper than 40 degrees become more like ladders and are dangerous for daily use."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(staircaseFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Staircase Step & Concrete Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          A properly designed staircase is the backbone of multi-story construction. A poorly planned flight of stairs with uneven steps is not only exhausting to climb but represents a severe daily safety hazard for your family.
        </p>
        <p className="mb-4">
          Whether you are an architect designing a new home, a civil contractor ordering Ready-Mix Concrete (RMC), or a homeowner verifying your mason's manual layout, precision is non-negotiable. Building a Reinforced Cement Concrete (RCC) staircase requires permanently casting heavy materials. Fixing a mistake later means breaking solid concrete, which is expensive, noisy, and structurally risky.
        </p>
        <p>
          Our <strong>Staircase Step & Concrete Calculator</strong> is designed to remove the guesswork from your construction project. By inputting your floor height and desired step dimensions, this tool will instantly output the perfect, mathematically balanced number of steps, the horizontal floor space required, and the exact volume of concrete needed to cast both the waist slab and the steps themselves.
        </p>
      </section>

      {/* --- IMPORTANT TERMINOLOGY --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Anatomy of a Staircase: Key Terminology</h2>
        <p className="mb-4">
          Before diving into the calculations, it is essential to understand the structural vocabulary used by architects, engineers, and masons worldwide:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Riser (The Vertical Height):</strong> The vertical part of the step that determines how high you must lift your foot. A lower riser is easier to climb. For Indian and global residential standards, an ideal riser is between 6 to 7 inches (150mm to 175mm).
          </li>
          <li>
            <strong>Tread (The Horizontal Depth):</strong> The flat surface where you place your foot. Deeper treads are safer and prevent slipping. A standard tread length is 10 to 11 inches (250mm to 275mm).
          </li>
          <li>
            <strong>Total Rise (Floor-to-Floor Height):</strong> The absolute vertical distance from the top of the finished lower floor to the top of the finished upper floor. Do not just measure up to the ceiling; you must include the thickness of the upper floor slab!
          </li>
          <li>
            <strong>Total Run:</strong> The total horizontal floor space the staircase will consume from the first step to the last.
          </li>
          <li>
            <strong>Waist Slab:</strong> In RCC construction, this is the thick, inclined concrete slab that acts as the structural spine, supporting the triangular steps from underneath.
          </li>
          <li>
            <strong>Landing:</strong> A flat resting platform used to change the direction of the stairs (like in a U-shaped or dog-legged staircase) or to provide a rest point in very long straight flights.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Staircase Estimator</h2>
        <p className="mb-4 text-sm text-gray-700">
          Getting an accurate blueprint and material estimate takes just a few moments. Follow this step-by-step guide using the inputs provided in the tool above:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Select Unit System:</strong> Toggle between Imperial (Feet and Inches) or Metric (Meters and Millimeters) depending on your local standard.
          </li>
          <li>
            <strong>Input Floor-to-Floor Height:</strong> Enter the total vertical distance. Remember to measure from the finished floor level (FFL) of the ground floor to the FFL of the floor above.
          </li>
          <li>
            <strong>Set Target Riser and Tread:</strong> Enter your desired step height and depth. The calculator uses these as targets. If the math doesn't divide perfectly, it will calculate the exact equal riser height closest to your target to ensure every single step is identical.
          </li>
          <li>
            <strong>Enter Stair Width:</strong> How wide will the staircase be? Standard residential stairs are typically 3 to 4 feet wide (900mm to 1200mm).
          </li>
          <li>
            <strong>Specify Waist Slab Thickness:</strong> Enter the thickness of the supporting slab. Structural engineers typically recommend 5 to 6 inches for standard residential spans.
          </li>
          <li>
            <strong>Analyze the Output:</strong> The calculator instantly generates your blueprint data:
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Step Count:</strong> The exact number of Risers and Treads.</li>
              <li><strong>Balanced Dimensions:</strong> The perfectly equalized riser height to ensure no tripping hazards.</li>
              <li><strong>Total Run Length:</strong> How much horizontal space the flight will take up in your floor plan.</li>
              <li><strong>Concrete Volume:</strong> The precise amount of concrete (in Cubic Meters and Cubic Feet) required to cast the waist slab and the steps, helping you order RMC or raw materials accurately.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* --- THE FORMULAS EXPLAINED --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Engineering Formulas Behind the Calculator</h2>
        <p className="mb-4">
          Understanding the math ensures you can verify your contractor's claims. Staircase math combines basic division for step counts with trigonometry and geometry for material volumes.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">1. Calculating Steps (Risers & Treads)</h3>
        <p className="mb-2 text-sm text-gray-700">
          The golden rule of stair building is that all risers must be identical. A difference of even half an inch between steps throws off human muscle memory and causes trips.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md space-y-2">
          Number of Risers = Total Floor Height ÷ Target Riser Height<br/>
          <em>(Round the result to the nearest whole number to get the total step count)</em><br/>
          <br/>
          Actual Riser Height = Total Floor Height ÷ Number of Risers<br/>
          <br/>
          Number of Treads = Number of Risers - 1
        </div>
        <p className="text-sm text-gray-600 mb-4">
          *We subtract 1 for the treads because the final riser seamlessly meets the upper floor slab, meaning the upper floor acts as the final tread.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">2. Calculating the Total Horizontal Run</h3>
        <p className="mb-2 text-sm text-gray-700">
          To find out how far the staircase will stretch across the room:
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Total Run = Number of Treads × Tread Depth
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">3. Calculating Concrete Volume</h3>
        <p className="mb-2 text-sm text-gray-700">
          The concrete structure is split into two geometric parts: the diagonal <strong>Waist Slab</strong> (a flat rectangle tilted upward) and the <strong>Steps</strong> (a series of right-angled triangles sitting on the slab).
        </p>
        <ul className="list-disc pl-6 mb-4 text-sm text-gray-700 space-y-2">
          <li>
            <strong>Waist Slab Inclined Length:</strong> We use the Pythagorean theorem (A² + B² = C²). <br/>
            <em>Inclined Length = √(Total Run² + Total Rise²)</em>
          </li>
          <li>
            <strong>Waist Slab Volume:</strong> <br/>
            <em>Volume = Inclined Length × Stair Width × Slab Thickness</em>
          </li>
          <li>
            <strong>Volume of One Step (Triangle):</strong> <br/>
            <em>Volume = 0.5 × Riser × Tread × Stair Width</em>
          </li>
          <li>
            <strong>Total Concrete:</strong> <br/>
            <em>Total Volume = Waist Slab Volume + (Volume of One Step × Number of Treads)</em>
          </li>
        </ul>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Worked Examples</h2>
        <p className="text-gray-600 mb-4">
          Let’s look at real-world construction scenarios to see how these principles are applied on-site.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Standard Residential Straight Flight</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are building a home with a <strong>10 ft 6 inch</strong> floor-to-floor height. You want a <strong>6 inch</strong> riser and a <strong>10 inch</strong> tread. The stairs will be <strong>3 feet</strong> wide, with a <strong>5 inch</strong> thick waist slab.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>Step 1: Calculate Steps</strong><br />
            Total Height = 126 inches.<br />
            126 ÷ 6 (Target) = <strong>21 Risers</strong> exactly.<br />
            Treads = 21 - 1 = <strong>20 Treads</strong>.<br /><br />
            
            <strong>Step 2: Calculate Horizontal Space (Run)</strong><br />
            Run = 20 Treads × 10 inches = 200 inches (approx 16.66 feet).<br /><br />

            <strong>Step 3: Calculate Concrete (Convert all to feet first)</strong><br />
            Height = 10.5 ft. Run = 16.66 ft.<br />
            Inclined Length = √(10.5² + 16.66²) = 19.69 ft.<br />
            Slab Volume = 19.69 ft × 3 ft × (5/12 ft) = <strong>24.6 CFT</strong>.<br />
            Step Volume (One Step) = 0.5 × (6/12) × (10/12) × 3 = 0.625 CFT.<br />
            Total Steps Volume = 0.625 × 20 = <strong>12.5 CFT</strong>.<br />
            <strong>Total Concrete = 24.6 + 12.5 = 37.1 CFT</strong> (approx 1.05 m³).
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Fixing an Uneven Decimal Height</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> Your floor height is exactly <strong>11 feet</strong> (132 inches). You want a 7-inch riser. Let's see how the calculator balances it.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200">
            <strong>The Math:</strong><br />
            132 inches ÷ 7 inches = 18.85 risers.<br />
            You cannot build 0.85 of a step!<br />
            We round to the nearest whole number: <strong>19 Risers</strong>.<br />
            New Balanced Riser = 132 inches ÷ 19 = <strong>6.94 inches</strong>.<br />
            The contractor must build exactly 19 steps, each measuring precisely 6.94 inches high, to ensure a flawless and safe staircase.
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES FOR A FLAWLESS ROOF SLAB --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Construction Best Practices & Pro Tips</h2>
        <p className="mb-4">
          A mathematical calculation is only as good as its physical execution. Ensure your masons and shuttering carpenters follow these universal standards:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Add a Wastage Factor:</strong> When ordering Ready-Mix Concrete (RMC), always add a minimum of 5% wastage to your final calculated volume. Shuttering (formwork) is rarely watertight, and concrete spills and bulges during pouring.
          </li>
          <li>
            <strong>Include Flooring Thickness:</strong> When measuring the raw RCC riser height, remember that flooring materials (like marble, granite, or tiles) will add 1 to 2 inches. Ensure the margin is added to the ground floor step and subtracted appropriately from the top step to maintain equality after finishing.
          </li>
          <li>
            <strong>Mid-Landings are Mandatory:</strong> Building codes in most countries dictate that a straight flight of stairs should not exceed 12 to 15 continuous steps without a landing. Landings provide a rest area and reduce the danger of a long fall.
          </li>
          <li>
            <strong>Avoid 'Winders' if Possible:</strong> Winders are triangular steps used to turn a corner without a flat landing. While they save space, they are notoriously dangerous and heavily restricted by building codes like the IBC (International Building Code).
          </li>
          <li>
            <strong>Nosing Overhang:</strong> Adding a 1-inch (25mm) overhang (called a nosing) to the edge of the tread makes the stairs feel deeper and safer without increasing the total horizontal run of the staircase.
          </li>
        </ul>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many stairs do I need for a 10-foot ceiling?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a standard 10-foot floor-to-floor height (120 inches), using an ideal 6-inch riser, you will need 20 risers (steps). Keep in mind that floor-to-floor height must include the thickness of the upper floor slab, not just the distance to the ceiling.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the standard riser and tread size?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In residential construction (especially in India), the standard riser is 6 inches (150mm) and the tread is 10 to 11 inches (250mm to 275mm). In the USA, the '7-11 rule' is common according to OSHA/IBC, meaning a maximum 7-inch riser and a minimum 11-inch tread.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do I have one less tread than riser?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The final step up (the last riser) connects directly to the landing floor or the upper floor slab. Because the floor itself acts as the final landing space for your foot, a separate stair tread is not counted or built for that last step.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How thick should a staircase waist slab be?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For standard residential RCC (Reinforced Cement Concrete) staircases, the waist slab thickness is usually between 4 inches and 6 inches (100mm to 150mm), depending on the total length of the flight and the structural engineer's reinforcement design.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I calculate concrete for dog-legged stairs?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A dog-legged staircase is simply two straight flights separated by a flat mid-landing. To estimate the total concrete, calculate the volume of each straight flight separately using this calculator, then manually calculate the concrete volume of the flat rectangular mid-landing (Length × Width × Slab Thickness) and add them all together.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the ideal angle (pitch) for a staircase?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The ideal pitch or angle for a comfortable residential staircase is between 25 degrees and 35 degrees. Angles steeper than 40 degrees become more like ladders, requiring high effort to climb and creating significant falling hazards.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Building a house requires precise estimates across dozens of materials. Ensure your construction budgets are completely accurate by using our full suite of free estimating tools below:
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
          <a href="/calculator/construction/tile" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Tile Calculator</a>
          <a href="/calculator/construction/tmt-steel-weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">TMT Steel Weight</a>
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}