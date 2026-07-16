export const calculateLogic = (inputs) => {
  const investmentType = inputs.investmentType || 'sip';
  const amount = inputs.amount || 0;
  const stepUp = (inputs.stepUp || 0) / 100;
  const expectedReturn = (inputs.expectedReturn || 12) / 100;
  const period = inputs.period || 10;

  if (period <= 0 || amount <= 0) {
    return {
      summary: [
        { label: 'Expected Total Value', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Amount Invested', value: 0, isCurrency: true },
        { label: 'Wealth Gained', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  let totalInvested = 0;
  let futureValue = 0;

  if (investmentType === 'sip') {
    // Step-up SIP Calculation
    // We calculate this month by month to accurately reflect the annual step-up
    let currentMonthlySIP = amount;
    const monthlyRate = expectedReturn / 12;
    const totalMonths = period * 12;
    
    let currentCorpus = 0;

    for (let month = 1; month <= totalMonths; month++) {
      totalInvested += currentMonthlySIP;
      
      // Add contribution at the beginning of the month and then grow it
      currentCorpus += currentMonthlySIP;
      currentCorpus *= (1 + monthlyRate);

      // Apply step-up at the end of every 12 months
      if (month % 12 === 0) {
        currentMonthlySIP += (currentMonthlySIP * stepUp);
      }
    }
    
    futureValue = currentCorpus;

  } else {
    // Lumpsum Calculation
    totalInvested = amount;
    futureValue = amount * Math.pow(1 + expectedReturn, period);
  }

  const wealthGained = futureValue - totalInvested;

  return {
    summary: [
      { label: 'Expected Total Value', value: futureValue, isCurrency: true, isHighlight: true },
      { label: 'Total Amount Invested', value: totalInvested, isCurrency: true },
      { label: 'Wealth Gained', value: wealthGained, isCurrency: true }
    ],
    chartData: [
      { name: 'Total Invested', value: totalInvested },
      { name: 'Wealth Gained', value: wealthGained }
    ]
  };
};
