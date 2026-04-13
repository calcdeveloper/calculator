import React from 'react';

export default function StressStrainContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Mechanics of Materials: Stress and Strain Explained</h2>
      
      <p className="mt-4">
        In mechanical engineering, materials science, and civil engineering, understanding how a physical material responds to external forces is essential. Whether you are designing a structural steel beam for a bridge or a tiny plastic bracket for a 3D printer, you must calculate <strong>Stress</strong> and <strong>Strain</strong> to ensure the object will not deform or break under a heavy load.
      </p>

      <p>
        Our comprehensive calculator utilizes Hooke's Law and fundamental physics formulas to instantly solve for Stress, Strain, Force, Cross-Sectional Area, or Young's Modulus. Simply enter any two or three known parameters to let our tool do the heavy lifting!
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Mechanical Properties</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Force (F):</strong> The applied mechanical load pushing (compression) or pulling (tension) on the material. Measured in <em>Newtons (N)</em> or <em>Pound-force (lbf)</em>.</li>
        <li><strong>Cross-Sectional Area (A):</strong> The surface area of the material exactly perpendicular to the applied force. Measured in <em>Square Meters (m²)</em> or <em>Square Millimeters (mm²)</em>.</li>
        <li><strong>Stress (σ - Sigma):</strong> The internal pressure or resistance of the material over a given area. Measured in <em>Pascals (Pa)</em>, <em>Megapascals (MPa)</em>, or <em>psi</em>.</li>
        <li><strong>Strain (ε - Epsilon):</strong> The deformation of a material. It is a ratio of the change in length compared to its original length, meaning it is mathematically <em>unitless</em>, though it is often expressed as a percentage (%).</li>
        <li><strong>Young's Modulus of Elasticity (E):</strong> A mechanical property that measures the stiffness of a solid material. It defines the relationship between stress and strain in the linear elastic region. Measured in <em>Gigapascals (GPa)</em>.</li>
      </ul>

      

[Image of stress strain curve diagram]


      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Calculating Mechanical Stress</h3>
      <p>
        Stress occurs when a force is distributed over an area. A massive force spread over a large area might cause very little stress, whereas a tiny force concentrated on a tiny area (like a needle tip) causes immense stress.
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Mechanical Stress Formula:</p>
        <p className="mb-2 text-lg font-mono">σ = F / A</p>
        <p><strong>Example:</strong> If a steel cable with a cross-sectional area of 0.0005 m² is supporting a suspended elevator weighing 10,000 Newtons, what is the stress?</p>
        <p className="font-mono mt-1">σ = 10,000 N / 0.0005 m²</p>
        <p className="font-mono">σ = 20,000,000 Pascals (or 20 MPa)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 2: Calculating Strain</h3>
      <p>
        Strain represents how much a material stretches or compresses. You calculate it by dividing the change in length (ΔL) by the initial original length (L₀). 
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Mechanical Strain Formula:</p>
        <p className="mb-2 text-lg font-mono">ε = ΔL / L₀</p>
        <p><strong>Example:</strong> If a 2-meter long metal rod stretches by 0.01 meters (1 cm) when pulled, what is the strain?</p>
        <p className="font-mono mt-1">ε = 0.01 m / 2 m</p>
        <p className="font-mono">ε = 0.005 (or 0.5% strain)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 3: Hooke's Law and Young's Modulus</h3>
      <p>
        As long as a material is not stretched past its yield strength (meaning it will still snap back to its original shape like a rubber band), Stress and Strain are directly proportional. This relationship is called <strong>Hooke's Law</strong>. The constant number that bridges them is Young's Modulus (E).
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Young's Modulus Formula:</p>
        <p className="mb-2 text-lg font-mono">E = σ / ε</p>
        <p><strong>Example:</strong> If a piece of metal experiences 20 MPa (20,000,000 Pa) of stress and exhibits a strain of 0.005, what is its Modulus?</p>
        <p className="font-mono mt-1">E = 20,000,000 / 0.005</p>
        <p className="font-mono">E = 4,000,000,000 Pascals (or 4 GPa)</p>
      </div>
      
      <p className="mt-4">
        By utilizing our calculator, you can bypass these complicated manual unit conversions. Simply select whether your area is in square inches or square millimeters, and our robust engine handles the fundamental physics in the background!
      </p>
    </div>
  );
}