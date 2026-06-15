import React from 'react';

/* =========================================================================
  SEO METADATA & CONFIGURATION
  =========================================================================
  1. SEO TITLE: Ideal Gas Law Calculator | PV=nRT Thermodynamics Tool
  2. META DESCRIPTION: Calculate ideal gas pressure, volume, moles, and temperature instantly. Supports metric and imperial thermodynamic units including Kelvin, Celsius, atmospheres, and Pascals.
  3. URL SLUG: /calculator/engineering/thermodynamics-ideal-gas
  4. H1 TITLE: Ideal Gas Law Calculator (Thermodynamics)

  11. SEO KEYWORDS:
      - Primary Keyword: ideal gas law calculator
      - Secondary Keywords: thermodynamic state solver, calculate gas pressure volume, pv nrt equation tool, universal gas constant wizard, chemical engineering gas property analyzer, kelvin temperature gas conversion, boyles law calculator, charles law solver, molar volume computation, pressure vessel density checker.
      - Long-Tail Keywords: how to find number of moles of gas, rearranging pv nrt for temperature, calculating gas volume in cubic meters, ideal gas vs real gas variance calculator, thermal engineering gas expansion formula.
  =========================================================================
*/

export default function ThermodynamicsContent() {
  // 12. STRUCTURED DATA (FAQ SCHEMA IN JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why must temperature always be converted to Kelvin or Rankine in the Ideal Gas Law?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Ideal Gas Law describes a thermodynamic system relative to absolute zero—the theoretical state where all molecular kinetic energy ceases. Empirical scales like Celsius and Fahrenheit have arbitrary zero points based on the freezing points of substances, which can lead to mathematically impossible zero or negative values. Absolute scales like Kelvin and Rankine anchor directly to molecular motion, ensuring valid proportions."
        }
      },
      {
        "@type": "Question",
        "name": "Under what physical conditions does the Ideal Gas Law break down?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The ideal gas model assumes that gas particles occupy zero physical volume and experience zero intermolecular forces. In reality, under extremely high pressures, gas molecules are forced close together, making their physical volume significant. Similarly, at very low temperatures, molecular kinetic energy drops, allowing intermolecular attractions (van der Waals forces) to pull particles together. In these regimes, real-gas equations like the van der Waals or Peng-Robinson equations should be used instead."
        }
      },
      {
        "@type": "Question",
        "name": "How does the value of the universal gas constant (R) change with different unit systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The numerical value of the universal gas constant (R) depends entirely on the units chosen for pressure, volume, and temperature. In standard SI metrics (Pascals, cubic meters, Kelvin), R equals 8.31446 J/(mol·K). When working with traditional chemistry units like atmospheres and liters, R shifts to 0.082057 L·atm/(mol·K). Our calculation engine handles these unit normalizations automatically behind the scenes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between the universal gas constant and the specific gas constant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The universal gas constant (R) is a fundamental physical constant applicable to all ideal gases on a molar basis. The specific gas constant (R_specific), commonly used in aerospace and fluid mechanics, is calculated by dividing the universal gas constant by the molecular weight of a specific gas mixture (R_specific = R / M). For example, the specific gas constant for dry air is roughly 287.05 J/(kg·K)."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator be used to find the density of a gas?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, indirectly. By using the calculated number of moles (n) from this tool, multiplying it by the molecular weight of the gas to find its mass (m), and then dividing that mass by the system's volume (V), you can easily determine the density of your gas mixture."
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
          Ideal Gas Law Calculator (Thermodynamics)
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          In chemical processing, HVAC engineering, high-pressure storage design, and aerospace systems, predicting how gas mixtures respond to environmental changes is a core operational requirement. Whether you are validating a containment vessel for natural gas in the USA or checking ammonia reaction parameters at a chemical plant in India, understanding the interplay between pressure, volume, and heat is vital to system safety and performance.
        </p>
        <p className="mb-4">
          Our professional-grade <strong>Ideal Gas Law Calculator</strong> automates your thermodynamic workflows by evaluating the state equation for an ideal gas system. By entering any three known parameters, the calculation engine instantly resolves the missing property. It streamlines complex multi-unit systems, allowing you to easily work with metrics ranging from standard atmospheres and liters to absolute pascals and cubic meters.
        </p>
        <p>
          This practical calculation tool acts as an all-in-one solver for Boyle's, Charles's, Gay-Lussac's, and Avogadro's empirical laws. It automatically manages unit conversions and applies absolute scale adjustments so you can focus on building safer, more efficient systems.
        </p>
      </section>

      {/* --- EXTRA CORE THEORY SECTION TO MATCH 1200+ WORD COUNT --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Theoretical Foundation of Gas Mechanics</h2>
        <p className="mb-4">
          The behavior of gases is governed by the Kinetic Molecular Theory. This framework models a gas as an assembly of countless microscopic particles moving in random, constant paths. To simplify these complex interactions for practical engineering, the concept of an <strong>Ideal Gas</strong> was created. This idealization makes two main assumptions:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-600">
          <li>The gas molecules themselves occupy an infinitesimal fraction of the total volume of their container.</li>
          <li>The molecules do not exert any attractive or repulsive intermolecular forces on each other, interacting only through perfectly elastic collisions.</li>
        </ul>
        <p className="mb-4">
          While no real-world gas fits this description perfectly, common gases like ambient nitrogen, oxygen, helium, and atmospheric air behave almost identically to an ideal gas under typical operational pressures and temperatures. This makes the ideal gas model highly accurate for most industrial engineering applications.
        </p>
        <p>
          When real gases are subjected to extreme compression or deep cryogenic cooling, their intermolecular spacing drops. In these cases, minor variances can emerge between ideal predictions and real-world behaviors. For general piping networks, atmospheric venting systems, and pressure vessel specifications, this calculator provides a reliable baseline for engineering design.
        </p>
      </section>

      {/* --- GLOSSARY OF VARIABLES --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thermodynamic State Variables Explained</h2>
        <p className="mb-6 text-gray-600">
          An ideal gas system is defined by four core state variables. Adjusting any one of these properties creates a predictable, cascading change across the rest of the system:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Absolute Pressure (P)</span>
            <p className="text-sm text-gray-600">
              The perpendicular force exerted by colliding gas molecules per unit surface area of the container walls. High pressure indicates that gas particles are tightly confined or moving fast. It can be measured in <strong>Pascals (Pa)</strong>, Kilopascals (kPa), Atmospheres (atm), or Pounds per Square Inch (psi).
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Volumetric Capacity (V)</span>
            <p className="text-sm text-gray-600">
              The total three-dimensional space enclosed by a vessel or system boundaries. Since gases expand to fill any available space, the volume of the gas matches the volume of its container. It is measured in <strong>Liters (L)</strong>, Cubic Meters (m³), or Cubic Feet (ft³).
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Molar Quantity (n)</span>
            <p className="text-sm text-gray-600">
              The total amount of gas present in the system, measured in <strong>Moles (mol)</strong> or Kilomoles (kmol). One mole represents exactly 6.02214 × 10²³ individual molecules (Avogadro's number), allowing engineers to bridge microscopic particle counts with macroscopic weights.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Thermodynamic Temperature (T)</span>
            <p className="text-sm text-gray-600">
              A measure of the average kinetic energy of the gas molecules. To maintain proper mathematical proportions, gas equations require an absolute scale relative to absolute zero. This tool automatically converts relative inputs like <strong>Celsius (°C)</strong> and <strong>Fahrenheit (°F)</strong> into absolute <strong>Kelvin (K)</strong> or Rankine (°R).
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. HOW TO USE SECTION SHOWING SCREENSHOT DROPDOWN VALUES --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Ideal Gas Law Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          This system features a flexible interface that allows you to calculate any unknown variable. Simply enter your three known values, select the correct units from the dropdown menus, and leave the target field blank to find your answer:
        </p>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">1. Select Your Target Output Unit Configurations</span>
            <p className="mt-1">
              Identify the property you need to solve for and review the available units in the dropdown menus across each parameter field:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-gray-600">
              <li><strong>Pressure (P) Dropdown:</strong> Pascals (Pa), Kilopascals (kPa), Megapascals (MPa), Atmospheres (atm), Bar, Millibar, PSI, Torr, mmHg.</li>
              <li><strong>Volume (V) Dropdown:</strong> Cubic Meters (m³), Liters (L), Milliliters (mL), Cubic Centimeters (cm³), Cubic Feet (ft³), Gallons (gal).</li>
              <li><strong>Amount (n) Dropdown:</strong> Moles (mol), Kilomoles (kmol), Millimoles (mmol).</li>
              <li><strong>Temperature (T) Dropdown:</strong> Kelvin (K), Celsius (°C), Fahrenheit (°F), Rankine (°R).</li>
              <li><strong>Universal Gas Constant (R) Custom Field:</strong> Automatically adapts based on your chosen inputs, typically setting to 8.31446 J/(mol·K) or 0.082057 L·atm/(mol·K).</li>
            </ul>
          </div>

          <div>
            <span className="font-bold block text-gray-900">2. Input Your Known System Fields</span>
            <p className="mt-1">
              Enter your available system data into the three known fields. Ensure the chosen units match your source documentation exactly to keep the internal conversions accurate.
            </p>
          </div>

          <div>
            <span className="font-bold block text-gray-900">3. Review Results</span>
            <p className="mt-1">
              The engine normalizes all parameters to absolute SI units, computes the missing value, and displays the result across your selected units.
            </p>
          </div>
        </div>
      </section>

      {/* --- 7. FORMULA SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Modeling of the Ideal Gas Formula</h2>
        <p className="mb-4">
          The Ideal Gas Law combines several historical gas relationships—Boyle’s pressure-volume inverse scaling, Charles’s temperature-volume linearity, and Avogadro’s molar-volume ratio—into a single equation:
        </p>

        <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <span className="font-mono block font-bold text-center text-blue-900 text-xl py-2 bg-white rounded border shadow-sm">
            P × V = n × R × T
          </span>
          <p className="text-sm text-gray-600">
            This equation reveals a key concept in thermodynamics: the product of a gas's pressure and volume is directly proportional to its total thermal energy ($nRT$). To isolate and solve for a specific property, our calculator rearranges this core equation using the following variations:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-mono font-bold">
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Pressure</span>
              P = (n × R × T) / V
            </div>
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Volume</span>
              V = (n × R × T) / P
            </div>
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Moles</span>
              n = (P × V) / (R × T)
            </div>
          </div>
          <p className="text-xs text-gray-500 italic mt-2 text-center">
            *Reminder: All internal calculations convert relative temperatures to the absolute Kelvin scale ($K = °C + 273.15$) before processing.
          </p>
        </div>
      </section>

      {/* --- 8. WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Thermodynamic Real-World Worked Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step engineering scenarios to see how the ideal gas equation is applied in real-world situations:
        </p>

        {/* Example 1: American Nitrogen Storage Facility */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Checking Pressure Limits for a Nitrogen Storage Tank (USA)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A plant maintenance team in Texas is refilling a stationary steel container with a volume of <strong>150 Liters (L)</strong>. The system is loaded with <strong>6.5 Moles (mol)</strong> of dry nitrogen gas. Thermocouples show the internal temperature is resting at <strong>25°C</strong>. They need to calculate the internal pressure in atmospheres to confirm it meets safety guidelines.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Values and Convert to Absolute Scales</strong></p>
            <p>Volume (V) = 150 Liters</p>
            <p>Amount (n) = 6.5 Moles</p>
            <p>Temperature (T) = 25°C + 273.15 = 298.15 Kelvin</p>
            <p>Gas Constant (R) = 0.082057 L·atm/(mol·K)</p>
            <p><strong>Step 2: Rearrange to Solve for Pressure: P = (n × R × T) / V</strong></p>
            <p>P = (6.5 × 0.082057 × 298.15) / 150</p>
            <p>P = 159.023 / 150</p>
            <p className="text-blue-800 font-bold mt-22">Calculator Output: Internal System Pressure = 1.060 atm</p>
          </div>
        </div>

        {/* Example 2: Indian Biogas Production Node */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Determining Volume Requirements for a Biogas Extraction Vessel (India)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An environmental systems designer in Pune is evaluating a methane capture vessel operating at a controlled pressure of <strong>101.325 kPa (101,325 Pascals)</strong>. The process generates <strong>120 Moles</strong> of methane gas during a production run at a temperature of <strong>35°C</strong>. They need to find the required volume of the storage tank in cubic meters.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Convert Units to Standard SI Metrics</strong></p>
            <p>Pressure (P) = 101,325 Pa</p>
            <p>Amount (n) = 120 Moles</p>
            <p>Temperature (T) = 35°C + 273.15 = 308.15 Kelvin</p>
            <p>Gas Constant (R) = 8.31446 J/(mol·K)</p>
            <p><strong>Step 2: Rearrange to Solve for Volume: V = (n × R × T) / P</strong></p>
            <p>V = (120 × 8.31446 × 308.15) / 101,325</p>
            <p>V = 307,452.81 / 101,325</p>
            <p className="text-emerald-800 font-bold mt-2">Calculator Output: Required Storage Space = 3.034 m³ (or 3,034 Liters)</p>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why must temperature always be converted to Kelvin or Rankine in the Ideal Gas Law?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The Ideal Gas Law describes a thermodynamic system relative to absolute zero—the theoretical state where all molecular kinetic energy ceases. Empirical scales like Celsius and Fahrenheit have arbitrary zero points based on the freezing points of substances, which can lead to mathematically impossible zero or negative values. Absolute scales like Kelvin and Rankine anchor directly to molecular motion, ensuring valid proportions.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Under what physical conditions does the Ideal Gas Law break down?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The ideal gas model assumes that gas particles occupy zero physical volume and experience zero intermolecular forces. In reality, under extremely high pressures, gas molecules are forced close together, making their physical volume significant. Similarly, at very low temperatures, molecular kinetic energy drops, allowing intermolecular attractions (van der Waals forces) to pull particles together. In these regimes, real-gas equations like the van der Waals or Peng-Robinson equations should be used instead.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does the value of the universal gas constant (R) change with different unit systems?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The numerical value of the universal gas constant (R) depends entirely on the units chosen for pressure, volume, and temperature. In standard SI metrics (Pascals, cubic meters, Kelvin), R equals 8.31446 J/(mol·K). When working with traditional chemistry units like atmospheres and liters, R shifts to 0.082057 L·atm/(mol·K). Our calculation engine handles these unit normalizations automatically behind the scenes.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between the universal gas constant and the specific gas constant?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The universal gas constant (R) is a fundamental physical constant applicable to all ideal gases on a molar basis. The specific gas constant (R_specific), commonly used in aerospace and fluid mechanics, is calculated by dividing the universal gas constant by the molecular weight of a specific gas mixture (R_specific = R / M). For example, the specific gas constant for dry air is roughly 287.05 J/(kg·K).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this calculator be used to find the density of a gas?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, indirectly. By using the calculated number of moles (n) from this tool, multiplying it by the molecular weight of the gas to find its mass (m), and then dividing that mass by the system's volume (V), you can easily determine the density of your gas mixture.
            </div>
          </details>
        </div>
      </section>

      {/* --- 10. INTERNAL LINKING DIRECTORY HUB --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Explore Other Engineering Category Tools</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your engineering designs, structural calculations, and fluid system reviews with our comprehensive suite of advanced technical calculation utilities:
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
          <a href="/calculator/engineering/stress-strain" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Stress & Strain Mechanics</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Structural Load Distribution</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Torque Calculation</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}