import React from 'react';

export default function FrequencyContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Mastering Frequency, Wavelength, and Time Period</h2>
      
      <p className="mt-4">
        In electronic engineering, telecommunications, and physics, understanding wave behavior is absolute paramount. Whether you are designing a clock circuit for a computer processor, tuning an RF (Radio Frequency) antenna, or analyzing AC (Alternating Current) power lines, you are constantly working with repeating signals.
      </p>

      <p>
        Because all repeating waves share universal mathematical properties, you only need to know <strong>one</strong> characteristic of a wave to unlock all the others. Our Frequency Calculator acts as a master key, instantly translating between Time, Cycles, Length, and Radial momentum.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Wave Terminology</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Frequency (f):</strong> The number of complete wave cycles that occur in exactly one second. Measured in <em>Hertz (Hz)</em>. A 1 GHz computer processor completes one billion clock cycles per second.</li>
        <li><strong>Time Period (T):</strong> The exact amount of time it takes to complete one single wave cycle. It is the direct inverse of frequency. Measured in <em>Seconds (s)</em>.</li>
        <li><strong>Wavelength (λ - Lambda):</strong> The physical distance a wave travels in space during one complete cycle. Measured in <em>Meters (m)</em>.</li>
        <li><strong>Angular Frequency (ω - Omega):</strong> Used heavily in advanced AC circuit analysis, this measures the rate of change of the wave's phase in radians. Measured in <em>Radians per second (rad/s)</em>.</li>
        <li><strong>Speed of Light (c):</strong> A physical constant representing how fast electromagnetic waves travel in a vacuum: exactly <em>299,792,458 meters per second</em>.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Method 1: Calculating Frequency from Time Period</h3>
      <p>
        Frequency and Time Period are reciprocals. If you know how long one cycle takes, you can easily find how many cycles fit into one second.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">f = 1 / T</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You are measuring an AC power signal on an oscilloscope. You see that one complete sine wave takes exactly <strong>20 milliseconds (0.020 seconds)</strong> to complete.</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">f = 1 / 0.020 s</li>
          <li className="font-mono">f = <strong>50 Hz</strong></li>
        </ul>
        <p className="mt-2 text-calc-darkGray italic">Note: 50 Hz is the standard frequency for AC mains electricity in Europe, Asia, and most of the world.</p>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 2: Calculating Wavelength from Frequency</h3>
      <p>
        For antenna design and RF engineering, you must know the physical length of the radio wave to cut your copper wire to the correct size. To find this, we divide the speed of light by the frequency.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">λ = c / f</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You want to build an antenna for a local FM radio station broadcasting at <strong>100 MHz (100,000,000 Hz)</strong>. We will use the speed of light (approx 300,000,000 m/s).</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">λ = 300,000,000 m/s / 100,000,000 Hz</li>
          <li className="font-mono">λ = <strong>3 Meters</strong></li>
        </ul>
      </div>

      <h3 className="text-xl font-bold text-calc-black mb-3 mt-6">Method 3: Calculating Angular Frequency</h3>
      <p>
        In electronics, particularly when calculating inductive or capacitive reactance, formulas use Angular Frequency instead of standard frequency. Because one full sine wave cycle is equal to a full circle (2π radians), we simply multiply the frequency by 2π.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Formula:</p>
        <p className="mb-2 text-lg font-mono text-calc-blue">ω = 2 × π × f</p>
        
        <p className="mt-4 border-t border-calc-lightGray pt-2"><strong>Example Walkthrough:</strong> You are designing a filter circuit for a standard US audio system operating at a <strong>60 Hz</strong> hum frequency.</p>
        <ul className="list-disc pl-6 space-y-1 mt-2 mb-2">
          <li className="font-mono">ω = 2 × 3.14159 × 60 Hz</li>
          <li className="font-mono">ω = <strong>376.99 rad/s</strong></li>
        </ul>
      </div>

    </div>
  );
}