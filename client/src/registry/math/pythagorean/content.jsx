import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding the Pythagorean Theorem</h2>
        <p className="text-gray-700 mb-4">
          The Pythagorean Theorem is a fundamental principle in geometry that reveals the mathematical relationship between the three sides of a right-angled triangle. Whether you are framing a roof in construction, calculating the shortest distance between two points on a map, or developing computer graphics, this law is essential.
        </p>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold">The Core Formula</h3>
        <p className="text-gray-700">
          The theorem states that the square of the hypotenuse (the side opposite the right angle) is exactly equal to the sum of the squares of the other two legs.
        </p>
        
        <div className="bg-green-50 p-6 rounded-lg text-center my-6 border border-green-100">
          <p className="text-2xl font-bold text-green-900 font-mono">
            a² + b² = c²
          </p>
        </div>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>a</strong> and <strong>b</strong> represent the lengths of the triangle's legs (the two sides that meet to form the 90-degree right angle).</li>
          <li><strong>c</strong> represents the length of the hypotenuse (the longest side of the triangle).</li>
        </ul>
      </section>

      <section className="space-y-4 text-gray-700 mt-8">
        <h3 className="text-xl font-semibold text-gray-900">How to Calculate Missing Sides</h3>
        <p>Depending on which side of the triangle you are trying to find, you can rearrange the primary algebraic equation:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Finding the Hypotenuse (c):</strong> c = √(a² + b²)</li>
          <li><strong>Finding Leg (a):</strong> a = √(c² - b²)</li>
          <li><strong>Finding Leg (b):</strong> b = √(c² - a²)</li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Real-World Applications</h3>
        <p className="text-blue-800 text-sm">
          The Pythagorean theorem is heavily utilized in architecture to ensure walls are perfectly square (using the famous 3-4-5 triangle rule). It is also the foundation of 2D navigation to calculate the shortest "as the crow flies" distance between two coordinates, and is extensively used in physics to determine resultant vectors.
        </p>
      </section>
    </div>
  );
}