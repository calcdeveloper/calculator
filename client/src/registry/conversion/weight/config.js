export const config = {
    id: 'weight-converter',
    name: 'Weight & Mass Converter',
    description: 'Convert between metric and imperial units of weight and mass.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Value to Convert',
        type: 'number',
        defaultValue: 150
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'mg', label: 'Milligrams (mg)' },
          { value: 'g', label: 'Grams (g)' },
          { value: 'kg', label: 'Kilograms (kg)' },
          { value: 'mt', label: 'Metric Tons (t)' },
          { value: 'oz', label: 'Ounces (oz)' },
          { value: 'lb', label: 'Pounds (lb)' },
          { value: 'st', label: 'Stones (st)' },
          { value: 'uston', label: 'US Short Tons (ton)' }
        ],
        defaultValue: 'lb'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'mg', label: 'Milligrams (mg)' },
          { value: 'g', label: 'Grams (g)' },
          { value: 'kg', label: 'Kilograms (kg)' },
          { value: 'mt', label: 'Metric Tons (t)' },
          { value: 'oz', label: 'Ounces (oz)' },
          { value: 'lb', label: 'Pounds (lb)' },
          { value: 'st', label: 'Stones (st)' },
          { value: 'uston', label: 'US Short Tons (ton)' }
        ],
        defaultValue: 'kg'
      }
    ]
  };