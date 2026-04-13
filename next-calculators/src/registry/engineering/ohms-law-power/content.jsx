import React from 'react';

export default function OhmsLawContent() {
  return (
    <div className="seo-content mt-8">
      {/* Fallback title in case the main layout wrapper dropped it */}
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Ohm's Law & Power Calculator</h1>
      
      <p className="mt-4">
        Whether you are a B.Tech engineering student preparing for exams, or an electrician sizing up an inverter battery, understanding the relationship between voltage, current, resistance, and power is mandatory. Our <strong>Ohm's Law calculator</strong> allows you to input any two known values—now supporting a wide variety of units from millivolts to megawatts—to instantly find the rest.
      </p>

      <h3>Essential Electrical Abbreviations</h3>
      <ul>
        <li><strong>V (Voltage):</strong> Measured in <em>Volts</em>. It is the electrical pressure or force that pushes electrons through a conductor. Think of it as water pressure in a pipe.</li>
        <li><strong>I (Current):</strong> Measured in <em>Amperes (Amps)</em>. It is the actual flow rate of electrons. Think of it as the amount of water flowing through the pipe.</li>
        <li><strong>R (Resistance):</strong> Measured in <em>Ohms (Ω)</em>. It is the opposition to the flow of current. Think of it as the thickness or blockage of the pipe.</li>
        <li><strong>P (Power):</strong> Measured in <em>Watts (W)</em>. It is the rate at which electrical energy is transferred or consumed by a load.</li>
      </ul>

      <hr className="my-6" />

      <h3>What is Ohm's Law?</h3>
      <p>
        Formulated by Georg Simon Ohm, this law states that the current passing through a conductor between two points is directly proportional to the voltage across the two points, assuming temperature remains constant.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Base Formula:</p>
        <p className="mb-2">{"$$V = I \\times R$$"}</p>
        <p><strong>Example:</strong> If a circuit has a current of 2 Amps and a resistance of 5 Ohms, the required voltage is:</p>
        <p>{"$$V = 2 \\times 5 = 10 \\text{ Volts}$$"}</p>
      </div>

      <p>From this base formula, we can derive the other variables:</p>
      <ul>
        <li>To find Current: {"$I = \\frac{V}{R}$"}</li>
        <li>To find Resistance: {"$R = \\frac{V}{I}$"}</li>
      </ul>

      <hr className="my-6" />

      <h3>The Power Formula (Joule's Law)</h3>
      <p>
        Electrical power is the product of voltage and current. In India, most appliances are rated in Watts (e.g., a 1500W Geyser). Using the <strong>P = VI formula</strong>, you can easily calculate how many amps of current an appliance will draw to ensure you use the correct wire thickness.
      </p>

      <div className="bg-calc-lightGray/20 p-4 rounded-lg my-4 border border-calc-lightGray text-sm">
        <p className="font-bold mb-2">The Base Power Formula:</p>
        <p className="mb-2">{"$$P = V \\times I$$"}</p>
        <p><strong>Example:</strong> You have a 1000W iron running on standard Indian household voltage (230V). How much current does it draw?</p>
        <p>{"$$I = \\frac{P}{V}$$"}</p>
        <p>{"$$I = \\frac{1000}{230} \\approx 4.34 \\text{ Amps}$$"}</p>
      </div>

      <p>By substituting Ohm's Law into the Power formula, we unlock advanced equations used frequently in circuit design:</p>
      <ul>
        <li>Power using Current and Resistance: {"$P = I^2 \\times R$"}</li>
        <li>Power using Voltage and Resistance: {"$P = \\frac{V^2}{R}$"}</li>
      </ul>
      
      <p className="mt-4 text-sm text-calc-darkGray italic">
        *Note: These formulas apply perfectly to Direct Current (DC) circuits and purely resistive Alternating Current (AC) circuits. For AC circuits with inductive loads (like motors), the Power Factor (PF) must also be considered.
      </p>
    </div>
  );
}