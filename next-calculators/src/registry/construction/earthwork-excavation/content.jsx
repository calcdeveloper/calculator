import React from 'react';

export default function EarthworkContent() {
  return (
    <div className="seo-content mt-8">
      <h2>Earthwork Calculation: Estimate Excavation and Soil Removal Volume</h2>
      <p>
        The first physical step of any construction project is earthwork. Whether you are bringing in a JCB to dig foundation footings or excavating a full basement, an accurate <strong>excavation calculation</strong> helps you estimate heavy machinery costs and plan the logistics of removing the dug-up soil.
      </p>

      <h3>Important Earthwork Terminology</h3>
      <ul>
        <li><strong>CFT (Cubic Feet):</strong> The primary volume measurement used in Indian construction.</li>
        <li><strong>Brass:</strong> A traditional Indian volumetric unit. 1 Brass = 100 CFT.</li>
        <li><strong>Bank Volume:</strong> The volume of soil in its natural, undisturbed state in the ground.</li>
        <li><strong>Loose Volume:</strong> The volume of soil after it has been excavated.</li>
      </ul>

      <hr className="my-6" />

      <h3>The "Swell Factor" (Why dirt expands)</h3>
      <p>
        A major mistake beginners make is assuming that a 100 CFT hole will produce 100 CFT of dirt. This is false! 
      </p>
      <p>
        In the ground, soil has been heavily compacted over thousands of years. When a machine excavates it, air is introduced, and the dirt breaks apart. This causes the soil to expand, increasing its volume. This expansion is known as the <strong>Swell Factor</strong>.
      </p>
      <p>
        Standard Indian earth (loam or mixed soil) typically swells by <strong>25%</strong>. This means that 100 CFT of solid earth will turn into 125 CFT of loose soil that you actually have to haul away!
      </p>

      <hr className="my-6" />

      <h3>How to Calculate Soil Removal Volume</h3>
      <p>
        Calculating your <strong>soil removal volume</strong> involves finding the total Bank Volume using basic geometry, and then applying the Swell Factor.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 1: Calculate Bank Volume (Solid Earth)</strong><br />
        Formula: Length × Width × Depth × Number of Pits<br />
        Example: 5 ft × 5 ft × 6 ft = 150 CFT per pit.<br />
        If you have 10 identical pits: 150 × 10 = <strong>1500 CFT of solid earth</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 2: Apply the Swell Factor</strong><br />
        Formula: Bank Volume × 1.25 (for 25% expansion)<br />
        Example: 1500 CFT × 1.25 = <strong>1875 CFT of loose soil</strong>.
      </div>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray font-mono text-sm">
        <strong>Step 3: Calculate Truck Trips</strong><br />
        Formula: Total Loose Volume ÷ Truck Capacity<br />
        If using standard Tractor Trolleys (approx. 1 Brass / 100 CFT capacity):<br />
        1875 CFT ÷ 100 CFT = 18.75.<br />
        <em>Result: You will need to pay for <strong>19 Tractor Trolley trips</strong> to remove all the soil.</em>
      </div>

      <p className="mt-4">
        <strong>Pro Tip for Site Management:</strong> If you plan to backfill the foundation later, do not haul all the soil away! Estimate how much soil is needed to fill the gaps around your RCC columns, and leave that specific amount of soil on-site.
      </p>
    </div>
  );
}