import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Understanding Pressure Conversions</h2>
        <p className="mb-4">
          In physics, pressure is defined as the amount of force applied perpendicular to the surface of an object per unit area. The formal mathematical equation is written as:
        </p>
        <p className="text-center font-semibold my-4 text-lg">
          P = F / A
        </p>
        <p className="mb-4">
          Where <strong>P</strong> is pressure, <strong>F</strong> is force, and <strong>A</strong> is the area. Because people measure force and area differently around the world (e.g., pounds vs. newtons, square inches vs. square meters), a wide variety of pressure units have been created!
        </p>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">The Standard: Pascals (Pa)</h3>
        <p className="text-sm mb-4">
          The Pascal is the official SI (International System) unit of pressure. One Pascal is defined as one Newton of force applied over one square meter of area. Because a Pascal is a very small amount of pressure, it is usually scaled up into <strong>Kilopascals (kPa)</strong> or <strong>Megapascals (MPa)</strong>.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500 mb-4">
          <h4 className="font-bold text-gray-900 mb-1">Pascal Conversion Formulas</h4>
          <ul className="text-sm space-y-2 text-gray-700 mt-2">
            <li><strong>kPa to Pa:</strong> Multiply by 1,000. <em>(1 kPa = 1,000 Pa)</em></li>
            <li><strong>MPa to Pa:</strong> Multiply by 1,000,000. <em>(1 MPa = 1,000,000 Pa)</em></li>
            <li><strong>Pa to Bar:</strong> Divide by 100,000. <em>(100,000 Pa = 1 Bar)</em></li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Atmospheres (atm) and PSI</h3>
        <p className="text-sm mb-4">
          One <strong>Atmosphere (atm)</strong> represents the average pressure exerted by the weight of Earth's atmosphere at sea level. In the United States, this atmospheric weight is often translated into <strong>Pounds per Square Inch (PSI)</strong>, which is the standard unit for measuring car tire pressure.
        </p>
        

[Image of atmospheric pressure at sea level diagram]

        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
          <h4 className="font-bold text-gray-900 mb-1">Atmosphere & PSI Conversion Formulas</h4>
          <ul className="text-sm space-y-2 text-gray-700 mt-2">
            <li><strong>atm to PSI:</strong> Multiply by 14.696. <em>(Example: 2 atm &times; 14.696 = 29.392 psi)</em></li>
            <li><strong>PSI to atm:</strong> Divide by 14.696. <em>(Example: 32 psi &divide; 14.696 = 2.17 atm)</em></li>
            <li><strong>atm to Pascals:</strong> Multiply by 101,325. <em>(1 atm = 101,325 Pa)</em></li>
          </ul>
        </div>
      </section>

      <section className="space-y-4 mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">What is a Torr (mmHg)?</h3>
        <p className="text-sm">
          A Torr is a unit of pressure named after Evangelista Torricelli, the inventor of the barometer. It is exactly equivalent to one millimeter of mercury (mmHg). 
        </p>
        <p className="text-sm">
          Historically, pressure was measured by seeing how far the weight of the atmosphere could push mercury up a glass tube. At standard sea level, the atmosphere pushes the mercury up exactly 760 millimeters. Therefore, <strong>1 atm = 760 Torr</strong>! Today, Torr and mmHg are primarily used in medicine (like taking blood pressure readings) and high-vacuum physics.
        </p>
        

[Image of mercury barometer atmospheric pressure diagram]

      </section>
    </div>
  );
}