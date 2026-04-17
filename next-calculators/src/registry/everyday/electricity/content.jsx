import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Electricity Bill Calculator India | Calculate Per Unit Cost
  2. META DESCRIPTION: Calculate your monthly electricity bill easily with our free Electricity Bill Calculator. Estimate energy costs using meter readings, unit rates, and fixed charges in India.
  3. URL SLUG: /electricity-bill-calculator
  4. H1 TITLE: Free Online Electricity Bill Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Electricity bill calculator India
      - Secondary keywords: power bill calculator, calculate electricity bill, unit rate calculator, electricity cost calculator, meter reading calculator, energy bill calculator, calculate power consumption, electricity tariff calculator, fixed charge electricity bill, electricity unit calculator.
      - Long-tail keywords: How to calculate electricity bill from meter reading, calculate electricity bill per unit in India, formula to calculate electricity bill, what are fixed charges in electricity bill, check electricity bill amount online.
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
        "name": "What exactly is 1 unit of electricity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, 1 unit of electricity is equal to 1 Kilowatt-hour (kWh). This means if you run an appliance that consumes 1000 watts of power for exactly one hour, it will consume 1 unit of electricity on your meter."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate my electricity bill from a sub-meter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate a sub-meter bill (common for tenants or PG residents), note down the reading on the first day of the month and the last day of the month. Subtract the previous reading from the current reading to get total units consumed. Multiply this by the flat unit rate agreed upon with your landlord."
        }
      },
      {
        "@type": "Question",
        "name": "What are the 'Fixed Charges' on my electricity bill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixed charges (also called meter rent or sanctioned load charge) are mandatory minimum fees levied by the electricity distribution board (like BSES, MSEDCL, BESCOM). This fee covers the cost of maintaining the power grid and your connection, regardless of whether you consume any electricity."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my state's official bill slightly different from simple multiplication?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most state electricity boards in India use a 'slab rate' system. For example, the first 100 units might cost ₹4 per unit, the next 100 units cost ₹6, and anything above 200 costs ₹8. This calculator uses a flat rate, which is perfect for tenant sub-meters, commercial flat-rate billing, or estimating average costs."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my monthly electricity bill?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reduce your bill by switching to 5-star energy-efficient appliances (especially ACs and refrigerators), replacing old bulbs with LEDs, unplugging devices on standby mode, and utilizing natural light. Keeping your AC at an optimal 24 degrees Celsius also significantly saves power."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Electricity Bill Calculator</h1>
        <p className="mb-4">
          Understanding your electricity bill doesn't have to be complicated. Every month, millions of Indian households and businesses receive their power bills, yet many are unsure how the final amount is actually calculated. Whether you are dealing with state electricity boards (like BESCOM, TNEB, MSEB, or BSES) or paying your landlord via a private sub-meter, knowing the math protects you from overcharging.
        </p>
        <p className="mb-4">
          Electricity is measured in <strong>Kilowatt-hours (kWh)</strong>, which is commonly referred to in India simply as a "Unit." Your bill is primarily determined by how many units you consume, multiplied by the cost per unit, plus standard connection fees. 
        </p>
        <p>
          Our free online <strong>Electricity Bill Calculator</strong> is designed to provide immediate, accurate estimates of your energy costs. It is highly beneficial for tenants verifying sub-meter charges with their landlords, homeowners tracking their monthly consumption, and small business owners forecasting their utility expenses.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Electricity Bill Calculator</h2>
        <p className="mb-4">Our calculator offers two convenient methods depending on the information you have on hand: calculating directly from your physical meter, or calculating using your total known units. Here is how to use the tool:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Choose Your Calculation Method</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Select <strong>Meter Reading</strong> if you are looking at your physical electrical meter and want to calculate consumption between two dates.</li>
          <li>Select <strong>Total Units</strong> if you already know exactly how many units (kWh) you have consumed this billing cycle.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter Your Data</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>If using Meter Reading:</strong> Enter the <em>Previous Reading</em> (from last month's bill or your records) and the <em>Current Reading</em> (the number currently displayed on the meter).</li>
          <li><strong>If using Total Units:</strong> Simply input your total consumption in the <em>Total Units Consumed</em> box.</li>
          <li><strong>Cost Per Unit (₹):</strong> Enter the rate you are charged per unit. This could be your landlord's flat rate (e.g., ₹8 or ₹10) or your board's average rate.</li>
          <li><strong>Fixed Charges (₹):</strong> Enter any mandatory monthly fees, meter rent, or connection load charges. If you don't have any, leave it as 0.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Review Your Results</h3>
        <p className="mb-3">The calculator will instantly generate your results in the summary box. You will see:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 mb-4">
          <li><strong>Total Units:</strong> The exact kWh consumed (if using the meter reading method).</li>
          <li><strong>Energy Charge:</strong> The pure cost of the electricity consumed before base fees.</li>
          <li><strong>Final Bill:</strong> Your total payable amount including fixed charges.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Formula: How Electricity Bills are Calculated</h2>
        <p className="mb-6">The math behind your power bill involves simple subtraction and multiplication. By breaking it down, you can manually verify your automated bills or calculate shared expenses in a rented apartment.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Finding Total Units Consumed (Meter Reading Method)</h3>
            <p className="text-sm mb-4">Electricity meters simply run infinitely forward. To find your usage for a specific period (like one month), you must find the difference between the meter's current state and its state a month ago.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>To find Total Units:</strong> Subtract the older reading from the newer reading. <br/><span className="text-gray-500 italic">Formula: Current Meter Reading - Previous Meter Reading = Total Units (kWh)</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Calculating the Bill Amount</h3>
            <p className="text-sm mb-4">Once you have your total units consumed, you apply your tariff rates and fixed fees.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>To find Energy Charge:</strong> Multiply your consumed units by the cost per unit. <br/><span className="text-gray-500 italic">Formula: Total Units × Cost Per Unit = Energy Charge</span></li>
              <li><strong>To find Final Payable Bill:</strong> Add mandatory monthly fixed charges to the energy charge. <br/><span className="text-gray-500 italic">Formula: Energy Charge + Fixed Charges = Total Bill</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Bill Calculation Examples</h2>
        <p className="mb-6">Let's explore two common scenarios in India: a tenant verifying a private sub-meter, and a homeowner tracking their known monthly consumption.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Tenant Checking a Sub-Meter</h3>
            <p className="mb-2 text-sm">Rahul lives in a PG in Bengaluru. His landlord charges a flat rate of <strong>₹9.00 per unit</strong>, with no fixed charges. On March 1st, Rahul's sub-meter read <strong>14,200</strong>. On April 1st, it reads <strong>14,450</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Step 1: Find Units:</strong> 14,450 (Current) - 14,200 (Previous) = 250 Units.</li>
              <li><strong>Step 2: Find Energy Charge:</strong> 250 Units × ₹9.00 = ₹2,250.</li>
              <li><strong>Step 3: Add Fixed Charges:</strong> ₹2,250 + ₹0 = ₹2,250.</li>
              <li><strong>Final Answer:</strong> Rahul owes his landlord <span className="font-bold text-gray-900">₹2,250</span> for the month.</li>
            </ul>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Homeowner with Known Units</h3>
            <p className="mb-2 text-sm">Priya lives in Delhi and checks her smart meter app. It shows she has consumed <strong>340 units</strong> this month. Her average electricity rate is roughly <strong>₹6.50 per unit</strong>, and her sanctioned load incurs a <strong>Fixed Charge of ₹250</strong> per month.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Step 1: Find Energy Charge:</strong> 340 Units × ₹6.50 = ₹2,210.</li>
              <li><strong>Step 2: Add Fixed Charges:</strong> ₹2,210 (Energy Charge) + ₹250 (Fixed Charge) = ₹2,460.</li>
              <li><strong>Final Answer:</strong> Priya's estimated total electricity bill is <span className="font-bold text-gray-900">₹2,460</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What exactly is 1 unit of electricity?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, 1 unit of electricity is equivalent to 1 Kilowatt-hour (kWh). Mathematically, this means if you run a heavy appliance that consumes 1000 watts of power (like a small heater or iron) for exactly one hour, it will consume 1 unit of electricity on your meter.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate my electricity bill from a sub-meter?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Calculating a sub-meter bill, which is very common for tenants or PG residents, is straightforward. Note down the physical reading on the meter on the first day of the month, and again on the last day. Subtract the first reading from the second reading to get your total units consumed. Then, multiply those units by the flat unit rate (e.g., ₹8, ₹10) agreed upon with your landlord.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What are the "Fixed Charges" on my electricity bill?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Fixed charges (sometimes called meter rent, customer charge, or sanctioned load charge) are mandatory minimum fees levied by the electricity distribution board (such as BSES, MSEDCL, or BESCOM). This fee covers the administrative and infrastructure costs of maintaining the power grid and keeping your physical connection active, regardless of whether your house is locked and you consume zero units.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is my state's official bill slightly different from a simple unit multiplication?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Most state electricity boards in India use a tiered "slab rate" system rather than a single flat rate. For example, the first 100 units might be subsidized and cost ₹4 per unit, the next 100 units might cost ₹6, and any luxury consumption above 200 units costs ₹8. Additionally, government taxes and fuel surcharges (FPPCA) are added dynamically. This calculator uses a flat rate, which makes it perfect for estimating average costs or calculating private sub-meter bills.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How can I quickly reduce my monthly electricity bill?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Air conditioners and geysers are the biggest power consumers. You can drastically reduce your bill by keeping your AC at an optimal 24°C, which saves up to 6% electricity per degree raised. Furthermore, switch to 5-star rated inverter ACs/refrigerators, replace old tube lights with LED bulbs, and ensure you unplug devices completely, as "standby mode" still draws phantom power.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Managing daily life, expenses, and math is easier with our suite of free online tools. Check them out below:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
        </div>
      </section>
      
    </div>
  );
}