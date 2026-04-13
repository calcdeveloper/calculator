import React from 'react';

export default function ConcreteCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Concrete Mix Calculator: Find Cement, Sand, and Aggregate Quantities</h2>
      <p>
        Whether you are casting a roof slab (lanter), building columns, or laying a foundation, getting the right mix of materials is vital for the structural integrity of your building. Our <strong>cement sand aggregate calculator</strong> uses the standard Indian nominal mix methods to determine exactly how many 50kg cement bags and CFT of sand and aggregate you need.
      </p>

      <h3>Understanding Concrete Mix Ratios in India</h3>
      <p>
        Concrete is classified into different grades (M10, M15, M20, M25). The "M" stands for Mix, and the number represents the compressive strength of the concrete after 28 days (in N/mm²). Each grade corresponds to a specific volume ratio of <strong>Cement : Sand : Aggregate</strong>.
      </p>
      <ul>
        <li><strong>M10 (1:3:6):</strong> Low strength. Used for leveling courses (PCC) beneath foundations.</li>
        <li><strong>M15 (1:2:4):</strong> Medium strength. Often used for simple residential foundations or non-load-bearing ground floors.</li>
        <li><strong>M20 (1:1.5:3):</strong> The standard structural mix. <strong>The M20 concrete mix ratio is universally recommended for RCC roof slabs, beams, and columns in standard Indian house construction.</strong></li>
        <li><strong>M25 (1:1:2):</strong> High strength. Used for heavy load-bearing structures and commercial buildings.</li>
      </ul>

      <h3>The Dry Volume Factor (The 1.54 Rule)</h3>
      <p>
        When you mix water with dry cement, sand, and aggregate, the mixture shrinks because the finer cement and sand particles fill the empty voids between the large aggregate stones. 
      </p>
      <p>
        To get 1 cubic meter of wet, poured concrete, you actually need <strong>54% more dry material</strong>. Therefore, in all civil engineering calculations, we multiply the required wet volume by <strong>1.54</strong> to get the dry volume.
      </p>

      <hr className="my-6" />

      <h3>Step-by-Step Example: Calculating 1 Cubic Meter of M20 Concrete</h3>
      <p>
        Let's look at the exact mathematical formula to find the materials needed for <strong>1 m³ of M20 grade concrete</strong>. 
      </p>

      <h4>Step 1: Find the Dry Volume</h4>
      <p>
        Wet Volume = 1 m³.<br />
        Dry Volume = 1 m³ × 1.54 = <strong>1.54 m³</strong>.
      </p>

      <h4>Step 2: Apply the M20 Ratio</h4>
      <p>
        The M20 concrete mix ratio is <strong>1 : 1.5 : 3</strong>. <br />
        Total parts = 1 + 1.5 + 3 = <strong>5.5 parts</strong>.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Cement Calculation</strong><br />
        Formula: (Cement Part / Total Parts) × Dry Volume<br />
        Volume of Cement = (1 / 5.5) × 1.54 = 0.28 m³.<br />
        Weight of Cement = 0.28 m³ × 1440 kg/m³ (Density) = 403.2 kg.<br />
        Number of Bags = 403.2 kg ÷ 50 kg = <strong>~8 Bags of Cement</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 4: Sand Calculation</strong><br />
        Formula: (Sand Part / Total Parts) × Dry Volume<br />
        Volume of Sand = (1.5 / 5.5) × 1.54 = 0.42 m³.<br />
        Convert to CFT (multiply by 35.3147) = 0.42 × 35.3147 = <strong>14.8 CFT of Sand</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 5: Aggregate (Gitti) Calculation</strong><br />
        Formula: (Aggregate Part / Total Parts) × Dry Volume<br />
        Volume of Aggregate = (3 / 5.5) × 1.54 = 0.84 m³.<br />
        Convert to CFT = 0.84 × 35.3147 = <strong>29.7 CFT of Aggregate</strong>.
      </div>

      <p>
        <em>Note:</em> For massive projects, you can convert the total CFT of sand and aggregate into <strong>Brass</strong> simply by dividing the CFT result by 100!
      </p>
    </div>
  );
}