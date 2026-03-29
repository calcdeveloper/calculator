import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Torque Units</h2>
        <p className="mb-4">
          Torque is a measure of the force that can cause an object to rotate around an axis. Just as force is a push or a pull, torque can be thought of as a twist to an object. In the automotive world, torque is what gets a vehicle moving from a standstill!
        </p>
        
        <p className="mt-4">
          The basic formula for torque is simple: <strong>Torque = Force x Distance</strong>. Because different countries use different units for force (Newtons vs. Pounds) and distance (Meters vs. Feet), we often need to convert between them.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Newton-meters (N·m)</h3>
        <p className="text-sm mb-4">
          The <strong>Newton-meter</strong> is the standard SI unit for torque. One Newton-meter is the torque resulting from a force of one Newton applied perpendicularly to a one-meter long lever arm.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
          <p className="text-sm font-semibold mb-2">The Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Nm to Pound-feet (lb-ft):</strong> Multiply by 0.73756</li>
            <li><strong>Example:</strong> A 400 Nm engine output is about <strong>295 lb-ft</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Pound-feet (lb·ft)</h3>
        <p className="text-sm mb-4">
          Commonly used in the United States and the UK, <strong>Pound-feet</strong> measures the torque resulting from one pound of force applied to a one-foot long lever arm. This is the standard unit for tightening bolts on American cars.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green mt-4">
          <p className="text-sm font-semibold mb-2">The Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>lb-ft to Nm:</strong> Multiply by 1.3558</li>
            <li><strong>Example:</strong> If a lug nut requires 80 lb-ft of torque, that is <strong>108.46 Nm</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Torque vs. Power</h3>
        <p className="text-sm">
          It is a common mistake to confuse torque with horsepower. <strong>Torque</strong> is the "work" being done (the twisting force), while <strong>Power</strong> (Horsepower/Watts) is how <em>fast</em> that work is being done. 
        </p>
        <p className="text-sm mt-2">
          Think of it this way: Torque is a strong person lifting a heavy box. Power is how many times they can lift that box in one minute.
        </p>
      </section>
    </div>
  );
}