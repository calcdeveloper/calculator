export const config = {
    id: 'pythagorean-theorem',
    name: 'Pythagorean Theorem Calculator',
    description: 'Calculate the hypotenuse or a missing leg of a right-angled triangle instantly.',
    category: 'math',
    inputs: [
      {
        id: 'solveFor',
        label: 'Solve For',
        type: 'select',
        options: [
          { value: 'hypotenuse', label: 'Hypotenuse (c)' },
          { value: 'legA', label: 'Leg (a)' },
          { value: 'legB', label: 'Leg (b)' }
        ],
        defaultValue: 'hypotenuse'
      },
      {
        id: 'sideA',
        label: 'Length of Leg (a)',
        type: 'number',
        placeholder: 'Enter leg a',
        // Hide if they are solving for a
        showIf: (inputs) => inputs.solveFor !== 'legA' 
      },
      {
        id: 'sideB',
        label: 'Length of Leg (b)',
        type: 'number',
        placeholder: 'Enter leg b',
        // Hide if they are solving for b
        showIf: (inputs) => inputs.solveFor !== 'legB' 
      },
      {
        id: 'sideC',
        label: 'Length of Hypotenuse (c)',
        type: 'number',
        placeholder: 'Enter hypotenuse c',
        // Hide if they are solving for c
        showIf: (inputs) => inputs.solveFor !== 'hypotenuse' 
      }
    ]
  };