import React from 'react';

import Link from 'next/link';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Cooking Measurement Converter | Cups, ml, tbsp, tsp
  // META DESCRIPTION: Free online cooking measurement converter for Indian kitchens. Quickly convert cups to ml, teaspoons to tablespoons, and scale baking recipes accurately.
  // URL SLUG: /calculator/conversion/cooking
  // PRIMARY KEYWORD: Cooking measurement converter
  // SECONDARY KEYWORDS: recipe converter online, cups to ml converter, teaspoon to tablespoon, baking measurement converter, convert liquid ingredients, cooking volume calculator, fluid ounces to cups, pint to quart converter, kitchen calculator, metric to imperial cooking
  // LONG-TAIL KEYWORDS: how to convert milliliters to cups for baking, how many teaspoons are in a tablespoon, online recipe scaler for Indian cooking, convert US cups to metric milliliters, how to halve a recipe measurements

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many teaspoons are in a tablespoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are exactly 3 teaspoons (tsp) in 1 standard tablespoon (tbsp). This is a universal culinary conversion used in almost all recipes."
        }
      },
      {
        "@type": "Question",
        name: "How many milliliters (ml) are in one standard cup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "One standard US cup is equal to 236.59 milliliters. In most home kitchens, it is perfectly safe to round this to 240 ml for general cooking and baking."
        }
      },
      {
        "@type": "Question",
        name: "How many tablespoons make up one cup?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There are 16 tablespoons in 1 standard cup. If you need half a cup, that would be 8 tablespoons, and a quarter cup is 4 tablespoons."
        }
      },
      {
        "@type": "Question",
        name: "Are dry measuring cups and liquid measuring cups the same?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In terms of exact mathematical volume, yes, they hold the same amount of space. However, liquid cups are designed with extra space at the top so you don't spill, while dry cups are designed to be leveled off with a knife for accurate dry ingredient measuring."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between US cups and UK cups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A standard US cup holds approximately 240 ml, while an older UK Imperial cup holds about 284 ml. Most modern internet recipes default to the US cup standard, which is what this calculator uses."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Online Cooking Measurement Converter for Recipes
        </h1>
        <p className="mb-4">
          Have you ever found a delicious cake recipe online, only to realize all the ingredients are in US cups or fluid ounces, while you only have standard Indian measuring spoons or a metric jug? Or maybe you want to double a biryani recipe for a family gathering but aren't sure how many tablespoons make up a half cup. That is exactly where our free <strong>Cooking Measurement Converter</strong> helps.
        </p>
        <p className="mb-4">
          Designed specifically for home cooks, bakers, and professionals, this online kitchen calculator takes the guesswork out of recipe scaling. Whether you are translating an international dessert recipe into familiar metric units or simply breaking down cups into teaspoons, this tool ensures your dishes turn out perfectly every single time. 
        </p>
        <p>
          Stop risking your expensive ingredients on bad kitchen math—let our calculator handle the fluid volume conversions instantly so you can focus on cooking!
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-orange-50 p-6 rounded-xl border border-orange-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Cooking Converter</h2>
        <p className="mb-4 text-gray-700">
          Using our recipe conversion tool is completely straightforward. It works seamlessly on your mobile phone, making it the perfect kitchen companion. Follow these simple steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Enter Your Ingredient Amount:</strong> Type the number you want to convert into the "Value" input box (e.g., type "2.5" for two and a half cups).
          </li>
          <li>
            <strong>Select the Starting Unit:</strong> Click the first dropdown menu to select the unit your recipe currently uses. Our calculator supports standard kitchen volumes:
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 list-disc pl-5 text-sm text-gray-700">
              <li>Milliliter (ml)</li>
              <li>Teaspoon (tsp)</li>
              <li>Tablespoon (tbsp)</li>
              <li>Fluid Ounce (fl oz)</li>
              <li>Cup (cup)</li>
              <li>Pint (pt)</li>
              <li>Quart (qt)</li>
              <li>Gallon (gal)</li>
            </ul>
          </li>
          <li>
            <strong>Choose the Target Unit:</strong> In the second dropdown menu, select the unit you want to convert into (for example, converting from "Cup" to "Milliliter").
          </li>
          <li>
            <strong>Read the Output:</strong> The calculator will instantly display the exact converted measurement. You can adjust the starting number, and the output will update automatically in real-time.
          </li>
        </ol>
      </section>

      {/* EXISTING CONTENT MERGED - FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">The Ultimate Cooking Measurement Conversion Guide</h2>
        <p className="mb-4 text-gray-700">
          Scaling a recipe up for a party, or cutting a baking recipe in half, requires precise kitchen math. Knowing your conversions can mean the difference between a perfectly risen cake and a salty disaster. Below, this guide breaks down every exact formula you need.
        </p>

        <div className="bg-amber-50/50 p-6 rounded-xl border border-amber-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Spoons and Cups (The Basics)</h3>
          <p className="text-sm mb-4 text-gray-700">These are the most fundamental formulas used in everyday cooking and baking.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-amber-400">
              <h4 className="font-bold text-gray-900 mb-1">Teaspoons (tsp) & Tablespoons (tbsp)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Tablespoon = 3 Teaspoons</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>tsp to tbsp:</strong> Divide by 3. <em>Example: 6 tsp ÷ 3 = 2 tbsp</em></li>
                <li><strong>tbsp to tsp:</strong> Multiply by 3. <em>Example: 4 tbsp × 3 = 12 tsp</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-amber-400">
              <h4 className="font-bold text-gray-900 mb-1">Tablespoons (tbsp) & Cups</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Cup = 16 Tablespoons</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>tbsp to cup:</strong> Divide by 16. <em>Example: 32 tbsp ÷ 16 = 2 cups</em></li>
                <li><strong>cup to tbsp:</strong> Multiply by 16. <em>Example: 0.5 cups × 16 = 8 tbsp</em></li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-amber-500">
              <h4 className="font-bold text-gray-900 mb-1">Fluid Ounces (fl oz) & Cups</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Cup = 8 Fluid Ounces</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>fl oz to cup:</strong> Divide by 8. <em>Example: 16 fl oz ÷ 8 = 2 cups</em></li>
                <li><strong>cup to fl oz:</strong> Multiply by 8. <em>Example: 3 cups × 8 = 24 fl oz</em></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Metric Recipe Formulas</h3>
          <p className="text-sm mb-4 text-gray-700">If you are using a European or international recipe, you will likely need to convert metric milliliters into US customary cups.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-400">
              <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Cups</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 US Cup = 236.59 Milliliters (Often rounded to 240ml)</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>ml to cup:</strong> Divide by 236.59. <em>Example: 500 ml ÷ 236.59 ≈ 2.11 cups</em></li>
                <li><strong>cup to ml:</strong> Multiply by 236.59. <em>Example: 2 cups × 236.59 = 473.18 ml</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-400">
              <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Tablespoons (tbsp)</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Tablespoon = 14.79 Milliliters (Often rounded to 15ml)</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>ml to tbsp:</strong> Divide by 14.79. <em>Example: 45 ml ÷ 14.79 ≈ 3 tbsp</em></li>
                <li><strong>tbsp to ml:</strong> Multiply by 14.79. <em>Example: 2 tbsp × 14.79 ≈ 29.58 ml</em></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-rose-50/50 p-6 rounded-xl border border-rose-100 mt-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Scaling Up: Pints, Quarts, and Gallons</h3>
          <p className="text-sm mb-4 text-gray-700">Making soup or batch-cooking sauce? You'll need to know the larger liquid formulas.</p>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-rose-400">
              <h4 className="font-bold text-gray-900 mb-1">Cups & Pints</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Pint = 2 Cups</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>cup to pt:</strong> Divide by 2. <em>Example: 6 cups ÷ 2 = 3 pints</em></li>
                <li><strong>pt to cup:</strong> Multiply by 2. <em>Example: 4 pints × 2 = 8 cups</em></li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded shadow-sm border-l-4 border-rose-500">
              <h4 className="font-bold text-gray-900 mb-1">Pints & Quarts</h4>
              <p className="text-sm text-gray-700"><strong>Formula:</strong> 1 Quart = 2 Pints</p>
              <ul className="text-sm mt-2 space-y-1 text-gray-600">
                <li><strong>pt to qt:</strong> Divide by 2. <em>Example: 8 pints ÷ 2 = 4 quarts</em></li>
                <li><strong>qt to pt:</strong> Multiply by 2. <em>Example: 3 quarts × 2 = 6 pints</em></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* A NOTE ON LIQUID VS DRY (From existing content) */}
      <section className="bg-gray-100 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-2">A Critical Note on Volume vs. Weight</h3>
        <p className="text-sm text-gray-700 mb-3">
          It is crucial to remember that this calculator measures <strong>Volume</strong> (the amount of physical space a liquid or powder takes up). Liquid measuring cups and dry measuring cups technically hold the exact same volume. 
        </p>
        <p className="text-sm text-gray-700">
          However, you cannot directly convert a volume measurement (like cups) into a weight measurement (like grams or ounces) without knowing the specific ingredient's density. For example, 1 cup of flour weighs about 120 grams, but 1 cup of water weighs exactly 236 grams! Always use this converter for liquid volumes and basic spoon measurements, and rely on a kitchen scale for precise baking weights.
        </p>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Kitchen Math Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Baking a Cake (US Cups to Metric)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are baking a vanilla sponge cake using an American blog's recipe that calls for <strong>1.5 cups of milk</strong>. Your measuring jug in India only displays <strong>milliliters (ml)</strong>.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Conversion Factor:</strong> 1 Cup = 236.59 ml</li>
                <li><strong>Calculation:</strong> 1.5 cups × 236.59</li>
                <li><strong>Result:</strong> 354.88 ml</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Conclusion: You should pour approximately 355 ml of milk into your measuring jug.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Doubling a Large Batch of Soup</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are cooking a large batch of Dal or Soup for a party. The recipe calls for <strong>32 Fluid Ounces (fl oz)</strong> of vegetable broth, but you want to measure it out using a standard <strong>Cup</strong> measure.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Conversion Factor:</strong> 1 Cup = 8 Fluid Ounces</li>
                <li><strong>Calculation:</strong> 32 fl oz ÷ 8</li>
                <li><strong>Result:</strong> 4 Cups</li>
              </ul>
              <p className="text-blue-700 font-semibold">Conclusion: You need to add exactly 4 cups of broth to your pot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
                {faq.name}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Conversion Tools</h3>
        <p className="text-sm mb-5 text-gray-600">
          Simplify your daily calculations with our comprehensive suite of free converters:
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/calculator/conversion/angle" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Angle Converter</Link>
          <Link href="/calculator/conversion/area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area Converter</Link>
          <Link href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Data Transfer</Link>
          <Link href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Digital Storage</Link>
          <Link href="/calculator/conversion/energy" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Energy Converter</Link>
          <Link href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction to Decimal</Link>
          <Link href="/calculator/conversion/number-base" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Number Base</Link>
          <Link href="/calculator/conversion/power" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Power Converter</Link>
          <Link href="/calculator/conversion/pressure" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pressure Converter</Link>
          <Link href="/calculator/conversion/roman" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Roman Numerals</Link>
          <Link href="/calculator/conversion/speed" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Speed Converter</Link>
          <Link href="/calculator/conversion/temperature" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Temperature Converter</Link>
          <Link href="/calculator/conversion/time" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Time Converter</Link>
          <Link href="/calculator/conversion/torque" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Torque Converter</Link>
          <Link href="/calculator/conversion/unit" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Unit Converter</Link>
          <Link href="/calculator/conversion/volume" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume Converter</Link>
          <Link href="/calculator/conversion/weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Weight Converter</Link>
        </div>
      </section>
    </div>
  );
}