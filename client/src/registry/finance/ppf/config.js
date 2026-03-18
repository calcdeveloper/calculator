export const config = {
    id: 'ppf',
    name: 'PPF Calculator',
    description: 'Calculate your Public Provident Fund (PPF) maturity amount and interest earned over your investment tenure.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'PPF Calculator 2026 | Public Provident Fund Maturity Calculator',
    seoDescription: 'Use our accurate PPF Calculator to check your maturity amount and interest earned at the current 7.1% rate. Plan your tax-saving investments with our year-by-year schedule.',
    seoKeywords: 'ppf calculator, public provident fund calculator, ppf interest rate 2026, ppf maturity formula, tax saving calculator, ppf return calculator',
    
    inputs: [
      { id: 'yearlyInvestment', label: 'Yearly Investment', min: 500, max: 150000, step: 500, defaultValue: 150000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 5, max: 12, step: 0.1, defaultValue: 7.1, suffix: '%' },
      { id: 'tenure', label: 'Time Period', min: 15, max: 50, step: 5, defaultValue: 15, suffix: ' Yr' }
    ]
  };