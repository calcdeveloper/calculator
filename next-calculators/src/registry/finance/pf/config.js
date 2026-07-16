export const config = {
  id: 'pf',
  name: 'PF Calculator',
  description: 'Calculate your Employee Provident Fund (EPF) maturity amount and estimate your retirement corpus based on current contributions.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'EPF Calculator | Calculate Provident Fund Maturity Amount',
  seoDescription: 'Free EPF calculator. Estimate your total Provident Fund (PF) balance at retirement based on your basic salary, contribution rate, and annual increments.',
  seoKeywords: 'pf calculator, epf calculator, provident fund calculator, epf maturity calculator, retirement calculator india',
  
  inputs: [
    { id: 'currentAge', label: 'Current Age (Years)', min: 18, max: 55, step: 1, defaultValue: 25 },
    { id: 'retirementAge', label: 'Retirement Age (Years)', min: 40, max: 65, step: 1, defaultValue: 58 },
    { id: 'basicSalary', label: 'Basic Salary + DA (Monthly)', min: 5000, max: 2000000, step: 1000, defaultValue: 50000, prefix: '₹' },
    { id: 'annualIncrement', label: 'Expected Annual Salary Increment (%)', min: 0, max: 50, step: 1, defaultValue: 10, suffix: '%' },
    { id: 'currentBalance', label: 'Current EPF Balance', min: 0, max: 50000000, step: 10000, defaultValue: 0, prefix: '₹' },
    { id: 'interestRate', label: 'EPF Interest Rate (%)', min: 5, max: 12, step: 0.1, defaultValue: 8.25, suffix: '%' }
  ]
};
