import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Free Online Scientific Calculator | Advanced Math & Trigonometry
  2. META DESCRIPTION: Solve complex equations instantly with our free online Scientific Calculator. Features trigonometry (sin, cos, tan), logarithms, exponents, and factorials.
  3. URL SLUG: /scientific-calculator
  4. H1 TITLE: Free Online Scientific Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Scientific calculator online India
      - Secondary keywords: trigonometry calculator, calculate sine cosine tangent, logarithm calculator, exponential calculator, factorial calculator online, BODMAS calculator, engineering calculator online, scientific calculator with fractions, math calculator online.
      - Long-tail keywords: how to calculate log base 10 online, online calculator for engineering students, calculate compound interest using exponents, how to find factorial of a number, degrees to radians calculator.
  =========================================
*/

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between DEG and RAD modes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DEG (Degrees) and RAD (Radians) are two different units for measuring angles. A full circle is 360 degrees or 2π radians. If you are doing basic geometry, you likely need DEG mode. Higher-level calculus and physics often require RAD mode. Always check your problem's requirements before calculating trigonometric functions like sine or cosine."
        }
      },
      {
        "@type": "Question",
        "name": "What does the 'e' button do on a scientific calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'e' button represents Euler's number, a mathematical constant approximately equal to 2.71828. It is the base of the natural logarithm and is widely used in continuous compound interest calculations, population growth models, and calculus."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between 'log' and 'ln'?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'log' button usually refers to the common logarithm, which has a base of 10. It asks: '10 raised to what power equals this number?' The 'ln' button stands for natural logarithm, which has a base of 'e' (approx 2.718). It asks: 'e raised to what power equals this number?'"
        }
      },
      {
        "@type": "Question",
        "name": "How does the calculator handle the order of operations?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This scientific calculator strictly follows the BODMAS/PEMDAS rule. It will calculate Parentheses/Brackets first, followed by Orders/Exponents (like square roots and powers), then Division and Multiplication, and finally Addition and Subtraction."
        }
      },
      {
        "@type": "Question",
        "name": "What does the factorial (x!) button mean?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The factorial button, denoted by an exclamation mark (!), multiplies a given whole number by every positive integer less than itself. For example, 5! (five factorial) is calculated as 5 × 4 × 3 × 2 × 1, which equals 120. It is heavily used in probability and permutations."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate a square root or power?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate a square root, click the '√' button followed by your number. To calculate a power (like 5 cubed), enter the base number (5), press the exponent button (usually represented as ^ or x^y), and then enter the power (3)."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto bg-white p-4 md:p-8 rounded-2xl shadow-sm border border-gray-100">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Scientific Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          A standard basic calculator is great for grocery bills and simple arithmetic, but it falls short when you enter the world of higher education, engineering, or complex data analysis. Whether you are a high school student in India preparing for CBSE/ICSE board exams, an engineering aspirant studying for the JEE, or a professional working on technical projects, a reliable scientific calculator is an absolute necessity.
        </p>
        <p className="mb-4">
          Our free online <strong>Scientific Calculator</strong> is designed to handle advanced mathematical formulas with ease. It goes far beyond addition and multiplication, giving you instant access to trigonometric functions (sine, cosine, tangent), logarithmic computations, exponentiation, root extractions, and factorials.
        </p>
        <p>
          Designed with a clean, intuitive keypad interface, this tool ensures you can evaluate complex, multi-step expressions accurately without needing a physical piece of hardware. It strictly follows standard mathematical hierarchies (BODMAS), ensuring your academic and professional calculations are 100% precise.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Scientific Calculator</h2>
        <p className="mb-4">Using an advanced calculator might seem intimidating if you are unfamiliar with the symbols. Here is a step-by-step breakdown of how to use the different sections of the digital keypad:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">1. Set Your Angle Mode (Rad vs. Deg)</h3>
        <p className="text-sm mb-2">Before doing any trigonometry, look at the top of the calculator. You will see a toggle for <strong>Rad</strong> (Radians) and <strong>Deg</strong> (Degrees). By default, standard geometry problems use Degrees. Calculus or advanced physics problems often use Radians. Click the toggle to switch based on your problem's requirements.</p>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">2. Trigonometry & Advanced Functions</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
          <li><strong>sin, cos, tan:</strong> Use these for trigonometric ratios. Click the function, then enter the angle.</li>
          <li><strong>ln & log:</strong> Use <em>ln</em> for natural logarithms (base e) and <em>log</em> for common logarithms (base 10).</li>
          <li><strong>π (Pi) & e:</strong> Click these to instantly insert the exact constant value of Pi (3.14159...) or Euler's number (2.71828...) into your equation.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">3. Exponents, Roots, and Factorials</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
          <li><strong>^ (Exponent):</strong> Used to raise a number to a power. E.g., type `2 ^ 3` to calculate 2 cubed (8).</li>
          <li><strong>√ (Square Root):</strong> Extracts the square root of the following number.</li>
          <li><strong>x! (Factorial):</strong> Calculates the factorial of an integer. E.g., `5!` equals 120.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">4. Grouping with Parentheses</h3>
        <p className="text-sm mb-2">Use the <strong>(</strong> and <strong>)</strong> buttons to group parts of your equation. The calculator follows BODMAS, so anything inside parentheses will be calculated first. For example, `5 × (2 + 3)` yields 25, while `5 × 2 + 3` yields 13.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Mathematical Formulas Explained</h2>
        <p className="mb-6">Understanding the math behind the buttons is crucial for getting the right answers. Here is a brief refresher on the core concepts this calculator handles.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">The BODMAS / PEMDAS Rule</h3>
            <p className="text-sm mb-4">The calculator automatically respects the universal order of operations to prevent mathematical ambiguity.</p>
            <ul className="text-sm space-y-2 text-gray-700 font-mono bg-white p-3 rounded shadow-sm border border-gray-100">
              <li><strong>B/P:</strong> Brackets / Parentheses first</li>
              <li><strong>O/E:</strong> Orders / Exponents (Powers and Roots)</li>
              <li><strong>D/M:</strong> Division & Multiplication (Left to Right)</li>
              <li><strong>A/S:</strong> Addition & Subtraction (Left to Right)</li>
            </ul>
          </div>

          <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Trigonometry (SOH CAH TOA)</h3>
            <p className="text-sm mb-4">Trigonometric functions relate the angles of a right-angled triangle to the lengths of its sides.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Sine (sin):</strong> Opposite ÷ Hypotenuse</li>
              <li><strong>Cosine (cos):</strong> Adjacent ÷ Hypotenuse</li>
              <li><strong>Tangent (tan):</strong> Opposite ÷ Adjacent</li>
            </ul>
          </div>

          <div className="bg-teal-50/50 p-6 rounded-xl border border-teal-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Logarithms</h3>
            <p className="text-sm mb-4">Logarithms reverse exponential growth. They tell you the exponent required to produce a certain number.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Common Log (log):</strong> Base 10. If 10³ = 1000, then log(1000) = 3.</li>
              <li><strong>Natural Log (ln):</strong> Base e. If e² ≈ 7.389, then ln(7.389) = 2.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Practical Examples</h2>
        <p className="mb-6">How do these abstract math concepts apply to real life? Let's look at three practical scenarios where a scientific calculator is essential.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Finding the Height of a Building (Trigonometry)</h3>
            <p className="mb-2 text-sm">You are standing 50 meters away from a building. You look up to the top, and the angle of elevation is exactly 30 degrees. How tall is the building?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Formula:</strong> tan(angle) = Opposite (Height) / Adjacent (Distance)</li>
              <li><strong>Calculator Input:</strong> Ensure you are in <strong>Deg</strong> mode. Type: `tan(30) × 50`</li>
              <li><strong>Result:</strong> 0.57735 × 50 = <strong>28.86 meters</strong> tall.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Calculating Compound Interest (Exponents)</h3>
            <p className="mb-2 text-sm">You invest ₹10,000 in a mutual fund with an expected annual return of 12%, compounding yearly. How much will you have after 5 years?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Formula:</strong> Principal × (1 + Rate) ^ Years</li>
              <li><strong>Calculator Input:</strong> Type: `10000 × (1 + 0.12) ^ 5`</li>
              <li><strong>Result:</strong> 10000 × (1.12)^5 = <strong>₹17,623.41</strong>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Passwords & Probability (Factorials)</h3>
            <p className="mb-2 text-sm">You need to create a unique 6-letter password using 6 different characters, without repeating any. How many total possible combinations are there?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Concept:</strong> Permutations using factorials.</li>
              <li><strong>Calculator Input:</strong> Type: `6!` (meaning 6 × 5 × 4 × 3 × 2 × 1)</li>
              <li><strong>Result:</strong> <strong>720</strong> unique combinations.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between DEG and RAD modes?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              DEG (Degrees) and RAD (Radians) are two different units for measuring angles. A full circle is 360 degrees or 2π radians. If you are doing basic geometry or carpentry, you likely need DEG mode. Higher-level calculus, programming, and physics often require RAD mode. Always check your problem's requirements before calculating trigonometric functions like sine or cosine, as using the wrong mode will give you a completely incorrect answer.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What does the "e" button do on a scientific calculator?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The "e" button represents Euler's number, a vital mathematical constant approximately equal to 2.71828. It is the base of the natural logarithm and is widely used in formulas involving continuous compound interest calculations in finance, population growth models in biology, and advanced calculus.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between "log" and "ln"?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The "log" button usually refers to the common logarithm, which has a base of 10. It asks: "10 raised to what power equals this number?" (e.g., log(100) = 2). The "ln" button stands for natural logarithm, which has a base of "e" (approx 2.718). It asks: "e raised to what power equals this number?"
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does the calculator handle the order of operations?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This scientific calculator strictly follows the BODMAS/PEMDAS rule. It will internally calculate Parentheses/Brackets first, followed by Orders/Exponents (like square roots and powers), then Division and Multiplication from left to right, and finally Addition and Subtraction. You do not need to calculate it piece by piece; you can type the entire equation out.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What does the factorial (x!) button mean?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The factorial button, denoted by an exclamation mark (!), multiplies a given whole number by every positive integer less than itself. For example, 5! (five factorial) is calculated as 5 × 4 × 3 × 2 × 1, which equals 120. Factorials are heavily used in probability, statistics, and determining permutations and combinations.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate a square root or power?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To calculate a square root, click the "√" button followed by your number. To calculate a power (like 5 cubed), enter your base number (5), press the exponent button (represented as ^), and then enter the power (3).
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Finished with your complex math? Check out our suite of free everyday tools for daily life, finance, and time management:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Monthly Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
        </div>
      </section>
      
    </div>
  );
}