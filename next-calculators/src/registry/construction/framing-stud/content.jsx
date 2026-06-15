import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES (PRODUCES HIGH SERP PERFORMANCE)
  =========================================================================
  1. SEO TITLE: Partition & Framing Calculator | Stud & Track Material Estimator
  2. META DESCRIPTION: Calculate vertical studs, floor tracks, ceiling runners, and drywall sheets for partitions. Supports GI metal channels and timber framing with wastage.
  3. URL SLUG: /calculator/construction/framing-stud
  4. H1 TITLE: Drywall Partition & Wall Framing Material Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: partition & framing calculator
      - Secondary Keywords: metal stud calculator, wall framing material estimator, drywall track calculation, running feet framing, vertical studs spacing, timber wall frame calculation, gypsum board partition cost, center to center stud calculator, floor and ceiling tracks, galvanized iron channel estimator.
      - Long-Tail Keywords: how to calculate metal studs for partition wall, wall framing material list formula, estimating vertical studs with plus one rule, commercial drywall framing calculator metric imperial, gypsum board partition material calculation with wastage.
  =========================================================================
*/

export default function FramingCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const framingFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the '+1 Rule' in vertical stud estimation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The '+1 Rule' accounts for the structural starter stud required at the absolute starting point (0-inch or 0-mm mark) of a wall partition. Standard spacing division tells you how many intervals exist along the wall length, but you always need one extra framing member to anchor the opening edge or corner securely before the regular layout spacing begins."
        }
      },
      {
        "@type": "Question",
        "name": "Should I select 16-inch (406 mm) or 24-inch (610 mm) center-to-center stud spacing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Choose 16-inch (406 mm) spacing for partitions requiring high impact resistance, load-bearing capability, heavy sound insulation layers, or thick tile cladding backer boards. Choose 24-inch (610 mm) spacing for cost-effective, standard non-load-bearing residential dividers or office cubicles where standard 4x8 ft sheets are mounted horizontally or vertically."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between tracks and studs in metal partition framing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tracks (or runners) are horizontal U-shaped channels securely anchored to the structural floor and overhead slab ceiling. Studs are vertical C-shaped components that snap directly inside the floor and ceiling tracks at fixed intervals, providing the rigid structural backbone to which drywall, gypsum, or plywood sheets are screwed."
        }
      },
      {
        "@type": "Question",
        "name": "How does the calculator handle door and window openings in partition walls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Openings interrupt regular stud spacing and require extra structural reinforcement, such as king studs, jack studs, and horizontal headers. To account for this on-site structural framing reinforcement without overly complex inputs, it is best to set your wastage buffer to 15% or 20% within the calculator configuration."
        }
      },
      {
        "@type": "Question",
        "name": "Can this framing calculator be utilized for exterior load-bearing timber walls?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the foundational spacing logic remains identical. However, load-bearing exterior walls often incorporate double top plates, specific window cripple studs, and structural corner blocking. For these advanced layouts, using a 15% wastage allowance ensures your total material count safely covers those extra framing elements."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* --- INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(framingFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Drywall Partition & Wall Framing Material Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Erecting interior partition walls is an efficient way to optimize commercial layouts, create custom residential rooms, or add acoustic privacy dividers. However, estimating the required framing components can be tricky. Over-ordering structural framing profiles leads to expensive leftover waste, while under-ordering causes site delays and extra delivery fees.
        </p>
        <p className="mb-4">
          Our professional-grade <strong>Partition & Framing Calculator</strong> helps you plan interior projects accurately. By entering your wall dimensions and structural spacing preferences, you can instantly estimate vertical studs, floor tracks, ceiling runners, and sheet coverage requirements. Designed to support both local Indian construction standards (using GI metal channels or regional timber) and international imperial workflows (US lumber systems), this estimator ensures your material procurement stays accurate and on budget.
        </p>
      </section>

      {/* --- DEEP TECHNICAL CONTEXT SECTION --- */}
      <section className="bg-blue-50/40 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Structural Fundamentals: Metal Framing vs. Timber Battens</h2>
        <p className="mb-4 text-sm">
          Choosing the right framing material impacts the longevity, fire rating, and acoustics of your partition wall. Modern commercial and residential spaces typically use one of two primary systems:
        </p>
        <ul className="space-y-3 text-sm">
          <li>
            <strong>Galvanized Iron (GI) Channels & Light-Gauge Steel:</strong> This is the standard for modern commercial office spaces and urban apartments. The framework consists of horizontal U-shaped floor and ceiling tracks paired with vertical C-shaped studs. Metal framing is lightweight, completely straight, termite-proof, and offers excellent fire resistance.
          </li>
          <li>
            <strong>Timber Framing & Wood Battens:</strong> Often utilized by residential contractors and local carpenters for traditional custom partitions, wood paneling, or wardrobe framing. Common wood choices include seasoned hard pine, spruce, or regional Indian timber like Marandi. Timber offers great rigidity for hanging heavy wall fixtures, but requires careful treatment to protect against moisture warping and termites.
          </li>
          <li>
            <strong>Acoustic Performance (STC Ratings):</strong> The spacing of your framing and the core insulation layer directly affect sound transmission. Light-gauge steel studs allow for slight flexibility, which actually absorbs sound vibrations better than rigid wood frames, helping you achieve a higher Sound Transmission Class (STC) rating.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE DIRECTIVES --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Partition & Framing Calculator</h2>
        <p className="mb-4 text-sm text-gray-600">
          This calculation tool accommodates standard single-line office dividers as well as complex multi-room structural layouts. Follow these steps to generate an accurate bill of materials:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-6">
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">1. Wall Dimensions & Metric/Imperial Units</span>
            Input the total linear length and vertical height of your proposed partition wall. You can toggle between imperial feet/inches or metric meters/millimeters depending on your project requirements.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">2. Center-to-Center Layout Spacing</span>
            Select your vertical stud spacing interval from the dropdown options. Choose the standard 16 inches (406 mm) for high-rigidity walls or heavy board layers, or 24 inches (610 mm) for light, cost-effective interior partitions.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">3. Cladding Layer Adjustments</span>
            Specify whether your partition requires single-sided boarding or double-sided cladding. You can also specify multiple layers of sheets to meet specific fire resistance or soundproofing benchmarks.
          </div>
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">4. Wastage & Cutting Multipliers</span>
            Add a clear safety margin. A baseline value of 5% to 10% is perfect for plain, solid walls, while 15% to 20% is recommended for layouts with doors, windows, or intricate intersections.
          </div>
        </div>

        <h3 className="font-bold text-gray-900 mb-2 text-base">Key Estimate Outputs:</h3>
        <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
          <li><strong>Total Studs Needed:</strong> The exact count of vertical framing studs required, calculated using the standard structural "+1 starter rule."</li>
          <li><strong>Horizontal Tracks / Plates:</strong> The total linear footage or meters of track material needed to line the base floor and upper ceiling plate.</li>
          <li><strong>Total Material Pieces:</strong> An automated estimate that rounds up the linear requirements to match standard commercial purchase lengths (such as 10-foot or 12-foot stock sections).</li>
          <li><strong>Drywall / Gypsum Sheet Count:</strong> The total number of standard 4x8 ft (or metric equivalent) boards required to cover the partition frame.</li>
        </ul>
      </section>

      {/* --- MATHEMATICAL FORMULAS SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Behind Wall Framing</h2>
        <p className="mb-4">
          Estimating partition materials relies on clean geometric division combined with structural logic. Below are the core equations used by our framing calculator:
        </p>

        <h3 className="font-bold text-gray-800 text-lg mb-2">1. Vertical Stud Count Calculation (The "+1 Starter Rule")</h3>
        <p className="mb-4 text-sm">
          Dividing the total wall length by the stud spacing tells you how many internal framing intervals are needed. However, you must always add an extra "starter stud" to anchor the absolute beginning of the wall track.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Raw Interval Count = Total Wall Length / Chosen Stud Spacing Spacing<br />
          • Baseline Studs Required = Ceil( Raw Interval Count ) + 1 Starter Stud<br />
          • Total Studs (with Wastage) = Ceil( Baseline Studs Required × (1 + Wastage % / 100) )
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">2. Horizontal Tracks & Plates Calculation</h3>
        <p className="mb-4 text-sm">
          Horizontal elements run along both the bottom floor and the top ceiling structural plane. If you are building a heavy wood framework, you may also need to account for a double top plate.
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm mb-6 border border-slate-800 shadow-md">
          • Total Track Length Required = Total Wall Length × 2 (Floor Track + Ceiling Track)<br />
          • Commercial 10 ft Sections to Purchase = Ceil( Total Track Length in Feet / 10 )<br />
          • Commercial 12 ft Sections to Purchase = Ceil( Total Track Length in Feet / 12 )
        </div>

        <h3 className="font-bold text-gray-800 text-lg mb-2">3. Face Area Cladding (Drywall & Gypsum Sheets)</h3>
        <p className="mb-4 text-sm">
          To figure out how many finishing sheets are required, calculate the total surface area of the wall and multiply it by the number of cladding sides, then divide by the area of a single sheet:
        </p>
        <div className="bg-slate-900 text-slate-100 p-5 rounded-xl font-mono text-xs md:text-sm border border-slate-800 shadow-md">
          • Total Wall Surface Area = Total Wall Length × Wall Height<br />
          • Standard 4x8 ft Cladding Sheet Area = 32 Square Feet<br />
          • Required Sheets = Ceil( (Total Wall Surface Area × Cladding Sides / 32) × (1 + Wastage % / 100) )
        </div>
      </section>

      {/* --- DETAILED WORKED EXAMPLES --- */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-World Framing Examples</h2>
        
        {/* Case Study 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example A: Commercial Office Partition (India GI Channel Layout)</h3>
          <p className="text-sm text-gray-600">
            A commercial interior contractor needs to build a straight drywall divider wall down an office floor. The wall is <strong>9 meters long (9000 mm)</strong> and <strong>3 meters high</strong>. The project spec calls for standard light-gauge GI metal framing at a <strong>610 mm spacing interval</strong>, with double-sided single-layer gypsum cladding and a <strong>10% wastage allowance</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Base Layout Division = 9000 mm / 610 mm = 14.75 Intervals</div>
            <div>• Round Up + Add Starter Stud = 15 + 1 = 16 Baseline Vertical Studs</div>
            <div>• Total Vertical Studs with 10% Wastage = Ceil(16 × 1.10) = 18 Studs (3-meter length)</div>
            <div>• Total Track Length Required = 9m Floor + 9m Ceiling = 18 Linear Meters</div>
            <div>• Commercial 3-Meter Channel Sections = 18m / 3m = 6 Track Pieces</div>
            <div>• Total Wall Face Area = 9m × 3m = 27 Square Meters</div>
            <div>• Double-Sided Face Area Coverage = 27 sq.m × 2 sides = 54 Square Meters</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Material Purchase List: 18 Vertical Stud Channels, 6 Horizontal Track Profiles, and 54 sq.m of Gypsum Boarding.</div>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-teal-900">Example B: Home Basement Divider Wall (USA Timber Framing)</h3>
          <p className="text-sm text-gray-600">
            A homeowner in the USA is framing a new basement utility partition wall using traditional 2x4 wood timber. The wall measures <strong>32 feet long by 8 feet high</strong>. They are using high-density <strong>16-inch center-to-center spacing</strong> to support heavy tool shelving, single-sided drywall cladding, and a <strong>5% wastage allowance</strong>.
          </p>
          <div className="bg-calc-lightGray/20 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <div>• Length Conversion to Inches = 32 feet × 12 = 384 inches</div>
            <div>• Base Layout Division = 384 inches / 16 inches = 24 Intervals</div>
            <div>• Add Starter Stud = 24 + 1 = 25 Baseline Vertical Studs</div>
            <div>• Total Studs with 5% Wastage = Ceil(25 × 1.05) = 27 Studs (8-foot Length)</div>
            <div>• Total Plate Length Required = 32 ft (Base Plate) + 32 ft (Top Plate) = 64 Linear Feet</div>
            <div>• Commercial 16 ft Timber Studs for Plates = 64 / 16 = 4 Structural Boards</div>
            <div>• Total Drywall Surface Area = 32 ft × 8 ft = 256 Square Feet (Single Sided)</div>
            <div>• Total 4x8 ft Drywall Panels Needed = Ceil((256 / 32) × 1.05) = Ceil(8.4) = 9 Sheets</div>
            <div className="text-emerald-800 font-sans font-bold mt-2">✔ Material Purchase List: 27 Vertical 8ft Studs, 4 Pieces of 16ft Lumber for plates, and 9 standard Drywall Sheets.</div>
          </div>
        </div>
      </section>

      {/* --- BEST PRACTICES ON-SITE --- */}
      <section className="bg-amber-50/50 p-6 rounded-xl border border-amber-200/60">
        <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Framing Tips for an Optimal Build</h3>
        <p className="text-sm mb-3">
          Accurate calculations are a great start, but proper installation practices prevent structure failure down the line. Keep these industry tips in mind:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li>
            <strong>Add Framing Support for Heavy Items:</strong> Standard drywall cannot safely hold heavy wall-mounted TVs, kitchen cabinets, or large mirrors on its own. Install extra horizontal wood or metal framing supports (called blocking) between your vertical studs at the correct height before adding the drywall sheets.
          </li>
          <li>
            <strong>Install Sealing Tape for Sound and Fire Protection:</strong> Place a layer of foam acoustic sealing tape under your floor and ceiling tracks before anchoring them down. This small step fills tiny gaps, significantly reducing sound leaks and improving the wall's fire safety rating.
          </li>
          <li>
            <strong>Leave a Small Gap for Settlement:</strong> In commercial spaces with concrete floors, leave a small 1/4-inch (6 mm) gap at the top of the drywall sheets. This prevents the boards from cracking or buckling if the concrete floor shifts or settles slightly over time.
          </li>
        </ul>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the "+1 Rule" in vertical stud estimation?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The "+1 Rule" accounts for the structural starter stud required at the absolute starting point (0-inch or 0-mm mark) of a wall partition. Standard spacing division tells you how many intervals exist along the wall length, but you always need one extra framing member to anchor the opening edge or corner securely before the regular layout spacing begins.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Should I select 16-inch (406 mm) or 24-inch (610 mm) center-to-center stud spacing?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Choose 16-inch (406 mm) spacing for partitions requiring high impact resistance, load-bearing capability, heavy sound insulation layers, or thick tile cladding backer boards. Choose 24-inch (610 mm) spacing for cost-effective, standard non-load-bearing residential dividers or office cubicles where standard 4x8 ft sheets are mounted horizontally or vertically.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between tracks and studs in metal partition framing?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Tracks (or runners) are horizontal U-shaped channels securely anchored to the structural floor and overhead slab ceiling. Studs are vertical C-shaped components that snap directly inside the floor and ceiling tracks at fixed intervals, providing the rigid structural backbone to which drywall, gypsum, or plywood sheets are screwed.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does the calculator handle door and window openings in partition walls?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Openings interrupt regular stud spacing and require extra structural reinforcement, such as king studs, jack studs, and horizontal headers. To account for this on-site structural framing reinforcement without overly complex inputs, it is best to set your wastage buffer to 15% or 20% within the calculator configuration.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this framing calculator be utilized for exterior load-bearing timber walls?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, the foundational spacing logic remains identical. However, load-bearing exterior walls often incorporate double top plates, specific window cripple studs, and structural corner blocking. For these advanced layouts, using a 15% wastage allowance ensures your total material count safely covers those extra framing elements.
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
          <a href="/calculator/construction/false-ceiling" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">False Ceiling</a>
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