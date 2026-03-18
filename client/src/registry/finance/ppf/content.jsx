export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is the Public Provident Fund (PPF)?</h2>
        <p>The Public Provident Fund (PPF) is a highly popular, government-backed long-term savings scheme in India. It is designed to offer a safe, risk-free investment avenue with guaranteed returns. Because it is backed by the sovereign guarantee of the Indian Government, it is considered one of the safest investments available.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">Current PPF Interest Rate (2026)</h3>
        <p>The interest rate for the PPF is reviewed and set every quarter by the Ministry of Finance. As of the current financial year, the PPF interest rate stands at <strong>7.1% per annum</strong>, compounded annually.</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">The PPF Calculation Formula</h3>
        <p>The PPF operates on an annual compounding basis. If you deposit your annual investment at the beginning of the financial year (before the 5th of April), your investment earns interest for the entire year. The mathematical formula used to calculate the maturity value of a PPF account is:</p>
        
        {/* We will leave a placeholder here so the actual LaTeX renders outside the code block in our chat, but you can use standard text representation in your React component */}
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4 font-mono text-center text-lg">
          F = P × (1 + i) × [ ((1 + i)^n - 1) / i ]
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>F</strong> = Maturity Value</li>
          <li><strong>P</strong> = Annual Installment (Investment)</li>
          <li><strong>i</strong> = Rate of Interest (in percentage / 100)</li>
          <li><strong>n</strong> = Number of Years (Tenure)</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">The "EEE" Tax Benefit</h3>
        <p>The biggest advantage of a PPF account is its <strong>Exempt-Exempt-Exempt (EEE)</strong> tax status under the Old Tax Regime:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Investment is Exempt:</strong> Your annual contributions up to ₹1.5 Lakhs are tax-deductible under Section 80C of the Income Tax Act.</li>
          <li><strong>Interest is Exempt:</strong> The massive compound interest you accumulate over 15 to 30 years is 100% tax-free.</li>
          <li><strong>Maturity is Exempt:</strong> When you finally withdraw your entire corpus at the end of your tenure, the entire amount is completely free from any tax obligations.</li>
        </ul>
        
        <p className="mt-4 text-sm text-calc-gray italic">Pro Tip: To maximize your returns, always try to deposit your PPF contribution before the 5th of the month. PPF interest is calculated on the lowest balance between the 5th and the end of the month!</p>
      </div>
    );
  }