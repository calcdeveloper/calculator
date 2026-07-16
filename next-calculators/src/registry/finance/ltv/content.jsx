import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a Loan to Value (LTV) Ratio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Loan to Value (LTV) ratio is a financial metric used by lenders to assess the risk of a loan. It compares the requested loan amount to the total appraised value of the property. For example, a ₹80 Lakh loan on a ₹1 Crore property yields an 80% LTV."
        }
      },
      {
        "@type": "Question",
        "name": "Why is LTV important for EMI calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your LTV dictates your maximum eligible loan amount. Your Equated Monthly Installment (EMI) is calculated directly on this principal amount. Additionally, a lower LTV (putting down a larger down payment) often secures a lower interest rate, which drastically reduces your monthly EMI."
        }
      },
      {
        "@type": "Question",
        "name": "What is the maximum LTV allowed in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As per RBI guidelines, the maximum LTV for residential properties is 90% for loans up to ₹30 Lakhs, 80% for loans between ₹30 Lakhs and ₹75 Lakhs, and 75% for loans above ₹75 Lakhs. Commercial property LTVs are generally capped lower, around 50% to 60%."
        }
      },
      {
        "@type": "Question",
        "name": "How does employment type (Salaried vs Self-employed) affect LTV?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks perceive salaried individuals as lower-risk due to stable, predictable monthly income, often granting them the maximum permissible LTV. Self-employed individuals have fluctuating incomes, so lenders may restrict their LTV by 5% to 10% as a risk mitigation strategy, requiring a larger down payment."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a 100% LTV Home Loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The Reserve Bank of India strictly prohibits 100% funding for property purchases. The absolute maximum is 90% for affordable housing (under ₹30 Lakhs). You must fund the remaining down payment plus stamp duty and registration charges out of your own pocket."
        }
      },
      {
        "@type": "Question",
        "name": "How does property type affect my EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Commercial properties carry higher default risks. Lenders counter this by capping the LTV (usually 55-60%), offering shorter loan tenors, and charging higher interest rates compared to residential properties. These factors combine to create a significantly higher EMI burden for commercial real estate."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      
      {/* SEO SCHEMA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* INTRODUCTION */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Loan to Value EMI Calculator: Maximize Your Borrowing Power</h1>
        <p className="mb-4 text-lg text-gray-600">
          When applying for a mortgage, a Loan Against Property (LAP), or commercial real estate financing, your salary alone does not determine your approval. The single most critical metric evaluated by a bank's underwriter is your <strong>Loan-to-Value (LTV) Ratio</strong>. This ratio dictates the absolute maximum capital a bank is legally allowed to lend you.
        </p>
        <p className="mb-4">
          The LTV ratio is a mathematical measurement of lending risk. It compares the amount of money you wish to borrow against the total appraised value of the asset you are buying. By dividing the loan amount by the property value, the bank determines how much "skin in the game" you have. In India, the Reserve Bank of India (RBI) sets strict, non-negotiable LTV limits to prevent systemic banking collapses.
        </p>
        <p className="mb-4">
          Our advanced <strong>Loan to Value EMI Calculator</strong> bridges the gap between regulatory guidelines and your monthly budget. It is designed to help homebuyers and real estate investors instantly understand their maximum eligible loan amount. By inputting your employment type, property value, and loan tenor, this tool reveals your exact LTV percentage, the required down payment, and provides an instant estimation of your monthly EMI (Equated Monthly Installment).
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the LTV EMI Calculator</h2>
        <p className="mb-4">
          To generate an accurate Loan-to-Value ratio and EMI schedule, you must provide the following critical details:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Employment Type:</strong> Choose between Salaried and Self-employed. Banks assess risk differently based on your income source. Salaried individuals generally secure slightly higher LTV ratios and lower interest rates compared to self-employed individuals due to perceived income stability.</li>
          <li><strong>Property Value (Rs.):</strong> Enter the total appraised cost of the property. This is the cornerstone of the calculation, as it determines which regulatory RBI LTV slab you fall into.</li>
          <li><strong>Property Type:</strong> Select Residential or Commercial. Residential properties allow for much higher LTVs (up to 90%), while commercial properties are generally considered higher risk and are capped much lower (around 55-60%).</li>
          <li><strong>Tenor (Years):</strong> The duration over which you intend to repay the loan. A longer tenor reduces your monthly EMI but significantly increases your total interest payout.</li>
          <li><strong>Rate of Interest (%):</strong> The annual interest rate offered by your bank. This is used to calculate your estimated monthly EMI based on the maximum loan amount you are eligible for.</li>
        </ul>
        <p className="mt-4">
          The calculator will process these variables to instantly output your <strong>Max Eligible Loan Amount</strong>, your mandatory out-of-pocket <strong>Down Payment</strong>, and your estimated <strong>Monthly EMI</strong>.
        </p>
      </section>

      {/* THE RBI GUIDELINES ON LTV */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding RBI LTV Guidelines in India</h2>
        <p className="mb-4">
          Unlike personal loans where the bank lends based purely on your credit score, home loans are secured assets. If you default, the bank seizes the property. However, real estate markets fluctuate. If a bank funds 100% of a house and the housing market crashes by 10%, the bank is instantly holding "negative equity."
        </p>
        <p className="mb-4">
          To prevent a subprime mortgage crisis, the Reserve Bank of India mandates strict LTV caps for residential properties:
        </p>
        <ul className="list-disc pl-6 space-y-3 mb-6">
          <li><strong>Properties up to ₹30 Lakhs:</strong> Max LTV of 90%. (Minimum 10% Down Payment). This is designed to promote affordable housing.</li>
          <li><strong>Properties between ₹30 Lakhs and ₹75 Lakhs:</strong> Max LTV of 80%. (Minimum 20% Down Payment). This is the standard middle-class housing slab.</li>
          <li><strong>Properties above ₹75 Lakhs:</strong> Max LTV of 75%. (Minimum 25% Down Payment). Luxury properties carry higher liquidity risk, requiring buyers to put more of their own cash on the line.</li>
        </ul>
        <p className="mb-4 font-semibold text-blue-900">
          Important Note on Ancillary Costs:
        </p>
        <p className="mb-4">
          It is critical to understand that the "Property Value" considered by the bank does NOT include Stamp Duty, Registration Charges, or Brokerage Fees (except in very specific affordable housing cases under ₹10 Lakhs). You must fund these additional expenses (which usually amount to 5-7% of the property value) entirely out of pocket, on top of your required down payment.
        </p>
      </section>

      {/* COMMERCIAL VS RESIDENTIAL */}
      <section className="bg-amber-50/50 p-8 rounded-2xl border border-amber-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Commercial vs. Residential Properties: The Risk Divide</h2>
        <p className="mb-4">
          Our calculator includes a toggle for Property Type because banks view these two asset classes fundamentally differently. 
        </p>
        <p className="mb-4">
          A residential home is a basic human need. Even during a massive economic recession, individuals will prioritize paying their home loan to avoid eviction. Therefore, residential loans are considered the safest asset class in a bank's portfolio, qualifying for the lowest interest rates and the highest LTVs (up to 90%).
        </p>
        <p className="mb-4">
          Conversely, a commercial property (an office space, a retail shop, or a warehouse) is purely an economic vehicle. During a recession, a struggling business owner will abandon a commercial lease long before they stop paying for their own home. Commercial real estate is highly susceptible to economic downturns, extended vacancy periods, and illiquidity.
        </p>
        <p className="mb-4 font-bold text-amber-900">
          How this affects your loan:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>LTV Capped at 50-60%:</strong> You will rarely get 80% funding for a commercial property. Be prepared to bring a massive 40-50% down payment to the table.</li>
          <li><strong>Higher Interest Rates:</strong> Commercial loans typically carry interest rates 1% to 3% higher than residential mortgages.</li>
          <li><strong>Shorter Tenors:</strong> While home loans can stretch to 30 years, commercial loans are usually capped at 10 to 15 years, drastically increasing your monthly EMI burden.</li>
        </ul>
      </section>
      
      {/* SALARIED VS SELF EMPLOYED */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Impact of Employment Type: Salaried vs. Self-Employed</h2>
        <p className="mb-4">
          The source of your income heavily dictates your borrowing power. When you select "Salaried" in our calculator, you are signaling to the bank that you receive a fixed, predictable paycheck every single month. This predictability allows the bank to comfortably extend the maximum permissible LTV (e.g., 80% for a ₹50 Lakh house).
        </p>
        <p className="mb-4">
          If you select "Self-employed" (a business owner, freelancer, or professional consultant), the risk profile shifts. Business incomes fluctuate. A self-employed individual might make ₹5 Lakhs one month and ₹0 the next. To insulate themselves against this volatility, lenders often apply a "haircut" to self-employed applications.
        </p>
        <p className="mb-4">
          Even if the RBI allows an 80% LTV, a conservative bank might restrict a self-employed applicant to a 70% or 75% LTV, forcing them to contribute a larger down payment. Furthermore, while salaried employees only need to provide 3-6 months of payslips, self-employed individuals must provide 2-3 years of audited Income Tax Returns (ITR), Profit & Loss statements, and Balance Sheets to prove income stability.
        </p>
      </section>

      {/* HOW LTV IMPACTS EMI */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How Your LTV Dictates Your EMI and Interest Rate</h2>
        <p className="mb-4">
          Your EMI (Equated Monthly Installment) is a direct byproduct of your LTV. The math is simple: a higher LTV means you are borrowing more principal, which immediately inflates your monthly payment. 
        </p>
        <p className="mb-4">
          However, there is a hidden secondary effect that many borrowers miss: <strong>Risk-Based Pricing</strong>.
        </p>
        <p className="mb-4">
          Banks price their interest rates based on the risk they are taking. If you push for the absolute maximum LTV (e.g., 90% on a ₹30 Lakh flat), the bank has very little equity cushion. To compensate for this heightened risk, they will charge you a higher interest rate (e.g., 9.5%). 
        </p>
        <p className="mb-4">
          If, instead, you aggressively save up cash and approach the bank asking for only a 60% LTV on that same flat, you represent virtually zero risk. The bank knows that even if you default, they can easily auction the flat and recover their 60%. As a reward for this safety, they will offer you their prime, rock-bottom interest rate (e.g., 8.25%).
        </p>
        <p className="mb-4 font-semibold text-gray-800">
          Therefore, lowering your LTV creates a compounding financial benefit: you pay interest on a smaller principal balance, AND you pay a lower interest rate on that balance, slashing your EMI and saving you Lakhs in long-term interest.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is a Loan to Value (LTV) Ratio?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Loan to Value (LTV) ratio is a financial metric used by lenders to assess the risk of a loan. It compares the requested loan amount to the total appraised value of the property. For example, a ₹80 Lakh loan on a ₹1 Crore property yields an 80% LTV.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is LTV important for EMI calculation?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Your LTV dictates your maximum eligible loan amount. Your Equated Monthly Installment (EMI) is calculated directly on this principal amount. Additionally, a lower LTV (putting down a larger down payment) often secures a lower interest rate, which drastically reduces your monthly EMI.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the maximum LTV allowed in India?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              As per RBI guidelines, the maximum LTV for residential properties is 90% for loans up to ₹30 Lakhs, 80% for loans between ₹30 Lakhs and ₹75 Lakhs, and 75% for loans above ₹75 Lakhs. Commercial property LTVs are generally capped lower, around 50% to 60%.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does employment type (Salaried vs Self-employed) affect LTV?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Banks perceive salaried individuals as lower-risk due to stable, predictable monthly income, often granting them the maximum permissible LTV. Self-employed individuals have fluctuating incomes, so lenders may restrict their LTV by 5% to 10% as a risk mitigation strategy, requiring a larger down payment.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I get a 100% LTV Home Loan?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. The Reserve Bank of India strictly prohibits 100% funding for property purchases. The absolute maximum is 90% for affordable housing (under ₹30 Lakhs). You must fund the remaining down payment plus stamp duty and registration charges out of your own pocket.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does property type affect my EMI?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Commercial properties carry higher default risks. Lenders counter this by capping the LTV (usually 55-60%), offering shorter loan tenors, and charging higher interest rates compared to residential properties. These factors combine to create a significantly higher EMI burden for commercial real estate.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
