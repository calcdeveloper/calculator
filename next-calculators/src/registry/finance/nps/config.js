export const config = {
  id: 'nps',
  name: 'NPS Calculator',
  description: 'Calculate your National Pension System (NPS) maturity corpus, lump sum withdrawal, and expected monthly pension.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'NPS Calculator - Pension Corpus & Annuity Wealth Planner',
  seoDescription: 'Calculate your National Pension System (NPS) corpus, 60% tax-free lump sum, and monthly annuity pension with Tier 1 & 2 tax deduction forecasting.',
  seoKeywords: 'nps calculator, national pension system calculator, nps pension calculator, pfrda retirement calculator, nps lump sum and annuity calculator',
  
  inputs: [
    { id: 'currentAge', label: 'Current Age (Years)', min: 18, max: 65, step: 1, defaultValue: 30 },
    { id: 'retirementAge', label: 'Retirement Age (Years)', min: 60, max: 75, step: 1, defaultValue: 60 },
    { id: 'monthlyContribution', label: 'Monthly Contribution', min: 500, max: 1000000, step: 500, defaultValue: 10000, prefix: '₹' },
    { id: 'expectedReturn', label: 'Expected Return on Investment (%)', min: 5, max: 15, step: 0.1, defaultValue: 10, suffix: '%' },
    { id: 'annuityPurchase', label: 'Corpus to Invest in Annuity (%)', min: 40, max: 100, step: 1, defaultValue: 40, suffix: '%' },
    { id: 'annuityReturn', label: 'Expected Annuity Rate (Pension Interest %)', min: 4, max: 10, step: 0.1, defaultValue: 6, suffix: '%' }
  ]
};
