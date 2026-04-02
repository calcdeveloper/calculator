// client/src/registry/everyday/expense-calculator/content.jsx

import React from "react";

export default function ExpenseContent() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-calc-black mb-4">
        Master Your Budget: How to Use the Monthly Expense Calculator
      </h2>
      <p className="text-calc-darkGray">
        Taking control of your personal finances begins with a clear understanding of your cash flow. Our free Monthly Expense Calculator helps you break down your monthly spending into distinct categories, visualize where your money goes, and calculate your exact savings potential.
      </p>

      <h3 className="text-xl font-bold text-calc-black mt-8 mb-3">
        The Core Budgeting Formulas
      </h3>
      <p className="text-calc-darkGray mb-4">
        Our calculator runs on three fundamental financial formulas to provide a comprehensive view of your financial health.
      </p>

      <div className="bg-calc-beige/50 p-6 rounded-xl border border-calc-lightGray mb-6">
        <h4 className="font-bold text-calc-black mb-2">1. Total Monthly Expenses</h4>
        <p className="text-calc-darkGray mb-2">
          This is the sum of all your fixed and variable costs for the month.
        </p>
        <div className="overflow-x-auto pb-2 font-mono text-calc-green font-bold bg-white p-3 rounded border border-calc-lightGray">
          Total Expenses = Rent + Groceries + Utilities + Transport + Miscellaneous
        </div>
      </div>

      <div className="bg-calc-beige/50 p-6 rounded-xl border border-calc-lightGray mb-6">
        <h4 className="font-bold text-calc-black mb-2">2. Potential Monthly Savings</h4>
        <p className="text-calc-darkGray mb-2">
          Your savings represent the money left over after all expenses are deducted from your total income.
        </p>
        <div className="overflow-x-auto pb-2 font-mono text-calc-green font-bold bg-white p-3 rounded border border-calc-lightGray">
          Potential Savings = Total Income - Total Expenses
        </div>
      </div>

      <div className="bg-calc-beige/50 p-6 rounded-xl border border-calc-lightGray mb-6">
        <h4 className="font-bold text-calc-black mb-2">3. Expense-to-Income Ratio</h4>
        <p className="text-calc-darkGray mb-2">
          This metric shows what percentage of your income is consumed by your lifestyle. A lower ratio means better financial stability.
        </p>
        <div className="overflow-x-auto pb-2 font-mono text-calc-green font-bold bg-white p-3 rounded border border-calc-lightGray">
          Ratio (%) = (Total Expenses ÷ Total Income) × 100
        </div>
      </div>

      <h3 className="text-xl font-bold text-calc-black mt-8 mb-3">
        Practical Example Calculation
      </h3>
      <p className="text-calc-darkGray mb-4">
        Let's say your monthly take-home income is <strong>₹50,000</strong>. Your monthly costs are:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-4 text-calc-darkGray">
        <li><strong>Rent:</strong> ₹15,000</li>
        <li><strong>Groceries:</strong> ₹8,000</li>
        <li><strong>Utilities:</strong> ₹3,000</li>
        <li><strong>Transport:</strong> ₹4,000</li>
        <li><strong>Misc:</strong> ₹5,000</li>
      </ul>
      <p className="text-calc-darkGray mb-4">
        First, we calculate the <strong>Total Expenses</strong>:
        <br/>
        <span className="font-mono">15,000 + 8,000 + 3,000 + 4,000 + 5,000 = ₹35,000</span>
      </p>
      <p className="text-calc-darkGray mb-4">
        Next, we find your <strong>Potential Savings</strong>:
        <br/>
        <span className="font-mono">50,000 - 35,000 = ₹15,000</span>
      </p>
      <p className="text-calc-darkGray mb-6">
        Finally, we calculate your <strong>Expense-to-Income Ratio</strong>:
        <br/>
        <span className="font-mono">(35,000 ÷ 50,000) × 100 = 70%</span>
      </p>

      <h3 className="text-xl font-bold text-calc-black mt-8 mb-3">
        Applying the 50/30/20 Rule
      </h3>
      <p className="text-calc-darkGray mb-4">
        If you are unsure whether your current ratio is healthy, try comparing it against the popular <strong>50/30/20 budgeting rule</strong>:
      </p>
      <ul className="list-disc pl-6 space-y-2 mb-6 text-calc-darkGray">
        <li><strong>50% Needs:</strong> Essential living expenses like rent, utilities, and groceries.</li>
        <li><strong>30% Wants:</strong> Discretionary spending like entertainment, dining out, and hobbies.</li>
        <li><strong>20% Savings:</strong> Money allocated for investments, emergency funds, or debt repayment.</li>
      </ul>
      <p className="text-calc-darkGray">
        Use the interactive pie chart in our calculator above to instantly see if your spending aligns with these optimal financial guidelines!
      </p>
    </div>
  );
}