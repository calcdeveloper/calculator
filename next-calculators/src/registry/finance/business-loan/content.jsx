import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between a business loan EMI and a personal loan EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mathematically, the EMI calculation (Principal * Rate * Time) is identical. However, business loans often involve massive upfront processing fees and 18% GST on those fees. Additionally, the interest paid on a business loan is a tax-deductible expense for the company, whereas personal loan interest generally is not."
        }
      },
      {
        "@type": "Question",
        "name": "Why is the amount deposited into my bank account less than my approved loan amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks do not bill you for the processing fee and GST; they deduct it directly from your principal before disbursal. If you are approved for a ₹10,00,000 loan with a 2% processing fee (plus 18% GST), the bank deducts ₹23,600 upfront. Only ₹9,76,400 actually hits your bank account, but you must pay interest on the full ₹10,00,000."
        }
      },
      {
        "@type": "Question",
        "name": "Is GST charged on the EMI of a business loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike credit card EMIs, standard term loans and business loans are exempt from GST on the interest component. However, the 18% GST strictly applies to the processing fees, documentation charges, and any pre-closure penalty fees."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim the GST paid on the processing fee as Input Tax Credit (ITC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. If your business is GST-registered and you take a commercial loan for business purposes, you can claim the 18% GST paid on the bank's processing fees as an Input Tax Credit (ITC) to offset your future tax liabilities."
        }
      },
      {
        "@type": "Question",
        "name": "How does a moratorium period affect my business loan EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A moratorium allows you to pause EMI payments for a few months (e.g., while setting up a factory). However, interest continues to accrue during this period and is added to your principal. Once the moratorium ends, your new EMI will be significantly higher because you are now paying interest on the newly inflated principal."
        }
      },
      {
        "@type": "Question",
        "name": "Should I choose a fixed or floating interest rate for my business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Floating rates are generally cheaper initially and do not carry pre-closure penalties, making them ideal for businesses expecting rapid cash flow. Fixed rates offer exact predictability for your monthly budget but often lock you into higher long-term costs and severe pre-closure penalties."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Business Loan EMI Calculator: Master Your Company's Cash Flow</h1>
        <p className="mb-4 text-lg text-gray-600">
          In the competitive landscape of modern commerce, liquidity is oxygen. Whether you are an MSME looking to expand manufacturing capacity, a retail chain securing inventory for the holiday season, or a tech startup seeking working capital, external debt is often the fastest engine for growth. However, miscalculating the true cost of that debt can suffocate your operating margins.
        </p>
        <p className="mb-4">
          Commercial lending operates under fundamentally different rules than retail consumer lending. When a bank approves a ₹1 Crore business loan, they do not simply hand you ₹1 Crore. They apply aggressive upfront processing fees and mandatory 18% government GST on those services, deducting these costs directly from your principal before the money ever hits your corporate account. You receive less capital than you applied for, yet you are legally bound to pay interest on the entire gross amount.
        </p>
        <p className="mb-4">
          Our forensic <strong>Business Loan EMI Calculator</strong> is engineered specifically for founders, CFOs, and finance teams. It cuts through the bank's promotional brochures to calculate exactly how much capital will actually be disbursed to your account, your exact monthly Equated Monthly Installment (EMI), and the absolute total interest you will sacrifice over the lifecycle of the loan. Do not sign a commercial term sheet until you have validated the math here.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Business Loan EMI Calculator</h2>
        <p className="mb-4">
          To generate an accurate, down-to-the-rupee breakdown of your company's true borrowing costs, input the exact variables provided in your bank's sanction letter:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Business Loan Amount (₹):</strong> The gross principal amount you are requesting from the lender. For MSMEs, this typically ranges from ₹10 Lakhs to ₹5 Crores depending on audited turnover.</li>
          <li><strong>Interest Rate (% p.a.):</strong> The annualized interest rate. Commercial rates are highly risk-adjusted. A heavily collateralized machinery loan might secure a 9% rate, while an unsecured working capital loan could easily attract a 16% to 18% rate.</li>
          <li><strong>Loan Tenure (Months):</strong> The duration over which the company will repay the debt. Short-term working capital loans are often 12 to 36 months, while commercial real estate loans can stretch to 120 months (10 years). Longer tenures protect your monthly cash flow but severely inflate your total interest paid.</li>
          <li><strong>Processing Fee (%):</strong> The fee the bank charges to underwrite the loan. In commercial lending, this is almost never a flat fee; it is usually 1% to 3% of the total loan amount, and it is non-negotiable.</li>
        </ul>
        <p className="mt-4">
          Upon clicking calculate, the engine will generate a comprehensive <strong>Breakup Table</strong> revealing the hidden GST, your true Net Disbursed Amount, and a fully amortized yearly schedule of your principal and interest payments.
        </p>
      </section>

      {/* THE DISBURSAL TRAP */}
      <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Disbursal Trap: Why You Receive Less Than You Borrowed</h2>
        <p className="mb-4">
          The most dangerous shock for a first-time founder occurs on the day the loan is disbursed. Imagine your company desperately needs exactly ₹50,00,000 to purchase new manufacturing equipment from Germany. You apply for a ₹50,00,000 loan, the bank approves it, and you sign the sanction letter.
        </p>
        <p className="mb-4 font-bold text-red-900">
          When you check your corporate bank account the next morning, the bank has only deposited ₹48,82,000. You are short by over a Lakh, and the German supplier is demanding full payment. What happened?
        </p>
        <p className="mb-4">
          You fell into the disbursal trap. Banks do not send you an invoice for their processing fees; they forcefully extract them upfront. 
        </p>
        <p className="mb-4">
          If your bank charges a 2% processing fee on a ₹50 Lakh loan, that equals ₹1,00,000. Because bank fees are classified as a financial service, the Government of India mandates an 18% GST on that fee, adding another ₹18,000. The total upfront deduction is ₹1,18,000.
        </p>
        <p className="mb-4 font-semibold">
          The bank subtracts ₹1,18,000 from your ₹50 Lakh principal, wiring you only the remaining balance. However, your EMI is still calculated on the full ₹50 Lakhs. 
        </p>
        <p className="mb-4">
          To survive this, you must "gross up" your loan application. If you absolutely need exactly ₹50 Lakhs in cash to buy the equipment, you must use our calculator to determine the upfront fees, and actually apply for a ₹51.5 Lakh loan so the net disbursal covers your vendor invoice.
        </p>
      </section>

      {/* TAX BENEFITS OF BUSINESS LOANS */}
      <section className="bg-green-50/50 p-8 rounded-2xl border border-green-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Silver Lining: Corporate Tax Shields and Input Tax Credit (ITC)</h2>
        <p className="mb-4">
          While commercial debt is expensive, the Indian tax code provides two massive financial shields for businesses that dramatically lower the effective cost of borrowing compared to retail consumer loans.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. Interest is a Tax-Deductible Expense</h3>
        <p className="mb-4">
          If you take a personal loan to buy a television, the interest you pay is completely lost capital. If your company takes a business loan to buy servers, the interest paid to the bank is classified under the Income Tax Act as a legitimate business expense. 
        </p>
        <p className="mb-4">
          This means you can deduct the total interest paid from your company's gross profit before calculating your corporate tax liability. If your company is in the 25% corporate tax bracket, and you pay ₹10 Lakhs in interest this year, you effectively reduce your tax bill by ₹2.5 Lakhs. The government is essentially subsidizing 25% of your interest costs.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. Reclaiming GST via Input Tax Credit (ITC)</h3>
        <p className="mb-4">
          Remember the ₹18,000 GST the bank charged on your processing fee? If your company is a registered GST entity and the loan is strictly for business operations, that money is not lost. You can file for an Input Tax Credit (ITC) on your monthly GST returns. You can use that ₹18,000 credit to offset the GST you collect from your own customers, effectively recovering the entire tax amount.
        </p>
      </section>

      {/* UNSECURED VS SECURED */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Financing: Unsecured vs. Secured Business Loans</h2>
        <p className="mb-4">
          When determining your EMI, the bank's risk assessment of collateral dictates your interest rate. You must choose between two distinct loan structures:
        </p>
        <p className="mb-4">
          <strong>Secured Business Loans (Machinery, LAP, Commercial Real Estate):</strong> You pledge a hard asset (factory equipment, office space, or a director's personal home) to the bank. Because the bank can seize and auction this asset if you default, their risk is near zero. Consequently, they will offer you massive loan amounts (₹5 Crores+), extended tenures (up to 15 years), and the lowest possible interest rates (9% to 11%). This minimizes your EMI and protects cash flow.
        </p>
        <p className="mb-4">
          <strong>Unsecured Business Loans (Working Capital, Overdrafts):</strong> You pledge nothing. The bank lends purely based on your historical cash flows, audited balance sheets, and the directors' CIBIL scores. Because the bank has no hard asset to seize in a default, their risk is extremely high. They mitigate this by capping the loan amount (usually under ₹50 Lakhs), restricting the tenure (12 to 36 months), and charging predatory interest rates (15% to 22%). Unsecured loans result in massive, aggressive EMIs that can quickly drain operating reserves if your revenue dips.
        </p>
      </section>
      
      {/* CASH FLOW MANAGEMENT */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Protecting Cash Flow: The EMI to Operating Profit Ratio</h2>
        <p className="mb-4">
          Retail consumers use a Debt-to-Income (DTI) ratio. Sophisticated businesses use the Debt Service Coverage Ratio (DSCR) or the EMI-to-Operating-Profit ratio.
        </p>
        <p className="mb-4">
          Never commit to an EMI that consumes more than 40% of your company's average monthly operating profit (EBITDA). If your business generates ₹10 Lakhs in profit per month, your absolute maximum combined loan EMIs should not exceed ₹4 Lakhs. 
        </p>
        <p className="mb-4">
          Business revenues are inherently volatile. You will face delayed client payments, sudden supply chain cost spikes, and macroeconomic recessions. The bank's EMI auto-debit, however, is merciless and fixed. If your EMI consumes 80% of your profit, a single bad month where a client delays a massive invoice will cause an EMI bounce. An EMI bounce severely damages the company's credit rating, triggers penal interest, and can prompt the bank to freeze your working capital accounts. Always maintain a massive cash flow buffer.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between a business loan EMI and a personal loan EMI?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Mathematically, the EMI calculation (Principal * Rate * Time) is identical. However, business loans often involve massive upfront processing fees and 18% GST on those fees. Additionally, the interest paid on a business loan is a tax-deductible expense for the company, whereas personal loan interest generally is not.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is the amount deposited into my bank account less than my approved loan amount?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Banks do not bill you for the processing fee and GST; they deduct it directly from your principal before disbursal. If you are approved for a ₹10,00,000 loan with a 2% processing fee (plus 18% GST), the bank deducts ₹23,600 upfront. Only ₹9,76,400 actually hits your bank account, but you must pay interest on the full ₹10,00,000.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is GST charged on the EMI of a business loan?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Unlike credit card EMIs, standard term loans and business loans are exempt from GST on the interest component. However, the 18% GST strictly applies to the processing fees, documentation charges, and any pre-closure penalty fees.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I claim the GST paid on the processing fee as Input Tax Credit (ITC)?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. If your business is GST-registered and you take a commercial loan for business purposes, you can claim the 18% GST paid on the bank's processing fees as an Input Tax Credit (ITC) to offset your future tax liabilities.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does a moratorium period affect my business loan EMI?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A moratorium allows you to pause EMI payments for a few months (e.g., while setting up a factory). However, interest continues to accrue during this period and is added to your principal. Once the moratorium ends, your new EMI will be significantly higher because you are now paying interest on the newly inflated principal.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Should I choose a fixed or floating interest rate for my business?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Floating rates are generally cheaper initially and do not carry pre-closure penalties, making them ideal for businesses expecting rapid cash flow. Fixed rates offer exact predictability for your monthly budget but often lock you into higher long-term costs and severe pre-closure penalties.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
