import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Quadratic Formula Calculator | Free Math Solver</title>
        <meta 
          name="description" 
          content="Solve quadratic equations instantly. Find real and complex roots, calculate the discriminant, and learn how the quadratic formula works." 
        />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the Quadratic Equation</h2>
        <p className="mb-4">
          A quadratic equation is a second-degree polynomial equation. In its standard form, it is written as:
        </p>
        <div className="bg-calc-lightGray/20 p-4 rounded-lg flex justify-center text-xl text-calc-black mb-4 border border-calc-lightGray font-semibold">
          <span><i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> = 0</span>
        </div>
        <p>
          Where <strong><i>a</i></strong>, <strong><i>b</i></strong>, and <strong><i>c</i></strong> are known numbers (coefficients), and <i>a</i> cannot be equal to 0. The letter <strong><i>x</i></strong> represents the unknown variable you are trying to solve for, which are called the "roots" of the equation.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Quadratic Formula</h2>
        <p className="mb-4">
          To find the roots of the equation, we use the Quadratic Formula:
        </p>
        {/* Custom Tailwind Fraction Layout */}
        <div className="bg-calc-lightGray/20 p-6 rounded-lg flex justify-center text-xl text-calc-black mb-4 border border-calc-lightGray font-semibold overflow-x-auto">
          <div className="flex items-center gap-3">
            <span><i>x</i> =</span>
            <div className="flex flex-col items-center">
              <span className="border-b-2 border-calc-black px-2 pb-1">
                -<i>b</i> ± &radic;(<i>b</i><sup>2</sup> - 4<i>ac</i>)
              </span>
              <span className="pt-1">2<i>a</i></span>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">What is the Discriminant?</h2>
        <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm mb-6">
          <p className="mb-3">
            The expression underneath the square root symbol in the formula (<i>b</i><sup>2</sup> - 4<i>ac</i>) is called the <strong>Discriminant</strong> (&Delta;). It determines the nature of the roots you will get:
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex gap-3">
              <span className="text-calc-green font-bold text-lg">1.</span>
              <span><strong>Positive Discriminant (&Delta; &gt; 0):</strong> The equation has two distinct real roots. The parabola crosses the x-axis exactly twice.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 font-bold text-lg">2.</span>
              <span><strong>Zero Discriminant (&Delta; = 0):</strong> The equation has one real root (a repeated root). The peak or valley of the parabola merely touches the x-axis.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-orange-500 font-bold text-lg">3.</span>
              <span><strong>Negative Discriminant (&Delta; &lt; 0):</strong> The equation has two complex (imaginary) roots. The parabola never touches or crosses the x-axis.</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}