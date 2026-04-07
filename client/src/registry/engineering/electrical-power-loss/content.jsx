import React from 'react';

export default function PowerLossContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Electrical Power Loss & Voltage Drop Explained</h2>
      
      <p className="mt-4">
        In electrical engineering and circuit design, no wire or cable is a perfect conductor. Every material has some inherent friction that resists the flow of electricity. When electricity pushes through this friction, a portion of the electrical energy is converted into heat. This wasted heat energy is known as <strong>Electrical Power Loss</strong> (often called <em>Line Loss</em> or <em>I²R Loss</em>).
      </p>

      

      <p className="mt-4">
        Calculating this loss is vital. If a cable runs too long or carries too much current for its size, the voltage will drop significantly by the time it reaches the end component, and the cable itself could overheat and cause a fire. Our calculator uses the fundamental laws of physics to instantly solve your circuit's parameters.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Electrical Terms</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Current (I):</strong> The rate at which electrical charge flows through the circuit. Think of this as the "volume of water" flowing through a pipe. Measured in <em>Amperes (A)</em>.</li>
        <li><strong>Resistance (R):</strong> The opposition to the flow of current. Thinner wires and longer wires have higher resistance. Measured in <em>Ohms (Ω)</em>.</li>
        <li><strong>Voltage Drop (Vd):</strong> The amount of electrical pressure lost as the current pushes through the resistance of the wire. Measured in <em>Volts (V)</em>.</li>
        <li><strong>Power Loss (P):</strong> The actual amount of energy lost to heat per second due to the resistance. Measured in <em>Watts (W)</em>.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">The Formulas Behind the Calculator</h3>
      <p>
        Our calculator is built on two foundational pillars of electrical theory: <strong>Ohm's Law</strong> and <strong>Joule's Law of Heating</strong>. Because these equations share variables, knowing any two values allows you to calculate the rest algebraically.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <h4 className="font-bold mb-2">1. Ohm's Law (Finding Voltage Drop)</h4>
        <p className="mb-2 text-lg font-mono text-calc-blue">Vd = I × R</p>
        <p className="mb-4"><em>(Voltage Drop = Current multiplied by Resistance)</em></p>
        
        <h4 className="font-bold mb-2">2. Joule's Law (Finding Power Loss)</h4>
        <p className="mb-2 text-lg font-mono text-calc-blue">P = I² × R</p>
        <p className="mb-2"><em>(Power Loss = Current squared multiplied by Resistance)</em></p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You are running a long extension cord to a heavy-duty electric heater. The heater draws <strong>15 Amps (I)</strong>. Because the cord is long and slightly thin, it has a total internal wire resistance of <strong>0.4 Ohms (R)</strong>.</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">Voltage Drop = 15 A × 0.4 Ω = <strong>6 Volts</strong> lost.</li>
          <li className="font-mono">Power Loss = (15 A)² × 0.4 Ω = 225 × 0.4 = <strong>90 Watts</strong> lost as heat!</li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Why High Voltage is Used for Transmission Lines</h3>
      <p>
        Notice in the Power Loss formula (<strong>P = I² × R</strong>) that the Current (I) is <em>squared</em>. This means if you double the current in a wire, the power loss doesn't just double; it multiplies by four! 
      </p>
      <p className="mt-2">
        This is exactly why national power grids transmit electricity at hundreds of thousands of volts. By increasing the Voltage immensely, power companies can deliver the exact same amount of total power using a tiny fraction of the Current (I), thereby keeping the <strong>I²R Line Loss</strong> to an absolute minimum over long distances.
      </p>
    </div>
  );
}