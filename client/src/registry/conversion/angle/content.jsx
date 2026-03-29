import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto text-gray-700">
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-900">How to Convert Angles: Degrees, Radians, and Gradians</h2>
        <p className="mb-4">
          In mathematics and geometry, an angle is the figure formed by two rays sharing a common endpoint. Depending on whether you are working in construction, calculus, or specialized surveying, you will need to use different units to measure that space.
        </p>
        
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray">
        <h3 className="text-xl font-bold text-gray-900 mb-4">1. Degrees (The Common Standard)</h3>
        <p className="text-sm mb-4">
          A degree (°) represents 1/360th of a full rotation. It is the most common way to measure angles in everyday life, from carpentry to simple geometry.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-blue-500">
          <p className="text-sm font-semibold mb-2">Key Benchmarks:</p>
          <ul className="text-sm space-y-1 text-gray-700">
            <li><strong>Full Circle:</strong> 360°</li>
            <li><strong>Right Angle:</strong> 90°</li>
            <li><strong>Straight Line:</strong> 180°</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">2. Radians (The Calculus Standard)</h3>
        <p className="text-sm mb-4">
          A <strong>Radian (rad)</strong> is defined by the radius of a circle. One radian is the angle created when the arc length is equal to the radius. This is the "natural" unit used in advanced mathematics and physics.
        </p>
        
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-calc-green mt-4">
          <p className="text-sm font-semibold mb-2">The Conversion Formula:</p>
          <ul className="text-sm space-y-3 text-gray-700">
            <li><strong>Degrees to Radians:</strong> Multiply by (pi / 180).</li>
            <li><strong>Example (180°):</strong> 180 * (3.14159 / 180) = <strong>3.14159 rad (pi)</strong>.</li>
            <li><strong>Radians to Degrees:</strong> Multiply by (180 / pi).</li>
            <li><strong>Example (1 rad):</strong> 1 * (180 / 3.14159) = <strong>57.295°</strong>.</li>
          </ul>
        </div>
      </section>

      <section className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-8">
        <h3 className="text-xl font-bold text-gray-900 mb-4">3. Gradians (The Metric Angle)</h3>
        <p className="text-sm mb-4">
          The <strong>Gradian (grad)</strong>, also known as the gon, was created to be a metric version of the degree. It divides a right angle into 100 parts, meaning a full circle is 400 gradians. It is primarily used today in surveying and civil engineering.
        </p>
        <div className="bg-white p-4 rounded shadow-sm border-l-4 border-orange-500">
          <p className="text-sm font-semibold mb-2">The Conversion Formula:</p>
          <ul className="text-sm space-y-2 text-gray-700">
            <li><strong>Degrees to Gradians:</strong> Multiply by 1.111 (10/9).</li>
            <li><strong>Gradians to Degrees:</strong> Multiply by 0.9 (9/10).</li>
            <li><strong>Example:</strong> A 90° right angle is exactly <strong>100 gradians</strong>.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}