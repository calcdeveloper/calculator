// client/src/registry/everyday/expense-calculator/logic.js

export function calculateLogic(inputs) {
  // Extract inputs with strict fallback to 0
  const income = Number(inputs.income) || 0;
  const rent = Number(inputs.rent) || 0;
  const groceries = Number(inputs.groceries) || 0;
  const utilities = Number(inputs.utilities) || 0;
  const transport = Number(inputs.transport) || 0;
  const misc = Number(inputs.misc) || 0;

  // Perform Math
  const totalExpenses = rent + groceries + utilities + transport + misc;
  const monthlySavings = income - totalExpenses;
  
  // Prevent division by zero
  const expenseRatio = income > 0 ? ((totalExpenses / income) * 100).toFixed(1) : 0;

  // Format strictly to match CalculatorLayout expectations
  return {
    summary: [
      {
        label: "Total Monthly Expenses",
        value: totalExpenses,
        isCurrency: true,
        isHighlight: true,
      },
      {
        label: "Potential Monthly Savings",
        value: monthlySavings,
        isCurrency: true,
        isHighlight: false,
      },
      {
        label: "Expense-to-Income Ratio",
        value: `${expenseRatio}%`,
        isCurrency: false, 
        isHighlight: false,
      },
    ],
    // Trigger Recharts Pie Chart
    chartData: [
      { name: "Rent/Mortgage", value: rent },
      { name: "Groceries", value: groceries },
      { name: "Utilities", value: utilities },
      { name: "Transport", value: transport },
      { name: "Misc", value: misc },
      ...(monthlySavings > 0 ? [{ name: "Savings", value: monthlySavings }] : [])
    ].filter(item => item.value > 0)
  };
}