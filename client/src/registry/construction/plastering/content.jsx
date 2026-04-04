import React from 'react';

export default function PlasterCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Cement and Sand Required for Plastering</h2>
      <p>
        Plastering is essential for protecting brickwork and providing a smooth finish for painting. However, estimating the exact materials can be tricky. Using our calculator, you can instantly run a highly accurate <strong>plaster calculation</strong> to determine the bags of cement and cubic feet (CFT) of sand required for your project.
      </p>

      <h3>Standard Plaster Thicknesses in India</h3>
      <p>
        The thickness of your plaster dictates how much material you will need. Civil engineers follow these standards:
      </p>
      <ul>
        <li><strong>12 mm Plaster:</strong> The standard for <em>internal walls</em> where the brickwork is relatively smooth.</li>
        <li><strong>15 mm Plaster:</strong> Often used for ceilings or interior walls with slight undulations.</li>
        <li><strong>20 mm Plaster:</strong> The standard for <em>external walls</em>. This thickness requires two coats (a base coat and a finishing coat) to protect the building from heavy rain and weathering.</li>
      </ul>

      <h3>Standard Mix Ratios (Cement : Sand)</h3>
      <p>
        To get the best strength without wasting expensive cement, use the correct mortar ratio:
      </p>
      <ul>
        <li><strong>1:3 Ratio:</strong> A very rich mix, typically reserved for ceilings.</li>
        <li><strong>1:4 Ratio:</strong> The ideal mix for 12mm internal wall plastering.</li>
        <li><strong>1:6 Ratio:</strong> The standard mix for 20mm external wall plastering.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Plaster Calculation Formula (Step-by-Step Example)</h3>
      <p>
        Let's look at the exact math behind the <strong>cement and sand required for plastering</strong>. We will calculate the materials for a <strong>100 sq ft wall</strong> (approx. 3.048m x 3.048m), applying <strong>12mm internal plaster</strong> with a <strong>1:4 cement-sand ratio</strong>.
      </p>

      <h4>Step 1: Calculate the Area and Wet Volume</h4>
      <p>
        First, convert everything to meters.<br />
        Wall Area = 3.048m × 3.048m = <strong>9.29 m²</strong>.<br />
        Plaster Thickness = 12mm = <strong>0.012m</strong>.<br />
        Base Wet Volume = 9.29 m² × 0.012m = <strong>0.111 m³</strong>.
      </p>

      <h4>Step 2: Add Allowance for Unevenness</h4>
      <p>
        Brick walls are never perfectly flat, and the mortar must fill the gaps between the bricks. In Indian civil engineering, we add a <strong>20% allowance</strong> to the wet volume.<br />
        Adjusted Wet Volume = 0.111 m³ + 20% = <strong>0.133 m³</strong>.
      </p>

      <h4>Step 3: Convert Wet Volume to Dry Volume</h4>
      <p>
        When you add water to dry cement and sand, the mixture shrinks. To find out how much dry powder to buy, you must multiply the wet volume by the <strong>1.33 dry volume factor</strong>.<br />
        Dry Volume = 0.133 m³ × 1.33 = <strong>0.177 m³</strong>.
      </p>

      <h4>Step 4: Calculate Cement and Sand</h4>
      <p>
        We are using a 1:4 ratio, which means 1 part cement and 4 parts sand (Total 5 parts).
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Cement Calculation:</strong><br />
        Cement Volume = (1 / 5) × 0.177 m³ = 0.0354 m³.<br />
        Cement Weight = 0.0354 m³ × 1440 kg/m³ (Density) = 51 kg.<br />
        Total Cement Bags = 51 kg ÷ 50 kg = <strong>1.02 Bags of Cement</strong>.
      </div>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Sand Calculation:</strong><br />
        Sand Volume = (4 / 5) × 0.177 m³ = 0.1416 m³.<br />
        To convert to Cubic Feet (CFT), multiply by 35.3147.<br />
        Total Sand = 0.1416 × 35.3147 = <strong>5.0 CFT of Sand</strong>.
      </div>
    </div>
  );
}