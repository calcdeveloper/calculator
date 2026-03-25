export const config = {
    id: 'exponent',
    name: 'Exponent Calculator',
    description: 'Calculate the power of large numbers, decimals, fractions, and negative integers.',
    category: 'math',
    inputs: [
      {
        id: 'baseX',
        label: 'Base (x)',
        type: 'number',
        placeholder: 'Enter the base number',
        defaultValue: 2
      },
      {
        id: 'exponentN',
        label: 'Exponent (n)',
        type: 'number',
        placeholder: 'Enter the power',
        defaultValue: 8
      }
    ]
  };