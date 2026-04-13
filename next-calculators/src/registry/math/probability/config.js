export const config = {
    id: 'probability',
    name: 'Probability Calculator',
    description: 'Calculate probabilities of single independent events and series of events using percentages.',
    category: 'math',
    inputs: [
      {
        id: 'calcMode',
        label: 'Calculator Mode',
        type: 'select',
        options: [
          { value: 'single', label: 'Probabilities of single events' },
          { value: 'series', label: 'Probabilities for a series of events' }
        ],
        defaultValue: 'single'
      },
      // --- SINGLE EVENTS MODE ---
      {
        id: 'probA',
        label: 'Probability of A: P(A) (%)',
        type: 'number',
        min: 0,
        max: 100,
        step: 0.1,
        defaultValue: 45,
        showIf: (inputs) => inputs.calcMode === 'single'
      },
      {
        id: 'probB',
        label: 'Probability of B: P(B) (%)',
        type: 'number',
        min: 0,
        max: 100,
        step: 0.1,
        defaultValue: 4,
        showIf: (inputs) => inputs.calcMode === 'single'
      },
      {
        id: 'singleTarget',
        label: 'Event to calculate',
        type: 'select',
        options: [
          { value: 'all', label: 'Show all of the above' },
          { value: 'and', label: 'A and B both occurring (A ∩ B)' },
          { value: 'or', label: 'At least one of the events occurs (A ∪ B)' },
          { value: 'xor', label: 'Exactly one of these events occurs (A Δ B)' },
          { value: 'neither', label: 'Neither A nor B occurs' },
          { value: 'notA', label: "A NOT occurring (A')" },
          { value: 'notB', label: "B NOT occurring (B')" }
        ],
        defaultValue: 'all',
        showIf: (inputs) => inputs.calcMode === 'single'
      },
      // --- SERIES OF EVENTS MODE ---
      {
        id: 'eventToTest',
        label: 'Event to test',
        type: 'select',
        options: [
          { value: 'always', label: 'A always occurring' },
          { value: 'never', label: 'A never occurring' },
          { value: 'atLeastOne', label: 'A occurring at least once' },
          { value: 'alwaysB', label: 'B always occurring' },
          { value: 'neverB', label: 'B never occurring' },
          { value: 'atLeastOneB', label: 'B occurring at least once' }
        ],
        defaultValue: 'always',
        showIf: (inputs) => inputs.calcMode === 'series'
      },
      {
        id: 'seriesProb',
        label: 'Probability (of A or B, depending on selection)',
        type: 'number',
        min: 0,
        max: 100,
        step: 0.1,
        defaultValue: 40,
        showIf: (inputs) => inputs.calcMode === 'series'
      },
      {
        id: 'trials',
        label: 'Number of trials',
        type: 'number',
        min: 1,
        step: 1,
        defaultValue: 3,
        showIf: (inputs) => inputs.calcMode === 'series'
      }
    ]
  };