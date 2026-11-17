export const config = {
  id: 'salary',
  name: 'Salary Calculator',
  description: 'Calculate your Gross Salary, Net Take Home Salary, and Deductions from your Annual CTC (Cost to Company).',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Salary Calculator - Convert CTC to In-Hand Take Home Pay',
  seoDescription: 'Convert CTC to net monthly in-hand take home salary. Model Basic pay, HRA, statutory EPF deductions, Professional Tax, TDS, and CTC restructuring accurately.',
  seoKeywords: 'salary calculator, ctc to in hand salary calculator, take home salary calculator, ctc breakdown calculator, gross salary calculator, salary structuring india',
  
  inputs: [
    { id: 'ctc', label: 'Annual CTC (Cost to Company)', min: 100000, max: 100000000, step: 10000, defaultValue: 1200000, prefix: '₹' },
    { id: 'basicPercent', label: 'Basic Salary (% of CTC)', min: 10, max: 100, step: 1, defaultValue: 50, suffix: '%' },
    { id: 'employerPfPercent', label: 'Employer PF (% of Basic)', min: 0, max: 20, step: 1, defaultValue: 12, suffix: '%' },
    { id: 'employeePfPercent', label: 'Employee PF (% of Basic)', min: 0, max: 20, step: 1, defaultValue: 12, suffix: '%' },
    { id: 'professionalTax', label: 'Professional Tax (Monthly)', min: 0, max: 500, step: 50, defaultValue: 200, prefix: '₹' }
  ]
};
