export const config = {
    id: 'average',
    name: 'Average (Mean, Median, Mode) Calculator',
    description: 'Calculate the average (mean), median, mode, and range of a dataset.',
    category: 'math',
    inputs: [
      {
        id: 'dataSet',
        label: 'Enter numbers (separated by commas)',
        type: 'text',
        defaultValue: '12, 15, 12, 18, 22, 25, 15, 12'
      }
    ]
  };