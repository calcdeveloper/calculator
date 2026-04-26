import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Education Loan EMI Calculator India | Free Moratorium Tool
  2. META DESCRIPTION: Free online Education Loan EMI Calculator for Indian students. Accurately calculate your monthly repayment, accounting for course duration and moratorium grace periods.
  3. URL SLUG: /education-loan-emi-calculator
  4. H1 TITLE: Free Online Education Loan EMI Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Education loan EMI calculator
      - Secondary keywords: education loan emi calculator sbi, student loan calculator india, moratorium period calculator, how to calculate education loan emi, hdfc education loan emi calculator, study loan calculator, interest during moratorium, education loan repayment calculator, loan tenure after moratorium, education loan interest calculator.
      - Long-tail keywords: how is education loan emi calculated after moratorium in india, calculate simple interest during study period, education loan emi calculator with grace period, tax benefit under section 80e education loan, sbi scholar loan emi calculation formula.
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
        "name": "How is an Education Loan EMI different from a Personal Loan EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard Personal Loan requires you to start paying the EMI immediately from the next month. An Education Loan comes with a 'Moratorium Period' (course duration plus a grace period) during which you do not have to pay the principal. However, simple interest accrues during this time and is added to your main loan amount once the repayment period begins."
        }
      },
      {
        "@type": "Question",
        "name": "What is a Moratorium Period in an education loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The moratorium period, also known as a repayment holiday, is the duration during which the borrower is not strictly required to make EMI payments. For Indian education loans, this is usually your entire Course Duration plus an additional Grace Period (typically 6 to 12 months after graduation or until you secure a job, whichever is earlier)."
        }
      },
      {
        "@type": "Question",
        "name": "Do I have to pay interest during the moratorium period?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While it is not mandatory to pay interest during the moratorium period, banks charge Simple Interest on your disbursed loan amount during this time. If you do not pay this interest while studying, it gets added to your principal amount (capitalized), resulting in a higher EMI later. Paying the interest during the study period can save you a substantial amount of money."
        }
      },
      {
        "@type": "Question",
        "name": "Are there tax benefits on education loan EMIs in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under Section 80E of the Income Tax Act of India, you can claim a deduction on the interest portion (not the principal) of your education loan EMI. This deduction is available for a maximum of 8 consecutive years starting from the year you begin repayment, with no upper limit on the deduction amount."
        }
      },
      {
        "@type": "Question",
        "name": "Can I prepay my education loan without penalty?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, as per Reserve Bank of India (RBI) guidelines, most banks do not charge any prepayment or foreclosure penalty on floating-rate education loans. You can make part-payments or close the loan entirely before the tenure ends to save on interest costs."
        }
      },
      {
        "@type": "Question",
        "name": "How does the grace period affect my total loan cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A longer grace period means your repayment starts later, giving you time to find a job. However, simple interest continues to build up during this grace period. Choosing a 12-month grace period instead of a 6-month one will increase your final starting principal, thereby slightly increasing your monthly EMI and total interest paid."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Free Online Education Loan EMI Calculator</h1>
        <p className="mb-4 text-lg text-gray-600">
          Pursuing higher education is one of the most significant investments you will make in your lifetime. Whether you are aiming for an MBA from an IIM, an MS abroad, or a B.Tech from a top Indian university, education loans bridge the financial gap. However, planning your future repayment requires more than just a standard loan calculator.
        </p>
        <p className="mb-4">
          Unlike standard auto or personal loans where your Equated Monthly Installment (EMI) begins immediately, student loans operate on a unique timeline. They include a highly specific feature called the <strong>Moratorium Period</strong>. This is a "repayment holiday" granted while you are actively studying, plus an additional grace period to help you secure employment before the bank demands its money back.
        </p>
        <p className="mb-4">
          The critical catch that catches many students off guard is that <strong>interest continues to accrue during this study period</strong>. Banks charge Simple Interest during your course, which then gets added to your original loan amount. This means by the time you graduate, your loan size is larger than what you initially borrowed.
        </p>
        <p className="mb-4">
          Our free <strong>Education Loan EMI Calculator</strong> is specifically engineered for Indian students and parents. By factoring in your course duration and moratorium grace period, it instantly provides you with a 100% accurate, realistic monthly repayment figure, allowing you to plan your post-graduation finances with total confidence.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Education Loan Calculator</h2>
        <p className="mb-4">To get an exact estimate of your future monthly installments, you need to input data specific to your academic timeline. Here is a step-by-step guide to using our tool:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 1: Enter the Loan Amount (₹)</h3>
        <p className="mb-2 text-sm text-gray-600">This is the principal amount you are borrowing from the bank.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Type the total approved loan amount into the <strong>"Loan Amount"</strong> field.</li>
          <li>For example, if your total tuition and living expenses covered by the bank equate to ₹15,00,000, enter 1500000.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 2: Specify the Repayment Tenure</h3>
        <p className="mb-2 text-sm text-gray-600">How long do you want to take to repay the loan once EMIs start?</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Input your desired duration in the <strong>"Loan Tenure (Years)"</strong> box.</li>
          <li><strong>Important:</strong> This timeframe <em>excludes</em> your study period. It strictly represents the years you will spend paying the EMIs. Indian banks typically allow a repayment tenure of 5 to 15 years.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 3: Provide the Annual Interest Rate (%)</h3>
        <p className="mb-2 text-sm text-gray-600">Enter the floating or fixed interest rate provided by your lender.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li>Enter the current rate in the <strong>"Annual Interest Rate (%)"</strong> field. E.g., 8.5, 9.2, or 10.5.</li>
          <li>Remember, female students and those admitted to premier institutes (like IITs/IIMs) often get a 0.5% interest rate concession from public sector banks like SBI.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-6">Step 4: Add Your Course Duration & Grace Period</h3>
        <p className="mb-2 text-sm text-gray-600">This defines your total Moratorium Period.</p>
        <ul className="list-disc pl-6 space-y-2 mb-4 text-sm text-gray-700">
          <li><strong>Course Duration (Years):</strong> Enter the exact length of your degree (e.g., 2 years for an MBA, 4 years for a B.Tech).</li>
          <li><strong>Moratorium Grace Period:</strong> Select the correct option from the dropdown menu. Banks usually offer options like <em>"6 Months after Course"</em> or <em>"12 Months after Course"</em>. If you intend to start paying immediately upon graduation, select <em>"0 Months"</em>.</li>
        </ul>

        <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100 mt-6">
          <p className="text-sm text-indigo-900 font-medium">
            Once you fill out these fields, the calculator automatically computes the simple interest accumulated during your college years, adds it to your initial loan, and generates your final monthly EMI.
          </p>
        </div>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section className="mt-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Mathematical Formulas Explained</h2>
        <p className="mb-6">
          Calculating an education loan is a two-step process. Our tool automates this entirely, but understanding the math helps you make better financial decisions.
        </p>
        
        <div className="space-y-6">
          {/* Phase 1 */}
          <div className="bg-yellow-50/40 p-6 rounded-2xl border border-yellow-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 1: Calculating Moratorium Interest</h3>
            <p className="text-sm mb-3 text-gray-700">
              During your study period and grace period, the bank does not compound your interest. They use a Simple Interest (SI) formula. This accumulated interest is kept aside and added to your main loan amount on the day your repayment officially begins.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-base text-yellow-800 font-bold text-center tracking-wide shadow-sm overflow-x-auto">
              SI = (P &times; R &times; T) &divide; 100
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 mt-3">
              <li><strong>P</strong> = Principal Loan Amount</li>
              <li><strong>R</strong> = Annual Interest Rate</li>
              <li><strong>T</strong> = Total Moratorium Time in Years (Course Duration + Grace Period)</li>
            </ul>
            <p className="mt-3 text-sm font-semibold text-gray-900">
              Revised Principal Amount (P<sub>new</sub>) = Original Principal (P) + Accumulated Interest (SI)
            </p>
          </div>

          {/* Phase 2 */}
          <div className="bg-blue-50/40 p-6 rounded-2xl border border-blue-200 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Phase 2: Calculating the Monthly EMI</h3>
            <p className="text-sm mb-3 text-gray-700">
              Once your moratorium ends, the standard Equated Monthly Installment (EMI) formula is applied to your newly capitalized loan amount. This uses a compound interest approach.
            </p>
            <div className="bg-white p-4 rounded-xl border border-gray-200 font-mono text-sm md:text-base text-blue-800 font-bold text-center shadow-sm overflow-x-auto">
              EMI = P<sub>new</sub> &times; r &times; [ (1+r)<sup>n</sup> &divide; ((1+r)<sup>n</sup> - 1) ]
            </div>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 mt-3">
              <li><strong>P<sub>new</sub></strong> = The Revised Principal calculated in Phase 1</li>
              <li><strong>r</strong> = Monthly Interest Rate (Annual Rate &divide; 12 &divide; 100)</li>
              <li><strong>n</strong> = Repayment Tenure in Months (Years &times; 12)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-Life Calculation Examples</h2>
        <p className="mb-6">To see how heavily the study period impacts your final payment, let us look at two practical examples of Indian students taking out loans.</p>
        
        <div className="space-y-8">
          {/* Example 1 */}
          <div className="border-l-4 border-indigo-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 1: 2-Year MBA Loan (Short Duration)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Arjun is pursuing an MBA. He takes a loan of ₹10,00,000 at an interest rate of 9% p.a. His course is 2 years long, and he has a 6-month grace period. He plans to repay the loan over 5 years.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Total Moratorium:</strong> 2 years (Course) + 0.5 years (Grace) = 2.5 Years</li>
              <li><strong>Simple Interest Accrued:</strong> (10,00,000 &times; 9 &times; 2.5) &divide; 100 = ₹2,25,000</li>
              <li><strong>New Principal upon Graduation:</strong> ₹10,00,000 + ₹2,25,000 = <strong>₹12,25,000</strong></li>
              <li><strong>EMI Calculation (₹12.25L over 5 years at 9%):</strong> The standard EMI formula is applied.</li>
              <li><strong>Final Monthly EMI:</strong> ₹25,429</li>
            </ul>
          </div>

          {/* Example 2 */}
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-6 rounded-r-2xl shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2 text-gray-900">Scenario 2: 4-Year B.Tech Loan (Long Duration)</h3>
            <p className="mb-3 text-sm text-gray-600 leading-relaxed">
              Neha takes a ₹20,00,000 loan for an engineering degree at an 8.5% interest rate. Her course is 4 years, plus a 1-year (12 months) grace period. She opts for a 10-year repayment plan.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-3 text-gray-700 bg-gray-50 p-4 rounded-lg border border-gray-200">
              <li><strong>Total Moratorium:</strong> 4 years (Course) + 1 year (Grace) = 5 Years</li>
              <li><strong>Simple Interest Accrued:</strong> (20,00,000 &times; 8.5 &times; 5) &divide; 100 = ₹8,50,000</li>
              <li><strong>New Principal upon Graduation:</strong> ₹20,00,000 + ₹8,50,000 = <strong>₹28,50,000</strong></li>
              <li><strong>EMI Calculation (₹28.5L over 10 years at 8.5%):</strong> The standard EMI formula is applied.</li>
              <li><strong>Final Monthly EMI:</strong> ₹35,336</li>
            </ul>
            <p className="mt-4 text-sm text-emerald-800 font-semibold bg-emerald-50 inline-block px-4 py-2 rounded-lg border border-emerald-100">
              Insight: Because Neha's study and grace period totaled 5 years, a massive ₹8.5 Lakhs in interest was added to her loan before she even paid her first EMI! This highlights why paying off simple interest during college is a smart financial move.
            </p>
          </div>
        </div>
      </section>

      {/* --- PRO TIP --- */}
      <section className="bg-gradient-to-r from-amber-50 to-yellow-50 p-8 rounded-2xl border border-yellow-200 mt-8 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
          <h3 className="text-xl font-bold text-gray-900">Expert Money-Saving Tip</h3>
        </div>
        <p className="text-gray-700 leading-relaxed">
          If you or your parents manage to pay off the <strong>Simple Interest during the moratorium period</strong> (i.e., making small monthly payments while you are still in college), you prevent the interest from capitalizing into your main principal. Furthermore, major banks like SBI and HDFC often provide a <strong>1% interest rate concession</strong> for the remainder of the loan tenure if you service your interest regularly during the study period. This can save you lakhs of rupees in the long run!
        </p>
      </section>

      {/* --- FAQ SECTION --- */}
      <section className="mt-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How is an Education Loan EMI different from a Personal Loan EMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A standard Personal Loan requires you to start paying the EMI immediately from the next month. An Education Loan comes with a 'Moratorium Period' (course duration plus a grace period) during which you do not have to pay the principal. However, simple interest accrues during this time and is added to your main loan amount once the repayment period begins.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">What is a Moratorium Period in an education loan?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The moratorium period, also known as a repayment holiday, is the duration during which the borrower is not strictly required to make EMI payments. For Indian education loans, this is usually your entire Course Duration plus an additional Grace Period (typically 6 to 12 months after graduation or until you secure a job, whichever is earlier).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Do I have to pay interest during the moratorium period?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While it is not mandatory to pay interest during the moratorium period, banks charge Simple Interest on your disbursed loan amount during this time. If you do not pay this interest while studying, it gets added to your principal amount (capitalized), resulting in a higher EMI later. Paying the interest during the study period can save you a substantial amount of money.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Are there tax benefits on education loan EMIs in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Under Section 80E of the Income Tax Act of India, you can claim a deduction on the interest portion (not the principal) of your education loan EMI. This deduction is available for a maximum of 8 consecutive years starting from the year you begin repayment, with no upper limit on the deduction amount.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">Can I prepay my education loan without penalty?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, as per Reserve Bank of India (RBI) guidelines, most banks do not charge any prepayment or foreclosure penalty on floating-rate education loans. You can make part-payments or close the loan entirely before the tenure ends to save on interest costs.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900 hover:bg-gray-50 transition-colors">How does the grace period affect my total loan cost?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A longer grace period means your repayment starts later, giving you time to find a job. However, simple interest continues to build up during this grace period. Choosing a 12-month grace period instead of a 6-month one will increase your final starting principal, thereby slightly increasing your monthly EMI and total interest paid.
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
          <a href="/calculator/education/cgpa-sgpa" className="text-sm text-indigo-700 hover:text-indigo-800 hover:bg-indigo-50 bg-white px-4 py-2 rounded-lg border border-gray-200 shadow-sm transition font-medium">SGPA to CGPA Converter</a>
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