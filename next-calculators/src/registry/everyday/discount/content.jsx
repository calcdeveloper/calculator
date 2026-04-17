import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Discount & Sales Tax Calculator India | Free & Accurate
  2. META DESCRIPTION: Easily calculate discounts and final prices with GST using our free Discount & Sales Tax Calculator. Perfect for shopping in India. Find your exact savings now!
  3. URL SLUG: /discount-sales-tax-calculator
  4. H1 TITLE: Free Online Discount & Sales Tax Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Discount calculator India
      - Secondary keywords: Sales tax calculator, GST calculator, discount percentage calculator, calculate discount price, shopping calculator, price after discount, tax calculator India, retail discount calculator, percentage off calculator, GST and discount calculator.
      - Long-tail keywords: How to calculate discount and GST, discount and sales tax calculator online, calculate final price after 20% discount, how much is 15 percent off, calculate price after GST India.
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
        "name": "Is sales tax or GST calculated before or after the discount is applied?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In retail, the standard legal practice is that the discount is applied first. Sales tax, such as GST in India, is then calculated based on the new, reduced price. You do not pay tax on the discount amount."
        }
      },
      {
        "@type": "Question",
        "name": "How do I quickly calculate a 20% discount in my head?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate a 20% discount quickly without a calculator, move the decimal point of the original price one space to the left to find 10%. Then, double that number. For example, 10% of ₹800 is ₹80. Double it (₹80 × 2) to get ₹160. Subtract ₹160 from ₹800, and your final price is ₹640."
        }
      },
      {
        "@type": "Question",
        "name": "What are the common GST tax slabs in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the Goods and Services Tax (GST) is generally divided into four main tax slabs: 5%, 12%, 18%, and 28%. Essential items usually fall under 5%, while luxury goods and electronics are often taxed at 18% or 28%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for international sales tax or VAT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Even though it is perfect for Indian GST, the mathematical formula for percentage-based tax is universal. Simply enter the VAT or local state tax percentage of the country you are visiting, and the calculator will give you the exact final price."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the final price sometimes higher than the sticker price even with a discount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This happens when the tax rate is higher than the discount percentage. If a store offers a 5% discount, but the product falls under the 18% GST bracket, the tax added back onto the price will be greater than the money saved from the discount."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Discount & Sales Tax Calculator</h1>
        <p className="mb-4">
          Shopping in India often involves exciting sales, festive offers, and heavy markdowns. Seeing a "20% Off" sign is thrilling, but figuring out exactly how much cash you will hand over at the billing register can be tricky—especially when sales tax like GST (Goods and Services Tax) is added to the final bill. 
        </p>
        <p className="mb-4">
          Many shoppers are surprised when their final bill is higher than expected because they forget to account for taxes. Whether you are buying a smartphone during a Diwali mega-sale, purchasing clothes at a local mall, or buying bulk supplies for your business, knowing the exact final cost helps you budget better and avoid checkout anxiety.
        </p>
        <p>
          Our free online <strong>Discount & Sales Tax Calculator</strong> does the hard math for you. It instantly determines your exact discount amount, the discounted price, the tax amount owed, and the final total you need to pay. It is incredibly beginner-friendly and designed specifically for shoppers, small business owners, and cashiers who need quick, error-free calculations.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Discount & Tax Calculator</h2>
        <p className="mb-4">Calculating your final shopping bill is easy. Just follow these three simple steps to see exactly how much you will save and spend:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Original Price</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Find the <strong>Original Price</strong> input box.</li>
          <li>Type in the initial sticker price of the item before any sales or deductions are applied (e.g., ₹25,000).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter the Discount & Tax Details</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>In the <strong>Discount (%)</strong> box, enter the percentage off being offered by the store (e.g., enter "15" for a 15% discount).</li>
          <li>In the <strong>Tax (%)</strong> box, enter the applicable GST or sales tax rate. In India, standard electronics are often 18%, while clothing can be 5% or 12%.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Instantly View the Breakdown</h3>
        <p className="mb-3">As soon as you enter the numbers, the calculator will automatically process the data and display a clear breakdown on your screen. You will instantly see:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 mb-4">
          <li><strong>Discount Amount:</strong> The exact rupees saved.</li>
          <li><strong>Price After Discount:</strong> The intermediate cost before government taxes.</li>
          <li><strong>Tax Amount:</strong> The exact rupees charged as GST.</li>
          <li><strong>Final Price:</strong> The actual amount you must pay at the cash counter.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Discounts and Sales Tax Manually</h2>
        <p className="mb-6">In the retail industry, there is a strict standard rule: <strong>discounts are always applied first</strong>. Taxes are then calculated based on the new, lower discounted price, never on the original sticker price. Here are the exact mathematical formulas used to calculate your final shopping total.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Finding the Discount Amount and New Price</h3>
            <p className="text-sm mb-4">First, you need to convert the discount percentage into a decimal by dividing it by 100, then multiply it by the sticker price.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>To find the Discount Amount:</strong> Multiply Original Price by (Discount Percentage ÷ 100). <br/><span className="text-gray-500 italic">Formula: Original Price × (Discount % ÷ 100) = Discount Amount</span></li>
              <li><strong>To find the Discounted Price:</strong> Subtract the Discount Amount from the Original Price. <br/><span className="text-gray-500 italic">Formula: Original Price - Discount Amount = Discounted Price</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Adding the Sales Tax (GST)</h3>
            <p className="text-sm mb-4">Now that you have your lower price, you calculate the tax on that specific amount.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>To find the Tax Amount:</strong> Multiply the Discounted Price by (Tax Percentage ÷ 100). <br/><span className="text-gray-500 italic">Formula: Discounted Price × (Tax % ÷ 100) = Tax Amount</span></li>
              <li><strong>To find the Final Price:</strong> Add the Tax Amount to the Discounted Price. <br/><span className="text-gray-500 italic">Formula: Discounted Price + Tax Amount = Final Price</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Shopping Examples</h2>
        <p className="mb-6">Let's look at two everyday scenarios in India to see exactly how these calculations work step-by-step.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Buying a Smartphone</h3>
            <p className="mb-2 text-sm">You are purchasing a new mobile phone. The sticker price is <strong>₹25,000</strong>. The store is offering a <strong>15% Diwali discount</strong>. Electronics in India carry an <strong>18% GST</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Find the Discount Amount:</strong> ₹25,000 × (15 ÷ 100) = ₹3,750 saved.</li>
              <li><strong>Find the Price After Discount:</strong> ₹25,000 - ₹3,750 = ₹21,250.</li>
              <li><strong>Find the GST Amount:</strong> ₹21,250 × (18 ÷ 100) = ₹3,825 in tax.</li>
              <li><strong>Final Answer:</strong> ₹21,250 + ₹3,825 = <span className="font-bold text-gray-900">₹25,075 Total</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Buying Branded Clothes</h3>
            <p className="mb-2 text-sm">You find a great jacket at a mall. The original price is <strong>₹4,000</strong>. There is a huge clearance sale offering <strong>40% off</strong>. Clothing under ₹1,000 is taxed at 5%, but since the discounted price here will be over ₹1,000, it falls under the <strong>12% GST</strong> slab.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Find the Discount Amount:</strong> ₹4,000 × (40 ÷ 100) = ₹1,600 saved.</li>
              <li><strong>Find the Price After Discount:</strong> ₹4,000 - ₹1,600 = ₹2,400.</li>
              <li><strong>Find the GST Amount:</strong> ₹2,400 × (12 ÷ 100) = ₹288 in tax.</li>
              <li><strong>Final Answer:</strong> ₹2,400 + ₹288 = <span className="font-bold text-gray-900">₹2,688 Total</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is sales tax or GST calculated before or after the discount is applied?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In retail, the standard legal practice is that the discount is applied first. Sales tax, such as GST in India, is then calculated based on the new, reduced price. You do not pay tax on the discount amount.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I quickly calculate a 20% discount in my head?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To calculate a 20% discount quickly without a calculator, move the decimal point of the original price one space to the left to find 10%. Then, double that number. For example, 10% of ₹800 is ₹80. Double it (₹80 × 2) to get ₹160. Subtract ₹160 from ₹800, and your final price is ₹640.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What are the common GST tax slabs in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, the Goods and Services Tax (GST) is generally divided into four main tax slabs: 5%, 12%, 18%, and 28%. Essential items usually fall under 5%, while luxury goods, automobiles, and high-end electronics are often taxed at 18% or 28%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I use this calculator for international sales tax or VAT?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! Even though it is perfect for Indian GST, the mathematical formula for percentage-based tax is universal. Simply enter the VAT or local state tax percentage of the country you are visiting, and the calculator will give you the exact final price.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is the final price sometimes higher than the sticker price even with a discount?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This happens when the tax rate is higher than the discount percentage. If a store offers a 5% discount, but the product falls under the 18% GST bracket, the tax added back onto the price will be greater than the money saved from the discount, raising the total above the original sticker price.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need help managing your daily finances and tasks? Check out our suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
        </div>
      </section>
      
    </div>
  );
}