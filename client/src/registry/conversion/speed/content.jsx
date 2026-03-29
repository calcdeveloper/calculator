import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Speed & Velocity Conversion Formulas</h2>
        <p className="mb-4">
          Speed is a "compound" measurement—it tracks a specific <strong>distance</strong> traveled over a specific amount of <strong>time</strong>. Because of this, converting speed means you are actually calculating the difference between two distance systems (like miles vs. kilometers) and two time systems (like hours vs. seconds) simultaneously!
        </p>
        <p>
          Whether you are a driver traveling across borders, a pilot navigating airspeed in knots, or a student solving physics problems in meters per second, this guide provides the exact mathematical formulas required for flawless speed conversion.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Driving Speeds (MPH vs. KM/H)</h3>
        <p className="text-sm mb-4">These are the most commonly searched formulas for international travel, importing vehicles, and tracking running paces.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Miles per Hour (mph) & Kilometers per Hour (km/h)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Mile = 1.60934 Kilometers</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>mph to km/h:</strong> Multiply by 1.60934. <em>Example: 60 mph × 1.60934 = 96.56 km/h</em></li>
              <li><strong>km/h to mph:</strong> Divide by 1.60934 (or multiply by 0.621371). <em>Example: 100 km/h × 0.621371 = 62.14 mph</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Scientific & Engineering Speeds</h3>
        <p className="text-sm mb-4">Physics equations generally require converting standard hourly speeds into "per second" units.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Kilometers per Hour (km/h) & Meters per Second (m/s)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 m/s = 3.6 km/h</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>km/h to m/s:</strong> Divide by 3.6. <em>Example: 90 km/h ÷ 3.6 = 25 m/s</em></li>
              <li><strong>m/s to km/h:</strong> Multiply by 3.6. <em>Example: 10 m/s × 3.6 = 36 km/h</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Miles per Hour (mph) & Feet per Second (ft/s)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 mph = 1.46667 ft/s</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>mph to ft/s:</strong> Multiply by 1.46667. <em>Example: 60 mph × 1.46667 = 88 ft/s</em></li>
              <li><strong>ft/s to mph:</strong> Divide by 1.46667. <em>Example: 100 ft/s ÷ 1.46667 = 68.18 mph</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Aviation & Nautical Speeds</h3>
        <p className="text-sm mb-4">Pilots and sailors do not use standard miles or kilometers; they use Nautical Miles, measured in Knots.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Knots (kn) & Miles per Hour (mph)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Knot = 1.15078 mph</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>knots to mph:</strong> Multiply by 1.15078. <em>Example: 20 knots × 1.15078 = 23.01 mph</em></li>
              <li><strong>mph to knots:</strong> Divide by 1.15078. <em>Example: 50 mph ÷ 1.15078 = 43.45 knots</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Knots (kn) & Kilometers per Hour (km/h)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Knot = 1.852 km/h</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>knots to km/h:</strong> Multiply by 1.852. <em>Example: 30 knots × 1.852 = 55.56 km/h</em></li>
              <li><strong>km/h to knots:</strong> Divide by 1.852. <em>Example: 100 km/h ÷ 1.852 = 54.00 knots</em></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">What is Mach? (The Speed of Sound)</h3>
        <p className="text-sm">
          "Mach" is a ratio used in aviation to represent the speed of an object relative to the speed of sound. Mach 1 is exactly the speed of sound. Because the speed of sound changes based on temperature and air density, Mach is not a fixed unit like miles or kilometers! However, for standard calculations at sea level (at 20°C / 68°F), Mach 1 is universally calculated as <strong>343 meters per second (767.26 mph)</strong>.
        </p>
      </section>
    </div>
  );
}