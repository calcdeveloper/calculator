export const config = {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert numbers between Decimal (Base-10), Binary (Base-2), Hexadecimal (Base-16), and Octal (Base-8).',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Value to Convert',
        type: 'text',
        defaultValue: '255'
      },
      {
        id: 'fromBase',
        label: 'From Base',
        type: 'select',
        options: [
          { value: '10', label: 'Decimal (Base 10)' },
          { value: '2', label: 'Binary (Base 2)' },
          { value: '16', label: 'Hexadecimal (Base 16)' },
          { value: '8', label: 'Octal (Base 8)' }
        ],
        defaultValue: '10'
      },
      {
        id: 'toBase',
        label: 'To Base',
        type: 'select',
        options: [
          { value: '10', label: 'Decimal (Base 10)' },
          { value: '2', label: 'Binary (Base 2)' },
          { value: '16', label: 'Hexadecimal (Base 16)' },
          { value: '8', label: 'Octal (Base 8)' }
        ],
        defaultValue: '2'
      }
    ]
  };