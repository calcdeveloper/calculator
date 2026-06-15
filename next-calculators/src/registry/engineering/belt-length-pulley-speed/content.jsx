import React from 'react';

/* =========================================================================
  SEO METADATA & REQUISITES
  =========================================================================
  1. SEO TITLE: Belt Length & Pulley Speed Calculator | Open Belt Formula
  2. META DESCRIPTION: Calculate belt length, pulley speed ratios, and RPM instantly. Perfect for industrial machinery, HVAC systems, and automotive engineering projects.
  3. URL SLUG: /calculator/engineering/belt-length-pulley-speed
  4. H1 TITLE: Belt Length & Pulley Speed Calculator
  
  11. SEO KEYWORDS:
      - Primary Keyword: belt length and pulley speed calculator
      - Secondary Keywords: mechanical pulley calculator, open belt length formula, v-belt length calculation, pulley rpm calculator, driver driven pulley ratio, calculate belt pitch length, pulley diameter speed chart, center distance calculation, motor pulley speed tool, mechanical drive speed.
      - Long-Tail Keywords: how to calculate v belt length between two pulleys, engine pulley speed and ratio calculation, mechanical belt length formula with center distance, calculate driven pulley rpm from motor.
  =========================================================================
*/

export default function BeltPulleyContent() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does belt slip affect the actual pulley speed ratio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In a friction-based drive system like a V-belt or flat belt, microscopic slip occurs due to material elasticity and torque thresholds. Typically, an operational slip factor of 1% to 2% is expected in standard operating conditions. This means the driven pulley will rotate slightly slower than the theoretical calculation. For precision synchronization without any slip, engineers utilize synchronous timing belts with matching toothed pulleys."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator be used for both V-belts and flat belts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, this calculator utilizes the classic geometric open-belt length formula which applies across flat belts, V-belts, and ribbed serpentine belts. However, remember to measure using the pitch diameter of the pulley (the path where the belt centerline actually travels) rather than the absolute outer edge diameter to achieve maximum accuracy."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to the required belt length if I increase the center distance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "According to the geometric formula, the belt length scales directly with twice the center distance (2C). If you increase the center distance by 5 inches, your total belt length will increase by slightly more than 10 inches, as the straight spans on both sides grow parallel to the displacement."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the pitch diameter preferred over the outer diameter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The pitch diameter represents the neutral axis of the belt where no tension or compression occurs during bending. Because a thick V-belt sits partially inside the pulley groove, its effective rotational radius is slightly smaller than the outer metal lip of the pulley flange. Using the pitch diameter ensures your kinematics and speed ratios match physical operations perfectly."
        }
      },
      {
        "@type": "Question",
        "name": "How do I choose the correct units for my calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator supports comprehensive unit shifting. You can mix and match metric measurements (millimeters, centimeters, meters) with imperial dimensions (inches, feet) via the drop-down selectors. The underlying engine automatically standardizes all variables before processing the kinematic algebra."
        }
      },
      {
        "@type": "Question",
        "name": "What is a standard rule of thumb for optimal pulley center distance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard engineering guideline dictates that the minimum center distance should be greater than half the sum of both pulley diameters plus the radius of the larger pulley. Ideally, the center distance should fall between the diameter of the larger pulley and three times the sum of both pulleys to prevent excessive belt vibration or premature wear."
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
          Belt Length & Pulley Speed Calculator
        </h1>
        <p className="mb-4 text-lg text-gray-600">
          In mechanical engineering, industrial manufacturing, automotive design, and complex HVAC operations, <strong>Belt and Pulley Drives</strong> serve as one of the most reliable and versatile mechanical mechanisms for transmitting rotational force and torque from an electric motor or combustion engine to a driven output shaft. These systems operate quietly, dampen high-frequency operational vibrations, protect equipment from sudden shock loads, and remove the need for constant oil lubrication baths required by traditional gear trains.
        </p>
        <p className="mb-4">
          Developing an optimized belt drive involves a meticulous balancing act between two core engineering disciplines: <strong>Kinematics</strong>, which dictates how relative pulley dimensions alter angular velocity (RPM), and <strong>Spatial Geometry</strong>, which determines the absolute outer pitch length of the flexible belt required to bridge the space between your mounting shafts. Our integrated calculation engine addresses both variables simultaneously, minimizing errors and eliminating complex manual algebra.
        </p>
        <p>
          Whether you are a custom car builder in the USA retrofitting an alternator bracket, a field technician servicing custom industrial exhaust fans in India, or a mechanical design student drafting industrial gear assemblies, our <strong>Belt Length and Pulley Speed Calculator</strong> delivers instant engineering metrics tailored to your unique equipment profiles.
        </p>
      </section>

      {/* --- UNDERSTANDING CORE SYSTEMS --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Mechanical & Geometric Concepts</h2>
        <p className="mb-4">
          A belt drive transmission relies entirely on friction between the flexible belt material and the machined grooves of the rotating pulleys. When designing these assemblies, mechanical designers focus on the pitch line rather than the absolute outer boundaries of the hardware. The pitch line represents the neutral axis of the belt layout where stress is uniform.
        </p>
        <p className="mb-4">
          If your mechanical system links a high-speed electric motor to a heavy-duty industrial fluid pump, selecting incorrect pulley ratios can either overload the engine or cause the pump to run at hazardous speeds. Similarly, ordering an inaccurate belt length can lead to insufficient traction, extreme bearing wear, or completely unusable hardware.
        </p>
        <p>
          This online tool eliminates guesswork by instantly executing multi-variable system checks. By inputting your known physical components, you obtain the precise information required to purchase or manufacture components for your next project.
        </p>
      </section>

      {/* --- REQUISITE SYSTEM PARAMETERS & DROPDOWNS --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Glossary of Mechanical Variables</h2>
        <p className="mb-4">
          To achieve perfect structural accuracy, our calculator evaluates real-time input fields alongside comprehensive unit selectors. Understanding how each variable interacts prevents premature belt degradation and mechanical failure:
        </p>
        <ul className="list-disc pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Driver Pulley Diameter (D1):</strong> The physical pitch diameter of the active power source pulley directly coupled to your electric motor or primary drive shaft.
          </li>
          <li>
            <strong>Driven Pulley Diameter (D2):</strong> The physical pitch diameter of the receiving pulley integrated with your terminal workload assembly, such as an air compressor pump, a lathe spindle, or a cooling fan wheel.
          </li>
          <li>
            <strong>Center Distance (C):</strong> The exact linear spacing measured from the absolute center point of the driver shaft to the absolute center point of the driven shaft.
          </li>
          <li>
            <strong>Driver Speed (RPM1):</strong> The rotational velocity of your primary power source, measured in standard Revolutions Per Minute.
          </li>
          <li>
            <strong>Driven Speed (RPM2):</strong> The calculated target rotational velocity of your receiving output shaft, dictated entirely by the mechanical reduction profile of your system.
          </li>
          <li>
            <strong>Speed Ratio:</strong> The proportional relationship between the driver and driven pulleys, indicating how torque and angular speed transform across the drive loop.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-blue-50 p-6 rounded-xl border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator Tool</h2>
        <p className="mb-4 text-sm text-gray-700">
          This system uses an advanced single-pass mathematical layout to capture and normalize parameters instantly across a variety of measurement systems:
        </p>
        <ol className="list-decimal pl-6 space-y-3 text-sm text-gray-700">
          <li>
            <strong>Input Pulley Diameters:</strong> Specify the pitch diameters for both the Driver (D1) and Driven (D2) wheels. Use the dropdown selectors to switch between <em>inches (in)</em>, <em>feet (ft)</em>, <em>millimeters (mm)</em>, <em>centimeters (cm)</em>, or <em>meters (m)</em>.
          </li>
          <li>
            <strong>Specify Shaft Spacing:</strong> Provide the measured structural Center Distance (C) inside the designated data box, keeping your unit types uniform to prevent geometric overlap errors.
          </li>
          <li>
            <strong>Define Rotational Velocities:</strong> Input your motor shaft's operational velocity into the Driver RPM (RPM1) field. If you are solving for a specific output target, input the desired values to dynamically check the corresponding ratios.
          </li>
          <li>
            <strong>Analyze Calculated Output Metrics:</strong> The calculation engine immediately renders the exact required <strong>Total Belt Length (L)</strong>, the total system <strong>Speed Ratio</strong>, and the final rotational parameters of your machinery.
          </li>
        </ol>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Behind the System</h2>
        <p className="mb-4">
          To map out the physical behavior of a flexible belt driving two distinct mechanical hubs, our system processes two separate formulas. These equations rely on the assumption that the belt does not experience elongation or slippage under tension.
        </p>

        <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-6">
          <div>
            <h3 className="font-bold text-gray-800 mb-1">1. The Rotational Kinematics Formula (Pulley Speed)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Because the linear speed of a continuous belt loop remains completely constant across both pulley circumferences, the rotational speed scales inversely with the size of each pulley. This relationship is calculated with the following equation:
            </p>
            <div className="text-lg text-center font-mono font-bold text-blue-700 py-3 bg-white border border-blue-100 rounded-lg">
              D1 × RPM1 = D2 × RPM2
            </div>
            <p className="text-xs text-gray-500 mt-2">
              To evaluate a missing variable, the equation can be rearranged. For instance, to isolate the driven shaft velocity: RPM2 = (D1 × RPM1) / D2.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-800 mb-1">2. The Standard Geometric Open-Belt Length Formula</h3>
            <p className="text-sm text-gray-600 mb-3">
              Determining the total path traveled by a belt involves accounting for both straight segments and the partial circular wrap around each pulley. The open-belt formula combines these components into a single geometric equation:
            </p>
            <div className="text-lg text-center font-mono font-bold text-blue-700 py-3 bg-white border border-blue-100 rounded-lg">
              L = 2C + (π / 2) × (D1 + D2) + (D1 - D2)² / (4C)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Here, 2C represents the dual straight lengths bridging the distance between your shafts, (π / 2) × (D1 + D2) calculates the mean arc wrapping around the pulleys, and (D1 - D2)² / (4C) accounts for the angular tilt as the belt transitions between different pulley sizes. (Note: π is approximately 3.14159, so π / 2 is roughly 1.5708).
            </p>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="space-y-6 border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Practical Design Examples</h2>
        <p className="text-gray-600">
          Review these step-by-step engineering walkthroughs to see how these geometric and kinematic equations function under typical field conditions.
        </p>
        
        {/* Example 1 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-emerald-900">Example 1: HVAC Ventilator Unit Configuration (Imperial)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> An industrial HVAC exhaust fan system uses an electric motor spinning at 1,750 RPM with a 4-inch driver pulley. The fan assembly requires a driven speed of 1,000 RPM. The measured distance between the shaft centers is exactly 20 inches.
          </p>
          <ul className="list-disc pl-6 text-xs text-gray-600 space-y-1">
            <li>Driver Diameter (D1) = 4.0 inches</li>
            <li>Motor Speed (RPM1) = 1,750 RPM</li>
            <li>Target Driven Speed (RPM2) = 1,000 RPM</li>
            <li>Center Space (C) = 20.0 inches</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p><strong>Step 1: Calculate Required Driven Pulley Size (D2)</strong></p>
            <p>D2 = (D1 × RPM1) / RPM2</p>
            <p>D2 = (4 × 1,750) / 1,000 = 7,000 / 1,000 = 7.0 inches</p>
            <p><strong>Step 2: Calculate Required Belt Length (L)</strong></p>
            <p>L = 2C + (1.5708 × (D1 + D2)) + ((D1 - D2)² / (4C))</p>
            <p>L = 2(20) + (1.5708 × (4 + 7)) + ((4 - 7)² / (4 × 20))</p>
            <p>L = 40 + (1.5708 × 11) + ((-3)² / 80)</p>
            <p>L = 40 + 17.2788 + (9 / 80) = 40 + 17.2788 + 0.1125 = 57.3913 inches</p>
            <p className="text-emerald-800 font-bold mt-1">Calculated Specifications: Driven Pulley Size = 7.0 in, Belt Length = 57.39 in.</p>
          </div>
        </div>

        {/* Example 2 */}
        <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm space-y-3">
          <h3 className="font-bold text-lg text-blue-900">Example 2: Industrial Pump Mechanism Analysis (Metric)</h3>
          <p className="text-sm text-gray-600">
            <strong>Scenario:</strong> A workshop pump setup in India uses a motor spinning at 1,440 RPM with an attached 120 mm driver pulley. The machine utilizes a 240 mm driven pulley wheel, and the center-to-center shaft distance measures 500 mm.
          </p>
          <ul className="list-disc pl-6 text-xs text-gray-600 space-y-1">
            <li>Driver Diameter (D1) = 120 mm</li>
            <li>Driven Diameter (D2) = 240 mm</li>
            <li>Motor Velocity (RPM1) = 1,440 RPM</li>
            <li>Center Space (C) = 500 mm</li>
          </ul>
          <div className="bg-gray-50 p-4 rounded-lg font-mono text-xs md:text-sm border border-gray-200 space-y-1">
            <p><strong>Step 1: Determine Driven Rotational Speed (RPM2)</strong></p>
            <p>RPM2 = (D1 × RPM1) / D2</p>
            <p>RPM2 = (120 × 1,440) / 240 = 172,800 / 240 = 720 RPM</p>
            <p><strong>Step 2: Determine Geometric Belt Pitch Length (L)</strong></p>
            <p>L = 2C + (1.5708 × (D1 + D2)) + ((D1 - D2)² / (4C))</p>
            <p>L = 2(500) + (1.5708 × (120 + 240)) + ((120 - 240)² / (4 × 500))</p>
            <p>L = 1,000 + (1.5708 × 360) + ((-120)² / 2,000)</p>
            <p>L = 1,000 + 565.488 + (14,400 / 2,000) = 1,000 + 565.488 + 7.2 = 1,572.688 mm</p>
            <p className="text-blue-800 font-bold mt-1">Calculated Specifications: Pump Speed = 720 RPM, Belt Length = 1,572.69 mm.</p>
          </div>
        </div>
      </section>

      {/* --- WRAP ANGLE CONSIDERATIONS FOR EXTENDED VALUE --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Belt Wrap Angle</h2>
        <p className="mb-4">
          When configuring a two-pulley drive system, tracking the <strong>Wrap Angle (Arc of Contact)</strong> on the smaller pulley is critical to prevent belt slippage. If the driver and driven pulleys are significantly different sizes or the center distance is short, the belt's contact area with the smaller pulley drops below the optimal threshold.
        </p>
        <p>
          As a standard rule of thumb, the wrap angle on the smaller pulley should ideally remain <strong>above 120 degrees</strong>. A smaller contact arc reduces traction, meaning the belt cannot transmit its full rated torque without slipping, creating heat build-up and accelerated wear. If your layout falls below this threshold, consider increasing the center distance or introducing an idler pulley to wrap more of the belt around the smaller wheel.
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="border-t border-gray-100 pt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQ)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              How does belt slip affect the actual pulley speed ratio?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              In a friction-based drive system like a V-belt or flat belt, microscopic slip occurs due to material elasticity and torque thresholds. Typically, an operational slip factor of 1% to 2% is expected in standard operating conditions. This means the driven pulley will rotate slightly slower than the theoretical calculation. For precision synchronization without any slip, engineers utilize synchronous timing belts with matching toothed pulleys.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this calculator be used for both V-belts and flat belts?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes, this calculator utilizes the classic geometric open-belt length formula which applies across flat belts, V-belts, and ribbed serpentine belts. However, remember to measure using the pitch diameter of the pulley (the path where the belt centerline actually travels) rather than the absolute outer edge diameter to achieve maximum accuracy.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What happens to the required belt length if I increase the center distance?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              According to the geometric formula, the belt length scales directly with twice the center distance (2C). If you increase the center distance by 5 inches, your total belt length will increase by slightly more than 10 inches, as the straight spans on both sides grow parallel to the displacement.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Why is the pitch diameter preferred over the outer diameter?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              The pitch diameter represents the neutral axis of the belt where no tension or compression occurs during bending. Because a thick V-belt sits partially inside the pulley groove, its effective rotational radius is slightly smaller than the outer metal lip of the pulley flange. Using the pitch diameter ensures your kinematics and speed ratios match physical operations perfectly.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              Can this calculator process both metric and imperial units?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              Yes. Our calculator supports comprehensive unit shifting. You can mix and match metric measurements (millimeters, centimeters, meters) with imperial dimensions (inches, feet) via the drop-down selectors. The underlying engine automatically standardizes all variables before processing the kinematic algebra.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">
              What is a standard rule of thumb for optimal pulley center distance?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm">
              A standard engineering guideline dictates that the minimum center distance (C) should be greater than half the sum of both pulley diameters plus the radius of the larger pulley. Ideally, the center distance should fall between the diameter of the larger pulley and three times the sum of both pulleys to prevent excessive belt vibration or premature wear.
            </div>
          </details>
        </div>
      </section>

      {/* --- ALL ENGINEERING LINKS DIRECTORY --- */}
      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mt-12">
        <h3 className="font-bold text-lg mb-4 text-gray-900">Explore More Engineering Calculators</h3>
        <p className="text-sm text-gray-600 mb-6">
          Optimize your engineering projects and mechanical designs using our comprehensive collection of specialized analysis tools:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/engineering/beam-deflection" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Beam Deflection Analysis</a>
          <a href="/calculator/engineering/capacitor" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Capacitor Charge Calculator</a>
          <a href="/calculator/engineering/concrete-volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Concrete Volume Estimation</a>
          <a href="/calculator/engineering/electrical-power-loss" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Electrical Power Loss</a>
          <a href="/calculator/engineering/fluid-mechanics-reynolds" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Reynolds Number (Fluid Mechanics)</a>
          <a href="/calculator/engineering/frequency-wavelength" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Frequency & Wavelength</a>
          <a href="/calculator/engineering/gear-ratio-speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Gear Ratio & Speed</a>
          <a href="/calculator/engineering/ohms-law-power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ohm's Law & Power</a>
          <a href="/calculator/engineering/rc-circuit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">RC Circuit Time Constant</a>
          <a href="/calculator/engineering/stress-strain" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Stress & Strain Analysis</a>
          <a href="/calculator/engineering/structural-load" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Structural Load Distribution</a>
          <a href="/calculator/engineering/thermodynamics-ideal-gas" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Ideal Gas Law Dynamics</a>
          <a href="/calculator/engineering/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Torque Calculation Tool</a>
          <a href="/calculator/engineering/transformer-turns-ratio" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Transformer Turns Ratio</a>
        </div>
      </section>
    </div>
  );
}