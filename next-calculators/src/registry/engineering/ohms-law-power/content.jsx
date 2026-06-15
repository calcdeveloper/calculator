import React from 'react';

/* =========================================================================
  SEO METADATA & CONFIGURATION
  =========================================================================
  1. SEO TITLE: Ohm's Law & Power Calculator | Electrical Circuit Solver
  2. META DESCRIPTION: Calculate voltage, current, resistance, and electrical power instantly. Multi-unit support from microvolts to megawatts for USA & India applications.
  3. URL SLUG: /ohms-law-power-calculator
  4. H1 TITLE: Ohm's Law & Power Calculator (Mechanical & Electrical)

  SEO KEYWORDS:
  - Primary Keyword: ohms law and power calculator
  - Secondary Keywords: electrical circuit analyzer, calculate voltage drop, current resistance calculator, joules law wheel formulas, find amps from watts, resistive load calculator, electronics design tool, power dissipation solver, multi unit ohm system, grid power engineering.
  - Long-Tail Keywords: how to calculate power with voltage and resistance, current draw for indian electrical appliances, us residential voltage branch circuit design, convert millivolts to milliamps ohms law.
  =========================================================================
*/

export default function OhmsLawContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can this Ohm's Law calculator be used for Alternating Current (AC) circuits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but only under specific conditions. This calculator applies directly to all Direct Current (DC) systems and purely resistive Alternating Current (AC) circuits, such as traditional space heaters, incandescent lamps, or water heating elements. For complex AC circuits with reactive components like electric motors, transformer coils, or capacitors, physical resistance is replaced by impedance (Z), and the power calculations must incorporate a Power Factor (PF) modifier to account for phase angles."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to the current draw in a circuit if the resistance is halved?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the fundamental math of Ohm's Law, current is inversely proportional to resistance when voltage remains constant. Therefore, if you cut the circuit resistance exactly in half, the resulting current flow rate will precisely double. Conversely, doubling the resistance restricts the electrical path, reducing the current by half."
        }
      },
      {
        "@type": "Question",
        "name": "How do residential grid voltages differ between India and the United States?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the standard domestic single-phase public electrical utility grid operates at a nominal voltage of 230V AC at a frequency of 50 Hz. In contrast, the United States relies on a split-phase network delivering 120V AC at 60 Hz for standard wall outlets and 240V AC for high-power appliances like electric dryers. Because of this voltage difference, a 1200W appliance draws roughly 10 Amps in the USA, but only about 5.2 Amps on an Indian domestic circuit grid."
        }
      },
      {
        "@type": "Question",
        "name": "Why do short circuits cause wiring installations to overheat and melt?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A short circuit occurs when a direct path skips the main electrical workload, driving the circuit resistance near zero Ohms. As stated by the formula Current = Voltage / Resistance, dividing by an extremely small value creates a massive current spike. Because thermal energy dissipation scales with the square of the current (Power = I² × R), this sudden surge generates intense heat that can instantly melt wire insulation."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between an open circuit and a short circuit condition?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An open circuit represents a broken, incomplete path with infinitely high resistance, meaning no current can flow (0 Amps) and net power consumption is zero. A short circuit is an unintended path with near-zero resistance, leading to a sudden, hazardous surge in current flow and rapid power dissipation."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 font-sans">
      
      {/* STRUCTURED DATA FOR SEARCH ENGINES */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ohm's Law & Power Calculator
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Whether you are a B.Tech electrical engineering student preparing for academic laboratory exams, a hardware designer prototyping low-power microcontrollers, or a commercial electrician sizing utility distribution panels, understanding the baseline physics of electrical systems is essential. The complex interactions among electrical pressure, flow rate, physical friction, and work energy form the foundation of all electrical circuit disciplines.
        </p>
        <p className="mb-4">
          Our advanced <strong>Ohm's Law & Power Calculator</strong> serves as a reliable engineering verification tool. By entering any two known variables, our multi-directional calculation matrix automatically handles the remaining values. Built with precise scale conversions, this tool supports input metrics ranging from microvolts (μV) to megawatts (MW), making it equally suitable for diagnosing small electronics or planning industrial grid networks.
        </p>
        <p>
          This practical utility helps engineers around the world quickly evaluate electrical metrics. It features clear structural conversions tailored to regional grid layouts, whether you are managing a 120V branch circuit inside the United States or verifying a 230V commercial installation across India.
        </p>
      </section>

      {/* --- GLOSSARY SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Essential Variables of Electrical Networks</h2>
        <p className="mb-6">
          To visualize electrical behavior, engineers often use a hydraulic analogy, comparing an active electrical circuit to a pressurized water system. Below is a breakdown of the four variables handled by this calculator:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Voltage (V) — Electrical Potential</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Volts (V)</strong>. Voltage is the electrical pressure or potential difference that drives free electrons through a conductive matrix. In the water analogy, voltage corresponds to the water pressure generated by a mechanical pump or a gravity-fed reservoir. Higher voltage provides more energy to overcome circuit resistance.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Current (I) — Charge Velocity</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Amperes (A)</strong> or Amps. Current represents the real-time flow rate of electrons passing through a specific point in a circuit (where 1 Ampere equals 1 Coulomb of charge moving per second). In our hydraulic model, current matches the volume of water flowing through a pipe.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Resistance (R) — Flow Opposition</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Ohms (Ω)</strong>. Resistance is the physical property of a material that opposes electron flow. It is determined by atomic density, cross-sectional area, material length, and temperature. In the water analogy, resistance represents an internal restriction or narrowing of the pipe diameter.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Power (P) — Energy Dissipation Rate</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Watts (W)</strong>. Power is the rate at which electrical energy is converted into another form of energy, such as heat, light, or mechanical motion (where 1 Watt equals 1 Joule of work performed per second). It indicates the net workload generated within the system.
            </p>
          </div>
        </div>
      </section>

      {/* --- HOW TO USE WITH EXPLICIT UI VALUE REFERENCES --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Ohm's Law Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          The calculator interface features an open architecture. Because electrical laws dictate that any two locked variables define the rest of the system state, you can input data into any two fields to resolve the rest:
        </p>
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">1. Identify Your Two Known Circuit Metrics:</span>
            <p className="mt-1">
              Locate any two known values from your circuit schematic, appliance specifications, or multi-meter measurements. Leave the other fields blank for the engine to solve.
            </p>
          </div>
          <div>
            <span className="font-bold block text-gray-900">2. Enter Values and Select Units:</span>
            <p className="mt-1">
              Type the numbers into the proper input fields. Adjust the corresponding unit dropdown menus to match your source data:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-gray-600">
              <li><strong>Voltage Options:</strong> Microvolts (μV), Millivolts (mV), Volts (V), Kilovolts (kV), Megavolts (MV).</li>
              <li><strong>Current Options:</strong> Microamps (μA), Milliamps (mA), Amperes (A), Kiloamps (kA).</li>
              <li><strong>Resistance Options:</strong> Ohms (Ω), Kilohms (kΩ), Megohms (MΩ).</li>
              <li><strong>Power Options:</strong> Milliwatts (mW), Watts (W), Kilowatts (kW), Megawatts (MW).</li>
            </ul>
          </div>
          <div>
            <span className="font-bold block text-gray-900">3. Click Calculate to View Results:</span>
            <p className="mt-1">
              Click the calculate button. The calculator converts all entries to base scientific units, resolves the empty fields, and updates the entire values dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* --- CORE FORMULA SECTION (CLEAN TEXT DISPLAY) --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas: The Ohm's Law Wheel</h2>
        <p className="mb-4">
          The system relies on two foundational principles: <strong>Ohm's Law</strong> (V = I × R) and <strong>Joule's Law of Power Dissipation</strong> (P = V × I). By substituting these equations into each other, we can derive 12 distinct formulas to solve for any single unknown parameter.
        </p>

        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 space-y-6 font-mono text-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="block font-bold text-blue-900 text-base mb-2">Find Voltage (V)</span>
              <p className="text-xs text-gray-600 mb-1">V = I × R</p>
              <p className="text-xs text-gray-600 mb-1">V = P / I</p>
              <p className="text-xs text-gray-600">V = Square Root(P × R)</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="block font-bold text-blue-900 text-base mb-2">Find Current (I)</span>
              <p className="text-xs text-gray-600 mb-1">I = V / R</p>
              <p className="text-xs text-gray-600 mb-1">I = P / V</p>
              <p className="text-xs text-gray-600">I = Square Root(P / R)</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm">
              <span className="block font-bold text-blue-900 text-base mb-2">Find Resistance (R)</span>
              <p className="text-xs text-gray-600 mb-1">R = V / I</p>
              <p className="text-xs text-gray-600 mb-1">R = V² / P</p>
              <p className="text-xs text-gray-600">R = P / I²</p>
            </div>
          </div>

          <div className="p-4 bg-white rounded-lg border border-blue-100 text-center shadow-sm">
            <span className="block font-bold text-gray-900 text-base mb-2">Find Power (P)</span>
            <div className="grid grid-cols-3 gap-2 text-xs text-blue-900 font-bold">
              <div>P = V × I</div>
              <div>P = I² × R</div>
              <div>P = V² / R</div>
            </div>
          </div>
        </div>
        <p className="mt-4 text-xs text-gray-500 italic">
          Technical Note: These relationships apply to linear, direct-current systems. If you are calculating alternating-current systems with significant magnetic fields, you will need to incorporate impedance and power factors for precise analysis.
        </p>
      </section>

      {/* --- PRACTICAL METRIC EXAMPLES (USA & INDIA ENVIROMENT) --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Engineering Worked Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step examples to see how current and power consumption characteristics change across different household and commercial environments.
        </p>

        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Sizing Breakers for an Indian Home Water Heater</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An electrician in India is installing a high-capacity hot water geyser rated at <strong>3.4 Kilowatts (3400W)</strong> onto a standard residential single-phase utility line operating at <strong>230 Volts</strong>. They need to calculate the current draw to choose the correct wire thickness and safety breaker.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Variables & Convert Units</strong></p>
            <p>Power (P) = 3.4 kW = 3400 Watts</p>
            <p>Voltage (V) = 230 Volts</p>
            <p><strong>Step 2: Choose the Current Isolation Formula (I = P / V)</strong></p>
            <p>I = 3400 Watts / 230 Volts</p>
            <p>I = 14.78 Amperes</p>
            <p><strong>Step 3: Determine Component Resistance for Circuit Integrity</strong></p>
            <p>R = V / I = 230 / 14.78 = 15.56 Ohms</p>
            <p className="text-blue-800 font-bold mt-2">Resulting Current Draw = 14.78 Amps | Internal Element Resistance = 15.56 Ω</p>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Analyzing a US Data Center Server Node</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A systems technician in the United States is evaluating a rack-mounted server hardware system operating on a <strong>120 Volt</strong> branch circuit. A digital diagnostic check shows that the component matrix maintains an active resistance profile of <strong>12 Ohms</strong>. The technician needs to find the net current draw and total power consumption.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Values</strong></p>
            <p>Voltage (V) = 120 Volts | Circuit Resistance (R) = 12 Ohms</p>
            <p><strong>Step 2: Solve for Total Current (I = V / R)</strong></p>
            <p>I = 120 Volts / 12 Ohms = 10 Amperes</p>
            <p><strong>Step 3: Solve for Net System Power (P = V × I)</strong></p>
            <p>P = 120 Volts × 10 Amps = 1200 Watts (or 1.2 Kilowatts)</p>
            <p className="text-emerald-800 font-bold mt-2">Resulting Current Draw = 10.00 Amps | Net Energy Workload = 1.20 kW</p>
          </div>
        </div>
      </section>

      {/* --- FAQ DISPLAY --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this Ohm's Law calculator be used for Alternating Current (AC) circuits?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, but only under specific conditions. This calculator applies directly to all Direct Current (DC) systems and purely resistive Alternating Current (AC) circuits, such as traditional space heaters, incandescent lamps, or water heating elements. For complex AC circuits with reactive components like electric motors, transformer coils, or capacitors, physical resistance is replaced by impedance (Z), and the power calculations must incorporate a Power Factor (PF) modifier to account for phase angles.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What happens to the current draw in a circuit if the resistance is halved?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              According to the fundamental math of Ohm's Law, current is inversely proportional to resistance when voltage remains constant. Therefore, if you cut the circuit resistance exactly in half, the resulting current flow rate will precisely double. Conversely, doubling the resistance restricts the electrical path, reducing the current by half.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do residential grid voltages differ between India and the United States?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In India, the standard domestic single-phase public electrical utility grid operates at a nominal voltage of 230V AC at a frequency of 50 Hz. In contrast, the United States relies on a split-phase network delivering 120V AC at 60 Hz for standard wall outlets and 240V AC for high-power appliances like electric dryers. Because of this voltage difference, a 1200W appliance draws roughly 10 Amps in the USA, but only about 5.2 Amps on an Indian domestic circuit grid.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why do short circuits cause wiring installations to overheat and melt?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A short circuit occurs when a direct path skips the main electrical workload, driving the circuit resistance near zero Ohms. As stated by the formula Current = Voltage / Resistance, dividing by an extremely small value creates a massive current spike. Because thermal energy dissipation scales with the square of the current (Power = I² × R), this sudden surge generates intense heat that can instantly melt wire insulation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between an open circuit and a short circuit condition?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              An open circuit represents a broken, incomplete path with infinitely high resistance, meaning no current can flow (0 Amps) and net power consumption is zero. A short circuit is an unintended path with near-zero resistance, leading to a sudden, hazardous surge in current flow and rapid power dissipation.
            </div>
          </details>
        </div>
      </section>

      {/* --- ENGINEERING CALCULATORS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Explore Other Engineering Applications</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your technical research and validation workflows using our comprehensive suite of engineering design tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/engineering/beam-deflection" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Beam Deflection</a>
          <a href="/calculator/engineering/belt-length-pulley-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Belt Length & Pulley Speed</a>
          <a href="/calculator/engineering/capacitor" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Capacitor Charge & Energy</a>
          <a href="/calculator/engineering/concrete-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Concrete Volumetric Estimation</a>
          <a href="/calculator/engineering/electrical-power-loss" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Electrical Power Loss</a>
          <a href="/calculator/engineering/fluid-mechanics-reynolds" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Reynolds Number Dynamics</a>
          <a href="/calculator/engineering/frequency-wavelength" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Frequency & Wavelength</a>
          <a href="/calculator/engineering/gear-ratio-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Gear Ratio & RPM Solver</a>
          <a href="/calculator/engineering/rc-circuit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">RC Circuit Time Constant</a>
          <a href="/calculator/engineering/stress-strain" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Stress & Strain Mechanics</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Structural Load Distribution</a>
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Ideal Gas Law Solver</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Torque Calculation</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}