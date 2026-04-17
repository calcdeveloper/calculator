import React from 'react';

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I easily convert minutes to hours?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert minutes into hours, simply divide the total number of minutes by 60. For example, 150 minutes divided by 60 equals 2.5 hours."
        }
      },
      {
        "@type": "Question",
        "name": "How many seconds are in a full day?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There are exactly 86,400 seconds in a standard 24-hour day. This is calculated by multiplying 24 hours by 60 minutes, and then by 60 seconds (24 × 60 × 60)."
        }
      },
      {
        "@type": "Question",
        "name": "How many hours are in a standard year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In a standard non-leap year of 365 days, there are 8,760 hours. In a leap year (366 days), there are 8,784 hours."
        }
      },
      {
        "@type": "Question",
        "name": "Why is time conversion math so complicated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Time math is complicated because it does not use a standard base-10 decimal system like the metric system. Instead, it relies on a base-60 system (60 seconds, 60 minutes) inherited from the ancient Sumerians, combined with a base-24 system for days and irregular calendar months."
        }
      },
      {
        "@type": "Question",
        "name": "How many days are mathematically in a month?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because real months vary between 28, 29, 30, and 31 days, scientists and calculators use an average month length to make math possible. The standard average is 30.416 days per month (365 days ÷ 12 months)."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate weeks into years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To convert weeks to years, divide the number of weeks by 52.1429 (the exact number of weeks in a 365-day year). For standard estimation, dividing by 52 is usually sufficient."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Time Converter</h1>
        <p className="mb-4">
          Time conversions are unique and notoriously tricky. Unlike distance, weight, or digital storage that scale neatly using a standard "base-10" decimal system, our clocks rely on a combination of <strong>base-60 math</strong> (60 seconds in a minute, 60 minutes in an hour) and <strong>base-24 math</strong> (24 hours in a day). This system was inherited from ancient civilizations, and calculating it manually often leads to frustrating errors!
        </p>
        <p className="mb-4">
          Whether you are an Indian freelancer calculating precise billable hours, a video editor converting timeline clips from milliseconds to seconds, a student solving physics equations, or someone trying to figure out exactly how many days are in a decade, accuracy is essential.
        </p>
        <p>
          Our free <strong>Time Converter</strong> tool instantly translates numerical values across all standard time scales. Effortlessly switch between milliseconds, seconds, minutes, hours, days, weeks, months, years, decades, and centuries with absolute precision.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Time Calculator</h2>
        <p className="mb-4">Avoid messy manual calculations. Our tool is designed to deliver instant, accurate results in three simple steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Your Time Value</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Locate the main numerical input box on the screen.</li>
          <li>Type the amount of time you want to convert (for example, type "450" or "2.5").</li>
          <li>The calculator accepts whole numbers as well as decimal fractions for precise conversions.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Select Your Units</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Click the <strong>From Unit</strong> dropdown menu to pick the time scale you are starting with.</li>
          <li>Click the <strong>To Unit</strong> dropdown menu to choose the target time scale.</li>
          <li><strong>Available Time Units:</strong>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600">
              <li>Milliseconds (ms)</li>
              <li>Seconds (s)</li>
              <li>Minutes (min)</li>
              <li>Hours (hr)</li>
              <li>Days (d)</li>
              <li>Weeks (wk)</li>
              <li>Months (mo)</li>
              <li>Years (yr)</li>
              <li>Decades</li>
              <li>Centuries</li>
            </ul>
          </li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Instantly View the Result</h3>
        <p className="mb-3">The calculator is dynamic. As soon as you enter a number or change a unit, the large green output panel will update instantly. For example, converting 450 minutes to hours will immediately display <strong>7.5 Hours</strong>.</p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Time Conversion Formulas</h2>
        <p className="mb-6">If you need to show your work for a math assignment, programming project, or payroll sheet, here are the exact mathematical formulas our calculator relies on.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Micro-Time Formulas (Milliseconds & Seconds)</h3>
            <p className="text-sm mb-4">These conversions are heavily used in computer programming, website performance measuring, sports timing, and video production.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Milliseconds to Seconds:</strong> Divide by 1,000. <br/><span className="text-gray-500 italic">Example: 5,000 ms ÷ 1,000 = 5 seconds</span></li>
              <li><strong>Seconds to Minutes:</strong> Divide by 60. <br/><span className="text-gray-500 italic">Example: 180 seconds ÷ 60 = 3 minutes</span></li>
            </ul>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Daily Time Formulas (Minutes to Days)</h3>
            <p className="text-sm mb-4">These formulas are the most commonly searched for calculating daily payroll, work shifts, sleep schedules, and travel times.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Minutes to Hours:</strong> Divide by 60. <br/><span className="text-gray-500 italic">Example: 150 minutes ÷ 60 = 2.5 hours</span></li>
              <li><strong>Hours to Days:</strong> Divide by 24. <br/><span className="text-gray-500 italic">Example: 72 hours ÷ 24 = 3 days</span></li>
              <li><strong>Seconds to Hours:</strong> Divide by 3,600 (since 60 mins × 60 secs = 3,600). <br/><span className="text-gray-500 italic">Example: 7,200 seconds ÷ 3,600 = 2 hours</span></li>
            </ul>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Calendar Time Formulas (Weeks to Years)</h3>
            <p className="text-sm mb-4">When converting large amounts of time, standard mathematical conversion assumes a "standard" non-leap year consisting of exactly 365 days.</p>
            <ul className="text-sm space-y-3 text-gray-700">
              <li><strong>Days to Weeks:</strong> Divide by 7. <br/><span className="text-gray-500 italic">Example: 21 days ÷ 7 = 3 weeks</span></li>
              <li><strong>Days to Years:</strong> Divide by 365. <br/><span className="text-gray-500 italic">Example: 730 days ÷ 365 = 2 years</span></li>
              <li><strong>Months to Years:</strong> Divide by 12. <br/><span className="text-gray-500 italic">Example: 48 months ÷ 12 = 4 years</span></li>
              <li><strong>Years to Decades:</strong> Divide by 10.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Time Conversion Examples</h2>
        <p className="mb-6">Let's look at some highly practical, everyday scenarios where translating time formats is necessary.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: Calculating Freelance Payroll (Minutes to Hours)</h3>
            <p className="mb-2 text-sm">You are a graphic designer in India billing an international client. Your time-tracking software says you worked exactly <strong>465 minutes</strong> this week. Your hourly rate is $20. First, you must convert minutes to hours.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 465 minutes</li>
              <li><strong>Formula used:</strong> Minutes ÷ 60 = Hours</li>
              <li><strong>Calculation:</strong> 465 ÷ 60</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">7.75 hours</span> (Now you can multiply 7.75 × $20 to invoice $155).</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: Analyzing Movie Runtime (Minutes to Hours)</h3>
            <p className="mb-2 text-sm">You want to binge-watch a web series, and the total runtime across all episodes is <strong>510 minutes</strong>. You want to know if you can finish it before going to sleep.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 510 minutes</li>
              <li><strong>Formula used:</strong> Minutes ÷ 60 = Hours</li>
              <li><strong>Calculation:</strong> 510 ÷ 60</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">8.5 hours</span>.</li>
            </ul>
          </div>

          <div className="border-l-4 border-gray-800 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 3: Project Deadlines (Days to Weeks)</h3>
            <p className="mb-2 text-sm">Your manager assigns you a massive software project and says you have exactly <strong>45 days</strong> to complete it. How many weeks is this?</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Starting Value:</strong> 45 days</li>
              <li><strong>Formula used:</strong> Days ÷ 7 = Weeks</li>
              <li><strong>Calculation:</strong> 45 ÷ 7</li>
              <li><strong>Final Answer:</strong> <span className="font-bold text-gray-900">6.42 weeks</span> (Roughly 6 weeks and 3 days).</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do I easily convert minutes to hours?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To convert minutes into hours, simply divide the total number of minutes by 60. For example, if you have 150 minutes, dividing 150 by 60 gives you exactly 2.5 hours. If you need to convert hours back into minutes, just multiply by 60.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many seconds are in a full day?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There are exactly 86,400 seconds in a standard 24-hour day. You can find this by multiplying 24 hours by 60 minutes, which gives 1,440 minutes. Then multiply 1,440 minutes by 60 seconds (24 × 60 × 60 = 86,400).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many hours are in a standard year?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In a standard non-leap year consisting of 365 days, there are 8,760 hours (365 days × 24 hours). During a leap year, which has 366 days, there are 8,784 hours.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is time conversion math so complicated?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Time math is notoriously complicated because it does not use a clean, standard base-10 decimal system like the metric system (where everything multiplies by 10 or 100). Instead, it relies on a base-60 system (60 seconds, 60 minutes) inherited from the ancient Sumerians and Babylonians, combined with a base-24 system for daily planetary rotation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How many days are mathematically in a month?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Because real calendar months vary wildly between 28, 29, 30, and 31 days, scientists, digital calendars, and online calculators use an "average" month length to make consistent mathematical conversions possible. The standard average is <strong>30.416 days per month</strong>, which is calculated by taking 365 days and dividing it by 12 months.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How do you calculate weeks into years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              To convert weeks to years accurately, divide the number of weeks by 52.1429 (which is the exact decimal number of weeks in a 365-day year). However, for everyday standard estimation, simply dividing the total weeks by 52 is usually sufficient.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Scientific & Conversion Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need to calculate other physical or digital metrics? Check out our complete suite of free online tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/conversion/angle" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Angle Converter</a>
          <a href="/calculator/conversion/area" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Area Converter</a>
          <a href="/calculator/conversion/cooking" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Cooking Measurements</a>
          <a href="/calculator/conversion/data-transfer" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Data Transfer</a>
          <a href="/calculator/conversion/digital-storage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Digital Storage</a>
          <a href="/calculator/conversion/energy" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Energy Converter</a>
          <a href="/calculator/conversion/fraction-decimal" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Fraction to Decimal</a>
          <a href="/calculator/conversion/number-base" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Number Base</a>
          <a href="/calculator/conversion/power" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Power Converter</a>
          <a href="/calculator/conversion/pressure" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Pressure Converter</a>
          <a href="/calculator/conversion/roman" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Roman Numerals</a>
          <a href="/calculator/conversion/speed" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Speed Converter</a>
          <a href="/calculator/conversion/temperature" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Temperature Converter</a>
          <a href="/calculator/conversion/torque" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Torque Converter</a>
          <a href="/calculator/conversion/unit" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Unit Converter</a>
          <a href="/calculator/conversion/volume" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Volume Converter</a>
          <a href="/calculator/conversion/weight" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Weight & Mass</a>
        </div>
      </section>
      
    </div>
  );
}