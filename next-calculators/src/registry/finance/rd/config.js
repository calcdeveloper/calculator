export const config = {
    id: 'rd',
    name: 'RD Calculator',
    description: 'Calculate your Recurring Deposit maturity amount and total interest earned with standard quarterly compounding.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'RD Calculator | Recurring Deposit Interest & Maturity Calculator',
    seoDescription: 'Use our advanced RD Calculator to accurately calculate your Recurring Deposit returns, total interest earned, and year-by-year maturity value. Matches SBI and HDFC formulas.',
    seoKeywords: 'rd calculator, recurring deposit calculator, sbi rd calculator, post office rd calculator, rd interest calculator, rd maturity formula',
    
    inputs: [
      { id: 'monthlyDeposit', label: 'Monthly Deposit', min: 500, max: 1000000, step: 500, defaultValue: 5000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 3, max: 15, step: 0.1, defaultValue: 6.5, suffix: '%' },
      { id: 'tenure', label: 'Time Period', min: 1, max: 10, step: 1, defaultValue: 5, suffix: ' Yr' }
    ]
  };