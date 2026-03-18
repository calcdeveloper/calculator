export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How to use the Home Loan EMI Calculator?</h2>
        <p>Buying a home is one of the biggest financial decisions you will ever make. Our advanced Home Loan EMI Calculator helps you plan your finances by providing a clear breakdown of your monthly obligations.</p>
        
        <p>Simply enter your desired <strong>Loan Amount</strong>, the current <strong>Interest Rate</strong> offered by your bank, and the <strong>Loan Tenure</strong> (duration). The calculator will instantly generate your EMI, total interest payable, and a complete amortization schedule.</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">What are the Tax Benefits on Home Loans in India?</h3>
        <p>One of the biggest advantages of taking a home loan in India is the substantial tax savings under the Income Tax Act. Here is how your EMI payments save you money:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Section 80C (Principal Repayment)</h4>
            <p className="text-sm">The principal portion of your EMI qualifies for a tax deduction of up to <strong>₹1.5 Lakhs</strong> per financial year. Stamp duty and registration charges can also be claimed under this section.</p>
          </div>
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Section 24(b) (Interest Payment)</h4>
            <p className="text-sm">The interest portion of your EMI allows for a deduction of up to <strong>₹2 Lakhs</strong> per annum for a self-occupied property. If the property is rented out, there is no upper limit on the interest deduction!</p>
          </div>
        </div>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Tips for reducing your Home Loan EMI</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Increase your Down Payment:</strong> Paying more upfront reduces the principal loan amount, which directly lowers your monthly EMI and total interest.</li>
          <li><strong>Opt for a Longer Tenure:</strong> If you want a smaller monthly payment, increase the loan duration. However, keep in mind this will increase the total interest paid over time.</li>
          <li><strong>Make Prepayments:</strong> Use your annual bonuses or surplus income to make partial prepayments toward the principal amount. This dramatically reduces the interest burden.</li>
          <li><strong>Negotiate the Interest Rate:</strong> Maintain a CIBIL score above 750 to negotiate lower interest rates with banks like SBI, HDFC, or ICICI.</li>
        </ul>
      </div>
    );
  }