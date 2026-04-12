import React from 'react';
import { Helmet } from "react-helmet-async";

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is an Equated Monthly Installment (EMI)?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both the principal amount and the interest accumulated, ensuring that the loan is fully paid off within a specific number of years."
        }
      },
      {
        "@type": "Question",
        "name": "How does my loan tenure affect my EMI and total interest?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The loan tenure has a huge impact on your borrowing cost. A longer tenure (e.g., 20 years) drastically reduces your monthly EMI, making it easier on your monthly budget. However, it significantly increases the total interest you will pay to the bank over the life of the loan. Conversely, a shorter tenure increases the monthly EMI but saves you money on interest."
        }
      },
      {
        "@type": "Question",
        "name": "Can I prepay my loan to reduce the EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! When you make a partial prepayment towards your loan, it directly reduces your outstanding principal balance. After a prepayment, you can ask your bank to either reduce your monthly EMI amount while keeping the loan tenure the same, or keep the EMI constant but reduce the overall loan tenure. Reducing the tenure saves more interest in the long run."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between fixed rate and floating rate EMIs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A fixed-rate loan means your interest rate and EMI remain exactly the same throughout the entire loan tenure. A floating-rate loan (common in Indian home loans) is linked to external benchmarks like the RBI Repo Rate. If the RBI increases rates, your floating rate will go up, which will either increase your monthly EMI or extend your loan tenure."
        }
      },
      {
        "@type": "Question",
        "name": "Does my CIBIL score affect my EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. In India, a high CIBIL score (usually 750 or above) demonstrates to banks that you are a low-risk borrower, allowing you to secure loans at the lowest possible interest rates. Lower interest rates directly result in a lower monthly EMI. A poor CIBIL score will attract higher interest rates, resulting in a higher EMI burden."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a flat interest rate and a reducing balance rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A flat interest rate calculates interest on the original loan amount throughout the entire tenure, making your total interest cost very high. A reducing balance rate (which this standard EMI calculator uses and what most regulated Indian banks use) calculates interest only on the remaining outstanding principal. Always insist on a reducing balance loan."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- ENHANCED SEO TAGS --- */}
      <Helmet>
        <title>EMI Calculator India | Calculate Personal, Home & Car Loan EMI</title>
        <meta 
          name="description" 
          content="Calculate your Equated Monthly Installment (EMI) for home loans, car loans, and personal loans instantly. Plan your repayment schedule accurately." 
        />
        <meta name="keywords" content="EMI calculator, loan calculator india, home loan emi, personal loan emi, car loan emi, calculate emi formula, sbi emi calculator, hdfc loan calculator, reducing balance emi, loan amortization" />
        
        {/* URL Slug Suggestion: /calculator/finance/emi */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free EMI Calculator India | CalcPilot" />
        <meta property="og:description" content="Instantly calculate your monthly loan repayments for any loan type, including complete interest breakdowns." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- MAIN CONTENT START --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Universal EMI Calculator for Borrowers</h1>
        <p className="mb-4">
          Taking a loan is one of the most significant financial decisions you will make. Whether you are applying for a Home Loan to buy your dream house, a Car Loan to upgrade your vehicle, or a Personal Loan to manage a sudden financial emergency, understanding your repayment obligations before signing any documents is critical. 
        </p>
        <p className="mb-4">
          An Equated Monthly Installment (EMI) is the fixed monthly payment you make to your bank or Non-Banking Financial Company (NBFC) to clear your debt. Each EMI payment is broken down into two parts: a portion goes toward paying off the interest charged by the lender, and the remaining portion goes toward paying down your actual borrowed amount (the principal).
        </p>
        <p>
          Our Universal EMI Calculator is designed specifically for the Indian financial market. It provides penny-perfect precision, empowering you to calculate your monthly cash outflows instantly, compare loan offers from major Indian banks (like SBI, HDFC, ICICI), and design a debt repayment schedule that fits perfectly into your monthly budget.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the EMI Calculator</h2>
        <p className="mb-4">Using our EMI calculator is quick and intuitive. Just use the sliders or type your details into the input boxes to instantly see your loan repayment breakdown:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Loan Details</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Loan Amount:</strong> Enter or slide to the total principal amount you plan to borrow for your home, car, or personal needs.</li>
          <li><strong>Interest Rate (p.a):</strong> Input the annual interest rate percentage offered by your bank or lender.</li>
          <li><strong>Loan Tenure:</strong> Select the total duration of your loan in years (Yr).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Repayment Plan</h3>
        <p className="mb-3">The calculator instantly updates the right panel with your final results:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Monthly EMI: <span className="font-normal text-gray-700">Your exact fixed monthly payment amount, displayed in the prominent green box.</span></li>
          <li>Principal Amount: <span className="font-normal text-gray-700">The original loan amount you are borrowing from the lender.</span></li>
          <li>Total Interest: <span className="font-normal text-gray-700">The total cost of borrowing over the entire loan tenure.</span></li>
          <li>Total Amount Payable: <span className="font-normal text-gray-700">The overall sum you will pay back to the bank by the end of the tenure (Principal Amount + Total Interest).</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Analyze & Download</h3>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Visual Breakdown: <span className="font-normal text-gray-700">Check the doughnut chart to easily visualize the ratio of your Principal Amount versus the Total Interest paid.</span></li>
          <li>View Schedule & Download PDF: <span className="font-normal text-gray-700">Click these buttons to access your complete month-by-month amortization schedule or save it directly to your device for offline reference.</span></li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Mathematical EMI Formula</h2>
        <p className="mb-4">
          All major, regulated Indian banks utilize the standard "Reducing Balance" mathematical model to calculate the monthly amortization of a loan. This means that as you pay down the principal each month, the interest for the next month is calculated only on the remaining balance, not the original starting amount.
        </p>
        
        {/* Math Formula Box */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-semibold text-calc-black overflow-x-auto my-6">
          E = P &times; r &times; {`[ (1 + r)`}<sup>n</sup> {` / ((1 + r)`}<sup>n</sup> {`- 1) ]`}
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
          <div><strong>E</strong> = EMI (Your exact Equated Monthly Installment)</div>
          <div><strong>P</strong> = Principal Loan Amount (Total borrowed)</div>
          <div><strong>r</strong> = Monthly Interest Rate (Annual Rate divided by 12, then divided by 100)</div>
          <div><strong>n</strong> = Total Loan Tenure in Months (e.g., 5 years = 60 months)</div>
        </div>

        <h3 className="font-bold text-xl mb-2 text-calc-black">Understanding Loan Amortization</h3>
        <p>
          It is important to understand that your EMI is not split equally between principal and interest. In the initial years of your loan (especially for long-term home loans), a massive chunk of your EMI goes entirely toward paying the interest. Only a small fraction reduces your principal balance. As the years go by, this ratio flips. Toward the end of your loan tenure, almost your entire EMI goes toward paying off the principal.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Real-Life Worked Examples</h2>
        <p className="mb-6">To demonstrate how interest rates and loan tenures dramatically affect your finances, let's examine three very common Indian borrowing scenarios:</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario 1: The Personal Loan (Short-Term, High Rate)</h3>
            <p className="mb-2 text-sm">You need funds for a medical emergency or a wedding. You borrow <strong>₹5,00,000</strong> from a bank. Because personal loans are unsecured, the interest rate is higher at <strong>12.5% p.a.</strong> You decide to clear it in <strong>3 years (36 months)</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Principal (P):</strong> ₹5,00,000</li>
              <li><strong>Monthly Rate (r):</strong> 12.5% / 12 = 0.010416</li>
              <li><strong>Tenure (n):</strong> 36 months</li>
              <li><strong>Monthly EMI Result:</strong> <span className="font-bold text-calc-black">₹16,727</span></li>
              <li><strong>Total Interest Paid:</strong> ₹1,02,165</li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario 2: The Home Loan (Long-Term, Low Rate)</h3>
            <p className="mb-2 text-sm">You buy an apartment in Bangalore. You take a home loan of <strong>₹50,00,000</strong>. The bank offers a competitive rate of <strong>8.5% p.a.</strong> for a long tenure of <strong>20 years (240 months)</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Principal (P):</strong> ₹50,00,000</li>
              <li><strong>Monthly Rate (r):</strong> 8.5% / 12 = 0.007083</li>
              <li><strong>Tenure (n):</strong> 240 months</li>
              <li><strong>Monthly EMI Result:</strong> <span className="font-bold text-calc-black">₹43,391</span></li>
              <li><strong>Total Interest Paid:</strong> ₹54,13,879 <em className="text-red-500">(Notice that over 20 years, you pay more in interest than the original loan amount!)</em></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Scenario 3: The Car Loan (Medium-Term, Medium Rate)</h3>
            <p className="mb-2 text-sm">You finance a new hatchback and require a loan of <strong>₹8,00,000</strong>. The bank offers a rate of <strong>9.0% p.a.</strong> for <strong>5 years (60 months)</strong>.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Principal (P):</strong> ₹8,00,000</li>
              <li><strong>Monthly Rate (r):</strong> 9.0% / 12 = 0.0075</li>
              <li><strong>Tenure (n):</strong> 60 months</li>
              <li><strong>Monthly EMI Result:</strong> <span className="font-bold text-calc-black">₹16,607</span></li>
              <li><strong>Total Interest Paid:</strong> ₹1,96,391</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is an Equated Monthly Installment (EMI)?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are applied to both the principal amount and the interest accumulated, ensuring that the loan is fully paid off within a specific number of years.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How does my loan tenure affect my EMI and total interest?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The loan tenure has a huge impact on your borrowing cost. A longer tenure (e.g., 20 years) drastically reduces your monthly EMI, making it easier on your monthly budget. However, it significantly increases the total interest you will pay to the bank over the life of the loan. Conversely, a shorter tenure increases the monthly EMI but saves you a massive amount of money on overall interest.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Can I prepay my loan to reduce the EMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes! When you make a partial prepayment towards your loan, it directly reduces your outstanding principal balance. After a prepayment, you can ask your bank to either reduce your monthly EMI amount while keeping the loan tenure the same, or keep the EMI constant but reduce the overall loan tenure. Financial experts highly recommend reducing the tenure as it saves far more interest in the long run.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between fixed rate and floating rate EMIs?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A fixed-rate loan means your interest rate and EMI remain exactly the same throughout the entire loan tenure, protecting you from market fluctuations. A floating-rate loan (which is the standard for most Indian home loans) is linked to external benchmarks like the RBI Repo Rate. If the RBI increases its interest rates, your floating rate will go up, which will either increase your monthly EMI or extend your loan tenure automatically.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does my CIBIL score affect my EMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, absolutely. In India, a high CIBIL score (usually 750 or above) demonstrates to banks that you are a highly disciplined, low-risk borrower. This allows you to negotiate and secure loans at the lowest possible interest rates on the market. Lower interest rates directly result in a lower monthly EMI. Conversely, a poor CIBIL score will attract higher interest rates, resulting in a higher EMI burden.
            </div>
          </details>
          
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is the difference between a flat interest rate and a reducing balance rate?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A flat interest rate calculates interest on the FULL original loan amount throughout the entire tenure, never accounting for the fact that you are paying the loan down. This makes your total interest cost very high. A reducing balance rate (which this standard EMI calculator uses and what most regulated Indian banks are mandated to use) calculates interest ONLY on the remaining outstanding principal for that specific month. Always insist on a reducing balance loan to save money.
            </div>
          </details>
        </div>
      </section>

      {/* Internal Linking & Topic Clusters */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore Related Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Plan your entire financial lifecycle with our suite of free, specialized calculation tools designed for the Indian market:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan</a>
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Fixed Deposit (FD)</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity</a>
          <a href="/calculator/finance/gst" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">GST</a>
          <a href="/calculator/finance/home-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Home Loan</a>
          <a href="/calculator/finance/lumpsum" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Mutual Fund Lumpsum</a>
          <a href="/calculator/finance/personal-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Personal Loan</a>
          <a href="/calculator/finance/ppf" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">PPF</a>
          <a href="/calculator/finance/rd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Recurring Deposit (RD)</a>
          <a href="/calculator/finance/retirement" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Retirement Planning</a>
          <a href="/calculator/finance/simple-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Simple Interest</a>
          <a href="/calculator/finance/sip" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">SIP Returns</a>
        </div>
      </section>
      
    </div>
  );
}