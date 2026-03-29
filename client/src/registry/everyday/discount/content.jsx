import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Discounts and Sales Tax</h2>
        <p className="mb-4">
          Seeing a "20% Off" sign in a store is exciting, but figuring out exactly how much cash you will hand over at the register can be tricky—especially when sales tax (like GST, VAT, or State Tax) is added to the final bill.
        </p>
        <p className="mb-4">
          In retail, the standard rule is that <strong>discounts are applied first</strong>, and then <strong>taxes are calculated based on the new, lower price</strong>. Here are the exact formulas to calculate your final shopping total.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Step 1: How to Calculate the Discount Amount</h3>
        <p className="text-sm mb-4">
          First, you need to figure out how much money the store is taking off the original sticker price.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Original Price × (Discount Percentage ÷ 100) = Discount Amount</p>
          <p className="text-sm italic text-gray-700 mb-4">Original Price - Discount Amount = Discounted Price</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Scenario:</strong> A smartphone costs 25,000, and there is a 15% discount.</li>
            <li><strong>Find the Discount:</strong> 25,000 × (15 ÷ 100) = <strong>3,750</strong></li>
            <li><strong>Find the New Price:</strong> 25,000 - 3,750 = <strong>21,250</strong></li>
            <li><strong>Result:</strong> Your price after the discount is 21,250.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Step 2: How to Add Sales Tax (GST)</h3>
        <p className="text-sm mb-4">
          Now that you have your discounted price, you must add the government sales tax. Remember, you only pay tax on the <em>discounted</em> amount, not the original sticker price!
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Discounted Price × (Tax Percentage ÷ 100) = Tax Amount</p>
          <p className="text-sm italic text-gray-700 mb-4">Discounted Price + Tax Amount = Final Price</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Scenario:</strong> Your discounted phone is 21,250, and the GST is 18%.</li>
            <li><strong>Find the Tax:</strong> 21,250 × (18 ÷ 100) = <strong>3,825</strong></li>
            <li><strong>Find Final Price:</strong> 21,250 + 3,825 = <strong>25,075</strong></li>
            <li><strong>Result:</strong> The final amount you will pay at the counter is 25,075.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">A Quick Mental Math Trick</h3>
        <p className="text-sm text-gray-700">
          If you need to calculate a 20% discount quickly without a calculator, just move the decimal point of the price one space to the left to find 10%, and then double it. <br/><br/>
          <em>Example: 10% of 800 is 80. Therefore, 20% is 160 (80 × 2). The new price is 800 - 160 = 640.</em>
        </p>
      </section>
    </div>
  );
}