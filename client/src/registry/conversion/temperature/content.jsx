import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Temperature</h2>
        <p className="mb-4">
          Converting temperatures is a daily necessity for international travel, weather tracking, baking, and science. Unlike distance or weight, which simply multiply from zero, temperature systems have different starting points (like freezing and absolute zero).
        </p>
        <p>
          This means you must use specific mathematical formulas combining multiplication, division, addition, and subtraction to convert accurately between <strong>Celsius (°C)</strong>, <strong>Fahrenheit (°F)</strong>, and <strong>Kelvin (K)</strong>.
        </p>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Celsius & Fahrenheit Formulas</h3>
        <p className="text-sm mb-4">These are the two most commonly used temperature scales in the world. Water freezes at 0°C (32°F) and boils at 100°C (212°F).</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Celsius to Fahrenheit (°C to °F)</h4>
            <p className="text-sm"><strong>Formula:</strong> Multiply by 9/5 (or 1.8), then add 32.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Math:</strong> (°C × 1.8) + 32 = °F</li>
              <li><strong>Example:</strong> Convert 25°C to Fahrenheit.</li>
              <li>(25 × 1.8) + 32 = 45 + 32 = <strong>77°F</strong></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green">
            <h4 className="font-bold text-gray-900 mb-1">Fahrenheit to Celsius (°F to °C)</h4>
            <p className="text-sm"><strong>Formula:</strong> Subtract 32, then multiply by 5/9.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Math:</strong> (°F - 32) × 5/9 = °C</li>
              <li><strong>Example:</strong> Convert 98.6°F to Celsius.</li>
              <li>(98.6 - 32) × 5/9 = 66.6 × 5/9 = <strong>37°C</strong></li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Kelvin Formulas (Scientific)</h3>
        <p className="text-sm mb-4">Kelvin is an absolute temperature scale used heavily in science and engineering. It does not use degrees (°). Zero Kelvin (0 K) is Absolute Zero—the theoretical point where all molecular movement stops.</p>
        
        <div className="space-y-4">
          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
            <h4 className="font-bold text-gray-900 mb-1">Celsius & Kelvin</h4>
            <p className="text-sm">Because one degree Celsius is the exact same size as one Kelvin, you only need to add or subtract the offset of 273.15.</p>
            <ul className="text-sm mt-2 space-y-1 text-gray-600">
              <li><strong>Celsius to Kelvin:</strong> °C + 273.15 = K <em>(Example: 20°C + 273.15 = 293.15 K)</em></li>
              <li><strong>Kelvin to Celsius:</strong> K - 273.15 = °C <em>(Example: 300 K - 273.15 = 26.85°C)</em></li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded shadow-sm border-l-4 border-purple-500">
            <h4 className="font-bold text-gray-900 mb-1">Fahrenheit & Kelvin</h4>
            <p className="text-sm">To convert between these two, you essentially convert to Celsius first in the middle of the equation.</p>
            <ul className="text-sm mt-2 space-y-2 text-gray-600">
              <li><strong>Fahrenheit to Kelvin:</strong> Subtract 32, multiply by 5/9, then add 273.15.</li>
              <li><strong>Kelvin to Fahrenheit:</strong> Subtract 273.15, multiply by 9/5, then add 32.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold text-gray-900">Quick Temperature Benchmarks</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm">
          <li><strong>Absolute Zero:</strong> -273.15°C / -459.67°F / 0 K</li>
          <li><strong>Water Freezing Point:</strong> 0°C / 32°F / 273.15 K</li>
          <li><strong>Average Human Body Temp:</strong> 37°C / 98.6°F / 310.15 K</li>
          <li><strong>Water Boiling Point:</strong> 100°C / 212°F / 373.15 K</li>
        </ul>
      </section>
    </div>
  );
}