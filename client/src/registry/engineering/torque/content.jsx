import React from 'react';

export default function TorqueContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Understanding Torque: The Physics of Rotational Force</h2>
      
      <p className="mt-4">
        Whether you are a mechanic tightening a cylinder head bolt with a wrench, or an engineering student designing a motor mechanism, understanding <strong>Torque</strong> is critical. Simply put, torque is a measure of how much a force acting on an object causes that object to rotate.
      </p>

      <p>
        Our Torque Calculator removes the guesswork, allowing you to easily compute the rotational force by inputting your known variables. It automatically handles complex trigonometric angles and metric/imperial conversions behind the scenes.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Torque Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Torque (τ - Tau):</strong> The twisting force that causes rotation. It is standardly measured in <em>Newton-meters (Nm)</em> in the metric system, or <em>Pound-feet (lb-ft)</em> in the imperial system.</li>
        <li><strong>Force (F):</strong> The linear push or pull applied to the object. It is measured in <em>Newtons (N)</em> or <em>Pound-force (lbf)</em>.</li>
        <li><strong>Lever Arm Distance (r):</strong> The distance from the axis of rotation (the pivot point) to the exact spot where the force is applied. Also known as the radius. Measured in <em>Meters (m)</em>, <em>Centimeters (cm)</em>, <em>Feet (ft)</em>, or <em>Inches (in)</em>.</li>
        <li><strong>Angle (θ - Theta):</strong> The angle between the force vector and the lever arm. Measured in <em>Degrees (°)</em> or <em>Radians (rad)</em>. Maximum torque is achieved at a 90° angle.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Perpendicular Force (The Simple Formula)</h3>
      <p>
        When you apply force perfectly perpendicular (at a 90-degree angle) to a wrench or lever, all of your energy goes directly into rotating the object. Because the sine of 90° is exactly 1, the angle is dropped from the equation.
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Perpendicular Torque Formula:</p>
        <p className="mb-2 text-lg font-mono">τ = F × r</p>
        <p><strong>Example:</strong> Imagine using a wrench that is 0.5 meters long. If you pull straight down on it with 100 Newtons of force, what is the torque?</p>
        <p className="font-mono mt-1">τ = 100 N × 0.5 m</p>
        <p className="font-mono">τ = 50 Nm (Newton-meters)</p>
      </div>

      <p className="mt-4">If you know the Torque, you can easily reverse the formula:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>To find Force: <strong>F = τ / r</strong></li>
        <li>To find Lever Distance: <strong>r = τ / F</strong></li>
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 2: Angled Force (The Full Formula)</h3>
      <p>
        In the real world, it is often impossible to apply force at a perfect 90° angle. If you push on a wrench at an awkward angle, some of your force pushes directly into the pivot point (doing no rotational work), while only the perpendicular component creates torque. We account for this using trigonometry (Sine).
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Complete Angled Formula:</p>
        <p className="mb-2 text-lg font-mono">τ = F × r × sin(θ)</p>
        <p><strong>Example:</strong> You are applying 100 Newtons of force to that same 0.5-meter wrench, but this time at a 30-degree angle. (Note: sin(30°) = 0.5).</p>
        <p className="font-mono mt-1">τ = 100 N × 0.5 m × sin(30°)</p>
        <p className="font-mono">τ = 100 × 0.5 × 0.5 = 25 Nm</p>
      </div>
      
      <p className="mt-4">
        As the math proves, applying force at a 30° angle results in exactly half the torque (25 Nm) compared to pushing straight on perpendicularly (50 Nm)!
      </p>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Why Unit Conversion Matters</h3>
      <p>
        A common pitfall in physics calculations is mixing imperial and metric units. You cannot directly multiply Pounds of force (lbf) by Centimeters (cm) and get a standard answer. Our calculator avoids these errors by standardizing all user inputs into base metric units before applying the Sine functions, ensuring a highly precise output every time.
      </p>
    </div>
  );
}