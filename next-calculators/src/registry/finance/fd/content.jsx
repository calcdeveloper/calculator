import React from "react";


export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are FD returns taxable in India?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, the interest earned on Fixed Deposits is fully taxable. The interest is added to your 'Income from Other Sources' and taxed according to your applicable income tax slab. Additionally, banks will deduct TDS (Tax Deducted at Source) at 10% if your interest income exceeds ₹40,000 in a financial year (₹50,000 for senior citizens).",
        },
      },
      {
        "@type": "Question",
        name: "Can I withdraw my Fixed Deposit before maturity?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, most banks allow premature withdrawal of FDs in case of emergencies. However, they usually charge a penalty. The penalty typically ranges from 0.5% to 1.0% less than the effective interest rate for the period the deposit was actually held.",
        },
      },
      {
        "@type": "Question",
        name: "What is a Tax-Saver FD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A Tax-Saver FD is a special term deposit that comes with a mandatory 5-year lock-in period. You can claim a tax deduction of up to ₹1.5 Lakhs under Section 80C of the Income Tax Act on the principal amount deposited. However, you cannot break this FD before the 5 years are completed.",
        },
      },
      {
        "@type": "Question",
        name: "Do senior citizens get extra interest on FDs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, almost all banks, post offices, and NBFCs in India offer a higher interest rate to senior citizens (individuals aged 60 years and above). The premium is usually an additional 0.50% to 0.75% above the regular public interest rates.",
        },
      },
      {
        "@type": "Question",
        name: "How is FD interest calculated, simple or compound?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "For short-term FDs with a tenure of fewer than 6 months, the interest is typically calculated using simple interest. For long-term FDs with a tenure of 6 months or more, the interest is compounded, and most Indian banks calculate this on a quarterly basis.",
        },
      },
      {
        "@type": "Question",
        name: "Is my money safe in a bank FD?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, Fixed Deposits in registered Indian banks are highly secure. Deposits are insured up to ₹5,00,000 per bank per depositor (including principal and interest) by the DICGC (Deposit Insurance and Credit Guarantee Corporation), which is a wholly-owned subsidiary of the Reserve Bank of India (RBI).",
        },
      },
    ],
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">
          Free FD Calculator: Calculate Fixed Deposit Returns
        </h1>
        <p className="mb-4">
          A Fixed Deposit (FD), also known as a term deposit, is one of the most
          trusted and secure investment instruments in India. Offered by all
          major banks, post offices, and Non-Banking Financial Companies
          (NBFCs), FDs allow you to deposit a lump sum of money for a specific
          tenure. In return, you earn a guaranteed, fixed interest rate that
          remains immune to the volatility of the stock market.
        </p>
        <p className="mb-4">
          Whether you are a conservative investor protecting your capital, a
          senior citizen relying on regular interest income, or a young
          professional saving up for a short-term goal like a car or a vacation,
          Fixed Deposits offer unmatched financial peace of mind.
        </p>
        <p>
          However, manually calculating your exact maturity amount—especially
          with quarterly compounding—can be a tedious process. Our completely
          free <strong>FD Calculator</strong> is built specifically for Indian
          investors. It takes the mathematical guesswork out of your financial
          planning, instantly computing your total wealth gained so you can
          compare bank rates and make confident investment decisions.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the FD Calculator</h2>
        <p className="mb-4">Using our Fixed Deposit calculator is quick and intuitive. Just use the sliders or type your details into the input boxes to instantly see your guaranteed returns:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Deposit Details</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Total Investment:</strong> Enter or slide to the initial principal amount you plan to deposit into the FD.</li>
          <li><strong>Interest Rate (p.a):</strong> Input the annual interest rate percentage offered by your bank, NBFC, or post office.</li>
          <li><strong>Time Period:</strong> Select the duration or tenure of your fixed deposit in years (Yr).</li>
          <li><strong>Compounding Frequency:</strong> Use the dropdown menu to choose how often the institution calculates and adds interest to your principal (Quarterly is the standard practice for most Indian banks).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Returns</h3>
        <p className="mb-3">The calculator instantly updates the right panel with your final maturity details:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Maturity Value: <span className="font-normal text-gray-700">Your final total balance at the end of the tenure, displayed in the prominent green box.</span></li>
          <li>Total Investment: <span className="font-normal text-gray-700">The original principal amount you deposited.</span></li>
          <li>Total Interest Earned: <span className="font-normal text-gray-700">The total profit generated purely through the accumulated interest over your chosen time period.</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Analyze & Download</h3>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Visual Breakdown: <span className="font-normal text-gray-700">Check the doughnut chart to easily visualize the ratio of your Total Investment versus the Total Interest earned.</span></li>
          <li>View Schedule & Download PDF: <span className="font-normal text-gray-700">Click these buttons to view a detailed timeline of how your FD grows over time, or save the report directly to your device for offline reference.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">
          The FD Calculation Formula Explained
        </h2>
        <p className="mb-4">
          While short-term FDs (less than 6 months) generally use simple
          interest, long-term Fixed Deposits in India utilize the power of
          compound interest. Most major banks calculate and compound your
          interest <strong>quarterly</strong> (four times a year).
        </p>

        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-calc-black overflow-x-auto my-6">
          A = P &times; (1 + r/n)<sup>n &times; t</sup>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
          <div>
            <strong>A</strong> = Maturity Amount (The final payout you receive)
          </div>
          <div>
            <strong>P</strong> = Principal Amount (Your initial deposited lump
            sum)
          </div>
          <div>
            <strong>r</strong> = Annual Interest Rate (converted to a decimal,
            e.g., 7% is 0.07)
          </div>
          <div>
            <strong>n</strong> = Number of compounding periods per year (For
            Indian banks, usually 4)
          </div>
          <div>
            <strong>t</strong> = Total Tenure of the deposit in years
          </div>
        </div>

        <h3 className="font-bold text-xl mb-2 text-calc-black mt-6">
          Why Quarterly Compounding Matters
        </h3>
        <p>
          Compounding means you earn "interest on your interest." Because Indian
          banks add the interest you've earned back to your principal every
          three months, your wealth grows slightly faster than if it were
          compounded only once a year. For example, if you invest ₹1 Lakh at 7%
          p.a., simple interest yields exactly ₹7,000 in a year. Quarterly
          compounding yields ₹7,186. Over 5 to 10 years, this small mathematical
          bump snowballs into a significantly larger return!
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">
          Real-Life FD Calculation Examples
        </h2>
        <p className="mb-6">
          Let’s examine a few realistic scenarios for Indian investors to see
          how different tenures and rates impact the maturity value.
        </p>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Example 1: The Short-Term Goal
            </h3>
            <p className="mb-2 text-sm">
              Rahul wants to park <strong>₹2,00,000</strong> safely before using
              it as a down payment for a car. He opens an FD for{" "}
              <strong>1 Year</strong>. His bank offers{" "}
              <strong>6.5% p.a.</strong>, compounded quarterly.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li>
                <strong>Principal (P):</strong> ₹2,00,000
              </li>
              <li>
                <strong>Interest Rate (r):</strong> 6.5% (0.065)
              </li>
              <li>
                <strong>Tenure (t):</strong> 1 Year
              </li>
              <li>
                <strong>Total Interest Earned:</strong> ₹13,322
              </li>
              <li>
                <strong>Final Maturity Amount:</strong>{" "}
                <span className="font-bold text-calc-black">₹2,13,322</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Example 2: The 5-Year Tax Saver
            </h3>
            <p className="mb-2 text-sm">
              Priya wants to claim a Section 80C tax deduction. She invests in a
              5-year tax-saver FD, depositing <strong>₹1,50,000</strong>. Her
              bank offers a <strong>7.0% p.a.</strong> interest rate.
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li>
                <strong>Principal (P):</strong> ₹1,50,000
              </li>
              <li>
                <strong>Interest Rate (r):</strong> 7.0% (0.07)
              </li>
              <li>
                <strong>Tenure (t):</strong> 5 Years
              </li>
              <li>
                <strong>Total Interest Earned:</strong> ₹62,217
              </li>
              <li>
                <strong>Final Maturity Amount:</strong>{" "}
                <span className="font-bold text-calc-black">₹2,12,217</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">
              Example 3: Senior Citizen Investment
            </h3>
            <p className="mb-2 text-sm">
              Mr. Sharma, a retired senior citizen, deposits a large corpus of{" "}
              <strong>₹10,00,000</strong> for <strong>3 Years</strong>. Because
              of his age, he gets a special premium rate of{" "}
              <strong>8.0% p.a.</strong>
            </p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li>
                <strong>Principal (P):</strong> ₹10,00,000
              </li>
              <li>
                <strong>Interest Rate (r):</strong> 8.0% (0.08)
              </li>
              <li>
                <strong>Tenure (t):</strong> 3 Years
              </li>
              <li>
                <strong>Total Interest Earned:</strong> ₹2,68,242
              </li>
              <li>
                <strong>Final Maturity Amount:</strong>{" "}
                <span className="font-bold text-calc-black">₹12,68,242</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              Are FD returns taxable in India?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, the interest earned on Fixed Deposits is fully taxable. The
              interest is added to your 'Income from Other Sources' and taxed
              according to your applicable income tax slab. Additionally, banks
              will deduct TDS (Tax Deducted at Source) at 10% if your interest
              income exceeds ₹40,000 in a financial year (₹50,000 for senior
              citizens).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              Can I withdraw my Fixed Deposit before maturity?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, most banks allow premature withdrawal of FDs in case of
              emergencies. However, they usually charge a penalty. The penalty
              typically ranges from 0.5% to 1.0% less than the effective
              interest rate for the period the deposit was actually held by the
              bank.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              What is a Tax-Saver FD?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A Tax-Saver FD is a special term deposit that comes with a
              mandatory 5-year lock-in period. You can claim a tax deduction of
              up to ₹1.5 Lakhs under Section 80C of the Income Tax Act on the
              principal amount deposited. Because of the tax benefits, you
              cannot break this FD before the 5 years are completed.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              Do senior citizens get extra interest on FDs?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, almost all public and private banks, post offices, and NBFCs
              in India offer a higher interest rate to senior citizens
              (individuals aged 60 years and above). The premium is usually an
              additional 0.50% to 0.75% above the regular public interest rates.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              How is FD interest calculated, simple or compound?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For short-term FDs with a tenure of fewer than 6 months, the
              interest is typically calculated using simple interest. For
              long-term FDs with a tenure of 6 months or more, the interest is
              compounded. Most Indian banks calculate this compounding on a
              quarterly basis.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">
              Is my money safe in a bank FD?
            </summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, Fixed Deposits in registered Indian banks are highly secure.
              Deposits are insured up to ₹5,00,000 per bank per depositor
              (including principal and interest) by the DICGC (Deposit Insurance
              and Credit Guarantee Corporation), which is a wholly-owned
              subsidiary of the Reserve Bank of India (RBI).
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">
          Explore Related Financial Calculators
        </h3>
        <p className="text-sm mb-5 text-gray-600">
          Take complete control of your financial planning. Explore our
          comprehensive suite of free calculation tools designed for the Indian
          market:
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="/calculator/finance/car-loan"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Car Loan
          </a>
          <a
            href="/calculator/finance/compound-interest"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Compound Interest
          </a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Standard EMI</a>
          <a
            href="/calculator/finance/gratuity"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Gratuity
          </a>
          <a
            href="/calculator/finance/gst"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            GST
          </a>
          <a
            href="/calculator/finance/home-loan"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Home Loan
          </a>
          <a
            href="/calculator/finance/lumpsum"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Mutual Fund Lumpsum
          </a>
          <a
            href="/calculator/finance/personal-loan"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Personal Loan
          </a>
          <a
            href="/calculator/finance/ppf"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            PPF
          </a>
          <a
            href="/calculator/finance/rd"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Recurring Deposit (RD)
          </a>
          <a
            href="/calculator/finance/retirement"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Retirement Planning
          </a>
          <a
            href="/calculator/finance/simple-interest"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            Simple Interest
          </a>
          <a
            href="/calculator/finance/sip"
            className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue"
          >
            SIP Returns
          </a>
        </div>
      </section>
    </div>
  );
}
