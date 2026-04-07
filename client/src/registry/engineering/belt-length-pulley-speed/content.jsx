import React from 'react';

export default function BeltPulleyContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Mastering Belt Length and Pulley Speed</h2>
      
      <p className="mt-4">
        In mechanical engineering, automotive design, and HVAC systems, <strong>Belt and Pulley Drives</strong> are one of the most common methods of transferring rotational power from an engine (or motor) to a driven component. They are quieter than gears, do not require lubrication, and can transmit power over long distances.
      </p>

      

      <p className="mt-4">
        Designing a belt drive requires two distinct fields of math: <strong>Kinematics</strong> to calculate how the different pulley sizes affect rotational speed, and <strong>Geometry</strong> to calculate exactly how long the belt needs to be to stretch over the pulleys. Our hybrid calculator solves both simultaneously.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Mechanical Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Driver Diameter (D1):</strong> The physical diameter of the driving pulley attached to the motor.</li>
        <li><strong>Driven Diameter (D2):</strong> The physical diameter of the receiving pulley attached to the workload.</li>
        <li><strong>Center Distance (C):</strong> The exact straight-line distance between the center shafts of the two pulleys.</li>
        <li><strong>Belt Length (L):</strong> The total circumferential length of the continuous loop belt.</li>
        <li><strong>RPM:</strong> Revolutions Per Minute. The standard metric of rotational speed.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Calculating Pulley Speed & Ratios</h3>
      <p>
        Just like interlocking gears, a belt physically connects the outer circumferences of two pulleys. Because the belt moves at one constant linear speed, a smaller pulley must spin much faster to keep up with a larger pulley. 
      </p>

      

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Speed Ratio Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">D1 × RPM1 = D2 × RPM2</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You have an electric motor spinning at <strong>1,750 RPM (RPM1)</strong>. It has a <strong>4-inch driver pulley (D1)</strong> attached to it. You are running a belt to an air compressor that needs to spin at <strong>1,000 RPM (RPM2)</strong>. What size pulley (D2) do you need for the compressor?</p>
        
        <p className="mt-2 mb-1">To solve for the Driven Diameter (D2), rearrange the equation to: <strong>D2 = (D1 × RPM1) / RPM2</strong></p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">D2 = (4 in × 1,750 RPM) / 1,000 RPM</li>
          <li className="font-mono">D2 = 7,000 / 1,000</li>
          <li className="font-mono font-bold mt-2">D2 = 7 inches</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 2: Calculating Belt Length</h3>
      <p>
        Once you know the sizes of your two pulleys, you must calculate the length of the belt. The total length is the sum of the two straight sections of the belt spanning the center distance, plus the two curved sections wrapping around the pulleys. The standard geometric formula for a two-pulley open belt is:
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Belt Length Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">L = 2C + (π/2) × (D1 + D2) + (D1 - D2)² / (4C)</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> Following our previous example, we have a <strong>4-inch D1</strong> and a <strong>7-inch D2</strong>. We measure the physical distance between their center shafts as exactly <strong>20 inches (C)</strong>. How long does the belt need to be?</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">L = 2(20) + (1.57) × (4 + 7) + (4 - 7)² / (4 × 20)</li>
          <li className="font-mono">L = 40 + (1.57 × 11) + (-3)² / 80</li>
          <li className="font-mono">L = 40 + 17.27 + (9 / 80)</li>
          <li className="font-mono">L = 40 + 17.27 + 0.1125</li>
          <li className="font-mono font-bold mt-2">L = 57.38 inches</li>
        </ul>
        <p className="mt-2 text-calc-darkGray italic">By leaving the lengths in the calculator configured to your chosen unit, our logic engine instantly performs this complex geometric algebra for you, ensuring a perfectly tight belt fit!</p>
      </div>
    </div>
  );
}