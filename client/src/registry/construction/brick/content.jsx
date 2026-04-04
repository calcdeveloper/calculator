import React from 'react';

export default function BrickCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Brickwork Calculation Formula: Estimate Bricks, Cement, and Sand</h2>
      <p>
        Whether you are building a boundary wall or constructing a multi-story home, calculating the exact quantity of materials is critical to controlling construction costs. Our calculator uses standard civil engineering formulas to determine the number of bricks, cement bags (50kg), and sand (in CFT) required for both red bricks and fly ash bricks.
      </p>

      <h3>How to Calculate Bricks per Square Foot</h3>
      <p>
        The number of bricks you need depends heavily on the thickness of the wall and the size of the brick. In India, there are two standard wall thicknesses:
      </p>
      <ul>
        <li><strong>4.5-inch Wall (Half Brick Wall):</strong> Used for interior partition walls. Approximately <strong>4.5 to 5 bricks per square foot</strong>.</li>
        <li><strong>9-inch Wall (Full Brick Wall):</strong> Used for exterior load-bearing walls. Approximately <strong>9 to 10 bricks per square foot</strong>.</li>
      </ul>
      <p>
        <strong>The Formula:</strong><br />
        To find the exact number mathematically, you divide the total volume of the wall by the volume of a single brick <em>including the mortar joint</em> (standard 10mm).
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        Number of Bricks = Volume of Wall ÷ Volume of 1 Brick with Mortar
      </div>

      <h3>Cement Sand Ratio for Brickwork</h3>
      <p>
        Mortar acts as the binding glue between the bricks. The strength of your wall depends on the correct ratio of cement to sand.
      </p>
      <ul>
        <li><strong>1:4 Ratio (1 part cement, 4 parts sand):</strong> Ideal for 4.5-inch half-brick partition walls as they require stronger adhesion.</li>
        <li><strong>1:5 or 1:6 Ratio:</strong> Standard for 9-inch full-brick exterior walls.</li>
      </ul>

      <hr className="my-6" />

      <h3>Step-by-Step Material Calculation (Example)</h3>
      <p>
        Let's calculate the materials for a <strong>10 ft x 10 ft wall</strong> (100 sq ft) that is <strong>9 inches thick</strong>, using standard 230x115x75mm traditional red bricks and a 1:6 mortar ratio.
      </p>

      <h4>Step 1: Calculate the Number of Bricks</h4>
      <p>
        First, calculate the volume. Convert 10ft x 10ft x 9in to metric: 3m x 3m x 0.23m = <strong>2.07 Cubic Meters (m³)</strong>.<br />
        A standard brick with a 10mm mortar joint measures 240mm x 125mm x 85mm. <br />
        Volume of one brick with mortar = 0.24m × 0.125m × 0.085m = <strong>0.00255 m³</strong>.<br />
        Total Bricks = 2.07 ÷ 0.00255 = <strong>811 Bricks</strong> (plus add 5% for breakage).
      </p>

      <h4>Step 2: Calculate Mortar Volume</h4>
      <p>
        Subtract the actual volume of the bricks (without mortar) from the total wall volume.<br />
        Actual Brick Volume = 0.23m × 0.115m × 0.075m = 0.00198 m³.<br />
        Volume of 811 bricks = 1.60 m³.<br />
        Wet Mortar Volume = 2.07 (Wall Vol) - 1.60 (Brick Vol) = <strong>0.47 m³</strong>.
      </p>
      <p>
        <em>Important:</em> We must multiply the wet volume by <strong>1.33</strong> to get the "Dry Volume" because dry sand and cement shrink when water is added.<br />
        Dry Volume = 0.47 × 1.33 = <strong>0.62 m³</strong>.
      </p>

      <h4>Step 3: Calculate Cement and Sand</h4>
      <p>
        Using a 1:6 ratio (Total 7 parts):<br />
        <strong>Cement:</strong> (1/7) × 0.62 m³ = 0.088 m³.<br />
        To convert to 50kg bags, multiply by cement density (1440 kg/m³) and divide by 50: (0.088 × 1440) / 50 = <strong>2.5 Bags of Cement</strong>.
      </p>
      <p>
        <strong>Sand:</strong> (6/7) × 0.62 m³ = 0.53 m³.<br />
        To convert to Cubic Feet (CFT), multiply by 35.3147: 0.53 × 35.3147 = <strong>18.7 CFT of Sand</strong>.
      </p>
    </div>
  );
}