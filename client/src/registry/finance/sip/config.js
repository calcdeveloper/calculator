export const config = {
    id: 'sip',
    name: 'SIP Calculator',
    description: 'Calculate the future value of your monthly Systematic Investment Plan (SIP) investments.',
    category: 'finance',
    
    // NEW: Technical SEO Metadata
    seoTitle: 'SIP Calculator - Free Online Mutual Fund Return Calculator',
    seoDescription: 'Use our free online SIP calculator to estimate your mutual fund returns. Calculate the future value of your monthly Systematic Investment Plan instantly.',
    seoKeywords: 'sip calculator, mutual fund return calculator, sip return calculator online, investment calculator india',
    
    inputs: [
      { id: 'monthlyInvestment', label: 'Monthly Investment', min: 500, max: 100000, step: 500, defaultValue: 5000, prefix: '₹' },
      { id: 'returnRate', label: 'Expected Return Rate (p.a)', min: 1, max: 30, step: 0.5, defaultValue: 12, suffix: '%' },
      { id: 'timePeriod', label: 'Time Period', min: 1, max: 40, step: 1, defaultValue: 10, suffix: ' Yr' }
    ]
  };