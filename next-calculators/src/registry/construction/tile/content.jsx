import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Tile Calculator: Estimate Floor & Wall Tiles Perfectly
  2. META DESCRIPTION: Calculate the exact number of floor and wall tiles needed for your room. Get accurate box counts, wastage margins, and total cost estimates for your project.
  3. URL SLUG: /calculator/construction/tile
  4. H1 TITLE: Floor & Wall Tile Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: floor and wall tile calculator
      - Secondary Keywords: tile estimator, bathroom wall tiles calculator, how many tiles in one box, living room tile calculator, tile box calculator, skirting calculator, tile quantity calculator, calculate floor tiles required, square footage tile calculator, tile cost estimator.
      - Long-Tail Keywords: how to calculate tiles needed for a floor, how many 600x600 mm tiles in a box, how much wastage to add for floor tiles, formula to calculate tile quantity, calculator for bathroom floor and wall tiles.
  =========================================================================
*/

export default function TileCalculatorContent() {
  // Structured FAQ JSON-LD Schema for Google Rich Snippets
  const tileFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How much wastage should I add when buying tiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For standard straight-laid floor or wall tiles, add a 5% to 7% wastage margin. If you are laying tiles in a diagonal or diamond pattern, or if the room has many complex angles and columns, add a 10% to 15% wastage margin to account for the extra cuts."
        }
      },
      {
        "@type": "Question",
        "name": "How many 600x600 mm tiles come in a standard box?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In standard Indian manufacturing, a box of 600x600 mm (2x2 feet) tiles contains exactly 4 pieces. This covers an area of 16 square feet (1.44 square meters)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to calculate skirting separately?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, skirting is calculated based on the running perimeter of the room, not the flat floor area. Skirting is usually 4 inches high. Our calculator automatically handles this perimeter math if you select 'Yes' for the skirting option."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate bathroom wall tiles?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate bathroom wall tiles, measure the length of all four walls and multiply by the ceiling height to get the total area. Then, calculate the area of the bathroom door and window, and subtract that from your total wall area before adding your 5% wastage."
        }
      },
      {
        "@type": "Question",
        "name": "Why do manufacturers sell tiles by the box instead of loose pieces?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tiles are heavy and fragile. Packaging them tightly in standard-weight boxes prevents breakage during transit. Additionally, boxes keep tiles from the exact same color and texture 'batch' together to prevent slight mismatches during installation."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* INJECTING STRUCTURED DATA FOR GOOGLE RICH SNIPPETS */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tileFaqSchema) }}
      />

      {/* --- INTRODUCTION SECTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Floor & Wall Tile Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          Whether you are renovating a master bedroom, fixing up a bathroom, or building a new home from scratch, buying the correct amount of tiles is crucial. Buying too few delays your project and risks color batch mismatches, while buying too many wastes your hard-earned budget since dealers rarely accept returns on open boxes.
        </p>
        <p className="mb-4">
          Estimating tile quantities is not just about multiplying length by width. Real-world construction requires accounting for skirting boards, complex cuts, corners, and inevitable accidental breakages during installation. 
        </p>
        <p>
          Our <strong>Tile Calculator</strong> removes the guesswork. Designed for both homeowners and contractors across India and the USA, this tool instantly computes your exact floor or wall area, factors in your preferred wastage safety net, calculates the precise number of tile boxes required, and even provides a total project cost estimate.
        </p>
      </section>

      {/* --- IMPORTANT TERMINOLOGY --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Essential Tile Measurement Vocabulary</h2>
        <p className="mb-4">
          Before taking out your measuring tape, it helps to understand the standard terms used by tile showrooms and masons:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Sq.ft (Square Feet):</strong> The most common unit for measuring room area in residential construction. 1 Sq.m (Square Meter) is equal to 10.76 Sq.ft.
          </li>
          <li>
            <strong>mm (Millimeters):</strong> The global standard unit used by manufacturers to define the physical dimensions of the tile itself (e.g., 600x600 mm, 800x800 mm).
          </li>
          <li>
            <strong>Skirting:</strong> The small, 4-inch-high strip of tile attached to the base of the wall where it meets the floor. It protects the wall paint from water damage when mopping.
          </li>
          <li>
            <strong>Wastage Factor:</strong> A percentage of extra tiles purchased to account for tiles that must be cut to fit edges, go around plumbing pipes, or that accidentally break.
          </li>
          <li>
            <strong>Batch Number / Lot Number:</strong> Tiles are baked in kilns. Different baking cycles can produce slightly different shades. Buying all your boxes from the same batch number ensures a uniform color across your floor.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE THE CALCULATOR --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Tile Estimator</h2>
        <p className="mb-4 text-sm text-gray-700">
          Using our calculator ensures you walk into the tile showroom fully prepared. Here is how to navigate the inputs:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Calculation Type:</strong> Choose whether you are calculating for a <em>Floor Area</em> (which offers a skirting option) or a <em>Wall Area</em> (like a kitchen backsplash or bathroom wall).
          </li>
          <li>
            <strong>Select Unit:</strong> Choose your preferred measurement unit: Feet or Meters. Feet is highly recommended for residential interior projects.
          </li>
          <li>
            <strong>Room Dimensions:</strong> Enter the absolute Length and Width of your room. Measure wall-to-wall.
          </li>
          <li>
            <strong>Include Skirting? (Floors Only):</strong> Toggle this to 'Yes' if you plan to install a matching tile border along the base of your walls. The calculator automatically assumes a standard 4-inch (100mm) skirting height.
          </li>
          <li>
            <strong>Tile Size:</strong> Open the dropdown menu and select the physical size of the tile you want to buy. Options range from standard bathroom sizes (300x300 mm) to large living room slabs (800x1600 mm).
          </li>
          <li>
            <strong>Wastage Margin:</strong> Select 5% for standard straight rooms, 10% for diagonal layouts or rooms with many corners, or 15% for highly complex custom patterns.
          </li>
          <li>
            <strong>Tile Box Price (Optional):</strong> Enter the price per box quoted by your dealer to get an instant financial estimate for the whole room.
          </li>
        </ol>
        <p className="mt-4 text-sm font-semibold text-blue-900">
          Outputs Explained: The tool will display your Total Area (including wastage), the exact number of individual tile pieces needed, how many full boxes to purchase, and your estimated material cost.
        </p>
      </section>

      {/* --- THE FORMULAS EXPLAINED --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">The Mathematics of Tile Calculation</h2>
        <p className="mb-4">
          Want to know how the background math works? The calculation relies on basic geometry mixed with standard manufacturing packaging rules.
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">Step 1: Finding the Core Area</h3>
        <p className="mb-2 text-sm text-gray-700">
          For floors, multiply the length of the room by its width.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Floor Area = Room Length × Room Width
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">Step 2: Adding the Skirting (For Floors)</h3>
        <p className="mb-2 text-sm text-gray-700">
          Skirting borders the perimeter of the room. We find the perimeter and multiply it by a standard 4-inch (0.33 feet) height.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Perimeter = 2 × (Length + Width)<br />
          Skirting Area = Perimeter × 0.33 feet
        </div>

        <h3 className="text-xl font-bold text-blue-900 mt-6 mb-2">Step 3: Calculating Total Tiles and Boxes</h3>
        <p className="mb-2 text-sm text-gray-700">
          We add the Floor Area and Skirting Area together, then multiply by the wastage factor (e.g., 1.05 for 5%). We then divide that final area by the area of a single tile to get the number of pieces.
        </p>
        <div className="bg-slate-900 text-slate-100 p-4 rounded-xl font-mono text-sm mb-4 border border-slate-800 shadow-md">
          Total Area with Wastage = (Floor Area + Skirting Area) × 1.05<br />
          Total Tile Pieces = Total Area ÷ Area of One Tile<br />
          Total Boxes = Total Tile Pieces ÷ Pieces per Box
        </div>
      </section>

      {/* --- STANDARD BOX SIZES TABLE --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Many Tiles in One Box? (Indian Manufacturing Standards)</h2>
        <p className="mb-4">
          Because tiles are constructed from heavy ceramics and vitrified clay, manufacturers strictly limit the weight of a single box to ensure laborers can carry them safely. Therefore, larger tile slabs have fewer pieces per box. Here is a definitive guide based on standard manufacturing:
        </p>

        <div className="overflow-x-auto my-6 border border-gray-200 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200 text-gray-700">
                <th className="p-4 font-semibold">Tile Size in mm</th>
                <th className="p-4 font-semibold">Size in Feet/Inches</th>
                <th className="p-4 font-semibold">Pieces per Box</th>
                <th className="p-4 font-semibold">Coverage Area per Box</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">600x600 mm</td>
                <td className="p-4 text-gray-600">2x2 Feet</td>
                <td className="p-4 text-gray-600">4 Pieces</td>
                <td className="p-4 text-gray-600">16.0 Sq.ft (1.44 Sq.m)</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">600x1200 mm</td>
                <td className="p-4 text-gray-600">2x4 Feet</td>
                <td className="p-4 text-gray-600">2 Pieces</td>
                <td className="p-4 text-gray-600">16.0 Sq.ft (1.44 Sq.m)</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">800x800 mm</td>
                <td className="p-4 text-gray-600">32x32 Inches</td>
                <td className="p-4 text-gray-600">3 Pieces</td>
                <td className="p-4 text-gray-600">21.3 Sq.ft (1.92 Sq.m)</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">300x300 mm</td>
                <td className="p-4 text-gray-600">1x1 Feet</td>
                <td className="p-4 text-gray-600">9 or 10 Pieces</td>
                <td className="p-4 text-gray-600">9.0 - 10.0 Sq.ft</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 font-medium text-gray-900">300x450 mm</td>
                <td className="p-4 text-gray-600">12x18 Inches</td>
                <td className="p-4 text-gray-600">6 Pieces</td>
                <td className="p-4 text-gray-600">9.0 Sq.ft (0.81 Sq.m)</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm italic mt-2 text-gray-500">
          *Pro Tip: Bathroom floors strictly use anti-skid matte tiles (usually 300x300mm), while bathroom walls use glossy tiles (300x450mm or 300x600mm) to prevent water absorption and facilitate easy cleaning.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Worked Examples</h2>
        <p className="text-gray-600 mb-4">
          Let’s look at real-world remodeling scenarios to see how professional contractors estimate material lists.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Living Room Floor with Skirting</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You have a living room that is <strong>12 feet long</strong> and <strong>10 feet wide</strong>. You want to lay standard <strong>600x600 mm (2x2 ft)</strong> tiles. You need a 4-inch skirting and want to include a <strong>5% wastage</strong> margin. The boxes cost ₹600 each.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>1. Floor Area:</strong> 12 ft × 10 ft = 120 Sq.ft.<br />
            <strong>2. Perimeter for Skirting:</strong> 2 × (12 + 10) = 44 running feet.<br />
            <strong>3. Skirting Area:</strong> 44 ft × 0.33 ft = 14.5 Sq.ft.<br />
            <strong>4. Total Net Area:</strong> 120 + 14.5 = 134.5 Sq.ft.<br />
            <strong>5. Add 5% Wastage:</strong> 134.5 × 1.05 = <strong>141.22 Sq.ft.</strong><br />
            <br />
            <strong>6. Box Calculation:</strong> One box of 600x600 covers 16 Sq.ft.<br />
            141.22 ÷ 16 = 8.82 Boxes. Since you can't buy 0.82 of a box, you round up to <strong>9 Boxes</strong>.<br />
            <strong>7. Total Cost:</strong> 9 boxes × ₹600 = <strong>₹5,400</strong>.
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Bathroom Wall Tiles</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are tiling a single feature wall in a bathroom. The wall is <strong>8 feet wide</strong> and the ceiling height is <strong>10 feet</strong>. You are using <strong>300x450 mm</strong> glossy wall tiles. You want a <strong>10% wastage</strong> margin.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-2">
            <strong>1. Wall Area:</strong> 8 ft × 10 ft = 80 Sq.ft.<br />
            <strong>2. Skirting:</strong> Not applicable for full walls.<br />
            <strong>3. Add 10% Wastage:</strong> 80 × 1.10 = <strong>88 Sq.ft.</strong><br />
            <br />
            <strong>4. Box Calculation:</strong> One box of 300x450 covers 9 Sq.ft.<br />
            88 ÷ 9 = 9.77 Boxes. Round up to <strong>10 Boxes</strong>.
          </div>
        </div>
      </section>

      {/* --- PRO TIPS FOR TILE BUYERS --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Pro Tips for Buying & Laying Tiles</h2>
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>
            <strong>Keep Spares for the Future:</strong> Always pack away 3 or 4 spare tiles in your attic or garage. If a tile cracks five years from now due to a dropped heavy object, finding the exact matching color and batch in the market will be nearly impossible.
          </li>
          <li>
            <strong>Check the Arrows:</strong> Most large vitrified floor tiles have an arrow printed on the back. Ensure your mason lays all tiles with the arrows pointing in the exact same direction to maintain the subtle texture pattern intended by the manufacturer.
          </li>
          <li>
            <strong>Use Epoxy Grout for Bathrooms:</strong> Cement-based grout easily absorbs water and discolors over time. For wet areas, always insist your contractor uses high-quality epoxy grout between the tile joints.
          </li>
        </ul>
      </section>

      {/* --- COMPREHENSIVE FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How much wastage should I add when buying tiles?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For standard straight-laid floor or wall tiles, add a 5% to 7% wastage margin. If you are laying tiles in a diagonal or diamond pattern, or if the room has many complex angles, doors, and columns, add a 10% to 15% wastage margin to account for the extra cuts.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How many 600x600 mm tiles come in a standard box?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In standard Indian manufacturing, a box of 600x600 mm (2x2 feet) vitrified tiles contains exactly 4 pieces. This covers a flat area of 16 square feet (1.44 square meters).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Do I need to calculate skirting separately?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, skirting is calculated based on the running perimeter of the room, not the flat floor area. Skirting is usually 4 inches high. Our calculator automatically handles this perimeter math if you select 'Yes' for the skirting option.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do I calculate bathroom wall tiles perfectly?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Measure the length of all four walls and multiply by your ceiling height to get the total gross area. Then, calculate the square footage of your bathroom door and window. Subtract the door/window area from your gross area before applying your 5% wastage margin.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do manufacturers sell tiles by the box instead of loose pieces?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Tiles are incredibly heavy and fragile. Packaging them tightly in standard-weight boxes prevents breakage and chipping during truck transit. Additionally, boxes keep tiles from the exact same manufacturing color 'batch' grouped together.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Construction Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Building or renovating requires precise estimates across dozens of materials. Ensure your construction budgets are completely accurate by using our full suite of free estimating tools below:
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
          <a href="/calculator/construction/staircase-step" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Staircase Step</a>
          <a href="/calculator/construction/tmt-steel-weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">TMT Steel Weight</a>
          <a href="/calculator/construction/water-tank-capacity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Water Tank Capacity</a>
        </div>
      </section>
    </div>
  );
}