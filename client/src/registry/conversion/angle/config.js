export const config = {
    id: 'angle-converter',
    name: 'Angle Converter',
    description: 'Convert angles between Degrees, Radians, and Gradians with high precision.',
    category: 'converters',
    inputs: [
      {
        id: 'inputValue',
        label: 'Angle Value',
        type: 'number',
        defaultValue: 180
      },
      {
        id: 'fromUnit',
        label: 'From Unit',
        type: 'select',
        options: [
          { value: 'deg', label: 'Degrees (°)' },
          { value: 'rad', label: 'Radians (rad)' },
          { value: 'grad', label: 'Gradians (grad)' }
        ],
        defaultValue: 'deg'
      },
      {
        id: 'toUnit',
        label: 'To Unit',
        type: 'select',
        options: [
          { value: 'deg', label: 'Degrees (°)' },
          { value: 'rad', label: 'Radians (rad)' },
          { value: 'grad', label: 'Gradians (grad)' }
        ],
        defaultValue: 'rad'
      }
    ]
  };