import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free RD Calculator: Recurring Deposit Maturity | CalcPilot</title>
        <meta name="description" content="Calculate the maturity value of your Recurring Deposit (RD). Find out how your small monthly savings compound into a large corpus over time." />
        <meta name="keywords" content="RD calculator, recurring deposit calculator, monthly savings calculator, RD interest, bank RD returns" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a Recurring Deposit (RD)?</h2>
        <p>A Recurring Deposit is a special kind of term deposit that allows individuals to deposit a fixed amount every month into their bank account and earn interest at the rate applicable to Fixed Deposits. It is ideal for those who want to save steadily but do not have a large lump sum to invest upfront.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">RD Calculation Formula</h2>
        <p className="mb-4">RD interest is typically compounded quarterly. The formula calculates the future value of a series of monthly deposits:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          M = R &times; [ (1 + i)<sup>n</sup> - 1 ] / [ 1 - (1 + i)<sup>-1/3</sup> ]
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>M</strong> = Maturity value</div>
          <div><strong>R</strong> = Monthly installment amount</div>
          <div><strong>i</strong> = Interest rate per quarter (Annual Rate / 4 / 100)</div>
          <div><strong>n</strong> = Total number of quarters</div>
        </div>
      </section>
    </div>
  );
}