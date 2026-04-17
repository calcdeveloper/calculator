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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Age Calculator by Date of Birth</h1>
        <p className="mb-4 text-lg text-gray-600">
          Calculating your exact age might seem like a simple task on the surface. We all know the year we were born, and basic subtraction can give us a rough estimate of how old we are. However, when you are asked to provide your exact age down to the precise number of <strong>Years, Months, and Days</strong>, the calculation quickly becomes a complex mathematical puzzle. 
        </p>
        <p className="mb-4">
          The complexity arises because the Gregorian calendar (the standard calendar used in India and worldwide) is not perfectly uniform. Months have different lengths—ranging from 28 days in February to 31 days in months like January and March. Furthermore, every four years, a leap year adds an extra day to February, completely shifting the mathematical calculation. Attempting to manually calculate your precise chronological age without accounting for these variations can easily lead to frustrating errors, which can have significant consequences when filling out critical legal or professional documents.
        </p>
        <p className="mb-4">
          Our free online <strong>Age Calculator</strong> eliminates the guesswork and mental gymnastics from this process. By simply entering your Date of Birth, this tool instantly processes complex calendar algorithms, accounts for leap years, and handles varying month lengths to give you your exact age today. You can also use it to determine your precise age on any specific date you choose, whether in the past or the future.
        </p>
      </section>

      {/* --- THE IMPORTANCE OF EXACT AGE IN INDIA --- */}
      <section className="bg-blue-50/30 p-6 rounded-xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Knowing Your Exact Age is Crucial in India</h2>
        <p className="mb-4">
          In India, age is more than just a number you celebrate on your birthday; it is a critical eligibility metric used across various professional, legal, and financial sectors. Here is why having access to a highly accurate age calculator is essential for millions of Indians:
        </p>
        <ul className="list-disc pl-6 space-y-4 text-gray-700">
          <li>
            <strong>Government Job Applications (UPSC, SSC, Banking, Railways):</strong> This is perhaps the most common reason Indians search for an exact age calculator. Every government recruitment notification comes with a strict "cut-off date" (e.g., "Age as of 01-August-2024"). The eligibility criteria often state a narrow window, such as "Minimum 21 Years and Maximum 30 Years." Being even a single day over the maximum age limit, or a single day under the minimum age limit, will lead to the immediate rejection of your application.
          </li>
          <li>
            <strong>Life and Health Insurance Policies:</strong> Insurance companies like LIC (Life Insurance Corporation of India) or private health insurers calculate your premium amounts based on your exact age. Some companies use the "Age Nearest Birthday" method, while others use your completed chronological age. A minor miscalculation in your age can result in paying higher premiums unnecessarily or facing policy rejection during claims due to inaccurate declarations.
          </li>
          <li>
            <strong>Medical and Healthcare Tracking:</strong> In the medical field, especially in pediatrics, age is rarely measured in just years. Doctors track infant growth, vaccination schedules, and developmental milestones based on exact weeks and total days lived. Knowing a baby's exact age in days is crucial for proper medical care.
          </li>
          <li>
            <strong>Legal and Educational Documents:</strong> School admissions under the Right to Education (RTE) act have strict age cut-offs for nursery and class 1 admissions. Similarly, legal milestones like obtaining a driving license, getting married legally, or applying for a passport require irrefutable proof of exact chronological age.
          </li>
        </ul>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Age Calculator</h2>
        <p className="mb-4">Our tool is designed with absolute simplicity in mind. Whether you are on a smartphone, tablet, or desktop computer, you can get your highly accurate age breakdown in less than ten seconds. Follow these three simple steps:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Your Date of Birth (DOB)</h3>
        <p className="mb-2 text-sm text-gray-600">This is the baseline for your calculation.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Locate the <strong>"Date of Birth"</strong> input field on the calculator interface.</li>
          <li>Click on the field to open the interactive calendar dropdown.</li>
          <li>Select your birth year, then your birth month, and finally the exact day you were born (e.g., 25/06/1995). The tool uses the standard Indian date format of DD/MM/YYYY.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Set the Target Date (Age at the Date Of)</h3>
        <p className="mb-2 text-sm text-gray-600">This tells the calculator *when* you want to measure your age.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Locate the <strong>"Age at the Date Of"</strong> field right below your DOB.</li>
          <li><strong>For your current age:</strong> By default, this field is automatically set to today's current date. If you just want to know how old you are right now, you do not need to change this.</li>
          <li><strong>For an official cut-off date:</strong> If you are filling out an application that asks for your age as of a specific date (like 1st January of the current year), click the calendar icon and navigate to that precise date.</li>
          <li><strong>For future/past dates:</strong> You can select future dates to see how old you will be when you retire, or past dates to find out exactly how old you were when a historical event happened.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 3: Instantly View Your Results</h3>
        <p className="mb-3 text-sm text-gray-600">Once your dates are entered, the calculator will automatically process the data without requiring page reloads. The screen will display a clear, highly detailed breakdown of your age in multiple formats:</p>
        <ul className="list-disc pl-6 mt-2 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>Detailed Age Breakdown:</strong> Displayed boldly in Years, Months, and Days (for example, "28 Years, 8 Months, 21 Days"). This is the exact format required for most Indian government forms and legal paperwork.</li>
          <li><strong>Total Days Lived:</strong> A fascinating secondary output showing exactly how many total days you have been alive since birth (for example, "10,550 Days").</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formula: How to Calculate Exact Age Manually</h2>
        <p className="mb-6">
          While our online calculator is the fastest method, there might be times when you are sitting in an examination hall, filling out an offline form, or simply don't have internet access. In these situations, you can calculate your exact age manually using a mathematical technique known as the <strong>Subtraction with Borrowing Method</strong>. 
        </p>
        <p className="mb-6">
          To perform this calculation accurately, you must always format your dates from the largest unit to the smallest unit (Year - Month - Day). You then write the target cut-off date on top, and your Date of Birth on the bottom row. You must subtract starting from the right side (Days), moving to Months, and finally Years.
        </p>
        
        <div className="bg-indigo-50/40 p-6 rounded-xl border border-indigo-100 shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">The Golden Rules of Borrowing</h3>
          <p className="text-sm mb-4 text-gray-700">When the number on the bottom (your birth date) is larger than the number on top (the target date), regular subtraction won't work. You have to "borrow" from the next column to the left, just like in basic primary school math, but with calendar rules.</p>
          <ul className="text-sm space-y-4 text-gray-800">
            <li>
              <strong>Rule 1: Borrowing Days.</strong> If the target day is smaller than your birth day, you must "borrow" 1 entire month from the target month column. You convert that borrowed month into days. <em>Important: Look at the previous month to know how many days to borrow (usually 30 or 31). Add these borrowed days to your target day before subtracting.</em>
            </li>
            <li>
              <strong>Rule 2: Borrowing Months.</strong> If the target month is smaller than your birth month, you must "borrow" 1 full year from the target year column. You convert that 1 year into exactly 12 months. Add these 12 months to your target month before subtracting.
            </li>
            <li>
              <strong>Rule 3: Subtracting Years.</strong> Once the days and months are sorted, simply subtract your birth year from the newly adjusted target year. Because you might have borrowed a year in Step 2, always remember to reduce the target year by 1 if borrowing occurred.
            </li>
          </ul>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Age Calculation Examples</h2>
        <p className="mb-6">To truly understand the borrowing method, let's walk through three practical, real-world scenarios that Indian users frequently encounter. We will look at a simple calculation, a government exam calculation with borrowing, and a complex leap year calculation.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Example 1: The Simple Scenario (No Borrowing)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Priya is applying for an entrance exam. Her DOB is <strong>10-March-1995</strong> (1995/03/10). The cut-off date is <strong>25-August-2024</strong> (2024/08/25).
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 mb-3 text-center border border-gray-200">
              Top (Cut-off): 2024 / 08 / 25<br/>
              Bot (DOB): &nbsp;&nbsp;&nbsp;&nbsp;1995 / 03 / 10
            </div>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700">
              <li><strong>Days:</strong> 25 is greater than 10. No borrowing needed. 25 - 10 = <strong>15 Days</strong>.</li>
              <li><strong>Months:</strong> 8 is greater than 3. No borrowing needed. 8 - 3 = <strong>5 Months</strong>.</li>
              <li><strong>Years:</strong> 2024 - 1995 = <strong>29 Years</strong>.</li>
            </ul>
            <p className="mt-3 text-sm text-emerald-700 font-semibold bg-emerald-50 inline-block px-3 py-1 rounded">Final Age: 29 Years, 5 Months, 15 Days</p>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Example 2: SSC CGL Exam (Double Borrowing Needed)</h3>
            <p className="mb-3 text-sm text-gray-600">
              Ravi wants to apply for a Staff Selection Commission (SSC) post. The notification states the age limit is 18 to 27 years as of <strong>01-January-2024</strong> (2024/01/01). Ravi's DOB is <strong>15-August-1998</strong> (1998/08/15). Is he eligible?
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 mb-3 text-center border border-gray-200">
              Top (Cut-off): 2024 / 01 / 01<br/>
              Bot (DOB): &nbsp;&nbsp;&nbsp;&nbsp;1998 / 08 / 15
            </div>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700">
              <li><strong>Days:</strong> 01 is less than 15. We must borrow 1 month from January. Wait, borrowing from January means we take days from the previous month (December), which has 31 days. New target days: 1 + 31 = 32. <br/><em>Calculation: 32 - 15 = <strong>17 Days</strong>.</em></li>
              <li><strong>Months:</strong> We borrowed 1 month, so January (1) becomes 0. Since 0 is less than 8 (August), we must borrow 1 year (12 months) from 2024. New target months: 0 + 12 = 12.<br/><em>Calculation: 12 - 8 = <strong>4 Months</strong>.</em></li>
              <li><strong>Years:</strong> We borrowed a year, so 2024 becomes 2023.<br/><em>Calculation: 2023 - 1998 = <strong>25 Years</strong>.</em></li>
            </ul>
            <p className="mt-3 text-sm text-blue-700 font-semibold bg-blue-50 inline-block px-3 py-1 rounded">Final Age: 25 Years, 4 Months, 17 Days. (Ravi is eligible!)</p>
          </div>

          {/* Example 3 */}
          <div className="border-l-4 border-purple-500 pl-4 bg-white p-5 rounded-r-xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Example 3: The Leap Year Complication</h3>
            <p className="mb-3 text-sm text-gray-600">
              Anjali was born on a leap year: <strong>25-February-2004</strong> (2004/02/25). She wants to know her age exactly on <strong>10-March-2023</strong> (2023/03/10).
            </p>
            <div className="bg-gray-50 p-3 rounded text-sm font-mono text-gray-700 mb-3 text-center border border-gray-200">
              Top (Cut-off): 2023 / 03 / 10<br/>
              Bot (DOB): &nbsp;&nbsp;&nbsp;&nbsp;2004 / 02 / 25
            </div>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700">
              <li><strong>Days:</strong> 10 is less than 25. We must borrow 1 month from March. We borrow the days of the previous month (February). Because the target year is 2023 (NOT a leap year), February has exactly 28 days. New target days: 10 + 28 = 38. <br/><em>Calculation: 38 - 25 = <strong>13 Days</strong>.</em></li>
              <li><strong>Months:</strong> We borrowed 1 month, so March (3) becomes 2. Since 2 is equal to Anjali's birth month (2), no borrowing is needed. <br/><em>Calculation: 2 - 2 = <strong>0 Months</strong>.</em></li>
              <li><strong>Years:</strong> No years were borrowed, so 2023 remains 2023. <br/><em>Calculation: 2023 - 2004 = <strong>19 Years</strong>.</em></li>
            </ul>
            <p className="mt-3 text-sm text-purple-700 font-semibold bg-purple-50 inline-block px-3 py-1 rounded">Final Age: 19 Years, 0 Months, 13 Days.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How is my exact age calculated for Indian government exams like UPSC or SSC?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Indian government exams require your exact age (in years, months, and days) as of a specific cut-off date mentioned in their official recruitment notification. You calculate this by subtracting your Date of Birth from that target date to ensure you fall strictly within their minimum and maximum age brackets. Our calculator does this for you automatically.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is the "Age at the Date Of" input field?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This field allows you to find out how old you were, or will be, on a specific date in history or the future. By default, it is set to today's date. However, you can change it to calculate your age on a specific day, like an upcoming college graduation, retirement date, or a job application deadline.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Does this calculator account for leap years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! Manual calculation can be error-prone because February has 29 days during leap years. Our online age calculator uses precise calendar algorithms that automatically account for all leap years and the varying number of days in every month, ensuring 100% mathematical accuracy.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Why do I need to know my age in total days?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Knowing your age in "total days" is often required for specific pediatric milestones for infants. It is also used in certain scientific or legal documents, or simply as a fun personal milestone (for example, finding out the exact day you turn 10,000 days old to celebrate with friends).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Which date format should I use?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, the legally accepted standard date format is DD/MM/YYYY (Day-Month-Year). Our calculator uses an intuitive visual calendar picker, so you simply click the days, months, and years without worrying about accidentally typing the format incorrectly.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Does this tool use the Indian/Western age system?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. It uses the standard chronological Western Age System used globally and officially recognized in India. In this system, a person is considered 0 years old at birth, and their age increases by one year exactly on their subsequent birthdays. Time spent in the womb is not counted.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-12">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Streamline your daily life, finances, and official paperwork with our suite of free online calculation tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Date Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Time Duration Calculator</a>
          <a href="/calculator/financial/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Discount Calculator</a>
          <a href="/calculator/financial/expense" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Expense Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Grocery Price Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700 font-medium">Mileage Calculator</a>
        </div>
      </section>
      
    </div>
  );
}