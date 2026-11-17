import React from 'react';
import Link from 'next/link';

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
          "text": "Gross salary is your total monthly compensation before any deductions, representing the sum of Basic Pay, House Rent Allowance (HRA), Special Allowance, and other fixed stipends. Take Home Salary (Net In-Hand Salary) is the actual liquid cash deposited into your bank account on payday after subtracting mandatory deductions such as Employee Provident Fund (12% EPF), Professional Tax (PT), and Income Tax Deducted at Source (TDS)."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my monthly Take Home Salary fluctuate throughout the year?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Monthly take-home pay can fluctuate due to three main factors: 1) Irregular earnings such as performance bonuses, overtime, or statutory arrears; 2) Loss of Pay (LOP) deductions from unpaid leave; and 3) Spikes in monthly TDS withholdings during the final quarter (January to March) if an employee fails to submit tax-saving investment proofs declared earlier in Form 12BB."
        }
      },
      {
        "@type": "Question",
        "name": "Is House Rent Allowance (HRA) included in my monthly Take Home Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. HRA is paid out every month as part of your gross cash earnings and directly increases your take-home pay. Under the Old Tax Regime, you can claim a statutory tax exemption on HRA under Section 10(13A) by submitting rent receipts, which lowers your monthly TDS withholding and further boosts net cash flow. Under the New Tax Regime, HRA is paid as cash but is fully taxable."
        }
      },
      {
        "@type": "Question",
        "name": "How can an employee legally increase their monthly Take Home Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can maximize monthly take-home pay by: 1) Selecting the optimal tax regime (the New Concessional Regime under Section 115BAC often yields lower TDS for income below ₹15 Lakhs without large home loans); 2) Restructuring CTC into tax-free Flexi-Benefit reimbursements (meal coupons, broadband, fuel); 3) Opting for the ₹1,800 statutory EPF contribution cap under EPFO rules if permitted by company policy; and 4) Submitting investment proofs on time to prevent January-March TDS shocks."
        }
      },
      {
        "@type": "Question",
        "name": "How did Budget 2024 impact monthly take-home salary under the New Tax Regime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Budget 2024 enhanced the Standard Deduction under the New Tax Regime (Section 115BAC) from ₹50,000 to ₹75,000 annually (₹6,250 monthly relief). Furthermore, revised tax slabs and the Section 87A rebate ensure that salaried individuals earning up to ₹7,75,000 annually (₹64,583 monthly gross) pay zero income tax, directly boosting monthly in-hand liquidity."
        }
      },
      {
        "@type": "Question",
        "name": "What is the ₹1,800 EPF contribution cap, and how does it affect take-home pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Paragraph 26A of the Employees' Provident Fund Scheme, the statutory wage ceiling for mandatory PF deductions is ₹15,000 per month (12% of ₹15,000 = ₹1,800). While many employers deduct 12% on full basic salary, organizations offering the statutory cap restrict both employee and employer PF to ₹1,800 monthly. This increases monthly take-home pay by several thousand rupees, though it reduces the long-term retirement corpus."
        }
      },
      {
        "@type": "Question",
        "name": "What is Professional Tax, and why does the deduction vary across Indian states?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional Tax is a state-level levy authorized under Article 276 of the Indian Constitution, capped at ₹2,500 annually. States like Maharashtra, Karnataka, and West Bengal deduct up to ₹200 monthly (₹300 in February), whereas union territories and states like Delhi, Haryana, and Rajasthan levy zero professional tax, creating state-level take-home pay variations for identical gross salaries."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to monthly take-home pay during Loss of Pay (LOP)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When an employee takes unapproved leave or exhausts their paid leave balance, payroll applies Loss of Pay (LOP). The per-day salary is calculated as Gross Monthly Salary divided by total days in the month (or standard 26/30 working days), and this sum is deducted from gross pay. Statutory deductions like EPF and PT are also re-computed on the reduced earned basic wage."
        }
      },
      {
        "@type": "Question",
        "name": "How does Form 12BB declaration impact monthly payroll TDS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Form 12BB is the statutory statement of tax-saving declarations submitted to your employer at the beginning of the financial year. Employers estimate your annual tax liability based on declared investments (80C, 80D, home loan interest, HRA) and deduct 1/12th of that estimated tax monthly. If declarations are accurate, TDS deductions remain uniform throughout the year."
        }
      },
      {
        "@type": "Question",
        "name": "Why does switching employers mid-year frequently cause a take-home pay surprise?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When switching employers mid-year, both companies independently apply the standard deduction (₹75,000 or ₹50,000) and lower tax slab brackets, assuming they are your sole income source. Unless you declare prior salary via Form 12B to your new employer, both under-deduct TDS. At tax filing time in July, you face substantial self-assessment tax and Section 234B/234C interest penalties."
        }
      },
      {
        "@type": "Question",
        "name": "How does Corporate NPS under Section 80CCD(2) boost long-term wealth without hurting take-home pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 80CCD(2), an employer can contribute up to 10% of basic salary directly into the employee's National Pension System account. This contribution is completely tax-deductible under both the Old and New Tax Regimes. While diverting basic pay slightly reduces gross cash, the massive reduction in monthly TDS offsets a large portion of the deduction, resulting in high tax efficiency."
        }
      },
      {
        "@type": "Question",
        "name": "How are performance bonuses and joining bonuses taxed on monthly payslips?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bonuses are classified as fully taxable salary income. When paid out, payroll software adds the entire bonus to your annual taxable income projection, which sharply elevates monthly TDS in the payout month. Joining bonuses often carry clawback clauses requiring full repayment if you resign before completing 12 to 24 months."
        }
      },
      {
        "@type": "Question",
        "name": "What are the statutory rules and limits for claiming Leave Travel Allowance (LTA)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Section 10(5) of the Income Tax Act, LTA covers domestic travel costs (airfare, train fare, or public bus fare) for the employee and their family. Exemption is restricted to actual travel fare only; lodging, meals, and local sightseeing are excluded. Tax exemption is permitted for two journeys in a block of four calendar years (current block: 2022 to 2025). Under the New Tax Regime, LTA tax exemptions are discontinued."
        }
      },
      {
        "@type": "Question",
        "name": "How will the Code on Wages (50% basic pay rule) alter monthly in-hand take-home pay?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Code on Wages, 2019 mandates that an employee's basic wages (Basic Salary + DA) must constitute at least 50% of total gross remuneration. For companies currently structuring basic pay at 30% to 35% to minimize retiral liabilities, raising basic pay to 50% increases mandatory employee and employer 12% EPF deductions and gratuity accrual. This slightly compresses immediate monthly take-home pay while significantly expanding retirement savings."
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
          Take Home Salary Calculator: Master Payslip Line Items, Deductions &amp; In-Hand Pay
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          For every salaried professional in India, payday represents the culmination of a month of dedicated labor. Yet, when the automated SMS notification arrives from your bank or you log into your enterprise Human Resource Management System (HRMS) to download your monthly payslip, the figure credited to your bank account rarely matches the number you envisioned when signing your offer letter. While your compensation discussion focused on an impressive annual Cost to Company (CTC) or a prominent gross monthly wage, what actually lands in your liquid bank account is your <strong>Net Take-Home Salary</strong>.
        </p>
        <p className="mb-4">
          Understanding the mathematical bridge between gross monthly compensation and net in-hand liquidity is essential for personal financial solvency. Headline compensation figures do not pay your monthly apartment rent, cover grocery bills, service vehicle loans, or fund automated mutual fund Systematic Investment Plans (SIPs). Your household budget operates strictly on usable, cleared liquid cash. When individuals make lifestyle commitments based on gross earnings rather than net take-home pay, they inevitably encounter liquidity crises, accumulating high-interest credit card debt or failing to build an adequate emergency fund.
        </p>
        <p className="mb-4">
          Unlike broad corporate CTC modeling tools that deconstruct multi-tiered employer liabilities (which you can evaluate from annual contract packages using our <Link href="/calculator/finance/salary" className="text-blue-700 font-semibold underline hover:text-blue-800">Salary Calculator</Link>), this <strong>Take Home Salary Calculator</strong> is engineered specifically for granular payslip execution. By inputting your precise monthly line-item earnings—such as Basic Pay, House Rent Allowance (HRA), Special Allowance, and other allowances—alongside mandatory statutory deductions like Employee Provident Fund (EPF), Professional Tax (PT), and Tax Deducted at Source (TDS), this calculator instantly exposes your exact net bank deposit.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-xs md:text-sm">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-800 block mb-1">Gross Monthly Earnings</span>
            <span className="text-gray-600">The total cash earnings earned before any deductions: Basic Pay + HRA + Special Allowance + Fixed Allowances.</span>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <span className="font-bold text-red-800 block mb-1">Cumulative Monthly Deductions</span>
            <span className="text-gray-600">The combined sum of mandatory retirement savings (12% EPF), state professional tax, and monthly income tax (TDS).</span>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-800 block mb-1">Net In-Hand Bank Credit</span>
            <span className="text-gray-600">The pure liquid cash deposited into your savings account, directly governing your monthly disposable budget.</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & INPUT CALIBRATION */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          How to Calibrate Your Payslip Inputs for Precise In-Hand Calculation
        </h2>
        <p className="mb-4">
          To achieve institutional precision with our Take Home Salary Calculator, retrieve your latest monthly payslip or employment offer annexure. Enter the following parameters:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li>
            <strong>Monthly Basic Pay:</strong> The fixed foundational core of your compensation package. Basic pay typically represents 40% to 50% of your gross salary and serves as the statutory baseline for EPF deductions, gratuity calculations, and HRA limits.
          </li>
          <li>
            <strong>Monthly House Rent Allowance (HRA):</strong> The allowance provided to subsidize housing costs. Under the Old Tax Regime, HRA offers substantial tax savings under Section 10(13A) if you live in rented accommodation. Under the New Tax Regime, it is fully taxable cash.
          </li>
          <li>
            <strong>Monthly Special Allowance:</strong> A flexible, fully taxable corporate allowance used by payroll departments to balance your gross salary after factoring in Basic Pay and HRA. It carries no statutory exemptions.
          </li>
          <li>
            <strong>Other Monthly Allowances:</strong> Fixed stipends such as Leave Travel Allowance (LTA), conveyance allowances, telephone/internet reimbursements, child education allowances, or uniform stipends.
          </li>
          <li>
            <strong>Monthly EPF Deduction:</strong> Your employee retirement contribution, statutorily mandated at 12% of your Basic Salary + DA under the Employees&apos; Provident Funds and Miscellaneous Provisions Act, 1952. Check your payslip to see if your employer deducts 12% on your full basic pay or restricts it to the statutory ₹1,800 cap.
          </li>
          <li>
            <strong>Monthly Professional Tax (PT):</strong> A state-level direct tax levied on salaried earners, typically ₹200 per month (₹300 in February) in states like Maharashtra, Karnataka, and West Bengal, or ₹0 in non-taxing states like Delhi and Haryana.
          </li>
          <li>
            <strong>Monthly Income Tax (TDS):</strong> Tax Deducted at Source under Section 192 of the Income Tax Act. Your employer estimates your annual tax liability based on your chosen tax regime and declared deductions, dividing it evenly across 12 months.
          </li>
        </ul>
        <p className="text-sm text-gray-600">
          Once your take-home pay is computed, you can accurately plan recurring commitments. Before locking in installment plans for lifestyle purchases, audit your borrowing limits with our <Link href="/calculator/finance/loan-affordability" className="text-blue-700 font-semibold underline hover:text-blue-800">Loan Affordability Calculator</Link> and verify that consumer debt financing does not erode your monthly surplus using our <Link href="/calculator/finance/cc-emi" className="text-blue-700 font-semibold underline hover:text-blue-800">Credit Card EMI Calculator</Link>.
        </p>
      </section>

      {/* SECTION 3: ANATOMY OF PAYSLIP EARNINGS & STATUTORY MECHANICS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Anatomy of Payslip Earnings: Deconstructing What You Earn
        </h2>
        <p className="mb-4">
          A corporate payslip is bifurcated into two primary ledgers: <strong>Earnings</strong> on the left side and <strong>Deductions</strong> on the right side. Understanding how each earnings line item functions statutorily allows you to negotiate optimized contract packages.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. Basic Salary: The Statutory Anchor</h3>
        <p className="mb-4">
          Basic salary is the non-negotiable core wage paid for your employment. Unlike allowances, basic pay is 100% taxable under Indian income tax law without any direct exemptions. However, basic salary is the critical mathematical denominator for three major retirement and statutory benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Provident Fund (EPF):</strong> Exactly 12% of basic salary is deducted from your earnings, and another 12% is matched by your employer.</li>
          <li><strong>Gratuity Accrual:</strong> Under the Payment of Gratuity Act, 1972, gratuity is computed strictly as 15/26 of your last-drawn monthly basic salary multiplied by years of continuous service.</li>
          <li><strong>House Rent Allowance (HRA):</strong> HRA is legally capped as a percentage of basic salary (50% in metro cities, 40% in non-metro locations).</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2. House Rent Allowance (HRA) &amp; Rule 2A Exemption</h3>
        <p className="mb-4">
          House Rent Allowance is paid to help employees meet residential rental expenses. If an employee chooses the Old Tax Regime, HRA provides one of the most powerful tax shields in the Indian tax code. Under Section 10(13A) read with Rule 2A of the Income Tax Rules, the exempt amount is the <strong>minimum</strong> of three statutory calculations:
        </p>
        <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-sm font-mono my-3 space-y-1 text-slate-800">
          <p>1. Actual HRA received from the employer</p>
          <p>2. Actual rent paid minus 10% of Basic Salary (+ DA)</p>
          <p>3. 50% of Basic Salary (if living in Mumbai, Delhi, Kolkata, Chennai) or 40% (other cities)</p>
        </div>
        <p className="mb-4">
          Any HRA received above the exempt amount is added to gross taxable income. Under the New Tax Regime (Section 115BAC), HRA exemptions are completely disallowed; the full HRA amount is treated as taxable cash income. Calculate your exact tax-exempt rental portion using our specialized <Link href="/calculator/finance/hra" className="text-emerald-700 font-semibold underline hover:text-emerald-800">HRA Tax Calculator</Link>.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3. Special Allowance: The Flexible Buffer</h3>
        <p className="mb-4">
          The Special Allowance is a residual compensation component introduced by corporate HR departments. When designing an offer package, HR sets Basic Pay at 40% to 50% and HRA at 20% to 25%. The remaining gross amount is categorized as Special Allowance. It is 100% taxable, carries zero tax exemptions, and does not attract statutory PF or gratuity liabilities.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">4. Flexi-Benefit Plans (FBP) &amp; Tax-Exempt Reimbursements</h3>
        <p className="mb-4">
          Progressive employers offer Flexi-Benefit Plans that permit employees to convert a portion of their taxable special allowance into tax-exempt reimbursement components under the Old Tax Regime:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Meal Coupons / Cards:</strong> Tax-exempt up to ₹50 per meal for two meals per working day (approximately ₹2,200 to ₹2,600 monthly under Section 17(2)).</li>
          <li><strong>Telephone &amp; Broadband Reimbursement:</strong> Fully tax-free against actual monthly postpaid bills incurred for official and personal communication.</li>
          <li><strong>Books &amp; Periodicals Allowance:</strong> Tax-exempt upon submitting bills for professional books, industry journals, and training materials.</li>
          <li><strong>Leave Travel Allowance (LTA):</strong> Exempt under Section 10(5) for two domestic journeys within a four-calendar-year block for the employee and their family.</li>
        </ul>
      </section>

      {/* SECTION 4: UNDERSTANDING PAYSLIP DEDUCTIONS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Deconstructing Payslip Deductions: Where Does Your Earned Money Go?
        </h2>
        <p className="mb-4">
          While seeing deductions reduce your gross salary can be frustrating, deductions generally fall into two distinct categories: <strong>Mandatory Wealth-Building Savings</strong> (which you retain as personal capital) and <strong>Statutory Direct Taxes</strong> (which fund public services and government expenditure).
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. Employee Provident Fund (EPF)</h3>
        <p className="mb-4">
          The Employee Provident Fund is a statutory social security retirement framework governed by the Employees&apos; Provident Fund Organisation (EPFO). Every month, exactly <strong>12% of your Basic Salary + DA</strong> is deducted from your payslip and transferred to your EPF account.
        </p>
        <p className="mb-4">
          Your employer also contributes an equivalent 12%. Under statutory EPFO rules, your employer&apos;s 12% matching contribution is bifurcated: <strong>3.67%</strong> is deposited directly into your interest-bearing EPF account, while <strong>8.33%</strong> (capped at ₹1,250 monthly on basic wages exceeding ₹15,000) is diverted into the Employees&apos; Pension Scheme (EPS).
        </p>
        <p className="mb-4 text-emerald-900 bg-emerald-50 p-4 rounded-xl border border-emerald-200">
          <strong>The Dual Nature of EPF:</strong> While EPF reduces your monthly in-hand liquidity, it acts as a guaranteed sovereign compounding engine yielding high annual interest (currently 8.25%). Under the Old Tax Regime, employee EPF deductions qualify for tax relief under Section 80C. To understand how monthly interest compounds into a multi-decade retirement nest egg, explore our <Link href="/calculator/finance/pf" className="text-emerald-800 font-bold underline hover:text-emerald-950">PF Calculator</Link> and track month-by-month compound interest accumulation using our <Link href="/calculator/finance/epf-interest" className="text-emerald-800 font-bold underline hover:text-emerald-950">EPF Interest Calculator</Link>.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2. Professional Tax (PT)</h3>
        <p className="mb-4">
          Professional Tax is a direct tax levied by individual state governments on salaried individuals, traders, and professionals under Article 276(2) of the Constitution of India. The maximum statutory deduction is capped at ₹2,500 per financial year. Deduction rules vary by state:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3">State / Union Territory</th>
                <th className="p-3">Monthly Deduction</th>
                <th className="p-3">Annual Cap</th>
                <th className="p-3">Salary Exemption Slabs</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-medium">Maharashtra</td>
                <td className="p-3">₹200 / month (₹300 in Feb)</td>
                <td className="p-3">₹2,500</td>
                <td className="p-3">Exempt if monthly salary &lt; ₹7,500 (men) / ₹25,000 (women)</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Karnataka</td>
                <td className="p-3">₹200 / month</td>
                <td className="p-3">₹2,400</td>
                <td className="p-3">Exempt if monthly gross salary &lt; ₹15,000</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">West Bengal</td>
                <td className="p-3">₹110 to ₹200 / month</td>
                <td className="p-3">₹2,500</td>
                <td className="p-3">Tiered based on monthly gross earnings</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Delhi, Haryana, Rajasthan</td>
                <td className="p-3 text-emerald-600 font-semibold">₹0 (Nil)</td>
                <td className="p-3 text-emerald-600 font-semibold">₹0</td>
                <td className="p-3">No professional tax levied in these regions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3. Tax Deducted at Source (TDS under Section 192)</h3>
        <p className="mb-4">
          TDS represents your monthly income tax withholding. Under Section 192 of the Income Tax Act, employers are legally obligated to estimate your total annual income tax liability at the start of the financial year, divide that total liability by 12, and deduct 1/12th from your monthly payslip.
        </p>
        <p className="mb-4">
          <strong>The January to March TDS Shock:</strong> In April or May, employees submit an investment declaration (Form 12BB), indicating intended investments in Section 80C, 80D health insurance, HRA, and NPS. The employer computes monthly TDS assuming these investments will be made. However, between December and February, employees must provide actual receipts and investment proofs. If an employee fails to submit proofs, payroll software reverses the declared exemptions, sharply increasing TDS deductions in January, February, and March—frequently slashing take-home pay by 30% to 50% in those months!
        </p>
      </section>

      {/* SECTION 5: REAL-WORLD WORKED CASE STUDIES */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Case Studies: Decoding Monthly Payslips Across Career Stages
        </h2>
        <p className="mb-6">
          To illustrate how compensation structures, tax regimes, and statutory deductions interact to govern monthly take-home pay, examine three detailed real-world scenarios:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Entry-Level Engineer</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The ₹50,000 Monthly Gross Payslip: Zero Tax Under Budget 2024 New Regime
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Profile &amp; Structure:</strong> Aditya joins a technology firm in Bengaluru with a monthly gross salary of ₹50,000 (annual gross of ₹6,00,000). His payslip is structured as: Basic Pay: ₹25,000 (50%), HRA: ₹10,000 (20%), Special Allowance: ₹12,000, and Conveyance: ₹3,000. Aditya chooses the New Tax Regime (Section 115BAC).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-4 bg-slate-50 p-4 rounded-lg">
            <div>
              <p className="font-bold text-slate-800 mb-1">Monthly Earnings Ledger:</p>
              <p>• Basic Salary: ₹25,000.00</p>
              <p>• House Rent Allowance (HRA): ₹10,000.00</p>
              <p>• Special Allowance: ₹12,000.00</p>
              <p>• Conveyance Allowance: ₹3,000.00</p>
              <p className="font-semibold text-slate-900 pt-1">Total Gross Earnings: ₹50,000.00</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-1">Monthly Deductions Ledger:</p>
              <p>• Employee EPF (12% of ₹25,000): ₹3,000.00</p>
              <p>• Karnataka Professional Tax: ₹200.00</p>
              <p>• Income Tax (TDS under New Regime): ₹0.00</p>
              <p className="text-slate-500 text-xs">(₹6L Gross - ₹75k Standard = ₹5.25L &lt; ₹7L rebate)</p>
              <p className="font-semibold text-slate-900 pt-1">Total Monthly Deductions: ₹3,200.00</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 text-sm space-y-1">
            <p><strong>Net Take-Home Cash Deposited:</strong> ₹50,000.00 - ₹3,200.00 = <strong>₹46,800.00</strong></p>
            <p><strong>Cash Retention Efficiency:</strong> (₹46,800 / ₹50,000) × 100 = <strong>93.6%</strong></p>
            <p className="text-xs text-gray-600">
              <em>Key Takeaway:</em> Because Budget 2024 provides a ₹75,000 standard deduction and Section 87A rebate for taxable income up to ₹7,00,000, Aditya incurs zero income tax, enjoying a high 93.6% cash retention rate.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Mid-Career Professional</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The ₹1,25,000 Monthly Gross Payslip: Old vs. New Tax Regime In-Hand Comparison
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Profile &amp; Structure:</strong> Neha earns a monthly gross salary of ₹1,25,000 (annual gross ₹15,00,000) in Mumbai. Her payslip breakdown is: Basic Pay: ₹60,000 (48%), HRA: ₹30,000 (24%), Special Allowance: ₹30,000, and Food Allowance: ₹5,000. Neha pays ₹25,000 monthly rent in Mumbai and invests ₹1.5 Lakhs in Section 80C (including EPF) and ₹25,000 in health insurance (Section 80D).
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs border-collapse bg-slate-50 rounded-lg border border-slate-200">
              <thead className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                <tr>
                  <th className="p-2.5">Component</th>
                  <th className="p-2.5">Old Tax Regime (With Deductions)</th>
                  <th className="p-2.5">New Tax Regime (Section 115BAC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-slate-700 font-mono">
                <tr>
                  <td className="p-2 font-medium">Monthly Gross Salary</td>
                  <td className="p-2">₹1,25,000.00</td>
                  <td className="p-2">₹1,25,000.00</td>
                </tr>
                <tr>
                  <td className="p-2">Employee EPF (12% of ₹60,000)</td>
                  <td className="p-2 text-red-600">-₹7,200.00</td>
                  <td className="p-2 text-red-600">-₹7,200.00</td>
                </tr>
                <tr>
                  <td className="p-2">Maharashtra Professional Tax</td>
                  <td className="p-2 text-red-600">-₹200.00</td>
                  <td className="p-2 text-red-600">-₹200.00</td>
                </tr>
                <tr>
                  <td className="p-2">Estimated Monthly TDS</td>
                  <td className="p-2 text-red-600">-₹8,950.00</td>
                  <td className="p-2 text-red-600">-₹11,440.00</td>
                </tr>
                <tr className="bg-white font-bold text-slate-900">
                  <td className="p-2.5">Net Monthly Take-Home Pay</td>
                  <td className="p-2.5 text-emerald-700">₹1,08,650.00</td>
                  <td className="p-2.5 text-blue-700">₹1,06,160.00</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-gray-600">
            <em>Analysis:</em> Because Neha pays high rent in Mumbai (generating a large Section 10(13A) HRA exemption) and maximizes Section 80C and 80D deductions, the Old Tax Regime delivers ₹2,490 more in monthly take-home pay (₹29,880 annually) compared to the New Regime. To project how Section 80C equity mutual fund allocations build long-term wealth, evaluate our <Link href="/calculator/finance/elss" className="text-blue-700 font-semibold underline hover:text-blue-800">ELSS Calculator</Link>.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Senior Technology Executive</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The ₹3,00,000 Monthly Gross Payslip: Corporate NPS Restructuring
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            <strong>Profile &amp; Structure:</strong> Vikram is an engineering director in Gurugram earning a monthly gross salary of ₹3,00,000 (₹36,00,000 annual gross). His basic salary is ₹1,20,000 (40%), HRA: ₹60,000, and Special Allowance: ₹1,20,000. Under the New Tax Regime, Vikram is in the 30% tax bracket with significant monthly TDS.
          </p>
          <p className="text-sm text-gray-600 mb-4">
            Vikram requests HR to restructure his compensation by routing <strong>10% of his basic salary (₹12,000 monthly or ₹1,44,000 annually) into Corporate NPS under Section 80CCD(2)</strong>:
          </p>

          <div className="space-y-2 text-xs font-mono bg-slate-50 p-4 rounded-lg mb-4">
            <p>• Pre-Restructuring Monthly TDS: ₹54,200.00</p>
            <p>• Corporate NPS Allocation: ₹12,000.00 diverted directly into NPS Tier-I</p>
            <p>• Tax Savings from NPS: ₹12,000 × 31.2% (tax slab + cess) = ₹3,744.00 monthly tax reduction</p>
            <p>• Revised Monthly TDS: ₹54,200.00 - ₹3,744.00 = ₹50,456.00</p>
            <p>• Effective Net Out-of-Pocket Cost for ₹12,000 Retirement Wealth: ₹12,000 - ₹3,744 = ₹8,256.00</p>
          </div>

          <div className="border-t border-gray-100 pt-3 text-sm space-y-1">
            <p><strong>Net Take-Home Pay:</strong> ₹2,21,144.00 monthly (after EPF, PT, NPS, and TDS)</p>
            <p className="text-xs text-gray-600">
              <em>Strategic Impact:</em> Vikram builds a ₹1,44,000 annual sovereign retirement corpus at an effective cost of only ₹99,072 in sacrificed take-home liquidity. To model multi-decade pension accumulation and compounding, use our <Link href="/calculator/finance/nps" className="text-purple-700 font-bold underline hover:text-purple-800">NPS Calculator</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 6: ADVANCED PAYROLL STRATEGIES & FINANCIAL OPTIMIZATION */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Advanced Payroll Advisory: TDS Proofs, Form 12B &amp; Loan Underwriting
        </h2>
        <p className="mb-4">
          Maximizing and protecting your monthly take-home salary requires proactive administrative vigilance. Avoiding common payroll oversights ensures stable cash flow and protects your credit profile.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Preventing the January to March TDS Collapse</h3>
        <p className="mb-4">
          The single most common cause of sudden take-home pay reductions is missed payroll submission deadlines. In December, employers issue reminders to upload official investment receipts (life insurance premium receipts, ELSS fund statements, home loan provisional interest certificates, and rent agreements).
        </p>
        <p className="mb-4">
          If proofs are not uploaded by the HRMS portal deadline (usually January 15 to January 31), payroll software automatically recalculates your tax liability for the entire year without deductions. The unpaid tax is deducted equally from your remaining payslips (January, February, and March). Submitting proofs early ensures consistent monthly cash flow.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Switching Jobs Mid-Year: The Form 12B Mandate</h3>
        <p className="mb-4">
          When changing jobs mid-financial year, employees frequently experience a false sense of financial prosperity. Both previous and new employers independently apply standard deductions and lower tax brackets, assuming they are your sole income source.
        </p>
        <p className="mb-4">
          To prevent severe tax liabilities at year-end, submit <strong>Form 12B</strong> to your new employer upon joining. Form 12B officially discloses earnings and TDS deducted by your previous employer, allowing your new payroll department to deduct accurate monthly TDS and preventing unexpected self-assessment tax bills plus Section 234B/234C interest penalties in July.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">How Mortgage Lenders Underwrite Take-Home Pay (FOIR &amp; DTI Limits)</h3>
        <p className="mb-4">
          When underwriting home loans, vehicle loans, and personal loans, commercial banks evaluate your <strong>Net Take-Home Salary</strong>, not your gross CTC. Underwriters enforce a strict <strong>Fixed Obligation to Income Ratio (FOIR)</strong>, typically capping total monthly debt EMIs at 40% to 50% of verified net bank deposits.
        </p>
        <p className="mb-4">
          For example, if an applicant earns a ₹1,00,000 gross monthly salary but takes home ₹80,000 net, maximum allowable EMI obligations across all loans cannot exceed ₹32,000 to ₹40,000 monthly. Understanding your exact take-home pay is vital before applying for mortgage pre-approvals or planning property down payments.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">The Code on Wages (50% Basic Wage Rule) &amp; Take-Home Impact</h3>
        <p className="mb-4">
          The Code on Wages, 2019 introduces a statutory definition of &quot;wages&quot; requiring that basic pay plus dearness allowance must constitute at least 50% of total employee remuneration. If allowances exceed 50%, the surplus is legally re-characterized as basic wages for calculating statutory deductions.
        </p>
        <p className="mb-4">
          For companies that historically kept basic pay suppressed at 30% to 35% of gross to reduce provident fund overhead, compliance with the 50% rule increases monthly employee EPF deductions and employer matching contributions. While this reduces immediate monthly in-hand liquidity by 2% to 5%, it substantially increases retirement savings and terminal gratuity payouts upon separation.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Voluntary Provident Fund (VPF) Allocations</h3>
        <p className="mb-4">
          Salaried professionals seeking to maximize guaranteed, sovereign-backed tax-free wealth can instruct payroll to deduct <strong>Voluntary Provident Fund (VPF)</strong> contributions above the statutory 12% EPF requirement. Employees can contribute up to 100% of their Basic Pay + DA into VPF.
        </p>
        <p className="mb-4">
          VPF contributions earn the identical high interest rate as EPF (8.25% annually) and enjoy Exempt-Exempt-Exempt (EEE) tax treatment under Section 80C, provided total employee contributions do not exceed ₹2,50,000 annually. Allocating funds into VPF reduces monthly take-home cash flow in exchange for guaranteed long-term compounding.
        </p>
      </section>

      {/* SECTION 7: FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is Take Home Salary different from Gross Salary?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Gross salary is your total monthly compensation before any deductions, representing the sum of Basic Pay, House Rent Allowance (HRA), Special Allowance, and other fixed stipends. Take Home Salary (Net In-Hand Salary) is the actual liquid cash deposited into your bank account on payday after subtracting mandatory deductions such as Employee Provident Fund (12% EPF), Professional Tax (PT), and Income Tax Deducted at Source (TDS).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Why does my monthly Take Home Salary fluctuate throughout the year?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Monthly take-home pay can fluctuate due to three main factors: 1) Irregular earnings such as performance bonuses, overtime, or statutory arrears; 2) Loss of Pay (LOP) deductions from unpaid leave; and 3) Spikes in monthly TDS withholdings during the final quarter (January to March) if an employee fails to submit tax-saving investment proofs declared earlier in Form 12BB.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Is House Rent Allowance (HRA) included in my monthly Take Home Salary?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. HRA is paid out every month as part of your gross cash earnings and directly increases your take-home pay. Under the Old Tax Regime, you can claim a statutory tax exemption on HRA under Section 10(13A) by submitting rent receipts, which lowers your monthly TDS withholding and further boosts net cash flow. Under the New Tax Regime, HRA is paid as cash but is fully taxable.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How can an employee legally increase their monthly Take Home Salary?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You can maximize monthly take-home pay by: 1) Selecting the optimal tax regime (the New Concessional Regime under Section 115BAC often yields lower TDS for income below ₹15 Lakhs without large home loans); 2) Restructuring CTC into tax-free Flexi-Benefit reimbursements (meal coupons, broadband, fuel); 3) Opting for the ₹1,800 statutory EPF contribution cap under EPFO rules if permitted by company policy; and 4) Submitting investment proofs on time to prevent January-March TDS shocks.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How did Budget 2024 impact monthly take-home salary under the New Tax Regime?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Budget 2024 enhanced the Standard Deduction under the New Tax Regime (Section 115BAC) from ₹50,000 to ₹75,000 annually (₹6,250 monthly relief). Furthermore, revised tax slabs and the Section 87A rebate ensure that salaried individuals earning up to ₹7,75,000 annually (₹64,583 monthly gross) pay zero income tax, directly boosting monthly in-hand liquidity.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the ₹1,800 EPF contribution cap, and how does it affect take-home pay?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under Paragraph 26A of the Employees&apos; Provident Fund Scheme, the statutory wage ceiling for mandatory PF deductions is ₹15,000 per month (12% of ₹15,000 = ₹1,800). While many employers deduct 12% on full basic salary, organizations offering the statutory cap restrict both employee and employer PF to ₹1,800 monthly. This increases monthly take-home pay by several thousand rupees, though it reduces the long-term retirement corpus.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is Professional Tax, and why does the deduction vary across Indian states?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Professional Tax is a state-level levy authorized under Article 276 of the Indian Constitution, capped at ₹2,500 annually. States like Maharashtra, Karnataka, and West Bengal deduct up to ₹200 monthly (₹300 in February), whereas union territories and states like Delhi, Haryana, and Rajasthan levy zero professional tax, creating state-level take-home pay variations for identical gross salaries.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What happens to monthly take-home pay during Loss of Pay (LOP)?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When an employee takes unapproved leave or exhausts their paid leave balance, payroll applies Loss of Pay (LOP). The per-day salary is calculated as Gross Monthly Salary divided by total days in the month (or standard 26/30 working days), and this sum is deducted from gross pay. Statutory deductions like EPF and PT are also re-computed on the reduced earned basic wage.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does Form 12BB declaration impact monthly payroll TDS?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Form 12BB is the statutory statement of tax-saving declarations submitted to your employer at the beginning of the financial year. Employers estimate your annual tax liability based on declared investments (80C, 80D, home loan interest, HRA) and deduct 1/12th of that estimated tax monthly. If declarations are accurate, TDS deductions remain uniform throughout the year.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Why does switching employers mid-year frequently cause a take-home pay surprise?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When switching employers mid-year, both companies independently apply the standard deduction (₹75,000 or ₹50,000) and lower tax slab brackets, assuming they are your sole income source. Unless you declare prior salary via Form 12B to your new employer, both under-deduct TDS. At tax filing time in July, you face substantial self-assessment tax and Section 234B/234C interest penalties.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does Corporate NPS under Section 80CCD(2) boost long-term wealth without hurting take-home pay?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under Section 80CCD(2), an employer can contribute up to 10% of basic salary directly into the employee&apos;s National Pension System account. This contribution is completely tax-deductible under both the Old and New Tax Regimes. While diverting basic pay slightly reduces gross cash, the massive reduction in monthly TDS offsets a large portion of the deduction, resulting in high tax efficiency.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How are performance bonuses and joining bonuses taxed on monthly payslips?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Bonuses are classified as fully taxable salary income. When paid out, payroll software adds the entire bonus to your annual taxable income projection, which sharply elevates monthly TDS in the payout month. Joining bonuses often carry clawback clauses requiring full repayment if you resign before completing 12 to 24 months.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are the statutory rules and limits for claiming Leave Travel Allowance (LTA)?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under Section 10(5) of the Income Tax Act, LTA covers domestic travel costs (airfare, train fare, or public bus fare) for the employee and their family. Exemption is restricted to actual travel fare only; lodging, meals, and local sightseeing are excluded. Tax exemption is permitted for two journeys in a block of four calendar years (current block: 2022 to 2025). Under the New Tax Regime, LTA tax exemptions are discontinued.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How will the Code on Wages (50% basic pay rule) alter monthly in-hand take-home pay?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Code on Wages, 2019 mandates that an employee&apos;s basic wages (Basic Salary + DA) must constitute at least 50% of total gross remuneration. For companies currently structuring basic pay at 30% to 35% to minimize retiral liabilities, raising basic pay to 50% increases mandatory employee and employer 12% EPF deductions and gratuity accrual. This slightly compresses immediate monthly take-home pay while significantly expanding retirement savings.
            </div>
          </details>

        </div>
      </section>

      {/* SECTION 8: INTERNALLY LINKED FINANCIAL HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Annual CTC Deconstruction</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Want to model employer contributions, gratuity accrual, and annual CTC compensation packages? Audit your contract with our <Link href="/calculator/finance/salary" className="text-emerald-700 font-bold underline hover:text-emerald-800">Salary Calculator</Link>.
          </p>
        </div>

        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">House Rent Allowance</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Calculate your exact Section 10(13A) rental tax exemption under metro and non-metro rules using our <Link href="/calculator/finance/hra" className="text-blue-700 font-bold underline hover:text-blue-800">HRA Exemption Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Automated SIP Compounding</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Channel 20% to 30% of your net monthly take-home salary into automated wealth creation. Simulate compounding milestones with our <Link href="/calculator/finance/mutual-fund-returns" className="text-purple-700 font-bold underline hover:text-purple-800">Mutual Fund Returns Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}