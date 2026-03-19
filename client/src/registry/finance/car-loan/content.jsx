import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Car Loan EMI Calculator | Auto Finance Check | CalcPilot</title>
        <meta name="description" content="Calculate your Car Loan EMI instantly. Plan your auto financing, check interest payments, and decide on the best tenure for your new vehicle." />
        <meta name="keywords" content="car loan calculator, auto loan EMI, vehicle finance, car payment calculator, auto finance" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Auto Financing Explained</h2>
        <p>A Car Loan allows you to purchase a vehicle by paying a down payment upfront and borrowing the rest from a bank. The vehicle itself serves as collateral. Knowing your exact monthly EMI before walking into a dealership gives you immense negotiating power and prevents you from overspending on dealership financing traps.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Car Loan EMI Formula</h2>
        <p className="mb-4">Auto loans use the standard reducing-balance EMI mathematical model:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          E = P &times; r &times; {`[ (1 + r)`}<sup>n</sup> {` / ((1 + r)`}<sup>n</sup> {`- 1) ]`}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>E</strong> = Auto Loan EMI</div>
          <div><strong>P</strong> = Loan Amount (Car Price - Down Payment)</div>
          <div><strong>r</strong> = Monthly Interest Rate</div>
          <div><strong>n</strong> = Loan Tenure in Months (typically 36 to 84)</div>
        </div>
      </section>
    </div>
  );
}