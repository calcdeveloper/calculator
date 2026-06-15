import React from 'react';

/* =========================================================================
  SEO METADATA & CONFIGURATION
  =========================================================================
  1. SEO TITLE: Stress & Strain Calculator | Hooke's Law & Material Strength
  2. META DESCRIPTION: Calculate mechanical stress, engineering strain, cross-sectional area, and Young's Modulus. Supports metric and imperial systems for structural engineers.
  3. URL SLUG: /calculator/engineering/stress-strain
  4. H1 TITLE: Stress & Strain Calculator (Mechanics of Materials)

  11. SEO KEYWORDS:
      - Primary Keyword: stress and strain calculator
      - Secondary Keywords: mechanical stress computation, engineering strain analyzer, calculate youngs modulus, hookes law solver, cross sectional area load tool, material tensile strength analyzer, normal axial stress tool, structural steel elongation calculator, compressive force analyzer, yield point deformation solver.
      - Long-Tail Keywords: how to find stress from force and area, calculate strain from change in length, tensile testing stress strain curve formulas, mechanical properties of materials calculations, structural column compression calculation tools.
  =========================================================================
*/

export default function StressStrainContent() {
  // 12. STRUCTURED DATA (FAQ SCHEMA IN JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between engineering stress and true stress?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Engineering stress divides the applied load by the material's initial, original cross-sectional area before any deformation occurs. True stress divides the load by the instantaneous cross-sectional area at that exact moment. For most structural engineering calculations within the elastic limit, engineering stress provides a highly accurate approximation."
        }
      },
      {
        "@type": "Question",
        "name": "Why does strain not have any physical units of measurement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Strain is defined as the change in length divided by the initial original length. Because it divides a unit of length (such as millimeters or inches) by another identical unit of length, the units cancel out completely. It is a dimensionless ratio, though engineers frequently express it as a percentage or in microstrain units."
        }
      },
      {
        "@type": "Question",
        "name": "What does Young's Modulus signify regarding material behavior?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Young's Modulus of Elasticity (E) measures a solid material's fundamental stiffness. It quantifies how easily a material stretches or compresses when subjected to an axial load. Materials with a high Young's Modulus, like structural steel (approx. 200 GPa), are stiff and resist deformation, while materials with a low modulus, like aluminum or plastics, deform more easily under identical loads."
        }
      },
      {
        "@type": "Question",
        "name": "How does Hooke's Law apply to mechanical stress-strain calculations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Hooke's Law states that within a material's linear elastic region, the stress produced is directly proportional to the strain experienced. This relationship is written as Stress = Young's Modulus × Strain (σ = E × ε). Once a material passes its proportional limit or yield strength, it enters the plastic region where Hooke's Law is no longer valid and permanent deformation occurs."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator handle both tensile and compressive structural loads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The fundamental mathematical models for normal axial stress and strain apply equally to both tensile (pulling) and compressive (pushing) forces. Tensile forces and elongations are traditionally entered or interpreted as positive values, while compressive forces and structural contractions are treated as negative values."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 font-sans">
      
      {/* STRUCTURED DATA INJECTION */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- 5. INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Stress & Strain Calculator (Mechanics of Materials)
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          In civil engineering, mechanical design, aerospace manufacturing, and materials science, understanding how physical components respond to external forces is essential. Whether you are validating a structural steel beam supporting an industrial complex, verifying an engine crankshaft, or checking a component for a custom mechanism, calculating <strong>Stress</strong> and <strong>Strain</strong> ensures your structures can withstand external loads without failure.
        </p>
        <p className="mb-4">
          Our advanced <strong>Stress & Strain Calculator</strong> helps you verify design limits by combining Hooke's Law, geometric parameters, and raw loading data into an interactive calculation engine. It supports multi-unit systems—handling loads from Newtons to thousands of pounds, and cross-sections from square millimeters to square inches—allowing you to quickly identify structural vulnerabilities, material deflections, and safety margins.
        </p>
        <p>
          This practical utility simplifies material verification. It lets you quickly convert metrics across global engineering frameworks, whether you are analyzing a high-rise foundation under Bureau of Indian Standards (BIS) specifications or running structural calculations aligned with American Institute of Steel Construction (AISC) standards.
        </p>
      </section>

      {/* --- CORE VARIABLES GLOSSARY --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Mechanical Properties & Variables</h2>
        <p className="mb-6 text-gray-600">
          To understand structural mechanics, it helps to review the essential variables that define a material's behavior under load:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Applied Force (F)</span>
            <p className="text-sm text-gray-600">
              The external mechanical load acting along a component's longitudinal axis. This load can pull the material apart (tensile force) or squeeze it together (compressive force). It is measured in <strong>Newtons (N)</strong>, Kilonewtons (kN), or Pound-force (lbf).
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Cross-Sectional Area (A)</span>
            <p className="text-sm text-gray-600">
              The total surface plane area measured perpendicular to the applied force vector. A larger cross-sectional area distributes structural pressure across more material, lowering overall internal mechanical stress. It is measured in <strong>Square Millimeters (mm²)</strong> or <strong>Square Inches (in²)</strong>.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Normal Stress (σ - Sigma)</span>
            <p className="text-sm text-gray-600">
              The internal intensity of force distributed across a material's unit area. It represents the material's internal resistance to deformation and is measured in <strong>Megapascals (MPa)</strong>, Pascals (Pa), or Pounds per Square Inch (psi).
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Engineering Strain (ε - Epsilon)</span>
            <p className="text-sm text-gray-600">
              A dimensionless ratio indicating a material's relative physical deformation under load. It compares the change in length against the material's original dimensions. It is often expressed as a percentage (%) or in direct fractional terms.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm md:col-span-2">
            <span className="font-bold text-gray-900 block text-lg mb-1">Young's Modulus of Elasticity (E)</span>
            <p className="text-sm text-gray-600">
              A metric that defines a material's intrinsic stiffness within its linear elastic region. Named after scientist Thomas Young, this value indicates how much stress is needed to produce a given amount of elastic strain. Stiff materials like structural steel possess high values (typically measured in <strong>Gigapascals (GPa)</strong> or ksi), whereas flexible materials feature low values.
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. HOW TO USE SECTION WITH ALL UI DROPDOWN ENTRIES --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Stress & Strain Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          This calculator uses an open-input layout. By entering any set of known engineering variables, the calculation engine handles unit normalization and resolves the remaining properties automatically:
        </p>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">1. Select Your Target Calculation Mode</span>
            <p className="mt-1">
              Determine which material properties you want to solve for. You can choose to calculate stress based on geometry, evaluate structural elongation, or calculate Young's Modulus from experimental test data.
            </p>
          </div>

          <div>
            <span className="font-bold block text-gray-900">2. Enter Known Values and Configure Dropdown Units</span>
            <p className="mt-1">
              Input your available measurements into the corresponding fields. Ensure your metrics align with the respective dropdown menus:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-gray-600">
              <li><strong>Force Dropdown Units:</strong> Newtons (N), Kilonewtons (kN), Meganewtons (MN), Pound-force (lbf), Kips (kip).</li>
              <li><strong>Area Dropdown Units:</strong> Square meters (m²), Square millimeters (mm²), Square centimeters (cm²), Square inches (in²), Square feet (ft²).</li>
              <li><strong>Stress Dropdown Units:</strong> Pascals (Pa), Kilopascals (kPa), Megapascals (MPa), Gigapascals (GPa), psi, ksi.</li>
              <li><strong>Strain Dropdown Options:</strong> Pure Ratio, Percent Distortion (%).</li>
              <li><strong>Modulus (E) Dropdown Units:</strong> Pascals (Pa), Megapascals (MPa), Gigapascals (GPa), psi, ksi.</li>
              <li><strong>Length Fields (L₀ & ΔL):</strong> Meters (m), Millimeters (mm), Centimeters (cm), Inches (in), Feet (ft).</li>
            </ul>
          </div>

          <div>
            <span className="font-bold block text-gray-900">3. View Results</span>
            <p className="mt-1">
              The calculator normalizes all inputs to base SI metrics, resolves the remaining parameters, and updates the values dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* --- 7. FORMULA SECTION WITH DIAGRAM PLACEHOLDER --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Equations Governing Material Behavior</h2>
        <p className="mb-4">
          Material deformation analysis relies on three primary equations. By combining these formulas, the calculator can determine any missing property in a mechanical lifecycle.
        </p>

        

[Image of stress strain curve diagram]


        <div className="space-y-4 mt-4">
          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-mono block font-bold text-blue-950 text-base">Equation 1: Normal Mechanical Stress</span>
            <p className="text-sm text-gray-600 mt-1">
              Stress is calculated by dividing the total axial force by the cross-sectional area over which it is distributed:
            </p>
            <div className="font-mono bg-white p-2 rounded text-center text-blue-900 font-bold border my-2 text-sm">
              σ = F / A
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-mono block font-bold text-blue-950 text-base">Equation 2: Engineering Linear Strain</span>
            <p className="text-sm text-gray-600 mt-1">
              Strain is calculated by dividing the material's total elongation or contraction by its original initial length:
            </p>
            <div className="font-mono bg-white p-2 rounded text-center text-blue-900 font-bold border my-2 text-sm">
              ε = ΔL / L₀
            </div>
          </div>

          <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
            <span className="font-mono block font-bold text-blue-950 text-base">Equation 3: Hooke's Law (Elastic Modulus)</span>
            <p className="text-sm text-gray-600 mt-1">
              Within a material's elastic limit, stress and strain scale proportionally according to Young's Modulus:
            </p>
            <div className="font-mono bg-white p-2 rounded text-center text-blue-900 font-bold border my-2 text-sm">
              E = σ / ε
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. STEP BY STEP EXAMPLES FROM REGIONAL MARKETS --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Engineering Worked Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step examples to see how our calculator handles real-world structural design scenarios.
        </p>

        {/* Example 1: Indian Infrastructure Project */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Verifying a Structural Steel Column Supporting an Infrastructure Deck (India)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A structural engineer in Mumbai is evaluating an IS 2062 grade steel column under a compressive vertical load of <strong>450 Kilonewtons (450,000 N)</strong>. The column features a cross-sectional area of <strong>2,500 Square Millimeters (mm²)</strong>. They need to find the internal normal stress and verify it sits safely below the material's yield strength.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Metrics & Normalize to SI Units</strong></p>
            <p>Force (F) = 450 kN = 450,000 Newtons</p>
            <p>Area (A) = 2,500 mm² = 0.0025 Square Meters (m²)</p>
            <p><strong>Step 2: Apply the Normal Stress Formula (σ = F / A)</strong></p>
            <p>σ = 450,000 N / 0.0025 m²</p>
            <p>σ = 180,000,000 Pascals = 180 MPa</p>
            <p><strong>Step 3: Evaluate Material Strain given Young's Modulus (E = 200 GPa for Steel)</strong></p>
            <p>ε = σ / E = 180,000,000 Pa / 200,000,000,000 Pa = 0.0009 (or 0.09% deformation)</p>
            <p className="text-blue-800 font-bold mt-2">Calculator Output: Internal Stress = 180.00 MPa | Resulting Elastic Strain = 0.0009</p>
          </div>
        </div>

        {/* Example 2: US Aerospace Component */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Analyzing an Aluminum Aircraft Tie-Rod Under Tension (USA)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An aerospace structural designer in Ohio is testing a solid aluminum suspension linkage with an initial length of <strong>24.0 Inches</strong> and a cross-sectional area of <strong>0.75 Square Inches (in²)</strong>. During a tension test, an axial load of <strong>15,000 Pound-force (lbf)</strong> is applied. They need to determine the internal stress and the resulting component elongation.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Metrics</strong></p>
            <p>Force (F) = 15,000 lbf | Area (A) = 0.75 in² | Length (L₀) = 24.0 in | E for Aluminum = 10,000,000 psi</p>
            <p><strong>Step 2: Solve for Normal Working Stress (σ = F / A)</strong></p>
            <p>σ = 15,000 lbf / 0.75 in² = 20,000 psi (or 20.0 ksi)</p>
            <p><strong>Step 3: Solve for Total Elongation (ΔL) by linking Stress and Strain</strong></p>
            <p>ε = σ / E = 20,000 psi / 10,000,000 psi = 0.0020</p>
            <p>ΔL = ε × L₀ = 0.0020 × 24.0 in = 0.048 Inches</p>
            <p className="text-emerald-800 font-bold mt-2">Calculator Output: Tensile Stress = 20.00 ksi | Component Elongation = 0.048 Inches</p>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between engineering stress and true stress?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Engineering stress divides the applied load by the material's initial, original cross-sectional area before any deformation occurs. True stress divides the load by the instantaneous cross-sectional area at that exact moment. For most structural engineering calculations within the elastic limit, engineering stress provides a highly accurate approximation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why does strain not have any physical units of measurement?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Strain is defined as the change in length divided by the initial original length. Because it divides a unit of length (such as millimeters or inches) by another identical unit of length, the units cancel out completely. It is a dimensionless ratio, though engineers frequently express it as a percentage or in microstrain units.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What does Young's Modulus signify regarding material behavior?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Young's Modulus of Elasticity (E) measures a solid material's fundamental stiffness. It quantifies how easily a material stretches or compresses when subjected to an axial load. Materials with a high Young's Modulus, like structural steel (approx. 200 GPa), are stiff and resist deformation, while materials with a low modulus, like aluminum or plastics, deform more easily under identical loads.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does Hooke's Law apply to mechanical stress-strain calculations?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Hooke's Law states that within a material's linear elastic region, the stress produced is directly proportional to the strain experienced. This relationship is written as Stress = Young's Modulus × Strain (σ = E × ε). Once a material passes its proportional limit or yield strength, it enters the plastic region where Hooke's Law is no longer valid and permanent deformation occurs.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this calculator handle both tensile and compressive structural loads?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes. The fundamental mathematical models for normal axial stress and strain apply equally to both tensile (pulling) and compressive (pushing) forces. Tensile forces and elongations are traditionally entered or interpreted as positive values, while compressive forces and structural contractions are treated as negative values.
            </div>
          </details>
        </div>
      </section>

      {/* --- 10. INTERNAL LINKING DIRECTORY HUB --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Explore Other Engineering Category Tools</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your technical research and validation workflows using our comprehensive suite of engineering design tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/engineering/beam-deflection" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Beam Deflection Analysis</a>
          <a href="/calculator/engineering/belt-length-pulley-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Belt Length & Pulley Speed</a>
          <a href="/calculator/engineering/capacitor" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Capacitor Charge Tool</a>
          <a href="/calculator/engineering/concrete-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Concrete Volumetric Estimator</a>
          <a href="/calculator/engineering/electrical-power-loss" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Electrical Power Loss</a>
          <a href="/calculator/engineering/fluid-mechanics-reynolds" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Reynolds Number Analyzer</a>
          <a href="/calculator/engineering/frequency-wavelength" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Frequency & Wavelength Converter</a>
          <a href="/calculator/engineering/gear-ratio-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Gear Ratio & RPM Solver</a>
          <a href="/calculator/engineering/ohms-law-power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Ohm's Law & Power Solver</a>
          <a href="/calculator/engineering/rc-circuit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">RC Circuit Time Constant</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Structural Load Distribution</a>
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Ideal Gas Law Solver</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Torque Calculation</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}