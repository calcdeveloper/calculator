export const config = {
    id: 'percentage-change',
    name: 'Percentage Increase & Decrease Calculator',
    description: 'Calculate the percentage change between two numbers, or find a final value after a percentage increase or decrease.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'What do you want to calculate?',
        type: 'select',
        options: [
          { value: 'findChange', label: 'Find Percentage Change (from Initial & Final)' },
          { value: 'findFinal', label: 'Find Final Value (from Initial & % Change)' }
        ],
        defaultValue: 'findChange'
      },
      // --- MODE 1: FIND CHANGE ---
      {
        id: 'initialValue',
        label: 'Initial Value (V₁)',
        type: 'number',
        defaultValue: 100,
        showIf: (inputs) => inputs.calcMode === 'findChange'
      },
      {
        id: 'finalValue',
        label: 'Final Value (V₂)',
        type: 'number',
        defaultValue: 125,
        showIf: (inputs) => inputs.calcMode === 'findChange'
      },
      // --- MODE 2: FIND FINAL VALUE ---
      {
        id: 'initialValue2',
        label: 'Initial Value',
        type: 'number',
        defaultValue: 100,
        showIf: (inputs) => inputs.calcMode === 'findFinal'
      },
      {
        id: 'changeType',
        label: 'Direction of Change',
        type: 'select',
        options: [
          { value: 'increase', label: 'Increase (+)' },
          { value: 'decrease', label: 'Decrease (-)' }
        ],
        defaultValue: 'decrease',
        showIf: (inputs) => inputs.calcMode === 'findFinal'
      },
      {
        id: 'percentChange',
        label: 'Percentage Change (%)',
        type: 'number',
        min: 0,
        step: 0.1,
        defaultValue: 20,
        showIf: (inputs) => inputs.calcMode === 'findFinal'
      }
    ]
  };