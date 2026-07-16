import React from 'react';

export default function Content() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between CTC and In-Hand Salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "CTC (Cost to Company) is the total amount a company spends on you in a year, including employer PF contributions, gratuity, and insurance. In-hand salary is the actual amount credited to your bank account every month after deducting EPF, Professional Tax, TDS, and other components."
        }
      },
      {
        "@type": "Question",
        "name": "How is Basic Salary calculated from CTC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, the Basic Salary is structured as 40% to 50% of your total CTC. This percentage is crucial because components like EPF, Gratuity, and sometimes HRA are calculated as a percentage of your Basic Salary."
        }
      },
      {
        "@type": "Question",
        "name": "What is EPF and how much is deducted from my salary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Employees' Provident Fund (EPF) is a retirement benefit scheme. Usually, 12% of your Basic Salary is contributed by you (deducted from your gross salary), and a matching 12% is contributed by your employer (often part of your CTC)."
        }
      },
      {
        "@type": "Question",
        "name": "Why is my take-home salary much lower than my CTC?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Your take-home salary is lower because your CTC includes the employer's contribution to your PF and gratuity, which you don't receive monthly. Furthermore, mandatory deductions like employee PF, Professional Tax, and Income Tax (TDS) reduce the gross amount before it hits your bank account."
        }
      },
      {
        "@type": "Question",
        "name": "What is Professional Tax and is it applicable to everyone?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Professional Tax is a state-level tax levied on salaried individuals and professionals. Not all Indian states levy it (e.g., Delhi does not, but Maharashtra and Karnataka do). The maximum limit is ₹2,500 per year, usually deducted at ₹200 per month."
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Salary Calculator: Convert CTC to Take Home In-Hand Salary</h1>
        <p className="mb-4 text-lg text-gray-600">
          When you receive a job offer, the number that stands out the most is the <strong>Cost to Company (CTC)</strong>. However, the CTC figure can be deceiving. It does not represent the actual amount that will be deposited into your bank account at the end of every month. Understanding how your CTC is broken down into various components and deductions is crucial for financial planning, budgeting, and negotiating job offers.
        </p>
        <p className="mb-4">
          Our advanced <strong>Salary Calculator</strong> is designed to demystify your payslip. By simply entering your annual CTC and adjusting standard variables like Basic Salary percentage, Employer PF, and Employee PF, you can instantly determine your Gross Salary and your precise net Take-Home Salary. Whether you are an HR professional structuring a salary package or a candidate evaluating multiple job offers across India, this tool provides unparalleled clarity.
        </p>
        <p className="mb-4">
          A common misconception among early-career professionals is assuming that dividing the CTC by 12 yields the monthly salary. This calculation ignores the employer’s contributions (which do not form part of your gross salary) and the mandatory statutory deductions (which reduce your gross salary). Let's dive deep into how Indian salary structures work and how you can accurately predict your in-hand income.
        </p>
      </section>

      {/* HOW TO USE THE CALCULATOR */}
      <section className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Salary Calculator</h2>
        <p className="mb-4">
          Our calculator requires minimal inputs to give you maximum visibility into your salary breakdown:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Annual CTC:</strong> Enter the total package offered by the company.</li>
          <li><strong>Basic Salary %:</strong> Usually 40% or 50%. Check your offer letter annexure.</li>
          <li><strong>Employer & Employee PF %:</strong> Set to 12% by default as per Indian labor laws. If your company restricts PF to the statutory minimum of ₹1,800/month, you can adjust this percentage accordingly.</li>
          <li><strong>Professional Tax:</strong> Enter ₹200 if your state levies it, or ₹0 if you are in a state like Delhi.</li>
        </ul>
        <p className="mt-4">
          The summary instantly breaks down your Monthly Gross, Monthly Deductions, and the final Monthly Take-Home amount. The visual chart helps you see exactly what portion of your CTC is tied up in basic pay vs allowances and deductions.
        </p>
      </section>

      {/* DECODING CTC VS GROSS VS NET */}
      <section className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Decoding the Salary Jargon: CTC, Gross, and Net</h2>
        <p className="mb-4">
          To master your finances, you must understand the holy trinity of salary compensation: Cost to Company, Gross Salary, and Net (Take-Home) Salary.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">1. Cost to Company (CTC)</h3>
        <p className="mb-4">
          As the name implies, CTC is the total expense a company incurs to hire and retain you for a year. It includes everything: your basic pay, allowances (HRA, LTA, Special Allowance), perquisites, and most importantly, the company's contribution to your retirement benefits like the Provident Fund (EPF) and Gratuity. Because the employer's EPF contribution never reaches your wallet (until retirement), your CTC will always be artificially higher than your gross pay.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">2. Gross Salary</h3>
        <p className="mb-4">
          Gross Salary is the amount promised to you before any taxes or personal deductions are applied. Mathematically, <strong>Gross Salary = CTC - Employer's EPF Contribution - Gratuity</strong>. This is the figure on which your income tax calculations (TDS) begin. Gross salary consists of the Basic Salary and all the various allowances provided by the employer.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">3. Net / Take-Home / In-Hand Salary</h3>
        <p className="mb-4">
          This is the golden number. The Take-Home Salary is what you actually have at your disposal to pay rent, buy groceries, and invest. <strong>Net Salary = Gross Salary - Statutory Deductions (Employee PF, Professional Tax, TDS)</strong>. Our calculator focuses specifically on the PF and PT deductions to give you a pre-tax net salary, allowing you to clearly see how standard corporate structuring affects your monthly inflow.
        </p>
      </section>

      {/* SALARY COMPONENTS EXPLAINED */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Core Components of an Indian Salary Structure</h2>
        <p className="mb-4">
          Companies structure salaries differently depending on their internal policies, industry standards, and tax optimization strategies. However, the vast majority adhere to a standard framework mandated by labor laws.
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Basic Salary</h3>
        <p className="mb-4">
          The foundation of your payslip. It is typically fixed at 40% to 50% of your total CTC. The basic salary is fully taxable. It is a critical component because other statutory benefits like EPF and Gratuity are directly linked to it. A higher basic means higher PF deductions, resulting in lower take-home pay but better long-term retirement savings.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">House Rent Allowance (HRA)</h3>
        <p className="mb-4">
          HRA is usually set at 50% of the Basic Salary for employees in metro cities (Delhi, Mumbai, Chennai, Kolkata) and 40% for non-metros. Under the old tax regime, HRA offers substantial tax benefits if you live in a rented accommodation.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Special Allowance</h3>
        <p className="mb-4">
          This is the balancing figure. Once the Basic, HRA, and PF are calculated, whatever remains in the CTC bucket is usually dumped into the "Special Allowance" category. It is fully taxable and does not offer any specific exemptions. 
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Leave Travel Allowance (LTA)</h3>
        <p className="mb-4">
          Some companies offer LTA, which reimburses your domestic travel expenses when you go on leave. It is tax-exempt twice in a block of four calendar years, subject to submission of valid travel proofs (flight or train tickets).
        </p>
      </section>

      {/* STATUTORY DEDUCTIONS */}
      <section className="bg-red-50/50 p-8 rounded-2xl border border-red-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Statutory Deductions</h2>
        <p className="mb-4">
          Deductions are what shrink your Gross Salary into your Net Salary. Here is what is being subtracted from your paycheck every month:
        </p>
        <ul className="list-disc pl-6 mb-4 space-y-4">
          <li>
            <strong>Employee's Provident Fund (EPF):</strong> By law, you contribute 12% of your Basic Salary to the EPF. This money is invested by the government and earns an annual interest. While it reduces your monthly cash flow, it is a highly secure, tax-free retirement corpus.
          </li>
          <li>
            <strong>Employer's Provident Fund (EPF):</strong> The employer matches your 12% contribution. Technically, 8.33% goes to the Employee Pension Scheme (EPS) and 3.67% goes to the EPF. Note that this 12% is usually deducted from your overall CTC during the offer negotiation phase.
          </li>
          <li>
            <strong>Professional Tax (PT):</strong> This is a state government tax. Depending on the state where your company is registered (or where you work), a maximum of ₹2,500 per year can be deducted. This is usually broken down into ₹200 for 11 months and ₹300 for the final month of the financial year.
          </li>
          <li>
            <strong>Tax Deducted at Source (TDS):</strong> Your employer will estimate your annual income tax liability based on the tax regime you choose and deduct a proportionate amount every month. (To calculate this exact amount, use our dedicated Income Tax Calculator).
          </li>
        </ul>
      </section>

      {/* HOW TO OPTIMIZE */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Optimize Your Salary Structure</h2>
        <p className="mb-4">
          While you cannot avoid taxes and statutory deductions, you can often negotiate the structure of your CTC to optimize your take-home pay or maximize your tax benefits:
        </p>
        <ol className="list-decimal pl-6 space-y-3 mb-4">
          <li>
            <strong>Adjusting the Basic Salary:</strong> If you want maximum in-hand cash and do not care about retirement lock-ins right now, negotiating a lower Basic Salary (say, 40% instead of 50%) will reduce the mandatory EPF deduction. However, check company policy, as some mandate a 50% minimum.
          </li>
          <li>
            <strong>Opting Out of EPF:</strong> If your basic salary is above ₹15,000 per month and you are joining your first job, you can legally opt out of the EPF scheme. This dramatically increases your monthly take-home salary, though you forfeit the employer's matching contribution to your retirement.
          </li>
          <li>
            <strong>Including Reimbursements:</strong> Ask HR if they can convert parts of the Special Allowance into tax-exempt reimbursements like Meal Coupons (Sodexo/Zeta), Internet/Telephone Allowance, or Fuel/Car Maintenance Allowances.
          </li>
        </ol>
      </section>
      
      {/* EXAMPLES & CASE STUDIES */}
      <section className="bg-indigo-50/50 p-8 rounded-2xl border border-indigo-100 shadow-sm mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Case Studies: Decoding Salary Structures</h2>
        <p className="mb-4">
          Understanding the difference between a high CTC and actual in-hand salary is crucial. Let's look at a few examples to see how similar CTCs can result in drastically different take-home pays based on structure.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-6">Scenario 1: The Standard Startup Package (CTC: ₹15 Lakhs)</h3>
        <p className="mb-4">
          Rahul receives a CTC of ₹15,00,000 from a tech startup. His Basic Salary is structured at 50% of CTC, which is ₹7,50,000 annually. Since his employer matches his 12% EPF contribution, the employer's share is ₹90,000. This ₹90,000 is immediately deducted from the CTC to find the Gross Salary (₹14,10,000). His own 12% EPF contribution (another ₹90,000) and PT (₹2,400) are deducted from Gross. Assuming minimal TDS due to the new tax regime, Rahul's net take-home is roughly ₹13,17,600 annually, or ₹1,09,800 monthly.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Scenario 2: The Aggressive PF Structure (CTC: ₹15 Lakhs)</h3>
        <p className="mb-4">
          Priya also receives a ₹15,00,000 CTC from a traditional manufacturing firm, but her HR policies mandate EPF contributions on the entire CTC, not just the basic pay (rare, but it happens). Her employer's EPF contribution becomes ₹1,80,000. Her gross salary drops to ₹13,20,000. Her own EPF deduction is another ₹1,80,000. Her net take-home (before tax) drops to ₹11,37,600 annually, or ₹94,800 monthly. While her retirement corpus is growing twice as fast as Rahul's, her current liquidity is heavily restricted.
        </p>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">Scenario 3: The Optimized Consultant (CTC: ₹15 Lakhs)</h3>
        <p className="mb-4">
          Amit is hired as an independent consultant rather than a full-time employee for ₹15,00,000. As a consultant, he does not receive EPF, gratuity, or HRA. His gross billing is his net inflow (minus a flat 10% TDS under Section 194J). He receives ₹1,12,500 monthly in-hand. He enjoys maximum liquidity but must manage his own retirement planning and investments.
        </p>
      </section>

      {/* FREQUENTLY ASKED QUESTIONS (FAQs) */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the difference between CTC and In-Hand Salary?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              CTC (Cost to Company) is the total amount a company spends on you in a year, including employer PF contributions, gratuity, and insurance. In-hand salary is the actual amount credited to your bank account every month after deducting EPF, Professional Tax, TDS, and other components.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How is Basic Salary calculated from CTC?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Typically, the Basic Salary is structured as 40% to 50% of your total CTC. This percentage is crucial because components like EPF, Gratuity, and sometimes HRA are calculated as a percentage of your Basic Salary.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is EPF and how much is deducted from my salary?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Employees' Provident Fund (EPF) is a retirement benefit scheme. Usually, 12% of your Basic Salary is contributed by you (deducted from your gross salary), and a matching 12% is contributed by your employer (often part of your CTC).
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Why is my take-home salary much lower than my CTC?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Your take-home salary is lower because your CTC includes the employer's contribution to your PF and gratuity, which you don't receive monthly. Furthermore, mandatory deductions like employee PF, Professional Tax, and Income Tax (TDS) reduce the gross amount before it hits your bank account.
            </div>
          </details>
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is Professional Tax and is it applicable to everyone?</summary>
            <div className="px-5 pb-4 text-gray-700 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Professional Tax is a state-level tax levied on salaried individuals and professionals. Not all Indian states levy it (e.g., Delhi does not, but Maharashtra and Karnataka do). The maximum limit is ₹2,500 per year, usually deducted at ₹200 per month.
            </div>
          </details>
        </div>
      </section>

      

    </div>
  );
}
