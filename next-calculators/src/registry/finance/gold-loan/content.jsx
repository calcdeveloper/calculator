import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why is the bank offering me less money than the market value of my gold?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Reserve Bank of India (RBI) strictly caps the Loan-to-Value (LTV) ratio for gold loans at 75%. This means if your gold is mathematically valued at ₹1,00,000 based on today's purity-adjusted market rate, the absolute maximum a bank or NBFC can legally lend you is ₹75,000. The remaining 25% acts as a mandatory safety margin for the lender."
        }
      },
      {
        "@type": "Question",
        "name": "How does the purity of my jewelry affect my loan amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks do not value 18K gold and 24K gold equally. They mathematically discount the current market price of 24K gold based on the exact karatage of your jewelry. For example, 22K gold is calculated as 22/24 (approx 91.6%) of the 24K price. Furthermore, they completely exclude the weight of any precious stones, gems, or enamel attached to the jewelry."
        }
      },
      {
        "@type": "Question",
        "name": "What is Bullet Repayment in a gold loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Bullet Repayment is a unique structure where you do not pay standard EMIs (which consist of both principal and interest). Instead, you only pay the interest component every month, and you repay the entire principal amount in one single 'bullet' payment at the very end of the loan tenure."
        }
      },
      {
        "@type": "Question",
        "name": "What happens if the price of gold suddenly crashes in the market?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If global gold prices crash, the value of your pledged collateral drops. If it drops so much that your outstanding loan balance exceeds the 75% LTV ratio, the bank will issue a 'margin call.' You will be legally required to deposit emergency cash immediately to bring the ratio back into compliance, or the bank will instantly auction your gold to recover their capital."
        }
      },
      {
        "@type": "Question",
        "name": "Can the bank auction my family jewelry without my permission?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. When you sign a gold loan agreement, you are legally transferring a lien on the asset. If you default on your EMIs or fail to meet a margin call during a price crash, the bank has the absolute legal right to publicly auction your jewelry to recover their dues. Any surplus cash from the auction is returned to you, but the jewelry is gone forever."
        }
      },
      {
        "@type": "Question",
        "name": "Why are gold loans processed so much faster than personal loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Because gold loans are hyper-secured by physical, highly liquid collateral currently sitting in the bank's vault, the bank assumes virtually zero risk. Therefore, they completely bypass the stringent, time-consuming underwriting processes (like verifying CIBIL scores, analyzing ITRs, and conducting background checks) required for unsecured personal loans, resulting in near-instant disbursals."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Gold Loan Calculator: Unlocking the Liquidity of Your Idle Assets</h1>
        <p className="mb-4 text-lg text-gray-600">
          In times of immediate financial distress, medical emergencies, or sudden business working capital requirements, speed is the ultimate currency. Traditional unsecured financing (like personal loans or business loans) requires weeks of underwriting, massive documentation, flawless CIBIL scores, and extensive background checks. 
        </p>
        <p className="mb-4">
          Gold loans, however, represent the most efficient, friction-free liquidity mechanism in the entire global banking system. By pledging your physical gold jewelry as hard collateral to a bank or a Non-Banking Financial Company (NBFC), you completely bypass the slow bureaucracy of credit underwriting. The bank's risk is entirely mitigated by the physical asset sitting in their vault, allowing them to disburse vast amounts of capital in a matter of hours, often without even checking your credit score.
        </p>
        <p className="mb-4">
          However, the mathematics of gold loans are notoriously opaque to the average consumer. Banks do not simply look at your jewelry and hand you cash. They deploy rigorous, algorithmic valuation models. They aggressively discount the weight of stones and enamel, they mathematically adjust the market price based on the exact karat purity (18K vs 22K), and they strictly adhere to the Reserve Bank of India's (RBI) aggressive Loan-to-Value (LTV) limits.
        </p>
        <p className="mb-4">
          Our forensic <strong>Gold Loan Calculator</strong> is explicitly engineered to democratize this valuation process. By inputting the exact weight of your gold, its purity, and the live market price of 24K gold, this tool reverse-engineers the bank's exact valuation algorithm. It reveals the true, mathematically adjusted market value of your collateral, strictly applies the RBI's 75% LTV cap to determine your maximum eligible loan limit, and projects your exact monthly EMI or interest burden.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastering the Tool: How to Calculate Your True Eligibility</h2>
        <p className="mb-4">
          To generate a highly accurate, down-to-the-rupee valuation that perfectly mirrors a bank's internal appraisal system, you must provide the engine with five critical structural inputs:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Weight of Gold (Grams):</strong> Enter the net weight of the gold. <em className="text-red-700">Crucial Warning:</em> Do not enter the gross weight if your jewelry contains diamonds, rubies, or heavy enamel work. The bank's appraiser will forcefully deduct the weight of all non-gold elements. You must enter the estimated net weight of the pure gold component only.</li>
          <li><strong>Gold Purity (Karats):</strong> Standard investment bullion is 24 Karats (99.9% pure), but traditional Indian jewelry is almost universally manufactured in 22 Karats (91.6% pure) to provide necessary structural durability. Contemporary, diamond-studded jewelry is often cast in 18 Karats (75% pure). The bank's algorithm will aggressively discount the valuation if your gold is 18K versus 22K.</li>
          <li><strong>Current 24K Gold Price (per 10g):</strong> The live, prevailing market rate for 24K gold on the exact day you apply for the loan. Banks usually take a 30-day moving average to protect against daily volatility, but the live price provides an incredibly accurate baseline.</li>
          <li><strong>Interest Rate (% p.a.):</strong> The annualized interest rate. Because gold loans are hyper-secured, rates are highly competitive, typically ranging from a highly affordable 8.5% (from PSU banks) to 14% (from rapid-disbursal NBFCs).</li>
          <li><strong>Loan Tenure (Months):</strong> Gold loans are strictly designed as short-term bridge financing. Tenures usually range from a rapid 3 months up to a maximum of 36 months. They are not designed for long-term debt structuring.</li>
        </ul>
        <p className="mt-4">
          Upon execution, the engine will instantly calculate the purity-adjusted market value of your specific asset, apply the harsh 75% RBI regulatory haircut, and generate your true, maximum borrowing power.
        </p>
      </section>

      {/* THE RBI 75% LTV CAP */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The 75% LTV Mandate: Why Banks Refuse to Give You Full Value</h2>
        <p className="mb-4">
          The single most common source of intense frustration for borrowers is walking into a bank with exactly ₹10 Lakhs worth of inherited gold jewelry, fully expecting to walk out with a ₹10 Lakh loan. They are universally shocked when the bank aggressively caps the loan at exactly ₹7.5 Lakhs.
        </p>
        <p className="mb-4">
          This is not the bank attempting to exploit you; it is a strict, non-negotiable regulatory mandate enforced by the Reserve Bank of India (RBI). 
        </p>
        <p className="mb-4 font-bold text-blue-900">
          The RBI strictly caps the Loan-to-Value (LTV) ratio for all gold loans at exactly 75%.
        </p>
        <p className="mb-4">
          Why does this harsh limit exist? It exists to protect the systemic stability of the banking system from the massive volatility of global commodity markets. Gold is an internationally traded commodity; its price fluctuates wildly based on geopolitical tensions, US Federal Reserve interest rate decisions, and global inflation data. 
        </p>
        <p className="mb-4">
          If a bank lent you 100% of the gold's value today (₹10 Lakhs), and the global price of gold crashed by 15% tomorrow, the bank would suddenly hold collateral worth only ₹8.5 Lakhs against a ₹10 Lakh debt. You would have absolutely zero financial incentive to repay the loan; you would simply abandon the gold and walk away with the ₹10 Lakhs, instantly inflicting a massive loss on the bank. 
        </p>
        <p className="mb-4">
          The 25% gap (the margin) ensures that even if the global price of gold suffers a massive correction, the collateral value will almost always remain higher than the outstanding loan balance, forcing the borrower to return and repay the debt to retrieve their valuable family assets.
        </p>
      </section>

      {/* MARGIN CALLS AND AUCTION RISK */}
      <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hidden Danger: Margin Calls and Ruthless Asset Auctions</h2>
        <p className="mb-4">
          While gold loans are incredibly easy to secure, they carry a highly aggressive, hidden risk that catches thousands of uninformed borrowers entirely off guard: <strong>The Margin Call</strong>.
        </p>
        <p className="mb-4">
          Because the bank is legally required to maintain the LTV ratio below 75%, a sudden, catastrophic crash in global gold prices can trigger an automated margin call. 
        </p>
        <p className="mb-4 font-semibold text-lg">
          Example Scenario:
        </p>
        <p className="mb-4">
          You pledge gold mathematically valued at exactly ₹1,00,000. The bank lends you the absolute maximum ₹75,000 (exactly 75% LTV). Three months later, a global macroeconomic shift causes the price of gold to crash by 20%. The true market value of your physical gold sitting in the vault suddenly drops to ₹80,000.
        </p>
        <p className="mb-4">
          Your outstanding loan is still ₹75,000. Therefore, your new LTV ratio is now a staggering 93.75% (75k / 80k). This aggressively violates the RBI mandate. 
        </p>
        <p className="mb-4">
          The bank's automated risk-management software will instantly trigger a margin call. You will receive an aggressive legal notice demanding that you deposit emergency cash (in this case, ₹15,000) within 24 to 48 hours to bring the loan balance down to ₹60,000 (which is 75% of the new ₹80,000 valuation).
        </p>
        <p className="mb-4 font-bold text-red-900 text-xl">
          If you fail to deposit this cash within the strict deadline, the bank will brutally and legally auction your family's jewelry in the open market to recover their capital. 
        </p>
        <p className="mb-4">
          To protect yourself from this devastating scenario, financially astute borrowers never borrow the absolute maximum 75% limit. If you intentionally borrow only 60% of your gold's value, you build a massive, insulated safety buffer that protects your assets against even the most violent commodity market crashes.
        </p>
      </section>

      {/* REPAYMENT STRUCTURES */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Financing: EMI vs. Bullet Repayment</h2>
        <p className="mb-4">
          Unlike rigid home loans, gold loans offer incredibly flexible repayment architectures designed for erratic cash flows. You must choose the structure that aligns perfectly with your liquidity events.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1. The Standard EMI Structure</h3>
        <p className="mb-4">
          This is the traditional amortizing structure modeled by our calculator. Every single month, you pay a fixed amount that includes both the interest for that month and a small portion of the principal. This aggressively reduces your outstanding debt over time, making it highly suitable for salaried professionals who have predictable, recurring monthly income.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. The Bullet Repayment Structure</h3>
        <p className="mb-4">
          This is the most popular, highly aggressive structure utilized by business owners and farmers. Under bullet repayment, you do not pay standard EMIs. Instead, you only pay the absolute minimum interest component every single month. The entire, massive principal amount remains completely untouched until the very last day of the loan tenure, where you must pay it off in one giant, single "bullet" payment. 
        </p>
        <p className="mb-4">
          While bullet repayment provides massive monthly cash flow relief, it requires extreme financial discipline. If you fail to accumulate the massive principal amount by the final day, the bank will immediately seize and auction the asset.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is the bank offering me less money than the market value of my gold?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Reserve Bank of India (RBI) strictly caps the Loan-to-Value (LTV) ratio for gold loans at 75%. This means if your gold is mathematically valued at ₹1,00,000 based on today's purity-adjusted market rate, the absolute maximum a bank or NBFC can legally lend you is ₹75,000. The remaining 25% acts as a mandatory safety margin for the lender.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does the purity of my jewelry affect my loan amount?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Banks do not value 18K gold and 24K gold equally. They mathematically discount the current market price of 24K gold based on the exact karatage of your jewelry. For example, 22K gold is calculated as 22/24 (approx 91.6%) of the 24K price. Furthermore, they completely exclude the weight of any precious stones, gems, or enamel attached to the jewelry.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is Bullet Repayment in a gold loan?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Bullet Repayment is a unique structure where you do not pay standard EMIs (which consist of both principal and interest). Instead, you only pay the interest component every month, and you repay the entire principal amount in one single 'bullet' payment at the very end of the loan tenure.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What happens if the price of gold suddenly crashes in the market?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If global gold prices crash, the value of your pledged collateral drops. If it drops so much that your outstanding loan balance exceeds the 75% LTV ratio, the bank will issue a 'margin call.' You will be legally required to deposit emergency cash immediately to bring the ratio back into compliance, or the bank will instantly auction your gold to recover their capital.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can the bank auction my family jewelry without my permission?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. When you sign a gold loan agreement, you are legally transferring a lien on the asset. If you default on your EMIs or fail to meet a margin call during a price crash, the bank has the absolute legal right to publicly auction your jewelry to recover their dues. Any surplus cash from the auction is returned to you, but the jewelry is gone forever.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why are gold loans processed so much faster than personal loans?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Because gold loans are hyper-secured by physical, highly liquid collateral currently sitting in the bank's vault, the bank assumes virtually zero risk. Therefore, they completely bypass the stringent, time-consuming underwriting processes (like verifying CIBIL scores, analyzing ITRs, and conducting background checks) required for unsecured personal loans, resulting in near-instant disbursals.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
