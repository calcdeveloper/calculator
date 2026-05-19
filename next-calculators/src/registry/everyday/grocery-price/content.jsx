import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Grocery Price Calculator India | Calculate Price per Kg
  2. META DESCRIPTION: Free online Grocery Price Calculator. Easily calculate the exact price per kg for vegetables, fruits, and sweets, or find out how many grams you get for your budget.
  3. URL SLUG: /grocery-price-calculator
  4. H1 TITLE: Free Online Grocery Price Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Grocery price calculator India
      - Secondary keywords: price per kg calculator, calculate vegetable price, mandi price calculator, sweet shop weight calculator, price by weight calculator, weight by budget calculator, grams to rupees calculator, calculate grocery bill, per kg price, shopping weight calculator.
      - Long-tail keywords: how to calculate price for 250 grams, calculate exact weight for my budget, formula to calculate price per kg, grocery price calculator in rupees, how much to pay for 100 grams.
  =========================================
*/

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate the price of 100 grams?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To find the price of 100 grams of any item, simply divide the 1 kilogram (1000 grams) price by 10. For example, if apples are ₹150 per kg, 100 grams will cost ₹15 (150 ÷ 10)."
        }
      },
      {
        "@type": "Question",
        "name": "How to quickly calculate the price of 250 grams (one pav)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Since 250 grams is exactly one-fourth (1/4) of a kilogram, you can divide the 1 kg price by 4. If a box of sweets costs ₹800 per kg, 250 grams will cost ₹200 (800 ÷ 4)."
        }
      },
      {
        "@type": "Question",
        "name": "What if the shopkeeper tells me the price per 250g instead of 1kg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In many Indian mandis, expensive items like garlic or ginger are quoted per 250 grams (pav). To find the 1 kg price, simply multiply that amount by 4. If 250g costs ₹40, the 1 kg price is ₹160 (40 × 4)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is calculating by budget useful at the mandi?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Calculating by budget is incredibly useful when you want to avoid loose change. If you only have a ₹100 note and tomatoes are ₹60/kg, using the budget formula tells you that the shopkeeper should weigh exactly 1.66 kg (1666 grams) for your ₹100."
        }
      },
      {
        "@type": "Question",
        "name": "How many grams are in 1 kilogram?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are exactly 1,000 grams in 1 kilogram. This is the foundational metric used for all vegetable, fruit, and sweet weight calculations in India."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Grocery Price Calculator</h1>
        <p className="mb-4">
          Shopping for daily groceries, fresh vegetables at the local <em>mandi</em>, or premium dry fruits and sweets requires quick mental math. In India, shopkeepers usually quote prices per Kilogram (kg). But what happens when you only want to buy 350 grams of paneer? Or what if you only have a ₹500 note and want to know exactly how much Kaju Katli you can get for that amount?
        </p>
        <p className="mb-4">
          Calculating these fractional weights or reverse-calculating from a fixed budget can be confusing, often leaving you wondering if you paid the correct amount or received the right quantity. 
        </p>
        <p>
          Our free online <strong>Grocery Price Calculator</strong> is built specifically for Indian shoppers. It instantly solves these everyday math problems. Whether you want to calculate the total price based on a specific weight, or determine the exact weight you should receive for your fixed budget, this tool ensures you never get shortchanged at the market.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Grocery Price Calculator</h2>
        <p className="mb-4">This calculator offers two distinct modes depending on how you prefer to shop. Follow these steps for error-free billing:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Choose Your Calculation Type</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Select <strong>Price by Weight</strong> if you know the exact amount of grams/kg you want to buy (e.g., "I want 750 grams of apples") and need to find the total cost.</li>
          <li>Select <strong>Weight by Budget</strong> if you have a specific amount of money you want to spend (e.g., "I want ₹200 worth of almonds") and need to know how many grams the shopkeeper should weigh out.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter the Details</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Price per kg (₹):</strong> Always enter the base cost of 1 Kilogram (1000 grams) of the item.</li>
          <li><strong>Target Weight:</strong> (If using Price by Weight) Enter the amount you are buying. You can toggle between Grams (g) or Kilograms (kg).</li>
          <li><strong>Budget (₹):</strong> (If using Weight by Budget) Enter the exact Rupee amount you wish to spend.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Get Your Exact Results</h3>
        <p className="mb-3">The calculator works instantly. You will see a clear summary showing either the <strong>Total Price (₹)</strong> you need to hand over, or the <strong>Total Weight (g / kg)</strong> you need to see on the weighing scale.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Grocery Prices Manually (The Formulas)</h2>
        <p className="mb-6">If you want to double-check the shopkeeper's math on your smartphone calculator, here are the two core formulas you need to understand for daily shopping.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 1: Purchasing According to Weight (Grams)</h3>
            <p className="text-sm mb-4">Use this method when you know exactly how many grams you want to buy, and you need to find out how much it will cost.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Logic:</strong> First, find the price of 1 gram by dividing the 1 kg price by 1000. Then, multiply that by the number of grams you are buying.</li>
              <li><strong>The Formula:</strong> <br/><span className="text-gray-900 font-mono font-bold bg-white p-1 rounded">(Target Weight in grams ÷ 1000) × Cost of 1 kg = Total Price</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 2: Purchasing According to Budget (₹)</h3>
            <p className="text-sm mb-4">Use this method when you have a fixed budget (like a single ₹500 note) and you want to know exactly how much weight the scale should show.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Logic:</strong> Find out what fraction of 1 kg your budget represents by dividing your budget by the 1 kg price. Then multiply by 1000 to convert it into grams.</li>
              <li><strong>The Formula:</strong> <br/><span className="text-gray-900 font-mono font-bold bg-white p-1 rounded">(Your Budget ÷ Cost of 1 kg) × 1000 = Total Weight in Grams</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Mandi Examples</h2>
        <p className="mb-6">Let's look at three everyday shopping scenarios in India to see how these calculations protect your wallet.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Buying Sweets by Weight</h3>
            <p className="mb-2 text-sm">You visit a sweet shop to buy Kaju Katli for a festival. The price is <strong>₹1200 per kg</strong>. You ask the shopkeeper to pack exactly <strong>850 grams</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Formula used:</strong> (Target Weight ÷ 1000) × Price per kg</li>
              <li><strong>Step 1:</strong> Convert grams to kilograms: 850 ÷ 1000 = 0.85 kg.</li>
              <li><strong>Step 2:</strong> Multiply by the kg price: 0.85 × 1200</li>
              <li><strong>Final Answer:</strong> You have to pay <span className="font-bold text-gray-900">₹1020</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Buying Vegetables on a Budget</h3>
            <p className="mb-2 text-sm">You are at the vegetable market. Onions are selling for <strong>₹60 per kg</strong>. You only want to spend the <strong>₹50</strong> note in your pocket to avoid taking loose change.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Formula used:</strong> (Budget ÷ Price per kg) × 1000</li>
              <li><strong>Step 1:</strong> Divide your budget by the kg price: 50 ÷ 60 = 0.8333 kg.</li>
              <li><strong>Step 2:</strong> Convert to grams: 0.8333 × 1000</li>
              <li><strong>Final Answer:</strong> The shopkeeper should weigh out exactly <span className="font-bold text-gray-900">833 grams</span> of onions for your ₹50.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Buying Premium Dry Fruits</h3>
            <p className="mb-2 text-sm">Almonds are <strong>₹950 per kg</strong>. You want to buy exactly <strong>250 grams (one pav)</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Formula used:</strong> You can use the standard formula, or a shortcut! Since 250g is 1/4th of a kg, just divide the price by 4.</li>
              <li><strong>Calculation:</strong> 950 ÷ 4</li>
              <li><strong>Final Answer:</strong> Your 250g of almonds will cost <span className="font-bold text-gray-900">₹237.50</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do you calculate the price of 100 grams?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To find the price of 100 grams of any item, simply divide the 1 kilogram (1000 grams) price by 10. You can do this easily in your head by removing a zero from the price or moving the decimal point one place to the left. For example, if apples are ₹150 per kg, 100 grams will cost ₹15 (150 ÷ 10).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How to quickly calculate the price of 250 grams (one pav)?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Since 250 grams is exactly one-fourth (1/4) of a kilogram, you can just divide the 1 kg price by 4. If a box of sweets costs ₹800 per kg, 250 grams will cost ₹200 (800 ÷ 4). Alternatively, find the 100g price, double it for 200g, and add half of it for the remaining 50g.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What if the shopkeeper tells me the price per 250g instead of 1kg?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In many Indian mandis, expensive items like garlic, ginger, or certain spices are quoted per 250 grams (often called a 'pav'). To find the 1 kg price, simply multiply that amount by 4. If 250g of garlic costs ₹40, the 1 kg price is ₹160 (40 × 4). You can then enter ₹160 into our calculator as the Base Price per Kg.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is calculating by budget useful at the mandi?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Calculating by budget is incredibly useful when you want to avoid dealing with loose change, which is often a hassle in busy Indian markets. If you only have a ₹100 note and tomatoes are ₹60/kg, using the 'Weight by Budget' mode tells you that the shopkeeper should weigh exactly 1.66 kg (1666 grams) for your ₹100.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many grams are in 1 kilogram?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are exactly 1,000 grams in 1 kilogram. This is the foundational metric rule used for all vegetable, fruit, and sweet weight calculations across India.
            </div>
          </details>
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need help managing your daily tasks and budgets? Check out our suite of Smart Online Utility Tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount & Sales Tax Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Monthly Expense Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
        </div>
      </section>
      
    </div>
  );
}