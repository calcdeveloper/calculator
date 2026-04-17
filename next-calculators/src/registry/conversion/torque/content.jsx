import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is torque in simple words?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Torque is a twisting or turning force that causes an object to rotate around an axis or pivot point. If you think of 'force' as a straight push or pull, 'torque' is a twist. You apply torque when you use a wrench to tighten a bolt or turn a steering wheel."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Nm and lb-ft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Newton-meter (Nm) is the metric (SI) unit of torque, representing one Newton of force applied to a one-meter lever. Pound-force foot (lb-ft or lbf-ft) is the imperial unit, representing one pound of force applied to a one-foot lever. Nm is standard in India and Europe, while lb-ft is widely used in the US and the UK."
        }
      },
      {
        "@type": "Question",
        "name": "Is higher torque better for a car?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, especially for city driving in India or carrying heavy loads. High torque at low RPM (revolutions per minute) gives a car better initial acceleration from a standstill, making it easier to overtake in traffic and pull up steep inclines without stalling."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert Newton-meters to Kilogram-force meters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert Newton-meters (Nm) to Kilogram-force meters (kgf-m), you divide the torque value by 9.80665. For rough estimations, dividing by 10 gives a very close approximate value."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Torque and Horsepower?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Torque is the actual twisting force (the 'muscle') an engine produces, which gets a car moving from a stop. Horsepower (Power) is how fast that work can be done over time (the 'speed'). In short: Torque gets you going, Horsepower keeps you going fast."
        }
      },
      {
        "@type": "Question",
        "name": "Why do mechanics use Pound-force inches (lbf-in)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Pound-force inches (lbf-in) are used for delicate or smaller mechanical tasks, like tightening small engine components, bicycles, or electronics. Using lb-ft on these parts would result in too much force, potentially snapping the bolt or stripping the threads."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Torque Converter</h1>
        <p className="mb-4">
          Whether you are comparing the engine specifications of the latest cars in India, following an American repair manual to tighten lug nuts on a wheel, or studying mechanical engineering, understanding and converting torque is essential. Torque is the rotational force that causes an object to spin—the twisting equivalent of a straight push or pull.
        </p>
        <p className="mb-4">
          Because different industries and regions use completely different measurement systems (metric vs. imperial), converting torque values manually can be confusing. An error in conversion could mean under-tightening a critical engine bolt or snapping it entirely!
        </p>
        <p>
          Our free online <strong>Torque Converter</strong> eliminates the guesswork. Instantly and precisely convert between Newton-meters, Pound-feet, Kilogram-force meters, and other micro-units used in precision mechanics.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Torque Calculator</h2>
        <p className="mb-4">Avoid complex manual math and potential mechanical errors. Convert any torque measurement instantly in three simple steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Your Torque Value</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Find the numeric input field on the calculator.</li>
          <li>Enter the torque value you wish to convert (e.g., "400").</li>
          <li>You can enter whole numbers or exact decimals for highly precise mechanical conversions.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Choose Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown menu to select the unit you are starting with.</li>
          <li>Click the <strong>To Unit</strong> dropdown menu to select your desired output unit.</li>
          <li><strong>Available Units Supported:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Newton meter (N-m) - <em>Global Standard</em></li>
              <li>Kilogram-force meter (kgf-m)</li>
              <li>Pound-force foot (lbf-ft or lb-ft) - <em>US Standard</em></li>
              <li>Pound-force inch (lbf-in or lb-in)</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Get Your Result</h3>
        <p className="mb-3">The calculator is entirely automated. The moment you type a number or change a dropdown unit, the converted torque value will instantly display in the highlighted results panel.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Torque Conversion Formulas</h2>
        <p className="mb-6">For engineers, physics students, and automotive professionals who want to understand the mathematics behind the conversions, here are the primary multiplier formulas used in our calculator.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Metric to Imperial (Nm to lb-ft)</h3>
            <p className="text-sm mb-4">The Newton-meter (Nm) is the standard SI unit for torque, heavily used in Indian auto specs. The Pound-foot (lb-ft) is the American standard.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Nm to lb-ft:</strong> Multiply the Nm value by 0.737562. <br/><span className="text-gray-500 italic">Formula: Nm × 0.737562 = lbf-ft</span></li>
              <li><strong>lb-ft to Nm:</strong> Multiply the lb-ft value by 1.355818. <br/><span className="text-gray-500 italic">Formula: lbf-ft × 1.355818 = Nm</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Newton-meters to Kilogram-force meters (Nm to kgf-m)</h3>
            <p className="text-sm mb-4">Kilogram-force meter is an older metric unit still occasionally seen in industrial machinery specs and older vehicle manuals.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Nm to kgf-m:</strong> Divide by standard gravity (9.80665). <br/><span className="text-gray-500 italic">Formula: Nm ÷ 9.80665 = kgf-m</span></li>
              <li><strong>kgf-m to Nm:</strong> Multiply by 9.80665. <br/><span className="text-gray-500 italic">Formula: kgf-m × 9.80665 = Nm</span></li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Pound-foot to Pound-inch (lb-ft to lb-in)</h3>
            <p className="text-sm mb-4">When working on delicate parts (like aluminum engine blocks or carbon fiber bicycle frames), torque is measured in pound-inches to prevent over-tightening.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>lb-ft to lb-in:</strong> Multiply by 12 (since there are 12 inches in a foot). <br/><span className="text-gray-500 italic">Formula: lbf-ft × 12 = lbf-in</span></li>
              <li><strong>lb-in to lb-ft:</strong> Divide by 12. <br/><span className="text-gray-500 italic">Formula: lbf-in ÷ 12 = lbf-ft</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Torque Examples</h2>
        <p className="mb-6">How do these mathematical conversions apply in the garage or the real world? Here are a few practical scenarios.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Comparing Car Specs (Nm to lb-ft)</h3>
            <p className="mb-2 text-sm">You are reading a review of a new diesel SUV launched in India. The brochure says the engine produces <strong>400 N-m</strong> of torque. You are watching a US-based review on YouTube, and want to know what this is in Pound-feet.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 400 N-m</li>
              <li><strong>Formula used:</strong> Nm × 0.737562 = lb-ft</li>
              <li><strong>Calculation:</strong> 400 × 0.737562</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">295.02 lbf-ft</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Tightening a Wheel Lug Nut (lb-ft to Nm)</h3>
            <p className="mb-2 text-sm">You are installing a spare tire. The manual of your imported car specifies that the lug nuts must be tightened to exactly <strong>85 lbf-ft</strong>. However, the torque wrench you bought at a local hardware store only displays Newton-meters (N-m).</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 85 lbf-ft</li>
              <li><strong>Formula used:</strong> lbf-ft × 1.355818 = Nm</li>
              <li><strong>Calculation:</strong> 85 × 1.355818</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">115.24 N-m</span>. You should set your wrench to roughly 115 Nm.</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Bicycle Maintenance (Nm to lb-in)</h3>
            <p className="mb-2 text-sm">You are assembling a high-end bicycle. The stem bolts require exactly <strong>5 N-m</strong> of torque to avoid crushing the carbon fiber handlebars. Your micro-torque wrench only reads in Pound-force inches (lbf-in).</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 5 N-m</li>
              <li><strong>Formula used:</strong> Nm × 8.85075 = lbf-in</li>
              <li><strong>Calculation:</strong> 5 × 8.85075</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">44.25 lbf-in</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is torque in simple words?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Torque is a twisting or turning force that causes an object to rotate around an axis or pivot point. If you think of "force" as a straight push or pull, "torque" is a twist. You apply torque when you use a wrench to tighten a bolt, open a door, or when an engine turns the wheels of a car.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between Nm and lb-ft?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Newton-meter (Nm) is the metric (SI) unit of torque, representing one Newton of force applied to a one-meter-long lever. Pound-force foot (lb-ft or lbf-ft) is the imperial unit, representing one pound of force applied to a one-foot lever. Nm is standard in India, Europe, and most of the world, while lb-ft is predominantly used in the United States.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is higher torque better for a car?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, especially in real-world driving conditions in India. High torque (especially at low engine RPMs) gives a car better initial acceleration from a standstill. It makes it easier to overtake in stop-and-go traffic, carry heavy loads with ease, and pull up steep inclines (like driving in hill stations) without stalling the engine.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I convert Newton-meters to Kilogram-force meters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To convert Newton-meters (Nm) to Kilogram-force meters (kgf-m), divide the torque value by 9.80665 (which represents standard gravity). For quick mental math and rough estimations, simply dividing your Nm value by 10 will give you a very close approximate kgf-m value.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between Torque and Horsepower?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It is a common point of confusion! <strong>Torque</strong> is the actual twisting force (the "muscle") an engine produces, which gets a heavy car moving from a dead stop. <strong>Horsepower (Power)</strong> is how fast that work can be done over time (the "speed"). A popular automotive saying goes: <em>"Torque gets you going, but Horsepower keeps you going fast."</em>
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why do mechanics use Pound-force inches (lbf-in)?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Pound-force inches (lbf-in) are a much smaller unit of torque. They are used for delicate or precise mechanical tasks—such as tightening small engine components, spark plugs, bicycle stems, or electronics. Using massive lb-ft torque wrenches on these small parts would result in applying too much force, potentially stripping the threads or snapping the bolt.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Scientific & Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need to calculate other metrics? Check out our suite of free online conversion tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/conversion/angle" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Angle Converter</a>
          <a href="/calculator/conversion/area" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Area Converter</a>
          <a href="/calculator/conversion/cooking" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Cooking Measurements</a>
          <a href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Data Transfer</a>
          <a href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Digital Storage</a>
          <a href="/calculator/conversion/energy" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Energy Converter</a>
          <a href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Fraction to Decimal</a>
          <a href="/calculator/conversion/number-base" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Number Base</a>
          <a href="/calculator/conversion/power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Power Converter</a>
          <a href="/calculator/conversion/pressure" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Pressure Converter</a>
          <a href="/calculator/conversion/roman" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Roman Numerals</a>
          <a href="/calculator/conversion/speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Speed Converter</a>
          <a href="/calculator/conversion/temperature" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Temperature Converter</a>
          <a href="/calculator/conversion/time" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Converter</a>
          <a href="/calculator/conversion/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Torque Converter</a>
          <a href="/calculator/conversion/unit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Unit Converter</a>
          <a href="/calculator/conversion/volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Volume Converter</a>
          <a href="/calculator/conversion/weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Weight & Mass</a>
        </div>
      </section>
      
    </div>
  );
}