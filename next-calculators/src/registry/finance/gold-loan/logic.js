export const calculateLogic = (inputs) => {
  const goldWeight = inputs.goldWeight || 0;
  const goldPurity = inputs.goldPurity || 0;
  const goldPricePer10g = inputs.goldPrice || 0;
  const interestRate = inputs.interestRate || 0;
  const tenureMonths = inputs.tenure || 0;

  if (goldWeight <= 0 || goldPricePer10g <= 0 || tenureMonths <= 0) {
    return {
      summary: [
        { label: 'Max Eligible Loan', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Gold Value', value: 0, isCurrency: true },
        { label: 'Monthly EMI', value: 0, isCurrency: true, isHighlight: true }
      ],
      chartData: []
    };
  }

  // 1. Calculate the exact market value of the gold based on purity
  const pricePerGram24K = goldPricePer10g / 10;
  const adjustedPricePerGram = pricePerGram24K * (goldPurity / 24);
  const totalGoldValue = adjustedPricePerGram * goldWeight;

  // 2. RBI mandates a strict maximum Loan-to-Value (LTV) ratio of 75%
  const maxLtvRatio = 0.75;
  const maxEligibleLoan = totalGoldValue * maxLtvRatio;

  // 3. Calculate standard EMI for the max eligible loan
  const monthlyRate = interestRate / 12 / 100;
  const emi = maxEligibleLoan * monthlyRate * (Math.pow(1 + monthlyRate, tenureMonths)) / (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  const totalInterest = (emi * tenureMonths) - maxEligibleLoan;
  const totalPayable = maxEligibleLoan + totalInterest;

  return {
    summary: [
      { label: 'Max Eligible Loan', value: Math.round(maxEligibleLoan), isCurrency: true, isHighlight: true },
      { label: 'Monthly EMI', value: Math.round(emi), isCurrency: true, isHighlight: true },
      { label: 'Total Gold Value', value: Math.round(totalGoldValue), isCurrency: true },
      { label: 'Total Interest Payable', value: Math.round(totalInterest), isCurrency: true }
    ],
    chartData: [
      { name: 'Max Eligible Loan (75% LTV)', value: Math.round(maxEligibleLoan) },
      { name: 'Bank Safety Margin (25%)', value: Math.round(totalGoldValue - maxEligibleLoan) }
    ],
    breakup: [
      { label: `Weight of Gold`, value: `${goldWeight} Grams` },
      { label: `Purity of Gold`, value: `${goldPurity} Karats` },
      { label: `True Market Value of Gold`, value: Math.round(totalGoldValue), isTotal: true },
      { label: `Maximum Eligible Loan Amount (75%)`, value: Math.round(maxEligibleLoan) },
      { label: `Total Interest over ${tenureMonths} months`, value: Math.round(totalInterest) },
      { label: `Total Repayment to Bank`, value: Math.round(totalPayable), isTotal: true }
    ]
  };
};
