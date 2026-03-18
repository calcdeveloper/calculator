export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How Car Loan EMIs are Calculated</h2>
        <p>A car loan EMI (Equated Monthly Installment) is a fixed payment made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is fully paid off.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The Universal EMI Formula</h3>
        <p>Banks and financial institutions use a standardized mathematical formula to calculate your monthly auto loan payment:</p>
        
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4 text-center">
          <p className="text-xl font-mono font-bold text-calc-green mb-2">E = P × r × [ (1 + r)^n / ((1 + r)^n - 1) ]</p>
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>E</strong> = Monthly EMI</li>
          <li><strong>P</strong> = Principal Loan Amount (Car Price minus Down Payment)</li>
          <li><strong>r</strong> = Monthly Interest Rate (Annual Rate / 12 / 100)</li>
          <li><strong>n</strong> = Loan Tenure in Months (Years × 12)</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">The "True Cost" of Your Car</h3>
        <p>When you take out a vehicle loan, the sticker price of the car is rarely what you actually end up paying. The <strong>True Cost</strong> of your car is the sum of your down payment, the principal loan amount, and the total interest paid over the life of the loan.</p>
        
        <div className="bg-calc-white p-5 rounded-xl border border-calc-lightGray shadow-sm mt-4">
          <h4 className="font-bold text-calc-green mb-2">Why Your Down Payment Matters</h4>
          <p className="text-sm text-calc-darkGray">Cars are depreciating assets—they lose value the moment you drive them off the lot. A larger down payment reduces your principal loan amount, which drastically lowers your monthly EMI and the total interest you pay to the bank. It also prevents you from becoming "upside down" on your loan (owing more than the car is worth).</p>
        </div>
      </div>
    );
  }