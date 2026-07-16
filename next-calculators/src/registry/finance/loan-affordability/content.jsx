import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How does the bank calculate my exact loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Banks use a universal risk metric called the Debt-to-Income (DTI) ratio, which is generally capped strictly at 50%. This rule means that the sum of your total monthly debt payments (including the new loan EMI you are applying for, existing car loans, personal loans, and credit card EMIs) cannot legally exceed 50% of your gross monthly income. The remaining 50% is assumed by the underwriter to cover your necessary living expenses, insurance, and taxes."
        }
      },
      {
        "@type": "Question",
        "name": "Why did my home loan get rejected if I have a very high salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Even with a remarkably high salary, your loan application will be instantly rejected if your current DTI ratio is too high. For example, if you earn ₹3 Lakhs per month but already pay ₹1.8 Lakhs in existing car loans and credit card EMIs, your DTI is 60%. The bank will refuse to lend to you, mathematically classifying you as 'over-leveraged' regardless of your high absolute income."
        }
      },
      {
        "@type": "Question",
        "name": "How can I strategically increase my loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can increase your loan eligibility by pulling three mathematical levers: 1) Increase your loan tenure (which significantly lowers the EMI, allowing you to fit a larger principal into your 50% DTI limit), 2) Aggressively pay off existing debts (which frees up DTI capacity), or 3) Apply with a co-borrower (like a working spouse) to combine your gross incomes and double your borrowing limit."
        }
      },
      {
        "@type": "Question",
        "name": "Does my unused credit card limit negatively affect my loan affordability?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, completely unused credit card limits do not affect your DTI calculation. However, if you have outstanding credit card EMI conversions or carry a large revolving balance every month, the bank will calculate approximately 5% of that outstanding balance and factor it in as an existing debt obligation, which drastically reduces your affordability."
        }
      },
      {
        "@type": "Question",
        "name": "Should I take the absolute maximum loan the bank algorithm approves?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely not. The bank's 50% DTI limit is a theoretical mathematical maximum designed to protect the bank's capital, not a personal budget recommendation for your household. Pushing your DTI to a full 50% makes you highly vulnerable to financial shocks like medical emergencies, job loss, or sudden interest rate hikes. Financial advisors recommend keeping your total DTI below 35% for long-term safety."
        }
      },
      {
        "@type": "Question",
        "name": "Does my CIBIL score affect how much loan I can afford?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, indirectly. A lower CIBIL score will not change your DTI limit, but it will force the bank to charge you a higher interest rate. Because a higher interest rate results in a higher EMI, you will hit your 50% DTI cap much faster, thereby reducing the total principal loan amount you are eligible to borrow."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Loan Affordability Calculator: Unlocking the Bank's Underwriting Algorithm</h1>
        <p className="mb-4 text-lg text-gray-600">
          When you walk into a bank to apply for a massive home loan, an auto loan, or a large-ticket personal loan, the bank's underwriting algorithm does not care about your dreams, your household budget, or your lifestyle. It cares strictly about one mathematical, cold-blooded metric: your <strong>Debt-to-Income (DTI) Ratio</strong>.
        </p>
        <p className="mb-4">
          Millions of consumers make the critical mistake of house-hunting or car-shopping before knowing their actual, mathematical borrowing limit. They spend months searching, they fall in love with a ₹2 Crore luxury apartment, they negotiate with the builder, and they put down a non-refundable token amount, only to discover weeks later that the bank will legally only finance ₹1.2 Crores based on their salary structure. This lack of preparation leads to broken deals, lost deposits, extreme frustration, and a massive waste of time.
        </p>
        <p className="mb-4">
          To prevent this, you must understand exactly how a bank evaluates your financial profile. Banks use specialized software that takes your gross income, scrubs your credit report for every existing liability, and reverse-engineers a maximum loan limit that you are not allowed to cross. If you cross it, your application is denied. Period.
        </p>
        <p className="mb-4">
          Our forensic <strong>Loan Affordability Calculator</strong> does exactly this. It reverses the standard EMI math. Instead of telling you the EMI for a specific loan amount you wish for, it acts exactly like a bank's internal underwriting system. By analyzing your gross income and your existing debt obligations, this tool calculates the absolute maximum loan amount a bank will approve, empowering you to shop for assets strictly within your approved, pre-qualified mathematical bandwidth.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Loan Affordability Calculator to Prevent Rejection</h2>
        <p className="mb-4">
          To generate an accurate, down-to-the-rupee breakdown of your true borrowing capacity, you must provide your current financial baseline with absolute honesty. Remember, the bank will pull your CIBIL report and uncover everything anyway.
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Gross Monthly Income (₹):</strong> This is your total monthly salary BEFORE taxes, PF deductions, or health insurance premiums are taken out. If you are applying jointly with a spouse to maximize your borrowing limit, enter your combined gross income. Do not include volatile income like annual bonuses or stock options unless you have a three-year track record of receiving them consistently.</li>
          <li><strong>Total Existing Monthly EMIs (₹):</strong> The sum total of every single debt obligation you currently pay each month. This includes existing home loans, car loans, two-wheeler loans, personal loans, student loans, and most importantly, active credit card EMIs. Be ruthlessly honest here.</li>
          <li><strong>Cash Available for Down Payment (₹):</strong> The liquid cash you have sitting in your savings account, fixed deposits, or mutual funds that you are absolutely ready to liquidate and deploy today. The calculator will mathematically add this to your max loan amount to give you your absolute maximum property purchasing power.</li>
          <li><strong>Expected Interest Rate (% p.a.):</strong> The current market interest rate for the loan product you are seeking (e.g., 8.5% for a home loan, 10% for a car loan).</li>
          <li><strong>Loan Tenure (Years):</strong> The duration over which you intend to repay the new loan. This is a massive lever. A longer tenure will stretch out the payments, significantly lowering the EMI and artificially inflating the total loan principal you qualify for.</li>
        </ul>
        <p className="mt-4">
          Upon clicking calculate, the engine will immediately generate a detailed <strong>Breakup Table</strong> revealing your maximum DTI capacity, the exact EMI buffer you have remaining, and the maximum capital the bank will legally wire to your account.
        </p>
      </section>

      {/* THE 50% DTI RULE */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Golden Rule of Bank Underwriting: The 50% DTI Limit</h2>
        <p className="mb-4">
          How does a bank actually decide if you can afford a loan? They do not look at your bank balance. They do not care if you drive a nice car. They use a universal, globally recognized risk-management metric called the Debt-to-Income (DTI) ratio.
        </p>
        <p className="mb-4 font-bold text-blue-900">
          In India, the vast majority of lenders, regulated by the RBI, enforce a strict maximum DTI cap of exactly 50%.
        </p>
        <p className="mb-4">
          This non-negotiable rule mandates that the absolute total of all your monthly debt payments (your existing EMIs plus the projected new loan EMI you are currently applying for) cannot legally exceed 50% of your gross monthly income. 
        </p>
        <p className="mb-4">
          Why did the banking industry settle on 50%? The bank's risk management department operates on a very conservative assumption: the remaining 50% of your salary is strictly required for basic human survival and mandatory government compliance. This includes paying income taxes (which can easily eat up 20-30% of your gross pay), buying groceries, paying utility bills, school fees, fueling your car, and maintaining emergency liquidity. 
        </p>
        <p className="mb-4">
          If a bank recklessly allows your DTI to hit 70%, they know that the moment your car breaks down, your roof leaks, or someone in your family gets sick, you will not have the cash flow to survive. You will immediately default on your mortgage. The 50% cap is not there to ruin your dreams; it exists to protect the bank's capital from your inevitable default.
        </p>
        <p className="mb-4 text-sm text-blue-800 italic">
          (Note: For extreme high-net-worth individuals earning over ₹5 Lakhs per month, some aggressive private banks may stretch the DTI limit to 60%. They assume that someone earning ₹5 Lakhs can easily survive on 40% of their income, as basic living expenses do not scale linearly with massive wealth. But for 95% of the population, 50% remains the universal baseline).
        </p>
      </section>

      {/* THE DANGER OF BEING OVER-LEVERAGED */}
      <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Over-leveraged Trap: Why High Earners Are Routinely Rejected</h2>
        <p className="mb-4">
          One of the most common shocks in personal finance is a highly-paid corporate executive getting a home loan application brutally rejected. How does someone earning ₹3 Lakhs a month get denied when someone earning ₹80,000 gets approved?
        </p>
        <p className="mb-4 font-semibold">
          They get rejected because absolute income is irrelevant without context. The bank only cares about the <em>ratio</em>.
        </p>
        <p className="mb-4">
          Let us look at the math. If that executive earns ₹3 Lakhs a month gross, their absolute maximum DTI limit is strictly capped at ₹1.5 Lakhs (50%). If they are currently paying ₹80,000 for a luxury SUV EMI, ₹40,000 for a massive personal loan, and ₹40,000 in various credit card EMIs for vacations and electronics, their existing debt obligations total ₹1.6 Lakhs. 
        </p>
        <p className="mb-4 font-bold text-red-900 text-lg">
          Their current DTI is already at 53.3%. They are legally classified by the banking system as "Over-leveraged."
        </p>
        <p className="mb-4">
          Despite earning a top 1% income, they have absolutely zero mathematical buffer left for a new EMI. The bank will flatly reject a new home loan application because the applicant is already drowning in systemic consumer debt. 
        </p>
        <p className="mb-4">
          If you use our Loan Affordability Calculator and the 'Max New EMI' output shows zero (and the status flashes "Over-leveraged"), you are currently trapped in this exact scenario. You must aggressively clear out your existing liabilities before you even think about approaching a bank for new financing.
        </p>
      </section>

      {/* STRATEGIES TO INCREASE AFFORDABILITY */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategic Moves: How to Artificially Boost Your Loan Eligibility</h2>
        <p className="mb-4">
          If you have run the calculator and the resulting 'Max Affordable Loan' is ₹50 Lakhs, but the dream house you desperately want costs ₹70 Lakhs, you are facing a massive ₹20 Lakh shortfall. Do not panic. You have three primary financial levers you can pull to manipulate the math and force the bank's algorithm to approve a significantly higher amount:
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Lever 1: Drastically Stretch the Loan Tenure</h3>
        <p className="mb-4">
          This is the fastest, easiest way to get more capital approved instantly. The bank's DTI algorithm only looks at your <em>monthly EMI payment</em>; it does not care about how long you are in debt. If you applied for a 15-year loan, switch the application to a 25-year or a 30-year loan. 
        </p>
        <p className="mb-4">
          Stretching the tenure drastically reduces the monthly EMI. Because the new, lower EMI is smaller, it easily fits inside your 50% DTI limit, allowing the bank to approve a massively larger total principal amount. 
        </p>
        <p className="mb-4 italic text-sm text-gray-600 font-medium">
          Warning: While this gets you the keys to the house today, stretching a loan to 30 years means you will pay tens of millions of rupees in extra, compounding cumulative interest to the bank over your lifetime. Use this lever with extreme caution.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Lever 2: Annihilate Existing Debt</h3>
        <p className="mb-4">
          If you are currently paying ₹15,000 a month for a car loan that only has ₹2 Lakhs left on the outstanding balance, you are wasting valuable DTI space. Take cash from your emergency savings, liquidate some mutual funds, and wipe out that car loan completely before applying for the home loan. 
        </p>
        <p className="mb-4">
          The moment that car loan is officially closed, your CIBIL report updates, and that ₹15,000 is instantly added back to your available DTI capacity. In the context of a 20-year home loan at 8.5%, freeing up a ₹15,000 monthly buffer translates to an extra ₹17.3 Lakhs in home loan eligibility. You just bought yourself a much better house simply by restructuring your debt.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Lever 3: Deploy a Co-Applicant</h3>
        <p className="mb-4">
          If your individual income is completely maxed out, you must bring in reinforcements. Add your working spouse, your employed parent, or your working child to the home loan application as a co-borrower. 
        </p>
        <p className="mb-4">
          The bank will instantly combine both of your gross incomes into a single, massive pool. If you earn ₹1 Lakh per month and your spouse earns ₹1 Lakh per month, your combined DTI limit jumps from ₹50,000 to ₹1,00,000 overnight, effectively doubling your purchasing power and opening up entirely new tiers of real estate.
        </p>
      </section>
      
      {/* CIBIL SCORE IMPACT */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Invisible Cap: How CIBIL Scores Restrict Affordability</h2>
        <p className="mb-4">
          While DTI is the primary driver of affordability, your CIBIL score acts as the invisible hand that can either help or hurt you. Your CIBIL score does not directly change the 50% rule. However, it dictates the <em>Interest Rate</em> the bank will offer you.
        </p>
        <p className="mb-4">
          If you have a pristine 800 CIBIL score, the bank will offer you their lowest premium rate (e.g., 8.35%). If your CIBIL is a mediocre 650, they will classify you as a high-risk borrower and penalize you with a higher rate (e.g., 9.5%).
        </p>
        <p className="mb-4">
          Because a higher interest rate mathematically produces a higher monthly EMI for the exact same principal amount, the borrower with the 650 CIBIL score will hit their 50% DTI cap much faster. Therefore, poor credit literally reduces the total amount of money you are allowed to borrow. Maintaining an elite credit score is paramount to maximizing your loan affordability.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How does the bank calculate my exact loan affordability?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Banks use a universal risk metric called the Debt-to-Income (DTI) ratio, which is generally capped strictly at 50%. This rule means that the sum of your total monthly debt payments (including the new loan EMI you are applying for, existing car loans, personal loans, and credit card EMIs) cannot legally exceed 50% of your gross monthly income. The remaining 50% is assumed by the underwriter to cover your necessary living expenses, insurance, and taxes.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why did my home loan get rejected if I have a very high salary?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Even with a remarkably high salary, your loan application will be instantly rejected if your current DTI ratio is too high. For example, if you earn ₹3 Lakhs per month but already pay ₹1.8 Lakhs in existing car loans and credit card EMIs, your DTI is 60%. The bank will refuse to lend to you, mathematically classifying you as 'over-leveraged' regardless of your high absolute income.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How can I strategically increase my loan affordability?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You can increase your loan eligibility by pulling three mathematical levers: 1) Increase your loan tenure (which significantly lowers the EMI, allowing you to fit a larger principal into your 50% DTI limit), 2) Aggressively pay off existing debts (which frees up DTI capacity), or 3) Apply with a co-borrower (like a working spouse) to combine your gross incomes and double your borrowing limit.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Does my unused credit card limit negatively affect my loan affordability?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Usually, completely unused credit card limits do not affect your DTI calculation. However, if you have outstanding credit card EMI conversions or carry a large revolving balance every month, the bank will calculate approximately 5% of that outstanding balance and factor it in as an existing debt obligation, which drastically reduces your affordability.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Should I take the absolute maximum loan the bank algorithm approves?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Absolutely not. The bank's 50% DTI limit is a theoretical mathematical maximum designed to protect the bank's capital, not a personal budget recommendation for your household. Pushing your DTI to a full 50% makes you highly vulnerable to financial shocks like medical emergencies, job loss, or sudden interest rate hikes. Financial advisors recommend keeping your total DTI below 35% for long-term safety.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Does my CIBIL score affect how much loan I can afford?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, indirectly. A lower CIBIL score will not change your DTI limit, but it will force the bank to charge you a higher interest rate. Because a higher interest rate results in a higher EMI, you will hit your 50% DTI cap much faster, thereby reducing the total principal loan amount you are eligible to borrow.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
