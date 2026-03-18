export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is Compound Interest?</h2>
        <p>Compound Interest (CI) is the interest calculated on the initial principal, which also includes all of the accumulated interest from previous periods. Think of it as "interest on interest." It causes wealth to grow exponentially over time, which is why it is the core principle behind Mutual Funds, Fixed Deposits (FDs), and long-term retirement planning.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The Compound Interest Formula</h3>
        <p>The calculation for compound interest takes into account how often the interest is applied to the balance. The formula is:</p>
        
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4 text-center">
          <p className="text-xl font-mono font-bold text-calc-green mb-2">A = P (1 + r/n)^(n×t)</p>
          <p className="text-lg font-mono font-bold text-calc-black">CI = A - P</p>
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>A</strong> = Final Amount (Principal + Interest)</li>
          <li><strong>P</strong> = Principal (Initial investment)</li>
          <li><strong>r</strong> = Annual nominal interest rate (as a decimal)</li>
          <li><strong>n</strong> = Number of times the interest is compounded per year</li>
          <li><strong>t</strong> = Number of years the money is invested</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Why Compounding Frequency Matters</h3>
        <p>In our calculator above, you can change the "Compounding Frequency." This is crucial because the more frequently interest is calculated and added to your balance, the faster your money grows. For example:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Annually (1/Yr):</strong> Interest is added once at the end of the year.</li>
          <li><strong>Semi-Annually (2/Yr):</strong> Interest is calculated every 6 months (often used in bonds).</li>
          <li><strong>Quarterly (4/Yr):</strong> Interest is calculated every 3 months (common for Fixed Deposits).</li>
          <li><strong>Monthly (12/Yr):</strong> Interest is calculated every month, maximizing the snowball effect!</li>
        </ul>
      </div>
    );
  }