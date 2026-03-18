export default function Content() {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-calc-black">What is a Lumpsum Investment?</h2>
        <p>A lumpsum investment is a single, one-time bulk deposit made into a Mutual Fund. Unlike a SIP (Systematic Investment Plan) where you invest small amounts monthly, a lumpsum investment puts your entire capital to work in the market from day one. This is ideal if you have just received an annual bonus, sold real estate, or have idle cash sitting in a low-interest savings account.</p>
        
        <h3 className="text-xl font-bold text-calc-black mt-8">The Magic of Compounding</h3>
        <p>The core advantage of a lumpsum investment is time. The longer you leave your money invested, the more powerful compounding becomes. Because your entire principal amount is invested immediately, it starts generating returns, and in subsequent years, you earn returns on those returns. Use our year-by-year schedule table above to see exactly when your money is projected to double!</p>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Taxation on Mutual Funds (Updated)</h3>
        <p>When you eventually withdraw your lumpsum investment, your "Wealth Gained" (capital gains) is subject to taxation. Here are the current rules for Equity Mutual Funds in India:</p>
        <ul className="list-disc pl-6 space-y-2 mt-4 text-calc-darkGray">
          <li><strong>Short Term Capital Gains (STCG):</strong> If you sell your mutual fund units within 1 year of investing, your gains are taxed at a flat <strong>20%</strong>.</li>
          <li><strong>Long Term Capital Gains (LTCG):</strong> If you hold your investment for more than 1 year, gains up to ₹1.25 Lakhs per financial year are completely tax-free. Any gains exceeding ₹1.25 Lakhs are taxed at <strong>12.5%</strong>.</li>
        </ul>
  
        <h3 className="text-xl font-bold text-calc-black mt-8">Lumpsum vs. SIP: Which is better?</h3>
        <div className="bg-calc-beige/30 p-5 rounded-xl border border-calc-lightGray shadow-sm my-4">
          <p className="text-sm mb-2">Neither is strictly "better"—it depends on your cash flow and the market conditions:</p>
          <ul className="list-disc pl-6 space-y-1 text-sm">
            <li><strong>Choose Lumpsum if:</strong> You have a large amount of cash available immediately and your investment horizon is 5+ years, allowing you to ride out short-term market volatility.</li>
            <li><strong>Choose SIP if:</strong> You earn a monthly salary, want to automate your savings, and wish to benefit from "Rupee Cost Averaging" (buying more units when the market is down).</li>
          </ul>
        </div>
      </div>
    );
  }