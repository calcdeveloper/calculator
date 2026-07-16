export const calculateLogic = (inputs) => {
  const principal = inputs.principal || 0;
  const interestRate = inputs.interestRate || 0;
  const moratoriumMonths = inputs.moratorium || 0;
  const tenureYears = inputs.tenure || 0;

  if (principal <= 0 || interestRate <= 0 || tenureYears <= 0) {
    return {
      summary: [
        { label: 'Monthly EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Loan Disbursed', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Payable', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  // Calculate Simple Interest accrued during the Moratorium period
  const accruedMoratoriumInterest = principal * (interestRate / 100) * (moratoriumMonths / 12);
  
  // The new principal on which EMI will be calculated includes the accrued interest
  const repaymentPrincipal = principal + accruedMoratoriumInterest;

  // Calculate EMI based on the new capitalized principal
  const monthlyRate = interestRate / 12 / 100;
  const repaymentMonths = tenureYears * 12;
  const emi = repaymentPrincipal * monthlyRate * (Math.pow(1 + monthlyRate, repaymentMonths)) / (Math.pow(1 + monthlyRate, repaymentMonths) - 1);
  
  const repaymentInterest = (emi * repaymentMonths) - repaymentPrincipal;
  const totalInterest = accruedMoratoriumInterest + repaymentInterest;
  const totalPayable = principal + totalInterest;

  // Generate Amortization Schedule
  let schedule = [];
  let balance = repaymentPrincipal;
  let currentYear = 1;
  let yearlyPrincipal = 0;
  let yearlyInterest = 0;
  
  for (let month = 1; month <= repaymentMonths; month++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = emi - interestForMonth;
    
    yearlyPrincipal += principalForMonth;
    yearlyInterest += interestForMonth;
    balance -= principalForMonth;
    if (balance < 0) balance = 0;

    if (month % 12 === 0 || month === repaymentMonths) {
      schedule.push({
        month: `Repayment Year ${currentYear}`,
        principal: Math.round(yearlyPrincipal),
        interest: Math.round(yearlyInterest),
        balance: Math.round(balance)
      });
      currentYear++;
      yearlyPrincipal = 0;
      yearlyInterest = 0;
    }
  }

  return {
    summary: [
      { label: 'Monthly EMI', value: Math.round(emi), isCurrency: true, isHighlight: true },
      { label: 'Total Interest Payable', value: Math.round(totalInterest), isCurrency: true, isHighlight: true },
      { label: 'Total Amount Payable', value: Math.round(totalPayable), isCurrency: true },
      { label: 'Starting Repayment Principal', value: Math.round(repaymentPrincipal), isCurrency: true }
    ],
    chartData: [
      { name: 'Disbursed Principal', value: principal },
      { name: 'Moratorium Accrued Interest', value: Math.round(accruedMoratoriumInterest) },
      { name: 'Repayment Phase Interest', value: Math.round(repaymentInterest) }
    ],
    breakup: [
      { label: 'Total Disbursed Loan Amount', value: principal },
      { label: `Moratorium Interest (${moratoriumMonths} months)`, value: Math.round(accruedMoratoriumInterest) },
      { label: 'New Principal at Repayment Start', value: Math.round(repaymentPrincipal), isTotal: true },
      { label: `Interest Paid over ${tenureYears} Years Repayment`, value: Math.round(repaymentInterest) },
      { label: 'Absolute Total Amount Payable', value: Math.round(totalPayable), isTotal: true }
    ],
    schedule
  };
};
