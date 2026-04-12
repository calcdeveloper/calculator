import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ProbabilityCalculatorContent() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Probability Calculator | Find Event Outcomes Easily
  // META DESCRIPTION: Free Probability Calculator for India. Calculate single events, independent events, intersection, union, and series probabilities with step-by-step formulas.
  // URL SLUG: /calculator/math/probability
  // PRIMARY KEYWORD: Probability Calculator
  // SECONDARY KEYWORDS: probability of two events calculator, calculate probability online, independent events calculator, probability intersection calculator, union of probability calculator, chance calculator, statistical probability calculator, compound probability calculator, probability of a and b, math probability solver
  // LONG-TAIL KEYWORDS: how to calculate probability of two independent events, formula for probability of a intersection b, calculate probability of an event not happening, probability calculator for coin toss and dice, online tool to find probability in percentages

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the probability of an event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Probability is the measure of how likely an event is to occur. It is expressed as a number between 0 and 1, or as a percentage between 0% and 100%. A 0% probability means the event will definitely not happen, while a 100% probability means it will absolutely happen."
        }
      },
      {
        "@type": "Question",
        name: "What does it mean when events are independent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Independent events are events where the outcome of one does not affect the outcome of the other. For example, flipping a coin and rolling a dice are independent events. Getting 'Heads' on the coin does not change the chances of rolling a '6' on the dice."
        }
      },
      {
        "@type": "Question",
        name: "Can a probability be greater than 100%?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, a probability cannot exceed 100% (or 1). A 100% probability represents absolute certainty. You cannot be more than absolutely certain that an event will occur."
        }
      },
      {
        "@type": "Question",
        name: "How do I calculate the probability of multiple events happening in a row?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If the events are independent, you simply multiply their individual probabilities together. For example, the probability of getting Heads twice in a row is 50% (0.5) multiplied by 50% (0.5), which equals 25% (0.25)."
        }
      },
      {
        "@type": "Question",
        name: "What is the difference between mutually exclusive and independent events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Mutually exclusive events cannot happen at the same time (like drawing a card that is both a King and an Ace). Independent events can happen at the same time, but the occurrence of one doesn't affect the probability of the other (like drawing a King from one deck and an Ace from a completely different deck)."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 max-w-4xl mx-auto text-gray-800 leading-relaxed mt-8">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Probability Calculator | Find Event Outcomes Easily</title>
        <meta
          name="description"
          content="Free Probability Calculator for India. Calculate single events, independent events, intersection, union, and series probabilities with step-by-step formulas."
        />
        <meta
          name="keywords"
          content="Probability Calculator, probability of two events calculator, calculate probability online, independent events calculator, probability intersection calculator"
        />
        <meta property="og:title" content="Probability Calculator | Find Event Outcomes Easily" />
        <meta property="og:description" content="Calculate complex probabilities effortlessly. Perfect for students, data analysts, and researchers dealing with statistics." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Probability Calculator
        </h1>
        <p className="mb-4">
          Probability is the mathematical foundation of chance. Whether you are analyzing statistics for a research paper, predicting the likelihood of rain during the monsoon, calculating odds in a game of cricket, or studying for a mathematics exam, understanding the likelihood of events is critical. 
        </p>
        <p className="mb-4">
          Our free online <strong>Probability Calculator</strong> is designed to simplify complex statistical math. It allows you to easily calculate the outcomes of single independent events and series of events using straightforward percentages. 
        </p>
        <p>
          You don't need a degree in statistics to use this tool. Designed for students, teachers, and general users across India, this calculator instantly processes unions, intersections, and complements so you can find the exact odds of your chosen scenarios happening.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-green-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Probability Calculator</h2>
        <p className="mb-4 text-gray-700">
          Our calculator uses a visual interface to output all major probability scenarios instantly. Here is a step-by-step guide using the values from our default example:
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-gray-800">
          <li>
            <strong>Select Calculator Mode:</strong> Use the dropdown menu to choose either <em>"Probabilities of single events"</em> (for comparing two distinct events) or <em>"Probabilities for a series of events"</em> (for repeated trials).
          </li>
          <li>
            <strong>Input Probability of A: P(A) (%):</strong> Enter the percentage chance of your first event happening. For example, if there is a <strong>45%</strong> chance of Event A occurring, enter 45.
          </li>
          <li>
            <strong>Input Probability of B: P(B) (%):</strong> Enter the percentage chance of your second event. For example, enter <strong>4</strong> for a 4% chance.
          </li>
          <li>
            <strong>Select the Event to Calculate:</strong> Choose <em>"Show all of the above"</em> to generate a complete statistical breakdown.
          </li>
          <li>
            <strong>Understand the Outputs:</strong> The calculator instantly provides:
            <ul className="list-disc pl-5 mt-2 text-sm text-gray-600 space-y-1">
              <li><strong>A ∩ B (Both): 1.80%</strong> — The chance that <em>both</em> A and B happen together.</li>
              <li><strong>A ∪ B (At least one): 47.20%</strong> — The chance that Event A, Event B, or both occur.</li>
              <li><strong>A Δ B (Exactly one): 45.40%</strong> — The chance that only A happens, or only B happens, but not both.</li>
              <li><strong>Neither occurs: 52.80%</strong> — The chance that both events fail to happen.</li>
              <li><strong>A' (Not A): 55%</strong> — The chance Event A does <em>not</em> happen.</li>
              <li><strong>B' (Not B): 96%</strong> — The chance Event B does <em>not</em> happen.</li>
            </ul>
          </li>
        </ol>
      </section>

      {/* FORMULA SECTION */}
      <section className="space-y-6 mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Probability Formulas Explained</h2>
        <p className="text-gray-700 mb-4">
          This calculator assumes that Event A and Event B are <strong>independent</strong>. This means the outcome of Event A does not alter or affect the probability of Event B. Here is the math powering your results:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">1. Intersection: A ∩ B (Both Happen)</h3>
            <p className="text-sm text-gray-600 mb-2">The probability that both independent events occur is found by multiplying their probabilities.</p>
            <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center">
              {"P(A ∩ B) = P(A) × P(B)"}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">2. Union: A ∪ B (At Least One Happens)</h3>
            <p className="text-sm text-gray-600 mb-2">The probability that A, B, or both occur. We subtract the intersection so we don't double-count it.</p>
            <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center">
              {"P(A ∪ B) = P(A) + P(B) - P(A ∩ B)"}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">3. Symmetric Difference: A Δ B (Exactly One)</h3>
            <p className="text-sm text-gray-600 mb-2">The probability that exactly one of the events happens, but absolutely not both.</p>
            <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center">
              {"P(A Δ B) = P(A ∪ B) - P(A ∩ B)"}
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-2">4. Complement: A' (Does Not Happen)</h3>
            <p className="text-sm text-gray-600 mb-2">The probability that a specific event will not occur is 1 (or 100%) minus the probability that it will.</p>
            <p className="font-mono text-green-700 font-semibold bg-green-50 p-2 rounded text-center">
              {"P(A') = 1 - P(A)"}
            </p>
          </div>
        </div>

        <div className="bg-calc-beige/30 p-6 rounded-xl border border-calc-lightGray mt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Series of Events (Repeated Trials)</h3>
          <p className="text-sm mb-4 text-gray-700">
            When you are dealing with a series of repeated, identical trials (like tossing a coin $n$ times or pulling a card with replacement), the formulas adapt:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-sm text-gray-800">
            <li><strong>Always Occurring:</strong> The event happens every single time. Formula: <span className="font-mono bg-white px-1 border rounded">{"P = p^n"}</span> (where $p$ is the probability of success, and $n$ is the number of trials).</li>
            <li><strong>Never Occurring:</strong> The event fails to happen every single time. Formula: <span className="font-mono bg-white px-1 border rounded">{"P = (1 - p)^n"}</span>.</li>
          </ul>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Worked Examples</h2>
        
        <div className="space-y-6">
          {/* Example 1 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 1: The Cricket Match and the Rain</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> You are hoping to watch an IPL cricket match in Mumbai. The weather forecast says there is a <strong>30% chance of rain (Event A)</strong>. Additionally, your favorite player has a <strong>20% chance of hitting a century (Event B)</strong>. Assuming these events are completely independent, what is the probability that it rains AND your player hits a century?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>P(A) Rain:</strong> 30% (or 0.30)</li>
                <li><strong>P(B) Century:</strong> 20% (or 0.20)</li>
                <li><strong>Calculation (A ∩ B):</strong> 0.30 × 0.20 = 0.06</li>
                <li><strong>Convert to Percentage:</strong> 0.06 × 100 = 6%</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: There is only a 6% chance that both events will happen on the same day.</p>
            </div>
          </div>

          {/* Example 2 */}
          <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-gray-50 px-5 py-3 border-b border-gray-200">
              <h3 className="font-bold text-gray-900">Example 2: Quality Control in Manufacturing</h3>
            </div>
            <div className="p-5 bg-white text-gray-800 text-sm leading-relaxed">
              <p className="mb-2"><strong>Scenario:</strong> A mobile phone factory in Noida produces devices. <strong>Machine A has a 5% error rate (Event A)</strong>, meaning 5% of its phones are defective. <strong>Machine B has a 2% error rate (Event B)</strong>. If a quality control inspector randomly picks one phone from Machine A and one from Machine B, what is the chance that <strong>at least one</strong> phone is defective?</p>
              <ul className="list-disc pl-5 mb-3 text-gray-700 space-y-1">
                <li><strong>P(A) Defective:</strong> 5% (0.05)</li>
                <li><strong>P(B) Defective:</strong> 2% (0.02)</li>
                <li><strong>Step 1 (Intersection):</strong> 0.05 × 0.02 = 0.001</li>
                <li><strong>Step 2 (Union Formula):</strong> 0.05 + 0.02 - 0.001 = 0.069</li>
                <li><strong>Convert to Percentage:</strong> 0.069 × 100 = 6.9%</li>
              </ul>
              <p className="text-green-700 font-semibold">Result: There is a 6.9% chance (A ∪ B) that at least one of the two selected phones will be defective.</p>
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
                <span className="text-green-600 group-open:rotate-180 transition-transform">▼</span>
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
          Probability is just one part of data analysis. Enhance your statistical calculations with our comprehensive suite of online tools:
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
          <a href="/calculator/math/profitloss" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Profit & Loss</a>
          <a href="/calculator/math/proportion" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition-colors hover:bg-blue-50">Proportion Math</a>
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
