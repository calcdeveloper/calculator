import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can I claim HRA if I live in my own house?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, you cannot claim HRA exemption if you live in a house that you own. The exemption is strictly available only to those who pay rent for their accommodation."
        }
      },
      {
        "@type": "Question",
        "name": "What if I pay rent to my parents?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can pay rent to your parents and claim HRA exemption. However, your parents must show this rent as their 'Income from House Property' when they file their income tax returns. You cannot pay rent to your spouse to claim HRA."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to submit the landlord's PAN?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if the annual rent you pay exceeds ₹1,00,000, it is mandatory to provide your landlord's Permanent Account Number (PAN) to your employer to claim the HRA exemption."
        }
      },
      {
        "@type": "Question",
        "name": "Which cities are considered 'Metros' for HRA calculation?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For the purpose of HRA calculation under the Income Tax Act, only four cities are considered Metros: Delhi, Mumbai, Kolkata, and Chennai. If you live in any of these, the limit is 50% of Basic Salary. For all other cities, including Bangalore, Hyderabad, and Pune, the limit is 40%."
        }
      },
      {
        "@type": "Question",
        "name": "Can I claim both HRA and home loan deduction?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can simultaneously claim HRA exemption and the home loan interest deduction (under Section 24b) if your owned home is in a different city, or if it is under construction and you are forced to live in a rented accommodation."
        }
      },
      {
        "@type": "Question",
        "name": "Is HRA exemption available in the New Tax Regime?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. One of the major caveats of the New Tax Regime is that HRA exemption is disallowed. If you rely heavily on HRA to save taxes, you should carefully compare both regimes before switching."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">HRA Calculator: Maximize Your Tax Savings on Rent</h1>
        <p className="mb-4 text-lg text-gray-600">
          For millions of salaried professionals in India, house rent is the single largest monthly expense. Fortunately, the Income Tax Act provides a significant relief mechanism known as the <strong>House Rent Allowance (HRA) exemption</strong> under Section 10(13A). However, calculating exactly how much of your HRA is tax-free is a notoriously complex process governed by a strict set of rules.
        </p>
        <p className="mb-4">
          Many taxpayers mistakenly believe that the entire HRA amount mentioned in their payslip is completely tax-free. Or conversely, they assume that submitting rent receipts for an amount equal to their HRA will make it fully exempt. Neither of these assumptions is correct. The tax department uses a specific three-pronged formula to determine the exact amount of exemption you can legally claim.
        </p>
        <p className="mb-4">
          Our advanced <strong>HRA Calculator</strong> takes the guesswork out of your tax planning. By simply entering your basic salary, your HRA component, the actual rent you pay, and classifying your city, you can instantly discover your exact <em>Exempt HRA</em> and <em>Taxable HRA</em>. This tool empowers you to optimize your rent negotiations, declare the correct investment proofs to your HR department, and make an informed decision when choosing between the Old and New Tax Regimes.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the HRA Calculator</h2>
        <p className="mb-4">
          Determining your exact tax liability is simple when you have the right numbers. Follow these steps to use the calculator effectively:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Select City Type:</strong> Choose 'Metro' if you reside in Delhi, Mumbai, Kolkata, or Chennai (allows 50% of Basic as a cap). For all other cities—including major IT hubs like Bangalore, Pune, and Hyderabad—select 'Non-Metro' (allows 40% cap).</li>
          <li><strong>Enter Basic Salary (Annual):</strong> Input your annual Basic Pay. If you receive Dearness Allowance (DA) that forms part of retirement benefits, add it to this figure.</li>
          <li><strong>Enter HRA Received (Annual):</strong> Check your offer letter or multiply your monthly payslip HRA component by 12.</li>
          <li><strong>Enter Total Rent Paid (Annual):</strong> Input the actual amount of rent you transfer to your landlord over the financial year.</li>
        </ul>
        <p className="mt-4">
          The calculator will immediately process the statutory formula and present you with two figures: your <strong>Exempt HRA</strong> (the amount on which you pay zero tax) and your <strong>Taxable HRA</strong> (the remainder which gets added to your taxable income). 
        </p>
      </section>

      {/* THE THREE RULES OF HRA EXEMPTION */}
      <section className="bg-blue-50/50 p-8 rounded-2xl border border-blue-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Formula: The Three Rules of HRA Exemption</h2>
        <p className="mb-4">
          Under Section 10(13A) of the Income Tax Act, 1961, your HRA exemption is determined by calculating three specific values. The <strong>lowest</strong> of these three values is the amount that is exempt from income tax. 
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Condition 1: Actual HRA Received</h3>
        <p className="mb-4">
          This is the simplest metric. It is the absolute amount your employer gives you under the "House Rent Allowance" head in your salary structure. You can never claim an exemption greater than what you actually received from your company, regardless of how astronomically high your rent is.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Condition 2: 50% or 40% of Basic Salary</h3>
        <p className="mb-4">
          The tax department sets a ceiling based on where you live. If your rented accommodation is situated in a Metropolitan city (defined strictly as Mumbai, Delhi, Kolkata, and Chennai), the limit is <strong>50% of your Basic Salary</strong> (plus Dearness Allowance, if applicable). If you live in any other city in India (Non-Metro), the limit is clamped at <strong>40% of your Basic Salary</strong>.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Condition 3: Actual Rent Paid Minus 10% of Basic Salary</h3>
        <p className="mb-4">
          This is the condition that usually catches people off guard. The government expects you to bear the cost of housing up to 10% of your basic salary. Therefore, they only provide tax relief on the rent you pay <em>in excess</em> of that 10%. The formula is: <strong>(Total Rent Paid) - (10% of Basic Salary)</strong>.
        </p>
        <p className="font-semibold text-red-600 mt-4">
          Crucial Takeaway: The exempt amount is the MINIMUM of the three conditions above. The remaining HRA (Actual HRA - Exempt HRA) is fully taxable according to your income tax slab.
        </p>
      </section>

      {/* EXAMPLES & CASE STUDIES */}
      <section className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Decoding HRA Exemption Scenarios</h2>
        <p className="mb-4">
          Let us apply the three-condition formula to distinct, real-world scenarios to understand how salary structuring and rent amounts impact your tax outgo.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Case Study 1: The Mumbai Executive (High Rent, Metro)</h3>
        <p className="mb-2">
          Anil lives in Mumbai (Metro) and pays a hefty rent of ₹30,000/month (₹3,60,000/year). His Annual Basic Salary is ₹6,00,000, and he receives an Annual HRA of ₹3,00,000. Let's calculate:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Condition 1 (Actual HRA):</strong> ₹3,00,000</li>
          <li><strong>Condition 2 (50% of Basic for Metro):</strong> ₹3,00,000</li>
          <li><strong>Condition 3 (Rent Paid - 10% of Basic):</strong> ₹3,60,000 - ₹60,000 = ₹3,00,000</li>
        </ul>
        <p className="mb-4">
          <strong>Result:</strong> Since the minimum of all three is ₹3,00,000, Anil's entire HRA is completely tax-free. His Taxable HRA is ₹0. This represents a perfectly optimized salary structure.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Case Study 2: The Bangalore Techie (Non-Metro Anomaly)</h3>
        <p className="mb-2">
          Priya lives in Bangalore. Despite high rent costs, Bangalore is classified as a Non-Metro for tax purposes. She pays ₹25,000/month rent (₹3,00,000/year). Her Basic is ₹8,00,000 and HRA is ₹4,00,000.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Condition 1 (Actual HRA):</strong> ₹4,00,000</li>
          <li><strong>Condition 2 (40% of Basic for Non-Metro):</strong> ₹3,20,000</li>
          <li><strong>Condition 3 (Rent Paid - 10% of Basic):</strong> ₹3,00,000 - ₹80,000 = ₹2,20,000</li>
        </ul>
        <p className="mb-4">
          <strong>Result:</strong> The lowest value is Condition 3 (₹2,20,000). Therefore, Priya's Exempt HRA is ₹2,20,000. Her Taxable HRA is (₹4,00,000 - ₹2,20,000) = <strong>₹1,80,000</strong>. Priya will have to pay income tax on this ₹1,80,000 based on her slab rate.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Case Study 3: Living in Own House or No Rent Paid</h3>
        <p className="mb-2">
          Rohan works in Delhi with a Basic of ₹5,00,000 and HRA of ₹2,50,000. However, he lives with his parents and does not pay them any formal rent.
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Condition 1 (Actual HRA):</strong> ₹2,50,000</li>
          <li><strong>Condition 2 (50% of Basic):</strong> ₹2,50,000</li>
          <li><strong>Condition 3 (Rent Paid - 10% of Basic):</strong> ₹0 - ₹50,000 = Negative (so ₹0)</li>
        </ul>
        <p className="mb-4">
          <strong>Result:</strong> The lowest value is Condition 3 (₹0). Rohan gets zero exemption. His entire HRA of ₹2,50,000 is fully taxable. This highlights the absolute necessity of paying real rent to claim the exemption.
        </p>
      </section>

      {/* STRATEGIES FOR HRA OPTIMIZATION */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Advanced Strategies for HRA Optimization</h2>
        <p className="mb-4">
          Now that you understand how the calculation works, here are advanced, legal ways to maximize your exemption and minimize your tax burden.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">1. Paying Rent to Parents</h3>
        <p className="mb-4">
          If you live with your parents in a house owned by them, you can legally draw up a rent agreement, pay them rent via bank transfer every month, and submit rent receipts to your HR. This allows you to claim HRA exemption. However, your parents must declare this rental income in their ITR. If their total income (including this rent) is below the taxable limit (or if they are senior citizens with higher exemptions), the overall family tax outflow is significantly reduced. You cannot, however, pay rent to your spouse.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">2. The HRA vs. Home Loan Dilemma</h3>
        <p className="mb-4">
          Can you claim HRA and a Home Loan deduction simultaneously? Yes, under specific circumstances. If you bought a house in City A but work and rent in City B, you can claim both the HRA exemption for the rent paid in City B, and the Section 24(b) interest deduction for the home loan in City A. You can also claim both if your own house is in the same city but is under construction, or if it is too far from your workplace to commute daily (though the latter is heavily scrutinized by assessing officers).
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">3. HRA in the New vs. Old Tax Regime</h3>
        <p className="mb-4">
          This is currently the biggest decision for taxpayers. The New Tax Regime (which offers lower slab rates) entirely abolishes the HRA exemption. If you pay a massive amount of rent, the tax savings from HRA in the Old Regime might still outweigh the lower rates of the New Regime. It is imperative to use both our HRA Calculator and our Income Tax Calculator in tandem. Calculate your exempt HRA here, plug it into your Old Regime tax calculation, and compare it against the New Regime before declaring your choice to your employer at the start of the financial year.
        </p>
      </section>

      {/* MANDATORY DOCUMENTATION */}
      <section className="bg-yellow-50/50 p-8 rounded-2xl border border-yellow-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Mandatory Documentation & Compliance</h2>
        <p className="mb-4">
          The Income Tax Department has tightened scrutiny around HRA claims to prevent fake rent receipts. To ensure a smooth process without notices, ensure you have the following:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Valid Rent Agreement:</strong> A legally binding rent agreement on stamp paper is the foundation of your claim. It should clearly state the rent amount, tenure, and parties involved.</li>
          <li><strong>Rent Receipts:</strong> You must submit rent receipts. If you pay rent electronically, it serves as excellent secondary proof if ever audited. Revenue stamps are required on receipts if the cash payment exceeds ₹5,000 per receipt.</li>
          <li><strong>Landlord's PAN:</strong> If your annual rent exceeds ₹1,00,000 (which is merely ₹8,333 per month), it is mandatory to provide your landlord's PAN to your employer. If the landlord does not have a PAN, they must provide a signed declaration to that effect.</li>
          <li><strong>Digital Trails:</strong> While cash payments are allowed, tax experts highly recommend paying rent via NEFT, RTGS, or UPI. A clean bank statement reflecting monthly transfers to the landlord is irrefutable proof if your case is ever picked for scrutiny by an Assessing Officer.</li>
        </ul>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I claim HRA if I live in my own house?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No, you cannot claim HRA exemption if you live in a house that you own. The exemption is strictly available only to those who pay rent for their accommodation.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What if I pay rent to my parents?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, you can pay rent to your parents and claim HRA exemption. However, your parents must show this rent as their 'Income from House Property' when they file their income tax returns. You cannot pay rent to your spouse to claim HRA.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Do I need to submit the landlord's PAN?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, if the annual rent you pay exceeds ₹1,00,000, it is mandatory to provide your landlord's Permanent Account Number (PAN) to your employer to claim the HRA exemption.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Which cities are considered 'Metros' for HRA calculation?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              For the purpose of HRA calculation under the Income Tax Act, only four cities are considered Metros: Delhi, Mumbai, Kolkata, and Chennai. If you live in any of these, the limit is 50% of Basic Salary. For all other cities, including Bangalore, Hyderabad, and Pune, the limit is 40%.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Can I claim both HRA and home loan deduction?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, you can simultaneously claim HRA exemption and the home loan interest deduction (under Section 24b) if your owned home is in a different city, or if it is under construction and you are forced to live in a rented accommodation.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is HRA exemption available in the New Tax Regime?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              No. One of the major caveats of the New Tax Regime is that HRA exemption is disallowed. If you rely heavily on HRA to save taxes, you should carefully compare both regimes before switching.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
