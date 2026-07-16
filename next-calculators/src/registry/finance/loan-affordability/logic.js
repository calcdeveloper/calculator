export const calculateLogic = (inputs) => {
  const monthlyIncome = inputs.monthlyIncome || 0;
  const existingEmi = inputs.existingEmi || 0;
  const downPayment = inputs.downPayment || 0;
  const interestRate = inputs.interestRate || 0;
  const tenureYears = inputs.tenure || 0;

  if (monthlyIncome <= 0 || tenureYears <= 0 || interestRate <= 0) {
    return {
      summary: [
        { label: 'Max Affordable Loan', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Max New EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Max Property/Asset Price', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  // Banks generally cap total Debt-to-Income (DTI) ratio at 50% of Gross Monthly Income
  const maxTotalDtiRatio = 0.50;
  const maxTotalEmiAllowed = monthlyIncome * maxTotalDtiRatio;
  
  // Subtract existing obligations to find the buffer for a new EMI
  const maxNewEmi = maxTotalEmiAllowed - existingEmi;

  if (maxNewEmi <= 0) {
    // Borrower is already over-leveraged
    return {
      summary: [
        { label: 'Max Affordable Loan', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Max New EMI', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Current DTI', value: `${((existingEmi / monthlyIncome) * 100).toFixed(1)}%` },
        { label: 'Status', value: 'Over-leveraged' }
      ],
      chartData: [
        { name: 'Existing EMIs', value: existingEmi },
        { name: 'Remaining Income', value: monthlyIncome - existingEmi }
      ],
      breakup: [
        { label: 'Gross Monthly Income', value: monthlyIncome },
        { label: 'Max Total Debt Allowed (50% DTI)', value: maxTotalEmiAllowed },
        { label: 'Existing Monthly EMIs', value: existingEmi },
        { label: 'Available Budget for New EMI', value: 0, isTotal: true }
      ]
    };
  }

  // Calculate Present Value (Max Loan Amount) based on Max New EMI
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // PV = EMI * ( (1 - (1 + r)^-n) / r )
  const maxLoanAmount = maxNewEmi * ( (1 - Math.pow(1 + monthlyRate, -totalMonths)) / monthlyRate );
  
  const maxAssetPrice = maxLoanAmount + downPayment;
  const currentDti = ((existingEmi + maxNewEmi) / monthlyIncome) * 100;

  return {
    summary: [
      { label: 'Max Affordable Loan', value: Math.round(maxLoanAmount), isCurrency: true, isHighlight: true },
      { label: 'Max New EMI', value: Math.round(maxNewEmi), isCurrency: true, isHighlight: true },
      { label: 'Max Property Price', value: Math.round(maxAssetPrice), isCurrency: true },
      { label: 'Final DTI Ratio', value: `${currentDti.toFixed(1)}%` }
    ],
    chartData: [
      { name: 'Available Loan Capacity', value: Math.round(maxLoanAmount) },
      { name: 'Cash Down Payment', value: downPayment }
    ],
    breakup: [
      { label: 'Gross Monthly Income', value: monthlyIncome },
      { label: 'Max Debt Capacity (50% DTI)', value: maxTotalEmiAllowed },
      { label: 'Existing EMIs (Subtracted)', value: existingEmi },
      { label: 'Affordable New Monthly EMI', value: Math.round(maxNewEmi), isTotal: true },
      { label: 'Maximum Approved Loan Amount', value: Math.round(maxLoanAmount) },
      { label: 'Available Down Payment', value: downPayment },
      { label: 'Absolute Maximum Asset/Property Price', value: Math.round(maxAssetPrice), isTotal: true }
    ]
  };
};
