import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is normal human body temperature?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Normal human body temperature is generally accepted as 98.6°F or 37°C. However, it can vary slightly depending on the person, the time of day, and how it is measured."
        }
      },
      {
        "@type": "Question",
        "name": "At what temperature does water boil and freeze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under standard atmospheric pressure, water freezes at 0°C (which is 32°F or 273.15 K) and boils at 100°C (which is 212°F or 373.15 K)."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a temperature where Celsius and Fahrenheit are the same?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The Celsius and Fahrenheit scales intersect at -40°. Therefore, -40°C is exactly equal to -40°F."
        }
      },
      {
        "@type": "Question",
        "name": "Why doesn't Kelvin use the degree (°) symbol?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Kelvin is an absolute thermodynamic temperature scale based on absolute zero, not a scale based on arbitrary reference points like freezing or boiling water. Because it is a direct measurement of energy, it is denoted simply as 'K' without the degree symbol."
        }
      },
      {
        "@type": "Question",
        "name": "Which temperature scale is used in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "India officially uses the Celsius (°C) scale for weather reports, cooking, and daily measurements. However, for measuring human body temperature (like checking for a fever), Fahrenheit (°F) is still universally used by doctors and in households."
        }
      },
      {
        "@type": "Question",
        "name": "What is Absolute Zero?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolute Zero is the lowest possible theoretical temperature where nothing could be colder and no heat energy remains in a substance. It is defined as 0 K, which equals -273.15°C or -459.67°F."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Temperature Converter</h1>
        <p className="mb-4">
          Converting temperatures accurately is a daily necessity. Whether you are an Indian home chef following an international baking recipe, a traveler checking weather updates abroad, or a student solving physics problems, getting the temperature right is critical. 
        </p>
        <p className="mb-4">
          Unlike measuring distance or weight (which simply scale up from zero), temperature systems have entirely different starting points—like the freezing point of water or absolute zero. Because of this, you must use specific mathematical formulas that combine multiplication, division, addition, and subtraction to convert accurately. Doing this manually can easily lead to errors.
        </p>
        <p>
          Our free online <strong>Temperature Converter</strong> does the math for you instantly. Designed for quick, accurate conversions, it helps users switch effortlessly between <strong>Celsius (°C)</strong>, <strong>Fahrenheit (°F)</strong>, and scientific <strong>Kelvin (K)</strong>.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Temperature Calculator</h2>
        <p className="mb-4">Our tool is designed for absolute simplicity. Convert between any major temperature scales in just three easy steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Temperature</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the main <strong>Temperature</strong> input box on the screen.</li>
          <li>Type the numerical value you want to convert (for example, type "12").</li>
          <li>Our calculator accepts positive numbers, negative numbers (e.g., -40), and decimals (e.g., 98.6).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown menu to choose your starting measurement.</li>
          <li>Click the <strong>To Unit</strong> dropdown menu to pick the scale you want to convert into.</li>
          <li><strong>Available Options:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Celsius (°C)</li>
              <li>Fahrenheit (°F)</li>
              <li>Kelvin (K)</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: View the Result</h3>
        <p className="mb-3">The calculator works instantly as you type or change units. Look at the large green output panel on the right side of your screen to see the final conversion (e.g., entering 12 Celsius to Fahrenheit will instantly show <strong>53.6 Fahrenheit</strong>).</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Temperature Conversion Formulas</h2>
        <p className="mb-6">If you are a student preparing for exams or simply curious about the math behind the magic, here are the exact formulas used to calculate temperature conversions.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Celsius & Fahrenheit Formulas</h3>
            <p className="text-sm mb-4">These are the two most commonly used temperature scales globally. While India relies on Celsius (°C) for weather, the US uses Fahrenheit (°F).</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Celsius to Fahrenheit (°C to °F):</strong> Multiply the temperature by 1.8 (or 9/5), then add 32. <br/><span className="text-gray-500 italic">Formula: (°C × 1.8) + 32 = °F</span></li>
              <li><strong>Fahrenheit to Celsius (°F to °C):</strong> Subtract 32, then divide by 1.8 (or multiply by 5/9). <br/><span className="text-gray-500 italic">Formula: (°F - 32) × 5/9 = °C</span></li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Kelvin Formulas (Scientific)</h3>
            <p className="text-sm mb-4">Kelvin (K) is the absolute temperature scale used primarily in scientific research, engineering, and astronomy. 0 K represents "Absolute Zero"—the theoretical point where all molecular movement stops.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Celsius to Kelvin:</strong> Because one degree Celsius is the exact same size as one Kelvin, you only need to add an offset. <br/><span className="text-gray-500 italic">Formula: °C + 273.15 = K</span></li>
              <li><strong>Kelvin to Celsius:</strong> Subtract the offset. <br/><span className="text-gray-500 italic">Formula: K - 273.15 = °C</span></li>
              <li><strong>Fahrenheit to Kelvin:</strong> Convert to Celsius first in the middle of the equation, then to Kelvin. <br/><span className="text-gray-500 italic">Formula: (°F - 32) × 5/9 + 273.15 = K</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Conversion Examples</h2>
        <p className="mb-6">Let's look at a few practical, everyday scenarios to see how these temperature conversions play out in the real world.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-red-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Checking for a Fever (Fahrenheit to Celsius)</h3>
            <p className="mb-2 text-sm">In India, doctors and digital thermometers still predominantly use Fahrenheit to measure body temperature. A thermometer reads <strong>101°F</strong>. How much is this in Celsius?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 101°F</li>
              <li><strong>Formula used:</strong> (°F - 32) × 5/9 = °C</li>
              <li><strong>Calculation:</strong> (101 - 32) = 69. Next, 69 × (5 ÷ 9)</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">38.33°C</span> (This indicates a fever, as normal human body temperature is around 37°C).</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Baking an American Cake (Fahrenheit to Celsius)</h3>
            <p className="mb-2 text-sm">You find a great cake recipe online, but the instructions are from the US and say to preheat your oven to <strong>350°F</strong>. Your oven at home only has Celsius settings.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 350°F</li>
              <li><strong>Formula used:</strong> (°F - 32) ÷ 1.8 = °C</li>
              <li><strong>Calculation:</strong> (350 - 32) = 318. Next, 318 ÷ 1.8</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">176.6°C</span> (You can safely set your oven to 175°C or 180°C).</li>
            </ul>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Science Class Data (Celsius to Kelvin)</h3>
            <p className="mb-2 text-sm">Your physics teacher asks you to convert a standard room temperature of <strong>25°C</strong> into Kelvin for an experiment worksheet.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 25°C</li>
              <li><strong>Formula used:</strong> °C + 273.15 = K</li>
              <li><strong>Calculation:</strong> 25 + 273.15</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">298.15 K</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is normal human body temperature?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Normal human body temperature is generally accepted as 98.6°F or 37°C. However, it can vary slightly depending on the person, the time of day, and how it is measured (orally, under the arm, etc.).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">At what temperature does water boil and freeze?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under standard atmospheric pressure at sea level, water freezes at 0°C (which is 32°F or 273.15 K) and boils at 100°C (which is 212°F or 373.15 K).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is there a temperature where Celsius and Fahrenheit are the same?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! The Celsius and Fahrenheit scales intersect at negative 40 degrees. Therefore, -40°C is exactly equal to -40°F.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which temperature scale is used in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              India officially uses the Celsius (°C) scale for weather reports, cooking instructions, and daily measurements. However, for measuring human body temperature (like checking for a fever), Fahrenheit (°F) is still universally used by medical professionals and in households.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why doesn't Kelvin use the degree (°) symbol?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Kelvin is an absolute thermodynamic temperature scale based on absolute zero, not a relative scale based on arbitrary reference points like the freezing or boiling of water. Because it is a direct measurement of energy, it is denoted simply as "K" without the degree symbol.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is Absolute Zero?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Absolute Zero is the lowest possible theoretical temperature where nothing could be colder, and no heat energy remains in a substance. It is defined as 0 K, which equals -273.15°C or -459.67°F.
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