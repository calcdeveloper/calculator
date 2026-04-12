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
        "name": "What is a Home Loan EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A Home Loan EMI (Equated Monthly Installment) is the fixed monthly payment you make to your bank or housing finance company to repay your mortgage. It consists of two parts: the principal repayment and the interest charge on the outstanding loan balance."
        }
      },
      {
        "@type": "Question",
        "name": "How does the loan tenure affect my Home Loan EMI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The loan tenure has a significant impact on your EMI and total interest. A longer tenure (e.g., 20 or 30 years) reduces your monthly EMI amount, making it easier on your monthly budget. However, it significantly increases the total interest you will pay to the bank over the life of the loan. Conversely, a shorter tenure increases your EMI but saves you money on total interest."
        }
      },
      {
        "@type": "Question",
        "name": "What are the tax benefits on a home loan in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In India, home loan borrowers enjoy significant tax benefits. Under Section 80C of the Income Tax Act, you can claim a deduction of up to ₹1.5 Lakhs on the principal repayment. Under Section 24(b), you can claim a deduction of up to ₹2 Lakhs on the interest paid for a self-occupied property. These deductions help reduce your overall taxable income."
        }
      },
      {
        "@type": "Question",
        "name": "Is it better to choose a fixed or floating interest rate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most home loans in India are taken on a floating interest rate. A floating rate fluctuates based on the RBI's repo rate, meaning your EMI or tenure may change over time. It is generally preferred because banks do not charge prepayment penalties on floating-rate home loans for individuals. Fixed rates remain constant but are usually priced 1% to 2% higher than floating rates."
        }
      },
      {
        "@type": "Question",
        "name": "How does prepaying my home loan help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Making partial prepayments towards your home loan principal directly reduces your outstanding balance. Because interest is calculated on the reducing balance, even a small yearly prepayment can knock off several years from your loan tenure and save you lakhs of rupees in interest. Most experts recommend using annual bonuses or tax refunds to make partial prepayments."
        }
      },
      {
        "@type": "Question",
        "name": "Does my down payment affect the loan amount?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Banks in India typically finance only 75% to 90% of the property's value. The remaining 10% to 25% must be paid by you upfront as a down payment. A higher down payment reduces your required loan amount, which directly lowers your monthly EMI and total interest burden."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Free Home Loan EMI Calculator India | Check EMI Instantly</title>
        <meta 
          name="description" 
          content="Calculate your Home Loan EMI, total interest, and amount payable. Use our free home loan calculator to plan your housing loan repayment schedule in India." 
        />
        <meta name="keywords" content="home loan EMI calculator, housing loan calculator, mortgage calculator India, home loan interest calculator, calculate home loan EMI, SBI home loan EMI, HDFC home loan calculator, ICICI home loan EMI, home loan repayment schedule, home loan amortization calculator" />
        
        {/* Suggested URL Slug: /calculator/finance/home-loan */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free Home Loan EMI Calculator India | Check EMI Instantly" />
        <meta property="og:description" content="Calculate your Home Loan EMI, total interest, and amount payable. Plan your dream home purchase accurately with our free housing loan calculator." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Home Loan EMI Calculator: Plan Your Dream Home</h1>
        <p className="mb-4">
          Buying a home is one of the most significant financial milestones and commitments you will make in your lifetime. Because housing loans typically involve borrowing large sums of money over extended periods—often ranging from 10 to 30 years—understanding your financial liability before signing the dotted line is absolutely crucial. A small difference in interest rates or a change in loan tenure can impact your finances by lakhs of rupees over the long term.
        </p>
        <p>
          Our highly accurate, easy-to-use <strong>Home Loan EMI Calculator</strong> is specifically designed to help Indian homebuyers take control of their property finances. Whether you are purchasing a ready-to-move-in flat, an under-construction apartment, or a residential plot, this tool gives you instant clarity. It allows you to estimate your fixed monthly payments, uncover the true cost of borrowing through total interest calculations, and view your complete amortization schedule so you can structure a repayment plan that perfectly fits your household budget.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Home Loan Calculator</h2>
        <p className="mb-4">Calculating your housing loan EMI is incredibly quick and intuitive. Just use the interactive sliders or type your specific details into the input boxes to instantly generate your mortgage repayment breakdown:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Loan Details</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Home Loan Amount:</strong> Enter or slide to the total principal amount you need to borrow from the bank. This is typically the property price minus your upfront down payment.</li>
          <li><strong>Interest Rate (p.a):</strong> Input the annual percentage rate offered by your chosen bank or housing finance company (e.g., 8.5%).</li>
          <li><strong>Loan Tenure:</strong> Select the total duration over which you plan to repay the housing loan, measured in years (Yr).</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Repayment Plan</h3>
        <p className="mb-3">The calculator instantly updates the right-hand panel with your final results:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium mb-6">
          <li>Monthly EMI: <span className="font-normal text-gray-700">Your exact fixed monthly payment amount, displayed clearly in the prominent green box.</span></li>
          <li>Principal Amount: <span className="font-normal text-gray-700">The original loan amount you are borrowing from the lender.</span></li>
          <li>Total Interest: <span className="font-normal text-gray-700">The total cost of borrowing over the entire loan tenure. This shows how much the bank earns from your loan.</span></li>
          <li>Total Amount Payable: <span className="font-normal text-gray-700">The overall sum you will pay back to the bank by the end of the tenure (Principal Amount + Total Interest).</span></li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 3: Analyze & Download</h3>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Visual Breakdown: <span className="font-normal text-gray-700">Check the doughnut chart to easily visualize the ratio of your Principal Amount versus the Total Interest paid.</span></li>
          <li>View Schedule & Download PDF: <span className="font-normal text-gray-700">Click these buttons to access your complete month-by-month amortization schedule or save it directly to your device for offline reference.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">Understanding the Home Loan Amortization Formula</h2>
        <p className="mb-4">
          In India, home loans are calculated based on the <strong>reducing balance method</strong>. This means that every time you pay your EMI, a portion goes toward the interest accrued for that month, and the rest goes toward reducing your principal loan amount. In the subsequent month, interest is charged only on the new, reduced principal balance.
        </p>
        <p className="mb-4">
          To calculate the Equated Monthly Installment (EMI) that ensures your loan is perfectly paid off by the end of your tenure, banks and financial institutions use a standard mathematical formula:
        </p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center overflow-x-auto mb-4">
          <span className="text-lg md:text-xl font-semibold text-calc-black">
             E = P &times; r &times; {"[ (1 + r)"}<sup>n</sup> {" / ((1 + r)"}<sup>n</sup> {" - 1) ]"}
          </span>
        </div>

        <div className="space-y-2 mt-6">
          <p><strong>Where:</strong></p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>E</strong> = The Equated Monthly Installment (EMI) you need to pay.</li>
            <li><strong>P</strong> = The Principal Loan Amount you borrowed.</li>
            <li><strong>r</strong> = The Monthly Interest Rate. (Note: Banks quote annual rates. To get the monthly rate, divide the annual rate by 12, and then by 100. For an 8.5% annual rate, r = 8.5 / 1200 = 0.007083).</li>
            <li><strong>n</strong> = The Loan Tenure in months. (For a 20-year loan, n = 20 &times; 12 = 240 months).</li>
          </ul>
        </div>
        <p className="mt-4 text-sm text-gray-600 bg-blue-50 p-3 rounded border border-blue-100">
          <strong>Pro Tip:</strong> During the initial years of your home loan, a massive portion of your EMI goes toward paying off the interest, while only a small fraction reduces the principal. In the later years, this ratio flips, and the majority of your EMI starts attacking the principal.
        </p>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Real-Life Home Loan Worked Examples</h2>
        <p className="mb-6">To better understand how different loan variables interact, let us look at two practical, step-by-step examples of housing loan calculations.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-emerald-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: The Standard 20-Year Mortgage</h3>
            <p className="mb-3 text-sm text-gray-600">Rahul is buying a flat in Mumbai. After his down payment, he requires a <strong>Home Loan of ₹50,00,000</strong>. His bank offers him an <strong>Interest Rate of 8.5% p.a.</strong>, and he chooses a standard <strong>Tenure of 20 Years</strong>.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Principal Amount:</strong> ₹50,00,000</li>
              <li>• <strong>Monthly EMI:</strong> ₹43,391</li>
              <li>• <strong>Total Interest Payable:</strong> ₹54,13,879</li>
              <li>• <strong>Total Amount Payable:</strong> ₹1,04,13,879</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: Over 20 years, Rahul will pay more in interest than the actual loan amount. This highlights the cost of long-term borrowing.</p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-white p-5 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: Choosing a Shorter Tenure</h3>
            <p className="mb-3 text-sm text-gray-600">Priya takes the exact same loan amount of <strong>₹50,00,000</strong> at the same <strong>8.5% interest rate</strong>, but she wants to become debt-free sooner. She opts for a shorter <strong>Tenure of 15 Years</strong>.</p>
            <ul className="list-none space-y-2 text-sm text-gray-700 font-medium">
              <li>• <strong>Principal Amount:</strong> ₹50,00,000</li>
              <li>• <strong>Monthly EMI:</strong> ₹49,237</li>
              <li>• <strong>Total Interest Payable:</strong> ₹38,62,656</li>
              <li>• <strong>Total Amount Payable:</strong> ₹88,62,656</li>
            </ul>
            <p className="mt-3 text-xs text-gray-500 italic">Insight: By increasing her EMI by just ₹5,846 per month compared to Rahul, Priya saves a massive ₹15,51,223 in total interest and clears her debt 5 years earlier.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What is a Home Loan EMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A Home Loan EMI (Equated Monthly Installment) is the fixed monthly payment you make to your bank or housing finance company to repay your mortgage. It consists of two parts: the principal repayment and the interest charge on the outstanding loan balance. Over time, the proportion of principal in the EMI increases, while the interest component decreases.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How does the loan tenure affect my Home Loan EMI?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The loan tenure has a significant impact on your EMI and total interest. A longer tenure (e.g., 20 or 30 years) reduces your monthly EMI amount, making it easier on your monthly budget. However, it significantly increases the total interest you will pay to the bank over the life of the loan. Conversely, a shorter tenure increases your EMI but saves you money on total interest.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What are the tax benefits on a home loan in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              In India, home loan borrowers enjoy significant tax benefits. Under Section 80C of the Income Tax Act, you can claim a deduction of up to ₹1.5 Lakhs on the principal repayment portion of your EMI. Furthermore, under Section 24(b), you can claim a deduction of up to ₹2 Lakhs on the interest paid for a self-occupied property. These deductions help substantially reduce your overall taxable income.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is it better to choose a fixed or floating interest rate?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Most home loans in India are taken on a floating interest rate. A floating rate fluctuates based on the RBI's repo rate, meaning your EMI or tenure may change over time. It is generally preferred because, as per RBI mandates, banks do not charge prepayment penalties on floating-rate home loans for individual borrowers. Fixed rates remain constant throughout the tenure but are usually priced 1% to 2% higher than floating rates and may attract prepayment penalties.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">How does prepaying my home loan help?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Making partial prepayments towards your home loan principal directly reduces your outstanding balance. Because interest is calculated on the reducing balance, even a small yearly prepayment can knock off several months or even years from your loan tenure, saving you lakhs of rupees in interest. Most financial experts recommend using annual bonuses, increments, or tax refunds to make partial prepayments.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does my down payment affect the loan amount?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes. Banks in India typically finance only 75% to 90% of the property's overall value (this is known as the Loan-to-Value or LTV ratio). The remaining 10% to 25% must be paid by you upfront directly to the builder or seller as a down payment. A higher down payment reduces your required loan amount, which directly lowers your monthly EMI and total interest burden.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore Related Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Take comprehensive control of your finances. Explore our other free, tailored calculators to help you plan your investments, taxes, and other loans:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/finance/car-loan" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Car Loan</a>
          <a href="/calculator/finance/compound-interest" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Compound Interest</a>
          <a href="/calculator/finance/emi" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">General EMI</a>
          <a href="/calculator/finance/fd" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Fixed Deposit (FD)</a>
          <a href="/calculator/finance/gst" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">GST</a>
          <a href="/calculator/finance/gratuity" className="text-sm text-calc-blue hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-calc-blue">Gratuity</a>
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