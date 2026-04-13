export const config = {
    id: 'proportion',
    name: 'Proportion Calculator',
    description: 'Solve proportions with one unknown variable using cross-multiplication (A : B = C : D).',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'Which value do you want to find?',
        type: 'select',
        options: [
          { value: 'findA', label: 'Find A (Numerator 1)' },
          { value: 'findB', label: 'Find B (Denominator 1)' },
          { value: 'findC', label: 'Find C (Numerator 2)' },
          { value: 'findD', label: 'Find D (Denominator 2)' }
        ],
        defaultValue: 'findD'
      },
      {
        id: 'valA',
        label: 'Value A',
        type: 'number',
        defaultValue: 2,
        showIf: (inputs) => inputs.calcMode !== 'findA'
      },
      {
        id: 'valB',
        label: 'Value B',
        type: 'number',
        defaultValue: 4,
        showIf: (inputs) => inputs.calcMode !== 'findB'
      },
      {
        id: 'valC',
        label: 'Value C',
        type: 'number',
        defaultValue: 5,
        showIf: (inputs) => inputs.calcMode !== 'findC'
      },
      {
        id: 'valD',
        label: 'Value D',
        type: 'number',
        defaultValue: 10,
        showIf: (inputs) => inputs.calcMode !== 'findD'
      }
    ]
  };