import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Your Electricity Bill</h2>
        <p className="mb-4">
          Understanding your electricity bill doesn't have to be complicated. Electricity is measured in <strong>Kilowatt-hours (kWh)</strong>, which is commonly referred to simply as a "Unit." 
        </p>
        <p className="mb-4">
          Whether you are a tenant wanting to verify a sub-meter reading, or a homeowner tracking your monthly power consumption, knowing the basic formula helps you avoid overpaying.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 1: Calculating from Meter Readings</h3>
        <p className="text-sm mb-4">
          If you are looking directly at your electricity meter, you will see a number. To find out how much electricity you have used this month, you need to subtract last month's reading from today's reading.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Step 1: Current Reading - Previous Reading = Total Units (kWh)</p>
          <p className="text-sm italic text-gray-700 mb-2">Step 2: Total Units × Cost per Unit = Energy Charge</p>
          <p className="text-sm italic text-gray-700 mb-4">Step 3: Energy Charge + Fixed Charges = Total Bill</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> Last month's reading was 15,400. Today's reading is 15,650. Your rate is ₹6.50 per unit, and your meter rent is ₹150.</li>
            <li><strong>Step 1:</strong> 15,650 - 15,400 = <strong>250 Units consumed.</strong></li>
            <li><strong>Step 2:</strong> 250 Units × ₹6.50 = <strong>₹1,625 (Energy Charge)</strong>.</li>
            <li><strong>Step 3:</strong> ₹1,625 + ₹150 = <strong>₹1,775</strong>.</li>
            <li><strong>Result:</strong> Your total electricity bill is ₹1,775.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Method 2: Calculating with Total Units</h3>
        <p className="text-sm mb-4">
          If your electricity board or smart meter already tells you that you consumed a specific number of units, the math is even faster.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">(Total Units × Cost per Unit) + Fixed Charges = Total Bill</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Given:</strong> You consumed 300 units. The cost is ₹7.00 per unit. Fixed charges are ₹100.</li>
            <li><strong>Step 1:</strong> 300 × ₹7.00 = ₹2,100</li>
            <li><strong>Step 2:</strong> ₹2,100 + ₹100 = <strong>₹2,200</strong></li>
            <li><strong>Result:</strong> Your final bill is ₹2,200.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">What are Fixed Charges?</h3>
        <p className="text-sm text-gray-700">
          Almost all electricity providers charge a monthly "Fixed Charge," "Meter Rent," or "Customer Charge." This is a flat fee you pay to stay connected to the power grid, regardless of how much electricity you actually use. When estimating your bill, always remember to add this base amount to your unit calculation.
        </p>
      </section>
    </div>
  );
}