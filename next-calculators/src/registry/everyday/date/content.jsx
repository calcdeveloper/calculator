import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Free Date Calculator | Find Days Between Two Dates
  2. META DESCRIPTION: Accurately calculate the exact duration between two dates or add/subtract days from any date. Free online Date Calculator with years, months, and days breakdown.
  3. URL SLUG: /date-calculator
  4. H1 TITLE: Free Online Date Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Date calculator India
      - Secondary keywords: days between two dates, add days to date, subtract days from date, date difference calculator, exact date calculator, months and days between dates, time between dates, leap year calculator.
      - Long-tail keywords: how to calculate days between two dates, add 90 days to current date, calculate fixed deposit maturity date, calculate age in years months and days, how many weeks between two dates.
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
        "name": "How does the date calculator handle leap years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The calculator automatically accounts for leap years. It follows the Gregorian calendar rules: a year is a leap year (366 days instead of 365, adding February 29) if it is divisible by 4. However, century years (like 1900) are not leap years unless they are also divisible by 400 (like 2000)."
        }
      },
      {
        "@type": "Question",
        "name": "Are the start and end dates included in the duration calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By default, mathematical date differences calculate the exact elapsed time. This means it counts the days strictly between the two boundaries. For example, the difference between January 1 and January 2 is exactly 1 day. The end date itself is not counted as a full 24-hour period unless specified."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use this calculator for Fixed Deposit (FD) maturity dates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely! If your bank offers an FD for exactly 400 days, you can use the 'Add / Subtract Days' mode, enter today's date as the start date, input 400 days, and select 'Add' to find out your exact maturity date."
        }
      },
      {
        "@type": "Question",
        "name": "Why is it difficult to calculate dates manually?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manual date calculation is highly prone to errors because the Gregorian calendar is irregular. Months alternate between 28, 29, 30, and 31 days. When calculating across multiple months or crossing over into a new year, it is very easy to miscount by one or two days."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate a deadline that is 90 days from today?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simply use the 'Add / Subtract Days' feature of the calculator. Select today's date from the calendar, type '90' into the days field, set the operation to 'Add', and the calculator will instantly provide the exact target date."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Date Calculator</h1>
        <p className="mb-4">
          Time management is critical, whether you are planning a corporate project, figuring out visa expiration rules, or waiting for a Fixed Deposit (FD) to mature. However, the Gregorian calendar we use daily is notoriously irregular. With months ranging from 28 to 31 days, and leap years shifting the math every four years, figuring out the exact number of days between two calendar dates can be a frustrating and error-prone task.
        </p>
        <p className="mb-4">
          Have you ever needed to know exactly what date it will be 90 days from today? Or perhaps you need to calculate exactly how many weeks and days are left until a major Indian festival or a wedding <em>muhurat</em>? Doing this math manually on a paper calendar takes time and leaves room for costly mistakes.
        </p>
        <p>
          Our free online <strong>Date Calculator</strong> solves this instantly. It features a dual-mode system that allows you to calculate the precise duration between any two historical or future dates, or seamlessly add and subtract specific days from a chosen starting point.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Date Calculator</h2>
        <p className="mb-4">Our tool is built with two distinct modes to handle any calendar scenario. Here is how to use it for flawless calculations:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Mode 1: Duration Between Two Dates</h3>
        <p className="text-sm mb-2">Use this mode when you know the start and end dates, but need to find out the time in between.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Select <strong>Duration between two dates</strong> from the calculation mode dropdown.</li>
          <li>Click on the <strong>Start Date</strong> field to open the calendar picker and select your initial date.</li>
          <li>Click on the <strong>End Date</strong> field and select your final date.</li>
          <li>The calculator will instantly display the difference broken down into exact Years, Months, Weeks, and Days, alongside the total pure days.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Mode 2: Add or Subtract Days</h3>
        <p className="text-sm mb-2">Use this mode when you have a starting date and need to find a future or past date based on a specific number of days.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Select <strong>Add / Subtract days to a date</strong> from the calculation mode dropdown.</li>
          <li>Select your <strong>Start Date</strong>.</li>
          <li>Type the numerical value in the <strong>Days to add/subtract</strong> input box (e.g., "45").</li>
          <li>Choose your <strong>Operation</strong>: Select "Add" to jump forward in time, or "Subtract" to jump backward in time.</li>
          <li>The calculator will instantly provide the exact target date.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Complexity of Date Math (How it Works)</h2>
        <p className="mb-6">While subtracting 10 from 20 is easy, subtracting January 15 from March 10 is not. Computers and our calculator use highly specific algorithms based on the Unix Epoch time standard to calculate dates perfectly every time.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. The Millisecond Formula</h3>
            <p className="text-sm mb-4">To calculate the exact difference between two dates, computers first translate human calendar dates into raw milliseconds since January 1, 1970 (known as Epoch time).</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Step 1:</strong> Convert Start Date to total milliseconds.</li>
              <li><strong>Step 2:</strong> Convert End Date to total milliseconds.</li>
              <li><strong>Step 3:</strong> Find the absolute difference: <br/><span className="font-mono font-bold bg-white p-1 rounded">| End Time - Start Time | = Difference in ms</span></li>
              <li><strong>Step 4:</strong> Convert milliseconds back to days by dividing by <span className="font-mono">1000 × 60 × 60 × 24 (which is 86,400,000)</span>.</li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Navigating Leap Years</h3>
            <p className="text-sm mb-4">A standard year has 365 days. However, it actually takes the Earth 365.2422 days to orbit the sun. To prevent our calendar seasons from drifting, we add a day (February 29) almost every four years.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Rule:</strong> A year is a leap year if it is evenly divisible by 4.</li>
              <li><strong>The Exception:</strong> If the year is also divisible by 100 (like 1900 or 2100), it is <em>not</em> a leap year, UNLESS it is also divisible by 400. This keeps the math incredibly precise. Our calculator factors in all historical and future leap years automatically.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Calendar Scenarios</h2>
        <p className="mb-6">Let’s look at three practical scenarios in India where precise date calculations are absolutely essential.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Fixed Deposit (FD) Maturity (Adding Days)</h3>
            <p className="mb-2 text-sm">You open a bank Fixed Deposit today, <strong>October 15, 2024</strong>. The bank offers a special high-interest rate for a tenure of exactly <strong>400 days</strong>. You need to know when it matures.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Mode:</strong> Add/Subtract days to a date.</li>
              <li><strong>Start Date:</strong> Oct 15, 2024.</li>
              <li><strong>Operation:</strong> Add 400 Days.</li>
              <li><strong>Final Answer:</strong> The calculator correctly rolls over the months and accounts for February to give you the exact maturity date of <span className="font-bold text-gray-900">November 19, 2025</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Wedding Planning (Duration Between Dates)</h3>
            <p className="mb-2 text-sm">Today is <strong>April 10, 2024</strong>. Your astrologer has finalized a wedding date for <strong>December 5, 2024</strong>. You need to know exactly how much time you have left to book venues and caterers.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Mode:</strong> Duration between two dates.</li>
              <li><strong>Start Date:</strong> April 10, 2024.</li>
              <li><strong>End Date:</strong> December 5, 2024.</li>
              <li><strong>Final Answer:</strong> The calculator breaks this down to exactly <span className="font-bold text-gray-900">239 Days</span>, which can be viewed as roughly 7 months and 25 days, or 34 weeks and 1 day.</li>
            </ul>
          </div>

          <div className="border-l-4 border-rose-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Visa Expiry Rules (Subtracting Days)</h3>
            <p className="mb-2 text-sm">Your international travel visa expires on <strong>June 30, 2024</strong>. The immigration policy states you must exit the country at least <strong>15 days</strong> prior to expiry.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Mode:</strong> Add/Subtract days to a date.</li>
              <li><strong>Start Date:</strong> June 30, 2024.</li>
              <li><strong>Operation:</strong> Subtract 15 Days.</li>
              <li><strong>Final Answer:</strong> You must book your return ticket by <span className="font-bold text-gray-900">June 15, 2024</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does the date calculator handle leap years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The calculator automatically accounts for leap years. It strictly follows the Gregorian calendar rules: a year is a leap year (having 366 days instead of 365, adding February 29) if it is divisible by 4. However, century years (like 1900) are not leap years unless they are also perfectly divisible by 400 (like the year 2000).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Are the start and end dates included in the duration calculation?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              By default, mathematical date differences calculate the exact elapsed time between two points. This means it counts the days strictly between the two boundaries. For example, the mathematical difference between January 1 and January 2 is exactly 1 day. The end date itself is not counted as a full additional 24-hour period.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I use this calculator for Fixed Deposit (FD) maturity dates?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, absolutely! Banks in India often offer special FD schemes based on exact day counts (like a 390-day or 444-day FD). You can use the 'Add / Subtract Days' mode, enter today's date as the start date, input the specific tenure in days, and select 'Add' to find out your exact maturity date without needing bank assistance.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is it difficult to calculate dates manually?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Manual date calculation is highly prone to errors because the calendar is wildly irregular. Months arbitrarily alternate between 28, 29, 30, and 31 days. When calculating across multiple months or crossing over into a new year, it is very easy for a human to miscount by one or two days, which can have massive financial or legal consequences.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate a deadline that is 90 days from today?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Simply use the 'Add / Subtract Days' feature of the calculator. Select today's date from the calendar picker, type '90' into the days input field, ensure the operation is set to 'Add', and the calculator will instantly provide the exact target date for your deadline.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need help managing your daily tasks, payroll, or personal finances? Check out our suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
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