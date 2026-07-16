export const config = {
  id: 'epf-interest',
  name: 'EPF Interest Calculator',
  description: 'Calculate your exact annual EPF interest. Understand how your monthly provident fund contributions compound over a financial year.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'EPF Interest Calculator | Calculate Monthly & Annual PF Interest',
  seoDescription: 'Free EPF Interest Calculator. Calculate exactly how much interest your Employees Provident Fund (EPF) account will earn this financial year based on monthly contributions.',
  seoKeywords: 'epf interest calculator, pf interest calculation, epf interest rate, calculate pf interest monthly, provident fund interest',
  
  inputs: [
    { id: 'openingBalance', label: 'Opening PF Balance (as of April 1st)', min: 0, max: 100000000, step: 10000, defaultValue: 500000, prefix: '₹' },
    { id: 'employeeContribution', label: 'Your Monthly PF Contribution (12%)', min: 0, max: 1000000, step: 500, defaultValue: 6000, prefix: '₹' },
    { id: 'employerContribution', label: "Employer's Monthly EPF Contribution (3.67%)", min: 0, max: 1000000, step: 500, defaultValue: 1835, prefix: '₹' },
    { id: 'interestRate', label: 'EPF Interest Rate (%)', min: 5, max: 12, step: 0.1, defaultValue: 8.25, suffix: '%' }
  ]
};
