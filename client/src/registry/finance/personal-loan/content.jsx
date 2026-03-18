export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How does a Personal Loan work?</h2>
        <p>A Personal Loan is an <strong>unsecured loan</strong>, meaning you do not need to pledge any collateral (like a house or car) to get the funds. Because of this higher risk to the bank, personal loans generally have higher interest rates than home or car loans. Our Personal Loan EMI Calculator helps you find the sweet spot between your loan amount, tenure, and comfortable monthly EMI.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">Factors that affect your Personal Loan EMI</h3>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Your Credit Score (CIBIL):</strong> Since this is an unsecured loan, banks rely heavily on your CIBIL score. A score above 750 can help you negotiate interest rates as low as 10.5%, drastically reducing your EMI.</li>
          <li><strong>Loan Tenure:</strong> Choosing a shorter tenure (e.g., 2 years) will increase your monthly EMI but significantly reduce the total interest you pay to the bank. A longer tenure (e.g., 5 years) lowers the monthly burden but increases total interest outgo.</li>
          <li><strong>Principal Amount:</strong> Only borrow what you absolutely need. Use our calculator to see how a ₹50,000 difference in borrowing impacts your overall interest payments.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Beware of Pre-closure and Processing Charges</h3>
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4">
          <p className="text-sm mb-2">When taking a personal loan, the EMI isn't the only cost. Always check for:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Processing Fees:</strong> Usually 1% to 2% of the loan amount, deducted upfront.</li>
            <li><strong>Pre-closure/Foreclosure Penalties:</strong> If you get a bonus and want to clear your loan early, banks may charge a 2% to 4% penalty on the outstanding principal. Always check the bank's lock-in period (usually 6 to 12 months) before making prepayments.</li>
          </ul>
        </div>
      </div>
    );
  }