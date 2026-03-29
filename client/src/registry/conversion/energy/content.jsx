import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Energy Units</h2>
        <p className="mb-4">
          Energy is the ability to do work. In science, energy comes in many forms, such as kinetic, potential, thermal, and electrical. Because different fields (like nutrition, engineering, and physics) developed their own measurements, we need formulas to switch between them.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Joules vs. Calories</h3>
        <p className="text-sm mb-4">
          The <strong>Joule (J)</strong> is the standard unit of energy in the metric system. However, in nutrition, we use <strong>Calories</strong>.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <p className="text-sm font-semibold mb-2">The Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>1 Calorie (cal) = 4.184 Joules</strong></li>
            <li><strong>1 Kilocalorie (kcal or Food Calorie) = 4,184 Joules</strong></li>
            <li><strong>To convert Calories to Joules:</strong> Multiply by 4.184.</li>
            <li><strong>Example:</strong> A snack with 100 food calories (kcal) contains 418,400 Joules of energy.</li>
          </ul>
        </div>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Electricity: Kilowatt-hours (kWh)</h3>
        <p className="text-sm mb-4">
          Utility companies measure energy in <strong>Kilowatt-hours</strong>. This represents the total energy used by a 1,000-watt appliance running for exactly one hour.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <p className="text-sm font-semibold mb-2">The Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>1 kWh = 3,600,000 Joules (or 3.6 Megajoules)</strong></li>
            <li><strong>To convert kWh to Joules:</strong> Multiply kWh by 3,600,000.</li>
            <li><strong>Example:</strong> If a lightbulb uses 0.1 kWh, it has consumed 360,000 Joules.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Heating: BTU (British Thermal Units)</h3>
        <p className="text-sm mb-4">
          BTU is a traditional unit of energy used primarily in North America for heating and air conditioning systems. It is the amount of heat required to raise the temperature of one pound of water by one degree Fahrenheit.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
          <p className="text-sm font-semibold mb-2">The Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>1 BTU = 1,055.06 Joules</strong></li>
            <li><strong>1 BTU = 0.252 Kilocalories (kcal)</strong></li>
            <li><strong>Example:</strong> A 10,000 BTU air conditioner removes 10,550,600 Joules of heat per hour.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}