export const config = {
    id: 'matrix',
    name: 'Matrix Calculator',
    description: 'Add, subtract, multiply, and find the inverse, determinant, transpose, or power of matrices visually.',
    category: 'math',
    inputs: [
      {
        id: 'operation',
        label: 'Operation',
        type: 'select',
        options: [
            { value: 'add', label: 'A + B (Addition)' },
            { value: 'subtract', label: 'A - B (Subtraction)' },
            { value: 'multiply', label: 'A × B (Multiplication)' },
            { value: 'multiply_ba', label: 'B × A (Multiplication)' }, // <-- NEW
            { value: 'swap', label: 'Swap (Output B and A)' },         // <-- NEW
            { value: 'inverse', label: 'Inverse (A⁻¹)' },
            { value: 'determinant', label: 'Determinant |A|' },
            { value: 'transpose', label: 'Transpose (Aᵀ)' },
            { value: 'power', label: 'Power (Aⁿ)' }
          ],
        defaultValue: 'add'
      },
      {
        id: 'powerN',
        label: 'Exponent / Power (n)',
        type: 'number',
        defaultValue: 2,
        // Only show this input if the operation is "power"
        showIf: (inputs) => inputs.operation === 'power'
      },
      {
        id: 'matrixA',
        label: 'Matrix A',
        type: 'matrix_grid',
        defaultValue: '[[0,0,0],[0,0,0],[0,0,0]]'
      },
      {
        id: 'matrixB',
        label: 'Matrix B',
        type: 'matrix_grid',
        defaultValue: '[[0,0,0],[0,0,0],[0,0,0]]',
        // Hide Matrix B entirely for operations that only need Matrix A
        showIf: (inputs) => !['inverse', 'determinant', 'transpose', 'power'].includes(inputs.operation)
      }
    ]
  };