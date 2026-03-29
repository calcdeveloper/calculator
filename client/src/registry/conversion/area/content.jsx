import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Area Conversion Formulas</h2>
        <p className="mb-4">
          Whether you are measuring a living room for new flooring, calculating the size of a farm, or finding the geographical footprint of a city, calculating area is an essential mathematical skill.
        </p>
        <p>
          Because area represents two-dimensional space (length multiplied by width), area conversion factors are "squared." For example, while 1 yard equals 3 feet, 1 square yard equals 9 square feet (3 × 3). Below is the ultimate guide to converting every major area unit in the <strong>Metric System</strong> and <strong>US Customary / Imperial System</strong>.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Imperial & US Customary Area Formulas</h3>
        <p className="text-sm mb-4">These units are heavily used in United States real estate, construction, and agriculture.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Square Inches (sq in) & Square Feet (sq ft)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Square Foot = 144 Square Inches (12 inches × 12 inches)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>sq ft to sq in:</strong> Multiply by 144. <em>Example: 5 sq ft × 144 = 720 sq in</em></li>
              <li><strong>sq in to sq ft:</strong> Divide by 144. <em>Example: 288 sq in ÷ 144 = 2 sq ft</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Square Feet (sq ft) & Square Yards (sq yd)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Square Yard = 9 Square Feet (3 feet × 3 feet)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>sq yd to sq ft:</strong> Multiply by 9. <em>Example: 10 sq yd × 9 = 90 sq ft</em></li>
              <li><strong>sq ft to sq yd:</strong> Divide by 9. <em>Example: 180 sq ft ÷ 9 = 20 sq yd</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-1">Square Feet (sq ft) & Acres (ac)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Acre = 43,560 Square Feet</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ac to sq ft:</strong> Multiply by 43,560. <em>Example: 2 acres × 43,560 = 87,120 sq ft</em></li>
              <li><strong>sq ft to ac:</strong> Divide by 43,560. <em>Example: 100,000 sq ft ÷ 43,560 = 2.295 acres</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-1">Acres (ac) & Square Miles (sq mi)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Square Mile = 640 Acres</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>sq mi to ac:</strong> Multiply by 640. <em>Example: 5 sq mi × 640 = 3,200 acres</em></li>
              <li><strong>ac to sq mi:</strong> Divide by 640. <em>Example: 1,280 acres ÷ 640 = 2 sq mi</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Metric System Area Formulas</h3>
        <p className="text-sm mb-4">The metric system scales smoothly by factors of 100 (since 10 × 10 = 100).</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Square Centimeters (cm²) & Square Meters (m²)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Square Meter = 10,000 Square Centimeters (100 cm × 100 cm)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>m² to cm²:</strong> Multiply by 10,000. <em>Example: 3 m² × 10,000 = 30,000 cm²</em></li>
              <li><strong>cm² to m²:</strong> Divide by 10,000. <em>Example: 50,000 cm² ÷ 10,000 = 5 m²</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Square Meters (m²) & Hectares (ha)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Hectare = 10,000 Square Meters</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ha to m²:</strong> Multiply by 10,000. <em>Example: 2.5 ha × 10,000 = 25,000 m²</em></li>
              <li><strong>m² to ha:</strong> Divide by 10,000. <em>Example: 40,000 m² ÷ 10,000 = 4 ha</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Hectares (ha) & Square Kilometers (km²)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Square Kilometer = 100 Hectares</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>km² to ha:</strong> Multiply by 100. <em>Example: 12 km² × 100 = 1,200 ha</em></li>
              <li><strong>ha to km²:</strong> Divide by 100. <em>Example: 350 ha ÷ 100 = 3.5 km²</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-System Area Formulas (Metric vs. Imperial)</h3>
        <p className="text-sm mb-4">These formulas bridge the gap between US and International land and property sizes.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Square Feet & Square Meters (Real Estate)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>sq ft to m²:</strong> Multiply by 0.092903. <em>Example: 1,000 sq ft × 0.092903 = 92.903 m²</em></li>
              <li><strong>m² to sq ft:</strong> Multiply by 10.7639. <em>Example: 50 m² × 10.7639 = 538.195 sq ft</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Acres & Hectares (Agriculture & Land)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ac to ha:</strong> Multiply by 0.404686. <em>Example: 100 acres × 0.404686 = 40.468 ha</em></li>
              <li><strong>ha to ac:</strong> Multiply by 2.47105. <em>Example: 50 ha × 2.47105 = 123.552 acres</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Square Miles & Square Kilometers (Geography)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>sq mi to km²:</strong> Multiply by 2.58999. <em>Example: 10 sq mi × 2.58999 = 25.899 km²</em></li>
              <li><strong>km² to sq mi:</strong> Multiply by 0.386102. <em>Example: 100 km² × 0.386102 = 38.61 sq mi</em></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}