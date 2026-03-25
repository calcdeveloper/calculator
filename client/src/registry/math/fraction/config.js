export const config = {
    id: 'fraction',
    name: 'Fraction Calculator (All-in-One)',
    description: 'Add, subtract, multiply, divide, and simplify fractions. Instantly convert fractions to decimals or decimals to fractions.',
    category: 'math',
    seoTitle: 'Fraction Calculator | Simplify, Fraction to Decimal, Decimal to Fraction',
    seoDescription: 'The ultimate online fraction calculator. Easily add, subtract, multiply, divide, simplify fractions, and convert between fractions, decimals, and mixed numbers.',
    
    inputs: [
      {
        id: 'calcType',
        label: 'Calculator Mode',
        type: 'select',
        defaultValue: 'basic',
        options: [
          { label: 'Basic Fraction Math (+, -, ×, ÷)', value: 'basic' },
          { label: 'Mixed Numbers Math', value: 'mixed' },
          { label: 'Simplify a Fraction', value: 'simplify' },
          { label: 'Fraction to Decimal', value: 'frac2dec' },
          { label: 'Decimal to Fraction', value: 'dec2frac' }
        ]
      },
      // --- DECIMAL TO FRACTION INPUT ---
      {
        id: 'decInput',
        label: 'Enter Decimal Value',
        type: 'number',
        defaultValue: 0.75,
        step: 0.001,
        hidden: (inputs) => inputs.calcType !== 'dec2frac'
      },
      // --- FRACTION 1 INPUTS ---
      {
        id: 'whole1',
        label: 'Whole Number 1',
        type: 'number',
        defaultValue: 1,
        hidden: (inputs) => inputs.calcType !== 'mixed'
      },
      { 
        id: 'num1', 
        label: 'Numerator 1 (Top)', 
        type: 'number', 
        defaultValue: 1,
        hidden: (inputs) => inputs.calcType === 'dec2frac' 
      },
      { 
        id: 'den1', 
        label: 'Denominator 1 (Bottom)', 
        type: 'number', 
        defaultValue: 2,
        hidden: (inputs) => inputs.calcType === 'dec2frac'
      },
      // --- OPERATION DROPDOWN ---
      {
        id: 'operation',
        label: 'Operation',
        type: 'select',
        defaultValue: 'add',
        options: [
          { label: 'Add (+)', value: 'add' },
          { label: 'Subtract (-)', value: 'subtract' },
          { label: 'Multiply (×)', value: 'multiply' },
          { label: 'Divide (÷)', value: 'divide' }
        ],
        hidden: (inputs) => !['basic', 'mixed'].includes(inputs.calcType)
      },
      // --- FRACTION 2 INPUTS ---
      {
        id: 'whole2',
        label: 'Whole Number 2',
        type: 'number',
        defaultValue: 2,
        hidden: (inputs) => inputs.calcType !== 'mixed'
      },
      { 
        id: 'num2', 
        label: 'Numerator 2 (Top)', 
        type: 'number', 
        defaultValue: 1,
        hidden: (inputs) => !['basic', 'mixed'].includes(inputs.calcType)
      },
      { 
        id: 'den2', 
        label: 'Denominator 2 (Bottom)', 
        type: 'number', 
        defaultValue: 4,
        hidden: (inputs) => !['basic', 'mixed'].includes(inputs.calcType)
      }
    ]
  };