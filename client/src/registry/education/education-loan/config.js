export const config = {
    id: 'education-loan-emi-calculator',
    name: 'Education Loan EMI Calculator',
    description: 'Calculate your monthly EMI, total interest, and see how the moratorium (grace) period affects your total education loan repayment.',
    category: 'finance',
    inputs: [
      {
        id: 'loanAmount',
        label: 'Loan Amount (₹)',
        type: 'number',
        defaultValue: 1000000,
        min: 50000,
        max: 10000000, // <-- FIXED: Added max value for the slider!
        step: 10000
      },
      {
        id: 'interestRate',
        label: 'Annual Interest Rate (%)',
        type: 'number',
        defaultValue: 8.5,
        min: 1,
        max: 30,
        step: 0.1
      },
      {
        id: 'repaymentTenure',
        label: 'Repayment Tenure (Years)',
        type: 'number',
        defaultValue: 5,
        min: 1,
        max: 15,
        step: 1
      },
      {
        id: 'moratoriumMonths',
        label: 'Moratorium / Grace Period (Months)',
        type: 'number',
        defaultValue: 24,
        min: 0,
        max: 72,
        step: 1
      }
    ]
  };