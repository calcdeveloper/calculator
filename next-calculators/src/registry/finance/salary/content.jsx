import React from 'react';
import Link from 'next/link';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between CTC, Gross Salary, and In-Hand Net Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cost to Company (CTC) is the total annual expenditure an employer commits to retain you, including direct salary, indirect retirement benefits (employer EPF share, gratuity accrual), and group insurance premiums. Gross Salary is your total earnings before employee deductions (Gross = CTC minus Employer EPF and Gratuity). In-Hand Net Salary is the actual cash deposited into your bank account monthly after subtracting employee deductions such as Employee EPF (12%), Professional Tax, and Income Tax (TDS)."
        }
      },
      {
        "@type": "Question",
        "name": "How is Basic Salary typically structured in an Indian employment contract?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In most Indian corporations, Basic Salary is structured as 40% to 50% of total annual CTC. The basic pay is a critical statutory benchmark because vital benefits—including Employee and Employer Provident Fund (12%), Gratuity (4.81%), and House Rent Allowance (40% to 50%)—are computed directly as mathematical percentages of your Basic Salary."
        }
      },
      {
        "@type": "Question",
        "name": "Why is Gratuity deducted from my CTC if I leave the company before 5 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employers include annual gratuity accrual (calculated as 15/26 of monthly basic pay, or approximately 4.81% of basic salary) in your headline CTC to represent the total cost of employment. However, under the Payment of Gratuity Act, 1972, gratuity legally vests only after 5 years of continuous service. If you resign before completing 5 years, the accrued gratuity is forfeited back to the company, effectively reducing your realized compensation."
        }
      },
      {
        "@type": "Question",
        "name": "How does the proposed Code on Wages mandate affect salary structures and take-home pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Code on Wages, 2019 mandates that an employee's basic wages (including basic salary, dearness allowance, and retaining allowance) must constitute at least 50% of total gross compensation. For companies that historically kept basic pay low (e.g., 30% to 35%) to minimize PF and gratuity expenses, complying with the 50% basic rule will increase mandatory EPF and gratuity deductions. This slightly reduces immediate monthly in-hand cash flow while significantly expanding retirement nest eggs."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between statutory EPF deduction and the ₹1,800 PF minimum cap?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under EPFO rules, statutory PF is 12% of actual Basic + DA. However, under paragraph 26A of the EPF Scheme, employers are legally obligated to deduct PF only up to the statutory wage ceiling of ₹15,000 per month (12% of ₹15,000 = ₹1,800/month). Many private sector firms cap employee and employer PF contributions at ₹1,800 monthly to maximize candidate in-hand pay, whereas other organizations deduct 12% on full basic salary to maximize retirement savings."
        }
      },
      {
        "@type": "Question",
        "name": "How is House Rent Allowance (HRA) calculated, and how does it save tax?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "HRA is typically structured as 50% of Basic Salary for metro cities (Delhi, Mumbai, Kolkata, Chennai) and 40% for non-metro locations. Under the Old Tax Regime, Section 10(13A) grants an income tax exemption equal to the lowest of: 1) Actual HRA received; 2) 50% (metro) or 40% (non-metro) of Basic Salary; or 3) Actual rent paid minus 10% of Basic Salary. HRA exemption is not available under the New Tax Regime (Section 115BAC)."
        }
      },
      {
        "@type": "Question",
        "name": "What is Professional Tax, and why does the deduction vary across Indian states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional Tax is a state-level tax levied under Article 276 of the Indian Constitution on salaried individuals and professionals. Because it is legislated by individual state assemblies, rates differ: Maharashtra, Karnataka, and Tamil Nadu levy up to the constitutional maximum of ₹2,500 annually (typically ₹200 for 11 months and ₹300 in the 12th month), whereas states and union territories like Delhi, Haryana, and Rajasthan levy zero professional tax."
        }
      },
      {
        "@type": "Question",
        "name": "How does Corporate NPS under Section 80CCD(2) reduce monthly tax deductions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Corporate NPS allows employers to contribute up to 10% of an employee's Basic Salary + DA directly into the employee's NPS Tier-I account. This contribution is completely tax-deductible for the employee under Section 80CCD(2) with zero upper rupee cap, and it is available under both the Old and New Tax Regimes. For an executive in the 30% tax bracket, diverting ₹15,000 monthly into Corporate NPS reduces annual taxable income by ₹1,80,000, saving ₹56,160 in taxes."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Fixed CTC, Variable Pay, and Joining Bonuses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Fixed CTC represents guaranteed monthly compensation paid out irrespective of company performance. Variable Pay (performance bonus or annual incentive) is contingent on corporate revenue and individual appraisal metrics, typically paying between 60% and 100% of target. Joining bonuses are one-time cash payments often subject to clawback clauses if the employee leaves before completing 12 or 24 months. Total headline CTC bundles all three together."
        }
      },
      {
        "@type": "Question",
        "name": "How are ESOPs (Employee Stock Ownership Plans) reflected in salary and taxed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ESOPs are long-term equity incentives granting employees the right to buy company shares at a pre-determined exercise price after a vesting cliff (typically 1 to 4 years). ESOPs are not part of monthly cash flow. In India, ESOPs face dual taxation: 1) At exercise, the difference between Fair Market Value (FMV) and exercise price is taxed as perquisite income under salaries; 2) At eventual sale, capital gains tax applies (STCG or LTCG) on the difference between sale price and exercise FMV."
        }
      },
      {
        "@type": "Question",
        "name": "What are Flexi-Benefit Plans (FBP) and how do tax-free reimbursements work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Flexi-Benefit Plans (FBP) permit employees to allocate a portion of their special allowance into tax-exempt reimbursement components, such as food coupons (meal cards up to ₹50/meal), fuel and driver reimbursement, telephone/broadband allowances, and books/periodicals allowances. Under the Old Tax Regime, these reimbursements reduce gross taxable income upon submission of valid expense bills. Under the New Tax Regime, most FBP exemptions are discontinued except official conveyance."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Standard Deduction on salary, and how was it revised in Budget 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard Deduction is a flat statutory deduction available to all salaried taxpayers without requiring bills or investment proofs. Under the Union Budget 2024, the Standard Deduction under the New Tax Regime (Section 115BAC) was increased from ₹50,000 to ₹75,000, providing an immediate annual tax relief. Under the Old Tax Regime, the Standard Deduction remains unchanged at ₹50,000."
        }
      },
      {
        "@type": "Question",
        "name": "How does salary structure affect home loan and personal loan eligibility?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Mortgage underwriters calculate borrowing eligibility strictly on Net In-Hand Take-Home Salary, not gross CTC. Banks enforce a Fixed Obligation to Income Ratio (FOIR) or Debt-to-Income (DTI) cap of 40% to 50% of net monthly income. Compensation structures heavily loaded with non-cash ESOPs, variable bonuses, or high PF deductions yield a lower net monthly cash flow, directly reducing borrowing capacity on property loans."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employee convert taxable Special Allowance into tax-free allowances?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if corporate HR policies support flexible benefit structuring under the Old Tax Regime. Taxable special allowance can be converted into valid Section 10 exemptions such as National Pension System employer contributions (Section 80CCD(2)), remote work internet reimbursements, and car lease plans. Under the New Tax Regime, however, restructuring is primarily effective through Corporate NPS."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Section 87A tax rebate work alongside the ₹75,000 standard deduction under the New Tax Regime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the New Tax Regime (Section 115BAC) as amended by Budget 2024, salaried individuals receive a flat ₹75,000 Standard Deduction. Furthermore, Section 87A provides a full tax rebate for taxable income up to ₹7,00,000. Consequently, any salaried professional with a gross annual salary of up to ₹7,75,000 pays exactly zero income tax (₹7,75,000 minus ₹75,000 standard deduction equals ₹7,00,000 net taxable income, which attracts a full Section 87A rebate of ₹25,000)."
        }
      },
      {
        "@type": "Question",
        "name": "What are the tax pitfalls of switching employers mid-financial year with multiple Form 16s?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When switching employers mid-year, both employers independently apply the standard deduction (₹75,000 or ₹50,000) and initial lower tax slab brackets, assuming they are your sole income source. Unless you declare your previous employer's earnings to your new employer via Form 12B, both employers will under-deduct TDS. At tax filing time in July, you face a nasty surprise: double standard deductions are reversed, incomes are combined into your highest tax bracket, and substantial self-assessment tax plus Section 234B/234C interest penalties become payable."
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
          Salary Calculator: Master CTC to In-Hand Take-Home Pay &amp; Structure Optimization
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          In the Indian corporate ecosystem, the single most anticipated yet frequently misunderstood metric during career transitions is the <strong>Cost to Company (CTC)</strong>. When a corporate employer extends a compensation package—whether an entry-level ₹6 Lakh offer or a senior executive ₹50 Lakh package—the candidate intuitively divides that annual figure by 12, anticipating that one-twelfth of the sum will arrive in their bank account on payday. Inevitably, the arrival of the first monthly payslip triggers severe disillusionment: the actual net cash credit is 20% to 35% lower than anticipated.
        </p>
        <p className="mb-4">
          This psychological dissonance stems from the structural architecture of corporate remuneration. A headline CTC is not a statement of liquid cash; it is an accounting ledger of the total financial liability the employer incurs to retain your services. Modern Indian compensation is divided into three distinct layers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-xs md:text-sm">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <strong className="text-gray-900 block mb-1">1. Direct Cash Inflows</strong>
            <p className="text-gray-600">The monthly monetary compensation paid directly to the employee: Basic Salary, House Rent Allowance (HRA), Special Allowance, Conveyance, and Medical allowances.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <strong className="text-gray-900 block mb-1">2. Indirect Statutory Benefits</strong>
            <p className="text-gray-600">Mandatory statutory employer contributions: Employer EPF share (12%), Gratuity reserve accrual (4.81%), and Group Term/Medical Insurance premiums.</p>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <strong className="text-gray-900 block mb-1">3. Contingent &amp; Deferred Value</strong>
            <p className="text-gray-600">Discretionary compensation subject to performance and cliffs: Annual performance bonuses, retention milestones, and Employee Stock Options (ESOPs).</p>
          </div>
        </div>
        <p className="mb-4">
          Compounding this complexity is the legislative landscape governed by the <strong>Code on Wages, 2019</strong>. To eliminate corporate practices that artificially suppressed Basic Salary to 25% or 30% of CTC (minimizing employer provident fund and gratuity obligations), national labor reform mandates that basic wages must constitute at least <strong>50% of total compensation</strong>. While this reform dramatically expands long-term sovereign retirement accumulations (modeled via our <Link href="/calculator/finance/pf" className="text-blue-700 font-semibold underline hover:text-blue-800">PF Calculator</Link>), it inherently contracts immediate monthly disposable liquidity.
        </p>
        <p className="mb-4">
          Our forensic <strong>Salary Calculator</strong> deconstructs annual CTC packages into granular components. By modeling Basic Pay percentages, employer and employee EPF allocations, state-specific Professional Tax bands, and income tax withholdings under updated Finance Act tax regimes, this engine reveals your true net monthly cash flow.
        </p>

        <div className="bg-emerald-50/50 p-6 rounded-2xl border border-emerald-100 my-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Post-Budget 2024 Tax Landscape: The ₹7.75 Lakh Zero-Tax Threshold
          </h3>
          <p className="text-sm text-gray-600 mb-3 leading-relaxed">
            The Union Budget significantly restructured personal income tax slabs under the default New Tax Regime (Section 115BAC). By expanding lower slab widths and increasing the Standard Deduction for salaried employees from ₹50,000 to <strong>₹75,000</strong>, salaried professionals earning up to ₹7,75,000 enjoy an effective income tax rate of exactly 0.0%:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse bg-white rounded-lg border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-gray-800 font-bold border-b">
                  <th className="p-2.5">Taxable Income Slab (New Regime)</th>
                  <th className="p-2.5">Applicable Tax Rate</th>
                  <th className="p-2.5">Key Deductions &amp; Rebates</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-gray-700">
                <tr>
                  <td className="p-2.5 font-sans">Up to ₹3,00,000</td>
                  <td className="p-2.5 font-bold text-emerald-700">0% (Nil)</td>
                  <td className="p-2.5 font-sans">Universal Base Exemption</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans">₹3,00,001 to ₹7,00,000</td>
                  <td className="p-2.5 text-blue-700">5.0%</td>
                  <td className="p-2.5 font-sans text-emerald-700 font-bold">100% Tax Rebate under Section 87A</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans">₹7,00,001 to ₹10,00,000</td>
                  <td className="p-2.5 text-blue-700">10.0%</td>
                  <td className="p-2.5 font-sans">Marginal Relief available if slightly above ₹7L</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans">₹10,00,001 to ₹12,00,000</td>
                  <td className="p-2.5 text-amber-700">15.0%</td>
                  <td className="p-2.5 font-sans">Standard ₹75,000 salaried deduction applies</td>
                </tr>
                <tr>
                  <td className="p-2.5 font-sans">₹12,00,001 to ₹15,00,000</td>
                  <td className="p-2.5 text-amber-700">20.0%</td>
                  <td className="p-2.5 font-sans">Corporate NPS Section 80CCD(2) fully eligible</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="p-2.5 font-sans">Above ₹15,00,000</td>
                  <td className="p-2.5 text-red-600">30.0%</td>
                  <td className="p-2.5 font-sans">Subject to statutory 4% Health &amp; Education Cess</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & MATHEMATICAL METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Mathematical CTC Decomposition Framework
        </h2>
        <p className="mb-4">
          Converting an annual CTC figure into a precise net monthly take-home salary requires executing a sequence of institutional mathematical reconciliations:
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 1: The Master CTC Decomposition Equation</h3>
            <p className="text-sm text-gray-600 mb-2">
              Annual Cost to Company is formulated by aggregating gross employee compensation with indirect statutory corporate liabilities:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              CTC = Gross_Salary + Employer_EPF + Gratuity_Accrual + Group_Insurance + Corporate_NPS
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where <strong>Gross_Salary</strong> represents the total pre-tax earnings credited to the employee&apos;s payslip, and the remaining terms represent corporate benefits that do not enter monthly bank accounts.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 2: The Gratuity Accrual Formulation (Payment of Gratuity Act, 1972)</h3>
            <p className="text-sm text-gray-600 mb-2">
              Under Section 4(2) of the Payment of Gratuity Act, gratuity liability is calculated as 15 days&apos; wages for each completed year of service based on a 26-day working month:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Annual_Gratuity_Accrual = (15 / 26) × Monthly_Basic_Salary ≈ 0.0481 × Annual_Basic_Salary
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Corporate HR departments budget approximately <strong>4.81% of your Basic Salary</strong> annually under the gratuity line item in your CTC annexure, even though employees must complete 5 continuous years before this money legally vests.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 3: Gross Salary to Monthly In-Hand Cash Flow Reconciliation</h3>
            <p className="text-sm text-gray-600 mb-2">
              Net In-Hand cash flow is derived by stripping employee personal statutory obligations from monthly gross earnings:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800 space-y-1">
              <p>Monthly_Gross = (CTC - Employer_EPF - Gratuity_Accrual) / 12</p>
              <p>Monthly_Take_Home = Monthly_Gross - Employee_EPF - Professional_Tax - Monthly_TDS</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where <strong>Employee_EPF</strong> is 12% of Basic Salary, <strong>Professional_Tax</strong> is typically ₹200/month, and <strong>Monthly_TDS</strong> is the estimated monthly income tax withholding based on your chosen regime.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 4: House Rent Allowance (HRA) Exemption Algorithm (Old Regime)</h3>
            <p className="text-sm text-gray-600 mb-2">
              Under Section 10(13A) of the Income Tax Act, the tax-exempt portion of HRA is mathematically determined as:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              HRA_Exemption = min[ Actual_HRA_Received, m × Basic_Salary, Actual_Rent_Paid - (0.10 × Basic_Salary) ]
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where multiplier <strong>m</strong> is 0.50 for metro cities (Delhi, Mumbai, Kolkata, Chennai) and 0.40 for non-metros. Model your exact rental deduction using our <Link href="/calculator/finance/hra" className="text-blue-700 font-semibold underline hover:text-blue-800">HRA Exemption Calculator</Link>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 5: The Take-Home Ratio (THR) Efficiency Metric</h3>
            <p className="text-sm text-gray-600 mb-2">
              Financial analysts evaluate compensation structuring quality using the Take-Home Ratio:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              THR = (Annual_Net_Take_Home / Annual_CTC) × 100
            </div>
            <p className="text-xs text-gray-500 mt-2">
              In healthy corporate salary structures, THR ranges between <strong>72% and 82%</strong>. A THR falling below 68% indicates heavy tax friction, unvested benefits, or high variable components that reduce real-world liquidity.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 6: Section 87A Marginal Tax Relief Mechanism</h3>
            <p className="text-sm text-gray-600 mb-2">
              Under Section 115BAC, if net taxable income slightly exceeds the ₹7,00,000 threshold, marginal relief ensures that tax payable never exceeds the incremental income earned above ₹7 Lakhs:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Tax_Payable_Marginal = min[ Computed_Normal_Tax, max(0, Taxable_Income - ₹7,00,000) ]
            </div>
            <p className="text-xs text-gray-500 mt-2">
              For example, if your taxable income is ₹7,20,000, normal computed tax would be ₹27,000 (which would leave you with ₹6,93,000, less than someone earning ₹7,00,000 tax-free!). Section 87A marginal relief caps your total tax strictly at ₹20,000 (plus 4% cess), protecting your take-home pay.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 7: Gratuity Statutory Exemption (Section 10(10))</h3>
            <p className="text-sm text-gray-600 mb-2">
              Upon completing 5 years of service, gratuity received upon exit is tax-free up to statutory ceilings:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Gratuity_Tax_Exemption = min[ Actual_Gratuity_Received, ₹20,00,000, (15 / 26) × Last_Drawn_Basic × Years_of_Service ]
            </div>
            <p className="text-xs text-gray-500 mt-2">
              The statutory lifetime limit for non-government private sector employees stands at <strong>₹20,00,000</strong>, ensuring substantial tax-free liquidity upon long-tenure employment separations.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Input Parameter Configuration Best Practices</h3>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Annual CTC Input:</strong> Enter the guaranteed fixed cash component plus standard statutory components. Exclude highly contingent ESOPs or unvested joining bonuses to ensure conservative monthly budgeting.</li>
          <li><strong>Basic Salary Calibration:</strong> Select 50% for standard corporate and MNC packages aligning with the Code on Wages. Select 40% for sales and marketing packages with high discretionary allowances.</li>
          <li><strong>EPF Deduction Options:</strong> Set to 12% if your company deducts PF on full basic salary. If your employer caps PF at the statutory minimum wage ceiling, set monthly PF to ₹1,800.</li>
          <li><strong>Professional Tax Setting:</strong> Input ₹200 monthly if residing in Maharashtra, Karnataka, Tamil Nadu, or West Bengal. Set to ₹0 if working in Delhi, Haryana, or Uttar Pradesh.</li>
        </ul>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Scenarios &amp; Comprehensive Compensation Case Studies
        </h2>
        <p className="mb-6">
          To illustrate how compensation structuring, basic pay calibration, and tax regimes alter monthly in-hand liquidity, examine these four detailed employment profiles:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">The Basic Salary Tradeoff</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The ₹12 Lakh CTC Comparison: 50% High Basic vs. 30% Low Basic Structuring
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Two software developers receive identical headline CTC offers of ₹12,00,000 from different IT firms. Company Alpha structures basic salary at 50% of CTC, while Company Beta keeps basic salary low at 30%:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2.5 px-3">Salary Component</th>
                  <th className="py-2.5 px-3">Company Alpha (50% Basic)</th>
                  <th className="py-2.5 px-3">Company Beta (30% Basic)</th>
                  <th className="py-2.5 px-3">Variance / Impact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Annual Basic Salary</td>
                  <td className="py-2.5 px-3">₹6,00,000 (₹50k/mo)</td>
                  <td className="py-2.5 px-3">₹3,60,000 (₹30k/mo)</td>
                  <td className="py-2.5 px-3 font-sans text-blue-700">Alpha Basic +₹2,40,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Employer EPF (12% Basic)</td>
                  <td className="py-2.5 px-3">₹72,000 (₹6,000/mo)</td>
                  <td className="py-2.5 px-3">₹43,200 (₹3,600/mo)</td>
                  <td className="py-2.5 px-3 font-sans text-emerald-700">Alpha PF +₹28,800/yr</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Gratuity Accrual (4.81% Basic)</td>
                  <td className="py-2.5 px-3">₹28,860/yr</td>
                  <td className="py-2.5 px-3">₹17,316/yr</td>
                  <td className="py-2.5 px-3 font-sans text-gray-600">Company reserve liability</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Gross Salary Credited</td>
                  <td className="py-2.5 px-3">₹10,99,140 (₹91,595/mo)</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-700">₹11,39,484 (₹94,957/mo)</td>
                  <td className="py-2.5 px-3 font-sans text-emerald-700">Beta Gross +₹3,362/mo</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Employee EPF Deduction</td>
                  <td className="py-2.5 px-3">₹72,000 (₹6,000/mo)</td>
                  <td className="py-2.5 px-3">₹43,200 (₹3,600/mo)</td>
                  <td className="py-2.5 px-3 font-sans text-amber-700">Alpha saves 2× more PF</td>
                </tr>
                <tr className="bg-emerald-50 font-bold">
                  <td className="py-2.5 px-3 font-sans text-emerald-950">Net Take-Home (Pre-Tax)</td>
                  <td className="py-2.5 px-3 text-gray-900">₹85,395 / month</td>
                  <td className="py-2.5 px-3 text-emerald-900">₹91,157 / month</td>
                  <td className="py-2.5 px-3 font-sans text-emerald-950">Beta cash +₹5,762/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            <strong>The Compensation Verdict:</strong> Company Beta provides ₹5,762 more in monthly bank deposits. However, Company Alpha accumulates an extra ₹57,600 annually in combined employer and employee PF compounding at 8.25% sovereign tax-free interest (tracked with our <Link href="/calculator/finance/epf-interest" className="text-emerald-700 font-semibold underline hover:text-emerald-800">EPF Interest Calculator</Link>). Over 10 years, Alpha&apos;s structure generates over ₹8.5 Lakhs in additional wealth.
          </p>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Startup Offer Audit</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The ₹25 Lakh Tech Offer Audit: Fixed Cash vs. Variable Pay vs. Paper ESOPs
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Neha evaluates a headline ₹25,00,000 CTC offer from a Series B fintech startup. The offer annexure reveals the compensation breakdown:
          </p>

          <div className="bg-purple-50/70 p-5 rounded-xl border border-purple-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-purple-950">Deconstructing Neha&apos;s ₹25 Lakh Headline Offer:</h4>
            <p>• <strong>Fixed Cash CTC:</strong> ₹17,00,000 (Guaranteed baseline)</p>
            <p>• <strong>Annual Performance Bonus (Variable):</strong> ₹3,00,000 (Target 100% payout based on company revenue)</p>
            <p>• <strong>Stock Options (ESOPs):</strong> ₹4,00,000 annualized value (Subject to 4-year vesting with a 1-year cliff)</p>
            <p>• <strong>Joining Bonus:</strong> ₹1,00,000 (One-time, subject to 12-month clawback)</p>
            <p>• <strong>Realistic Guaranteed Monthly Cash Flow:</strong> Based on the ₹17L Fixed component (50% basic = ₹8.5L), monthly gross is ₹1,31,000. After EPF (₹8,500), PT (₹200), and New Regime TDS (~₹11,500), guaranteed net monthly take-home is <strong>₹1,10,800</strong>.</p>
            <p className="font-bold text-purple-950 pt-2 border-t border-purple-300">
              Key Insight: While the headline offer states ₹25 Lakhs (which implies over ₹2.08 Lakhs monthly), guaranteed monthly liquidity is barely ₹1.11 Lakhs. When budgeting for home loans or property acquisitions, mortgage lenders evaluate capacity strictly against the ₹1.11 Lakh guaranteed cash flow using our <Link href="/calculator/finance/loan-affordability" className="text-purple-700 font-semibold underline hover:text-purple-800">Loan Affordability Calculator</Link>.
            </p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Employment Models</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Full-Time Employee vs. Retainer Consultant (Section 44ADA Presumptive Tax)
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Amit is offered either a full-time salaried role at ₹18,00,000 CTC or an independent consulting contract at ₹18,00,000 gross annual billing:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
            <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">Option A: Salaried Employee (₹18L CTC)</h4>
              <p>• Basic Salary (50%): ₹9,00,000</p>
              <p>• Employer EPF: ₹1,08,000 / Gratuity: ₹43,290</p>
              <p>• Gross Salary: ₹16,48,710</p>
              <p>• Deductions: Employee PF (₹1,08,000) + PT (₹2,400)</p>
              <p>• Standard Deduction (New Regime): ₹75,000</p>
              <p>• Income Tax Liability: ~₹1,47,000</p>
              <p className="text-gray-900 font-bold mt-2 text-base">Net In-Hand: ₹1,15,900 / month</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-950 mb-2">Option B: 44ADA Consultant (₹18L Billing)</h4>
              <p>• Gross Inflow: ₹1,50,000 / month (less 10% TDS)</p>
              <p>• Statutory Presumptive Income (50%): ₹9,00,000</p>
              <p>• Deemed Professional Expenses (50%): ₹9,00,000</p>
              <p>• Zero mandatory EPF / Zero Gratuity deduction</p>
              <p>• Net Tax Liability on ₹9L (New Regime): ~₹41,600</p>
              <p>• Net Effective Annual Tax Rate: Barely 2.3%!</p>
              <p className="text-blue-900 font-bold mt-2 text-base">Net In-Hand: ₹1,46,500 / month (+₹30.6k/mo!)</p>
            </div>
          </div>
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-300 text-xs text-blue-950 mt-3">
            <strong>Verdict:</strong> Under Section 44ADA, Amit legally retains ₹30,600 more every month (+₹3.67 Lakhs annually). If Amit resells commercial services or software sub-contracts, he can model required gross markups and profitability using our <Link href="/calculator/finance/margin" className="text-blue-700 font-semibold underline hover:text-blue-800">Margin Calculator</Link>.
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Tax Optimization</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Corporate NPS Restructuring on ₹30 Lakh CTC: The ₹46,800 Tax Refund
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Pooja earns a CTC of ₹30,00,000 with a basic salary of ₹15,00,000 under the New Tax Regime. She instructs HR to divert 10% of basic pay (₹1,50,000/year or ₹12,500/month) from her taxable special allowance directly into Corporate NPS under Section 80CCD(2):
          </p>

          <div className="bg-amber-50/70 p-5 rounded-xl border border-amber-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-amber-950">Tax &amp; Wealth Audit under Section 80CCD(2):</h4>
            <p>• <strong>Annual Corporate NPS Diverted:</strong> ₹1,50,000 (10% of Basic)</p>
            <p>• <strong>Immediate Tax Bracket:</strong> 31.2% (30% slab + 4% cess)</p>
            <p>• <strong>Immediate Annual Income Tax Saved:</strong> ₹1,50,000 × 31.2% = <strong>₹46,800 per year</strong></p>
            <p>• <strong>Monthly Reduction in Take-Home Cash:</strong> Only ₹8,600 (because ₹3,900 of the ₹12,500 was funded by tax savings!)</p>
            <p>• <strong>25-Year Retirement Corpus Created @ 10.5% CAGR:</strong> <strong>₹1.67 Crores</strong> (modeled via our <Link href="/calculator/finance/nps" className="text-amber-800 font-bold underline hover:text-amber-900">NPS Calculator</Link>).</p>
            <p className="font-bold text-amber-950 pt-2 border-t border-amber-300">
              The Arbitrage: Pooja turned a ₹46,800 annual government tax liability into an automated ₹1.67 Crore personal pension corpus.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: ADVANCED STRATEGY, TAX LAW NUANCES & RESTRUCTURING */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Advanced Salary Structuring Strategies, Tax Law Reforms &amp; Hidden Traps
        </h2>
        <p className="mb-6">
          Optimizing your compensation package requires navigating statutory tax amendments, flexi-benefit plans, and severance rules:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. The Code on Wages (50% Basic Rule) Structural Transformation</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Historically, employers in Indian service sectors structured CTCs with an artificially deflated basic pay (20% to 30%), packing 70% to 80% into discretionary allowances. This minimized employer EPF liabilities (12% of basic) and gratuity provisioning.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Under the Code on Wages, 2019, if allowances exceed 50% of total compensation, the excess amount is deemed to be &apos;wages&apos; and added back to basic salary. When companies reconfigure payroll to ensure basic pay equals 50% of CTC, mandatory EPF and gratuity deductions rise automatically. For employees, this slightly trims current take-home cash while significantly boosting long-term retirement wealth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Flexi-Benefit Plans (FBP) under Old vs. New Tax Regimes</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Under the Old Tax Regime, employees can restructure taxable special allowance into tax-exempt reimbursement components:
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5 mb-3">
              <li><strong>Meal Vouchers (Pluxee/Sodexo):</strong> Exempt up to ₹50 per meal (₹2,200/month or ₹26,400/year).</li>
              <li><strong>Telephone &amp; Broadband:</strong> 100% tax-free against valid internet/mobile bills under Rule 3(7)(ix).</li>
              <li><strong>Books &amp; Periodicals:</strong> Tax-free up to designated corporate limits for professional development.</li>
              <li><strong>Company Car Lease:</strong> Substantial tax shields on lease EMI, fuel, and driver allowances under perquisite rules.</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              <em>Critical Tax Warning:</em> Under the New Tax Regime (Section 115BAC), almost all flexi-benefit reimbursements (meal coupons, telephone allowances) have been discontinued. Only official conveyance and tour travel allowances remain exempt.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Professional Tax Regional Disparities across Indian States</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Professional Tax is governed by state governments under Article 276(2) of the Constitution, which caps the annual tax at ₹2,500:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-mono text-center">
              <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200">
                <span className="block font-sans text-gray-500">Maharashtra</span>
                <strong className="text-gray-900">₹2,500 / yr</strong>
              </div>
              <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200">
                <span className="block font-sans text-gray-500">Karnataka</span>
                <strong className="text-gray-900">₹2,400 / yr</strong>
              </div>
              <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200">
                <span className="block font-sans text-gray-500">Tamil Nadu</span>
                <strong className="text-gray-900">₹2,500 / yr</strong>
              </div>
              <div className="bg-gray-100 p-2.5 rounded-lg border border-gray-200">
                <span className="block font-sans text-gray-500">Delhi / Gurgaon</span>
                <strong className="text-emerald-700">₹0 (Zero Tax)</strong>
              </div>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Salaried employees moving from Delhi NCR to Bangalore or Mumbai experience an immediate ₹200/month reduction in take-home pay purely due to state professional tax.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Leave Encashment Exemption Expansion (Section 10(10AA))</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When leaving employment or retiring, unavailed earned leaves are encashed. Historically, the tax-free exemption limit for non-government private employees under Section 10(10AA) was capped at an outdated ₹3,00,000, unchanged since 2002.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Under recent Finance Act reforms, the statutory lifetime exemption limit was dramatically raised to <strong>₹25,00,000</strong>. Senior executives with substantial accrued leaves can now receive up to ₹25 Lakhs tax-free upon separation, significantly boosting terminal retirement payouts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Mid-Year Employer Transitions: Form 12B &amp; Double Standard Deduction Traps</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Switching jobs mid-financial year is the single most common cause of unexpected tax demands. When you join Company B in October, Company B calculates your TDS assuming they are your sole employer for the full year, granting you another full ₹75,000 Standard Deduction and starting your tax slabs from 0%.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              To prevent massive tax penalties, always submit <strong>Form 12B</strong> to your new employer, officially disclosing your previous salary and TDS deducted by Company A. This allows Company B to combine your earnings into your true marginal tax bracket (often 20% or 30%), preventing severe self-assessment tax dues and Section 234B interest charges when filing your ITR.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. Notice Period Buyouts &amp; Severance Pay Taxation</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When leaving without serving full notice, your employer deducts notice pay from your final settlement. Under Indian tax law, you cannot subtract this notice pay deduction from your gross salary; TDS applies to gross earnings regardless of employer recovery.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Conversely, severance compensation or golden handshakes paid by an employer are classified under Section 17(3) as &apos;Profits in lieu of salary&apos; and are fully taxable at your normal slab rate. However, if the termination qualifies under Section 10(10C) (Voluntary Retirement Scheme), up to <strong>₹5,00,000 is tax-exempt</strong>, provided the scheme satisfies statutory Rule 2BA requirements.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISONS & COMPENSATION SPECTRUM */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Industry Compensation Spectrum: How Different Sectors Structure Pay
        </h2>
        <p className="mb-4">
          Compensation structures vary significantly depending on whether a sector prioritizes current cash liquidity, deferred equity, or sovereign retirement safety:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white shadow-xs rounded-xl overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                <th className="py-3 px-3">Industry Vertical</th>
                <th className="py-3 px-3">Typical Basic %</th>
                <th className="py-3 px-3">Variable Pay %</th>
                <th className="py-3 px-3">Equity / ESOP Share</th>
                <th className="py-3 px-3">Retirement &amp; Benefits</th>
                <th className="py-3 px-3">Typical Take-Home Ratio</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-mono">
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">IT Services &amp; MNCs</td>
                <td className="py-3 px-3">40% – 50%</td>
                <td className="py-3 px-3 text-emerald-700">10% – 15%</td>
                <td className="py-3 px-3 font-sans text-gray-500">Low (RSUs for seniors)</td>
                <td className="py-3 px-3 font-sans text-blue-700">Full 12% PF + Gratuity + Ins</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">74% – 78%</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Tech Startups (Product)</td>
                <td className="py-3 px-3">40% – 50%</td>
                <td className="py-3 px-3 text-blue-700">10% – 20%</td>
                <td className="py-3 px-3 text-purple-700 font-bold">High (15% – 30% ESOPs)</td>
                <td className="py-3 px-3 font-sans text-gray-500">Capped ₹1,800 PF common</td>
                <td className="py-3 px-3 text-amber-700 font-bold">65% – 72% (Cash drag)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Manufacturing &amp; Heavy PSUs</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">50% – 60%</td>
                <td className="py-3 px-3 text-gray-500">5% – 10%</td>
                <td className="py-3 px-3 font-sans text-gray-400">Zero</td>
                <td className="py-3 px-3 font-sans text-blue-700 font-bold">Aggressive PF + VPF + Pension</td>
                <td className="py-3 px-3 text-blue-700 font-bold">70% – 75%</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Sales &amp; Financial Advisory</td>
                <td className="py-3 px-3 text-red-600">30% – 40%</td>
                <td className="py-3 px-3 text-purple-700 font-bold">30% – 50% (Commissions)</td>
                <td className="py-3 px-3 font-sans text-gray-400">Minimal</td>
                <td className="py-3 px-3 font-sans text-gray-500">Statutory minimums</td>
                <td className="py-3 px-3 text-gray-700 font-bold">Highly Fluctuating</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">The Golden Rule of Paycheck Allocation: 50/30/20</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Once your net monthly take-home salary is determined, financial planners recommend organizing cash flow using the institutional 50/30/20 budgeting rule:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200">
            <strong className="text-emerald-950 block mb-1">50% Needs</strong>
            <p className="text-emerald-900">Essential non-negotiable living expenses: House rent, home loan EMI, groceries, utilities, and term/health insurance premiums.</p>
          </div>
          <div className="bg-blue-50/70 p-4 rounded-xl border border-blue-200">
            <strong className="text-blue-950 block mb-1">30% Wants</strong>
            <p className="text-blue-900">Discretionary lifestyle choices: Dining out, vacations, streaming entertainment, consumer gadgets, and hobbies.</p>
          </div>
          <div className="bg-purple-50/70 p-4 rounded-xl border border-purple-200">
            <strong className="text-purple-950 block mb-1">20% Wealth Building</strong>
            <p className="text-purple-900">Automated investments: Equity mutual fund SIPs (modeled with our <Link href="/calculator/finance/mutual-fund-returns" className="text-purple-700 font-bold underline hover:text-purple-800">Mutual Fund Returns Calculator</Link>) and supplementary retirement allocations.</p>
          </div>
        </div>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between CTC, Gross Salary, and In-Hand Net Salary?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Cost to Company (CTC) is the total annual expenditure an employer commits to retain you, including direct salary, indirect retirement benefits (employer EPF share, gratuity accrual), and group insurance premiums. Gross Salary is your total earnings before employee deductions (Gross = CTC minus Employer EPF and Gratuity). In-Hand Net Salary is the actual cash deposited into your bank account monthly after subtracting employee deductions such as Employee EPF (12%), Professional Tax, and Income Tax (TDS).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is Basic Salary typically structured in an Indian employment contract?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In most Indian corporations, Basic Salary is structured as 40% to 50% of total annual CTC. The basic pay is a critical statutory benchmark because vital benefits—including Employee and Employer Provident Fund (12%), Gratuity (4.81%), and House Rent Allowance (40% to 50%)—are computed directly as mathematical percentages of your Basic Salary.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Why is Gratuity deducted from my CTC if I leave the company before 5 years?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Employers include annual gratuity accrual (calculated as 15/26 of monthly basic pay, or approximately 4.81% of basic salary) in your headline CTC to represent the total cost of employment. However, under the Payment of Gratuity Act, 1972, gratuity legally vests only after 5 years of continuous service. If you resign before completing 5 years, the accrued gratuity is forfeited back to the company, effectively reducing your realized compensation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does the proposed Code on Wages mandate affect salary structures and take-home pay?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Code on Wages, 2019 mandates that an employee&apos;s basic wages (including basic salary, dearness allowance, and retaining allowance) must constitute at least 50% of total gross compensation. For companies that historically kept basic pay low (e.g., 30% to 35%) to minimize PF and gratuity expenses, complying with the 50% basic rule will increase mandatory EPF and gratuity deductions. This slightly reduces immediate monthly in-hand cash flow while significantly expanding retirement nest eggs.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between statutory EPF deduction and the ₹1,800 PF minimum cap?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under EPFO rules, statutory PF is 12% of actual Basic + DA. However, under paragraph 26A of the EPF Scheme, employers are legally obligated to deduct PF only up to the statutory wage ceiling of ₹15,000 per month (12% of ₹15,000 = ₹1,800/month). Many private sector firms cap employee and employer PF contributions at ₹1,800 monthly to maximize candidate in-hand pay, whereas other organizations deduct 12% on full basic salary to maximize retirement savings.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is House Rent Allowance (HRA) calculated, and how does it save tax?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              HRA is typically structured as 50% of Basic Salary for metro cities (Delhi, Mumbai, Kolkata, Chennai) and 40% for non-metro locations. Under the Old Tax Regime, Section 10(13A) grants an income tax exemption equal to the lowest of: 1) Actual HRA received; 2) 50% (metro) or 40% (non-metro) of Basic Salary; or 3) Actual rent paid minus 10% of Basic Salary. HRA exemption is not available under the New Tax Regime (Section 115BAC).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is Professional Tax, and why does the deduction vary across Indian states?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Professional Tax is a state-level tax levied under Article 276 of the Indian Constitution on salaried individuals and professionals. Because it is legislated by individual state assemblies, rates differ: Maharashtra, Karnataka, and Tamil Nadu levy up to the constitutional maximum of ₹2,500 annually (typically ₹200 for 11 months and ₹300 in the 12th month), whereas states and union territories like Delhi, Haryana, and Rajasthan levy zero professional tax.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does Corporate NPS under Section 80CCD(2) reduce monthly tax deductions?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Corporate NPS allows employers to contribute up to 10% of an employee&apos;s Basic Salary + DA directly into the employee&apos;s NPS Tier-I account. This contribution is completely tax-deductible for the employee under Section 80CCD(2) with zero upper rupee cap, and it is available under both the Old and New Tax Regimes. For an executive in the 30% tax bracket, diverting ₹15,000 monthly into Corporate NPS reduces annual taxable income by ₹1,80,000, saving ₹56,160 in taxes.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between Fixed CTC, Variable Pay, and Joining Bonuses?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Fixed CTC represents guaranteed monthly compensation paid out irrespective of company performance. Variable Pay (performance bonus or annual incentive) is contingent on corporate revenue and individual appraisal metrics, typically paying between 60% and 100% of target. Joining bonuses are one-time cash payments often subject to clawback clauses if the employee leaves before completing 12 or 24 months. Total headline CTC bundles all three together.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How are ESOPs (Employee Stock Ownership Plans) reflected in salary and taxed?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              ESOPs are long-term equity incentives granting employees the right to buy company shares at a pre-determined exercise price after a vesting cliff (typically 1 to 4 years). ESOPs are not part of monthly cash flow. In India, ESOPs face dual taxation: 1) At exercise, the difference between Fair Market Value (FMV) and exercise price is taxed as perquisite income under salaries; 2) At eventual sale, capital gains tax applies (STCG or LTCG) on the difference between sale price and exercise FMV.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are Flexi-Benefit Plans (FBP) and how do tax-free reimbursements work?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Flexi-Benefit Plans (FBP) permit employees to allocate a portion of their special allowance into tax-exempt reimbursement components, such as food coupons (meal cards up to ₹50/meal), fuel and driver reimbursement, telephone/broadband allowances, and books/periodicals allowances. Under the Old Tax Regime, these reimbursements reduce gross taxable income upon submission of valid expense bills. Under the New Tax Regime, most FBP exemptions are discontinued except official conveyance.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the Standard Deduction on salary, and how was it revised in Budget 2024?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Standard Deduction is a flat statutory deduction available to all salaried taxpayers without requiring bills or investment proofs. Under the Union Budget 2024, the Standard Deduction under the New Tax Regime (Section 115BAC) was increased from ₹50,000 to ₹75,000, providing an immediate annual tax relief. Under the Old Tax Regime, the Standard Deduction remains unchanged at ₹50,000.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does salary structure affect home loan and personal loan eligibility?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Mortgage underwriters calculate borrowing eligibility strictly on Net In-Hand Take-Home Salary, not gross CTC. Banks enforce a Fixed Obligation to Income Ratio (FOIR) or Debt-to-Income (DTI) cap of 40% to 50% of net monthly income. Compensation structures heavily loaded with non-cash ESOPs, variable bonuses, or high PF deductions yield a lower net monthly cash flow, directly reducing borrowing capacity on property loans.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Can an employee convert taxable Special Allowance into tax-free allowances?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, if corporate HR policies support flexible benefit structuring under the Old Tax Regime. Taxable special allowance can be converted into valid Section 10 exemptions such as National Pension System employer contributions (Section 80CCD(2)), remote work internet reimbursements, and car lease plans. Under the New Tax Regime, however, restructuring is primarily effective through Corporate NPS.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does the Section 87A tax rebate work alongside the ₹75,000 standard deduction under the New Tax Regime?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under the New Tax Regime (Section 115BAC) as amended by Budget 2024, salaried individuals receive a flat ₹75,000 Standard Deduction. Furthermore, Section 87A provides a full tax rebate for taxable income up to ₹7,00,000. Consequently, any salaried professional with a gross annual salary of up to ₹7,75,000 pays exactly zero income tax (₹7,75,000 minus ₹75,000 standard deduction equals ₹7,00,000 net taxable income, which attracts a full Section 87A rebate of ₹25,000).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are the tax pitfalls of switching employers mid-financial year with multiple Form 16s?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When switching employers mid-year, both employers independently apply the standard deduction (₹75,000 or ₹50,000) and initial lower tax slab brackets, assuming they are your sole income source. Unless you declare your previous employer&apos;s earnings to your new employer via Form 12B, both employers will under-deduct TDS. At tax filing time in July, you face a nasty surprise: double standard deductions are reversed, incomes are combined into your highest tax bracket, and substantial self-assessment tax plus Section 234B/234C interest penalties become payable.
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 7: INTERNALLY LINKED FINANCIAL HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Net Take-Home Pay</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Want to audit your granular monthly payslip line items, variable allowances, and exact bank credits? Explore our specialized <Link href="/calculator/finance/take-home-salary" className="text-emerald-700 font-bold underline hover:text-emerald-800">Take-Home Salary Calculator</Link>.
          </p>
        </div>

        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">House Rent Allowance</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Calculate your exact Section 10(13A) rental tax exemption under metro and non-metro rules using our <Link href="/calculator/finance/hra" className="text-blue-700 font-bold underline hover:text-blue-800">HRA Exemption Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Retirement Corpus Planning</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Simulate your multi-decade provident fund accumulation and compound interest yields using our <Link href="/calculator/finance/pf" className="text-purple-700 font-bold underline hover:text-purple-800">PF Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}
