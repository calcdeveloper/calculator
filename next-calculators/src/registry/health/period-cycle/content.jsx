import React from "react";


export default function Content() {
  // --- SEO DATA REFERENCE ---
  // SEO TITLE: Accurate Period & Menstrual Cycle Calculator India
  // META DESCRIPTION: Track your menstrual cycle, predict your next period, and calculate your exact ovulation and fertile window with our free online period calculator.
  // URL SLUG: /period-calculator-india
  // PRIMARY KEYWORD: period calculator india
  // SECONDARY KEYWORDS: menstrual cycle tracker, next period calculator, safe days calculator, ovulation date calculator, period tracker online, calculate safe period, next period predictor, fertile window calculator, irregular periods calculator
  // LONG-TAIL KEYWORDS: how to calculate next period date, best period tracker online india, safe period calculator to avoid pregnancy, calculate ovulation day for 28 day cycle

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a normal menstrual cycle length?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A healthy, normal menstrual cycle typically ranges between 21 and 35 days. The global average is around 28 days. Cycle lengths can vary slightly from month to month based on factors like stress, diet, and overall health."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get pregnant right after my period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is possible, though less likely. If you have a short menstrual cycle (e.g., 21 or 22 days), your ovulation may occur shortly after your period ends. Since sperm can live inside the body for up to 5 days, having unprotected sex right after your period could lead to pregnancy."
        }
      },
      {
        "@type": "Question",
        "name": "How accurate is this ovulation calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This calculator uses standard medical formulas based on your average cycle length to estimate ovulation. While highly accurate for women with regular cycles, it provides an estimate. For irregular cycles, tracking basal body temperature or using ovulation predictor kits (OPKs) may offer better precision."
        }
      },
      {
        "@type": "Question",
        "name": "What are the safe days in a period cycle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 'safe days' are generally the days outside of your 6-day fertile window (the 5 days before ovulation and the day of ovulation). However, the rhythm method is not a highly reliable form of birth control because ovulation dates can shift unexpectedly."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my period late if I am not pregnant?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A late period can be caused by various factors other than pregnancy, including high stress levels, sudden weight loss or gain, intense exercise, hormonal imbalances (like PCOS), thyroid issues, or starting new medications."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- ON-PAGE CONTENT --- */}

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">Period & Menstrual Cycle Calculator</h1>
        <p className="mb-4">
          Welcome to the most accurate <strong>Period & Menstrual Cycle Calculator</strong>. Whether you are trying to conceive, looking to avoid pregnancy naturally, or simply planning your schedule around your reproductive health, understanding your cycle is essential.
        </p>
        <p className="mb-4">
          Our tool is designed for women across India and globally to easily track their cycles. By inputting just a few simple details, you can instantly predict your next period dates, identify your most fertile window, and estimate your precise day of ovulation. 
        </p>
        <p>
          This removes the guesswork from family planning and helps you stay prepared for upcoming festivals, holidays, or daily life.
        </p>
      </section>

      {/* HOW TO USE */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Period Calculator</h2>
        <p className="mb-4">Using our menstrual cycle tracker is incredibly simple. It requires three basic pieces of information about your body to generate a complete custom schedule:</p>
        
        <ol className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>First Day of Last Period (LMP):</strong> Use the calendar selector to choose the exact date when your most recent period started (Day 1 of bleeding).</li>
          <li><strong>Average Cycle Length (Days):</strong> Use the slider to input the total number of days your cycle usually lasts. This is counted from the first day of one period to the day before your next period begins (default is 28 days).</li>
          <li><strong>Average Period Duration (Days):</strong> Use the slider to indicate how many days your bleeding normally lasts (default is 5 days).</li>
        </ol>

        <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-r-lg">
          <h3 className="font-bold text-green-800 mb-1">Understanding Your Results</h3>
          <p className="text-sm text-green-900">
            Once calculated, the tool instantly outputs your <strong>Next Expected Period</strong> date range. Below that, it provides your <strong>Estimated Ovulation Date</strong> and your 6-day <strong>High Fertility Window</strong> to assist with family planning and tracking safe days.
          </p>
        </div>
      </section>

      {/* SCIENCE & FORMULA SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Science & Formulas Behind the Cycle</h2>
        <p className="mb-5">Our calculator uses the standard medical formulas employed by gynecologists to predict your dates. Here is the straightforward logic behind the calculations:</p>
        
        <div className="space-y-6">
          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Predicting the Next Period</h3>
            <p className="mb-3 text-sm text-gray-600">
              The cycle length is added to the first day of your last period to predict when your next cycle will begin.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Next Period Date = First Day of LMP + Average Cycle Length
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: Finding the Ovulation Date</h3>
            <p className="mb-3 text-sm text-gray-600">
              Because the Luteal Phase (post-ovulation) is almost always exactly 14 days long for most women, ovulation is calculated backwards from your next expected period.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Ovulation Date = Next Expected Period - 14 Days
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: The Fertile Window</h3>
            <p className="mb-4 text-sm text-gray-600">
              Sperm can survive in the female body for up to 5 days, and an egg lives for roughly 24 hours. Therefore, the "fertile window" is considered to be 6 days long.
            </p>
            <div className="bg-gray-50 p-4 rounded text-sm font-mono text-gray-800 border-l-4 border-blue-500 overflow-x-auto">
              <strong>Formula:</strong> Fertile Window = (Ovulation Date - 5 Days) to (Ovulation Date + 1 Day)
            </div>
          </div>
        </div>
      </section>

      {/* WORKED EXAMPLES */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Practical Real-World Examples</h2>
        <p className="mb-6">To understand how these formulas translate into your calendar, let us review two common scenarios.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 1: The Standard 28-Day Cycle</h3>
            <p className="mb-4 text-sm text-gray-600">Priya has a very standard cycle. Her Last Menstrual Period (LMP) started on April 1st. Her cycle length is 28 days, and her period usually lasts 5 days.</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Next Period:</strong> April 1 + 28 days = <strong>April 29th</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Ovulation Date:</strong> April 29 - 14 days = <strong>April 15th</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></span> <strong>Fertile Window:</strong> 5 days before to 1 day after = <strong>April 10th to April 16th</strong></li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 bg-white p-6 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-xl mb-3 text-gray-900">Example 2: A Longer 32-Day Cycle</h3>
            <p className="mb-4 text-sm text-gray-600">Ananya has a slightly longer cycle. Her LMP started on March 1st. Her average cycle length is 32 days.</p>
            <ul className="list-none space-y-2 text-sm text-gray-800 font-medium">
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Next Period:</strong> March 1 + 32 days = <strong>April 2nd</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Ovulation Date:</strong> April 2 - 14 days = <strong>March 19th</strong></li>
              <li className="flex items-center"><span className="w-2 h-2 bg-rose-500 rounded-full mr-2"></span> <strong>Fertile Window:</strong> 5 days before to 1 day after = <strong>March 14th to March 20th</strong></li>
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is a normal menstrual cycle length?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A normal menstrual cycle typically ranges between 21 and 35 days, with the global average sitting around 28 days. Minor variations from month to month are entirely normal and can be influenced by diet, stress, and sleep patterns.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I get pregnant right after my period?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, though it is less common. If you have a short menstrual cycle (such as 21 days), you may ovulate very soon after your bleeding stops. Because sperm can survive for up to 5 days internally, unprotected sex right after a period can sometimes result in pregnancy.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How accurate is this ovulation calculator?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Our tool is highly accurate for women who experience regular menstrual cycles, as it relies on proven medical formulas used by gynecologists. However, if you suffer from conditions like PCOS or have highly irregular cycles, you should pair this tool with physical signs like basal body temperature tracking.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What are the safe days in a period cycle?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The 'safe days' are theoretically the days outside of your 6-day fertile window. However, because stress, diet, travel, and health changes can cause ovulation to shift unexpectedly, the rhythm method (tracking safe days) is not considered a highly reliable form of birth control.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is my period late if I am not pregnant?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A late period can be caused by various factors other than pregnancy. These include high stress levels, sudden weight loss or gain, intense exercise routines, hormonal imbalances (like PCOS), thyroid issues, or starting new medications.
            </div>
          </details>
        </div>
      </section>

      {/* INTERNAL LINKING / RELATED CALCULATORS */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore More Health & Fitness Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Take full control of your health and body with our complete suite of free calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/health/bmi" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMI Calculator</a>
          <a href="/calculator/health/bmr" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">BMR Calculator</a>
          <a href="/calculator/health/body-fat" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Body Fat Calculator</a>
          <a href="/calculator/health/calorie" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Daily Calorie Calculator</a>
          <a href="/calculator/health/calories-burned" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Calories Burned Calculator</a>
          <a href="/calculator/health/ideal-weight" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Ideal Weight Calculator</a>
          <a href="/calculator/health/macros" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Macros Calculator</a>
          <a href="/calculator/health/tdee" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">TDEE Calculator</a>
          <a href="/calculator/health/water-intake" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Water Intake Calculator</a>
          <a href="/calculator/health/pregnancy" className="text-sm text-blue-700 font-medium hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-300">Pregnancy Calculator</a>
        </div>
      </section>

      {/* DISCLAIMER */}
      <section className="mt-8">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-5 text-sm text-yellow-900 rounded-r-lg">
          <strong>Medical Disclaimer:</strong> This calculator provides estimates based on averages. Cycle lengths naturally vary from month to month. This tool should not be used as a substitute for professional medical advice, diagnosis, or as a primary method of contraception. If your periods are highly irregular, please consult a healthcare provider.
        </div>
      </section>
      
    </div>
  );
}