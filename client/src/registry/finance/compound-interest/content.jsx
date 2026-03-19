import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Compound Interest Calculator | The Power of Compounding | CalcPilot</title>
        <meta name="description" content="Calculate compound interest to see how your money grows exponentially. Test daily, monthly, and yearly compounding frequencies." />
        <meta name="keywords" content="compound interest calculator, compounding formula, future value calculator, APY, interest on interest" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Magic of Compound Interest</h2>
        <p>Compound interest is the "interest on interest." It is calculated on the initial principal, which also includes all of the accumulated interest from previous periods. This compounding effect causes wealth to grow at an exponential rate over time, making it the most powerful concept in long-term investing.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Compound Interest Formula</h2>
        <p className="mb-4">The frequency of compounding (daily, monthly, annually) heavily impacts the final amount. The standard mathematical model is:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          A = P (1 + r/n)<sup>n &times; t</sup>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>A</strong> = Total Accrued Amount (Principal + Interest)</div>
          <div><strong>P</strong> = Principal Amount</div>
          <div><strong>r</strong> = Annual Nominal Interest Rate (as a decimal)</div>
          <div><strong>n</strong> = Number of compounding periods per year</div>
          <div><strong>t</strong> = Time in years</div>
        </div>
      </section>
    </div>
  );
}