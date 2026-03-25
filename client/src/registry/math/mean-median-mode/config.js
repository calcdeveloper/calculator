export const config = {
    id: 'mean-median-mode',
    name: 'Mean, Median, Mode & Range Calculator',
    description: 'Calculate the mean (average), median, mode, and range for any set of numbers.',
    category: 'math',
    seoTitle: 'Mean, Median, Mode & Range Calculator | Free Stats Tool',
    seoDescription: 'Quickly calculate the average (mean), median, mode, and range of a dataset. Just paste your comma-separated numbers.',
    
    inputs: [
      {
        id: 'dataset',
        label: 'Enter numbers (separated by commas)',
        type: 'text',
        defaultValue: '5, 10, 15, 20, 25, 15',
        placeholder: 'e.g., 2, 4, 4, 6, 8'
      }
    ]
  };