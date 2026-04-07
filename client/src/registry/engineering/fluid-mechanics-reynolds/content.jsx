import React from 'react';

export default function FluidMechanicsContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Fluid Mechanics: Understanding the Reynolds Number</h2>
      
      <p className="mt-4">
        In <strong>Fluid Mechanics</strong> and mechanical engineering, understanding how a fluid behaves when it flows through a pipe or around an object is critical. Will the fluid flow in a smooth, predictable path, or will it become chaotic, churning, and mixed? 
      </p>

      <p>
        The answer lies in the <strong>Reynolds Number (Re)</strong>. Our calculator utilizes the fundamental principles of fluid dynamics to instantly solve for your fluid's behavior, allowing you to seamlessly calculate Density, Velocity, Diameter, Viscosity, or the Reynolds Number itself by entering the other four parameters.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Fluid Dynamics Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Reynolds Number (Re):</strong> A dimensionless ratio of inertial forces to viscous forces within a fluid. It helps predict flow patterns in different fluid flow situations.</li>
        <li><strong>Fluid Density (ρ - Rho):</strong> The mass per unit volume of the fluid. Water, for example, is much denser than air. Measured in <em>Kilograms per cubic meter (kg/m³)</em>.</li>
        <li><strong>Flow Velocity (v):</strong> The speed at which the fluid is moving through the pipe or over the surface. Measured in <em>Meters per second (m/s)</em>.</li>
        <li><strong>Characteristic Length / Diameter (D):</strong> The internal diameter of the pipe or tube the fluid is traveling through. Measured in <em>Meters (m)</em>.</li>
        <li><strong>Dynamic Viscosity (μ - Mu):</strong> A measure of the fluid's internal resistance to flow (its "thickness"). Honey has a very high dynamic viscosity compared to water. Measured in <em>Pascal-seconds (Pa·s)</em>.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Flow Regimes: Laminar vs. Turbulent</h3>
      <p>
        The output of the Reynolds Number dictates the <strong>Flow Regime</strong>. Engineers rely heavily on this metric to design safe pipe networks, efficient airplane wings, and functional chemical mixers.
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 mt-2">
        <li><strong>Laminar Flow (Re &lt; 2300):</strong> The fluid flows in parallel layers with no disruption between them. Imagine syrup pouring smoothly. The viscous forces dominate over the inertial forces.</li>
        <li><strong>Transitional Flow (Re between 2300 and 4000):</strong> The flow is fluctuating between smooth layers and chaotic eddies.</li>
        <li><strong>Turbulent Flow (Re &gt; 4000):</strong> The fluid undergoes irregular fluctuations and mixing. Imagine a fast-moving, white-water river. Here, inertial forces dominate, causing chaos.</li>
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">The Reynolds Number Formula</h3>
      <p>
        The calculation is straightforward but requires precise unit conversions to ensure the final number is perfectly dimensionless.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Base Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">Re = (ρ × v × D) / μ</p>
        <p><strong>Example Walkthrough:</strong> Let's calculate the flow of liquid water through a 0.05 m (5 cm) pipe at a velocity of 2 m/s. Standard water density (ρ) is 1000 kg/m³, and its dynamic viscosity (μ) is approximately 0.001 Pa·s.</p>
        <p className="font-mono mt-1">Re = (1000 kg/m³ × 2 m/s × 0.05 m) / 0.001 Pa·s</p>
        <p className="font-mono">Re = 100 / 0.001</p>
        <p className="font-mono font-bold mt-2">Re = 100,000</p>
        <p className="mt-2 text-calc-darkGray"><em>Conclusion: Because 100,000 is far greater than 4000, we know definitively that the water in this pipe is experiencing highly <strong>Turbulent Flow</strong>.</em></p>
      </div>

      <p className="mt-4">
        By utilizing our reverse-solver calculator, you can instantly determine the maximum allowed Flow Velocity to keep a liquid in Laminar form by setting Re to 2200 and leaving Velocity at 0!
      </p>
    </div>
  );
}