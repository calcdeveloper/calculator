import React from 'react';

export default function RoofSlabContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Calculate Concrete and Steel for Your RCC Roof Slab</h2>
      <p>
        Casting a roof slab (commonly known as the <em>lanter</em> in India) is a major milestone in home construction. Whether you are ordering a Ready-Mix Concrete (RMC) truck or mixing materials on-site, using an accurate <strong>slab concrete calculator</strong> ensures you do not fall short of materials in the middle of a continuous pour.
      </p>

      <h3>What is RCC?</h3>
      <p>
        <strong>RCC</strong> stands for <strong>Reinforced Cement Concrete</strong>. Concrete by itself is incredibly strong when compressed, but very weak when bent or pulled (tensile stress). To fix this, we embed TMT steel bars (reinforcement) inside the concrete before it dries. The steel handles the pulling forces, while the concrete handles the crushing forces—together, they create a roof that lasts for generations.
      </p>

      <hr className="my-6" />

      <h3>The Roof Slab Steel Calculation Thumb Rule</h3>
      <p>
        Before structural drawings are finalized, engineers and contractors use highly accurate thumb rules to estimate the amount of steel required for budgeting. 
      </p>
      <p>
        The standard <strong>roof slab steel calculation thumb rule</strong> is based on a percentage of the concrete's total volume. In India, reinforcement for a standard residential slab is typically about <strong>1% of the concrete volume</strong>. 
      </p>
      <ul>
        <li>Density of Steel = 7,850 kg / m³</li>
        <li>1% of 7,850 = <strong>78.5 kg / m³</strong></li>
      </ul>
      <p>
        Therefore, contractors round this up and safely assume that <strong>for every 1 Cubic Meter (m³) of concrete, you will need approximately 80 kg of steel</strong>. For heavy-duty commercial slabs with hidden beams, this thumb rule increases to about 100 kg per m³.
      </p>

      <hr className="my-6" />

      <h3>Step-by-Step Example Calculation</h3>
      <p>
        Let's calculate the materials needed for a residential roof slab that is <strong>40 feet long</strong>, <strong>25 feet wide</strong>, and <strong>5 inches thick</strong>.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Convert Measurements to Meters</strong><br />
        Length: 40 ft × 0.3048 = 12.19 meters<br />
        Width: 25 ft × 0.3048 = 7.62 meters<br />
        Thickness: 5 inches × 0.0254 = 0.127 meters
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Calculate Concrete Volume</strong><br />
        Formula: Length × Width × Thickness<br />
        Volume = 12.19 × 7.62 × 0.127 = <strong>11.79 m³</strong><br />
        Convert to CFT: 11.79 × 35.31 = <strong>416 CFT of concrete</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Estimate Steel Using the Thumb Rule</strong><br />
        Rule: 80 kg of steel per m³ of concrete.<br />
        Steel Required = 11.79 m³ × 80 kg/m³ = <strong>943.2 kg of Steel</strong>.<br />
        <em>(Approx. 0.94 Metric Tons of Sariya)</em>.
      </div>

      <h3>Important Advice for Homeowners</h3>
      <p>
        Always add a <strong>5% wastage factor</strong> to your final concrete volume when ordering RMC. Shuttering (formwork) is rarely perfectly level, and concrete can bulge slightly, consuming more volume than mathematically calculated!
      </p>
    </div>
  );
}