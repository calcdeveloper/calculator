import { Helmet } from "react-helmet-async";

export default function Content() {
  return (
    <div className="space-y-8 text-gray-700 leading-relaxed mt-8">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>Free EMI Calculator: Home, Car & Personal Loans | CalcPilot</title>
        <meta 
          name="description" 
          content="Calculate your Equated Monthly Installment (EMI) for home loans, car loans, and personal loans instantly. Plan your repayment schedule with our free EMI calculator." 
        />
        <meta name="keywords" content="EMI calculator, loan calculator, home loan EMI, personal loan EMI, car loan EMI, calculate EMI, amortization schedule" />
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free EMI Calculator | CalcPilot" />
        <meta property="og:description" content="Instantly calculate your monthly loan repayments for any loan type." />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* --- SEO RICH CONTENT --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">What is an EMI?</h2>
        <p>
          An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. Equated monthly installments are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">How is EMI Calculated?</h2>
        <p className="mb-4">
          Our calculator uses the universal mathematical formula for calculating the monthly amortization of a loan. It precisely balances your principal amount and the interest applied over the tenure of the loan:
        </p>
        
        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto">
          E = P &times; r &times; {`[ (1 + r)`}<sup>n</sup> {` / ((1 + r)`}<sup>n</sup> {`- 1) ]`}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg">
          <div><strong>E</strong> = EMI (Your monthly payment)</div>
          <div><strong>P</strong> = Principal Loan Amount</div>
          <div><strong>r</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</div>
          <div><strong>n</strong> = Loan Tenure in Months</div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Why Use an EMI Calculator?</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Financial Planning:</strong> Know exactly how much of your monthly budget will go toward debt repayment before you commit to a loan.</li>
          <li><strong>Compare Loan Offers:</strong> Easily adjust the interest rates to see how a seemingly small difference in % can save you thousands over the life of the loan.</li>
          <li><strong>Decide Loan Tenure:</strong> Experiment with different time periods to find the perfect balance between an affordable monthly payment and paying less total interest.</li>
        </ul>
      </section>
    </div>
  );
}