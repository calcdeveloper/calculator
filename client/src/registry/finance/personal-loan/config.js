export const config = {
    id: 'personal-loan',
    name: 'Personal Loan EMI Calculator',
    description: 'Calculate your Personal Loan EMI, total interest payable, and view your month-by-month repayment schedule instantly.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Personal Loan EMI Calculator | Check Monthly EMI & Interest',
    seoDescription: 'Use our accurate Personal Loan EMI Calculator to check your monthly repayment schedule. Plan your finances better with our instant amortization chart.',
    seoKeywords: 'personal loan emi calculator, personal loan calculator india, sbi personal loan emi, hdfc personal loan calculator, unsecured loan calculator, calculate personal loan interest',
    
    inputs: [
      { id: 'loanAmount', label: 'Loan Amount', min: 10000, max: 5000000, step: 10000, defaultValue: 500000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 8, max: 36, step: 0.1, defaultValue: 12.5, suffix: '%' },
      { id: 'loanTenure', label: 'Loan Tenure', min: 1, max: 7, step: 1, defaultValue: 3, suffix: ' Yr' }
    ]
  };