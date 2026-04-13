export const config = {
    id: 'energy-converter',
    name: 'Energy Converter',
    description: 'Convert energy values between Joules, Calories, Kilowatt-hours, and British Thermal Units (BTU).',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Energy Value',
        type: 'number',
        defaultValue: 1
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'J', label: 'Joules (J)' },
          { value: 'kJ', label: 'Kilojoules (kJ)' },
          { value: 'cal', label: 'Calories (cal)' },
          { value: 'kcal', label: 'Kilocalories/Food Cal (kcal)' },
          { value: 'kWh', label: 'Kilowatt-hours (kWh)' },
          { value: 'btu', label: 'BTU (British Thermal Units)' }
        ],
        defaultValue: 'kWh'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'J', label: 'Joules (J)' },
          { value: 'kJ', label: 'Kilojoules (kJ)' },
          { value: 'cal', label: 'Calories (cal)' },
          { value: 'kcal', label: 'Kilocalories/Food Cal (kcal)' },
          { value: 'kWh', label: 'Kilowatt-hours (kWh)' },
          { value: 'btu', label: 'BTU (British Thermal Units)' }
        ],
        defaultValue: 'J'
      }
    ]
  };