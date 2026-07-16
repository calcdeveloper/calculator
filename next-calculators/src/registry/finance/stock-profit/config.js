export const config = {
  id: 'stock-profit',
  name: 'Stock Profit Calculator',
  description: 'Calculate your exact net profit, loss, and Return on Investment (ROI) from stock trading, factoring in brokerage fees.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Stock Profit Calculator | Calculate Net Trading Profit & ROI',
  seoDescription: 'Free Stock Profit Calculator. Calculate your net profit, total loss, and Return on Investment (ROI) for intraday and delivery stock trading.',
  seoKeywords: 'stock profit calculator, share market calculator, trade profit calculator, ROI calculator, stock loss calculator',
  
  inputs: [
    { id: 'shares', label: 'Number of Shares', min: 1, max: 10000000, step: 1, defaultValue: 100 },
    { id: 'buyPrice', label: 'Buy Price per Share (₹)', min: 0.01, max: 1000000, step: 0.05, defaultValue: 150, prefix: '₹' },
    { id: 'sellPrice', label: 'Sell Price per Share (₹)', min: 0.01, max: 1000000, step: 0.05, defaultValue: 165, prefix: '₹' },
    { id: 'buyCommission', label: 'Total Buy Fees / Brokerage (₹)', min: 0, max: 100000, step: 1, defaultValue: 20, prefix: '₹' },
    { id: 'sellCommission', label: 'Total Sell Fees / Brokerage (₹)', min: 0, max: 100000, step: 1, defaultValue: 20, prefix: '₹' }
  ]
};
