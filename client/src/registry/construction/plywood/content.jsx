import React from 'react';

export default function PlywoodLaminateContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Estimate Wood Materials with the Plywood Sheet Calculator</h2>
      <p>
        When building custom furniture like wardrobes, modular kitchens, or beds, contractors measure the project in "Square Feet" but buy materials in "Sheets". Without a proper <strong>plywood sheet calculator</strong>, homeowners often get confused when a carpenter asks for 15 sheets of plywood for a single wardrobe!
      </p>

      <h3>Important Interior Abbreviations in India</h3>
      <ul>
        <li><strong>BWR / BWP (Boiling Water Resistant/Proof):</strong> The grade of plywood (often Marine Grade) used in kitchens and bathrooms where moisture is high.</li>
        <li><strong>MR (Moisture Resistant):</strong> Commercial grade plywood used for standard bedroom wardrobes and beds.</li>
        <li><strong>Sunmica (Laminate):</strong> Sunmica was an early brand of decorative laminates in India that became so famous the name is now used for all laminates. It is the hard, scratch-resistant plastic sheet glued over the plywood.</li>
        <li><strong>Liner Mica:</strong> A cheaper, thinner laminate (usually 0.72mm white or off-white) glued to the <em>inside</em> of wardrobes to keep your clothes clean and safe from wood splinters.</li>
      </ul>

      <hr className="my-6" />

      <h3>The Universal 8x4 Sheet Rule</h3>
      <p>
        In India, 95% of all plywood, blockboard, MDF, and laminate sheets are manufactured in a standard size of <strong>8 feet by 4 feet</strong>. 
      </p>
      <p>
        <strong>8 ft × 4 ft = 32 Square Feet per sheet.</strong>
      </p>
      <p>
        Any <strong>sunmica square feet calculator</strong> must ultimately divide your total required area by 32 to tell you exactly how many physical sheets to order from the timber yard.
      </p>

      <hr className="my-6" />

      <h3>How to Calculate Plywood for a Wardrobe</h3>
      <p>
        A wardrobe is a 3D box. If you look at the front of a wardrobe that is 10 feet wide and 7 feet tall, the "Elevation Area" is 70 Sq.ft. But you need wood for the doors, the deep side panels, the top, the bottom, and all the horizontal shelves inside!
      </p>

      <h4>The Carpenter's Multiplier Method</h4>
      <p>
        Industry professionals use simple multipliers to estimate the hidden wood inside furniture based solely on the front elevation area.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example: 10 ft (Height) × 7 ft (Width) Wardrobe</strong><br />
        Elevation Area = 10 × 7 = <strong>70 Sq.ft</strong>.
        <br /><br />
        <strong>1. Primary Plywood (18mm thick):</strong><br />
        Multiplier is 3x.<br />
        70 Sq.ft × 3 = 210 Sq.ft.<br />
        Sheets = 210 ÷ 32 (Standard Sheet) = <strong>~7 Sheets of 18mm Plywood</strong>.
        <br /><br />
        <strong>2. Backing Plywood (6mm or 8mm thick):</strong><br />
        Multiplier is 1x (Only used to cover the back touching the wall).<br />
        70 Sq.ft × 1 = 70 Sq.ft.<br />
        Sheets = 70 ÷ 32 = <strong>~3 Sheets of 6mm Plywood</strong>.
      </div>

      <h4>Calculating Sunmica / Laminate</h4>
      <p>
        You do not laminate the back of the wardrobe facing the wall, nor do you put expensive designer laminate on the inside. 
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>1. Outer Designer Sunmica (1mm thick):</strong><br />
        Covers the front doors and exposed sides. Multiplier is ~1.3x.<br />
        70 Sq.ft × 1.3 = 91 Sq.ft.<br />
        Sheets = 91 ÷ 32 = <strong>~3 Sheets of Designer Laminate</strong>.
        <br /><br />
        <strong>2. Inner Liner Mica (0.72mm thick):</strong><br />
        Covers the inside boxes and shelves. Multiplier is ~2.5x.<br />
        70 Sq.ft × 2.5 = 175 Sq.ft.<br />
        Sheets = 175 ÷ 32 = <strong>~6 Sheets of Liner Laminate</strong>.
      </div>

      <p className="mt-4 text-sm text-calc-darkGray italic">
        *Pro Tip: Always factor in 10% to 15% wastage. When carpenters cut large 8x4 sheets into specific sizes for drawers and shelves, there will always be off-cuts that cannot be reused due to grain direction or size constraints. Our calculator automatically adds this buffer for you!
      </p>
    </div>
  );
}