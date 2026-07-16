export const config = {
  id: 'take-home-salary',
  name: 'Take Home Salary Calculator',
  description: 'Calculate your exact net Take Home Salary by entering your monthly payslip components and deductions.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Take Home Salary Calculator | In-Hand Salary Payslip Calculator',
  seoDescription: 'Free online Take Home Salary Calculator. Enter your monthly Basic, HRA, Allowances, PF, and TDS to calculate your exact net in-hand salary in seconds.',
  seoKeywords: 'take home salary calculator, in hand salary calculator, net salary calculator, payslip calculator india, monthly salary calculator',
  
  inputs: [
    { id: 'basic', label: 'Monthly Basic Pay', min: 1000, max: 10000000, step: 1000, defaultValue: 40000, prefix: '₹' },
    { id: 'hra', label: 'Monthly HRA', min: 0, max: 5000000, step: 500, defaultValue: 20000, prefix: '₹' },
    { id: 'specialAllowance', label: 'Monthly Special Allowance', min: 0, max: 5000000, step: 500, defaultValue: 15000, prefix: '₹' },
    { id: 'otherAllowances', label: 'Other Monthly Allowances (LTA, etc.)', min: 0, max: 1000000, step: 500, defaultValue: 5000, prefix: '₹' },
    { id: 'epf', label: 'Monthly EPF Deduction', min: 0, max: 150000, step: 100, defaultValue: 4800, prefix: '₹' },
    { id: 'professionalTax', label: 'Monthly Professional Tax', min: 0, max: 500, step: 50, defaultValue: 200, prefix: '₹' },
    { id: 'tds', label: 'Monthly Income Tax (TDS)', min: 0, max: 5000000, step: 500, defaultValue: 3000, prefix: '₹' }
  ]
};
