import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is Net Profit calculated in stock trading?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Net Profit is calculated by subtracting the Total Cost (Buy Value + Brokerage + Taxes) from the Total Sell Value. It represents the actual, final amount of money that hits your bank account after all fees have been deducted."
        }
      },
      {
        "@type": "Question",
        "name": "What is ROI and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "ROI stands for Return on Investment. It is a percentage that tells you how efficiently your capital was deployed. Making ₹1,000 profit on a ₹10,000 investment (10% ROI) is mathematically superior to making ₹2,000 profit on a ₹1,00,000 investment (2% ROI), even though the absolute rupee profit is lower in the first scenario."
        }
      },
      {
        "@type": "Question",
        "name": "Why did I lose money even though I sold the stock at a higher price?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This is a common trap for new traders. If the price difference between your buy and sell price is very small (e.g., selling at ₹101 after buying at ₹100), the profit might be entirely wiped out by the brokerage fees, STT, Exchange charges, and GST. You must always calculate your break-even point before executing a trade."
        }
      },
      {
        "@type": "Question",
        "name": "Are brokerage fees charged on both buying and selling?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, standard discount brokers charge a flat fee (e.g., ₹20) or a percentage fee every time an order is executed. Therefore, a complete trade (buying and then selling) incurs brokerage charges twice, plus statutory taxes on both legs of the transaction."
        }
      },
      {
        "@type": "Question",
        "name": "How is Long-Term Capital Gains (LTCG) taxed on stocks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you hold a stock for more than 1 year before selling, it qualifies for LTCG. The first ₹1.25 Lakhs of combined equity profit in a financial year is completely tax-free. Any profit above ₹1.25 Lakhs is taxed at a flat rate of 12.5%."
        }
      },
      {
        "@type": "Question",
        "name": "How is Short-Term Capital Gains (STCG) taxed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If you buy and sell a stock within 1 year (but not on the same day), it is classified as a short-term trade. STCG is taxed at a flat rate of 20%, regardless of your income tax slab. Intraday trading (buying and selling on the same day) is treated as speculative business income and taxed at your slab rate."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stock Profit Calculator: Uncover Your True Trading Margins</h1>
        <p className="mb-4 text-lg text-gray-600">
          The stock market is a powerful engine for wealth creation, but it is also a landscape fraught with hidden costs. Millions of retail investors execute buy and sell orders every day, driven by the simple logic of "buy low, sell high." However, the reality of stock trading is mathematically more complex than simply subtracting your buy price from your sell price.
        </p>
        <p className="mb-4">
          Every time you execute a trade, a sophisticated ecosystem of brokers, exchanges, and government bodies takes a microscopic cut of your capital. These include Brokerage Fees, Securities Transaction Tax (STT), Exchange Transaction Charges, SEBI turnover fees, Stamp Duty, and GST. When you are dealing with large volumes or engaging in high-frequency trading, these "friction costs" can rapidly erode your margins, occasionally turning a seemingly profitable trade into a net loss.
        </p>
        <p className="mb-4">
          Our advanced <strong>Stock Profit Calculator</strong> is designed to bring absolute transparency to your trading ledger. By factoring in your exact entry and exit points, along with the precise commission structure of your broker, this tool instantly calculates your <strong>Net Profit</strong> and your true <strong>Return on Investment (ROI)</strong>. Stop guessing your margins and start trading with mathematical certainty.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Stock Profit Calculator</h2>
        <p className="mb-4">
          Calculating your exact net profit is instantaneous. Gather your trade data and input the following metrics:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Number of Shares:</strong> The exact quantity of equity shares you purchased in the transaction.</li>
          <li><strong>Buy Price per Share:</strong> The average price at which your buy order was executed on the exchange.</li>
          <li><strong>Sell Price per Share:</strong> The average price at which you exited the position.</li>
          <li><strong>Total Buy Fees / Brokerage:</strong> Enter the total flat fee or consolidated percentage-based taxes incurred during the buy leg of the trade. (e.g., ₹20 flat fee + ₹5 taxes = ₹25).</li>
          <li><strong>Total Sell Fees / Brokerage:</strong> Enter the consolidated fees incurred during the sell leg of the trade. Note that STT (Securities Transaction Tax) is often higher on the sell side for delivery trades.</li>
        </ul>
        <p className="mt-4">
          Upon entering the data, the calculator immediately processes the friction costs against your gross margins to deliver your <strong>Net Profit / Loss</strong> and your percentage <strong>Return on Investment (ROI)</strong>.
        </p>
      </section>

      {/* THE ILLUSION OF GROSS PROFIT */}
      <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Danger of Gross Profit: Why Traders Bleed Capital</h2>
        <p className="mb-4">
          The most dangerous metric in a novice trader's vocabulary is "Gross Profit." Gross Profit is simply `(Sell Price - Buy Price) * Quantity`. Relying on this metric is the primary reason many intraday and swing traders end the financial year in the red, despite having a high "win rate" on their trades.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">The Micro-Margin Trap</h3>
        <p className="mb-4">
          Consider a trader utilizing a discount broker who charges ₹20 per executed order. The trader buys 100 shares of XYZ Corp at ₹100. The capital deployed is ₹10,000. 
        </p>
        <p className="mb-4">
          An hour later, the stock moves up by a fraction, and the trader sells at ₹100.50. 
          The Gross Profit calculation looks like this: `(100.50 - 100) * 100 = ₹50`. 
          The trader sees green on the screen and feels successful. 
        </p>
        <p className="mb-4">
          <strong>Now, let's calculate the Net Profit:</strong>
          Buy Brokerage = ₹20. Sell Brokerage = ₹20. (Total Brokerage = ₹40). 
          Statutory Taxes (STT, GST, Exchange Fees) = ~₹15. 
          Total Friction Costs = ₹55.
        </p>
        <p className="mb-4 font-semibold text-red-700">
          Net Result: The ₹50 Gross Profit is entirely swallowed by the ₹55 friction cost. The trader has actually suffered a Net Loss of ₹5, despite "winning" the trade directionally.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Understanding the Break-Even Point</h3>
        <p className="mb-4">
          To survive in the stock market, you must calculate your <strong>Break-Even Point</strong> before entering a position. The break-even point is the exact price the stock must reach for your gross profit to perfectly offset all brokerage and taxes. If you are scalping for tiny margins, your break-even point is your most critical survival metric.
        </p>
      </section>

      {/* ROI VS ABSOLUTE PROFIT */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mastering ROI: The Metric of Professional Investors</h2>
        <p className="mb-4">
          While retail investors fixate on the absolute Rupee profit (e.g., "I made ₹5,000 today!"), professional fund managers and institutional investors fixate almost exclusively on <strong>ROI (Return on Investment)</strong>. 
        </p>
        <p className="mb-4">
          ROI measures capital efficiency. It tells you how hard your money is working for you. 
          The formula is: `(Net Profit / Total Capital Deployed) * 100`.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Case Study: The Illusion of Big Numbers</h3>
        <p className="mb-4">
          <strong>Trader A</strong> buys 1,000 shares of a blue-chip stock at ₹2,000 per share. Total capital deployed is ₹20 Lakhs. He sells the stock a week later at ₹2,020. 
          His Net Profit (after assuming ₹1,000 in heavy taxes and fees) is roughly <strong>₹19,000</strong>.
        </p>
        <p className="mb-4">
          <strong>Trader B</strong> buys 500 shares of a mid-cap stock at ₹100 per share. Total capital deployed is ₹50,000. She sells the stock a week later at ₹115.
          Her Net Profit (after assuming ₹100 in fees) is roughly <strong>₹7,400</strong>.
        </p>
        <p className="mb-4">
          To an amateur, Trader A is the superior trader because he made ₹19,000 compared to Trader B's ₹7,400. 
        </p>
        <p className="mb-4 font-semibold text-blue-900">
          The Professional Verdict: 
          Trader A's ROI = (19,000 / 20,00,000) * 100 = <strong>0.95%</strong>.
          Trader B's ROI = (7,400 / 50,000) * 100 = <strong>14.8%</strong>.
        </p>
        <p className="mb-4">
          Trader B's capital deployment is vastly superior. If Trader B had access to the ₹20 Lakh capital that Trader A had, and executed with the exact same 14.8% efficiency, her profit would have been nearly ₹3 Lakhs! ROI normalizes performance, allowing you to objectively grade your trading strategy regardless of your account size.
        </p>
      </section>

      {/* TAXATION ON STOCK PROFITS */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Taxman Cometh: Navigating Stock Market Taxation</h2>
        <p className="mb-4">
          Calculating your net profit after brokerage is only the first hurdle. To understand your true take-home wealth, you must understand how the Income Tax Department classifies your trades. The taxation rules have undergone significant overhauls in recent union budgets.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Long-Term Capital Gains (LTCG)</h3>
        <p className="mb-4">
          If you buy shares in the delivery segment and hold them in your demat account for <strong>more than 12 months</strong>, any profit generated is classified as a Long-Term Capital Gain. 
          Under the latest rules, the government allows a tax exemption on the first ₹1.25 Lakhs of combined LTCG profit in a financial year. Any profit generated above this ₹1.25 Lakh threshold is taxed at a flat rate of <strong>12.5%</strong> (without the benefit of indexation).
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Short-Term Capital Gains (STCG)</h3>
        <p className="mb-4">
          If you buy shares and sell them <strong>within 12 months</strong> (e.g., swing trading or positional trading holding for a few weeks), the profit is classified as a Short-Term Capital Gain. 
          STCG does not enjoy any exemption limits. The entire profit amount is taxed at a flat rate of <strong>20%</strong>, regardless of your personal income tax slab.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Intraday Trading (Speculative Income)</h3>
        <p className="mb-4">
          If you buy and sell shares on the <strong>exact same day</strong> without taking delivery into your demat account, the Income Tax Department classifies this as "Speculative Business Income." 
          Intraday profits are simply added to your total annual income (along with your salary) and taxed according to your applicable <strong>Income Tax Slab Rate</strong>, which can be as high as 30%. Furthermore, intraday losses can only be set off against intraday profits, not against salary or delivery STCG/LTCG.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is Net Profit calculated in stock trading?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Net Profit is calculated by subtracting the Total Cost (Buy Value + Brokerage + Taxes) from the Total Sell Value. It represents the actual, final amount of money that hits your bank account after all fees have been deducted.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is ROI and why is it important?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              ROI stands for Return on Investment. It is a percentage that tells you how efficiently your capital was deployed. Making ₹1,000 profit on a ₹10,000 investment (10% ROI) is mathematically superior to making ₹2,000 profit on a ₹1,00,000 investment (2% ROI), even though the absolute rupee profit is lower in the first scenario.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why did I lose money even though I sold the stock at a higher price?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This is a common trap for new traders. If the price difference between your buy and sell price is very small (e.g., selling at ₹101 after buying at ₹100), the profit might be entirely wiped out by the brokerage fees, STT, Exchange charges, and GST. You must always calculate your break-even point before executing a trade.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Are brokerage fees charged on both buying and selling?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, standard discount brokers charge a flat fee (e.g., ₹20) or a percentage fee every time an order is executed. Therefore, a complete trade (buying and then selling) incurs brokerage charges twice, plus statutory taxes on both legs of the transaction.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is Long-Term Capital Gains (LTCG) taxed on stocks?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you hold a stock for more than 1 year before selling, it qualifies for LTCG. The first ₹1.25 Lakhs of combined equity profit in a financial year is completely tax-free. Any profit above ₹1.25 Lakhs is taxed at a flat rate of 12.5%.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is Short-Term Capital Gains (STCG) taxed?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If you buy and sell a stock within 1 year (but not on the same day), it is classified as a short-term trade. STCG is taxed at a flat rate of 20%, regardless of your income tax slab. Intraday trading (buying and selling on the same day) is treated as speculative business income and taxed at your slab rate.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
