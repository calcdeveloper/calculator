import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Comprehensive Volume & Capacity Conversion Formulas</h2>
        <p className="mb-4">
          Whether you are halving a baking recipe, calculating engine displacement, or figuring out how much water fits in a fish tank, volume conversions are an everyday necessity. 
        </p>
        <p>
          Below is the ultimate cheat sheet containing every formula needed to convert between the <strong>Metric System</strong> (Liters, Milliliters, Cubic Meters) and the heavily nested <strong>US Customary System</strong> (Teaspoons, Tablespoons, Ounces, Cups, Pints, Quarts, and Gallons), complete with step-by-step examples.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Metric System Volume Formulas</h3>
        <p className="text-sm mb-4">The metric system is built on multiples of 10, making these the easiest conversions to perform.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Liters (L)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Liter = 1,000 Milliliters</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ml to L:</strong> Divide by 1,000. <em>Example: 2,500 ml ÷ 1,000 = 2.5 L</em></li>
              <li><strong>L to ml:</strong> Multiply by 1,000. <em>Example: 3.2 L × 1,000 = 3,200 ml</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Liters (L) & Cubic Meters (m³)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Cubic Meter = 1,000 Liters</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>L to m³:</strong> Divide by 1,000. <em>Example: 500 L ÷ 1,000 = 0.5 m³</em></li>
              <li><strong>m³ to L:</strong> Multiply by 1,000. <em>Example: 2 m³ × 1,000 = 2,000 L</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">US Kitchen & Small Volume Formulas</h3>
        <p className="text-sm mb-4">These are the most heavily searched conversions for cooking and baking.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Teaspoons (tsp) & Tablespoons (tbsp)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Tablespoon = 3 Teaspoons</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>tsp to tbsp:</strong> Divide by 3. <em>Example: 12 tsp ÷ 3 = 4 tbsp</em></li>
              <li><strong>tbsp to tsp:</strong> Multiply by 3. <em>Example: 5 tbsp × 3 = 15 tsp</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Tablespoons (tbsp) & Fluid Ounces (fl oz)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Fluid Ounce = 2 Tablespoons</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>tbsp to fl oz:</strong> Divide by 2. <em>Example: 8 tbsp ÷ 2 = 4 fl oz</em></li>
              <li><strong>fl oz to tbsp:</strong> Multiply by 2. <em>Example: 6 fl oz × 2 = 12 tbsp</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Fluid Ounces (fl oz) & Cups (cup)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Cup = 8 Fluid Ounces</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>fl oz to cup:</strong> Divide by 8. <em>Example: 24 fl oz ÷ 8 = 3 cups</em></li>
              <li><strong>cup to fl oz:</strong> Multiply by 8. <em>Example: 2 cups × 8 = 16 fl oz</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">US Large Volume Formulas</h3>
        <p className="text-sm mb-4">These conversions are essential for canning, buying milk, or calculating liquid storage.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-1">Cups (cup) & Pints (pt)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Pint = 2 Cups</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>cup to pt:</strong> Divide by 2. <em>Example: 6 cups ÷ 2 = 3 pints</em></li>
              <li><strong>pt to cup:</strong> Multiply by 2. <em>Example: 4 pints × 2 = 8 cups</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-1">Pints (pt) & Quarts (qt)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Quart = 2 Pints</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>pt to qt:</strong> Divide by 2. <em>Example: 8 pints ÷ 2 = 4 quarts</em></li>
              <li><strong>qt to pt:</strong> Multiply by 2. <em>Example: 3 quarts × 2 = 6 pints</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-600">
            <h4 className="font-bold text-gray-900 mb-1">Quarts (qt) & Gallons (gal)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Gallon = 4 Quarts</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>qt to gal:</strong> Divide by 4. <em>Example: 16 quarts ÷ 4 = 4 gallons</em></li>
              <li><strong>gal to qt:</strong> Multiply by 4. <em>Example: 2 gallons × 4 = 8 quarts</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Cross-System Formulas (Metric vs. US Customary)</h3>
        <p className="text-sm mb-4">Converting between systems requires precise multiplication factors.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">US Gallons & Liters</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>gal to L:</strong> Multiply by 3.78541. <em>Example: 10 gal × 3.78541 = 37.854 L</em></li>
              <li><strong>L to gal:</strong> Divide by 3.78541. <em>Example: 50 L ÷ 3.78541 = 13.208 gal</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">US Fluid Ounces & Milliliters</h4>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>fl oz to ml:</strong> Multiply by 29.5735. <em>Example: 8 fl oz × 29.5735 = 236.588 ml</em></li>
              <li><strong>ml to fl oz:</strong> Divide by 29.5735. <em>Example: 500 ml ÷ 29.5735 = 16.907 fl oz</em></li>
            </ul>
          </div>

           <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">US Gallons vs. Imperial Gallons</h4>
            <p className="text-sm mb-1">A common mistake is assuming all "Gallons" are identical. The Imperial Gallon (used historically in the UK) is about 20% larger than the US Gallon.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>US gal to UK gal:</strong> Multiply by 0.832674.</li>
              <li><strong>UK gal to US gal:</strong> Multiply by 1.20095.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}