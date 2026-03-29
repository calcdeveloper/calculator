import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Calculate Fuel Cost and Vehicle Mileage</h2>
        <p className="mb-4">
          Whether you are planning a weekend road trip, splitting petrol costs with friends, or just trying to find out the true fuel efficiency of your car or bike, knowing how to calculate fuel costs is incredibly useful.
        </p>
        <p className="mb-4">
          Below, we break down the two most important formulas every driver should know: calculating the total cost of a trip, and calculating your vehicle's exact mileage.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 1: How to Calculate Trip Cost</h3>
        <p className="text-sm mb-4">
          If you know how far you are traveling and your vehicle's average mileage, you can easily estimate how much you will spend on petrol, diesel, or CNG.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-2">Step 1: Fuel Needed = Distance ÷ Mileage</p>
          <p className="text-sm italic text-gray-700 mb-4">Step 2: Total Cost = Fuel Needed × Fuel Price</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Scenario:</strong> You are driving 150 km. Your car gives 18 km/l, and petrol costs ₹96 per litre.</li>
            <li><strong>Step 1:</strong> Find fuel needed: (150 km ÷ 18 km/l) = 8.33 Litres</li>
            <li><strong>Step 2:</strong> Find the cost: (8.33 Litres × ₹96) = <strong>₹800</strong></li>
            <li><strong>Result:</strong> Your estimated fuel cost for the trip is ₹800.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Formula 2: How to Calculate Mileage (km/l)</h3>
        <p className="text-sm mb-4">
          Brands often advertise high mileage figures, but real-world traffic changes things. The "Tank-to-Tank" method is the best way to find your true fuel efficiency.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <p className="font-bold text-gray-900 mb-2">The Formula:</p>
          <p className="text-sm italic text-gray-700 mb-4">Mileage (km/l) = Total Distance Driven ÷ Total Fuel Consumed</p>
          
          <h4 className="font-bold text-gray-900 mb-1">Example Calculation:</h4>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Scenario:</strong> You filled your tank, drove 250 km, and then it took 14 litres to fill the tank back up.</li>
            <li><strong>Step 1:</strong> Divide distance by fuel: (250 km ÷ 14 Litres) = <strong>17.85 km/l</strong></li>
            <li><strong>Result:</strong> Your vehicle's true real-world mileage is 17.85 km per litre.</li>
          </ul>
        </div>
      </section>

      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Bonus: How to Calculate Driving Cost Per Km</h3>
        <p className="text-sm text-gray-700 mb-2">
          Want to know how much your daily commute actually costs? Just divide the current fuel price by your vehicle's mileage.
        </p>
        <p className="text-sm italic text-gray-700 mb-2">Formula: Fuel Price ÷ Mileage = Cost Per Km</p>
        <p className="text-sm text-gray-700">
          <strong>Example:</strong> ₹96 / 18 km/l = <strong>₹5.33 per kilometre.</strong>
        </p>
      </section>
    </div>
  );
}