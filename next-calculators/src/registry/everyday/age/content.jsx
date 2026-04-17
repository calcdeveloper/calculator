import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Age Calculator Online India | Calculate Exact Age from DOB
  2. META DESCRIPTION: Use our free online Age Calculator to find your exact age in years, months, and days. Perfect for Indian government job eligibility (SSC, UPSC, Bank) and forms.
  3. URL SLUG: /age-calculator
  4. H1 TITLE: Free Online Age Calculator by Date of Birth
  
  11. SEO KEYWORDS:
      - Primary keyword: Age calculator India
      - Secondary keywords: calculate age from DOB, online age calculator, exact age calculator, age calculator in years months days, age limit calculator, SSC age calculator, UPSC age calculator, date of birth calculator, total days lived calculator, chronological age calculator.
      - Long-tail keywords: how to calculate age for govt jobs in India, calculate exact age from date of birth, age calculator in days and months, calculate age as on specific date, how to find age with borrowing method.
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
        "name": "How is my exact age calculated for Indian government exams like UPSC or SSC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Indian government exams require your exact age (in years, months, and days) as of a specific cut-off date mentioned in the notification. You calculate this by subtracting your Date of Birth from that target date, ensuring you fall strictly within their minimum and maximum age limits."
        }
      },
      {
        "@type": "Question",
        "name": "What is the 'Age at the Date Of' input field?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This field allows you to find out how old you were, or will be, on a specific past or future date. By default, it is set to today's date, but you can change it to calculate your age on a specific day, like an upcoming graduation or a job application deadline."
        }
      },
      {
        "@type": "Question",
        "name": "Does this calculator account for leap years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our online age calculator automatically accounts for leap years and the varying number of days in different months (28, 29, 30, or 31), ensuring your age calculation is 100% mathematically accurate down to the exact day."
        }
      },
      {
        "@type": "Question",
        "name": "Why do I need to know my age in total days?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Knowing your age in 'total days' is often required for specific medical assessments (like pediatric milestones for babies), certain legal documents, or simply as a fun fact to celebrate milestones like living for exactly 10,000 days."
        }
      },
      {
        "@type": "Question",
        "name": "Which date format should I use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, the standard date format is DD/MM/YYYY (Day-Month-Year). Our calculator interface uses a standard calendar picker, so you don't have to worry about typing the wrong format."
        }
      },
      {
        "@type": "Question",
        "name": "Does this tool use the Indian/Western age system?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. It uses the standard chronological Western Age System used globally and officially in India, where a person's age increases by one year exactly on their birthday, and time spent in the womb is not counted."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Age Calculator by Date of Birth</h1>
        <p className="mb-4 text-lg text-gray-600">
          Calculating your exact age sounds simple until you are asked to provide it in "Years, Months, and Days" for an official application. Because months have different lengths and leap years add extra days, manually calculating your precise chronological age can lead to frustrating mathematical errors.
        </p>
        <p className="mb-4">
          For millions of students and job seekers in India applying for government exams like <strong>UPSC, SSC, Railway, or Banking (IBPS)</strong>, knowing your exact age as of a specific "cut-off date" is critical. Being even one day over the age limit can lead to instant disqualification. Similarly, insurance agents need precise ages to calculate LIC premiums, and pediatricians track infant growth by weeks and days.
        </p>
        <p>
          Our free online <strong>Age Calculator</strong> takes the guesswork out of the process. By simply entering your Date of Birth, it instantly processes leap years and calendar variations to give you your exact age today, or on any specific date you choose in the past or future.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Age Calculator</h2>
        <p className="mb-4">Using our tool is incredibly fast and completely free. Just follow these simple steps to get your precise age breakdown:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Your Date of Birth</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
          <li>Locate the <strong>"Date of Birth"</strong> input field.</li>
          <li>Use the calendar dropdown to select your birth day, month, and year (e.g., 25/06/1995).</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Set the Target Date</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm">
          <li>Locate the <strong>"Age at the Date Of"</strong> field.</li>
          <li>By default, this is set to today's date. If you need to know your age as of today, leave it as is.</li>
          <li>If you are filling out a form that asks for your age as of a specific cut-off date (e.g., 1st January of the current year), click the calendar icon and select that specific date.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 3: Click Calculate to View Results</h3>
        <p className="mb-3 text-sm">Hit the "Calculate" button. The screen will instantly display your results in two distinct formats:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-sm text-gray-600 mb-4">
          <li><strong>Detailed Age:</strong> Displayed clearly in Years, Months, and Days (e.g., "28 Years, 8 Months, 21 Days"). This is the format required for most official documents.</li>
          <li><strong>Total Days:</strong> A secondary output showing exactly how many days you have been alive (e.g., "10550 Days").</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Calculate Exact Age Manually</h2>
        <p className="mb-6">If you are sitting in an exam hall or don't have internet access, you can manually calculate your exact age using a mathematical method known as <strong>Subtraction with Borrowing</strong>. You must calculate in a specific order: Days first, then Months, then Years.</p>
        
        <div className="bg-indigo-50/50 p-6 rounded-xl border border-indigo-100">
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Borrowing Method Formula</h3>
          <p className="text-sm mb-4">Write the target date on top and your Date of Birth (DOB) at the bottom in the format: YYYY / MM / DD. Then, subtract the bottom row from the top row.</p>
          <ul className="text-sm space-y-3 text-gray-700">
            <li><strong>Rule for Days:</strong> If the target day is smaller than your birth day, "borrow" 1 month from the target month column. Convert that month into days (typically using 30 or 31 depending on the previous month) and add it to the target day before subtracting.</li>
            <li><strong>Rule for Months:</strong> If the target month is smaller than your birth month, "borrow" 1 year from the target year column. Convert that year into 12 months, add it to the target month, and then subtract.</li>
            <li><strong>Rule for Years:</strong> Subtract your birth year from the newly adjusted target year.</li>
          </ul>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Age Calculation Examples</h2>
        <p className="mb-6">Let's look at a few practical scenarios where calculating your exact age in India is necessary.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Checking Eligibility for SSC CGL Exam</h3>
            <p className="mb-2 text-sm text-gray-600">Ravi wants to apply for a government job. The notification states the age limit is 18 to 27 years as of <strong>01-January-2024</strong>. Ravi's DOB is <strong>15-August-1998</strong>. Is he eligible?</p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 mt-3">
              <li><strong>Days:</strong> 01 is less than 15. Borrow 1 month (December = 31 days). New target days: 1 + 31 = 32. <br/><em>32 - 15 = 17 days.</em></li>
              <li><strong>Months:</strong> We borrowed a month, so January (1) becomes 0. We must borrow 1 year (12 months). New target months: 0 + 12 = 12.<br/><em>12 - 8 (August) = 4 months.</em></li>
              <li><strong>Years:</strong> We borrowed a year, so 2024 becomes 2023.<br/><em>2023 - 1998 = 25 years.</em></li>
            </ul>
            <p className="mt-3 text-sm"><strong>Result:</strong> Ravi is <strong>25 Years, 4 Months, and 17 Days</strong> old on the cut-off date. Yes, he is eligible!</p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Buying a Term Life Insurance Policy (LIC)</h3>
            <p className="mb-2 text-sm text-gray-600">Priya is buying term insurance. Her DOB is <strong>10-March-1990</strong>. She is buying the policy on <strong>20-May-2024</strong>. Insurance companies price premiums based on age milestones.</p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 mt-3">
              <li><strong>Days:</strong> 20 is greater than 10. No borrowing needed.<br/><em>20 - 10 = 10 days.</em></li>
              <li><strong>Months:</strong> 5 (May) is greater than 3 (March). No borrowing needed.<br/><em>5 - 3 = 2 months.</em></li>
              <li><strong>Years:</strong> 2024 - 1990 = 34 years.</li>
            </ul>
            <p className="mt-3 text-sm"><strong>Result:</strong> Priya's exact age is <strong>34 Years, 2 Months, and 10 Days</strong>. She will be charged premiums for a 34-year-old.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is my exact age calculated for Indian government exams like UPSC or SSC?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Indian government exams require your exact age (in years, months, and days) as of a specific cut-off date mentioned in their official recruitment notification. You calculate this by subtracting your Date of Birth from that target date to ensure you fall strictly within their minimum and maximum age brackets. Our calculator does this for you automatically.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the "Age at the Date Of" input field?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This field allows you to find out how old you were, or will be, on a specific date in history or the future. By default, it is set to today's date. However, you can change it to calculate your age on a specific day, like an upcoming college graduation, retirement date, or a job application deadline.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Does this calculator account for leap years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! Manual calculation can be error-prone because February has 29 days during leap years. Our online age calculator uses precise calendar algorithms that automatically account for all leap years and the varying number of days in every month, ensuring 100% mathematical accuracy.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why do I need to know my age in total days?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Knowing your age in "total days" is often required for specific pediatric milestones for infants. It is also used in certain scientific or legal documents, or simply as a fun personal milestone (for example, finding out the exact day you turn 10,000 days old to celebrate).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which date format should I use?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, the legally accepted standard date format is DD/MM/YYYY (Day-Month-Year). Our calculator uses an intuitive visual calendar picker, so you simply click the days and months without worrying about typing the format incorrectly.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Does this tool use the Indian/Western age system?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. It uses the standard chronological Western Age System used globally and officially recognized in India. In this system, a person is considered 0 years old at birth, and their age increases by one year exactly on their subsequent birthdays. Time spent in the womb is not counted.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Streamline your daily life, finances, and scheduling with our suite of free online calculation tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
        </div>
      </section>
      
    </div>
  );
}