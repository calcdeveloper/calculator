export const calculateLogic = (inputs) => {
    const P = inputs.monthlyInvestment;
    const i = inputs.returnRate / 12 / 100; // Monthly interest rate
    const n = inputs.timePeriod * 12; // Total months
  
    // Future Value Formula
    const M = Math.round(P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i));
    const totalInvested = P * n;
    const estReturns = M - totalInvested;
  
    // Returning data in a format the Master Engine understands
    return {
      summary: [
        { label: 'Invested Amount', value: totalInvested, isCurrency: true },
        { label: 'Est. Returns', value: estReturns, isCurrency: true },
        { label: 'Total Value', value: M, isCurrency: true, isHighlight: true }
      ],
      chartData: [
        { name: 'Invested Amount', value: totalInvested },
        { name: 'Est. Returns', value: estReturns }
      ]
    };
  };