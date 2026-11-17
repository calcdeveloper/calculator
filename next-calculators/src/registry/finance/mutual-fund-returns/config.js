export const config = {
  id: 'mutual-fund-returns',
  name: 'Mutual Fund Returns Calculator',
  description: 'Calculate future wealth from your mutual fund investments. Supports SIPs with annual step-ups and lumpsum investments.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Mutual Fund Returns Calculator - SIP & Lumpsum Wealth',
  seoDescription: 'Calculate future wealth from mutual funds. Model monthly SIPs with step-up annual compounding, lumpsum investments, capital gains taxes, and CAGR yields.',
  seoKeywords: 'mutual fund calculator, mutual fund return calculator, sip calculator, step up sip calculator, lumpsum calculator, compound interest calculator, mutual fund sip return',
  
  inputs: [
    { 
      id: 'investmentType', 
      label: 'Investment Type', 
      type: 'radio',
      options: [
        { label: 'Monthly SIP', value: 'sip' },
        { label: 'One-time Lumpsum', value: 'lumpsum' }
      ],
      defaultValue: 'sip' 
    },
    { id: 'amount', label: 'Investment Amount (₹)', min: 500, max: 100000000, step: 500, defaultValue: 10000, prefix: '₹' },
    { id: 'stepUp', label: 'Annual Step-Up (% for SIP only)', min: 0, max: 50, step: 1, defaultValue: 10, suffix: '%' },
    { id: 'expectedReturn', label: 'Expected Annual Return (%)', min: 1, max: 30, step: 0.1, defaultValue: 12, suffix: '%' },
    { id: 'period', label: 'Investment Period (Years)', min: 1, max: 40, step: 1, defaultValue: 10, suffix: ' Yrs' }
  ]
};
