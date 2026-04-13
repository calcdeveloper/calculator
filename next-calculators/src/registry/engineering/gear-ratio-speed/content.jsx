import React from 'react';

export default function GearRatioContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Mechanical Power Transmission: Understanding Gear Ratios</h2>
      
      <p className="mt-4">
        In mechanical engineering, robotics, and automotive design, motors rarely spin at the exact speed or with the exact torque required for the job. To adapt the power of a motor to a real-world task, engineers use a series of interlocking gears. 
      </p>

      

[Image of gear ratio driver and driven gears]


      <p className="mt-4">
        By changing the size (and therefore the tooth count) of the gears, you can mathematically trade rotational speed for twisting force, or vice versa. Our <strong>Gear Ratio Calculator</strong> allows you to reverse-engineer any gear train by simply inputting three known variables to find the fourth.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Mechanical Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Driver Gear (T1):</strong> The input gear that is attached directly to the power source (like an electric motor or engine). Measured by its physical number of teeth.</li>
        <li><strong>Driven Gear (T2):</strong> The output gear that is attached to the workload (like a car's wheels or a robotic arm). Measured by its physical number of teeth.</li>
        <li><strong>RPM (Revolutions Per Minute):</strong> The standard unit of rotational speed. It dictates how many full 360-degree rotations the gear makes in 60 seconds.</li>
        <li><strong>rad/s (Radians Per Second):</strong> The SI derived unit for angular velocity, often used in advanced physics equations (1 RPM ≈ 0.1047 rad/s).</li>
        <li><strong>Torque (τ):</strong> The twisting, rotational force produced by the system. While not directly inputted here, torque and speed are completely inversely proportional in a gear train!</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">The Golden Rule of Gears: Speed vs. Torque</h3>
      <p>
        The most critical concept to understand in gear mechanics is the law of conservation of energy. You cannot create free power. Therefore, a gear ratio acts as a mathematical seesaw:
      </p>

      

      <ul className="list-disc pl-6 space-y-2 mt-2 mb-6">
        <li><strong>Gear Reduction (Ratio &gt; 1:1):</strong> A small Driver Gear spins a large Driven Gear. The output speed <em>decreases</em>, but the output torque <em>increases</em> by the exact same multiplier. Used in tractors, heavy machinery, and first-gear in your car.</li>
        <li><strong>Overdrive (Ratio &lt; 1:1):</strong> A large Driver Gear spins a small Driven Gear. The output speed <em>increases</em> dramatically, but the torque <em>drops</em>. Used in highway cruising gears in vehicles or high-speed centrifuges.</li>
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">The Gear Kinematic Formula</h3>
      <p>
        Because the teeth of both gears interlock perfectly, the number of teeth passing the contact point per minute must be identical for both gears. This gives us our core algebraic equation:
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Base Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">T1 × RPM1 = T2 × RPM2</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You are designing an RC car. Your electric motor has a small <strong>12-tooth pinion gear (T1)</strong> spinning at <strong>30,000 RPM (RPM1)</strong>. You want the wheels to spin at a maximum of <strong>5,000 RPM (RPM2)</strong>. How many teeth do you need on your wheel's spur gear (T2)?</p>
        
        <p className="mt-2 mb-1">To solve for the Driven Gear Teeth (T2), we rearrange the equation to: <strong>T2 = (T1 × RPM1) / RPM2</strong></p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">T2 = (12 × 30,000) / 5,000</li>
          <li className="font-mono">T2 = 360,000 / 5,000</li>
          <li className="font-mono font-bold mt-2">T2 = 72 Teeth</li>
        </ul>
        <p className="mt-2 text-calc-darkGray italic">By leaving the "Driven Gear Teeth" field blank in our calculator, our logic engine instantly performs this exact algebra for you!</p>
      </div>

    </div>
  );
}