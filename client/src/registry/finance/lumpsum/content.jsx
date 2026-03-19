import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Lumpsum Calculator: Mutual Fund Returns | CalcPilot</title>
        <meta name="description" content="Calculate your mutual fund returns on a one-time lump sum investment. See how the power of compounding grows your wealth over years." />
        <meta name="keywords" content="lumpsum calculator, mutual fund lumpsum, one time investment calculator, ROI calculator, compound interest" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a Lumpsum Investment?</h2>
        <p>A lumpsum investment is a single, complete payment made at one time, rather than investing money in smaller installments (like a SIP). This strategy is highly effective when you have idle cash (like a bonus or inheritance) and want to let it grow in the market over a long period.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Lumpsum Calculation Formula</h2>
        <p className="mb-4">The lumpsum calculator relies on the fundamental formula for annual compound interest, forecasting the future value of your present investment:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          A = P (1 + r)<sup>n</sup>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>A</strong> = Estimated Future Value</div>
          <div><strong>P</strong> = Principal (Initial Lumpsum Investment)</div>
          <div><strong>r</strong> = Expected annual rate of return (in decimal)</div>
          <div><strong>n</strong> = Number of years the money is invested</div>
        </div>
      </section>
    </div>
  );
}