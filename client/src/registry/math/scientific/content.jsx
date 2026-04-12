import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between log and ln on a scientific calculator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 'log' button usually refers to the common logarithm, which has a base of 10. It is widely used in engineering and measuring scales like the Richter scale. The 'ln' button stands for natural logarithm, which uses Euler's number (approximately 2.718) as its base. 'ln' is essential for calculating continuous growth, decay, and compound interest."
        }
      },
      {
        "@type": "Question",
        name: "Should I use Degrees or Radians in trigonometry?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the problem you are solving. Degrees are commonly used in basic geometry, navigation, and everyday measurements (a full circle is 360 degrees). Radians are used in advanced calculus, physics, and higher mathematics because they simplify the formulas for derivatives and integrals (a full circle is 2π radians). Always check your assignment's requirements before calculating."
        }
      },
      {
        "@type": "Question",
        name: "What is a factorial (!) used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A factorial, represented by an exclamation mark (!), is used primarily in statistics, probability, and combinatorics. It represents multiplying a number by every whole number below it down to 1. It helps calculate the number of ways you can arrange a set of items (permutations)."
        }
      },
      {
        "@type": "Question",
        name: "What are inverse trigonometric functions (arcsin, arccos, arctan)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard trigonometric functions (sin, cos, tan) help you find the ratio of sides in a right triangle when you know an angle. Inverse functions (arcsin, arccos, arctan) do the exact opposite: they help you find an unknown angle when you already know the lengths of the triangle's sides."
        }
      },
      {
        "@type": "Question",
        name: "Is this scientific calculator free for Indian students?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our online scientific calculator is completely free to use. It is optimized for students in India preparing for CBSE, ICSE, state boards, and competitive entrance exams like JEE and NEET, offering a quick way to cross-check manual calculations."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Scientific Calculator Online | Trig, Logs, Exponents</title>
        <meta
          name="description"
          content="Free online scientific calculator for India. Solve trigonometry (sin, cos, tan), logarithms, exponents, roots, and factorials step-by-step instantly."
        />
        <meta
          name="keywords"
          content="Scientific Calculator, online scientific calculator, trigonometry calculator, log calculator online, factorial calculator, exponent solver"
        />
        <meta property="og:title" content="Scientific Calculator Online | Trig, Logs, Exponents" />
        <meta property="og:description" content="Instantly solve complex math equations involving trigonometry, logarithms, exponents, roots, and factorials with our free online calculator." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Online Scientific Calculator
        </h1>
        <p className="mb-4">
          A scientific calculator is an indispensable tool for anyone tackling higher-level mathematics. Whether you are a high school student in India preparing for your board exams, an engineering undergraduate solving complex physics derivations, or a professional analyzing statistical data, you need quick and accurate computational power. 
        </p>
        <p className="mb-4">
          Our free online <strong>Scientific Calculator</strong> is designed to replace bulky, expensive hardware with a sleek, browser-based tool. It consolidates multiple advanced mathematical disciplines into one easy-to-use interface.
        </p>
        <p>
          You no longer need to switch between different apps. With our dynamic dropdown system, you can seamlessly transition from calculating right-angle trigonometry to solving exponential growth logarithms, evaluating complex roots, and determining factorial permutations—all completely free and instantly accessible.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-blue-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Scientific Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator uses a dynamic dropdown menu to keep the interface clean while offering powerful functionality. Follow these steps to perform your calculations:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Operation Type:</strong> Click the main dropdown menu at the top of the calculator. You will see four distinct categories to choose from:
            <ul className="list-disc pl-5 mt-2 space-y-2 text-sm text-gray-700">
              <li><strong>Trigonometry (sin, cos, tan):</strong> Select this to work with right triangles and waves. Once selected, choose your specific function (sin, cos, tan, arcsin, arccos, or arctan), pick your <em>Angle Type</em> (Degrees or Radians), and enter your numeric value.</li>
              <li><strong>Logarithms (log, ln):</strong> Choose this for exponentiation problems. You can then select between Common Log (log<sub>10</sub>) or Natural Log (ln) and enter the number you want to evaluate.</li>
              <li><strong>Exponents & Roots:</strong> Use this to calculate powers or reverse them. The interface will prompt you to enter a Base number and either an Exponent or Root value.</li>
              <li><strong>Factorial (!):</strong> Select this for probability formulas. Simply input any positive integer, and the calculator will instantly find its factorial product.</li>
            </ul>
          </li>
          <li>
            <strong>Input Your Values:</strong> Type your required numbers into the designated fields. The tool handles both whole integers and decimal numbers efficiently.
          </li>
          <li>
            <strong>View Instant Results:</strong> The calculator processes the mathematical formulas in real-time, displaying the precise answer immediately below the input fields.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Mathematical Concepts & Formulas Explained</h2>
        <p className="text-gray-700 mb-4">
          To master mathematics, it helps to understand what the scientific calculator is doing behind the scenes. Here is a breakdown of the primary functions our tool handles:
        </p>
        
        <div className="space-y-5">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-2 text-lg text-indigo-700">1. Trigonometry</h3>
            <p className="text-sm text-gray-700 mb-3">
              Trigonometry studies the relationship between the side lengths and angles of right triangles. The three primary trigonometric ratios are Sine, Cosine, and Tangent (often remembered by the acronym SOH CAH TOA).
            </p>
            <div className="bg-indigo-50 p-4 rounded text-sm mb-3 border border-indigo-100 flex flex-col md:flex-row justify-center items-center gap-6">
              <span className="font-semibold text-indigo-900">sin(θ) = Opposite / Hypotenuse</span>
              <span className="font-semibold text-indigo-900">cos(θ) = Adjacent / Hypotenuse</span>
              <span className="font-semibold text-indigo-900">tan(θ) = Opposite / Adjacent</span>
            </div>
            <p className="text-sm text-gray-700">
              The calculator also supports inverse functions (arcsin, arccos, arctan), which reverse the process: given the ratio of the sides, they calculate the unknown angle (θ).
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold mb-2 text-lg text-emerald-700">2. Logarithms</h3>
            <p className="text-sm text-gray-700 mb-3">
              A logarithm tells you what exponent you need to raise a base number to in order to get a specific result. The fundamental logarithmic equation is:
            </p>
            <div className="bg-emerald-50 p-4 rounded text-center text-sm mb-3 border border-emerald-100">
              <span className="font-semibold text-emerald-900">log<sub>b</sub>(x) = y &nbsp;&hArr;&nbsp; b<sup>y</sup> = x</span>
            </div>
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li><strong>Common Log (log):</strong> Uses a base (b) of 10.</li>
              <li><strong>Natural Log (ln):</strong> Uses a base (b) of the mathematical constant e (approx. 2.718).</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm flex flex-col md:flex-row gap-5">
            <div className="flex-1">
              <h3 className="font-bold mb-2 text-lg text-amber-700">3. Factorials</h3>
              <p className="text-sm text-gray-700 mb-3">
                A factorial is the product of an integer and all the non-zero integers below it. It is denoted by the "!" symbol.
              </p>
              <div className="bg-amber-50 p-4 rounded text-center text-sm border border-amber-100">
                <span className="font-semibold text-amber-900">n! = n &times; (n-1) &times; (n-2) &times; ... &times; 1</span>
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-bold mb-2 text-lg text-rose-700">4. Exponents & Roots</h3>
              <p className="text-sm text-gray-700 mb-3">
                Exponents (x<sup>y</sup>) indicate multiplying a number by itself multiple times. Roots (<sup>y</sup>&radic;x) reverse this, finding the base that was multiplied.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Using Trigonometry (Finding Ramp Height)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> An architect is designing a wheelchair ramp. The ramp has an angle of elevation of 10 degrees, and the length of the ramp along the ground (adjacent side) is 20 meters. They need to find the height (opposite side) of the ramp using Tangent.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Select Operation:</strong> Trigonometry &gt; Tangent (tan)</li>
                <li><strong>Angle Type:</strong> Degrees</li>
                <li><strong>Value:</strong> 10</li>
                <li><strong>Calculation:</strong> tan(10°) &approx; 0.1763</li>
                <li><strong>Apply Formula:</strong> Height = 20m &times; 0.1763</li>
              </ul>
              <p className="text-indigo-700 font-semibold">Result: The height of the ramp is approximately 3.53 meters.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Using Logarithms (Measuring Earthquakes)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> The Richter scale measures earthquake magnitude using a Base 10 Logarithm. If a seismograph measures an amplitude 100,000 times greater than a standard baseline, what is the earthquake's magnitude?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Select Operation:</strong> Logarithms &gt; Common Log (log<sub>10</sub>)</li>
                <li><strong>Value:</strong> 100000</li>
                <li><strong>Math Translation:</strong> log<sub>10</sub>(100,000) = ? (meaning 10<sup>?</sup> = 100,000)</li>
              </ul>
              <p className="text-emerald-700 font-semibold">Result: The answer is 5. The earthquake has a magnitude of 5.0 on the Richter scale.</p>
            </div>
          </div>

          {/* Example 3 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 3: Using Factorials (Permutations)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-3"><strong>Scenario:</strong> A student has 6 distinct books to place on a single shelf. They want to know exactly how many different ways (arrangements) they can organize these books side-by-side.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>Select Operation:</strong> Factorial (!)</li>
                <li><strong>Value:</strong> 6</li>
                <li><strong>Math Translation:</strong> Calculate 6!</li>
                <li><strong>Expansion:</strong> 6 &times; 5 &times; 4 &times; 3 &times; 2 &times; 1</li>
              </ul>
              <p className="text-amber-700 font-semibold">Result: There are 720 different ways to arrange the 6 books.</p>
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
          Scientific computations are just one part of your math toolkit. Enhance your problem-solving speed with our comprehensive suite of free calculators, built for students and professionals across India:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Math</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Math</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/permutation-combination" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Permutation & Combination</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Increase/Decrease</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Calculator</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}