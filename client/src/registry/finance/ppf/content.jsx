import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free PPF Calculator: Public Provident Fund Returns | CalcPilot</title>
        <meta name="description" content="Calculate your Public Provident Fund (PPF) maturity amount. Plan your tax-saving investments and secure your retirement with guaranteed, tax-free returns." />
        <meta name="keywords" content="PPF calculator, public provident fund, tax saving calculator, PPF maturity, section 80C investment" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a PPF?</h2>
        <p>The Public Provident Fund (PPF) is a popular, government-backed long-term saving scheme in India. It offers guaranteed, risk-free returns, and both the interest earned and the maturity amount are completely exempt from income tax (EEE status). A standard PPF account has a mandatory lock-in period of 15 years.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">PPF Calculation Formula</h2>
        <p className="mb-4">PPF interest is calculated monthly but credited to your account annually. The maturity calculation functions as a yearly annuity:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          F = P &times; [ (1 + i)<sup>n</sup> - 1 ] / i
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>F</strong> = Final Maturity Amount</div>
          <div><strong>P</strong> = Annual Investment Amount</div>
          <div><strong>i</strong> = Annual interest rate (in decimal)</div>
          <div><strong>n</strong> = Number of years (typically 15)</div>
        </div>
      </section>
    </div>
  );
}