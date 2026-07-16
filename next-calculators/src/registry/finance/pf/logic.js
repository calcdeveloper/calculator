export const calculateLogic = (inputs) => {
  const currentAge = inputs.currentAge || 25;
  const retirementAge = inputs.retirementAge || 58;
  const basicSalary = inputs.basicSalary || 0;
  const annualIncrement = (inputs.annualIncrement || 0) / 100;
  const initialBalance = inputs.currentBalance || 0;
  const interestRate = (inputs.interestRate || 8.25) / 100;

  const yearsToRetire = Math.max(0, retirementAge - currentAge);
  
  if (yearsToRetire === 0) {
    return {
      summary: [
        { label: 'Total EPF Corpus', value: initialBalance, isCurrency: true, isHighlight: true },
        { label: 'Total Invested', value: 0, isCurrency: true },
        { label: 'Total Interest Earned', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  let currentBasic = basicSalary;
  let balance = initialBalance;
  let totalInvested = 0;

  const employeeRate = 0.12;
  const employerRate = 0.0367; // 3.67% goes to EPF, 8.33% to EPS

  for (let year = 1; year <= yearsToRetire; year++) {
    // Annual contribution based on current year's basic salary
    const annualEmployeeContribution = currentBasic * 12 * employeeRate;
    const annualEmployerContribution = currentBasic * 12 * employerRate;
    const totalAnnualContribution = annualEmployeeContribution + annualEmployerContribution;

    // Interest is calculated on opening balance + average of contributions made during the year
    const interestEarned = (balance + (totalAnnualContribution / 2)) * interestRate;
    
    balance = balance + totalAnnualContribution + interestEarned;
    totalInvested += totalAnnualContribution;

    // Increase basic salary for the next year
    currentBasic += currentBasic * annualIncrement;
  }

  const totalInterestEarned = balance - initialBalance - totalInvested;

  return {
    summary: [
      { label: 'Total EPF Corpus', value: balance, isCurrency: true, isHighlight: true },
      { label: 'Total Contributions (You + Employer)', value: totalInvested, isCurrency: true },
      { label: 'Total Interest Earned', value: totalInterestEarned, isCurrency: true }
    ],
    chartData: [
      { name: 'Your Initial Balance', value: initialBalance },
      { name: 'Total Contributions', value: totalInvested },
      { name: 'Interest Earned', value: totalInterestEarned }
    ]
  };
};
