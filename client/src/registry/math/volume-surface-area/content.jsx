import React from 'react';

export default function Content() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <section>
        <h2 className="text-2xl font-bold mb-4">Understanding 3D Volume and Surface Area</h2>
        <p className="text-gray-700 mb-4">
          Calculating the volume and surface area of three-dimensional objects is essential in fields ranging from engineering and architecture to packaging and fluid dynamics. 
          <strong> Volume</strong> measures the amount of three-dimensional space an object occupies (measured in cubic units like cm³ or m³), while <strong>Surface Area</strong> measures the total area of the outside surfaces of the object (measured in square units like cm² or m²).
        </p>
        <p className="text-gray-700">
          Below is a comprehensive reference guide to the formulas used by this calculator to determine the volume (V) and surface area (A) for various 3D shapes.
        </p>
      </section>

      <hr className="border-gray-200" />

      <section className="space-y-6">
        <h3 className="text-xl font-semibold">1. Sphere (Ball)</h3>
        <p className="text-gray-700">A perfectly round geometrical object in 3D space. Everything depends entirely on its radius (r).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Volume:</strong> V = (4/3)πr³</li>
          <li><strong>Surface Area:</strong> A = 4πr²</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">2. Cube & Rectangular Prism</h3>
        <p className="text-gray-700">A cube has all equal edges (a). A rectangular prism has distinct length (l), width (w), and height (h).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Cube Volume:</strong> V = a³</li>
          <li><strong>Cube Surface Area:</strong> A = 6a²</li>
          <li><strong>Prism Volume:</strong> V = l × w × h</li>
          <li><strong>Prism Surface Area:</strong> A = 2(lw + lh + wh)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">3. Cylinder & Tube</h3>
        <p className="text-gray-700">A solid cylinder uses a base radius (r) and height (h). A tube (hollow cylinder) subtracts the inner volume using an inner radius (r) and outer radius (R).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Cylinder Volume:</strong> V = πr²h</li>
          <li><strong>Cylinder Surface Area:</strong> A = 2πrh + 2πr²</li>
          <li><strong>Tube Volume:</strong> V = πh(R² - r²)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">4. Cone & Conical Frustum</h3>
        <p className="text-gray-700">A cone tapers smoothly from a flat, circular base to a point. A frustum is a cone with the top chopped off, creating a top radius (r<sub>1</sub>) and bottom radius (r<sub>2</sub>).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Cone Volume:</strong> V = (1/3)πr²h</li>
          <li><strong>Cone Surface Area:</strong> A = πr(r + √(h² + r²))</li>
          <li><strong>Frustum Volume:</strong> V = (1/3)πh(r<sub>1</sub>² + r<sub>1</sub>r<sub>2</sub> + r<sub>2</sub>²)</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">5. Capsule & Spherical Cap</h3>
        <p className="text-gray-700">A capsule is a cylinder with hemispherical ends. A spherical cap is a portion of a sphere cut off by a plane.</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Capsule Volume:</strong> V = πr²((4/3)r + a) <em>(where 'a' is the cylinder length)</em></li>
          <li><strong>Capsule Surface Area:</strong> A = 2πr(2r + a)</li>
          <li><strong>Cap Volume:</strong> V = (1/6)πh(3a² + h²) <em>(where 'a' is the base radius of the cap)</em></li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">6. Ellipsoid</h3>
        <p className="text-gray-700">A stretched or squashed sphere with three distinct axes (a, b, and c). Calculating the exact surface area requires complex integrals, so this calculator uses <strong>Knud Thomsen's Approximation</strong> (yielding ~1% max error).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Volume:</strong> V = (4/3)πabc</li>
          <li><strong>Surface Area (Approx):</strong> A ≈ 4π( (a<sup>p</sup>b<sup>p</sup> + a<sup>p</sup>c<sup>p</sup> + b<sup>p</sup>c<sup>p</sup>) / 3 )<sup>1/p</sup> <em>(where p ≈ 1.6075)</em></li>
        </ul>

        <h3 className="text-xl font-semibold mt-8">7. Square Pyramid</h3>
        <p className="text-gray-700">A 3D shape with a square base (edge a) and four triangular faces meeting at a top point (height h).</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li><strong>Volume:</strong> V = (1/3)a²h</li>
          <li><strong>Surface Area:</strong> A = a² + 2a√(h² + (a/2)²)</li>
        </ul>
      </section>

      <hr className="border-gray-200" />

      <section className="bg-blue-50 p-6 rounded-lg mt-8">
        <h3 className="text-lg font-bold text-blue-900 mb-2">Note on the Conversion Engine</h3>
        <p className="text-blue-800 text-sm">
          Unlike basic calculators, this tool features an integrated conversion engine. When you mix unit types (e.g., inputting variables in Inches but requesting the Output in Meters), the calculator first standardizes all dimensions to a metric baseline before applying the formulas above. It then scales the final result by the power of 2 for Surface Area (m²) and the power of 3 for Volume (m³) to guarantee exact mathematical accuracy across different imperial and metric scales.
        </p>
      </section>
    </div>
  );
}