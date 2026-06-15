import React from 'react';

/* =========================================================================
  SEO METADATA & CONFIGURATION
  =========================================================================
  1. SEO TITLE: Torque Calculator | Calculate Rotational Force (Nm & lb-ft)
  2. META DESCRIPTION: Calculate rotational torque, linear force, lever arm radius, and angle with our free calculator. Supports Newton-meters, pound-feet, and automatic unit conversions.
  3. URL SLUG: /calculator/engineering/torque
  4. H1 TITLE: Torque Calculator - Rotational Force & Lever Arm Tool

  11. SEO KEYWORDS:
      - Primary Keyword: torque calculator
      - Secondary Keywords: calculate rotational force, torque wrench formula tool, mechanical leverage calculator, newton meter to pound feet, lever arm radius solver, engineering torque wizard, tightening torque calculator, angular force calculator, physics pivot torque, shaft torque estimator.
      - Long-Tail Keywords: how to calculate torque at an angle, engine torque vs horsepower formula, torque calculation with extension wrench, isolated variable force formula physics, structural steel bolt torque specs.
  =========================================================================
*/

export default function TorqueContent() {
  // 12. STRUCTURED DATA (FAQ SCHEMA IN JSON-LD)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between torque and work if they share the same units?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Although both torque and work can be expressed in Newton-meters (Nm), they represent entirely different physical concepts. Torque is a vector quantity representing a rotational turning effort or moment at a specific point, regardless of movement. Work is a scalar quantity tracking energy transferred over a distance (Force × Distance traveled). To avoid confusion in practical engineering, torque is typically measured in Newton-meters (Nm) or pound-feet (lb-ft), while work is measured in Joules (J)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is maximum torque achieved at a perpendicular 90-degree angle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculation for torque relies on the sine of the angle between the applied force vector and the lever arm. In trigonometry, the sine function reaches its absolute maximum value of 1.0 at exactly 90 degrees (or π/2 radians). Any angle other than 90 degrees yields a sine value less than one, meaning a portion of your force is wasted pushing or pulling directly along the line of the lever arm instead of rotating it."
        }
      },
      {
        "@type": "Question",
        "name": "How does using a wrench extension modify the calculated torque values?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Adding an extension to a torque wrench increases the effective length of the lever arm (r). Since torque equals force multiplied by distance, a longer lever arm produces greater rotational force at the fastener using the same amount of effort. If you are using a click-type torque wrench with an extension, you must recalculate the wrench setting to avoid over-tightening components."
        }
      },
      {
        "@type": "Question",
        "name": "What is the core difference between static torque and dynamic torque?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Static torque involves a rotational force applied to an object that remains stationary, such as a tightened structural bolt or a static clock mechanism under tension. Dynamic torque describes rotational forces involving movement, such as an engine's crankshaft turning a vehicle's drivetrain or an active industrial mixing motor under full operating load."
        }
      },
      {
        "@type": "Question",
        "name": "How do you convert pound-feet (lb-ft) to Newton-meters (Nm)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert imperial pound-feet (lb-ft) to metric Newton-meters (Nm), multiply the value by 1.35582. Conversely, to convert metric Newton-meters back to pound-feet, multiply the value by 0.73756. This calculator automatically handles these conversion factors instantly behind the scenes."
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
          Torque Calculator - Rotational Force & Lever Arm Tool
        </h1>
        <p className="text-lg text-gray-600 mb-4">
          Whether you are an automotive mechanic tightening critical engine cylinder bolts in Detroit, a factory technician aligning a heavy pump coupling in Chennai, or a physics student studying rotational dynamics, calculating precise rotational values is essential. <strong>Torque</strong> is the measure of how much an applied force causes an object to rotate around a fixed pivot point or axis.
        </p>
        <p className="mb-4">
          Our advanced <strong>Torque Calculator</strong> simplifies complex physics calculations by letting you instantly find torque, linear force, lever arm length, or the angle of application. The engine automatically handles trigonometry equations and conversions between metric and imperial units behind the scenes, helping you prevent errors from manual conversions or over-tightening hardware.
        </p>
      </section>

      {/* --- CORE THEORY & THE MECHANICAL LEVER SYSTEM --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mechanics of Leverage and Moment of Force</h2>
        <p className="mb-4">
          Torque—often called the <em>moment of force</em> in structural engineering circles—functions as the rotational equivalent of linear force. While a linear force causes an object to accelerate in a straight line, torque accelerates an object rotationally around an established center point.
        </p>
        
        

        <p className="mb-4">
          The mechanical advantage gained through a lever system follows the foundational principles first documented by Archimedes. By increasing the distance between the pivot point and the spot where force is applied, you multiply your physical effort. This explains why a longer wrench makes it much easier to loosen a rusted bolt.
        </p>
        <p>
          However, real-world constraints mean force cannot always be applied perfectly perpendicular to a lever arm. When pulling at an angle, only a portion of your physical effort contributes to turning the object. The rest of the force acts as a linear strain pulling or pushing directly against the pivot point, doing no rotational work. Our tool calculates these vector components to show you exactly how much effective rotational force is generated.
        </p>
      </section>

      {/* --- STATIC VS DYNAMIC APPLICATIONS --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Static vs. Dynamic Rotational Energy</h2>
        <p className="mb-4">
          In industrial applications, rotational force is divided into two main categories depending on whether the system is stationary or moving:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Static Applications</span>
            <p className="text-sm text-gray-600">
              This describes situations where rotational force is applied but no motion occurs. Examples include tightening a structural steel bolt to standard specifications or the torque holding an elevator pulley in place while stopped. Correct static calculations ensure structural joints remain secure under load over time.
            </p>
          </div>
          <div className="p-5 bg-gray-50 rounded-xl border border-gray-200">
            <span className="font-bold text-gray-900 block mb-1">Dynamic Applications</span>
            <p className="text-sm text-gray-600">
              This describes mechanical systems where rotational force produces active motion. Examples include an electric car motor spinning a drive shaft or an industrial conveyor system running under full load. Dynamic calculations are essential for matching motor power to operational demands.
            </p>
          </div>
        </div>
      </section>

      {/* --- 6. HOW TO USE SECTION FEATURING ALL DROPDOWN MENUS --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Torque Calculator</h2>
        <p className="mb-4 text-sm text-gray-700">
          This system is designed with flexibility in mind, letting you solve for any missing variable. Simply choose your target output field, enter your known values, and pick the appropriate units from the dropdown menus:
        </p>

        <div className="space-y-4 text-sm text-gray-700">
          <div>
            <span className="font-bold block text-gray-900">Step 1: Set Your Input Values and Units</span>
            <p className="mt-1">
              Identify your known values from your schematics or measurements and enter them into the corresponding fields. Choose the correct option from the unit dropdowns:
            </p>
            <ul className="list-disc pl-6 mt-2 text-xs text-gray-600 space-y-1">
              <li><strong>Force Dropdown Options:</strong> Newtons (N), Kilonewtons (kN), Pounds-force (lbf), Ounces-force (ozf), Kilograms-force (kgf).</li>
              <li><strong>Lever Arm Distance (Radius) Dropdown Options:</strong> Meters (m), Centimeters (cm), Millimeters (mm), Feet (ft), Inches (in).</li>
              <li><strong>Angle Dropdown Options:</strong> Degrees (°), Radians (rad). Leaving this blank or setting it to 90 defaults the calculation to a perfect perpendicular application.</li>
              <li><strong>Torque Output Dropdown Options:</strong> Newton-meters (Nm), Newton-centimeters (Ncm), Pound-feet (lb-ft), Pound-inches (lb-in), Kilogram-meters (kg·m).</li>
            </ul>
          </div>

          <div>
            <span className="font-bold block text-gray-900">Step 2: Leave the Target Unknown Field Blank</span>
            <p className="mt-1">
              The calculator detects which field is left blank (or set to zero) and automatically rearranges the underlying physics equations to find that missing value.
            </p>
          </div>

          <div>
            <span className="font-bold block text-gray-900">Step 3: Read Results</span>
            <p className="mt-1">
              The engine normalizes all units, applies the necessary trigonometric adjustments, and outputs your final results across your chosen measurement systems.
            </p>
          </div>
        </div>
      </section>

      {/* --- 7. FORMULA SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Governing Rotational Force</h2>
        <p className="mb-4">
          The basic formula for torque assumes the force is applied perfectly perpendicular to the lever arm. Because the sine of 90 degrees equals 1.0, the angle variable drops out of the equation:
        </p>

        <div className="bg-gray-50 border border-gray-200 p-5 rounded-xl space-y-4">
          <div className="font-mono block font-bold text-center text-blue-900 text-xl py-2 bg-white rounded border shadow-sm">
            τ = F × r
          </div>
          <p className="text-sm">
            When force is applied at an angle other than 90 degrees, trigonometry must be used to find the perpendicular component of the force vector. The full formula is written as:
          </p>
          <div className="font-mono block font-bold text-center text-blue-900 text-xl py-2 bg-white rounded border shadow-sm">
            τ = F × r × sin(θ)
          </div>

          <p className="text-xs text-gray-600 pt-2">
            To solve for other missing variables, our calculation engine switches to these rearranged versions of the formula:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs font-mono font-bold">
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Force</span>
              F = τ / [r × sin(θ)]
            </div>
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Radius</span>
              r = τ / [F × sin(θ)]
            </div>
            <div className="bg-white p-3 rounded border">
              <span className="text-gray-500 block mb-1">Isolate Angle</span>
              θ = arcsin[τ / (F × r)]
            </div>
          </div>
        </div>
      </section>

      {/* --- 8. WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-World Engineering Worked Examples</h2>
        <p className="text-gray-600">
          Review these practical scenarios to see how the torque formula is applied across different industries and unit systems:
        </p>

        {/* Example 1: Automotive Bolt Spec */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 1: Tightening an Automotive Engine Cylinder Head Bolt (USA)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A classic car mechanic in Michigan needs to tighten a high-performance cylinder head bolt to a specification of <strong>65 lb-ft</strong>. The tight engine bay limits the working space, forcing the mechanic to pull on a <strong>1.25-foot wrench</strong> at an awkward <strong>75-degree angle</strong>. What linear force must the mechanic apply to reach the correct specification?
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Identify Known Values</strong></p>
            <p>Target Torque (τ) = 65 lb-ft</p>
            <p>Lever Arm Distance (r) = 1.25 feet</p>
            <p>Angle of Application (θ) = 75 degrees [sin(75°) ≈ 0.9659]</p>
            <p><strong>Step 2: Rearrange the Formula to Isolate Force</strong></p>
            <p>F = τ / [r × sin(θ)]</p>
            <p>F = 65 / [1.25 × 0.9659]</p>
            <p>F = 65 / 1.2074</p>
            <p className="text-blue-800 font-bold mt-2">Calculator Output: Required Linear Force = 53.83 lbs</p>
          </div>
        </div>

        {/* Example 2: Indian Industrial Pump Axis */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 2: Verifying Rotational Force on an Industrial Water Pump (India)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An engineer in Mumbai is evaluating an electric motor connected to a water pump. A diagnostic sensor shows that the drive shaft experiences a perpendicular force of <strong>450 Newtons (N)</strong> acting at a distance of <strong>12 centimeters (0.12 meters)</strong> from the center of the shaft. What is the total torque on the shaft in Newton-meters?
          </p>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1 text-gray-700">
            <p><strong>Step 1: Convert Known Values to Base SI Metrics</strong></p>
            <p>Force (F) = 450 N</p>
            <p>Radius (r) = 12 cm = 0.12 meters</p>
            <p>Angle (θ) = 90 degrees (Perpendicular force, so sin(90°) = 1.0)</p>
            <p><strong>Step 2: Apply the Perpendicular Formula</strong></p>
            <p>τ = F × r</p>
            <p>τ = 450 N × 0.12 m</p>
            <p className="text-emerald-800 font-bold mt-2">Calculator Output: Total Shaft Torque = 54.00 Nm</p>
          </div>
        </div>
      </section>

      {/* --- 9. FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the difference between torque and work if they share the same units?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Although both torque and work can be expressed in Newton-meters (Nm), they represent entirely different physical concepts. Torque is a vector quantity representing a rotational turning effort or moment at a specific point, regardless of movement. Work is a scalar quantity tracking energy transferred over a distance (Force × Distance traveled). To avoid confusion in practical engineering, torque is typically measured in Newton-meters (Nm) or pound-feet (lb-ft), while work is measured in Joules (J).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is maximum torque achieved at a perpendicular 90-degree angle?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The calculation for torque relies on the sine of the angle between the applied force vector and the lever arm. In trigonometry, the sine function reaches its absolute maximum value of 1.0 at exactly 90 degrees (or π/2 radians). Any angle other than 90 degrees yields a sine value less than one, meaning a portion of your force is wasted pushing or pulling directly along the line of the lever arm instead of rotating it.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does using a wrench extension modify the calculated torque values?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Adding an extension to a torque wrench increases the effective length of the lever arm (r). Since torque equals force multiplied by distance, a longer lever arm produces greater rotational force at the fastener using the same amount of effort. If you are using a click-type torque wrench with an extension, you must recalculate the wrench setting to avoid over-tightening components.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is the core difference between static torque and dynamic torque?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Static torque involves a rotational force applied to an object that remains stationary, such as a tightened structural bolt or a static clock mechanism under tension. Dynamic torque describes rotational forces involving movement, such as an engine's crankshaft turning a vehicle's drivetrain or an active industrial mixing motor under full operating load.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How do you convert pound-feet (lb-ft) to Newton-meters (Nm)?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              To convert imperial pound-feet (lb-ft) to metric Newton-meters (Nm), multiply the value by 1.35582. Conversely, to convert metric Newton-meters back to pound-feet, multiply the value by 0.73756. This calculator automatically handles these conversion factors instantly behind the scenes.
            </div>
          </details>
        </div>
      </section>

      {/* --- 10. INTERNAL LINKING DIRECTORY HUB --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-3 text-gray-900">Explore Other Engineering Category Tools</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your designs, check material parameters, and simplify your technical calculations with our complete suite of engineering tools:
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
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Ideal Gas Law Solver</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}