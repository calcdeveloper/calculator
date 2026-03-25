export const config = {
    id: 'scientific',
    name: 'Scientific Calculator',
    description: 'Perform advanced mathematical operations including trigonometry (sin, cos, tan), logarithms, exponents, roots, and factorials.',
    category: 'math',
    seoTitle: 'Scientific Calculator | Trig, Logs, Exponents & Factorials',
    seoDescription: 'Free online scientific calculator. Easily calculate sine, cosine, tangent, logarithms, natural logs, roots, exponents, and factorials.',
    
    inputs: [
      {
        id: 'calcMode',
        label: 'Scientific Operation',
        type: 'select',
        defaultValue: 'trig',
        options: [
          { label: 'Trigonometry (sin, cos, tan, etc.)', value: 'trig' },
          { label: 'Logarithms (log, ln)', value: 'log' },
          { label: 'Powers & Roots (x², √x)', value: 'power' },
          { label: 'Factorial (x!)', value: 'factorial' }
        ]
      },
      // --- TRIGONOMETRY INPUTS ---
      {
        id: 'trigOp',
        label: 'Trig Function',
        type: 'select',
        defaultValue: 'sin',
        options: [
          { label: 'Sine (sin)', value: 'sin' },
          { label: 'Cosine (cos)', value: 'cos' },
          { label: 'Tangent (tan)', value: 'tan' },
          { label: 'Inverse Sine (arcsin)', value: 'asin' },
          { label: 'Inverse Cosine (arccos)', value: 'acos' },
          { label: 'Inverse Tangent (arctan)', value: 'atan' }
        ],
        hidden: (inputs) => inputs.calcMode !== 'trig'
      },
      {
        id: 'angleUnit',
        label: 'Angle Unit',
        type: 'radio',
        defaultValue: 'deg',
        options: [
          { label: 'Degrees (°)', value: 'deg' },
          { label: 'Radians (rad)', value: 'rad' }
        ],
        hidden: (inputs) => inputs.calcMode !== 'trig'
      },
      // --- LOGARITHM INPUTS ---
      {
        id: 'logOp',
        label: 'Logarithm Type',
        type: 'select',
        defaultValue: 'log10',
        options: [
          { label: 'Common Log (Base 10)', value: 'log10' },
          { label: 'Natural Log (ln)', value: 'ln' },
          { label: 'Custom Base Log', value: 'logBase' }
        ],
        hidden: (inputs) => inputs.calcMode !== 'log'
      },
      // --- POWER/ROOT INPUTS ---
      {
        id: 'powerOp',
        label: 'Power/Root Function',
        type: 'select',
        defaultValue: 'power',
        options: [
          { label: 'x to the power of y (xʸ)', value: 'power' },
          { label: 'Square (x²)', value: 'square' },
          { label: 'Square Root (√x)', value: 'sqrt' },
          { label: 'y-th Root of x', value: 'nthRoot' }
        ],
        hidden: (inputs) => inputs.calcMode !== 'power'
      },
      // --- MAIN VALUES ---
      { 
        id: 'num1', 
        label: 'Value (x)', 
        type: 'number', 
        defaultValue: 45,
        dynamicProps: (inputs) => ({
          label: inputs.calcMode === 'trig' ? 'Angle / Value (x)' : 
                 inputs.calcMode === 'factorial' ? 'Integer (x!)' : 'Base Value (x)'
        })
      },
      { 
        id: 'num2', 
        label: 'Secondary Value (y)', 
        type: 'number', 
        defaultValue: 2,
        hidden: (inputs) => {
          const needsSecondValue = 
            (inputs.calcMode === 'log' && inputs.logOp === 'logBase') ||
            (inputs.calcMode === 'power' && ['power', 'nthRoot'].includes(inputs.powerOp));
          return !needsSecondValue;
        },
        dynamicProps: (inputs) => ({
          label: inputs.calcMode === 'log' ? 'Log Base (y)' : 
                 inputs.powerOp === 'power' ? 'Exponent (y)' : 'Root (y)'
        })
      }
    ]
  };