export const config = {
    id: 'torque-converter',
    name: 'Torque Converter',
    description: 'Convert torque values between Newton-meters, Pound-feet, Pound-inches, and Kilogram-force meters.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Torque Value',
        type: 'number',
        defaultValue: 100
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'Nm', label: 'Newton-meters (N·m)' },
          { value: 'ftlb', label: 'Pound-feet (lb·ft)' },
          { value: 'inlb', label: 'Pound-inches (lb·in)' },
          { value: 'kgm', label: 'Kilogram-force meters (kgf·m)' }
        ],
        defaultValue: 'Nm'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'Nm', label: 'Newton-meters (N·m)' },
          { value: 'ftlb', label: 'Pound-feet (lb·ft)' },
          { value: 'inlb', label: 'Pound-inches (lb·in)' },
          { value: 'kgm', label: 'Kilogram-force meters (kgf·m)' }
        ],
        defaultValue: 'ftlb'
      }
    ]
  };