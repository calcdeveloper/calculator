export const config = {
  id: 'income-tax',
  name: 'Income Tax Calculator (New Regime)',
  description: 'Calculate your Income Tax as per the latest New Tax Regime (2025-2026) slabs. Includes standard deduction and Section 87A rebate.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Income Tax Calculator India FY 2025-26 | New Tax Regime',
  seoDescription: 'Free online Income Tax Calculator for the New Tax Regime in India. Calculate tax liability, standard deduction, and marginal relief easily.',
  seoKeywords: 'income tax calculator, new tax regime calculator, tax calculator india 2026, income tax slabs 2025-26, salary tax calculator',
  
  inputs: [
    { id: 'grossSalary', label: 'Gross Annual Salary', min: 0, max: 100000000, step: 10000, defaultValue: 1200000, prefix: '₹' },
    { id: 'otherIncome', label: 'Income from Other Sources', min: 0, max: 100000000, step: 10000, defaultValue: 0, prefix: '₹' }
  ]
};
