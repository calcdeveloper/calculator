import React from 'react';

export default function ThermodynamicsContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Thermodynamics: The Ideal Gas Law</h2>
      
      <p className="mt-4">
        <strong>Thermodynamics</strong> is the branch of physics that deals with heat, work, and temperature, and their relation to energy and the physical properties of matter. One of the most foundational equations in this field is the <strong>Ideal Gas Law</strong>, which describes the behavior of a hypothetical "ideal" gas under various conditions.
      </p>

      <p>
        Whether you are engineering pressurized tanks, studying chemical reactions, or calculating atmospheric changes in weather balloons, understanding the relationship between pressure, volume, and temperature is essential.
      </p>

      

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Thermodynamic Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Pressure (P):</strong> The force exerted by the gas per unit surface area of its container. High pressure means the gas molecules are hitting the walls with great force. Standard units include <em>Atmospheres (atm)</em> and <em>Pascals (Pa)</em>.</li>
        <li><strong>Volume (V):</strong> The three-dimensional space that the gas occupies. Because gases expand to fill their container, the volume of the gas is the volume of the container. Measured in <em>Liters (L)</em> or <em>Cubic Meters (m³)</em>.</li>
        <li><strong>Amount of Substance (n):</strong> Measured in <em>Moles (mol)</em>. One mole represents approximately 6.022 × 10²³ individual molecules (Avogadro's Number) of the gas.</li>
        <li><strong>Temperature (T):</strong> The measure of the average kinetic energy of the gas particles. In thermodynamics, temperature <strong>must</strong> be measured in absolute units, which is why our calculator converts Celsius and Fahrenheit into <em>Kelvin (K)</em> behind the scenes.</li>
        <li><strong>Ideal Gas Constant (R):</strong> A universal physical constant that ties the other variables together. In standard SI units, <strong>R = 8.314 J/(mol·K)</strong>.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">The Ideal Gas Equation (PV = nRT)</h3>
      <p>
        The Ideal Gas Law combines several historical laws (Boyle's Law, Charles's Law, and Avogadro's Law) into one elegant equation. It states that the pressure multiplied by the volume is directly proportional to the number of moles multiplied by the temperature.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Core Equation:</p>
        <p className="mb-4 text-lg font-mono text-calc-blue">P × V = n × R × T</p>
        
        <h4 className="font-bold mb-2">Example Walkthrough:</h4>
        <p>Imagine you have a sealed rigid tank containing <strong>2 moles (n)</strong> of oxygen gas. The tank has a volume of <strong>0.05 cubic meters (V)</strong>, and it is sitting in a hot room at <strong>300 Kelvin (T)</strong>. What is the pressure inside the tank?</p>
        
        <p className="mt-2 mb-1">To solve for Pressure (P), we rearrange the equation to: <strong>P = (n × R × T) / V</strong></p>
        <p className="font-mono">P = (2 mol × 8.314 J/(mol·K) × 300 K) / 0.05 m³</p>
        <p className="font-mono">P = 4988.4 / 0.05</p>
        <p className="font-mono font-bold mt-2">P = 99,768 Pascals (or ~0.98 Atmospheres)</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Algebraic Variations for Reverse-Solving</h3>
      <p>
        Our calculator allows you to leave any one input completely blank (or set to zero) and it will solve for it dynamically. Here are the rearranged formulas our logic engine uses to provide your answers:
      </p>
      <ul className="list-disc pl-6 space-y-2 mt-2 mb-6">
        <li>To find Volume: <strong>V = (n × R × T) / P</strong></li>
        <li>To find Moles: <strong>n = (P × V) / (R × T)</strong></li>
        <li>To find Temperature: <strong>T = (P × V) / (n × R)</strong></li>
      </ul>

      <p className="text-sm text-calc-darkGray italic mt-6">
        Note: The Ideal Gas Law assumes that gas molecules have no volume of their own and that there are no intermolecular forces attracting them to one another. While no gas is truly "ideal," this equation provides incredibly accurate estimates for real gases at high temperatures and low pressures!
      </p>
    </div>
  );
}