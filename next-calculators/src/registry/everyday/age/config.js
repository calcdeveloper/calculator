export const config = {
    id: 'age-calculator',
    name: 'Age Calculator',
    description: 'Calculate your exact age in years, months, days, and hours based on your date of birth.',
    category: 'calculators',
    inputs: [
      {
        id: 'dob',
        label: 'Date of Birth',
        type: 'date',
        defaultValue: '2000-01-01'
      },
      {
        id: 'targetDate',
        label: 'Age at the Date of',
        type: 'date',
        defaultValue: new Date().toISOString().split('T')[0]
      }
    ]
  };