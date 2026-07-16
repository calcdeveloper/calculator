export const config = {
  id: 'hra',
  name: 'HRA Calculator',
  description: 'Calculate your exact House Rent Allowance (HRA) exemption and taxable HRA to optimize your income tax savings.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'HRA Calculator | House Rent Allowance Exemption Calculator',
  seoDescription: 'Free online HRA Calculator. Calculate your House Rent Allowance exemption and taxable HRA instantly for metro and non-metro cities in India.',
  seoKeywords: 'hra calculator, house rent allowance calculator, hra exemption calculator, taxable hra, rent calculator india',
  
  inputs: [
    { 
      id: 'cityType', 
      label: 'City Type', 
      type: 'radio',
      options: [
        { label: 'Metro (50% of Basic)', value: 'metro' },
        { label: 'Non-Metro (40% of Basic)', value: 'non-metro' }
      ],
      defaultValue: 'metro' 
    },
    { id: 'basic', label: 'Basic Salary (Annual)', min: 50000, max: 20000000, step: 10000, defaultValue: 600000, prefix: '₹' },
    { id: 'hraReceived', label: 'HRA Received (Annual)', min: 10000, max: 10000000, step: 5000, defaultValue: 300000, prefix: '₹' },
    { id: 'rentPaid', label: 'Total Rent Paid (Annual)', min: 0, max: 10000000, step: 5000, defaultValue: 240000, prefix: '₹' }
  ]
};
