import React from 'react';

export default function TransformerContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Understanding Transformer Turns Ratios</h2>
      
      <p className="mt-4">
        A <strong>Transformer</strong> is a passive electrical device that transfers electrical energy from one electrical circuit to another, or multiple circuits. It achieves this using electromagnetic induction. A varying current in any one coil of the transformer produces a varying magnetic flux in the transformer's core, which induces a varying voltage across any other coils wound around the same core.
      </p>

      

[Image of step-up and step-down transformer schematics]


      <p className="mt-4">
        By simply changing the number of times the wire is wrapped around the core (the "Turns"), engineers can mathematically scale Alternating Current (AC) voltage up or down with incredible precision. Our <strong>Turns Ratio Calculator</strong> handles the math for you, whether you are designing an audio amplifier or analyzing national power grid transmissions.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Transformer Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Primary Voltage (Vp):</strong> The AC voltage applied to the input coil of the transformer.</li>
        <li><strong>Secondary Voltage (Vs):</strong> The AC voltage produced at the output coil of the transformer.</li>
        <li><strong>Primary Turns (Np):</strong> The physical count of how many times the input wire is wrapped around the magnetic core.</li>
        <li><strong>Secondary Turns (Ns):</strong> The physical count of how many times the output wire is wrapped around the magnetic core.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">The Universal Transformer Equation</h3>
      <p>
        In an ideal transformer (assuming no energy is lost to heat or magnetic leakage), the ratio of the voltages is perfectly equal to the ratio of the number of turns. This gives us our core formula:
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Turns Ratio Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">Vp / Vs = Np / Ns</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Types of Transformers & Examples</h3>

      <h4 className="font-bold mt-4 mb-2 text-lg">1. Step-Down Transformers</h4>
      <p>
        A step-down transformer has more turns on the primary coil than the secondary coil. This reduces the voltage. These are found on utility poles outside houses, stepping down massive 7,200V power lines to the safe 120V/240V used inside your home.
      </p>
      <div className="bg-calc-lightGray/10 p-4 rounded-lg my-3 border border-calc-lightGray text-sm">
        <p><strong>Example:</strong> You have a 120V wall outlet (Vp) and you want to build a power supply for a 12V electronics project (Vs). Your primary coil has 500 turns (Np). How many turns do you need for the secondary coil (Ns)?</p>
        <p className="mt-2 font-mono text-calc-darkGray">Formula: Ns = (Vs / Vp) × Np</p>
        <p className="font-mono text-calc-darkGray">Ns = (12 / 120) × 500 = <strong>50 Turns</strong></p>
      </div>

      <h4 className="font-bold mt-6 mb-2 text-lg">2. Step-Up Transformers</h4>
      <p>
        A step-up transformer has fewer turns on the primary coil than the secondary coil, increasing the voltage. These are used in microwave ovens, neon signs, and power plants (to push electricity across long distances with minimal power loss).
      </p>
      <div className="bg-calc-lightGray/10 p-4 rounded-lg my-3 border border-calc-lightGray text-sm">
        <p><strong>Example:</strong> You are analyzing a microwave oven. The wall provides 120V (Vp). The internal transformer has 200 primary turns (Np) and 3,500 secondary turns (Ns). What is the output voltage (Vs) going to the magnetron?</p>
        <p className="mt-2 font-mono text-calc-darkGray">Formula: Vs = (Ns / Np) × Vp</p>
        <p className="font-mono text-calc-darkGray">Vs = (3,500 / 200) × 120 = <strong>2,100 Volts</strong></p>
      </div>

      <h4 className="font-bold mt-6 mb-2 text-lg">3. Isolation Transformers</h4>
      <p>
        If the primary and secondary coils have the exact same number of turns (a 1:1 ratio), the voltage does not change. This is called an <em>Isolation Transformer</em>. It is used heavily in medical equipment and test benches to physically disconnect the device from the wall grid, preventing dangerous shock hazards if a component shorts out to the chassis.
      </p>

    </div>
  );
}