export const config = {
    id: 'temperature-converter',
    name: 'Temperature Converter',
    description: 'Convert temperatures between Celsius, Fahrenheit, and Kelvin.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Temperature to Convert',
        type: 'number',
        defaultValue: 25
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'c', label: 'Celsius (°C)' },
          { value: 'f', label: 'Fahrenheit (°F)' },
          { value: 'k', label: 'Kelvin (K)' }
        ],
        defaultValue: 'c'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'c', label: 'Celsius (°C)' },
          { value: 'f', label: 'Fahrenheit (°F)' },
          { value: 'k', label: 'Kelvin (K)' }
        ],
        defaultValue: 'f'
      }
    ]
  };