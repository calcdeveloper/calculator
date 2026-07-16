export const calculateLogic = (inputs) => {
  const shares = inputs.shares || 0;
  const buyPrice = inputs.buyPrice || 0;
  const sellPrice = inputs.sellPrice || 0;
  const buyCommission = inputs.buyCommission || 0;
  const sellCommission = inputs.sellCommission || 0;

  if (shares <= 0 || buyPrice <= 0) {
    return {
      summary: [
        { label: 'Net Profit / Loss', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Return on Investment (ROI)', value: '0.00%', isHighlight: true },
        { label: 'Total Capital Invested', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const totalBuyValue = shares * buyPrice;
  const totalSellValue = shares * sellPrice;
  const totalCommission = buyCommission + sellCommission;
  
  // Total cost includes the cost of buying the shares plus all commissions paid
  const totalCost = totalBuyValue + totalCommission;
  
  const netProfit = totalSellValue - totalCost;
  
  // ROI is calculated based on the total actual cost to the investor
  const roi = totalCost > 0 ? (netProfit / totalCost) * 100 : 0;
  const isProfit = netProfit >= 0;

  return {
    summary: [
      { 
        label: isProfit ? 'Net Profit' : 'Net Loss', 
        value: Math.abs(netProfit), 
        isCurrency: true, 
        isHighlight: true,
        // Optional: you can use styling flags if your UI supports it, but standard is Currency/Highlight
      },
      { 
        label: 'Return on Investment (ROI)', 
        value: `${roi.toFixed(2)}%`, 
        isHighlight: true 
      },
      { label: 'Total Capital Invested', value: totalBuyValue, isCurrency: true },
      { label: 'Total Fees & Commissions', value: totalCommission, isCurrency: true },
      { label: 'Total Return Value', value: totalSellValue, isCurrency: true }
    ],
    chartData: [
      { name: 'Initial Capital', value: totalBuyValue },
      { name: 'Commissions', value: totalCommission },
      { name: isProfit ? 'Net Profit' : 'Gross Value', value: isProfit ? netProfit : totalSellValue }
    ]
  };
};
