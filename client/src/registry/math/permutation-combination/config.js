export const config = {
    id: 'permutation-combination',
    name: 'Permutation & Combination Calculator',
    description: 'Calculate permutations (nPr) and combinations (nCr) with or without replacement.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'Calculation Type',
        type: 'select',
        options: [
          { value: 'combination', label: 'Combinations (nCr) - Order does NOT matter' },
          { value: 'permutation', label: 'Permutations (nPr) - Order matters' },
          { value: 'combination_rep', label: 'Combinations with Replacement' },
          { value: 'permutation_rep', label: 'Permutations with Replacement' }
        ],
        defaultValue: 'combination'
      },
      {
        id: 'n',
        label: 'Total Number of Items (n)',
        type: 'number',
        defaultValue: 5,
        min: 0
      },
      {
        id: 'r',
        label: 'Number of Items to Choose (r)',
        type: 'number',
        defaultValue: 3,
        min: 0
      }
    ]
  };