import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Take Home Salary different from Gross Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gross salary is your total monthly earnings before any deductions. Take Home Salary (Net Salary) is the actual amount credited to your bank account after mandatory deductions like EPF, Professional Tax, and Income Tax (TDS)."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my Take Home Salary fluctuate in some months?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fluctuations usually happen due to variable components like performance bonuses, overtime pay, or changes in TDS deductions (often increasing towards the end of the financial year if you haven't submitted tax-saving investment proofs)."
        }
      },
      {
        "@type": "Question",
        "name": "Is HRA part of my Take Home Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, House Rent Allowance (HRA) is paid out to you every month as part of your gross earnings, and it forms a significant portion of your take home salary."
        }
      },
      {
        "@type": "Question",
        "name": "How can I increase my Take Home Salary legally?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can optimize your tax planning by claiming deductions under Section 80C, 80D, and HRA (if in the old regime), which reduces your TDS deduction. Also, depending on your company policy, you can opt for tax-exempt reimbursements instead of taxable special allowances."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Take Home Salary Calculator: Decode Your Monthly Payslip</h1>
        <p className="mb-4 text-lg text-gray-600">
          Understanding your payslip shouldn't require a degree in finance. Every month, you receive a detailed breakdown of your earnings and deductions, but calculating how those numbers translate into your final bank deposit can be confusing. That is where our <strong>Take Home Salary Calculator</strong> steps in.
        </p>
        <p className="mb-4">
          Unlike broad CTC calculators that estimate averages based on annual packages, this tool is designed for precision. It allows you to enter the exact line items from your offer letter or monthly payslip—such as Basic Pay, HRA, EPF deductions, and TDS—to instantly reveal your exact net in-hand salary. Whether you are verifying your HR's payroll calculations, planning a personal budget, or comparing two competing job offers based on actual cash flow, this calculator gives you the granular control you need.
        </p>
        <p className="mb-4">
          By distinguishing clearly between what you earn (gross) and what you keep (net), you can make smarter decisions about your personal finances, tax-saving investments, and daily expenses.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR - Placed right below Intro as per user instruction */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Take Home Salary Calculator</h2>
        <p className="mb-4">
          Grab your latest payslip or your HR offer letter annexure, and follow these simple steps to calculate your exact monthly inflow:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Enter Gross Earnings:</strong> Input your monthly Basic Pay, House Rent Allowance (HRA), Special Allowance, and any other fixed allowances (like LTA, fuel reimbursement, or internet allowance).</li>
          <li><strong>Enter Mandatory Deductions:</strong> Input your monthly Employee Provident Fund (EPF) contribution. This is usually 12% of your Basic Pay, but check your payslip for the exact figure.</li>
          <li><strong>Enter Tax Deductions:</strong> Input your Professional Tax (usually ₹200 if applicable in your state) and your monthly Income Tax deducted at source (TDS).</li>
        </ul>
        <p className="mt-4">
          As you type, the tool instantly calculates your Total Gross Earnings and subtracts your Total Deductions to provide your final Net Take Home Salary. The accompanying chart visualizes what portion of your income goes to taxes and savings versus what you can spend today.
        </p>
      </section>

      {/* ANATOMY OF A PAYSLIP */}
      <section className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Anatomy of Your Payslip: Earnings</h2>
        <p className="mb-4">
          Your gross salary is the sum of various components structured by your employer. Let's break down the most common ones:
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Basic Pay</h3>
        <p className="mb-4">
          This is the core of your salary. It is fully taxable and usually makes up 40% to 50% of your total compensation. The basic pay is critical because it dictates the amount of your Provident Fund (EPF) deductions and determines your gratuity payout when you leave the company.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">House Rent Allowance (HRA)</h3>
        <p className="mb-4">
          HRA is given to meet the cost of renting a home. If you live in a rented accommodation and opt for the Old Tax Regime, you can claim significant tax exemptions on this component by submitting rent receipts. If you live in your own house or opt for the New Tax Regime, this amount is fully taxable.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Special Allowance</h3>
        <p className="mb-4">
          Often used by employers as a "balancing figure," the Special Allowance makes up the remainder of your gross salary after Basic, HRA, and standard deductions are accounted for. It is fully taxable and has no specific tax exemptions tied to it.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Other Allowances & Reimbursements</h3>
        <p className="mb-4">
          These can include Leave Travel Allowance (LTA), Books & Periodicals allowance, Internet allowance, and Meal Vouchers. Depending on company policy and tax laws, some of these can be claimed as tax-exempt if you submit valid bills.
        </p>
      </section>

      {/* UNDERSTANDING DEDUCTIONS */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Payslip Deductions</h2>
        <p className="mb-4">
          Deductions are the reason your bank account sees less money than your gross salary figure promises. While nobody likes deductions, most of them go toward your own future security or statutory obligations.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Employee Provident Fund (EPF)</h3>
        <p className="mb-4">
          A forced savings mechanism for retirement. Under Indian labor laws, you contribute 12% of your Basic Salary to this fund. While it reduces your immediate liquidity, it builds a massive, tax-free retirement corpus that compounds at a high interest rate over the years.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Professional Tax (PT)</h3>
        <p className="mb-4">
          A state-level tax imposed on earning individuals. It varies by state (for instance, Maharashtra levies it, while Delhi does not). The maximum allowable deduction under the constitution is ₹2,500 per year, usually deducted at ₹200 for 11 months and ₹300 in the final month.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Tax Deducted at Source (TDS)</h3>
        <p className="mb-4">
          This is your income tax. At the beginning of the financial year, you declare your investments to your employer. Based on your expected annual income and chosen tax regime, your employer estimates your tax liability and deducts it evenly across 12 months. If you fail to submit investment proofs by January/February, your TDS deductions in the final months of the financial year can spike significantly, temporarily shrinking your take home pay.
        </p>
      </section>

      {/* STRATEGIES TO MAXIMIZE TAKE HOME */}
      <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategies to Maximize Your Take Home Salary</h2>
        <p className="mb-4">
          Want to see a bigger number hit your bank account every month? Consider these optimization strategies:
        </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            <strong>Optimize Your Tax Regime:</strong> Use our Income Tax Calculator to compare the Old vs. New Tax Regimes. For many young professionals without home loans or massive 80C investments, the New Regime often results in lower TDS, thereby increasing monthly in-hand pay.
          </li>
          <li>
            <strong>Utilize Reimbursements:</strong> Speak to your HR about restructuring your CTC to include food coupons (like Sodexo), internet allowances, and LTA. Unlike Special Allowance, reimbursements are tax-exempt against valid bills, directly reducing your TDS.
          </li>
          <li>
            <strong>Submit Investment Proofs Early:</strong> Do not wait until March. Declare your tax-saving investments in April and submit proofs by December. This prevents massive TDS cuts in January, February, and March, keeping your take-home pay stable throughout the year.
          </li>
        </ul>
      </section>

      {/* EXAMPLES & CASE STUDIES */}
      <section className="bg-cyan-50/50 p-8 rounded-2xl border border-cyan-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Decoding Real-World Payslips</h2>
        <p className="mb-4">
          To illustrate how different structures impact your take-home pay, let's examine two distinct examples of a ₹1,00,000 monthly gross salary.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Example A: The High-Basic Structure</h3>
        <p className="mb-4">
          Ravi earns a gross salary of ₹1,00,000 per month. His company structures the basic pay at 50% (₹50,000). Because his basic is high, his mandatory EPF deduction (12% of basic) is ₹6,000. Assuming a flat ₹5,000 TDS and ₹200 Professional Tax, Ravi's total monthly deductions are ₹11,200. His final take-home salary is <strong>₹88,800</strong>. His retirement corpus is growing rapidly, but his monthly liquidity is slightly reduced.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Example B: The Low-Basic Structure</h3>
        <p className="mb-4">
          Sneha also earns a gross salary of ₹1,00,000 per month at a startup. Her company structures the basic pay at 30% (₹30,000) and keeps the rest as special allowances. Her EPF deduction (12% of basic) drops to just ₹3,600. With the same ₹5,000 TDS and ₹200 Professional Tax, Sneha's total deductions are only ₹8,800. Her final take-home salary is <strong>₹91,200</strong>. Sneha enjoys more cash in hand today, but she sacrifices long-term compounded wealth in her EPF account.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is Take Home Salary different from Gross Salary?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Gross salary is your total monthly earnings before any deductions. Take Home Salary (Net Salary) is the actual amount credited to your bank account after mandatory deductions like EPF, Professional Tax, and Income Tax (TDS).
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why does my Take Home Salary fluctuate in some months?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Fluctuations usually happen due to variable components like performance bonuses, overtime pay, or changes in TDS deductions (often increasing towards the end of the financial year if you haven't submitted tax-saving investment proofs).
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is HRA part of my Take Home Salary?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, House Rent Allowance (HRA) is paid out to you every month as part of your gross earnings, and it forms a significant portion of your take home salary.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How can I increase my Take Home Salary legally?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You can optimize your tax planning by claiming deductions under Section 80C, 80D, and HRA (if in the old regime), which reduces your TDS deduction. Also, depending on your company policy, you can opt for tax-exempt reimbursements instead of taxable special allowances.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
