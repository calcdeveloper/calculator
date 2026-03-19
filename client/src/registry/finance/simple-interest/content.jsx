import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Simple Interest Calculator | Fast & Accurate | CalcPilot</title>
        <meta name="description" content="Calculate simple interest on loans or savings instantly. Understand how interest accumulates without compounding over time." />
        <meta name="keywords" content="simple interest calculator, calculate interest, basic interest formula, loan interest, principal amount" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is Simple Interest?</h2>
        <p>Simple interest is a quick and easy method of calculating the interest charge on a loan or the return on an investment. Unlike compound interest, simple interest is determined by multiplying the daily, monthly, or annual interest rate strictly by the principal amount. It does not factor in previously accumulated interest.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Simple Interest Formula</h2>
        <p className="mb-4">The formula for calculating simple interest is straightforward and linear:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          SI = (P &times; R &times; T) / 100
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>SI</strong> = Simple Interest Amount</div>
          <div><strong>P</strong> = Principal (Starting Amount)</div>
          <div><strong>R</strong> = Rate of Interest per annum (%)</div>
          <div><strong>T</strong> = Time period (in years)</div>
        </div>
      </section>
    </div>
  );
}