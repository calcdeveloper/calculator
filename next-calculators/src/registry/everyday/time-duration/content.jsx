import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Free Time Duration Calculator | Calculate Hours & Minutes
  2. META DESCRIPTION: Calculate the exact time duration between two times down to the second. Perfect for payroll tracking, night shifts, and event planning. Free online time clock tool.
  3. URL SLUG: /time-duration-calculator
  4. H1 TITLE: Free Online Time Duration Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Time duration calculator
      - Secondary keywords: Calculate hours worked, elapsed time calculator, difference between two times, payroll hours calculator, timesheet calculator, time clock calculator, hours and minutes calculator, calculate night shift hours.
      - Long-tail keywords: How to calculate time duration between two times, convert minutes to decimals for payroll, how to calculate hours worked in a day, time duration calculator with seconds.
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
        "name": "How do I calculate the time duration between two times?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To calculate the duration manually, convert both your start and end times into 24-hour military format. Then, subtract the start time from the end time. If the end minutes are smaller than the start minutes, borrow 1 hour (60 minutes) to complete the subtraction."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if my end time is past midnight?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you are working a night shift and your end time is mathematically smaller than your start time (e.g., starting at 10 PM and ending at 6 AM), you must add 24 hours to your end time before subtracting. Our calculator does this automatically for you."
        }
      },
      {
        "@type": "Question",
        "name": "How do I convert minutes into decimals for payroll?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Time uses a base-60 system, so 30 minutes is not 0.30 hours. To convert minutes into a decimal format for payroll calculations, divide the minutes by 60. For example, 45 minutes divided by 60 equals 0.75 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Why does the time calculator use a 24-hour clock behind the scenes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 24-hour clock (military time) removes the confusion of AM and PM, making mathematical subtraction much easier and preventing errors when a duration spans from morning into the afternoon."
        }
      },
      {
        "@type": "Question",
        "name": "Can I calculate time down to the exact second?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! By clicking the clock icon in the input fields, you can select the exact hour, minute, and second. The calculator will provide the precise elapsed time down to the second."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Time Duration Calculator</h1>
        <p className="mb-4">
          Whether you are an employee filling out a weekly timesheet, a manager calculating payroll, or just someone trying to track how long a specific task took, calculating the exact difference between two times is a daily necessity. However, because time operates on a 60-minute hour rather than a standard decimal system of 100, doing the math in your head can be frustrating and prone to errors.
        </p>
        <p className="mb-4">
          Have you ever tried to subtract 8:45 AM from 5:15 PM mentally? Dealing with AM/PM conversions, borrowing 60 minutes instead of 10, and figuring out night shifts that cross past midnight can cause major payroll headaches.
        </p>
        <p>
          Our free online <strong>Time Duration Calculator</strong> handles all the complex time-math for you. By simply entering your start time and end time using the intuitive clock interface, you instantly get the exact elapsed time broken down into hours, minutes, and seconds. It is fast, accurate, and completely free to use.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Time Duration Calculator</h2>
        <p className="mb-4">Finding your exact elapsed time takes only a few seconds. Follow these easy steps to get your results:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter the Start Time</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the <strong>Start Time</strong> input field.</li>
          <li>Click on the <strong>Clock Icon</strong> to open the time picker interface.</li>
          <li>Select the exact Hour, Minute, and Second you started, and choose AM or PM.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Enter the End Time</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the <strong>End Time</strong> input field.</li>
          <li>Click the <strong>Clock Icon</strong> again to input when the task or shift concluded.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Instantly View the Output</h3>
        <p className="mb-3">The calculator will instantly process the times and present a clear breakdown table. You will see:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 mb-4">
          <li><strong>Total Duration:</strong> Formatted cleanly (e.g., 8h 30m 0s).</li>
          <li><strong>Total in Minutes:</strong> Useful for specific tasks or billing.</li>
          <li><strong>Total in Hours:</strong> Represented as a decimal (e.g., 8.5 Hours) which is essential for multiplying by your hourly wage for payroll.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formula Behind Time Calculation</h2>
        <p className="mb-6">If you want to calculate time duration manually without a tool, the standard method relies on converting your 12-hour clock (AM/PM) into a 24-hour clock (Military Time). Here is how it is done:</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Standard Subtraction (Same Day)</h3>
            <p className="text-sm mb-4">First, convert any PM time to military time by adding 12 to the hours (e.g., 2:00 PM becomes 14:00). Then subtract the start time from the end time.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Rule of Borrowing:</strong> Because an hour has 60 minutes, if the End Time minutes are less than the Start Time minutes, you cannot borrow a "10" like regular math. You must borrow 1 hour and convert it to <strong>60 minutes</strong>.</li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Crossing Midnight (Night Shifts)</h3>
            <p className="text-sm mb-4">If someone works a graveyard shift, their End Time (e.g., 6:00 AM) appears numerically smaller than their Start Time (e.g., 10:00 PM / 22:00).</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Formula:</strong> When End Time is less than Start Time, add 24 hours to the End Time before doing the subtraction.</li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Converting to Payroll Decimals</h3>
            <p className="text-sm mb-4">You cannot multiply 8 hours and 15 minutes by a ₹500 hourly wage by typing 8.15 into a calculator. You must convert the minutes to a decimal.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>The Formula:</strong> <span className="font-mono bg-white p-1 rounded font-bold">Minutes ÷ 60 = Decimal Amount</span></li>
              <li>Example: 15 minutes ÷ 60 = 0.25. Therefore, 8 hours and 15 minutes is exactly <strong>8.25 hours</strong> for payroll.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Time Duration Examples</h2>
        <p className="mb-6">Let's look at a few common scenarios to see how time subtraction works in the real world.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: A Standard Workday</h3>
            <p className="mb-2 text-sm">You clock in at <strong>8:45 AM</strong> and clock out at <strong>5:15 PM</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Step 1 (Military Time):</strong> 5:15 PM becomes 17:15. 8:45 AM remains 08:45.</li>
              <li><strong>Step 2 (Subtracting Minutes):</strong> We cannot subtract 45 from 15. So we borrow 1 hour (60 minutes) from 17. The new End Time is mathematically 16:75.</li>
              <li><strong>Step 3 (The Math):</strong> 16:75 minus 08:45. <br/> Hours: 16 - 8 = 8.<br/> Minutes: 75 - 45 = 30.</li>
              <li><strong>Result:</strong> Total time worked is <span className="font-bold text-gray-900">8 Hours and 30 Minutes</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: The Night Shift</h3>
            <p className="mb-2 text-sm">A security guard starts their shift at <strong>10:30 PM</strong> and finishes at <strong>6:15 AM</strong> the next morning.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Step 1 (Military Time):</strong> Start Time = 22:30. End Time = 06:15.</li>
              <li><strong>Step 2 (Midnight Adjustment):</strong> Because 06:15 is smaller than 22:30, we add 24 hours to the End Time. 06 + 24 = 30:15.</li>
              <li><strong>Step 3 (Borrowing Minutes):</strong> Cannot subtract 30 from 15. Borrow 1 hour. 30:15 becomes 29:75.</li>
              <li><strong>Step 4 (The Math):</strong> 29:75 minus 22:30. <br/> Hours: 29 - 22 = 7.<br/> Minutes: 75 - 30 = 45.</li>
              <li><strong>Result:</strong> Total shift duration is <span className="font-bold text-gray-900">7 Hours and 45 Minutes</span>.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I calculate the time duration between two times?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To calculate the duration manually, convert both your start and end times into 24-hour military format. Then, subtract the start time from the end time. If the end minutes are smaller than the start minutes, borrow 1 hour (60 minutes) to complete the subtraction.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What happens if my end time is past midnight?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you are working a night shift and your end time is mathematically smaller than your start time (e.g., starting at 10 PM and ending at 6 AM), you must add 24 hours to your end time before subtracting. Our calculator tool does this automatically for you.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I convert minutes into decimals for payroll?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Time uses a base-60 system, so 30 minutes is not 0.30 hours. To convert minutes into a decimal format for payroll calculations, divide the minutes by 60. For example, 45 minutes divided by 60 equals 0.75 hours. If you worked 8 hours and 45 minutes, your payroll time is 8.75 hours.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why does the time calculator use a 24-hour clock behind the scenes?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A 24-hour clock (often referred to as military time) removes the confusion of AM and PM, making mathematical subtraction much easier and preventing software logic errors when a duration spans from the morning straight into the afternoon.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I calculate time down to the exact second?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! By clicking the clock icon in the input fields of our tool, you can select the exact hour, minute, and second. The calculator will provide the precise elapsed time down to the second, which is highly useful for race timings, videos, or laboratory experiments.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need help managing your daily tasks, payroll, or finances? Check out our suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
        </div>
      </section>
      
    </div>
  );
}