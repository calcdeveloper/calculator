export const config = {
  id: 'nps',
  name: 'NPS Calculator',
  description: 'Calculate your National Pension System (NPS) maturity corpus, lump sum withdrawal, and expected monthly pension.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'NPS Calculator | National Pension System Pension Calculator',
  seoDescription: 'Free NPS Calculator. Estimate your retirement corpus, tax-free lump sum withdrawal, and monthly annuity pension from the National Pension System (NPS) in India.',
  seoKeywords: 'nps calculator, national pension scheme calculator, nps pension calculator, retirement calculator, nps maturity calculator',
  
  inputs: [
    { id: 'currentAge', label: 'Current Age (Years)', min: 18, max: 65, step: 1, defaultValue: 30 },
    { id: 'retirementAge', label: 'Retirement Age (Years)', min: 60, max: 75, step: 1, defaultValue: 60 },
    { id: 'monthlyContribution', label: 'Monthly Contribution', min: 500, max: 1000000, step: 500, defaultValue: 10000, prefix: '₹' },
    { id: 'expectedReturn', label: 'Expected Return on Investment (%)', min: 5, max: 15, step: 0.1, defaultValue: 10, suffix: '%' },
    { id: 'annuityPurchase', label: 'Corpus to Invest in Annuity (%)', min: 40, max: 100, step: 1, defaultValue: 40, suffix: '%' },
    { id: 'annuityReturn', label: 'Expected Annuity Rate (Pension Interest %)', min: 4, max: 10, step: 0.1, defaultValue: 6, suffix: '%' }
  ]
};
