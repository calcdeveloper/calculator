import React from 'react';

export default function WaterTankContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Calculate Your Water Tank Capacity in Liters</h2>
      <p>
        Whether you are digging an RCC (Reinforced Cement Concrete) sump under your parking lot or buying an overhead plastic tank (often popularly referred to in India as a "Sintex" or "Syntax" tank), knowing the exact <strong>water tank capacity in liters</strong> is essential for managing your home's daily water supply.
      </p>

      <h3>Indian Water Consumption Thumb Rules</h3>
      <p>
        According to the BIS (Bureau of Indian Standards), standard domestic water consumption is estimated at <strong>135 Liters per capita per day (lpcd)</strong>. For a standard family of four, this means you need approximately 540 liters of water daily for drinking, cooking, bathing, and flushing.
      </p>

      <hr className="my-6" />

      <h3>The Science of Water Conversion</h3>
      <p>
        To find the capacity of a tank, we first find its internal volume in standard units like Cubic Feet (CFT) or Cubic Meters (m³), and then convert that volume into Liters.
      </p>
      <ul>
        <li><strong>Rule 1:</strong> 1 Cubic Meter (m³) of volume holds exactly <strong>1,000 Liters</strong> of water.</li>
        <li><strong>Rule 2:</strong> 1 Cubic Foot (CFT) of volume holds exactly <strong>28.31 Liters</strong> of water.</li>
      </ul>

      <hr className="my-6" />

      <h3>Using the Underground Water Tank Size Calculator</h3>
      <p>
        Underground water tanks (sumps/haud) are typically rectangular. Let's look at how to calculate the capacity step-by-step.
      </p>

      <h4>Rectangular Tank Formula</h4>
      <p>
        <strong>Volume = Length × Width × Depth</strong>
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example Calculation (Measured in Feet):</strong><br />
        Let's say your underground RCC tank is 6 ft long, 4 ft wide, and 5 ft deep.<br />
        Step 1: Calculate Volume = 6 × 4 × 5 = <strong>120 CFT</strong>.<br />
        Step 2: Convert to Liters = 120 CFT × 28.3168 = <strong>3,398 Liters</strong>.
      </div>

      <h4>Cylindrical Tank Formula (Overhead / Sintex Type)</h4>
      <p>
        Overhead plastic tanks are mostly cylindrical. To find the volume, you need the internal diameter and the height of the water level.
      </p>
      <p>
        <strong>Volume = π × r² × Height</strong><br />
        <em>(Where π is approx 3.1415, and r is the radius, which is half of the diameter)</em>.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example Calculation (Measured in Meters):</strong><br />
        Let's say your cylindrical tank has a diameter of 1 meter and a height of 1.5 meters.<br />
        Step 1: Find Radius = 1 meter ÷ 2 = 0.5 meters.<br />
        Step 2: Calculate Volume = 3.1415 × (0.5 × 0.5) × 1.5 = <strong>1.178 m³</strong>.<br />
        Step 3: Convert to Liters = 1.178 m³ × 1000 = <strong>1,178 Liters</strong>.
      </div>

      <p className="mt-4">
        <strong>Important Contractor Tip:</strong> Always measure the <em>internal</em> dimensions of the tank! Wall thickness (like a 9-inch brick wall) takes up a lot of space and will heavily reduce your actual <strong>water tank capacity in liters</strong> if you mistakenly use the outside measurements.
      </p>
    </div>
  );
}