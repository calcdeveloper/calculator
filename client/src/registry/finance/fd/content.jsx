import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free FD Calculator: Fixed Deposit Interest & Returns | CalcPilot</title>
        <meta name="description" content="Calculate your Fixed Deposit (FD) maturity amount and interest earned. Use our free FD calculator to plan your safe investments and secure guaranteed returns." />
        <meta name="keywords" content="FD calculator, fixed deposit calculator, FD interest rate, calculate FD returns, term deposit calculator" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a Fixed Deposit (FD)?</h2>
        <p>A Fixed Deposit (FD) is one of the safest investment instruments offered by banks and non-banking financial companies (NBFCs). You deposit a lump sum of money for a specific tenure at a predetermined interest rate, guaranteeing a fixed return regardless of market fluctuations.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">FD Calculation Formula</h2>
        <p className="mb-4">Our calculator uses the standard compound interest formula to determine your maturity amount. Banks typically compound FD interest on a quarterly basis:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          A = P (1 + r/n)<sup>n &times; t</sup>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>A</strong> = Maturity Amount</div>
          <div><strong>P</strong> = Principal amount deposited</div>
          <div><strong>r</strong> = Annual interest rate (in decimal)</div>
          <div><strong>n</strong> = Number of times interest is compounded per year (usually 4 for quarterly)</div>
          <div><strong>t</strong> = Tenure in years</div>
        </div>
      </section>
    </div>
  );
}