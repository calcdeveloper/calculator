export const config = {
  id: 'break-even',
  name: 'Break Even Calculator',
  description: 'Determine the exact number of units you need to sell to cover your fixed and variable business costs.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Break Even Calculator - Free Break-Even Point Tool',
  seoDescription: 'Calculate your business break-even point in units and sales revenue. Analyze fixed costs, variable expenses, contribution margins, and profit thresholds.',
  seoKeywords: 'break even calculator, break even point calculator, bep calculator, business profit calculator, contribution margin calculator, unit economics calculator',
  
  inputs: [
    { id: 'fixedCosts', label: 'Total Fixed Costs (₹)', min: 0, max: 100000000, step: 1000, defaultValue: 50000, prefix: '₹' },
    { id: 'variableCost', label: 'Variable Cost per Unit (₹)', min: 0.01, max: 1000000, step: 0.1, defaultValue: 200, prefix: '₹' },
    { id: 'sellingPrice', label: 'Selling Price per Unit (₹)', min: 0.01, max: 1000000, step: 0.1, defaultValue: 500, prefix: '₹' }
  ]
};
