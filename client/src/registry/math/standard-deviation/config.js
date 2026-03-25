export const config = {
    id: 'standard-deviation',
    name: 'Standard Deviation Calculator',
    description: 'Calculate the standard deviation, variance, and mean for any dataset. Includes both population and sample calculations.',
    category: 'math',
    seoTitle: 'Standard Deviation & Variance Calculator | Free Math Tool',
    seoDescription: 'Instantly calculate sample and population standard deviation, variance, and mean from a set of numbers.',
    
    inputs: [
      {
        id: 'dataset',
        label: 'Enter numbers (separated by commas)',
        type: 'text',
        defaultValue: '10, 12, 23, 23, 16, 23, 21, 16',
        placeholder: 'e.g., 4, 8, 15, 16, 23, 42'
      }
    ]
  };