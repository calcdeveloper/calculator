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
        "name": "When do I become eligible for gratuity in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You are legally eligible for gratuity after completing five continuous years of service with the same employer. According to recent rulings, completing 4 years and 240 days is legally considered as 5 years. The only exceptions where the 5-year rule does not apply are in cases of an employee's death or disablement."
        }
      },
      {
        "@type": "Question",
        "name": "Is gratuity taxable under the Indian Income Tax Act?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For government employees, the entire gratuity payout is completely tax-free. For private-sector employees who are covered under the Payment of Gratuity Act, the gratuity amount is tax-exempt up to a maximum limit of ₹20 Lakhs in a lifetime. Any amount received above this ₹20 Lakh limit is taxable as per your regular income tax slab."
        }
      },
      {
        "@type": "Question",
        "name": "Are allowances like HRA and transport included in the gratuity calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. The gratuity calculation is strictly based only on your Basic Salary and your Dearness Allowance (DA). All other allowances, such as House Rent Allowance (HRA), Leave Travel Allowance (LTA), transport allowances, bonuses, and incentives, are completely excluded from the calculation."
        }
      },
      {
        "@type": "Question",
        "name": "Does my CTC include the gratuity component?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, in most modern employment contracts, the Cost to Company (CTC) figure includes an estimated annual gratuity component (usually calculated as 4.81% of your Basic Pay). However, this money is only disbursed to you if you complete the mandatory 5-year eligibility period."
        }
      },
      {
        "@type": "Question",
        "name": "What happens to my gratuity if I resign after 4.5 years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Legally, you must complete 4 years and 240 days to be eligible for gratuity. If you resign or are terminated before hitting this exact milestone, you forfeit the entire gratuity amount, and the employer is not legally bound to pay it to you."
        }
      },
      {
        "@type": "Question",
        "name": "Can an employer refuse to pay gratuity?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "An employer can only withhold or forfeit your gratuity if you have been terminated for gross misconduct, such as theft, fraud, intentional destruction of company property, or violent behavior. Otherwise, it is a legally enforced right that must be paid within 30 days of your last working day."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO TAGS --- */}
      <Helmet>
        <title>Gratuity Calculator India | Check Your Payout Online</title>
        <meta 
          name="description" 
          content="Use our free Gratuity Calculator to check your final settlement amount. Understand the Payment of Gratuity Act rules and calculate your exact payout today." 
        />
        <meta name="keywords" content="gratuity calculator, gratuity calculation formula, payment of gratuity act, calculate gratuity India, employee benefits, final settlement, check gratuity eligibility, gratuity rules in private sector" />
        
        {/* Suggested URL Slug: /calculator/finance/gratuity */}
        
        {/* Social Media Sharing Tags */}
        <meta property="og:title" content="Free Gratuity Calculator India | Calculate Your Employee Payout" />
        <meta property="og:description" content="Instantly calculate your employer gratuity payout accurately based on the Payment of Gratuity Act 1972." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-calc-black mb-4">Free Gratuity Calculator: Calculate Your Employee Payout in India</h1>
        <p className="mb-4">
          Gratuity is a lump sum financial reward given by an employer to an employee as a token of appreciation for their long-term, loyal service. According to the Payment of Gratuity Act, 1972 in India, you are legally entitled to receive this vital employment benefit if you have completed five or more years of continuous service with the same company.
        </p>
        <p className="mb-4">
          For many salaried professionals, gratuity forms a significant part of their retirement or final settlement corpus. Whether you are planning to resign for better opportunities, nearing your retirement age, or simply curious about your accumulated employment benefits, our online Gratuity Calculator helps you determine your exact final payout instantly. 
        </p>
        <p>
          This free tool is designed specifically for all salaried employees across India, in both the private and public sectors. It eliminates the guesswork and complex manual math, giving you a crystal-clear picture of the final settlement you can confidently expect from your HR department.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-calc-black mb-4">How to Use the Gratuity Calculator</h2>
        <p className="mb-4">Using our calculator is entirely straightforward. Just enter your employment details to instantly find out your legal entitlement:</p>
        
        <h3 className="font-bold text-lg text-calc-black mb-2 mt-5">Step 1: Enter Your Inputs</h3>
        <ul className="list-decimal pl-6 space-y-3 mb-6">
          <li><strong>Basic Salary (Monthly):</strong> Input your most recent, final monthly basic pay (exclude HRA, LTA, or other special allowances).</li>
          <li><strong>Dearness Allowance (DA):</strong> If your organization provides a DA, enter the monthly amount here. If not, simply enter zero.</li>
          <li><strong>Years of Service:</strong> Enter the number of full, completed years you have worked for your current employer.</li>
          <li><strong>Additional Months:</strong> Enter any extra months worked beyond the full years. This helps the calculator apply the exact legal rounding-off rules.</li>
          <li><strong>Covered under Gratuity Act (Yes/No)?:</strong> Select "Yes" if your company is covered under the Payment of Gratuity Act (most companies with 10+ employees are). Select "No" if they are not. This determines which math formula is applied to your payout.</li>
        </ul>

        <h3 className="font-bold text-lg text-calc-black mb-2">Step 2: Review Your Output</h3>
        <p className="mb-3">Once you hit calculate, you will instantly see:</p>
        <ul className="list-disc pl-6 space-y-3 text-calc-black font-medium">
          <li>Effective Tenure Counted: <span className="font-normal text-gray-700">The final rounded-off years of service used in the legal formula.</span></li>
          <li>Applicable Salary (Basic + DA): <span className="font-normal text-gray-700">The total monthly wage officially considered for your calculation.</span></li>
          <li>Total Gratuity Payable: <span className="font-normal text-gray-700">Your final estimated, tax-friendly lump sum payout.</span></li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-3">The Official Gratuity Calculation Formula</h2>
        <p className="mb-4">
          The calculation of gratuity in India depends heavily on whether your organization is covered under the Payment of Gratuity Act, 1972. Any establishment with 10 or more employees falls under this act. 
        </p>
        
        <h3 className="font-bold text-xl mb-2 text-calc-black mt-6">If Covered Under the Act:</h3>
        <p className="mb-4">The formula is based on 15 days of your last drawn salary for every completed year of service, considering a working month of 26 days.</p>
        
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-bold text-calc-black overflow-x-auto my-4">
          G = (15 &times; Last Drawn Salary &times; Effective Tenure) / 26
        </div>

        <h3 className="font-bold text-xl mb-2 text-calc-black mt-6">If NOT Covered Under the Act:</h3>
        <p className="mb-4">The formula is based on 15 days of your last drawn salary, but the working month is considered as 30 days instead of 26. Also, tenure is not rounded up.</p>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center text-lg font-bold text-calc-black overflow-x-auto my-4">
          G = (15 &times; Last Drawn Salary &times; Full Years of Service) / 30
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm bg-gray-50 p-4 rounded-lg mb-6">
          <div><strong>G</strong> = Total Gratuity Payable</div>
          <div><strong>15</strong> = Represents wages for 15 days of work</div>
          <div><strong>Last Drawn Salary</strong> = Basic Salary + Dearness Allowance (DA)</div>
          <div><strong>Effective Tenure</strong> = Years rounded off (only if covered by the Act)</div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-4">Real-Life Gratuity Worked Examples</h2>
        <p className="mb-6">Let's look at a few practical examples to understand exactly how your final settlement is calculated in various real-world scenarios.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 1: Covered by Act (Rounding Up)</h3>
            <p className="mb-2 text-sm">Rohan worked at an IT firm for <strong>7 years and 8 months</strong>. His Basic Salary is <strong>₹40,000</strong>, and DA is <strong>₹5,000</strong>. Because he is covered by the Act and his extra months exceed 6, his tenure is rounded up to 8 years.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Applicable Salary (Basic + DA):</strong> ₹45,000</li>
              <li><strong>Effective Tenure Counted:</strong> 8 years</li>
              <li><strong>Calculation:</strong> (15 &times; 45,000 &times; 8) / 26</li>
              <li><strong>Total Gratuity Payable:</strong> <span className="font-bold text-calc-black">₹2,07,692</span></li>
            </ul>
          </div>

          <div className="border-l-4 border-green-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 2: Covered by Act (No Rounding Up)</h3>
            <p className="mb-2 text-sm">Priya worked for exactly <strong>5 years and 2 months</strong>. Her basic salary is <strong>₹30,000</strong>, with zero DA. Her extra months are below the 6-month threshold, so her tenure remains 5 years.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Applicable Salary (Basic + DA):</strong> ₹30,000</li>
              <li><strong>Effective Tenure Counted:</strong> 5 years</li>
              <li><strong>Calculation:</strong> (15 &times; 30,000 &times; 5) / 26</li>
              <li><strong>Total Gratuity Payable:</strong> <span className="font-bold text-calc-black">₹86,538</span></li>
            </ul>
          </div>

          <div className="border-l-4 border-purple-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm">
            <h3 className="font-bold text-lg mb-2">Example 3: NOT Covered by the Act</h3>
            <p className="mb-2 text-sm">Mr. Verma works at a very small firm (not covered by the Act) for <strong>10 years and 9 months</strong>. His Basic is <strong>₹50,000</strong>. For non-covered employees, tenure is never rounded up (it stays 10 years), and the denominator is 30.</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600">
              <li><strong>Applicable Salary (Basic + DA):</strong> ₹50,000</li>
              <li><strong>Effective Tenure Counted:</strong> 10 years</li>
              <li><strong>Calculation:</strong> (15 &times; 50,000 &times; 10) / 30</li>
              <li><strong>Total Gratuity Payable:</strong> <span className="font-bold text-calc-black">₹2,50,000</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-calc-black mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">When do I become eligible for gratuity in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              You are legally eligible for gratuity after completing five continuous years of service with the same employer. According to recent rulings, completing 4 years and 240 days is legally considered as 5 years. The only exceptions where the 5-year rule does not apply are in cases of an employee's death or disablement.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Is gratuity taxable under the Indian Income Tax Act?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For government employees, the entire gratuity payout is completely tax-free. For private-sector employees who are covered under the Payment of Gratuity Act, the gratuity amount is tax-exempt up to a maximum limit of ₹20 Lakhs in a lifetime. Any amount received above this ₹20 Lakh limit is taxable as per your regular income tax slab.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Are allowances like HRA and transport included in the gratuity calculation?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. The gratuity calculation is strictly based only on your Basic Salary and your Dearness Allowance (DA). All other allowances, such as House Rent Allowance (HRA), Leave Travel Allowance (LTA), transport allowances, bonuses, and incentives, are completely excluded from the calculation.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Does my CTC include the gratuity component?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, in most modern employment contracts, the Cost to Company (CTC) figure includes an estimated annual gratuity component (usually calculated as 4.81% of your Basic Pay). However, this money is only disbursed to you if you complete the mandatory 5-year eligibility period.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">What happens to my gratuity if I resign after 4.5 years?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Legally, you must complete 4 years and 240 days to be eligible for gratuity. If you resign or are terminated before hitting this exact milestone, you forfeit the entire gratuity amount, and the employer is not legally bound to pay it to you.
            </div>
          </details>
          
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-calc-black">Can an employer refuse to pay gratuity?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              An employer can only withhold or forfeit your gratuity if you have been terminated for gross misconduct, such as theft, fraud, intentional destruction of company property, or violent behavior. Otherwise, it is a legally enforced right that must be paid within 30 days of your last working day.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-calc-black">Explore Related Financial Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Plan your retirement, investments, and salary structure with our suite of free calculation tools designed for the Indian market:</p>
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