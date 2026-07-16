export const config = {
  id: 'gold-loan',
  name: 'Gold Loan Calculator',
  description: 'Calculate your exact gold valuation, maximum eligible loan amount (75% LTV), and monthly EMI based on the current market price of gold.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Gold Loan Calculator | Check Gold Valuation & Loan Eligibility',
  seoDescription: 'Free Gold Loan Calculator. Calculate the true value of your gold jewelry and find your maximum eligible loan amount based on RBI 75% LTV rules.',
  seoKeywords: 'gold loan calculator, gold valuation, gold loan eligibility, loan against gold, 75% LTV gold loan, gold loan emi',
  
  inputs: [
    { id: 'goldWeight', label: 'Weight of Gold (Grams)', min: 10, max: 1000, step: 1, defaultValue: 50, suffix: ' g' },
    { id: 'goldPurity', label: 'Gold Purity (Karats)', min: 18, max: 24, step: 2, defaultValue: 22, suffix: 'K' },
    { id: 'goldPrice', label: 'Current 24K Gold Price (per 10g)', min: 50000, max: 100000, step: 500, defaultValue: 75000, prefix: '₹' },
    { id: 'interestRate', label: 'Interest Rate (% p.a.)', min: 7, max: 24, step: 0.1, defaultValue: 10.5, suffix: '%' },
    { id: 'tenure', label: 'Loan Tenure (Months)', min: 3, max: 36, step: 1, defaultValue: 12, suffix: ' mos' }
  ]
};
