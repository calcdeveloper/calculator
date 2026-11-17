export const config = {
  id: 'ltv',
  name: 'Loan to Value EMI Calculator',
  description: 'Calculate your maximum eligible loan amount based on LTV rules and estimate your monthly EMI.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'LTV Calculator - Loan to Value Ratio & Mortgage EMI',
  seoDescription: 'Calculate your exact Loan-to-Value (LTV) ratio, maximum eligible loan amount, down payment, and monthly EMI based on RBI prudential lending guidelines.',
  seoKeywords: 'ltv calculator, loan to value calculator, ltv ratio, mortgage ltv calculator, maximum loan amount, home loan down payment, rbi ltv guidelines',
  
  inputs: [
    { 
      id: 'employmentType', 
      label: 'Employment Type', 
      type: 'radio',
      options: [
        { label: 'Salaried', value: 'salaried' },
        { label: 'Self-employed', value: 'self-employed' }
      ],
      defaultValue: 'salaried' 
    },
    { id: 'propertyValue', label: 'Property value (Rs.)', min: 0, max: 100000000, step: 100000, defaultValue: 5000000, prefix: '₹' },
    { 
      id: 'propertyType', 
      label: 'Property Type', 
      type: 'radio',
      options: [
        { label: 'Residential property', value: 'residential' },
        { label: 'Commercial property', value: 'commercial' }
      ],
      defaultValue: 'residential' 
    },
    { id: 'tenor', label: 'Tenor (Years)', min: 1, max: 15, step: 1, defaultValue: 1, suffix: ' Years' },
    { id: 'interestRate', label: 'Rate of interest (%)', min: 8, max: 14, step: 0.1, defaultValue: 8.00, suffix: '%' }
  ]
};
