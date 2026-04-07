import React from 'react';

export default function RCCircuitContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Understanding RC Circuits: Time Constants and Filters</h2>
      
      <p className="mt-4">
        In electronics, an <strong>RC Circuit</strong> is a fundamental network built using a Resistor (R) and a Capacitor (C). These two simple components work together to dictate how fast a circuit reacts to changes in voltage. 
      </p>

      

      <p className="mt-4">
        RC circuits are the backbone of modern electronics. In the <strong>Time Domain</strong>, they are used to create timers, delays, and debouncers for mechanical switches. In the <strong>Frequency Domain</strong>, they act as analog filters—blocking high-frequency noise from audio signals or extracting smooth DC power from an AC source.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of RC Variables</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Resistance (R):</strong> The component that restricts the flow of current, determining how fast the capacitor is allowed to charge. Measured in <em>Ohms (Ω)</em>.</li>
        <li><strong>Capacitance (C):</strong> The component that stores electrical energy like a tiny, fast-acting battery. Measured in <em>Farads (F)</em>, though typically seen in Microfarads (μF) or Nanofarads (nF).</li>
        <li><strong>Time Constant (τ - Tau):</strong> The amount of time it takes for the capacitor to charge to approximately 63.2% of its maximum capacity (or discharge to 36.8%). Measured in <em>Seconds (s)</em>.</li>
        <li><strong>Cutoff Frequency (fc):</strong> The specific frequency at which an RC filter begins to significantly block AC signals (the -3dB point). Measured in <em>Hertz (Hz)</em>.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Transient Analysis (The Time Constant)</h3>
      <p>
        When you apply DC voltage to an RC circuit, the capacitor doesn't fill up instantly. The resistor acts like a kink in a hose, slowing the flow of electricity. The formula to find out exactly how long the delay takes is incredibly simple:
      </p>

      

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Time Constant Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">τ = R × C</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You have a 10 kΩ resistor (10,000 Ohms) connected to a 100 μF capacitor (0.0001 Farads).</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">τ = 10,000 Ω × 0.0001 F</li>
          <li className="font-mono">τ = 1 Second</li>
        </ul>
        <p className="mt-2"><strong>The 5τ Rule:</strong> In electronics, a capacitor is considered fully charged (99.3%) after exactly 5 Time Constants. So in our example above, it will take exactly <strong>5 Seconds</strong> for the capacitor to fully charge!</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 2: AC Analysis (Cutoff Frequency)</h3>
      <p>
        When fed with alternating current (AC) or audio signals, an RC circuit behaves as a Low-Pass or High-Pass filter depending on how the components are arranged. The frequency at which the filter activates is entirely dependent on the R and C values.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Cutoff Frequency Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">fc = 1 / (2 × π × R × C)</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> Let's use the exact same 10 kΩ resistor and 100 μF capacitor from the previous example. Because we already know that R × C is equal to our Time Constant (1 Second), we can easily find the frequency.</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">fc = 1 / (2 × 3.14159 × 1)</li>
          <li className="font-mono">fc = 1 / 6.283</li>
          <li className="font-mono">fc = <strong>0.159 Hz</strong></li>
        </ul>
      </div>

      <p className="mt-4">
        Our multi-variable calculator removes the tedious fractional math required to design filters. Need a filter that cuts off exactly at 1 kHz (1000 Hz) using a standard 1 μF capacitor? Simply enter those two values, and our tool will instantly reverse-calculate the exact Resistor value you need to solder into your circuit!
      </p>
    </div>
  );
}