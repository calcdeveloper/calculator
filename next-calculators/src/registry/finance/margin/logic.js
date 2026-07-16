export const calculateLogic = (inputs) => {
  const calcMode = inputs.calcMode || 'margin';
  const cost = inputs.cost || 0;
  
  if (cost <= 0) {
    return getZeroState();
  }

  let sellingPrice = 0;
  let grossProfit = 0;
  let marginPercentage = 0;
  let markupPercentage = 0;

  if (calcMode === 'margin') {
    sellingPrice = inputs.sellingPrice || 0;
    if (sellingPrice <= 0) return getZeroState();
    
    grossProfit = sellingPrice - cost;
    marginPercentage = (grossProfit / sellingPrice) * 100;
    markupPercentage = (grossProfit / cost) * 100;
  } else {
    const targetMargin = inputs.targetMargin || 0;
    if (targetMargin >= 100) return getZeroState(); // Cannot have 100% margin unless cost is 0
    
    // Price = Cost / (1 - Margin)
    sellingPrice = cost / (1 - (targetMargin / 100));
    grossProfit = sellingPrice - cost;
    marginPercentage = targetMargin;
    markupPercentage = (grossProfit / cost) * 100;
  }

  return {
    summary: [
      { label: 'Gross Profit', value: grossProfit, isCurrency: true, isHighlight: true },
      { label: 'Gross Margin', value: `${marginPercentage.toFixed(2)}%`, isHighlight: true },
      { label: 'Required Selling Price', value: sellingPrice, isCurrency: true },
      { label: 'Markup', value: `${markupPercentage.toFixed(2)}%` }
    ],
    chartData: [
      { name: 'Cost of Goods', value: cost },
      { name: 'Gross Profit', value: Math.max(0, grossProfit) }
    ],
    breakup: [
      { label: 'Total Revenue / Selling Price', value: sellingPrice },
      { label: 'Less: Cost of Goods Sold', value: cost },
      { label: 'Gross Profit', value: grossProfit, isTotal: true }
    ]
  };
};

function getZeroState() {
  return {
    summary: [
      { label: 'Gross Profit', value: 0, isCurrency: true, isHighlight: true },
      { label: 'Gross Margin', value: '0.00%', isHighlight: true },
      { label: 'Required Selling Price', value: 0, isCurrency: true },
      { label: 'Markup', value: '0.00%' }
    ],
    chartData: []
  };
}
