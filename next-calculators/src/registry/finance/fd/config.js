export const config = {
    id: 'fd',
    name: 'FD Calculator',
    description: 'Calculate your Fixed Deposit maturity amount and interest earned with flexible compounding frequencies.',
    category: 'finance',
    
    seoTitle: 'FD Calculator | Fixed Deposit Interest & Maturity Calculator',
    seoDescription: 'Use our advanced FD Calculator to accurately calculate your Fixed Deposit returns, total interest earned, and year-by-year maturity value.',
    seoKeywords: 'fd calculator, fixed deposit calculator, sbi fd calculator, hdfc fd interest, fd maturity calculator, fixed deposit interest calculator',
    
    inputs: [
      { id: 'investmentAmount', label: 'Total Investment', min: 10000, max: 50000000, step: 10000, defaultValue: 100000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 3, max: 15, step: 0.1, defaultValue: 7.1, suffix: '%' },
      { id: 'tenure', label: 'Time Period', min: 1, max: 10, step: 1, defaultValue: 5, suffix: ' Yr' },
      { 
        id: 'compoundingFrequency', 
        label: 'Compounding Frequency', 
        type: 'select', // <-- Tells the engine to render a dropdown!
        defaultValue: 4, 
        options: [
          { label: 'Monthly (12 times a year)', value: 12 },
          { label: 'Quarterly (4 times a year - Standard)', value: 4 },
          { label: 'Half-Yearly (2 times a year)', value: 2 },
          { label: 'Yearly (1 time a year)', value: 1 }
        ] 
      }
    ]
  };