import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between speed and velocity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Speed is a scalar quantity, meaning it only measures how fast an object is moving (e.g., 60 km/h). Velocity is a vector quantity, meaning it measures both the speed and the direction of the object (e.g., 60 km/h North). For basic conversion purposes, the numerical values and units remain exactly the same."
        }
      },
      {
        "@type": "Question",
        "name": "How do I easily convert km/h to m/s?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fastest way to convert kilometers per hour (km/h) to meters per second (m/s) is to divide the speed by 3.6. For example, 72 km/h divided by 3.6 equals 20 m/s."
        }
      },
      {
        "@type": "Question",
        "name": "Which is faster: mph or km/h?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Miles per hour (mph) is faster. Because one mile is equal to 1.609 kilometers, a car traveling at 60 mph is actually traveling at 96.56 km/h."
        }
      },
      {
        "@type": "Question",
        "name": "What is Mach 1?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mach 1 is the speed of sound. At standard sea-level conditions (approx 20°C), Mach 1 is equal to roughly 343 meters per second, or 1,234.8 km/h. Speeds below Mach 1 are subsonic, while speeds above are supersonic."
        }
      },
      {
        "@type": "Question",
        "name": "Why do ships and planes use knots instead of km/h?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Knots are based on nautical miles, which are directly tied to the Earth's circumference (one minute of latitude equals one nautical mile). This makes navigational mapping across the globe much easier for pilots and sailors than using standard land-based kilometers or miles."
        }
      },
      {
        "@type": "Question",
        "name": "How fast is 1 knot in km/h?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "One knot is equal to exactly 1.852 kilometers per hour (km/h) or approximately 1.15 miles per hour (mph)."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Speed & Velocity Converter Online</h1>
        <p className="mb-4">
          Speed is a "compound" measurement—it tracks a specific <strong>distance</strong> traveled over a specific amount of <strong>time</strong>. Because of this, converting speed means you are actually calculating the difference between two distance systems (like miles vs. kilometers) and two time systems (like hours vs. seconds) simultaneously. Doing this manually can lead to complex math errors.
        </p>
        <p className="mb-4">
          Whether you are an Indian student solving complex physics equations, a developer programming a fitness app, an automotive enthusiast analyzing global car stats, or an aviation buff calculating jet speeds, our accurate <strong>Speed & Velocity Converter</strong> does the heavy lifting for you.
        </p>
        <p>
          Easily switch between everyday driving metrics like km/h to scientific measurements like meters per second, all the way to aeronautical units like Knots and Mach, completely free and instantly.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Speed Converter</h2>
        <p className="mb-4">Our tool is designed for absolute simplicity. Convert between any major velocity units in just three steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Speed</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the <strong>Speed</strong> input field.</li>
          <li>Type the numerical value you want to convert (e.g., 60).</li>
          <li>Alternatively, you can drag the interactive slider to quickly find your desired speed.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown to choose your starting measurement.</li>
          <li>Click the <strong>To Unit</strong> dropdown to choose the measurement you want to convert into.</li>
          <li><strong>Available Options:</strong>
            <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
              <li>Miles per Hour (mph)</li>
              <li>Kilometers per Hour (km/h)</li>
              <li>Meters per Second (m/s)</li>
              <li>Feet per Second (ft/s)</li>
              <li>Knots (kn)</li>
              <li>Mach (Speed of Sound)</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: View the Result</h3>
        <p className="mb-3">The calculator works dynamically. Look at the large green output panel on the right side of the screen to see your instant conversion (e.g., <strong>60 mph = 96.56064 km/h</strong>).</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Speed Conversion Formulas</h2>
        <p className="mb-6">If you need to perform these calculations on an exam or for a physics project, here are the exact mathematical formulas used by our calculator.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Driving Speeds (MPH vs. KM/H)</h3>
            <p className="text-sm mb-4">These are the most commonly searched formulas for international travel and vehicle imports. In India, km/h is the legal standard, while the US and UK use mph.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>mph to km/h:</strong> Multiply by 1.60934. <br/><span className="text-gray-500 italic">Example: 60 mph × 1.60934 = 96.56 km/h</span></li>
              <li><strong>km/h to mph:</strong> Divide by 1.60934 (or multiply by 0.621371). <br/><span className="text-gray-500 italic">Example: 100 km/h × 0.621371 = 62.14 mph</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Scientific & Engineering Speeds</h3>
            <p className="text-sm mb-4">Physics equations generally require converting standard hourly vehicle speeds into "per second" base units.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>km/h to m/s:</strong> Divide by 3.6. <br/><span className="text-gray-500 italic">Example: 90 km/h ÷ 3.6 = 25 m/s</span></li>
              <li><strong>m/s to km/h:</strong> Multiply by 3.6. <br/><span className="text-gray-500 italic">Example: 10 m/s × 3.6 = 36 km/h</span></li>
              <li><strong>mph to ft/s:</strong> Multiply by 1.46667. <br/><span className="text-gray-500 italic">Example: 60 mph × 1.46667 = 88 ft/s</span></li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Aviation & Nautical Speeds</h3>
            <p className="text-sm mb-4">Pilots and sailors do not use standard miles or kilometers; they use Nautical Miles, measured in Knots.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>knots to mph:</strong> Multiply by 1.15078. <br/><span className="text-gray-500 italic">Example: 20 knots × 1.15078 = 23.01 mph</span></li>
              <li><strong>knots to km/h:</strong> Multiply by 1.852. <br/><span className="text-gray-500 italic">Example: 30 knots × 1.852 = 55.56 km/h</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Conversion Examples</h2>
        <p className="mb-6">Let's look at a few practical scenarios where translating velocity is essential.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Analyzing Usain Bolt's Sprint</h3>
            <p className="mb-2 text-sm">During his world record 100m sprint, Usain Bolt reached a top speed of roughly <strong>12.27 meters per second (m/s)</strong>. How fast is this in a unit we understand better, like km/h?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 12.27 m/s</li>
              <li><strong>Formula used:</strong> m/s × 3.6</li>
              <li><strong>Calculation:</strong> 12.27 × 3.6</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">44.17 km/h</span> (Faster than school zone speed limits!)</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Importing a US Car to India</h3>
            <p className="mb-2 text-sm">You import an American sports car, and the speedometer reads exactly <strong>85 mph</strong> on the highway. You need to know if you are breaking the Indian speed limit of 100 km/h.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 85 mph</li>
              <li><strong>Formula used:</strong> mph × 1.60934</li>
              <li><strong>Calculation:</strong> 85 × 1.60934</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">136.79 km/h</span> (You are definitely speeding!)</li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">What exactly is "Mach"?</h3>
        <p className="text-sm mb-2">
          "Mach" is a dynamic ratio used in aviation to represent the speed of an object relative to the speed of sound. Mach 1 is exactly the speed of sound.
        </p>
        <p className="text-sm mb-2">
          Because the speed of sound changes based on temperature and air density, Mach is not a fixed unit like miles or kilometers! For example, sound travels slower in high-altitude, freezing air than it does at sea level.
        </p>
        <p className="text-sm">
          However, for standard digital calculations, Mach 1 is universally calculated at sea level (at roughly 20°C / 68°F), making it equal to <strong>343 meters per second (1234.8 km/h or 767.26 mph)</strong>.
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between speed and velocity?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Speed is a scalar quantity, meaning it only measures how fast an object is moving (e.g., 60 km/h). Velocity is a vector quantity, meaning it measures both the speed and the direction of the object (e.g., 60 km/h North). For basic conversion purposes, the numerical values and units remain exactly the same.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I easily convert km/h to m/s?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The fastest way to convert kilometers per hour (km/h) to meters per second (m/s) is to divide the speed by 3.6. For example, 72 km/h divided by 3.6 equals 20 m/s. This is the most common conversion needed in high school and college physics.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which is faster: mph or km/h?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Miles per hour (mph) is a faster measurement. Because one mile is longer than one kilometer (1 mile = 1.609 km), a car traveling at 60 mph is actually traveling at 96.56 km/h.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why do ships and planes use knots instead of km/h?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Knots are based on "nautical miles," which are directly tied to the Earth's circumference and latitude lines (one minute of latitude equals one nautical mile). This makes navigational mapping across the open ocean or sky much more accurate and easier for pilots and sailors compared to standard land-based kilometers.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How fast is 1 knot in km/h?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              One knot is equal to exactly 1.852 kilometers per hour (km/h), or approximately 1.15 miles per hour (mph).
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
          <a href="/calculator/conversion/roman" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Roman Numerals Converter</a>
          <a href="/calculator/conversion/temperature" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Temperature</a>
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