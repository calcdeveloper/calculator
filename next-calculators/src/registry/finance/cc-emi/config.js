export const config = {
  id: 'cc-emi',
  name: 'Credit Card EMI Calculator',
  description: 'Calculate the true cost of converting your credit card purchases into EMIs, including hidden GST and processing fees.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Credit Card EMI Calculator | Calculate Hidden Fees & GST',
  seoDescription: 'Free Credit Card EMI Calculator. Discover the true cost of converting your credit card bill to EMI, including processing fees and 18% GST on interest.',
  seoKeywords: 'credit card emi calculator, cc emi calculator, emi conversion cost, credit card gst, hidden emi charges',
  
  inputs: [
    { id: 'principal', label: 'Transaction / Bill Amount (₹)', min: 1000, max: 1000000, step: 500, defaultValue: 50000, prefix: '₹' },
    { id: 'tenure', label: 'EMI Tenure (Months)', min: 3, max: 36, step: 3, defaultValue: 6, suffix: ' mos' },
    { id: 'interestRate', label: 'Interest Rate (% p.a.)', min: 10, max: 36, step: 0.5, defaultValue: 15, suffix: '%' },
    { id: 'processingFee', label: 'Processing Fee (%)', min: 0, max: 5, step: 0.1, defaultValue: 1, suffix: '%' }
  ]
};
