export const calculateLogic = (inputs) => {
  const tradeType = inputs.tradeType || 'intraday';
  const quantity = inputs.quantity || 0;
  const buyPrice = inputs.buyPrice || 0;
  const sellPrice = inputs.sellPrice || 0;

  if (quantity <= 0 || buyPrice <= 0 || sellPrice <= 0) {
    return {
      summary: [
        { label: 'Net Profit / Loss', value: 0, isCurrency: true, isHighlight: true },
        { label: 'Total Brokerage & Taxes', value: 0, isCurrency: true },
        { label: 'Gross Profit / Loss', value: 0, isCurrency: true }
      ],
      chartData: []
    };
  }

  const buyTurnover = buyPrice * quantity;
  const sellTurnover = sellPrice * quantity;
  const totalTurnover = buyTurnover + sellTurnover;

  let brokerage = 0;
  let stt = 0;
  let exchangeCharges = 0;
  let gst = 0;
  let sebiCharges = 0;
  let stampDuty = 0;

  // Exchange Transaction Charges (NSE roughly 0.00325%)
  exchangeCharges = totalTurnover * 0.0000325;
  
  // SEBI Charges (₹10 / crore)
  sebiCharges = totalTurnover * 0.000001;

  if (tradeType === 'intraday') {
    // Intraday Brokerage: Lower of ₹20 or 0.03% per executed order
    const buyBrokerage = Math.min(20, buyTurnover * 0.0003);
    const sellBrokerage = Math.min(20, sellTurnover * 0.0003);
    brokerage = buyBrokerage + sellBrokerage;

    // STT: 0.025% on the sell side only
    stt = Math.round(sellTurnover * 0.00025);

    // Stamp Duty: 0.003% on the buy side only
    stampDuty = Math.round(buyTurnover * 0.00003);

  } else {
    // Delivery Brokerage: ₹0 at discount brokers like Zerodha
    brokerage = 0;

    // STT: 0.1% on both buy and sell sides
    stt = Math.round(totalTurnover * 0.001);

    // Stamp Duty: 0.015% on the buy side only
    stampDuty = Math.round(buyTurnover * 0.00015);
  }

  // GST: 18% on (Brokerage + Exchange Charges + SEBI Charges)
  gst = (brokerage + exchangeCharges + sebiCharges) * 0.18;

  // Sum of all charges
  const totalCharges = brokerage + stt + exchangeCharges + gst + sebiCharges + stampDuty;

  // Profit calculations
  const grossProfit = sellTurnover - buyTurnover;
  const netProfit = grossProfit - totalCharges;

  return {
    summary: [
      { label: netProfit >= 0 ? 'Net Profit' : 'Net Loss', value: Math.abs(netProfit), isCurrency: true, isHighlight: true },
      { label: 'Total Brokerage & Taxes', value: totalCharges, isCurrency: true },
      { label: grossProfit >= 0 ? 'Gross Profit' : 'Gross Loss', value: Math.abs(grossProfit), isCurrency: true },
      { label: 'Total Turnover', value: totalTurnover, isCurrency: true }
    ],
    chartData: [
      { name: 'Brokerage', value: brokerage },
      { name: 'STT', value: stt },
      { name: 'Exchange Chg', value: exchangeCharges },
      { name: 'GST', value: gst },
      { name: 'Stamp Duty', value: stampDuty }
    ],
    breakup: [
      { label: 'Brokerage', value: brokerage },
      { label: 'STT/CTT', value: stt },
      { label: 'Transaction Charges', value: exchangeCharges },
      { label: 'IPFT Charges', value: 0 },
      { label: 'DP Charges', value: 0 },
      { label: 'State Stamp Duty', value: stampDuty },
      { label: 'SEBI Turnover Fees', value: sebiCharges },
      { label: 'GST', value: gst },
      { label: 'TOTAL TAXES AND CHARGES', value: totalCharges, isTotal: true }
    ],
    details: {
      brokerage,
      stt,
      exchangeCharges,
      gst,
      sebiCharges,
      stampDuty,
      totalCharges
    }
  };
};
