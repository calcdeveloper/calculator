import React from "react";


export default function AreaPerimeterContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Advanced Area & Perimeter Calculator | 8 Shapes Explained
  // META DESCRIPTION: Free online Advanced Area and Perimeter Calculator. Calculate area, perimeter, and circumference for 8 different 2D geometric shapes easily in India.
  // URL SLUG: /calculator/math/area-perimeter
  // PRIMARY KEYWORD: Advanced area and perimeter calculator
  // SECONDARY KEYWORDS: area calculator, perimeter calculator, calculate area of rectangle, circumference of circle, heron's formula calculator, geometry formulas, land area calculator India, trapezoid area calculator, shape area converter, perimeter of parallelogram
  // LONG-TAIL KEYWORDS: how to calculate area and perimeter of 2D shapes, online geometry calculator with unit conversion, find the area of an irregular triangle using heron's formula, calculate perimeter of an ellipse ramanujan approximation, area and perimeter calculator for cbse students

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between area and perimeter?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Area measures the total space enclosed within a two-dimensional shape, usually expressed in square units (like square centimeters or square meters). Perimeter is the total length of the outside boundary or outline of that shape, expressed in linear units (like centimeters or meters).",
        },
      },
      {
        "@type": "Question",
        name: "How do you find the perimeter of a circle?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The perimeter of a circle is called its circumference. You can calculate it using the formula C = 2πr, where 'r' is the radius of the circle, and π (pi) is approximately 3.14159.",
        },
      },
      {
        "@type": "Question",
        name: "Why is area measured in square units?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Area is measured in square units because it calculates two dimensions: length and width. When you multiply a unit of length by a unit of width (e.g., cm × cm), the resulting unit is squared (cm²).",
        },
      },
      {
        "@type": "Question",
        name: "What is Heron's Formula?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Heron's formula is used to find the area of a triangle when you know the lengths of all three sides (a, b, and c), but you do not know the height. It first calculates the semi-perimeter (s) and then applies the square root formula to find the area.",
        },
      },
      {
        "@type": "Question",
        name: "Can I convert units directly in this calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our advanced calculator allows you to select an Input Measurement Unit (what you type in) and an Output Result Unit (what you want to see). It automatically converts the final area and perimeter into your desired metric or imperial units.",
        },
      },
      {
        "@type": "Question",
        name: "Is this calculator useful for Indian board exams?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. The formulas used in this calculator directly align with the mathematics curriculum for CBSE, ICSE, and state boards in India. It is an excellent tool for verifying homework, cross-checking complex calculations like Heron's formula, or preparing for competitive exams.",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Advanced Area & Perimeter Calculator
        </h1>
        <p className="mb-4">
          Whether you are a student tackling geometry homework, an architect drafting a floor plan, or a homeowner calculating land size for a new project in India, understanding the dimensions of 2D shapes is essential. 
        </p>
        <p className="mb-4">
          Our <strong>Advanced Area & Perimeter Calculator</strong> takes the heavy lifting out of geometry. It accurately calculates the area (the total space inside a shape) and the perimeter (the total distance around the outside edge) for 8 distinct geometric shapes. 
        </p>
        <p>
          Unlike basic calculators, this tool features built-in unit conversion. You can easily input your dimensions in centimeters, meters, or inches, and output the results in a completely different unit, making it a powerful utility for both academic learning and professional engineering tasks.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Calculator</h2>
        <p className="mb-4">
          Our interface is designed for speed and accuracy. Follow these simple steps to evaluate your shape:
        </p>
        <ol className="list-decimal pl-6 space-y-4 mb-6 text-gray-800">
          <li>
            <strong>Select Geometric Shape:</strong> Use the topmost dropdown to choose from 8 supported shapes, including Rectangle, Circle, Triangle, Trapezoid, Parallelogram, Ellipse, or Sector.
          </li>
          <li>
            <strong>Input Measurement Unit:</strong> Choose the unit of the dimensions you currently have (e.g., Centimeters, Meters, Inches).
          </li>
          <li>
            <strong>Output Result Unit:</strong> Choose the unit you want your final answer displayed in. The calculator will handle all complex conversions automatically.
          </li>
          <li>
            <strong>Enter Dimensions:</strong> Adjust the sliders or manually type in the required dimensions (like Length and Width). As you input values, the calculator processes the math in real-time.
          </li>
          <li>
            <strong>Read the Results:</strong> The primary green boxes on the right will instantly display the <strong>Total Area</strong> (in square units) and the <strong>Perimeter</strong> (in linear units). A detailed table below provides a summary of the metrics and their converted values.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Geometry Formulas</h2>
        <p className="mb-6">
          Understanding the math behind the machine is crucial. Here are the exact mathematical formulas our calculator uses for all 8 supported shapes to ensure 100% accuracy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. RECTANGLE & SQUARE */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-blue-800 mb-3">1. Rectangle & Square</h3>
            <ul className="space-y-2 text-sm mb-4 text-gray-700">
              <li><strong>Area:</strong> <i>l</i> &times; <i>w</i></li>
              <li><strong>Perimeter:</strong> 2(<i>l</i> + <i>w</i>)</li>
            </ul>
            <p className="text-xs text-gray-500 italic">For a square, length (l) and width (w) are simply the same number (Side squared).</p>
          </div>

          {/* 2. CIRCLE */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-red-800 mb-3">2. Circle</h3>
            <ul className="space-y-2 text-sm mb-4 text-gray-700">
              <li><strong>Area:</strong> &pi;<i>r</i><sup>2</sup></li>
              <li><strong>Circumference:</strong> 2&pi;<i>r</i></li>
            </ul>
            <p className="text-xs text-gray-500 italic">Where &pi; is approximately 3.14159, and <i>r</i> is the radius.</p>
          </div>

          {/* 3. TRIANGLE */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-green-800 mb-3">3. Triangle (Heron's Formula)</h3>
            <p className="text-xs mb-3 text-gray-600">Calculated using the 3 outer sides (<i>a, b, c</i>) so you don't need to know the height.</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Perimeter:</strong> <i>a</i> + <i>b</i> + <i>c</i></li>
              <li className="pt-2"><strong>Semi-Perimeter (<i>s</i>):</strong> (<i>a</i> + <i>b</i> + <i>c</i>) / 2</li>
              <li><strong>Area:</strong> &radic;( <i>s</i> (<i>s</i> - <i>a</i>)(<i>s</i> - <i>b</i>)(<i>s</i> - <i>c</i>) )</li>
            </ul>
          </div>

          {/* 4. TRAPEZOID */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-purple-800 mb-3">4. Trapezoid</h3>
            <p className="text-xs mb-3 text-gray-600">Requires Top Base (<i>a</i>), Bottom Base (<i>b</i>), Height (<i>h</i>), and Slant Sides (<i>c, d</i>).</p>
            
            <div className="flex items-center gap-3 text-sm font-semibold mb-3">
              <span>Area =</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-gray-800 px-2 pb-1"><i>a</i> + <i>b</i></span>
                <span className="pt-1">2</span>
              </div>
              <span>&times; <i>h</i></span>
            </div>
            
            <ul className="space-y-2 text-sm text-gray-700">
              <li><strong>Perimeter:</strong> <i>a</i> + <i>b</i> + <i>c</i> + <i>d</i></li>
            </ul>
          </div>

          {/* 5. PARALLELOGRAM */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-orange-800 mb-3">5. Parallelogram</h3>
            <ul className="space-y-2 text-sm mb-4 text-gray-700">
              <li><strong>Area:</strong> Base(<i>b</i>) &times; Height(<i>h</i>)</li>
              <li><strong>Perimeter:</strong> 2(<i>a</i> + <i>b</i>)</li>
            </ul>
            <p className="text-xs text-gray-500 italic">Where <i>a</i> is the length of the slanted side.</p>
          </div>

          {/* 6. ELLIPSE */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-xl font-bold text-teal-800 mb-3">6. Ellipse</h3>
            <p className="text-xs mb-3 text-gray-600">Requires Semi-Major Axis (<i>a</i>) and Semi-Minor Axis (<i>b</i>).</p>
            <ul className="space-y-2 text-sm mb-2 text-gray-700">
              <li><strong>Area:</strong> &pi; &times; <i>a</i> &times; <i>b</i></li>
              <li><strong>Perimeter:</strong> <i>Calculated using Ramanujan's Approximation:</i></li>
            </ul>
            <div className="text-sm font-semibold mt-2 text-gray-800">
              Perimeter &approx; &pi; [ 3(<i>a</i>+<i>b</i>) - &radic;( (3<i>a</i>+<i>b</i>)(<i>a</i>+3<i>b</i>) ) ]
            </div>
          </div>

          {/* 7. SECTOR */}
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm md:col-span-2">
            <h3 className="text-xl font-bold text-indigo-800 mb-3">7. Sector (Slice of a Circle)</h3>
            <p className="text-xs mb-3 text-gray-600">Requires Radius (<i>r</i>) and Central Angle (&theta;) in degrees.</p>
            
            <div className="flex flex-col sm:flex-row sm:gap-8 gap-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span>Area =</span>
                <div className="flex flex-col items-center">
                  <span className="border-b border-gray-800 px-2 pb-1">&theta;</span>
                  <span className="pt-1">360</span>
                </div>
                <span>&times; &pi;<i>r</i><sup>2</sup></span>
              </div>

              <div className="flex items-center gap-2 text-sm font-semibold text-gray-800">
                <span>Perimeter =</span>
                <div className="flex flex-col items-center">
                  <span className="border-b border-gray-800 px-2 pb-1">&theta;</span>
                  <span className="pt-1">360</span>
                </div>
                <span>&times; 2&pi;<i>r</i> + 2<i>r</i></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Step-by-Step Practical Examples</h2>
        <p className="mb-6">
          To illustrate how these formulas apply in real-life scenarios, let's look at three step-by-step examples.
        </p>

        <div className="space-y-6">
          <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Example 1: Measuring a Rectangular Plot</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-sm text-gray-700">
                You are looking at a rectangular plot of land that has a length of <strong>10 meters</strong> and a width of <strong>5 meters</strong>.
              </p>
              <ul className="list-none space-y-3 text-sm text-gray-800 font-mono bg-gray-50 p-4 rounded-md">
                <li><strong>Area calculation:</strong> 10 &times; 5</li>
                <li className="text-green-700"><strong>Total Area:</strong> 50 m&sup2;</li>
                <li className="mt-4 pt-4 border-t border-gray-200"><strong>Perimeter calculation:</strong> 2(10 + 5) = 2(15)</li>
                <li className="text-green-700"><strong>Total Perimeter:</strong> 30 m</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Example 2: Carpeting a Circular Room</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-sm text-gray-700">
                You have a circular room with a radius of <strong>7 feet</strong>. You need to know the floor space (Area) for carpet, and the wall length (Circumference) for baseboards.
              </p>
              <ul className="list-none space-y-3 text-sm text-gray-800 font-mono bg-gray-50 p-4 rounded-md">
                <li><strong>Area calculation:</strong> 3.14159 &times; 7&sup2; = 3.14159 &times; 49</li>
                <li className="text-green-700"><strong>Total Area:</strong> 153.94 ft&sup2;</li>
                <li className="mt-4 pt-4 border-t border-gray-200"><strong>Circumference calculation:</strong> 2 &times; 3.14159 &times; 7</li>
                <li className="text-green-700"><strong>Total Perimeter:</strong> 43.98 ft</li>
              </ul>
            </div>
          </div>

          <div className="border border-gray-200 bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="font-bold text-lg text-gray-900">Example 3: Irregular Triangle Garden</h3>
            </div>
            <div className="p-6">
              <p className="mb-4 text-sm text-gray-700">
                A triangular garden has sides of <strong>3m, 4m, and 5m</strong>. Using Heron's formula:
              </p>
              <ul className="list-none space-y-3 text-sm text-gray-800 font-mono bg-gray-50 p-4 rounded-md">
                <li><strong>Semi-Perimeter (s):</strong> (3 + 4 + 5) / 2 = 6m</li>
                <li><strong>Area calculation:</strong> &radic;(6(6-3)(6-4)(6-5))</li>
                <li><strong>Simplify:</strong> &radic;(6 &times; 3 &times; 2 &times; 1) = &radic;(36)</li>
                <li className="text-green-700"><strong>Total Area:</strong> 6 m&sup2;</li>
                <li className="mt-4 pt-4 border-t border-gray-200"><strong>Perimeter calculation:</strong> 3 + 4 + 5</li>
                <li className="text-green-700"><strong>Total Perimeter:</strong> 12 m</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqSchema.mainEntity.map((faq, index) => (
            <details key={index} className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
              <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
                {faq.name}
              </summary>
              <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
                {faq.acceptedAnswer.text}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* INTERNAL LINKING */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Math & Geometry Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">
          Geometry is just the beginning. Whether you are solving complex equations or managing statistics, explore our full suite of math calculators:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Algebra Solver</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Average</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Exponent</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Fraction</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">LCM</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Logarithm</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Matrix</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Mean, Median, Mode</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Percentage</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Percentage Inc/Dec</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Permutation & Combination</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Probability</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Proportion</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Ratio</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-3 py-1.5 rounded border border-gray-200 shadow-sm">Volume & Surface Area</a>
        </div>
      </section>

    </div>
  );
}