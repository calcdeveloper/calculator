export const config = {
  id: 'loan-affordability',
  name: 'Loan Affordability Calculator',
  description: 'Determine exactly how much loan you can afford to take based on your income, existing debts, and the standard Debt-to-Income (DTI) ratio.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Loan Affordability Calculator | How Much Can I Borrow?',
  seoDescription: 'Free Loan Affordability Calculator. Calculate your maximum eligible loan amount and maximum asset purchase price based on your income and existing EMIs.',
  seoKeywords: 'loan affordability calculator, how much loan can i get, mortgage affordability, dti ratio, maximum loan amount, home loan eligibility',
  
  inputs: [
    { id: 'monthlyIncome', label: 'Gross Monthly Income (₹)', min: 10000, max: 5000000, step: 5000, defaultValue: 100000, prefix: '₹' },
    { id: 'existingEmi', label: 'Total Existing Monthly EMIs (₹)', min: 0, max: 2000000, step: 1000, defaultValue: 15000, prefix: '₹' },
    { id: 'downPayment', label: 'Cash Available for Down Payment (₹)', min: 0, max: 50000000, step: 50000, defaultValue: 1000000, prefix: '₹' },
    { id: 'interestRate', label: 'Expected Interest Rate (% p.a.)', min: 6, max: 24, step: 0.1, defaultValue: 8.5, suffix: '%' },
    { id: 'tenure', label: 'Loan Tenure (Years)', min: 1, max: 30, step: 1, defaultValue: 20, suffix: ' yrs' }
  ]
};
