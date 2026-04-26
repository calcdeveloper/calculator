import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Marks Percentage Calculator Online | Free Exam Score Tool
  2. META DESCRIPTION: Free online Marks to Percentage Calculator for students. Accurately convert your exam marks, CBSE CGPA, and University SGPA to an exact percentage instantly.
  3. URL SLUG: /marks-percentage-calculator
  4. H1 TITLE: Free Online Marks to Percentage Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Marks percentage calculator
      - Secondary keywords: how to calculate percentage of marks, marks to percentage converter, exam percentage calculator, cbse cgpa to percentage, sgpa to percentage calculator, academic percentage formula, calculate marks out of 500, percentage calculator for students, score percentage calculator, grade percentage converter.
      - Long-tail keywords: how to find the percentage of marks obtained, calculate percentage of 6 subjects marks, what is the formula for calculating percentage in exams, convert cbse 10th cgpa to percentage online, sgpa to percentage calculation formula ugc.
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
        "name": "How do I calculate the percentage of my exam marks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate your exam percentage, divide your total obtained marks by the maximum possible total marks, and then multiply the result by 100. For example, if you scored 400 out of 500, the calculation is (400 ÷ 500) × 100 = 80%."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 9.5 multiplier for CBSE CGPA official?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for students under the older CCE pattern in CBSE Class 10, the board officially recommended multiplying the overall CGPA by 9.5 to get the indicative percentage. For example, a 10 CGPA equals 95%."
        }
      },
      {
        "@type": "Question",
        "name": "How is University SGPA converted to percentage in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While exact formulas vary slightly depending on the university (like AICTE or UGC guidelines), the most widely accepted standard formula in Indian universities is to subtract 0.75 from your SGPA and then multiply the result by 10. For instance, an SGPA of 8.0 would be (8.0 - 0.75) × 10 = 72.5%."
        }
      },
      {
        "@type": "Question",
        "name": "Should I include additional or optional subjects in my total percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This entirely depends on the criteria of the institution you are applying to. For basic passing, only the core 5 subjects are usually counted (Best of 5 rule). However, for specific competitive exams or college admissions like Delhi University, they often ask for specific subject combinations (like PCM or PCB) rather than the overall total."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate my percentage if subjects have different maximum marks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You simply add up all the marks you obtained across all subjects to get a single 'Total Obtained Marks' figure. Then, add up all the maximum marks for those subjects to get the 'Grand Total Marks'. Finally, apply the standard formula: (Total Obtained Marks ÷ Grand Total Marks) × 100."
        }
      },
      {
        "@type": "Question",
        "name": "Can a percentage be higher than 100%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the context of academic examinations, no. Your percentage cannot exceed 100% because the marks you obtain cannot be greater than the maximum possible marks allocated for that specific exam or subject."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Marks to Percentage Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Calculating the exact percentage of your academic marks is an essential skill for every student, parent, and educator in India. Whether you have just received your board exam results, are filling out complex college admission forms, or are preparing your resume for your first job, your percentage is the universal metric that defines your academic standing.
        </p>
        <p className="mb-4">
          Over the years, the Indian education system has introduced various grading methodologies to reduce student stress, including the Cumulative Grade Point Average (CGPA) used by CBSE and the Semester Grade Point Average (SGPA) used by universities for undergraduate programs like B.Tech, B.Com, and B.A. While these grading systems are effective, almost all higher education institutions, scholarship panels, and employers still require you to convert these grades back into a standard percentage.
        </p>
        <p className="mb-4">
          Understanding how to accurately compute your percentage ensures you never misrepresent your academic qualifications. A miscalculated decimal point can sometimes be the difference between meeting a strict admission cut-off and losing a seat at a premier institute.
        </p>
        <p className="mb-4">
          Our free <strong>Marks Percentage Calculator</strong> is designed to completely eliminate manual mathematical errors. It provides an instant, foolproof way to calculate your exact percentage from raw marks, and also offers the definitive formulas for converting board CGPAs and university SGPAs into widely accepted percentage formats.
        </p>
      </section>

      {/* --- IMPORTANCE OF EXACT PERCENTAGE --- */}
      <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Calculating Your Exact Percentage Matters</h2>
        <p className="mb-4">In a highly competitive academic landscape, an approximate number is simply not good enough. Here is why precision in your percentage calculation is critical:</p>
        <ul className="list-disc pl-6 space-y-4 mb-4 text-gray-700">
          <li><strong>Strict Admission Cut-Offs:</strong> Universities like Delhi University (DU) or Mumbai University are famous for their razor-thin cut-off margins. Missing a cut-off by 0.1% can change your college trajectory. Knowing your exact percentage down to two decimal places is mandatory for these applications.</li>
          <li><strong>Competitive Exam Eligibility:</strong> Exams like CAT, UPSC, GATE, and banking exams often have strict minimum percentage criteria (e.g., exactly 50% or 60% in graduation). Calculating this accurately ensures you don't face rejection during document verification.</li>
          <li><strong>Scholarship Applications:</strong> Merit-based scholarships have rigid thresholds. Miscalculating your marks percentage can either cause you to miss an opportunity or lead to application cancellation due to data mismatch.</li>
          <li><strong>Standardization Across Boards:</strong> A student from a State Board might be graded out of 600, while an ICSE student might be graded out of 500. Percentages act as the great equalizer, standardizing academic performance onto a universal 100-point scale for fair comparison.</li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Marks Percentage Calculator</h2>
        <p className="mb-6">Using our tool is incredibly straightforward. You do not need to worry about complex multipliers or division. Just follow these simple steps to get your exact academic percentage instantly.</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 1: Gather Your Exam Scorecard</h3>
        <p className="mb-4 text-sm text-gray-700">
          Before using the calculator, make sure you have your final marksheet. If you are calculating the percentage for a specific semester or your final board exams, identify the total marks you scored and the maximum possible marks for all those subjects combined.
        </p>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Enter Your Obtained Marks</h3>
        <p className="mb-2 text-sm text-gray-600">This is the sum of all the marks you achieved in your exams.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Locate the <strong>"Marks Obtained"</strong> input box in the calculator.</li>
          <li>Type in your exact score. For instance, if you scored 85 in English, 90 in Math, and 80 in Science, your obtained marks would be 255. Type <em>255</em> into this field.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Enter the Total Maximum Marks</h3>
        <p className="mb-2 text-sm text-gray-600">This defines the maximum ceiling of the examination.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Locate the <strong>"Total Marks"</strong> input box.</li>
          <li>Enter the maximum possible marks for the exam. Continuing the example above, if each of the 3 subjects was out of 100, the total maximum marks would be 300. Type <em>300</em> into this field.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 4: View Your Exact Percentage</h3>
        <p className="mb-2 text-sm text-gray-600">Instant and precise output.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>The moment you input the total marks, the calculator will automatically process the formula.</li>
          <li>Your exact percentage will be displayed in the large results box below, accurate to two decimal places.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">The Mathematical Formulas Explained</h2>
        <p className="mb-6">
          While our tool handles the math for you, understanding the underlying formulas is crucial, especially when dealing with different educational grading systems like raw marks, CBSE CGPA, and University SGPA. Here is a detailed breakdown of the three most common calculation methods used in India.
        </p>
        
        <div className="space-y-6">
          {/* Method 1 */}
          <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 1: The Standard Percentage Formula (Raw Marks)</h3>
            <p className="text-sm mb-3 text-gray-700">
              This is the most universal and fundamental method used across the globe. It simply represents your obtained marks as a fraction of the total marks, scaled to a baseline of 100. You divide the marks you secured by the total maximum marks, and multiply the result by 100.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base md:text-lg text-blue-800 font-bold text-center tracking-wide shadow-sm overflow-x-auto my-4">
              Percentage = (Marks Obtained ÷ Total Marks) × 100
            </div>
          </div>

          {/* Method 2 */}
          <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 2: Converting CBSE CGPA to Percentage</h3>
            <p className="text-sm mb-3 text-gray-700">
              For several years, the Central Board of Secondary Education (CBSE) evaluated Class 10 students using a 10-point Cumulative Grade Point Average (CGPA) system instead of raw marks. To provide an equivalent percentage for college admissions, the board introduced a fixed multiplier.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base md:text-lg text-emerald-800 font-bold text-center shadow-sm overflow-x-auto my-4">
              Indicative Percentage = CGPA × 9.5
            </div>
            <p className="text-sm text-gray-700">
              <em>Note: To find the percentage of a specific subject, multiply the grade point of that individual subject by 9.5.</em>
            </p>
          </div>

          {/* Method 3 */}
          <div className="bg-purple-50/40 p-6 rounded-2xl border border-purple-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 3: Converting University SGPA/CGPA to Percentage</h3>
            <p className="text-sm mb-3 text-gray-700">
              In higher education, specifically engineering (B.Tech) and university degree programs, performance is measured using Semester Grade Point Average (SGPA). The conversion formula can vary by institution (e.g., VTU, SPPU, AKTU). However, the most widely recommended formula by major Indian academic bodies is:
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base md:text-lg text-purple-800 font-bold text-center shadow-sm overflow-x-auto my-4">
              Percentage = (SGPA - 0.75) × 10
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Calculation Examples</h2>
        <p className="mb-6">To ensure you fully grasp how these formulas are applied in practical academic scenarios, let us walk through three detailed, real-life examples representing different Indian educational stages.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: State Board Exam (Raw Marks)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Rahul recently received his Class 12 Maharashtra State Board results. He appeared for 6 subjects, each carrying a maximum of 100 marks. His individual subject scores were: 82, 75, 88, 91, 68, and 79. Let us calculate his final percentage.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Step 1: Find Total Obtained Marks:</strong> 82 + 75 + 88 + 91 + 68 + 79 = <strong>483</strong></li>
              <li><strong>Step 2: Find Total Maximum Marks:</strong> 6 subjects × 100 = <strong>600</strong></li>
              <li><strong>Step 3: Apply Formula:</strong> (483 ÷ 600) × 100</li>
              <li><strong>Step 4: Division:</strong> 483 ÷ 600 = 0.805</li>
              <li><strong>Final Calculation:</strong> 0.805 × 100 = <strong>80.5%</strong></li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: CBSE Class 10 (CGPA Conversion)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Priya's CBSE Class 10 report card shows grades instead of marks. Her overall Cumulative Grade Point Average (CGPA) is officially listed as <strong>8.8</strong>. She needs to fill out an admission form that strictly asks for a percentage.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Step 1: Identify the CGPA:</strong> 8.8</li>
              <li><strong>Step 2: Use the standard CBSE Multiplier:</strong> 9.5</li>
              <li><strong>Step 3: Apply Formula:</strong> 8.8 × 9.5</li>
              <li><strong>Final Calculation:</strong> <strong>83.6%</strong></li>
            </ul>
          </div>

          {/* Example 3 */}
          <div className="border-l-4 border-purple-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 3: University Engineering (SGPA Conversion)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Arjun is a B.Tech student who just finished his third semester. His university grades him on a 10-point scale. His semester result shows an SGPA of <strong>7.8</strong>. He is applying for an internship that demands a minimum of 70% in current academics.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Step 1: Identify the SGPA:</strong> 7.8</li>
              <li><strong>Step 2: Apply the standard University Formula:</strong> (SGPA - 0.75) × 10</li>
              <li><strong>Step 3: Subtract:</strong> 7.8 - 0.75 = 7.05</li>
              <li><strong>Final Calculation:</strong> 7.05 × 10 = <strong>70.5%</strong></li>
            </ul>
            <p className="mt-4 text-sm text-purple-800 font-semibold bg-purple-50 inline-block px-4 py-2 rounded-lg border border-purple-100">
              Insight: With a 70.5%, Arjun safely crosses the 70% threshold required for his internship application!
            </p>
          </div>
        </div>
      </section>

      {/* --- PRO TIP --- */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-yellow-200 mt-12 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <h3 className="text-xl font-bold text-gray-900">Expert Tip on Rounding Off</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          When filling out official applications (like college admissions or government job forms in India), <strong>do not round up your percentage automatically</strong> unless explicitly permitted. If you score 89.9%, it is <em>not</em> 90% in the eyes of an admission committee. If the cut-off is 90.0%, an 89.9% will be rejected. Always report the exact two-decimal figure calculated by our tool to avoid document verification failures.
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do I calculate the percentage of my exam marks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To calculate your exam percentage, divide your total obtained marks by the maximum possible total marks, and then multiply the result by 100. For example, if you scored 400 out of 500, the calculation is (400 ÷ 500) × 100 = 80%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Is the 9.5 multiplier for CBSE CGPA official?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, for students under the older CCE pattern in CBSE Class 10, the board officially recommended multiplying the overall CGPA by 9.5 to get the indicative percentage. For example, a 10 CGPA equals 95%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How is University SGPA converted to percentage in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While exact formulas vary slightly depending on the university (like AICTE or UGC guidelines), the most widely accepted standard formula in Indian universities is to subtract 0.75 from your SGPA and then multiply the result by 10. For instance, an SGPA of 8.0 would be (8.0 - 0.75) × 10 = 72.5%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Should I include additional or optional subjects in my total percentage?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This entirely depends on the criteria of the institution you are applying to. For basic passing, only the core 5 subjects are usually counted (Best of 5 rule). However, for specific competitive exams or college admissions like Delhi University, they often ask for specific subject combinations (like PCM or PCB) rather than the overall total.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do I calculate my percentage if subjects have different maximum marks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You simply add up all the marks you obtained across all subjects to get a single 'Total Obtained Marks' figure. Then, add up all the maximum marks for those subjects to get the 'Grand Total Marks'. Finally, apply the standard formula: (Total Obtained Marks ÷ Grand Total Marks) × 100.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can a percentage be higher than 100%?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In the context of academic examinations, no. Your percentage cannot exceed 100% because the marks you obtain cannot be greater than the maximum possible marks allocated for that specific exam or subject.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Student & Academic Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Ensure your academic data is perfectly calculated and your study time is fully optimized with our suite of free online student tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/attendance" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Attendance Calculator</a>
          <a href="/calculator/education/cgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">CGPA to Percentage Calculator</a>
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">SGPA to CGPA Converter</a>
          <a href="/calculator/education/education-loan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Education Loan EMI Calculator</a>
          <a href="/calculator/education/gate-score" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">GATE Score Calculator</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/study-plan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Study Planner</a>
          <a href="/calculator/education/time-work" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Time & Work Calculator</a>
          <a href="/calculator/education/typing" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Calculator</a>
          <a href="/calculator/education/typing-test" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Test</a>
          <a href="/calculator/education/word-counter" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Word & Character Counter</a>
        </div>
      </section>
    </div>
  );
}