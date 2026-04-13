// client/src/registry/everyday/expense-calculator/config.js

export const config = {
  id: "expense-calculator",
  name: "Monthly Expense Calculator",
  description: "Track your monthly spending, calculate total expenses, and visualize where your money is going.",
  category: "finance", 
  seoTitle: "Monthly Expense Calculator | Free Budget & Savings Tracker",
  seoDescription: "Calculate your total monthly expenses, track your savings, and manage your budget efficiently with our free online monthly expense calculator.",
  seoKeywords: "monthly expense calculator, budget calculator, calculate savings, expense tracker online, 50/30/20 rule, expense-to-income ratio",
  inputs: [
    { id: "income", label: "Total Monthly Income", type: "number", min: 0, max: 500000, defaultValue: 50000, step: 1000, prefix: "₹" },
    { id: "rent", label: "Housing / Rent", type: "number", min: 0, max: 200000, defaultValue: 15000, step: 500, prefix: "₹" },
    { id: "groceries", label: "Groceries & Food", type: "number", min: 0, max: 100000, defaultValue: 8000, step: 100, prefix: "₹" },
    { id: "utilities", label: "Utilities", type: "number", min: 0, max: 50000, defaultValue: 3000, step: 100, prefix: "₹" },
    { id: "transport", label: "Transportation", type: "number", min: 0, max: 50000, defaultValue: 4000, step: 100, prefix: "₹" },
    { id: "misc", label: "Miscellaneous", type: "number", min: 0, max: 100000, defaultValue: 5000, step: 100, prefix: "₹" }
  ]
};