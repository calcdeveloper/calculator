import React from 'react';

/* =========================================================================
  SEO METADATA & CONFIGURATION
  =========================================================================
  1. SEO TITLE: RC Circuit Calculator | Time Constant & Cutoff Frequency
  2. META DESCRIPTION: Calculate RC circuit time constant (tau), charging times, and filter cutoff frequencies instantly. Complete multi-unit support from picofarad to gigahertz.
  3. URL SLUG: /calculator/engineering/rc-circuit
  4. H1 TITLE: RC Circuit Calculator (Time Constant & Filters)

  11. SEO KEYWORDS:
      - Primary Keyword: rc circuit calculator
      - Secondary Keywords: calculate rc time constant, cutoff frequency calculator, low pass rc filter solver, high pass filter design tool, capacitor charging time constant tau, analog filter analysis tool, passive rc circuit designer, hardware debounce calculator, rc step response simulation, electronic transient analyzer.
      - Long-Tail Keywords: how to find cutoff frequency of rc circuit, calculate capacitor charge time 5 tau, rc circuit time constant microfarads kilohms, passive analog audio filter crossover designer, electronic low pass filter calculations.
  =========================================================================
*/

export default function RCCircuitContent() {
  // 12. STRUCTURED DATA (FAQ SCHEMA IN JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What exactly does the RC circuit time constant (Tau) represent?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The time constant, denoted by the Greek letter tau (τ), represents the time required for a capacitor to charge up to approximately 63.2% of its maximum applied DC voltage through a series resistor, or to discharge down to 36.8% of its stored initial voltage. It is derived mathematically as the direct product of resistance and capacitance (τ = R × C)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is a capacitor considered fully charged after 5 time constants (5τ)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The charging profile of a capacitor is logarithmic rather than linear. At 1τ the capacitor reaches 63.2%, at 2τ it reaches 86.5%, at 3τ it reaches 95.0%, at 4τ it hits 98.2%, and at exactly 5τ it achieves 99.3% capacity. In practical electronics engineering, reaching 99.3% is considered fully charged because the remaining fractional curve is negligible for hardware performance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a Low-Pass and a High-Pass RC Filter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The difference depends entirely on where the output voltage signal is sampled. In an RC Low-Pass filter, the output voltage is taken across the capacitor, allowing low frequencies to pass through while attenuating higher noise frequencies. In an RC High-Pass filter, the output is taken across the resistor, blocking DC and low frequencies while letting higher frequency waveforms pass through."
        }
      },
      {
        "@type": "Question",
        "name": "What does the cutoff frequency (-3dB point) signify in signal processing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cutoff frequency (fc) marks the boundary transition where the filter reduces the output signal's power by half. At this point, the output voltage drops to 70.7% of the original input voltage, which corresponds to an attenuation of -3 decibels (-3dB). Beyond this frequency boundary, the filter rapidly attenuates signals."
        }
      },
      {
        "@type": "Question",
        "name": "How do unit mismatched measurements affect manual RC circuit calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manual calculations often lead to errors because capacitors are typically labeled in microfarads (μF), nanofarads (nF), or picofarad (pF) ranges, while resistors are sized in kilohms (kΩ) or megohms (MΩ). If you do not convert these values back to base units (Farads and Ohms), your calculations will be off by several decimal places. This calculator automates those conversions behind the scenes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use an RC filter circuit for high-power utility electrical lines?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Passive RC networks are designed for low-power signal conditioning, circuit biasing, data line filtering, and decoupling roles. High-power systems use specialized passive power-factor correction networks or active solid-state topologies to handle larger currents without damaging components."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100 font-sans">
      
      {/* INJECTED STRUCTURAL DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- 5. INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          RC Circuit Calculator (Time Constant & Filters)
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          In active electronics design, an <strong>RC Circuit</strong> stands as one of the most fundamental analog building blocks, consisting of a resistor (R) and a capacitor (C) linked together in a series or parallel network. These two components work together to control how fast a circuit responds to changes in voltage.
        </p>
        <p className="mb-4">
          RC networks are widely used across modern electronics infrastructure. In the <strong>Time Domain (Transient State Analysis)</strong>, they provide hardware debounce protection for mechanical buttons, manage power-on delayed reset states, and handle timing loops. In the <strong>Frequency Domain (AC Frequency Analysis)</strong>, they function as passive analog filters—helping block high-frequency electromagnetic noise from audio equipment or smoothing raw ripple voltages out of power supplies.
        </p>
        <p>
          Our interactive <strong>RC Circuit Calculator</strong> helps you design and evaluate circuits instantly. By entering any two known parameters, our calculator resolves the remaining variables, handling everything from transient timing constants to frequency cutoff thresholds across a wide range of unit configurations.
        </p>
      </section>

      {/* --- DETAILED COMPONENT TECHNICAL GLOSSARY --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Glossary of RC Circuit Variables</h2>
        <p className="mb-6 text-gray-600">
          To design effective analog circuits, it helps to understand the physical variables that dictate performance. Below is an overview of the key metrics used by our calculation engine:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Resistance (R)</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Ohms (Ω)</strong>. The resistor restricts the flow rate of charge moving through the circuit loop. In transient operations, higher resistance values restrict the current path, slowing down how quickly the capacitor can charge or discharge.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Capacitance (C)</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Farads (F)</strong>. The capacitor stores electrical potential energy in an electrostatic field across its internal plates. Because a base Farad is an exceptionally large unit, practical circuit boards typically use microfarads (μF), nanofarads (nF), or picofarads (pF).
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Time Constant (τ - Tau)</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Seconds (s)</strong>. The time constant indicates how long it takes a capacitor to charge up to 63.2% of its maximum capacity when driven by a DC voltage supply, or to drop down to 36.8% during a discharge state.
            </p>
          </div>

          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-gray-900 block text-lg mb-1">Cutoff Frequency (fc)</span>
            <p className="text-sm text-gray-600">
              Measured in <strong>Hertz (Hz)</strong>. This variable defines the -3dB attenuation boundary point for AC signal processing. At this frequency threshold, the output signal's power drops to exactly half of its initial value, making it a critical parameter for filter design.
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. HOW TO USE SECTION WITH EVERY DROPDOWN UNIT LOGGED --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Multi-Variable RC Circuit Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          This calculator lets you compute timing and filter parameters in a single interface. By providing any two parameters, the calculation engine solves the remaining values across both domain applications:
        </p>
        
        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">Step 1: Input Your Two Known Values</span>
            <p className="mt-1">
              Select any two metrics provided by your circuit schematic or components. Leave the other fields completely blank for the engine to reverse-engineer.
            </p>
          </div>

          <div>
            <span className="font-bold block text-gray-900">Step 2: Configure Your Dropdown Units</span>
            <p className="mt-1">
              Ensure that your input data matches the selected units in the dropdown menus. The calculator supports:
            </p>
            <ul className="list-disc pl-6 space-y-1 mt-2 text-xs text-gray-600">
              <li><strong>Resistor Unit Fields:</strong> Ohms (Ω), Kilohms (kΩ), Megohms (MΩ).</li>
              <li><strong>Capacitor Unit Fields:</strong> Farads (F), Millifarads (mF), Microfarads (μF), Nanofarads (nF), Picofarads (pF).</li>
              <li><strong>Time Constant (Tau) Outputs:</strong> Seconds (s), Milliseconds (ms), Microseconds (μs), Nanoseconds (ns).</li>
              <li><strong>Cutoff Frequency Fields:</strong> Hertz (Hz), Kilohertz (kHz), Megahertz (MHz), Gigahertz (GHz).</li>
            </ul>
          </div>

          <div>
            <span className="font-bold block text-gray-900">Step 3: Analyze the result</span>
            <p className="mt-1">
              The calculation engine converts your inputs into base scientific units, runs the calculations, and balances the fields.
            </p>
          </div>
        </div>
      </section>

      {/* --- 7. DEEP MATHEMATICAL FORMULA SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Equations Governing RC Behavior</h2>
        <p className="mb-4">
          An RC network's behavior depends on the domain you are calculating. Below are the underlying equations used by our calculator:
        </p>

        <div className="space-y-6">
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">1. Transient Time Domain Analysis</h3>
            <p className="text-sm mb-3">
              When a constant DC step voltage is applied, the instantaneous voltage across the charging capacitor at any time interval (t) follows an exponential charging curve:
            </p>
            <div className="font-mono bg-white p-3 rounded border text-center text-blue-900 font-bold text-sm shadow-sm my-2">
              Vc(t) = Vs × (1 - e^(-t / RC))
            </div>
            <p className="text-sm mt-3">
              The time constant is the foundation of this behavior, calculated using the formula:
            </p>
            <div className="font-mono bg-white p-2 rounded border text-center text-gray-800 text-sm my-2">
              Tau (τ) = R × C
            </div>
            <p className="text-xs text-gray-500 mt-2">
              According to the 5-Tau Rule, a capacitor reaches 99.3% charge after exactly five time constants (5 × τ), which is considered fully charged in practical testing.
            </p>
          </div>

          

          <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl">
            <h3 className="font-bold text-gray-900 mb-2">2. AC Frequency Filter Analysis</h3>
            <p className="text-sm mb-3">
              When analyzing continuous alternating current (AC) signals, the resistor and capacitor form a frequency-dependent voltage divider. The cutoff frequency (the -3dB power boundary point) is calculated using the formula:
            </p>
            <div className="font-mono bg-white p-3 rounded border text-center text-blue-900 font-bold text-sm shadow-sm my-2">
              fc = 1 / (2 × π × R × C)
            </div>
            <p className="text-sm mt-3">
              This threshold marks the point where the capacitive reactance equals the circuit's series resistance, causing the output signal voltage to drop to 70.7% of its initial value.
            </p>
          </div>
        </div>
      </section>

      {/* --- 8. PRACTICAL WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Engineering Worked Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step examples to see how our calculator handles real-world hardware design scenarios.
        </p>

        {/* Example 1: Microcontroller Debounce / Delay Setup */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Designing a Microcontroller Reset Delay Circuit (USA Target)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A hardware designer in the United States is building a power-on delay circuit for a microprocessor. The system needs a time delay constant (τ) of exactly <strong>4.7 Milliseconds</strong> using an available <strong>10 Kilohm (10,000 Ω)</strong> pull-up resistor. They need to find the correct capacitor size.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Variables & Normalize Units</strong></p>
            <p>Target Tau (τ) = 4.7 ms = 0.0047 Seconds</p>
            <p>Resistance (R) = 10 kΩ = 10,000 Ohms</p>
            <p><strong>Step 2: Isolate Capacitance using the Formula (C = τ / R)</strong></p>
            <p>C = 0.0047 Seconds / 10,000 Ohms</p>
            <p>C = 0.00000047 Farads</p>
            <p><strong>Step 3: Convert Base Units to Practical Metrics</strong></p>
            <p>C = 0.47 Microfarads (μF) or 470 Nanofarads (nF)</p>
            <p className="text-blue-800 font-bold mt-2">Calculator Output: Required Capacitance = 470 nF | 5-Tau Full Charge Window = 23.5 ms</p>
          </div>
        </div>

        {/* Example 2: Audio Filtering Setup */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Sizing an Audio Low-Pass Filter (India Target)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An acoustic technician in India is designing a passive low-pass crossover filter to block high-frequency hum from a subwoofer. The target cutoff frequency (fc) is set to <strong>120 Hertz</strong> using a standard <strong>4.7 Microfarad (μF)</strong> film capacitor. They need to calculate the correct resistor value.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Variables & Normalize Units</strong></p>
            <p>Cutoff Frequency (fc) = 120 Hz</p>
            <p>Capacitance (C) = 4.7 μF = 0.0000047 Farads</p>
            <p><strong>Step 2: Isolate Resistance using the Formula (R = 1 / (2 × π × fc × C))</strong></p>
            <p>R = 1 / (2 × 3.1415926 × 120 Hz × 0.0000047 Farads)</p>
            <p>R = 1 / 0.0035436</p>
            <p>R = 282.20 Ohms</p>
            <p className="text-emerald-800 font-bold mt-2">Calculator Output: Required Resistance = 282.2 Ω | Resulting Time Constant (Tau) = 1.326 ms</p>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this RC circuit calculator be used for Alternating Current (AC) circuits?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, but only under specific conditions. This calculator applies directly to all Direct Current (DC) systems and purely resistive Alternating Current (AC) circuits, such as traditional space heaters, incandescent lamps, or water heating elements. For complex AC circuits with reactive components like electric motors, transformer coils, or capacitors, physical resistance is replaced by impedance (Z), and the power calculations must incorporate a Power Factor (PF) modifier to account for phase angles.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is a capacitor considered fully charged after 5 time constants (5τ)?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The charging profile of a capacitor is logarithmic rather than linear. At 1τ the capacitor reaches 63.2%, at 2τ it reaches 86.5%, at 3τ it reaches 95.0%, at 4τ it hits 98.2%, and at exactly 5τ it achieves 99.3% capacity. In practical electronics engineering, reaching 99.3% is considered fully charged because the remaining fractional curve is negligible for hardware performance.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between a Low-Pass and a High-Pass RC Filter?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The difference depends entirely on where the output voltage signal is sampled. In an RC Low-Pass filter, the output voltage is taken across the capacitor, allowing low frequencies to pass through while attenuating higher noise frequencies. In an RC High-Pass filter, the output is taken across the resistor, blocking DC and low frequencies while letting higher frequency waveforms pass through.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What does the cutoff frequency (-3dB point) signify in signal processing?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The cutoff frequency (fc) marks the boundary transition where the filter reduces the output signal's power by half. At this point, the output voltage drops to 70.7% of the original input voltage, which corresponds to an attenuation of -3 decibels (-3dB). Beyond this frequency boundary, the filter rapidly attenuates signals.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do unit mismatched measurements affect manual RC circuit calculation?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Manual calculations often lead to errors because capacitors are typically labeled in microfarads (μF), nanofarads (nF), or picofarad (pF) ranges, while resistors are sized in kilohms (kΩ) or megohms (MΩ). If you do not convert these values back to base units (Farads and Ohms), your calculations will be off by several decimal places. This calculator automates those conversions behind the scenes.
            </div>
          </details>
        </div>
      </section>

      {/* --- 10. INTERNAL LINKING HUB --- */}
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