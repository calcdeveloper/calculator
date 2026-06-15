import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Plywood & Sunmica Calculator | Estimate Laminate Sheets
  2. META DESCRIPTION: Calculate the exact sheets of 18mm plywood, 6mm backing, and Sunmica laminates needed for wardrobes, kitchens, and beds. Free 8x4 wood sheet estimator.
  3. URL SLUG: /calculator/construction/plywood
  4. H1 TITLE: Plywood & Sunmica (Laminate) Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: plywood sheet calculator
      - Secondary Keywords: sunmica square feet calculator, laminate sheet estimator, calculate plywood for wardrobe, how many sheets of plywood for a kitchen, 8x4 plywood size square feet, 18mm plywood estimation, 1mm designer laminate calculation, interior woodwork material calculator, carpentry material estimator, cost of making a wardrobe calculator.
      - Long-Tail Keywords: how to calculate plywood and sunmica for a wardrobe, standard size of sunmica sheet in india, difference between liner mica and sunmica, carpenter multiplier method for plywood calculation, square feet to 8x4 sheet converter.
  =========================================================================
*/

export default function PlywoodLaminateContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const plywoodFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the standard size of a plywood sheet?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The universal standard size for plywood, blockboard, MDF, and laminate sheets in India and many other regions is 8 feet by 4 feet (8x4). This equals exactly 32 square feet per sheet."
        }
      },
      {
        "@type": "Question",
        "name": "How much plywood is required for a 10x7 wardrobe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a standard 10 ft by 7 ft wardrobe (70 sq.ft elevation), you typically need around 7 sheets of 18mm primary plywood (for doors, structure, and shelves) and 3 sheets of 6mm or 8mm plywood for the back panel facing the wall."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Sunmica and Laminate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no difference. 'Sunmica' was an early, highly successful brand of decorative laminates in India. Its popularity made it a proprietary eponym, meaning people now use the word 'Sunmica' to refer to any brand of decorative laminate sheet."
        }
      },
      {
        "@type": "Question",
        "name": "Why do carpenters use liner laminates inside wardrobes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Raw plywood can have a rough surface and splinter, which can snag and ruin delicate clothing. A thinner, cheaper laminate (usually 0.72mm or 0.8mm thick in white or off-white) called a 'liner mica' is pasted on the inside of the wardrobe to provide a smooth, clean, and easily washable surface."
        }
      },
      {
        "@type": "Question",
        "name": "What does BWR and BWP plywood mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "BWR stands for Boiling Water Resistant, and BWP stands for Boiling Water Proof (often called Marine Grade). These grades are treated with specific synthetic resins to withstand high moisture, making them mandatory for kitchen and bathroom cabinetry."
        }
      },
      {
        "@type": "Question",
        "name": "Why is there always a 10% to 15% wastage in plywood?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When an 8x4 sheet is cut into specific drawer or door sizes, there are off-cuts. Additionally, wood has a 'grain direction' that must be matched visually on the outside. You cannot simply glue random leftover scraps together to make a wardrobe door, leading to inevitable material wastage."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(plywoodFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Plywood & Sunmica (Laminate) Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Building custom furniture like wardrobes, modular kitchens, or beds is an exciting process, but estimating the exact raw materials can be confusing. The core problem arises because homeowners and interior designers measure spaces in <strong>Square Feet</strong>, but hardware stores sell wood and laminates strictly in <strong>Standard Sheets</strong>. 
        </p>
        <p className="mb-4">
          Without an accurate material takeoff, it is incredibly easy to be overcharged or end up short on materials midway through a project. When a carpenter asks for "12 sheets of 18mm plywood and 8 sheets of Sunmica," how do you verify if that is correct?
        </p>
        <p className="mb-4">
          Our free, professional-grade <strong>Plywood & Sunmica Calculator</strong> solves this exact problem. By converting your 2D elevation area into a 3D structural estimate using industry-standard carpentry multipliers, this tool gives you the exact number of standard 8x4 sheets you need to purchase. Whether you are a homeowner verifying a contractor's quotation, a DIY enthusiast planning a weekend build, or an interior design student, this tool simplifies interior cost estimation.
        </p>
      </section>

      {/* --- UNDERSTANDING MATERIAL GRADES & TYPES --- */}
      <section className="bg-amber-50 p-6 rounded-xl border border-amber-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Interior Wood Abbreviations</h2>
        <p className="mb-4 text-sm text-gray-700">
          Before calculating quantities, it is vital to know <em>what</em> materials you are calculating. The interior design industry uses several abbreviations that dictate the lifespan and cost of your furniture.
        </p>
        
        <h3 className="font-bold text-amber-900 mt-4 mb-2">Plywood Grades</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-6">
          <li><strong>BWP (Boiling Water Proof):</strong> Also known as Marine Grade (IS: 710 in India). This is highly water-resistant and is mandatory for modular kitchens, bathroom vanities, and areas prone to heavy moisture.</li>
          <li><strong>BWR (Boiling Water Resistant):</strong> A step below BWP. Suitable for moderately humid environments. Often used for kitchen wall cabinets that do not directly touch water.</li>
          <li><strong>MR (Moisture Resistant):</strong> Commercial grade plywood (IS: 303). Despite the name, it is not meant for direct water contact. It is the standard, cost-effective choice for living room TV units, bedroom wardrobes, and study tables.</li>
          <li><strong>HDHMR (High-Density High Moisture Resistance):</strong> A modern, engineered board made of compressed wood fibers. It is denser than plywood and excellent for machine-routing specific design grooves.</li>
        </ul>

        <h3 className="font-bold text-amber-900 mt-4 mb-2">Laminate (Sunmica) Types</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Sunmica:</strong> Originally a specific brand name that dominated the Indian market, it is now the universal term for decorative plastic laminates glued over plywood for aesthetic finishes.</li>
          <li><strong>1.0mm / 0.8mm Designer Laminate:</strong> The thick, scratch-resistant outer layer used on the exterior doors and exposed sides of your furniture.</li>
          <li><strong>0.72mm Liner Mica:</strong> A thinner, cheaper, usually off-white laminate glued to the <em>inside</em> surfaces of wardrobes to keep clothes safe from wood splinters and to make cleaning easy.</li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">How to Use the Plywood Sheet Calculator</h2>
        <p className="mb-4">
          Using our interior material estimator is straightforward. You only need the basic dimensions of your intended furniture to generate a complete hardware store shopping list.
        </p>
        
        <div className="space-y-4 text-sm">
          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 1: Determine the Elevation Area</h3>
            <p className="text-gray-600">Enter the <strong>Width</strong> and <strong>Height</strong> of the furniture unit in feet. For example, a wardrobe that covers a whole wall might be 10 feet wide and 8 feet tall. The calculator will automatically determine the front "Elevation Area."</p>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 2: Select the Furniture Type</h3>
            <p className="text-gray-600 mb-2">Different furniture requires different amounts of internal wood. Choose your category:</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700 mb-2">
              <li><strong>Wardrobes & Tall Units:</strong> High ratio of internal shelves and deep sides.</li>
              <li><strong>Kitchen Base Cabinets:</strong> Require heavy structure but often no top panel (as stone/granite sits on top).</li>
              <li><strong>Wall Paneling:</strong> Requires very little inner wood; mostly a flat 18mm or 12mm sheet against the wall.</li>
            </ul>
          </div>

          <div className="p-4 border border-gray-200 rounded-lg shadow-sm bg-white">
            <h3 className="font-bold text-blue-800 mb-2">Step 3: Factor in Cutting Wastage</h3>
            <p className="text-gray-600">Always select a wastage buffer. We recommend <strong>10% to 15%</strong>. Because wood grain must align vertically on wardrobe doors for aesthetic reasons, carpenters cannot stitch random off-cuts together.</p>
          </div>
        </div>
      </section>

      {/* --- THE FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Universal 8x4 Sheet Rule & Carpentry Formulas</h2>
        <p className="mb-4">
          To understand the math powering the calculator, you must first understand standard manufacturing sizes and the carpenter's multi-factor volume approach.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">1. The 32 Square Foot Rule</h3>
        <p className="text-sm mb-2">
          In India, the USA, and much of the world, building boards (Plywood, MDF, Particle Board, and Laminates) are manufactured in an industry-standard size of <strong>8 feet long by 4 feet wide</strong>.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Standard Sheet Area = 8 ft × 4 ft = 32 Square Feet.
        </div>
        <p className="text-sm mb-4">
          Therefore, any required square footage you calculate must ultimately be divided by 32 to determine the number of physical sheets to order.
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2 mt-6">2. The Carpenter's Multiplier Method</h3>
        <p className="text-sm mb-2">
          A wardrobe is not a flat wall; it is a 3D box containing deep side panels, heavy doors, horizontal shelves, and a top/bottom structure. Instead of calculating every single plank individually, experienced contractors use "Elevation Multipliers." For a standard 2-foot deep wardrobe, the hidden internal wood area is roughly 3 times the size of the front view.
        </p>
        
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-xs md:text-sm mb-4 border border-slate-800 shadow-md leading-relaxed">
          Standard Wardrobe Multipliers (Based on Front Elevation Area):<br /><br />
          • Primary Plywood (18mm) = Elevation Area × 3.0<br />
          • Backing Plywood (6mm/8mm) = Elevation Area × 1.0<br />
          • Outer Designer Sunmica = Elevation Area × 1.3<br />
          • Inner Liner Laminate = Elevation Area × 2.5
        </div>
        <p className="text-sm text-gray-600 italic">
          *Note: The 1.3x multiplier for outer Sunmica accounts for the front doors plus the exposed side panels of the wardrobe. The 2.5x multiplier for inner laminate accounts for coating both sides of internal shelves and side panels.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Calculation Examples</h2>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Standard Bedroom Wardrobe</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are building a full-height bedroom wardrobe measuring 10 feet in width and 7 feet in height. You are factoring in a standard <strong>10% wastage</strong> buffer.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Elevation Area:</strong> 10 ft × 7 ft = <strong>70 Sq.ft</strong>.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Primary Plywood (18mm):</strong><br />
              Area = 70 × 3.0 = 210 Sq.ft.<br />
              Add Wastage (10%) = 210 + 21 = 231 Sq.ft.<br />
              Total Sheets = 231 ÷ 32 = <strong>7.2 Sheets</strong> (Order 7 to 8 sheets).
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Backing Plywood (6mm):</strong><br />
              Area = 70 × 1.0 = 70 Sq.ft.<br />
              Add Wastage (10%) = 70 + 7 = 77 Sq.ft.<br />
              Total Sheets = 77 ÷ 32 = <strong>2.4 Sheets</strong> (Order 3 sheets).
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Outer Laminate (1.0mm Designer):</strong><br />
              Area = 70 × 1.3 = 91 Sq.ft.<br />
              Add Wastage (10%) = 91 + 9 = 100 Sq.ft.<br />
              Total Sheets = 100 ÷ 32 = <strong>3.1 Sheets</strong> (Order 3 to 4 sheets).
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Inner Liner Laminate (0.72mm):</strong><br />
              Area = 70 × 2.5 = 175 Sq.ft.<br />
              Add Wastage (10%) = 175 + 17.5 = 192.5 Sq.ft.<br />
              Total Sheets = 192.5 ÷ 32 = <strong>6.01 Sheets</strong> (Order 6 sheets).
            </div>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Modular Kitchen Base Cabinets</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are estimating the base cabinets for an L-shaped kitchen. The total linear length of the cabinets is 15 feet, and the standard height is 2.5 feet. Kitchens generally use slightly less 18mm wood per square foot because they lack a wooden top (covered by granite) and use fewer tall vertical dividers. We will use a modified multiplier of 2.5x for 18mm plywood and a <strong>15% wastage</strong> buffer.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <div><strong>1. Elevation Area:</strong> 15 ft × 2.5 ft = <strong>37.5 Sq.ft</strong>.</div>
            <div className="pt-2 border-t border-gray-200">
              <strong>BWP Marine Plywood (18mm):</strong><br />
              Area = 37.5 × 2.5 (Kitchen Multiplier) = 93.75 Sq.ft.<br />
              Add Wastage (15%) = 93.75 × 1.15 = 107.8 Sq.ft.<br />
              Total Sheets = 107.8 ÷ 32 = <strong>3.3 Sheets</strong> (Order 4 sheets).
            </div>
            <div className="pt-2 border-t border-gray-200">
              <strong>Inner Liner Laminate (0.72mm):</strong><br />
              Area = 37.5 × 2.0 = 75 Sq.ft.<br />
              Add Wastage (15%) = 75 × 1.15 = 86.25 Sq.ft.<br />
              Total Sheets = 86.25 ÷ 32 = <strong>2.6 Sheets</strong> (Order 3 sheets).
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
              What is the standard size of a plywood sheet?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The universal standard size for plywood, blockboard, MDF, and laminate sheets in India and many other regions is 8 feet by 4 feet (8x4). By multiplying these dimensions, you get exactly 32 square feet per sheet. While 7x4 and 8x3 sizes exist in some markets, 8x4 is the default for estimating and pricing.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much plywood is required for a 10x7 wardrobe?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For a standard 10 ft by 7 ft wardrobe (which gives a 70 sq.ft elevation area), you typically need around 7 to 8 sheets of 18mm primary plywood (for the structure, doors, and internal shelves) and about 3 sheets of thinner 6mm or 8mm plywood to act as the back panel facing the wall.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between Sunmica and Laminate?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              There is actually no technical difference. 'Sunmica' was a highly successful, pioneering brand of decorative laminates in India decades ago. Its popularity made the term synonymous with the product itself (a proprietary eponym), similar to how people use the word 'Xerox' for photocopying. Today, 'Sunmica' refers to any brand of decorative laminate sheet.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do carpenters use liner laminates inside wardrobes?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Raw, unfinished plywood has a rough texture that can cause splinters and easily absorb moisture and dirt. This rough surface can snag and ruin delicate clothing. To prevent this, carpenters paste a thinner, highly economical laminate (usually 0.72mm or 0.8mm thick in basic white or off-white)—known as a 'liner mica'—on all the inside walls and shelves to provide a smooth, easily washable surface.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What does BWR and BWP plywood mean?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              These are technical grades denoting moisture resistance. BWR stands for Boiling Water Resistant, making it suitable for moderate humidity. BWP stands for Boiling Water Proof (often marketed as Marine Grade Plywood). BWP uses specialized synthetic phenolic resins to withstand prolonged exposure to water, making it the strict standard for modular kitchens and bathroom cabinets.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is there always a 10% to 15% wastage in plywood?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Wastage is an inevitable part of woodworking. When a carpenter cuts a massive 8x4 sheet into specific sizes for shelves or doors, off-cuts are generated. Furthermore, wood and laminates have specific 'grain directions'. You cannot simply rotate a scrap piece 90 degrees or glue small leftover pieces together to make a wardrobe door, as it will look visually disjointed. The saw blade itself also turns a small amount of wood into dust (called saw kerf) with every cut.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction & Interior Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Whether you are building a new house, renovating a room, or managing a large contracting project, ensure your material estimates and budgets are perfectly accurate with our suite of engineering tools:
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