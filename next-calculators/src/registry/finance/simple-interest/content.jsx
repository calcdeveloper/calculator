import React from 'react';


export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between simple interest and compound interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple interest is calculated only on the initial principal amount. Compound interest, on the other hand, is calculated on the principal amount as well as the accumulated interest of previous periods. As a result, compound interest grows your money much faster over time compared to simple interest."
        }
      },
      {
        "@type": "Question",
        "name": "How do I calculate simple interest for months instead of years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your loan or investment tenure is given in months, you must convert it into years before using the standard formula. You can do this by dividing the number of months by 12. For example, 6 months becomes 6/12 or 0.5 years."
        }
      },
      {
        "@type": "Question",
        "name": "Where is simple interest used in real life?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple interest is commonly used in short-term personal loans, informal lending between friends or family members, certain types of auto loans, and some basic savings accounts. It is less common in long-term investments or mortgages, which typically use compounding."
        }
      },
      {
        "@type": "Question",
        "name": "Does simple interest benefit the borrower or the lender?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Simple interest generally benefits the borrower because the total interest paid over the life of the loan will be lower than if the loan were compounded. Conversely, lenders and investors prefer compound interest to maximize their returns."
        }
      },
      {
        "@type": "Question",
        "name": "Can the simple interest amount ever be larger than the principal?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, but it requires either a very high interest rate or a very long time period. For example, if you borrow money at 10% simple interest for 11 years, the total interest paid (110%) will exceed the original principal amount."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Simple Interest Calculator: Fast & Accurate</h1>
        <p className="mb-4">
          Understanding how interest accumulates is the foundation of personal finance. Our <strong>Simple Interest Calculator</strong> is a straightforward, highly accurate tool designed to help you instantly determine the interest earned on an investment or the interest charged on a loan. Unlike compound interest, simple interest is linear—meaning you only earn or pay interest on the original amount you started with.
        </p>
        <p>
          Whether you are a student solving mathematical problems, an individual taking out a short-term personal loan, or someone lending money to a friend, this calculator removes the manual math. It is specifically optimized for Indian users, allowing you to input figures in Rupees and instantly view your total interest and final maturity amount without any confusing financial jargon.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Simple Interest Calculator</h2>
        <p className="mb-4">Calculating your interest takes just a few seconds. Follow these easy steps using our interactive tool, as illustrated in our standard example:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Core Inputs</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Principal Amount:</strong> Use the slider or input box to enter your starting amount. For example, a principal of <strong>₹100000</strong>.</li>
          <li><strong>Interest Rate (p.a):</strong> Enter the annual rate of interest. In our example, we use a rate of <strong>10%</strong>.</li>
          <li><strong>Time Period:</strong> Select the duration of the loan or investment in years. Here, we set it to <strong>5 Yr</strong>.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Instant Results</h3>
        <p className="mb-3">The calculator instantly processes the data to show a complete financial breakdown:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Total Interest: <span className="font-normal text-gray-700">The total extra money accrued over the period is calculated as <strong>₹50,000</strong>.</span></li>
          <li>Total Amount: <span className="font-normal text-gray-700">The final sum, combining the principal (<strong>₹1,00,000</strong>) and the interest, equals <strong>₹1,50,000</strong>.</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Analyze the Visual Data</h3>
        <p>
          A clear doughnut chart is generated alongside your results, giving you a visual representation of how your <strong>Total Interest</strong> compares to your initial <strong>Principal Amount</strong>. This makes it incredibly easy to see exactly what portion of your final payout is purely profit or cost.
        </p>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the Simple Interest Formula</h2>
        <p className="mb-4">
          Simple interest is one of the easiest financial concepts to grasp because it is entirely linear. The interest is determined by multiplying the principal amount by the interest rate and the time period. It explicitly ignores any interest accumulated in previous periods (which is what compound interest does).
        </p>
        
        <p className="mb-4">The fundamental mathematical formula used by our calculator is:</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-xl font-semibold text-calc-black overflow-x-auto mb-6">
          SI = (P &times; R &times; T) / 100
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-5 rounded-lg border border-gray-200 mb-6">
          <div className="flex items-start"><span className="font-bold text-calc-blue mr-2">SI:</span> Simple Interest (The extra money earned or paid)</div>
          <div className="flex items-start"><span className="font-bold text-calc-blue mr-2">P:</span> Principal Amount (The initial starting balance)</div>
          <div className="flex items-start"><span className="font-bold text-calc-blue mr-2">R:</span> Annual Interest Rate (The percentage rate per year)</div>
          <div className="flex items-start"><span className="font-bold text-calc-blue mr-2">T:</span> Time Period (The duration in years)</div>
        </div>

        <h3 className="font-bold text-lg text-calc-black mb-2 mt-6">Calculating the Total Final Amount</h3>
        <p className="mb-4">
          To find out the total amount you will have (or owe) at the very end of the tenure, you simply add the calculated Simple Interest back to your original Principal.
        </p>
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto mb-4">
          Total Amount (A) = Principal (P) + Simple Interest (SI)
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Practical Real-Life Examples</h2>
        <p className="mb-6">To better understand how simple interest works in everyday scenarios, let us walk through a couple of step-by-step practical examples.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: Lending Money to a Friend</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul lends ₹50,000 to his friend for starting a small business. They agree on a simple interest rate of 8% per annum. His friend promises to return the money after 3 years.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Formula applied:</strong> SI = (50,000 &times; 8 &times; 3) / 100</li>
              <li>• <strong>Total Interest Earned:</strong> ₹12,000</li>
              <li>• <strong>Total Amount Returned to Rahul:</strong> ₹62,000</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Result: Because the interest does not compound, Rahul earns exactly ₹4,000 every single year, totaling ₹12,000 over three years.</p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: A Short-Term Tractor Loan</h3>
            <p className="mb-3 text-sm text-gray-600">Amit takes a short-term agricultural loan of ₹2,00,000 to buy a used tractor. The bank charges a simple interest rate of 11% per annum. Amit plans to clear the loan in exactly 18 months (1.5 years).</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Formula applied:</strong> SI = (2,00,000 &times; 11 &times; 1.5) / 100</li>
              <li>• <strong>Total Interest Payable:</strong> ₹33,000</li>
              <li>• <strong>Total Amount to Repay:</strong> ₹2,33,000</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Result: By converting 18 months into 1.5 years, Amit can accurately calculate that his total debt obligation will be ₹2.33 Lakhs.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between simple interest and compound interest?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Simple interest is calculated only on the initial principal amount. Compound interest, on the other hand, is calculated on the principal amount as well as the accumulated interest of previous periods. As a result, compound interest grows your money much faster over time compared to simple interest.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How do I calculate simple interest for months instead of years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              If your loan or investment tenure is given in months, you must convert it into years before using the standard formula. You can do this by dividing the number of months by 12. For example, 6 months becomes 6/12 or 0.5 years. If the tenure is in days, divide by 365.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Where is simple interest used in real life?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Simple interest is commonly used in short-term personal loans, informal lending between friends or family members, certain types of auto loans, and some basic savings accounts. It is less common in long-term investments or mortgages, which typically use compounding mechanics.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does simple interest benefit the borrower or the lender?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Simple interest generally benefits the borrower because the total interest paid over the life of the loan will be significantly lower than if the loan were compounded. Conversely, lenders and long-term investors strongly prefer compound interest to maximize their wealth accumulation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Can the simple interest amount ever be larger than the principal?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, but it requires either a very high interest rate or a very long time period. For example, if you borrow money at 10% simple interest for 11 years, the total interest paid (110%) will exceed the original principal amount borrowed.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore More Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Take control of your finances. Compare loans, track investments, and plan your future with our suite of free tools:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">General EMI Calculator</a>
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan EMI</a>
          <a href="/calculator/finance/home-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Home Loan EMI</a>
          <a href="/calculator/finance/personal-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Personal Loan EMI</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">FD Calculator</a>
          <a href="/calculator/finance/rd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">RD Calculator</a>
          <a href="/calculator/finance/ppf" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">PPF Calculator</a>
          <a href="/calculator/finance/sip" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">SIP Calculator</a>
          <a href="/calculator/finance/lumpsum" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Lumpsum Returns</a>
          <a href="/calculator/finance/retirement" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Retirement Planning</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity Calculator</a>
          <a href="/calculator/finance/gst" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">GST Calculator</a>
        </div>
      </section>
      
    </div>
  );
}