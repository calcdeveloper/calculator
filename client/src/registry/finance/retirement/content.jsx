export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">How to Plan for Retirement</h2>
        <p>Retirement planning isn't just about saving money; it's about making sure your savings outpace inflation so you can maintain your standard of living for the rest of your life. By factoring in your specific <strong>Life Expectancy</strong>, this calculator gives you a highly accurate target rather than relying on generic rules of thumb.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">1. Adjusting Expenses for Inflation</h3>
        <p>The first step our calculator takes is inflating your current monthly expenses to their future value at your retirement age. If your monthly expenses are ₹50,000 today, an inflation rate of 6% means you will need roughly ₹2.87 Lakhs per month in 30 years just to buy the exact same things.</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">2. Calculating the Target Corpus (Life Expectancy)</h3>
        <p>Instead of guessing, we calculate exactly how much money you need to survive from your target retirement age until your life expectancy. We do this by calculating the <strong>Real Rate of Return</strong> (your investment returns minus inflation) and using it to find the Present Value of your required future income.</p>
        
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4 text-center">
          <p className="text-sm text-calc-darkGray mb-2">Real Rate of Return Formula:</p>
          <p className="text-lg font-mono font-bold text-calc-green mb-2">r = [ (1 + Expected Return) / (1 + Inflation) ] - 1</p>
        </div>
  
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Step 1:</strong> Calculate your Future Annual Expenses at retirement.</li>
          <li><strong>Step 2:</strong> Determine the number of years in retirement (Life Expectancy - Target Retirement Age).</li>
          <li><strong>Step 3:</strong> Calculate the exact corpus needed to fund those years, assuming your remaining balance continues to grow at the real rate of return.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">3. Calculating the Required Monthly SIP</h3>
        <p>Once we have your exact Target Corpus, we reverse-engineer the math using the Future Value of an Annuity formula. This reveals the precise amount you need to invest every month (via SIP) starting today, compounding monthly at your expected pre-retirement return rate.</p>
      </div>
    );
  }