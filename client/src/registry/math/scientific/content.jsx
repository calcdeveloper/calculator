import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Scientific Calculator | Trig, Logs, Exponents & Factorials</title>
        <meta 
          name="description" 
          content="Free online scientific calculator. Easily calculate trigonometry (sine, cosine, tangent), logarithms, natural logs, roots, exponents, and factorials." 
        />
        <meta name="keywords" content="scientific calculator, trigonometry calculator, sin cos tan calculator, logarithm calculator, factorial calculator, exponents" />
      </Helmet>

      {/* --- ON-PAGE CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Your All-in-One Scientific Calculator</h2>
        <p className="mb-4">
          Whether you are taking an advanced math class, working in engineering, or solving complex physics equations, a reliable scientific calculator is essential. Use the dropdown tool above to switch between different mathematical disciplines instantly.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Trigonometry (Sin, Cos, Tan)</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            Trigonometry focuses on the relationships between the angles and sides of triangles. Our calculator allows you to compute these relationships in both <strong>Degrees</strong> and <strong>Radians</strong>.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-3">
            <li><strong>Sine (sin):</strong> The ratio of the opposite side to the hypotenuse.</li>
            <li><strong>Cosine (cos):</strong> The ratio of the adjacent side to the hypotenuse.</li>
            <li><strong>Tangent (tan):</strong> The ratio of the opposite side to the adjacent side.</li>
            <li><strong>Inverse Functions (arcsin, arccos, arctan):</strong> Used to find an unknown angle when the side lengths are known.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Logarithms (Log & Natural Log)</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            A logarithm answers the question: <em>"How many of one number do we multiply to get another number?"</em> For example, how many 10s do we multiply to get 1,000? The answer is 3 (10 × 10 × 10).
          </p>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-600 mb-3">
            <li><strong>Common Log (log₁₀):</strong> Assumes a base of 10. Widely used in science and engineering (e.g., the Richter scale).</li>
            <li><strong>Natural Log (ln):</strong> Uses the mathematical constant <em>e</em> (approx. 2.718) as its base. Critical for calculating exponential growth and decay.</li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Exponents, Roots, & Factorials</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            <strong>Exponents (xʸ):</strong> Represents multiplying a number by itself a specific number of times. For example, 5³ means 5 × 5 × 5 = 125.
          </p>
          <p className="mb-3">
            <strong>Roots (√x):</strong> The inverse of exponents. Finding the square root of 25 asks, <em>"What number multiplied by itself equals 25?"</em> (The answer is 5).
          </p>
          <p className="mb-3">
            <strong>Factorials (!):</strong> A factorial is the product of an integer and all the integers below it. Represented by an exclamation point.
          </p>
          <p className="text-sm bg-gray-50 p-3 rounded border-l-4 border-calc-green">
            <em>Example of a Factorial: Calculate 5!</em><br/>
            5! = 5 × 4 × 3 × 2 × 1 = <strong>120</strong>
          </p>
        </div>
      </section>
    </div>
  );
}