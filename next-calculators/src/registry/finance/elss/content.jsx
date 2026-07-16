import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the lock-in period for ELSS mutual funds?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ELSS mutual funds have a mandatory lock-in period of exactly 3 years from the date of investment. In the case of an SIP, every individual monthly installment is locked for 3 years from its respective investment date."
        }
      },
      {
        "@type": "Question",
        "name": "Can I withdraw my ELSS investment before 3 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, premature withdrawal from an ELSS fund before the completion of the 3-year lock-in period is strictly prohibited under any circumstances, even in emergencies."
        }
      },
      {
        "@type": "Question",
        "name": "Are returns from ELSS completely tax-free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. Returns from ELSS are classified as Long-Term Capital Gains (LTCG) because the holding period is over 1 year. LTCG up to ₹1.25 Lakhs per financial year is tax-free. Any gains exceeding ₹1.25 Lakhs are taxed at a flat rate of 12.5% (as per recent tax amendments)."
        }
      },
      {
        "@type": "Question",
        "name": "Is there an upper limit on how much I can invest in ELSS?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "There is no upper limit on how much you can invest in an ELSS fund. You can invest ₹5 Lakhs or ₹50 Lakhs if you want. However, the maximum tax deduction you can claim under Section 80C is strictly capped at ₹1.5 Lakhs per financial year."
        }
      },
      {
        "@type": "Question",
        "name": "Should I invest in ELSS through SIP or Lumpsum?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Financial experts overwhelmingly recommend the SIP (Systematic Investment Plan) route. SIPs average out the market volatility (Rupee Cost Averaging) and reduce the risk of investing a large chunk of money right before a market crash. Lumpsum is only recommended if you need to make a last-minute investment in March to save tax before the financial year ends."
        }
      },
      {
        "@type": "Question",
        "name": "Do I get ELSS tax benefits in the New Tax Regime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Section 80C deduction, which makes ELSS investments tax-deductible, is exclusively available under the Old Tax Regime. If you have opted for the New Tax Regime, investing in ELSS will not reduce your income tax liability, though it remains a viable wealth-creation tool."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">ELSS Calculator: Maximize Tax Savings and Equity Growth</h1>
        <p className="mb-4 text-lg text-gray-600">
          For decades, the Indian taxpayer's go-to instruments for Section 80C tax savings were conservative, fixed-income options like the Public Provident Fund (PPF), National Savings Certificate (NSC), or 5-year Tax-Saving Fixed Deposits. While incredibly safe, these instruments barely manage to beat inflation, severely hindering long-term wealth creation. Enter the <strong>Equity Linked Savings Scheme (ELSS)</strong>.
        </p>
        <p className="mb-4">
          ELSS is a specialized category of Mutual Funds that invests a minimum of 80% of its corpus in equity (stocks) and equity-related instruments. It is the <em>only</em> mutual fund category in India that qualifies for a tax deduction of up to ₹1.5 Lakhs under Section 80C of the Income Tax Act. By combining the explosive growth potential of the stock market with immediate tax savings, ELSS has emerged as the premier choice for modern, wealth-conscious taxpayers.
        </p>
        <p className="mb-4">
          However, because ELSS is market-linked, projecting your returns and understanding your exact tax savings can be mathematically daunting. Our advanced <strong>ELSS Calculator</strong> bridges this gap. Whether you are planning a disciplined monthly SIP or making a frantic, last-minute lumpsum deposit in March, this tool will instantly project your future wealth and calculate the exact rupee amount you will save in taxes today based on your specific income tax slab.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the ELSS Tax Saving Calculator</h2>
        <p className="mb-4">
          Visualizing your tax savings and equity growth takes just a few clicks. Here is how to configure the inputs:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Investment Type:</strong> Choose 'Monthly SIP' if you want to invest a small amount automatically every month. Choose 'One-time Lumpsum' if you are depositing a bulk amount at once.</li>
          <li><strong>Investment Amount:</strong> Enter the rupee value. Remember, while you can invest any amount, the tax benefits (Section 80C) are capped at an annual investment of ₹1.5 Lakhs.</li>
          <li><strong>Expected Annual Return:</strong> ELSS funds invest heavily in equities. While returns are not guaranteed, historical data suggests a conservative estimate of 10% to 14% CAGR over a 5 to 10-year horizon.</li>
          <li><strong>Investment Period:</strong> Enter how many years you plan to stay invested. Note that ELSS has a mandatory 3-year lock-in period, meaning you cannot enter a period less than 3 years.</li>
          <li><strong>Your Income Tax Slab:</strong> This is crucial. Select your highest tax bracket (5%, 10%, 15%, 20%, or 30%). The calculator uses this to determine exactly how much immediate tax cash you save by investing in ELSS.</li>
        </ul>
        <p className="mt-4">
          The calculator will immediately generate two vital metrics: your projected <strong>Total Value (Wealth)</strong> at the end of the tenure, and your <strong>Total Tax Saved</strong> under Section 80C.
        </p>
      </section>

      {/* WHY ELSS BEATS PPF AND FDS */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Triad of Supremacy: Why ELSS Dominates 80C</h2>
        <p className="mb-4">
          If you are utilizing the Old Tax Regime, you have to invest ₹1.5 Lakhs somewhere to save taxes. Here is why financial planners consistently rank ELSS as the superior choice over traditional instruments like PPF or Tax-Saving FDs.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. The Shortest Lock-in Period</h3>
        <p className="mb-4">
          Liquidity is a massive factor in personal finance. A Tax-Saving Fixed Deposit locks your money away for 5 years. The Public Provident Fund (PPF) has a rigid, punishing lock-in period of 15 years. ELSS, on the other hand, boasts a lock-in period of just <strong>3 years</strong>—the absolute shortest among all Section 80C avenues. This ensures your capital is available to you relatively quickly in case of major life events.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. The Power of Equity Returns</h3>
        <p className="mb-4">
          PPF and FDs offer fixed interest rates usually ranging between 6.5% and 7.1%. After adjusting for real-world inflation (which often hovers around 6% to 7%), your "real return" on fixed-income instruments is essentially zero. You are preserving capital, not creating wealth. ELSS funds, being equity-oriented, historically deliver 12% to 15% returns over a 5 to 7-year cycle. This massive delta in interest rates creates a compounding effect that can result in millions of rupees of extra wealth over a decade.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. Immediate ROI via Tax Savings</h3>
        <p className="mb-4">
          If you are in the 30% tax bracket, investing ₹1,50,000 in an ELSS fund immediately saves you ₹45,000 in income tax (plus applicable cess). This means the actual cost of your ₹1.5 Lakh investment is only ₹1.05 Lakhs. You are effectively getting an instant 30% Return on Investment on day one, even before the stock market opens!
        </p>
      </section>

      {/* THE SIP TRAP IN ELSS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Warning: The 3-Year Lock-in Trap for SIPs</h2>
        <p className="mb-4">
          While doing an SIP (Systematic Investment Plan) in ELSS is highly recommended to average out market volatility, it comes with a major technical caveat that traps thousands of uninformed investors every year.
        </p>
        <p className="mb-4 text-red-700 font-semibold">
          The 3-year lock-in period applies to EVERY SINGLE SIP INSTALLMENT individually, not to the date you started the mutual fund folio.
        </p>
        <p className="mb-4">
          For example: Suppose you start an ELSS SIP of ₹10,000 per month in January 2024. 
          The ₹10,000 you invest in January 2024 will be unlocked in January 2027. 
          The ₹10,000 you invest in February 2024 will be unlocked in February 2027. 
          The ₹10,000 you invest in December 2024 will only be unlocked in December 2027!
        </p>
        <p className="mb-4">
          Many investors mistakenly believe that if they run an SIP for 3 years, the entire corpus becomes freely withdrawable on the 3rd anniversary. This is completely false. If you stop a 3-year SIP today, it will take another 3 full years before the final installment clears its mandatory lock-in period.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-teal-50/50 p-8 rounded-2xl border border-teal-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: ELSS vs PPF Wealth Generation</h2>
        <p className="mb-4">
          Let's compare the wealth trajectory of two friends, both in the 30% tax bracket, who decide to maximize their ₹1.5 Lakh 80C limit every year for 15 years.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Scenario 1: The Conservative PPF Investor</h3>
        <p className="mb-2">
          Karan is risk-averse. He deposits a lumpsum of ₹1.5 Lakhs into his PPF account every April. The PPF offers a guaranteed (but floating) return of around 7.1% per annum.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Total Principal Invested (15 Years):</strong> ₹22,50,000</li>
          <li><strong>Tax Saved (₹45k x 15):</strong> ₹6,75,000</li>
          <li><strong>Final Corpus Generated:</strong> Roughly <strong>₹40,68,000</strong></li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Scenario 2: The Aggressive ELSS Investor</h3>
        <p className="mb-2">
          Neha understands equity. She sets up an ELSS SIP of ₹12,500 per month (which totals ₹1.5 Lakhs a year) to take advantage of Rupee Cost Averaging. We will assume a conservative equity CAGR of 12%.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Total Principal Invested (15 Years):</strong> ₹22,50,000</li>
          <li><strong>Tax Saved (₹45k x 15):</strong> ₹6,75,000</li>
          <li><strong>Final Corpus Generated:</strong> Roughly <strong>₹63,00,000</strong></li>
        </ul>
        <p className="mb-4 font-semibold text-gray-800">
          The Verdict: Both saved the exact same amount in taxes (₹6.75 Lakhs). Both invested the exact same amount out-of-pocket (₹22.5 Lakhs). However, by tolerating short-term market volatility, Neha generated roughly ₹22 Lakhs more in sheer wealth than Karan over the 15-year period.
        </p>
      </section>

      {/* TAXATION OF ELSS RETURNS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Taxation of ELSS: The LTCG Rule</h2>
        <p className="mb-4">
          While the initial investment in ELSS saves you tax under Section 80C, the final returns you generate are not entirely tax-free (unlike the PPF, which is EEE). 
        </p>
        <p className="mb-4">
          Because the mandatory lock-in period is 3 years, any withdrawal you make from an ELSS fund is classified as Long-Term Capital Gains (LTCG). Under the current Indian tax laws (post recent budgets), equity LTCG up to <strong>₹1.25 Lakhs per financial year is entirely tax-free</strong>.
        </p>
        <p className="mb-4">
          Any capital gains exceeding the ₹1.25 Lakh limit in a single financial year are taxed at a flat rate of <strong>12.5%</strong> without the benefit of indexation. 
        </p>
        <p className="mb-4 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
          <strong>Pro Strategy (Tax Harvesting):</strong> Smart investors use a strategy called "Tax Harvesting." Once the 3-year lock-in is over, they redeem units such that their total profit for the year is exactly ₹1.24 Lakhs, pay absolutely zero tax, and immediately reinvest that money to reset their buy price (cost of acquisition). This legally circumvents the 12.5% LTCG tax over the long term.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the lock-in period for ELSS mutual funds?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              ELSS mutual funds have a mandatory lock-in period of exactly 3 years from the date of investment. In the case of an SIP, every individual monthly installment is locked for 3 years from its respective investment date.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I withdraw my ELSS investment before 3 years?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, premature withdrawal from an ELSS fund before the completion of the 3-year lock-in period is strictly prohibited under any circumstances, even in emergencies.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Are returns from ELSS completely tax-free?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. Returns from ELSS are classified as Long-Term Capital Gains (LTCG) because the holding period is over 1 year. LTCG up to ₹1.25 Lakhs per financial year is tax-free. Any gains exceeding ₹1.25 Lakhs are taxed at a flat rate of 12.5% (as per recent tax amendments).
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is there an upper limit on how much I can invest in ELSS?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              There is no upper limit on how much you can invest in an ELSS fund. You can invest ₹5 Lakhs or ₹50 Lakhs if you want. However, the maximum tax deduction you can claim under Section 80C is strictly capped at ₹1.5 Lakhs per financial year.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Should I invest in ELSS through SIP or Lumpsum?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Financial experts overwhelmingly recommend the SIP (Systematic Investment Plan) route. SIPs average out the market volatility (Rupee Cost Averaging) and reduce the risk of investing a large chunk of money right before a market crash. Lumpsum is only recommended if you need to make a last-minute investment in March to save tax before the financial year ends.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Do I get ELSS tax benefits in the New Tax Regime?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. The Section 80C deduction, which makes ELSS investments tax-deductible, is exclusively available under the Old Tax Regime. If you have opted for the New Tax Regime, investing in ELSS will not reduce your income tax liability, though it remains a viable wealth-creation tool.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
