import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      <Helmet>
        <title>Free Home Loan EMI Calculator | Check Housing Loan Installments | CalcPilot</title>
        <meta name="description" content="Calculate your Home Loan EMI, total interest payable, and amortization schedule. Plan your dream home purchase accurately with our free housing loan calculator." />
        <meta name="keywords" content="home loan EMI calculator, housing loan calculator, mortgage calculator, calculate home loan interest, real estate finance" />
      </Helmet>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is a Home Loan EMI?</h2>
        <p>A Home Loan EMI (Equated Monthly Installment) is the fixed monthly payment you make to your bank or housing finance company to repay your mortgage. Because home loans are usually large amounts taken over long tenures (10-30 years), calculating your EMI beforehand is essential to ensure the monthly payments fit comfortably within your household budget.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Home Loan Amortization Formula</h2>
        <p className="mb-4">The calculator determines your monthly payment using the standard reducing-balance loan formula:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          E = P &times; r &times; {`[ (1 + r)`}<sup>n</sup> {` / ((1 + r)`}<sup>n</sup> {`- 1) ]`}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>E</strong> = Equated Monthly Installment (EMI)</div>
          <div><strong>P</strong> = Principal Home Loan Amount</div>
          <div><strong>r</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</div>
          <div><strong>n</strong> = Loan Tenure in Months</div>
        </div>
      </section>
    </div>
  );
}