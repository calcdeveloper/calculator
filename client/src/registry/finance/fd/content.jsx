export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How does our FD Calculator work?</h2>
        <p>A Fixed Deposit (FD) is one of the safest and most popular investment avenues in India. Our calculator uses the <strong>quarterly compounding formula</strong>—the exact same mathematical model used by major banks like SBI, HDFC, and ICICI—to give you pinpoint accurate maturity values.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">Taxation on Fixed Deposits (TDS)</h3>
        <p>It is important to understand how your FD returns are taxed by the government:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>TDS Applicability:</strong> If the interest earned on your FD exceeds ₹40,000 in a financial year (₹50,000 for senior citizens), the bank will deduct a 10% TDS.</li>
          <li><strong>No PAN Card:</strong> If you do not provide your PAN card to the bank, the TDS rate jumps to 20%.</li>
          <li><strong>Form 15G/15H:</strong> If your total income is below the taxable limit, you can submit Form 15G (or Form 15H for senior citizens) to the bank to prevent them from deducting TDS.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">What is a Tax-Saving FD?</h3>
        <p>Under <strong>Section 80C</strong> of the Income Tax Act, you can claim a deduction of up to ₹1.5 Lakhs by investing in a 5-year Tax-Saving Fixed Deposit. Keep in mind that these specific FDs come with a strict lock-in period of 5 years, meaning you cannot withdraw the funds prematurely.</p>
      </div>
    );
  }