export const config = {
  id: 'business-loan',
  name: 'Business Loan EMI Calculator',
  description: 'Calculate your exact business loan EMI, total interest payable, and the true cost of upfront processing fees and GST.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Business Loan EMI Calculator - Commercial & MSME Loan Tool',
  seoDescription: 'Calculate business loan EMIs, interest payable, and net cash disbursals with processing fees and GST. Compare MSME, term, and working capital credit.',
  seoKeywords: 'business loan emi calculator, msme loan calculator, working capital loan emi, commercial loan calculator, sme loan emi, dscr loan calculator',
  
  inputs: [
    { id: 'principal', label: 'Business Loan Amount (₹)', min: 100000, max: 100000000, step: 50000, defaultValue: 1000000, prefix: '₹' },
    { id: 'interestRate', label: 'Interest Rate (% p.a.)', min: 8, max: 36, step: 0.1, defaultValue: 14, suffix: '%' },
    { id: 'tenure', label: 'Loan Tenure (Months)', min: 6, max: 120, step: 6, defaultValue: 36, suffix: ' mos' },
    { id: 'processingFee', label: 'Processing Fee (%)', min: 0, max: 5, step: 0.1, defaultValue: 2, suffix: '%' }
  ]
};
