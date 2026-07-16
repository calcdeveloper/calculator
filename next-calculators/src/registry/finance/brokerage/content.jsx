import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between Intraday and Delivery brokerage?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intraday trading (buying and selling on the same day) usually attracts a flat brokerage fee (e.g., ₹20 per trade) and lower statutory taxes. Delivery trading (holding shares overnight) is often completely free of brokerage at discount brokers like Zerodha, but attracts significantly higher Securities Transaction Tax (STT) and Stamp Duty."
        }
      },
      {
        "@type": "Question",
        "name": "What is STT and why is it so high for delivery?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "STT stands for Securities Transaction Tax. It is a direct tax levied by the Central Government on every stock market transaction. For intraday, it is only 0.025% on the sell side. For delivery, it is a massive 0.1% on BOTH the buy and sell sides. This discourages rapid turnover of delivery shares and acts as a major source of revenue for the government."
        }
      },
      {
        "@type": "Question",
        "name": "Does the calculator include DP (Depository Participant) charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. DP charges (usually around ₹13.5 + GST per scrip per day) are charged by the depository (CDSL/NSDL) when shares leave your Demat account during a delivery sell. Because they are charged per scrip, not per share or per value, they cannot be perfectly calculated dynamically without knowing your portfolio structure. You should subtract roughly ₹16 from your final delivery sell profit to account for DP charges."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my GST so low compared to STT?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GST is 18%, but it is NOT applied to your trade turnover or your STT. GST is only applied to the Brokerage fee, the Exchange Transaction fee, and the SEBI turnover fee. Because these base amounts are very small, the resulting GST is also relatively small."
        }
      },
      {
        "@type": "Question",
        "name": "What are Exchange Transaction Charges?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "These are fees charged directly by the stock exchanges (NSE or BSE) to facilitate the trade on their platform. The NSE standard rate is approximately 0.00325% of the total traded value (turnover)."
        }
      },
      {
        "@type": "Question",
        "name": "Can brokerage wipe out my entire profit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. This is the biggest trap for scalpers and high-frequency traders. If you buy 1,000 shares at ₹100 and sell at ₹100.10, your gross profit is ₹100. However, the brokerage and taxes on a ₹2,00,000 turnover will easily exceed ₹100, leaving you with a net loss."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Brokerage Calculator: Decode Your Hidden Trading Costs</h1>
        <p className="mb-4 text-lg text-gray-600">
          The democratization of the stock market through discount brokers like Zerodha, Upstox, and Groww has led to a massive influx of retail traders. The marketing hook is compelling: "Zero Delivery Brokerage" and "₹20 Flat for Intraday." This has created a dangerous illusion that trading on the Indian stock market is virtually free. 
        </p>
        <p className="mb-4">
          The reality is starkly different. While the broker might only be taking ₹20, they are legally obligated to collect a complex web of statutory taxes and exchange fees on behalf of the government and regulators. These include the Securities Transaction Tax (STT), Exchange Transaction Charges, SEBI Turnover Fees, Stamp Duty, and Goods and Services Tax (GST).
        </p>
        <p className="mb-4">
          For an intraday trader trying to capture small price movements (scalping), or a delivery investor moving large volumes of capital, these "friction costs" can be devastating. Our advanced <strong>Brokerage Calculator</strong> strips away the marketing jargon. It models the exact tax structure used by India's top discount brokers to reveal your true break-even point and exact net profit down to the last paisa.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Brokerage & Tax Calculator</h2>
        <p className="mb-4">
          To uncover the exact friction costs of your trade, input the following parameters:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Trade Type:</strong> Select 'Intraday' if you buy and sell the stock on the exact same day (MIS). Select 'Delivery' if you intend to hold the stock overnight (CNC) and take it into your Demat account.</li>
          <li><strong>Quantity:</strong> Enter the exact number of shares you are trading.</li>
          <li><strong>Buy Price:</strong> The per-share price at which your buy order is executed.</li>
          <li><strong>Sell Price:</strong> The per-share price at which your sell order is executed.</li>
        </ul>
        <p className="mt-4">
          The calculator immediately processes the complex tax math and provides a visual breakdown. You will see your Gross Profit (what you think you made), the Total Taxes & Brokerage (what the system takes), and your actual Net Profit (what you get to keep).
        </p>
      </section>

      {/* ANATOMY OF A TRADE */}
      <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Anatomy of a Trade: Who is Taking Your Money?</h2>
        <p className="mb-4">
          When you execute a ₹1 Lakh trade, it's not just the broker getting paid. Here is the exact breakdown of the 6 entities that take a cut of your capital every time you click "Buy" or "Sell."
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. The Broker (Brokerage)</h3>
        <p className="mb-4">
          This is the fee charged by your trading platform (Zerodha, Angel One, etc.) for providing the software and executing the trade. Under the modern discount broking model, Equity Delivery trades are usually completely free (₹0 brokerage). Intraday trades are charged at 0.03% of the trade value or ₹20 per executed order, whichever is lower.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. The Central Government (STT)</h3>
        <p className="mb-4">
          The Securities Transaction Tax (STT) is a direct tax and usually the largest chunk of your friction costs, especially for delivery trades. For Intraday, the government charges 0.025% only on the sell side. However, for Delivery trades, STT is a massive 0.1% levied on BOTH the buy and the sell side.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. The Stock Exchange (Transaction Charges)</h3>
        <p className="mb-4">
          The National Stock Exchange (NSE) and Bombay Stock Exchange (BSE) charge a fee to facilitate the trade on their digital infrastructure. The standard NSE rate is roughly 0.00325% of the total traded value.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">4. The State Government (Stamp Duty)</h3>
        <p className="mb-4">
          Since July 2020, stamp duty is uniform across India. It is charged only on the buy side of the transaction. For Intraday, it is 0.003%. For Delivery, it jumps to 0.015%. 
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">5. The Regulator (SEBI Charges)</h3>
        <p className="mb-4">
          The Securities and Exchange Board of India (SEBI) charges a microscopic fee of ₹10 for every ₹1 Crore of traded volume (0.0001%) to fund its regulatory operations.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">6. The Tax Department (GST)</h3>
        <p className="mb-4">
          Finally, the government levies 18% GST. Crucially, this 18% is NOT calculated on your trade value or your profit. It is calculated only on the sum of your Brokerage, Exchange Charges, and SEBI fees.
        </p>
      </section>

      {/* CASE STUDIES */}
      <section className="bg-teal-50/50 p-8 rounded-2xl border border-teal-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Intraday vs. Delivery Tax Shock</h2>
        <p className="mb-4">
          To truly understand the impact of these taxes, let's look at the exact same trade executed as Intraday versus Delivery through a standard discount broker.
        </p>
        <p className="mb-4 font-semibold text-gray-800">
          The Setup: Buy 1,000 shares of Reliance at ₹2,500. Sell 1,000 shares at ₹2,510. Total Turnover = ₹50,10,000. Gross Profit = ₹10,000.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Scenario A: Intraday Trade (MIS)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Brokerage:</strong> ₹40 (₹20 buy + ₹20 sell, as the 0.03% calculation exceeds the ₹20 cap).</li>
          <li><strong>STT:</strong> ₹628 (0.025% on the sell value of ₹25.1L).</li>
          <li><strong>Exchange Charges:</strong> ₹162 (0.00325% of ₹50.1L).</li>
          <li><strong>GST:</strong> ₹36 (18% of Brokerage + Exchange + SEBI).</li>
          <li><strong>Stamp Duty:</strong> ₹75 (0.003% on buy value).</li>
          <li><strong>Total Friction Cost:</strong> Roughly ₹941.</li>
          <li><strong>Net Profit:</strong> ₹10,000 - ₹941 = <strong>₹9,059</strong>. (You keep 90% of your gross profit).</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Scenario B: Delivery Trade (CNC)</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Brokerage:</strong> ₹0 (Free delivery model).</li>
          <li><strong>STT:</strong> ₹5,010 (0.1% on BOTH buy and sell value of ₹50.1L).</li>
          <li><strong>Exchange Charges:</strong> ₹162 (Same as intraday).</li>
          <li><strong>GST:</strong> ₹29 (Lower because brokerage is zero).</li>
          <li><strong>Stamp Duty:</strong> ₹375 (0.015% on buy value).</li>
          <li><strong>DP Charges:</strong> ~₹16 (Charged when shares leave demat).</li>
          <li><strong>Total Friction Cost:</strong> Roughly ₹5,592.</li>
          <li><strong>Net Profit:</strong> ₹10,000 - ₹5,592 = <strong>₹4,408</strong>. (You keep less than 45% of your gross profit!)</li>
        </ul>
        <p className="mb-4 font-semibold text-teal-900">
          The Lesson: STT absolutely massacres short-term delivery trades. If you are a swing trader holding for just a few days, you need significantly larger profit margins to break even compared to an intraday trader.
        </p>
      </section>

      {/* THE BREAK-EVEN POINT */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Why You Must Know Your Break-Even Point</h2>
        <p className="mb-4">
          The break-even point is the exact price at which you can exit a trade without losing a single rupee, meaning your gross profit perfectly covers all your taxes and brokerage.
        </p>
        <p className="mb-4">
          For high-volume intraday traders, the break-even is usually a few paise per share. However, for large delivery trades, the break-even point can be surprisingly high. If you buy a stock at ₹1,000 and sell it at ₹1,002 in delivery, you might assume you made a profit. In reality, the STT and Stamp Duty on a ₹1,000 delivery stock will likely consume that entire ₹2 margin, resulting in a net loss.
        </p>
        <p className="mb-4">
          Always use the Brokerage Calculator <em>before</em> executing a trade. Input your intended buy quantity and price, and adjust the sell price until the "Net Profit" hits exactly zero. That is your true floor. Any exit below that number is a guaranteed loss of capital.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between Intraday and Delivery brokerage?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Intraday trading (buying and selling on the same day) usually attracts a flat brokerage fee (e.g., ₹20 per trade) and lower statutory taxes. Delivery trading (holding shares overnight) is often completely free of brokerage at discount brokers like Zerodha, but attracts significantly higher Securities Transaction Tax (STT) and Stamp Duty.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is STT and why is it so high for delivery?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              STT stands for Securities Transaction Tax. It is a direct tax levied by the Central Government on every stock market transaction. For intraday, it is only 0.025% on the sell side. For delivery, it is a massive 0.1% on BOTH the buy and sell sides. This discourages rapid turnover of delivery shares and acts as a major source of revenue for the government.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Does the calculator include DP (Depository Participant) charges?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. DP charges (usually around ₹13.5 + GST per scrip per day) are charged by the depository (CDSL/NSDL) when shares leave your Demat account during a delivery sell. Because they are charged per scrip, not per share or per value, they cannot be perfectly calculated dynamically without knowing your portfolio structure. You should subtract roughly ₹16 from your final delivery sell profit to account for DP charges.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is my GST so low compared to STT?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              GST is 18%, but it is NOT applied to your trade turnover or your STT. GST is only applied to the Brokerage fee, the Exchange Transaction fee, and the SEBI turnover fee. Because these base amounts are very small, the resulting GST is also relatively small.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What are Exchange Transaction Charges?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              These are fees charged directly by the stock exchanges (NSE or BSE) to facilitate the trade on their platform. The NSE standard rate is approximately 0.00325% of the total traded value (turnover).
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can brokerage wipe out my entire profit?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Absolutely. This is the biggest trap for scalpers and high-frequency traders. If you buy 1,000 shares at ₹100 and sell at ₹100.10, your gross profit is ₹100. However, the brokerage and taxes on a ₹2,00,000 turnover will easily exceed ₹100, leaving you with a net loss.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
