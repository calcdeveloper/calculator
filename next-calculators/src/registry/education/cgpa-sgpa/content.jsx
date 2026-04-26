import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: SGPA to CGPA Calculator Online | Free Semester Grade Converter
  2. META DESCRIPTION: Free online SGPA to CGPA calculator for Indian university students. Calculate your cumulative grade point average accurately using simple or credit-weighted formulas.
  3. URL SLUG: /sgpa-to-cgpa-calculator
  4. H1 TITLE: Free Online SGPA to CGPA Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: SGPA to CGPA calculator
      - Secondary keywords: calculate CGPA from SGPA, SGPA to CGPA conversion, how to calculate CGPA, credit weighted average calculator, VTU SGPA to CGPA, AKTU CGPA calculator, SGPA calculator with credits, BTech CGPA calculator, Mumbai University CGPA, semester grade point average.
      - Long-tail keywords: how to calculate CGPA from SGPA with credits, formula for SGPA to CGPA conversion engineering, convert SGPA to CGPA online free, how to find overall CGPA for 8 semesters, difference between SGPA and CGPA.
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
        "name": "What is the difference between SGPA and CGPA?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SGPA (Semester Grade Point Average) represents your academic performance for a single semester (typically 6 months). CGPA (Cumulative Grade Point Average) is the combined average of your academic performance across all completed semesters in your entire course. SGPA is short-term, while CGPA is your final graduation score."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate CGPA without knowing my semester credits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your university uses a standard distribution where every semester has roughly the same weight, or if you simply do not know your credits, you can use the 'Simple Average Method'. Just add all your SGPAs together and divide by the total number of semesters. This gives a very close estimate."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the Credit-Weighted method more accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Not all semesters are equal. For example, Semester 1 might have 24 total credits, while an internship-heavy Semester 8 might only have 12 credits. The Credit-Weighted method multiplies your SGPA by that semester's specific credits, ensuring that heavier, more difficult semesters have a proportionately larger impact on your final CGPA."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert my final CGPA into a percentage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Converting CGPA to percentage depends entirely on your specific university's formula. A generic, widely accepted formula in India is to multiply your CGPA by 10 (e.g., 8.0 CGPA = 80%), or by 9.5 for CBSE systems. You can use our dedicated 'CGPA to Percentage Calculator' to apply your specific university's conversion rule."
        }
      },
      {
        "@type": "Question",
        "name": "Is an 8.0 CGPA considered good for campus placements?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, an 8.0 CGPA is generally considered excellent for campus placements in India. Most top-tier IT companies (like TCS, Infosys, Wipro) and core engineering firms keep a minimum eligibility cutoff between 6.0 and 7.0 CGPA. Maintaining an 8.0 ensures you safely clear the initial screening round for almost all companies."
        }
      },
      {
        "@type": "Question",
        "name": "What does CBCS stand for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CBCS stands for Choice Based Credit System. Introduced by the University Grants Commission (UGC) in India, it allows students to choose core, elective, and skill-based courses. Each course is assigned specific 'credits', and grading is done on a 10-point scale, leading to the calculation of SGPA and CGPA."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online SGPA to CGPA Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Navigating the modern Indian higher education system means becoming highly familiar with the <strong>Choice Based Credit System (CBCS)</strong>. Under this uniform grading system introduced by the UGC, traditional percentage marks have been replaced by a 10-point grading scale. Whether you are pursuing a B.Tech, B.Sc, B.Com, or BA degree, your academic results are now delivered in two primary formats: <strong>SGPA</strong> and <strong>CGPA</strong>.
        </p>
        <p className="mb-4">
          Every six months, when your semester results are declared, your mark sheet proudly displays your SGPA (Semester Grade Point Average). However, when you apply for campus placements, off-campus internships, educational loans, or higher studies (like MS, MBA, or M.Tech), recruiters and admission committees rarely ask for a single semester's score. They require your <strong>CGPA (Cumulative Grade Point Average)</strong>—the grand aggregate of your entire academic journey up to that point.
        </p>
        <p className="mb-4">
          Many students find themselves staring at a pile of 4, 6, or 8 separate semester mark sheets, wondering how to combine them accurately into one single, official CGPA. The confusion deepens because universities utilize "course credits," meaning some semesters carry more mathematical weight than others. Calculating this manually on paper can lead to rounding errors, which might unfortunately cost you eligibility for a strict corporate placement drive.
        </p>
        <p className="mb-4">
          Our free online <strong>SGPA to CGPA Calculator</strong> is engineered to solve this exact problem instantly. Designed explicitly for Indian university students, this tool supports both the simple average method and the highly accurate credit-weighted formula. Simply input your semester scores, and let our algorithm generate a perfectly accurate, resume-ready final CGPA.
        </p>
      </section>

      {/* --- SGPA VS CGPA --- */}
      <section className="bg-indigo-50/30 p-8 rounded-2xl border border-indigo-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">SGPA vs CGPA: Understanding the Difference</h2>
        <p className="mb-6">
          Before calculating, it is crucial to understand exactly what these two metrics represent and why both exist on your university transcripts.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
            <thead className="text-gray-900 bg-indigo-50">
              <tr>
                <th className="p-4 border-b font-bold text-base">Feature</th>
                <th className="p-4 border-b font-bold text-base">SGPA (Semester)</th>
                <th className="p-4 border-b font-bold text-base">CGPA (Cumulative)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-semibold text-gray-900">Full Form</td>
                <td className="p-4 border-b">Semester Grade Point Average</td>
                <td className="p-4 border-b">Cumulative Grade Point Average</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-semibold text-gray-900">Timeframe</td>
                <td className="p-4 border-b">Evaluates a single 6-month period.</td>
                <td className="p-4 border-b">Evaluates the entire duration of the degree.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-semibold text-gray-900">Primary Use</td>
                <td className="p-4 border-b">To track short-term academic improvement.</td>
                <td className="p-4 border-b">Used for final degree classification and placements.</td>
              </tr>
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="p-4 border-b font-semibold text-gray-900">Volatility</td>
                <td className="p-4 border-b">Highly volatile (can swing from 6.0 to 9.0 easily).</td>
                <td className="p-4 border-b">Highly stable (hard to change drastically after year 2).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the SGPA to CGPA Calculator</h2>
        <p className="mb-4">Our tool features a dynamic, user-friendly interface that adapts to your specific academic timeline. Follow these simple steps to generate your results:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Select the Number of Semesters</h3>
        <p className="mb-2 text-sm text-gray-600">Tell the calculator how far along you are in your degree.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Locate the <strong>"Number of Semesters"</strong> dropdown menu at the top of the calculator.</li>
          <li>Select the total number of semesters you have completed so far. For example, if you just finished your second year of engineering, select "4". If you are calculating your final B.Sc grade, select "6".</li>
          <li>The calculator will automatically generate the exact number of input rows you need.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Enter Your SGPA for Each Semester</h3>
        <p className="mb-2 text-sm text-gray-600">Provide your exact scores from your university mark sheets.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>In the rows labeled <strong>Semester 1, Semester 2, etc.</strong>, locate the <strong>"SGPA"</strong> input boxes.</li>
          <li>Carefully type in your exact grade point (e.g., 8.45, 7.2) up to two decimal places. Ensure you do not enter a value greater than 10.0, as the Indian CBCS scale caps at 10.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Enter Semester Credits (Optional but Recommended)</h3>
        <p className="mb-2 text-sm text-gray-600">Decide between a simple average or a highly precise weighted average.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Next to the SGPA box, you will see an input field for <strong>"Credits (Optional)"</strong>.</li>
          <li><strong>If you leave this blank:</strong> The calculator will use the <em>Simple Average Method</em>, treating every semester equally. This is great for a quick estimate.</li>
          <li><strong>If you enter credits:</strong> Check your mark sheet for the "Total Semester Credits" (usually a number between 18 and 26). Enter this number for each semester. The calculator will automatically switch to the highly accurate <em>Credit-Weighted Method</em>.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 4: View Your Official CGPA</h3>
        <p className="mb-3 text-sm text-gray-600">No "calculate" button needed—our tool processes data in real-time.</p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-gray-700 mb-4">
          <li>As you type your final digit, the large result box below will instantly update to show your exact <strong>Cumulative Grade Point Average (CGPA)</strong>.</li>
          <li>You can confidently copy this value directly onto your resume or placement application portals.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Behind the Calculation</h2>
        <p className="mb-6">
          Transparency is key when dealing with academics. How exactly is your final grade determined? Depending on whether you provided your semester credits, our calculator utilizes one of the following two universal formulas approved by Indian educational boards.
        </p>
        
        <div className="space-y-6">
          {/* Formula 1 */}
          <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 1: The Simple Average Formula (Without Credits)</h3>
            <p className="text-sm mb-3 text-gray-700">
              If your university assigns the exact same number of credits to every single semester (e.g., every semester is strictly 20 credits), or if you simply want a fast, rough estimate of your standing, the simple average method is used. It treats the academic weight of Semester 1 exactly the same as Semester 8.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-blue-800 font-bold text-center tracking-wide shadow-sm">
              CGPA = (SGPA₁ + SGPA₂ + ... + SGPAₙ) ÷ Total Number of Semesters
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Note: This is the default method used by the calculator if the "Credits" boxes are left empty.</p>
          </div>

          {/* Formula 2 */}
          <div className="bg-emerald-50/40 p-6 rounded-2xl border border-emerald-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Method 2: The Credit-Weighted Formula (Highly Accurate)</h3>
            <p className="text-sm mb-3 text-gray-700">
              This is the official, strict formula used by major technical universities like VTU, Anna University, AKTU, and IITs/NITs. In reality, semesters vary in difficulty. A semester with heavy core subjects and multiple labs might be worth 24 credits, while a final semester dedicated solely to a project might only be worth 12 credits. This formula multiplies your grade by the credit weight to ensure fair evaluation.
            </p>
            <div className="bg-white p-4 rounded-xl border border-emerald-200 font-mono text-sm md:text-base text-emerald-800 font-bold text-center shadow-sm">
              CGPA = [(SGPA₁ × C₁) + (SGPA₂ × C₂) + ... + (SGPAₙ × Cₙ)] ÷ (C₁ + C₂ + ... + Cₙ)
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Where 'C' represents the Total Credits for that specific semester.</p>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Calculation Scenarios</h2>
        <p className="mb-6">To demonstrate how much credits can influence your final score, let us look at two practical examples of Indian college students calculating their grades.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: First-Year BCA Student (Simple Average)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Rahul has just completed his first year (2 semesters) of a Bachelor of Computer Applications program. He doesn't remember his semester credits, so he opts for the quick Simple Average method to update his LinkedIn profile.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Semester 1 SGPA:</strong> 8.2</li>
              <li><strong>Semester 2 SGPA:</strong> 7.6</li>
              <li><strong>Calculation:</strong> (8.2 + 7.6) ÷ 2</li>
              <li><strong>Math:</strong> 15.8 ÷ 2</li>
              <li><strong>Final Estimated CGPA:</strong> 7.90</li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: Final-Year B.Tech Student (Credit-Weighted)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Priya is applying for an off-campus engineering drive at a top MNC. She has completed 4 semesters of her degree. Because her university has heavy credit variations between semesters, she uses the Credit-Weighted method for absolute accuracy.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Sem 1:</strong> SGPA = 8.0, Credits = 20</li>
              <li><strong>Sem 2:</strong> SGPA = 7.5, Credits = 24</li>
              <li><strong>Sem 3:</strong> SGPA = 9.0, Credits = 22</li>
              <li><strong>Sem 4:</strong> SGPA = 8.5, Credits = 18</li>
              <li><strong>Calculation Step 1 (Multiply SGPA by Credits):</strong> <br/>(8.0 × 20) = 160 <br/>(7.5 × 24) = 180 <br/>(9.0 × 22) = 198 <br/>(8.5 × 18) = 153</li>
              <li><strong>Calculation Step 2 (Sum of Products):</strong> 160 + 180 + 198 + 153 = 691</li>
              <li><strong>Calculation Step 3 (Sum of Total Credits):</strong> 20 + 24 + 22 + 18 = 84</li>
              <li><strong>Final Division:</strong> 691 ÷ 84</li>
              <li><strong>Final Exact CGPA:</strong> 8.23</li>
            </ul>
            <p className="mt-4 text-sm text-emerald-800 font-semibold bg-emerald-50 inline-block px-4 py-2 rounded-lg border border-emerald-100">Insight: If Priya had used the Simple Average method, her CGPA would have been 8.25. The heavier weight of her lower-scoring 2nd semester (24 credits) pulled her true weighted CGPA down slightly to 8.23.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the difference between SGPA and CGPA?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              SGPA (Semester Grade Point Average) represents your academic performance for a single semester (typically 6 months). CGPA (Cumulative Grade Point Average) is the combined average of your academic performance across all completed semesters in your entire course. SGPA is short-term, while CGPA is your final graduation score.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can I calculate CGPA without knowing my semester credits?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. If your university uses a standard distribution where every semester has roughly the same weight, or if you simply do not know your credits, you can use the 'Simple Average Method' in our calculator by leaving the credit fields empty. Just add all your SGPAs together and divide by the total number of semesters. This gives a very close estimate.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why is the Credit-Weighted method more accurate?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Not all semesters are equal in curriculum density. For example, Semester 1 might have 24 total credits due to heavy core subjects and labs, while an internship-heavy Semester 8 might only have 12 credits. The Credit-Weighted method multiplies your SGPA by that semester's specific credits, ensuring that heavier, more difficult semesters have a proportionately larger impact on your final official CGPA.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How do I convert my final CGPA into a percentage?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Converting CGPA to percentage depends entirely on your specific university's statutory formula. A generic, widely accepted default formula in India is to multiply your CGPA by 10 (e.g., 8.0 CGPA = 80%), or by 9.5 for CBSE board systems. For perfect accuracy, we highly recommend using our dedicated 'CGPA to Percentage Calculator' to apply your specific board's rules.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Is an 8.0 CGPA considered good for campus placements?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, an 8.0 CGPA is generally considered excellent for campus placements across India. Most top-tier IT companies (like TCS, Infosys, Cognizant, Wipro) and core engineering firms enforce a minimum eligibility cutoff ranging between 6.0 and 7.0 CGPA. Maintaining a solid 8.0 ensures you safely clear the automated resume screening round for almost all corporate placement drives.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What does CBCS stand for?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              CBCS stands for Choice Based Credit System. Introduced comprehensively by the University Grants Commission (UGC) in India, it is an academic model that allows students to choose core, elective, and skill-based open courses. Each selected course is assigned specific 'credits', and student performance grading is done on a 10-point scale, ultimately leading to the generation of your SGPA and CGPA.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Student & Academic Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Ensure your academic data is perfectly calculated and your study time is fully optimized with our suite of free online student tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/cgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">CGPA to Percentage</a>
          <a href="/calculator/education/attendance" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Attendance Calculator</a>
          <a href="/calculator/education/marks-percentage" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Marks to Percentage Calculator</a>
          <a href="/calculator/education/education-loan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Education Loan EMI</a>
          <a href="/calculator/education/gate-score" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">GATE Score Calculator</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/study-plan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Study Planner</a>
          <a href="/calculator/education/time-work" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Time & Work Calculator</a>
          <a href="/calculator/education/typing" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Typing Speed Calculator (WPM)</a>
          <a href="/calculator/education/typing-test" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Test</a>
          <a href="/calculator/education/word-counter" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Word & Character Counter</a>
        </div>
      </section>
      
    </div>
  );
}