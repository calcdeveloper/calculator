import React from 'react';

/* =========================================
  SEO METADATA & REQUIREMENTS
  =========================================
  1. SEO TITLE: Monthly Expense Calculator India | Track Budget & Savings
  2. META DESCRIPTION: Take control of your finances with our free Monthly Expense Calculator. Easily track your spending, calculate potential savings, and manage your budget in India.
  3. URL SLUG: /monthly-expense-calculator
  4. H1 TITLE: Free Online Monthly Expense Calculator
  
  11. SEO KEYWORDS:
      - Primary keyword: Monthly expense calculator India
      - Secondary keywords: Budget calculator, personal finance tracker, calculate monthly savings, expense to income ratio, household budget calculator, living expenses calculator, track spending online, daily expense calculator, 50/30/20 budgeting rule, financial planning calculator.
      - Long-tail keywords: How to calculate monthly expenses, monthly budget calculator for family in India, how to manage monthly salary and expenses, calculate potential savings from income, free online budget tracker tool.
  =========================================
*/

export default function Content() {
  // FAQ Structured Data (JSON-LD) for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the 50/30/20 budgeting rule?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The 50/30/20 rule is a simple financial guideline. It suggests allocating 50% of your take-home income to 'Needs' (rent, groceries, bills), 30% to 'Wants' (entertainment, dining out, hobbies), and 20% to 'Savings or Debt Payoff' (investments, emergency funds, loan repayment)."
        }
      },
      {
        "@type": "Question",
        "name": "What is a good Expense-to-Income ratio?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A healthy Expense-to-Income ratio is generally considered to be 80% or lower, meaning you are saving at least 20% of your income. If your ratio is above 90%, you are living paycheck to paycheck and should look for ways to cut discretionary spending."
        }
      },
      {
        "@type": "Question",
        "name": "What should I include in the 'Miscellaneous' category?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Miscellaneous category is for irregular or discretionary expenses that don't fit into standard fixed bills. This includes dining out, movie tickets, shopping, gym memberships, pet care, or occasional medical expenses."
        }
      },
      {
        "@type": "Question",
        "name": "How can I reduce my monthly household expenses in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can reduce expenses by creating a strict grocery list, cutting down on food delivery apps, using public transport or carpooling instead of driving daily, canceling unused subscriptions, and monitoring electricity and water usage."
        }
      },
      {
        "@type": "Question",
        "name": "Is my financial data safe when using this calculator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, absolutely. This Monthly Expense Calculator works entirely within your web browser. We do not store, save, or transmit your income or expense data to any servers. Your financial information remains 100% private."
        }
      }
    ]
  };

  return (
    <div className="space-y-10 text-gray-700 leading-relaxed mt-8 max-w-4xl mx-auto">
      {/* --- SEO SCHEMA --- */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* --- INTRODUCTION --- */}
      <section>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Free Online Monthly Expense Calculator</h1>
        <p className="mb-4">
          Taking control of your personal finances begins with a clear understanding of your cash flow. Whether you are a fresh graduate managing your first salary, a family planning household finances in India, or a freelancer with variable pay, knowing exactly where your money goes every month is the foundation of financial freedom.
        </p>
        <p className="mb-4">
          Many people feel stressed at the end of the month wondering why their bank balance is so low despite earning a good income. This usually happens due to untracked, small, recurring expenses that add up over time. 
        </p>
        <p>
          Our free <strong>Monthly Expense Calculator</strong> helps you easily break down your monthly spending into distinct categories, visualize your financial habits, and calculate your exact savings potential. By identifying leaks in your budget, you can make smarter financial decisions, build a solid emergency fund, and achieve your long-term money goals faster.
        </p>
      </section>

      {/* --- HOW TO USE --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use the Monthly Expense Calculator</h2>
        <p className="mb-4">Creating your monthly budget takes less than a minute. Follow these simple steps to analyze your spending habits:</p>
        
        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 1: Enter Your Income</h3>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>Find the <strong>Total Income</strong> input box.</li>
          <li>Enter your total take-home pay after taxes. If you have side hustles or passive income, add that to your main salary.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2 mt-5">Step 2: Input Your Expenses</h3>
        <p className="mb-2">Fill in your estimated monthly spending for the following core categories:</p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li><strong>Rent/Mortgage:</strong> Your monthly house rent or home loan EMI.</li>
          <li><strong>Groceries:</strong> The cost of daily food supplies, vegetables, and household items.</li>
          <li><strong>Utilities:</strong> Bills for electricity, water, internet, and mobile recharges.</li>
          <li><strong>Transport:</strong> Costs for fuel, public transit, cab fares, or auto-rickshaws.</li>
          <li><strong>Miscellaneous:</strong> Everything else! Dining out, shopping, entertainment, and personal care.</li>
        </ul>

        <h3 className="font-bold text-lg text-gray-900 mb-2">Step 3: Analyze Your Results</h3>
        <p className="mb-3">The calculator instantly processes your numbers to provide a clear financial snapshot:</p>
        <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-600 mb-4">
          <li><strong>Total Expenses:</strong> The sum of everything you spend in a month.</li>
          <li><strong>Potential Savings:</strong> The exact amount of money you should have left over to save or invest.</li>
          <li><strong>Expense-to-Income Ratio:</strong> A percentage showing how much of your income goes towards expenses.</li>
          <li><strong>Interactive Pie Chart:</strong> A visual breakdown of your spending categories to quickly spot where the majority of your money is going.</li>
        </ul>
      </section>

      {/* --- FORMULA SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">The Core Budgeting Formulas</h2>
        <p className="mb-6">You don't need a degree in finance to master your budget. Our calculator runs on three fundamental and highly effective formulas to provide a comprehensive view of your financial health.</p>
        
        <div className="space-y-6">
          <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">1. Total Monthly Expenses</h3>
            <p className="text-sm mb-4">This is the sum of all your fixed and variable costs for the month.</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800">
              Total Expenses = Rent + Groceries + Utilities + Transport + Miscellaneous
            </div>
          </div>

          <div className="bg-green-50/50 p-6 rounded-xl border border-green-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">2. Potential Monthly Savings</h3>
            <p className="text-sm mb-4">Your savings represent the money left over after all expenses are deducted from your total income. This is your wealth-building capital.</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800">
              Potential Savings = Total Income - Total Expenses
            </div>
          </div>

          <div className="bg-purple-50/50 p-6 rounded-xl border border-purple-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">3. Expense-to-Income Ratio</h3>
            <p className="text-sm mb-4">This metric shows what percentage of your income is consumed by your lifestyle. A lower ratio means better financial stability and higher savings capacity.</p>
            <div className="bg-white p-3 rounded border border-gray-200 font-mono text-sm text-gray-800">
              Ratio (%) = (Total Expenses ÷ Total Income) × 100
            </div>
          </div>
        </div>
      </section>

      {/* --- WORKED EXAMPLES --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Real-Life Budgeting Examples</h2>
        <p className="mb-6">Let's look at two practical scenarios to see how different income levels and spending habits impact overall financial health.</p>
        
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 1: A Young Professional in Bangalore</h3>
            <p className="mb-2 text-sm">Arjun has a monthly take-home salary of <strong>₹60,000</strong>. Here are his monthly costs:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 mb-3">
              <li>Rent: ₹18,000</li>
              <li>Groceries: ₹8,000</li>
              <li>Utilities: ₹3,000</li>
              <li>Transport: ₹4,000</li>
              <li>Miscellaneous (Weekends/Shopping): ₹7,000</li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><strong>Step 1 (Total Expenses):</strong> 18,000 + 8,000 + 3,000 + 4,000 + 7,000 = <span className="font-bold">₹40,000</span></li>
              <li><strong>Step 2 (Potential Savings):</strong> ₹60,000 - ₹40,000 = <span className="font-bold text-green-700">₹20,000</span></li>
              <li><strong>Step 3 (Ratio):</strong> (40,000 ÷ 60,000) × 100 = <span className="font-bold">66.6%</span></li>
            </ul>
            <p className="mt-2 text-sm text-gray-600 italic">Conclusion: Arjun is doing well, saving about 33% of his income, which beats the 50/30/20 rule's savings target.</p>
          </div>

          <div className="border-l-4 border-orange-500 pl-4 bg-white p-4 rounded-r-lg shadow-sm border-y border-r border-gray-100">
            <h3 className="font-bold text-lg mb-2">Example 2: A Nuclear Family in Delhi</h3>
            <p className="mb-2 text-sm">Priya and her husband have a combined monthly income of <strong>₹1,20,000</strong>. Their family expenses are:</p>
            <ul className="list-disc pl-5 text-sm space-y-1 text-gray-600 mb-3">
              <li>Rent: ₹35,000</li>
              <li>Groceries: ₹20,000</li>
              <li>Utilities (Electricity, Wi-Fi, Phones): ₹8,000</li>
              <li>Transport (Car fuel + Metro): ₹10,000</li>
              <li>Miscellaneous (Kids' classes, Dining): ₹15,000</li>
            </ul>
            <ul className="space-y-2 text-sm text-gray-800">
              <li><strong>Step 1 (Total Expenses):</strong> 35,000 + 20,000 + 8,000 + 10,000 + 15,000 = <span className="font-bold">₹88,000</span></li>
              <li><strong>Step 2 (Potential Savings):</strong> ₹1,20,000 - ₹88,000 = <span className="font-bold text-green-700">₹32,000</span></li>
              <li><strong>Step 3 (Ratio):</strong> (88,000 ÷ 1,20,000) × 100 = <span className="font-bold">73.3%</span></li>
            </ul>
            <p className="mt-2 text-sm text-gray-600 italic">Conclusion: The family's ratio is slightly high (73%). They should aim to reduce miscellaneous expenses to increase their savings buffer.</p>
          </div>
        </div>
      </section>

      {/* --- FAQ SECTION --- */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
        <div className="space-y-4">
          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is the 50/30/20 budgeting rule?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The 50/30/20 rule is a highly popular and effective financial guideline. It suggests allocating <strong>50%</strong> of your take-home income to strict 'Needs' (rent, groceries, utility bills), <strong>30%</strong> to 'Wants' (entertainment, dining out, hobbies, shopping), and a minimum of <strong>20%</strong> strictly towards 'Savings or Debt Payoff' (investments, emergency funds, or clearing loans).
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What is a good Expense-to-Income ratio?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              A healthy Expense-to-Income ratio is generally considered to be 80% or lower, which aligns with saving at least 20% of your income. If your ratio is above 90%, it indicates that you are living paycheck to paycheck and are vulnerable to financial emergencies. You should look for immediate ways to cut discretionary spending.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">What should I include in the 'Miscellaneous' category?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              The Miscellaneous category is designed for irregular or discretionary expenses that do not fit into your standard fixed monthly bills. This includes ordering food from Swiggy/Zomato, movie tickets, clothing purchases, gym memberships, streaming subscriptions (Netflix, Amazon Prime), pet care, and occasional medical pharmacy visits.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">How can I reduce my monthly household expenses in India?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Start by tackling the biggest categories. Create a strict grocery list and avoid impulse buying at supermarkets. Drastically cut down on food delivery apps, which carry high hidden charges. Use public transport like the metro or carpool instead of driving daily. Finally, audit your bank statements and cancel any unused subscriptions or gym memberships.
            </div>
          </details>

          <details className="group bg-white border border-gray-200 rounded-lg open:shadow-md transition-all">
            <summary className="font-semibold px-5 py-4 cursor-pointer text-gray-900">Is my financial data safe when using this calculator?</summary>
            <div className="px-5 pb-4 text-gray-600 border-t border-gray-100 pt-3 text-sm leading-relaxed">
              Yes, absolutely. This Monthly Expense Calculator works entirely client-side within your web browser. We do not store, save, track, or transmit your income or expense data to any external servers. Your financial information remains 100% private to you.
            </div>
          </details>
        </div>
      </section>

      {/* --- INTERNAL LINKING / RELATED CALCULATORS --- */}
      <section className="bg-gray-50 p-6 rounded-xl border border-gray-200 mt-10">
        <h3 className="font-bold text-xl mb-4 text-gray-900">Explore Related Everyday Calculators</h3>
        <p className="text-sm mb-5 text-gray-600">Need more tools to simplify your daily life and personal finances? Check out our free calculators:</p>
        <div className="flex flex-wrap gap-3">
          <a href="/calculator/everyday/age" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Age Calculator</a>
          <a href="/calculator/everyday/basic-calculator" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Basic Calculator</a>
          <a href="/calculator/everyday/date" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Date Calculator</a>
          <a href="/calculator/everyday/discount" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Discount Calculator</a>
          <a href="/calculator/everyday/electricity" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Electricity Bill Calculator</a>
          <a href="/calculator/everyday/grocery-price" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Grocery Price Calculator</a>
          <a href="/calculator/everyday/mileage" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Mileage Calculator</a>
          <a href="/calculator/everyday/time-duration" className="text-sm text-blue-700 hover:text-blue-800 hover:underline bg-white px-4 py-2 rounded-md border border-gray-200 shadow-sm transition hover:border-blue-700">Time Duration Calculator</a>
        </div>
      </section>
      
    </div>
  );
}