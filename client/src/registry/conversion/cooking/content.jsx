import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">The Ultimate Cooking Measurement Conversion Guide</h2>
        <p className="mb-4">
          Scaling a recipe up for a party, or cutting a baking recipe in half, requires precise kitchen math. Knowing your conversions can mean the difference between a perfectly risen cake and a salty disaster.
        </p>
        <p>
          Whether you are converting a European recipe from milliliters to cups, or simply trying to figure out how many teaspoons are in a tablespoon, this guide breaks down every exact formula you need for the kitchen.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Spoons and Cups (The Basics)</h3>
        <p className="text-sm mb-4">These are the most fundamental formulas used in everyday cooking and baking.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Teaspoons (tsp) & Tablespoons (tbsp)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Tablespoon = 3 Teaspoons</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>tsp to tbsp:</strong> Divide by 3. <em>Example: 6 tsp ÷ 3 = 2 tbsp</em></li>
              <li><strong>tbsp to tsp:</strong> Multiply by 3. <em>Example: 4 tbsp × 3 = 12 tsp</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Tablespoons (tbsp) & Cups</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Cup = 16 Tablespoons</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>tbsp to cup:</strong> Divide by 16. <em>Example: 32 tbsp ÷ 16 = 2 cups</em></li>
              <li><strong>cup to tbsp:</strong> Multiply by 16. <em>Example: 0.5 cups × 16 = 8 tbsp</em></li>
            </ul>
          </div>
          
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Fluid Ounces (fl oz) & Cups</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Cup = 8 Fluid Ounces</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>fl oz to cup:</strong> Divide by 8. <em>Example: 16 fl oz ÷ 8 = 2 cups</em></li>
              <li><strong>cup to fl oz:</strong> Multiply by 8. <em>Example: 3 cups × 8 = 24 fl oz</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Metric Recipe Formulas</h3>
        <p className="text-sm mb-4">If you are using a European or international recipe, you will likely need to convert metric milliliters into US customary cups.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Cups</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 US Cup = 236.59 Milliliters (Often rounded to 240ml in kitchens)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ml to cup:</strong> Divide by 236.59. <em>Example: 500 ml ÷ 236.59 = 2.11 cups</em></li>
              <li><strong>cup to ml:</strong> Multiply by 236.59. <em>Example: 2 cups × 236.59 = 473.18 ml</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Milliliters (ml) & Tablespoons (tbsp)</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Tablespoon = 14.79 Milliliters (Often rounded to 15ml)</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>ml to tbsp:</strong> Divide by 14.79. <em>Example: 45 ml ÷ 14.79 ≈ 3 tbsp</em></li>
              <li><strong>tbsp to ml:</strong> Multiply by 14.79. <em>Example: 2 tbsp × 14.79 ≈ 29.58 ml</em></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Scaling Up: Pints, Quarts, and Gallons</h3>
        <p className="text-sm mb-4">Making soup or batch-cooking sauce? You'll need to know the larger liquid formulas.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Cups & Pints</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Pint = 2 Cups</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>cup to pt:</strong> Divide by 2. <em>Example: 6 cups ÷ 2 = 3 pints</em></li>
              <li><strong>pt to cup:</strong> Multiply by 2. <em>Example: 4 pints × 2 = 8 cups</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Pints & Quarts</h4>
            <p className="text-sm"><strong>Formula:</strong> 1 Quart = 2 Pints</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>pt to qt:</strong> Divide by 2. <em>Example: 8 pints ÷ 2 = 4 quarts</em></li>
              <li><strong>qt to pt:</strong> Multiply by 2. <em>Example: 3 quarts × 2 = 6 pints</em></li>
            </ul>
          </div>
        </div>
      </section>
      
      <section className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">A Note on Liquid Volume vs. Dry Weight</h3>
        <p className="text-sm">
          It is crucial to remember that this calculator measures <strong>Volume</strong> (the amount of space an ingredient takes up). Liquid measuring cups and dry measuring cups hold the exact same volume. 
        </p>
        <p className="text-sm">
          However, you cannot directly convert a volume measurement (like cups) into a weight measurement (like grams or ounces) without knowing the ingredient. For example, 1 cup of flour weighs about 120 grams, but 1 cup of water weighs exactly 236 grams! Always use volume converters for liquids and spices, and a kitchen scale for baking weights.
        </p>
      </section>
    </div>
  );
}