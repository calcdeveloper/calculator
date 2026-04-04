import React from 'react';

export default function MarbleGraniteContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Calculate Natural Stone Area and Mortar Base Materials</h2>
      <p>
        Installing natural stone is very different from installing ceramic tiles. Stone slabs are thick, heavy, and naturally uneven at the bottom. To achieve a perfectly level floor, masons lay down a thick bed of cement and sand. Doing a proper <strong>marble flooring calculation</strong> means calculating both the square footage of the stone <em>and</em> the volume of the materials hidden underneath.
      </p>

      <h3>Important Flooring Abbreviations & Terms</h3>
      <ul>
        <li><strong>Sq.ft (Square Feet):</strong> The universal measurement for buying and laying stone slabs in India.</li>
        <li><strong>CM (Cement Mortar):</strong> The semi-dry paste of cement, sand, and water used as the base bed for the stone.</li>
        <li><strong>CFT (Cubic Feet):</strong> The unit used to order the sand/dust (often called Badarpur) from local building material suppliers.</li>
        <li><strong>Wastage:</strong> Natural stone has veins, cracks, and uneven edges. You must order 10% to 15% extra material because defective parts of the slab must be cut off and thrown away.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Granite Sq Ft Calculator Method</h3>
      <p>
        First, we calculate the surface area of the room to determine how much stone to buy from the marble yard. 
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Calculate Stone Area</strong><br />
        Area = Length × Width<br />
        Example for a 15 ft by 12 ft living room:<br />
        15 × 12 = <strong>180 Sq.ft</strong>.<br />
        Add 10% Wastage (180 × 1.10) = <strong>198 Sq.ft of stone to buy</strong>.
      </div>

      <hr className="my-6" />

      <h3>Calculating the Cement Mortar Base (The 1.33 Rule)</h3>
      <p>
        To hold the heavy stone, masons spread a 1.5-inch to 2-inch thick layer of mortar. To calculate the cement and sand, we first find the "Wet Volume" of this bed, and then convert it to "Dry Volume".
      </p>
      <p>
        <em>Why convert to Dry Volume?</em> Because when you mix water into dry cement and sand, it shrinks! You need to buy roughly <strong>33% more dry powder</strong> than the final wet volume required.
      </p>

      <h4>Step-by-Step Mortar Formula (Using a 1:6 Mix Ratio)</h4>
      <p>
        Let's calculate the base materials for our 180 Sq.ft room using a standard 1.5-inch thick bed.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Find Wet Volume (in Cubic Meters)</strong><br />
        Convert 180 Sq.ft to Sq.m = 16.72 Sq.m.<br />
        Convert 1.5 inches to meters = 0.0381 meters.<br />
        Wet Volume = 16.72 × 0.0381 = <strong>0.637 m³</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Convert to Dry Volume</strong><br />
        Dry Volume = Wet Volume × 1.33<br />
        0.637 × 1.33 = <strong>0.847 m³ of dry powder needed</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Calculate Cement and Sand (1:6 Ratio)</strong><br />
        Total ratio parts = 1 (Cement) + 6 (Sand) = 7 parts total.<br /><br />
        
        <strong>Cement calculation:</strong><br />
        Volume = 0.847 × (1 / 7) = 0.121 m³.<br />
        Cement Bags = (0.121 × 1440 kg/m³) ÷ 50 kg per bag = <strong>Approx 4 Bags of Cement</strong>.<br /><br />

        <strong>Sand calculation:</strong><br />
        Volume = 0.847 × (6 / 7) = 0.726 m³.<br />
        Convert to CFT = 0.726 × 35.31 = <strong>Approx 26 CFT of Sand</strong>.
      </div>

      <p className="mt-4">
        <strong>A quick note on white marble:</strong> If you are installing pure white Makrana or Italian marble, contractors often switch from standard grey cement to <strong>White Cement</strong> for the slurry layer to prevent dark stains from bleeding up through the porous stone over the years!
      </p>
    </div>
  );
}