import React from 'react';

export default function ColumnFootingContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Concrete Volume for Columns and Footings</h2>
      <p>
        The foundation is the most important part of any structure. Before you pour, getting an accurate <strong>footing concrete calculation</strong> ensures you order the exact amount of Ready-Mix Concrete (RMC) or raw materials, saving you from expensive delays or wasted material.
      </p>

      <h3>Important Construction Terms</h3>
      <ul>
        <li><strong>RCC (Reinforced Cement Concrete):</strong> Concrete that contains steel bars (TMT Sariya) to give it tensile strength. Columns and footings are always cast in RCC.</li>
        <li><strong>PCC (Plain Cement Concrete):</strong> A weak concrete mix (usually M10 grade) poured into the excavated pit <em>before</em> the footing. It acts as a clean, level base so the RCC footing does not touch the raw soil.</li>
        <li><strong>CFT (Cubic Feet):</strong> The standard unit of volume in Indian construction. 1 Cubic Meter (m³) is equal to 35.31 CFT.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Mathematical Formulas</h3>
      <p>
        Finding the <strong>concrete volume for a column</strong> and its footing requires basic geometry. You must calculate the volume of the footing (the flat base) and the volume of the column (the vertical pillar) separately, then add them together.
      </p>

      <h4>1. Rectangular Footing Formula</h4>
      <p>
        A standard footing is a rectangular block (cuboid).<br />
        <strong>Volume = Length × Width × Depth</strong>
      </p>

      <h4>2. Column Formulas</h4>
      <p>
        <strong>For a Rectangular or Square Column:</strong><br />
        Volume = Length × Width × Height
      </p>
      <p>
        <strong>For a Circular Column:</strong><br />
        Volume = π × r² × Height<br />
        <em>(Where π is approx 3.1415, and r is the radius, which is half of the diameter).</em>
      </p>

      <hr className="my-6" />

      <h3>Example: Indian Residential Column Calculation</h3>
      <p>
        In India, a standard residential column is often <strong>9 inches by 12 inches</strong> with a height of <strong>10 feet</strong>. It sits on a <strong>4 feet by 4 feet</strong> footing that is <strong>1 foot thick</strong>. 
      </p>
      <p>
        <em>Pro-Tip: When using our calculator, always convert inches to decimal feet! To convert inches to feet, divide by 12.</em><br />
        9 inches ÷ 12 = <strong>0.75 feet</strong>.<br />
        12 inches ÷ 12 = <strong>1.0 foot</strong>.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Calculate the Footing</strong><br />
        4 ft (Length) × 4 ft (Width) × 1 ft (Depth) = <strong>16 CFT</strong>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Calculate the Column</strong><br />
        0.75 ft (Length) × 1 ft (Width) × 10 ft (Height) = <strong>7.5 CFT</strong>
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Total the Concrete</strong><br />
        Total Volume = 16 CFT + 7.5 CFT = <strong>23.5 CFT per pillar</strong>.
      </div>
      
      <p>
        If your house design requires 12 identical pillars, simply multiply the total by 12 (23.5 × 12 = 282 CFT). Divide by 35.31 to get the result in Cubic Meters (approx 8 m³). Always remember to add a <strong>5% wastage factor</strong> when ordering!
      </p>
    </div>
  );
}