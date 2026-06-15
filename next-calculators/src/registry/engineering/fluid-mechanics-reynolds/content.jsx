import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Reynolds Number Calculator | Fluid Flow Regime Estimator
  2. META DESCRIPTION: Calculate the Reynolds Number (Re) to determine laminar, transitional, or turbulent fluid flows. Supports reverse solving for velocity, density, viscosity, and pipe diameter.
  3. URL SLUG: /calculator/engineering/fluid-mechanics-reynolds
  4. H1 TITLE: Reynolds Number Calculator (Fluid Mechanics)
  
  11. SEO KEYWORDS:
      - Primary Keyword: reynolds number calculator
      - Secondary Keywords: fluid mechanics flow regimes, laminar vs turbulent flow, calculate fluid velocity, dynamic viscosity estimation, pipe diameter characterization, dimensionless reynolds ratio, inertial vs viscous forces, water pipe flow dynamics, mechanical engineering fluid solver, moody diagram friction factor.
      - Long-Tail Keywords: how to find reynolds number without density, calculate transition flow in circular pipes, multi unit fluid dynamics converter, solve for pipe velocity using reynolds number, fluid mechanics application problems with answers.
  =========================================================================
*/

export default function FluidMechanicsContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly does the Reynolds Number tell an engineer about a system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Reynolds Number (Re) is a dimensionless quantity that measures the ratio of inertial forces to viscous forces in a moving fluid. A low Reynolds number indicates that viscous forces dominate, producing a smooth, parallel, laminar flow. A high Reynolds number indicates that inertial forces dominate, causing fluid particles to move in chaotic, intersecting paths, which creates turbulent flow. This tells engineers how the fluid will transmit energy, cause friction loss, and mix components."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the Reynolds Number completely dimensionless?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Reynolds Number has no unit of measurement because when you multiply the units of density, velocity, and characteristic length, and then divide by the unit of dynamic viscosity, all physical dimensions (Mass, Length, and Time) completely cancel out. This allows engineers to compare completely different setups—like testing a small model airplane in a pressurized wind tunnel to predict how a full-sized jet will behave in the open atmosphere."
        }
      },
      {
        "@type": "Question",
        "name": "What are the exact limits for flow regimes in circular pipe systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For fluid moving inside a standard circular closed pipe, the generally accepted industrial boundaries are: Laminar Flow occurs when Re is less than 2,300. Transitional Flow occurs when Re is between 2,300 and 4,000, where the flow shifts between smooth and unstable patterns. Turbulent Flow occurs when Re is greater than 4,000, creating stable, highly mixed eddies along the pipe infrastructure."
        }
      },
      {
        "@type": "Question",
        "name": "How does fluid temperature affect the calculated Reynolds Number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Temperature changes the physical properties of a fluid, particularly its dynamic viscosity. For liquids like water or oil, an increase in temperature breaks internal molecular bonds, significantly lowering viscosity. According to the formula, lowering viscosity increases the Reynolds Number, making the flow more likely to become turbulent. For gases, the opposite occurs: higher temperatures increase molecular collisions, raising viscosity and lowering the Reynolds Number."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between dynamic viscosity and kinematic viscosity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dynamic viscosity (μ) measures a fluid's absolute internal resistance to gradual deformation by shear stress (its thickness). Kinematic viscosity (ν) is simply the dynamic viscosity divided by the fluid's density (ν = μ / ρ). If you are using kinematic viscosity, the Reynolds Number equation simplifies to Re = (v × D) / ν, bypassing the need to input density separately."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 font-sans">
      
      {/* STRUCTURED DATA FOR SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Reynolds Number Calculator (Fluid Mechanics)
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          In fluid mechanics, civil infrastructure planning, aeronautical design, and chemical manufacturing, the <strong>Reynolds Number (Re)</strong> is a fundamental parameter. Named after the physicist Osborne Reynolds, this dimensionless index acts as a primary predictor for fluid behavior. It helps engineers determine whether a fluid running through a pipe line or passing across an external surface will move in a clean, predictable track or turn into a chaotic, mixing vortex.
        </p>
        <p className="mb-4">
          Understanding these characteristics is essential for analyzing system performance. Fluid flow patterns directly affect pressure drops, friction losses along pipe walls, heat transfer rates, and structural load distribution. Our <strong>Reynolds Number Calculator</strong> is designed to simplify these calculations, allowing you to quickly solve for any missing parameter within the governing equation.
        </p>
        <p>
          Whether you are designing city water distribution grids under India's Jal Jeevan Mission, managing industrial chemical lines in the USA, or studying mechanical boundary layers in an academic lab, our application manages all component unit conversions automatically.
        </p>
      </section>

      {/* --- REVERSE SOLVER MECHANICAL EXPLANATION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Flexible Fluid Analysis</h2>
        <p className="mb-4">
          Most basic reference systems only calculate the final Reynolds value from a fixed set of parameters. However, practical engineering challenges often require working backward. For example, if you know a fluid loop must remain laminar to prevent foaming or structural stress, you may need to determine the maximum allowed flow velocity or the ideal pipe diameter to keep the system stable.
        </p>
        <p className="mb-4">
          Our calculator features an integrated multi-directional solver. By using the main calculation dropdown menu, you can configure the system to isolate and solve for any individual variable: <strong>Reynolds Number (Re)</strong>, <strong>Fluid Density (ρ)</strong>, <strong>Flow Velocity (v)</strong>, <strong>Characteristic Diameter (D)</strong>, or <strong>Dynamic Viscosity (μ)</strong>. 
        </p>
        <p>
          This capability eliminates manual algebraic conversions, reducing the risk of errors with unit scaling and helping you optimize your fluid systems efficiently.
        </p>
      </section>

      {/* --- HOW TO USE WITH EXPLICIT DROPDOWN PARAMETERS MAPPED --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Multi-Variable Solver</h2>
        <p className="mb-4 text-sm text-gray-700">
          The calculator processes complex fluid equations across multiple measurement systems. Follow these steps to configure your analysis:
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">1. Select Target Parameter to Solve:</span>
            <p className="mt-1">
              Use the primary dropdown selector to choose the variable you want to isolate. You can select <em>Reynolds Number</em>, <em>Density</em>, <em>Velocity</em>, <em>Diameter</em>, or <em>Dynamic Viscosity</em>.
            </p>
          </div>
          <div>
            <span className="font-bold block text-gray-900">2. Input Your Values and Select Corresponding Units:</span>
            <ul className="list-disc pl-6 space-y-2 mt-1">
              <li>
                <strong>Fluid Density (ρ):</strong> Enter the mass per unit volume. Available units include <strong>kilograms per cubic meter (kg/m³)</strong>, <strong>grams per cubic centimeter (g/cm³)</strong>, or <strong>pounds per cubic foot (lb/ft³)</strong>.
              </li>
              <li>
                <strong>Flow Velocity (v):</strong> Enter the average speed of the fluid stream. Available units include <strong>meters per second (m/s)</strong>, <strong>centimeters per second (cm/s)</strong>, <strong>feet per second (ft/s)</strong>, or <strong>inches per second (in/s)</strong>.
              </li>
              <li>
                <strong>Characteristic Length / Pipe Diameter (D):</strong> Enter the internal width of the channel. Available units include <strong>meters (m)</strong>, <strong>centimeters (cm)</strong>, <strong>millimeters (mm)</strong>, <strong>feet (ft)</strong>, or <strong>inches (in)</strong>.
              </li>
              <li>
                <strong>Dynamic Viscosity (μ):</strong> Enter the absolute internal shear friction factor. Available units include <strong>Pascal-seconds (Pa·s)</strong>, <strong>Centipoise (cP)</strong>, <strong>Poise (P)</strong>, or <strong>pounds per foot-second (lb/ft·s)</strong>.
              </li>
            </ul>
          </div>
          <div>
            <span className="font-bold block text-gray-900">3. Evaluate Output Metrics:</span>
            <p className="mt-1">
              The tool automatically converts all inputs to standard metric baselines to perform the calculation, then displays the solved variable in your chosen unit along with a clear indication of the active <strong>Flow Regime</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* --- FLUID REGIMES DETAILED ANALYTICS --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Deep Dive into Flow Regimes: Laminar, Transitional, and Turbulent</h2>
        <p className="mb-4">
          The behavior of a fluid moving through a closed conduit is classified into three distinct regimes based on its calculated Reynolds Number:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <h3 className="font-bold text-emerald-950 mb-1">Laminar Flow (Re &lt; 2300)</h3>
            <p className="text-xs text-emerald-900">
              The fluid moves in smooth, parallel layers with minimal mixing. Viscous forces dominate over inertial forces, dampening structural disturbances. This state is common in high-viscosity fluids like hydraulic oils or slow-moving microfluidic channels.
            </p>
          </div>
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <h3 className="font-bold text-amber-950 mb-1">Transitional Flow (2300 ≤ Re ≤ 4000)</h3>
            <p className="text-xs text-amber-900">
              The flow exhibits unstable characteristics, shifting between smooth layers and chaotic eddies. Minor changes in pipe roughness or flow speed can alter system behavior, making pressure drops difficult to predict accurately.
            </p>
          </div>
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="font-bold text-red-950 mb-1">Turbulent Flow (Re &gt; 4000)</h3>
            <p className="text-xs text-red-900">
              Inertial forces dominate, causing rapid fluid mixing and chaotic eddies. Turbulent flow increases internal heat transfer efficiency but also leads to higher friction losses and significant pressure drops across the pipeline network.
            </p>
          </div>
        </div>
      </section>

      {/* --- MATHEMATHICS & CONVERSION FORMULA --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas and Derived Layouts</h2>
        <p className="mb-4">
          The baseline relationship for the Reynolds Number compares the momentum of the fluid mass to its internal shear resistance:
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-1">Standard Reynolds Number Formula</h3>
            <div className="text-xl text-center font-mono font-bold text-blue-700 py-3 bg-white border border-blue-100 rounded-lg my-2">
              Re = (ρ × v × D) / μ
            </div>
            <p className="text-xs text-gray-500">
              Where: <strong>ρ</strong> = Fluid Density (kg/m³), <strong>v</strong> = Flow Velocity (m/s), <strong>D</strong> = Characteristic Length or Internal Pipe Diameter (m), and <strong>μ</strong> = Dynamic Viscosity (Pa·s).
            </p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <h4 className="font-bold text-gray-800 mb-2">Derived Formulas for Reverse-Solving</h4>
            <p className="text-sm text-gray-600 mb-3">
              When working with specified operational limits, our calculation engine rearranges the baseline equation to isolate your target variable:
            </p>
            <div className="grid grid-cols-2 gap-2 text-center font-mono text-xs text-blue-900">
              <div className="p-2 bg-white border rounded">Velocity: v = (Re × μ) / (ρ × D)</div>
              <div className="p-2 bg-white border rounded">Diameter: D = (Re × μ) / (ρ × v)</div>
              <div className="p-2 bg-white border rounded">Density: ρ = (Re × μ) / (v × D)</div>
              <div className="p-2 bg-white border rounded">Viscosity: μ = (ρ × v × D) / Re</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PRACTICAL STEP-BY-STEP WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Engineering Worked Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step design scenarios to see how different parameters affect flow regime classification.
        </p>

        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Sizing Municipal Water Mains (Metric System)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A civil engineer in India is designing a clean water supply branch line using a 150 mm internal diameter pipe. Water flows at a velocity of 1.5 m/s. The density of water is 1,000 kg/m³, and its dynamic viscosity at ambient temperature is 0.001002 Pa·s.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p><strong>Step 1: Standardize Units to Metric Baseline</strong></p>
            <p>Diameter (D) = 150 mm = 0.15 meters</p>
            <p>Velocity (v) = 1.5 m/s | Density (ρ) = 1000 kg/m³ | Viscosity (μ) = 0.001002 Pa·s</p>
            <p><strong>Step 2: Apply the Governing Equation</strong></p>
            <p>Re = (1000 × 1.5 × 0.15) / 0.001002</p>
            <p>Re = 225 / 0.001002</p>
            <p><strong>Step 3: Analyze the Results</strong></p>
            <p className="font-bold text-blue-800">Re = 224,551</p>
            <p className="text-xs text-red-700 italic">Conclusion: Since 224,551 is well above 4,000, the flow is highly Turbulent. The engineer must account for significant friction losses when sizing the system pumps.</p>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Industrial Lubrication Loop (Imperial System)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A mechanical design specialist in the USA needs to find the maximum allowed velocity to maintain smooth, laminar oil flow inside a 2-inch industrial lubrication line. The oil has a density of 55 lb/ft³ and a high dynamic viscosity of 0.05 lb/ft·s. To ensure a safe laminar state, the target Reynolds Number is set to 1,800.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p><strong>Step 1: Convert Variables to Base Imperial Feet</strong></p>
            <p>Diameter (D) = 2 inches = 2 / 12 = 0.1667 feet</p>
            <p>Target Re = 1800 | Density (ρ) = 55 lb/ft³ | Viscosity (μ) = 0.05 lb/ft·s</p>
            <p><strong>Step 2: Rearrange to Solve for Velocity (v)</strong></p>
            <p>v = (Re × μ) / (ρ × D)</p>
            <p>v = (1800 × 0.05) / (55 × 0.1667)</p>
            <p>v = 90 / 9.1685</p>
            <p><strong>Step 3: Analyze the Results</strong></p>
            <p className="font-bold text-emerald-800">v = 9.82 feet per second</p>
            <p className="text-xs text-emerald-700 italic">Conclusion: The system velocity must be kept below 9.82 ft/s to prevent the heavy oil from transitioning into an unstable flow state.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What exactly does the Reynolds Number tell an engineer about a system?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The Reynolds Number (Re) is a dimensionless quantity that measures the ratio of inertial forces to viscous forces in a moving fluid. A low Reynolds number indicates that viscous forces dominate, producing a smooth, parallel, laminar flow. A high Reynolds number indicates that inertial forces dominate, causing fluid particles to move in chaotic, intersecting paths, which creates turbulent flow. This tells engineers how the fluid will transmit energy, cause friction loss, and mix components.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is the Reynolds Number completely dimensionless?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The Reynolds Number has no unit of measurement because when you multiply the units of density, velocity, and characteristic length, and then divide by the unit of dynamic viscosity, all physical dimensions (Mass, Length, and Time) completely cancel out. This allows engineers to compare completely different setups—like testing a small model airplane in a pressurized wind tunnel to predict how a full-sized jet will behave in the open atmosphere.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What are the exact limits for flow regimes in circular pipe systems?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              For fluid moving inside a standard circular closed pipe, the generally accepted industrial boundaries are: Laminar Flow occurs when Re is less than 2,300. Transitional Flow occurs when Re is between 2,300 and 4,000, where the flow shifts between smooth and unstable patterns. Turbulent Flow occurs when Re is greater than 4,000, creating stable, highly mixed eddies along the pipe infrastructure.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does fluid temperature affect the calculated Reynolds Number?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Temperature changes the physical properties of a fluid, particularly its dynamic viscosity. For liquids like water or oil, an increase in temperature breaks internal molecular bonds, significantly lowering viscosity. According to the formula, lowering viscosity increases the Reynolds Number, making the flow more likely to become turbulent. For gases, the opposite occurs: higher temperatures increase molecular collisions, raising viscosity and lowering the Reynolds Number.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between dynamic viscosity and kinematic viscosity?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Dynamic viscosity (μ) measures a fluid's absolute internal resistance to gradual deformation by shear stress (its thickness). Kinematic viscosity (ν) is simply the dynamic viscosity divided by the fluid's density (ν = μ / ρ). If you are using kinematic viscosity, the Reynolds Number equation simplifies to Re = (v × D) / ν, bypassing the need to input density separately.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL ENGINEERING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Engineering Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your structural designs, thermodynamic evaluations, and system configurations with our complete suite of high-precision web analysis tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/engineering/beam-deflection" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Beam Deflection Analysis</a>
          <a href="/calculator/engineering/belt-length-pulley-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Belt Length & Pulley Speed</a>
          <a href="/calculator/engineering/capacitor" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Capacitor Charge & Energy</a>
          <a href="/calculator/engineering/concrete-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volumetric Estimation</a>
          <a href="/calculator/engineering/electrical-power-loss" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Electrical Power Loss & Voltage Drop</a>
          <a href="/calculator/engineering/frequency-wavelength" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Frequency & Wavelength Model</a>
          <a href="/calculator/engineering/gear-ratio-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Gear Ratio & Speed Solver</a>
          <a href="/calculator/engineering/ohms-law-power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ohm's Law & Circuit Power</a>
          <a href="/calculator/engineering/rc-circuit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">RC Circuit Time Constant</a>
          <a href="/calculator/engineering/stress-strain" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Stress & Strain Material Mechanics</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Structural Load Distribution</a>
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ideal Gas Law Dynamics</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Torque Calculation Tool</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}