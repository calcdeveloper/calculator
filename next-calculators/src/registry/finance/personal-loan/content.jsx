import React from 'react';


export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How is the Personal Loan EMI calculated?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Personal Loan EMI is calculated using the standard reducing balance formula: E = P x r x (1+r)^n / [(1+r)^n - 1]. The EMI comprises both the principal repayment and the interest amount. In the initial months, the interest component is higher, while in the later months, the principal component takes up a larger portion."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good CIBIL score for a personal loan in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, a CIBIL score of 750 and above is considered excellent for a personal loan. A high credit score not only increases your chances of fast approval but also helps you negotiate a lower interest rate with the bank or NBFC."
        }
      },
      {
        "@type": "Question",
        "name": "Can I prepay or foreclose my personal loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, most Indian banks allow you to prepay or foreclose your personal loan after a lock-in period (usually 6 to 12 months). However, they may charge a foreclosure fee ranging from 2% to 5% of the outstanding principal amount plus GST. Always check your loan agreement for exact terms."
        }
      },
      {
        "@type": "Question",
        "name": "Are there any hidden charges in a personal loan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "While calculating your EMI, also consider other costs like the Processing Fee (usually 1% to 2.5% of the loan amount), documentation charges, and GST. These are typically deducted upfront from the disbursed loan amount."
        }
      },
      {
        "@type": "Question",
        "name": "Why are personal loan interest rates higher than home loans?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Personal loans are 'unsecured' loans, meaning you do not have to pledge any asset (like a house or car) as collateral. Because the lender takes on a higher risk in case of a default, they charge a higher interest rate compared to secured loans."
        }
      },
      {
        "@type": "Question",
        "name": "Should I choose a longer or shorter repayment tenure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A shorter tenure means higher monthly EMIs but significantly lower total interest paid. A longer tenure reduces your monthly EMI burden but increases the total interest paid to the bank over time. Use the calculator to find a balance where the EMI is comfortably within your monthly budget."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Personal Loan EMI Calculator: Plan Your Repayment</h1>
        <p className="mb-4">
          A personal loan is a versatile, unsecured line of credit that can be a financial lifesaver during emergencies, medical crises, weddings, home renovations, or even debt consolidation. Because personal loans do not require collateral, banks and NBFCs disburse them quickly. However, this convenience comes at a cost: personal loans generally carry higher interest rates than secured loans.
        </p>
        <p>
          Our <strong>Personal Loan EMI Calculator</strong> is specifically designed for Indian borrowers to help navigate these costs. By determining your exact Equated Monthly Installment (EMI) before you even apply, you can avoid financial strain. This tool instantly shows you how much of your monthly budget will go toward the loan, how much total interest the bank will charge you, and helps you optimize your loan tenure to save maximum money.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Personal Loan Calculator</h2>
        <p className="mb-4">Calculating your financial commitment is effortless. Use the interactive sliders or directly type your exact figures into the input fields to get an instant breakdown of your loan:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Loan Requirements</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Loan Amount:</strong> Enter the total sum you wish to borrow. For instance, ₹5,00,000. Ensure this amount covers your need while keeping in mind the processing fees the bank might deduct.</li>
          <li><strong>Interest Rate (p.a):</strong> Input the annual percentage rate offered by your bank. For example, 12.5%. Personal loan rates in India typically range from 10.5% to 24% depending on your CIBIL score and employer profile.</li>
          <li><strong>Loan Tenure:</strong> Choose your repayment period. For example, 3 Years. Remember, personal loans usually have shorter tenures spanning 1 to 5 years.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Analyze Your Results</h3>
        <p className="mb-3">The calculator will instantly populate the dashboard with your critical repayment metrics:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Monthly EMI: <span className="font-normal text-gray-700">The exact amount you must pay every month. In this scenario, it is prominently displayed as ₹16,727.</span></li>
          <li>Total Interest: <span className="font-normal text-gray-700">The absolute cost of borrowing the money, which equals ₹1,02,165 over the tenure.</span></li>
          <li>Total Amount Payable: <span className="font-normal text-gray-700">The sum of your principal and interest combined, totaling ₹6,02,165.</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Visual Insights and Reports</h3>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Doughnut Chart: <span className="font-normal text-gray-700">A clear visual representation illustrating the ratio between your Principal Amount and the Total Interest payable.</span></li>
          <li>Action Buttons: <span className="font-normal text-gray-700">You can click "View Schedule" to see your month-by-month repayment breakdown, or click "Download PDF" to save the report for offline comparison with bank offers.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Personal Loan EMI Formula Explained</h2>
        <p className="mb-4">
          Financial institutions in India calculate personal loan EMIs using a standardized mathematical formula based on the <strong>reducing balance method</strong>. This means that with every EMI you pay, the principal outstanding decreases, and next month's interest is calculated only on the remaining lower principal.
        </p>
        <p className="mb-4">
          Our underlying engine uses the following universal equation to guarantee bank-level accuracy:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center overflow-x-auto mb-4">
          <span className="text-xl font-semibold text-calc-black">
             E = P &times; r &times; {"[ (1 + r)"}<sup>n</sup> {" / ((1 + r)"}<sup>n</sup> {" - 1) ]"}
          </span>
        </div>

        <div className="space-y-2 mt-6">
          <p><strong>Decoding the Variables:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>E</strong> = The Equated Monthly Installment (EMI) amount.</li>
            <li><strong>P</strong> = The Principal Loan Amount you are borrowing.</li>
            <li><strong>r</strong> = The Monthly Interest Rate. (Banks provide annual rates. To find 'r', divide the annual rate by 12, and then by 100. For 12.5%, r = 12.5 / 1200 = 0.010416).</li>
            <li><strong>n</strong> = The Loan Tenure in months. (For a 3-year loan, n = 3 &times; 12 = 36 months).</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-gray-600 bg-emerald-50 p-3 rounded border border-emerald-100">
          <strong>Smart Financial Tip:</strong> A minor difference in the interest rate can result in massive savings. Always negotiate the rate with your bank, maintaining a CIBIL score above 750 gives you the leverage to demand better terms!
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Real-Life Loan Scenarios</h2>
        <p className="mb-6">Understanding how adjusting your tenure impacts your wallet is crucial. Let us look at two scenarios to see the relationship between EMI affordability and interest burdens.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-calc-blue pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: The Balanced 3-Year Approach (Standard)</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul needs funds for a family wedding. He takes a <strong>Loan Amount of ₹5,00,000</strong>. The bank offers him an <strong>Interest Rate of 12.5% p.a.</strong>. He decides to spread the repayment over a <strong>Tenure of 3 Years</strong>.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Monthly EMI:</strong> ₹16,727</li>
              <li>• <strong>Total Interest Paid:</strong> ₹1,02,165</li>
              <li>• <strong>Total Amount Payable:</strong> ₹6,02,165</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: This is a balanced approach. The EMI of ₹16,727 is manageable for a mid-level salaried professional, and the interest outgo of roughly ₹1 Lakh is standard for a 5 Lakh unsecured loan over three years.</p>
          </div>

          <div className="border-l-4 border-red-400 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: The Aggressive 1-Year Repayment</h3>
            <p className="mb-3 text-sm text-gray-600">Priya needs ₹2,00,000 for a sudden medical emergency. She gets an interest rate of 14% p.a. Wanting to be debt-free quickly, she opts for a short tenure of just 1 Year (12 months).</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Monthly EMI:</strong> ₹17,958</li>
              <li>• <strong>Total Interest Paid:</strong> ₹15,502</li>
              <li>• <strong>Total Amount Payable:</strong> ₹2,15,502</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: Even though the interest rate (14%) is higher, Priya's total interest paid is extremely low (just ₹15,502). This perfectly illustrates how a shorter tenure drastically reduces the bank's interest earnings, saving the borrower money if they can afford the higher monthly EMI.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How is the Personal Loan EMI calculated?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Personal Loan EMI is calculated using the standard reducing balance formula. The EMI comprises both the principal repayment and the interest amount. In the initial months of your repayment schedule, the interest component is high, while in the later months, the principal component takes up a larger portion of the EMI.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is a good CIBIL score for a personal loan in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, a CIBIL score of 750 and above is considered excellent and highly favorable for a personal loan approval. A high credit score not only increases your chances of fast, hassle-free approval but also gives you leverage to negotiate a lower interest rate with the bank.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Can I prepay or foreclose my personal loan?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, most Indian banks and NBFCs allow you to prepay (part-payment) or completely foreclose your personal loan. However, there is usually a mandatory lock-in period (often 6 to 12 months). Additionally, lenders typically charge a foreclosure fee ranging from 2% to 5% of the outstanding principal amount, plus applicable GST.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Are there any hidden charges in a personal loan?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              When taking a personal loan, always account for the Processing Fee. Banks typically charge between 1% to 2.5% of the total loan amount as a processing fee, which is deducted upfront from the disbursed amount. There may also be minor documentation charges and stamp duty.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Why are personal loan interest rates higher than home loans?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Personal loans are classified as 'unsecured' debt. This means you do not have to pledge any physical asset (like property or a vehicle) as collateral. Because the lender assumes a 100% risk in the event of a default, they compensate for this risk by charging a higher rate of interest compared to secured loans like home or car loans.
            </div>
          </details>
          
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Should I choose a longer or shorter repayment tenure?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A shorter tenure results in higher monthly EMIs but significantly lowers the total interest paid to the bank. A longer tenure reduces your monthly EMI burden, making it easier on your cash flow, but drastically increases the total interest paid over time. You should use the calculator to find a sweet spot where the EMI is comfortably within 30-40% of your monthly disposable income.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore Related Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Looking to manage other aspects of your finances? Explore our comprehensive suite of free calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan</a>
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Fixed Deposit (FD)</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity</a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">General EMI</a>
          <a href="/calculator/finance/gst" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">GST Calculator</a>
          <a href="/calculator/finance/home-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Home Loan</a>
          <a href="/calculator/finance/lumpsum" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Lumpsum Calculator</a>
          <a href="/calculator/finance/ppf" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">PPF Calculator</a>
          <a href="/calculator/finance/rd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Recurring Deposit (RD)</a>
          <a href="/calculator/finance/retirement" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Retirement Planning</a>
          <a href="/calculator/finance/simple-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Simple Interest</a>
          <a href="/calculator/finance/sip" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">SIP Returns</a>
        </div>
      </section>
      
    </div>
  );
}