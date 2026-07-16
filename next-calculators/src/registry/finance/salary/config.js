export const config = {
  id: 'salary',
  name: 'Salary Calculator',
  description: 'Calculate your Gross Salary, Net Take Home Salary, and Deductions from your Annual CTC (Cost to Company).',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Salary Calculator India | CTC to Take Home Salary Calculator',
  seoDescription: 'Free online Salary Calculator to convert your CTC to In-Hand Take Home Salary. Calculate Basic, HRA, PF deductions and Net Monthly Salary accurately.',
  seoKeywords: 'salary calculator, ctc calculator, take home salary calculator, in hand salary calculator india, gross salary calculator, pf deduction calculator',
  
  inputs: [
    { id: 'ctc', label: 'Annual CTC (Cost to Company)', min: 100000, max: 100000000, step: 10000, defaultValue: 1200000, prefix: '₹' },
    { id: 'basicPercent', label: 'Basic Salary (% of CTC)', min: 10, max: 100, step: 1, defaultValue: 50, suffix: '%' },
    { id: 'employerPfPercent', label: 'Employer PF (% of Basic)', min: 0, max: 20, step: 1, defaultValue: 12, suffix: '%' },
    { id: 'employeePfPercent', label: 'Employee PF (% of Basic)', min: 0, max: 20, step: 1, defaultValue: 12, suffix: '%' },
    { id: 'professionalTax', label: 'Professional Tax (Monthly)', min: 0, max: 500, step: 50, defaultValue: 200, prefix: '₹' }
  ]
};
