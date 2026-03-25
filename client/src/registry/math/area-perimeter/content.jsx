import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Advanced Area & Perimeter Calculator | 8 Shapes Explained</title>
        <meta 
          name="description" 
          content="Calculate area, perimeter, and circumference for 8 different geometric shapes including Trapezoids, Ellipses, Parallelograms, and Sectors. Formulas included!" 
        />
        <meta name="keywords" content="area calculator, perimeter calculator, trapezoid area, ellipse perimeter, heron's formula, sector area calculator, geometry formulas" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Comprehensive Geometry Formulas</h2>
        <p className="mb-4">
          Understanding how to calculate the <strong>Area</strong> (the inside space) and the <strong>Perimeter</strong> (the outside boundary) is crucial in fields ranging from architecture to software engineering. Here is exactly how our calculator processes the math for all 8 supported shapes.
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. RECTANGLE & SQUARE */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-blue-800 mb-3">1. Rectangle & Square</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><strong>Area:</strong> <i>l</i> &times; <i>w</i></li>
            <li><strong>Perimeter:</strong> 2(<i>l</i> + <i>w</i>)</li>
          </ul>
          <p className="text-xs text-gray-500 italic">For a square, length (l) and width (w) are simply the same number (Side squared).</p>
        </section>

        {/* 2. CIRCLE */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-red-800 mb-3">2. Circle</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><strong>Area:</strong> &pi;<i>r</i><sup>2</sup></li>
            <li><strong>Circumference:</strong> 2&pi;<i>r</i></li>
          </ul>
          <p className="text-xs text-gray-500 italic">Where &pi; is approximately 3.14159, and <i>r</i> is the radius.</p>
        </section>

        {/* 3. TRIANGLE */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-green-800 mb-3">3. Triangle (Heron's Formula)</h3>
          <p className="text-xs mb-3">We use the 3 outer sides (<i>a, b, c</i>) so you don't need to know the height.</p>
          <ul className="space-y-2 text-sm">
            <li><strong>Perimeter:</strong> <i>a</i> + <i>b</i> + <i>c</i></li>
            <li className="pt-2"><strong>Semi-Perimeter (<i>s</i>):</strong> (<i>a</i> + <i>b</i> + <i>c</i>) / 2</li>
            <li><strong>Area:</strong> &radic;( <i>s</i> (<i>s</i> - <i>a</i>)(<i>s</i> - <i>b</i>)(<i>s</i> - <i>c</i>) )</li>
          </ul>
        </section>

        {/* 4. TRAPEZOID */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-purple-800 mb-3">4. Trapezoid</h3>
          <p className="text-xs mb-3">Requires Top Base (<i>a</i>), Bottom Base (<i>b</i>), Height (<i>h</i>), and Slant Sides (<i>c, d</i>).</p>
          
          <div className="flex items-center gap-3 text-sm font-semibold mb-3">
            <span>Area =</span>
            <div className="flex flex-col items-center">
              <span className="border-b border-calc-black px-2 pb-1"><i>a</i> + <i>b</i></span>
              <span className="pt-1">2</span>
            </div>
            <span>&times; <i>h</i></span>
          </div>
          
          <ul className="space-y-2 text-sm">
            <li><strong>Perimeter:</strong> <i>a</i> + <i>b</i> + <i>c</i> + <i>d</i></li>
          </ul>
        </section>

        {/* 5. PARALLELOGRAM */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-orange-800 mb-3">5. Parallelogram</h3>
          <ul className="space-y-2 text-sm mb-4">
            <li><strong>Area:</strong> Base(<i>b</i>) &times; Height(<i>h</i>)</li>
            <li><strong>Perimeter:</strong> 2(<i>a</i> + <i>b</i>)</li>
          </ul>
          <p className="text-xs text-gray-500 italic">Where <i>a</i> is the slanted side length.</p>
        </section>

        {/* 6. ELLIPSE */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-teal-800 mb-3">6. Ellipse</h3>
          <p className="text-xs mb-3">Requires Semi-Major Axis (<i>a</i>) and Semi-Minor Axis (<i>b</i>).</p>
          <ul className="space-y-2 text-sm mb-2">
            <li><strong>Area:</strong> &pi; &times; <i>a</i> &times; <i>b</i></li>
            <li><strong>Perimeter:</strong> <i>Calculated using Ramanujan's Approximation:</i></li>
          </ul>
          <div className="text-xs font-semibold mt-2">
            Perimeter &approx; &pi; [ 3(<i>a</i>+<i>b</i>) - &radic;( (3<i>a</i>+<i>b</i>)(<i>a</i>+3<i>b</i>) ) ]
          </div>
        </section>

        {/* 7. SECTOR */}
        <section className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm md:col-span-2">
          <h3 className="text-xl font-bold text-indigo-800 mb-3">7. Sector (Slice of a Circle)</h3>
          <p className="text-xs mb-3">Requires Radius (<i>r</i>) and Central Angle (&theta;) in degrees.</p>
          
          <div className="flex flex-col sm:flex-row sm:gap-8 gap-4">
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Area =</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-calc-black px-2 pb-1">&theta;</span>
                <span className="pt-1">360</span>
              </div>
              <span>&times; &pi;<i>r</i><sup>2</sup></span>
            </div>

            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>Perimeter =</span>
              <div className="flex flex-col items-center">
                <span className="border-b border-calc-black px-2 pb-1">&theta;</span>
                <span className="pt-1">360</span>
              </div>
              <span>&times; 2&pi;<i>r</i> + 2<i>r</i></span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}