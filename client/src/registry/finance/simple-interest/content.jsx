export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is Simple Interest?</h2>
        <p>Simple Interest (SI) is a quick and easy method of calculating the interest charge on a loan or the return on an investment. Unlike compound interest, simple interest does not compound; meaning, you only earn (or pay) interest on the original principal amount, not on the interest accumulated over time.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The Simple Interest Formula</h3>
        <p>The mathematical formula used to calculate simple interest is straightforward:</p>
        
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4 text-center">
          <p className="text-xl font-mono font-bold text-calc-green mb-2">SI = (P × R × T) / 100</p>
          <p className="text-lg font-mono font-bold text-calc-black">A = P + SI</p>
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>SI</strong> = Simple Interest</li>
          <li><strong>A</strong> = Total Accrued Amount (Principal + Interest)</li>
          <li><strong>P</strong> = Principal Amount (Initial investment or loan)</li>
          <li><strong>R</strong> = Annual Interest Rate (in percentage)</li>
          <li><strong>T</strong> = Time Period (in years)</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Simple Interest vs. Compound Interest</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-calc-white p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Simple Interest</h4>
            <p className="text-sm text-calc-darkGray">Interest is calculated <strong>only on the principal amount</strong>. The interest earned every year remains exactly the same. It is commonly used for short-term personal loans and automobile loans.</p>
          </div>
          <div className="bg-calc-white p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Compound Interest</h4>
            <p className="text-sm text-calc-darkGray">Interest is calculated on the principal <strong>plus previously accumulated interest</strong>. The interest grows exponentially over time. It is commonly used for Mutual Funds, FDs, and long-term investments.</p>
          </div>
        </div>
      </div>
    );
  }