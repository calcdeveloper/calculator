export const config = {
    id: 'date-calculator',
    name: 'Date Calculator',
    description: 'Calculate the exact number of days between two dates, or add/subtract time from a specific date.',
    category: 'calculators',
    inputs: [
      {
        id: 'calcMode',
        label: 'What do you want to calculate?',
        type: 'select',
        options: [
          { value: 'difference', label: 'Duration between two dates' },
          { value: 'add_sub', label: 'Add or subtract from a date' }
        ],
        defaultValue: 'difference'
      },
      {
        id: 'startDate',
        label: 'Start Date',
        type: 'date',
        defaultValue: new Date().toISOString().split('T')[0] // Today's date
      },
      {
        id: 'endDate',
        label: 'End Date',
        type: 'date',
        defaultValue: new Date(Date.now() + 86400000 * 7).toISOString().split('T')[0], // 7 days from now
        condition: (inputs) => inputs.calcMode === 'difference'
      },
      {
        id: 'operation',
        label: 'Add or Subtract?',
        type: 'select',
        options: [
          { value: 'add', label: 'Add' },
          { value: 'subtract', label: 'Subtract' }
        ],
        defaultValue: 'add',
        condition: (inputs) => inputs.calcMode === 'add_sub'
      },
      {
        id: 'years',
        label: 'Years',
        type: 'number',
        defaultValue: 0,
        condition: (inputs) => inputs.calcMode === 'add_sub'
      },
      {
        id: 'months',
        label: 'Months',
        type: 'number',
        defaultValue: 1,
        condition: (inputs) => inputs.calcMode === 'add_sub'
      },
      {
        id: 'days',
        label: 'Days',
        type: 'number',
        defaultValue: 0,
        condition: (inputs) => inputs.calcMode === 'add_sub'
      }
    ]
  };