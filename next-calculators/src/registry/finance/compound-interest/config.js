export const config = {
    id: 'compound-interest',
    name: 'Compound Interest Calculator',
    description: 'Calculate how your money grows over time with the power of compounding. Adjust compounding frequency to see exact returns.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Compound Interest Calculator Online | Daily, Monthly, Yearly CI',
    seoDescription: 'Accurately calculate Compound Interest (CI) with our free online calculator. Choose from monthly, quarterly, or annual compounding to see your exact maturity amount.',
    seoKeywords: 'compound interest calculator, ci calculator, compound interest formula, monthly compound interest, a p 1 r n nt calculator, investment growth calculator',
    
    inputs: [
      { id: 'principal', label: 'Initial Investment', min: 1000, max: 10000000, step: 1000, defaultValue: 100000, prefix: '₹' },
      { id: 'rate', label: 'Interest Rate (p.a)', min: 1, max: 30, step: 0.1, defaultValue: 12, suffix: '%' },
      { id: 'time', label: 'Time Period', min: 1, max: 40, step: 1, defaultValue: 10, suffix: ' Yr' },
      { 
        id: 'frequency', 
        label: 'Compounding Frequency', 
        type: 'select', 
        defaultValue: 1, 
        options: [
          { label: 'Annually (1/Yr)', value: 1 },
          { label: 'Semi-Annually (2/Yr)', value: 2 },
          { label: 'Quarterly (4/Yr)', value: 4 },
          { label: 'Monthly (12/Yr)', value: 12 }
        ] 
      }
    ]
  };