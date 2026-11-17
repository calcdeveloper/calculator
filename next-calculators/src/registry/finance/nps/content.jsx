import React from 'react';
import Link from 'next/link';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it mandatory to buy an annuity with my NPS corpus at age 60?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under statutory PFRDA regulations, when an NPS subscriber reaches normal superannuation age (60 years), a minimum of 40% of the total accumulated corpus must be utilized to purchase an immediate annuity from a PFRDA-empanelled Life Insurance Company. The annuity pool guarantees a lifelong monthly pension. If the total corpus at age 60 is less than or equal to ₹5 Lakhs, the subscriber is legally permitted to withdraw 100% of the accumulated funds as a lump sum without purchasing an annuity."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 60% lump sum withdrawal from NPS completely tax-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under Section 10(12A) of the Income Tax Act, 1961, up to 60% of the total accumulated corpus withdrawn as a lump sum upon normal retirement (age 60) is 100% exempt from income tax. Whether the lump sum amount is ₹25 Lakhs or ₹5 Crores, zero capital gains tax or income tax is levied."
        }
      },
      {
        "@type": "Question",
        "name": "Is the monthly annuity pension received from NPS taxable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While the capital amount transferred to purchase the annuity (minimum 40%) is exempt from tax at the point of maturity, the monthly annuity payouts received by the retiree are treated as regular income under 'Income from Other Sources' or 'Salaries' and are taxed according to the retiree's prevailing marginal income tax slab."
        }
      },
      {
        "@type": "Question",
        "name": "What are the rules and penalties for premature exit from NPS before age 60?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subscribers can exit voluntarily before age 60 after completing 5 years of continuous membership (for individual or corporate subscribers). However, premature exit triggers punitive withdrawal restrictions: you are legally mandated to utilize at least 80% of your accumulated corpus to purchase an annuity, and only 20% can be withdrawn as a lump sum. If the total accumulated corpus is ₹2.5 Lakhs or less at premature exit, 100% lump sum withdrawal is allowed."
        }
      },
      {
        "@type": "Question",
        "name": "What tax deductions can I claim under Section 80CCD(1), 80CCD(1B), and 80CCD(2)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Old Tax Regime, you can claim: 1) Section 80CCD(1) employee contributions up to 10% of salary (or 20% of gross income for self-employed) capped at ₹1.5 Lakhs within the Section 80C limit; 2) Section 80CCD(1B) exclusive additional deduction of up to ₹50,000 solely for NPS Tier-I; 3) Section 80CCD(2) employer contributions up to 10% of Basic Salary + DA (14% for Central/State Govt employees). Crucially, Section 80CCD(2) is available under BOTH Old and New Tax Regimes with no upper rupee cap."
        }
      },
      {
        "@type": "Question",
        "name": "Can I continue contributing to NPS after reaching 60 years of age?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. PFRDA allows subscribers to defer lump sum withdrawal and annuity purchase, or continue contributing actively to their NPS Tier-I account up to the age of 75 years. Deferring maturity allows your investments to compound uninterrupted in low-cost institutional funds, providing substantial portfolio expansion before purchasing an annuity."
        }
      },
      {
        "@type": "Question",
        "name": "What is Systematic Lump-Sum Withdrawal (SLW) in NPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Systematic Lump-Sum Withdrawal (SLW) is a flexible exit facility introduced by the PFRDA allowing retirees to withdraw their 60% tax-free lump sum in periodic installments (monthly, quarterly, half-yearly, or annually) between ages 60 and 75, rather than taking the full 60% as a single payout. The remaining unwithdrawn capital stays invested in equity and debt funds, continuing to generate compound returns."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Active Choice and Auto Choice in NPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under Active Choice, the subscriber manually decides their asset allocation across Equities (E, up to 75%), Corporate Bonds (C), Government Securities (G), and Alternative Assets (A, up to 5%). Under Auto Choice (Lifecycle Funds), the system automatically rebalances your portfolio based on age: Aggressive (LC-75), Moderate (LC-50), or Conservative (LC-25), gradually reducing equity exposure and increasing safe debt allocations as you approach age 60."
        }
      },
      {
        "@type": "Question",
        "name": "What are the partial withdrawal conditions under NPS Tier-I?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Subscribers who have completed at least 3 years in NPS can make partial withdrawals up to 25% of their own personal contributions (excluding employer contributions and accumulated interest). Eligible reasons include: children's higher education, children's marriage, purchase or construction of a first residential house, and medical treatment for 14 specified critical illnesses. Partial withdrawals are completely tax-free and permitted up to a maximum of 3 times across the entire tenure."
        }
      },
      {
        "@type": "Question",
        "name": "How does Tier-I compare with Tier-II in terms of liquidity and tax benefits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NPS Tier-I is the mandatory retirement account with strict lock-in until age 60, offering comprehensive tax deductions under Sections 80CCD(1), 80CCD(1B), and 80CCD(2). Tier-II is a voluntary, liquid savings account requiring an active Tier-I PRAN. In Tier-II, you can deposit and withdraw capital freely with zero lock-in, but contributions carry zero tax deductions (except for Central Government employees with a 3-year lock-in), and capital gains are taxed similarly to mutual funds."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to the NPS corpus in the unfortunate event of the subscriber's demise before age 60?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In the event of the subscriber's death before maturity, 100% of the accumulated NPS corpus is paid out directly to the registered nominee or legal heir as a tax-free lump sum. Nominees also have the voluntary option to utilize a portion or the entirety of the corpus to purchase an annuity for regular pension income if they choose."
        }
      },
      {
        "@type": "Question",
        "name": "Which Pension Fund Manager (PFM) provides the best returns, and can I switch managers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "PFRDA has licensed multiple institutional Pension Fund Managers including SBI Pension Funds, LIC Pension Fund, UTI Retirement Solutions, HDFC Pension Management, ICICI Prudential Pension Fund, Kotak Mahindra Pension Fund, and Aditya Birla Sun Life Pension. Subscribers are legally permitted to switch their Pension Fund Manager once per financial year and modify their asset allocation up to twice per financial year with zero exit load, zero penalties, and zero tax incidence."
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

      {/* SECTION 1: EXECUTIVE OVERVIEW & FOUNDATIONAL ARCHITECTURE */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          NPS Calculator: Master National Pension System Wealth, Lump Sum &amp; Annuity Planning
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          Securing a financially independent, dignified retirement is the most formidable financial challenge facing modern working professionals. In a developing economy characterized by the absence of a universal, state-funded social security safety net, rising life expectancy, and relentless medical inflation, individual retirement self-reliance is not optional—it is existential. Established under the statutory oversight of the <strong>Pension Fund Regulatory and Development Authority (PFRDA) Act, 2013</strong>, the <strong>National Pension System (NPS)</strong> stands as India&apos;s flagship sovereign retirement framework, engineered to convert systematic career savings into a robust, inflation-hedged financial fortress.
        </p>
        <p className="mb-4">
          Originally introduced on January 1, 2004, to replace the Defined Benefit Pension Scheme for newly recruited Central Government civil servants, the architecture of the NPS underwent a transformative liberalization on May 1, 2009, opening its institutional accumulation engine to all citizens of India, including self-employed professionals, gig workers, and corporate executives. Structured as a Defined Contribution model, the NPS anchors individual retirement planning to a portable, lifetime-unique 12-digit <strong>Permanent Retirement Account Number (PRAN)</strong> administered by institutional Central Recordkeeping Agencies (such as Protean/NSDL, KFintech, and CAMS).
        </p>
        <p className="mb-4">
          What fundamentally distinguishes the NPS from legacy sovereign fixed-income savings accounts—such as the Employees&apos; Provident Fund (modeled in our <Link href="/calculator/finance/epf-interest" className="text-blue-700 font-semibold underline hover:text-blue-800">EPF Interest Calculator</Link>) or the Public Provident Fund (PPF)—is its institutional market-linked multi-asset mandate. Rather than relying entirely on sovereign bond yields, NPS contributions are strategically deployed across institutional equity portfolios, corporate credit debentures, sovereign gilts, and alternative infrastructure investment trusts.
        </p>
        <p className="mb-4">
          Furthermore, the NPS represents the world&apos;s lowest-cost retirement wealth engine. While traditional retail mutual funds charge Total Expense Ratios (TER) ranging between 0.75% and 2.25%, and Unit Linked Insurance Plans (ULIPs) bleed investor returns through premium allocation charges and policy administrative levies, institutional NPS Pension Fund Managers (PFMs) operate under statutory fee caps between <strong>0.03% and 0.09% of Assets Under Management (AUM)</strong>. Over a 30-year career accumulation horizon, this fractional institutional fee structure prevents tens of lakhs of rupees in commission leakage, ensuring that 99.9% of portfolio gross yields compound directly to the credit of the subscriber.
        </p>
        <p className="mb-4">
          Our forensic <strong>NPS Calculator</strong> evaluates the mathematical interplay between monthly career contributions, asset allocation return dynamics, the statutory <strong>60:40 maturity distribution rule</strong>, tax-free lump sum liquidity, and lifelong monthly annuity pension yields.
        </p>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & MATHEMATICAL METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Mathematical Compounding Framework
        </h2>
        <p className="mb-4">
          Forecasting NPS maturity wealth and lifelong pension cash flows requires evaluating three distinct mathematical phases: the Multi-Decade Accumulation Phase, the Statutory Maturity Distribution Phase, and the Lifelong Annuity Disbursement Phase:
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 1: The Accumulation Phase Compound Annuity Formula</h3>
            <p className="text-sm text-gray-600 mb-2">
              Because monthly contributions are made periodically at the beginning of each billing cycle, total wealth accumulation at superannuation age (typically 60 years) is modeled via the future value of an ordinary annuity due:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              FV_NPS = P × [ ((1 + i)^n - 1) / i ] × (1 + i)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where <strong>FV_NPS</strong> is the total accumulated retirement corpus, <strong>P</strong> is the total monthly contribution (comprising employee personal investment plus employer corporate contribution), <strong>i</strong> is the periodic monthly return rate calculated as (Annual Expected Return / 12 / 100), and <strong>n</strong> represents the total compounding periods, calculated as (Retirement Age - Current Age) × 12 months.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 2: The Statutory 60:40 Superannuation Partition Rule</h3>
            <p className="text-sm text-gray-600 mb-2">
              Under PFRDA Exit Regulations, upon reaching age 60, the terminal accumulated corpus is legally divided into two distinct capital pools:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800 space-y-1">
              <p>Lump_Sum_Cash (L) = FV_NPS × (1 - Annuity_Percentage)</p>
              <p>Annuity_Capital_Pool (AP) = FV_NPS × Annuity_Percentage</p>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By law, <strong>Annuity_Percentage</strong> must be at least 40% (0.40) and can range up to 100% (1.00). Under Section 10(12A) of the Income Tax Act, the <strong>Lump_Sum_Cash (L)</strong> is 100% exempt from income tax up to the statutory ceiling of 60%. The <strong>Annuity_Capital_Pool (AP)</strong> is transferred tax-free to an insurance provider to purchase a guaranteed pension stream.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 3: Monthly Annuity Pension Disbursement Formula</h3>
            <p className="text-sm text-gray-600 mb-2">
              The monthly pension stream generated by the annuity service provider depends directly on the prevailing annuity rate:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Monthly_Pension = (AP × Annuity_Yield_Annual) / 12
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Where <strong>AP</strong> is the annuity capital pool and <strong>Annuity_Yield_Annual</strong> is the guaranteed contract interest rate (historically 5.5% to 6.75% in India, depending on whether Return of Purchase Price is selected).
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-xs">
            <h3 className="font-bold text-gray-900 mb-2">Equation 4: Corporate NPS Section 80CCD(2) Tax Savings Multiplier</h3>
            <p className="text-sm text-gray-600 mb-2">
              For salaried employees whose employers contribute up to 10% of their (Basic Salary + Dearness Allowance) directly to Corporate NPS, the immediate tax benefit is calculated as:
            </p>
            <div className="bg-gray-100 p-3 rounded-lg font-mono text-xs md:text-sm text-gray-800">
              Annual_Tax_Saved = min(Employer_NPS_Contribution, 0.10 × (Basic + DA)) × Marginal_Tax_Bracket × (1 + Cess)
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Because this deduction is fully exempt under Section 80CCD(2) across both Old and New Tax Regimes with zero upper rupee cap, an executive in the 30% tax bracket saving ₹15,000 monthly in Corporate NPS saves ₹56,160 annually in immediate income taxes.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Asset Allocation Modes: Active Choice vs. Auto Choice</h3>
        <p className="text-sm text-gray-700 leading-relaxed mb-4">
          NPS empowers subscribers to determine their risk profile through two distinct asset management modes:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm mb-4">
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <h4 className="font-bold text-gray-900 mb-2">1. Active Choice (Self-Directed Allocation)</h4>
            <p className="text-gray-600 mb-2">Subscribers manually calibrate their investment mix across four asset classes:</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li><strong>Asset Class E (Equity):</strong> Up to 75% allocation in top NSE/BSE listed equities until age 50, tapering by 2.5% per year to 50% by age 60.</li>
              <li><strong>Asset Class C (Corporate Debt):</strong> Up to 100% in AAA and AA-rated corporate bonds and infrastructure debentures.</li>
              <li><strong>Asset Class G (Government Securities):</strong> Up to 100% in sovereign Central and State Government bonds.</li>
              <li><strong>Asset Class A (Alternative Assets):</strong> Up to 5% in Real Estate Investment Trusts (REITs), Infrastructure Investment Trusts (InvITs), and alternative investment vehicles.</li>
            </ul>
          </div>
          <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-xs">
            <h4 className="font-bold text-gray-900 mb-2">2. Auto Choice (Life Cycle Glidepath Funds)</h4>
            <p className="text-gray-600 mb-2">The system automatically rebalances your portfolio based on age, reducing market risk as retirement approaches:</p>
            <ul className="list-disc pl-4 space-y-1 text-gray-600">
              <li><strong>Aggressive Life Cycle (LC-75):</strong> Holds 75% equity until age 35, tapering 4% annually down to 15% equity at age 55. Ideal for young professionals with long runways.</li>
              <li><strong>Moderate Life Cycle (LC-50):</strong> Default option. Holds 50% equity until age 35, tapering 2% annually down to 10% equity at age 55. Balances growth with downside protection.</li>
              <li><strong>Conservative Life Cycle (LC-25):</strong> Holds 25% equity until age 35, tapering 1% annually down to 5% equity at age 55. Designed for highly risk-averse savers.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section className="mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Scenarios &amp; Comprehensive Retirement Case Studies
        </h2>
        <p className="mb-6">
          To illustrate how career timing, corporate tax structuring, and annuity percentages determine financial independence, examine these four institutional case studies:
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Corporate Tax Engineering</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Corporate NPS Super-Hack: Vikram&apos;s ₹1.67 Crore Free Tax Corpus
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Vikram, age 32, is a software engineering director earning an annual CTC of ₹30,00,000 under the New Tax Regime. His basic salary is ₹15,00,000 (₹1,25,000 monthly). After auditing his salary structure with our <Link href="/calculator/finance/salary" className="text-blue-700 font-semibold underline hover:text-blue-800">Salary Calculator</Link>, Vikram requests HR to route 10% of his basic salary (₹12,500/month or ₹1,50,000/year) into Corporate NPS under Section 80CCD(2):
          </p>

          <div className="bg-emerald-50/70 p-5 rounded-xl border border-emerald-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-emerald-950">Vikram&apos;s 28-Year Corporate NPS Trajectory (Ages 32 to 60 @ 10.5% CAGR):</h4>
            <p>• <strong>Total Cumulative Out-of-Pocket Invested:</strong> ₹12,500 × 12 months × 28 years = <strong>₹42,00,000</strong></p>
            <p>• <strong>Immediate Annual Income Tax Saved (31.2% slab):</strong> ₹1,50,000 × 31.2% = <strong>₹46,800/year</strong> (Total tax saved over 28 years = ₹13,10,400)</p>
            <p>• <strong>Terminal Accumulated NPS Corpus at Age 60:</strong> <strong>₹2,47,84,000 (~₹2.48 Crores)</strong></p>
            <p>• <strong>60% Tax-Free Lump Sum Withdrawn:</strong> ₹2,47,84,000 × 60% = <strong>₹1,48,70,400 (~₹1.49 Crores tax-free)</strong></p>
            <p>• <strong>40% Annuity Capital Pool:</strong> ₹2,47,84,000 × 40% = <strong>₹99,13,600 (~₹99.1 Lakhs)</strong></p>
            <p>• <strong>Guaranteed Lifelong Monthly Pension (@ 6.5% Annuity Rate):</strong> <strong>₹53,700 every single month</strong></p>
            <p className="font-bold text-emerald-950 pt-2 border-t border-emerald-300">
              The Verdict: By restructuring ₹12,500 of existing basic salary into Corporate NPS, Vikram received an immediate ₹46,800 annual tax refund while accumulating a ₹1.49 Crore tax-free windfall and a ₹53,700 monthly pension for life.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Maturity Optimization</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Annuity Dilemma: 40% Minimum vs. 100% Maximum Annuity on a ₹4 Crore Corpus
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Meera retires at age 60 having accumulated a massive ₹4,00,000 corpus in her NPS Tier-I account. She analyzes whether she should take the maximum allowable 60% tax-free lump sum or lock 100% into an annuity:
          </p>

          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2.5 px-3">Decision Parameter</th>
                  <th className="py-2.5 px-3">Strategy A: 60% Lump Sum / 40% Annuity</th>
                  <th className="py-2.5 px-3">Strategy B: 100% Full Annuity Lock-in</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Immediate Cash Payout</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">₹2,40,00,000 (100% Tax-Free)</td>
                  <td className="py-2.5 px-3 text-red-600">₹0 (Zero Liquid Cash)</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Annuity Capital Pool</td>
                  <td className="py-2.5 px-3">₹1,60,00,000</td>
                  <td className="py-2.5 px-3">₹4,00,00,000</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Gross Monthly Pension (@ 6.5%)</td>
                  <td className="py-2.5 px-3">₹86,667 / month</td>
                  <td className="py-2.5 px-3 text-purple-700 font-bold">₹2,16,667 / month</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-semibold">Monthly Pension Taxability</td>
                  <td className="py-2.5 px-3 text-emerald-700">Taxed at 15% effective slab (~₹73,667 net)</td>
                  <td className="py-2.5 px-3 text-red-600">Taxed at 31.2% top slab (~₹1,49,000 net)</td>
                </tr>
                <tr className="bg-purple-50 font-bold">
                  <td className="py-2.5 px-3 font-sans text-purple-950">Secondary Wealth Deployment</td>
                  <td className="py-2.5 px-3 text-gray-900">₹2.4 Cr reinvested in SWP yielding ₹1.5L/mo tax-efficiently</td>
                  <td className="py-2.5 px-3 text-gray-500">None (Capital locked permanently with insurer)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-2">
            <strong>Strategic Verdict:</strong> Strategy A is vastly superior. By withdrawing the ₹2.40 Crore tax-free lump sum, Meera avoids heavy slab taxes on a ₹2.16 Lakh pension. Reinvesting the lump sum in diversified mutual funds (modeled via our <Link href="/calculator/finance/mutual-fund-returns" className="text-purple-700 font-semibold underline hover:text-purple-800">Mutual Fund Returns Calculator</Link>) generates tax-efficient monthly income via SWP while preserving generational capital for her heirs.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-red-100 text-red-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Premature Exit Penalties</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Punitive Trap of Premature Exit: Rajesh at Age 52
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Rajesh has contributed to NPS for 16 years and accumulated a corpus of ₹80,00,000. At age 52, he experiences job burnout and desires to liquidate his NPS account prematurely to fund a private resort business:
          </p>

          <div className="bg-red-50/70 p-5 rounded-xl border border-red-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-red-950">PFRDA Premature Exit Mandates (Under Age 60):</h4>
            <p>• <strong>Mandatory Annuity Lock-in (80% Rule):</strong> ₹80,00,000 × 80% = <strong>₹64,00,000</strong> must be locked into an annuity immediately.</p>
            <p>• <strong>Maximum Lump Sum Liquidity (20%):</strong> ₹80,00,000 × 20% = <strong>₹16,00,000 only</strong>.</p>
            <p>• <strong>Sub-Optimal Annuity Pricing:</strong> Because Rajesh is only 52 years old, insurance actuaries price his longevity risk aggressively, offering a dismal 5.10% annuity rate. His ₹64 Lakh annuity yields only ₹27,200 per month.</p>
            <p>• <strong>The Alternative (Waiting 8 Years until Age 60):</strong> Leaving the ₹80 Lakhs invested in 50% equity until age 60 at a conservative 10% CAGR expands his corpus to <strong>₹1.71 Crores</strong>, unlocking a ₹1.03 Crore tax-free lump sum and a ₹37,000 monthly pension.</p>
            <p className="font-bold text-red-950 pt-2 border-t border-red-300">
              Takeaway: Exiting NPS before age 60 is heavily penalized. If intermediate liquidity is required, use partial withdrawals (up to 25% of own contributions) or utilize liquid non-retirement savings.
            </p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Longevity Extension</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Age 75 Deferral Arbitrage: Suresh&apos;s ₹2 Crore Doubling Strategy
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Suresh turns 60 with a healthy ₹2,00,00,000 NPS corpus. Because he has other rental income and mutual fund investments covering his immediate living costs, he does not require an immediate pension. Suresh exercises PFRDA&apos;s maturity deferral provision, leaving his corpus invested until age 70:
          </p>

          <div className="bg-blue-50/70 p-5 rounded-xl border border-blue-200 text-sm space-y-2 mb-3">
            <h4 className="font-bold text-blue-950">10-Year Compounding Deferral Audit (Zero Additional Contributions @ 10.0% CAGR):</h4>
            <p>• <strong>Corpus at Age 60:</strong> ₹2,00,00,000 (₹2.00 Crores)</p>
            <p>• <strong>Corpus at Age 70:</strong> ₹2,00,00,000 × (1.10)^10 = <strong>₹5,18,74,849 (~₹5.19 Crores)</strong></p>
            <p>• <strong>60% Tax-Free Lump Sum at Age 70:</strong> ₹5,18,74,849 × 60% = <strong>₹3,11,24,909 (~₹3.11 Crores tax-free)</strong></p>
            <p>• <strong>40% Annuity Capital Pool at Age 70:</strong> <strong>₹2,07,49,940 (~₹2.07 Crores)</strong></p>
            <p>• <strong>Monthly Pension at Age 70 (@ 7.25% Senior Annuity Rate):</strong> <strong>₹1,25,360 per month for life</strong></p>
            <p className="font-bold text-blue-950 pt-2 border-t border-blue-300">
              The Compounding Advantage: By deferring withdrawals by 10 years, Suresh expanded his tax-free lump sum from ₹1.2 Crores to ₹3.11 Crores (+₹1.91 Crores) and boosted his monthly pension from ₹35,000 to ₹1.25 Lakhs per month, taking advantage of higher senior citizen annuity rates.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: ADVANCED STRATEGY, REGULATORY NUANCES & TRAPS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Advanced Strategies, PFRDA Regulatory Nuances &amp; Withdrawal Traps
        </h2>
        <p className="mb-6">
          Maximizing returns in the National Pension System requires navigating complex regulatory provisions, taxation shifts, and annuity contract structures:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. The Systematic Lump-Sum Withdrawal (SLW) Innovation</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Historically, upon reaching age 60, subscribers were forced to withdraw their entire 60% lump sum at once. This created an immediate cash management problem: dumping ₹2 Crores into savings accounts or fixed deposits triggered reinvestment risk and heavy slab taxation on interest.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              In response, PFRDA introduced the <strong>Systematic Lump-Sum Withdrawal (SLW)</strong> mechanism. Retirees can now schedule monthly, quarterly, or annual phased redemptions of their 60% tax-free lump sum between ages 60 and 75. The unredeemed portions remain invested in equity and corporate debt funds, continuing to generate compound growth inside the tax-sheltered PRAN architecture.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. Annuity Selection: Return of Purchase Price (ROP) vs. Life Annuity</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              When purchasing the mandatory 40% annuity, insurance providers offer several structural variants. The two most common are:
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5 mb-3">
              <li><strong>Life Annuity without Return of Purchase Price (ROP):</strong> The insurer pays the highest monthly pension for as long as the subscriber lives. Upon the subscriber&apos;s death, the pension ceases and the original capital pool is retained by the insurance company. Yields typically range between 7.5% and 8.5%.</li>
              <li><strong>Joint Life Annuity with 100% Return of Purchase Price (ROP):</strong> The insurer pays a monthly pension to the subscriber. Upon death, the pension continues to the surviving spouse. Upon the death of both, 100% of the original purchase price is refunded tax-free to the registered nominees. Because capital is preserved for heirs, the annual yield is lower (typically 5.75% to 6.50%).</li>
            </ul>
            <p className="text-sm text-gray-600 leading-relaxed">
              Subscribers who prioritize legacy transfer for their children should select Joint Life with ROP, whereas retirees without dependents should maximize their monthly cash flow with a pure Life Annuity.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. Section 80CCD(1B): The Exclusive ₹50,000 Tax Arbitrage</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Under the Old Tax Regime, Section 80C is notoriously crowded, shared among EPF, PPF, children&apos;s school tuition fees, home loan principal repayments, and ELSS funds (calculated via our <Link href="/calculator/finance/elss" className="text-blue-700 font-semibold underline hover:text-blue-800">ELSS Calculator</Link>).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Section 80CCD(1B) provides an exclusive ₹50,000 deduction that sits entirely outside and above the ₹1,50,000 Section 80C ceiling. For salaried professionals in the 30% tax bracket, investing ₹50,000 annually into NPS Tier-I generates an immediate, guaranteed tax saving of ₹15,600 (31.2% with cess), providing an instant 31.2% return on day one before market compounding even begins.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Zero-Friction PFM &amp; Asset Allocation Switching</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              In the private mutual fund sector, rebalancing an equity portfolio by selling shares and purchasing debt instruments triggers an immediate capital gains tax liability (12.5% LTCG or 20% STCG).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Under NPS, PFRDA permits subscribers to switch their Pension Fund Manager (PFM) once per financial year and modify their asset allocation (e.g., shifting from 75% Equity to 100% Government Bonds) twice per financial year with <strong>zero capital gains tax liability and zero exit loads</strong>. This makes NPS the most tax-frictionless active portfolio rebalancing instrument in India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Partial Withdrawal Guidelines and Conditions</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Many investors avoid NPS believing their capital is permanently locked until age 60. While the lock-in is designed to prevent behavioral panic selling, PFRDA allows emergency partial withdrawals under strict guidelines:
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-5">
              <li>Subscribers must have completed at least 3 years of continuous contributions.</li>
              <li>Withdrawals are capped at <strong>25% of own personal contributions</strong> (employer contributions and accumulated returns cannot be touched).</li>
              <li>Allowed strictly for: Higher education of children, marriage of children, purchase or construction of first residential house, and treatment for 14 critical illnesses (e.g., cancer, kidney failure, major organ transplant).</li>
              <li>Permitted a maximum of 3 times across the entire lifespan of the PRAN account, completely tax-free under Section 10(12B).</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">6. The Unified Pension Scheme (UPS) vs. NPS: Navigating the Policy Reform</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              In 2024, the Union Government approved the Unified Pension Scheme (UPS) as an optional framework for Central Government employees, guaranteeing an assured pension equal to 50% of the average basic pay drawn in the last 12 months prior to retirement (subject to 25 years minimum qualifying service).
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              However, for all non-government citizens, private corporate employees, and self-employed professionals, the market-linked NPS remains the sole sovereign pension architecture. Unlike defined-benefit frameworks with rigid pension caps, NPS offers uncapped upside: an aggressive 75% equity allocation compounding at 11% to 13% CAGR across a 30-year runway can deliver a total terminal corpus and monthly pension stream substantially larger than static government pension formulas.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: COMPARISONS & RETIREMENT VEHICLE MATRIX */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Retirement Comparison Matrix: NPS vs. EPF vs. PPF vs. Mutual Funds
        </h2>
        <p className="mb-4">
          To understand how NPS fits into a comprehensive retirement strategy, compare the key structural features of India&apos;s leading wealth-building instruments:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white shadow-xs rounded-xl overflow-hidden border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                <th className="py-3 px-3">Vehicle</th>
                <th className="py-3 px-3">Governing Body</th>
                <th className="py-3 px-3">Historical CAGR</th>
                <th className="py-3 px-3">Annual Contribution Limits</th>
                <th className="py-3 px-3">Fund Management Fee</th>
                <th className="py-3 px-3">Maturity Tax Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs font-mono">
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">National Pension System (NPS)</td>
                <td className="py-3 px-3 font-sans">PFRDA</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">10.0% – 12.5%</td>
                <td className="py-3 px-3 font-sans text-emerald-700">No Upper Cap (Min ₹1,000/yr)</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">0.03% – 0.09%</td>
                <td className="py-3 px-3 font-sans text-blue-700">60% Lump Tax-Free / 40% Annuity Taxed</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Employees&apos; Provident Fund (EPF)</td>
                <td className="py-3 px-3 font-sans">EPFO</td>
                <td className="py-3 px-3 text-blue-700 font-bold">8.25% Sovereign</td>
                <td className="py-3 px-3 font-sans">12% Basic (Taxed above ₹2.5L employee)</td>
                <td className="py-3 px-3 text-emerald-700">Government Managed</td>
                <td className="py-3 px-3 font-sans text-emerald-700 font-bold">100% Tax-Free (After 5 Yrs)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Public Provident Fund (PPF)</td>
                <td className="py-3 px-3 font-sans">Ministry of Finance</td>
                <td className="py-3 px-3 text-blue-700 font-bold">7.10% Sovereign</td>
                <td className="py-3 px-3 font-sans text-amber-700">Capped at ₹1,50,000 / yr</td>
                <td className="py-3 px-3 text-emerald-700">Zero Explicit Fee</td>
                <td className="py-3 px-3 font-sans text-emerald-700 font-bold">100% Tax-Free (EEE)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Equity Mutual Funds (SIP)</td>
                <td className="py-3 px-3 font-sans">SEBI</td>
                <td className="py-3 px-3 text-emerald-700 font-bold">12.0% – 14.5%</td>
                <td className="py-3 px-3 font-sans text-emerald-700">No Upper Limit</td>
                <td className="py-3 px-3 text-red-600 font-bold">0.50% – 1.75%</td>
                <td className="py-3 px-3 font-sans text-amber-700">12.5% LTCG (&gt;₹1.25L Exemption)</td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-sans font-semibold text-gray-900">Senior Citizens Savings Scheme (SCSS)</td>
                <td className="py-3 px-3 font-sans">Ministry of Finance</td>
                <td className="py-3 px-3 text-blue-700 font-bold">8.20% Sovereign</td>
                <td className="py-3 px-3 font-sans text-amber-700">Capped at ₹30,00,000</td>
                <td className="py-3 px-3 text-emerald-700">Zero Explicit Fee</td>
                <td className="py-3 px-3 font-sans text-red-600 font-bold">Interest Taxed at Slab Rate</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">Structuring the Ideal Indian Retirement Portfolio</h3>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          Financial planners recommend a synergistic three-tier retirement architecture:
        </p>
        <ol className="list-decimal pl-6 space-y-2 text-sm text-gray-700">
          <li><strong>Pillar 1 (Sovereign Guaranteed Base):</strong> Mandatory EPF and PPF contributions provide a safe, risk-free bedrock guaranteeing zero capital loss; project your career provident fund balances with our <Link href="/calculator/finance/pf" className="text-blue-700 font-semibold underline hover:text-blue-800">PF Calculator</Link>.</li>
          <li><strong>Pillar 2 (Cost-Effective Market Pension):</strong> NPS Tier-I captures 10% to 12% equity growth at a negligible 0.05% fee while generating lifelong pension income via mandatory annuities.</li>
          <li><strong>Pillar 3 (Liquid Discretionary Wealth):</strong> Direct equity mutual funds (SIPs) provide high-liquidity multi-crore wealth accessible before age 60 without lock-ins or mandatory annuity conversions.</li>
        </ol>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Is it mandatory to buy an annuity with my NPS corpus at age 60?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Under statutory PFRDA regulations, when an NPS subscriber reaches normal superannuation age (60 years), a minimum of 40% of the total accumulated corpus must be utilized to purchase an immediate annuity from a PFRDA-empanelled Life Insurance Company. The annuity pool guarantees a lifelong monthly pension. If the total corpus at age 60 is less than or equal to ₹5 Lakhs, the subscriber is legally permitted to withdraw 100% of the accumulated funds as a lump sum without purchasing an annuity.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Is the 60% lump sum withdrawal from NPS completely tax-free?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Under Section 10(12A) of the Income Tax Act, 1961, up to 60% of the total accumulated corpus withdrawn as a lump sum upon normal retirement (age 60) is 100% exempt from income tax. Whether the lump sum amount is ₹25 Lakhs or ₹5 Crores, zero capital gains tax or income tax is levied.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Is the monthly annuity pension received from NPS taxable?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. While the capital amount transferred to purchase the annuity (minimum 40%) is exempt from tax at the point of maturity, the monthly annuity payouts received by the retiree are treated as regular income under &apos;Income from Other Sources&apos; or &apos;Salaries&apos; and are taxed according to the retiree&apos;s prevailing marginal income tax slab.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are the rules and penalties for premature exit from NPS before age 60?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Subscribers can exit voluntarily before age 60 after completing 5 years of continuous membership (for individual or corporate subscribers). However, premature exit triggers punitive withdrawal restrictions: you are legally mandated to utilize at least 80% of your accumulated corpus to purchase an annuity, and only 20% can be withdrawn as a lump sum. If the total accumulated corpus is ₹2.5 Lakhs or less at premature exit, 100% lump sum withdrawal is allowed.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What tax deductions can I claim under Section 80CCD(1), 80CCD(1B), and 80CCD(2)?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under the Old Tax Regime, you can claim: 1) Section 80CCD(1) employee contributions up to 10% of salary (or 20% of gross income for self-employed) capped at ₹1.5 Lakhs within the Section 80C limit; 2) Section 80CCD(1B) exclusive additional deduction of up to ₹50,000 solely for NPS Tier-I; 3) Section 80CCD(2) employer contributions up to 10% of Basic Salary + DA (14% for Central/State Govt employees). Crucially, Section 80CCD(2) is available under BOTH Old and New Tax Regimes with no upper rupee cap.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Can I continue contributing to NPS after reaching 60 years of age?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. PFRDA allows subscribers to defer lump sum withdrawal and annuity purchase, or continue contributing actively to their NPS Tier-I account up to the age of 75 years. Deferring maturity allows your investments to compound uninterrupted in low-cost institutional funds, providing substantial portfolio expansion before purchasing an annuity.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is Systematic Lump-Sum Withdrawal (SLW) in NPS?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Systematic Lump-Sum Withdrawal (SLW) is a flexible exit facility introduced by the PFRDA allowing retirees to withdraw their 60% tax-free lump sum in periodic installments (monthly, quarterly, half-yearly, or annually) between ages 60 and 75, rather than taking the full 60% as a single payout. The remaining unwithdrawn capital stays invested in equity and debt funds, continuing to generate compound returns.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between Active Choice and Auto Choice in NPS?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under Active Choice, the subscriber manually decides their asset allocation across Equities (E, up to 75%), Corporate Bonds (C), Government Securities (G), and Alternative Assets (A, up to 5%). Under Auto Choice (Lifecycle Funds), the system automatically rebalances your portfolio based on age: Aggressive (LC-75), Moderate (LC-50), or Conservative (LC-25), gradually reducing equity exposure and increasing safe debt allocations as you approach age 60.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are the partial withdrawal conditions under NPS Tier-I?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Subscribers who have completed at least 3 years in NPS can make partial withdrawals up to 25% of their own personal contributions (excluding employer contributions and accumulated interest). Eligible reasons include: children&apos;s higher education, children&apos;s marriage, purchase or construction of a first residential house, and medical treatment for 14 specified critical illnesses. Partial withdrawals are completely tax-free and permitted up to a maximum of 3 times across the entire tenure.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How does Tier-I compare with Tier-II in terms of liquidity and tax benefits?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              NPS Tier-I is the mandatory retirement account with strict lock-in until age 60, offering comprehensive tax deductions under Sections 80CCD(1), 80CCD(1B), and 80CCD(2). Tier-II is a voluntary, liquid savings account requiring an active Tier-I PRAN. In Tier-II, you can deposit and withdraw capital freely with zero lock-in, but contributions carry zero tax deductions (except for Central Government employees with a 3-year lock-in), and capital gains are taxed similarly to mutual funds.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What happens to the NPS corpus in the unfortunate event of the subscriber&apos;s demise before age 60?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In the event of the subscriber&apos;s death before maturity, 100% of the accumulated NPS corpus is paid out directly to the registered nominee or legal heir as a tax-free lump sum. Nominees also have the voluntary option to utilize a portion or the entirety of the corpus to purchase an annuity for regular pension income if they choose.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Which Pension Fund Manager (PFM) provides the best returns, and can I switch managers?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              PFRDA has licensed multiple institutional Pension Fund Managers including SBI Pension Funds, LIC Pension Fund, UTI Retirement Solutions, HDFC Pension Management, ICICI Prudential Pension Fund, Kotak Mahindra Pension Fund, and Aditya Birla Sun Life Pension. Subscribers are legally permitted to switch their Pension Fund Manager once per financial year and modify their asset allocation up to twice per financial year with zero exit load, zero penalties, and zero tax incidence.
            </div>
          </details>
        </div>
      </section>

      {/* SECTION 7: INTERNALLY LINKED FINANCIAL HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Sovereign Debt Baseline</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Track your mandatory monthly PF contributions, compounding balances, and sovereign 8.25% interest yields using our <Link href="/calculator/finance/epf-interest" className="text-emerald-700 font-bold underline hover:text-emerald-800">EPF Interest Calculator</Link>.
          </p>
        </div>

        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Market Wealth Compounding</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Model unconstrained equity SIPs and annual step-up compounding trajectories alongside your NPS pension using our <Link href="/calculator/finance/mutual-fund-returns" className="text-blue-700 font-bold underline hover:text-blue-800">Mutual Fund Returns Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Salary &amp; Net Inflow</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Determine how much surplus cash you can comfortably commit to voluntary NPS Tier-I contributions after tax and deductions using our <Link href="/calculator/finance/take-home-salary" className="text-purple-700 font-bold underline hover:text-purple-800">Take-Home Salary Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}
