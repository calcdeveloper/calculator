export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is an EMI?</h2>
        <p>Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both interest and principal each month so that over a specified number of years, the loan is paid off in full.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">How is EMI calculated?</h3>
        <p>The mathematical formula to calculate EMI is:</p>
        <blockquote className="bg-calc-beige/30 p-4 border-l-4 border-calc-green rounded-r-lg font-mono text-center my-4">
          E = P × r × (1 + r)^n / [(1 + r)^n - 1]
        </blockquote>
        <ul className="list-disc pl-6 space-y-2 mt-4">
          <li><strong>E</strong> is the EMI amount</li>
          <li><strong>P</strong> is the Principal Loan Amount</li>
          <li><strong>r</strong> is the monthly interest rate (Annual Rate / 12 / 100)</li>
          <li><strong>n</strong> is the loan duration in months</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Why use an online EMI Calculator?</h3>
        <p>Calculating EMI manually is complex and prone to errors. Our online calculator instantly breaks down your payment schedule, showing you exactly how much of your money goes towards the principal versus the interest.</p>
      </div>
    );
  }