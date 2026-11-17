import React from 'react';
import Link from 'next/link';

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
          "text": "Net Profit equals Gross Sell Turnover minus Gross Buy Turnover, minus all transaction friction costs. These friction costs include buy-side and sell-side brokerage, Securities Transaction Tax (STT), exchange transaction turnover fees, SEBI turnover fees, state stamp duty, 18% GST on service charges, and Depository Participant (DP) debit charges on delivery sales."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between Return on Investment (ROI) and Absolute Profit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolute Profit measures the total rupee gain or loss on a position. Return on Investment (ROI) measures capital efficiency as a percentage: Net Profit divided by Total Capital Outlay (including buy-side transaction friction) multiplied by 100. ROI normalizes performance, proving that earning ₹2,000 on ₹20,000 capital (10% ROI) is more efficient than earning ₹5,000 on ₹5,00,000 capital (1% ROI)."
        }
      },
      {
        "@type": "Question",
        "name": "Why can a stock sold at a higher price result in a net realized loss?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "This occurs due to transaction friction and the micro-margin trap. When the price spread between entry and exit is narrow, cumulative friction—such as two-way brokerage, STT, exchange levies, GST, and flat DP debit fees—exceeds the gross capital gain, resulting in a net cash loss despite a positive directional trade."
        }
      },
      {
        "@type": "Question",
        "name": "Are brokerage and exchange fees charged on both buying and selling legs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every stock trade involves two distinct executions. Brokerage, exchange turnover fees, SEBI fees, and 18% GST apply to both buy and sell legs. However, state stamp duty applies strictly to the purchase leg, while Depository Participant (DP) debit fees apply exclusively to the sell leg of equity delivery trades."
        }
      },
      {
        "@type": "Question",
        "name": "How is Long-Term Capital Gains (LTCG) taxed on listed equity shares post-Budget 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under amended Section 112A from Budget 2024, equity shares held for more than 12 months qualify for LTCG. Aggregate equity LTCG up to ₹1,25,000 per financial year is completely tax-exempt. Profits exceeding ₹1.25 Lakhs are taxed at a flat rate of 12.5% plus cess, without indexation benefits."
        }
      },
      {
        "@type": "Question",
        "name": "How is Short-Term Capital Gains (STCG) taxed on listed equities post-Budget 2024?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Under amended Section 111A from Budget 2024, listed equity shares held for 12 months or less and sold with STT paid are classified as STCG. STCG is taxed at a flat rate of 20% (increased from 15%) plus applicable surcharge and 4% cess, irrespective of individual income tax brackets."
        }
      },
      {
        "@type": "Question",
        "name": "How is intraday stock trading taxed in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Intraday trading without taking demat delivery is classified under Section 43(5) as Speculative Business Income. Net intraday profits are added to your overall taxable income and taxed at your marginal slab rate (up to 30% plus cess). Intraday losses can only offset speculative profits and be carried forward for 4 assessment years."
        }
      },
      {
        "@type": "Question",
        "name": "What are Depository Participant (DP) charges, and how are they billed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "DP charges are flat administrative debit fees levied by depositories (CDSL or NSDL) and your broker when shares are debited from your demat account upon a delivery sale. The fee ranges from ₹13.50 to ₹20 plus 18% GST per company per trading day, regardless of share volume sold."
        }
      },
      {
        "@type": "Question",
        "name": "What is Securities Transaction Tax (STT), and how do delivery and intraday rates differ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "STT is a direct federal transaction levy. For delivery trades, STT is 0.1% on buy turnover and 0.1% on sell turnover. For intraday trades, STT is 0% on the buy leg and 0.025% on sell turnover."
        }
      },
      {
        "@type": "Question",
        "name": "How do you calculate the exact break-even sell price for an equity trade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The break-even price is the exit price where Net Profit equals zero. It is calculated by adding buy-side friction, fixed brokerage for both legs, and all sell-side turnover taxes (STT, exchange fees, SEBI, GST) to the buy capital, divided by the net recoverable unit multiplier."
        }
      },
      {
        "@type": "Question",
        "name": "Does India have a Wash Sale Rule like the United States?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike the United States IRS 30-day wash-sale rule, the Indian Income Tax Act does not contain a statutory clause explicitly disallowing capital losses if the same equity share is repurchased immediately. However, Section 94 contains anti-avoidance dividend stripping and bonus stripping rules, and assessing officers can invoke General Anti-Avoidance Rules (GAAR) if transactions lack commercial substance or constitute sham circular trades executed solely to fabricate artificial losses."
        }
      },
      {
        "@type": "Question",
        "name": "How are bonus shares, stock splits, and dividends treated for equity tax purposes?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In a stock split, total acquisition cost remains constant while per-share cost basis decreases proportionally with the expanded share count. For bonus shares, the statutory cost of acquisition is zero under Section 55; upon sale, the full liquidation value constitutes taxable capital gain. Dividends do not adjust capital gains cost basis; they are credited to your bank account and taxed as Income from Other Sources at your personal slab rate."
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

      {/* SECTION 1: EXECUTIVE OVERVIEW & MATHEMATICAL ANATOMY */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Stock Profit Calculator: Master Net Trade Profit, Brokerage Friction &amp; True ROI
        </h1>
        <p className="mb-4 text-lg text-gray-600 leading-relaxed">
          In secondary financial markets, the foundational investing adage is deceptively simple: <em>&quot;buy low, sell high.&quot;</em> Every day, hundreds of thousands of retail market participants monitor ticker charts and company filings, executing equity trades under the assumption that liquidating shares above purchase price guarantees profit. However, in professional quantitative portfolio management, gross price appreciation is merely an intermediate baseline. What truly determines capital growth is <strong>Net Realized Profit</strong> and net <strong>Return on Investment (ROI)</strong> after absorbing multi-layered transaction friction.
        </p>
        <p className="mb-4">
          Whenever an equity order executes across a centralized clearinghouse such as the National Stock Exchange of India (NSE) or the Bombay Stock Exchange (BSE), it traverses an intricate statutory, regulatory, and brokerage superstructure. Every buy and sell order incurs mandatory charges: broker commissions, federal Securities Transaction Tax (STT), exchange turnover levies, clearing fees, state stamp duties governed by the Indian Stamp Act, Goods and Services Tax (GST at 18%), Depository Participant (DP) debit charges, and SEBI regulatory turnover charges.
        </p>
        <p className="mb-4">
          When retail participants ignore this structural drag—commonly known as <strong>transaction friction</strong> or <em>&quot;brokerage drag&quot;</em>—they fall victim to the micro-margin trap. A trader purchasing 1,000 shares of a firm at ₹150 and exiting at ₹150.50 sees a nominal gross gain of ₹500. Yet, after absorbing two-way brokerage, statutory levies, exchange fees, and taxes, the trader frequently finds a net debit on their contract note, subsidizing market infrastructure at a personal cash loss.
        </p>
        <p className="mb-4">
          Our <strong>Stock Profit Calculator</strong> provides complete mathematical clarity for delivery investors, swing position traders, and intraday scalpers alike. By decomposing gross capital outlay, entry valuation, exit valuation, broker commission rates, and statutory tax charges, this tool computes absolute net cash profit, percentage Return on Investment, and exact trade break-even thresholds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6 text-xs md:text-sm">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <span className="font-bold text-slate-800 block mb-1">Gross Equity Turnover</span>
            <span className="text-gray-600">Quantity multiplied by price on both legs. Establishes the turnover baseline for ad-valorem taxes.</span>
          </div>
          <div className="bg-red-50 p-4 rounded-xl border border-red-200">
            <span className="font-bold text-red-800 block mb-1">Cumulative Trade Friction</span>
            <span className="text-gray-600">The combined sum of brokerage, STT, exchange fees, SEBI turnover fees, stamp duty, 18% GST, and DP charges.</span>
          </div>
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
            <span className="font-bold text-emerald-800 block mb-1">Net Realized Cash Flow</span>
            <span className="text-gray-600">The pure net liquid capital credited to your trading account, determining true portfolio Return on Investment.</span>
          </div>
        </div>
      </section>

      {/* SECTION 2: FRICTION COST ARCHITECTURE & STATUTORY MECHANICS */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          The Anatomy of Trade Friction: Statutory Levies, Brokerage &amp; Depository Mechanics
        </h2>
        <p className="mb-4">
          To master equity profitability, an investor must understand their trade contract note. A contract note is a legally binding statement issued by registered stockbrokers at the close of each trading day, detailing executed trades and itemizing mandatory fees. Transaction friction in equity markets is categorized into three tiers: broker commissions, regulatory/exchange levies, and statutory taxation.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. Brokerage Commissions (Flat vs. Percentage Models)</h3>
        <p className="mb-4">
          Brokerage represents the direct commercial fee charged by a SEBI-registered broker for routing client orders to exchange matching engines. In the modern landscape, two primary fee architectures exist:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Discount Brokerage (Flat Fee Structure):</strong> Discount brokers typically charge zero brokerage on delivery trades, or a flat fee of ₹20 (or 0.05% of turnover, whichever is lower) per executed order for intraday equity trades. Because the charge is fixed per order rather than scalable with order size, flat-fee structures favor larger trades while penalizing small-ticket transactions.
          </li>
          <li>
            <strong>Full-Service Brokerage (Percentage Turnover Structure):</strong> Traditional full-service institutions charge an ad-valorem fee ranging from 0.10% to 0.50% of gross turnover on delivery trades, and 0.02% to 0.05% on intraday positions. While offering research reports and relationship managers, percentage models extract substantial capital from larger trades, raising the required break-even hurdle.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2. Securities Transaction Tax (STT)</h3>
        <p className="mb-4">
          Enacted under the Finance (No. 2) Act, 2004, STT is a direct federal levy designed to capture tax on financial market transactions at the source. STT rates vary by trading segment:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3">Equity Trading Segment</th>
                <th className="p-3">Buy Leg STT Rate</th>
                <th className="p-3">Sell Leg STT Rate</th>
                <th className="p-3">Statutory Base</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-medium">Equity Delivery (Cash / CNC)</td>
                <td className="p-3 text-red-600 font-semibold">0.10% (10 bps)</td>
                <td className="p-3 text-red-600 font-semibold">0.10% (10 bps)</td>
                <td className="p-3">Total Value of Shares Bought &amp; Sold</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Equity Intraday (Cash / MIS)</td>
                <td className="p-3 text-gray-400 font-semibold">0.00% (Nil)</td>
                <td className="p-3 text-red-600 font-semibold">0.025% (2.5 bps)</td>
                <td className="p-3">Total Value of Shares Sold Only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Equity Futures (Derivatives)</td>
                <td className="p-3 text-gray-400 font-semibold">0.00% (Nil)</td>
                <td className="p-3 text-red-600 font-semibold">0.02% (2 bps post-Budget 2024)</td>
                <td className="p-3">Total Notional Turnover Sold</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Equity Options (Premium)</td>
                <td className="p-3 text-gray-400 font-semibold">0.00% (Nil)</td>
                <td className="p-3 text-red-600 font-semibold">0.10% (10 bps post-Budget 2024)</td>
                <td className="p-3">Total Option Premium Turnover Sold</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          <em>Operational Note:</em> For delivery trades, STT applies symmetrically to both buy and sell legs. On a round-trip position of ₹10,00,000 buy turnover and ₹12,00,000 sell turnover, STT claims ₹1,000 on entry and ₹1,200 on exit—a combined statutory deduction of ₹2,200 regardless of net profit or loss.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3. Exchange Transaction Charges &amp; Clearing Fees</h3>
        <p className="mb-4">
          Recognized stock exchanges (NSE and BSE) charge transaction fees to support clearing, settlement, matching engine infrastructure, and risk management systems. For equity cash segments, the standard NSE transaction charge is approximately <strong>0.00297%</strong> (₹2.97 per ₹1,00,000 of turnover). BSE maintains tiered transaction schedules depending on the specific equity scrip group.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">4. SEBI Regulatory Turnover Fees</h3>
        <p className="mb-4">
          The Securities and Exchange Board of India (SEBI) imposes a regulatory turnover fee across all market segments to fund nationwide securities supervision and investor protection initiatives. The standard SEBI fee is <strong>₹10 per crore of turnover</strong> (0.0001% or ₹1 per ₹10,00,000). While minimal on individual retail trades, it compounds across high-frequency strategies.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">5. State Stamp Duty (Indian Stamp Act, 1899)</h3>
        <p className="mb-4">
          Under nationwide amendments to the Indian Stamp Act, 1899, stamp duties on financial instruments are uniform across all Indian states:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Equity Delivery Buy Orders:</strong> Charged at <strong>0.015%</strong> (₹1,500 per crore or ₹15 per ₹1,00,000) on purchase turnover.</li>
          <li><strong>Equity Intraday Buy Orders:</strong> Charged at <strong>0.003%</strong> (₹300 per crore or ₹3 per ₹1,00,000) on purchase turnover.</li>
          <li><strong>Sell Orders:</strong> <strong>Zero stamp duty</strong> applies to all equity sell transactions across delivery and intraday modes.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">6. Depository Participant (DP) Debit Charges</h3>
        <p className="mb-4">
          Depository Participant (DP) charges represent a critical friction line item in delivery investing. When you buy delivery shares, they are credited to your depository account maintained with CDSL or NSDL. When you sell those shares, the depository debits the electronic shares from your demat account to facilitate exchange settlement.
        </p>
        <p className="mb-4">
          For this debit service, the depository and your broker charge a fixed flat fee per company (ISIN) per trading day. CDSL charges ₹3.50 plus broker markup, yielding a standard total fee of <strong>₹13.50 to ₹20 plus 18% GST</strong> (₹15.93 to ₹23.60) per transaction.
        </p>
        <p className="mb-4 text-amber-900 bg-amber-50 p-4 rounded-xl border border-amber-200">
          <strong>Key Execution Rule:</strong> DP charges are fixed per company per day. Selling 1 share of a stock incurs ~₹15.93 in DP charges, and selling 5,000 shares in one day incurs the exact same ~₹15.93. However, selling 10 shares across three separate days incurs three separate DP debits (~₹47.79 total). Selling small lots across multiple days significantly degrades net returns.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">7. Goods and Services Tax (GST at 18%)</h3>
        <p className="mb-4">
          Financial brokerage and exchange clearing services attract 18% GST. GST does not apply to trade turnover or stock prices. It is levied strictly on service fee components:
        </p>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-sm font-mono my-2 text-center">
          GST = 18% × (Brokerage + Exchange Transaction Charges + SEBI Turnover Fees)
        </div>
        <p className="text-xs text-gray-500 mt-1">
          <em>Note:</em> STT and State Stamp Duty are statutory government levies and exempt from GST. DP charges attract an independent 18% GST on the depository debit invoice.
        </p>
      </section>

      {/* SECTION 3: MATHEMATICAL FORMULAS, BREAK-EVEN & ROI */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Mathematical Formulation: Net Profit, Break-Even Engineering &amp; ROI Mechanics
        </h2>
        <p className="mb-4">
          Systematic trading requires replacing guesswork with deterministic calculations. Every equity position can be formalized through exact mathematical formulas balancing capital deployment against transaction friction.
        </p>

        <div className="bg-slate-900 text-slate-100 p-6 rounded-2xl space-y-4 my-6 font-mono text-sm leading-relaxed">
          <p className="text-emerald-400 font-bold">// 1. Gross Turnover Equations</p>
          <p>Gross Buy Turnover (T_buy) = Quantity (Q) × Buy Price (P_buy)</p>
          <p>Gross Sell Turnover (T_sell) = Quantity (Q) × Sell Price (P_sell)</p>
          <p>Gross Nominal Profit (G) = T_sell - T_buy = Q × (P_sell - P_buy)</p>
          
          <p className="text-emerald-400 font-bold pt-2">// 2. Total Friction Costs Equation (F_total)</p>
          <p>F_total = B_buy + B_sell + STT_total + Exch_total + SEBI_total + Stamp + DP + GST_total</p>
          
          <p className="text-emerald-400 font-bold pt-2">// 3. Net Realized Trade Profit Equation (P_net)</p>
          <p>P_net = T_sell - (T_buy + F_total) = G - F_total</p>

          <p className="text-emerald-400 font-bold pt-2">// 4. True Net Return on Investment (ROI_net)</p>
          <p>ROI_net (%) = [ P_net / (T_buy + F_buy) ] × 100</p>
        </div>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Deriving the Exact Break-Even Price Formula</h3>
        <p className="mb-4">
          The break-even price is the exact per-share price at which an investor liquidates an equity position such that realized net profit equals zero (P_net = 0). To derive this, gross price gain must perfectly offset cumulative friction costs.
        </p>
        <p className="mb-4">
          Let Q represent share quantity, P_buy purchase price, and P_be the target break-even exit price. Let c_fixed represent all flat transaction fees (buy brokerage, sell brokerage, DP charges). Let r_buy represent the aggregate percentage tax rate on buy turnover (Buy STT + Buy Exchange Fees + Stamp Duty + SEBI + 18% GST). Let r_sell represent the aggregate percentage rate on sell turnover (Sell STT + Sell Exchange Fees + SEBI + 18% GST).
        </p>
        <p className="mb-4">
          Total capital outlay to establish and liquidate the position is:
        </p>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-sm font-mono my-2 text-center text-gray-800">
          Total Outlay = [ Q × P_buy × (1 + r_buy) ] + c_fixed
        </div>
        <p className="mb-4">
          Net cash recovered upon liquidation at break-even price P_be is:
        </p>
        <div className="bg-white p-4 rounded-xl border border-gray-200 text-sm font-mono my-2 text-center text-gray-800">
          Net Recovery = Q × P_be × (1 - r_sell)
        </div>
        <p className="mb-4">
          Equating Net Recovery to Total Outlay and solving for P_be yields:
        </p>
        <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 text-sm font-mono my-3 text-center text-blue-900 font-bold">
          P_be = [ Q × P_buy × (1 + r_buy) + c_fixed ] / [ Q × (1 - r_sell) ]
        </div>
        <p className="mb-4">
          For standard Indian equity delivery using a discount broker:
          r_buy ≈ 0.1185%, r_sell ≈ 0.1035%, and c_fixed ≈ ₹15.93 (DP charge).
        </p>
        <p className="mb-4">
          This mathematical reality explains why trading low-priced penny stocks in small quantities creates structural hurdles. Buying 50 shares of a firm at ₹20 per share (₹1,000 outlay) means the fixed ₹15.93 DP charge alone represents a <strong>1.59%</strong> friction hurdle, requiring the stock to appreciate over 2.0% just to break even. Conversely, deploying ₹2,00,000 into the same stock reduces DP friction to 0.008%, enabling break-even on minimal price movement.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Absolute ROI vs. Compounded Annual Growth Rate (CAGR)</h3>
        <p className="mb-4">
          While Return on Investment measures static capital efficiency, institutional asset managers evaluate returns through time-weighted velocity. A 10% net ROI appears attractive, but if the holding period was 36 months, its Compounded Annual Growth Rate (CAGR) is 3.23%—underperforming fixed deposits or provident fund returns.
        </p>
        <p className="mb-4">
          Conversely, a swing trade generating a 3.5% net ROI over a 14-day holding period represents an annualized run-rate exceeding 140% if capital can be consistently recycled at similar expectancy. However, as portfolio turnover velocity rises, cumulative transaction friction scales proportionally, demanding disciplined position sizing.
        </p>
      </section>

      {/* SECTION 4: REAL-WORLD WORKED CASE STUDIES */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Real-World Case Studies: Mathematical Dissection of Equity Trades
        </h2>
        <p className="mb-6">
          To illustrate how statutory friction, capital gains taxation, and holding horizons interact to govern net realized returns, examine three comprehensive worked scenarios across different market segments.
        </p>

        {/* Case Study 1 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Case Study 1: The Long-Term Delivery Investor (Budget 2024 LTCG Rules)</h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-full">Equity Delivery (CNC)</span>
          </div>
          <p className="text-sm mb-4">
            <strong>Profile &amp; Trade Setup:</strong> Rohan purchases 400 shares of a manufacturing leader at ₹1,500 per share via a discount broker. Rohan holds the shares for 15 months (qualifying for LTCG) and sells at ₹1,950 per share. Rohan has already exhausted his ₹1,25,000 annual equity LTCG exemption threshold on mutual fund redemptions earlier in the financial year.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-4 bg-slate-50 p-4 rounded-lg">
            <div>
              <p className="font-bold text-slate-800 mb-1">Buy Leg Capital Breakdown:</p>
              <p>• Quantity: 400 shares @ ₹1,500 = ₹6,00,000.00</p>
              <p>• Brokerage (Delivery CNC): ₹0.00</p>
              <p>• Securities Transaction Tax (STT @ 0.1%): ₹600.00</p>
              <p>• Exchange Txn Charge (NSE @ 0.00297%): ₹17.82</p>
              <p>• State Stamp Duty (@ 0.015%): ₹90.00</p>
              <p>• SEBI Turnover Fee (@ ₹10/Cr): ₹0.60</p>
              <p>• GST (18% on Exch + SEBI): ₹3.32</p>
              <p className="font-semibold text-slate-900 pt-1">Total Effective Buy Outlay: ₹6,00,711.74</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-1">Sell Leg Liquidation Breakdown:</p>
              <p>• Quantity: 400 shares @ ₹1,950 = ₹7,80,000.00</p>
              <p>• Brokerage (Delivery CNC): ₹0.00</p>
              <p>• Securities Transaction Tax (STT @ 0.1%): ₹780.00</p>
              <p>• Exchange Txn Charge (NSE @ 0.00297%): ₹23.17</p>
              <p>• Depository Participant (DP) Charge: ₹15.93</p>
              <p>• SEBI Turnover Fee (@ ₹10/Cr): ₹0.78</p>
              <p>• GST (18% on Exch + SEBI): ₹4.31</p>
              <p className="font-semibold text-slate-900 pt-1">Net Cash Realized on Sell: ₹7,79,175.81</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 text-sm space-y-1">
            <p><strong>Gross Capital Gain:</strong> ₹7,80,000 - ₹6,00,000 = ₹1,80,000.00</p>
            <p><strong>Total Transaction Friction:</strong> ₹711.74 + ₹824.19 = ₹1,535.93</p>
            <p><strong>Net Pre-Tax Realized Profit:</strong> ₹7,79,175.81 - ₹6,00,711.74 = <strong>₹1,78,464.07</strong></p>
            <p><strong>Pre-Tax Return on Investment (ROI):</strong> (₹1,78,464.07 / ₹6,00,711.74) × 100 = <strong>29.71%</strong></p>
            <p><strong>Post-Budget 2024 LTCG Tax (12.5% + 4% Cess = 13.00%):</strong> ₹1,78,464.07 × 13.00% = ₹23,200.33</p>
            <p className="font-bold text-emerald-800 pt-1">Final Post-Tax In-Pocket Wealth: ₹1,55,263.74 (Net Post-Tax ROI: 25.85%)</p>
          </div>
        </div>

        {/* Case Study 2 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Case Study 2: The Intraday Scalper (The Micro-Margin Trap)</h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full">Equity Intraday (MIS)</span>
          </div>
          <p className="text-sm mb-4">
            <strong>Profile &amp; Trade Setup:</strong> Ankit executes an intraday momentum scalp. Using margin leverage, he buys 1,500 shares of a mid-cap banking stock at ₹280.00. Fifteen minutes later, the stock rises by ₹0.80, and Ankit squares off at ₹280.80. Ankit calculates his gross gain as 1,500 × ₹0.80 = ₹1,200.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono mb-4 bg-slate-50 p-4 rounded-lg">
            <div>
              <p className="font-bold text-slate-800 mb-1">Buy Leg Execution (MIS):</p>
              <p>• Gross Buy Value: 1,500 × ₹280 = ₹4,20,000.00</p>
              <p>• Flat Brokerage (Discount Broker): ₹20.00</p>
              <p>• STT (Intraday Buy = Nil): ₹0.00</p>
              <p>• Exchange Txn Charge (0.00297%): ₹12.47</p>
              <p>• State Stamp Duty (0.003%): ₹12.60</p>
              <p>• SEBI Turnover Fee: ₹0.42</p>
              <p>• GST (18% on ₹20 + ₹12.47 + ₹0.42): ₹5.92</p>
              <p className="font-semibold text-slate-900 pt-1">Buy Leg Subtotal: ₹51.41</p>
            </div>
            <div>
              <p className="font-bold text-slate-800 mb-1">Sell Leg Execution (MIS):</p>
              <p>• Gross Sell Value: 1,500 × ₹280.80 = ₹4,21,200.00</p>
              <p>• Flat Brokerage (Discount Broker): ₹20.00</p>
              <p>• STT (Intraday Sell @ 0.025%): ₹105.30</p>
              <p>• Exchange Txn Charge (0.00297%): ₹12.51</p>
              <p>• DP Charges (No delivery taken): ₹0.00</p>
              <p>• SEBI Turnover Fee: ₹0.42</p>
              <p>• GST (18% on ₹20 + ₹12.51 + ₹0.42): ₹5.93</p>
              <p className="font-semibold text-slate-900 pt-1">Sell Leg Subtotal: ₹144.16</p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-3 text-sm space-y-1">
            <p><strong>Gross Trading Spread:</strong> ₹4,21,200.00 - ₹4,20,000.00 = ₹1,200.00</p>
            <p><strong>Total Intraday Friction Costs:</strong> ₹51.41 + ₹144.16 = ₹195.57</p>
            <p><strong>Actual Net Realized Profit:</strong> ₹1,200.00 - ₹195.57 = <strong>₹1,004.43</strong></p>
            <p className="text-xs text-gray-600">
              <em>Critical Takeaway:</em> Friction consumed <strong>16.30%</strong> of gross profit. If the stock had moved by only ₹0.15 (Gross gain: ₹225), friction would have consumed 86.9% of gains. If the stock gained ₹0.10 (Gross gain: ₹150), Ankit would face a net cash loss of ₹45.57 despite an upward trade.
            </p>
          </div>
        </div>

        {/* Case Study 3 */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-900">Case Study 3: The Positional Swing Trader (Tranche Exits &amp; STCG)</h3>
            <span className="text-xs font-semibold px-2.5 py-1 bg-purple-100 text-purple-800 rounded-full">Swing Trading (STCG 20%)</span>
          </div>
          <p className="text-sm mb-4">
            <strong>Profile &amp; Trade Setup:</strong> Priya identifies a breakout pattern and purchases 1,000 shares of a tech firm at ₹450 per share (₹4,50,000 outlay). To de-risk, she scales out in two tranches on different calendar days within 3 months: Tranche 1 (500 shares at ₹490 on Day 22) and Tranche 2 (500 shares at ₹530 on Day 65).
          </p>

          <div className="space-y-2 text-xs font-mono bg-slate-50 p-4 rounded-lg mb-4">
            <p>• Buy Leg Outlay: 1,000 shares @ ₹450 = ₹4,50,000 + ₹533.79 (Buy Friction) = ₹4,50,533.79</p>
            <p>• Sell Tranche 1: 500 shares @ ₹490 = ₹2,45,000.00</p>
            <p>  - Sell Friction 1: STT (₹245) + Exch (₹7.28) + SEBI (₹0.25) + DP (₹15.93) + GST (₹4.18) = ₹272.64</p>
            <p>  - Net Tranche 1 Cash Realized: ₹2,44,727.36</p>
            <p>• Sell Tranche 2: 500 shares @ ₹530 = ₹2,65,000.00</p>
            <p>  - Sell Friction 2: STT (₹265) + Exch (₹7.87) + SEBI (₹0.27) + DP (₹15.93) + GST (₹4.29) = ₹293.36</p>
            <p>  - Net Tranche 2 Cash Realized: ₹2,64,706.64</p>
          </div>

          <div className="border-t border-gray-100 pt-3 text-sm space-y-1">
            <p><strong>Total Gross Liquidation:</strong> ₹2,45,000 + ₹2,65,000 = ₹5,10,000.00 (Gross Gain: ₹60,000)</p>
            <p><strong>Total Trade Friction (Including Double DP Charges):</strong> ₹533.79 + ₹272.64 + ₹293.36 = ₹1,099.79</p>
            <p><strong>Net Realized Pre-Tax Gain:</strong> ₹5,09,434.00 - ₹4,50,533.79 = <strong>₹58,900.21</strong></p>
            <p><strong>Post-Budget 2024 STCG Tax (Section 111A flat 20% + 4% Cess = 20.80%):</strong> ₹58,900.21 × 20.80% = ₹12,251.24</p>
            <p className="font-bold text-purple-900 pt-1">Final Net Bank Surplus: ₹46,648.97 (Net Realized Post-Tax ROI: 10.35% in 65 days)</p>
          </div>
        </div>
      </section>

      {/* SECTION 5: ADVANCED STRATEGY, TAX HARVESTING & CAPITAL ALLOCATION */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Advanced Equity Engineering: Budget 2024 Tax Reforms, Harvesting &amp; Risk Sizing
        </h2>
        <p className="mb-4">
          Sustained profitability requires pairing transactional math with statutory tax structuring and rigorous risk management. Without strategic tax planning, fiscal year-end liabilities can severely erode nominal trading returns.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">The Union Budget 2024 Capital Gains Overhaul</h3>
        <p className="mb-4">
          The Finance Act, 2024 restructured India&apos;s capital gains tax regime. For equity investors and active traders, three statutory alterations redefine net portfolio economics:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Short-Term Capital Gains (Section 111A) Increased to 20%:</strong> The tax rate on short-term equity capital gains rose from 15% to a flat <strong>20%</strong> (effective July 23, 2024). This increase widens the performance hurdle between short-term swing trading and multi-year holding.
          </li>
          <li>
            <strong>Long-Term Capital Gains (Section 112A) Raised to 12.5%:</strong> The statutory LTCG rate on listed equities held for more than 12 months increased from 10% to <strong>12.5%</strong>.
          </li>
          <li>
            <strong>Expansion of Annual LTCG Exemption to ₹1.25 Lakhs:</strong> Offsetting the higher LTCG rate, the annual baseline tax exemption threshold under Section 112A expanded from ₹1,00,000 to <strong>₹1,25,000</strong>. Investors can harvest up to ₹1.25 Lakhs of long-term equity profits every fiscal year completely tax-free.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Tax-Loss Harvesting: Systematic Offset Mechanics</h3>
        <p className="mb-4">
          Tax-loss harvesting is a wealth-preservation strategy deployed in the final quarter of the financial year (January through March). Under Indian tax law:
        </p>
        <div className="overflow-x-auto my-4">
          <table className="w-full text-left text-sm border-collapse bg-white rounded-lg shadow-sm border border-gray-200">
            <thead className="bg-gray-100 text-gray-900 font-semibold border-b border-gray-200">
              <tr>
                <th className="p-3">Loss Incurred</th>
                <th className="p-3">Eligible Offsets in Same FY</th>
                <th className="p-3">Carry Forward Horizon</th>
                <th className="p-3">Carry Forward Offset Eligibility</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700">
              <tr>
                <td className="p-3 font-medium">Short-Term Capital Loss (STCL)</td>
                <td className="p-3 text-emerald-700 font-semibold">Both STCG (20%) and LTCG (12.5%)</td>
                <td className="p-3">Up to 8 Assessment Years</td>
                <td className="p-3">Both STCG and LTCG</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Long-Term Capital Loss (LTCL)</td>
                <td className="p-3 text-amber-700 font-semibold">Strictly LTCG (12.5%) Only</td>
                <td className="p-3">Up to 8 Assessment Years</td>
                <td className="p-3">Strictly LTCG Only</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Speculative Loss (Intraday)</td>
                <td className="p-3 text-red-700 font-semibold">Strictly Speculative Intraday Profits</td>
                <td className="p-3">Up to 4 Assessment Years</td>
                <td className="p-3">Strictly Speculative Business Profits</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-4 text-sm text-gray-600">
          <em>Operational Execution:</em> If you realized ₹3,00,000 in short-term gains (attracting ₹60,000 in STCG tax), but hold an unrealized loss of ₹1,00,000 in an underperforming equity holding, liquidating that position before March 31 reduces net taxable STCG to ₹2,00,000, immediately saving ₹20,000 in cash taxes.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Position Sizing &amp; The 1% Account Risk Rule</h3>
        <p className="mb-4">
          Professional risk management separates <strong>Position Size</strong> (total capital allocated to a stock trade) from <strong>Account Risk</strong> (the maximum acceptable loss if a stop-loss is triggered). Under the 1% Rule, a trader never risks more than 1% of total portfolio equity on any individual trade.
        </p>
        <p className="mb-4">
          The formula to derive optimal share quantity based on account risk is:
        </p>
        <div className="bg-slate-900 text-emerald-400 p-4 rounded-xl font-mono text-sm text-center my-3">
          Allowable Share Quantity = (Total Account Capital × 1%) / (Entry Price - Stop Loss Price)
        </div>
        <p className="mb-4">
          For example, in a ₹10,00,000 portfolio, 1% account risk equals ₹10,000. If entering a stock at ₹500 with a stop-loss at ₹480 (a ₹20 per share risk), allowable position size is ₹10,000 / ₹20 = 500 shares (₹2,50,000 gross position). If the trade fails, the portfolio loses exactly 1.0% plus minor friction, preserving capital to compound across future opportunities.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Direct Stock Picking vs. Mutual Funds: Structural Friction Comparison</h3>
        <p className="mb-4">
          Retail investors frequently weigh active equity trading against diversified mutual funds. While direct stock ownership eliminates the recurring Total Expense Ratio (TER) of asset management companies (typically 0.40% to 1.50% annually), active direct trading introduces substantial transaction friction:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Direct Equity Friction:</strong> Every portfolio rebalance, sector rotation, or individual stock sale incurs two-way brokerage, STT (0.1%), stamp duty, DP charges, and immediate crystallization of 20% STCG or 12.5% LTCG.</li>
          <li><strong>Mutual Fund Rebalancing Exemption:</strong> When mutual fund portfolio managers rebalance holdings within the scheme, internal transactions do not trigger capital gains tax for unitholders. Unitholders pay capital gains tax only upon redeeming units, enabling unhindered compounding across decades.</li>
        </ul>
        <p className="text-sm text-gray-600">
          To evaluate how systematic long-term mutual fund compounding compares to discretionary trading cash flows, investors benchmark their allocations using our <Link href="/calculator/finance/mutual-fund-returns" className="text-blue-700 font-semibold underline hover:text-blue-800">Mutual Fund Returns Calculator</Link> alongside our <Link href="/calculator/finance/margin" className="text-blue-700 font-semibold underline hover:text-blue-800">Margin Calculator</Link>.
        </p>
      </section>

      {/* SECTION 6: FREQUENTLY ASKED QUESTIONS (FAQS) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is Net Profit calculated in stock trading?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Net Profit equals Gross Sell Turnover minus Gross Buy Turnover, minus all transaction friction costs. These friction costs include buy-side and sell-side brokerage, Securities Transaction Tax (STT), exchange transaction turnover fees, SEBI turnover fees, state stamp duty, 18% GST on service charges, and Depository Participant (DP) debit charges on delivery sales.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is the difference between Return on Investment (ROI) and Absolute Profit?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Absolute Profit measures the total rupee gain or loss on a position. Return on Investment (ROI) measures capital efficiency as a percentage: Net Profit divided by Total Capital Outlay (including buy-side transaction friction) multiplied by 100. ROI normalizes performance, proving that earning ₹2,00,000 on ₹20,00,000 capital (10% ROI) is more efficient than earning ₹5,00,000 on ₹1,00,00,000 capital (5% ROI).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Why can a stock sold at a higher price result in a net realized loss?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              This occurs due to transaction friction and the micro-margin trap. When the price spread between entry and exit is narrow, cumulative friction—such as two-way brokerage, STT, exchange levies, GST, and flat DP debit fees—exceeds the gross capital gain, resulting in a net cash loss despite a positive directional trade.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Are brokerage and exchange fees charged on both buying and selling legs?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Every stock trade involves two distinct executions. Brokerage, exchange turnover fees, SEBI fees, and 18% GST apply to both buy and sell legs. However, state stamp duty applies strictly to the purchase leg, while Depository Participant (DP) debit fees apply exclusively to the sell leg of equity delivery trades.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is Long-Term Capital Gains (LTCG) taxed on listed equity shares post-Budget 2024?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under amended Section 112A from Budget 2024, equity shares held for more than 12 months qualify for LTCG. Aggregate equity LTCG up to ₹1,25,000 per financial year is completely tax-exempt. Profits exceeding ₹1.25 Lakhs are taxed at a flat rate of 12.5% plus cess, without indexation benefits.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is Short-Term Capital Gains (STCG) taxed on listed equities post-Budget 2024?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Under amended Section 111A from Budget 2024, listed equity shares held for 12 months or less and sold with STT paid are classified as STCG. STCG is taxed at a flat rate of 20% (increased from 15%) plus applicable surcharge and 4% cess, irrespective of individual income tax brackets.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How is intraday stock trading taxed in India?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Intraday trading without taking demat delivery is classified under Section 43(5) as Speculative Business Income. Net intraday profits are added to your overall taxable income and taxed at your marginal slab rate (up to 30% plus cess). Intraday losses can only offset speculative profits and be carried forward for 4 assessment years.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What are Depository Participant (DP) charges, and how are they billed?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              DP charges are flat administrative debit fees levied by depositories (CDSL or NSDL) and your broker when shares are debited from your demat account upon a delivery sale. The fee ranges from ₹13.50 to ₹20 plus 18% GST per company per trading day, regardless of share volume sold.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              What is Securities Transaction Tax (STT), and how do delivery and intraday rates differ?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              STT is a direct federal transaction levy. For delivery trades, STT is 0.1% on buy turnover and 0.1% on sell turnover. For intraday trades, STT is 0% on the buy leg and 0.025% on sell turnover.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How do you calculate the exact break-even sell price for an equity trade?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The break-even price is the exit price where Net Profit equals zero. It is calculated by adding buy-side friction, fixed brokerage for both legs, and all sell-side turnover taxes (STT, exchange fees, SEBI, GST) to the buy capital, divided by the net recoverable unit multiplier.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              Does India have a Wash Sale Rule like the United States?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Unlike the United States IRS 30-day wash-sale rule, the Indian Income Tax Act does not contain a statutory clause explicitly disallowing capital losses if the same equity share is repurchased immediately. However, Section 94 contains anti-avoidance dividend stripping and bonus stripping rules, and assessing officers can invoke General Anti-Avoidance Rules (GAAR) if transactions lack commercial substance or constitute sham circular trades executed solely to fabricate artificial losses.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">
              How are bonus shares, stock splits, and dividends treated for equity tax purposes?
            </summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In a stock split, total acquisition cost remains constant while per-share cost basis decreases proportionally with the expanded share count. For bonus shares, the statutory cost of acquisition is zero under Section 55; upon sale, the full liquidation value constitutes taxable capital gain. Dividends do not adjust capital gains cost basis; they are credited to your bank account and taxed as &quot;Income from Other Sources&quot; at your personal slab rate.
            </div>
          </details>

        </div>
      </section>

      {/* SECTION 7: INTERNALLY LINKED FINANCIAL HUBS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-emerald-50/60 p-6 rounded-2xl border border-emerald-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Trading Margin &amp; Leverage</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Calculate your exact gross and operating profit margins, markup multipliers, and commercial markups using our <Link href="/calculator/finance/margin" className="text-emerald-700 font-bold underline hover:text-emerald-800">Margin Calculator</Link>.
          </p>
        </div>

        <div className="bg-blue-50/60 p-6 rounded-2xl border border-blue-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Mutual Fund Returns</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Compare active stock picking against diversified index compounding, SIP wealth accumulation, and asset management models using our <Link href="/calculator/finance/mutual-fund-returns" className="text-blue-700 font-bold underline hover:text-blue-800">Mutual Fund Returns Calculator</Link>.
          </p>
        </div>

        <div className="bg-purple-50/60 p-6 rounded-2xl border border-purple-100">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Commercial Break-Even</h3>
          <p className="text-xs text-gray-600 leading-relaxed mb-3">
            Model fixed overheads, unit contribution margins, and required enterprise sales volumes for commercial ventures using our <Link href="/calculator/finance/break-even" className="text-purple-700 font-bold underline hover:text-purple-800">Break Even Calculator</Link>.
          </p>
        </div>
      </div>

    </div>
  );
}