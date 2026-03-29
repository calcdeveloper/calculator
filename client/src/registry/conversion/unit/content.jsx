import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Length and Distance</h2>
        <p className="mb-4">
          Whether you are traveling abroad, working on a home renovation project, or helping with math homework, knowing how to convert length and distance measurements is a crucial skill. This converter allows you to instantly bridge the gap between the <strong>Metric System</strong> and the <strong>Imperial System</strong>.
        </p>
        <p>
          Simply enter your value, choose the unit you are converting <em>from</em>, and select the unit you want to convert <em>to</em>. The calculator will provide the exact measurement and the mathematical formula used.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Most Common Conversion Formulas</h3>
        <p className="text-sm mb-4">
          If you want to do the math yourself, here are the exact multiplication factors for the most frequently searched length conversions around the world:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Imperial to Metric</h4>
            <ul className="text-sm space-y-2">
              <li><strong>Inches to Centimeters (cm):</strong> Multiply inches by 2.54</li>
              <li><strong>Feet to Meters (m):</strong> Multiply feet by 0.3048</li>
              <li><strong>Yards to Meters (m):</strong> Multiply yards by 0.9144</li>
              <li><strong>Miles to Kilometers (km):</strong> Multiply miles by 1.60934</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded shadow-sm">
            <h4 className="font-bold text-blue-600 mb-2">Metric to Imperial</h4>
            <ul className="text-sm space-y-2">
              <li><strong>Centimeters to Inches:</strong> Divide cm by 2.54</li>
              <li><strong>Meters to Feet:</strong> Multiply meters by 3.28084</li>
              <li><strong>Meters to Yards:</strong> Multiply meters by 1.09361</li>
              <li><strong>Kilometers to Miles:</strong> Divide kilometers by 1.60934</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Metric vs. Imperial Systems</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>The Metric System</strong> is based on units of 10, making it incredibly easy to scale. For example, there are 10 millimeters in a centimeter, 100 centimeters in a meter, and 1,000 meters in a kilometer. It is the official system of measurement for almost every country in the world.</li>
          <li><strong>The Imperial System</strong> (and US Customary System) has historical roots and uses less standardized scaling. For instance, there are 12 inches in a foot, 3 feet in a yard, and 5,280 feet in a mile. It is primarily used in the United States, Liberia, and Myanmar, and is still heavily referenced in the UK for road distances.</li>
        </ul>
      </section>
    </div>
  );
}