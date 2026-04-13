import React from 'react';

export default function StructuralLoadContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Mastering Structural Loads: Tributary Area, Dead Load, and Live Load</h2>
      
      <p className="mt-4">
        In civil and structural engineering, calculating the exact weight a column, beam, or foundation must support is the very first step of building design. You cannot correctly size a steel I-beam or a concrete footing without first understanding the total <strong>Structural Load</strong> pressing down on it.
      </p>

      <p>
        Our comprehensive calculator evaluates the physical footprint of the structural member (the Tributary Area) and processes the area pressures to output the total concentrated force in both standard ASD and modern LRFD formats.
      </p>

      

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Structural Load Terms</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Tributary Area (A):</strong> The specific floor or roof area that directly transfers its load to the specific beam or column you are analyzing. Measured in <em>Square Feet (ft²)</em> or <em>Square Meters (m²)</em>.</li>
        <li><strong>Dead Load (DL):</strong> The permanent, stationary weight of the building materials themselves. This includes the concrete slab, steel framing, roofing, drywall, and permanent fixtures. Measured as a pressure in <em>psf (pounds per square foot)</em> or <em>kPa (kilopascals)</em>.</li>
        <li><strong>Live Load (LL):</strong> The temporary, changing weight of people, furniture, vehicles, or snow. Live load requirements are dictated by building codes based on room usage (e.g., an office requires a higher live load than a residential bedroom).</li>
      </ul>

      

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: ASD (Allowable Stress Design)</h3>
      <p>
        <strong>ASD</strong> is the traditional method of structural design. It calculates the actual, expected load (unfactored) that the structure will experience in the real world. Safety margins are added later by limiting the allowable stress of the steel or wood.
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">ASD Total Load Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">P(asd) = Area × (Dead Load + Live Load)</p>
        <p><strong>Example:</strong> You are designing a column supporting a 10 ft by 10 ft floor area. The Dead Load is 40 psf, and the Live Load is 50 psf.</p>
        <p className="font-mono mt-1">Area = 10 ft × 10 ft = 100 ft²</p>
        <p className="font-mono">P(asd) = 100 ft² × (40 psf + 50 psf)</p>
        <p className="font-mono">P(asd) = 100 × 90 = 9,000 lbs</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 2: LRFD (Load and Resistance Factor Design)</h3>
      <p>
        <strong>LRFD</strong> is the modern standard for steel and concrete design. Instead of limiting the material's strength, LRFD artificially inflates the loads using statistical safety factors to create an "Ultimate Load." Because Live Loads (people/snow) are highly unpredictable, they receive a higher safety multiplier (1.6) than Dead Loads (1.2), which are highly predictable.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">LRFD Ultimate Load Formula (Primary Combination):</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">P(ultimate) = Area × [ (1.2 × Dead Load) + (1.6 × Live Load) ]</p>
        <p><strong>Example:</strong> Using the exact same 10x10 area and 40 psf DL / 50 psf LL from above:</p>
        <p className="font-mono mt-1">Factored Dead Load = 1.2 × 40 = 48 psf</p>
        <p className="font-mono">Factored Live Load = 1.6 × 50 = 80 psf</p>
        <p className="font-mono">P(ultimate) = 100 ft² × (48 + 80)</p>
        <p className="font-mono">P(ultimate) = 100 × 128 = 12,800 lbs</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Why use our calculator?</h3>
      <p>
        Mixing metric and imperial units is a massive hazard in structural engineering. An incorrect conversion from psf to kN/m² can result in a dangerously undersized column. Our Structural Load Calculator bypasses this risk entirely by standardizing your inputs internally, delivering mathematically flawless results in both pounds (lbs) and kilonewtons (kN) instantly!
      </p>
    </div>
  );
}