import React from 'react';

export default function AACCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>AAC Block Calculator: Estimate Siporex Blocks & Adhesive</h2>
      <p>
        Autoclaved Aerated Concrete (AAC) blocks are rapidly replacing traditional red clay bricks in modern Indian construction. Because they are up to 3 times lighter, they reduce the dead load on RCC structures and speed up construction. Use our <strong>AAC block calculator</strong> to accurately estimate the number of blocks and the chemical adhesive required for your project.
      </p>

      <h3>How to Calculate AAC Blocks</h3>
      <p>
        Unlike red bricks which vary wildly in size, AAC blocks (often known by the popular brand name, Siporex) are manufactured in standard, precise dimensions. The standard face size of an AAC block in India is <strong>600 mm (Length) × 200 mm (Height)</strong>. The only dimension that changes is the <em>thickness</em> (typically 100mm, 150mm, or 200mm).
      </p>
      
      <h4>The "Blocks per Sqm" Rule</h4>
      <p>
        Because the face of the block is always 600mm x 200mm, calculating the number of <strong>blocks per sqm</strong> is incredibly straightforward. 
      </p>
      <ul>
        <li>Face Area of 1 Block = 0.6m × 0.2m = 0.12 sqm.</li>
        <li>Blocks per Square Meter = 1 sqm ÷ 0.12 sqm = <strong>8.33 Blocks per sqm</strong>.</li>
      </ul>
      <p>
        <em>Note: When we account for the 3mm adhesive joint, it drops slightly to roughly 8.22 blocks per sqm.</em>
      </p>

      <hr className="my-6" />

      <h3>Siporex Block Calculation Example</h3>
      <p>
        Let’s walk through a practical <strong>Siporex block calculation</strong> for a wall measuring <strong>10 feet long by 10 feet high</strong>, using <strong>200mm (8-inch)</strong> thick blocks.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Find the Wall Area in Square Meters</strong><br />
        10 ft = 3.048 meters.<br />
        Wall Area = 3.048m × 3.048m = 9.29 sqm.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Calculate Total Blocks</strong><br />
        Multiply Wall Area by Blocks per Sqm.<br />
        9.29 sqm × 8.22 blocks/sqm = 76.36 Blocks.<br />
        Add 3% wastage = <strong>79 Blocks</strong>.
      </div>

      <h3>Why Chemical Adhesive instead of Cement Mortar?</h3>
      <p>
        AAC blocks are highly porous and absorb water quickly. If you use traditional cement-sand mortar, the blocks will suck the moisture out of the mortar, causing the joints to crack and fail.
      </p>
      <p>
        Instead, a specialized thin-bed polymer chemical adhesive is used. It only requires a <strong>2mm to 3mm joint thickness</strong>. 
      </p>
      <h4>Adhesive Calculation Thumb Rule:</h4>
      <p>
        In the Indian construction industry, a standard <strong>40 kg bag of block adhesive</strong> is sufficient to lay approximately <strong>1.2 Cubic Meters (m³)</strong> of AAC masonry. Our calculator automatically determines your total wall volume and divides it by 1.2 to tell you exactly how many 40kg bags you need to order.
      </p>
    </div>
  );
}