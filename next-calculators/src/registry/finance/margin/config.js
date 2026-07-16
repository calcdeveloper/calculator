export const config = {
  id: 'margin',
  name: 'Margin Calculator',
  description: 'Calculate your Gross Profit Margin, Markup, or determine the required Selling Price to achieve a target margin.',
  category: 'finance',
  
  // Technical SEO Metadata
  seoTitle: 'Margin Calculator | Calculate Gross Margin & Markup Percentage',
  seoDescription: 'Free Margin Calculator for retail and e-commerce. Instantly calculate gross profit margin, markup percentage, or find the selling price for a target margin.',
  seoKeywords: 'margin calculator, gross margin calculator, profit margin calculator, markup vs margin, retail margin calculator',
  
  inputs: [
    { 
      id: 'calcMode', 
      label: 'What do you want to calculate?', 
      type: 'radio',
      options: [
        { label: 'Calculate Margin', value: 'margin' },
        { label: 'Calculate Selling Price', value: 'price' }
      ],
      defaultValue: 'margin' 
    },
    { id: 'cost', label: 'Cost to Produce / Buy (₹)', min: 0.1, max: 10000000, step: 0.1, defaultValue: 100, prefix: '₹' },
    { 
      id: 'sellingPrice', 
      label: 'Selling Price (₹)', 
      min: 0.1, max: 10000000, step: 0.1, defaultValue: 150, prefix: '₹',
      condition: (inputs) => inputs.calcMode === 'margin'
    },
    { 
      id: 'targetMargin', 
      label: 'Target Gross Margin (%)', 
      min: 1, max: 99, step: 1, defaultValue: 40, suffix: '%',
      condition: (inputs) => inputs.calcMode === 'price'
    }
  ]
};
