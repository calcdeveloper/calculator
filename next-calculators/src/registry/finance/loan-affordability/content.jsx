import React from 'react';
import Link from 'next/link';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does a bank calculate my maximum loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Underwriting banks calculate maximum loan eligibility primarily using the Fixed Obligation to Income Ratio (FOIR) or Debt-to-Income (DTI) ratio, typically capped at 40% to 50% of your gross monthly income. The bank multiplies your gross monthly salary by this cap, subtracts all your existing monthly EMI obligations, and treats the remaining balance as your maximum allowable new monthly EMI. It then applies a reverse EMI present-value amortization formula based on your chosen tenure and prevailing interest rate to calculate the exact maximum principal amount you can borrow."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between FOIR and DTI in Indian banking?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In Indian banking practice, Fixed Obligation to Income Ratio (FOIR) is the primary metric applied during retail credit underwriting. While Debt-to-Income (DTI) is the broad international terminology, FOIR strictly accounts for all active debt commitments—including personal loans, auto loans, student loans, and credit card EMIs—as well as statutory deductions or minimum living expense assumptions. Both ratios mandate that your total debt servicing payments should not exceed 50% of your verifiable gross monthly income."
        }
      },
      {
        "@type": "Question",
        "name": "Why was my loan application rejected despite earning a high six-figure salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Loan approval depends on your debt obligations relative to income rather than absolute income alone. If you earn ₹2,50,000 per month but already service ₹1,35,000 in combined monthly EMIs for a luxury vehicle, personal loans, and revolving credit card conversions, your current FOIR is 54%. Because this exceeds the statutory 50% ceiling, banking software automatically flags you as over-leveraged and rejects the new application regardless of your absolute salary."
        }
      },
      {
        "@type": "Question",
        "name": "How does my CIBIL credit score impact my loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While your credit score does not directly alter the statutory 50% FOIR cap, it directly determines the risk premium and interest rate offered by the lender. A borrower with an 800+ CIBIL score may qualify for an 8.35% home loan, whereas a borrower with a 670 score may be offered 9.60%. Because higher interest rates generate higher monthly EMIs for the exact same principal, the lower-score borrower hits their 50% EMI ceiling at a significantly smaller loan amount, effectively shrinking their borrowing power by 10% to 15%."
        }
      },
      {
        "@type": "Question",
        "name": "What three financial levers can instantly boost my loan eligibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can strategically expand your borrowing capacity through three primary levers: 1) Extending your loan tenure from 15 or 20 years to 25 or 30 years to compress the monthly EMI; 2) Prepaying and closing existing high-EMI personal or auto debts to free up monthly FOIR headroom; and 3) Adding an earning co-applicant, such as a working spouse or parent, to combine household gross incomes and substantially increase total borrowing bandwidth."
        }
      },
      {
        "@type": "Question",
        "name": "Do unused credit card credit limits reduce my loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Completely unutilized credit card limits generally do not count against your FOIR. However, carrying an unpaid revolving balance month-to-month triggers underwriting scrutiny. Most credit underwriters will impute a synthetic monthly obligation equal to 5% of your total outstanding card balance, reducing your monthly EMI capacity rupee-for-rupee."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Reserve Bank of India (RBI) Loan-to-Value (LTV) cap restrict property purchases?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even if your monthly income qualifies you for a massive loan, the RBI enforces strict Loan-to-Value (LTV) limits: up to 90% for loans up to ₹30 Lakhs, up to 80% for loans between ₹30 Lakhs and ₹75 Lakhs, and a maximum of 75% for loans exceeding ₹75 Lakhs. Borrowers must fund the remaining 10% to 25% purchase price plus stamp duty, registration fees, and GST out of their own liquid capital."
        }
      },
      {
        "@type": "Question",
        "name": "Should I borrow the absolute maximum amount approved by the bank?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The 50% FOIR limit is an aggressive mathematical ceiling designed to protect bank capital from catastrophic default, not a prudent budgeting guideline for household solvency. Pushing your debt obligations to the full 50% limit leaves zero financial buffer for career disruptions, medical emergencies, or interest rate hikes on floating mortgages. Wealth planners recommend maintaining total debt servicing below 35% of gross income."
        }
      },
      {
        "@type": "Question",
        "name": "How do floating interest rate hikes affect my loan affordability over time?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On floating-rate loans, benchmark repo rate increases automatically elevate your interest rate. Lenders typically respond by extending your loan tenure rather than increasing your monthly EMI. However, if your tenure has already reached the maximum permissible retirement age cap (typically 30 years or age 65–70), the bank will force an immediate upward revision in your monthly EMI, directly tightening your household cash flow."
        }
      },
      {
        "@type": "Question",
        "name": "How does rental income or HRA affect home loan underwriting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you currently reside in a rented property, your housing outgo may be subsidized by tax-exempt House Rent Allowance (HRA) under Section 10(13A). Moving to a home loan converts rent into mortgage EMIs, replacing HRA exemptions with Section 24(b) interest and Section 80C principal deductions. Furthermore, if you own an existing property generating verifiable rental income backed by registered lease agreements and bank statements, underwriters typically add 70% to 80% of that gross rent to your qualifying monthly income."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* JSON-LD FAQ SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: EXECUTIVE OVERVIEW & FOUNDATIONAL PRINCIPLES */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Loan Affordability Calculator: How Much Can You Realistically Borrow?
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          When approaching commercial banks, housing finance companies (HFCs), or institutional non-banking financial companies (NBFCs) for retail financing, retail borrowers frequently mistake high gross earnings for unlimited borrowing power. In reality, modern credit underwriting algorithms do not evaluate lifestyle, aspirations, or future career potential. They execute a cold, risk-weighted mathematical audit centered on a single non-negotiable metric: your <strong>Fixed Obligation to Income Ratio (FOIR)</strong>, internationally referred to as your <strong>Debt-to-Income (DTI) ratio</strong>.
        </p>
        <p className="mb-4">
          Millions of prospective home buyers and vehicle purchasers fall into the premature shopping trap. They spend months evaluating residential properties, negotiate terms with builders, and commit non-refundable booking tokens—only to discover during credit underwriting that the bank will finance only a fraction of their target purchase price. This painful breakdown stems from a fundamental misunderstanding of retail leverage: credit underwriting establishes borrowing capacity based on existing recurring liabilities, interest rate buffers, and statutory debt ceilings rather than baseline salary.
        </p>
        <p className="mb-4">
          In India, guidelines established by the Reserve Bank of India (RBI) require lending institutions to cap total monthly debt commitments strictly between 40% and 50% of verified gross monthly income. If your existing vehicle loan, credit card installments, and personal credit lines consume 35% of your earnings, your allowable borrowing buffer for a new mortgage is compressed into a narrow 15% window. Regardless of whether your annual compensation exceeds ₹30 Lakhs, entering an application with high pre-existing leverage triggers automated rejection.
        </p>
        <p className="mb-4">
          Our specialized <strong>Loan Affordability Calculator</strong> reverses standard debt calculation workflows. Instead of calculating the monthly installment for a predetermined loan figure, it operates as an institutional underwriting simulation engine. By evaluating your verified monthly gross cash flow, deducting all active liabilities, and factoring in your liquid down payment equity, this tool computes the absolute maximum loan principal you can legally secure and the total asset value you can afford to acquire.
        </p>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & UNDERWRITING METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Underwriting Mathematical Methodology
        </h2>
        <p className="mb-4">
          To determine true borrowing capacity, institutional credit systems utilize reverse-amortization financial engineering. Rather than asking how much capital you desire, underwriters quantify the exact monthly cash flow you can commit toward debt service without jeopardizing baseline solvency. The mathematical framework operates across five sequential stages:
        </p>

        <div className="space-y-4 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Stage 1: Determining Statutory FOIR Capacity</h3>
            <p className="text-sm text-gray-600 mb-2">
              The lender calculates your total permissible monthly debt ceiling by multiplying your verified gross monthly income by the institutional FOIR threshold (standardized at 50% for middle and upper income brackets):
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Maximum Total Debt Servicing Limit = Gross Monthly Income × 0.50
            </div>
            <p className="text-xs text-gray-500 mt-2">
              For individuals earning below ₹50,000 monthly, underwriters often reduce this threshold to 40% to account for essential subsistence expenditures. For ultra-high-net-worth borrowers earning over ₹5,00,000 monthly, select private lenders may extend the ceiling to 60%.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Stage 2: Calculating Available Net EMI Buffer</h3>
            <p className="text-sm text-gray-600 mb-2">
              The engine conducts a comprehensive liability audit against your credit bureau report (CIBIL, Experian, Equifax, or CRIF High Mark). All existing recurring monthly installments are aggregated and deducted from your maximum debt limit:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Net Available New EMI = Maximum Total Debt Servicing Limit - Total Existing Monthly EMIs
            </div>
            <p className="text-xs text-gray-500 mt-2">
              If your existing EMIs equal or exceed the maximum limit, the net buffer drops to zero, classifying the applicant as mathematically "Over-leveraged."
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Stage 3: Reverse-Amortization Present Value (PV) Principal Calculation</h3>
            <p className="text-sm text-gray-600 mb-2">
              With the net available monthly EMI established, the maximum allowable principal is calculated using the reverse annuity present-value formula:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              P = EMI × [ (1 - (1 + r)^(-n)) / r ]
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where <strong>P</strong> is the maximum eligible principal loan amount, <strong>EMI</strong> is your net available monthly installment, <strong>r</strong> is the monthly periodic interest rate (Annual Rate / 12 / 100), and <strong>n</strong> represents total tenure in months (Tenure in Years × 12).
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Stage 4: Total Asset Purchasing Capacity Computation</h3>
            <p className="text-sm text-gray-600 mb-2">
              True purchasing power equals the financed principal plus unencumbered down payment equity:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Max Purchasing Power = Maximum Approved Loan Principal + Available Liquid Down Payment
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Stage 5: Statutory Loan-to-Value (LTV) Prudential Verification</h3>
            <p className="text-sm text-gray-600 mb-2">
              Finally, the loan is stress-tested against statutory Loan-to-Value prudential caps mandated by the RBI to prevent asset-bubble over-financing:
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
              <li><strong>Loans up to ₹30 Lakhs:</strong> Maximum 90% LTV (minimum 10% borrower equity contribution).</li>
              <li><strong>Loans between ₹30 Lakhs and ₹75 Lakhs:</strong> Maximum 80% LTV (minimum 20% borrower equity contribution).</li>
              <li><strong>Loans above ₹75 Lakhs:</strong> Maximum 75% LTV (minimum 25% borrower equity contribution).</li>
            </ul>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Input Calibration &amp; Optimization Protocol</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Verifiable Gross Income:</strong> Input regular salary prior to income tax, EPF deductions, or flexible benefit claims. Exclude discretionary performance bonuses unless evidenced across three consecutive Form 16 filings.</li>
          <li><strong>Audit All Active Debts:</strong> Include car loans, two-wheeler loans, education financing, consumer durable installments, and revolving card balances (evaluated with our <Link href="/calculator/finance/cc-emi" className="text-blue-700 font-semibold underline hover:text-blue-800">Credit Card EMI Calculator</Link>).</li>
          <li><strong>Liquid Down Payment Capital:</strong> Combine liquid savings, fixed deposit reserves, permissible PF housing withdrawals (modeled via our <Link href="/calculator/finance/epf-interest" className="text-blue-700 font-semibold underline hover:text-blue-800">EPF Interest Calculator</Link>), and matured tax-saving equity investments (evaluated via our <Link href="/calculator/finance/elss" className="text-blue-700 font-semibold underline hover:text-blue-800">ELSS Calculator</Link>).</li>
          <li><strong>Loan Tenure Selection:</strong> While stretching tenure to 25 or 30 years inflates immediate borrowing limits by lowering monthly EMIs, it dramatically escalates cumulative lifetime interest liabilities.</li>
        </ul>

        <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200 mt-6 text-sm">
          <h3 className="font-bold text-amber-950 mb-2">The Dual Underwriting Check: FOIR vs. Net Annual Income Multiplier (NAIM)</h3>
          <p className="text-xs text-amber-900 leading-relaxed mb-2">
            Many institutional lenders run a parallel credit test known as the <strong>Net Annual Income Multiplier (NAIM)</strong> alongside the FOIR present-value formula. Under NAIM rules, a retail borrower's total sanctioned home loan principal is capped at <strong>5.0x to 6.5x</strong> of their documented net annual salary.
          </p>
          <p className="text-xs text-amber-900 leading-relaxed">
            For example, an executive earning ₹15,00,000 net annually with zero existing liabilities might qualify for ₹1,12,00,000 under a 30-year 8.5% FOIR calculation. However, the bank's internal policy cap may restrict borrowing to 6.0× net annual earnings (₹90,00,000). The automated underwriting engine always sanctions the <strong>lower of the two calculations</strong> to safeguard institutional capital against macroeconomic volatility.
          </p>
        </div>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Scenarios &amp; Comprehensive Credit Case Studies
        </h2>
        <p className="mb-6">
          To illustrate how institutional credit models apply FOIR, interest sensitivity, and co-applicant rules in practice, examine these four detailed financial profiles:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Salaried Solo Applicant</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Mid-Career IT Lead: Unlocking Extra Capacity by Restructuring Active Liabilities
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Vikram earns a gross monthly income of ₹1,50,000. He is actively house-hunting and plans to secure a 20-year home loan at an interest rate of 8.50%. He currently holds ₹15,00,000 in liquid savings for his down payment. However, his payslip and CIBIL report reflect two ongoing liabilities: a ₹25,000 monthly car EMI and a ₹10,000 monthly personal loan EMI (total existing monthly debt = ₹35,000).
          </p>

          <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-200 text-sm space-y-2 mb-4">
            <h4 className="font-bold text-blue-950">Underwriting Assessment (Baseline):</h4>
            <p>• <strong>Gross Monthly Salary:</strong> ₹1,50,000</p>
            <p>• <strong>Statutory 50% FOIR Ceiling:</strong> ₹1,50,000 × 50% = <strong>₹75,000</strong></p>
            <p>• <strong>Existing Monthly Debt Commitments:</strong> ₹25,000 (Auto) + ₹10,000 (Personal) = <strong>₹35,000</strong></p>
            <p>• <strong>Net Allowable New Home Loan EMI:</strong> ₹75,000 - ₹35,000 = <strong>₹40,000</strong></p>
            <p>• <strong>Maximum Eligible Loan Principal (20 yrs @ 8.5%):</strong> <strong>₹46,08,124</strong> (~₹46.08 Lakhs)</p>
            <p>• <strong>Total Property Purchasing Capacity:</strong> ₹46,08,124 + ₹15,00,000 = <strong>₹61,08,124</strong> (~₹61.08 Lakhs)</p>
          </div>

          <div className="bg-emerald-50/80 p-5 rounded-xl border border-emerald-200 text-sm space-y-2">
            <h4 className="font-bold text-emerald-950">Strategic Liability Elimination:</h4>
            <p className="text-xs text-emerald-900 leading-relaxed">
              Vikram discovers that his personal loan has only ₹1,80,000 in remaining principal balance. Rather than preserving that cash in a low-yield savings account, he prepays and closes the personal loan immediately.
            </p>
            <p>• <strong>New Existing Monthly Debt:</strong> ₹25,000</p>
            <p>• <strong>Revised Net Allowable New EMI:</strong> ₹75,000 - ₹25,000 = <strong>₹50,000</strong> (+₹10,000 monthly headroom)</p>
            <p>• <strong>Revised Maximum Loan Principal:</strong> <strong>₹57,60,155</strong> (~₹57.60 Lakhs)</p>
            <p className="font-bold text-emerald-950 pt-2 border-t border-emerald-300">
              Net Impact: Prepaying a minor ₹1.8 Lakh personal loan boosted Vikram's borrowing power by ₹11,52,031 (+25% increase in financing capability), allowing him to acquire a significantly higher-grade residential property.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Joint Dual-Income Household</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Co-Applicant Multiplier: Doubling Purchasing Power for Premium Urban Real Estate
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Ananya earns ₹1,80,000 monthly as an enterprise product director. Her spouse, Rohan, earns ₹1,20,000 monthly as a corporate architect. They intend to purchase a 3BHK condominium in Gurugram requiring ₹1.5 Crores in financing over a 25-year tenure at 8.40% interest. They possess ₹40,00,000 in liquid down payment capital and have an active car loan EMI of ₹30,000.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 text-xs md:text-sm">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Scenario A: Solo Applicant (Ananya Only)</h4>
              <p>• Gross Monthly Income: ₹1,80,000</p>
              <p>• 50% FOIR Limit: ₹90,000</p>
              <p>• Existing Car EMI: ₹30,000</p>
              <p>• Available New EMI: ₹60,000</p>
              <p>• Max Eligible Loan (25 yrs @ 8.4%): <strong>₹74,99,754</strong> (~₹75.0 Lakhs)</p>
              <p>• Total Purchasing Power: ₹75.0L + ₹40.0L = <strong>₹1.15 Crores</strong></p>
              <p className="text-red-600 font-semibold mt-2">Deficit: Faces a ₹75 Lakh shortfall for their target home.</p>
            </div>

            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-950 mb-2">Scenario B: Joint Co-Applicant Pool</h4>
              <p>• Combined Gross Income: ₹3,00,000</p>
              <p>• 50% FOIR Limit: ₹1,50,000</p>
              <p>• Existing Car EMI: ₹30,000</p>
              <p>• Available New EMI: ₹1,20,000</p>
              <p>• Max Eligible Loan (25 yrs @ 8.4%): <strong>₹1,49,99,508</strong> (~₹1.50 Crores)</p>
              <p>• Total Purchasing Power: ₹1.50 Cr + ₹40.0L = <strong>₹1.90 Crores</strong></p>
              <p className="text-purple-900 font-semibold mt-2">Target Achieved: Fully qualifies for the required ₹1.5 Cr loan.</p>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Tax Efficiency Note: Beyond doubling borrowing limits, structured joint borrowing allows both spouses to claim separate Section 24(b) interest write-offs (up to ₹2 Lakhs each = ₹4 Lakhs combined) and Section 80C principal repayments (up to ₹1.5 Lakhs each) under the Old Tax Regime.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Credit Card Debt &amp; Synthetic FOIR</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The High-Earner Rejection: How Unpaid Revolving Balances Paralyze Approvals
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Siddharth earns ₹2,20,000 monthly as a commercial pilot. He has no active automobile or personal loans. However, his credit bureau records show three credit cards with a cumulative revolving balance of ₹5,00,000, upon which he pays only the "Minimum Amount Due" each billing cycle.
          </p>

          <div className="bg-amber-50/80 p-5 rounded-xl border border-amber-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-amber-950">Underwriting Treatment of Revolving Debt:</h4>
            <p className="text-xs text-amber-900 leading-relaxed">
              Borrowers mistakenly believe that paying the minimum amount due maintains pristine standing with underwriters. In credit reality, automated underwriting engines treat revolving card balances as acute financial distress and apply an institutional <strong>5% Synthetic Monthly Debt Charge</strong> against the total outstanding balance:
            </p>
            <p>• <strong>Gross Monthly Income:</strong> ₹2,20,000</p>
            <p>• <strong>50% FOIR Ceiling:</strong> ₹1,10,000</p>
            <p>• <strong>Revolving Balance Imputed EMI Charge (5% of ₹5,00,000):</strong> <strong>₹25,000/month</strong></p>
            <p>• <strong>Recent BNPL E-commerce Conversions:</strong> <strong>₹15,000/month</strong></p>
            <p>• <strong>Total Underwriting Debt Load:</strong> ₹40,000/month</p>
            <p>• <strong>Remaining EMI Buffer:</strong> ₹1,10,000 - ₹40,000 = ₹70,000</p>
            <p className="font-bold text-amber-950 pt-2 border-t border-amber-300">
              Loss of Capital: The ₹40,000 revolving debit penalty wiped out ₹46,08,000 in prospective home financing capacity (20 yrs @ 8.5%). By paying off credit card balances entirely, Siddharth instantly restores his borrowing limit from ₹80.64 Lakhs to ₹1.26 Crores.
            </p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Macroeconomic Sensitivity</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Interest Rate Shock Modeling: Floating Rate Stress-Testing
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Borrowing up to the absolute 50% FOIR limit leaves zero margin of safety against central bank monetary policy tightening. Consider a ₹80,00,000 home loan sanctioned at an initial repo-linked lending rate of 8.25% across a 20-year tenure:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2.5 px-3">Interest Rate Regime</th>
                  <th className="py-2.5 px-3">Effective Interest Rate</th>
                  <th className="py-2.5 px-3">Monthly Repayment (EMI)</th>
                  <th className="py-2.5 px-3">Total Interest Over Life</th>
                  <th className="py-2.5 px-3">FOIR Impact on ₹1.5L Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Baseline Sanction Rate</td>
                  <td className="py-2.5 px-3">8.25%</td>
                  <td className="py-2.5 px-3 text-blue-700 font-bold">₹68,150</td>
                  <td className="py-2.5 px-3">₹83,56,000</td>
                  <td className="py-2.5 px-3 text-emerald-600">45.4% (Prudent)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans">+75 bps Rate Hike Cycle</td>
                  <td className="py-2.5 px-3">9.00%</td>
                  <td className="py-2.5 px-3 text-amber-700 font-bold">₹71,978</td>
                  <td className="py-2.5 px-3">₹92,74,720</td>
                  <td className="py-2.5 px-3 text-amber-600">48.0% (Near Ceiling)</td>
                </tr>
                <tr className="bg-red-50">
                  <td className="py-2.5 px-3 font-sans font-bold text-red-950">+150 bps Aggressive Tightening</td>
                  <td className="py-2.5 px-3 font-bold text-red-950">9.75%</td>
                  <td className="py-2.5 px-3 text-red-700 font-bold">₹75,855</td>
                  <td className="py-2.5 px-3 font-bold text-red-950">₹1,02,05,200</td>
                  <td className="py-2.5 px-3 text-red-600 font-bold">50.6% (Over-leveraged Breach)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            Key Underwriting Lesson: A 150 bps hike in benchmark interest rates adds ₹7,705 to monthly debt payments and an astonishing ₹18.49 Lakhs in cumulative interest outgo. Borrowers who maximize their 50% FOIR at origination face immediate default risk or tenure extensions past retirement age when rate cycles pivot.
          </p>
        </div>
      </section>

      {/* SECTION 4: ADVANCED UNDERWRITING NUANCES, EDGE CASES & PITFALLS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Advanced Underwriting Nuances, Edge Cases &amp; Common Pitfalls
        </h2>
        <p className="mb-6">
          Navigating institutional credit assessment requires understanding the regulatory constraints and operational friction points that lead to sudden loan declines:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. The Dual-Cap Bottleneck: FOIR vs. Statutory Loan-to-Value (LTV)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Many buyers mistakenly believe that if their income qualifies them for a ₹2 Crore loan, they can acquire a ₹2 Crore apartment with zero equity. Under RBI regulatory mandates, lenders can never disburse 100% of an asset's valuation. LTV caps strictly limit the disbursed loan to 75%–90% of the independent technical appraisal value.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If your income qualifies you for ₹1.2 Crores but the property you select is valued by the bank's independent valuer at ₹1.3 Crores (attracting an 80% LTV cap), the maximum sanctionable loan is strictly capped at ₹1.04 Crores (80% of ₹1.3 Cr). The borrower must supply the remaining ₹26 Lakhs plus taxes in cash, regardless of income qualification.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Hidden Acquisition Friction: The "Cash Out-of-Pocket" Blindspot</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Banks legally finance only the base agreement value of the property. They strictly prohibit financing secondary transactional overheads through the primary mortgage:
            </p>
            <ul className="text-xs text-gray-600 space-y-1.5 list-disc pl-5 mb-3">
              <li><strong>Stamp Duty &amp; Registration:</strong> Typically 5% to 7% of property market value (payable to state revenue authorities).</li>
              <li><strong>Goods &amp; Services Tax (GST):</strong> 5% on under-construction non-affordable residential units.</li>
              <li><strong>Interior Fitments &amp; Furnishings:</strong> 10% to 15% of basic property cost.</li>
              <li><strong>Maintenance Deposits &amp; Club Charges:</strong> ₹2 Lakhs to ₹5 Lakhs upfront builder charges.</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              On a ₹1 Crore residential transaction, ancillary costs easily total ₹12 Lakhs to ₹15 Lakhs. If you deploy all liquid savings toward the 20% down payment (₹20 Lakhs), you will face a severe liquidity crisis at the registrar's office unless secondary reserves are preserved.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Self-Employed Underwriting: Depreciation Add-Backs &amp; Cash Flow Multipliers</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              For business owners, entrepreneurs, and independent consultants, underwriters do not evaluate top-line revenue or basic bank deposits. They scrutinize audited Income Tax Returns (ITR), Profit &amp; Loss statements, and balance sheets across a minimum of three continuous financial years.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Crucially, seasoned underwriters add back non-cash expenses—primarily <strong>Depreciation</strong> and director remuneration—to the net taxable profit to determine true cash-generation capability. If your business reports ₹20 Lakhs in net taxable profit but incurred ₹12 Lakhs in non-cash vehicle and machinery depreciation, your qualifying operational cash flow for FOIR assessment is ₹32 Lakhs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Credit Bureau Inquiry Velocity: The "Hard Pull" Trap</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When seeking loan quotes, rate-shopping across multiple banking portals can trigger automated credit rejections. Submitting formal applications to five different banks within a 14-day window generates five distinct "Hard Inquiries" on your CIBIL record.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Underwriting algorithms interpret high inquiry velocity as credit-hungry behavior indicative of cash-flow distress. Each inquiry can shave 5 to 10 points off your CIBIL score, potentially knocking an 760 score down to 720 and triggering higher risk margins. Always use independent pre-qualification calculators before authorizing formal bureau credit checks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Borrower Age Caps &amp; The Retirement Tenure Compression</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Institutional credit policies dictate that a home loan's tenure cannot extend beyond the borrower's superannuation or retirement age—typically capped at 60 years for salaried private employees and 65 years for public sector or medical professionals. This creates a severe eligibility bottleneck for borrowers applying in their mid-to-late 40s.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If an applicant applies at age 48, the bank will restrict the maximum repayment tenure to exactly 12 years (144 months), compared to the standard 20 or 25 years granted to a 32-year-old colleague earning an identical salary. Because compressing the tenure from 20 years to 12 years increases the monthly EMI from ₹868 to ₹1,138 per Lakh borrowed (at 8.5%), the older borrower's maximum loan eligibility is slashed by approximately 24%. To overcome this cliff, older applicants must onboard a younger adult child with established earnings as an active co-borrower.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. The Technical &amp; Legal Valuation Chasm (Sanction vs. Disbursement)</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Receiving an in-principle sanction letter based on your personal FOIR capacity does not guarantee that the bank will disburse that capital. The disbursement process involves rigorous independent technical valuation and legal title scrutiny of the target residential property.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              If a buyer enters an agreement to purchase an apartment for ₹1,20,00,000, expecting an 80% LTV disbursement of ₹96,00,000, the bank's independent technical empaneled engineer will conduct an on-site property valuation. If the bank's valuer appraises the real estate at only ₹1,05,00,000 based on prevailing circle rates or local market sales data, the bank applies its 80% LTV cap strictly against the lower ₹1.05 Crore valuation. The sanctioned disbursement drops to ₹84,00,000, creating an unexpected ₹12,00,000 liquidity shortfall that the buyer must cover in unencumbered personal cash before registration.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISONS & ALTERNATIVE CREDIT INSTRUMENTS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Credit Product Comparison: Structuring Borrowing for Optimal Cost &amp; Leverage
        </h2>
        <p className="mb-4">
          Different credit vehicles apply divergent FOIR allowances, interest pricing structures, and collateral requirements. Choosing the correct financing instrument determines whether your capital cost is sustainable:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white shadow-xs rounded-xl overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                <th className="py-3 px-3">Financing Instrument</th>
                <th className="py-3 px-3">Typical APR Range</th>
                <th className="py-3 px-3">Max Permitted FOIR</th>
                <th className="py-3 px-3">Tenure Limits</th>
                <th className="py-3 px-3">Collateral Required</th>
                <th className="py-3 px-3">End-Use Flexibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs">
              <tr>
                <td className="py-3 px-3 font-semibold text-gray-900">Residential Home Loan</td>
                <td className="py-3 px-3 font-mono text-blue-700 font-bold">8.35% – 9.50%</td>
                <td className="py-3 px-3 font-mono">50% – 55%</td>
                <td className="py-3 px-3">Up to 30 Years</td>
                <td className="py-3 px-3 text-emerald-700">First Charge on Property</td>
                <td className="py-3 px-3 text-gray-500">Restricted (Property Acquisition)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-gray-900">Loan Against Property (LAP)</td>
                <td className="py-3 px-3 font-mono text-blue-700 font-bold">9.50% – 11.50%</td>
                <td className="py-3 px-3 font-mono">50% – 60%</td>
                <td className="py-3 px-3">Up to 15 Years</td>
                <td className="py-3 px-3 text-emerald-700">Unencumbered Real Estate</td>
                <td className="py-3 px-3 text-emerald-600 font-semibold">Unrestricted Multi-Purpose</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-gray-900">Commercial Business Loan</td>
                <td className="py-3 px-3 font-mono text-blue-700 font-bold">11.0% – 16.0%</td>
                <td className="py-3 px-3 font-mono">Evaluated via DSCR</td>
                <td className="py-3 px-3">3 to 7 Years</td>
                <td className="py-3 px-3 text-amber-700">Plant / Receivables / Personal Guarantee</td>
                <td className="py-3 px-3 text-gray-500">Working Capital / Capex</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-gray-900">Unsecured Personal Loan</td>
                <td className="py-3 px-3 font-mono text-red-600 font-bold">10.50% – 21.0%</td>
                <td className="py-3 px-3 font-mono">40% – 50%</td>
                <td className="py-3 px-3">1 to 5 Years</td>
                <td className="py-3 px-3 text-gray-500">None (Purely Unsecured)</td>
                <td className="py-3 px-3 text-emerald-600 font-semibold">100% Unrestricted</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-semibold text-gray-900">Loan Against Securities (LAS)</td>
                <td className="py-3 px-3 font-mono text-blue-700 font-bold">8.75% – 10.50%</td>
                <td className="py-3 px-3 font-mono">LTV-Based (50% on Equity)</td>
                <td className="py-3 px-3">Overdraft / Annual Renewal</td>
                <td className="py-3 px-3 text-emerald-700">Shares / Mutual Funds / Bonds</td>
                <td className="py-3 px-3 text-emerald-600 font-semibold">100% Unrestricted Liquidity</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Renting vs. Buying Affordability Benchmark</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Before taking on maximum allowable debt, compare the ongoing opportunity cost of homeownership against renting. While owning real estate builds long-term tangible equity, home loans front-load massive interest payments during the initial decade. If your monthly rent is ₹35,000 and your projected mortgage EMI is ₹85,000, ensure your monthly cash flow comfortably absorbs the ₹50,000 differential plus property maintenance, municipal taxes, and lost compounding returns on the down payment equity.
        </p>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does a bank calculate my maximum loan affordability?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Underwriting banks calculate maximum loan eligibility primarily using the Fixed Obligation to Income Ratio (FOIR) or Debt-to-Income (DTI) ratio, typically capped at 40% to 50% of your gross monthly income. The bank multiplies your gross monthly salary by this cap, subtracts all your existing monthly EMI obligations, and treats the remaining balance as your maximum allowable new monthly EMI. It then applies a reverse EMI present-value amortization formula based on your chosen tenure and prevailing interest rate to calculate the exact maximum principal amount you can borrow.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between FOIR and DTI in Indian banking?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In Indian banking practice, Fixed Obligation to Income Ratio (FOIR) is the primary metric applied during retail credit underwriting. While Debt-to-Income (DTI) is the broad international terminology, FOIR strictly accounts for all active debt commitments—including personal loans, auto loans, student loans, and credit card EMIs—as well as statutory deductions or minimum living expense assumptions. Both ratios mandate that your total debt servicing payments should not exceed 50% of your verifiable gross monthly income.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Why was my loan application rejected despite earning a high six-figure salary?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Loan approval depends on your debt obligations relative to income rather than absolute income alone. If you earn ₹2,50,000 per month but already service ₹1,35,000 in combined monthly EMIs for a luxury vehicle, personal loans, and revolving credit card conversions, your current FOIR is 54%. Because this exceeds the statutory 50% ceiling, banking software automatically flags you as over-leveraged and rejects the new application regardless of your absolute salary.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does my CIBIL credit score impact my loan affordability?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              While your credit score does not directly alter the statutory 50% FOIR cap, it directly determines the risk premium and interest rate offered by the lender. A borrower with an 800+ CIBIL score may qualify for an 8.35% home loan, whereas a borrower with a 670 score may be offered 9.60%. Because higher interest rates generate higher monthly EMIs for the exact same principal, the lower-score borrower hits their 50% EMI ceiling at a significantly smaller loan amount, effectively shrinking their borrowing power by 10% to 15%.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What three financial levers can instantly boost my loan eligibility?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You can strategically expand your borrowing capacity through three primary levers: 1) Extending your loan tenure from 15 or 20 years to 25 or 30 years to compress the monthly EMI; 2) Prepaying and closing existing high-EMI personal or auto debts to free up monthly FOIR headroom; and 3) Adding an earning co-applicant, such as a working spouse or parent, to combine household gross incomes and substantially increase total borrowing bandwidth.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Do unused credit card credit limits reduce my loan affordability?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Completely unutilized credit card limits generally do not count against your FOIR. However, carrying an unpaid revolving balance month-to-month triggers underwriting scrutiny. Most credit underwriters will impute a synthetic monthly obligation equal to 5% of your total outstanding card balance, reducing your monthly EMI capacity rupee-for-rupee.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does the Reserve Bank of India (RBI) Loan-to-Value (LTV) cap restrict property purchases?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Even if your monthly income qualifies you for a massive loan, the RBI enforces strict Loan-to-Value (LTV) limits: up to 90% for loans up to ₹30 Lakhs, up to 80% for loans between ₹30 Lakhs and ₹75 Lakhs, and a maximum of 75% for loans exceeding ₹75 Lakhs. Borrowers must fund the remaining 10% to 25% purchase price plus stamp duty, registration fees, and GST out of their own liquid capital. Evaluate your exact collateral ratio using our dedicated <Link href="/calculator/finance/ltv" className="text-blue-700 font-semibold underline hover:text-blue-800">LTV Calculator</Link>.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Should I borrow the absolute maximum amount approved by the bank?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. The 50% FOIR limit is an aggressive mathematical ceiling designed to protect bank capital from catastrophic default, not a prudent budgeting guideline for household solvency. Pushing your debt obligations to the full 50% limit leaves zero financial buffer for career disruptions, medical emergencies, or interest rate hikes on floating mortgages. Wealth planners recommend maintaining total debt servicing below 35% of gross income.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How do floating interest rate hikes affect my loan affordability over time?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              On floating-rate loans, benchmark repo rate increases automatically elevate your interest rate. Lenders typically respond by extending your loan tenure rather than increasing your monthly EMI. However, if your tenure has already reached the maximum permissible retirement age cap (typically 30 years or age 65–70), the bank will force an immediate upward revision in your monthly EMI, directly tightening your household cash flow.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does rental income or HRA affect home loan underwriting?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you currently reside in a rented property, your housing outgo may be subsidized by tax-exempt House Rent Allowance (HRA) under Section 10(13A). Moving to a home loan converts rent into mortgage EMIs, replacing HRA exemptions with Section 24(b) interest and Section 80C principal deductions. Furthermore, if you own an existing property generating verifiable rental income backed by registered lease agreements and bank statements, underwriters typically add 70% to 80% of that gross rent to your qualifying monthly income.
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 7: INTERNALLY LINKED FINANCIAL DECISION HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Renting vs. Mortgage</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Before committing your salary to mortgage obligations, compare your projected EMI deductions with current tax benefits. Model your rent tax shields under Rule 2A using our <Link href="/calculator/finance/hra" className="text-emerald-700 font-bold underline hover:text-emerald-800">HRA Exemption Calculator</Link>.
          </p>
        </div>

        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Debt Capacity</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Corporate entities, partnerships, and MSME enterprises must evaluate leverage via Debt Service Coverage Ratios (DSCR) rather than personal FOIR. Model business debt viability with our <Link href="/calculator/finance/business-loan" className="text-blue-700 font-bold underline hover:text-blue-800">Business Loan EMI Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Net Salary Liquidity</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Banks calculate DTI on gross pay, but your household operates on disposable income. Audit statutory PF and tax withholdings with our <Link href="/calculator/finance/take-home-salary" className="text-purple-700 font-bold underline hover:text-purple-800">Take-Home Salary Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}