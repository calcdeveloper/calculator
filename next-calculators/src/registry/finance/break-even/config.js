export const config = {
  id: 'break-even',
  name: 'Break Even Calculator',
  description: 'Determine the exact number of units you need to sell to cover your fixed and variable business costs.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Break Even Point Calculator | Calculate Business Profitability',
  seoDescription: 'Free Break Even Calculator for businesses. Instantly calculate your break-even point in units and sales revenue based on fixed costs, variable costs, and selling price.',
  seoKeywords: 'break even calculator, break even point calculator, bep calculator, business profit calculator, contribution margin calculator',
  
  inputs: [
    { id: 'fixedCosts', label: 'Total Fixed Costs (₹)', min: 0, max: 100000000, step: 1000, defaultValue: 50000, prefix: '₹' },
    { id: 'variableCost', label: 'Variable Cost per Unit (₹)', min: 0.01, max: 1000000, step: 0.1, defaultValue: 200, prefix: '₹' },
    { id: 'sellingPrice', label: 'Selling Price per Unit (₹)', min: 0.01, max: 1000000, step: 0.1, defaultValue: 500, prefix: '₹' }
  ]
};
