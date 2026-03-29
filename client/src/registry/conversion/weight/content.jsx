import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Weight & Mass Conversion Guide</h2>
        <p className="mb-4">
          Whether you are tracking personal fitness, cooking an international recipe, or calculating shipping freight, understanding exactly how to convert weight and mass is critical. This calculator handles everything from tiny milligrams to massive metric tons.
        </p>
        <p>
          Below is a complete breakdown of every formula used to convert between the <strong>Metric System</strong> (grams, kilograms, tonnes) and the <strong>Imperial System</strong> (ounces, pounds, stones, US short tons), complete with real-world examples.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Metric to Metric Formulas</h3>
        <p className="text-sm mb-4">The metric system is based on multiples of 10, making these conversions straightforward multiplication or division.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Milligrams (mg) & Grams (g)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Gram = 1,000 Milligrams</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>mg to g:</strong> Divide by 1,000. <em>Example: 5,000 mg ÷ 1,000 = 5 g</em></li>
              <li><strong>g to mg:</strong> Multiply by 1,000. <em>Example: 3 g × 1,000 = 3,000 mg</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Grams (g) & Kilograms (kg)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Kilogram = 1,000 Grams</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>g to kg:</strong> Divide by 1,000. <em>Example: 2,500 g ÷ 1,000 = 2.5 kg</em></li>
              <li><strong>kg to g:</strong> Multiply by 1,000. <em>Example: 4.2 kg × 1,000 = 4,200 g</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Kilograms (kg) & Metric Tons (t)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Metric Ton = 1,000 Kilograms</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>kg to t:</strong> Divide by 1,000. <em>Example: 5,000 kg ÷ 1,000 = 5 t</em></li>
              <li><strong>t to kg:</strong> Multiply by 1,000. <em>Example: 2.5 t × 1,000 = 2,500 kg</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Imperial to Imperial Formulas</h3>
        <p className="text-sm mb-4">The Imperial system relies on specific historical fractions rather than standard multiples of ten.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Ounces (oz) & Pounds (lb)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Pound = 16 Ounces</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>oz to lb:</strong> Divide by 16. <em>Example: 32 oz ÷ 16 = 2 lbs</em></li>
              <li><strong>lb to oz:</strong> Multiply by 16. <em>Example: 5 lbs × 16 = 80 oz</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Pounds (lb) & Stones (st)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Stone = 14 Pounds (Commonly used in the UK for body weight)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>lb to st:</strong> Divide by 14. <em>Example: 154 lbs ÷ 14 = 11 st</em></li>
              <li><strong>st to lb:</strong> Multiply by 14. <em>Example: 10 st × 14 = 140 lbs</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Pounds (lb) & US Short Tons (ton)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 US Short Ton = 2,000 Pounds</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>lb to ton:</strong> Divide by 2,000. <em>Example: 4,000 lbs ÷ 2,000 = 2 tons</em></li>
              <li><strong>ton to lb:</strong> Multiply by 2,000. <em>Example: 3 tons × 2,000 = 6,000 lbs</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Crossing Over: Metric vs. Imperial</h3>
        <p className="text-sm mb-4">Converting between systems requires highly precise multiplier constants.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Kilograms & Pounds (The most common conversion)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>kg to lb:</strong> Multiply by 2.20462. <em>Example: 50 kg × 2.20462 = 110.231 lbs</em></li>
              <li><strong>lb to kg:</strong> Divide by 2.20462 (or multiply by 0.453592). <em>Example: 200 lbs × 0.453592 = 90.718 kg</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Grams & Ounces (Essential for cooking)</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>g to oz:</strong> Divide by 28.3495. <em>Example: 100 g ÷ 28.3495 = 3.527 oz</em></li>
              <li><strong>oz to g:</strong> Multiply by 28.3495. <em>Example: 8 oz × 28.3495 = 226.796 g</em></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}