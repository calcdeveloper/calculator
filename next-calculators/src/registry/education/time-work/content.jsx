import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Time and Work Calculator | Fast & Accurate Aptitude Tool
  2. META DESCRIPTION: Free online Time and Work Calculator. Quickly solve complex quantitative aptitude problems involving multiple individuals, days, and efficiency. Perfect for students and project planning.
  3. URL SLUG: /time-and-work-calculator
  4. H1 TITLE: Free Online Time and Work Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: time and work calculator
      - Secondary keywords: time and work formula, quantitative aptitude calculator, work efficiency calculator, LCM method time and work, pipes and cisterns calculator, days to complete work calculator, time and work solver, combined work calculator, aptitude math calculator, team efficiency tool.
      - Long-tail keywords: how to calculate time and work with 3 persons, shortcut for time and work problems, time and work LCM method tricks, calculate working days together formula, online calculator for aptitude test prep.
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
        "name": "What is the formula for calculating time and work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The fundamental formula is: Work Done = Time Taken × Rate of Work (Efficiency). If Person A can complete a job in 'X' days, their work for a single day is 1/X. For two people working together, the shortcut formula to find total time is (A × B) ÷ (A + B)."
        }
      },
      {
        "@type": "Question",
        "name": "What is the LCM method in time and work problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The LCM (Least Common Multiple) method is a shortcut technique used to avoid fractions. You take the individual times taken by each person and find their LCM. This LCM becomes your assumed 'Total Work' in units. You then find the daily efficiency of each person (Total Work ÷ Individual Time), add their efficiencies, and divide the Total Work by this combined efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "How does efficiency relate to the time taken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Efficiency and time are inversely proportional. This means if a person is twice as efficient as another, they will take half the time to complete the exact same amount of work. Higher efficiency equals less time, and lower efficiency equals more time."
        }
      },
      {
        "@type": "Question",
        "name": "Can this calculator be used for Pipes and Cisterns problems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! The concept behind 'Pipes and Cisterns' is exactly the same as 'Time and Work'. Instead of people doing a job, you have pipes filling a tank. The only difference is that a 'leak' or an 'outlet pipe' has negative efficiency, meaning it subtracts from the total work done."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate work done by 3 persons together?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Using the fraction method, the combined 1-day work of three people (A, B, and C) is (1/A) + (1/B) + (1/C). Once you calculate this sum as a fraction (e.g., 1/D), the total time taken to complete the work together is 'D' days. Alternatively, you can use the LCM method by finding the LCM of all three times."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the Unitary Method used in aptitude math?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Unitary Method reduces any problem to a 'per unit' basis—usually finding out what happens in exactly one day, one hour, or one minute. By equalizing the time frame, it becomes mathematically possible to add or subtract the work efforts of different people or machines."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Time and Work Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Time and work problems form the backbone of quantitative aptitude exams, academic mathematics, and real-world project management. Whether you are a student preparing for competitive exams like CAT, SSC CGL, banking recruitment, or a manager trying to calculate team efficiency, mastering these calculations is absolutely essential.
        </p>
        <p className="mb-4">
          At its core, calculating time and work is about understanding <strong>efficiency</strong> and <strong>rate of work</strong>. If one person can build a wall in 10 days, and another can build it in 15 days, how long will it take if they join forces? It is not simply an average of their times. Instead, when multiple people work together, their combined efficiency is the sum of their individual capabilities, drastically reducing the total time required.
        </p>
        <p className="mb-4">
          Our free <strong>Time and Work Calculator</strong> is designed to solve these exact scenarios instantly. By eliminating the need for manual fraction addition or complex mental math, this tool provides rapid, 100% accurate answers. It helps you visualize the daily effort of individuals and outputs the exact time required to finish a task collaboratively.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Time and Work Calculator</h2>
        <p className="mb-4">Using the calculator is incredibly straightforward. You only need to input the individual times taken by each participant. Here is a step-by-step guide to using the tool efficiently:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Select the Time Unit</h3>
        <p className="mb-2 text-sm text-gray-600">Ensure consistency across all inputs by choosing the correct unit of time.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Use the dropdown menu to select your working unit: <strong>Days, Hours, Minutes, Seconds, Weeks, or Months</strong>.</li>
          <li>Make sure that the time values you are about to enter match this chosen unit.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Enter Individual Work Times</h3>
        <p className="mb-2 text-sm text-gray-600">Provide the independent working capabilities of each person or machine.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>In the <strong>"Person A"</strong> field, enter the time it takes the first individual to complete the whole task alone.</li>
          <li>In the <strong>"Person B"</strong> field, enter the time it takes the second individual to complete the same task alone.</li>
          <li>If your problem involves a third individual, use the <strong>"Person C" (Optional)</strong> field. Leave it blank if there are only two workers.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Analyze the Results</h3>
        <p className="mb-2 text-sm text-gray-600">The calculator processes the data instantly without page reloads.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li><strong>Total Time Together:</strong> The primary output displays exactly how long the task will take when everyone works simultaneously.</li>
          <li><strong>Step-by-Step Breakdown:</strong> The tool will also show the combined 1-unit work (e.g., 1-day work) and the assumed total units of work to help you understand the calculation logic behind the scenes.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Explained</h2>
        <p className="mb-6">
          To truly master quantitative aptitude, you must understand the math running underneath our calculator. There are two primary methods used globally to solve these problems: The Unitary Method and the L.C.M. Method.
        </p>
        
        <div className="space-y-6">
          {/* Method 1 */}
          <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 1: The Unitary (Fraction) Method</h3>
            <p className="text-sm mb-3 text-gray-700 leading-relaxed">
              This traditional method focuses on finding out exactly how much work is accomplished in a single unit of time (like one day or one hour). If someone can finish an entire job in "x" days, the fraction of the work they complete in one single day is <strong>1/x</strong>.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-amber-800 font-bold text-center tracking-wide shadow-sm overflow-x-auto my-4">
              Together Time = (A &times; B) &divide; (A + B)
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mt-3">
              If Person A does 1/A work per day, and Person B does 1/B work per day, their combined daily work is (1/A) + (1/B). By flipping this fraction upside down (taking the reciprocal), you get the total time required to finish the whole job.
            </p>
          </div>

          {/* Method 2 */}
          <div className="bg-sky-50/50 p-6 rounded-2xl border border-sky-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 2: The L.C.M. (Efficiency) Method</h3>
            <p className="text-sm mb-3 text-gray-700 leading-relaxed">
              Highly preferred by competitive exam aspirants in India, this method avoids messy fractions completely. Instead of dealing with "1/x", you assume the "Total Work" to be the Least Common Multiple (LCM) of the days taken by all individuals.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-sky-800 font-bold text-center shadow-sm overflow-x-auto my-4">
              Total Time = Assumed Total Work (LCM) &divide; Combined Daily Efficiency
            </div>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 mt-3">
              <li><strong>Step 1:</strong> Find the LCM of the given times to set the Total Work Units.</li>
              <li><strong>Step 2:</strong> Divide the Total Work by each person's individual time to get their Efficiency (units built per day).</li>
              <li><strong>Step 3:</strong> Add their individual efficiencies together.</li>
              <li><strong>Step 4:</strong> Divide the Total Work by this combined efficiency.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Calculation Examples</h2>
        <p className="mb-6">Let us look at two practical scenarios to see how these methods are applied step-by-step to arrive at the correct answer.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: Two Workers (Fraction Method)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Rahul takes 10 days to paint a large house. Priya takes 15 days to paint the exact same house. If they decide to work together, how many days will it take them to finish the painting?
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Rahul's 1-day work:</strong> 1 / 10</li>
              <li><strong>Priya's 1-day work:</strong> 1 / 15</li>
              <li><strong>Combined 1-day work:</strong> (1/10) + (1/15)</li>
              <li><strong>Math steps:</strong> The common denominator is 30. So, (3/30) + (2/30) = 5/30.</li>
              <li><strong>Simplified fraction:</strong> 5/30 simplifies to 1/6. This means together, they finish 1/6th of the house in one day.</li>
              <li><strong>Final Answer:</strong> Taking the reciprocal, the total time taken together is <strong>6 days</strong>.</li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: Three Developers (L.C.M. Method)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              A software company assigns a project to three developers. Developer X can finish it in 12 days, Y in 15 days, and Z in 20 days. How fast will the project be completed if they all code simultaneously?
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Find the LCM:</strong> The LCM of 12, 15, and 20 is 60. We assume the Total Work is 60 units (e.g., writing 60 web pages).</li>
              <li><strong>Developer X Efficiency:</strong> 60 units &divide; 12 days = 5 units/day.</li>
              <li><strong>Developer Y Efficiency:</strong> 60 units &divide; 15 days = 4 units/day.</li>
              <li><strong>Developer Z Efficiency:</strong> 60 units &divide; 20 days = 3 units/day.</li>
              <li><strong>Combined Efficiency:</strong> 5 + 4 + 3 = 12 units/day.</li>
              <li><strong>Final Answer:</strong> Total Work (60) &divide; Combined Efficiency (12) = <strong>5 days</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PRO TIP --- */}
      <section className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-2xl border border-emerald-200 mt-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <h3 className="text-xl font-bold text-gray-900">Expert Aptitude Trick</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          When solving time and work problems in a timed, competitive environment (like banking or campus placement exams), completely abandon the fraction method. Writing out fractions wastes valuable seconds. Instead, always mentally calculate the LCM of the given numbers. Convert everything to <strong>Units of Work per Day</strong>. This integer-based approach reduces calculation errors and is significantly faster when people join or leave the job halfway through!
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the formula for calculating time and work?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The fundamental formula is: <strong>Work Done = Time Taken &times; Rate of Work (Efficiency)</strong>. If Person A can complete a job in 'X' days, their work for a single day is 1/X. For two people working together, the shortcut formula to find total time is <strong>(A &times; B) &divide; (A + B)</strong>.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the LCM method in time and work problems?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The LCM (Least Common Multiple) method is a shortcut technique used to avoid fractions. You take the individual times taken by each person and find their LCM. This LCM becomes your assumed 'Total Work' in units. You then find the daily efficiency of each person (Total Work &divide; Individual Time), add their efficiencies, and divide the Total Work by this combined efficiency.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How does efficiency relate to the time taken?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Efficiency and time are inversely proportional. This means if a person is twice as efficient as another, they will take half the time to complete the exact same amount of work. Higher efficiency equals less time, and lower efficiency equals more time.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can this calculator be used for Pipes and Cisterns problems?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! The concept behind 'Pipes and Cisterns' is exactly the same as 'Time and Work'. Instead of people doing a job, you have pipes filling a tank. The only difference is that a 'leak' or an 'outlet pipe' has negative efficiency, meaning it subtracts from the total work done.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do you calculate work done by 3 persons together?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Using the fraction method, the combined 1-day work of three people (A, B, and C) is (1/A) + (1/B) + (1/C). Once you calculate this sum as a single fraction (e.g., 1/D), the total time taken to complete the work together is 'D' days. Alternatively, you can use the LCM method by finding the LCM of all three times.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why is the Unitary Method used in aptitude math?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Unitary Method reduces any problem to a 'per unit' basis—usually finding out what happens in exactly one day, one hour, or one minute. By equalizing the time frame across all workers, it becomes mathematically possible to add or subtract the varying work efforts of different people or machines.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Education & Aptitude Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Sharpen your academic performance and manage your educational calculations with our suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/attendance" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Attendance Calculator</a>
          <a href="/calculator/education/cgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">CGPA to Percentage</a>
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">SGPA to CGPA Converter</a>
          <a href="/calculator/education/education-loan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Education Loan EMI Calculator</a>
          <a href="/calculator/education/gate-score" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">GATE Score Calculator</a>
          <a href="/calculator/education/marks-percentage" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Marks to Percentage Calculator</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/study-plan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Study Planner</a>
          <a href="/calculator/education/typing" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Calculator</a>
          <a href="/calculator/education/typing-test" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Test Tool</a>
          <a href="/calculator/education/word-counter" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Word Counter</a>
        </div>
      </section>
    </div>
  );
}