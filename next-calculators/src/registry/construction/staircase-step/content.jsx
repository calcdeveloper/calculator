import React from 'react';

export default function StaircaseCalculatorContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Mastering the Staircase Step Calculation</h2>
      <p>
        A poorly designed staircase with uneven steps is not only tiring to climb but also a major safety hazard. Whether you are building a new house in India or checking your contractor's blueprint, a precise <strong>staircase step calculation</strong> is mandatory. Our calculator instantly balances your floor height to give you perfectly equal steps and estimates the concrete volume required.
      </p>

      <h3>Important Staircase Terminology</h3>
      <ul>
        <li><strong>Riser (R):</strong> The vertical part of the step that dictates how high you lift your foot. For Indian homes, an ideal riser is 6 inches (150mm).</li>
        <li><strong>Tread (T):</strong> The flat, horizontal part of the step where you place your foot. The standard is 10 to 11 inches (250mm to 275mm).</li>
        <li><strong>Waist Slab:</strong> The tilted RCC concrete slab that supports the steps from underneath.</li>
        <li><strong>RCC (Reinforced Cement Concrete):</strong> The mixture of cement, sand, aggregate, and steel rods used to cast the durable staircase structure.</li>
        <li><strong>Run:</strong> The total horizontal distance the staircase covers on the floor map.</li>
        <li><strong>Landing:</strong> The flat resting platform that breaks up a long staircase (e.g., a "dog-legged" stair has a mid-landing).</li>
      </ul>

      <hr className="my-6" />

      <h3>The Standard Riser and Tread Formula</h3>
      <p>
        The golden rule of civil engineering is that all risers in a flight <strong>must be exactly equal</strong>. Even a 0.5-inch difference on the top step can cause people to trip. Here is how the math is done:
      </p>

      <h4>Step 1: Calculate Total Number of Risers</h4>
      <p>
        <strong>Formula: Number of Risers = Total Floor Height ÷ Target Riser Height</strong>
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Example:</strong><br />
        Your floor-to-floor height is 10 feet 6 inches.<br />
        Convert to inches: (10 × 12) + 6 = <strong>126 inches</strong>.<br />
        Assume a target riser of 6 inches.<br />
        126 ÷ 6 = <strong>21 Risers (Steps)</strong>.
      </div>
      <p className="text-sm text-calc-darkGray italic">
        *If the result is a decimal (e.g., 20.5), you round it to the nearest whole number (21), and then divide the total height by that whole number to find the exact, equal height for every single riser.
      </p>

      <h4>Step 2: Calculate Total Number of Treads</h4>
      <p>
        The top step usually seamlessly connects to the upper floor slab or landing. Because of this, you always need one less tread than risers.
      </p>
      <p>
        <strong>Formula: Number of Treads = Number of Risers - 1</strong>
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        If you have 21 Risers, you will have:<br />
        21 - 1 = <strong>20 Treads</strong>.
      </div>

      <h4>Step 3: Calculate Total Horizontal Run</h4>
      <p>
        To know how much floor space your staircase will consume, multiply the number of treads by the length of one tread.
      </p>
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Formula: Total Run = Number of Treads × Tread Length</strong><br />
        20 Treads × 10 inches = 200 inches.<br />
        200 ÷ 12 = <strong>16.66 Feet of horizontal space needed</strong>.
      </div>

      <hr className="my-6" />

      <h3>How the Concrete Volume is Calculated</h3>
      <p>
        Contractors need to know how much raw material to order for the staircase framework. The concrete volume is divided into two distinct geometric shapes:
      </p>
      <ol>
        <li>
          <strong>The Waist Slab (Rectangular Base):</strong> Using Pythagoras' Theorem (A² + B² = C²), we calculate the inclined length of the stairs using the total height and total run. We then multiply this inclined length by the width of the stairs and the thickness of the slab (usually 5 inches).
        </li>
        <li>
          <strong>The Steps (Triangles):</strong> The steps themselves are right-angled triangles sitting on top of the waist slab. The area of one triangle is <em>0.5 × Base (Tread) × Height (Riser)</em>. We multiply this by the stair width and the total number of treads to get the step volume.
        </li>
      </ol>
      <p>
        Adding both volumes together gives the total raw concrete required in Cubic Feet (CFT) or Cubic Meters (Cu.m), ensuring accurate material ordering without heavy wastage.
      </p>
    </div>
  );
}