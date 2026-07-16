export const config = {
  id: 'elss',
  name: 'ELSS Calculator',
  description: 'Calculate your wealth accumulation and exact tax savings under Section 80C with Equity Linked Savings Scheme (ELSS) mutual funds.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'ELSS Calculator | Calculate ELSS Mutual Fund Returns & Tax Savings',
  seoDescription: 'Free ELSS Calculator. Estimate your Equity Linked Savings Scheme (ELSS) mutual fund returns and calculate your exact tax savings under Section 80C.',
  seoKeywords: 'elss calculator, elss mutual fund calculator, tax saving mutual fund calculator, 80c tax saving calculator, elss sip calculator, elss lump sum',
  
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
    { id: 'amount', label: 'Investment Amount (₹)', min: 500, max: 10000000, step: 500, defaultValue: 5000, prefix: '₹' },
    { id: 'expectedReturn', label: 'Expected Annual Return (%)', min: 1, max: 30, step: 0.1, defaultValue: 12, suffix: '%' },
    { id: 'period', label: 'Investment Period (Years)', min: 3, max: 40, step: 1, defaultValue: 15, suffix: ' Yrs' },
    { 
      id: 'taxSlab', 
      label: 'Your Income Tax Slab (%)', 
      type: 'select',
      options: [
        { label: '5%', value: '5' },
        { label: '10%', value: '10' },
        { label: '15%', value: '15' },
        { label: '20%', value: '20' },
        { label: '30%', value: '30' }
      ],
      defaultValue: '30' 
    }
  ]
};
