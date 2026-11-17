import React from 'react';
import Link from 'next/link';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the mandatory lock-in period for ELSS mutual funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ELSS mutual funds carry a statutory lock-in period of exactly three years (36 months) from the date of unit allotment. This is the shortest lock-in period among all Section 80C tax-saving financial instruments in India, compared to 5 years for Tax-Saving Fixed Deposits and Unit Linked Insurance Plans (ULIPs), and 15 years for the Public Provident Fund (PPF)."
        }
      },
      {
        "@type": "Question",
        "name": "How does the three-year lock-in work for monthly SIP investments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "When investing in ELSS via a Systematic Investment Plan (SIP), each monthly installment operates under its own independent three-year lock-in clock. For example, an installment paid in April 2024 becomes redeemable in April 2027, while the installment paid in May 2024 unlocks in May 2027. You cannot withdraw your entire SIP portfolio on the third anniversary of starting the SIP."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw my ELSS funds before completing three years in an emergency?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Under Securities and Exchange Board of India (SEBI) regulations and the Income Tax Act, premature redemption of ELSS units prior to the mandatory 36-month holding period is strictly prohibited. Neither mutual fund asset management companies (AMCs) nor fund distributors have the legal authority to override this statutory lock-in, even in medical or financial emergencies."
        }
      },
      {
        "@type": "Question",
        "name": "How are long-term capital gains (LTCG) from ELSS taxed upon redemption?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because ELSS funds require a minimum three-year holding period, all realized profits upon redemption are classified as Long-Term Capital Gains (LTCG) under Section 112A. Aggregate equity LTCG up to ₹1.25 Lakhs per financial year is entirely tax-free. Any capital gains exceeding this ₹1.25 Lakh threshold in a single fiscal year are taxed at a flat rate of 12.5% without indexation benefits."
        }
      },
      {
        "@type": "Question",
        "name": "Is there a ceiling on how much money I can invest in an ELSS fund?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no statutory maximum limit on the amount of capital you can allocate into an ELSS fund. You may invest ₹5 Lakhs, ₹10 Lakhs, or more. However, the income tax deduction permissible under Section 80C of the Income Tax Act is capped at a strict ceiling of ₹1.5 Lakhs per financial year. Any investment exceeding ₹1.5 Lakhs continues to compound as a regular equity mutual fund without additional tax rebate."
        }
      },
      {
        "@type": "Question",
        "name": "Should I invest in ELSS via Monthly SIP or a Lumpsum deposit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Financial advisors overwhelmingly recommend the monthly SIP route. SIPs enforce financial discipline, mitigate market timing risk, and leverage Rupee Cost Averaging across volatile market cycles. Lumpsum investments are primarily suitable for taxpayers who have surplus liquidity or who need to fulfill their annual Section 80C tax deduction mandate in the final quarter of the financial year."
        }
      },
      {
        "@type": "Question",
        "name": "Are ELSS tax benefits available under the New Tax Regime (Section 115BAC)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Section 80C tax deductions, including ELSS investments, are exclusively accessible under the Old Tax Regime. The default New Tax Regime (Section 115BAC) disallows Section 80C deductions in exchange for lower baseline tax slab rates. However, ELSS remains an exceptional wealth-creation equity fund regardless of tax regime choice due to its forced 3-year compounding horizon."
        }
      },
      {
        "@type": "Question",
        "name": "Should I select the Growth option or the IDCW (Dividend) option in ELSS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You should almost always select the Growth option. Under current tax laws, dividends distributed under the Income Distribution cum Capital Withdrawal (IDCW) option are taxed at your marginal income tax slab rate (up to 35.88% with cess/surcharge), and dividend payouts disrupt long-term compounding. The Growth option retains all profits inside the NAV, maximizing exponential wealth creation."
        }
      },
      {
        "@type": "Question",
        "name": "What is tax harvesting, and how does it optimize ELSS returns?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Tax harvesting is an advanced portfolio management strategy where an investor redeems unlocked ELSS units after the 3-year lock-in period up to the annual tax-free LTCG threshold of ₹1.25 Lakhs, and immediately reinvests the proceeds back into equity funds. This resets the cost of acquisition to current market prices, legally eliminating future LTCG tax liability on that profit portion."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the equity market is down when my 3-year ELSS lock-in expires?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The completion of the three-year lock-in period unlocks your units for redemption, but it does not mandate immediate liquidation. If broader equity markets are experiencing a cyclical downturn or bear correction at the 36-month mark, you should simply leave your units invested. ELSS operates like any high-quality diversified flexi-cap equity fund, and historical data demonstrates that extending your holding horizon to 5 to 7 years substantially increases annualized returns."
        }
      }
    ]
  };

  return (
    <div className="space-y-12 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* SECTION 1: EXECUTIVE OVERVIEW & FOUNDATIONAL CONCEPTS */}
      <section>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-6">
          ELSS Calculator: Calculate Equity Linked Savings Scheme Returns, Tax Deductions &amp; Wealth Growth
        </h1>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
          For generations of Indian taxpayers, the annual ritual of Section 80C tax planning was synonymous with conservative, fixed-income capital preservation instruments. Salaried employees routinely locked substantial savings into Public Provident Fund (PPF) accounts, National Savings Certificates (NSC), or 5-year bank tax-saving fixed deposits. While these traditional vehicles provide sovereign safety and capital protection, their modest yields—consistently hovering between 6.5% and 7.5%—barely keep pace with real-world consumer inflation and lifestyle costs. 
        </p>
        <p className="mb-5">
          The <strong>Equity Linked Savings Scheme (ELSS)</strong> fundamentally transformed retail tax planning in India by introducing the compounding power of the public equity markets to statutory tax deductions. Under Securities and Exchange Board of India (SEBI) mutual fund categorization rules, an ELSS fund is an open-ended, equity-oriented mutual fund mandated to invest a minimum of 80% of its total assets in equity shares and equity-related securities of publicly traded domestic companies. It represents the solitary mutual fund category in India that qualifies for an income tax deduction of up to ₹1,50,000 per financial year under Section 80C of the Income Tax Act, 1961.
        </p>
        <p className="mb-5">
          What makes ELSS truly exceptional among tax-saving avenues is its unique structural duality: it delivers immediate fiscal relief by lowering your taxable income today, while systematically deploying your capital into wealth-compounding corporate enterprises that historically yield 12% to 15% annualized compound returns over multi-year cycles. Furthermore, with a statutory lock-in period of just <strong>3 years (36 months)</strong>, ELSS offers the highest degree of structural liquidity among all eligible Section 80C investment options—drastically outperforming the 5-year lock-in of tax-saving fixed deposits and ULIPs, and the rigid 15-year commitment required by the PPF.
        </p>
        <p className="mb-5">
          Our forensic <strong>ELSS Calculator</strong> is engineered to eliminate guesswork from your investment and tax planning workflows. By inputting your investment mode (Monthly Systematic Investment Plan vs. One-Time Lumpsum), investment amount, projected annual rate of return, holding horizon, and marginal income tax bracket, this tool calculates both your future accumulated wealth and your immediate rupee tax savings. Whether you are establishing a disciplined decade-long wealth portfolio or executing a strategic capital allocation before the fiscal year concludes, this calculator provides transparent, mathematically rigorous projections.
        </p>

        {/* Informational Callout Card */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-600 p-6 rounded-r-2xl my-8">
          <h3 className="text-lg font-bold text-emerald-950 mb-2">The Dual Financial Engine of ELSS Investments</h3>
          <p className="text-emerald-900 text-sm leading-relaxed">
            Investing in an ELSS fund creates two simultaneous financial engines: an immediate risk-free return generated by upfront tax savings (up to ₹46,800 for taxpayers in the 30% slab including cess), combined with market-driven equity compounding on the full un-diminished principal. To model how your post-tax disposable surplus feeds into long-term investment goals, consult our <a href="/calculator/finance/take-home-salary" className="text-emerald-800 font-semibold underline hover:text-emerald-950">Take-Home Salary Calculator</a> and audit your payroll structure using our <a href="/calculator/finance/salary" className="text-emerald-800 font-semibold underline hover:text-emerald-950">Salary Calculator</a>.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
          Navigating the Dual Tax Regime: Does ELSS Still Make Sense Under Section 115BAC?
        </h2>
        <p className="mb-4">
          A critical question confronting Indian taxpayers since the enactment of the Finance Act 2020 and its subsequent revisions is whether ELSS remains viable following the introduction of the New Concessional Tax Regime (Section 115BAC). Because the New Tax Regime disallows conventional Chapter VI-A deductions—including the ₹1.5 Lakh Section 80C threshold—many individuals mistakenly assume that ELSS has lost its utility.
        </p>
        <p className="mb-4">
          In reality, the evaluation requires distinguishing between tax deduction incentives and intrinsic investment vehicle merit:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">For Taxpayers Choosing the Old Tax Regime</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              If your cumulative deductions (HRA, home loan interest under Section 24b, health insurance under Section 80D, and Section 80C investments) exceed the breakeven threshold (typically ₹3.75 Lakhs to ₹4.25 Lakhs depending on gross income), opting for the Old Tax Regime remains mathematically advantageous.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              In this scenario, ELSS is unambiguously the most capital-efficient Section 80C vehicle available, combining the shortest 3-year lock-in with equity market growth potential that far surpasses debt-based alternatives.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-lg font-bold text-gray-900 mb-2">For Taxpayers Choosing the New Tax Regime</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Under Section 115BAC, you cannot deduct ELSS contributions from your gross taxable income. However, financial planners increasingly recommend ELSS funds to New Regime taxpayers purely as a superior multi-cap equity wealth building mechanism.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              The mandatory 36-month lock-in prevents behavioral investing errors, such as panic selling during market corrections or premature withdrawals for discretionary expenses, instilling the necessary holding discipline required to capture full equity market expansion.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 2: STEP-BY-STEP PRACTICAL GUIDE & MATHEMATICAL METHODOLOGY */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Step-by-Step Practical Guide &amp; Mathematical Computational Framework
        </h2>
        <p className="mb-6">
          To build financial confidence, an investor must understand the underlying mathematical algorithms that govern equity compounding, tax optimization thresholds, and post-lock-in capital gains taxation. Our ELSS Calculator implements the exact quantitative models detailed below:
        </p>

        <h3 className="text-xl font-bold text-gray-900 mb-3">1. Compounding Mechanics: Lumpsum vs. Monthly SIP Formulations</h3>
        <p className="mb-4">
          Depending on your chosen cash-flow deployment strategy, wealth accumulation in an equity mutual fund is modeled through two distinct compound interest formulations:
        </p>

        <div className="space-y-6 my-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-md font-bold text-indigo-700 mb-2 uppercase tracking-wide">Method A: One-Time Lumpsum Compounding</h4>
            <div className="text-lg font-mono font-bold text-gray-900 my-2">
              A = P × (1 + r)^t
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Where: <strong>A</strong> = Maturity Corpus, <strong>P</strong> = Principal Lumpsum Invested, <strong>r</strong> = Expected Annualized Compounded Growth Rate (CAGR as a decimal, e.g., 0.12 for 12%), and <strong>t</strong> = Investment Duration in Years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h4 className="text-md font-bold text-indigo-700 mb-2 uppercase tracking-wide">Method B: Systematic Investment Plan (SIP) Annuity Formula</h4>
            <div className="text-lg font-mono font-bold text-gray-900 my-2">
              FV = P × [((1 + i)^n - 1) / i] × (1 + i)
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              Where: <strong>FV</strong> = Future Value of SIP Investment, <strong>P</strong> = Monthly Installment Amount, <strong>i</strong> = Periodic Monthly Interest Rate (Annual Rate / 12 / 100), and <strong>n</strong> = Total Number of Monthly Installments (Years × 12). The multiplier <em>(1 + i)</em> accounts for investments made at the inception of each monthly billing cycle (annuity due). For broader equity portfolios beyond Section 80C caps, model your long-term wealth compounding using our dedicated <Link href="/calculator/finance/mutual-fund-returns" className="text-indigo-700 font-semibold underline hover:text-indigo-800">Mutual Fund Returns Calculator</Link>.
            </p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3">2. The Statutory Section 80C Tax Savings Algorithm</h3>
        <p className="mb-4">
          Under Chapter VI-A of the Income Tax Act, qualifying investments reduce your gross taxable income rupee-for-rupee up to the statutory ceiling of ₹1,50,000. Your actual net out-of-pocket tax savings is a direct function of your highest applicable marginal income tax bracket, augmented by the mandatory 4% Health and Education Cess:
        </p>
        <div className="bg-white p-5 rounded-xl border border-gray-200 font-mono text-sm space-y-2 mb-6">
          <p><strong>Eligible Deduction (D):</strong> min(Annual ELSS Investment, ₹1,50,000)</p>
          <p><strong>Effective Tax Rate (T_eff):</strong> Marginal Slab Rate × (1 + 0.04 Cess) [Plus Surcharge if income &gt; ₹50 Lakhs]</p>
          <p><strong>Net Annual Tax Saved:</strong> Eligible Deduction (D) × T_eff</p>
        </div>

        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-lg border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold">
                <th className="py-2.5 px-4">Taxable Income Slab</th>
                <th className="py-2.5 px-4">Nominal Tax Rate</th>
                <th className="py-2.5 px-4">Effective Rate (incl. 4% Cess)</th>
                <th className="py-2.5 px-4 text-emerald-700">Tax Saved on ₹1.5L ELSS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700 font-mono text-xs">
              <tr>
                <td className="py-2.5 px-4 font-sans">₹2.5 Lakh – ₹5.0 Lakh</td>
                <td className="py-2.5 px-4">5.0%</td>
                <td className="py-2.5 px-4">5.20%</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">₹7,800</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans">₹5.0 Lakh – ₹10.0 Lakh</td>
                <td className="py-2.5 px-4">20.0%</td>
                <td className="py-2.5 px-4">20.80%</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">₹31,200</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans">Above ₹10.0 Lakh</td>
                <td className="py-2.5 px-4">30.0%</td>
                <td className="py-2.5 px-4">31.20%</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">₹46,800</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans">Above ₹50.0 Lakh (10% Surcharge)</td>
                <td className="py-2.5 px-4">30.0% + 10% Surcharge</td>
                <td className="py-2.5 px-4">34.32%</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">₹51,480</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-sans">Above ₹1.0 Crore (15% Surcharge)</td>
                <td className="py-2.5 px-4">30.0% + 15% Surcharge</td>
                <td className="py-2.5 px-4">35.88%</td>
                <td className="py-2.5 px-4 font-bold text-emerald-600">₹53,820</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Understanding the "Rolling Lock-In" Architecture for SIPs</h3>
        <p className="mb-4">
          One of the most frequent points of confusion among retail investors is assuming that completing 36 calendar months of an ongoing monthly SIP liberates the entire accumulated portfolio for redemption. This assumption is mathematically and legally incorrect.
        </p>
        <p className="mb-4">
          Under SEBI mutual fund guidelines, <strong>every individual installment operates under its own distinct 3-year statutory lock-in clock</strong>. If you initiate a 36-month SIP commencing on April 1, 2024:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-sm text-gray-700 mb-4">
          <li><strong>Installment 1 (April 2024):</strong> Unlocks for redemption on April 1, 2027 (Month 36).</li>
          <li><strong>Installment 12 (March 2025):</strong> Unlocks on March 1, 2028 (Month 48).</li>
          <li><strong>Installment 24 (March 2026):</strong> Unlocks on March 1, 2029 (Month 60).</li>
          <li><strong>Installment 36 (March 2027):</strong> Unlocks on March 1, 2030 (Month 72).</li>
        </ul>
        <p className="text-sm text-gray-600">
          Consequently, a three-year monthly SIP program requires a total of 72 months (6 full years) from the initial debit date for all purchased units to achieve complete liquidity. Investors seeking full portfolio liquidity at the exact 36-month mark must execute a single upfront Lumpsum investment rather than a staggered SIP.
        </p>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Post-Budget 2024 Capital Gains Taxation (Section 112A)</h3>
        <p className="mb-4">
          Because ELSS mutual funds require a statutory minimum holding period of three years, all redemptions automatically qualify as Long-Term Capital Gains (LTCG). Under the revised taxation framework enacted in Union Budget 2024:
        </p>
        <div className="bg-white p-5 rounded-xl border border-gray-200 text-sm space-y-2">
          <p>• <strong>Statutory Exemption Limit:</strong> Aggregate equity LTCG across all mutual funds and listed shares up to <strong>₹1,25,000 per financial year</strong> is completely exempt from income tax (increased from the prior ₹1,00,000 threshold).</p>
          <p>• <strong>Tax Rate on Excess Profits:</strong> All net long-term capital gains exceeding ₹1,25,000 within a single financial year are taxed at a flat rate of <strong>12.5%</strong> (plus 4% cess, resulting in an effective tax rate of 13.0%).</p>
          <p>• <strong>Indexation Status:</strong> In line with broader equity taxation, no cost inflation indexation benefits are permitted on equity mutual fund units.</p>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Net Tax-Adjusted XIRR: The True Internal Rate of Return</h3>
        <p className="mb-4">
          When financial analysts evaluate mutual fund performance, they typically rely on nominal CAGR. However, this metric understates the true economic performance of an ELSS fund because it ignores the immediate cash rebate generated by Section 80C tax relief.
        </p>
        <p className="mb-4">
          To illustrate, consider an investor in the 30% tax bracket who deploys ₹1,50,000 into an ELSS scheme on Day 1. Within 3 to 6 months (upon filing their ITR and receiving their income tax refund), the government credits back ₹46,800 into their bank account. The investor's net committed capital is effectively only ₹1,03,200.
        </p>
        <p className="text-sm text-gray-600">
          If that ₹1,50,000 portfolio expands to ₹2,25,000 at the conclusion of the 3-year lock-in period (a nominal equity return of 14.47% CAGR), the investor's true <em>Tax-Adjusted Extended Internal Rate of Return (XIRR)</em>—measuring actual cash outflows and inflows—exceeds <strong>28.9% annualized</strong>! No sovereign bond, corporate fixed deposit, or traditional pension annuity can mathematically match this tax-boosted capital velocity.
        </p>
      </section>

      {/* SECTION 3: REAL-WORLD WORKED SCENARIOS & CASE STUDIES */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Real-World Worked Case Studies: Strategic Wealth and Tax Scenarios
        </h2>
        <p className="mb-6">
          To illustrate the mathematical advantages and strategic decision-making involved in ELSS investing, let us examine four comprehensive real-world scenarios representing different investor profiles and financial milestones.
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #1</span>
            <span className="text-sm font-semibold text-gray-500">Early Career Compounding</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The 15-Year Wealth Trajectory: A Disciplined ₹12,500/Month ELSS SIP
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Arjun, a 26-year-old software architect in Bengaluru earning ₹18 Lakhs per annum, falls into the 30% tax bracket under the Old Tax Regime. To maximize his Section 80C allowance of ₹1,50,000, he establishes a monthly SIP of ₹12,500 in a diversified ELSS fund and commits to maintaining it for 15 years. We assume a conservative long-term equity CAGR of 13.0%.
          </p>

          <div className="overflow-x-auto my-4">
            <table className="w-full text-left text-xs md:text-sm border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b border-gray-200 font-bold">
                  <th className="py-2.5 px-3">Milestone</th>
                  <th className="py-2.5 px-3">Cumulative Invested</th>
                  <th className="py-2.5 px-3">Cumulative Tax Saved</th>
                  <th className="py-2.5 px-3">Effective Net Cost</th>
                  <th className="py-2.5 px-3">Projected Corpus (13%)</th>
                  <th className="py-2.5 px-3 font-semibold text-emerald-700">Net Wealth Creation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-mono text-xs">
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium">End of Year 3</td>
                  <td className="py-2.5 px-3">₹4,50,000</td>
                  <td className="py-2.5 px-3 text-emerald-600">₹1,40,400</td>
                  <td className="py-2.5 px-3">₹3,09,600</td>
                  <td className="py-2.5 px-3 font-bold text-gray-900">₹5,52,780</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">+₹2,43,180</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium">End of Year 5</td>
                  <td className="py-2.5 px-3">₹7,50,000</td>
                  <td className="py-2.5 px-3 text-emerald-600">₹2,34,000</td>
                  <td className="py-2.5 px-3">₹5,16,000</td>
                  <td className="py-2.5 px-3 font-bold text-gray-900">₹10,54,350</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">+₹5,38,350</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium">End of Year 10</td>
                  <td className="py-2.5 px-3">₹15,00,000</td>
                  <td className="py-2.5 px-3 text-emerald-600">₹4,68,000</td>
                  <td className="py-2.5 px-3">₹10,32,000</td>
                  <td className="py-2.5 px-3 font-bold text-gray-900">₹30,81,140</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">+₹20,49,140</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-3 font-sans font-medium">End of Year 15</td>
                  <td className="py-2.5 px-3">₹22,50,000</td>
                  <td className="py-2.5 px-3 text-emerald-600">₹7,02,000</td>
                  <td className="py-2.5 px-3">₹15,48,000</td>
                  <td className="py-2.5 px-3 font-bold text-emerald-800">₹68,43,920</td>
                  <td className="py-2.5 px-3 text-emerald-700 font-bold">+₹52,95,920</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-emerald-50/70 p-4 rounded-xl border border-emerald-200 text-sm space-y-1 mt-4">
            <p><strong>Total Gross Capital Invested:</strong> ₹22,50,000</p>
            <p><strong>Cumulative Section 80C Tax Savings Recovered:</strong> ₹7,02,000 (31.2% effective tax rebate)</p>
            <p><strong>Net Out-of-Pocket Capital Committed:</strong> ₹15,48,000</p>
            <p><strong>Final Pre-Tax Equity Portfolio Value:</strong> ₹68,43,920</p>
            <p className="font-bold text-emerald-950 pt-2 border-t border-emerald-300">
              Net Wealth Multiplier: Arjun turned ₹15.48 Lakhs of real personal cash into ₹68.44 Lakhs of liquid equity assets—generating over ₹52.95 Lakhs in pure net profit while protecting his cash flows throughout his career.
            </p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-amber-100 text-amber-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #2</span>
            <span className="text-sm font-semibold text-gray-500">Behavioral Finance &amp; Market Timing</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The "March Rush" Lumpsum vs. Disciplined Systematic Investment
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Consider two colleagues, Rahul and Priya, each earning identical salaries with ₹1,50,000 to invest annually in ELSS.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
            <div className="bg-amber-50 p-5 rounded-xl border border-amber-200 text-sm">
              <h4 className="font-bold text-amber-900 mb-2">Rahul: The Procrastinating Lumpsum Investor</h4>
              <p className="text-xs text-amber-800 leading-relaxed mb-3">
                Rahul forgets tax planning until HR demands investment proofs in late February. On March 25th each year, he scrambles to deposit ₹1,50,000 in a single lumpsum transaction.
              </p>
              <ul className="space-y-1.5 text-xs text-amber-900">
                <li>• Subject to acute market timing risk (often buying at quarterly market peaks).</li>
                <li>• Zero Rupee Cost Averaging during intermediate market dips.</li>
                <li>• Causes severe liquidity crunch in March household budgets.</li>
                <li>• Realized 10-year annualized return: <strong>10.8% CAGR</strong> due to unfavorable entry points.</li>
              </ul>
            </div>

            <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-200 text-sm">
              <h4 className="font-bold text-emerald-900 mb-2">Priya: The Disciplined SIP Investor</h4>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                Priya automates a ₹12,500 monthly ECS debit on the 5th of every month starting in April, treating tax planning as a regular operational expense.
              </p>
              <ul className="space-y-1.5 text-xs text-emerald-900">
                <li>• Buys more mutual fund units when markets correct and fewer when markets rally.</li>
                <li>• Complete immunity from year-end liquidity stress.</li>
                <li>• Seamlessly submits automated investment certificates to HR payroll in December.</li>
                <li>• Realized 10-year annualized return: <strong>13.4% CAGR</strong> through volatility capture.</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-gray-600">
            Over a decade, Priya accumulated over ₹4,10,000 more in mutual fund corpus than Rahul, despite deploying the exact same ₹15,00,000 principal. You can evaluate broad equity SIP projections with our <a href="/calculator/finance/sip" className="text-blue-600 font-semibold underline hover:text-blue-800">SIP Calculator with Inflation</a>.
          </p>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #3</span>
            <span className="text-sm font-semibold text-gray-500">Advanced Tax Strategy</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Systematic Tax Harvesting: Eliminating the 12.5% LTCG Liability
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Vikram has been investing ₹1,50,000 annually into ELSS for 6 years. At the start of Year 4, his Year 1 units (invested at ₹1,50,000) have grown to ₹2,60,000, representing an unrealized capital gain of ₹1,10,000.
          </p>
          <div className="bg-indigo-50 p-5 rounded-xl border border-indigo-200 text-sm space-y-2">
            <h4 className="font-bold text-indigo-950">The Tax-Harvesting Blueprint:</h4>
            <p className="text-indigo-900">1. Because the 3-year lock-in on Year 1 units has expired, Vikram executes a partial redemption of ₹2,60,000 in January.</p>
            <p className="text-indigo-900">2. His net realized capital gain is ₹1,10,000, which falls comfortably within the annual ₹1,25,000 tax-free LTCG threshold under Section 112A. <strong>Vikram pays ₹0 in tax.</strong></p>
            <p className="text-indigo-900">3. Within 48 hours, Vikram reinvests the ₹2,60,000 into a diversified flexi-cap or index equity fund. His new purchase price (cost of acquisition) is reset to ₹2,60,000.</p>
            <p className="text-indigo-900">4. By harvesting gains annually, Vikram permanently shields that ₹1,10,000 profit from future 12.5% capital gains tax—saving ₹14,300 in taxes in that single fiscal year alone.</p>
            <p className="font-bold text-indigo-950 pt-2 border-t border-indigo-300">
              Strategic Insight: Repeating this process every year across maturing ELSS tranches allows proactive investors to compound substantial equity wealth with near-zero long-term capital gains tax leakage.
            </p>
          </div>
        </div>

        {/* Case Study 4 */}
        <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 bg-purple-100 text-purple-800 font-bold text-xs uppercase tracking-wider rounded-md">Case Study #4</span>
            <span className="text-sm font-semibold text-gray-500">Tax Regime Comparison</span>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Section 115BAC Breakeven Analysis: Old vs. New Tax Regime on ₹15,00,000 Salary
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            An executive with a gross taxable salary of ₹15,00,000 is deciding whether to claim Section 80C deductions (including ₹1.5L in ELSS) under the Old Tax Regime or switch to the New Tax Regime.
          </p>
          <div className="overflow-x-auto my-3">
            <table className="w-full text-left text-xs md:text-sm border-collapse bg-white">
              <thead>
                <tr className="bg-gray-100 text-gray-800 border-b font-bold">
                  <th className="py-2 px-3">Parameters</th>
                  <th className="py-2 px-3">Old Tax Regime (with ELSS)</th>
                  <th className="py-2 px-3">New Tax Regime (Section 115BAC)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-xs font-mono">
                <tr>
                  <td className="py-2 px-3 font-sans">Gross Annual Salary</td>
                  <td className="py-2 px-3">₹15,00,000</td>
                  <td className="py-2 px-3">₹15,00,000</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Standard Deduction</td>
                  <td className="py-2 px-3">-₹50,000</td>
                  <td className="py-2 px-3">-₹75,000 (Updated)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Section 80C (ELSS + EPF)</td>
                  <td className="py-2 px-3 text-emerald-600 font-bold">-₹1,50,000</td>
                  <td className="py-2 px-3 text-red-500 font-bold">₹0 (Disallowed)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">HRA Exemption (Section 10(13A))</td>
                  <td className="py-2 px-3 text-emerald-600">-₹1,80,000</td>
                  <td className="py-2 px-3 text-red-500">₹0 (Disallowed)</td>
                </tr>
                <tr>
                  <td className="py-2 px-3 font-sans">Section 80D (Health Insurance)</td>
                  <td className="py-2 px-3 text-emerald-600">-₹25,000</td>
                  <td className="py-2 px-3 text-red-500">₹0 (Disallowed)</td>
                </tr>
                <tr className="bg-gray-50 font-bold">
                  <td className="py-2 px-3 font-sans">Net Taxable Income</td>
                  <td className="py-2 px-3">₹10,95,000</td>
                  <td className="py-2 px-3">₹14,25,000</td>
                </tr>
                <tr className="font-bold">
                  <td className="py-2 px-3 font-sans text-gray-900">Total Tax Liability (incl. Cess)</td>
                  <td className="py-2 px-3 text-emerald-700">₹1,46,640</td>
                  <td className="py-2 px-3 text-gray-900">₹1,40,400</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Finding: In this scenario, because the executive claimed ₹1.8L in HRA (calculated accurately via our <a href="/calculator/finance/hra" className="text-emerald-700 font-semibold underline hover:text-emerald-800">HRA Exemption Calculator</a>) alongside ₹1.5L in 80C deductions, the tax differential between regimes is minimal (under ₹6,240). If the executive pays home loan interest under Section 24b, the Old Regime with ELSS yields substantial net savings. Model your overall debt capacity with our <a href="/calculator/finance/loan-affordability" className="text-blue-600 font-semibold underline hover:text-blue-800">Loan Affordability Calculator</a> and evaluate collateral limits using our <a href="/calculator/finance/ltv" className="text-blue-600 font-semibold underline hover:text-blue-800">LTV Calculator</a>.
          </p>
        </div>
      </section>

      {/* SECTION 4: ADVANCED STRATEGIC TIPS, EDGE CASES & PITFALLS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Advanced Strategic Tips, Common Traps &amp; Risk Mitigation
        </h2>
        <p className="mb-6">
          Maximizing returns from ELSS investments requires avoiding common pitfalls that dilute compounding returns. Here are critical insights every mutual fund investor should know:
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">1. The IDCW (Dividend) Fallacy vs. Growth Compounding</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Historically, many risk-averse investors chose the Dividend Payout option in ELSS, believing it provided liquidity during the 3-year lock-in period. Today, this is a catastrophic tax error.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Following the abolition of the Dividend Distribution Tax (DDT), all dividends distributed under the Income Distribution cum Capital Withdrawal (IDCW) plan are added directly to your taxable income and taxed at your marginal slab rate (up to 35.88% including cess). Furthermore, stripping cash out of the fund terminates compounding on that capital. Always select the <strong>Growth option</strong> to keep your capital compounding tax-efficiently inside the portfolio NAV.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">2. The "Portfolio Overlap" Multi-Fund Trap</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Many taxpayers buy a new ELSS fund every single year, ending up with 6 to 10 different tax-saving mutual funds in their folios. This creates severe portfolio overlap.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Most active ELSS schemes maintain 60% to 75% large-cap equity allocations, meaning you end up holding identical positions in HDFC Bank, Reliance Industries, ICICI Bank, and Infosys across multiple funds while paying separate fund management expense ratios. Restrict your ELSS exposure to <strong>maximum 1 or 2 high-conviction funds</strong> with distinct investment styles (e.g., one value-oriented and one growth-oriented fund).
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">3. The 3-Year Maturity Fallacy: Never Redeem in a Bear Market</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              The 3-year lock-in period is a legal minimum holding duration, not a statutory withdrawal deadline. If broader equity indices are undergoing a cyclical correction or bear market when your units unlock, redeeming them converts paper losses into permanent capital destruction.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              Unless you require immediate liquidity for a non-negotiable life goal, treat ELSS as an open-ended multi-cap equity fund and hold your units for 5, 7, or 10 years. Historical rolling return data shows that the probability of negative returns in Indian equity funds approaches near zero once holding horizons exceed 7 years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">4. Active ELSS Funds vs. Low-Cost Passive Index ELSS</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Recent regulatory reforms permit asset management companies to launch passive ELSS funds tracking broader benchmark indices (such as the Nifty 50 or Nifty LargeMidcap 250 Index). While actively managed ELSS funds charge total expense ratios (TER) between 0.75% and 1.80%, passive index ELSS funds offer expense ratios as low as 0.15% to 0.30%. Over a 15-year compounding timeline, saving 1.2% in annual management fees can add lakhs of rupees to your net retirement nest egg. Compare long-term fund outcomes with our <a href="/calculator/finance/mutual-fund-returns" className="text-blue-600 font-semibold underline hover:text-blue-800">Mutual Fund Returns Calculator</a>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-2">5. Non-Resident Indian (NRI) ELSS Regulations &amp; FATCA Compliance</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-3">
              Non-Resident Indians (NRIs) residing in the GCC nations (UAE, Saudi Arabia, Qatar), Singapore, the United Kingdom, and the European Union can seamlessly invest in ELSS mutual funds using Non-Resident External (NRE) or Non-Resident Ordinary (NRO) bank accounts. If funded via NRE accounts, the redemption proceeds after the 3-year lock-in period are fully repatriable overseas without regulatory friction.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed">
              However, NRIs based in the United States and Canada face strict cross-border regulatory constraints. Due to rigorous compliance burdens under the Foreign Account Tax Compliance Act (FATCA) and punitive taxation of foreign mutual funds classified as Passive Foreign Investment Companies (PFIC) under US Internal Revenue Code Section 1291, only a small subset of Indian AMCs (such as ICICI Prudential, Nippon India, and SBI Mutual Fund) accept investments from US/Canada NRIs under strict offline paper declarations.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECTION 80C COMPARISON MATRIX */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Section 80C Comparison: ELSS vs. PPF vs. Tax-Saving FD vs. NPS vs. ULIP
        </h2>
        <p className="mb-6">
          To determine where to allocate your annual ₹1,50,000 Section 80C allowance, examine how ELSS compares against the alternative tax-saving financial instruments sanctioned by the Government of India:
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-xs md:text-sm border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4">Financial Instrument</th>
                <th className="py-3 px-4">Lock-in Period</th>
                <th className="py-3 px-4">Historical / Stated Return</th>
                <th className="py-3 px-4">Underlying Asset Class</th>
                <th className="py-3 px-4">Tax Status at Maturity</th>
                <th className="py-3 px-4">Optimal Investor Fit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-700">
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">ELSS Mutual Fund</td>
                <td className="py-3 px-4 font-semibold text-emerald-600">3 Years (Shortest)</td>
                <td className="py-3 px-4 text-emerald-700 font-bold">12% – 15% CAGR</td>
                <td className="py-3 px-4">Minimum 80% Public Equities</td>
                <td className="py-3 px-4">LTCG &gt; ₹1.25L taxed @ 12.5%</td>
                <td className="py-3 px-4">Wealth-builders with 3+ year horizons seeking inflation-beating growth.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Public Provident Fund (PPF)</td>
                <td className="py-3 px-4 text-red-600 font-semibold">15 Years (Rigid)</td>
                <td className="py-3 px-4">7.1% (Govt. Floating)</td>
                <td className="py-3 px-4">Sovereign Debt G-Secs</td>
                <td className="py-3 px-4 font-semibold text-emerald-600">Completely Exempt (EEE)</td>
                <td className="py-3 px-4">Zero-risk conservative investors seeking guaranteed long-term debt savings.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">National Pension System (NPS)</td>
                <td className="py-3 px-4 text-red-600 font-semibold">Until Age 60</td>
                <td className="py-3 px-4">9% – 12% (Blended)</td>
                <td className="py-3 px-4">Equity, Corporate Debt, G-Secs</td>
                <td className="py-3 px-4">60% Tax-Free; 40% Annuity Taxed</td>
                <td className="py-3 px-4">Retirement-focused savers utilizing additional ₹50,000 Section 80CCD(1B).</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Tax-Saving Fixed Deposit</td>
                <td className="py-3 px-4">5 Years</td>
                <td className="py-3 px-4">6.5% – 7.25% Fixed</td>
                <td className="py-3 px-4">Commercial Bank Deposits</td>
                <td className="py-3 px-4 text-red-600 font-semibold">Interest taxed at slab rate</td>
                <td className="py-3 px-4">Senior citizens and risk-averse individuals seeking fixed guaranteed interest.</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="py-3 px-4 font-bold text-gray-900">Unit Linked Insurance Plan (ULIP)</td>
                <td className="py-3 px-4">5 Years</td>
                <td className="py-3 px-4">8% – 11% (Net of charges)</td>
                <td className="py-3 px-4">Equity &amp; Debt Hybrid</td>
                <td className="py-3 px-4">Exempt if premium &lt; ₹2.5L/year</td>
                <td className="py-3 px-4">Individuals desiring bundled life insurance cover and mutual fund exposure.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-gray-600 mt-3">
          To model supplementary retirement allocations under Section 80CCD, check our <a href="/calculator/finance/nps" className="text-blue-600 font-semibold underline hover:text-blue-800">NPS Calculator</a> and evaluate mandatory statutory retirement savings with our <a href="/calculator/finance/epf-interest" className="text-blue-600 font-semibold underline hover:text-blue-800">EPF Interest Calculator</a> and <a href="/calculator/finance/pf" className="text-blue-600 font-semibold underline hover:text-blue-800">PF Calculator</a>.
        </p>
      </section>

      {/* SECTION 6: COMPREHENSIVE FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-4">
          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>What is the mandatory lock-in period for ELSS mutual funds?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              ELSS mutual funds carry a statutory lock-in period of exactly three years (36 months) from the date of unit allotment. This is the shortest lock-in period among all Section 80C tax-saving financial instruments in India, compared to 5 years for Tax-Saving Fixed Deposits and Unit Linked Insurance Plans (ULIPs), and 15 years for the Public Provident Fund (PPF).
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>How does the three-year lock-in work for monthly SIP investments?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              When investing in ELSS via a Systematic Investment Plan (SIP), each monthly installment operates under its own independent three-year lock-in clock. For example, an installment paid in April 2024 becomes redeemable in April 2027, while the installment paid in May 2024 unlocks in May 2027. You cannot withdraw your entire SIP portfolio on the third anniversary of starting the SIP.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>Can I withdraw my ELSS funds before completing three years in an emergency?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              No. Under Securities and Exchange Board of India (SEBI) regulations and the Income Tax Act, premature redemption of ELSS units prior to the mandatory 36-month holding period is strictly prohibited. Neither mutual fund asset management companies (AMCs) nor fund distributors have the legal authority to override this statutory lock-in, even in medical or financial emergencies.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>How are long-term capital gains (LTCG) from ELSS taxed upon redemption?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Because ELSS funds require a minimum three-year holding period, all realized profits upon redemption are classified as Long-Term Capital Gains (LTCG) under Section 112A. Aggregate equity LTCG up to ₹1.25 Lakhs per financial year is entirely tax-free. Any capital gains exceeding this ₹1.25 Lakh threshold in a single fiscal year are taxed at a flat rate of 12.5% without indexation benefits.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>Is there a ceiling on how much money I can invest in an ELSS fund?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              There is no statutory maximum limit on the amount of capital you can allocate into an ELSS fund. You may invest ₹5 Lakhs, ₹10 Lakhs, or more. However, the income tax deduction permissible under Section 80C of the Income Tax Act is capped at a strict ceiling of ₹1.5 Lakhs per financial year. Any investment exceeding ₹1.5 Lakhs continues to compound as a regular equity mutual fund without additional tax rebate.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>Should I invest in ELSS via Monthly SIP or a Lumpsum deposit?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Financial advisors overwhelmingly recommend the monthly SIP route. SIPs enforce financial discipline, mitigate market timing risk, and leverage Rupee Cost Averaging across volatile market cycles. Lumpsum investments are primarily suitable for taxpayers who have surplus liquidity or who need to fulfill their annual Section 80C tax deduction mandate in the final quarter of the financial year.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>Are ELSS tax benefits available under the New Tax Regime (Section 115BAC)?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              No. Section 80C tax deductions, including ELSS investments, are exclusively accessible under the Old Tax Regime. The default New Tax Regime (Section 115BAC) disallows Section 80C deductions in exchange for lower baseline tax slab rates. However, ELSS remains an exceptional wealth-creation equity fund regardless of tax regime choice due to its forced 3-year compounding horizon.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>Should I select the Growth option or the IDCW (Dividend) option in ELSS?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              You should almost always select the Growth option. Under current tax laws, dividends distributed under the Income Distribution cum Capital Withdrawal (IDCW) option are taxed at your marginal income tax slab rate (up to 35.88% with cess/surcharge), and dividend payouts disrupt long-term compounding. The Growth option retains all profits inside the NAV, maximizing exponential wealth creation.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>What is tax harvesting, and how does it optimize ELSS returns?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              Tax harvesting is an advanced portfolio management strategy where an investor redeems unlocked ELSS units after the 3-year lock-in period up to the annual tax-free LTCG threshold of ₹1.25 Lakhs, and immediately reinvests the proceeds back into equity funds. This resets the cost of acquisition to current market prices, legally eliminating future LTCG tax liability on that profit portion.
            </div>
          </details>

          <details className="group border border-gray-200 rounded-xl open:border-emerald-200 transition-colors">
            <summary className="font-semibold text-gray-900 px-5 py-4 cursor-pointer flex justify-between items-center group-open:bg-emerald-50/50 rounded-xl">
              <span>What happens if the equity market is down when my 3-year ELSS lock-in expires?</span>
              <span className="text-emerald-600 group-open:rotate-180 transition-transform font-bold text-xl">▾</span>
            </summary>
            <div className="px-5 pb-5 text-gray-700 text-sm leading-relaxed border-t border-gray-100 pt-3">
              The completion of the three-year lock-in period unlocks your units for redemption, but it does not mandate immediate liquidation. If broader equity indices are experiencing a cyclical downturn or bear correction at the 36-month mark, you should simply leave your units invested. ELSS operates like any high-quality diversified flexi-cap equity fund, and historical data demonstrates that extending your holding horizon to 5 to 7 years substantially increases annualized returns.
            </div>
          </details>
        </div>
      </section>

    </div>
  );
}
