import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Free Study Plan Calculator | Exam Prep Schedule Maker
  2. META DESCRIPTION: Master your exam preparation with our free Study Plan Calculator. Easily reverse-engineer daily study targets, revision days, and hours per chapter for your exams.
  3. URL SLUG: /study-plan-calculator
  4. H1 TITLE: Free Online Study Plan Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Study plan calculator
      - Secondary keywords: exam study schedule maker, daily study target calculator, revision planner, how to make a study plan, student timetable calculator, reverse engineer study plan, syllabus tracker, study hours calculator, upsc study planner, jee preparation schedule.
      - Long-tail keywords: how to calculate daily study targets for exams, best study plan calculator for board exams in india, how many chapters to study per day, create a reverse engineered study plan, free online tool to plan study schedule.
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
        "name": "How much time should I allocate for revision before an exam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For highly competitive Indian exams like UPSC, NEET, or JEE, experts recommend keeping aside at least 15% to 20% of your total remaining days exclusively for revision and mock tests. For regular school or university semester exams, a 10% buffer is usually sufficient to review core concepts."
        }
      },
      {
        "@type": "Question",
        "name": "What if I miss my daily study target?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Missing a day is completely normal. Do not panic. Simply return to the Study Plan Calculator, update the 'Total Days Remaining' to reflect the current date, and update your 'Total Units' to the chapters you still have left. The calculator will automatically recalibrate your new daily targets to keep you on track."
        }
      },
      {
        "@type": "Question",
        "name": "Should I study based on hours or chapters?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It is always better to study based on task completion (chapters or units) rather than just clocking hours. The Study Plan Calculator bridges the gap between both methods by telling you exactly how many chapters you need to finish each day, and approximately how many hours you have available to dedicate to each specific chapter."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for non-academic goals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! While it is designed for exam syllabuses, you can use this tool to pace out reading a large book (pages per day), completing an online course (modules per day), or any project that requires finishing a set number of units within a strict deadline."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours of daily study is optimal without burning out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cognitive science suggests that 6 to 8 hours of intense, focused studying is the maximum sustainable limit for most students. Pushing beyond 10 hours regularly often leads to diminishing returns and severe burnout. It is highly recommended to use techniques like the Pomodoro method (50 minutes of study, 10 minutes of rest) to maintain high efficiency."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Study Plan Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          The biggest challenge in exam preparation is rarely the extreme difficulty of the subjects themselves; rather, it is the sheer, overwhelming volume of the syllabus. Whether you are facing standard university examinations, rigorous Class 12th Board Exams, or highly competitive Indian entrance tests like UPSC CSE, JEE Advanced, NEET, or CA Finals, managing your time is half the battle won.
        </p>
        <p className="mb-4">
          When confronted with a mountain of textbooks and a ticking clock, most students experience "procrastination by overwhelm." You look at the massive pile of books, feel intense anxiety about where to even begin, and end up wasting precious days doing nothing. Manual planning often fails because human beings are naturally optimistic about how much they can achieve in a single day, leading to unrealistic timetables that are abandoned within forty-eight hours.
        </p>
        <p className="mb-4">
          Our free <strong>Study Plan Calculator</strong> is a strategic tool designed to eliminate this anxiety through the power of mathematical reverse engineering. Instead of blindly guessing how much you need to study today, this calculator works backward from your exam date. By accounting for your total syllabus size, your daily available study hours, and a mandatory buffer period for essential final revisions, it gives you a precise, actionable, and mathematically grounded daily target.
        </p>
        <p className="mb-4">
          This tool transforms a terrifying, massive syllabus into small, highly manageable daily milestones. By knowing exactly how many chapters you need to finish each day—and exactly how much time you can afford to spend on each unit—you regain total control over your preparation timeline.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Study Plan Calculator</h2>
        <p className="mb-6">
          To generate a foolproof, stress-free schedule, you need to provide the calculator with your exact parameters. The inputs are straightforward, but accuracy is key to creating a realistic roadmap. Follow this step-by-step guide to get your personalized daily targets:
        </p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Enter Your Total Units</h3>
        <p className="mb-2 text-sm text-gray-600">This defines the actual volume of the task ahead of you.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Count the total number of chapters, subject modules, or pages you need to cover before the exam.</li>
          <li>For example, if Physics has 15 chapters, Chemistry has 14, and Math has 16, your <strong>Total Units</strong> input will be 45.</li>
          <li>Consistency matters: If you measure by chapters, stick to chapters. If you measure by pages, count the total pages.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Input the Total Days Remaining</h3>
        <p className="mb-2 text-sm text-gray-600">This establishes your absolute deadline.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Count the exact number of days from today until the date of your very first examination.</li>
          <li>Do not include the exam day itself. If your exam is precisely one month away, enter 30 in the <strong>Total Days</strong> field.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Select Your Revision Buffer (From Dropdown)</h3>
        <p className="mb-2 text-sm text-gray-600">This is the most critical feature to prevent last-minute panic.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Never study new material right up to the day of the exam. You must dedicate time to revising what you have already learned.</li>
          <li>Use the dropdown menu to select your desired <strong>Revision Buffer Percentage</strong>. Options typically range from 10% to 30%.</li>
          <li>We highly recommend choosing <strong>20%</strong>. This means if you have 100 days until the exam, the calculator will automatically reserve the last 20 days purely for mock tests and revision, leaving you 80 days to complete the core syllabus.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 4: Estimate Daily Study Hours</h3>
        <p className="mb-2 text-sm text-gray-600">This dictates the depth of your daily study sessions.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Be radically honest here. Input the number of hours of <em>highly focused, uninterrupted</em> studying you can realistically achieve every single day.</li>
          <li>If you have school, college, or an office job, your realistic number might be 4 to 5 hours. If you are preparing full-time, it might be 8 to 10 hours. Do not input an impossible number like 16 hours, as it will break the practicality of your plan.</li>
        </ul>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-6">
          <p className="text-sm text-indigo-900 font-medium">
            <strong>Understanding the Output:</strong> Once you hit calculate, the tool instantly generates your <em>Actual Study Days</em> (total days minus revision days), your <em>Daily Unit Target</em> (how much to study today to finish on time), and your <em>Time per Unit</em> (how many hours you can afford to spend on a single chapter).
          </p>
        </div>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematics Behind the Planner</h2>
        <p className="mb-6">
          While our calculator handles all the complex logic instantly, understanding the core planning formula helps you realize why this strategy is so highly effective. The math ensures that your revision period is safely protected and that your daily workload is perfectly balanced.
        </p>
        
        <div className="space-y-6">
          <div className="bg-teal-50/40 p-6 rounded-2xl border border-teal-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formula 1: Determining the Daily Target</h3>
            <p className="text-sm mb-4 text-gray-700">
              The foundational formula prevents you from ignoring your revision. By subtracting your revision days from the total days *before* we divide the syllabus, we mathematically guarantee that you will finish the syllabus early.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-teal-800 font-bold text-center tracking-wide shadow-sm overflow-x-auto">
              Daily Target = Total Units &divide; [ Total Days &times; (1 - Revision%) ]
            </div>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-600 mt-4">
              <li><strong>Total Units:</strong> The chapters, topics, or pages you must learn.</li>
              <li><strong>Total Days:</strong> Total time available until the exam.</li>
              <li><strong>Revision%:</strong> The buffer you selected (e.g., 0.20 for 20%).</li>
              <li><strong>[ Total Days &times; (1 - Revision%) ]:</strong> This calculates your actual, effective 'Active Study Days'.</li>
            </ul>
          </div>

          <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Formula 2: Calculating Time Allocation Per Unit</h3>
            <p className="text-sm mb-4 text-gray-700">
              Knowing you have to study "1.5 chapters a day" is only half the picture. You also need to know how deep you can go into each chapter. This formula calculates your time allowance per unit based on your daily commitment.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-blue-800 font-bold text-center shadow-sm overflow-x-auto">
              Time Per Unit = (Daily Study Hours &times; Active Study Days) &divide; Total Units
            </div>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-600 mt-4">
              <li><strong>Daily Study Hours:</strong> Your committed focus time every day.</li>
              <li><strong>Active Study Days:</strong> The days calculated in Formula 1.</li>
              <li>This formula prevents you from spending 10 hours perfectly mastering chapter one, only to run out of time and fail chapter twenty completely.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Calculation Scenarios</h2>
        <p className="mb-6">
          To illustrate how transformative reverse engineering can be, let us examine three entirely different real-life scenarios faced by Indian students, ranging from long-term marathons to short-term panic crunches.
        </p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: UPSC CSE Prelims (The Marathon)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Rahul is preparing for the UPSC Civil Services Examination. He has counted roughly <strong>120 broad topics</strong> across History, Polity, Geography, Economy, etc. His exam is exactly <strong>150 days</strong> away. Knowing the vastness of the syllabus, he selects a <strong>20% revision buffer</strong> from the dropdown and commits to <strong>8 hours</strong> of daily study.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Revision Days Calculated:</strong> 20% of 150 days = 30 Days reserved purely for mock exams.</li>
              <li><strong>Active Study Days Remaining:</strong> 150 - 30 = 120 Days to finish new material.</li>
              <li><strong>Daily Target:</strong> 120 Topics &divide; 120 Days = <strong>1 Topic per day</strong>.</li>
              <li><strong>Time Per Topic:</strong> (8 hours/day &times; 120 days) &divide; 120 topics = <strong>8 Hours per topic</strong>.</li>
            </ul>
            <p className="mt-3 text-sm text-indigo-800 font-medium">Result: Rahul's anxiety vanishes. He knows that as long as he thoroughly completes just one topic every single day in his 8-hour window, he will finish the entire massive UPSC syllabus a full month before the exam.</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: CBSE Class 12 Boards (The 30-Day Crunch)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Priya woke up late to her exam preparation. Her Class 12 Physics board exam is just <strong>30 days</strong> away. She has <strong>15 chapters</strong> to master. Because time is terribly short, she chooses a tighter <strong>15% revision buffer</strong> and pushes herself to study Physics for <strong>4 hours</strong> a day (balancing it with other subjects).
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Revision Days Calculated:</strong> 15% of 30 days = 4.5 Days (Rounded up to 5 days for safety).</li>
              <li><strong>Active Study Days Remaining:</strong> 30 - 5 = 25 Days.</li>
              <li><strong>Daily Target:</strong> 15 Chapters &divide; 25 Days = <strong>0.6 Chapters per day</strong>.</li>
              <li><strong>Time Per Chapter:</strong> (4 hours/day &times; 25 days) &divide; 15 chapters = <strong>6.66 Hours per chapter</strong>.</li>
            </ul>
            <p className="mt-3 text-sm text-emerald-800 font-medium">Result: Priya realizes she doesn't need to finish a whole chapter every day. She can comfortably spread a single chapter across a day and a half, giving her over 6.5 hours of deep focus per chapter, and still have 5 days left over for sample papers.</p>
          </div>

          {/* Example 3 */}
          <div className="border-l-4 border-rose-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 3: NEET UG Physics & Chemistry (Volume Challenge)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Aman is prepping for NEET. Between Physics and Chemistry, he has <strong>60 major chapters</strong>. The exam is <strong>90 days</strong> away. He opts for a standard <strong>20% revision buffer</strong> to focus on previous year questions (PYQs) later, and allocates <strong>6 hours</strong> daily.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Revision Days Calculated:</strong> 20% of 90 days = 18 Days.</li>
              <li><strong>Active Study Days Remaining:</strong> 90 - 18 = 72 Days.</li>
              <li><strong>Daily Target:</strong> 60 Chapters &divide; 72 Days = <strong>0.83 Chapters per day</strong>.</li>
              <li><strong>Time Per Chapter:</strong> (6 hours &times; 72 days) &divide; 60 chapters = <strong>7.2 Hours per chapter</strong>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- PRO TIPS --- */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-yellow-200 mt-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <h3 className="text-xl font-bold text-gray-900">Expert Tips for Ultimate Exam Success</h3>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700 leading-relaxed">
            A calculator gives you the map, but you still have to drive the car. To maximize the efficiency of your newly generated study plan, integrate these scientifically backed cognitive techniques into your daily routine:
          </p>
          <ul className="list-disc pl-6 space-y-3 text-sm text-gray-800">
            <li><strong>The 50/10 Rule (Pomodoro):</strong> Do not study continuously for 3 hours; your brain's retention rate plummets after 60 minutes. Study with intense, phone-free focus for 50 minutes, then physically walk away from your desk for a 10-minute break. This resets your cognitive fatigue.</li>
            <li><strong>Active Recall over Passive Reading:</strong> Simply highlighting textbook lines is an illusion of competence. After finishing a topic, close the book, stare at a blank wall, and try to explain the concept out loud. If you stumble, you don't know it yet.</li>
            <li><strong>Eat The Frog First:</strong> Use your highest energy hours—which for most people is early morning—to tackle the hardest, most complex chapters in your daily target. Leave the easier, familiar topics for the sluggish afternoon hours.</li>
            <li><strong>Spaced Repetition:</strong> Use Sunday evenings strictly for a "Weekly Review." Quickly skim through everything you learned from Monday to Saturday to lock the information permanently into your long-term memory.</li>
          </ul>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How much time should I allocate for revision before an exam?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For highly competitive Indian exams like UPSC, NEET, or JEE, experts recommend keeping aside at least 15% to 20% of your total remaining days exclusively for revision and mock tests. For regular school or university semester exams, a 10% buffer is usually sufficient to review core concepts.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What if I miss my daily study target?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Missing a day is completely normal. Do not panic. Simply return to the Study Plan Calculator, update the 'Total Days Remaining' to reflect the current date, and update your 'Total Units' to the chapters you still have left. The calculator will automatically recalibrate your new daily targets to keep you on track.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Should I study based on hours or chapters?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              It is always better to study based on task completion (chapters or units) rather than just clocking hours. The Study Plan Calculator bridges the gap between both methods by telling you exactly how many chapters you need to finish each day, and approximately how many hours you have available to dedicate to each specific chapter.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can I use this calculator for non-academic goals?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! While it is designed for exam syllabuses, you can use this tool to pace out reading a large book (pages per day), completing an online course (modules per day), or any project that requires finishing a set number of units within a strict deadline.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How many hours of daily study is optimal without burning out?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Cognitive science suggests that 6 to 8 hours of intense, focused studying is the maximum sustainable limit for most students. Pushing beyond 10 hours regularly often leads to diminishing returns and severe burnout. It is highly recommended to use techniques like the Pomodoro method (50 minutes of study, 10 minutes of rest) to maintain high efficiency.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 mt-14">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Educational Tools</h3>
        <p className="text-sm mb-6 text-gray-600">Ensure your academic progress is fully optimized and perfectly tracked with our suite of free online student calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/education/attendance" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Attendance Calculator</a>
          <a href="/calculator/education/cgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">CGPA to Percentage</a>
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">SGPA to CGPA Converter</a>
          <a href="/calculator/education/education-loan" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Education Loan EMI Calculator</a>
          <a href="/calculator/education/gate-score" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">GATE Score Calculator</a>
          <a href="/calculator/education/marks-percentage" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Marks to Percentage Calculator</a>
          <a href="/calculator/education/neet-rank" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">NEET Rank Predictor</a>
          <a href="/calculator/education/time-work" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Time and Work Calculator</a>
          <a href="/calculator/education/typing" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Speed Calculator</a>
          <a href="/calculator/education/typing-test" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Typing Test Tool</a>
          <a href="/calculator/education/word-counter" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">Word Counter</a>
        </div>
      </section>
    </div>
  );
}