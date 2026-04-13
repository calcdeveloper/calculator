import React from 'react';

export default function PaintCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Liters of Paint for a Room</h2>
      <p>
        Whether you are giving your bedroom a fresh coat before Diwali or painting a newly constructed house, knowing the exact amount of paint to buy is critical. Using our tool as an <strong>asian paints coverage calculator</strong> ensures you do not over-order expensive luxury emulsions or fall short in the middle of a wall.
      </p>

      <h3>Important Painting Terms in India</h3>
      <ul>
        <li><strong>Sq.ft (Square Feet):</strong> The standard unit of measurement for wall area in India.</li>
        <li><strong>VOC (Volatile Organic Compounds):</strong> Chemicals in paint that release a strong odor. Modern luxury interior paints are "Low VOC", making them safe for bedrooms and kids.</li>
        <li><strong>Putty:</strong> A white cement-based powder mixed with water. It is applied to bare plaster to fill pores and create a glass-smooth surface before painting.</li>
        <li><strong>Primer:</strong> A preparatory base coat. It seals the putty and ensures the expensive top-coat paint sticks perfectly to the wall without being absorbed.</li>
        <li><strong>Emulsion:</strong> Water-based paints typically used for interiors. They are washable, durable, and offer a rich finish.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Paint Calculation Formula</h3>
      <p>
        To find out how many <strong>liters of paint for a room</strong> you need, you must calculate the exact surface area of the walls, subtract the empty spaces (doors and windows), and divide by the paint's spreading rate.
      </p>

      <h4>Step 1: Calculate Total Wall Area</h4>
      <p>
        <strong>Formula = 2 × (Length + Width) × Height</strong><br />
        Example: For a room that is 15 ft long, 12 ft wide, and 10 ft high.<br />
        Total Wall Area = 2 × (15 + 12) × 10 = 2 × 27 × 10 = <strong>540 Sq.ft</strong>.
      </p>

      <h4>Step 2: Add the Ceiling (If painting)</h4>
      <p>
        <strong>Formula = Length × Width</strong><br />
        Example: 15 ft × 12 ft = <strong>180 Sq.ft</strong>.<br />
        Gross Area = 540 + 180 = <strong>720 Sq.ft</strong>.
      </p>

      <h4>Step 3: Subtract Deductions</h4>
      <p>
        You do not paint over wooden doors or glass windows! Subtract their area.<br />
        Standard Indian Door = ~21 Sq.ft. Standard Window = ~16 Sq.ft.<br />
        If you have 1 door and 1 window: 21 + 16 = 37 Sq.ft.<br />
        <strong>Net Paintable Area</strong> = 720 - 37 = <strong>683 Sq.ft</strong>.
      </p>

      <hr className="my-6" />

      <h3>Standard Coverage Rates for Indian Brands</h3>
      <p>
        Paint coverage depends heavily on the quality of the paint and how many coats you apply. Below are standard thumb rules based on popular Indian brands (like Asian Paints, Berger, and Nerolac).
      </p>

      <div className="overflow-x-auto my-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b-2 border-calc-darkGray text-calc-darkGray">
              <th className="p-2">Paint Category</th>
              <th className="p-2">Examples</th>
              <th className="p-2">Coverage (1 Coat)</th>
              <th className="p-2">Coverage (2 Coats)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-calc-lightGray/50">
              <td className="p-2"><strong>Luxury Interior</strong></td>
              <td className="p-2">Royale, Silk</td>
              <td className="p-2">~250 Sq.ft / Liter</td>
              <td className="p-2">~140 Sq.ft / Liter</td>
            </tr>
            <tr className="border-b border-calc-lightGray/50 bg-calc-lightGray/10">
              <td className="p-2"><strong>Standard Interior</strong></td>
              <td className="p-2">Tractor, Bison</td>
              <td className="p-2">~220 Sq.ft / Liter</td>
              <td className="p-2">~120 Sq.ft / Liter</td>
            </tr>
            <tr>
              <td className="p-2"><strong>Exterior Weathercoat</strong></td>
              <td className="p-2">Apex, WeatherCoat</td>
              <td className="p-2">~110 Sq.ft / Liter</td>
              <td className="p-2">~60 Sq.ft / Liter</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Final Calculation Example:</strong><br />
        To paint our 683 Sq.ft room with 2 coats of Luxury Interior Paint:<br />
        Paint Required = 683 ÷ 140 = <strong>4.87 Liters</strong>.<br />
        <em>(You should purchase a standard 4-Liter bucket plus a 1-Liter bucket to safely cover the room).</em>
      </div>

    </div>
  );
}