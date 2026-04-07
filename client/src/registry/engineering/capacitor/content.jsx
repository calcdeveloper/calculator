import React from 'react';

export default function CapacitorContent() {
  return (
    <div className="seo-content mt-8">
      <h2 className="text-3xl font-bold text-calc-black mb-4">Understanding Capacitors: Charge and Energy</h2>
      
      <p className="mt-4">
        A capacitor is a fundamental passive electronic component that stores electrical energy in an electric field. Whether you are an electronics hobbyist designing a filter circuit, or a physics student preparing for electromagnetism exams, understanding the exact mathematical relationship between <strong>Capacitance (C)</strong>, <strong>Voltage (V)</strong>, <strong>Charge (Q)</strong>, and <strong>Energy (E)</strong> is essential. 
      </p>

      <p>
        Our advanced calculator allows you to input any two known parameters and instantly calculate the remaining two, bypassing tedious algebra and manual unit conversions.
      </p>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Glossary of Electrical Terms</h3>
      <ul className="list-disc pl-6 space-y-2 mb-6">
        <li><strong>Capacitance (C):</strong> Measured in <em>Farads (F)</em>. This is the ability of a component to collect and store energy in the form of an electrical charge. Because a full Farad is incredibly large, components are usually measured in microfarads (µF), nanofarads (nF), or picofarads (pF).</li>
        <li><strong>Voltage (V):</strong> Measured in <em>Volts (V)</em>. This is the electrical potential difference across the terminals of the capacitor.</li>
        <li><strong>Charge (Q):</strong> Measured in <em>Coulombs (C)</em>. This represents the total amount of electrical charge stored on the plates of the capacitor.</li>
        <li><strong>Energy (E):</strong> Measured in <em>Joules (J)</em>. Also denoted sometimes as <em>W</em> or <em>U</em>, this is the total potential energy stored in the electric field of the capacitor.</li>
      </ul>

      <hr className="my-6 border-calc-lightGray" />

      <h3 className="text-xl font-bold text-calc-black mb-3">Formula 1: The Charge Equation</h3>
      <p>
        The most basic property of a capacitor is that the charge (Q) stored is directly proportional to the voltage (V) applied across it. The constant of proportionality is the capacitance (C).
      </p>
      
      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Base Charge Formula:</p>
        <p className="mb-2 text-lg font-mono">Q = C × V</p>
        <p><strong>Example:</strong> If you connect a 10 µF (0.00001 F) capacitor to a 12 V battery, the charge stored will be:</p>
        <p className="font-mono mt-1">Q = 0.00001 F × 12 V = 0.00012 Coulombs (120 µC)</p>
      </div>

      <p className="mt-4">From this base formula, we easily derive the other variables:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>To find Voltage: <strong>V = Q / C</strong></li>
        <li>To find Capacitance: <strong>C = Q / V</strong></li>
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3">Formula 2: The Energy Equation</h3>
      <p>
        When you charge a capacitor, you are doing work to move charges onto the plates against the existing electrostatic repulsion. This work is stored as potential energy.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">Base Energy Formula:</p>
        <p className="mb-2 text-lg font-mono">E = ½ × C × V²</p>
        <p><strong>Example:</strong> How much energy is stored in a 4700 µF (0.0047 F) capacitor charged to 50 V?</p>
        <p className="font-mono mt-1">E = 0.5 × 0.0047 × 50²</p>
        <p className="font-mono">E = 0.5 × 0.0047 × 2500 = 5.875 Joules</p>
      </div>

      <p className="mt-4">By substituting the Charge formula (Q = C × V) into the Energy formula, we get variations useful for different known variables:</p>
      <ul className="list-disc pl-6 space-y-1 mb-6">
        <li>Energy using Charge and Voltage: <strong>E = ½ × Q × V</strong></li>
        <li>Energy using Charge and Capacitance: <strong>E = Q² / (2 × C)</strong></li>
      </ul>

      <h3 className="text-xl font-bold text-calc-black mb-3">Why are Units Important?</h3>
      <p>
        One of the biggest mistakes students and engineers make is failing to convert units back to their base values (Farads, Volts, Coulombs, Joules) before applying the formulas. For instance, calculating with microfarads (10⁻⁶) and millivolts (10⁻³) without conversion will yield vastly incorrect energy outputs. Our calculator automatically handles all metric prefix conversions behind the scenes, ensuring 100% mathematical accuracy.
      </p>
    </div>
  );
}