export const config = {
    id: 'power-converter',
    name: 'Power Converter',
    description: 'Convert power outputs between Watts, Kilowatts, Megawatts, and Horsepower.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Power Value',
        type: 'number',
        defaultValue: 100
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'W', label: 'Watts (W)' },
          { value: 'kW', label: 'Kilowatts (kW)' },
          { value: 'MW', label: 'Megawatts (MW)' },
          { value: 'hp_i', label: 'Horsepower - Mechanical/Imperial (hp)' },
          { value: 'hp_m', label: 'Horsepower - Metric (PS/cv)' }
        ],
        defaultValue: 'kW'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'W', label: 'Watts (W)' },
          { value: 'kW', label: 'Kilowatts (kW)' },
          { value: 'MW', label: 'Megawatts (MW)' },
          { value: 'hp_i', label: 'Horsepower - Mechanical/Imperial (hp)' },
          { value: 'hp_m', label: 'Horsepower - Metric (PS/cv)' }
        ],
        defaultValue: 'hp_i'
      }
    ]
  };