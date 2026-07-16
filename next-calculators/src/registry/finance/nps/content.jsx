import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is it mandatory to buy an annuity in NPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, under the current National Pension System rules, it is mandatory to utilize at least 40% of your total accumulated corpus at retirement (age 60) to purchase an annuity from a PFRDA-registered life insurance company. This annuity provides your monthly pension."
        }
      },
      {
        "@type": "Question",
        "name": "Is the lump sum withdrawal tax-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the lump sum withdrawal of up to 60% of your total NPS corpus at maturity (age 60) is entirely tax-free. You do not have to pay any income tax on this amount."
        }
      },
      {
        "@type": "Question",
        "name": "Is the monthly pension from the annuity taxable?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. While the amount used to purchase the annuity is exempt from tax, the actual monthly pension you receive from the annuity provider is treated as regular income and is fully taxable according to your income tax slab in your retirement years."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw my NPS money before turning 60?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Premature exit before age 60 is allowed only after completing 5 years (for corporate NPS) or 10 years (for individual NPS). However, if you exit prematurely, you are forced to use 80% of the corpus to buy an annuity, and can only withdraw 20% as a lump sum. Partial withdrawals (up to 25% of your own contributions) are allowed for specific reasons like children's higher education, marriage, or critical illness after 3 years."
        }
      },
      {
        "@type": "Question",
        "name": "What are the tax benefits of investing in NPS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under the Old Tax Regime, you get a deduction of ₹1.5 Lakh under Section 80C, plus an exclusive additional deduction of ₹50,000 under Section 80CCD(1B). Furthermore, employer contributions to your NPS (up to 10% of Basic Salary) are tax-deductible under Section 80CCD(2), which is available in both the Old and New Tax Regimes."
        }
      },
      {
        "@type": "Question",
        "name": "Can I continue investing in NPS after age 60?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, subscribers are allowed to defer their withdrawal and continue contributing to their NPS account up to the age of 75 years, allowing the corpus to compound further before purchasing the annuity."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">NPS Calculator: Engineer Your Financial Freedom</h1>
        <p className="mb-4 text-lg text-gray-600">
          The <strong>National Pension System (NPS)</strong> is India's most powerful, cost-effective, and tax-efficient retirement planning vehicle. Originally launched in 2004 exclusively for government employees, it was opened to all Indian citizens in 2009. Regulated by the PFRDA (Pension Fund Regulatory and Development Authority), the NPS is designed to foster a habit of systematic, long-term saving to ensure a dignified and financially secure post-retirement life.
        </p>
        <p className="mb-4">
          Unlike the Employees' Provident Fund (EPF) or Public Provident Fund (PPF) which offer fixed, government-declared interest rates, the NPS is a market-linked product. Your contributions are invested in a diversified portfolio comprising Equity (stocks), Corporate Bonds, and Government Securities. Because it harnesses the immense growth potential of the equity markets over a multi-decade horizon, the NPS consistently outperforms traditional fixed-income instruments, often generating double-digit annualized returns.
        </p>
        <p className="mb-4">
          However, the true complexity of the NPS lies in its unique maturity rules. At age 60, you cannot simply withdraw your entire multi-crore corpus. The government mandates that a portion must be locked into an annuity to guarantee a lifelong monthly pension. Our advanced <strong>NPS Calculator</strong> cuts through this complexity. It projects your total wealth creation, accurately splits it into the tax-free lump sum and the mandatory annuity pool, and estimates the exact monthly pension you will receive in your golden years.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the NPS Pension Calculator</h2>
        <p className="mb-4">
          Visualizing your retirement cash flow requires only a few key inputs. Here is how to navigate the calculator to get the most accurate projection:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Age Parameters:</strong> Enter your Current Age and your planned Retirement Age. The default retirement age in NPS is 60, but you can choose to extend your accumulation phase up to 75 years of age.</li>
          <li><strong>Monthly Contribution:</strong> Input the total amount you plan to invest every month. If you are a salaried employee, this should include both your contribution and your employer's contribution (if applicable) under the corporate NPS model.</li>
          <li><strong>Expected Return on Investment (%):</strong> Since NPS is market-linked, you must estimate the CAGR (Compound Annual Growth Rate). If you opt for an aggressive 'Active Choice' with high equity exposure (up to 75%), a 10% to 12% return is a historically reasonable expectation over 20+ years. For conservative debt-heavy portfolios, expect 7% to 9%.</li>
          <li><strong>Corpus to Invest in Annuity (%):</strong> By law, you must use a minimum of 40% of your final corpus to buy an annuity. You can increase this percentage if you desire a higher monthly pension and a lower immediate lump sum.</li>
          <li><strong>Expected Annuity Rate (%):</strong> This is the interest rate the insurance company will pay on your annuity corpus to generate your pension. Currently, annuity rates in India hover between 5.5% and 6.5%.</li>
        </ul>
        <p className="mt-4">
          Instantly, the calculator will reveal your <strong>Total Corpus</strong>, the <strong>Tax-Free Lump Sum</strong> you can withdraw, and the vital <strong>Estimated Monthly Pension</strong> that will sustain your lifestyle after you stop working.
        </p>
      </section>

      {/* THE 60:40 RULE AT MATURITY */}
      <section className="bg-emerald-50/50 p-8 rounded-2xl border border-emerald-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Decoding Maturity: The Crucial 60:40 Rule</h2>
        <p className="mb-4">
          The National Pension System is not a pure investment scheme; it is strictly a <em>pension</em> scheme. Therefore, the government uses strict withdrawal rules to ensure you don't spend all your retirement savings at once. When you reach the age of 60, the PFRDA enforces the famous 60:40 rule on your accumulated wealth.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">The 60% Tax-Free Lump Sum</h3>
        <p className="mb-4">
          You are permitted to withdraw a maximum of 60% of your total generated corpus as a lump sum. The most significant advantage of the NPS is that this entire 60% withdrawal is completely tax-free. Whether this amount is ₹50 Lakhs or ₹5 Crores, it does not attract a single rupee of income tax. This massive injection of liquidity is ideal for paying off remaining mortgages, funding a child's marriage, or covering large medical contingencies.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">The 40% Mandatory Annuity</h3>
        <p className="mb-4">
          The remaining 40% (at minimum) of your corpus cannot be withdrawn. It must be transferred to a PFRDA-empanelled Life Insurance Company (such as LIC, HDFC Life, or SBI Life) to purchase an "Annuity." An annuity is a financial contract where the insurer takes your lump sum and guarantees to pay you a fixed monthly income for the rest of your life. 
        </p>
        <p className="mb-4 font-semibold text-red-700">
          Important Tax Nuance: While the 40% amount used to purchase the annuity is exempt from tax, the monthly pension you receive from it is treated as regular salary income. It will be taxed according to whatever income tax slab you fall into during your retirement years.
        </p>
        <p className="mb-4">
          If your total accumulated corpus at age 60 is less than or equal to ₹5 Lakhs, the PFRDA allows you a 100% lump sum withdrawal, waiving the mandatory annuity requirement entirely.
        </p>
      </section>

      {/* THE POWER OF MARKET-LINKED COMPOUNDING */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Market-Linked NPS Beats Traditional Fixed Income</h2>
        <p className="mb-4">
          For decades, Indians relied exclusively on the EPF and PPF for retirement. While these are excellent, zero-risk instruments, they lack the aggressive growth required to combat inflation over a 30-year horizon. The NPS bridges this gap by introducing professional equity management at the absolute lowest fund management charges in the world (typically 0.01% of the AUM).
        </p>
        <p className="mb-4">
          Subscribers can choose their asset allocation between Equity (E), Corporate Debt (C), and Government Securities (G). Under the 'Active Choice' model, a subscriber up to the age of 50 can allocate up to 75% of their funds to the Equity market. Over a 20 to 30-year period, equity investments historically outpace inflation and fixed-income returns by a significant margin.
        </p>
        <p className="mb-4">
          Alternatively, for those who do not want to actively manage their portfolio, the NPS offers 'Auto Choice' (Lifecycle Funds). Here, your equity exposure is aggressively high when you are young and automatically tapers down, shifting your money into safe government bonds as you approach retirement age. This genius mechanism captures high growth in your youth and preserves your capital as you near the finish line.
        </p>
      </section>

      {/* UNMATCHED TAX BENEFITS */}
      <section className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Triple Tax Benefits: The Ultimate Tax-Saving Tool</h2>
        <p className="mb-4">
          The National Pension System is heavily incentivized by the government. It offers tax deductions that are unmatched by any other financial product in India, operating across three different sections of the Income Tax Act.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. The Standard ₹1.5 Lakh Deduction (Sec 80CCD(1))</h3>
        <p className="mb-4">
          Under the Old Tax Regime, your contributions to the NPS Tier-I account qualify for tax deductions up to ₹1.5 Lakhs per financial year. However, this limit falls under the overall umbrella of Section 80C, which it shares with PPF, ELSS, Life Insurance premiums, and EPF.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. The Exclusive ₹50,000 Bonus Deduction (Sec 80CCD(1B))</h3>
        <p className="mb-4">
          This is the primary reason taxpayers flock to the NPS. In addition to the ₹1.5 Lakh 80C limit, the government grants an exclusive, additional tax deduction of ₹50,000 solely for NPS Tier-I investments under Section 80CCD(1B). This pushes your total potential tax deduction to a massive ₹2,00,000 per year (available only in the Old Tax Regime). For someone in the 30% tax bracket, investing this extra ₹50,000 saves exactly ₹15,600 in immediate taxes!
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. The Corporate NPS Super-Hack (Sec 80CCD(2))</h3>
        <p className="mb-4">
          This is arguably the most powerful yet underutilized tax-saving strategy for high-income earners. If your employer contributes to your NPS account, that contribution (up to 10% of your Basic Salary + DA) is fully tax-deductible for you under Section 80CCD(2). 
        </p>
        <p className="font-semibold text-indigo-900">
          Crucial Advantage: The Section 80CCD(2) deduction is over and above the ₹2 Lakh limit AND it is fully available even if you have opted for the New Tax Regime! Many smart professionals restructure their CTC with HR to route 10% of their basic pay directly into Corporate NPS, instantly generating massive tax savings.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-purple-50/50 p-8 rounded-2xl border border-purple-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Projecting Retirement Realities</h2>
        <p className="mb-4">
          Let us explore how the NPS math plays out for two different investors aiming to secure their retirement.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Scenario A: The 25-Year-Old Early Adopter</h3>
        <p className="mb-2">
          Rahul is 25 years old. Knowing he wants a strong equity portfolio, he starts a monthly SIP of ₹10,000 in NPS Tier-I, expecting a 10% annualized return until he turns 60 (a 35-year horizon). At age 60, he opts for the standard 40% annuity purchase with a 6% expected pension rate.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Total Invested (35 Years):</strong> ₹42,00,000</li>
          <li><strong>Total Corpus Generated:</strong> ₹3.82 Crores (₹3.4 Crores of this is pure market returns!)</li>
          <li><strong>Tax-Free Lump Sum (60%):</strong> ₹2.29 Crores transferred straight to his bank account.</li>
          <li><strong>Annuity Corpus (40%):</strong> ₹1.53 Crores locked with an insurer.</li>
          <li><strong>Monthly Pension:</strong> He will receive a guaranteed <strong>₹76,500 every single month</strong> for the rest of his life.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Scenario B: The 40-Year-Old Catch-Up</h3>
        <p className="mb-2">
          Anita realizes at age 40 that she hasn't saved enough. She starts aggressively investing ₹30,000 per month into NPS, also expecting a 10% return, until age 60 (a 20-year horizon). She uses the same 60:40 split and 6% annuity rate.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Total Invested (20 Years):</strong> ₹72,00,000</li>
          <li><strong>Total Corpus Generated:</strong> ₹2.29 Crores</li>
          <li><strong>Tax-Free Lump Sum (60%):</strong> ₹1.37 Crores</li>
          <li><strong>Annuity Corpus (40%):</strong> ₹91 Lakhs</li>
          <li><strong>Monthly Pension:</strong> She will receive a guaranteed <strong>₹45,500 every month</strong>.</li>
        </ul>
        <p className="mb-4 text-gray-800 font-medium">
          The Lesson: Despite Anita investing ₹30 Lakhs MORE from her own pocket than Rahul, her final corpus is significantly smaller. She lost 15 years of compound interest. In NPS, starting early with a small amount drastically outperforms starting late with a massive amount.
        </p>
      </section>

      {/* TIER I VS TIER II ACCOUNTS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Tier-I vs. Tier-II Accounts</h2>
        <p className="mb-4">
          When you open an NPS account, you are issued a PRAN (Permanent Retirement Account Number) and given access to two types of sub-accounts.
        </p>
        <p className="mb-4">
          <strong>Tier-I Account:</strong> This is the mandatory, strict retirement account. All the tax benefits discussed above apply exclusively to the Tier-I account. The catch is liquidity—your money is locked in until age 60 (barring strict partial withdrawal rules). This lock-in is a feature, not a bug, as it forces discipline.
        </p>
        <p className="mb-4">
          <strong>Tier-II Account:</strong> This is a voluntary, highly liquid investment account that operates very much like a regular Mutual Fund. There is no lock-in period; you can withdraw your money at any time without restrictions. It utilizes the same low-cost fund management as Tier-I. However, investments made into the Tier-II account <em>do not</em> qualify for any Section 80C or 80CCD tax benefits (except for Central Government employees who can claim 80C benefits with a 3-year lock-in).
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is it mandatory to buy an annuity in NPS?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, under the current National Pension System rules, it is mandatory to utilize at least 40% of your total accumulated corpus at retirement (age 60) to purchase an annuity from a PFRDA-registered life insurance company. This annuity provides your monthly pension.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is the lump sum withdrawal tax-free?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, the lump sum withdrawal of up to 60% of your total NPS corpus at maturity (age 60) is entirely tax-free. You do not have to pay any income tax on this amount.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is the monthly pension from the annuity taxable?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. While the amount used to purchase the annuity is exempt from tax, the actual monthly pension you receive from the annuity provider is treated as regular income and is fully taxable according to your income tax slab in your retirement years.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I withdraw my NPS money before turning 60?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Premature exit before age 60 is allowed only after completing 5 years (for corporate NPS) or 10 years (for individual NPS). However, if you exit prematurely, you are forced to use 80% of the corpus to buy an annuity, and can only withdraw 20% as a lump sum. Partial withdrawals (up to 25% of your own contributions) are allowed for specific reasons like children's higher education, marriage, or critical illness after 3 years.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What are the tax benefits of investing in NPS?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under the Old Tax Regime, you get a deduction of ₹1.5 Lakh under Section 80C, plus an exclusive additional deduction of ₹50,000 under Section 80CCD(1B). Furthermore, employer contributions to your NPS (up to 10% of Basic Salary) are tax-deductible under Section 80CCD(2), which is available in both the Old and New Tax Regimes.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I continue investing in NPS after age 60?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, subscribers are allowed to defer their withdrawal and continue contributing to their NPS account up to the age of 75 years, allowing the corpus to compound further before purchasing the annuity.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
