export const calculateLogic = (inputs) => {
  const fixedCosts = inputs.fixedCosts || 0;
  const variableCost = inputs.variableCost || 0;
  const sellingPrice = inputs.sellingPrice || 0;

  if (fixedCosts <= 0 || sellingPrice <= 0) {
    return {
      summary: [
        { label: 'Break Even Point (Units)', value: 0, isHighlight: true },
        { label: 'Break Even Sales Revenue', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Contribution Margin per Unit', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const contributionMargin = sellingPrice - variableCost;
  
  // If margin is negative or zero, you can never break even.
  const isImpossible = contributionMargin <= 0;
  
  const breakEvenUnits = isImpossible ? 0 : Math.ceil(fixedCosts / contributionMargin);
  const breakEvenRevenue = isImpossible ? 0 : breakEvenUnits * sellingPrice;
  const marginRatio = (contributionMargin / sellingPrice) * 100;

  return {
    summary: [
      { label: 'Break Even Point (Units)', value: isImpossible ? 'Impossible' : breakEvenUnits.toLocaleString("en-IN"), isHighlight: true },
      { label: 'Break Even Sales Revenue', value: isImpossible ? 0 : breakEvenRevenue, isCurrency: true, isHighlight: true },
      { label: 'Contribution Margin per Unit', value: contributionMargin, isCurrency: true },
      { label: 'Contribution Margin Ratio', value: `${marginRatio.toFixed(2)}%` }
    ],
    chartData: isImpossible ? [] : [
      { name: 'Fixed Costs', value: fixedCosts },
      { name: 'Variable Costs (at Break Even)', value: breakEvenUnits * variableCost }
    ],
    breakup: [
      { label: 'Selling Price per Unit', value: sellingPrice },
      { label: 'Less: Variable Cost per Unit', value: variableCost },
      { label: 'Contribution Margin per Unit', value: contributionMargin, isTotal: true },
      { label: 'Total Fixed Costs', value: fixedCosts },
      { label: 'Target Break-Even Revenue', value: breakEvenRevenue, isTotal: true }
    ]
  };
};
