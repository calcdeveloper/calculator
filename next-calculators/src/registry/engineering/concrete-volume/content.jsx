import React from 'react';

export default function ConcreteVolumeContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">How to Calculate Concrete Volume for Any Project</h2>
      
      <p className="mt-4">
        Whether you are pouring a backyard patio, setting fence posts, or building a foundation, getting the right amount of concrete is essential. Ordering too little means a cold joint (a weak seam where old and new concrete meet) while you wait for a second truck. Ordering too much wastes money. 
      </p>

      <p>
        Concrete is measured in <strong>Volume</strong> (three-dimensional space). Our Concrete Volume Calculator removes the hassle of converting inches to feet or meters, delivering exact outputs in standard industry measurements.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Volumetric Terms</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Cubic Yard (yd³ or "Yards"):</strong> The standard unit of measurement for ordering ready-mix concrete in the United States. One cubic yard is exactly 3 feet long by 3 feet wide by 3 feet deep (27 cubic feet total).</li>
        <li><strong>Cubic Meter (m³ or "Cubes"):</strong> The standard unit of measurement in metric countries. It is a block 1 meter long, 1 meter wide, and 1 meter deep.</li>
        <li><strong>Cubic Foot (ft³):</strong> Often used for calculating small jobs like fence posts. Pre-mixed bags of concrete (like 80lb or 60lb bags) yield fractions of a cubic foot.</li>
        <li><strong>Depth / Thickness (D):</strong> The vertical thickness of your slab or the depth of your post hole.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Rectangular Slab Volume</h3>
      <p>
        The most common shape for a concrete pour is a rectangle, used for driveways, sidewalks, and shed foundations. The volume is found by multiplying the three dimensions together.
      </p>

      
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Rectangular Volume Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">Volume = Length × Width × Depth</p>
        <p><strong>Example Walkthrough:</strong> You are pouring a concrete patio that is 10 feet long, 10 feet wide, and 4 inches (which is 0.333 feet) thick.</p>
        <p className="font-mono mt-1">Volume = 10 ft × 10 ft × 0.333 ft</p>
        <p className="font-mono">Volume = 33.3 Cubic Feet (ft³)</p>
        <p className="font-mono mt-2"><em>To convert Cubic Feet to Cubic Yards, divide by 27:</em></p>
        <p className="font-mono">33.3 ÷ 27 = 1.23 Cubic Yards (yd³)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 2: Circular Column or Footing Volume</h3>
      <p>
        When you are filling cardboard form tubes (like Sonotubes) for deck footings or drilling holes for fence posts, you need to calculate the volume of a cylinder. This requires finding the area of the circular top using <strong>Pi (π ≈ 3.14159)</strong> and multiplying it by the depth.
      </p>

      

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Cylindrical Volume Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">Volume = π × (Diameter / 2)² × Depth</p>
        <p><strong>Example Walkthrough:</strong> You are filling a cylindrical deck footing that is 12 inches (1 foot) in diameter, and 4 feet deep.</p>
        <p className="font-mono mt-1">Radius = 1 ft / 2 = 0.5 ft</p>
        <p className="font-mono">Volume = 3.14159 × (0.5 ft)² × 4 ft</p>
        <p className="font-mono">Volume = 3.14159 × 0.25 × 4 = 3.14 Cubic Feet (ft³)</p>
        <p className="font-mono mt-2"><em>To convert Cubic Feet to Cubic Yards, divide by 27:</em></p>
        <p className="font-mono">3.14 ÷ 27 = 0.116 Cubic Yards (yd³)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Why is the 5% Wastage Margin Important?</h3>
      <p>
        Our calculator explicitly provides a "Recommended Order" that adds 5% to the exact geometric volume. In real-world construction, subgrades (the dirt under the concrete) are never perfectly flat. A slight dip in the soil, slight bowing of your wooden forms, or spillage from the wheelbarrow will easily consume an extra 5%. Always order slightly more than the exact math suggests to guarantee a successful pour!
      </p>
    </div>
  );
}