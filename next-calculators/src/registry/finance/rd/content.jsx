import React from 'react';


export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is the interest earned on a Recurring Deposit (RD) taxable in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the interest earned on an RD is fully taxable as per your income tax slab. If the interest earned across all branches of a bank exceeds ₹40,000 in a financial year (₹50,000 for senior citizens), the bank will deduct TDS (Tax Deducted at Source) at 10%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I close my RD account before the maturity date?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, premature withdrawal of a Recurring Deposit is allowed by almost all Indian banks. However, it usually comes with a penalty. The bank may deduct 0.5% to 1% from the applicable interest rate for the period the deposit was held."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if I miss a monthly RD installment?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you miss a monthly installment, banks typically charge a nominal penalty, often calculated per ₹100 of the default amount. If you miss multiple consecutive payments (usually 3 to 6 months depending on the bank), the bank may close the account and refund the accumulated balance."
        }
      },
      {
        "@type": "Question",
        "name": "Which is better: Fixed Deposit (FD) or Recurring Deposit (RD)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Both offer similar guaranteed interest rates. FDs are better if you have a lump sum amount to invest immediately. RDs are ideal if you do not have a large sum upfront but can commit to saving a smaller, fixed portion of your monthly income."
        }
      },
      {
        "@type": "Question",
        "name": "How is RD interest calculated by Indian banks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, banks calculate RD interest using the quarterly compounding formula. Although you deposit money every month, the interest is compounded at the end of every quarter (every 3 months) based on the balance accumulated."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free RD Calculator: Grow Your Wealth Month by Month</h1>
        <p className="mb-4">
          A <strong>Recurring Deposit (RD)</strong> is one of the safest and most disciplined ways to accumulate wealth in India. Perfect for salaried professionals, housewives, and students, an RD allows you to deposit a fixed amount every month into your bank or post office account. Over time, these small, consistent deposits compound into a significant corpus, earning a guaranteed rate of interest identical to a standard Fixed Deposit.
        </p>
        <p>
          Whether you are saving up for a down payment on a car, planning a vacation, or building a secure emergency fund, predicting your exact returns is crucial. Our <strong>RD Calculator</strong> takes the guesswork out of your financial planning. By factoring in the standard quarterly compounding used by Indian banking institutions, this tool instantly reveals exactly how much interest you will earn and what your final maturity value will be.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Recurring Deposit Calculator</h2>
        <p className="mb-4">Calculating your future wealth requires just three simple inputs. Adjust the sliders to match your saving capacity and immediately see the results:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Deposit Details</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Monthly Deposit:</strong> Slide or type the amount you intend to save every single month. For example, setting this to ₹5,000 shows a moderate saving plan.</li>
          <li><strong>Interest Rate (p.a):</strong> Input the annual interest rate offered by your bank. For our example, we are using a realistic bank rate of 6.5%.</li>
          <li><strong>Time Period:</strong> Choose how long you want to keep depositing. We have selected 5 Years in this scenario.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Guaranteed Returns</h3>
        <p className="mb-3">The calculator processes the quarterly compounding math instantly to display three vital figures:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Total Investment: <span className="font-normal text-gray-700">The out-of-pocket money you contributed. Depositing ₹5,000 monthly for 5 years means you invested ₹3,00,000.</span></li>
          <li>Total Interest Earned: <span className="font-normal text-gray-700">The wealth generated by the bank's compounding. Here, it is ₹54,954.</span></li>
          <li>Maturity Value: <span className="font-normal text-gray-700">The final lump sum you receive at the end of the tenure. Your total payout will be ₹3,54,954.</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Visual Breakdown</h3>
        <p>
          The dynamic doughnut chart at the bottom gives you a clear visual perspective, splitting the final amount into the Principal (Total Investment) and the wealth generated over time (Total Interest).
        </p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the RD Calculation Formula</h2>
        <p className="mb-4">
          Unlike a standard Fixed Deposit where a single lump sum earns interest, an RD involves multiple deposits made at different times. Therefore, the first month's deposit earns interest for the full tenure, while the last month's deposit only earns interest for one month.
        </p>
        <p className="mb-4">
          Most banks in India compound RD interest <strong>quarterly</strong>. The standard mathematical formula used to calculate the maturity value of a Recurring Deposit is:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center overflow-x-auto mb-4">
          <span className="text-xl font-semibold text-calc-black whitespace-nowrap">
            M = R &times; [ {"(1 + i)"}<sup>n</sup> - 1 ] / [ 1 - {"(1 + i)"}<sup>-1/3</sup> ]
          </span>
        </div>

        <div className="space-y-2 mt-6">
          <p><strong>Decoding the Variables:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>M</strong> = The final Maturity value you receive.</li>
            <li><strong>R</strong> = Your regular Monthly installment amount.</li>
            <li><strong>i</strong> = The Interest rate per quarter (calculated as Annual Rate / 4 / 100).</li>
            <li><strong>n</strong> = Total number of quarters in your deposit tenure.</li>
          </ul>
        </div>
        <div className="mt-5 text-sm text-gray-600 bg-blue-50 p-4 rounded-lg border border-blue-100">
          <strong>Why use an online calculator?</strong> Manually calculating the future value of dozens of individual deposits with quarterly compounding is highly complex and prone to errors. Our RD Calculator applies this exact formula in milliseconds to give you bank-accurate results.
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Examples</h2>
        <p className="mb-6">Let us look at how different savings habits shape up over time using the RD structure.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: Planning for a Down Payment</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul wants to buy a car in a few years. He decides to start an RD with a <strong>₹5,000 monthly deposit</strong> at his local bank offering <strong>6.5% p.a.</strong> interest. He sets the tenure for <strong>5 Years</strong>.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Money Deposited by Rahul:</strong> ₹3,00,000</li>
              <li>• <strong>Interest Earned:</strong> ₹54,954</li>
              <li>• <strong>Total Funds Available (Maturity):</strong> ₹3,54,954</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Result: Rahul successfully creates a ₹3.5 Lakh corpus effortlessly without taking a hit on his current lifestyle.</p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: The Long-Term Saver</h3>
            <p className="mb-3 text-sm text-gray-600">Anita decides to save a smaller amount but for a longer period. She deposits ₹2,000 per month for 10 years at an interest rate of 7.0% p.a.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Total Investment:</strong> ₹2,40,000</li>
              <li>• <strong>Total Interest Earned:</strong> ₹1,06,000 (Approx)</li>
              <li>• <strong>Final Maturity Value:</strong> ₹3,46,000 (Approx)</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Result: By staying invested longer, nearly a third of Anita's final corpus is made up purely of compound interest.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is the interest earned on a Recurring Deposit (RD) taxable in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, the interest earned on an RD is fully taxable as per your income tax slab under "Income from Other Sources". Furthermore, if the interest earned across all branches of your bank exceeds ₹40,000 in a financial year (₹50,000 for senior citizens), the bank will automatically deduct TDS (Tax Deducted at Source) at a rate of 10%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Can I close my RD account before the maturity date?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, premature withdrawal of a Recurring Deposit is allowed by almost all Indian banks. However, it usually comes with a penalty. The bank may deduct 0.5% to 1% from the applicable interest rate for the period the deposit was actually held with the bank, reducing your overall returns.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What happens if I miss a monthly RD installment?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you miss a monthly installment, banks typically charge a nominal penalty, often calculated per ₹100 of the default amount per month. If you miss multiple consecutive payments (usually 3 to 6 months depending on the bank's specific rules), the bank reserves the right to close the account preemptively and refund the accumulated balance to your linked savings account.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Which is better: Fixed Deposit (FD) or Recurring Deposit (RD)?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Neither is strictly "better"; it depends entirely on your cash flow. Both offer similar, guaranteed interest rates. FDs are the superior choice if you currently have a lump sum amount ready to invest immediately. RDs are ideal if you do not have a large sum upfront but can commit to saving a smaller, fixed portion of your monthly salary.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How is RD interest calculated by Indian banks?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, standard bank RDs are calculated using a quarterly compounding formula. This means that although you are depositing money into the account every single month, the bank calculates and adds the interest to your balance at the end of every quarter (every 3 months).
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">More Helpful Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Ensure your entire financial portfolio is optimized using our suite of free calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan EMI</a>
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Fixed Deposit (FD)</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity</a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">General EMI</a>
          <a href="/calculator/finance/gst" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">GST Calculator</a>
          <a href="/calculator/finance/home-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Home Loan EMI</a>
          <a href="/calculator/finance/lumpsum" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Lumpsum Return</a>
          <a href="/calculator/finance/personal-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Personal Loan EMI</a>
          <a href="/calculator/finance/ppf" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">PPF Calculator</a>
          <a href="/calculator/finance/retirement" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Retirement Planning</a>
          <a href="/calculator/finance/simple-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Simple Interest</a>
          <a href="/calculator/finance/sip" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">SIP Returns</a>
        </div>
      </section>
      
    </div>
  );
}