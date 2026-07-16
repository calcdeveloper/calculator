export const calculateLogic = (inputs) => {
  const openingBalance = inputs.openingBalance || 0;
  const employeeContribution = inputs.employeeContribution || 0;
  const employerContribution = inputs.employerContribution || 0;
  const interestRate = (inputs.interestRate || 8.25) / 100;

  const totalMonthlyContribution = employeeContribution + employerContribution;
  let totalInterest = 0;
  let currentBalance = openingBalance;

  // EPFO calculates interest on the opening balance of each month.
  // The contribution for a month is usually credited to the account in the next month.
  // For simplicity and exact standard calculation:
  // April Opening = OB
  // May Opening = OB + 1C
  // June Opening = OB + 2C
  // ...
  // March Opening = OB + 11C
  
  for (let month = 1; month <= 12; month++) {
    // Interest for the month = Current balance * (Rate / 12)
    const monthlyInterest = currentBalance * (interestRate / 12);
    totalInterest += monthlyInterest;
    
    // Add this month's contribution for the next month's opening balance
    currentBalance += totalMonthlyContribution;
  }

  // The closing balance at the end of the year (March 31) includes the year's total contributions PLUS the total interest earned.
  const finalClosingBalance = currentBalance + totalInterest;
  const totalContributionsMade = totalMonthlyContribution * 12;

  return {
    summary: [
      { label: 'Total EPF Interest Earned', value: totalInterest, isCurrency: true, isHighlight: true },
      { label: 'Closing Balance (Mar 31)', value: finalClosingBalance, isCurrency: true },
      { label: 'Total Contributions (1 Yr)', value: totalContributionsMade, isCurrency: true }
    ],
    chartData: [
      { name: 'Opening Balance', value: openingBalance },
      { name: 'Total Contributions', value: totalContributionsMade },
      { name: 'Interest Earned', value: totalInterest }
    ]
  };
};
