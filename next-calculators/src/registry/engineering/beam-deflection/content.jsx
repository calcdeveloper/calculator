import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Advanced Beam Deflection Calculator | Point & Uniform Load
  2. META DESCRIPTION: Calculate maximum deflection and bending with our Advanced Beam Deflection Calculator. Accurately analyze cantilever and simply supported configurations.
  3. URL SLUG: /calculator/engineering/advanced-beam-deflection
  4. H1 TITLE: Advanced Beam Deflection Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: advanced beam deflection calculator
      - Secondary Keywords: simply supported beam calculator, cantilever beam deflection, point load bending calculator, uniform load deflection, calculate beam bending, area moment of inertia, youngs modulus calculator, structural analysis tool, beam bending formula, engineering beam calculator.
      - Long-Tail Keywords: how to calculate maximum deflection of a cantilever beam, simply supported beam with uniformly distributed load calculator, convert force and moment of inertia for beam bending, beam deflection formula for point load.
  =========================================================================
*/

export default function BeamDeflectionAdvancedContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly is beam deflection in structural engineering?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Beam deflection refers to the physical displacement or bending of a structural element away from its original linear axis under an applied external load. In engineering design, tracking deflection ensures structures remain safe, visually uniform, and mechanically stable under operating stresses."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a point load and a uniform load?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A point load (concentrated force) concentrates its entire weight at a single localized spot on a beam. A uniform load (Uniformly Distributed Load or UDL) distributes its weight evenly along the entire length of the span, such as a concrete floor slab or snow accumulation."
        }
      },
      {
        "@type": "Question",
        "name": "How does Young's Modulus (E) affect structural bending?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Young's Modulus is a fundamental mechanical property that quantifies a material's intrinsic stiffness. A higher value indicates a stiffer material (like structural steel at 200 GPa) that will experience minimal deflection compared to a more flexible material (like structural lumber or soft aluminum) under identical loads."
        }
      },
      {
        "@type": "Question",
        "name": "What are standard acceptable deflection limits in building codes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Deflection thresholds are governed by regional codes like the IBC in the United States or IS 456 / IS 800 in India. A frequent threshold for floors under full live loads is L/360, which implies the absolute maximum allowed vertical sag cannot exceed the total span length divided by 360."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator process both metric and imperial units?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. This online tool completely bridges the gap between metric and imperial systems. You can enter forces in Newtons, Kilonewtons, or Pounds-force, lengths in meters or inches, and material properties in GPa or psi to receive perfectly normalized answers instantly."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the Area Moment of Inertia critical for calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Area Moment of Inertia (I) defines how a geometric cross-section distributes its material relative to its neutral bending axis. A tall I-beam standing upright features a much higher moment of inertia than the same I-beam turned flat on its side, providing far superior resistance to vertical sagging."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      
      {/* STRUCTURED DATA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Advanced Beam Deflection Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          In mechanical, civil, and structural engineering, <strong>Beam Deflection</strong> is the physical degree to which a structural member sags or flexes away from its original flat position under an applied load. Accurately determining these structural tolerances is vital to guarantee that bridges, roof trusses, floor framing plans, and mechanical shafts survive daily operations without failure, structural cracks, or hazardous alignment errors.
        </p>
        <p className="mb-4">
          When columns, girders, and rafters carry weight, they experience internal stress and tension. Because diverse engineering projects employ highly localized mounting techniques, a reliable calculation demands knowing your exact <strong>Beam Configuration</strong> and <strong>Load Type</strong>. Guesswork can lead to massive structural hazards or incredibly expensive material waste.
        </p>
        <p>
          Our <strong>Advanced Beam Deflection Calculator</strong> solves this challenge by serving as a comprehensive multi-pass tool for professionals and students across India, the United States, and worldwide. Built on classic Euler-Bernoulli beam mechanics, this tool automatically modifies its mathematical algorithms to suit your geometric parameters, delivering instant, precise evaluations of maximum bending conditions.
        </p>
      </section>

      {/* --- CORE CORE ENGINEERING CONCEPTS --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Dive: Beam Assemblies and Load Formats</h2>
        <p className="mb-6">
          To successfully compute structural flexibility, you must analyze how the beam ends are held by the surrounding foundation and how the incoming weight is distributed. Structural designs rely heavily on these specific environmental settings:
        </p>

        <div className="space-y-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Understanding Structural Beam Configurations</h3>
            <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
              <li>
                <strong>Cantilever Beam:</strong> A structural element that is anchored rigidly at one solitary end while the remaining end floats completely free in space. Excellent real-world examples include outdoor concrete balconies, tower crane jibs, or standard swimming pool diving boards. Maximum bending naturally develops at the farthest tip of the unanchored end.
              </li>
              <li>
                <strong>Simply Supported Beam:</strong> A beam resting lightly on foundational supports at both ends, free to rotate at the connection points. This layout mimics structural bridge decks spanning over pillars or traditional timber planks positioned over sawhorses. The absolute maximum deflection typically takes place directly at the center of the span length.
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Analyzing External Load Classifications</h3>
            <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
              <li>
                <strong>Point Load (Concentrated Force):</strong> An external impact applied heavily at a single pinpoint coordinate along the beam axis. This represents concentrated weights such as a heavy server rack sitting on an industrial floor joist.
              </li>
              <li>
                <strong>Uniformly Distributed Load (UDL):</strong> A continuous load layout applied equally across every unit of length on the beam. This reflects natural forces like snow cover, thick concrete slab foundations, or structural self-weight. 
                <span className="block mt-1 font-semibold text-amber-800">
                  Note: This calculator uses Total Force (F). If your distribution rate is 200 N/m over a 4m span, your input Total Force (F) should be entered as 800 N.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- MATERIAL & GEOMETRIC VARIABLES --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding the Crucial Engineering Inputs</h2>
        <p className="mb-4">
          To calculate maximum bending distance, our tool combines external loads with internal physical characteristics. Here is what you need to provide:
        </p>
        <ul className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Young's Modulus (E):</strong> This defines a material's intrinsic elastic stiffness. For instance, structural steel possesses a high modulus (around 200 GPa or 29,000,000 psi), meaning it strongly resists bending. Lumber possesses a lower modulus (roughly 10 GPa to 15 GPa), meaning it sags far more easily under weight.
          </li>
          <li>
            <strong>Area Moment of Inertia (I):</strong> This represents the mathematical cross-sectional shape's resistance to flexure. An I-beam placed upright contains a far superior area moment of inertia than the exact same steel weight laid out horizontally. This value is typically extracted from standard steel design tables or calculated based on section geometry.
          </li>
          <li>
            <strong>Span Length (L):</strong> The total unanchored distance between your structural supports. Because length is cubed in deflection calculations, even minor expansions in span distance generate massive increases in total vertical bending.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Instructions</h2>
        <p className="mb-4 text-sm text-gray-700">
          Our layout simplifies intricate engineering equations. Follow these guided steps to process your structural variables:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Set Configuration:</strong> Use the dropdown selector to establish your beam configuration (Cantilever or Simply Supported).
          </li>
          <li>
            <strong>Set Load Distribution:</strong> Choose either a Point Load or a Uniformly Distributed Load from the corresponding field.
          </li>
          <li>
            <strong>Input Forces and Dimensions:</strong> Type your values into the designated input fields. Make sure to choose your preferred units (such as Newtons or Pounds for force; meters, inches, or feet for span metrics).
          </li>
          <li>
            <strong>Provide Properties:</strong> Enter the appropriate Young's Modulus (E) and Area Moment of Inertia (I) matching your architectural member.
          </li>
          <li>
            <strong>Evaluate:</strong> Read the auto-calculated results instantly. The tool outputs the maximum physical deflection distance, enabling immediate verification against standard regional design codes.
          </li>
        </ol>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Formulas Behind The Calculator</h2>
        <p className="mb-4">
          While the base engineering variables remain the same—<strong>Force (F)</strong>, <strong>Length (L)</strong>, <strong>Young's Modulus (E)</strong>, and <strong>Area Moment of Inertia (I)</strong>—the numerical factors change depending on your chosen loading format. 
        </p>
        <p className="mb-6">
          Our software executes these four fundamental equations in plain text to evaluate maximum structural deflection (denoted as δ):
        </p>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6">
          <div>
            <h4 className="font-bold text-gray-900 mb-1">1. Cantilever Beam with Point Load at the Free End</h4>
            <p className="text-sm text-gray-600 mb-2">Used for balconies and cantilever brackets holding a specific heavy edge force.</p>
            <span className="font-mono text-lg text-blue-700 bg-white px-4 py-2 rounded border border-blue-100 block w-full text-center">
              δ = (F × L³) / (3 × E × I)
            </span>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-1">2. Cantilever Beam with Uniformly Distributed Load (UDL)</h4>
            <p className="text-sm text-gray-600 mb-2">Used for cantilevers carrying continuous weights like uniform snow cover or concrete self-weight.</p>
            <span className="font-mono text-lg text-blue-700 bg-white px-4 py-2 rounded border border-blue-100 block w-full text-center">
              δ = (F × L³) / (8 × E × I)
            </span>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-1">3. Simply Supported Beam with Central Point Load</h4>
            <p className="text-sm text-gray-600 mb-2">Used when a single concentrated load rests directly on the mid-span of a double-supported beam.</p>
            <span className="font-mono text-lg text-blue-700 bg-white px-4 py-2 rounded border border-blue-100 block w-full text-center">
              δ = (F × L³) / (48 × E × I)
            </span>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-1">4. Simply Supported Beam with Uniformly Distributed Load (UDL)</h4>
            <p className="text-sm text-gray-600 mb-2">The standard formula for regular residential floor joists or bridge crossbeams under constant floor weights.</p>
            <span className="font-mono text-lg text-blue-700 bg-white px-4 py-2 rounded border border-blue-100 block w-full text-center">
              δ = (5 × F × L³) / (384 × E × I)
            </span>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Mathematical Walkthroughs</h2>
        <p className="text-gray-600">
          Review these clear, step-by-step engineering examples to understand how dimensions, material attributes, and loads interact to define structural deflection.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: Steel Cantilever Beam Analysis (Metric)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> You are evaluating an A36 structural steel cantilever beam protruding out by 3 meters. It supports a concentrated machinery point load of 15,000 Newtons at its free floating tip.
          </p>
          <ul className="list-disc pl-6 text-xs text-gray-600 space-y-1">
            <li>Force (F) = 15,000 N</li>
            <li>Span Length (L) = 3 meters</li>
            <li>Young's Modulus (E) = 200 GPa (which equals 200,000,000,000 N/m²)</li>
            <li>Area Moment of Inertia (I) = 0.0001 m⁴</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p>Step 1: Select formula: δ = (F × L³) / (3 × E × I)</p>
            <p>Step 2: Calculate numerator: 15,000 × (3³) = 15,000 × 27 = 405,000</p>
            <p>Step 3: Calculate denominator: 3 × 200,000,000,000 × 0.0001 = 60,000,000</p>
            <p>Step 4: Complete division: 405,000 / 60,000,000 = 0.00675 meters</p>
            <p className="text-emerald-800 font-bold mt-1">Deflection Result: 6.75 mm vertical deflection at the tip.</p>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Wooden Floor Joist Analysis (Imperial)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A residential timber deck floor joist bridges a 120-inch gap between structural supports. It carries a uniform total weight distribution of 600 pounds-force along its entire span.
          </p>
          <ul className="list-disc pl-6 text-xs text-gray-600 space-y-1">
            <li>Total Force (F) = 600 lbf</li>
            <li>Span Length (L) = 120 inches</li>
            <li>Young's Modulus (E) = 1,600,000 psi</li>
            <li>Area Moment of Inertia (I) = 30 in⁴</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p>Step 1: Select formula: δ = (5 × F × L³) / (384 × E × I)</p>
            <p>Step 2: Calculate numerator: 5 × 600 × (120³) = 3,000 × 1,728,000 = 5,184,000,000</p>
            <p>Step 3: Calculate denominator: 384 × 1,600,000 × 30 = 18,432,000,000</p>
            <p>Step 4: Complete division: 5,184,000,000 / 18,432,000,000 = 0.281 inches</p>
            <p className="text-blue-800 font-bold mt-1">Deflection Result: 0.281 inches of mid-span sagging.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What exactly is beam deflection in structural engineering?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Beam deflection refers to the physical displacement or bending of a structural element away from its original linear axis under an applied external load. In engineering design, tracking deflection ensures structures remain safe, visually uniform, and mechanically stable under operating stresses.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between a point load and a uniform load?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A point load (concentrated force) concentrates its entire weight at a single localized spot on a beam. A uniform load (Uniformly Distributed Load or UDL) distributes its weight evenly along the entire length of the span, such as a concrete floor slab or snow accumulation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does Young's Modulus (E) affect structural bending?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Young's Modulus is a fundamental mechanical property that quantifies a material's intrinsic stiffness. A higher value indicates a stiffer material (like structural steel at 200 GPa) that will experience minimal deflection compared to a more flexible material (like structural lumber or soft aluminum) under identical loads.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What are standard acceptable deflection limits in building codes?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Deflection thresholds are governed by regional codes like the IBC in the United States or IS 456 / IS 800 in India. A frequent threshold for floors under full live loads is L/360, which implies the absolute maximum allowed vertical sag cannot exceed the total span length divided by 360.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this calculator process both metric and imperial units?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes. This online tool completely bridges the gap between metric and imperial systems. You can enter forces in Newtons, Kilonewtons, or Pounds-force, lengths in meters or inches, and material properties in GPa or psi to receive perfectly normalized answers instantly.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is the Area Moment of Inertia critical for calculation?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The Area Moment of Inertia (I) defines how a geometric cross-section distributes its material relative to its neutral bending axis. A tall I-beam standing upright features a much higher moment of inertia than the same I-beam turned flat on its side, providing far superior resistance to vertical sagging.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL TRADING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Engineering Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Streamline your professional engineering computations and structural designs using our comprehensive collection of free technical calculators below:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/engineering/belt-length-pulley-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Belt Length & Pulley Speed</a>
          <a href="/calculator/engineering/capacitor" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Capacitor Charge Calculator</a>
          <a href="/calculator/engineering/concrete-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volume</a>
          <a href="/calculator/engineering/electrical-power-loss" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Electrical Power Loss</a>
          <a href="/calculator/engineering/fluid-mechanics-reynolds" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Reynolds Number (Fluid Mechanics)</a>
          <a href="/calculator/engineering/frequency-wavelength" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Frequency & Wavelength</a>
          <a href="/calculator/engineering/gear-ratio-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Gear Ratio & Speed</a>
          <a href="/calculator/engineering/ohms-law-power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ohm's Law & Power</a>
          <a href="/calculator/engineering/rc-circuit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">RC Circuit Time Constant</a>
          <a href="/calculator/engineering/stress-strain" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Stress & Strain</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Structural Load</a>
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ideal Gas Law</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Torque Calculator</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Transformer Turn Ratio</a>
        </div>
      </section>
    </div>
  );
}