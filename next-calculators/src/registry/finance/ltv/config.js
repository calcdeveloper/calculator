export const config = {
  id: 'ltv',
  name: 'Loan to Value EMI Calculator',
  description: 'Calculate your maximum eligible loan amount based on LTV rules and estimate your monthly EMI.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Loan to Value EMI Calculator | Max Loan & EMI Estimator',
  seoDescription: 'Free Loan to Value EMI Calculator. Find out your maximum eligible loan amount and calculate your monthly EMI based on property value and LTV rules.',
  seoKeywords: 'ltv emi calculator, maximum loan calculator, property loan eligibility, ltv ratio, mortgage emi calculator',
  
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
