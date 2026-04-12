import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: 3D Volume & Surface Area Calculator | Free Online Tool
  // META DESCRIPTION: Free 3D volume and surface area calculator. Instantly calculate the space and surface area of a sphere, cube, cylinder, cone, and more with unit conversions.
  // URL SLUG: /calculator/math/volume-surface-area
  // PRIMARY KEYWORD: 3D Volume and Surface Area Calculator
  // SECONDARY KEYWORDS: calculate volume online, surface area calculator, volume of cylinder calculator, sphere volume formula, cube surface area, cone volume calculator, math calculator india, 3d shapes volume, convert cm3 to m3, rectangular prism volume
  // LONG-TAIL KEYWORDS: how to calculate volume of a cylinder in liters, formula for surface area of a cone, online calculator for volume and surface area of 3d shapes, what is the volume of a sphere with radius r, standard formulas for 3d geometry

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between volume and surface area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Volume measures the amount of 3D space an object occupies inside (measured in cubic units like cm³). Surface area measures the total area of the outside boundary or skin of the object (measured in square units like cm²)."
        }
      },
      {
        "@type": "Question",
        name: "Can I input dimensions in inches and get the answer in meters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our calculator features a built-in conversion engine. You can select your input measurement unit (e.g., inches) and a different output measurement unit (e.g., meters). The calculator will handle the complex conversions automatically."
        }
      },
      {
        "@type": "Question",
        name: "How do I calculate the volume of a cylindrical water tank?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Select 'Cylinder' from the shape dropdown. Enter the radius (half of the diameter) of the tank and its height. The calculator will instantly give you the volume. To convert cubic meters (m³) to liters, simply multiply the result by 1,000."
        }
      },
      {
        "@type": "Question",
        name: "What is a conical frustum?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A conical frustum is simply a cone with the top pointed part sliced off parallel to the base. A standard drinking glass or a bucket is a perfect real-life example of a conical frustum."
        }
      },
      {
        "@type": "Question",
        name: "Why is the surface area of an ellipsoid an approximation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlike spheres or cubes, there is no simple exact formula for the surface area of a standard ellipsoid using basic math functions. It requires complex integrals. We use Knud Thomsen's Approximation, which is highly accurate and yields a maximum error of roughly 1.1%."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>3D Volume & Surface Area Calculator | Free Online Tool</title>
        <meta
          name="description"
          content="Free 3D volume and surface area calculator. Instantly calculate the space and surface area of a sphere, cube, cylinder, cone, and more with unit conversions."
        />
        <meta
          name="keywords"
          content="3D Volume and Surface Area Calculator, calculate volume online, surface area calculator, volume of cylinder calculator, sphere volume formula, cube surface area"
        />
        <meta property="og:title" content="3D Volume & Surface Area Calculator | Free Online Tool" />
        <meta property="og:description" content="Calculate volume and surface area of standard 3D shapes instantly with automatic unit conversion for metric and imperial scales." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          3D Volume & Surface Area Calculator
        </h1>
        <p className="mb-4">
          Whether you are an engineering student in India designing a mechanical part, a homeowner figuring out the capacity of a roof-top water tank, or someone packaging items for shipping, calculating 3D geometry is an essential task.
        </p>
        <p className="mb-4">
          Our free online <strong>3D Volume & Surface Area Calculator</strong> is a comprehensive tool designed to instantly evaluate the geometric properties of 11 distinct three-dimensional shapes. It eliminates the need to memorize complex formulas or manually convert measurement units.
        </p>
        <p>
          Simply choose your shape, input your dimensions, and let our tool compute the precise volume (internal capacity) and surface area (external coverage) in your preferred units.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator features an intuitive interface that adapts dynamically based on the shape you select. Follow these simple steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select 3D Shape:</strong> Use the main dropdown menu to choose the object you are evaluating. Available shapes include:
            <ul className="list-disc pl-5 mt-2 space-y-1 text-sm text-gray-700">
              <li>Sphere</li>
              <li>Cone</li>
              <li>Cube</li>
              <li>Cylinder</li>
              <li>Rectangular Tank (Prism)</li>
              <li>Capsule</li>
              <li>Spherical Cap</li>
              <li>Conical Frustum</li>
              <li>Ellipsoid</li>
              <li>Square Pyramid</li>
              <li>Tube (Hollow Cylinder)</li>
            </ul>
          </li>
          <li>
            <strong>Set Measurement Units:</strong> Use the <em>Input Measurement Unit</em> dropdown to select the unit of the numbers you are entering. Then, use the <em>Output Measurement Unit</em> dropdown to choose how you want your final answer displayed. Supported units include <strong>millimeters (mm), centimeters (cm), meters (m), inches (in), feet (ft), and yards (yd)</strong>.
          </li>
          <li>
            <strong>Enter Dimensions:</strong> The input fields will change depending on your chosen shape (e.g., asking for 'Radius' for a sphere, or 'Length, Width, Height' for a rectangular tank). Type in your values.
          </li>
          <li>
            <strong>View Results:</strong> The calculator immediately processes the inputs and provides the exact Volume (in cubic units like m³) and Surface Area (in square units like m²).
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION (Integrated from existing code) */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding 3D Volume and Surface Area</h2>
        <p className="text-gray-700 mb-4">
          Calculating the volume and surface area of three-dimensional objects is essential in fields ranging from engineering and architecture to packaging and fluid dynamics. 
          <strong> Volume</strong> measures the amount of three-dimensional space an object occupies (measured in cubic units like cm³ or m³), while <strong>Surface Area</strong> measures the total area of the outside surfaces of the object (measured in square units like cm² or m²).
        </p>
        <p className="text-gray-700">
          Below is a comprehensive reference guide to the exact formulas used by this calculator to determine the volume (V) and surface area (A) for various 3D shapes.
        </p>

        <hr className="border-gray-200" />

        <div className="space-y-6 mt-6">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">1. Sphere (Ball)</h3>
            <p className="text-sm text-gray-700 mb-3">A perfectly round geometrical object in 3D space. Everything depends entirely on its radius (r).</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Volume: V = (4/3)πr³</li>
              <li>Surface Area: A = 4πr²</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">2. Cube & Rectangular Prism (Tank)</h3>
            <p className="text-sm text-gray-700 mb-3">A cube has all equal edges (a). A rectangular prism has a distinct length (l), width (w), and height (h).</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Cube Volume: V = a³</li>
              <li>Cube Surface Area: A = 6a²</li>
              <li>Prism Volume: V = l × w × h</li>
              <li>Prism Surface Area: A = 2(lw + lh + wh)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">3. Cylinder & Tube</h3>
            <p className="text-sm text-gray-700 mb-3">A solid cylinder uses a base radius (r) and height (h). A tube (hollow cylinder) subtracts the inner volume using an inner radius (r) and outer radius (R).</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Cylinder Volume: V = πr²h</li>
              <li>Cylinder Surface Area: A = 2πrh + 2πr²</li>
              <li>Tube Volume: V = πh(R² - r²)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">4. Cone & Conical Frustum</h3>
            <p className="text-sm text-gray-700 mb-3">A cone tapers smoothly from a flat, circular base to a point. A frustum is a cone with the top chopped off, creating a top radius (r<sub>1</sub>) and bottom radius (r<sub>2</sub>).</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Cone Volume: V = (1/3)πr²h</li>
              <li>Cone Surface Area: A = πr(r + √(h² + r²))</li>
              <li>Frustum Volume: V = (1/3)πh(r<sub>1</sub>² + r<sub>1</sub>r<sub>2</sub> + r<sub>2</sub>²)</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">5. Capsule & Spherical Cap</h3>
            <p className="text-sm text-gray-700 mb-3">A capsule is a cylinder with hemispherical ends. A spherical cap is a portion of a sphere cut off by a plane.</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Capsule Volume: V = πr²((4/3)r + a) <span className="text-sm font-normal text-gray-600">(where 'a' is cylinder length)</span></li>
              <li>Capsule Surface Area: A = 2πr(2r + a)</li>
              <li>Cap Volume: V = (1/6)πh(3a² + h²) <span className="text-sm font-normal text-gray-600">(where 'a' is base radius of the cap)</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">6. Ellipsoid</h3>
            <p className="text-sm text-gray-700 mb-3">A stretched or squashed sphere with three distinct axes (a, b, and c). Calculating the exact surface area requires complex integrals, so this calculator uses <strong>Knud Thomsen's Approximation</strong>.</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Volume: V = (4/3)πabc</li>
              <li>Surface Area: A ≈ 4π( (a<sup>p</sup>b<sup>p</sup> + a<sup>p</sup>c<sup>p</sup> + b<sup>p</sup>c<sup>p</sup>) / 3 )<sup>1/p</sup> <span className="text-sm font-normal text-gray-600">(where p ≈ 1.6075)</span></li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">7. Square Pyramid</h3>
            <p className="text-sm text-gray-700 mb-3">A 3D shape with a square base (edge a) and four triangular faces meeting at a top point (height h).</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-800 font-medium">
              <li>Volume: V = (1/3)a²h</li>
              <li>Surface Area: A = a² + 2a√(h² + (a/2)²)</li>
            </ul>
          </div>
        </div>

        <div className="bg-indigo-50 p-6 rounded-lg mt-8 border border-indigo-100">
          <h3 className="text-lg font-bold text-indigo-900 mb-2">Note on the Conversion Engine</h3>
          <p className="text-indigo-800 text-sm">
            Unlike basic calculators, this tool features an integrated conversion engine. When you mix unit types (e.g., inputting variables in Inches but requesting the Output in Meters), the calculator first standardizes all dimensions to a metric baseline before applying the formulas above. It then scales the final result by the power of 2 for Surface Area (m²) and the power of 3 for Volume (m³) to guarantee exact mathematical accuracy across different imperial and metric scales.
          </p>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Cylindrical Water Tank Capacity</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You are installing a PVC water tank on your roof in Delhi. The tank is cylindrical, with a radius of 0.5 meters and a height of 1.5 meters. How much space does it take up, and how much material was used to make the outside?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Shape:</strong> Cylinder</li>
                <li><strong>Inputs:</strong> r = 0.5m, h = 1.5m</li>
                <li><strong>Volume Calc:</strong> V = π × (0.5)² × 1.5 = 1.178 cubic meters (approx 1,178 liters of water).</li>
                <li><strong>Surface Area Calc:</strong> A = 2π(0.5)(1.5) + 2π(0.5)² = 4.712 + 1.570 = 6.283 square meters.</li>
              </ul>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Wrapping a Gift Box (Rectangular Tank/Prism)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> You have a cardboard box that is 30 cm long, 20 cm wide, and 10 cm high. You want to know the volume to see if a toy fits inside, and the surface area to know how much wrapping paper you need.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Shape:</strong> Rectangular Tank</li>
                <li><strong>Inputs:</strong> l = 30cm, w = 20cm, h = 10cm</li>
                <li><strong>Volume Calc:</strong> V = 30 × 20 × 10 = 6,000 cm³.</li>
                <li><strong>Surface Area Calc:</strong> A = 2( (30×20) + (30×10) + (20×10) ) = 2(600 + 300 + 200) = 2(1100) = 2,200 cm² of wrapping paper needed.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group border border-gray-200 rounded-lg bg-white open:shadow-md transition-all duration-200">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 list-none flex justify-between items-center">
                {faq.name}
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Free Math Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Mastering geometry is just the beginning. Solve complex equations, statistical problems, and everyday math instantly with our comprehensive suite of calculators designed for students and professionals across India:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Math</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm Calculator</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Math</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutations & Combinations</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Increase/Decrease</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
        </div>
      </section>
    </div>
  );
}