import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Personal Loan EMI Calculator | CalcPilot</title>
        <meta name="description" content="Easily calculate your Personal Loan EMI. Compare interest rates and repayment tenures to find the most affordable monthly installment for your financial needs." />
        <meta name="keywords" content="personal loan calculator, personal loan EMI, unsecured loan calculator, monthly installment, personal finance" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Planning Your Personal Loan</h2>
        <p>Personal loans are unsecured loans, meaning you do not need to provide collateral. Because of this, they usually carry higher interest rates and shorter repayment tenures (1-5 years) compared to home loans. Using a calculator helps you minimize the total interest you will pay by finding the optimal balance between a short tenure and an affordable EMI.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Personal Loan EMI Formula</h2>
        <p className="mb-4">Personal loans are calculated using the universal monthly installment equation on a reducing balance method:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          E = P &times; r &times; {`[ (1 + r)`}<sup>n</sup> {` / ((1 + r)`}<sup>n</sup> {`- 1) ]`}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>E</strong> = Monthly EMI</div>
          <div><strong>P</strong> = Total Loan Amount Borrowed</div>
          <div><strong>r</strong> = Monthly Interest Rate</div>
          <div><strong>n</strong> = Total Repayment Months</div>
        </div>
      </section>
    </div>
  );
}