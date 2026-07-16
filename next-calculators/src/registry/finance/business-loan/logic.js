export const calculateLogic = (inputs) => {
  const principal = inputs.principal || 0;
  const interestRate = inputs.interestRate || 0;
  const tenureMonths = inputs.tenure || 0;
  const processingFeePercent = inputs.processingFee || 0;

  if (principal <= 0 || interestRate <= 0 || tenureMonths <= 0) {
    return {
      summary: [
        { label: 'Monthly EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Net Disbursed Amount', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Payable', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const monthlyRate = interestRate / 12 / 100;
  const emi = principal * monthlyRate * (Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalInterest = (emi * tenureMonths) - principal;
  const totalPayable = principal + totalInterest;

  // Processing Fee & Upfront Deductions
  const processingFee = principal * (processingFeePercent / 100);
  const gstOnProcessingFee = processingFee * 0.18; // 18% GST on service charges
  const totalUpfrontDeduction = processingFee + gstOnProcessingFee;
  
  // Net amount actually deposited into the business bank account
  const netDisbursedAmount = principal - totalUpfrontDeduction;

  // Generate Amortization Schedule
  let schedule = [];
  let balance = principal;
  let currentYear = 1;
  let yearlyPrincipal = 0;
  let yearlyInterest = 0;
  
  for (let month = 1; month <= tenureMonths; month++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = emi - interestForMonth;
    
    yearlyPrincipal += principalForMonth;
    yearlyInterest += interestForMonth;
    balance -= principalForMonth;
    if (balance < 0) balance = 0;

    if (month % 12 === 0 || month === tenureMonths) {
      schedule.push({
        month: `Year ${currentYear}`,
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
      { label: 'Net Disbursed Amount', value: Math.round(netDisbursedAmount), isCurrency: true, isHighlight: true },
      { label: 'Total Amount Payable', value: Math.round(totalPayable), isCurrency: true },
      { label: 'Total Interest Payable', value: Math.round(totalInterest), isCurrency: true }
    ],
    chartData: [
      { name: 'Principal Loan Amount', value: principal },
      { name: 'Total Interest', value: Math.round(totalInterest) }
    ],
    breakup: [
      { label: 'Gross Loan Amount', value: principal },
      { label: 'Processing Fee Deducted', value: Math.round(processingFee) },
      { label: '18% GST on Processing Fee', value: Math.round(gstOnProcessingFee) },
      { label: 'Net Disbursed Amount to Account', value: Math.round(netDisbursedAmount), isTotal: true },
      { label: 'Total Interest Paid Over Tenure', value: Math.round(totalInterest) },
      { label: 'Total Repayment to Bank (Principal + Interest)', value: Math.round(totalPayable), isTotal: true }
    ],
    schedule
  };
};
