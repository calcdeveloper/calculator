export const calculateLogic = (inputs) => {
  const investmentType = inputs.investmentType || 'sip';
  const amount = inputs.amount || 0;
  const expectedReturn = (inputs.expectedReturn || 12) / 100;
  const period = inputs.period || 15;
  const taxSlab = parseFloat(inputs.taxSlab || '30') / 100;

  if (period <= 0 || amount <= 0) {
    return {
      summary: [
        { label: 'Total Value', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Investment', value: 0, isCurrency: true },
        { label: 'Total Tax Saved', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  let totalInvested = 0;
  let futureValue = 0;
  let totalTaxSaved = 0;

  if (investmentType === 'sip') {
    // SIP Calculation
    const monthlyRate = expectedReturn / 12;
    const totalMonths = period * 12;
    totalInvested = amount * totalMonths;
    
    // FV = P * [((1 + r)^n - 1) / r] * (1 + r)
    if (monthlyRate > 0) {
      futureValue = amount * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
    } else {
      futureValue = totalInvested;
    }

    // Tax saved calculation for SIP (Tax saved every year)
    const annualInvestment = amount * 12;
    const eligible80CAmount = Math.min(annualInvestment, 150000);
    const taxSavedPerYear = eligible80CAmount * taxSlab;
    // Assuming the investor gets the tax benefit every year for the duration of the SIP
    totalTaxSaved = taxSavedPerYear * period;

  } else {
    // Lumpsum Calculation
    totalInvested = amount;
    
    // FV = P * (1 + r)^n
    futureValue = amount * Math.pow(1 + expectedReturn, period);

    // Tax saved calculation for Lumpsum (Tax saved only in the 1st year)
    const eligible80CAmount = Math.min(amount, 150000);
    totalTaxSaved = eligible80CAmount * taxSlab;
  }

  const wealthGained = futureValue - totalInvested;

  return {
    summary: [
      { label: 'Expected Total Value', value: futureValue, isCurrency: true, isHighlight: true },
      { label: 'Total Amount Invested', value: totalInvested, isCurrency: true },
      { label: 'Wealth Gained', value: wealthGained, isCurrency: true },
      { label: 'Total Tax Saved (Under Sec 80C)', value: totalTaxSaved, isCurrency: true, isHighlight: true }
    ],
    chartData: [
      { name: 'Total Invested', value: totalInvested },
      { name: 'Wealth Gained', value: wealthGained }
    ]
  };
};
