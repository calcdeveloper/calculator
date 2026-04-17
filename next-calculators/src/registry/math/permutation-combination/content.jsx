import React from 'react';


export default function PermutationCombinationContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Permutation & Combination Calculator | Find nPr & nCr Online
  // META DESCRIPTION: Free Permutation and Combination Calculator for India. Easily calculate nPr and nCr with or without replacement. See step-by-step formulas and results.
  // URL SLUG: /calculator/math/permutation-combination
  // PRIMARY KEYWORD: Permutation & Combination Calculator
  // SECONDARY KEYWORDS: nPr calculator, nCr calculator online, calculate combinations, permutations with replacement, n choose r calculator, permutation formula, combination math tool, difference between permutation and combination, combinations vs permutations, arrangement calculator
  // LONG-TAIL KEYWORDS: how to calculate permutations and combinations, permutation and combination calculator with steps, formula for nPr and nCr calculation, difference between nPr and nCr in math, online combination generator order does not matter

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the main difference between a permutation and a combination?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The main difference is whether the order of the items matters. In a permutation, the order matters (e.g., a PIN code where 1234 is different from 4321). In a combination, the order does not matter (e.g., a mixed fruit bowl containing apples and bananas is the same as one containing bananas and apples)."
        }
      },
      {
        "@type": "Question",
        name: "What does the exclamation mark (!) mean in these formulas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The exclamation mark represents a mathematical operation called a 'factorial.' It means you multiply the number by every whole number below it down to 1. For example, 5! (five factorial) is 5 × 4 × 3 × 2 × 1, which equals 120."
        }
      },
      {
        "@type": "Question",
        name: "Can the number of items chosen (r) be greater than the total items (n)?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, if you are calculating standard combinations or permutations without replacement, 'r' cannot be greater than 'n'. You cannot select 6 items if you only have 5 items available to choose from."
        }
      },
      {
        "@type": "Question",
        name: "What does 'with replacement' mean in probability?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With replacement means that after you select an item, you put it back into the pool of options before making your next selection. This means the same item can be chosen more than once. Setting a 4-digit suitcase lock (where numbers 0-9 can be repeated) is an example of permutations with replacement."
        }
      },
      {
        "@type": "Question",
        name: "Why is a combination lock actually a permutation lock?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is a funny quirk of the English language! For a 'combination' lock, the sequence of the numbers strictly matters to open it. Since order matters, it is mathematically a permutation, not a combination."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Permutation & Combination Calculator
        </h1>
        <p className="mb-4">
          In the worlds of probability, statistics, and everyday event planning, we frequently need to figure out how many different ways a set of items can be grouped or arranged. Whether you are an Indian student studying for JEE or CBSE board exams, a sports coach selecting a playing 11 for a cricket match, or a data analyst creating unique passwords, determining the number of possible outcomes is essential.
        </p>
        <p className="mb-4">
          Our free online <strong>Permutation & Combination Calculator</strong> instantly computes the number of possible arrangements (nPr) and selections (nCr) from a dataset. You do not need to struggle with complex factorial calculations by hand. The tool automatically processes the exact mathematical formulas to give you clear, instant answers.
        </p>
        <p>
          Simply tell the calculator your total number of items, how many you want to choose, and whether the order of selection matters.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Permutation & Combination Calculator</h2>
        <p className="mb-4 text-gray-700">
          Using this tool is straightforward. It guides you from raw numbers to a fully evaluated mathematical outcome. Follow these easy steps:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Your Calculation Type:</strong> At the top left, click the drop-down menu to choose what you need. You can pick:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>Combinations (nCr):</strong> Order does NOT matter.</li>
              <li><strong>Permutations (nPr):</strong> Order strictly matters.</li>
              <li>Options for calculating <strong>"With Replacement"</strong> if items can be chosen multiple times.</li>
            </ul>
          </li>
          <li>
            <strong>Enter Total Number of Items (n):</strong> This is your complete pool of choices. You can type the number into the input box or use the slider bar. For example, if you have 5 different books, your 'n' is 5.
          </li>
          <li>
            <strong>Enter Number of Items to Choose (r):</strong> This is how many items you are selecting from the total pool. If you want to pick 3 books out of the 5, your 'r' is 3.
          </li>
          <li>
            <strong>Review Your Output:</strong> Instantly, the large green box on the right will display your final calculated result (e.g., <strong>10</strong> combinations).
          </li>
          <li>
            <strong>Check the Step-by-Step Breakdown:</strong> Below the main result, a details table will show you the exact Formula used, the Step-by-Step Calculation, and the Exact Result, making it incredibly helpful for homework and assignments.
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Permutations vs. Combinations: What is the difference?</h2>
        <p className="text-gray-700 mb-4">
          The core difference between the two concepts comes down to one simple question: <strong>Does the sequence or order matter?</strong>
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6 text-gray-700">
          <li><strong>Permutations:</strong> Order <em>does</em> matter. A combination lock is actually a permutation lock! The sequence 1-2-3 will open the lock, but 3-2-1 will not. They are different permutations.</li>
          <li><strong>Combinations:</strong> Order <em>does not</em> matter. If you are making a fruit salad, adding apples, bananas, and grapes is the exact same salad as adding grapes, bananas, and apples. It is one single combination.</li>
        </ul>

        <div className="bg-white p-6 rounded-xl border border-gray-200 mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">The Mathematical Formulas</h3>
          <p className="text-sm text-gray-600 mb-6">
            In these formulas, <strong>n</strong> represents the total number of items available, <strong>r</strong> represents the number of items being chosen, and the exclamation point (<strong>!</strong>) represents a factorial (multiplying a number by every whole number below it down to 1).
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg border border-green-100 shadow-sm">
              <h4 className="font-bold text-green-800 mb-2 text-lg">Combinations (nCr)</h4>
              <p className="text-sm text-gray-700 mb-3">Used when forming groups, teams, or selecting lottery numbers.</p>
              <div className="bg-white p-3 rounded border border-green-200 font-mono text-center font-bold text-green-900 shadow-inner">
                n! / (r! × (n - r)!)
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-100 shadow-sm">
              <h4 className="font-bold text-blue-800 mb-2 text-lg">Permutations (nPr)</h4>
              <p className="text-sm text-gray-700 mb-3">Used for passwords, seating arrangements, or race finishes.</p>
              <div className="bg-white p-3 rounded border border-blue-200 font-mono text-center font-bold text-blue-900 shadow-inner">
                n! / (n - r)!
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 p-5 border-l-4 border-yellow-400 bg-yellow-50 rounded-r-lg">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">What does "With Replacement" mean?</h3>
          <p className="text-gray-700 text-sm">
            Standard permutations and combinations assume that once you pick an item, you cannot pick it again (like drawing a card from a standard deck). If you <em>replace</em> the item after picking it (like rolling a die multiple times or creating a PIN code where numbers can repeat), you must use the <strong>"With Replacement"</strong> calculation modes. Permutations with replacement follow the much simpler formula <strong>n^r</strong>.
          </p>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: Forming a Cricket Team (Combination - nCr)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You are the coach of an Indian local cricket club. You have a squad of 15 players, but you can only select 11 players for the final starting team. The order in which you pick them does not matter; either they are on the team or they are not.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Total Items (n):</strong> 15 (Total players)</li>
                <li><strong>Items to Choose (r):</strong> 11 (Players needed)</li>
                <li><strong>Formula applied:</strong> 15! / (11! × (15 - 11)!)</li>
                <li><strong>Calculation:</strong> 15! / (11! × 4!)</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: There are 1,365 different combinations of players you can choose to form your final 11.</p>
            </div>
          </div>

          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Awarding Medals in a Race (Permutation - nPr)</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> 10 sprinters are competing in a 100m dash at a school sports day. Medals are awarded for Gold (1st place), Silver (2nd place), and Bronze (3rd place). Because the order completely changes who gets which medal, order matters.</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700">
                <li><strong>Total Items (n):</strong> 10 (Total runners)</li>
                <li><strong>Items to Choose (r):</strong> 3 (Top 3 positions)</li>
                <li><strong>Formula applied:</strong> 10! / (10 - 3)!</li>
                <li><strong>Calculation:</strong> 10! / 7!</li>
                <li><strong>Step-by-step math:</strong> 10 × 9 × 8</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: There are 720 different ways the top 3 medals can be awarded.</p>
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
          Whether you are dealing with advanced statistics or everyday algebra, our suite of online calculators provides quick and precise solutions:
        </p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/math/algebra" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Algebra Solver</a>
          <a href="/calculator/math/area-perimeter" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Area & Perimeter</a>
          <a href="/calculator/math/average" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Average Calculator</a>
          <a href="/calculator/math/exponent" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Exponent Calculator</a>
          <a href="/calculator/math/fraction" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Fraction Calculator</a>
          <a href="/calculator/math/lcm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">LCM & GCF</a>
          <a href="/calculator/math/logarithm" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Logarithm (Log)</a>
          <a href="/calculator/math/matrix" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Matrix Calculator</a>
          <a href="/calculator/math/mean-median-mode" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Mean, Median, Mode</a>
          <a href="/calculator/math/percentage" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Calculator</a>
          <a href="/calculator/math/percentage-inc-dec" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Percentage Inc/Dec</a>
          <a href="/calculator/math/probability" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Probability Calculator</a>
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion</a>
          <a href="/calculator/math/pythagorean" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Pythagorean Theorem</a>
          <a href="/calculator/math/quadratic" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Quadratic Equation</a>
          <a href="/calculator/math/ratio" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Ratio Calculator</a>
          <a href="/calculator/math/scientific" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Scientific Calculator</a>
          <a href="/calculator/math/standard-deviation" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Standard Deviation</a>
          <a href="/calculator/math/volume-surface-area" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Volume & Surface Area</a>
        </div>
      </section>
    </div>
  );
}
