export const config = {
    id: 'emi',
    name: 'EMI Calculator',
    description: 'Calculate your Equated Monthly Installment (EMI) for home, car, or personal loans.',
    category: 'finance',
    
    // Technical SEO Metadata
    seoTitle: 'EMI Calculator - Calculate Loan EMI Online Instantly',
    seoDescription: 'Use our free online EMI Calculator to instantly calculate your monthly installment, total interest, and total payable amount for home, car, and personal loans.',
    seoKeywords: 'emi calculator, loan emi calculator, online emi calculator, home loan emi, personal loan emi',
    
    inputs: [
      { id: 'loanAmount', label: 'Loan Amount', min: 100000, max: 100000000, step: 100000, defaultValue: 5000000, prefix: '₹' },
      { id: 'interestRate', label: 'Interest Rate (p.a)', min: 1, max: 20, step: 0.1, defaultValue: 8.5, suffix: '%' },
      { id: 'loanTenure', label: 'Loan Tenure', min: 1, max: 30, step: 1, defaultValue: 20, suffix: ' Yr' }
    ]
  };