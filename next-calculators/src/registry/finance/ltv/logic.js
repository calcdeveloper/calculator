export const calculateLogic = (inputs) => {
  const employmentType = inputs.employmentType || 'salaried';
  const propertyValue = inputs.propertyValue || 0;
  const propertyType = inputs.propertyType || 'residential';
  const tenor = inputs.tenor || 1;
  const interestRate = inputs.interestRate || 8.0;

  if (propertyValue <= 0 || tenor <= 0 || interestRate <= 0) {
    return {
      summary: [
        { label: 'Max Eligible Loan', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Monthly EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Applicable LTV', value: '0%' }
      ],
      chartData: []
    };
  }

  // Determine Max LTV based on standard guidelines
  let maxLtv = 0;
  
  if (propertyType === 'residential') {
    if (propertyValue <= 3000000) {
      maxLtv = 90;
    } else if (propertyValue <= 7500000) {
      maxLtv = 80;
    } else {
      maxLtv = 75;
    }
  } else {
    // Commercial property usually has lower LTV
    maxLtv = 60;
  }

  // Self-employed often face slightly stricter LTV norms (5% reduction for realism)
  if (employmentType === 'self-employed') {
    maxLtv -= 5;
  }

  const maxLoanAmount = propertyValue * (maxLtv / 100);
  const downPayment = propertyValue - maxLoanAmount;

  // EMI Calculation
  const principal = maxLoanAmount;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenor * 12;

  let emi = 0;
  if (principal > 0 && monthlyRate > 0 && totalMonths > 0) {
    emi = principal * monthlyRate * (Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);
  }

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - principal;

  // Generate Amortization Schedule
  let schedule = [];
  let balance = principal;
  
  // To prevent massive schedules, limit to yearly summaries if tenor > 5 years, or just monthly for the first 12 if long.
  // Actually, standard is to show a yearly breakdown if it's very long, or we can just return the first 120 months max.
  let currentYear = 1;
  let yearlyPrincipal = 0;
  let yearlyInterest = 0;
  
  for (let month = 1; month <= totalMonths; month++) {
    const interestForMonth = balance * monthlyRate;
    const principalForMonth = emi - interestForMonth;
    
    yearlyPrincipal += principalForMonth;
    yearlyInterest += interestForMonth;
    balance -= principalForMonth;
    if (balance < 0) balance = 0;

    if (month % 12 === 0 || month === totalMonths) {
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
      { label: 'Max Eligible Loan', value: maxLoanAmount, isCurrency: true, isHighlight: true },
      { label: 'Estimated EMI', value: Math.round(emi), isCurrency: true, isHighlight: true },
      { label: 'Applicable LTV', value: `${maxLtv}%` },
      { label: 'Required Down Payment', value: downPayment, isCurrency: true }
    ],
    chartData: [
      { name: 'Principal Loan Amount', value: principal },
      { name: 'Total Interest', value: Math.round(totalInterest) }
    ],
    breakup: [
      { label: 'Property Value', value: propertyValue },
      { label: `Max LTV Allowed (${maxLtv}%)`, value: maxLoanAmount },
      { label: 'Required Down Payment', value: downPayment },
      { label: 'Total Interest Payable', value: Math.round(totalInterest) },
      { label: 'Total Amount Payable (Loan + Interest)', value: Math.round(totalPayment), isTotal: true }
    ],
    schedule
  };
};
