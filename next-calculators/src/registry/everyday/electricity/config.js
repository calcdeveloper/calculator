export const config = {
    id: 'electricity-bill-calculator',
    name: 'Electricity Bill Calculator',
    description: 'Calculate your total electricity bill from meter readings or total units (kWh) consumed.',
    category: 'calculators',
    inputs: [
      {
        id: 'calcMode',
        label: 'How do you want to calculate?',
        type: 'select',
        options: [
          { value: 'units', label: 'I know my Total Units (kWh)' },
          { value: 'readings', label: 'I have my Meter Readings' }
        ],
        defaultValue: 'units'
      },
      {
        id: 'totalUnits',
        label: 'Total Units Consumed (kWh)',
        type: 'number',
        defaultValue: 250,
        condition: (inputs) => inputs.calcMode === 'units'
      },
      {
        id: 'previousReading',
        label: 'Previous Meter Reading',
        type: 'number',
        defaultValue: 15400,
        condition: (inputs) => inputs.calcMode === 'readings'
      },
      {
        id: 'currentReading',
        label: 'Current Meter Reading',
        type: 'number',
        defaultValue: 15650,
        condition: (inputs) => inputs.calcMode === 'readings'
      },
      {
        id: 'costPerUnit',
        label: 'Average Cost per Unit (₹)',
        type: 'number',
        defaultValue: 6.50
      },
      {
        id: 'fixedCharges',
        label: 'Fixed Charges / Meter Rent (₹)',
        type: 'number',
        defaultValue: 150
      }
    ]
  };