export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How is RD Interest Calculated?</h2>
        <p>A Recurring Deposit (RD) allows you to save a fixed amount of money every month while earning interest similar to a Fixed Deposit. Most banks in India (including SBI, HDFC, and ICICI) calculate RD interest using a <strong>quarterly compounding formula</strong>. Because you deposit money monthly, the interest earned on your first month's deposit will be higher than the interest earned on your final month's deposit.</p>
        
        <p>Our RD calculator uses the exact fractional compounding math utilized by the Reserve Bank of India (RBI) guidelines to ensure your maturity value is 100% accurate.</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">RD vs. SIP: Which is better?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Recurring Deposit (RD)</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-calc-darkGray">
              <li><strong>Risk:</strong> 100% Zero Risk.</li>
              <li><strong>Returns:</strong> Fixed and guaranteed at the time of opening.</li>
              <li><strong>Taxation:</strong> Interest is fully taxable as per your income slab. 10% TDS applies if interest exceeds ₹40,000/year.</li>
              <li><strong>Best For:</strong> Short-term goals (1-3 years) and highly conservative investors.</li>
            </ul>
          </div>
          <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm">
            <h4 className="font-bold text-calc-green mb-2">Mutual Fund SIP</h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-calc-darkGray">
              <li><strong>Risk:</strong> Subject to market risks (Volatility).</li>
              <li><strong>Returns:</strong> Variable, historically 10-15% over the long term.</li>
              <li><strong>Taxation:</strong> Favorable equity taxation (LTCG at 12.5% above ₹1.25 Lakhs).</li>
              <li><strong>Best For:</strong> Long-term wealth creation (5+ years) and beating inflation.</li>
            </ul>
          </div>
        </div>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Post Office RD (National Savings Recurring Deposit Account)</h3>
        <p>If you are looking for sovereign backing, the Post Office RD is highly popular. Unlike bank RDs which offer flexible tenures (6 months to 10 years), Post Office RDs come with a fixed maturity period of <strong>5 years</strong>. They currently offer highly competitive interest rates that are often superior to standard commercial banks.</p>
      </div>
    );
  }