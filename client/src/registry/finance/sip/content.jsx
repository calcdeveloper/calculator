import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>Free SIP Calculator: Estimate Mutual Fund Returns | CalcPilot</title>
        <meta 
          name="description" 
          content="Use our free SIP Calculator to estimate your mutual fund returns. Plan your wealth creation with accurate monthly investment forecasting and the power of compounding." 
        />
        <meta name="keywords" content="SIP calculator, systematic investment plan, mutual fund returns, investment calculator, SIP formula, compound interest" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free SIP Calculator | CalcPilot" />
        <meta property="og:description" content="Calculate your Systematic Investment Plan (SIP) returns easily." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a SIP (Systematic Investment Plan)?</h2>
        <p>
          A Systematic Investment Plan (SIP) is a disciplined and automated way of investing your money in mutual funds. Instead of making a large lump-sum investment and trying to time the market, a SIP allows you to invest a fixed amount regularly—typically on a monthly basis. This helps average out market volatility and builds a long-term wealth creation habit.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The SIP Calculation Formula</h2>
        <p className="mb-4">
          Our calculator uses the standard future value formula for an annuity due. Because SIP investments are typically made at the beginning of each month, the compounding interest is calculated using the following mathematical equation:
        </p>
        
        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          M = P &times; {`[ (1 + i)`}<sup>n</sup> {`- 1 ] / i`} &times; (1 + i)
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>M</strong> = Maturity amount (Expected final value)</div>
          <div><strong>P</strong> = Monthly investment amount (Principal)</div>
          <div><strong>i</strong> = Monthly rate of return (Annual Rate / 12 / 100)</div>
          <div><strong>n</strong> = Total number of monthly deposits</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Why Invest in a SIP?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Power of Compounding:</strong> Reinvesting your returns generates its own returns over time, multiplying your wealth exponentially.</li>
          <li><strong>Rupee Cost Averaging:</strong> By investing a fixed amount every month, you buy more units when the market is low and fewer units when it is high, lowering your average cost per unit.</li>
          <li><strong>Financial Discipline:</strong> Automating your investments prevents emotional decision-making based on daily market news.</li>
        </ul>
      </section>
    </div>
  );
}