export const calculateLogic = (inputs) => {
  const P = inputs.monthlyInvestment;
  const r = inputs.returnRate;
  const t = inputs.timePeriod;
  const inflationRate = inputs.inflationRate || 0; // Defaults to 0 if left empty

  const i = r / 12 / 100; // Monthly interest rate
  const n = t * 12; // Total months

  // 1. Calculate Standard Future Value (FV) of Annuity Due
  let FV = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
  const totalInvested = P * n;

  // 2. Adjust for Inflation directly
  // If a user sets the Inflation Rate to 0, the discountFactor becomes 1 (no change to FV).
  const discountFactor = Math.pow(1 + (inflationRate / 100), t);
  FV = FV / discountFactor;

  // Final Rounding
  const finalValue = Math.round(FV);
  // Estimated Returns based on the adjusted corpus
  const estReturns = Math.round(finalValue - totalInvested);

  // Returning data in a format the Master Engine understands
  return {
    summary: [
      { label: 'Invested Amount', value: totalInvested, isCurrency: true },
      { label: 'Est. Returns', value: estReturns, isCurrency: true },
      { label: 'Total Value', value: finalValue, isCurrency: true, isHighlight: true }
    ],
    chartData: [
      { name: 'Invested Amount', value: totalInvested },
      { name: 'Est. Returns', value: Math.max(0, estReturns) } // Prevent negative chart bars if inflation > returns
    ]
  };
};