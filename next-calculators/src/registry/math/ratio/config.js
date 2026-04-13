export const config = {
    id: 'ratio',
    name: 'Ratio Calculator',
    description: 'Simplify ratios, find equivalent ratios, and scale proportions to 1:n or n:1 formats.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'What would you like to do?',
        type: 'select',
        options: [
          { value: 'equivalent', label: 'find an equivalent ratio' },
          { value: 'larger', label: 'make a ratio larger' },
          { value: 'smaller', label: 'make a ratio smaller' },
          { value: 'simplify', label: 'simplify a ratio' },
          { value: 'one_to_n', label: "simplify a ratio to a '1:n' form" },
          { value: 'n_to_one', label: "simplify a ratio to a 'n:1' form" }
        ],
        defaultValue: 'simplify'
      },
      {
        id: 'ratioA',
        label: 'Ratio Part A (Antecedent)',
        type: 'number',
        defaultValue: 15
      },
      {
        id: 'ratioB',
        label: 'Ratio Part B (Consequent)',
        type: 'number',
        defaultValue: 20
      },
      {
        id: 'factor',
        label: 'Multiplier / Divisor',
        type: 'number',
        min: 0.1,
        step: 0.1,
        defaultValue: 2,
        // Only show the factor input if the user is scaling the ratio
        showIf: (inputs) => ['equivalent', 'larger', 'smaller'].includes(inputs.calcMode)
      }
    ]
  };