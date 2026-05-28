export const config = {
  id: 'sip',
  name: 'SIP Calculator with Inflation',
  description: 'Calculate the future value of your monthly Systematic Investment Plan (SIP) investments and adjust for inflation to see your real purchasing power.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'SIP Calculator with Inflation | Free Mutual Fund Return Calculator',
  seoDescription: 'Free online SIP Calculator with inflation adjustment. Accurately calculate mutual fund returns, future value of monthly investments, and real purchasing power.',
  seoKeywords: 'sip calculator, sip calculator with inflation, mutual fund return calculator, sip return calculator online, investment calculator india, inflation adjusted sip calculator',
  
  inputs: [
    { id: 'monthlyInvestment', label: 'Monthly Investment', min: 500, max: 1000000, step: 500, defaultValue: 25000, prefix: '₹' },
    { id: 'returnRate', label: 'Expected Return Rate (p.a)', min: 1, max: 30, step: 0.1, defaultValue: 12, suffix: '%' },
    { id: 'timePeriod', label: 'Time Period', min: 1, max: 40, step: 1, defaultValue: 10, suffix: ' Yr' },
    // The toggle has been removed; only the exact 4 inputs remain.
    { id: 'inflationRate', label: 'Inflation Rate (p.a)', min: 0, max: 15, step: 0.1, defaultValue: 6, suffix: '%' }
  ]
};