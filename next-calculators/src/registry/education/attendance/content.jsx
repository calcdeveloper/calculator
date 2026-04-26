import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Attendance Calculator Online | Check 75% Target & Bunking
  2. META DESCRIPTION: Free online attendance calculator for Indian college students. Calculate your current percentage, find out how many classes to attend, or how many you can bunk.
  3. URL SLUG: /attendance-calculator
  4. H1 TITLE: Free Online Attendance Calculator for Students
  
  11. SEO KEYWORDS:
      - Primary keyword: Attendance calculator India
      - Secondary keywords: calculate attendance percentage, bunk calculator, 75 percent attendance calculator, college attendance tracker, classes needed to reach 75, how many classes can I miss, attendance percentage formula, student attendance calculator online.
      - Long-tail keywords: how to calculate 75 percent attendance in college, how many classes to attend to get 75 attendance, attendance calculator for DU VTU JNTU, calculate how many classes I can bunk safely.
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
        "name": "Is 75% attendance strictly mandatory in all Indian colleges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as per the University Grants Commission (UGC) and various regulatory bodies like AICTE, a minimum of 75% attendance is generally mandatory for students to be eligible to appear for their semester or final examinations. Some universities may offer a 10% relaxation for valid medical reasons."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my attendance falls below the required target?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your attendance falls below the university's mandated cut-off (usually 75%), you may face severe consequences such as being detained from writing your end-semester exams, losing out on internal assessment marks, or being required to pay a condonation fee if the shortage is minor."
        }
      },
      {
        "@type": "Question",
        "name": "Does medical leave automatically count as present?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, taking a medical leave does not mark you as 'present' in the attendance register. However, if you submit a valid medical certificate, the university administration may lower your personal attendance target (e.g., from 75% down to 65%) as a special condonation. You must confirm this with your specific college guidelines."
        }
      },
      {
        "@type": "Question",
        "name": "How does the 'classes to bunk' calculation work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your current attendance is higher than your target (e.g., you are at 85% and need 75%), the calculator finds out how many future classes can be added to the 'Total Classes' count without adding to your 'Attended Classes' count, until the overall ratio drops exactly to your 75% target."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for school attendance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely! While this tool is highly popular among college and university students, the mathematical formulas for calculating percentages and required days remain exactly the same for high school students tracking their annual attendance targets."
        }
      },
      {
        "@type": "Question",
        "name": "What if I want to target 80% or 85% instead of 75%?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our calculator is fully customizable. While 75% is the default because it is the national standard, you can manually type in 80%, 85%, or any other target percentage into the 'Target Attendance' box to calculate your specific requirements."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Attendance Calculator for Students</h1>
        <p className="mb-4 text-lg text-gray-600">
          For millions of students across India, managing college attendance is an intricate balancing act. Between preparing for competitive exams, completing rigorous assignments, participating in college fests, securing internships, and occasionally just needing a mental health break, attending every single lecture is practically impossible. This brings us to the most dreaded rule in the Indian education system: the mandatory <strong>75% attendance criteria</strong>.
        </p>
        <p className="mb-4">
          Governed by the University Grants Commission (UGC) and enforced strictly by major institutions like Delhi University (DU), Visvesvaraya Technological University (VTU), Anna University, and various IITs and NITs, failing to meet the 75% mark can have severe consequences. Students who fall short are frequently detained, denied their admit cards for semester exams, or penalized heavily in their internal assessment marks. 
        </p>
        <p className="mb-4">
          Because of these strict regulations, "bunking" classes must be done strategically rather than recklessly. You need to know exactly where your attendance stands at any given moment. Are you dangerously close to the detention zone, requiring you to attend the next two weeks of classes without fail? Or do you have a comfortable buffer of 85%, allowing you to safely skip a few morning lectures to study for an upcoming placement drive?
        </p>
        <p className="mb-4">
          Our free online <strong>Attendance Calculator</strong> takes the anxiety out of college life. It is not just a simple percentage calculator; it is an intelligent planning tool. By entering your current class stats, it instantly tells you your current standing, exactly how many upcoming classes you must attend to escape the danger zone, or precisely how many classes you can safely miss ("bunk") while still keeping your academics completely secure.
        </p>
      </section>

      {/* --- CONSEQUENCES OF LOW ATTENDANCE --- */}
      <section className="bg-red-50/30 p-6 rounded-xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The True Cost of Short Attendance in Indian Universities</h2>
        <p className="mb-4">
          Why is it so important to track your classes meticulously? In the Indian higher education system, the penalties for "short attendance" are not just a slap on the wrist. They can actively delay your graduation and affect your career trajectory.
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Exam Detention (Year Back):</strong> The most severe and common punishment for dropping below the 75% mark (or 65% with a valid medical certificate) is being barred from writing the end-semester examinations. This often forces students to repeat the entire semester or year, delaying their graduation and placements.
          </li>
          <li>
            <strong>Loss of Internal Marks:</strong> Many universities allocate a specific percentage of internal assessment marks directly to attendance. Dropping from 85% to 70% might not just risk detention, but it could cost you 5 critical internal marks, lowering your overall CGPA or SGPA significantly.
          </li>
          <li>
            <strong>Condonation Fees:</strong> If your attendance is hovering in the borderline "gray zone" (usually between 65% and 74%), colleges may allow you to write the exams only after paying a hefty "condonation fee" or fine, which is an unnecessary financial burden on students and parents.
          </li>
          <li>
            <strong>Loss of Scholarships and Hostels:</strong> Certain merit-based scholarships, government fee-reimbursement schemes, and campus hostel allotments require students to maintain a spotless academic and attendance record.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Attendance / Bunk Calculator</h2>
        <p className="mb-4">Our tool is designed to be the ultimate companion for college students. It requires no sign-ups and works instantly on your smartphone. Follow these simple steps to analyze your attendance standing:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Classes Conducted</h3>
        <p className="mb-2 text-sm text-gray-600">This is the total number of lectures that have happened so far.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Check your university portal, ERP system, or ask your class representative for the total number of classes held to date.</li>
          <li>Enter this number into the <strong>"Total Classes Conducted"</strong> input box.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter Classes Attended</h3>
        <p className="mb-2 text-sm text-gray-600">This is how many times you were marked "Present."</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Enter the exact number of lectures you have successfully attended in the <strong>"Total Classes Attended"</strong> box.</li>
          <li><em>Note: Make sure this number is smaller than or equal to the total classes conducted.</em></li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 3: Set Your Target Percentage</h3>
        <p className="mb-2 text-sm text-gray-600">Define the safety mark you wish to hit.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>By default, the calculator is pre-set to <strong>75%</strong> as it is the UGC standard across India.</li>
          <li>However, if your specific college requires 80%, or if you have a medical certificate lowering your requirement to 65%, simply type your new target into the <strong>"Target Attendance (%)"</strong> box.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 4: Read Your Action Plan</h3>
        <p className="mb-3 text-sm text-gray-600">The calculator instantly processes your data and provides an actionable output. It will tell you one of three things:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>Your Current Percentage:</strong> Exactly where you stand right now.</li>
          <li><strong>The Bunking Allowance:</strong> If you are above your target, it tells you exactly how many upcoming classes you can skip without dropping below your target percentage.</li>
          <li><strong>The Catch-Up Requirement:</strong> If you are in the danger zone, it calculates precisely how many consecutive classes you must attend without taking a single day off to reach your target.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Behind the Calculator</h2>
        <p className="mb-6">
          While finding a basic percentage is easy, calculating future class requirements involves a bit of algebra because every future class you attend changes both the numerator (attended) and the denominator (total). Here is a transparent look at the exact formulas our tool uses to keep your academics safe.
        </p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/40 p-6 rounded-xl border border-blue-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formula 1: Calculating Current Attendance Percentage</h3>
            <p className="text-sm mb-3 text-gray-700">This is standard percentage math. It evaluates your historical performance.</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 font-bold text-center">
              Current % = (Attended Classes ÷ Total Classes) × 100
            </div>
          </div>

          <div className="bg-red-50/40 p-6 rounded-xl border border-red-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formula 2: The Catch-Up Calculation (When you are short)</h3>
            <p className="text-sm mb-3 text-gray-700">If your current percentage is below your target, you need to know how many more classes to attend. Let "X" be the number of classes you need to attend consecutively. Both your attended count and total count will increase by "X".</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 font-bold text-center">
              Classes Needed = [(Target % × Total Classes) - (100 × Attended Classes)] ÷ (100 - Target %)
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Note: The result is always rounded up to the next whole number, because you cannot attend a fraction of a lecture.</p>
          </div>

          <div className="bg-green-50/40 p-6 rounded-xl border border-green-100 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formula 3: The Safe Bunk Calculation (When you have a buffer)</h3>
            <p className="text-sm mb-3 text-gray-700">If your attendance is comfortably above the target, you can afford to miss classes. Let "Y" be the classes you bunk. Your total classes will increase by "Y", but your attended classes will remain exactly the same.</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800 font-bold text-center">
              Classes You Can Miss = [(100 × Attended Classes) - (Target % × Total Classes)] ÷ Target %
            </div>
            <p className="mt-3 text-xs text-gray-500 text-center">Note: The result is always rounded down to ensure you don't accidentally dip below the required fraction.</p>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life College Scenarios</h2>
        <p className="mb-6">To fully grasp how valuable this strategic planning can be, let us explore three highly relatable scenarios faced by university students in India.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-red-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: The Danger Zone (Need to Catch Up)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Rahul is an engineering student at VTU. He fell sick and missed a lot of early morning classes. So far, there have been <strong>45 total classes</strong>, but Rahul has only attended <strong>28 classes</strong>. His target is <strong>75%</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700">
              <li><strong>Current Percentage:</strong> (28 ÷ 45) × 100 = <strong>62.22%</strong>. He is far below the requirement.</li>
              <li><strong>Applying the Catch-Up Formula:</strong> <br/>[(75 × 45) - (100 × 28)] ÷ (100 - 75)</li>
              <li>[3375 - 2800] ÷ 25</li>
              <li>575 ÷ 25 = <strong>23</strong></li>
            </ul>
            <p className="mt-3 text-sm text-red-700 font-semibold bg-red-50 inline-block px-3 py-1 rounded">Conclusion: Rahul must attend the next 23 classes consecutively to hit exactly 75%.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-green-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: The Safe Zone (Planning a Bunk)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Priya is studying Arts at Delhi University. She has been highly disciplined, attending <strong>55 out of 60 classes</strong>. She wants to go home for Diwali a few days early and wants to know how many upcoming classes she can safely skip while maintaining her <strong>75%</strong> target.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700">
              <li><strong>Current Percentage:</strong> (55 ÷ 60) × 100 = <strong>91.66%</strong>. She has a massive buffer.</li>
              <li><strong>Applying the Bunk Formula:</strong> <br/>[(100 × 55) - (75 × 60)] ÷ 75</li>
              <li>[5500 - 4500] ÷ 75</li>
              <li>1000 ÷ 75 = <strong>13.33</strong></li>
            </ul>
            <p className="mt-3 text-sm text-green-700 font-semibold bg-green-50 inline-block px-3 py-1 rounded">Conclusion: Priya can safely bunk the next 13 classes. Even if the total classes reach 73, her 55 attended classes will keep her at 75.3%.</p>
          </div>

          {/* Example 3 */}
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 3: The Overachiever (Targeting Internal Marks)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Arjun's college gives 5 extra internal marks to students who maintain over <strong>85% attendance</strong>. Currently, <strong>40 classes</strong> have happened, and he has attended <strong>32</strong>.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700">
              <li><strong>Current Percentage:</strong> (32 ÷ 40) × 100 = <strong>80.00%</strong>. He meets the basic passing criteria but is short of the bonus marks target.</li>
              <li><strong>Setting a custom target:</strong> He enters 85% into the calculator's Target field.</li>
              <li><strong>Applying the Catch-Up Formula:</strong> <br/>[(85 × 40) - (100 × 32)] ÷ (100 - 85)</li>
              <li>[3400 - 3200] ÷ 15</li>
              <li>200 ÷ 15 = <strong>13.33</strong></li>
            </ul>
            <p className="mt-3 text-sm text-blue-700 font-semibold bg-blue-50 inline-block px-3 py-1 rounded">Conclusion: Arjun must attend the next 14 classes consecutively to pull his average up to 85% for those bonus marks.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Is 75% attendance strictly mandatory in all Indian colleges?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, as per the University Grants Commission (UGC) and various regulatory bodies like AICTE, a minimum of 75% attendance is generally mandatory for students to be eligible to appear for their semester or final examinations. Some universities may offer a 10% relaxation (bringing it down to 65%) for valid medical reasons or for students participating in national-level sports, but the baseline remains 75%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What happens if my attendance falls below the required target?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If your attendance falls below the university's mandated cut-off, you may face severe academic consequences. The most common punishment is being "detained," which means you will be barred from writing your end-semester exams for that particular subject (or all subjects). Additionally, you may lose out on internal assessment marks or be required to pay a condonation fee if the shortage is minor.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Does medical leave automatically count as present?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, taking a medical leave does not automatically mark you as 'present' in the attendance register. However, if you submit a valid medical certificate from a registered doctor, the university administration may lower your personal attendance target (for example, reducing your minimum requirement from 75% down to 65%) as a special condonation. You must confirm this procedure with your specific college guidelines.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How does the 'classes to bunk' calculation work?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If your current attendance is higher than your target (e.g., you are at 85% and only need 75%), the calculator figures out how much buffer you have. It calculates how many future classes can be added to the 'Total Classes' count without adding a single point to your 'Attended Classes' count, right up until the moment your overall ratio drops exactly to your 75% target threshold.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can I use this calculator for school attendance?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Absolutely! While this tool is highly popular among college and university students because of the semester system, the mathematical formulas for calculating percentages and required days remain exactly the same for high school students (CBSE, ICSE, State Boards) tracking their annual attendance targets to be eligible for board exams.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What if I want to target 80% or 85% instead of 75%?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Our attendance calculator is fully customizable to your specific needs. While 75% is pre-filled as the default because it is the national university standard, you can simply click on the 'Target Attendance' input box and manually type in 80%, 85%, or any other target percentage required by your professors to calculate your specific requirements.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-12">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Education & Student Tools</h3>
        <p className="text-sm mb-5 text-gray-600">Maximize your academic potential and manage your studies effectively with our suite of free tools for students:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/cgpa" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">CGPA Calculator</a>
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">CGPA to SGPA Converter</a>
          <a href="/calculator/education/marks-percentage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Marks to Percentage</a>
          <a href="/calculator/education/education-loan" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Education Loan EMI</a>
          <a href="/calculator/education/gate-score" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">GATE Score Calculator</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/study-plan" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Study Planner</a>
          <a href="/calculator/education/time-work" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Time & Work Calculator</a>
          <a href="/calculator/education/typing" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Typing Speed Calculator (WPM)</a>
          <a href="/calculator/education/typing-test" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Typing Speed Test (WPM)</a>
          <a href="/calculator/education/word-counter" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Word & Character Counter</a>
        </div>
      </section>
      
    </div>
  );
}