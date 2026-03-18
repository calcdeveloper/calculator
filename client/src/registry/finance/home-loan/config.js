export const config = {
    id: 'home-loan',
    name: 'Home Loan EMI Calculator',
    description: 'Plan your dream home. Calculate your monthly mortgage payments, total interest, and view your complete amortization schedule.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Home Loan EMI Calculator | Check Monthly Mortgage Payment Online',
    seoDescription: 'Use our advanced Home Loan EMI Calculator to instantly check your monthly EMI, total interest payable, and view a detailed month-by-month repayment schedule.',
    seoKeywords: 'home loan emi calculator, housing loan calculator, mortgage calculator india, sbi home loan emi, hdfc home loan calculator, home loan tax benefits',
    
    inputs: [
      { id: 'loanAmount', label: 'Home Loan Amount', min: 500000, max: 100000000, step: 100000, defaultValue: 5000000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 5, max: 15, step: 0.1, defaultValue: 8.5, suffix: '%' },
      { id: 'loanTenure', label: 'Loan Tenure', min: 1, max: 30, step: 1, defaultValue: 20, suffix: ' Yr' }
    ]
  };