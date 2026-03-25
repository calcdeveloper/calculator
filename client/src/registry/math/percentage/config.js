export const config = {
    id: 'percentage',
    name: 'Percentage Calculator',
    description: 'Easily calculate percentages. Find what X% of Y is, calculate percentage growth/decline, or see what percentage one number is of another.',
    category: 'math',
    seoTitle: 'Percentage Calculator | Free Online % Calculator',
    seoDescription: 'Use our free online percentage calculator to quickly calculate percent increase or decrease, find what percentage one number is of another, and more.',
    
    inputs: [
      {
        id: 'calcType',
        label: 'What do you want to calculate?',
        type: 'select',
        defaultValue: 'type1',
        options: [
          { label: 'What is X% of Y?', value: 'type1' },
          { label: 'X is what % of Y?', value: 'type2' },
          { label: 'Percentage Increase/Decrease from X to Y', value: 'type3' }
        ]
      },
      { 
        id: 'val1', 
        label: 'Value (X)', 
        type: 'number', 
        defaultValue: 20 
      },
      { 
        id: 'val2', 
        label: 'Value (Y)', 
        type: 'number', 
        defaultValue: 100 
      }
    ]
  };