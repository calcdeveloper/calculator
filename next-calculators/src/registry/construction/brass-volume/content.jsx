import React from 'react';

export default function BrassCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>How to Calculate Sand and Aggregate Volume in Brass</h2>
      <p>
        In the Indian construction industry, building materials like river sand (reti), crushed stone aggregate (gitti), and soil are not sold by the kilogram or cubic meter. Instead, local suppliers and truck drivers use a traditional volumetric measurement called <strong>Brass</strong>. 
      </p>
      <p>
        Our Brass Calculator helps you quickly convert your truck or tractor trolley dimensions into Cubic Feet (CFT) and Brass, ensuring you never get overcharged by suppliers.
      </p>

      <h3>The Brass Measurement Formula</h3>
      <p>
        Calculating Brass is very straightforward once you know the core conversion rate: <strong>1 Brass is exactly equal to 100 Cubic Feet (CFT).</strong>
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1:</strong> Find the Volume in CFT (Length × Width × Height in feet)<br />
        <strong>Step 2:</strong> Divide the CFT by 100<br />
        <strong>Formula:</strong> Brass = (L × W × H) ÷ 100
      </div>

      <p>
        <strong>Important Warning on Inches:</strong> A common mistake contractors make is writing inches directly as decimals. For example, 10 feet 6 inches is NOT 10.6 feet. Since there are 12 inches in a foot, 6 inches is half a foot (0.5). So, 10 feet 6 inches should be entered as <strong>10.5 feet</strong>.
      </p>

      <hr className="my-6" />

      <h3>Example: Tractor Trolley Sand Capacity</h3>
      <p>
        Let's look at a real-world example to calculate the <strong>tractor trolley sand capacity</strong>. Suppose a tractor trolley arrives at your site filled with sand. You measure the inside of the trolley bed and the height of the sand:
      </p>
      <ul>
        <li><strong>Length:</strong> 10 feet</li>
        <li><strong>Width:</strong> 5 feet</li>
        <li><strong>Height of Sand:</strong> 2 feet</li>
      </ul>

      <h4>1. CFT to Brass Calculation</h4>
      <p>
        First, we calculate the total Cubic Feet (CFT):<br />
        10 ft × 5 ft × 2 ft = <strong>100 CFT</strong>.
      </p>
      <p>
        Now, we apply the <strong>CFT to Brass</strong> conversion:<br />
        100 CFT ÷ 100 = <strong>1 Brass</strong>.
      </p>
      <p>
        <em>Result: The tractor trolley holds exactly 1 Brass of sand.</em>
      </p>

      <h4>2. How much does 1 Brass of Sand weigh?</h4>
      <p>
        While Brass is a measure of <em>volume</em>, you often need to know the <em>weight</em> to ensure the vehicle isn't overloaded. 
      </p>
      <ul>
        <li>1 CFT of dry river sand weighs approximately <strong>45 kg</strong>.</li>
        <li>Therefore, 1 Brass (100 CFT) of sand weighs approximately <strong>4,500 kg (4.5 Metric Tons)</strong>.</li>
        <li>If the sand is wet, the weight will be significantly higher!</li>
      </ul>
      <p>
        Crushed stone aggregate (20mm gitti) is slightly lighter, weighing around 4,300 kg (4.3 Tons) per Brass. Our calculator automatically estimates this tonnage for you based on the material you select!
      </p>
    </div>
  );
}