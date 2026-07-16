export const calculateLogic = (inputs) => {
  const currentAge = inputs.currentAge || 30;
  const retirementAge = inputs.retirementAge || 60;
  const monthlyContribution = inputs.monthlyContribution || 0;
  const expectedReturn = (inputs.expectedReturn || 10) / 100;
  const annuityPurchase = (inputs.annuityPurchase || 40) / 100;
  const annuityReturn = (inputs.annuityReturn || 6) / 100;

  const yearsToInvest = Math.max(0, retirementAge - currentAge);
  const totalMonths = yearsToInvest * 12;
  
  if (totalMonths === 0) {
    return {
      summary: [
        { label: 'Total Corpus Generated', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Estimated Monthly Pension', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Lump Sum Withdrawal', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const monthlyRate = expectedReturn / 12;
  
  // Future Value of a Series (Annuity) formula, compounded monthly
  // FV = P * [((1 + r)^n - 1) / r] * (1 + r)
  let totalCorpus = 0;
  if (monthlyRate > 0) {
    totalCorpus = monthlyContribution * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
  } else {
    totalCorpus = monthlyContribution * totalMonths;
  }

  const totalInvested = monthlyContribution * totalMonths;
  const interestEarned = totalCorpus - totalInvested;

  // NPS Rules: Annuity purchase (min 40%), Lump sum (max 60%)
  const amountForAnnuity = totalCorpus * annuityPurchase;
  const lumpSumWithdrawal = totalCorpus - amountForAnnuity;

  // Monthly pension from annuity
  const monthlyPension = amountForAnnuity * (annuityReturn / 12);

  return {
    summary: [
      { label: 'Total Corpus Generated', value: totalCorpus, isCurrency: true },
      { label: 'Estimated Monthly Pension', value: monthlyPension, isCurrency: true, isHighlight: true },
      { label: 'Tax-Free Lump Sum', value: lumpSumWithdrawal, isCurrency: true, isHighlight: true },
      { label: 'Total Principal Invested', value: totalInvested, isCurrency: true }
    ],
    chartData: [
      { name: 'Total Invested', value: totalInvested },
      { name: 'Wealth Gained', value: interestEarned }
    ],
    details: {
      amountForAnnuity
    }
  };
};
