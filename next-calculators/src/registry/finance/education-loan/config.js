export const config = {
  id: 'education-loan',
  name: 'Education Loan EMI Calculator',
  description: 'Calculate your student loan EMI accurately by factoring in the accrued simple interest during your course and grace period (moratorium).',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Education Loan EMI Calculator | Calculate Student Loan EMI',
  seoDescription: 'Free Education Loan EMI Calculator. Calculate your student loan EMI including moratorium period interest, course duration, and repayment tenure.',
  seoKeywords: 'education loan emi calculator, student loan calculator, moratorium period interest, student loan emi, education loan repayment',
  
  inputs: [
    { id: 'principal', label: 'Loan Amount (₹)', min: 100000, max: 20000000, step: 50000, defaultValue: 2000000, prefix: '₹' },
    { id: 'interestRate', label: 'Interest Rate (% p.a.)', min: 7, max: 18, step: 0.1, defaultValue: 10.5, suffix: '%' },
    { id: 'moratorium', label: 'Moratorium Period (Months)', min: 0, max: 72, step: 6, defaultValue: 36, suffix: ' mos' },
    { id: 'tenure', label: 'Repayment Tenure (Years)', min: 1, max: 15, step: 1, defaultValue: 7, suffix: ' yrs' }
  ]
};
