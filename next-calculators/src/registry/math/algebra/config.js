export const config = {
    id: 'algebra',
    name: 'Algebra Solver',
    description: 'Solve linear and quadratic equations step-by-step.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'Select Equation Format',
        type: 'select',
        options: [
          { value: 'linear', label: 'Linear: ax + b = c' },
          { value: 'both_sides', label: 'Variables Both Sides: ax + b = cx + d' },
          { value: 'quadratic', label: 'Quadratic: ax² + bx + c = 0' }
        ],
        defaultValue: 'linear'
      },
      // Inputs for 'a' (used in all)
      {
        id: 'valA', label: 'Value a', type: 'number', defaultValue: 2,
        showIf: () => true
      },
      // Inputs for 'b' (used in all)
      {
        id: 'valB', label: 'Value b', type: 'number', defaultValue: 5,
        showIf: () => true
      },
      // Inputs for 'c' (used in all)
      {
        id: 'valC', label: 'Value c', type: 'number', defaultValue: 13,
        showIf: () => true
      },
      // Inputs for 'd' (used only in both_sides)
      {
        id: 'valD', label: 'Value d', type: 'number', defaultValue: 7,
        showIf: (inputs) => inputs.calcMode === 'both_sides'
      }
    ]
  };