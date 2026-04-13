import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Grocery Prices (Price Per Kg Formula)</h2>
        <p className="mb-4">
          Calculating the exact cost of groceries, sweets, or dry fruits at the market can be confusing. Whether you want to buy a specific weight (like 700g of sweets) or you want to spend a specific amount of money (like ₹700), you need a reliable method to figure out the math.
        </p>
        <p className="mb-4">
          Below, we explain the two easiest formulas to calculate your daily mandi bills accurately.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 1: Purchasing According to Weight (Grams)</h3>
        <p className="text-sm mb-4">
          Use this method when you know exactly how many grams you want to buy, and you need to find out how much it will cost.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">(Target Weight in grams ÷ 1000) × Cost of 1 kg = Total Price</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> The cost of 1 kg is ₹1000. You want to buy exactly 700g.</li>
            <li><strong>Step 1:</strong> Convert the grams to kilograms by dividing by 1000. <br/>(700 ÷ 1000) = 0.7 kg</li>
            <li><strong>Step 2:</strong> Multiply that decimal by the 1 kg cost. <br/>0.7 × 1000 = <strong>₹700</strong></li>
            <li><strong>Result:</strong> Your total cost for 700g is ₹700.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 2: Purchasing According to Budget (₹)</h3>
        <p className="text-sm mb-4">
          Use this method when you have a fixed budget in Rupees and you want to know exactly how much weight the shopkeeper should give you.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">(Your Budget ÷ Cost of 1 kg) × 1000 = Total Weight in Grams</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> The cost of 1 kg is ₹1000. You only want to spend ₹500.</li>
            <li><strong>Step 1:</strong> Divide your budget by the 1 kg cost. <br/>(500 ÷ 1000) = 0.5 kg</li>
            <li><strong>Step 2:</strong> Multiply by 1000 to find out the grams. <br/>0.5 × 1000 = <strong>500g</strong></li>
            <li><strong>Result:</strong> For ₹500, you will receive exactly 500g.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}