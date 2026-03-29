export const config = {
  id: 'cgpa-to-percentage-calculator',
  name: 'CGPA to Percentage Calculator',
  description: 'Quickly convert your CGPA to a percentage based on official board formulas (CBSE, University standards).',
  category: 'education',
  inputs: [
    {
      id: 'cgpa',
      label: 'Enter your CGPA (Max 10)',
      type: 'number',
      defaultValue: 8.5,
      // Constraints to prevent invalid input
      min: 0,
      max: 10,
      step: 0.01 
    },
    {
      id: 'boardType',
      label: 'Select Board/University',
      type: 'select',
      options: [
        { value: 'cbse', label: 'CBSE (Standard 9.5 Multiplier)' },
        { value: 'mu', label: 'Mumbai University (7.1x + 11)' },
        { value: 'aktu', label: 'AKTU / Technical Boards ((CGPA - 0.75) x 10)' },
        { value: 'custom', label: 'Custom Multiplier' }
      ],
      defaultValue: 'cbse'
    },
    {
      id: 'customMultiplier',
      label: 'Enter Custom Multiplier',
      type: 'number',
      defaultValue: 9.5,
      min: 1,
      max: 20,
      condition: (inputs) => inputs.boardType === 'custom'
    }
  ]
};