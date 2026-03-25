export const config = {
    id: 'quadratic',
    name: 'Quadratic Formula Calculator',
    description: 'Solve any quadratic equation and find its real or complex roots instantly.',
    category: 'math',
    seoTitle: 'Quadratic Formula Calculator | Solve ax² + bx + c = 0',
    seoDescription: 'Free quadratic equation solver. Calculate real and complex roots, the discriminant, and view step-by-step root types.',
    
    inputs: [
      {
        id: 'a',
        label: 'Coefficient (a)',
        type: 'number',
        defaultValue: 1,
        step: 1
      },
      {
        id: 'b',
        label: 'Coefficient (b)',
        type: 'number',
        defaultValue: 5,
        step: 1
      },
      {
        id: 'c',
        label: 'Coefficient (c)',
        type: 'number',
        defaultValue: 6,
        step: 1
      }
    ]
  };