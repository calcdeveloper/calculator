export const config = {
    id: 'gratuity',
    name: 'Gratuity Calculator',
    description: 'Calculate how much gratuity you are entitled to receive from your employer after completing 5 or more years of continuous service.',
    category: 'finance',
    
    // High-Intent SEO Metadata
    seoTitle: 'Gratuity Calculator Online | 15/26 Rule & Formula',
    seoDescription: 'Calculate your exact gratuity payout with our free online tool. Supports the Payment of Gratuity Act 1972 logic for covered and not covered employees.',
    seoKeywords: 'gratuity calculator, online gratuity calculator, gratuity formula, 15/26 rule, payment of gratuity act 1972, basic plus da, gratuity eligibility',
    
    inputs: [
      { id: 'basicSalary', label: 'Basic Salary (Monthly)', min: 5000, max: 1000000, step: 1000, defaultValue: 50000, prefix: '₹' },
      { id: 'da', label: 'Dearness Allowance (DA)', min: 0, max: 200000, step: 500, defaultValue: 10000, prefix: '₹' },
      { id: 'years', label: 'Years of Service', min: 5, max: 50, step: 1, defaultValue: 5, suffix: ' Yr' },
      { id: 'months', label: 'Additional Months', min: 0, max: 11, step: 1, defaultValue: 7, suffix: ' Mo' },
      { 
        id: 'isCovered', 
        label: 'Covered under Gratuity Act?', 
        type: 'select', 
        defaultValue: 'yes', 
        options: [
          { label: 'Yes (Covered)', value: 'yes' },
          { label: 'No (Not Covered)', value: 'no' }
        ] 
      }
    ]
  };