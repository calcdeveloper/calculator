export const config = {
    id: 'logarithm',
    name: 'Logarithm (Log) Calculator',
    description: 'Calculate common logarithms, natural logarithms (ln), and logs with any custom base.',
    category: 'math',
    inputs: [
      {
        id: 'logType',
        label: 'Logarithm Type',
        type: 'select',
        options: [
          { value: 'common', label: 'Common Log (Base 10)' },
          { value: 'natural', label: 'Natural Log (Base e)' },
          { value: 'custom', label: 'Custom Base' }
        ],
        defaultValue: 'common'
      },
      {
        id: 'numberX',
        label: 'Number (x)',
        type: 'number',
        placeholder: 'Enter the value',
        defaultValue: 22
      },
      {
        id: 'baseB',
        label: 'Custom Base (b)',
        type: 'number',
        placeholder: 'Enter custom base',
        defaultValue: 10,
        // This line guarantees the input ONLY appears when "Custom Base" is selected
        showIf: (inputs) => inputs.logType === 'custom'
      }
    ]
  };